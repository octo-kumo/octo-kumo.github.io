<template>
  <el-tabs>
    <el-tab-pane label="Market">
      <lazy-finance-market-analyze/>
    </el-tab-pane>
    <el-tab-pane label="Opportunity">
      <lazy-finance-opportunity/>
    </el-tab-pane>
    <el-tab-pane label="Time Value">
      <el-row :gutter="20">
        <el-col
            v-for="(item, index) in components"
            :key="index"
            :cols="24"
            :sm="12"
            :md="8"
            :lg="6">
          <component :is="item.element"></component>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import TimeValue from "@/components/finance/time-value.vue";
import Annuity from "~/components/finance/annuity.vue";
import Perpetuity from "~/components/finance/perpetuity.vue";
import ArithmeticGradient from "~/components/finance/arithmetic-gradient.vue";

definePageMeta({
  title: 'Finance',
  description: 'Collection of calculators for finance stuff',
  image: '/img/finance.webp'
});
const components = [
  {element: TimeValue, name: 'Time Value'},
  {element: Annuity, name: 'Annuity'},
  {element: ArithmeticGradient, name: 'Arithmetic Gradient'},
  {element: Perpetuity, name: 'Perpetuity'},
]
</script>
<style scoped lang="css">

</style>
