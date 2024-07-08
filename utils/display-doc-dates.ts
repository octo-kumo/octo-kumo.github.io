import type {ParsedContent} from "@nuxt/content";

export default function displayDocDates(doc?: ParsedContent | { created: string, updated: string }) {
    if (!doc) return '';
    const a = displayNiceDatetime(doc.created);
    const b = displayNiceDatetime(doc.updated);
    return a === b ? a : `${a} · edited ${b}`
}
