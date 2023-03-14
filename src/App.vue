<script setup lang="ts">
import {RouterView} from "vue-router";
import NavMenu from "@/components/NavMenu.vue";

const links = [
  {
    name: "Main",
    link: "/",
    icon: "",
  },
  {
    name: "SchemaConvert",
    link: "/schema-converter",
    icon: "",
  },
];
</script>

<template>
  <NavMenu :links="links"></NavMenu>
  <RouterView/>
</template>

<style scoped></style>
