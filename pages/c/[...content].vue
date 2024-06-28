<script setup lang="ts">
import TableOfContents from "~/components/TableOfContents.vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import type {TreeNodeData} from "element-plus/es/components/tree/src/tree.type";
import type {NavItem, ParsedContent} from "@nuxt/content";
import type {Ref} from "@vue/reactivity";

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

function one_lvl_up(path: string) {
  return path.replace(/\/[^/]+$/, '') || '/';
}

const {data: doc} = await useAsyncData(`c/doc_${path}`, () => queryContent(path).findOne());
const {data: docs} = await useAsyncData(`c/docs`, () => queryContent("/")
    .only(['_path', 'title', 'description', 'created', 'updated', 'tags'])
    .find());
const {data: navigation} = await useAsyncData(`c/nav_${path}`, () => fetchContentNavigation(queryContent(one_lvl_up(path))).then(r => r.map(removeSame)));

const peers = docs.value!.filter(d => one_lvl_up(d._path!) === one_lvl_up(path)); // must not be parent
const meIndex = peers.findIndex(d => d._path === path);
const [prev, next] = peers.length > 1 ? [
  peers[(meIndex - 1 + peers.length) % peers.length],
  peers[(meIndex + 1) % peers.length],
] : [];

// console.log([prev, next])

function removeSame(parent: NavItem) {
  if (parent.children) (parent.children = parent.children.filter(c => c._path !== parent._path)).forEach(c => removeSame(c));
  return parent;
}

useContentHead(doc as Ref<ParsedContent>);
definePageMeta({
  title: 'Content',
  // disableSEO: true
});
useSeoMeta({
  articleModifiedTime: new Date(doc?.value?.updated ?? 0).toISOString()
});
const defaultProps = {
  children: 'children',
  label: (data: TreeNodeData, node: Node) => data.title || data._path.split("/").findLast(Boolean) || "Unknown"
};

function navToToc(nav: any, depth = 2) {
  if (depth <= 0) return;
  return nav?.map((a: any) => ({
    id: 'content_' + hashCode(a._path).toString(16).padStart(8, '0'),
    text: a.title || a._path,
    children: navToToc(a.children, depth - 1)
  }));
}

const TOC = computed(() => {
  let toc = doc.value?.body?.toc?.links ?? [];
  if (path === '/') toc = [...toc, ...navToToc(navigation.value)];
  return toc;
})
</script>
<template>
  <template v-if="doc">
    <article class="content-page-sections">
      <el-breadcrumb separator="/" v-if="path && path !== '/'">
        <el-breadcrumb-item v-for="b in breadcrumbs($route.path)" :to="{ path: b.path }">{{ b.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-anchor :offset="60" class="w-50 bg-transparent! fixed! right-0 <lg:hidden! z-9 backdrop-blur-sm rounded-lg">
        <el-text>{{ doc.title || "Nothing to see" }}</el-text>
        <table-of-contents v-for="child in TOC" :link="child">
        </table-of-contents>
        <el-divider></el-divider>
        <el-text class="block" size="small" v-if="doc.created">Created {{ displayNiceDatetime(doc.created) }}</el-text>
        <el-text class="block" size="small" v-if="doc.updated">Updated {{ displayNiceDatetime(doc.updated) }}</el-text>
        <el-space class="mt-2" wrap v-if="doc.tags&&Array.isArray(doc.tags)&&doc.tags.length>0">
          <el-tag size="small" v-for="tag in doc.tags">{{ tag }}</el-tag>
        </el-space>
      </el-anchor>
      <ContentRenderer :value="doc" class="content mt-10">
        <template #empty>
          <el-empty description="No folder note" class="h-32 flex-auto" :image-size="80"/>
        </template>
      </ContentRenderer>
      <div class="lg:hidden">
        <el-text class="block" size="small" v-if="doc.created">Created {{ displayNiceDatetime(doc.created) }}</el-text>
        <el-text class="block" size="small" v-if="doc.updated">Updated {{ displayNiceDatetime(doc.updated) }}</el-text>
        <el-space class="mt-2" wrap v-if="doc.tags&&Array.isArray(doc.tags)&&doc.tags.length>0">
          <el-tag size="small" v-for="tag in doc.tags">{{ tag }}</el-tag>
        </el-space>
      </div>
      <div class="flex justify-between mt-3" v-if="prev&&next">
        <kumo-link :to="'/c'+(prev?._path??'')" type="primary">
          <el-icon>
            <el-icon-arrow-left/>
          </el-icon>
          {{ prev?.title || prev?._path }}
        </kumo-link>
        <kumo-link :to="'/c'+(next?._path??'')" type="primary">
          {{ next?.title || next?._path }}
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
             :default-expand-all="path==='/'"
             highlight-current auto-expand-parent :default-expanded-keys="[path]" :data="navigation!"
             :props="defaultProps">
      <template #default="{ node, data }">
        <span class="flex justify-between flex-1">
          <kumo-link :id="'content_'+hashCode(data._path).toString(16).padStart(8,'0')" :to="'/c' + data._path"
                     class="mr-2 justify-start!">{{
              node.label
            }}<el-tag class="mx-1" size="small" v-for="tag in (docs.find(d => d._path === data._path)?.tags??[])">{{
                tag
              }}</el-tag></kumo-link>
          <el-text class="max-w-80 flex-1" size="small">{{
              docs.find(d => d._path === data._path)?.description
            }}</el-text>
        </span>
      </template>
    </el-tree>
  </template>
  <utterances v-if="doc || (docs && docs.length > 0)" repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
              class="content-page-sections"
              label="utteranc" :theme="color.value === 'dark' ? 'github-dark' : 'github-light'"/>
  <template v-else>
    <el-empty description="404 not found" class="h-48 flex-auto content-page-sections" :image-size="80">
      <kumo-link :to="'/c'+one_lvl_up(path)">
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
.content-page-sections {
  @apply max-w-prose mx-a lg:min-w-prose lg:pr-50
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
