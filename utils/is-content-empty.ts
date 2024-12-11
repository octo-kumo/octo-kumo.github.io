import type { MarkdownNode, ParsedContent } from "@nuxt/content"

export default (content?: ParsedContent) => {
  if (!content?.body?.children.length) return true
  return empty(content.body);
}

function empty(node: MarkdownNode) {
  if (node.value) return false;
  if (node.children) return node.children.every(empty);
  return true;
}