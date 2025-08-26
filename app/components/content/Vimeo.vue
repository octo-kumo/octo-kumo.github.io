<template>
  <div style="padding:56.25% 0 0 0;position:relative;"><iframe
      :src="`https://player.vimeo.com/video/${vid}?badge=0&title=0&loop=0&color=409eff&byline=0&portrait=0`"
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Video"></iframe></div>
</template>

<script lang="ts" setup>
defineProps<{ vid: string }>()
</script>

<style></style>