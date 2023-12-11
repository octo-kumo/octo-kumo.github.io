<template>
  <v-app-bar scroll-behavior="inverted" color="black" order="1">
    <v-app-bar-nav-icon @click="drawer=!drawer"/>
    <v-app-bar-title>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </v-app-bar-title>
  </v-app-bar>
</template>
<script setup>
import {useDrawer} from "@/composables/states";
import {useBreadcrumbs} from "@/composables/useBreadcrumbs";

const drawer = useDrawer();
const {breadcrumbs} = useBreadcrumbs();
</script>
