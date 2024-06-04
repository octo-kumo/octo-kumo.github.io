<template>
  <el-card>
    <template #header>{{ name }}</template>
    <el-radio-group v-model="selectedRow" class="flex flex-col space-y-2 w-full">
      <el-radio
          :disabled="field.computed"
          class="mr-0! w-full"
          v-for="(field, index) in fields" :key="index" v-model="selectedRow" :value="field.key">
        <math-field
            v-model="values[field.key]"
            :readonly="selectedRow === field.key"
            :prefix="field.key+'='+field.prefix"
            :suffix="field.suffix">
        </math-field>
      </el-radio>
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
  name: string,
  fields: EditorField[],
  calc: FieldCalcMap
}

const props = withDefaults(defineProps<Props>(), {
  fields: () => [] as EditorField[],
})
const calculationError: string[] = reactive([]);

const values = reactive(Object.fromEntries(props.fields.map(field => [field.key, 0])));
const selectedRow: Ref<typeof props.fields[number]['key']> = ref(props.fields[props.fields.length - 1].key);
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
.el-radio__label {
  width: 100% !important;
}
</style>
