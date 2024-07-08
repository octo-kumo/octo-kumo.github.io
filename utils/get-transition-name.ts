import type {NavItem, ParsedContent} from "@nuxt/content";

export default function getTransitionName(article?: ParsedContent | NavItem | Partial<ParsedContent> | null, tag?: string) {
    return ("content-" + (tag ?? '') + "-" + (article?._id ?? 'null')).replace(/[^a-zA-Z0-9\-_]/g, "-");
}
