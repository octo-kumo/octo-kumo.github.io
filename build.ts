import { build as buildSSG, siteUrl } from "./framework/ssg";
import type { RouteDefinition } from "./framework/types";
import { queryAllDocs } from "./framework/content";
import { renderMarkdown } from "./framework/markdown";
import { buildSearchIndex } from "./framework/search-index";
import { generateOGImage, inferPageType, type OGDoc } from "./framework/og-image";
import { docTitle } from "./framework/content";
import {
  loadManifest,
  getRendererHash,
  getContentHash,
  getImageFilename,
  processOGImage,
  saveManifestIfChanged,
} from "./framework/og-cache";
import { benchmarkOGGeneration } from "./framework/og-debug";
import { dirSize, fmt as fmtSize } from "./framework/build-report";
import { mkdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";

// Cache-busting version for static assets (CSS/JS)
process.env.CACHE_VER = Date.now().toString(36);
// Site base URL lives in framework/site-config.ts (SITE_URL env override) —
// og:image/canonical URLs all derive from siteUrl() at render time
// Umami analytics website ID (overridable via UMAMI_WEBSITE_ID env var)
process.env.UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID || "fd089b30-9952-41b0-a817-fce38fefae17";
// Debug mode: enables OG layout checks/benchmarks, disables minification
const DEBUG = process.env.DEBUG === "1" || process.env.DEBUG_OG === "1";

// ─── Page Templates ───
import { render as renderHome } from "./pages/home";
import { render as renderContent } from "./pages/content";

async function preRenderDocs(docs: any) {
  console.log("Rendering markdown bodies...");

  // Eagerly initialize shiki + marked BEFORE parallel work
  await renderMarkdown("# init\n```js\n1\n```");
  console.log("   Shiki initialized");

  // Use _bodyRaw stored during scanDir (no re-reading files)
  const entries = Array.from(docs.docs.values()).filter((d: any) => d._bodyRaw);

  // Render in parallel batches
  const BATCH = 50;
  for (let i = 0; i < entries.length; i += BATCH) {
    const batch = entries.slice(i, i + BATCH);
    await Promise.all(batch.map(async (doc: any) => {
      doc.body = await renderMarkdown(doc._bodyRaw);
    }));
  }
  console.log(`   ${entries.length} documents rendered`);
}

// ─── OG Image Generation ───

/**
 * Compute OG image URLs for all pages (without generating the actual images).
 * URLs are deterministic from the content hash, so they can be embedded in HTML
 * before the SSG build wipes dist/. Actual PNG generation happens in generateOGImages().
 */
function prepareOGImages(docs: {
  flat: any[];
  docs: Map<string, any>;
}): Map<string, string> {
  const SITE_BASE = siteUrl();
  const ogImageMap = new Map<string, string>();

  // Homepage
  ogImageMap.set("/", `${SITE_BASE}/og/${getImageFilename("/")}`);

  // Content index
  ogImageMap.set("/c", `${SITE_BASE}/og/${getImageFilename("/c")}`);

  // All docs with content
  for (const [path, doc] of docs.docs) {
    if (!doc._bodyRaw || doc._bodyRaw.trim().length === 0) continue;
    const routePath = `/c${path}`;
    ogImageMap.set(routePath, `${SITE_BASE}/og/${getImageFilename(path)}`);
  }

  return ogImageMap;
}

/**
 * Generate OG images for all content pages.
 * Uses content-hash + renderer-hash caching to skip unchanged pages.
 * Images are written to dist/og/. Manifest is stored in .og-cache/manifest.json.
 */
async function generateOGImages(docs: {
  flat: any[];
  docs: Map<string, any>;
}): Promise<{ generated: number; skipped: number }> {
  console.log("🖼️  Generating OG images...");

  const rendererHash = getRendererHash();
  const ogDir = "dist/og";
  await mkdir(ogDir, { recursive: true });

  // Collect all pages that need OG images
  const ogPages: Array<{ contentPath: string; doc: OGDoc; pageType: ReturnType<typeof inferPageType> }> = [];

  // Homepage
  ogPages.push({
    contentPath: "/",
    doc: { title: "云 — Yun", description: "CTF writeups, HackTheBox, and blog posts by Yun" },
    pageType: "home",
  });

  // Content index
  ogPages.push({
    contentPath: "/c",
    doc: { title: "Content Index", description: "Browse all CTF writeups, HackTheBox, and blog posts" },
    pageType: "directory",
  });

  // All docs with content
  for (const [path, doc] of docs.docs) {
    if (!doc._bodyRaw || doc._bodyRaw.trim().length === 0) continue;
    const pageType = inferPageType(path);
    ogPages.push({
      contentPath: path,
      doc: {
        title: docTitle(doc),
        description: doc.description,
        tags: doc.tags,
        created: doc.created,
        solves: doc.solves,
        points: doc.points,
        rank: doc.rank,
        team: doc.team,
        path: doc.path,
        _bodyRaw: doc._bodyRaw,
      },
      pageType,
    });
  }

  // Generate images with caching (load manifest once, pass through)
  let generated = 0;
  let skipped = 0;
  const manifest = loadManifest();

  for (const page of ogPages) {
    const contentHash = getContentHash(page.doc);

    try {
      const result = await processOGImage(
        manifest,
        page.contentPath,
        contentHash,
        rendererHash,
        () => generateOGImage(page.doc, page.pageType),
      );
      if (result.generated) {
        generated++;
      } else {
        skipped++;
      }
    } catch (e) {
      console.warn(`   ⚠ OG image failed for ${page.contentPath}: ${e}`);
    }
  }

  // Prune + save manifest once at the end
  await saveManifestIfChanged(manifest, ogPages.map((p) => p.contentPath));

  console.log(`   ✓ ${generated} generated, ${skipped} cached (skipped)`);

  // Benchmark in debug mode
  if (DEBUG || process.env.BENCH_OG === "1") {
    console.log("📊 Benchmarking OG image generation...");
    const sampleDocs = ogPages.slice(0, Math.min(20, ogPages.length)).map((p) => p.doc);
    const bench = await benchmarkOGGeneration(sampleDocs);
    console.log(`   Total: ${bench.total} images in ${bench.totalTime.toFixed(0)}ms`);
    console.log(`   Average: ${bench.average.toFixed(1)}ms, Min: ${bench.min.toFixed(1)}ms, Max: ${bench.max.toFixed(1)}ms`);
  }

  return { generated, skipped };
}

async function main() {
  const buildStartEpoch = Date.now();
  const phases: { name: string; ms: number }[] = [];
  let ogGenerated = 0;
  let ogSkipped = 0;

  const t0 = performance.now();
  const docs = await queryAllDocs();
  console.log(`Loaded ${docs.flat.length} content documents`);
  await preRenderDocs(docs);
  phases.push({ name: "Load & parse content", ms: performance.now() - t0 });

  // Generate content routes
  const contentRoutes: RouteDefinition[] = [];
  const seen = new Set<string>();

  for (const doc of docs.flat) {
    if (!doc.path || doc.path === "/") continue;

    // Skip category-only pages (no body content)
    const fullDoc = docs.docs.get(doc.path)
      || (() => { for (const [k, v] of docs.docs) { if (k.endsWith(doc.path)) return v; } return undefined; })();
    if (!fullDoc || !fullDoc._bodyRaw || fullDoc._bodyRaw.trim().length === 0) continue;

    const route = `/c${doc.path}`;
    if (!seen.has(route)) {
      seen.add(route);
      contentRoutes.push({
        path: route,
        render: async (data) => {
          data.url = route;
          data.doc = fullDoc || undefined;
          data.docs = docs.flat;
          data.nav = docs.nav;
          return renderContent(data);
        },
      });
    }

    // Also generate directory listing pages for intermediate paths
    const segments = doc.path.split("/").filter(Boolean);
    for (let i = 1; i < segments.length; i++) {
      const dirPath = "/" + segments.slice(0, i).join("/");
      const dirRoute = `/c${dirPath}`;
      if (!seen.has(dirRoute) && dirPath) {
        // Check if this directory has its own content
        const dirDoc = docs.docs.get(dirPath)
          || (() => { for (const [k, v] of docs.docs) { if (k.endsWith(dirPath)) return v; } return undefined; })();
        // Skip category-only pages (no content, just a directory listing)
        // Category pages like /ctf/event/misc have no index.md
        if (!dirDoc) {
          // No doc at all — only generate if it's a section root (e.g., /ctf, /blog)
          const segCount = dirPath.split("/").filter(Boolean).length;
          if (segCount >= 2) continue; // /ctf/event — skip if no doc
        } else if (!dirDoc._bodyRaw || dirDoc._bodyRaw.trim().length === 0) {
          // Doc exists but has no body — skip if it's a category (3+ segments)
          const segCount = dirPath.split("/").filter(Boolean).length;
          if (segCount >= 3) continue; // /ctf/event/category — skip
        }
        seen.add(dirRoute);
        contentRoutes.push({
          path: dirRoute,
          render: async (data) => {
            data.url = dirRoute;
            data.docs = docs.flat;
            data.nav = docs.nav;
            data.doc = dirDoc || undefined;
            return renderContent(data);
          },
        });
      }
    }
  }

  const routes: RouteDefinition[] = [
    // Homepage
    {
      path: "/",
      render: async (data) => {
        data.docs = docs.flat;
        data.nav = docs.nav;
        return renderHome(data);
      },
    },
    // Content index
    {
      path: "/c",
      render: async (data) => {
        data.url = "/c";
        data.docs = docs.flat;
        data.nav = docs.nav;
        return renderContent(data);
      },
    },
    // All content routes
    ...contentRoutes,
    // Sitemap
    {
      path: "/sitemap",
      render: () => {
        const allUrls = ["/", "/c", ...Array.from(seen)];
        const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        return `<h1>Sitemap</h1><ul>${allUrls.map(u => `<li><a href="${esc(u)}">${esc(u)}</a></li>`).join("")}</ul>`;
      },
    },
  ];

  console.log(`Generating ${routes.length} routes...`);

  // ─── OG Image Preparation ───
  // Compute OG image URLs (deterministic from content hash) and pass to routes.
  // Actual PNG generation happens after SSG build (since SSG wipes dist/).
  const ogImageMap = prepareOGImages(docs);

  // Pass OG image URLs to routes
  for (const route of routes) {
    const ogUrl = ogImageMap.get(route.path);
    if (ogUrl) {
      const originalRender = route.render;
      route.render = async (data) => {
        data.ogImage = ogUrl;
        return originalRender(data);
      };
    }
  }

  const t1 = performance.now();
  await buildSSG(routes, "dist");
  phases.push({ name: "SSG build (HTML)", ms: performance.now() - t1 });

  // ─── Font subsetting (automatic charset detection) ───
  // Scans the built pages + UI source for used characters, subsets the full
  // latin woff2 sources into public/fonts/, regenerates fonts.css. Re-copies
  // into dist (buildSSG already copied public → dist with the old fonts).
  const tFonts = performance.now();
  const { subsetFonts } = await import("./framework/fonts");
  const fontResult = await subsetFonts();
  await cp("public/fonts", "dist/fonts", { recursive: true });
  await cp("public/fonts.css", "dist/fonts.css");
  if (fontResult.changed.length > 0) {
    console.log(`   ✂ fonts subset → ${fontResult.changed.join(", ")} (${fmtSize(fontResult.bytesBefore)} → ${fmtSize(fontResult.bytesAfter)})`);
  } else {
    console.log("   ✂ fonts unchanged (no new characters)");
  }
  phases.push({ name: "Font subsetting", ms: performance.now() - tFonts });

  // ─── OG Image Generation (after dist/ is created by SSG) ───
  const t2 = performance.now();
  const ogResult = await generateOGImages(docs);
  ogGenerated = ogResult.generated;
  ogSkipped = ogResult.skipped;
  phases.push({ name: "OG image generation", ms: performance.now() - t2 });

  // Generate sitemap.xml (reuse the same URL set as the HTML sitemap)
  const sitemapUrls = ["/", "/c", ...Array.from(seen)];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url><loc>https://yun.ng${u}</loc></url>`).join("\n")}
</urlset>`;
  await Bun.write("dist/sitemap.xml", sitemap);
  console.log("   ✓ sitemap.xml");

  // Generate robots.txt
  await Bun.write("dist/robots.txt", "User-agent: *\nAllow: /\nSitemap: https://yun.ng/sitemap.xml\n");
  console.log("   ✓ robots.txt");

  // Generate search index (stripped plain text for IndexedDB search)
  const t3 = performance.now();
  console.log("🔍 Building search index...");
  const searchDocs = Array.from(docs.docs.values()).filter((d: any) => d._bodyRaw);
  const searchIndex = buildSearchIndex(searchDocs);
  await Bun.write("dist/search-index.json", JSON.stringify(searchIndex));
  console.log(`   ✓ search-index.json (${(Bun.file("dist/search-index.json").size / 1024).toFixed(0)}KB, ${searchIndex.entries.length} entries, version ${searchIndex.version})`);
  phases.push({ name: "Search index", ms: performance.now() - t3 });

  // ─── Portfolio (plain directory in v2, shares v2's node_modules + fonts) ───
  // Built with `bun build.ts` from its own directory; deps (three, js-yaml,
  // pug) resolve from v2's node_modules. Output is copied into dist/ so the
  // minify pass below processes it like everything else.
  const t4 = performance.now();
  if (existsSync("portfolio/build.ts")) {
    console.log("🚀 Building portfolio...");
    await Bun.$`cd portfolio && bun build.ts`;
    await cp("portfolio/dist", "dist/portfolio", { recursive: true });
    const pfSize = (await dirSize("dist/portfolio")).size;
    console.log(`   ✓ portfolio → dist/portfolio (${fmtSize(pfSize)})`);
  } else {
    console.log("   ⚠ portfolio missing — skipping");
  }
  phases.push({ name: "Portfolio", ms: performance.now() - t4 });

  // ─── Post-build minification (Go minify CLI) — skipped in debug mode ───
  let beforeSize = 0, afterSize = 0, minifyMs = 0;
  if (DEBUG) {
    console.log("🔧 Debug mode — skipping minification");
    beforeSize = (await dirSize("dist")).size;
    afterSize = beforeSize;
  } else {
    // download minify tool if not present
    let minifyPath = "minify";

    try {
      await Bun.$`which minify`.quiet();
      console.log("minify already available");
    } catch {
      const arch = (await Bun.$`uname -m`.text()).trim() === "x86_64" ? "amd64" : "arm64";
      const url = `https://github.com/tdewolff/minify/releases/latest/download/minify_linux_${arch}.tar.gz`;
      await Bun.$`curl -sL ${url} | tar xz`;
      minifyPath = `${process.cwd()}/minify`;
      console.log("minify downloaded");
    }

    const minifyStart = performance.now();
    console.log("🗜️  Minifying JS, CSS, HTML...");
    beforeSize = (await dirSize("dist")).size;
    await Bun.$`${minifyPath} -r -o dist/ dist/`;
    afterSize = (await dirSize("dist")).size;
    minifyMs = performance.now() - minifyStart;
    const { imageSize } = await import("./framework/build-report");
    const imgSize = await imageSize("dist");
    const minifiableBefore = beforeSize - imgSize;
    const minifiableAfter = afterSize - imgSize;
    const savedBytes = minifiableBefore - minifiableAfter;
    const savedPct = minifiableBefore > 0 ? ((savedBytes / minifiableBefore) * 100).toFixed(1) : "0";
    console.log(`   ✓ Minified in ${minifyMs.toFixed(0)}ms — ${fmtSize(minifiableBefore)} → ${fmtSize(minifiableAfter)} (saved ${fmtSize(savedBytes)}, ${savedPct}% of minifiable; images ${fmtSize(imgSize)} excluded)`);
  }

  // ─── Generate build report ───
  const { generateBuildReport } = await import("./framework/build-report");
  const report = await generateBuildReport({
    startTime: buildStartEpoch,
    endTime: Date.now(),
    routeCount: routes.length,
    docCount: docs.flat.length,
    searchIndexSize: Bun.file("dist/search-index.json").size,
    searchEntryCount: searchIndex.entries.length,
    ogImageCount: ogGenerated,
    ogCacheHits: ogSkipped,
    ogCacheMisses: ogGenerated,
    minifyBefore: beforeSize,
    minifyAfter: afterSize,
    phases,
  });
  await Bun.write("dist/build.txt", report);
  console.log("   ✓ build.txt");

  // Make all files world-readable (for Docker lighttpd)
  // NOTE: must run LAST — the Go minify tool rewrites files in-place with
  // restrictive perms (umask), clobbering a+rX.
  await Bun.$`chmod -R a+rX dist/`.quiet();
  console.log("   ✓ permissions set");
}

main().catch(console.error);
