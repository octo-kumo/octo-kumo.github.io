<template>
  <v-text-field
      v-model="input"
      :hint="'='+model"
      :error-messages="error.length>0?[error]:[]"
      @blur="attemptSimplify"
      :persistent-hint="String(input)!==String(model)"
      :hide-details="String(input)===String(model)"
      v-bind="$attrs"
  ></v-text-field>
</template>

<script setup>
import {evaluate} from "mathjs";
import {getErrorMessage} from "~/mixins/utils";

defineOptions({
  inheritAttrs: false
})
const model = defineModel({
  type: Number,
  required: true
});
const error = ref("");
const input = ref('0');

watch(model, (value, oldValue) => {
  const v = ev(input.value);
  if (v !== value) input.value = String(value);
});

watch(input, (value) => {
  const v = ev(value);
  if (!isNaN(v) && v !== model.value) model.value = v;
});

function ev(expr) {
  error.value = "";
  try {
    const val = evaluate(expr);
    if (!isNaN(val)) return val;
    error.value = "NaN";
  } catch (e) {
    error.value = getErrorMessage(e);
  }
  return NaN;
}

function attemptSimplify() {
  if (input.value === "") input.value = "0";
  // try {
  //   const expr = parse(input.value);
  //   input.value = simplify(expr).toString();
  // } catch (e) {
  // }
}
</script>
