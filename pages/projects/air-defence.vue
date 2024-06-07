<template>
  <client-only>
    <AirDefenceGame v-if="WebGL.isWebGLAvailable()" style="height: 100vh">
    </AirDefenceGame>
    <el-card v-else>
      <template #header>
        <p>WebGL not supported!</p>
      </template>
      <p>Please use some other web browser that supports webgl</p>
    </el-card>
    <el-button class="fixed top-0 left-0" tag="a" href="/">
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
import AirDefenceGame from "@/components/AirDefenceGame.vue";
import {WebGL} from "three/examples/jsm/Addons";

definePageMeta({
  layout: 'clean',
  title: 'Air Defence',
  description: 'Fancy game about fighting planes using an AA gun (WIP)',
  image: '/img/airdef.png'
});
</script>
<style scoped lang="css">
.air-defence-game-parent {
  display: none !important;
}
</style>
