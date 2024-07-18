import type {ContentDocLike} from "~/types/custom-types";

export const chal_categories = [
    "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev", "misc", "osint", "box", "hardware"
];

export default function getCtfCategory(doc?: ContentDocLike) {
    const cat = doc?._path?.split("/").at(-2) ?? 'unknown'
    if (chal_categories.includes(cat)) return cat;
    return undefined;
}
