import type { ContentNavigationItem } from "@nuxt/content";

export default async function queryAllDocs(indexPage?: boolean): Promise<{ nav: ContentNavigationItem[], flat: ContentNavigationItem[] }> {
    const docs = await queryCollectionNavigation('content',
        ['title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'rank', 'team', 'readingTime']
    ).order('created', 'DESC');
    const nav = updateNavItem(docs);
    return { nav, flat: flatten(nav).map(clean) };
}

function updateNavItem(items: ContentNavigationItem[], parent?: ContentNavigationItem) {
    items.forEach(item => {
        item.title = guessArticleTitle(item);
    });
    items = items.filter(c => c.path !== parent?.path);
    for (let item of items) {
        if (item.children) {
            if (item.path === "/ctf") item.children?.sort(sorter);
            item.children = updateNavItem(item.children, item);
        }
        if (oneLvlUp(oneLvlUp(item.path)) === '/ctf' && item.children?.length) {
            // for category notes
            item.points = item.children.reduce((acc, c) => acc + ((c.points as number) || 0), 0);
            item.challenges = item.children.length;
            if (parent?.points) item.percent = Math.round((item.points as number) / (parent?.points as number) * 100);
            // if (item.challenges !== 0 && parent?.points) item.description ||= `avg ${Math.round(item.points / item.challenges)} · ${}%`;
        }
        item._tags = [...new Set([...((item.tags as string[]) || []), getCtfCategory(item)].filter(Boolean))];
    }
    return items;
}

function clean(item: ContentNavigationItem) {
    item = { ...item };
    delete item.children;
    return item;
}

function flatten(query: ContentNavigationItem[]): ContentNavigationItem[] {
    let all = [];
    for (let item of query) {
        item.title = guessArticleTitle(item);
        if (item.children) all.push(...flatten(item.children));
        all.push(item);
    }
    return all;
}
function sorter(a: ContentNavigationItem, b: ContentNavigationItem) {
    return -(a.created as string)?.localeCompare(b.created as string);
}