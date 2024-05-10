<template>
  <v-app-bar scroll-behavior="hide elevate" color="black">
    <v-app-bar-nav-icon @click="drawer=!drawer"/>
    <v-app-bar-title>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </v-app-bar-title>
  </v-app-bar>
</template>
<script setup lang="ts">
import {useDrawer} from "@/composables/states";
import {useBreadcrumbs} from "@/composables/useBreadcrumbs";

const drawer = useDrawer();
const breadcrumbs: any = useBreadcrumbs().breadcrumbs;
</script>
