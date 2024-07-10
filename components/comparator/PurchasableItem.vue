<template>
  <el-card>
    <el-form :model="item" label-width="120px">
      <el-form-item v-for="field of fields.filter((f) => !!show[f.key])" :label="field.name" :class="field.key">
        <el-input v-model="item[field.key]"/>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import type {IPurchasableItem} from "@/types/custom-types";

const props = withDefaults(defineProps<{
  show: { [key in keyof IPurchasableItem]?: boolean }
}>(), {show: () => ({price: true, name: true})})
const item = defineModel<IPurchasableItem>({required: true});
const fields: {
  key: keyof IPurchasableItem;
  name: string;
  attrs?: { [key: string]: any };
}[] = [
  {key: 'name', name: 'Item Name'},
  {key: 'source', name: 'Item Source'},
  {key: 'price', name: 'Item Price', attrs: {prefix: "$"}},
  {key: 'weight', name: 'Item Weight', attrs: {suffix: "kg"}},
  {key: 'amount', name: 'Amount', attrs: {prefix: "×"}}
];
</script>
