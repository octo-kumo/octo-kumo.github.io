<template>
  <v-container>
    <v-row>
      <v-col
          v-for="(item, index) in components"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
      >
        <component :is="item.element"></component>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import TimeValue from "@/components/finance/time-value.vue";

const components = [
  {element: TimeValue, name: 'Time Value'},
  // {element: ComponentB, name: 'Component B'}
]
</script>
<style scoped lang="css">

</style>
