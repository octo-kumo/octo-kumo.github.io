/**
 * OG Image Generator — 1200x630 PNG images for social media previews.
 *
 * Uses @napi-rs/canvas to draw dark-themed OG images with title, description,
 * CTF name/category, and meta info pills. Includes debug AABB layout checker and benchmark utility.
 */

import { createCanvas, GlobalFonts, loadImage, type SKRSContext2D, type Image } from "@napi-rs/canvas";
import { debugCheckLayout } from "./og-debug";

// ─── Logo (site branding, replaces the "yun.ng" text) ───
let logoPromise: Promise<Image | null> | null = null;

function ensureLogo(): Promise<Image | null> {
  if (!logoPromise) {
    logoPromise = loadImage("public/logo.png").catch(() => null);
  }
  return logoPromise;
}

// ─── Font Registration ───
let fontsRegistered = false;

function ensureFonts(): void {
  if (fontsRegistered) return;
  const fontDir = "assets/fonts";
  const fonts = [
    { file: `${fontDir}/space-grotesk-400.woff2`, family: "Space Grotesk" },
    { file: `${fontDir}/space-grotesk-700.woff2`, family: "Space Grotesk" },
    { file: `${fontDir}/work-sans-400.woff2`, family: "Work Sans" },
    { file: `${fontDir}/jetbrains-mono-400.woff2`, family: "JetBrains Mono" },
    { file: `${fontDir}/source-serif-pro-400.woff2`, family: "Source Serif Pro" },
    { file: `${fontDir}/source-serif-pro-700.woff2`, family: "Source Serif Pro" },
  ];
  for (const f of fonts) {
    try { GlobalFonts.registerFromPath(f.file, f.family); } catch (e) { console.warn(`[OG] Font register failed: ${f.family}: ${e}`); }
  }
  fontsRegistered = true;
}

// ─── Constants ───
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const PADDING = 70;
const CONTENT_WIDTH = OG_WIDTH - PADDING * 2;

// Color palette — pure black bg, theme accent for geometric texture
const COLORS = {
  bg: "#000000",
  text: "#e6edf3",
  accent: "#58a6ff",
  accentDim: "rgba(88, 166, 255, 0.08)",
  muted: "#8b949e",
  pillBg: "rgba(255, 255, 255, 0.06)",
  pillBorder: "rgba(255, 255, 255, 0.12)",
  accentBg: "rgba(88, 166, 255, 0.12)",
} as const;

// Font sizes — larger relative to canvas
const TITLE_SIZE = 52;
const SUBTITLE_SIZE = 28;
const DESC_SIZE = 26;
const META_SIZE = 20;
const SITE_NAME_SIZE = 22;
const BADGE_SIZE = 16;

// Font families — match default style CSS
const FONT_BODY = "Space Grotesk";       // --font-body primary
const FONT_MONO = "JetBrains Mono";      // --font-mono

// ─── Types ───
export type PageType = "writeup" | "ctf-event" | "blog" | "home" | "directory";

export interface OGDoc {
  title?: string;
  description?: string;
  tags?: string[];
  created?: string;
  solves?: number;
  points?: number;
  rank?: number;
  team?: string;
  path?: string;
  _bodyRaw?: string;
}

