import type { ContentDocLike } from "~/../types/custom-types";

export default function (item?: ContentDocLike): string {
    if (item?.title && item?.tags?.includes('blog') && /^\d{4}-\d{2}-\d{2}$/.test(item?.title ?? "")) {
        return new Date(item?.title).toLocaleDateString(undefined, {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        });
    }
    return item?.title || item?.path?.split('/')?.pop() || 'Unknown';
}
