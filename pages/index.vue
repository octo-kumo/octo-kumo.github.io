<template>
  <el-row :gutter="20">
    <el-col :cols="24">
      <h1>Hi!</h1>
      <p>Welcome to my person website, it is still in the works, expect perhaps unexpected errors, or the site crashing
        entirely.</p>
      <p class="text-right">——云</p>
    </el-col>
    <el-col v-for="item in nav.filter(r=>r.path.startsWith('/projects/')).sort((a,b)=>!a.meta.image-!b.meta.image)"
            :key="item.name" :cols="24"
            :lg="6"
            :md="8"
            :sm="12">
      <el-card class="my-3"
               shadow="never">
        <template #header v-if="item.meta.image">
          <el-image :src="item.meta.image as string"
                    class="w-full h-48" lazy
                    fit="cover"></el-image>
        </template>
        <el-space direction="vertical" alignment="normal">
          <h3 class="m-0">
            <nuxt-link :to="item">{{ item.meta.title ?? guessPathName(item.name!) }}</nuxt-link>
          </h3>
          <el-text v-if="item.meta.description">{{ item.meta.description }}</el-text>
          <div class="flex gap-2">
            <el-tag type="danger" v-if="item.meta.layout==='clean'">
              full page
            </el-tag>
          </div>
        </el-space>
      </el-card>
    </el-col>
    <el-col :cols="24">
      <vue-utterances repo="octo-kumo/octo-kumo.github.io" issue-term="pathname"
                      label="utteranc"
                      :theme="color.value === 'dark'?'github-dark':'github-light'"/>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
//@ts-ignore
import VueUtterances from "vue-utterances";
import {guessPathName} from "~/mixins/display";

const router = useRouter();
const color = useColorMode();
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
//@use "@/assets/scss/quotes.scss";

.el-card__header:has(> .el-image) {
  padding: 0 !important;
  border: none !important;
}
</style>
