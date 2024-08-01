import type { NavItem, ParsedContent } from "@nuxt/content";

export default function displayDocDates(doc?: ParsedContent | NavItem | { created: string, updated: string }) {
    if (!doc) return '';
    const a = displayDatetime(doc.created);
    const b = displayDatetime(doc.updated);
    return a === b ? a : `${a} · edited ${b}`
}
