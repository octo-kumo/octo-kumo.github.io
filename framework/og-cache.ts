/**
 * OG Image Cache — content-hash + renderer-hash based caching.
 *
 * Stores a manifest at dist/og/manifest.json mapping page path →
 * { contentHash, rendererHash, imageFile }.
 *
 * On rebuild: skip pages where both hashes match the manifest.
 */

import { existsSync, mkdirSync, readFileSync } from "node:fs";
import getTool from "../tools";

const MANIFEST_PATH = ".og-cache/manifest.json";
const OG_OUTPUT_DIR = "dist/og";
const OG_CACHE_DIR = ".og-cache/images";

// ─── Types ───
export interface ManifestEntry {
  contentHash: string;
  rendererHash: string;
  imageFile: string;
}

export type Manifest = Record<string, ManifestEntry>;

// ─── Hashing ───

/** Hash a string using Bun's built-in crypto. Returns a short hex string. */
function hashString(input: string): string {
  const hasher = new Bun.CryptoHasher("sha256");
  hasher.update(input);
  return hasher.digest("hex").slice(0, 16); // 16 chars is enough for cache invalidation
}

/** Hash a file's contents. Returns null if file doesn't exist. */
function hashFile(filePath: string): string | null {
  try {
    if (!existsSync(filePath)) return null;
    const content = readFileSync(filePath, "utf8");
    return hashString(content);
  } catch {
    return null;
  }
}

/** Get the renderer hash — hash of the og-image.ts source code. */
export function getRendererHash(): string {
  return hashFile("framework/og-image.ts") || "unknown";
}

/** Get the content hash for a doc — hash of its raw body + frontmatter fields. */
export function getContentHash(doc: {
  title?: string;
  description?: string;
  tags?: string[];
  created?: string;
  solves?: number;
  points?: number;
  rank?: number;
  team?: string;
  _bodyRaw?: string;
  path?: string;
}): string {
  // Hash the relevant fields that affect the OG image
  const fields = [
    doc.title || "",
    doc.description || "",
    (doc.tags || []).join(","),
    doc.created || "",
    doc.solves?.toString() || "",
    doc.points?.toString() || "",
    doc.rank?.toString() || "",
    doc.team || "",
    doc._bodyRaw || "",
  ].join("\n");
  return hashString(fields);
}

// ─── Manifest I/O ───

/** Load the manifest from disk. Returns empty object if not found. */
export function loadManifest(): Manifest {
  try {
    if (!existsSync(MANIFEST_PATH)) return {};
    const content = readFileSync(MANIFEST_PATH, "utf8");
    return JSON.parse(content) as Manifest;
  } catch {
    return {};
  }
}

/** Save the manifest to disk. Creates the directory if needed. */
async function saveManifest(manifest: Manifest): Promise<void> {
  const dir = MANIFEST_PATH.split("/").slice(0, -1).join("/");
  mkdirSync(dir, { recursive: true });
  await Bun.write(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

// ─── Cache Logic ───

/**
 * Check if an OG image needs to be (re)generated.
 * Returns true if generation is needed, false if cache is valid.
 */
export function shouldGenerate(
  manifest: Manifest,
  pagePath: string,
  contentHash: string,
  rendererHash?: string,
): boolean {
  const entry = manifest[pagePath];
  if (!entry) return true;

  if (entry.contentHash !== contentHash) return true;
  if (rendererHash && entry.rendererHash !== rendererHash) return true;

  // Also check if the cached image file exists (in .og-cache/images/)
  const cachePath = `${OG_CACHE_DIR}/${entry.imageFile}`;
  if (!existsSync(cachePath)) return true;

  return false;
}

/**
 * Update the manifest entry for a page (in-memory only).
 * Caller must save the manifest after all updates.
 */
function updateManifest(
  manifest: Manifest,
  pagePath: string,
  contentHash: string,
  rendererHash: string,
  imageFile: string,
): void {
  manifest[pagePath] = { contentHash, rendererHash, imageFile };
}

/**
 * Get the OG image filename for a page path.
 * Uses a hash of the page path for a short, unique filename.
 */
export function getImageFilename(pagePath: string): string {
  return `${hashString(pagePath)}.png`;
}

/**
 * Save a generated PNG buffer to the persistent cache directory.
 */
async function saveToCache(imageFile: string, buffer: Buffer): Promise<void> {
  mkdirSync(OG_CACHE_DIR, { recursive: true });
  await Bun.write(`${OG_CACHE_DIR}/${imageFile}`, buffer);
}

/**
 * Copy a cached image to the dist output directory.
 * Returns true if the copy succeeded, false if the cached image doesn't exist.
 */
async function copyFromCache(imageFile: string): Promise<boolean> {
  const cachePath = `${OG_CACHE_DIR}/${imageFile}`;
  if (!existsSync(cachePath)) return false;
  mkdirSync(OG_OUTPUT_DIR, { recursive: true });
  const buffer = Bun.file(cachePath);
  await Bun.write(`${OG_OUTPUT_DIR}/${imageFile}`, buffer);
  return true;
}

/**
 * Clean up manifest entries that no longer have corresponding pages.
 * Modifies the manifest in-place. Caller must save.
 */
function pruneManifest(manifest: Manifest, validPaths: string[]): boolean {
  const validSet = new Set(validPaths);
  let changed = false;
  for (const key of Object.keys(manifest)) {
    if (!validSet.has(key)) {
      delete manifest[key];
      changed = true;
    }
  }
  return changed;
}

// ─── High-level cache operations ───

/** Process a single OG image: check cache, generate if needed, update manifest. */
export async function processOGImage(
  manifest: Manifest,
  pagePath: string,
  contentHash: string,
  rendererHash: string,
  generateFn: () => Buffer | Promise<Buffer>,
): Promise<{ generated: boolean; imageFile: string }> {
  const imageFile = getImageFilename(pagePath);
  const needsGen = shouldGenerate(manifest, pagePath, contentHash, rendererHash);

  if (!needsGen) {
    // Cached — copy from persistent cache to dist/og/
    await copyFromCache(imageFile);
    return { generated: false, imageFile };
  }

  const pngBuffer = await generateFn();
  await Bun.write(`${OG_OUTPUT_DIR}/${imageFile}`, pngBuffer);
  await Bun.$`${getTool('oxipng')} --scale16 -o 4 --fast --strip all ${OG_OUTPUT_DIR}/${imageFile}`.catch(() => { /* ignore errors */ });
  await saveToCache(imageFile, pngBuffer);
  updateManifest(manifest, pagePath, contentHash, rendererHash, imageFile);
  return { generated: true, imageFile };
}

/** Save manifest if it has changed. */
export async function saveManifestIfChanged(
  manifest: Manifest,
  validPaths: string[],
): Promise<void> {
  pruneManifest(manifest, validPaths);
  await saveManifest(manifest);
}
