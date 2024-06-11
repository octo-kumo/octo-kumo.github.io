<template>
  <pre :class="$props.class" :data-lang="language"><slot/></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style lang="scss" scoped>
pre {
  position: relative;
  scrollbar-width: thin;
  overflow: auto;
  padding: 5px;
  border: 1px solid var(--el-border-color);
  //box-shadow: var(--el-box-shadow-lighter);
  border-radius: var(--el-border-radius-base);
}

pre code .line {
  display: block;
}

pre[data-lang]::before {
  font-family: monospace;
  color: var(--el-text-color-secondary);
  font-size: var(--el-font-size-small);
  font-weight: bold;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
}

pre[data-lang]::before {
  content: attr(data-lang);
}
</style>
