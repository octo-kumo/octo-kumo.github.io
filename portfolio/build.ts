// build.ts — Yun's Portfolio build system (Bun + Pug, no framework).
//
//   bun build.ts             → dist/ (static site)
//   BASE_PATH=foo bun build.ts → dist/ with path prefix "/foo" (default "portfolio", "" = site root)
//   SITE_URL=https://...     → "Back to main site" target (default: framework/site-config.ts)
//   WRITEUPS_URL=https://... → writeups search index (default: <SITE_URL>/search-index.json)
//   VIEWS_URL=https://...    → pageview counter API (default https://views.yun.ng)
//
// Fonts, images and the 3D font JSON are shared from v2's public/ (site root).

import { renderFile } from "pug";
import yaml from "js-yaml";
import { mkdir, copyFile, readdir, rm, unlink, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { siteUrl } from "../framework/site-config";

/* ── config ─────────────────────────────────────────────────────────────── */
const BASE_PATH = process.env.BASE_PATH ?? "portfolio";
const basePath = BASE_PATH ? `/${BASE_PATH.replace(/^\/+|\/+$/g, "")}` : "";
// Single source of truth: framework/site-config.ts (SITE_URL env override).
// "Back to main site" target — the main site this portfolio belongs to.
const SITE_URL = siteUrl();
const WRITEUPS_URL = process.env.WRITEUPS_URL ?? `${SITE_URL}/search-index.json`;
const VIEWS_URL = process.env.VIEWS_URL ?? "https://views.yun.ng";
const CACHE_VER = Date.now().toString(36);

console.log(`config: basePath=${basePath || "/"} site=${SITE_URL} writeups=${WRITEUPS_URL} views=${VIEWS_URL}`);

/* ── data (YAML) ────────────────────────────────────────────────────────── */
const projects = yaml.load(readFileSync("src/data/projects.yaml", "utf8")) as unknown[];
const writeups = yaml.load(readFileSync("src/data/writeups.yaml", "utf8")) as unknown[];
console.log(`data: ${projects.length} projects, ${writeups.length} fallback writeups`);

/* ── contact icons (ContactSection.vue, verbatim) ───────────────────────── */
const githubIcon =
  '<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>';
const discordIcon =
  '<svg fill="#ffffff" width="32" height="32" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>';
const linkedinIcon =
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"/><path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"/><path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"/></svg>';
const mailIcon =
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>';

/* ── html (template) ─────────────────────────────────────────────────────── */
const dataJson = JSON.stringify({ projects, writeups }).replace(/</g, "\\u003c");

/* ── clean dist/ first (Bun.build output would otherwise be wiped) ─────── */
await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });

/* ── bundle client JS (three + powerglitch + custom) ────────────────────── */
const out = await Bun.build({
  entrypoints: ["src/scripts/main.ts"],
  outdir: "dist/assets",
  naming: "app.js",
  target: "browser",
  format: "esm",
  minify: false,
  sourcemap: false,
  define: {
    __CONFIG__: JSON.stringify({
      basePath,
      siteUrl: SITE_URL,
      writeupsUrl: WRITEUPS_URL,
      viewsUrl: VIEWS_URL,
    }),
  },
});
if (!out.success) {
  console.error(out.logs);
  process.exit(1);
}

// content-addressed filename → cache-proof, immutable asset
const bundle = await Bun.file("dist/assets/app.js").arrayBuffer();
const jsName = `app-${createHash("sha256").update(new Uint8Array(bundle)).digest("hex").slice(0, 12)}.js`;
await Bun.write("dist/assets/" + jsName, bundle);
await unlink("dist/assets/app.js");

/* ── html (rendered after the bundle so jsName can be inlined) ──────────── */
const html = renderFile("src/index.pug", {
  basePath,
  siteUrl: SITE_URL,
  viewsUrl: VIEWS_URL,
  cacheVer: CACHE_VER,
  jsName,
  dataJson,
  githubIcon,
  discordIcon,
  linkedinIcon,
  mailIcon,
});

/* ── assemble dist/ ──────────────────────────────────────────────────────── */
await writeFile("dist/index.html", html);
await writeFile("dist/assets/portfolio.css", readFileSync("src/styles/portfolio.css", "utf8"));

// Shared assets come from v2's public/ (served at the site root): favicon,
// apple-touch-icon, /img/pfp.square.small.jpg and /fonts/* (incl. the 3D
// typeface space_font.json). The portfolio ships no assets of its own.

// local writeup-index fixture for testing (gitignored; refresh from yun-ng-v2/dist)
if (existsSync("public/search-index.json")) {
  await copyFile("public/search-index.json", "dist/search-index.json");
  console.log("  serving local search-index.json fixture");
}

await writeFile("dist/build.txt", [
  `built ${new Date().toISOString()}`,
  `basePath: ${basePath || "/"}`,
  `siteUrl: ${SITE_URL}`,
  `writeupsUrl: ${WRITEUPS_URL}`,
  `viewsUrl: ${VIEWS_URL}`,
  `projects: ${projects.length}`,
  `fallback writeups: ${writeups.length}`,
  `cacheVer: ${CACHE_VER}`,
  `bundle: ${jsName} (${(Bun.file("dist/assets/" + jsName).size / 1024).toFixed(0)}KB)`,
  `portfolio.css: ${(Bun.file("dist/assets/portfolio.css").size / 1024).toFixed(0)}KB`,
].join("\n") + "\n");

console.log(`✓ built dist/ (${await dirSize("dist")})`);

/* ── helpers ─────────────────────────────────────────────────────────────── */
async function dirSize(dir: string): Promise<string> {
  let total = 0;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) total += Number((await dirSize(p)).replace(/[^\d.]/g, ""));
    else total += Bun.file(p).size;
  }
  return total > 1024 * 1024 ? `${(total / 1024 / 1024).toFixed(2)}MB` : `${(total / 1024).toFixed(0)}KB`;
}
