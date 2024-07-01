<template>
  <el-scrollbar class="fixed! top-0 left-0 z-9 drawer">
    <kumo-drawer :collapse="!drawerIsOpen" class="hidden md:block menu"
                 :default-openeds="['projects']"/>
  </el-scrollbar>
  <kumo-header @back="drawerIsOpen=!drawerIsOpen" class="fixed top-0 left-0 z-9 w-full justify-center flex"
               style="height:var(--el-menu-horizontal-height)">
    <kumo-drawer mode="horizontal" class="md:hidden!"/>
  </kumo-header>
  <el-main class="p-0! main <md:ml-0!" :class="{'open':drawerIsOpen}">
    <div class="px-3">
      <slot/>
    </div>
  </el-main>
</template>
<script setup lang="ts">
const drawerIsOpen = ref<boolean>(true);
const {$pwa} = useNuxtApp()

onMounted(() => {
  if ($pwa?.offlineReady) {
    ElMessage({
      showClose: true,
      message: 'App ready to work offline',
    });
    console.log("PWA Offline ready!")
  }
})
</script>
<style lang="scss" scoped>
.drawer {
  margin-top: var(--el-menu-horizontal-height);
  height: calc(100vh - var(--el-menu-horizontal-height));
}

.main {
  transition: var(--el-transition-all);
  margin-top: var(--el-menu-horizontal-height);
  min-height: calc(100vh - var(--el-menu-horizontal-height));
  margin-left: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
  overflow-y: visible;

  &.open {
    margin-left: 200px;
  }
}

.menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
