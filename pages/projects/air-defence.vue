<script setup lang="ts">
import AirDefenceGame from "@/components/AirDefenceGame.vue";
import {WebGL} from "three/examples/jsm/Addons";

definePageMeta({
  layout: 'clean'
});
</script>

<template>
  <div style="height: calc(100vh - 64px);">
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
