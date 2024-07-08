import type {NavItem} from "@nuxt/content";

export default function removeNavChildSelf(parent: NavItem) {
    if (parent.children) (parent.children = parent.children.filter(c => c._path !== parent._path)).forEach(c => removeNavChildSelf(c));
    return parent;
}
