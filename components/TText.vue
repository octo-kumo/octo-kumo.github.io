<template>
  <span class="relative inline cursor-help" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <span
      class="decoration-dashed underline decoration-sky-200 underline-offset-2 hover:underline-offset-4 hover:bg-sky-800 transition-all">
      <slot />
    </span>
    <transition name="fade">
      <div v-if="showTooltip"
        class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-sm rounded shadow-lg whitespace-nowrap select-none pointer-events-none overflow-visible">
        {{ tooltip }}
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
interface Props {
  tooltip: string
}
defineProps<Props>()
const showTooltip = ref(false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
