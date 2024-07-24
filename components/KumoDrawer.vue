<template>
  <el-menu router :default-active="route.path.replace(/(?!^)\/$/, '')" class="el-menu-vertical-demo select-none">
    <nuxt-link to="/" class="no-underline text-inherit">
      <el-menu-item index="/" route="/">
        <el-icon>
          <el-icon-cloudy />
        </el-icon>
        <template #title>云</template>
      </el-menu-item>
    </nuxt-link>
    <el-sub-menu index="/projects">
      <template #title>
        <el-icon>
          <el-icon-menu />
        </el-icon>
        <span>Projects</span>
      </template>
      <nuxt-link :to="n" class="no-underline text-inherit"
        v-for="n in nav.filter(r => r.path.startsWith('/projects/'))">
        <el-menu-item :route="n" :index="n.path">
          {{ n.meta.title ?? guessPathName(n.name!) }}
        </el-menu-item>
      </nuxt-link>
    </el-sub-menu>
    <nuxt-link to="/c/" class="no-underline text-inherit">
      <el-menu-item index="/c" route="/c/">
        <el-icon>
          <el-icon-collection />
        </el-icon>
        <template #title>
          Content
        </template>
      </el-menu-item>
    </nuxt-link>
    <nuxt-link to="/ctf" class="no-underline text-inherit">
      <el-menu-item index="/ctf" route="/ctf">
        <el-icon>
          <el-icon-flag />
        </el-icon>
        <template #title>My Challenges
        </template>
      </el-menu-item>
    </nuxt-link>
    <nuxt-link to="/about" class="no-underline text-inherit">
      <el-menu-item index="/about" route="/about">
        <el-icon>
          <el-icon-info-filled />
        </el-icon>
        <template #title>About
        </template>
      </el-menu-item>
    </nuxt-link>
  </el-menu>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const nav = router.getRoutes();
</script>
<style scoped lang="css"></style>
