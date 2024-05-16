<template>
  <FinanceFields :calc="calc" :fields="fields" name="Perpetuity"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "R", label: "Annual Payment Amount", prefix: "$", suffix: ""},
  {key: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "PV", label: "Present Value", prefix: "$", suffix: ""}
];
const calc: FieldCalcMap = {
  R(values) {
    const {I, PV} = values;
    const i = I / 100;
    return PV * i;
  },
  I(values) {
    const {R, PV} = values;
    return (R / PV) * 100;
  },
  PV(values) {
    const {R, I} = values;
    const i = I / 100;
    return R / i;
  }
};
</script>
