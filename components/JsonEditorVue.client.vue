<script setup>
import JsonEditorVue from 'json-editor-vue'

const value = ref()
const attrs = useAttrs()
</script>

<template>
  <JsonEditorVue
      v-model="value"
      v-bind="attrs"
  />
</template>
