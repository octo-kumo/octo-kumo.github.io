<template>
  <div style="height: 100vh;">
    <client-only>
      <AirDefenceGame v-if="WebGL.isWebGLAvailable()" style="height: 100%">
      </AirDefenceGame>
      <v-card v-else>
        <v-card-title>WebGL not supported!</v-card-title>
        <v-card-text>Please use some other web browser that supports webgl</v-card-text>
      </v-card>
    </client-only>
  </div>
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

</style>
