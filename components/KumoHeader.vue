<template>
  <v-app-bar scroll-behavior="hide elevate" color="black">
    <v-app-bar-nav-icon @click="toggleDrawer"/>
    <v-app-bar-title>{{ routeName }}
    </v-app-bar-title>
  </v-app-bar>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";

const route = useRoute();
const props = defineProps({
  drawerIsOpen: Boolean,
});
const routeName = ref("");
watch(
    () => route.name,
    newId => routeName.value = guessPathName(newId!),
    {immediate: true});
const emit = defineEmits(['update:drawerIsOpen']);

const toggleDrawer = () => {
  console.log("toggleDrawer", props.drawerIsOpen)
  emit('update:drawerIsOpen', !props.drawerIsOpen);
};
</script>
