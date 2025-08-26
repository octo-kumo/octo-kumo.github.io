<template>
  <el-tooltip :visible="input !== String(model) && !hideEval" placement="right">
    <template #content>
      <span>{{ model?.toPrecision(2) ?? 0 }}</span>
    </template>
    <el-input v-model="input" :hint="'=' + model" :error-messages="error.length > 0 ? [error] : []"
      @blur="attemptSimplify" v-bind="$attrs">

      <template #prefix v-if="$attrs.prefix">{{ $attrs.prefix }}</template>
      <template #suffix v-if="$attrs.suffix">{{ $attrs.suffix }}</template>
    </el-input>
  </el-tooltip>
</template>

<script setup lang="ts">
import { evaluate } from "mathjs/number";
defineProps<{
  hideEval?: boolean
}>();

const model = defineModel({
  type: Number,
  required: true
});
const error = ref("");
const input = ref('0');

watch(model, (value, oldValue) => {
  const v = ev(input.value);
  if (!value) input.value = String(model.value = 0);
  else if (v !== value) input.value = String(value);
}, { immediate: true });

watch(input, (value) => {
  const v = ev(value);
  if (!isNaN(v) && v !== model.value) model.value = v;
});

function ev(expr: string) {
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
