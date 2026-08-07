declare module "subset-font" {
  interface SubsetFontOptions {
    targetFormat?: "woff2" | "sfnt" | "woff" | "truetype";
    preserveNameIds?: number[];
  }
  export default function subsetFont(
    font: Buffer | Uint8Array,
    text: string,
    options?: SubsetFontOptions
  ): Promise<Buffer>;
}
