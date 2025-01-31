<template>
  <el-timeline v-if="list && list.length > 0">
    <el-timeline-item v-for="(blog, index) in list" :key="index" type="primary" :size="'normal'" :hollow="true"
      :timestamp="String(blog.created)">
      <kumo-link type="primary" :to="'/c' + blog.path" class="font-mono">
        {{ guessArticleTitle(blog) }}
      </kumo-link>
      <article-tags :article="blog" :ignore="['blog']" />
      {{ blog.description }}
    </el-timeline-item>
  </el-timeline>
  <el-empty description="No Blogs" v-else>
    <el-text>This is most likely an error.</el-text>
  </el-empty>
</template>

<script lang="ts" setup>
const { data: list } = await useAsyncData("blogs_list", () => {
  return queryCollection('content')
    .path('blog')
    .select('title', 'description', 'created', 'path')
    .order('created', 'DESC')
    .all()
})
</script>

<style></style>