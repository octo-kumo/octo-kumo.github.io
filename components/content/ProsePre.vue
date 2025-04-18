<template>
  <pre v-if="language !== 'mermaid'" :class="$props.class" :data-lang="language" :data-file="filename"
    :data-meta="meta"><slot/></pre>
  <div v-else ref="mermaid" class="mermaid" :data-file="filename"></div>
</template>

<script setup lang="ts">
import type { Mermaid } from "mermaid";

const mermaid = ref();
const props = defineProps({
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
});
const color = useColorMode();

function getMermaid() {
  if (import.meta.client) return ((window as any) as {
    mermaid: Promise<Mermaid>
  }).mermaid ??= import("mermaid").then(d => d.default);
  return import("mermaid").then(d => d.default);
}

function render(code: string) {
  if (mermaid.value.getAttribute("theme") === color.value) return;
  mermaid.value.setAttribute("theme", color.value);
  getMermaid().then((d) => {
    console.log("mermaid render!")
    d.initialize({
      fontFamily: 'var(--font)',
      startOnLoad: false,
      themeVariables: {},
      securityLevel: 'loose',
      theme: color.value === 'dark' ? 'dark' : 'neutral',
    });
    return d.render("mermaid-" + String(hashCode(new Date().toISOString()).toString(36)), code);
  }).then(res => {
    mermaid.value.innerHTML = res.svg;
    res.bindFunctions?.(mermaid.value);
  }).catch(e => console.error(e));
}

function maybeRender() {
  if (import.meta.client && props.language === 'mermaid' && mermaid.value) render(props.code);
}

onMounted(maybeRender)
watch(color, maybeRender, { immediate: true });
</script>

<style lang="scss">
pre {
  & {
    line-height: 120%;
    position: relative;
    scrollbar-width: thin;
    overflow: auto;
    padding: 5px;
    border: 1px solid var(--el-border-color);
    //box-shadow: var(--el-box-shadow-lighter);
    border-radius: var(--el-border-radius-base);
    background-color: var(--el-bg-color);
  }

  & code {
    @apply font-mono;
    font-size: 12px;
    counter-reset: step;
    counter-increment: step 0;
  }

  code .line {
    & {
      display: block;
    }

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

  &:not([data-lang]) {
    & {
      overflow-x: hidden;
    }

    code {
      text-wrap: balance;
      max-width: 100%;
    }
  }

  &[data-lang]::before {
    color: var(--el-text-color-secondary);
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    left: 1em;
    top: 0.3em;
  }

  &[data-lang]::before {
    content: attr(data-lang);
  }

  &[data-lang=flag]::before {
    content: '⚑ ' attr(data-lang);
  }

  &[data-file],
  &[data-lang] {
    padding-top: 25px;
  }

  &[data-file]::after {
    color: var(--el-color-primary);
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    right: 1em;
    top: 0.3em;
    border-bottom: solid 1px var(--el-border-color);
  }

  &[data-file]::after {
    content: attr(data-file);
  }
}

div.mermaid {
  & {
    position: relative;
    scrollbar-width: thin;
    overflow: auto;
    padding: 5px;
  }

  &[data-file]::before {
    color: var(--el-text-color-secondary);
    font-size: 12px;
    font-weight: bold;
    content: attr(data-file);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
