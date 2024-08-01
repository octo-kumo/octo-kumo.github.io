import type { NavItem } from "@nuxt/content";

export default async function queryAllDocs(indexPage?: boolean): Promise<{ nav: NavItem[], flat: NavItem[] }> {
    const nav = await fetchContentNavigation(queryContent("/")
        .where({ _extension: { $eq: 'md' }, ...(indexPage ? { created: { $exists: true } } : {}) }).sort({ created: -1 }));
    return { nav: removeNavChildSelf(nav), flat: flatten(nav) };
}

function removeNavChildSelf(items: NavItem[], _path?: string) {
    items = items.filter(c => c._path !== _path);
    for (let item of items)
        if (item.children) item.children = removeNavChildSelf(item.children, item._path);
    return items;
}


function flatten(query: NavItem[]): NavItem[] {
    let all = [];
    for (let item of query) {
        item.title = guessArticleTitle(item);
        if (item.children) {
            if (item._path === "/ctf")
                item.children.sort(sorter);
            all.push(...flatten(item.children));
        } else all.push(item)
    }
    return all;
}
function sorter(a: NavItem, b: NavItem) {
    return -a.created?.localeCompare(b.created);
}