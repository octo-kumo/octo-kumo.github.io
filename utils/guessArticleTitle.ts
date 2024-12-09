import type { NavItem, ParsedContent } from "@nuxt/content";

export default function (item?: ParsedContent | NavItem | Partial<ParsedContent> | null): string {
    if (item?.title && item?.tags?.includes('blog') && /^\d{4}-\d{2}-\d{2}$/.test(item?.title ?? "")) {
        return new Date(item?.title).toLocaleDateString(undefined, {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        });
    }
    return item?.title || item?._path?.split('/')?.pop() || 'Unknown';
}
