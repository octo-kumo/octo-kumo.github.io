<template>
  <ClientOnly>
    <div class="relative w-full py-8">
      <lite-youtube
        :videoid="vid"
        playlabel="Play video"
        class="absolute inset-0 w-full h-full"
      />
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{ vid: string }>()

onMounted(async () => {
  // lazy‐load the web component only when mounted
  await import('@justinribeiro/lite-youtube')
})
</script>

<style></style>