<script setup lang="ts">
import TableOfContents from "~/components/TableOfContents.vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import type {TreeNodeData} from "element-plus/es/components/tree/src/tree.type";
import type {NavItem} from "@nuxt/content/types";

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
const {data: docs} = await useAsyncData(`c/docs_${path}`, () => queryContent(path)
    .where({
      _path: {$ne: path}
    })
    .only(['id', '_path', 'title', 'description', '_type', 'layout', '_file'])
    .find());
const {data: navigation} = await useAsyncData(`c/nav_${path}`, () => fetchContentNavigation().then(r => r.map(removeSame)));

function removeSame(parent: NavItem) {
  if (parent.children) (parent.children = parent.children.filter(c => c._path !== parent._path)).forEach(c => removeSame(c));
  return parent;
}

useContentHead(doc);
definePageMeta({
  title: 'Content',
  disableSEO: true
});

const defaultProps = {
  children: 'children',
  label: (data: TreeNodeData, node: Node) => data.title || data._path,
};
</script>
<template>
  <el-breadcrumb separator="/" class="m-2 text-center" v-if="path&&path!=='/'">
    <el-breadcrumb-item
        v-for="b in breadcrumbs($route.path)"
        :to="{ path:b.path }">{{ b.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <template v-if="doc">
    <article class="flex flex-row">
      <ContentRenderer :value="doc" class="content max-w-full lg:max-w-prose lg:mx-a lg:min-w-prose"/>
      <div class="pt-20">
        <el-affix ref="affixRef" :offset="60" v-if="(doc?.body?.toc?.links?.length??0)>0" class="<xl:hidden!">
          <el-anchor :offset="60" style="width: 250px">
            <table-of-contents
                v-for="child in (doc?.body?.toc?.links??[])"
                :link="child">
            </table-of-contents>
          </el-anchor>
        </el-affix>
      </div>
    </article>
  </template>
  <template v-if="docs&&docs.length>0">
    <el-tree
        class="max-w-full lg:max-w-prose lg:mx-a lg:w-prose text-base!"
        :current-node-key="path"
        node-key="_path"
        highlight-current
        auto-expand-parent
        :default-expanded-keys="[path]"
        :data="navigation!"
        :props="defaultProps"
    >
      <template #default="{ node, data }">
        <span class="flex justify-between flex-1">
          <nuxt-link :to="'/c'+data._path">{{ node.label || data._path }}</nuxt-link>
          <span>{{ docs.find(d => d._path === data._path)?.description }}</span>
        </span>
      </template>
    </el-tree>
  </template>
  <utterances v-if="doc||(docs&&docs.length>0)"
              repo="octo-kumo/octo-kumo.github.io"
              issue-term="pathname"
              label="utteranc"
              :theme="color.value === 'dark'?'github-dark':'github-light'"/>
  <template v-else>
    <el-empty description="Not found"/>
  </template>
  <el-backtop :right="50" :bottom="50"/>
</template>
<style lang="scss">
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

  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 60px;
  }

  .katex-html {
    display: none;
  }
}
</style>
