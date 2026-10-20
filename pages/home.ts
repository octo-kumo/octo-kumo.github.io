import type { PageData } from "../framework/types";
import { docTitle, displayDocDates } from "../framework/content";
import { collectFeedDocs, sortFeedEntries } from "../framework/feed";
import { cacheVer } from "../framework/ssg";
import { readFileSync } from "node:fs";
import yaml from "js-yaml";
import pug from "pug";

const tpl = pug.compileFile("templates/home.pug");

const externalLinks = [
  { name: "Portfolio", url: "/portfolio/", desc: "3D Three.js portfolio with project showcase", icon: "◉", opener: true },
  { name: "Tools", url: "https://utilbox.yun.ng/", desc: "Binary Search, Character Gen, Y Playground, Hanzi Recognizer, Depth Lathe", icon: "⚙" },
  { name: "GitHub", url: "https://github.com/octo-kumo", desc: "Source for most of the projects above", icon: "⌘" },
];

const PAGE_SIZE = 5;

// ─── Projects showcase (shared data with the 3D portfolio) ───
// portfolio/src/data/projects.yaml is the single source of truth.
// Flags: `hidden: true` (never listed), `home: false` (portfolio only, kept
// off the homepage carousel).
interface RawProject {
  name: string;
  desc?: string;
  year?: string | number;
  langs?: string[];
  keys?: string[];
  github?: string;
  link?: string | Record<string, string>;
  image?: string;
  video?: string;
  hidden?: boolean;
  home?: boolean;
}

export interface ShowcaseProject {
  name: string;
  year: string;
  desc: string;
  tags: string[];
  href: string;
  links: { label: string; url: string; kind: string }[];
  image?: string;
  kind: "image" | "video" | "text";
  hue: number;
}

function loadProjects(): RawProject[] {
  try {
    return (yaml.load(readFileSync("portfolio/src/data/projects.yaml", "utf8")) as RawProject[]) || [];
  } catch (e) {
    console.warn(`   ⚠ projects.yaml unreadable — homepage showcase empty: ${e}`);
    return [];
  }
}

// Stable per-project hue (name hash) — tints text-only cards and glows
function hueOf(s: string): number {
  let h = 0;
  for (const c of s) h = (h * 31 + c.codePointAt(0)!) >>> 0;
  return h % 360;
}

// First paragraph, minus a leading bare URL line, capped for the card
function shortDesc(desc = ""): string {
  const para = desc.replace(/^\s*https?:\/\/\S+\s*/, "").split(/\n\s*\n|\n/)[0].trim();
  return para.length > 220 ? para.slice(0, 219).trimEnd() + "…" : para;
}

function toShowcase(p: RawProject): ShowcaseProject {
  const link = typeof p.link === "string" ? p.link : undefined;
  const github = p.github ? `https://github.com/${p.github}` : undefined;
  const video = p.video ? `https://www.youtube.com/watch?v=${p.video}` : undefined;
  const isJar = !!link?.endsWith(".jar");
  const links: ShowcaseProject["links"] = [];
  if (link) links.push({ label: isJar ? "download" : "visit", url: link, kind: isJar ? "jar" : "link" });
  if (github) links.push({ label: "code", url: github, kind: "github" });
  if (video) links.push({ label: "video", url: video, kind: "video" });
  const image = p.image || (p.video ? `https://i.ytimg.com/vi/${p.video}/hqdefault.jpg` : undefined);
  return {
    name: p.name,
    year: String(p.year ?? ""),
    desc: shortDesc(p.desc),
    tags: [...(p.langs || []), ...(p.keys || [])].map((t) => t.toLowerCase()).filter((t, i, a) => a.indexOf(t) === i).slice(0, 4),
    // Card click target: live link > source > video > portfolio
    href: (!isJar && link) || github || video || link || "/portfolio/",
    links,
    image,
    kind: p.image ? "image" : p.video ? "video" : "text",
    hue: hueOf(p.name),
  };
}

function showcaseProjects(all: RawProject[]): ShowcaseProject[] {
  return all
    .filter((p) => !p.hidden && p.home !== false)
    .map((p) => ({ p, y: String(p.year ?? "") }))
    // Newest first, same ordering as the portfolio gallery (stable sort)
    .sort((a, b) => (a.y === b.y ? 0 : a.y < b.y ? 1 : -1))
    .map(({ p }) => toShowcase(p));
}

// ─── Hero stats (computed from content at build time) ───
function contentStats(docs: any[], projects: RawProject[]) {
  const leaves = docs.filter((d: any) => d.hasContent === true && d.path);
  const under = (p: string) => leaves.filter((d: any) => d.path.startsWith(p + "/"));
  const ctf = under("/ctf");
  const events = new Set(ctf.map((d: any) => d.path.split("/")[2]).filter(Boolean));
  const years = projects
    .map((p) => parseInt(String(p.year ?? ""), 10))
    .filter((y) => !Number.isNaN(y));
  return [
    { n: ctf.length + under("/htb").length, label: "writeups" },
    { n: events.size, label: "CTF events" },
    { n: projects.filter((p) => !p.hidden).length, label: "projects" },
    { n: years.length ? new Date().getFullYear() - Math.min(...years) : 0, label: "years building" },
  ];
}

// Most-used tags → quick-filter chips under the search box
function topTags(docs: any[], count: number): string[] {
  const freq = new Map<string, number>();
  for (const d of docs) for (const t of d.tags || []) {
    const k = String(t).toLowerCase();
    if (!/^[\w-]+$/.test(k)) continue; // search tag: filter is single-token
    if (k === "blog" || k === "writeup") continue; // already type: chips
    freq.set(k, (freq.get(k) || 0) + 1);
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, count).map(([t]) => t);
}

export async function render(data: PageData): Promise<string> {
  const docs = data.docs || [];
  // Shared with RSS/Atom feeds: filter hasContent, map to entry shape
  const contentDocs = collectFeedDocs(docs).map((d) => ({
    ...d,
    dateStr: displayDocDates(d),
  }));
  const rawProjects = loadProjects();
  const latest = sortFeedEntries(contentDocs)[0] as (typeof contentDocs)[number] | undefined;

  return tpl({
    recentDocs: contentDocs.slice(0, PAGE_SIZE),
    externalLinks,
    projects: showcaseProjects(rawProjects),
    stats: contentStats(docs, rawProjects),
    latest,
    quickTags: topTags(contentDocs, 4),
    docTitle,
    displayDocDates,
    allDocsJson: JSON.stringify(contentDocs).replace(/</g, "\\u003c"),
    pageSize: PAGE_SIZE,
    cacheVer: cacheVer(),
  });
}
