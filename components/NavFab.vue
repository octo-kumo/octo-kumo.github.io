<script setup lang="ts">
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-menu" id="fab" class="position-fixed right-1 bottom-1 z-10" v-bind="props"/>
    </template>

    <div class="fab-tray flex flex-column">
      <v-btn icon="mdi-menu" id="fab" size="small"/>
      <v-btn icon="mdi-menu" id="fab" size="small"/>
      <v-btn icon="mdi-menu" id="fab" size="small"/>
    </div>
  </v-menu>
</template>

<style scoped lang="css">
.fab-tray {
  display: flex;
}
</style>
