<script setup lang="ts">
import TableOfContents from "~/components/TableOfContents.vue";
import "katex/dist/katex.min.css";
import isContentEmpty from "~/utils/is-content-empty";
import type { ContentNavigationItem, PageCollections, TocLink } from "@nuxt/content";
import type { FilterNodeMethodFunction, TreeNodeData, TreeOptionProps } from "element-plus/es/components/tree/src/tree.type.mjs";
import type Node from "element-plus/es/components/tree/src/model/node";
import type { ElTree } from "element-plus";
const route = useRoute();
const path = (route.path.substring(2) || "/")
  .replace(/(?!^)\/$/, ''); // strip trailing slash

function breadcrumbs(path: string) {
  const segments = path.split('/').filter(segment => segment !== '');
  const breadcrumbs: { path: string, name: string }[] = [];
  segments.reduce((accumulatedPath, segment) => {
    const fullPath = `${accumulatedPath}/${segment}`;
    breadcrumbs.push({
      path: fullPath,
      name: segment
    });
    return fullPath;
  }, '');
  return breadcrumbs;
}

// function recursiveSort(nav?: NavItem[] | null) {
//   if (!(nav && Array.isArray(nav) && nav.length > 0)) return
//   nav.sort((a, b) => String(getDoc(b.path)?.created).localeCompare(getDoc(a.path)?.created))
//   nav.forEach(c => recursiveSort(c.children));
//   return nav
// }

const { data: doc, status } = await useLazyAsyncData(`c/doc_${path}`, () =>
  queryCollection('content').path(path).first().then((r: PageCollections['content']) => {
    r.title = guessArticleTitle(r);
    return r;
  }));
const { data: alldocs } = await useLazyAsyncData(`c/docs`, () => queryAllDocs());
const docs = computed(() => alldocs.value?.flat);
const navigation = computed(() => alldocs.value?.nav);

const nav: ComputedRef<{ prev?: Partial<ContentNavigationItem>, next?: Partial<ContentNavigationItem> }> = computed(() => {
  if (!docs.value) return {};
  const peers = docs.value.filter(d => oneLvlUp(d.path) === oneLvlUp(path)); // must not be parent
  const meIndex = peers.findIndex(d => d.path === path);
  const [prev, next] = peers.length > 1 ? [
    peers[(meIndex - 1 + peers.length) % peers.length],
    peers[(meIndex + 1) % peers.length],
  ] : [];
  return { prev, next };
})
// const isLeaf = computed(() => !docs.value?.some(d => d.path !== path && d.path?.startsWith(path)));

if (typeof defineOgImageComponent !== "undefined") defineOgImageComponent('Post', {
  doc: doc.value
}, {
  width: 800,
  height: 300,
});
useSeoMeta({
  title: () => guessArticleTitle(doc?.value) ?? "Content",
  ogTitle: () => guessArticleTitle(doc?.value) ?? "Content",
  description: () => doc?.value?.description,
  ogDescription: () => doc?.value?.description,
  articleModifiedTime: () => new Date(doc?.value?.updated ?? 0).toISOString()
});
definePageMeta({
  title: "Content",
  customHead: true,
  disableSEO: true
  // title: () => guessArticleTitle(doc?.value) ?? "Content",
  // description: () => doc?.value?.description
});
const treeProps: TreeOptionProps = {
  children: 'children',
  label: (data: TreeNodeData, node: Node) => data.title as string
};

function navToToc(nav?: ContentNavigationItem[] | null, depth = 0): TocLink[] {
  if (depth >= 2) return [];
  return nav?.map((a: any) => ({
    id: 'content_' + hashCode(a.path).toString(16).padStart(8, '0'),
    text: guessArticleTitle(a),
    children: navToToc(a.children, depth + 1),
    depth: depth
  })) ?? [];
}

const TOC = computed(() => {
  let toc = doc.value?.body?.toc?.links ?? [];
  if (path === '/') toc = [...toc, ...navToToc(navigation.value)];
  return toc;
});

