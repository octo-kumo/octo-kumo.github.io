<template>
  <el-row :gutter="20">
    <el-col v-for="item in nav.filter(r=>r.path.startsWith('/projects/'))" :key="item.name" :cols="12" :md="8">
      <el-card class="my-3"
               shadow="never">
        <template #header>

          <el-image class="" v-if="item.meta.image" :src="item.meta.image as string" height="200" cover></el-image>
        </template>
        <nuxt-link :to="item">
          {{ item.meta.title ?? guessPathName(item.name!) }}
        </nuxt-link>
        <p v-if="item.meta.description">{{ item.meta.description }}</p>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import {guessPathName} from "~/mixins/display";

const router = useRouter();
const nav = ref(router.getRoutes());
// definePageMeta({
//   layout: 'clean'
// });
useHead({
  title: '云',
  meta: [
    {name: 'description', content: '云\'s personal website'}
  ],
});
</script>
<style lang="scss">
@use "@/assets/scss/quotes.scss";
</style>
