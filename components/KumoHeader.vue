<template>
  <v-app-bar scroll-behavior="inverted" color="black" order="1">
    <v-app-bar-nav-icon @click="drawer=!drawer"/>
    <v-app-bar-title>云</v-app-bar-title>
  </v-app-bar>
</template>
<script setup>
import {useDrawer} from "@/composables/states";

const drawer = useDrawer();
</script>
