<template>
  <NuxtLayout>
    <VitePwaManifest/>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
useHead({
  title: route.meta.title ?? route.name,
  meta: [{name: 'description', content: route.meta.description as string ?? ""}]
});
</script>
