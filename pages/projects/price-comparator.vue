<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="量" name="first"><comparator-item-gallery></comparator-item-gallery></el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')
</script>

<style lang="scss" scoped>
/* Your component styles here */
</style>