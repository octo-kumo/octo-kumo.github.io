export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
}

export function guessPathName(name: string | symbol) {
    return toTitleCase(String(name).replace("projects-", "").replace("-", " "))
}
