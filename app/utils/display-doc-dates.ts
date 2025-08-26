export default function displayDocDates(doc?: { created?: any, updated?: any }) {
    if (!doc) return '';
    const a = displayDatetime(doc.created);
    const b = displayDatetime(doc.updated);
    return a === b ? a : `${a} · edited ${b}`
}
