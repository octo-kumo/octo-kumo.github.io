// /c:/Users/zy/Documents/GitHub/octo-kumo.github.io/components/comparator/ItemGallery.vue

<template>
  <div>
    <el-card>
      <el-checkbox v-model="show[field]" v-for="field in fields">Show {{ field }}</el-checkbox>
    </el-card>
    <el-divider/>
    <el-space wrap>
      <comparator-purchasable-item v-for="(item, i) in items" v-model="items[i]" :show="show"/>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import type {IPurchasableItem} from "@/types/custom-types";

const fields: (keyof IPurchasableItem)[] = ["name", "source", "price", "weight", "amount"];
const show = reactive({name: true, price: true} as { [key in keyof IPurchasableItem]?: boolean });
const items = reactive([
  {name: "Sausage Lafleur", source: "walmart", price: 3.27, weight: 0.375},
  {name: "Apple", source: "grocery store", price: 0.99, weight: 0.2},
  {name: "Milk", source: "dairy farm", price: 2.99, weight: 1.5},
  {name: "Bread", source: "bakery", price: 1.99, weight: 0.5},
  {name: "Eggs", source: "farm", price: 2.49, weight: 0.3},
  {name: "Chicken", source: "butcher", price: 5.99, weight: 1.2},
  {name: "Cheese", source: "dairy farm", price: 4.99, weight: 0.5},
  {name: "Butter", source: "dairy farm", price: 2.99, weight: 0.25},
  {name: "Pasta", source: "grocery store", price: 1.49, weight: 0.5},
  {name: "Rice", source: "grocery store", price: 2.99, weight: 1.0},
  {name: "Potato", source: "farm", price: 0.99, weight: 0.5},
  {name: "Tomato", source: "farm", price: 1.49, weight: 0.2},
  {name: "Carrot", source: "farm", price: 0.99, weight: 0.2},
  {name: "Onion", source: "farm", price: 0.99, weight: 0.2},
  {name: "Garlic", source: "farm", price: 0.99, weight: 0.1},
  {name: "Lettuce", source: "farm", price: 1.49, weight: 0.2},
  {name: "Cucumber", source: "farm", price: 0.99, weight: 0.2},
  {name: "Bell Pepper", source: "farm", price: 1.49, weight: 0.2},
  {name: "Zucchini", source: "farm", price: 0.99, weight: 0.2},
  {name: "Broccoli", source: "farm", price: 1.49, weight: 0.2},
  {name: "Cauliflower", source: "farm", price: 1.49, weight: 0.2},
  {name: "Spinach", source: "farm", price: 1.49, weight: 0.2},
  {name: "Kale", source: "farm", price: 1.49, weight: 0.2},
  {name: "Celery", source: "farm", price: 0.99, weight: 0.2},
] as IPurchasableItem[]);
</script>

<style scoped>
/* Your component styles go here */
</style>
