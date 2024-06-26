<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import * as math from "mathjs";
import type {ApexOptions} from "apexcharts";
import type {Ref} from "@vue/reactivity";

const chart: VueApexCharts = ref();
const colorMode = useColorMode();
const chartOptions: Ref<ApexOptions> = ref(<ApexOptions>{
  chart: {
    id: 'vuechart-example',
    background: 'rgba(0, 0, 0, 0)',
  },
  theme: {
    mode: colorMode.value
  },
  xaxis: {
    type: 'numeric',
    title: {text: "Quantity"}
  },
  yaxis: {
    type: 'numeric',
    title: {text: "Price"}
  }
});
watch(colorMode, (value) => {
  if (chartOptions.value.theme?.mode !== value.value) chartOptions.value = {
    ...chartOptions.value,
    theme: {mode: value.value!}
  }
})

const dependentVar = ref('Q');
const demandRelation = ref('100 - 2 * P');
const supplyRelation = ref('20 + 3 * P');
const chartData = ref([]);

function generateApexChartData(demandRelation: string, supplyRelation: string) {
  const scope = dependentVar.value === 'Q' ? {P: 0} : {Qd: 0, Qs: 0};
  const demandExpr = math.compile(demandRelation);
  const supplyExpr = math.compile(supplyRelation);

  function calculateQuantities(price: number) {
    scope.P = price;
    return {Pd: price, Ps: price, Qd: demandExpr.evaluate(scope), Qs: supplyExpr.evaluate(scope)};
  }

  function calculatePrices(quantity: number) {
    scope.Qd = scope.Qs = quantity;
    return {Pd: demandExpr.evaluate(scope), Ps: supplyExpr.evaluate(scope), Qd: quantity, Qs: quantity};
  }

  const dataPoints = [];
  for (let i = 0; i <= 100; i += 1) {
    if (dependentVar.value === 'Q') dataPoints.push(calculateQuantities(i));
    else dataPoints.push(calculatePrices(i));
  }

  return [{
    name: 'Demand Quantity',
    data: dataPoints.map(point => ({x: point.Qd, y: point.Pd}))
  }, {
    name: 'Supply Quantity',
    data: dataPoints.map(point => ({x: point.Qs, y: point.Ps}))
  }];
}

function updateData() {
  try {
    chartData.value = generateApexChartData(demandRelation.value, supplyRelation.value);
  } catch (e) {

  }
}

updateData();
// Example usage
</script>

<template>
  <div>
    <el-form
        label-width="auto"
    >
      <el-form-item label="Demand Relation" show-message>
        <el-input v-model="demandRelation" :spellcheck="false">
          <template #prefix>{{ dependentVar }} =&nbsp;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Supply Relation" show-message error="">
        <el-input v-model="supplyRelation" :spellcheck="false">
          <template #prefix>{{ dependentVar }} =&nbsp;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Dependent Variable">
        <el-radio-group v-model="dependentVar">
          <el-radio value="Q">Quantity</el-radio>
          <el-radio value="P">Price</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-alert title="" type="error"/>
      <el-form-item>
        <el-button type="primary" @click="updateData">Update</el-button>
      </el-form-item>
    </el-form>
    <client-only>
      <vue-apex-charts
          ref="chart"
          class="w-full"
          width="500"
          type="line"
          :options="chartOptions"
          :series="chartData"
      />
    </client-only>
  </div>
</template>

<style scoped lang="scss">

</style>
