<script setup lang="ts">
import type {ParsedContent} from "@nuxt/content";

const props = defineProps<{
  article?: ParsedContent | Partial<ParsedContent>,
  idPrefix?: string,
  hideCat?: boolean,
}>();

const categories = [
  "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev", "misc", "osint", "box", "hardware"
];
const category = computed(() => props.article?._path?.split("/").at(-2) ?? 'unknown');
const transitionId = computed(() => 'tags_' + (props.idPrefix ?? '') + (props.article?._path ?? 'default'));
</script>

<template>
  <div class="flex gap-1 my-1 article-tags" v-if="article">
    <el-tag v-if="article.points" size="small" type="info">{{ article.points }} points</el-tag>
    <el-tag v-if="article.solves" size="small" :type=" article.solves>50?'info':'success'">
      {{ article.solves }} solves
    </el-tag>
    <el-tag size="small" v-if="categories.includes(category)&&!hideCat">{{ category }}</el-tag>
    <el-tag size="small" v-for="tag in (article.tags??[])">{{ tag }}</el-tag>
  </div>
</template>

<style scoped lang="scss">
.article-tags {
  view-transition-name: v-bind('transitionId');
}
</style>
