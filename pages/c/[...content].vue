<script setup lang="ts">
import TableOfContents from "~/components/TableOfContents.vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import type {TreeNodeData, TreeOptionProps} from "element-plus/es/components/tree/src/tree.type";
import type {NavItem, ParsedContent, TocLink} from "@nuxt/content";
import type {Ref} from "@vue/reactivity";
import type {ComputedRef} from "vue";

const color = useColorMode();
const path = (useRoute().path.substring(2) || "/")
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
//   nav.sort((a, b) => String(getDoc(b._path)?.created).localeCompare(getDoc(a._path)?.created))
//   nav.forEach(c => recursiveSort(c.children));
//   return nav
// }

const {data: doc} = await useAsyncData(`c/doc_${path}`, () => queryContent(path).findOne());
const {data: docs} = await useAsyncData(`c/docs`, () => queryAllDocs());
const {data: navigation} = await useAsyncData(`c/nav_${path}`, async () => fetchContentNavigation(queryContent(oneLvlUp(path))).then(r => r.map(removeNavChildSelf)));
const getDoc = (_path: string) => docs.value?.find(d => d._path === _path)
const nav: ComputedRef<{ prev?: Partial<ParsedContent>, next?: Partial<ParsedContent> }> = computed(() => {
  if (!docs.value) return {};
  const peers = docs.value.filter(d => oneLvlUp(d._path!) === oneLvlUp(path)); // must not be parent
  const meIndex = peers.findIndex(d => d._path === path);
  const [prev, next] = peers.length > 1 ? [
    peers[(meIndex - 1 + peers.length) % peers.length],
    peers[(meIndex + 1) % peers.length],
  ] : [];
  return {prev, next};
})


useContentHead(doc as Ref<ParsedContent>);
definePageMeta({
  title: 'Content',
  // disableSEO: true
});
useSeoMeta({
  articleModifiedTime: () => new Date(doc?.value?.updated ?? 0).toISOString()
});
const defaultProps: TreeOptionProps = {
  children: 'children',
  label: (data: TreeNodeData, node: Node) => guessArticleTitle(data)
};

function navToToc(nav?: NavItem[] | null, depth = 0): TocLink[] {
  if (depth >= 2) return [];
  return nav?.map((a: any) => ({
    id: 'content_' + hashCode(a._path).toString(16).padStart(8, '0'),
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
const titleTransitionId = computed(() => getTransitionName(doc.value, 'title'));
</script>
<template>
  <template v-if="doc">
    <article class="content-page-sections">
      <el-breadcrumb separator="/" v-if="path && path !== '/'" style="view-transition-name: 'content-bc'">
        <el-breadcrumb-item v-for="b in breadcrumbs($route.path)" :to="{ path: b.path }">{{ b.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-anchor :offset="60" v-if="TOC.length>0"
                 class="toc w-50 bg-transparent! fixed! right-0 <lg:hidden! z-9 backdrop-blur-sm rounded-lg"
                 :data-path="path">
        <table-of-contents v-for="child in TOC" :link="child">
        </table-of-contents>
      </el-anchor>
      <h1 id="content-title" class="mb-2">{{ guessArticleTitle(doc) }}</h1>
      <article-tags :article="doc"/>
      <el-text size="small">{{ displayDocDates(doc) }}</el-text>
      <ContentRenderer :value="doc" class="content mt-10">
        <template #empty>
          <el-empty description="No folder note" class="h-32 flex-auto" :image-size="80"/>
        </template>
      </ContentRenderer>
      <div class="flex justify-between mt-3" style="view-transition-name: 'content-page-peer-nav'"
           v-if="nav.prev&&nav.next">
        <kumo-link :to="'/c'+(nav.prev?._path??'')" type="primary">
          <el-icon>
            <el-icon-arrow-left/>
          </el-icon>
          {{ guessArticleTitle(nav.prev) }}
        </kumo-link>
        <kumo-link :to="'/c'+(nav.next?._path??'')" type="primary">
          {{ guessArticleTitle(nav.next) }}
          <el-icon>
            <el-icon-arrow-right/>
          </el-icon>
        </kumo-link>
      </div>
    </article>
    <el-divider class="mx--3!" style="width: calc(100% + 1.5rem)"/>
  </template>
  <template v-if="docs && docs.length > 0">
    <el-tree class="text-base! content-page-sections" :current-node-key="path" node-key="_path"
             :default-expand-all="path==='/'" style="view-transition-name: 'content-tree-nav'"
             highlight-current auto-expand-parent :default-expanded-keys="[path]" :data="navigation as any"
             :props="defaultProps">
      <template #default="{ node, data }">
        <el-tooltip
            :show-after="500"
            effect="light"
            :content="`Created ${displayNiceDatetime(getDoc(data._path)?.created)} · Edited ${displayNiceDatetime(getDoc(data._path)?.updated)}`"
            placement="left">
        <span class="flex justify-between flex-1">
          <kumo-link :id="'content_'+hashCode(data._path).toString(16).padStart(8,'0')" :to="'/c' + data._path"
                     class="mr-2 justify-start!">
            {{ node.label }}
            <article-tags class="ml-2" :article="getDoc(data._path)" id-prefix="tree" hide-cat/>
          </kumo-link>
          <el-text class="max-w-80 flex-1" size="small">{{ getDoc(data._path)?.description }}</el-text>
        </span>
        </el-tooltip>
      </template>
    </el-tree>
  </template>
  <utterances v-if="doc || (docs && docs.length > 0)" repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
              class="content-page-sections" style="view-transition-name: 'content-comment-sec'"
              label="utteranc" :theme="color.value === 'dark' ? 'github-dark' : 'github-light'"/>
  <!--  <el-skeleton v-else-if="status==='pending'"/>-->
  <template v-else>
    <el-empty description="404 not found" class="h-48 flex-auto content-page-sections" :image-size="80">
      <kumo-link :to="'/c'+oneLvlUp(path)">
        <el-icon>
          <el-icon-arrow-up/>
        </el-icon>
        Back one level up
      </kumo-link>
      <br/>
      <kumo-link to="/c">
        <el-icon>
          <el-icon-home-filled/>
        </el-icon>
        Back Home
      </kumo-link>
    </el-empty>
  </template>

  <el-backtop :right="50" :bottom="50"/>
</template>
<style lang="scss">
#content-title {
  view-transition-name: v-bind('titleTransitionId');
}

.content-page-sections {
  @apply max-w-prose mx-a lg:min-w-prose;

  @media (min-width: 1024px) {
    padding-right: v-bind('contentSpacingRight');
  }
}

.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  border-radius: .35rem;
}

.content {
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: var(--el-menu-horizontal-height) !important;
  }

  .katex-html {
    display: none;
  }

  section.footnotes {
    ol li {
      font-size: var(--el-font-size-extra-small);
    }
  }
}
</style>
