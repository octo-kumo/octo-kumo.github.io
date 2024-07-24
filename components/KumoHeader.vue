<template>
  <el-page-header :icon="''" class="header select-none" v-shared='"app-header"'>
    <template #title><span v-shared="'header-title-text'">云</span></template>
    <template #icon>
      <el-icon v-shared="'header-menu-icon'">
        <el-icon-menu></el-icon-menu>
      </el-icon>
    </template>
    <template #content>
      <el-space style="height: var(--el-header-height);">
        <span class="text-large font-600 mr-3" v-shared="'header-page-name'"> {{ routeName }} </span>
        <!-- <slot></slot> -->
      </el-space>
    </template>
    <template #extra>
      <el-button :icon="icon" @click="color.preference = (color.value === 'dark' ? 'light' : 'dark')" circle
        v-shared="'header-theme-toggle'" />
      <el-button :icon="Search" @click="searchVisible = true" circle v-shared="'header-search-btn'" />
      <el-dialog v-model="searchVisible" title="Recent Posts / Writeups" width="700" append-to-body top="1em"
        class="max-w-full">
        <note-search v-shared="'header-search-dialog'" />
      </el-dialog>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import { Moon, Sunny, Search } from "@element-plus/icons-vue";
const searchVisible = ref(false);
const route = useRoute();
const color = useColorMode();
const routeName = computed(() => route.meta.title ?? guessPathName(route.name as string));
const icon = computed(() => color.value === 'dark' ? Moon : Sunny);
watch(() => route.path, () => {
  searchVisible.value = false;
});
</script>
<style lang="scss" scoped>
.header {
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  height: var(--el-menu-horizontal-height);

  top: 0;
  left: 0;
  position: relative;
  z-index: 12;
}

@media screen and (min-width: 960px) {
  .header {
    position: sticky;
    width: 100%;
  }
}
</style>
