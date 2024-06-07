<template>
  <el-card>
    <template #header>
      <el-text>{{ title }}</el-text>
    </template>
    <el-radio-group v-model="selectedRow" class="flex flex-col space-y-2 w-full">
      <div class="flex flex-row w-full" v-for="(field, index) in fields" :key="index">
        <el-radio
            :disabled="field.computed"
            class="mr-0!"
            v-model="selectedRow" :value="field.key">
        </el-radio>
        <math-field
            v-model="values[field.key]"
            :readonly="selectedRow === field.key"
            :prefix="field.key+'='+field.prefix"
            :suffix="field.suffix">
        </math-field>
      </div>
    </el-radio-group>
    <p v-if="calculationError.length>0" v-text="calculationError.join('\n')"></p>
  </el-card>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
import type {Ref} from "@vue/reactivity";
import {getErrorMessage} from "~/mixins/utils";

export interface EditorField {
  key: string,
  label: string,
  prefix: string,
  suffix: string,
  computed?: boolean;
}

export type FieldCalcMap = {
  [k: typeof props.fields[number]['key']]: (values: { [k: typeof props.fields[number]['key']]: number }) => number
};

export interface Props {
  title: string,
  fields: EditorField[],
  calc: FieldCalcMap
}

const props = withDefaults(defineProps<Props>(), {
  title: "Calculator",
  fields: () => [] as EditorField[],
})
const calculationError: string[] = reactive([]);

const values = reactive(Object.fromEntries(props.fields.map(field => [field.key, 0])));
const selectedRow: Ref<typeof props.fields[number]['key']> = ref(props.fields.findLast(e => !e.computed).key);
watch(values, function () {
  calculationError.splice(0);
  console.log("calculating", selectedRow.value);
  try {
    const result = props.calc[selectedRow.value](values);
    if (isNaN(result)) throw new Error("Invalid result");
    else values[selectedRow.value] = result;
  } catch (error) {
    calculationError.push(getErrorMessage(error) ?? "unknown error");
  }
  props.fields.filter(f => f.computed).forEach(f => {
    try {
      const result = props.calc[f.key](values);
      if (isNaN(result)) throw new Error("Failed to calculate field value");
      else values[f.key] = result;
    } catch (error) {
      calculationError.push(getErrorMessage(error) ?? "unknown error");
    }
  });
});
</script>

<style lang="css">
</style>
