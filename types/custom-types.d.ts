import type {ComputedRef, MaybeRef} from "vue";
import type {LayoutKey} from "#build/types/layouts";

export type Page = {
    title: string;
    description: string;
    image?: string;
    layout: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>;
};
