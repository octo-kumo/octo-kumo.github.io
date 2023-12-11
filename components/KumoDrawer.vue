<script setup lang="ts">
import {useDrawer} from "@/composables/states";
import {guessPathName} from "@/mixins/display";

const drawer = useDrawer();
const router = useRouter();

const nav = router.getRoutes();
const NAMES: { [key: string]: string } = {
  "projects-er-editor": "ER Editor",
  "projects-json-schema": "JSON Editor",
  "projects-price-comparator": "Price Comparator",
  "projects-thumbnails": "Thumbnails",
};
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
              title="Projects"
          ></v-list-item>
        </template>
        <v-list-item v-for="n in nav.filter(r=>r.path.startsWith('/projects/'))"
                     :title="NAMES[String(n.name)]??guessPathName(n.name!)" :key="n.name"
                     :to="n"></v-list-item>
      </v-list-group>
      <v-list-item title="About" to="/about" prepend-icon="mdi-information"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="css">
</style>
