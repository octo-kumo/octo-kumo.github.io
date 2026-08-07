// main.ts — Yun's Portfolio client logic (framework-free port of the
// octo-kumo.github.io landing components). No framework, no vector search.

import { PowerGlitch } from "../vendor/powerglitch";
import { initSpace, resizeSpace } from "./space";
import { perf } from "./perf";
import { gfx } from "./gfx";

/* ── build-time config (inlined by build.ts via bun --define) ─────────── */
declare const __CONFIG__: {
  basePath: string;
  siteUrl: string;
  writeupsUrl: string;
  viewsUrl: string;
};
const cfg = __CONFIG__;

/* ── data (inline JSON from #portfolio-data, emitted by build.ts) ─────── */
type Project = {
  name: string;
  desc: string;
  langs: string[];
  keys?: string[];
  hidden?: boolean; // in yaml: show in the 3D scene but skip the skills gallery
  github?: string;
  link?: string | { win: string; linux: string };
  year: string;
  video?: string;
  image?: string;
};
type Writeup = {
  path: string;
  title?: string;
  description?: string;
  tags?: string[];
  created?: string;
  dateStr?: string;
  text?: string;
};

const dataEl = document.getElementById("portfolio-data") as HTMLScriptElement;
const data = JSON.parse(dataEl.textContent || "{}") as {
  projects: Project[];
  writeups: Writeup[];
};

// lowercase langs/keys like the original did, so search is case-insensitive
for (const p of data.projects) {
  p.langs = p.langs.map((l) => l.toLowerCase());
  if (p.keys) p.keys = p.keys.map((k) => k.toLowerCase());
}
data.projects.sort((a, b) => (a.year === b.year ? 0 : a.year < b.year ? 1 : -1));

export const projects = data.projects;
export const keywordsWeighted = projects
  .flatMap((p) => [...p.langs, ...(p.keys ?? [])])
  .map((f) => f.toLowerCase());

const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;
const SECTIONS = [
  { key: "hero", title: "Home", icon: "🛸" },
  { key: "about", title: "About", icon: "🚀" },
  { key: "skills", title: "Skills", icon: "💻" },
  { key: "work", title: "Work", icon: "🪐" },
  { key: "writeups", title: "Writeups", icon: "📝" },
  { key: "contact", title: "Contact", icon: "📧" },
];
const N = SECTIONS.length;

function resolveLink(link?: string | { win: string; linux: string }): string | undefined {
  if (!link) return undefined;
  if (typeof link === "string") return link;
  const nav = (navigator as any).userAgentData?.platform ?? navigator.platform ?? "";
  return /win/i.test(nav) ? link.win : link.linux;
}

/* ── scroll progress + vertical nav ────────────────────────────────────── */
let progress = 0;
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  const active = Math.floor(0.5 + progress * (N - 1));
  document.querySelectorAll<HTMLElement>(".nav-item").forEach((li, i) => {
    li.classList.toggle("active", i === active);
  });
  // hero: sub-progress of section 0 — fades tagline + hides chevrons past ~2% of page
  const heroProg = progress * (N - 1);
  $(".tagline h2").classList.toggle("faded", heroProg > 0.1);
  $("#scroll-indicator").classList.toggle("hidden", heroProg > 0.1);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.querySelectorAll<HTMLElement>(".nav-item").forEach((li) => {
  li.addEventListener("click", () => {
    document.getElementById(li.dataset.nav!)?.scrollIntoView({ behavior: "smooth" });
  });
});
$("#scroll-indicator").addEventListener("click", () =>
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
);

/* ── hero: pageviews + the 114-click easter egg ────────────────────────── */
fetch(`${cfg.viewsUrl}${cfg.basePath}`)
  .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
  .then((d: any) => {
    if (typeof d?.count === "number") $("#page-views").textContent = `${d.count}th`;
  })
  .catch(() => {
    /* counter API unavailable — ruby annotation stays empty */
  });

