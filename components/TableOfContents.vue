<script setup lang="ts">
import type {TocLink} from "@nuxt/content/types";

defineProps<{
  link: TocLink
}>()
</script>

<template>
  <el-anchor-link :href="`#${link.id}`">
    {{ link.text }}
    <template #sub-link v-if="link.children">
      <table-of-contents
          v-for="child in link.children"
          :link="child">
      </table-of-contents>
    </template>
  </el-anchor-link>
</template>
