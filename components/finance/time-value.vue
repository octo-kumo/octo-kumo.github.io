<template>
  <FinanceFields :calc="calc" :fields="fields" name="Time Value"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "P", label: "Present Value", prefix: "$", suffix: ""},
  {key: "F", label: "Future Value", prefix: "$", suffix: ""}
];
const calc: FieldCalcMap = {
  N(values) {
    const {I, P, F} = values;
    return Math.log(F / P) / Math.log(1 + I / 100);
  },
  I(values) {
    const {N, P, F} = values;
    return (Math.pow(F / P, 1 / N) - 1) * 100;
  },
  P(values) {
    const {N, I, F} = values;
    return F / Math.pow(1 + I / 100, N);
  },
  F(values) {
    const {N, I, P} = values;
    return P * Math.pow(1 + I / 100, N);
  }
};
</script>