const CLICKS = 114;
let clicks = 0;
const tagline = $("#tagline");
tagline.addEventListener("click", () => {
  clicks++;
  if (clicks >= CLICKS) {
    tagline.classList.remove("clickable");
    PowerGlitch.glitch(tagline, {
      playMode: "manual",
      timing: { easing: "ease-in-out" },
      slice: { count: 20 },
    }).startGlitch();
    setTimeout(() => {
      tagline.innerHTML = '<ruby>Seventh Phase of the Sky<rt>「天空的第七种相态」</rt></ruby>';
      PowerGlitch.glitch(tagline, {
        timing: { easing: "ease-in-out", duration: 4000 },
        slice: { count: 2 },
        shake: { amplitudeX: 0.05, amplitudeY: 0.05 },
      });
    }, 125);
  } else if (clicks < CLICKS) {
    PowerGlitch.glitch(tagline, {
      playMode: "manual",
      timing: { easing: "ease-in-out" },
      slice: { count: (10 * clicks) / CLICKS },
      shake: { amplitudeX: 0.5 * (clicks / CLICKS), amplitudeY: 0.5 * (clicks / CLICKS) },
    }).startGlitch();
  }
});

/* ── marquee (SkillsSection) — ported 1:1 from Marquee.vue ───────────────
   Tuned values preserved: duration=100s, rowHeight=30, angle=10.
   Two mathematically-justified fixes (see README):
   1) rows = ceil(H/verticalSpace)+2  (original: 1.3xH — ~30% extra rows,
      most of them below the fold = "content out of screen")
   2) animation offset 50vh (original: 70vh — pushed the whole band down so
      the top of the screen had no rows and the bottom spilled past the fold).
   With rows spaced exactly `verticalSpace` apart, ceil(H/verticalSpace)+2 rows
   provably cover the viewport with no gaps and no waste. */
const marquee = $("#marquee");
const MQ = { words: keywordsWeighted, duration: 100, rowHeight: 30, angle: 10, selected: [] as string[] };
const wordCache: string[][] = [];
let rows = 0;
let verticalSpace = 0;

function getWords(index: number, center: boolean): string[] {
  if (wordCache[index]) return wordCache[index];
  if (center) {
    wordCache[index] = [...new Set(MQ.words)].sort(() => Math.random() - 0.5).map((w) => w.toUpperCase());
  } else {
    const selection: string[] = [];
    while (selection.length < 20) {
      const word = MQ.words[Math.floor(Math.random() * MQ.words.length)];
      if (!selection.includes(word)) selection.push(word);
    }
    wordCache[index] = selection.map((w) => w.toUpperCase());
  }
  return wordCache[index];
}

function renderMarquee() {
  const centerIdx = Math.floor(rows / 2);
  const half = (rows * MQ.rowHeight) / 2;
  const sel = MQ.selected;
  marquee.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "marquee-row" + (i % 2 !== 0 ? " reverse" : "");
    row.style.setProperty("--angle", `-${MQ.angle}deg`);
    row.style.setProperty("--duration", `${MQ.duration}s`);
    row.style.top = `${i * MQ.rowHeight - half}px`;
    row.addEventListener("mouseenter", () => row.classList.add("paused"));
    row.addEventListener("mouseleave", () => row.classList.remove("paused"));
    const isCenter = i === centerIdx;
    for (let c = 0; c < 2; c++) {
      const copy = document.createElement("div");
      copy.className = "marquee-copy";
      for (const word of getWords(i, isCenter)) {
        const w = document.createElement("span");
        const lower = word.toLowerCase();
        w.className =
          "marquee-word" + (isCenter ? " center" : "") + (sel.includes(lower) ? " selected" : "");
        w.textContent = word;
        w.addEventListener("click", () => wordClick(lower));
        copy.appendChild(w);
      }
      row.appendChild(copy);
    }
    marquee.appendChild(row);
  }
}

function calculateRows() {
  const angle = (MQ.angle * Math.PI) / 180;
  verticalSpace = MQ.rowHeight / Math.cos(angle);
  rows = Math.ceil((1.3 * window.innerHeight) / verticalSpace); // original formula — the extra rows + 70vh offset carve the empty triangle behind the lookup box
  renderMarquee();
}

// selection changes must NOT rebuild the wall (rebuilding restarts the CSS
// animation and the wall snaps back) — toggle classes in place only.
function updateMarqueeSelection() {
  const sel = MQ.selected;
  marquee.querySelectorAll<HTMLElement>(".marquee-word").forEach((w) => {
    w.classList.toggle("selected", sel.includes(w.textContent!.toLowerCase()));
  });
}