export interface BoundingBox {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

interface MetaPill {
  text: string;
  icon?: string;
  color?: string;
}

// ─── Text Helpers ───

function wrapText(
  ctx: SKRSContext2D,
  text: string,
  maxWidth: number,
  maxLines: number = 3,
): string[] {
  const safeText = typeof text === "string" ? text : String(text || "");
  const words = safeText.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
      if (lines.length >= maxLines - 1) {
        const remaining = words.slice(i).join(" ");
        const truncated = truncateText(ctx, remaining, maxWidth);
        lines.push(truncated);
        return lines;
      }
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines.slice(0, maxLines);
}

function truncateText(ctx: SKRSContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let truncated = text;
  while (truncated.length > 0 && ctx.measureText(truncated + "…").width > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  return truncated + "…";
}

function formatDate(iso?: string): string | null {
  if (!iso) return null;
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return null;
  }
}

/** Extract CTF event name from path like /ctf/2026-tkbctf5/rev/classic → "2026-tkbctf5" */
function extractCtfName(path?: string): string | null {
  if (!path) return null;
  const segments = path.split("/").filter(Boolean);
  if (segments.length >= 2 && segments[0] === "ctf") return segments[1];
  return null;
}

/** Extract category from path like /ctf/2026-tkbctf5/rev/classic → "rev" */
function extractCategory(path?: string): string | null {
  if (!path) return null;
  const segments = path.split("/").filter(Boolean);
  if (segments.length >= 4 && segments[0] === "ctf") return segments[2];
  return null;
}

/** Infer a description from raw markdown body if none is set. */
function inferDescription(doc: OGDoc): string | null {
  if (doc.description) return doc.description;
  if (!doc._bodyRaw) return null;
  // Strip markdown syntax, get first paragraph
  const text = doc._bodyRaw
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1") // links → text
    .replace(/[#>*_`~]/g, "") // markdown chars
    .replace(/\n{2,}/g, "\n")
    .trim();
  const firstPara = text.split("\n").find((l) => l.trim().length > 20);
  if (!firstPara) return null;
  return firstPara.trim().slice(0, 150);
}

// ─── Meta Pill Helpers ───

function buildMetaPills(doc: OGDoc, pageType: PageType): MetaPill[] {
  const pills: MetaPill[] = [];

  switch (pageType) {
    case "writeup": {
      if (doc.points != null) pills.push({ text: `${doc.points} pts`, icon: "★", color: COLORS.accent });
      if (doc.solves != null) pills.push({ text: `${doc.solves} solves`, icon: "✓" });
      if (doc.rank != null) pills.push({ text: `Rank #${doc.rank}`, icon: "▲" });
      if (doc.team) pills.push({ text: doc.team, icon: "◆" });
      const date = formatDate(doc.created);
      if (date) pills.push({ text: date });
      break;
    }
    case "ctf-event": {
      if (doc.points != null) pills.push({ text: `${doc.points} pts`, icon: "★", color: COLORS.accent });
      if (doc.rank != null) pills.push({ text: `Rank #${doc.rank}`, icon: "▲" });
      if (doc.solves != null) pills.push({ text: `${doc.solves} solves`, icon: "✓" });
      const date = formatDate(doc.created);
      if (date) pills.push({ text: date });
      break;
    }
    case "blog": {
      if (doc.tags && doc.tags.length > 0) {
        for (const tag of doc.tags.slice(0, 4)) pills.push({ text: tag });
      }
      const date = formatDate(doc.created);
      if (date) pills.push({ text: date });
      break;
    }
    case "home": break;
    case "directory": break;
  }

  return pills;
}

function drawPill(
  ctx: SKRSContext2D,
  x: number,
  y: number,
  pill: MetaPill,
): { width: number; height: number; x: number; y: number } {
  const padding = 12;
  const iconText = pill.icon ? `${pill.icon} ` : "";
  const fullText = iconText + pill.text;

  ctx.font = `${META_SIZE}px ${FONT_MONO}`;
  const textWidth = ctx.measureText(fullText).width;
  const pillWidth = textWidth + padding * 2;
  const pillHeight = META_SIZE + padding * 2;

  ctx.fillStyle = pill.color ? COLORS.accentBg : COLORS.pillBg;
  roundedRect(ctx, x, y, pillWidth, pillHeight, pillHeight / 2);
  ctx.fill();

  ctx.strokeStyle = pill.color || COLORS.pillBorder;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = pill.color || COLORS.text;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(fullText, x + padding, y + pillHeight / 2);

  return { width: pillWidth, height: pillHeight, x, y };
}

function roundedRect(
  ctx: SKRSContext2D,
  x: number, y: number, w: number, h: number, r: number,
): void {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function layoutPills(
  ctx: SKRSContext2D,
  pills: MetaPill[],
  startX: number,
  startY: number,
  maxWidth: number,
): { boxes: BoundingBox[]; totalHeight: number } {
  const boxes: BoundingBox[] = [];
  const gap = 10;
  const lineHeight = META_SIZE + 24;
  let x = startX;
  let y = startY;

  for (const pill of pills) {
    const iconText = pill.icon ? `${pill.icon} ` : "";
    ctx.font = `${META_SIZE}px ${FONT_MONO}`;
    const textWidth = ctx.measureText(iconText + pill.text).width;
    const pillWidth = textWidth + 24;

    if (x + pillWidth > startX + maxWidth && x > startX) {
      x = startX;
      y += lineHeight + gap;
    }

    const result = drawPill(ctx, x, y, pill);
    boxes.push({ x: result.x, y: result.y, w: result.width, h: result.height, label: pill.text });
    x += pillWidth + gap;
  }

  return { boxes, totalHeight: y - startY + lineHeight };
}

// ─── Background Drawing ───

/** Draw pure black background with dim geometric accent texture. */
async function drawBackground(ctx: SKRSContext2D): Promise<void> {
  // Pure black base
  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);

  // Dim geometric abstract texture using accent color
  // Diagonal lines pattern — dim but visible
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 1;
  const spacing = 40;
  for (let i = -OG_HEIGHT; i < OG_WIDTH + OG_HEIGHT; i += spacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + OG_HEIGHT, OG_HEIGHT);
    ctx.stroke();
  }
  ctx.restore();

  // Dot grid in top-right — above the diagonal lines
  ctx.save();
  ctx.globalAlpha = 0.10;
  ctx.fillStyle = COLORS.accent;
  const dotSize = 3;
  const dotSpacing = 30;
  for (let x = OG_WIDTH - 300; x < OG_WIDTH - PADDING; x += dotSpacing) {
    for (let y = PADDING + 40; y < 280; y += dotSpacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();

  // Concentric arcs in bottom-left — abstract geometric
  ctx.save();
  ctx.globalAlpha = 0.10;
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 1.5;
  const cx = 0;
  const cy = OG_HEIGHT;
  for (let r = 100; r < 500; r += 60) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI / 2);
    ctx.stroke();
  }
  ctx.restore();

  // Accent line at top
  ctx.fillStyle = COLORS.accent;
  ctx.fillRect(0, 0, OG_WIDTH, 4);

  // Site logo at top-right (replaces the old "yun.ng" text)
  const logo = await ensureLogo();
  if (logo) {
    const logoSize = 44;
    const logoX = OG_WIDTH - PADDING - logoSize;
    const logoY = PADDING;
    ctx.save();
    // Rounded-square clip so the logo reads as an icon, not a raw photo
    roundedRect(ctx, logoX, logoY, logoSize, logoSize, 10);
    ctx.clip();
    ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
    ctx.restore();
  } else {
    // Fallback if the logo file is unavailable
    ctx.font = `${SITE_NAME_SIZE}px ${FONT_BODY}`;
    ctx.fillStyle = COLORS.muted;
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("yun.ng", OG_WIDTH - PADDING, PADDING);
  }
}

// ─── Main Drawing Functions ───

function drawTitle(
  ctx: SKRSContext2D,
  title: string,
  y: number,
  titleSize = TITLE_SIZE,
): { boxes: BoundingBox[]; nextY: number } {
  ctx.font = `bold ${titleSize}px ${FONT_BODY}`;
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  const lines = wrapText(ctx, title, CONTENT_WIDTH, 3);
  const lineHeight = titleSize * 1.2;
  const boxes: BoundingBox[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineY = y + i * lineHeight;
    ctx.fillText(lines[i], PADDING, lineY);
    const metrics = ctx.measureText(lines[i]);
    boxes.push({ x: PADDING, y: lineY, w: metrics.width, h: lineHeight, label: `title-line-${i}` });
  }

  return { boxes, nextY: y + lines.length * lineHeight };
}

function drawSubtitle(
  ctx: SKRSContext2D,
  subtitle: string,
  y: number,
): { boxes: BoundingBox[]; nextY: number } {
  ctx.font = `${SUBTITLE_SIZE}px ${FONT_MONO}`;
  ctx.fillStyle = COLORS.accent;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  const lines = wrapText(ctx, subtitle, CONTENT_WIDTH, 1);
  const lineHeight = SUBTITLE_SIZE * 1.3;
  const boxes: BoundingBox[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineY = y + i * lineHeight;
    ctx.fillText(lines[i], PADDING, lineY);
    const metrics = ctx.measureText(lines[i]);
    boxes.push({ x: PADDING, y: lineY, w: metrics.width, h: lineHeight, label: `subtitle-line-${i}` });
  }

  return { boxes, nextY: y + lines.length * lineHeight };
}

function drawDescription(
  ctx: SKRSContext2D,
  description: string,
  y: number,
): { boxes: BoundingBox[]; nextY: number } {
  ctx.font = `${DESC_SIZE}px ${FONT_BODY}`;
  ctx.fillStyle = COLORS.muted;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  const lines = wrapText(ctx, description, CONTENT_WIDTH, 2);
  const lineHeight = DESC_SIZE * 1.35;
  const boxes: BoundingBox[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineY = y + i * lineHeight;
    ctx.fillText(lines[i], PADDING, lineY);
    const metrics = ctx.measureText(lines[i]);
    boxes.push({ x: PADDING, y: lineY, w: metrics.width, h: lineHeight, label: `desc-line-${i}` });
  }

  return { boxes, nextY: y + lines.length * lineHeight };
}

function drawMetaRow(
  ctx: SKRSContext2D,
  pills: MetaPill[],
  y: number,
): { boxes: BoundingBox[]; nextY: number } {
  if (pills.length === 0) return { boxes: [], nextY: y };
  const result = layoutPills(ctx, pills, PADDING, y, CONTENT_WIDTH);
  return { boxes: result.boxes, nextY: y + result.totalHeight };
}

function drawPageTypeBadge(ctx: SKRSContext2D, pageType: PageType): BoundingBox {
  const labels: Record<PageType, string> = {
    writeup: "CTF WRITEUP",
    "ctf-event": "CTF EVENT",
    blog: "BLOG",
    home: "HOME",
    directory: "DIRECTORY",
  };

  const label = labels[pageType];
  ctx.font = `bold ${BADGE_SIZE}px ${FONT_MONO}`;
  const textWidth = ctx.measureText(label).width;
  const badgeW = textWidth + 24;
  const badgeH = 30;
  const x = PADDING;
  const y = PADDING;

  ctx.fillStyle = COLORS.accentBg;
  roundedRect(ctx, x, y, badgeW, badgeH, badgeH / 2);
  ctx.fill();
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = COLORS.accent;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + badgeW / 2, y + badgeH / 2);

  return { x, y, w: badgeW, h: badgeH, label: "page-type-badge" };
}

// ─── Main Entry Point ───

export async function generateOGImage(doc: OGDoc, pageType: PageType): Promise<Buffer> {
  ensureFonts();
  const canvas = createCanvas(OG_WIDTH, OG_HEIGHT);
  const ctx = canvas.getContext("2d");

  // Draw background
  await drawBackground(ctx);

  // Draw page type badge
  const badgeBox = drawPageTypeBadge(ctx, pageType);
  const allBoxes: BoundingBox[] = [badgeBox];

  // Use inferred title if no explicit title
  const title = doc.title || (doc.path ? doc.path.split("/").pop()?.replace(/-/g, " ") || "Untitled" : "Untitled");

  // Build subtitle: CTF name + category for writeups
  let subtitle: string | null = null;
  if (pageType === "writeup") {
    const ctfName = extractCtfName(doc.path);
    const category = extractCategory(doc.path);
    if (ctfName && category) {
      subtitle = `${ctfName} / ${category}`;
    } else if (ctfName) {
      subtitle = ctfName;
    }
  }

  // Infer description from body if missing
  const description = inferDescription(doc);

  // Title starts below the badge; CTF event titles get a bigger size
  const titleSize = pageType === "ctf-event" ? TITLE_SIZE * 1.45 : TITLE_SIZE;
  const titleStartY = PADDING + badgeBox.h + 35;
  const titleResult = drawTitle(ctx, title, titleStartY, titleSize);
  allBoxes.push(...titleResult.boxes);

  // Subtitle (CTF name / category)
  let afterTitleY = titleResult.nextY;
  if (subtitle) {
    const subY = titleResult.nextY + 8;
    const subResult = drawSubtitle(ctx, subtitle, subY);
    allBoxes.push(...subResult.boxes);
    afterTitleY = subResult.nextY;
  }

  // Description below subtitle
  let descEndY = afterTitleY;
  if (description) {
    const descY = afterTitleY + 20;
    const descResult = drawDescription(ctx, description, descY);
    allBoxes.push(...descResult.boxes);
    descEndY = descResult.nextY;
  }

  // Meta pills at the bottom
  const pills = buildMetaPills(doc, pageType);
  const pillsY = Math.max(descEndY + 30, OG_HEIGHT - PADDING - 60 - (pills.length > 4 ? 60 : 0));
  const metaResult = drawMetaRow(ctx, pills, pillsY);
  allBoxes.push(...metaResult.boxes);

  // Debug: check layout
  if (process.env.DEBUG === "1" || process.env.DEBUG_OG === "1") {
    const violations = debugCheckLayout(allBoxes, OG_WIDTH, OG_HEIGHT);
    if (violations.length > 0) {
      console.warn(`[OG:debug] Layout violations for "${title}":`);
      for (const v of violations) console.warn(`  ${v.type}: ${v.message}`);
    }
  }

  return canvas.toBuffer("image/png");
}

export function inferPageType(path: string): PageType {
  if (path === "/" || path === "") return "home";
  if (path.startsWith("/blog/")) return "blog";
  if (path.startsWith("/ctf/")) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length <= 2) return "ctf-event";
    if (segments.length === 3) return "directory";
    return "writeup";
  }
  if (path.startsWith("/htb/")) return "writeup";
  return "directory";
}
