import type { NavItem, ParsedContent } from "@nuxt/content";

export default function (item?: ParsedContent | NavItem | Partial<ParsedContent> | null): string {
    if (item?.title && item?.tags?.includes('blog') && !isNaN(new Date(item?.title).getTime())) {
        // return item?.title ?? '';
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