/* ── back to main site ─────────────────────────────────────────────────── */
// When the portfolio was opened in a new tab from the main site, the opener
// window is still alive — "Back to main site" just closes this tab instead
// of navigating (the main site is already open behind us).
$("#back-link").addEventListener("click", (e) => {
  if (window.opener && !window.opener.closed) {
    e.preventDefault();
    window.close();
  }
});

/* ── F1 debug overlay: per-component avg frame time, grouped by type ──── */
// Collection is gated by perf.on — nothing is measured while debug is off.

const perfEl = document.createElement("div");
perfEl.id = "perf-overlay";
perfEl.style.display = "none";
document.body.appendChild(perfEl);

window.addEventListener("keydown", (e) => {
  if (e.key !== "F1") return;
  e.preventDefault(); // don't open browser help
  perf.on = !perf.on;
  perfEl.style.display = perf.on ? "block" : "none";
  perfEl.textContent = "profiling…";
});

setInterval(() => {
  if (!perf.on) return;
  const rows = perf.rows();
  const lines = rows.map((r) => `${r.type.padEnd(4)} ${r.name.padEnd(9)} ${r.avg.toFixed(2)} ms`);
  const s = gfx.settings;
  const canvas = document.querySelector("#space canvas") as HTMLCanvasElement | null;
  perfEl.textContent =
    `avg frame ${perf.frameAvg().toFixed(2)} ms over ${perf.frameCount()} frames\n` +
    lines.join("\n") +
    `\n\ngfx ${s.label} (${gfx.level}/3) · ${canvas ? canvas.width + "×" + canvas.height : "?"} · dpr ${s.pixelRatio} · ${s.stars} stars · smaa ${s.smaa ? "on" : "off"}\n` +
    gfx.lastChange();
}, 500);

/* ── skills lookup (SkillsSection) — text search only, vector search removed */
const searchInput = $("#portfolio-search") as HTMLInputElement;
const galleryInner = $("#gallery-inner");

