<template>
  <FinanceFields :calc="calc" :fields="fields" name="Perpetuity"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "R", label: "Annual Payment Amount", prefix: "$", suffix: ""},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "g", label: "Growth Rate", prefix: "", suffix: "%"},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  R(values) {
    const {I, g, PV} = values;
    const i = I / 100;
    const growth = g / 100;
    return PV * (i - growth);
  },
  I(values) {
    const {R, g, PV} = values;
    const growth = g / 100;
    return ((R / PV) + growth) * 100;
  },
  g(values) {
    const {R, I, PV} = values;
    const i = I / 100;
    return ((R / PV) - i) * 100;
  },
  PV(values) {
    const {R, I, g} = values;
    const i = I / 100;
    const growth = g / 100;
    return R / (i - growth);
  }
};
</script>
