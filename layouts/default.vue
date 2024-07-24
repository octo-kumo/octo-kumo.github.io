<template>
  <el-scrollbar class="drawer" :class="{ open: drawerIsOpen, 'drawer-collapsed': collapsed }">
    <kumo-drawer :collapse="collapsed" class="menu" />
  </el-scrollbar>
  <kumo-header @back="drawerIsOpen = !drawerIsOpen" class="w-full justify-center flex">
  </kumo-header>
  <div class="overlay" v-show="overlay" @click="drawerIsOpen = false" />
  <el-main class="p-0! main <md:ml-0!" :class="{ open: drawerIsOpen, 'drawer-collapsed': collapsed }">
    <div class="px-3">
      <slot />
    </div>
  </el-main>
</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const { $pwa } = useNuxtApp();
const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const drawerIsOpen = useStorage("drawer-open", false);
const phone = breakpoints.smaller('lg');
const collapsed = computed(() => !phone.value && !drawerIsOpen.value);
const overlay = computed(() => phone.value && drawerIsOpen.value);
watch(() => route.path, () => {
  if (phone.value) drawerIsOpen.value = false;
});
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
  @apply fixed top-0 bottom-0 left-0 w-80 overflow-y-auto;
  background-color: var(--bg-color);
  transform: translate(-100%);
  transition: background-color var(--el-transition-duration-fast), opacity .25s, transform .5s cubic-bezier(.19, 1, .22, 1), width .5s cubic-bezier(.19, 1, .22, 1);
  view-transition-name: "app-drawer";
  height: 100dvh;

  &.open {
    transform: translate(0);
  }

  @screen lg {
    z-index: 11;
    transform: translate(0);
    top: var(--el-menu-horizontal-height);
    height: calc(100dvh - var(--el-menu-horizontal-height));
  }

  @screen md {
    width: 16em;
    z-index: 31;

    &.drawer-collapsed {
      width: 64px;
    }
  }

  @screen lt-md {
    width: calc(320px - 14px);
    z-index: 31;
  }
}

.menu {
  transition: width .5s cubic-bezier(.19, 1, .22, 1);
  min-height: 100dvh;

  @screen lg {
    min-height: calc(100dvh - var(--el-menu-horizontal-height));
  }
}

.main {
  transition: var(--el-transition-all);
  min-height: calc(100vh - var(--el-menu-horizontal-height));
  background-image: url("/bg/bg_texture.png");
  view-transition-name: "app-main";

  @screen lg {
    margin-left: 16em;

    &.drawer-collapsed {
      margin-left: 64px;
    }
  }
}

html.dark .main {
  background-image: url("/bg/bg_texture.dark.png");
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
  z-index: 30;
}
</style>
