<script setup lang="ts">
import challenges from "@/assets/ctfs";
</script>

<template>
  <el-space wrap :fill-ratio="0.3" fill>
    <el-card shadow="hover" v-for="chal in challenges">
      <template #header>{{ chal.name }}</template>
      <div class="flex gap-1">
        <el-tag>{{ chal.diff }}</el-tag>
        <el-tag v-for="tag in chal.tags" type="info">{{ tag }}</el-tag>
      </div>
      <MDC :value="chal.desc"/>
    </el-card>
  </el-space>
</template>

<style scoped lang="scss">

</style>