const contentSpacingRight = computed(() => TOC.value.length > 0 ? '12.5rem' : '0');
const pageViews = useState<number>('page-views');

/*
ONLY APPLICABLE TO WRITEUP STATISTICS
*/
interface Tree {
  [key: string]: any
}
const statsControl = ref({ catFilter: [] });
watch(statsControl, () => {
  const tree = treeRef.value as Tree;
  const catFilter = statsControl.value.catFilter;
  tree.filter(catFilter);
}, { deep: true });

const treeRef = ref<InstanceType<typeof ElTree>>()
const filterTreeNode: FilterNodeMethodFunction = (values: string[], data: TreeNodeData) => {
  if (values.length === 0) return true;
  const cat = getCtfCategory(data);
  return Boolean(cat && values.includes(cat));
}
///

</script>
<template>
  <template v-if="doc">
    <article class="content-page-sections mt-1">
      <el-breadcrumb separator="/" v-if="path && path !== '/'" v-shared="'content-bc'" class="font-mono print:hidden">
        <el-breadcrumb-item v-for="b in breadcrumbs(route.path)" :to="{ path: b.path }">{{ b.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-anchor :offset="60" v-if="TOC.length > 0" v-shared="'content-anchor'"
        class="toc w-50 bg-transparent! fixed! right-0 <lg:hidden! z-9 backdrop-blur-sm rounded-lg select-none print:hidden"
        :data-path="path">
        <table-of-contents v-for="child in TOC" :link="child">
        </table-of-contents>
      </el-anchor>
      <h1>
        <span class="mb-2 text-4xl mt-4 block font-bold font-mono article-title"
          v-shared="getTransitionName(doc, 'title')">
          {{ guessArticleTitle(doc) }}
        </span>
      </h1>
      <article-tags :article="docs?.find(d => d.path === path) ?? doc" />
      <el-text size="small" class="block font-mono">
        <hover-text class="block">
          <template #default>
            <span v-shared="getTransitionName(doc, 'dates')" v-text="displayDocDates(doc)" />
          </template>
          <template #hover><span class="font-mono">
              <span class="opacity-50">Created</span> {{ doc.created }}&nbsp;&nbsp;
              <span class="opacity-50">Updated</span> {{ doc.updated }}
            </span></template>
        </hover-text>
      </el-text>
      <el-text size="small" class="block font-mono">
        <hover-text>
          <template #default>{{ doc.readingTime?.text }} · <ClientOnly><span>{{ pageViews }} views</span></ClientOnly></template>
          <template #hover>{{ doc.readingTime?.words + ' words' }}</template>
        </hover-text>
      </el-text>

      <ContentRenderer :value="doc" class="content mt-8" tag="section" v-if="!isContentEmpty(doc)">
        <template #empty>
          <!-- <el-empty description="No folder note" class="h-32 flex-auto" :image-size="80" /> -->
        </template>
      </ContentRenderer>
      <div class="flex justify-between mt-3 print:hidden" v-shared="'content-page-peer-nav'"
        v-if="nav.prev && nav.next">
        <kumo-link :to="'/c' + (nav.prev?.path ?? '')" type="primary">
          <el-icon>
            <el-icon-arrow-left />
          </el-icon>
          {{ guessArticleTitle(nav.prev) }}
        </kumo-link>
        <kumo-link :to="'/c' + (nav.next?.path ?? '')" type="primary">
          {{ guessArticleTitle(nav.next) }}
          <el-icon>
            <el-icon-arrow-right />
          </el-icon>
        </kumo-link>
      </div>
    </article>
    <lazy-comments class="print:hidden content-page-sections py-1" v-if="!isContentEmpty(doc)" />
    <el-divider v-shared="'content-tree-sep'" class="print:hidden mx--3!" style="width: calc(100% + 1.5rem)"
      v-if="!isContentEmpty(doc)" />
    <lazy-writeup-statistics class="content-page-sections mb-1" v-if="(path === '/ctf') && docs" :docs="docs"
      v-model="statsControl" />
  </template>
  <template v-if="docs && docs.length > 0">
    <el-tree class="text-base! content-page-sections mb-20 print:hidden" :current-node-key="path" node-key="path"
      ref="treeRef" :default-expand-all="false" v-shared="'content-tree-nav'" highlight-current auto-expand-parent
      :filter-node-method="filterTreeNode" :default-expanded-keys="[path]" :data="navigation as any" :props="treeProps">
      <template #default="{ node, data }">
        <span class="flex justify-between flex-1"><!--v-shared="getTransitionName(data, 'tree-node')"-->
          <kumo-link :id="'content_' + hashCode(data.path).toString(16).padStart(8, '0')" :to="'/c' + data.path"
            class="mr-2 justify-start!" no-prefetch :class="{ 'font-bold!': oneLvlUp(data.path) === '/ctf' }">
            <el-tooltip :show-after="500" effect="light" :hide-after="0"
              :content="`Created ${displayDatetime(data.created)} · Edited ${displayDatetime(data.updated)}`"
              placement="bottom-start">
              {{ node.label }}
            </el-tooltip>
            <article-tags class="ml-2" :article="data" id-prefix="tree" no-shared-element hide-cat short />
          </kumo-link>
          <el-text class="max-w-80 flex-1" size="small">{{ data.description }}</el-text>
        </span>
      </template>
    </el-tree>
  </template>
  <el-skeleton v-if="status === 'pending'" v-shared="'content-loading-skeleton'" />
  <template v-else-if="!(doc || (docs && docs.length > 0))">
    <el-empty description="404 not found" class="h-48 flex-auto content-page-sections" :image-size="80"
      v-shared="'content-not-found'">
      <kumo-link :to="'/c' + oneLvlUp(path)">
        <el-icon>
          <el-icon-arrow-up />
        </el-icon>
        Back one level up
      </kumo-link>
      <br />
      <kumo-link to="/c">
        <el-icon>
          <el-icon-home-filled />
        </el-icon>
        Back Home
      </kumo-link>
    </el-empty>
  </template>
  <el-backtop :right="50" :bottom="50" v-shared="'content-back-up'" class="print:hidden" />
</template>
<style lang="scss" scoped>
.content-page-sections {
  @apply max-w-prose mx-a lg:min-w-prose;

  @media (min-width: 1024px) {
    padding-right: v-bind(contentSpacingRight);
  }
}

.article-title {
  text-decoration: underline;
  text-decoration-color: var(--el-color-primary);
}

:deep(.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content) {
  border-radius: .35rem;
}

:deep(.content) {
  color: var(--el-text-color-regular);
  line-height: 150%;

  p {
    /* opacity: 0.85; */
  }

  ul li:not(.el-timeline-item)::marker {
    @apply font-mono;
    content: '- ';
    font-size: 75%;
  }

  ol li:not(.el-timeline-item)::marker {
    @apply font-mono;
    font-size: 75%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-mono;
    scroll-margin-top: var(--el-menu-horizontal-height) !important;
    position: relative;
    color: var(--el-text-color-primary);
    /* text-shadow: 0px 0px 1px var(--el-text-color-primary); */

    &::before {
      text-shadow: none;
      font-size: 75%;
      position: absolute;
      text-align: right;
      left: -.5em;
      transform: translateX(-100%);
      color: var(--el-text-color-secondary);
    }

    a {
      color: var(--el-text-color-primary);
      text-decoration: underline;
      text-decoration-color: var(--el-color-primary-light-5);

      &:hover {
        text-decoration-color: var(--el-color-primary);
      }
    }
  }

  &>h1::before {
    content: '#';
  }

  &>h2::before {
    content: '#';
  }

  &>h3::before {
    content: '##';
  }

  &>h4::before {
    content: '###';
  }

  section.footnotes {
    ol li {
      font-size: var(--el-font-size-extra-small);
    }
  }
}
</style>
