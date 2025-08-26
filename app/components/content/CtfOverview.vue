<script setup lang="ts">
import type { PageCollections } from '@nuxt/content';

const path = (useRoute().path.substring(2) || "/").replace(/(?!^)\/$/, '');

const { data: list } = await useAsyncData("ctf_list_" + path, () => {
  return queryCollection('content')
    .where('path', 'LIKE', path + '%')
    .select('path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'excerpt')
    .order('solves', 'ASC')
    .all()
})
function getTags(items: Partial<PageCollections['content']>[]) {
  return [...new Set(items.map(i => getCtfCategory(i)).filter(Boolean)), ...new Set(items.flatMap(i => (i.tags ?? [])).filter(Boolean))] as string[];
}

const filter = reactive({} as any);
const bindingFilter = computed(() => Object.keys(filter).filter(k => filter[k]));

function tagFilter(article: Partial<PageCollections['content']>) {
  if (bindingFilter.value.length === 0) return true;
  return article.tags?.some((tag: string) => bindingFilter.value.includes(tag)) || bindingFilter.value.includes(getCtfCategory(article) ?? '')
}

function stats(items: Partial<PageCollections['content']>[]) {
  return items.map(w => w.points ?? 0).reduce((acc: number, v: number) => acc + v, 0);
}
</script>

<template>
  <template v-if="list && list.length > 0">
    <el-space wrap class="mb-1 font-mono text-xs! select-none">
      <el-check-tag :checked="filter[tag]" @change="filter[tag] = !filter[tag]" type="primary"
        class="text-xs! px-2! py-1!" v-for="tag in getTags(list)">
        {{ tag }}
      </el-check-tag>
      <el-tag>
        {{ stats(list.filter(i => oneLvlUp(i.path) !== path && i.path !== path).filter(tagFilter)) }} points
      </el-tag>
      <el-tag>
        {{ list.filter(i => oneLvlUp(i.path) !== path && i.path !== path).filter(tagFilter).length }} writeups
      </el-tag>
    </el-space>
    <br />
    <el-row :gutter="10" v-auto-animate>
      <el-col :xs="24" :sm="12" :key="article.path"
        v-for="article in list.filter(i => oneLvlUp(i.path) !== path && i.path !== path).filter(tagFilter)">
        <el-card class="challenge-card mb-2" shadow="hover">
          <template #header>
            <kumo-link :to="`/c${article.path}`" type="primary">
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
    <slot />
  </template>
  <el-empty description="No Writeup" v-else>
    <el-text>This is most likely an error.</el-text>
    <slot />
  </el-empty>
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
