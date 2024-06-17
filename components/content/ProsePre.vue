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

<style lang="scss">
pre.shiki {
  position: relative;
  scrollbar-width: thin;
  overflow: auto;
  padding: 5px;
  border: 1px solid var(--el-border-color);
  //box-shadow: var(--el-box-shadow-lighter);
  border-radius: var(--el-border-radius-base);

  & code {
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
    font-family: monospace;
    color: var(--el-text-color-secondary);
    font-size: var(--el-font-size-small);
    font-weight: bold;
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }

  &[data-lang]::before {
    content: attr(data-lang);
  }
}

</style>
