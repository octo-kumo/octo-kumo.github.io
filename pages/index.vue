<template>
  <el-row :gutter="20">
    <el-col :cols="24" class="lg:max-w-prose! mx-auto!">
      <el-text class="text-4xl! font-bold" tag="h1">Hi!</el-text>
      <el-text tag="p">Welcome to my person website, it is still in the works, expect perhaps unexpected errors, or the
        site crashing entirely.
      </el-text>
      <el-text class="text-xl! font-bold mt-2!" tag="h2">Recent Posts / Writeups</el-text>
      <el-timeline class="mt-2!">
        <el-timeline-item v-for="doc in docs" :timestamp="displayNiceDatetime(doc.created)">
          <el-text type="primary" class="block">{{ doc.title }}</el-text>
          <kumo-link class="font-mono text-xs!" :to="'/c'+doc._path">{{ '/c' + doc._path }}</kumo-link>
          <el-text class="block">{{ doc.description }}</el-text>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :cols="24">

    </el-col>
    <el-col
        v-for="item in [...nav.filter(r=>r.path.startsWith('/projects/')).sort((a,b)=>(!a.meta.image)-(!b.meta.image)),contentPage]"
        :key="item.path" :cols="24"
        :lg="6"
        :md="8"
        :sm="12">
      <el-card class="my-3"
               shadow="never">
        <template #header v-if="item.meta.image">
          <el-image :src="item.meta.image as string"
                    class="w-full h-48" lazy
                    fit="cover"></el-image>
        </template>
        <el-space direction="vertical" alignment="normal">
          <h3 class="m-0">
            <kumo-link :to="item" type="primary">
              {{ item.meta.title ?? guessPathName(item.name!) }}
            </kumo-link>
          </h3>
          <el-text v-if="item.meta.description">{{ item.meta.description }}</el-text>
          <div class="flex gap-2">
            <el-tag type="danger" v-if="item.meta.layout==='clean'">
              full page
            </el-tag>
          </div>
        </el-space>
      </el-card>
    </el-col>
    <el-col :cols="24">
      <utterances repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
                  label="utteranc"
                  :theme="color.value === 'dark'?'github-dark':'github-light'"/>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import {guessPathName} from "~/mixins/display";

const router = useRouter();
const color = useColorMode();
const nav = ref(router.getRoutes());
const contentPage = {
  path: "/c",
  meta: {
    title: "Content",
    description: "Markdown Content Archive"
  }
};
const {data: docs} = await useAsyncData(`c/docs`, () => queryContent("/")
    .only(['_path', 'title', 'description', 'created', 'updated'])
    .where({_extension: {$eq: 'md'}, title: {$ne: ''}})
    .sort({created: -1})
    .limit(5)
    .find());
// definePageMeta({
//   layout: 'clean'
// });
useHead({
  title: '云',
  meta: [
    {name: 'description', content: '云\'s personal website'}
  ],
});
</script>
<style lang="scss">
//@use "@/assets/scss/quotes.scss";

.el-card__header:has(> .el-image) {
  padding: 0 !important;
  border: none !important;
}
</style>
