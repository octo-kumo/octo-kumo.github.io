<template>
  <el-row :gutter="20">
    <el-col :cols="24">
      <div class="lg:max-w-prose! mx-auto!">
        <el-text class="text-4xl! font-bold" tag="h1">Hi!</el-text>
        <el-text tag="p">Welcome to my person website, it is still in the works, expect perhaps unexpected errors, or
          the
          site crashing entirely.
        </el-text>
        <el-text class="text-xl! font-bold mt-2!" tag="h2">
          <span v-if="isSearching">Searching... {{ docsFiltered.length }}/{{ docs?.length }}</span>
          <span v-else>Recent Posts / Writeups</span>
        </el-text>
        <el-input v-model="search" placeholder="Fuzzy search!" :prefix-icon="ElIconSearch"/>
        <el-pagination v-model:current-page="currPage" class="justify-center" layout="prev, pager, next"
                       :total="docsFiltered.length" :page-size="5"
                       hide-on-single-page/>
        <el-timeline class="mt-2!" v-auto-animate>
          <el-timeline-item v-for="{item:doc,matches,score} in docsFiltered.slice(currPage*5-5,currPage*5)"
                            :key="doc._path" :timestamp="displayDocDates(doc)">
            <kumo-link no-prefetch type="primary" :to="'/c'+doc._path"
                       :style="{viewTransitionName:getTransitionName(doc,'title')}">
              <span v-html="highlight( doc.title , matches?.find(m=>m.key==='title')?.indices)"></span>
            </kumo-link>
            <el-tag v-if="score" :type="score<0.1?'success':score<0.5?'warning':'danger'" size="small" class="ml-1">
              {{ (1 - score).toPrecision(2) }}
            </el-tag>
            <br/>
            <el-text class="font-mono!" size="small">
              <span v-html="'/c' + highlight( doc._path , matches?.find(m=>m.key==='_path')?.indices)"></span>
            </el-text>
            <el-text class="block mt-1!">
              <span v-html="highlight(doc.description, matches?.find(m=>m.key==='description')?.indices)"></span>
            </el-text>
            <article-tags :article="doc"
                          :custom-tag-html="(tag,i)=>highlight(tag, matches?.find(m=>m.key==='tags'&&m.refIndex===i)?.indices)??''"/>
          </el-timeline-item>
          <el-empty v-if="docsFiltered.length === 0">
          </el-empty>
        </el-timeline>
      </div>
    </el-col>
    <el-col
        v-for="item in [...nav.filter(r=>r.path.startsWith('/projects/')).sort((a,b)=>(!a.meta.image)-(!b.meta.image)),contentPage]"
        :key="item.path" :cols="24"
        :lg="6"
        :md="8"
        :sm="12">
      <el-card class="my-3"
               shadow="never">
        <template #header v-if="item.meta?.image!">
          <el-image :src="item.meta?.image! as string"
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
            <el-tag type="danger" v-if="(item.meta.layout!) ==='clean'">
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
import Fuse, {type RangeTuple} from 'fuse.js';
import getTransitionName from "~/utils/get-transition-name";

const currPage = ref(1);
const router = useRouter();
const color = useColorMode();
const nav = ref(router.getRoutes());
const search = ref("");
const contentPage = {
  path: "/c",
  meta: {
    title: "Content",
    description: "Markdown Content Archive"
  }
};
const {data: docs} = await useLazyAsyncData(`c/docs_i`, () => queryAllDocs(true));

const fuse = new Fuse([], {
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: true,
  isCaseSensitive: false,
  shouldSort: true,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  keys: [{name: "title", weight: 1}, {name: "_path", weight: 1}, {name: "description", weight: 0.8}, {
    name: "tags",
    weight: 1
  }]
});
watch(docs, (val) => fuse.setCollection(val));

const isSearching = computed(() => search.value.length > 1)
const docsFiltered = computed(() => isSearching.value ? fuse.search(search.value).filter(e => (e?.score ?? 1) < 0.9) : (docs.value ?? []).map(w => ({
  item: w,
  matches: null,
  score: null
})))
// definePageMeta({
//   layout: 'clean'
// });
function highlight(text?: string, indices?: readonly RangeTuple[]) {
  if (!indices || !text) return text;
  return indices.reduce((str, [start, end]) => {
    str[start] = `<span class="highlighted">${str[start]}`;
    str[end] = `${str[end]}</span>`;
    return str;
  }, text.split("")).join("");
}

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

span.highlighted {
  @apply font-bold;
  background-color: #ff04;
}
</style>
