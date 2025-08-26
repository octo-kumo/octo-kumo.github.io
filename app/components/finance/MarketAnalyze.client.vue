<script setup lang="ts">
import VueApexCharts, { type VueApexChartsComponent } from "vue3-apexcharts";
import * as math from "mathjs";
import type { ApexOptions } from "apexcharts";
import type { Ref } from "@vue/reactivity";

const chart: Ref<VueApexChartsComponent | undefined> = ref();
const colorMode = useColorMode();
const chartOptions: Ref<ApexOptions> = ref(<ApexOptions>{
  chart: {
    id: "vuechart-example",
    // background: 'rgba(0, 0, 0, 0)',
  },
  theme: {
    mode: colorMode.value,
  },
  xaxis: {
    type: "numeric",
    title: { text: "Quantity" },
  },
  yaxis: {
    type: "numeric",
    title: { text: "Price" },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: [2, 2, 1, 1],
  },
  fill: {
    opacity: [1, 1, 0.24, 0.24],
  },
});
watch(colorMode, (value) => {
  if (chartOptions.value.theme?.mode !== value.value)
    chartOptions.value = {
      ...chartOptions.value,
      theme: { mode: value.value as "light" | "dark" },
    };
});
const min = ref(0);
const max = ref(50);
const step = ref(1);
const yVar = ref("P");
const xVar = computed(() => (yVar.value === "Q" ? "P" : "Q"));
const demandRelation = ref("100 - 2 * Q");
const supplyRelation = ref("20 + 3 * Q");
const chartData: Ref<ApexAxisChartSeries> = ref([]);

function newtonsMethod(
  f: (x: number) => number,
  fPrime: (x: number) => number,
  target = 0,
  initialGuess = 0,
  tolerance = 1e-7,
  maxIterations = 1000
) {
  let x = initialGuess;
  for (let i = 0; i < maxIterations; i++) {
    const y = f(x) - target;
    const yPrime = fPrime(x);

    if (Math.abs(yPrime) < tolerance)
      throw new Error("Derivative is too small, possible local extrema!");
    const xNext = x - y / yPrime;
    if (Math.abs(xNext - x) < tolerance) return xNext;
    x = xNext;
  }
  throw new Error("Maximum iterations reached without finding root");
}

function calculateArea(
  data: {
    x: number;
    y: [number, number];
  }[]
): number {
  let area = 0;

  for (let i = 0; i < data.length - 1; i++) {
    const deltaX = data[i + 1].x - data[i].x;
    const avgHeight =
      (data[i].y[1] - data[i].y[0] + (data[i + 1].y[1] - data[i + 1].y[0])) / 2;
    area += deltaX * avgHeight;
  }

  return area;
}

function generateApexChartData(demandRelation: string, supplyRelation: string) {
  const scope = yVar.value === "Q" ? { P: 0 } : { Q: 0 };
  const demandExpr = math.compile(demandRelation);
  const supplyExpr = math.compile(supplyRelation);

  function calculateQuantities(price: number) {
    scope.P = price;
    return {
      Pd: price,
      Ps: price,
      Qd: demandExpr.evaluate(scope),
      Qs: supplyExpr.evaluate(scope),
    };
  }

  function calculatePrices(quantity: number) {
    scope.Q = quantity;
    return {
      Pd: demandExpr.evaluate(scope),
      Ps: supplyExpr.evaluate(scope),
      Qd: quantity,
      Qs: quantity,
    };
  }

  const dataPoints: any[] = [];
  const nonNegative = ({ x, y }: { x: number; y: number }) => x >= 0 && y >= 0;
  for (let i = min.value; i <= max.value; i += step.value) {
    if (yVar.value === "Q") dataPoints.push(calculateQuantities(i));
    else dataPoints.push(calculatePrices(i));
  }
  const demand = dataPoints
    .map((point) => ({ x: point.Qd, y: point.Pd }))
    .filter(nonNegative);
  const supply = dataPoints
    .map((point) => ({ x: point.Qs, y: point.Ps }))
    .filter(nonNegative);

  const diff = math.simplify(`(${demandRelation})-(${supplyRelation})`);
  const diffP = math.derivative(diff, xVar.value);
  const gen = (x: number) => (xVar.value === "P" ? { P: x } : { Q: x });
  const eqX = newtonsMethod(
    (x) => diff.evaluate(gen(x)),
    (x) => diffP.evaluate(gen(x))
  );
  const [eqP, eqQ] =
    xVar.value === "P"
      ? [eqX, demandExpr.evaluate({ P: eqX })]
      : [demandExpr.evaluate({ Q: eqX }), eqX];
  const CS = [
    ...demand
      .filter((d) => d.y > eqP)
      .map((point) => ({ x: point.x, y: [eqP, point.y] })),
    {
      x: eqQ,
      y: [eqP, eqP],
    },
  ];
  const SS = [
    ...supply
      .filter((d) => d.y < eqP)
      .map((point) => ({ x: point.x, y: [point.y, eqP] })),
    {
      x: eqQ,
      y: [eqP, eqP],
    },
  ];

  return [
    {
      name: "Demand",
      data: demand,
      type: "line",
    },
    {
      name: "Supply",
      data: supply,
      type: "line",
    },
    {
      name: "CS",
      data: CS,
      type: "rangeArea",
    },
    {
      name: "SS",
      data: SS,
      type: "rangeArea",
    },
  ];
}

function updateData() {
  try {
    chartData.value = generateApexChartData(
      demandRelation.value,
      supplyRelation.value
    );
  } catch (e: any) {
    ElMessage.error(e.message);
  }
}

updateData();
// Example usage
</script>

<template>
  <div>
    <el-form :inline="true" label-width="auto">
      <el-form-item label="Demand Relation" show-message>
        <el-input v-model="demandRelation" :spellcheck="false">
          <template #prefix>{{ yVar }} =&nbsp;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Supply Relation" show-message error="">
        <el-input v-model="supplyRelation" :spellcheck="false">
          <template #prefix>{{ yVar }} =&nbsp;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Dependent Variable">
        <el-radio-group v-model="yVar">
          <el-radio value="Q">Quantity</el-radio>
          <el-radio value="P">Price</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Graph Range">
        <el-col :span="8">
          <el-input-number
            v-model="min"
            :min="0"
            :max="max - 1"
            size="small"
            disabled
            controls-position="right" />
        </el-col>
        <el-col :span="8">
          <el-input-number
            v-model="max"
            :min="min + 1"
            :max="1000"
            size="small"
            controls-position="right" />
        </el-col>
        <el-col :span="8">
          <el-input-number
            v-model="step"
            :min="1"
            :max="max - min"
            size="small"
            controls-position="right" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateData">Update</el-button>
      </el-form-item>
    </el-form>
    <client-only>
      <vue-apex-charts
        ref="chart"
        class="w-full"
        width="700"
        type="rangeArea"
        :options="chartOptions"
        :series="toRaw(chartData)" />
    </client-only>
  </div>
</template>

<style scoped lang="scss"></style>
