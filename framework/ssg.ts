import { type PageData, type RouteDefinition } from "./types";
import { type ContentDoc, docTitle } from "./content";
import { mkdir, writeFile, cp, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import pug from "pug";

// Cache-busting version (set by build.ts at entry, read at render time)
export function cacheVer() { return process.env.CACHE_VER || "0"; }
// Site base URL — single source of truth in ./site-config (SITE_URL env override)
import { siteUrl } from "./site-config";
export { siteUrl } from "./site-config";
// Umami analytics website ID (configurable via UMAMI_WEBSITE_ID env var; empty = analytics disabled)
export function umamiWebsiteId() { return process.env.UMAMI_WEBSITE_ID || ""; }

const MAX_DESC = 160; // meta description / og:description length
const MAX_OG_TITLE = 65; // og:title length

function truncate(s: string, max: number): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + "…";
}

// Guess a description from the raw markdown body (frontmatter stripped,
// markers/links removed, whitespace collapsed) — for docs without one.
function guessDescription(doc: ContentDoc | undefined): string {
  const raw = doc?._bodyRaw || "";
  const plain = raw
    .replace(/^---[\s\S]*?---/, "")
    .replace(/:::ctf-overview[\s\S]*?:::/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*`_\-\[\]!|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return truncate(plain, MAX_DESC);
}

// Compile templates once at module load
const shellTpl = pug.compileFile("templates/shell.pug");
const articleTpl = pug.compileFile("templates/article.pug");

async function defaultShell(content: string, data: PageData): Promise<string> {
  const doc = (data as any).doc;
  const showComments = data.url === "/" || (data.url?.startsWith("/c/") && doc?.body?.html && !doc?.body?.html?.includes(":::ctf-overview"));

  // Guess title (path-derived when no frontmatter title), truncate og:title
  const guessed = doc ? docTitle(doc) : "";
  const rawTitle = (typeof doc?.title === "string" && doc.title) ? doc.title : guessed || data.title;
  const displayTitle = typeof rawTitle === "string" ? rawTitle : String(rawTitle || "");
  const suffix = displayTitle.includes("— 云") || displayTitle === "云" ? "" : " — 云";
  const ogTitle = truncate(displayTitle, MAX_OG_TITLE);

  // Guess + truncate description (frontmatter desc, else body-derived)
  const description = truncate(doc?.description || guessDescription(doc) || data.description || "", MAX_DESC);

  // OG image URL — set by build.ts after OG image generation
  const ogImage = (data as any).ogImage as string | undefined;
  const ogImageAlt = ogImage ? (doc?.title || guessed || data.title || "yun.ng") : undefined;

  // article vs website — routes set data.ogType (content.ts: leaf writeups = article)
  const ogType = (data as any).ogType || "website";

  return shellTpl({
    content,
    title: displayTitle + suffix,
    description,
    ogTitle,
    ogUrl: `${siteUrl()}${data.url || ""}`,
    ogType,
    ogImage,
    ogImageAlt,
    ogTags: doc?.tags || [],
    ogPublishedTime: doc?.created,
    ogModifiedTime: doc?.updated,
    siteBase: siteUrl(),
    showComments,
    year: new Date().getFullYear(),
    cacheVer: cacheVer(),
    umamiWebsiteId: umamiWebsiteId(),
  });
}

// Main build function
export async function build(routes: RouteDefinition[], outDir = "dist") {
  console.log("🔨 Building yun.ng v2...");

  if (!outDir || outDir === "/" || outDir === "." || outDir.startsWith("/")) {
    throw new Error("Invalid output directory: " + outDir);
  }
  await Bun.$`rm -rf ${outDir}`.quiet();
  await mkdir(outDir, { recursive: true });

  for (const route of routes) {
    const data: PageData = {
      title: "云",
      description: "Yun's personal website",
      url: route.path,
      nav: [],
      docs: [],
    };

    const pageHtml = await route.render(data);
    const fullHtml = await defaultShell(pageHtml, data);

    let outPath: string;
    if (route.path === "/" || route.path === "") {
      outPath = join(outDir, "index.html");
    } else {
      outPath = join(outDir, route.path, "index.html");
    }

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, fullHtml);
    console.log(`   ✓ ${route.path} → ${outPath}`);
  }

  console.log("📦 Copying static assets...");
  await cp("public", outDir, { recursive: true });

  // Giscus theme CSS is templated: the iframe loads these files cross-origin
  // from giscus.app, so embedded @font-face URLs must be absolute. The
  // __SITE_URL__ placeholder is replaced with the real site URL at build time.
  const giscusThemes = ["default-dark", "default-light", "papery-dark", "papery-light", "terminal-dark", "terminal-light"];
  for (const theme of giscusThemes) {
    const src = await readFile(`public/giscus/${theme}.css`, "utf8");
    await writeFile(join(outDir, "giscus", `${theme}.css`), src.replaceAll("__SITE_URL__", siteUrl()));
  }

  console.log(`\n✅ Build complete! Output: ${outDir}/`);
}

// Helper to render content pages
export function renderContentPage(doc: ContentDoc, nav: any[]): string {
  if (!doc?.body) return "<p>No content rendered</p>";

  const parentPath = doc.path?.replace(/\/[^/]+$/, "") || "";
  const peers = nav?.filter((d: any) => {
    const pp = d.path?.replace(/\/[^/]+$/, "") || "";
    return pp === parentPath;
  }) || [];
  const meIndex = peers.findIndex((d: any) => d.path === doc.path);
  const prev = peers[(meIndex - 1 + peers.length) % peers.length];
  const next = peers[(meIndex + 1) % peers.length];

  // Build breadcrumbs from doc.path
  const breadcrumbs = buildBreadcrumbs(doc.path, nav);

  return articleTpl({
    doc,
    docTitle,
    tocLinks: doc.body.toc || [],
    prev,
    next,
    breadcrumbs,
  });
}

// Build breadcrumb trail from a content path
// e.g. /ctf/2026-tkbctf5/web/challenge → [Home, CTF, 2026-tkbctf5, web, challenge]
// Categories (no content) are not linked
function buildBreadcrumbs(path: string, nav: any[]): { label: string; href: string | null }[] {
  const segments = path.split("/").filter(Boolean);
  const crumbs: { label: string; href: string | null }[] = [
    { label: "Home", href: "/" },
  ];

  let currentPath = "";
  for (let i = 0; i < segments.length; i++) {
    currentPath += "/" + segments[i];
    const navItem = nav.find((d: any) => d.path === currentPath);
    const hasContent = !!navItem?.hasContent;
    const label = navItem?.title || segments[i].replace(/-/g, " ");

    // Last segment is the current page — not linked
    if (i === segments.length - 1) {
      crumbs.push({ label, href: null });
    } else if (hasContent) {
      crumbs.push({ label, href: "/c" + currentPath });
    } else {
      // Category without content — not linked
      crumbs.push({ label, href: null });
    }
  }

  return crumbs;
}
