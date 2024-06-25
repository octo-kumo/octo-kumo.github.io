<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import type {ApexOptions} from "apexcharts";

const options: ApexOptions = {
  chart: {
    id: 'vuechart-example',
    background: 'rgba(0, 0, 0, 0)',
  },
  tooltip: {
    theme: 'dark'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
};
const series = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}];
</script>

<template>
  <div>
    <client-only>
      <vue-apex-charts
          class="w-full"
          width="500"
          type="line"
          :options="options"
          :series="series"
      />
    </client-only>
  </div>
</template>

<style scoped lang="scss">

</style>
