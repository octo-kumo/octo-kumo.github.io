<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

const props = defineProps<{ repo: string }>();
const repo = props.repo;

const { data: ast } = await useAsyncData(`github-repo-${repo}`, async () => {
  const markdown =  String(await $fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`))
  .replace(/!\[(.*?)]\((?!https?:\/\/)(.*?)\)/g, `![$1](https://raw.githubusercontent.com/${repo}/master/$2)`);
  return parseMarkdown(markdown)
});
</script>

<template>
  <div class="max-w-prose mx-auto">
    <github-repo-info :repo="repo" />
    <div v-if="ast">
      <MDCRenderer
        v-if="ast?.body"
        :body="ast.body"
        :data="ast.data"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
