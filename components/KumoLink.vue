<template>
  <nuxt-link custom v-slot="routerProps">
    <el-link
        :type="routerProps.isActive?'primary':'default'"
        :href="routerProps.href"
        v-bind="$attrs"
        @click="routerProps.navigate">
      <slot/>

      <el-icon v-if="$attrs.showIcon">
        <el-icon-link/>
      </el-icon>
    </el-link>
  </nuxt-link>
</template>
