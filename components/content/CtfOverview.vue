<script setup lang="ts">
import type {ParsedContent, QueryBuilderParams} from '@nuxt/content';

const path = (useRoute().path.substring(2) || "/").replace(/(?!^)\/$/, '');
const query: QueryBuilderParams = {
  path,
  sort: [{solves: 1}],
  only: ['_id', '_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'excerpt']
};

function getTags(items: ParsedContent[]) {
  return Array.from(new Set(items.flatMap(i => [...(i.tags ?? []), getCtfCategory(i)]))).filter(Boolean)
}

const filter = reactive({} as any);
const bindingFilter = computed(() => Object.keys(filter).filter(k => filter[k]));

function tagFilter(article: ParsedContent) {
  if (bindingFilter.value.length === 0) return true;
  return article.tags?.some((tag: string) => bindingFilter.value.includes(tag)) || bindingFilter.value.includes(getCtfCategory(article) ?? '')
}
</script>

<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <el-space wrap class="mb-1">
        <el-check-tag :checked="filter[tag]" @change="filter[tag]=!filter[tag]"
                      type="primary" v-for="tag in getTags(list)">
          {{ tag }}
        </el-check-tag>
      </el-space>
      <br/>
      <el-space wrap fill :fill-ratio="30">
        <el-card
            v-for="article in list.filter(i=>oneLvlUp(i._path)!==path&&i._path!==path).filter(tagFilter)"
            :key="article._path" shadow="hover">
          <template #header>
            <kumo-link :to="`/c${article._path}`" type="primary">
              <span v-shared="getTransitionName(article, 'title')" v-text="guessArticleTitle(article)"></span>
            </kumo-link>
            <article-tags :article="article"/>
            <el-text size="small">
              <span v-shared="getTransitionName(article, 'dates')" v-text="displayDocDates(article)"/>
            </el-text>
          </template>
          <el-text>
            <ContentRenderer class="max-w-full" v-if="article.excerpt" :value="article" excerpt/>
            <template v-else-if="article.description">{{ article.description }}</template>
            <template v-else><em>Empty description.</em></template>
          </el-text>
        </el-card>
      </el-space>
    </template>
    <template #not-found #empty>
      <el-empty description="No Writeup">
        <el-text>This is most likely an error.</el-text>
      </el-empty>
    </template>
  </ContentList>
</template>
<style scoped lang="scss">
</style>
