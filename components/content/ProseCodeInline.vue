<template>
  <code>
    <slot/>
  </code>
</template>
<style lang="scss" scoped>
code {
  @apply font-mono;
  margin: .1em .1em;
  padding: .1em .4em;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  font-size: var(--el-font-size-extra-small);
}
</style>
