// SSG statistics computation for CTF writeups
// Calculates per-category writeup counts and total points

const CHAL_CATEGORIES = [
  "ai", "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev",
  "misc", "osint", "box", "hardware", "blockchain", "defence", "radio", "network"
];

// Generate colors spanning the Oklab spectrum for nice variety
// Uses evenly spaced hues with consistent lightness and chroma
function oklabColor(i: number, total: number): string {
  if (total <= 1) return hslToHex(0, 0.6, 0.6);
  const hue = (i / total) * 360;
  return hslToHex(hue, 0.65, 0.55);
}

function hslToHex(h: number, s: number, l: number): string {
  // Convert HSL (h: 0-360, s: 0-1, l: 0-1) to hex
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, '0');
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

export interface CategoryStat {
  category: string;
  count: number;
  points: number;
  countPercent: number;
  pointsPercent: number;
  color: string;
}

export interface CtfStats {
  categories: CategoryStat[];
  totalWriteups: number;
  totalPoints: number;
}

function getCategory(path: string): string | undefined {
  const parts = path.split("/").filter(Boolean);
  // /ctf/event/category/challenge → category is parts[2]
  // /htb/box-name → no category
  if (parts.length >= 3) {
    const cat = parts[2];
    if (CHAL_CATEGORIES.includes(cat)) return cat;
  }
  return undefined;
}

export function computeStats(docs: any[]): CtfStats {
  const grouped: Record<string, any[]> = {};

  for (const doc of docs) {
    const cat = getCategory(doc.path);
    if (cat) {
      // Skip directory/category folders — only count actual writeups with content
      if (!doc.hasContent) continue;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(doc);
    }
  }

  const entries = Object.entries(grouped).map(([cat, docs]) => ({
    category: cat,
    count: docs.length,
    points: docs.reduce((sum, d) => sum + (d.points || 0), 0),
  }));

  // Sort by count descending
  entries.sort((a, b) => b.count - a.count);

  const totalWriteups = entries.reduce((s, e) => s + e.count, 0);
  const totalPoints = entries.reduce((s, e) => s + e.points, 0);

  const categories: CategoryStat[] = entries.map((e, i) => ({
    category: e.category,
    count: e.count,
    points: e.points,
    countPercent: totalWriteups > 0 ? (e.count / totalWriteups) * 100 : 0,
    pointsPercent: totalPoints > 0 ? (e.points / totalPoints) * 100 : 0,
    color: oklabColor(i, entries.length),
  }));

  return { categories, totalWriteups, totalPoints };
}

// Get docs for a specific CTF event (e.g., /ctf/2026-tkbctf5)
export function getEventDocs(docs: any[], eventPath: string): any[] {
  return docs.filter(d => d.path.startsWith(eventPath + "/"));
}

// Get all CTF docs
export function getAllCtfDocs(docs: any[]): any[] {
  return docs.filter(d => d.path.startsWith("/ctf/") || d.path.startsWith("/htb/"));
}
