<script setup lang="ts">
import type {QueryBuilderParams} from '@nuxt/content';

const path = (useRoute().path.substring(2) || "/").replace(/(?!^)\/$/, '');
const query: QueryBuilderParams = {
  path,
  sort: [{solves: 1}],
  only: ['_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'excerpt']
}
</script>

<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <el-space wrap fill :fill-ratio="30">
        <el-card
            v-for="article in list.filter(i=>oneLvlUp(i._path)!==path&&i._path!==path)"
            :key="article._path" shadow="hover">
          <template #header>
            <kumo-link :to="`/c${article._path}`" type="primary">{{ guessArticleTitle(article) }}</kumo-link>
            <article-tags :article="article"/>
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
