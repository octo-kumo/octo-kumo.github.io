<template>
  <FinanceFields :calc="calc" :fields="fields" name="Annuity"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "g", label: "Growth Rate", prefix: "", suffix: "%"},
  {key: "PMT", label: "Payment Amount", prefix: "$", suffix: ""},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  N(values) {
    const {I, g, PMT, PV} = values;
    const i = I / 100;
    const growth = g / 100;
    if (i === growth) return PV / PMT;  // Simplified case when interest rate equals growth rate
    return Math.log((PMT * (1 + growth) - PV * i) / (PMT * (1 + growth) - PV * growth)) / Math.log(1 + i);
  },
  I(values) {
    const {N, g, PMT, PV} = values;
    const growth = g / 100;
    return (Math.pow((PMT * (1 + growth) / PV), (1 / N)) - 1) * 100;
  },
  g(values) {
    const {N, I, PMT, PV} = values;
    const i = I / 100;
    return (Math.pow((PMT / (PV * (1 + i))), (1 / N)) - 1) * 100;
  },
  PMT(values) {
    const {N, I, g, PV} = values;
    const i = I / 100;
    const growth = g / 100;
    if (i === growth) return PV / N;  // Simplified case when interest rate equals growth rate
    return PV * (i - growth) / (1 - Math.pow((1 + growth) / (1 + i), N));
  },
  PV(values) {
    const {N, I, g, PMT} = values;
    const i = I / 100;
    const growth = g / 100;
    if (i === growth) return PMT * N;  // Simplified case when interest rate equals growth rate
    return PMT * (1 - Math.pow((1 + growth) / (1 + i), N)) / (i - growth);
  }
};

</script>
