<script setup lang="ts">
import type { Challenge } from "~/assets/ctfs";
import type { MDCParserResult } from "@nuxtjs/mdc";
import { Download, Link } from "@element-plus/icons-vue";

defineProps<{ chal: Challenge; ast?: MDCParserResult }>();
</script>

<template>
  <div>
    <div class="flex gap-1">
      <el-tag>{{ chal.diff }}</el-tag>
      <el-tag v-for="tag in chal.tags" type="info">{{ tag }}</el-tag>
    </div>
    <suspense v-if="ast">
      <MDCRenderer :body="ast.body" />
    </suspense>
    <div class="flex gap-1" v-if="ast && chal.files && chal.files.length > 0">
      <el-link
        v-for="file in chal.files"
        type="primary"
        :icon="file.type === 'web' ? Link : Download"
        target="_blank"
        :href="file.url">
        {{ file.name }}
      </el-link>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
