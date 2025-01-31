import type { ContentDocLike } from "~/types/custom-types";

export const chal_categories = [
    "ai", "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev", "misc", "osint", "box", "hardware", "blockchain", "defence", "radio", "network"
];

export default function getCtfCategory(doc?: ContentDocLike) {
    const cat = doc?.path?.split("/").at(-2) ?? 'unknown'
    if (chal_categories.includes(cat)) return cat;
    return undefined;
}
