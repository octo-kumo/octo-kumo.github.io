<template>
  <el-link
      type="primary"
      :href="href"
      :target="href.startsWith('#')?'_self':target!">
    <slot/>
    <template #icon v-if="!href.startsWith('#')">
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
<style lang="scss" scoped>
a[data-footnote-ref], a[data-footnote-backref] {
  scroll-margin-top: var(--el-menu-horizontal-height) !important;
}
</style>
