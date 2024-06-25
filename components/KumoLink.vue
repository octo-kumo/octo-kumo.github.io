<template>
  <nuxt-link custom v-slot="routerProps">
    <el-link
        :type="routerProps.isActive?'primary':'default'"
        :href="routerProps.href"
        v-bind="$attrs"
        @click="routerProps.navigate">
      <slot/>
    </el-link>
  </nuxt-link>
</template>
