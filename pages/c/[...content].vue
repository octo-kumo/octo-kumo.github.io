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
  console.log(breadcrumbs)
  return breadcrumbs;
}

const affixRef = ref();
onActivated(() => {
  affixRef.value?.update();
  affixRef.value?.updateRoot();
});
onMounted(() => {
  affixRef.value?.update();
  affixRef.value?.updateRoot();
});
</script>
<template>
  <el-breadcrumb separator="/" class="m-2 text-center">
    <el-breadcrumb-item
        v-for="b in breadcrumbs($route.path)"
        :to="{ path:b.path }">{{ b.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <ContentDoc :path="$route.path.substring(2)">
    <template v-slot="{ doc }">
      <article class="flex flex-row">
        <ContentRenderer :value="doc" class="content lg:max-w-prose lg:mx-a"/>
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
    <template #not-found>
      <ContentList :path="$route.path.substring(2)" v-slot="{ list }">
        <el-card v-for="article in list" shadow="never" class="mb-2">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <nuxt-link :to="'/c'+article._path">{{ article._path }}</nuxt-link>
        </el-card>
      </ContentList>
    </template>
  </ContentDoc>
  <el-backtop :right="50" :bottom="50"/>

  <vue-utterances repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
                  label="utteranc"
                  :theme="color.value === 'dark'?'github-dark':'github-light'"/>
</template>
<style lang="scss">
.content {
  padding-bottom: 5em;

  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 60px;
  }

  .katex-html {
    display: none;
  }
}
</style>
