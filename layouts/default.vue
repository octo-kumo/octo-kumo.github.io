<template>
  <el-container class="h-screen">
    <el-aside width="200">
      <el-scrollbar>
        <kumo-drawer :collapse="!drawerIsOpen" v-if="!smallerThanLg"
                     :default-openeds="['projects']"/>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <kumo-header @back="drawerIsOpen=!drawerIsOpen" :hide-menu="smallerThanLg">
          <kumo-drawer v-if="smallerThanLg" mode="horizontal"/>
        </kumo-header>
      </el-header>
      <el-main class="p-0!">
        <el-scrollbar>
          <div class="px-3">
            <slot/>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import {breakpointsTailwind} from "@vueuse/core";

const drawerIsOpen = ref<boolean>(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanLg = breakpoints.smaller('lg');
</script>
