<script setup lang="ts">
import AirDefenceGame from "@/components/AirDefenceGame.vue";
import {WebGL} from "three/examples/jsm/Addons";

useHead({
  title: 'Air Defence',
  meta: [
    {name: 'description', content: 'Fancy game about fighting planes using an AA gun'}
  ],
  script: [{innerHTML: 'console.log(\'Hello world\')'}]
});
definePageMeta({
  layout: 'clean'
});
</script>

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

<style scoped lang="css">

</style>
