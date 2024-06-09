<template>
  <el-menu router
           :default-active="route.path.startsWith('/c/')?'c':String(route.name)"
           class="el-menu-vertical-demo"
  >
    <el-menu-item index="index" route="/">
      <el-icon>
        <el-icon-cloudy/>
      </el-icon>
      <template #title>云</template>
    </el-menu-item>
    <el-sub-menu index="projects">
      <template #title>
        <el-icon>
          <el-icon-menu/>
        </el-icon>
        <span>Projects</span>
      </template>
      <el-menu-item v-for="n in nav.filter(r=>r.path.startsWith('/projects/'))" :route="n" :index="String(n.name)">
        <NuxtLink :to="n" class="no-underline text-inherit">{{ guessPathName(n.name!) }}</NuxtLink>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="c" route="/c/">
      <el-icon>
        <el-icon-collection/>
      </el-icon>
      <template #title>
        <NuxtLink to="/c/" class="no-underline text-inherit">Content</NuxtLink>
      </template>
    </el-menu-item>
    <el-menu-item index="about" route="/about">
      <el-icon>
        <el-icon-info-filled/>
      </el-icon>
      <template #title>
        <NuxtLink to="/about" class="no-underline text-inherit">About</NuxtLink>
      </template>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import {guessPathName} from "@/mixins/display";

const route = useRoute();
const router = useRouter();
const nav = router.getRoutes();
</script>
<style scoped lang="css">
</style>
