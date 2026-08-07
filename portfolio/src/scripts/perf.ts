/* ── per-component frame profiler (F1 debug overlay) ─────────────────────
   Components are measured with begin(type, name) / end(type, name) pairs
   and aggregated by type. Completely zero-cost when off: every entry point
   returns immediately unless `perf.on` is true — no timestamps, no
   allocations, no Map lookups. */

type Sample = { sum: number; n: number };

let enabled = false;
let t0 = 0;
let frameSum = 0;
let frameN = 0;
const stack: string[] = [];
const samples = new Map<string, Sample>();

// always-on rolling frame-time ring — the auto-config lag sensor. Just one
// push+shift per frame, far too cheap to gate behind the debug flag.
const RING = 120;
const frameRing: number[] = [];

export const perf = {
  get on() {
    return enabled;
  },
  set on(v: boolean) {
    enabled = v;
    if (v) {
      stack.length = 0;
      samples.clear();
      frameSum = 0;
      frameN = 0;
    }
  },
  begin(type: string, name: string) {
    if (!enabled) return;
    stack.push(`${type}\u0001${name}\u0001${performance.now()}`);
  },
  end(type: string, name: string) {
    if (!enabled) return;
    const key = `${type}\u0001${name}`;
    const top = stack.pop();
    if (!top || !top.startsWith(key + "\u0001")) return;
    const dt = performance.now() - parseFloat(top.slice(key.length + 1));
    let s = samples.get(key);
    if (!s) {
      s = { sum: 0, n: 0 };
      samples.set(key, s);
    }
    s.sum += dt;
    s.n += 1;
  },
  frameStart() {
    if (enabled) t0 = performance.now();
  },
  frameEnd() {
    if (!enabled) return;
    frameSum += performance.now() - t0;
    frameN += 1;
  },
  // auto-config sensor (always on, gated above by the debug flag)
  sampleFrame(dt: number) {
    frameRing.push(dt);
    if (frameRing.length > RING) frameRing.shift();
  },
  frameSampleCount() {
    return frameRing.length;
  },
  clearFrameRing() {
    frameRing.length = 0;
  },
  recentAvg() {
    if (!frameRing.length) return 0;
    let s = 0;
    for (const t of frameRing) s += t;
    return s / frameRing.length;
  },
  frameCount() {
    return frameN;
  },
  frameAvg() {
    return frameN ? frameSum / frameN : 0;
  },
  rows(): { type: string; name: string; avg: number }[] {
    const out: { type: string; name: string; avg: number }[] = [];
    for (const [key, s] of samples) {
      const sep = key.indexOf("\u0001");
      out.push({ type: key.slice(0, sep), name: key.slice(sep + 1), avg: s.sum / s.n });
    }
    return out.sort((a, b) => (a.type < b.type ? -1 : a.type > b.type ? 1 : a.name < b.name ? -1 : 1));
  },
};