const ICONS = {
  github:
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>',
  link: '<svg fill="#ffffff" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z" /><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" /></svg>',
  youtube:
    '<svg fill="#ffffff" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_822_"><path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861C204.394,157.263,202.325,160.684,199.021,162.41z" /></g></svg>',
  // java cup (for .jar links)
  jar: '<svg fill="#ffffff" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 305.001 305.001" xml:space="preserve"><g id="XMLID_7_"><path id="XMLID_8_" d="M150.99,56.513c-14.093,9.912-30.066,21.147-38.624,39.734c-14.865,32.426,30.418,67.798,32.353,69.288c0.45,0.347,0.988,0.519,1.525,0.519c0.57,0,1.141-0.195,1.605-0.583c0.899-0.752,1.154-2.029,0.614-3.069c-0.164-0.316-16.418-31.888-15.814-54.539c0.214-7.888,11.254-16.837,22.942-26.312c10.705-8.678,22.839-18.514,29.939-30.02c15.586-25.327-1.737-50.231-1.914-50.479c-0.688-0.966-1.958-1.317-3.044-0.84c-1.085,0.478-1.686,1.652-1.438,2.811c0.035,0.164,3.404,16.633-5.97,33.6C169.301,43.634,160.816,49.603,150.99,56.513z" /><path id="XMLID_9_" d="M210.365,67.682c0.994-0.749,1.286-2.115,0.684-3.205c-0.602-1.09-1.913-1.571-3.077-1.129c-2.394,0.91-58.627,22.585-58.627,48.776c0,18.053,7.712,27.591,13.343,34.556c2.209,2.731,4.116,5.09,4.744,7.104c1.769,5.804-2.422,16.294-4.184,19.846c-0.508,1.022-0.259,2.259,0.605,3.005c0.467,0.403,1.05,0.607,1.634,0.607c0.497,0,0.996-0.148,1.427-0.448c0.967-0.673,23.63-16.696,19.565-36.001c-1.514-7.337-5.12-12.699-8.302-17.43c-4.929-7.329-8.489-12.624-3.088-22.403C181.419,89.556,210.076,67.899,210.365,67.682z" /><path id="XMLID_10_" d="M63.99,177.659c-0.964,2.885-0.509,5.75,1.315,8.283c6.096,8.462,27.688,13.123,60.802,13.123c0.002,0,0.003,0,0.004,0c4.487,0,9.224-0.088,14.076-0.262c52.943-1.896,72.58-18.389,73.39-19.09c0.883-0.764,1.119-2.037,0.57-3.067c-0.549-1.029-1.733-1.546-2.864-1.235c-18.645,5.091-53.463,6.898-77.613,6.898c-27.023,0-40.785-1.946-44.154-3.383c1.729-2.374,12.392-6.613,25.605-9.212c1.263-0.248,2.131-1.414,2.006-2.695c-0.125-1.281-1.201-2.258-2.488-2.258C106.893,164.762,68.05,165.384,63.99,177.659z" /><path id="XMLID_11_" d="M241.148,160.673c-10.92,0-21.275,5.472-21.711,5.705c-1.01,0.541-1.522,1.699-1.245,2.811c0.278,1.111,1.277,1.892,2.423,1.893c0.232,0.001,23.293,0.189,25.382,13.365c1.85,11.367-21.82,29.785-31.097,35.923c-1.002,0.663-1.391,1.945-0.926,3.052c0.395,0.943,1.314,1.533,2.304,1.533c0.173,0,0.348-0.018,0.522-0.056c2.202-0.47,53.855-11.852,48.394-41.927C261.862,164.541,250.278,160.673,241.148,160.673z" /><path id="XMLID_12_" d="M205.725,216.69c0.18-0.964-0.221-1.944-1.023-2.506l-12.385-8.675c-0.604-0.423-1.367-0.556-2.076-0.368c-0.129,0.034-13.081,3.438-31.885,5.526c-7.463,0.837-15.822,1.279-24.175,1.279c-18.799,0-31.091-2.209-32.881-3.829c-0.237-0.455-0.162-0.662-0.12-0.777c0.325-0.905,2.068-1.98,3.192-2.405c1.241-0.459,1.91-1.807,1.524-3.073c-0.385-1.266-1.69-2.012-2.978-1.702c-12.424,2.998-18.499,7.191-18.057,12.461c0.785,9.343,22.428,14.139,40.725,15.408c2.631,0.18,5.477,0.272,8.456,0.272c0.002,0,0.003,0,0.005,0c30.425,0,69.429-9.546,69.819-9.643C204.818,218.423,205.544,217.654,205.725,216.69z" /><path id="XMLID_13_" d="M112.351,236.745c0.938-0.611,1.354-1.77,1.021-2.838c-0.332-1.068-1.331-1.769-2.453-1.755c-1.665,0.044-16.292,0.704-17.316,10.017c-0.31,2.783,0.487,5.325,2.37,7.556c5.252,6.224,19.428,9.923,43.332,11.31c2.828,0.169,5.7,0.254,8.539,0.254c30.39,0,50.857-9.515,51.714-9.92c0.831-0.393,1.379-1.209,1.428-2.127c0.049-0.917-0.409-1.788-1.193-2.267l-15.652-9.555c-0.543-0.331-1.193-0.441-1.813-0.314c-0.099,0.021-10.037,2.082-25.035,4.119c-2.838,0.385-6.392,0.581-10.562,0.581c-14.982,0-31.646-2.448-34.842-4.05C111.843,237.455,111.902,237.075,112.351,236.745z" /><path id="XMLID_14_" d="M133.681,290.018c69.61-0.059,106.971-12.438,114.168-20.228c2.548-2.757,2.823-5.366,2.606-7.07c-0.535-4.194-4.354-6.761-4.788-7.04c-1.045-0.672-2.447-0.496-3.262,0.444c-0.813,0.941-0.832,2.314-0.016,3.253c0.439,0.565,0.693,1.51-0.591,2.795c-2.877,2.687-31.897,10.844-80.215,13.294c-6.619,0.345-13.561,0.519-20.633,0.52c-43.262,0-74.923-5.925-79.079-9.379c1.603-2.301,12.801-5.979,24.711-8.058c1.342-0.234,2.249-1.499,2.041-2.845c-0.208-1.346-1.449-2.273-2.805-2.096c-0.336,0.045-1.475,0.115-2.796,0.195c-19.651,1.2-42.36,3.875-43.545,13.999c-0.36,3.086,0.557,5.886,2.726,8.324c5.307,5.963,20.562,13.891,91.475,13.891C133.68,290.018,133.68,290.018,133.681,290.018z" /><path id="XMLID_15_" d="M261.522,271.985c-0.984-0.455-2.146-0.225-2.881,0.567c-0.103,0.11-10.568,11.054-42.035,17.48c-12.047,2.414-34.66,3.638-67.211,3.638c-32.612,0-63.643-1.283-63.953-1.296c-1.296-0.063-2.405,0.879-2.581,2.155c-0.177,1.276,0.645,2.477,1.897,2.775c0.323,0.077,32.844,7.696,77.31,7.696c21.327,0,42.08-1.733,61.684-5.151c36.553-6.408,39.112-24.533,39.203-25.301C263.082,273.474,262.504,272.44,261.522,271.985z" /></g></svg>',
};

