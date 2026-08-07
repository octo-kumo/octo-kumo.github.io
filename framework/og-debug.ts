/**
 * OG Image Debug utilities — layout checker and benchmark.
 *
 * Only used when DEBUG_OG=1 or BENCH_OG=1.
 * Separated from og-image.ts to keep the main file clean.
 */

import { generateOGImage, inferPageType, type OGDoc, type BoundingBox } from "./og-image";

export interface LayoutViolation {
  type: "overlap" | "out-of-bounds";
  message: string;
  elements?: [string, string];
}

export function debugCheckLayout(
  elements: BoundingBox[],
  canvasWidth: number,
  canvasHeight: number,
): LayoutViolation[] {
  const violations: LayoutViolation[] = [];

  for (const el of elements) {
    if (el.x < 0 || el.y < 0) {
      violations.push({ type: "out-of-bounds", message: `${el.label} is out of bounds (negative position)` });
    }
    if (el.x + el.w > canvasWidth || el.y + el.h > canvasHeight) {
      violations.push({ type: "out-of-bounds", message: `${el.label} extends beyond canvas` });
    }
  }

  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const a = elements[i], b = elements[j];
      const overlap = !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
      if (overlap) {
        violations.push({ type: "overlap", message: `${a.label} overlaps ${b.label}`, elements: [a.label, b.label] });
      }
    }
  }

  return violations;
}

export interface BenchmarkResult {
  total: number;
  totalTime: number;
  average: number;
  min: number;
  max: number;
}

export async function benchmarkOGGeneration(docs: OGDoc[]): Promise<BenchmarkResult> {
  const sample = docs.slice(0, Math.min(20, docs.length));
  const times: number[] = [];

  for (const doc of sample) {
    const pageType = inferPageType(doc.path || "");
    const start = performance.now();
    await generateOGImage(doc, pageType);
    const elapsed = performance.now() - start;
    times.push(elapsed);
  }

  const total = times.reduce((a, b) => a + b, 0);
  const avg = total / times.length;
  const min = Math.min(...times);
  const max = Math.max(...times);
  console.log(`[OG:benchmark] ${sample.length} images — avg: ${avg.toFixed(1)}ms, min: ${min.toFixed(1)}ms, max: ${max.toFixed(1)}ms`);
  return { total: sample.length, totalTime: total, average: avg, min, max };
}
