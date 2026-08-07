/**
 * Build report generator — produces a well-formatted /build.txt with build stats.
 * No sensitive information (no paths, no env vars, no secrets).
 */
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

export interface BuildReportData {
  startTime: number;
  endTime: number;
  routeCount: number;
  docCount: number;
  searchIndexSize: number;
  searchEntryCount: number;
  ogImageCount: number;
  ogCacheHits: number;
  ogCacheMisses: number;
  minifyBefore: number;
  minifyAfter: number;
  phases: { name: string; ms: number }[];
}

export async function dirSize(dir: string): Promise<{ files: number; size: number }> {
  let files = 0;
  let size = 0;
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        const sub = await dirSize(full);
        files += sub.files;
        size += sub.size;
      } else {
        const s = await stat(full);
        files++;
        size += s.size;
      }
    }
  } catch { }
  return { files, size };
}

/** Size of only image files in a directory tree. */
export async function imageSize(dir: string): Promise<number> {
  const imageExts = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".bmp", ".avif"]);
  let size = 0;
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        size += await imageSize(full);
      } else {
        const ext = extname(entry.name).toLowerCase();
        if (imageExts.has(ext)) {
          const s = await stat(full);
          size += s.size;
        }
      }
    }
  } catch { }
  return size;
}

export function fmt(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function fmtMs(ms: number): string {
  if (ms < 1000) return `${ms.toFixed(0)} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

function bar(pct: number, width = 24): string {
  const filled = Math.round((pct / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

export async function generateBuildReport(data: BuildReportData): Promise<string> {
  const totalTime = data.endTime - data.startTime;
  const distStats = await dirSize("dist");
  const ogStats = await dirSize("dist/og");

  // Count file types in dist
  const fileTypes: Record<string, { count: number; size: number }> = {};

  const largestCOunt = 20;
  const largestFiles: { path: string; size: number }[] = [];

  async function countTypes(dir: string) {
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
          await countTypes(full);
        } else {
          const ext = extname(entry.name) || "(no ext)";
          const s = await stat(full);
          if (!fileTypes[ext]) fileTypes[ext] = { count: 0, size: 0 };
          fileTypes[ext].count++;
          fileTypes[ext].size += s.size;
          // Track largest files
          for (let i = 0; i < largestCOunt; i++) {
            if (largestFiles[i] === undefined || s.size > largestFiles[i].size) {
              largestFiles.splice(i, 0, { path: full, size: s.size });
              if (largestFiles.length > largestCOunt) largestFiles.pop();
              break;
            }
          }
        }
      }
    } catch { }
  }
  await countTypes("dist");

  const lines: string[] = [];

  lines.push("════════════════════════════════════════════════════════════════");
  lines.push("  BUILD REPORT — yun.ng v2");
  lines.push(`  Generated: ${new Date(data.endTime).toISOString()}`);
  lines.push("════════════════════════════════════════════════════════════════");
  lines.push("");

  // ─── Overview ───
  lines.push("── OVERVIEW ──────────────────────────────────────────────────");
  lines.push(`  Total build time ...... ${fmtMs(totalTime)}`);
  lines.push(`  Routes generated ..... ${data.routeCount}`);
  lines.push(`  Content documents .... ${data.docCount}`);
  lines.push(`  Output directory ..... dist/ (${distStats.files} files, ${fmt(distStats.size)})`);
  lines.push("");

  // ─── Build Phases ───
  lines.push("── BUILD PHASES ──────────────────────────────────────────────");
  const phaseTotal = data.phases.reduce((s, p) => s + p.ms, 0) || 1;
  for (const phase of data.phases) {
    const pct = (phase.ms / phaseTotal) * 100;
    const pad = phase.name.padEnd(22);
    lines.push(`  ${pad} ${fmtMs(phase.ms).padStart(10)}  ${bar(pct)} ${pct.toFixed(1)}%`);
  }
  lines.push(`  ${"─".repeat(22)} ${"─".repeat(10)}  ${"─".repeat(26)}`);
  lines.push(`  ${"Total".padEnd(22)} ${fmtMs(phaseTotal).padStart(10)}`);
  lines.push("");

  // ─── Search Index ───
  lines.push("── SEARCH INDEX ─────────────────────────────────────────────");
  lines.push(`  Entries .............. ${data.searchEntryCount}`);
  lines.push(`  Index size ........... ${fmt(data.searchIndexSize)}`);
  lines.push("");

  // ─── OG Images ───
  lines.push("── OG IMAGES ────────────────────────────────────────────────");
  lines.push(`  Total images ......... ${data.ogImageCount}`);
  lines.push(`  Cache hits ............ ${data.ogCacheHits}`);
  lines.push(`  Cache misses .......... ${data.ogCacheMisses}`);
  lines.push(`  Total size ............ ${fmt(ogStats.size)}`);
  lines.push(`  Avg per image ........ ${data.ogImageCount > 0 ? fmt(ogStats.size / data.ogImageCount) : "N/A"}`);
  lines.push("");

  // ─── Minification ───
  // Images aren't minified — exclude their size from before/after comparison
  const imgSizeBefore = await imageSize("dist");
  const minifiableBefore = data.minifyBefore - imgSizeBefore;
  const minifiableAfter = data.minifyAfter - imgSizeBefore; // images unchanged
  const savedBytes = minifiableBefore - minifiableAfter;
  const savedPct = minifiableBefore > 0 ? ((savedBytes / minifiableBefore) * 100).toFixed(1) : "0";
  lines.push("── MINIFICATION ──────────────────────────────────────────────");
  lines.push(`  Before ............... ${fmt(data.minifyBefore)} (total)`);
  lines.push(`    - Images (excluded) . ${fmt(imgSizeBefore)}`);
  lines.push(`    - Minifiable ....... ${fmt(minifiableBefore)}`);
  lines.push(`  After ................ ${fmt(data.minifyAfter)} (total)`);
  lines.push(`    - Images (excluded) . ${fmt(imgSizeBefore)}`);
  lines.push(`    - Minifiable ....... ${fmt(minifiableAfter)}`);
  lines.push(`  Saved ................ ${fmt(savedBytes)} (${savedPct}% of minifiable)`);
  lines.push("");

  // ─── Output File Breakdown ───
  lines.push("── OUTPUT FILE BREAKDOWN ────────────────────────────────────");
  const sortedTypes = Object.entries(fileTypes).sort((a, b) => b[1].size - a[1].size);
  for (const [ext, info] of sortedTypes) {
    const pct = (info.size / distStats.size) * 100;
    lines.push(`  ${ext.padEnd(8)} ${String(info.count).padStart(5)} files  ${fmt(info.size).padStart(12)}  ${bar(pct)} ${pct.toFixed(1)}%`);
  }
  lines.push("");


  // ─── Largest 20 Files ───
  lines.push("── LARGEST 20 FILES ──────────────────────────────────────────");
  for (const { path, size } of largestFiles) {
    lines.push(`  ${path.padEnd(50)} ${fmt(size).padStart(12)}`);
  }

  // ─── Footer ───
  lines.push("════════════════════════════════════════════════════════════════");
  lines.push(`  Build completed in ${fmtMs(totalTime)}`);
  lines.push("════════════════════════════════════════════════════════════════");

  return lines.join("\n");
}
