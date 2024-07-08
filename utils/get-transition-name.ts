import type {ContentDocLike} from "~/types/custom-types";

export default function getTransitionName(article?: ContentDocLike, tag?: string) {
    return ("content-" + (tag ?? '') + "-" + (article?._id ?? 'null')).replace(/[^a-zA-Z0-9\-_]/g, "-");
}
