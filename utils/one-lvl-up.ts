export default function oneLvlUp(path?: string) {
    return path?.replace(/\/[^/]+$/, '') || '/';
}
