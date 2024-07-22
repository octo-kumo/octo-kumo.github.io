<script setup lang="ts">
definePageMeta({
  title: 'Free AI',
  description: 'Why is my bill so high?',
  image: '/img/ai.svg',
  lightThemeImage: true
});
</script>

<template>
  <div>
    <el-tabs>
      <el-tab-pane label="Chat">
        <lazy-ai-chat/>
      </el-tab-pane>
      <el-tab-pane label="Summary">
        <lazy-ai-summary/>
      </el-tab-pane>
      <el-tab-pane label="Image">
        <lazy-ai-image/>
      </el-tab-pane>
    </el-tabs>
    <el-text>Use public AI models, free of charge!</el-text>
  </div>
</template>

<style scoped lang="scss">

</style>
