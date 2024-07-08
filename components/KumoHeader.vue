<template>
  <el-page-header :icon="''" class="header select-none">
    <template #title>云</template>
    <template #icon>
      <el-icon class="hidden! md:flex!">
        <el-icon-menu></el-icon-menu>
      </el-icon>
    </template>
    <template #content>
      <el-space style="height: var(--el-header-height);">
        <span class="text-large font-600 mr-3"> {{ routeName }} </span>
        <slot></slot>
      </el-space>
    </template>
    <template #extra>
      <el-button :icon="icon" @click="color.preference=(color.value==='dark'?'light':'dark')" circle/>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";
import {Moon, Sunny} from "@element-plus/icons-vue";

const route = useRoute();
const color = useColorMode();
const routeName = computed(() => route.meta.title ?? guessPathName(route.name as string));
const icon = computed(() => color.value === 'dark' ? Moon : Sunny);
</script>
<style lang="scss" scoped>
.header {
  view-transition-name: "app-header";
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  height: var(--el-menu-horizontal-height);
}

html.dark .header {
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
}
</style>
