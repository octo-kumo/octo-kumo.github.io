import type { MarkdownRoot } from "@nuxt/content";
import type { MDCNode, MDCRoot, MDCText } from "@nuxtjs/mdc";
import type { ContentDocLike } from "~/../types/custom-types";

export default (content?: ContentDocLike) => {
  if (!content) return true;
  if (!(content?.body as any)?.value?.length) return true
  return empty(content.body);
}
type TrueType = MDCNode & {
  value: MDCNode[];
}
function empty(node?: MDCRoot | MDCNode | MarkdownRoot): boolean {
  if (!node) return true;
  if ((node as MDCText).value) return false;
  if ((node as TrueType).value) return (node as TrueType).value.every(empty);
  return true;
}