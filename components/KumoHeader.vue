<template>
  <el-page-header :icon="null">
    <!--    <template #breadcrumb>-->
    <!--      <el-breadcrumb separator="/">-->
    <!--        <el-breadcrumb-item :to="{ path: './page-header.html' }">-->
    <!--          homepage-->
    <!--        </el-breadcrumb-item>-->
    <!--        <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>-->
    <!--        <el-breadcrumb-item>route 2</el-breadcrumb-item>-->
    <!--      </el-breadcrumb>-->
    <!--    </template>-->
    <!--    <v-app-bar-nav-icon @click="toggleDrawer"/>-->
    <template #title>云</template>
    <template #icon v-if="!hideMenu">
      <el-icon>
        <el-icon-menu></el-icon-menu>
      </el-icon>
    </template>
    <template #content>
      <el-space style="height: var(--el-header-height);">
        <span class="text-large font-600 mr-3"> {{ routeName }} </span>
        <slot></slot>
      </el-space>
    </template>
    <template #extra>
      <ClientOnly>
        <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
      </ClientOnly>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";

defineProps({hideMenu: {type: Boolean, required: false, default: false}});
const route = useRoute();
const routeName = ref("");
watch(() => route.name, newId => routeName.value = guessPathName(newId!), {immediate: true});

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});

function onBack() {

}
</script>
