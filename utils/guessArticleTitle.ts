import type {NavItem, ParsedContent} from "@nuxt/content";

export default function (item?: ParsedContent | NavItem | Partial<ParsedContent> | null): string {
    return item?.title || item?._path?.split('/')?.pop() || 'Unknown';
}
