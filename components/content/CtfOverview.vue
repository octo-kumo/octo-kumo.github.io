<script setup lang="ts">
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content';

const path = (useRoute().path.substring(2) || "/").replace(/(?!^)\/$/, '');
const query: QueryBuilderParams = {
  path,
  sort: [{ solves: 1 }],
  only: ['_id', '_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'excerpt'],
};

function getTags(items: ParsedContent[]) {
  return [...new Set(items.map(i => getCtfCategory(i)).filter(Boolean)), ...new Set(items.flatMap(i => (i.tags ?? [])).filter(Boolean))];
}

const filter = reactive({} as any);
const bindingFilter = computed(() => Object.keys(filter).filter(k => filter[k]));

function tagFilter(article: ParsedContent) {
  if (bindingFilter.value.length === 0) return true;
  return article.tags?.some((tag: string) => bindingFilter.value.includes(tag)) || bindingFilter.value.includes(getCtfCategory(article) ?? '')
}

function stats(items: ParsedContent[]) {
  return items.map(w => w.points ?? 0).reduce((acc: number, v: number) => acc + v, 0);
}
</script>

<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <el-space wrap class="mb-1 font-mono text-xs! select-none">
        <el-check-tag :checked="filter[tag]" @change="filter[tag] = !filter[tag]" type="primary"
          class="text-xs! px-2! py-1!" v-for="tag in getTags(list)">
          {{ tag }}
        </el-check-tag>
        <el-tag>
          {{ stats(list.filter(i => oneLvlUp(i._path) !== path && i._path !== path).filter(tagFilter)) }} points
        </el-tag>
        <el-tag>
          {{ list.filter(i => oneLvlUp(i._path) !== path && i._path !== path).filter(tagFilter).length }} writeups
        </el-tag>
      </el-space>
      <br />
      <el-row :gutter="10" v-auto-animate>
        <el-col :xs="24" :sm="12" :key="article._path"
          v-for="article in list.filter(i => oneLvlUp(i._path) !== path && i._path !== path).filter(tagFilter)">
          <el-card class="challenge-card mb-2" shadow="hover">
            <template #header>
              <kumo-link :to="`/c${article._path}`" type="primary">
                <span v-shared="getTransitionName(article, 'title')" v-text="guessArticleTitle(article)"></span>
              </kumo-link>
              <article-tags :article="article" />
              <el-text size="small">
                <span v-shared="getTransitionName(article, 'dates')" v-text="displayDocDates(article)" />
              </el-text>
            </template>
            <el-text size="small" class="line-clamp-4">
              <ContentRenderer class="max-w-full" v-if="article.excerpt" :value="article" excerpt />
              <template v-else-if="article.description">{{ article.description }}</template>
              <template v-else><em>Empty description.</em></template>
            </el-text>
          </el-card>
        </el-col>
      </el-row>
    </template>
    <template #not-found #empty>
      <el-empty description="No Writeup">
        <el-text>This is most likely an error.</el-text>
      </el-empty>
    </template>
  </ContentList>
</template>
<style scoped lang="scss">
:deep(.challenge-card) {
  .el-card__header {
    font-family: monospace;
  }

  .el-card__header,
  .el-card__body {
    padding: 0.25em 0.75em;
  }
}
</style>