function cardHTML(p: Project): string {
  const link = resolveLink(p.link);
  const chips = (arr: string[] | undefined, keys = false) =>
    (arr ?? [])
      .map(
        (w) =>
          `<span class="chip${keys ? " chip-keys" : ""}" data-word="${w}">${w}</span>`
      )
      .join("");
  let icons = "";
  if (p.github) icons += `<a class="card-icon" href="https://github.com/${p.github}" target="_blank" rel="noopener">${ICONS.github}</a>`;
  if (link) {
    icons += link.endsWith(".jar")
      ? `<a class="card-icon" href="${link}" target="_blank" rel="noopener">${ICONS.jar}</a>`
      : `<a class="card-icon" href="${link}" target="_blank" rel="noopener">${ICONS.link}</a>`;
  }
  if (p.video) icons += `<a class="card-icon" href="https://www.youtube.com/watch?v=${p.video}" target="_blank" rel="noopener">${ICONS.youtube}</a>`;
  return `<div class="project-card" style="--image: url('${p.image ?? ""}')">
    <small class="card-year">${p.year}</small>
    <h2 class="card-title">${p.name}</h2>
    <div class="card-desc scroll-container"><small class="card-desc-text">${p.desc}</small></div>
    <div class="card-chips scroll-container">${chips(p.langs)}</div>
    ${p.keys && p.keys.length ? `<div class="card-chips card-chips-keys scroll-container">${chips(p.keys, true)}</div>` : ""}
    <div class="card-icons scroll-container">${icons}</div>
  </div>`;
}

function filteredProjects(query: string): Project[] {
  const visible = projects.filter((p) => !p.hidden);
  if (!query) return visible;
  const full = query.toLowerCase();
  const terms = full.split(" ");
  return visible.filter((p) => {
    return (
      terms.some((t) => {
        if (t === "") return false;
        if (p.name.toLowerCase().includes(t)) return true;
        if (p.desc.toLowerCase().includes(t)) return true;
        if (p.langs.some((l) => l.toLowerCase() === t)) return true;
        if (p.keys?.some((k) => k.toLowerCase() === t)) return true;
        return false;
      }) ||
      p.langs.includes(full) ||
      p.keys?.includes(full)
    );
  });
}

function renderProjects(query: string) {
  galleryInner.innerHTML = filteredProjects(query).map(cardHTML).join("");
  galleryInner.querySelectorAll<HTMLElement>(".chip").forEach((el) =>
    el.addEventListener("click", () => wordClick(el.dataset.word!))
  );
  galleryInner.classList.toggle("gallery-centered", galleryInner.children.length <= 1);
}

function wordClick(word: string) {
  searchInput.value = searchInput.value.toLowerCase() === word.toLowerCase() ? "" : word.toLowerCase();
  MQ.selected = searchInput.value ? [searchInput.value] : [];
  updateMarqueeSelection();
  renderProjects(searchInput.value);
}
searchInput.addEventListener("input", () => {
  MQ.selected = searchInput.value ? [searchInput.value.toLowerCase()] : [];
  updateMarqueeSelection();
  renderProjects(searchInput.value);
});

