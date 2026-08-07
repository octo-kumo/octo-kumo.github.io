// Minimal type declarations for the vendored powerglitch (MIT, 7PH/powerglitch).
// The full API is `PowerGlitch.glitch(element, options)` → { startGlitch, stopGlitch }.
export interface PowerGlitchOptions {
  playMode?: "always" | "hover" | "click" | "manual";
  optimizeSeo?: boolean;
  createContainers?: boolean;
  hideOverflow?: boolean;
  timing?: { duration?: number; iterations?: number; easing?: string; delay?: number };
  glitchTimeSpan?: { start?: number; end?: number };
  shake?: { velocity?: number; amplitudeX?: number; amplitudeY?: number } | false;
  slice?: {
    count?: number;
    velocity?: number;
    minHeight?: number;
    maxHeight?: number;
    hueRotate?: boolean;
    cssFilters?: string;
  } | false;
  pulse?: { scale?: number } | false;
  html?: string;
}
export interface GlitchInstance {
  startGlitch(): void;
  stopGlitch(): void;
}
export declare const PowerGlitch: {
  glitch(element: HTMLElement | string | NodeListOf<HTMLElement> | HTMLElement[], options?: PowerGlitchOptions): GlitchInstance;
};
export declare const mergeOptions: (a: PowerGlitchOptions, b: PowerGlitchOptions) => PowerGlitchOptions;
