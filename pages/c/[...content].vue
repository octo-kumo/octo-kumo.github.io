<script setup lang="ts">
import TableOfContents from "~/components/TableOfContents.vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import type {TreeNodeData} from "element-plus/es/components/tree/src/tree.type";
import type {NavItem, ParsedContent} from "@nuxt/content/types";
import type {Ref} from "@vue/reactivity";

const color = useColorMode();
const path = useRoute().path.substring(2) || "/";

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

const affixRef = ref();
onActivated(() => {
  affixRef.value?.update();
  affixRef.value?.updateRoot();
});
// onMounted(() => {
//   affixRef.value?.update();
//   affixRef.value?.updateRoot();
// });
const {data: doc} = await useAsyncData(`c/doc_${path}`, () => queryContent(path).findOne());
const {data: docs} = await useAsyncData(`c/docs_${path}`, () => queryContent("/")
    .where({_path: {$ne: path}})
    .only(['_path', 'title', 'description'])
    .find());
const {data: navigation} = await useAsyncData(`c/nav_${path}`, () => fetchContentNavigation(queryContent(path)).then(r => r.map(removeSame)));

function removeSame(parent: NavItem) {
  if (parent.children) (parent.children = parent.children.filter(c => c._path !== parent._path)).forEach(c => removeSame(c));
  return parent;
}

useContentHead(doc as Ref<ParsedContent>);
definePageMeta({
  title: 'Content',
  disableSEO: true
});

const defaultProps = {
  children: 'children',
  label: (data: TreeNodeData, node: Node) => data.title || data._path.split("/").findLast(Boolean)
};
</script>
<template>
  <el-breadcrumb separator="/" class="m-2 text-center" v-if="path && path !== '/'">
    <el-breadcrumb-item v-for="b in breadcrumbs($route.path)" :to="{ path: b.path }">{{ b.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <template v-if="doc">
    <article class="">
      <el-anchor :offset="60" class="w-50 bg-transparent! fixed! right-0 <lg:hidden! z-9 backdrop-blur-sm rounded-lg">
        <el-text>{{ doc.title }}</el-text>
        <table-of-contents v-for="child in (doc?.body?.toc?.links ?? [])" :link="child">
        </table-of-contents>
        <el-divider></el-divider>
        <el-text class="block" size="small" v-if="doc.created">Created {{ displayNiceDatetime(doc.created) }}</el-text>
        <el-text class="block" size="small" v-if="doc.updated">Updated {{ displayNiceDatetime(doc.updated) }}</el-text>
        <el-space class="mt-2" wrap v-if="doc.tags&&Array.isArray(doc.tags)&&doc.tags.length>0">
          <el-tag size="small" v-for="tag in doc.tags">{{ tag }}</el-tag>
        </el-space>
      </el-anchor>
      <ContentRenderer :value="doc" class="content content-page-sections">
        <template #empty>
          <el-empty description="No folder note" class="h-32 flex-auto" :image-size="80"/>
        </template>
      </ContentRenderer>
    </article>
    <el-divider/>
  </template>
  <template v-if="docs && docs.length > 0">
    <el-tree class="text-base! content-page-sections" :current-node-key="path" node-key="_path"
             highlight-current auto-expand-parent :default-expanded-keys="[path]" :data="navigation!"
             :props="defaultProps">
      <template #default="{ node, data }">
        <span class="flex justify-between flex-1">
          <nuxt-link custom :to="'/c' + data._path" v-slot="routerProps">
            <el-link
                :type="routerProps.isActive?'primary':'default'"
                :href="routerProps.href"
                v-bind="routerProps.action"
                @click="routerProps.navigate"
                class="min-w-60 mx-2 justify-start!">{{ node.label }}</el-link>
          </nuxt-link>
          <el-text size="small">{{ docs.find(d => d._path === data._path)?.description }}</el-text>
        </span>
      </template>
    </el-tree>
  </template>
  <utterances v-if="doc || (docs && docs.length > 0)" repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
              class="content-page-sections"
              label="utteranc" :theme="color.value === 'dark' ? 'github-dark' : 'github-light'"/>
  <template v-else>
    <el-empty description="Not found"/>
  </template>
  <el-backtop :right="50" :bottom="50"/>
</template>
<style lang="scss">
.content-page-sections {
  @apply max-w-full lg:max-w-prose lg:mx-a lg:min-w-prose lg:pr-50
}

.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  border-radius: .35rem;
}

.content {
  a {
    text-decoration: none;
  }

  code:not(pre code) {
    margin: .1em .3em;
    padding: .2em;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: calc(var(--el-menu-horizontal-height) + 2rem) !important;
  }

  .katex-html {
    display: none;
  }
}
</style>
