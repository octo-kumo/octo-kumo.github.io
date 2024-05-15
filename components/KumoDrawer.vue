<template>
  <v-navigation-drawer color="grey-darken-2" v-model="localDrawerIsOpen">
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
                     :title="guessPathName(n.name!)" :key="n.name"
                     :to="n"></v-list-item>
      </v-list-group>
      <v-list-item title="About" to="/about" prepend-icon="mdi-information"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";

const router = useRouter();
const nav = router.getRoutes();

const props = defineProps({
  drawerIsOpen: Boolean,
});

const emit = defineEmits(['update:drawerIsOpen']);

const localDrawerIsOpen = computed({
  get() {
    return props.drawerIsOpen;
  },
  set(value) {
    emit('update:drawerIsOpen', value);
  },
});
</script>
<style scoped lang="css">
</style>
