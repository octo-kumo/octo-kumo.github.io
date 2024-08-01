<script setup lang="ts">
const props = defineProps<{ repo: string }>();
const repo = props.repo;
const { data: markdown } = useLazyAsyncData(`github-repo-${repo}`, () => $fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`).then(t => String(t).replace(
  /!\[(.*?)]\((?!https?:\/\/)(.*?)\)/g, `![$1](https://raw.githubusercontent.com/${repo}/master/$2)`
)));
</script>

<template>
  <div class="max-w-prose mx-auto">
    <github-repo-info :repo="repo" />
    <MDC :value="markdown"></MDC>
  </div>
</template>

<style scoped lang="scss"></style>
