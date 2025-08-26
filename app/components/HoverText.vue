<template>
  <span class="hover-text">
    <span class="text-default">
      <slot />
    </span>
    <span class="text-hover">
      <slot name="hover" />
    </span>
  </span>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.hover-text {
  position: relative;
  overflow: hidden;
}

.hover-text span {
  display: inline;
  transition: opacity 0.5s ease;
}

.hover-text .text-default {
  opacity: 1;
}

.hover-text .text-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.hover-text:hover .text-default {
  opacity: 0;
}

.hover-text:hover .text-hover {
  opacity: 1;
}
</style>