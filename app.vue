<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
useHead({
  title: route.meta.title ?? route.name,
  meta: [{name: 'description', content: route.meta.description as string ?? ""}]
});
useSeoMeta({
  title: route.meta.title ?? route.name,
  ogTitle: String(route.meta.title ?? route.name ?? ""),
  description: route.meta.description as string ?? "",
  ogDescription: route.meta.description as string ?? "",
  ogImage: String(route.meta.image ?? "")
})
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
