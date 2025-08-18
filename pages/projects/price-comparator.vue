<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="Amount" name="first"><comparator-item-gallery></comparator-item-gallery></el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
const activeName = ref('first')
definePageMeta({
    title: 'Price Comparator',
    description: 'Compare prices of items from different stores',
    wip: true,
})
</script>

<style lang="scss" scoped>
/* Your component styles here */
</style>