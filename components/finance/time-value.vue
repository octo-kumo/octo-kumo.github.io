<template>
  <FinanceFields :calc="calc" :fields="fields" name="Time Value"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""},
  {key: "FV", label: "Future Value", prefix: "$", suffix: ""}
];
const calc: FieldCalcMap = {
  N(values) {
    const {I, PV, FV} = values;
    return Math.log(FV / PV) / Math.log(1 + I / 100);
  },
  I(values) {
    const {N, PV, FV} = values;
    return (Math.pow(FV / PV, 1 / N) - 1) * 100;
  },
  PV(values) {
    const {N, I, FV} = values;
    return FV / Math.pow(1 + I / 100, N);
  },
  FV(values) {
    const {N, I, PV} = values;
    return PV * Math.pow(1 + I / 100, N);
  }
};
</script>