/* gallery wheel-snap (Gallery.vue) */
let targetPosition = 0;
let scrollFrame: number | null = null;
function approach() {
  scrollFrame = null;
  if (targetPosition === -1) return;
  targetPosition = Math.min(Math.max(targetPosition, 0), galleryInner.scrollWidth - galleryInner.clientWidth);
  if (Math.abs(targetPosition - galleryInner.scrollLeft) < 1) {
    targetPosition = -1;
    return;
  }
  galleryInner.scrollLeft = (targetPosition + galleryInner.scrollLeft * 2) / 3;
  scrollFrame = requestAnimationFrame(approach);
}
function tileWidth(): number {
  const xs = Array.from(galleryInner.children).map((c) => (c as HTMLElement).offsetLeft ?? 0);
  const diffs = xs.slice(1).map((x, i) => x - xs[i]);
  return diffs.length ? diffs.reduce((a, b) => a + b, 0) / diffs.length : 0;
}
galleryInner.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const n = galleryInner.children.length;
    if (n <= 1) return;
    const tw = tileWidth();
    const delta = 0.5 * ((e.deltaY || e.detail || 0) > 0 ? tw : 0 - tw);
    targetPosition = Math.min(Math.max(galleryInner.scrollLeft + delta, 0), galleryInner.scrollWidth - galleryInner.clientWidth);
    const d = targetPosition % tw;
    const dist = d > tw / 2 ? tw - d : d;
    if (Math.abs(dist) < delta / 4) targetPosition = Math.round(targetPosition / tw) * tw;
    if (scrollFrame === null && typeof requestAnimationFrame !== "undefined") scrollFrame = requestAnimationFrame(approach);
  },
  { passive: false }
);

/* ── writeups (overhauled section — no iframe; searches v2 index) ─────── */
// Search + sort logic ported from yun-ng-v2/public/search.js (shared code):
// - no query → all docs sorted by `created` newest first
// - query → v2's weighted full-text search (title 10, tags 5, desc 3, text 1),
//   AND semantics across include terms, `"phrase"`, `-exclude`, and the
//   type:/tag:/ctf:/cat: filters, sorted by score, capped at 50.
const writeupSearch = $("#writeup-search") as HTMLInputElement;
const writeupResults = $("#writeup-results");
const writeupStatus = $("#writeup-status");
let writeupEntries: Writeup[] = [];
let writeupLive = false;
const writeupBase = cfg.writeupsUrl.replace(/\/search-index\.json$/, "");

type WQuery = {
  tokens: { type: "include" | "exclude"; text: string }[];
  filters: { type: string | null; tags: string[]; ctf: string[]; cat: string[] };
};

function parseQuery(query: string): WQuery {
  const tokens: WQuery["tokens"] = [];
  const filters: WQuery["filters"] = { type: null, tags: [], ctf: [], cat: [] };
  const regex = /"([^"]+)"|(\S+)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(query)) !== null) {
    const phrase = match[1] || match[2];
    const lower = phrase.toLowerCase();
    const typeMatch = phrase.match(/^type:(\w+)$/i);
    if (typeMatch) { filters.type = typeMatch[1].toLowerCase(); continue; }
    const tagMatch = phrase.match(/^tag:(\w+)$/i);
    if (tagMatch) { filters.tags.push(tagMatch[1].toLowerCase()); continue; }
    const ctfMatch = phrase.match(/^ctf:(\w+)$/i);
    if (ctfMatch) { filters.ctf.push(ctfMatch[1].toLowerCase()); continue; }
    const catMatch = phrase.match(/^cat:(\w+)$/i);
    if (catMatch) { filters.cat.push(catMatch[1].toLowerCase()); continue; }
    if (lower === "and" || lower === "or") continue;
    if (lower === "not" || phrase.startsWith("-")) {
      const term = phrase.startsWith("-") ? phrase.slice(1).toLowerCase() : lower;
      if (term.length >= 2) tokens.push({ type: "exclude", text: term });
    } else {
      tokens.push({ type: "include", text: lower });
    }
  }
  return { tokens, filters };
}

