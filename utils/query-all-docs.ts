import type { NavItem } from "@nuxt/content";

export default async function queryAllDocs(indexPage?: boolean): Promise<{ nav: NavItem[], flat: NavItem[] }> {
    const nav = removeNavChildSelf(await fetchContentNavigation(queryContent("/")
        .where({ _extension: { $eq: 'md' }, ...(indexPage ? { created: { $exists: true } } : {}) }).sort({ created: -1 })));
    return { nav, flat: flatten(nav).map(clean) };
}

function removeNavChildSelf(items: NavItem[], parent?: NavItem) {
    items = items.filter(c => c._path !== parent?._path);
    for (let item of items) {
        if (item.children) {
            if (item._path === "/ctf") item.children?.sort(sorter);
            item.children = removeNavChildSelf(item.children, item);
        }
        if (oneLvlUp(oneLvlUp(item._path)) === '/ctf' && item.children?.length) {
            item.points = item.children.reduce((acc, c) => acc + (c.points || 0), 0);
            item.challenges = item.children.length;
            if (parent?.points !== 0) item.percent = Math.round(item.points / parent?.points * 100);
            // if (item.challenges !== 0 && parent?.points) item.description ||= `avg ${Math.round(item.points / item.challenges)} · ${}%`;
        }
    }
    return items;
}

function clean(item: NavItem) {
    item = { ...item };
    delete item.children;
    return item;
}

function flatten(query: NavItem[]): NavItem[] {
    let all = [];
    for (let item of query) {
        item.title = guessArticleTitle(item);
        if (item.children) all.push(...flatten(item.children));
        all.push(item);
    }
    return all;
}
function sorter(a: NavItem, b: NavItem) {
    return -a.created?.localeCompare(b.created);
}