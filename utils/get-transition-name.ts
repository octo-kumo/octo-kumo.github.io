import type { ContentDocLike } from "~/types/custom-types";

export default function getTransitionName(article?: ContentDocLike, tag?: string) {
    return ("content-" + (tag ?? '') + "-" + ((article?.id ?? article?.path) ?? 'null')).replace(/[^a-zA-Z0-9\-_]/g, "-");
}
