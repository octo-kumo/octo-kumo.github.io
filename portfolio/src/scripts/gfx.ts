/* ── adaptive graphics quality (auto-config from the lag sensor) ────────
   The quality ladder is walked by a detector that watches the rolling
   average frame time (perf.recentAvg): sustained lag drops one level,
   sustained headroom raises one level. The page never hard-fails on a weak
   machine — it degrades gracefully, and climbs back when it can.

   space.ts registers the apply callback that actually mutates the
   renderer/composer; this module stays dumb (state + policy only). */

import { perf } from "./perf.js";

export type GfxLevel = 0 | 1 | 2 | 3; // low → ultra

export const GFX_LADDER = [
  { label: "low", pixelRatio: 0.5, smaa: false, stars: 400 },
  { label: "medium", pixelRatio: 0.75, smaa: true, stars: 600 },
  { label: "high", pixelRatio: 1, smaa: true, stars: 900 },
  { label: "ultra", pixelRatio: 1, smaa: true, stars: 1200 },
] as const;

// frame-time thresholds (ms): below 30fps of actual render work sustained →
// downgrade; above ~70fps of work sustained → upgrade back. Downgrades need
// 2 bad windows (a single hiccup must not nuke quality), upgrades need 4
// good ones. The ring is cleared after every change so the next evaluation
// only sees the new level's performance.
const DOWNGRADE_AT = 33;
const UPGRADE_AT = 14;
const DOWNGRADE_WINDOWS = 2;
const UPGRADE_WINDOWS = 4;
const MIN_SAMPLES = 30; // ignore evaluations until the ring has data (startup)
const EVAL_MS = 2000;

let level: GfxLevel = 3;
let applyFn: ((l: GfxLevel) => void) | null = null;
let goodWindows = 0;
let badWindows = 0;
let lastLog = "gfx: starting at ultra";
let started = false;

export const gfx = {
  register(apply: (l: GfxLevel) => void) {
    applyFn = apply;
  },
  start() {
    if (started) return;
    started = true;
    setInterval(evaluate, EVAL_MS);
  },
  get level() {
    return level;
  },
  get settings() {
    return GFX_LADDER[level];
  },
  lastChange() {
    return lastLog;
  },
};

function evaluate() {
  if (!applyFn) return;
  if (perf.frameSampleCount() < MIN_SAMPLES) return; // startup grace
  const avg = perf.recentAvg();
  if (avg > DOWNGRADE_AT && level > 0) {
    badWindows += 1;
    if (badWindows >= DOWNGRADE_WINDOWS) {
      level = (level - 1) as GfxLevel;
      badWindows = 0;
      goodWindows = 0;
      lastLog = `gfx: auto-downgraded → ${GFX_LADDER[level].label} (avg frame ${avg.toFixed(0)}ms)`;
      perf.clearFrameRing();
      applyFn(level);
    }
  } else if (avg < UPGRADE_AT && level < 3) {
    goodWindows += 1;
    if (goodWindows >= UPGRADE_WINDOWS) {
      level = (level + 1) as GfxLevel;
      goodWindows = 0;
      badWindows = 0;
      lastLog = `gfx: auto-upgraded → ${GFX_LADDER[level].label} (avg frame ${avg.toFixed(2)}ms)`;
      perf.clearFrameRing();
      applyFn(level);
    }
  } else {
    goodWindows = 0;
    badWindows = 0;
  }
}
