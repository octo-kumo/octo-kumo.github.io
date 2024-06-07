<template>
  <FinanceFields :calc="calc" :fields="fields" title="Straight-Line Depreciation (SLD)"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "IC", label: "Initial Cost", prefix: "$", suffix: ""},
  {key: "SV", label: "Salvage Value", prefix: "$", suffix: ""},
  {key: "Life", label: "Useful Life", prefix: "", suffix: " periods"},
  {key: "DC", label: "Depreciation Charge", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  DC(values) {
    const {IC, SV, Life} = values;
    return (IC - SV) / Life;
  },
  IC(values) {
    const {DC, SV, Life} = values;
    return (DC * Life) + SV;
  },
  SV(values) {
    const {IC, DC, Life} = values;
    return IC - (DC * Life);
  },
  Life(values) {
    const {IC, SV, DC} = values;
    return (IC - SV) / DC;
  }
};
</script>
