/**
 * Automatic font subsetting — part of the build.
 *
 * Scans the generated pages + UI source for the characters actually used,
 * subsets the canonical full-latin woff2 sources (public/fonts/full/) into
 * public/fonts/*.woff2, and regenerates public/fonts.css unicode-ranges so
 * browsers only download fonts whose glyphs are present.
 *
 * When new content introduces new characters, the next build automatically
 * includes them (and grows the files slightly). Files are only rewritten when
 * the bytes change, so the repo stays clean when nothing new appears.
 */
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import subsetFont from "subset-font";
import * as fontkit from "fontkit";

interface FontSpec {
  src: string;            // canonical source in public/fonts/full/
  out: string;            // subset output filename in public/fonts/
  family: string;         // CSS font-family
  weight: string;         // CSS font-weight (may be a range for variable fonts)
  style: string;          // CSS font-style
}

const FONTS: FontSpec[] = [
  { src: "space-grotesk-400.woff2",     out: "space-grotesk.woff2",      family: "Space Grotesk",    weight: "400 700", style: "normal" },
  { src: "jetbrains-mono-400.woff2",    out: "jetbrains-mono-400.woff2", family: "JetBrains Mono",   weight: "400",     style: "normal" },
  { src: "source-serif-pro-400.woff2",  out: "source-serif-pro-400.woff2",  family: "Source Serif Pro", weight: "400", style: "normal" },
  { src: "source-serif-pro-400i.woff2", out: "source-serif-pro-400i.woff2", family: "Source Serif Pro", weight: "400", style: "italic" },
  { src: "source-serif-pro-700.woff2",  out: "source-serif-pro-700.woff2",  family: "Source Serif Pro", weight: "700", style: "normal" },
];

// Extra glyphs kept regardless of current usage: common European accents and
// punctuation that may appear in future posts.
const SAFE = "àáâãäåæçèéêëìíîïñòóôõöùúûüýÿß¡¿«»§°±µ¹²³–—‘’“”…†‰€™";

/** Characters used anywhere in the site (built pages + UI source + templates). */
async function collectUsedChars(): Promise<Set<string>> {
  const chars = new Set<string>();
  for (const pat of ["dist/**/*.html", "dist/search-index.json", "public/*.js", "public/*.css", "templates/*.pug", "framework/*.ts"]) {
    try {
      const files = await new Bun.Glob(pat).scan({ cwd: ".", onlyFiles: true, absolute: true });
      for await (const f of files) {
        try {
          const text = await readFile(f, "utf-8");
          for (const ch of text) chars.add(ch);
        } catch { /* binary or unreadable — skip */ }
      }
    } catch { /* pattern matched nothing */ }
  }
  return chars;
}

function cmapRanges(codes: number[]): string {
  const sorted = [...codes].sort((a, b) => a - b);
  const out: string[] = [];
  let start: number | null = null, prev: number | null = null;
  for (const c of sorted) {
    if (start === null) { start = prev = c; }
    else if (c === prev! + 1) { prev = c; }
    else {
      out.push(start === prev ? `U+${start.toString(16).toUpperCase().padStart(4, "0")}` : `U+${start.toString(16).toUpperCase().padStart(4, "0")}-${prev!.toString(16).toUpperCase().padStart(4, "0")}`);
      start = prev = c;
    }
  }
  if (start !== null) {
    out.push(start === prev ? `U+${start.toString(16).toUpperCase().padStart(4, "0")}` : `U+${start.toString(16).toUpperCase().padStart(4, "0")}-${prev!.toString(16).toUpperCase().padStart(4, "0")}`);
  }
  return out.join(", ");
}

async function writeIfChanged(path: string, data: Uint8Array): Promise<boolean> {
  try {
    const existing = await readFile(path);
    if (existing.length === data.length && existing.every((b, i) => b === data[i])) return false;
  } catch { /* missing — write */ }
  await writeFile(path, data);
  return true;
}

export async function subsetFonts(): Promise<{ changed: string[]; bytesBefore: number; bytesAfter: number }> {
  const used = await collectUsedChars();
  const changed: string[] = [];
  let bytesBefore = 0, bytesAfter = 0;
  const faces: string[] = [];

  for (const spec of FONTS) {
    const srcPath = join("public/fonts/full", spec.src);
    const full = await readFile(srcPath);
    bytesBefore += full.length;
    const font = fontkit.create(full) as unknown as { characterSet: number[] };
    const cmap = new Set<number>(font.characterSet);

    // requested chars = used ∩ font glyphs, plus SAFE ∩ font glyphs, plus ASCII
    const wanted = new Set<number>();
    for (const ch of used) { const c = ch.codePointAt(0)!; if (cmap.has(c)) wanted.add(c); }
    for (const ch of SAFE) { const c = ch.codePointAt(0)!; if (cmap.has(c)) wanted.add(c); }
    for (let c = 0x20; c <= 0x7e; c++) if (cmap.has(c)) wanted.add(c);

    const text = String.fromCodePoint(...wanted);
    const subset = await subsetFont(full, text, { targetFormat: "woff2" });
    const outPath = join("public/fonts", spec.out);
    bytesAfter += subset.length;
    if (await writeIfChanged(outPath, subset)) changed.push(spec.out);

    faces.push(`@font-face {
  font-family: '${spec.family}';
  font-style: ${spec.style};
  font-weight: ${spec.weight};
  font-display: swap;
  src: url(/fonts/${spec.out}) format('woff2');
  unicode-range: ${cmapRanges([...wanted])};
}`);
  }

  const css = `/* Self-hosted fonts — subset at build time to the characters actually used
   (framework/fonts.ts scans the built pages + UI source; re-run the build when
   content introduces new characters). CJK falls back to system fonts.
   font-display: swap prevents invisible-text during load (FOIT). */
${faces.join("\n")}
`;
  if (await writeIfChanged("public/fonts.css", new TextEncoder().encode(css))) changed.push("fonts.css");

  return { changed, bytesBefore, bytesAfter };
}
