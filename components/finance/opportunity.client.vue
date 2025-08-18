<script setup lang="ts">
import type {Ref} from "@vue/reactivity";
import VueApexCharts, {type VueApexChartsComponent} from 'vue3-apexcharts'
import type {ApexOptions} from "apexcharts";

const form = reactive({
  pa: 'Apple',
  pb: 'Banana',
  p1: 'Person 1',
  p2: 'Person 2',
  p1a: 40,
  p1b: 20,
  p2a: 30,
  p2b: 50,
});
const chart: Ref<VueApexChartsComponent | undefined> = ref();
const colorMode = useColorMode();
const chartOptions: Ref<ApexOptions> = ref(<ApexOptions>{
  theme: {
    mode: colorMode.value
  },
  xaxis: {
    type: 'numeric',
    title: {text: form.pb}
  },
  yaxis: {
    type: 'numeric',
    title: {text: form.pa}
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: [2, 2, 1, 1]
  },
});
const chartData: Ref<ApexAxisChartSeries> = ref([]);
watch(colorMode, (value) => {
  if (chartOptions.value.theme?.mode !== value.value) chartOptions.value = {
    ...chartOptions.value,
    theme: {mode: value.value}
  }
})

function generateApexChartData() {
  return [
    {
      name: form.p1,
      data: [{x: 0, y: form.p1a}, {x: form.p1b, y: 0}], type: 'line',
    }, {
      name: form.p2,
      data: [{x: 0, y: form.p2a}, {x: form.p2b, y: 0}], type: 'line',
    }, {
      name: "PPB",
      data: [{x: 0, y: form.p1a + form.p2a}, {
        x: oc1b.value < oc2b.value ? form.p1b : form.p2b,
        y: oc1a.value < oc2a.value ? form.p1a : form.p2a
      }, {x: form.p1b + form.p2b, y: 0}], type: 'line',
    }
  ];
}

function updateData() {
  try {
    chartData.value = generateApexChartData();
  } catch (e) {
    ElMessage.error(e.message)
  }
}

const oc1a = computed(() => form.p1b / form.p1a);
const oc1b = computed(() => form.p1a / form.p1b);
const oc2a = computed(() => form.p2b / form.p2a);
const oc2b = computed(() => form.p2a / form.p2b);
watch(form, updateData, {immediate: true});
</script>

<template>
  <div>
    <div class="inputs flex gap-2 flex-col max-w-prose">
      <el-row :gutter="10">
        <el-col :span="8" :offset="8">
          <el-input v-model="form.p1" placeholder="Person 1"/>
        </el-col>
        <el-col :span="8">
          <el-input v-model="form.p2" placeholder="Person 2"/>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input v-model="form.pa" placeholder="Apple"/>
        </el-col>
        <el-col :span="8">
          <el-form-item show-message
                        :error="`OC=${oc1a.toFixed(2)} ${form.pb} ${oc1a<oc2a?'CA':''} ${form.p1a>form.p2a?'AA':''}`">
            <math-field v-model="form.p1a"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item show-message
                        :error="`OC=${oc2a.toFixed(2)} ${form.pb} ${oc2a<oc1a?'CA':''} ${form.p2a>form.p1a?'AA':''}`">
            <math-field v-model="form.p2a"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input v-model="form.pb" placeholder="Banana"/>
        </el-col>
        <el-col :span="8">
          <el-form-item show-message
                        :error="`OC=${oc1b.toFixed(2)} ${form.pa} ${oc1b<oc2b?'CA':''} ${form.p1b>form.p2b?'AA':''}`">
            <math-field v-model="form.p1b"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item show-message
                        :error="`OC=${oc2b.toFixed(2)} ${form.pa} ${oc2b<oc1b?'CA':''} ${form.p2b>form.p1b?'AA':''}`">
            <math-field v-model="form.p2b"/>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
    <el-text size="small" tag="p"><b>CA</b> comparative advantage, <b>AA</b> absolute advantage, <b>OC</b> opportunity
      cost
    </el-text>
    <client-only>
      <vue-apex-charts
          ref="chart"
          class="w-full"
          width="700"
          type="rangeArea"
          :options="chartOptions"
          :series="toRaw(chartData)"
      />
    </client-only>
    <el-text tag="p"><b>Trade Range:</b></el-text>
    <ul>
      <el-text tag="li">
        1 {{ form.pa }} for {{ Math.min(oc1a, oc2a).toFixed(2) }} ~ {{ Math.max(oc1a, oc2a).toFixed(2) }} {{ form.pb }}
      </el-text>
      <el-text tag="li">
        1 {{ form.pb }} for {{ Math.min(oc1b, oc2b).toFixed(2) }} ~ {{ Math.max(oc1b, oc2b).toFixed(2) }} {{ form.pa }}
      </el-text>
    </ul>
  </div>
</template>

<style lang="scss">
.el-form-item.is-error .el-input__wrapper, .el-form-item.is-error .el-input__wrapper:hover, .el-form-item.is-error .el-input__wrapper:focus, .el-form-item.is-error .el-input__wrapper.is-focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:hover, .el-form-item.is-error .el-textarea__inner:focus, .el-form-item.is-error .el-textarea__inner.is-focus, .el-form-item.is-error .el-select__wrapper, .el-form-item.is-error .el-select__wrapper:hover, .el-form-item.is-error .el-select__wrapper:focus, .el-form-item.is-error .el-select__wrapper.is-focus {
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset !important;
}
</style>
