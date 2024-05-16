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
import Annuity from "~/components/finance/annuity.vue";
import Perpetuity from "~/components/finance/perpetuity.vue";

definePageMeta({
  layout: 'default',
  title: 'Finance',
  description: 'Collection of calculators for finance stuff'
});
const components = [
  {element: TimeValue, name: 'Time Value'},
  {element: Annuity, name: 'Annuity'},
  {element: Perpetuity, name: 'Perpetuity'},
]
</script>
<style scoped lang="css">

</style>
