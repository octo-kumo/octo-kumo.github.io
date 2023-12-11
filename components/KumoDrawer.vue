<script setup lang="ts">
import {useDrawer} from "@/composables/states";

const drawer = useDrawer();
const router = useRouter();

const nav = router.getRoutes();

function getName(name?: string | symbol) {
  switch (name) {
    case "projects-er-editor":
      return "ER Editor"
    case "projects-json-schema":
      return "JSON Editor"
    case "projects-price-comparator":
      return "Price Comparator"
    case "projects-thumbnails":
      return "Thumbnails"
    default:
      return String(name);
  }
}
</script>

<template>
  <v-navigation-drawer color="grey-darken-2" v-model="drawer">
    <v-list>
      <v-list-item title="白云" subtitle="Personal Site"></v-list-item>
      <v-divider></v-divider>
      <v-list-item title="Home" to="/" prepend-icon="mdi-home"></v-list-item>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-heart"
              title="Tools"
          ></v-list-item>
        </template>
        <v-list-item v-for="n in nav.filter(r=>r.path.startsWith('/projects'))"
                     :title="getName(n.name)" :key="n.name"
                     :to="n"></v-list-item>
      </v-list-group>
      <v-list-item title="About" to="/about" prepend-icon="mdi-information"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="css">
</style>
