import type {Ref} from "@vue/reactivity";
import {guessPathName} from "~/mixins/display";

const isMathPatternPath = (pathA: string, pathB: string) => {
    const partsA = pathA.split('/');
    const partsB = pathB.split('/');

    if (partsA.length !== partsB.length) return false;

    return partsA.every((part: string, i: number) => {
        return part === partsB[i] || part.startsWith(':');
    });
}

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

export const useBreadcrumbs = () => {
    const router = useRouter();
    const route = useRoute()
    const routes = router.getRoutes();

    const HOMEPAGE = {title: '云', href: '/', disabled: false};
    const breadcrumbs: Ref<BreadcrumbsItem[]> = ref([HOMEPAGE])

    function getBreadcrumbs(currRoute: string): BreadcrumbsItem[] {
        if (currRoute === '') return [HOMEPAGE];

        const paths = getBreadcrumbs(currRoute.slice(0, currRoute.lastIndexOf('/')));
        const founds = routes.filter(r => isMathPatternPath(r.path, currRoute));
        const matchRoute = founds.length > 1 ? founds.find(r => r.path === currRoute) : founds[0];
        return [
            ...paths,
            {
                href: matchRoute?.path,
                title: guessPathName(String(matchRoute?.name)) || matchRoute?.path || currRoute,
            }
        ]
    }

    watch(() => ({
        path: route.path,
        name: route.name,
        meta: route.meta,
        matched: route.matched,
    }), (route) => {
        if (route.path === '/') return;
        breadcrumbs.value = getBreadcrumbs(route.path);
    }, {
        immediate: true,
    })

    return {
        breadcrumbs
    }
}
