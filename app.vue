<template>
  <!-- <NuxtLoadingIndicator color="var(--el-color-primary)" v-shared="'loading-bar'" /> -->
  <NuxtPwaAssets />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <client-only><pwa-prompt /></client-only> -->
</template>
<script setup lang="ts">
const route = useRoute();
if (!route.meta.customHead) useHead({
  title: route.meta.title ?? route.name,
  meta: [{ name: 'description', content: route.meta.description as string ?? "" }]
});
if (!route.meta.disableSEO) useSeoMeta({
  title: route.meta.title ?? route.name,
  ogTitle: String(route.meta.title ?? route.name ?? ""),
  description: route.meta.description as string ?? "",
  ogDescription: route.meta.description as string ?? "",
  ...(route.meta.image ? { ogImage: route.meta.image } : {}) as any,
});
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
