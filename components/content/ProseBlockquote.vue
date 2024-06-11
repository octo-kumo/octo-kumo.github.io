<template>
  <blockquote>
    <slot/>
  </blockquote>
</template>
<style scoped lang="scss">
blockquote {
  font-style: italic;
  padding: 4px 16px;
  background-color: #aaa2;
  border-radius: 4px;
  border-left: 5px solid var(--el-color-primary);
  margin: 20px 0;
}
</style>
