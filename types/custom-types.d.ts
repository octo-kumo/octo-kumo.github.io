import type { ComputedRef, MaybeRef } from "vue";
import type { LayoutKey } from "#build/types/layouts";
import type { PageCollections } from "@nuxt/content";

export type Page = {
    title: string;
    description: string;
    image?: string;
    layout: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>;
};

export interface IPurchasableItem {
    name: string;
    source: string;
    price: number;
    weight: number;
    amount: number;
}

export type ContentDocLike = PageCollections['content'] | Partial<PageCollections['content']> | null;
