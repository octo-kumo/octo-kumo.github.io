<template>
  <v-app>
    <NuxtLoadingIndicator/>
    <kumo-header :drawerIsOpen="drawerIsOpen"
                 @update:drawerIsOpen="console.log('HEADER!',drawerIsOpen = Boolean($event))"/>
    <kumo-drawer :drawerIsOpen="drawerIsOpen"
                 @update:drawerIsOpen="console.log('DRAWER!',drawerIsOpen = Boolean($event))"/>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const drawerIsOpen = ref<boolean>(false);
</script>
