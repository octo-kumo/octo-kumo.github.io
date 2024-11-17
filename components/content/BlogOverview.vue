<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <el-timeline>
        <el-timeline-item v-for="(blog, index) in list" :key="index" type="primary" :size="'normal'" :hollow="true"
          :timestamp="blog.created">
          <kumo-link type="primary" :to="'/c' + blog._path" class="font-mono">
            {{ guessArticleTitle(blog) }}
          </kumo-link>
          <article-tags :article="blog" :ignore="['blog']" />
          {{ blog.description }}
        </el-timeline-item>
      </el-timeline>
    </template>
    <template #not-found #empty>
      <el-empty description="No Blogs">
        <el-text>This is most likely an error.</el-text>
      </el-empty>
    </template>
  </ContentList>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = {
  path: "/blog/",
  sort: [{ created: -1 }],
  limit: 10,
  only: ['_id', '_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'excerpt'],
};

</script>

<style></style>