<template>
  <pre :class="$props.class" :data-lang="language" :data-file="filename" :data-meta="meta"><slot/></pre>
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

<style lang="scss">
pre {
  position: relative;
  scrollbar-width: thin;
  overflow: auto;
  padding: 5px;
  border: 1px solid var(--el-border-color);
  //box-shadow: var(--el-box-shadow-lighter);
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-bg-color);

  & code {
    @apply font-mono;
    font-size: var(--el-font-size-small);
    counter-reset: step;
    counter-increment: step 0;
  }

  & code .line {
    display: block;

    &::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 0.8rem;
      display: inline-block;
      text-align: right;
      color: rgba(115, 138, 148, .4)
    }
  }

  &[data-lang]::before {
    color: var(--el-text-color-secondary);
    font-size: var(--el-font-size-small);
    font-weight: bold;
    position: absolute;
    right: 0.5em;
    top: 0.3em;
  }

  &[data-lang]::before {
    content: attr(data-lang);
  }

  &[data-file] {
    padding-top: 25px;
  }

  &[data-file]::after {
    color: var(--el-color-primary);
    font-size: var(--el-font-size-small);
    font-weight: bold;
    position: absolute;
    left: 1em;
    top: 0.3em;
    border-bottom: solid 1px var(--el-border-color);
  }

  &[data-file]::after {
    content: attr(data-file);
  }
}

</style>
