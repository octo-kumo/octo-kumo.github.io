<template>
  <nuxt-link custom v-slot="routerProps" :no-prefetch="Boolean($attrs.noPrefetch)">
    <el-link
        :type="routerProps.isActive?'primary':'default'"
        :href="routerProps.href"
        :target="Boolean($attrs.noPrefetch)?'_blank':'_self'"
        v-bind="$attrs"
        @click="routerProps.navigate">
      <slot/>

      <el-icon v-if="$attrs.showIcon">
        <el-icon-link/>
      </el-icon>
    </el-link>
  </nuxt-link>
</template>
