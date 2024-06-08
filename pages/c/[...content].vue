<script setup lang="ts">
//@ts-ignore
import VueUtterances from "vue-utterances";
import TableOfContents from "~/components/TableOfContents.vue";

const color = useColorMode();

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
const path = useRoute().path.substring(2);
const {data: doc} = await useAsyncData(`c/doc_${path}`, () => queryContent(path).findOne());
const {data: docs} = await useAsyncData(`c/docs_${path}`, () => queryContent(path)
    .where({
      _path: {$ne: path}
    })
    .only(['id', '_path', 'title', 'description', '_type', 'layout', '_file'])
    .find());
const {data: navigation} = await useAsyncData(`c/nav_${path}`, () => fetchContentNavigation(queryContent(path)))
const defaultProps = {
  children: 'children',
  label: 'title',
}
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
        default-expand-all
        :data="navigation!"
        :props="defaultProps"
    >
      <template #default="{ node, data }">
        <span class="flex justify-between flex-1" v-if="!(data.children&&data.children.length>0)">
          <nuxt-link :to="'/c'+data._path">{{ node.label }}</nuxt-link>
          <span>{{ docs.find(d => d._path === data._path)?.description }}</span>
        </span>
      </template>
    </el-tree>
  </template>
  <vue-utterances v-if="doc||docs" repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
                  label="utteranc"
                  :theme="color.value === 'dark'?'github-dark':'github-light'"/>
  <template v-else>
    <el-empty description="Not found"/>
  </template>
  <el-backtop :right="50" :bottom="50"/>
</template>
<style lang="scss">
.content {
  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 60px;
  }

  .katex-html {
    display: none;
  }


  blockquote {
    font-style: italic;
    padding: 4px 16px;
    background-color: #aaa2;
    border-radius: 4px;
    border-left: 5px solid var(--el-color-primary);
    margin: 20px 0;
  }

  pre {
    scrollbar-width: thin;
    overflow: auto;
    padding: 5px;
    border: 1px solid var(--el-border-color);
    //box-shadow: var(--el-box-shadow-lighter);
    border-radius: var(--el-border-radius-base);
  }
}
</style>
