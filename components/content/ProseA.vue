<template>
  <nuxt-link class="content-link align-baseline! text-base!" type="default" :href="href"
    :target="href.startsWith('#') ? '_self' : target!">
    <slot />
    <template v-if="!href.startsWith('#')">
      <el-icon class="align-baseline">
        <el-icon-link />
      </el-icon>
    </template>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

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
a.content-link {
  & {
    color: var(--el-text-color-primary);
    text-decoration: underline;
    text-decoration-color: var(--el-color-primary);
    text-decoration-thickness: .1em;
    transition: text-decoration .2s ease-in-out;
  }

  &[data-footnote-ref],
  &[data-footnote-backref] {
    scroll-margin-top: var(--el-menu-horizontal-height) !important;
  }

  &:hover {
    text-decoration-thickness: .15em;
  }
}
</style>
