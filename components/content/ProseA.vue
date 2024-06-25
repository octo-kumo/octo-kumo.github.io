<template>
  <el-link
      type="primary"
      :href="href"
      :target="target!">
    <slot/>
    <template #icon>
      <el-icon>
        <el-icon-link/>
      </el-icon>
    </template>
  </el-link>
</template>

<script setup lang="ts">
import type {PropType} from 'vue'

defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: '_blank',
    required: false
  }
})
</script>
