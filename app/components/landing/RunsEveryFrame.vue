<template>
  
</template>

<script lang="ts" setup>
const { onBeforeRender } = useLoop();
const props = defineProps<{func: () => void}>();
onBeforeRender(() => {
  props.func?.();
});
</script>

<style>

</style>