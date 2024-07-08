export default function displayDocDates(doc?: { created: string, updated: string }) {
    if (!doc) return '';
    const a = displayNiceDatetime(doc.created);
    const b = displayNiceDatetime(doc.updated);
    return a === b ? a : `${a} · edited ${b}`
}
