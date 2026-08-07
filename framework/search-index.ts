// Build-time: generate stripped plain-text search index from all docs
// Each entry: { path, title, description, tags, created, dateStr, text }
// text = markdown stripped to plain text (images→alt, **bold**→bold, code→text, etc.)

import { docTitle } from "./content";

function stripMarkdown(md: string): string {
  return md
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove code blocks (```...```)
    .replace(/```[\s\S]*?```/g, ' ')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Images → alt text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Links → text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Headers → text (remove #)
    .replace(/^#{1,6}\s+/gm, '')
    // Bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Strikethrough
    .replace(/~~([^~]+)~~/g, '$1')
    // Blockquotes
    .replace(/^>\s+/gm, '')
    // List markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    // Horizontal rules
    .replace(/^---+$/gm, ' ')
    // MDC components (:youtube{...}, etc.)
    .replace(/:[a-zA-Z]+\{[^}]*\}/g, ' ')
    // MDC containers (:::container ... :::)
    .replace(/:::[a-zA-Z-]*\s*/g, ' ')
    .replace(/:::\s*/g, ' ')
    // Multiple whitespace
    .replace(/\n/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function formatDate(d: string): string {
  if (!d) return '';
  try {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return '';
  }
}

export function buildSearchIndex(docs: any[]): { version: string; entries: any[] } {
  const entries = docs
    .filter(d => d._bodyRaw || d.body?.raw)
    .map(d => {
      const title = docTitle(d);
      const created = d.created || "";
      return {
        path: d.path,
        title,
        description: d.description || '',
        tags: d.tags || [],
        created,
        dateStr: formatDate(created),
        text: stripMarkdown(d._bodyRaw || d.body?.raw || ''),
      };
    });

  // Version hash from content (single rolling hash — short string, changes when any doc changes)
  let hash = 0;
  for (const e of entries) {
    const s = e.path + e.title + e.text.slice(0, 100);
    for (let i = 0; i < s.length; i++) {
      hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0;
    }
  }
  const version = String(entries.length) + '-' + (hash >>> 0).toString(36);

  return { version, entries };
}
