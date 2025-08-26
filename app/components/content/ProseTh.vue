<template>
  <th>
    <slot />
  </th>
</template>
<style scoped>
th {
  & {
    border: var(--el-border);
    padding: 0.5rem;
  }

  &:first-child {
    border-top-left-radius: var(--el-border-radius-base);
  }
}
</style>
