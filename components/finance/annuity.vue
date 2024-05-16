<template>
  <FinanceFields :calc="calc" :fields="fields" name="Annuity"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "PMT", label: "Payment Amount", prefix: "$", suffix: ""},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""}
];
const calc: FieldCalcMap = {
  N(values) {
    const {I, PMT, PV} = values;
    const i = I / 100;
    return i == 0 ? PV / PMT : Math.log(1 - (PV * i) / PMT) / Math.log(1 + i);
  },
  I(values) {
    const {N, PMT, PV} = values;
    return (Math.pow((PMT / PV), (1 / N)) - 1) * 100;
  },
  PMT(values) {
    const {N, I, PV} = values;
    const i = I / 100;
    return i == 0 ? PV / N : (PV * i) / (1 - Math.pow(1 + i, -N));
  },
  PV(values) {
    const {N, I, PMT} = values;
    const i = I / 100;
    return i == 0 ? PMT * N : (PMT / i) * (1 - Math.pow(1 + i, -N));
  }
};

</script>
