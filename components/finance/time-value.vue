<template>
  <v-card>
    <v-card-title>Time Value</v-card-title>
    <v-card-text>
      <v-radio-group v-model="selectedRow" density="compact">
        <v-row v-for="(field, index) in fields" :key="index" class="flex items-center">
          <v-col cols="12">
            <div class="flex items-center">
              <v-radio v-model="selectedRow" :value="field.value" class="mr-2 flex-shrink-0"></v-radio>
              <v-text-field variant='underlined'
                            v-model.number="values[field.value]"
                            :label="field.label"
                            :readonly="selectedRow === field.value"
                            :prefix="field.prefix"
                            :suffix="field.suffix"

                            hide-details
                            class="w-full"
                            :error-messages="selectedRow === field.value&&calculationError.length>0 ? [calculationError] : undefined"
                            @input="handleFieldEdit()"
              />
            </div>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {Ref} from "@vue/reactivity";
import {getErrorMessage} from "~/mixins/utils";

const fields = [
  {value: "N", label: "Number of Periods", prefix: "", suffix: " periods"},
  {value: "I", label: "Interest Rate", prefix: "", suffix: "%"},
  {value: "P", label: "Present Value", prefix: "$", suffix: ""},
  {value: "F", label: "Future Value", prefix: "$", suffix: ""}
] as const;

const values = reactive(Object.fromEntries(fields.map(field => [field.value, 0])));
const selectedRow: Ref<typeof fields[number]['value']> = ref('F');

const calculationError = ref('');

function handleFieldEdit() {
  calculationError.value = '';
  console.log("calculating", selectedRow.value);
  try {
    const result = {
      N: calculateN,
      I: calculateIY,
      P: calculatePV,
      F: calculateFV
    }[selectedRow.value]();

    if (isNaN(result)) throw new Error("Invalid result");
    else values[selectedRow.value] = result;
  } catch (error) {
    calculationError.value = getErrorMessage(error) ?? "unknown";
  }
}

function calculateN() {
  const {I, P, F} = values;
  return Math.log(F / P) / Math.log(1 + I / 100);
}

function calculateIY() {
  const {N, P, F} = values;
  return (Math.pow(F / P, 1 / N) - 1) * 100;
}

function calculatePV() {
  const {N, I, F} = values;
  return F / Math.pow(1 + I / 100, N);
}

function calculateFV() {
  const {N, I, P} = values;
  return P * Math.pow(1 + I / 100, N);
}
</script>
