import type {ContentDocLike} from "~/types/custom-types";

const categories = [
    "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev", "misc", "osint", "box", "hardware"
];

export default function getCtfCategory(doc?: ContentDocLike) {
    const cat = doc?._path?.split("/").at(-2) ?? 'unknown'
    if (categories.includes(cat)) return cat;
    return undefined;
}
