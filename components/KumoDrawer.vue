<template>
  <el-menu router
           :default-active="route.name"
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
      <el-menu-item v-for="n in nav.filter(r=>r.path.startsWith('/projects/'))" :route="n"
                    v-text="guessPathName(n.name!)" :index="n.name"/>
    </el-sub-menu>
    <el-menu-item index="4" route="/about">
      <el-icon>
        <el-icon-info-filled/>
      </el-icon>
      <template #title>About</template>
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
