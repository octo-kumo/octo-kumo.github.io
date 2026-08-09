import fm from "front-matter";
import type { TocLink } from "./markdown";

export { displayDatetime, displayDocDates, type TocLink } from "./markdown";

export interface ContentDoc {
  path: string;       // e.g. "/ctf/2026-tkbctf5/misc/linear-dos"
  title?: string;
  description?: string;
  tags?: string[];
  created?: string;   // ISO date
  updated?: string;   // ISO date
  solves?: number;
  points?: number;
  rank?: number;
  team?: string;
  readingTime?: {
    text: string;
    minutes: number;
  };
  body?: {
    html: string;
    toc: TocLink[];
  };
  _bodyRaw?: string; // raw markdown body (without frontmatter), stored during scan to avoid re-reading
  _fileName?: string; // original filename (no .md, no slugify) — e.g. "Intergalactic Bounty"
}

export interface ContentNavigationItem {
  path: string;
  title: string;
  description?: string;
  snippet?: string;
  created?: string;
  updated?: string;
  tags?: string[];
  solves?: number;
  points?: number;
  rank?: number;
  team?: string;
  children?: ContentNavigationItem[];
  hasContent?: boolean;
}

// Read all content docs from the filesystem
export async function queryAllDocs(): Promise<{
  nav: ContentNavigationItem[];
  flat: ContentNavigationItem[];
  docs: Map<string, ContentDoc>;
}> {
  const docs = new Map<string, ContentDoc>();
  const dirs = ["content/ctf", "content/blog", "content/htb", "content/pages"];

  for (const dir of dirs) {
    await scanDir(dir, docs);
  }

  const nav = buildNav(docs);
  const flat = flatten(nav);

  return { nav, flat, docs };
}

async function scanDir(dir: string, docs: Map<string, ContentDoc>) {
  try {
    const entries = Array.from(new Bun.Glob("**/*.md").scanSync({ cwd: dir, absolute: true }));
    for (const file of entries) {
      const content = await Bun.file(file).text();
      const doc = parseDoc(file, content);
      if (doc) docs.set(doc.path, doc);
    }
  } catch (e) {
    // Directory might not exist (e.g., content/pages)
    if ((e as any)?.code !== "ENOENT") console.warn("scanDir error for", dir, e);
  }
}

