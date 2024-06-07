<template>
  <FinanceFields :calc="calc" :fields="fields" title="Declining-Balance Depreciation (DBD)"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "IC", label: "Initial Cost", prefix: "$", suffix: ""},
  {key: "Rate", label: "Depreciation Rate", prefix: "", suffix: "%"},
  {key: "Period", label: "Period of Depreciation", prefix: "", suffix: ""},
  {key: "DC", label: "Depreciation Charge", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  DC(values) {
    const {IC, Rate, Period} = values;
    const rate = Rate / 100;
    return IC * Math.pow(1 - rate, Period - 1) * rate;
  },
  IC(values) {
    const {DC, Rate, Period} = values;
    const rate = Rate / 100;
    return DC / (Math.pow(1 - rate, Period - 1) * rate);
  },
  Rate(values) {
    const {IC, DC, Period} = values;
    const rate = 1 - Math.pow(DC / IC, 1 / (Period - 1));
    return rate * 100;
  },
  Period(values) {
    const {IC, Rate, DC} = values;
    const rate = Rate / 100;
    return Math.log(DC / (IC * rate)) / Math.log(1 - rate) + 1;
  }
};
</script>
