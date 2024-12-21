<template>
  <client-only>
    <lazy-air-defence-game v-if="supported">
    </lazy-air-defence-game>
    <el-card v-else>
      <template #header>
        <p>WebGL not supported!</p>
      </template>
      <p>Please use some other web browser that supports webgl</p>
    </el-card>
    <el-button class="fixed top-0 left-0" tag="a" href="/" type="primary" link>
      <template #icon>
        <el-icon>
          <el-icon-back></el-icon-back>
        </el-icon>
      </template>
      Go back
    </el-button>
  </client-only>
</template>
<script setup lang="ts">
const supported = ref(true);

definePageMeta({
  layout: 'clean',
  title: 'Air Defence',
  description: 'Fancy game about fighting planes using an AA gun (WIP)',
  image: '/img/airdef.webp',
  wip: true,
});
onActivated(() => {
  import("three/examples/jsm/capabilities/WebGL").then(WEBGL => {
    if (!WEBGL.default.isWebGLAvailable()) supported.value = false;
  })
})
</script>
<style scoped lang="css"></style>
