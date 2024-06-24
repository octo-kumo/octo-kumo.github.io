<template>
  <el-page-header :icon="''" class="header">
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
      <ClientOnly>
        <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
      </ClientOnly>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";

const route = useRoute();
const routeName = ref("");
watch(() => route.meta.title ?? route.name, newId => routeName.value = guessPathName(newId!), {immediate: true});

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});
</script>
<style lang="scss" scoped>
.header {
  background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
}

html.dark .header {
  background-image: radial-gradient(transparent 1px, #222 1px);
}
</style>
