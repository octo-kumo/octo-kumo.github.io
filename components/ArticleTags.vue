<script setup lang="ts">
import type {ParsedContent} from "@nuxt/content";

const props = withDefaults(defineProps<{
  article?: ParsedContent | Partial<ParsedContent>,
  idPrefix?: string,
  hideCat?: boolean,
  customTagHtml?: (tag: string, index: number) => string
}>(), {
  customTagHtml: (tag) => tag
})

const categories = [
  "web", "crypto", "forensic", "forensics", "algo", "pwn", "rev", "misc", "osint", "box", "hardware"
];
const category = computed(() => props.article?._path?.split("/").at(-2) ?? 'unknown');
const transitionId = computed(() => getTransitionName(props.article, 'tags-' + (props.idPrefix ?? '')));
</script>

<template>
  <div class="flex gap-1 my-1 article-tags" v-if="article">
    <el-tag v-if="article.points" size="small" type="info">{{ article.points }} points</el-tag>
    <el-tag v-if="article.solves" size="small" :type=" article.solves>50?'info':'success'">
      {{ article.solves }} solves
    </el-tag>
    <el-tag size="small" v-if="categories.includes(category)&&!hideCat">{{ category }}</el-tag>
    <el-tag size="small" v-for="(tag,i) in (article.tags??[])">
      <span v-html="customTagHtml(tag,i)"></span>
    </el-tag>
  </div>
</template>

<style scoped lang="scss">
.article-tags {
  view-transition-name: v-bind('transitionId');
}
</style>