function slugify(s: string): string {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function parseDoc(filepath: string, raw: string): ContentDoc | null {
  const { attributes, body } = parseFrontmatter(raw);
  if (!attributes) return null;

  // Derive path from filesystem, slugify each segment
  let rel = filepath.replace(/^.*content\//, "").replace(/\.md$/, "");
  let segments = rel.split("/").map(s => s === "index" ? s : slugify(s));

  // Remove "index" from end of CTF paths
  if (segments[segments.length - 1] === "index") segments.pop();
  const path = "/" + segments.join("/");

  // Original filename before slugification — title fallback source.
  // For "…/Intergalactic Bounty/index.md" the meaningful name is the
  // parent dir ("Intergalactic Bounty"); for "Psymin.md" it's "Psymin".
  let relSegs = rel.split("/");
  if (relSegs[relSegs.length - 1] === "index") relSegs.pop();
  const fileName = relSegs[relSegs.length - 1] || "";

  // Compute word count
  const words = body.trim().split(/\s+/).length;
  const readingTime = {
    text: `${Math.ceil(words / 200)} min read`,
    minutes: Math.ceil(words / 200),
  };

  const doc: ContentDoc = {
    path,
    title: attributes.title,
    description: attributes.description,
    tags: attributes.tags,
    created: attributes.created,
    updated: attributes.updated || attributes.created,
    solves: attributes.solves,
    points: attributes.points,
    rank: attributes.rank,
    team: attributes.team,
    readingTime,
    _bodyRaw: body,
    _fileName: fileName,
  };

  return doc;
}

function parseFrontmatter(raw: string): { attributes: any; body: string } {
  try {
    const parsed = fm<Record<string, any>>(raw);
    return { attributes: parsed.attributes || {}, body: parsed.body };
  } catch (e) {
    console.warn("Frontmatter parse failure:", e);
    return { attributes: {}, body: raw };
  }
}

function buildNav(docs: Map<string, ContentDoc>): ContentNavigationItem[] {
  const root: ContentNavigationItem[] = [];

  // Group by type
  const ctfItems: ContentNavigationItem[] = [];
  const blogItems: ContentNavigationItem[] = [];
  const htbItems: ContentNavigationItem[] = [];

  for (const [path, doc] of docs) {
    const item: ContentNavigationItem = {
      path,
      title: guessTitle(doc),
      description: doc.description,
      snippet: doc.description || (doc._bodyRaw ? doc._bodyRaw.replace(/[#>*`_\-\[\]!]/g, "").replace(/\s+/g, " ").trim().slice(0, 120) : ""),
      created: doc.created,
      updated: doc.updated,
      tags: doc.tags,
      solves: doc.solves,
      points: doc.points,
      rank: doc.rank,
      team: doc.team,
      hasContent: !!(doc._bodyRaw && doc._bodyRaw.trim().length > 0),
    };

    if (doc.tags?.includes("blog") || path.startsWith("/blog/")) blogItems.push(item);
    else if (path.startsWith("/htb/")) htbItems.push(item);
    else if (path.startsWith("/ctf/")) ctfItems.push(item);
  }

  // Sort blog by date descending
  blogItems.sort((a, b) => -(a.created || "").localeCompare(b.created || ""));

  // Build CTF hierarchy: /ctf/event/category/challenge
  const ctfTree = buildCtfHierarchy(ctfItems);
  const htbTree = buildCtfHierarchy(htbItems); // similar structure

  // Assemble
  if (blogItems.length > 0) {
    root.push({
      path: "/blog",
      title: "Blog",
      children: blogItems,
    });
  }
  if (ctfTree.length > 0) {
    root.push({
      path: "/ctf",
      title: "CTF Writeups",
      hasContent: !!(docs.get("/ctf")?._bodyRaw && docs.get("/ctf")!._bodyRaw!.trim().length > 0),
      children: ctfTree,
    });
  }
  if (htbTree.length > 0) {
    root.push({
      path: "/htb",
      title: "HackTheBox",
      children: htbTree,
    });
  }

  return root;
}

function buildCtfHierarchy(items: ContentNavigationItem[]): ContentNavigationItem[] {
  const tree = new Map<string, ContentNavigationItem>();

  for (const item of items) {
    const parts = item.path.split("/").filter(Boolean);
    // parts: ["ctf", "2026-tkbctf5", "misc", "linear-dos"] or ["htb", "box-name"]

    let currentPath = "";

    for (let i = 1; i < parts.length; i++) {
      currentPath += "/" + parts[i];
      if (!tree.has(currentPath)) {
        const node: ContentNavigationItem = {
          path: currentPath,
          title: i === parts.length - 1 ? item.title : (parts[i].charAt(0).toUpperCase() + parts[i].slice(1)),
          children: [],
        };
        tree.set(currentPath, node);
      }
    }
  }

  // Nest children
  for (const [path, node] of tree) {
    const parentPath = path.replace(/\/[^/]+$/, "");
    if (parentPath && tree.has(parentPath)) {
      const parent = tree.get(parentPath)!;
      if (!parent.children) parent.children = [];
      parent.children!.push(node);
    }
  }

  // Return top-level nodes
  const topLevel: ContentNavigationItem[] = [];
  for (const [path, node] of tree) {
    const parentPath = path.replace(/\/[^/]+$/, "");
    if (!parentPath || !tree.has(parentPath)) {
      topLevel.push(node);
    }
  }

  // Merge leaf data from original items
  // Tree paths are relative (e.g. "/2026-tkbctf5"), original items have full paths (e.g. "/ctf/2026-tkbctf5")
  // Determine the prefix from the first item
  const prefix = items.length > 0 ? items[0].path.split("/").slice(0, 2).join("/") : ""; // e.g. "/ctf" or "/htb"
  const itemMap = new Map(items.map(i => [i.path, i]));
  for (const [path, node] of tree) {
    const fullPath = prefix + path;
    // Ensure all nodes have full paths
    node.path = fullPath;
    const original = itemMap.get(fullPath);
    if (original) {
      Object.assign(node, original);
    }
  }

  // Recursively sort all levels by created date (desc, undefined at bottom)
  function sortRecursive(nodes: ContentNavigationItem[]): ContentNavigationItem[] {
    nodes.sort((a, b) => {
      const da = a.created ? new Date(a.created).getTime() : 0;
      const db = b.created ? new Date(b.created).getTime() : 0;
      if (!da && db) return 1;
      if (da && !db) return -1;
      if (da !== db) return db - da;
      return (a.title || "").localeCompare(b.title || "");
    });
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        sortRecursive(node.children);
      }
    }
    return nodes;
  }

  return sortRecursive(topLevel);
}

function flatten(items: ContentNavigationItem[]): ContentNavigationItem[] {
  const result: ContentNavigationItem[] = [];
  for (const item of items) {
    result.push(item);
    if (item.children) result.push(...flatten(item.children));
  }
  return result;
}

// Title guessing — mirrors the original logic
export function guessTitle(item: { title?: string | Date; path?: string; tags?: string[]; _fileName?: string }): string {
  if (item.title) {
    const titleStr = item.title instanceof Date ? item.title.toISOString().slice(0, 10) : String(item.title);
    if (item.tags?.includes("blog") && /^\d{4}-\d{2}-\d{2}$/.test(titleStr)) {
      return new Date(titleStr).toLocaleDateString("en-US", {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
      });
    }
    return titleStr;
  }
  // Prefer the original filename (e.g. "Intergalactic Bounty") over the
  // slugified path segment (e.g. "intergalactic-bounty")
  if (item._fileName) return item._fileName;
  return item.path?.split("/").pop() || "Unknown";
}

// Display title for a doc: string frontmatter title, else Date formatted via
// guessTitle, else path-derived guess. Never the raw JS Date string.
export function docTitle(item: { title?: string | Date; path?: string; tags?: string[]; _fileName?: string }): string {
  if (item.title && typeof item.title === "string") return item.title;
  return guessTitle(item);
}
