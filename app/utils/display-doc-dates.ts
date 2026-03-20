import displayDatetime from './display-datetime'

export default function displayDocDates(doc?: { created?: any, updated?: any } | null) {
    if (!doc) return '';
    const a = displayDatetime(doc.created);
    const b = displayDatetime(doc.updated);
    return a === b ? a : `${a} · edited ${b}`
}
