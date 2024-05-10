import type {Ref} from "@vue/reactivity";
import type {RouteLocationMatched, RouteMeta, RouteRecordName} from "vue-router";

interface BreadcrumbsItem {
    color?: string | undefined;
    title?: string | undefined;
    class?: any;
    href?: string | undefined;
    to?: string | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
    disabled?: boolean;
}

function getBreadcrumbs(route: {
    path: string
    name: RouteRecordName | null | undefined
    meta: RouteMeta
    matched: RouteLocationMatched[]
}) {
    const pathArray = route.path.split('/');
    pathArray.shift();
    return pathArray.reduce((breadcrumbArray: BreadcrumbsItem[], path: string, idx: number) => {
        breadcrumbArray.push({
            to: !!breadcrumbArray[idx - 1]
                ? breadcrumbArray[idx - 1].to + '/' + path
                : '/' + path,
            title: path.toString().replace('-', ' '),
        });
        return breadcrumbArray;
    }, [{title: '云', href: '/', disabled: false}]);
}

export const useBreadcrumbs = () => {
    const route = useRoute()
    const breadcrumbs: Ref<BreadcrumbsItem[]> = ref(getBreadcrumbs(route))
    watch(() => ({
        path: route.path,
        name: route.name,
        meta: route.meta,
        matched: route.matched,
    }), (route, oldValue) => {
        if (route.path !== oldValue?.path)
            breadcrumbs.value = getBreadcrumbs(route);
    }, {
        immediate: true,
    })
    return {
        breadcrumbs
    }
}
