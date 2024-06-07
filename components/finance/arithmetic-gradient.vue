<template>
  <FinanceFields :calc="calc" :fields="fields" title="Arithmetic Gradient"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "G", label: "Gradient Amount", prefix: "$", suffix: ""},
  {key: "PMT", label: "Initial Payment Amount", prefix: "$", suffix: ""},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  N(values) {
    const {I, PMT, G, PV} = values;
    const i = I / 100;
    const A1 = PMT / i;  // PV of initial payment annuity
    const AG = G / (i * i);  // PV of gradient annuity factor
    const PV_total = PV + A1 + AG;
    return Math.log(PV_total / (PMT / i + (G / i) / (1 - Math.exp(-i)))) / Math.log(1 + i);
  },
  I(values) {
    const {N, PMT, G, PV} = values;
    const guessRate = 0.05;
    const epsilon = 0.0001;
    let i = guessRate;
    let diff = 1;

    while (Math.abs(diff) > epsilon) {
      const A1 = PMT / i;
      const AG = G / (i * i);
      const PV_total = A1 * (1 - Math.pow(1 + i, -N)) + AG * (1 - Math.pow(1 + i, -N) * (1 + i * N));
      diff = PV_total - PV;
      i += diff / PV;
    }

    return i * 100;
  },
  PMT(values) {
    const {N, I, G, PV} = values;
    const i = I / 100;
    const A1 = PV * i / (1 - Math.pow(1 + i, -N));
    const AG = G * (Math.pow(1 + i, -N) - 1) / (i * (Math.pow(1 + i, -N) * (1 + i * N) - 1));
    return A1 + AG;
  },
  G(values) {
    const {N, I, PMT, PV} = values;
    const i = I / 100;
    const A1 = PV * i / (1 - Math.pow(1 + i, -N));
    return (PMT - A1) * i * (Math.pow(1 + i, N) - 1) / (Math.pow(1 + i, -N) * (1 + i * N) - 1);
  },
  PV(values) {
    const {N, I, PMT, G} = values;
    const i = I / 100;
    const A1 = PMT / i * (1 - Math.pow(1 + i, -N));
    const AG = G / (i * i) * (1 - Math.pow(1 + i, -N) * (1 + i * N));
    return A1 + AG;
  }
};

</script>
