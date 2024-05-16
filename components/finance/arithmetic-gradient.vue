<template>
  <FinanceFields :calc="calc" :fields="fields" name="Arithmetic Gradient"/>
</template>

<script setup lang="ts">
import type {EditorField, FieldCalcMap} from "~/components/finance/Fields.vue";

const fields: EditorField[] = [
  {key: "A1", label: "Initial Value", prefix: "$", suffix: ""},
  {key: "G", label: "Increment/Decrement", prefix: "$", suffix: ""},
  {key: "i", label: "Interest Rate", prefix: "", suffix: "%"},
  {key: "n", label: "Number of Periods", prefix: "", suffix: ""},
  {key: "P", label: "Final Value", prefix: "$", suffix: ""}
];

const calc: FieldCalcMap = {
  A1(values) {
    const {G, i, n, P} = values;
    return P - (G * n * (n + 1) * i) / 200;
  },
  G(values) {
    const {A1, i, n, P} = values;
    return (2 * (P - A1) * 100) / (n * (n + 1) * i);
  },
  i(values) {
    const {A1, G, n, P} = values;
    return (2 * (P - A1)) / (n * (n + 1) * G) * 100;
  },
  n(values) {
    const {A1, G, i, P} = values;
    const discriminant = Math.pow(G, 2) + 4 * i * (P - A1);
    if (discriminant < 0) return NaN; // imaginary roots, not possible in this context
    const n1 = (-G + Math.sqrt(discriminant)) / (2 * i);
    const n2 = (-G - Math.sqrt(discriminant)) / (2 * i);
    return Math.max(n1, n2);
  },
  P(values) {
    const {A1, G, i, n} = values;
    return A1 + (n * (n + 1) * i * G) / 200;
  }
};
</script>
