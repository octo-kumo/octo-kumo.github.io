<template>
  <FinanceFields :calc="calc" :fields="fields" name="Sum-of-the-Years'-Digits Depreciation (SYDD)"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "IC", label: "Initial Cost", prefix: "$", suffix: ""},
  {key: "SV", label: "Salvage Value", prefix: "$", suffix: ""},
  {key: "Life", label: "Useful Life", prefix: "", suffix: " periods"},
  {key: "Period", label: "Period of Depreciation", prefix: "", suffix: ""},
  {key: "DC", label: "Depreciation Charge", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  DC(values) {
    const {IC, SV, Life, Period} = values;
    const n = Life * (Life + 1) / 2;
    return (IC - SV) * (Life - Period + 1) / n;
  },
  IC(values) {
    const {DC, SV, Life, Period} = values;
    const n = Life * (Life + 1) / 2;
    return (DC * n / (Life - Period + 1)) + SV;
  },
  SV(values) {
    const {IC, DC, Life, Period} = values;
    const n = Life * (Life + 1) / 2;
    return IC - (DC * n / (Life - Period + 1));
  },
  Life(values) {
    const {IC, SV, DC, Period} = values;
    let life = 1;
    while (DC < (IC - SV) * (life - Period + 1) / (life * (life + 1) / 2)) {
      life++;
    }
    return life;
  },
  Period(values) {
    const {IC, SV, DC, Life} = values;
    const n = Life * (Life + 1) / 2;
    return Life - (DC * n / (IC - SV)) + 1;
  }
};
</script>
