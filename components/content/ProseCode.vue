<template>
  <code>
    <slot/>
  </code>
</template>
<style lang="scss" scoped>
code {
  @apply font-mono;
  margin: .1em .1em;
  padding: .2em .4em;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  font-size: 12px;
  max-width: 100%;
  text-wrap: balance;
  overflow-wrap: break-word;
}
</style>
