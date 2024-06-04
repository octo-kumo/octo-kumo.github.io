<template>
  <div style="height: calc(100vh - 60px);" class="mx--3">
    <client-only>
      <AirDefenceGame v-if="WebGL.isWebGLAvailable()" style="height: 100%">
      </AirDefenceGame>
      <el-card v-else>
        <template #header>
          <p>WebGL not supported!</p>
        </template>
        <p>Please use some other web browser that supports webgl</p>
      </el-card>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import AirDefenceGame from "@/components/AirDefenceGame.vue";
import {WebGL} from "three/examples/jsm/Addons";

definePageMeta({
  // layout: 'clean',
  title: 'Air Defence',
  description: 'Fancy game about fighting planes using an AA gun (WIP)',
  image: '/img/airdef.png'
});
</script>
<style scoped lang="css">

</style>
