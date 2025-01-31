<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <el-empty :description="error?.message">
    <h1>{{ error?.statusCode }}</h1>
    <el-button type="primary" tag="a" href="/">Go Back</el-button>
    <pre class="text-start max-w-prose overflow-x-auto">{{ JSON.stringify(error, null, 4) }}</pre>
  </el-empty>
</template>
