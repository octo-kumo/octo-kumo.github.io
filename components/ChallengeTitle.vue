<script setup lang="ts">
import type {Challenge} from "assets/ctfs";

const props = defineProps<{ chal: Challenge, solved?: boolean }>();
</script>

<template>
  <div class="flex gap-1">
    <span v-text="chal.name"></span>
    <el-tag type="success" class="ml-1" v-if="solved">Solved</el-tag>
  </div>
</template>

<style scoped lang="scss">

</style>
