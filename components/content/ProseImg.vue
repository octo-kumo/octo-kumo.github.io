<template>
  <el-image class="max-w-full block! mx-auto w-fit my-1 rounded" :src="refinedSrc" :preview-src-list=[refinedSrc]
    :alt="alt" :width="width" :height="height" lazy preview-teleported>
    <template #error>
      <div class="image-slot">
        <el-icon><el-icon-picture /></el-icon>
      </div>
    </template>
  </el-image>
</template>

<script setup lang="ts">
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo'
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  // https://res.cloudinary.com/kumonochisanaka/image/upload/v1723105941/2024/08/bf88dc88535ec81d0427876365efe356.png
  if (props.src?.startsWith('https://res.cloudinary.com/kumonochisanaka/image')) {
    return props.src.replace('https://res.cloudinary.com/kumonochisanaka/image', 'https://image.yun.ng')
  }
  return props.src
})
</script>
<style lang="scss" scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}

.image-slot .el-icon {
  font-size: 30px;
}
</style>