function searchDocs(docs: Writeup[], query: string): Writeup[] {
  const { tokens, filters } = parseQuery(query);
  const includeTerms = tokens.filter((t) => t.type === "include").map((t) => t.text);
  const excludeTerms = tokens.filter((t) => t.type === "exclude").map((t) => t.text);

  if (includeTerms.length === 0 && !filters.type && filters.tags.length === 0 && filters.ctf.length === 0 && filters.cat.length === 0) {
    // no query → everything, newest first (v2 home list behaviour)
    return docs
      .slice()
      .sort((a, b) => (b.created || "").localeCompare(a.created || ""))
      .slice(0, 50);
  }

  const results: { doc: Writeup; score: number }[] = [];
  for (const doc of docs) {
    if (filters.type) {
      const isBlog = (doc.path || "").startsWith("/blog/");
      const isWriteup = (doc.path || "").startsWith("/ctf/") || (doc.path || "").startsWith("/htb/");
      if (filters.type === "blog" && !isBlog) continue;
      if (filters.type === "writeup" && !isWriteup) continue;
    }
    if (filters.tags.length > 0) {
      const docTags = (doc.tags || []).map((t) => t.toLowerCase());
      if (!filters.tags.every((t) => docTags.includes(t))) continue;
    }
    if (filters.ctf.length > 0) {
      const parts = (doc.path || "").split("/").filter(Boolean);
      const ctfSlug = parts[1] ? parts[1].replace(/^\d+-/, "").toLowerCase() : "";
      if (!filters.ctf.every((c) => ctfSlug.includes(c))) continue;
    }
    if (filters.cat.length > 0) {
      const parts = (doc.path || "").split("/").filter(Boolean);
      const cat = parts[2] ? parts[2].toLowerCase() : "";
      if (!filters.cat.every((c) => cat === c)) continue;
    }
    const title = (doc.title || "").toLowerCase();
    const desc = (doc.description || "").toLowerCase();
    const text = (doc.text || "").toLowerCase();
    const tags = (doc.tags || []).join(" ").toLowerCase();
    let excluded = false;
    for (const term of excludeTerms) {
      if (title.includes(term) || desc.includes(term) || text.includes(term) || tags.includes(term)) {
        excluded = true;
        break;
      }
    }
    if (excluded) continue;

    let score = 0;
    let allMatched = true;
    for (const term of includeTerms) {
      let termScore = 0;
      if (title.includes(term)) termScore += 10;
      if (tags.includes(term)) termScore += 5;
      if (desc.includes(term)) termScore += 3;
      if (text.includes(term)) termScore += 1;
      if (termScore === 0) { allMatched = false; break; }
      score += termScore;
    }
    if (allMatched && (score > 0 || includeTerms.length === 0)) {
      results.push({ doc, score: score || 1 });
    }
  }
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 50)
    .map((r) => r.doc);
}

function writeupRowHTML(w: Writeup): string {
  const tags = (w.tags ?? []).slice(0, 6).map((t) => `<span class="w-tag">#${t}</span>`).join("");
  const date = w.dateStr || (w.created ? new Date(w.created).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "");
  return `<a class="w-row" href="${writeupBase}/c${w.path}" target="_blank" rel="noopener">
    <div class="w-row-title">${w.title ?? w.path.split("/").pop()}</div>
    <div class="w-row-meta">${date}${tags ? " · " + tags : ""}</div>
    ${w.description ? `<div class="w-row-desc">${w.description}</div>` : ""}
  </a>`;
}

function renderWriteups() {
  const q = writeupSearch.value.trim();
  const list = searchDocs(writeupEntries, q);
  writeupResults.innerHTML = list.map(writeupRowHTML).join("");
  const src = writeupLive ? "live index" : "local list";
  if (!writeupEntries.length) {
    writeupStatus.textContent = "no writeups found";
  } else if (!q) {
    writeupStatus.textContent = `${writeupEntries.length} writeups · ${src}${writeupLive ? "" : " (v2 index unreachable — using fallback list)"}`;
  } else {
    writeupStatus.textContent = `${list.length} / ${writeupEntries.length} matches · ${src}`;
  }
}

async function loadWriteups() {
  writeupStatus.textContent = "loading index…";
  try {
    const res = await fetch(cfg.writeupsUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const entries = Array.isArray(json) ? json : json?.entries;
    if (!Array.isArray(entries)) throw new Error("unexpected index shape");
    writeupEntries = entries;
    writeupLive = true;
  } catch (e) {
    console.warn("[writeups] index unreachable, using local fallback:", e);
    writeupEntries = data.writeups ?? [];
    writeupLive = false;
  }
  renderWriteups();
}
writeupSearch.addEventListener("input", renderWriteups);
loadWriteups();

/* ── boot ─────────────────────────────────────────────────────────────── */
calculateRows();
renderProjects("");
tagline.classList.add("clickable");
// 3D camera progress is rAF-polled from scrollY directly (not scroll events):
// scroll events can be coalesced/throttled, and polling keeps the camera
// perfectly in sync with the rendered frame.
initSpace(() => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
});

window.addEventListener("resize", () => {
  calculateRows();
  resizeSpace();
});
