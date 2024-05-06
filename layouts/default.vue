<template>
  <v-app>
    <NuxtLoadingIndicator/>
    <kumo-header/>
    <kumo-drawer/>
    <v-main>
      <slot/>
    </v-main>
    <KumoFab/>
  </v-app>
</template>
<script setup lang="ts">
</script>
