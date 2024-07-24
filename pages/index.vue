<template>
  <div class="lg:max-w-prose! mx-auto!">
    <el-text class="text-4xl! font-bold" tag="h1">Hi!</el-text>
    <el-text tag="p">Welcome to my person website, it is still in the works, expect perhaps unexpected errors, or
      the
      site crashing entirely.
    </el-text>
    <el-divider />
    <note-search />
  </div>
  <el-row :gutter="20">
    <el-col
      v-for="item in [...nav.filter(r => r.path.startsWith('/projects/')).sort((a, b) => Number(!a.meta.image) - Number(!b.meta.image)), contentPage]"
      :key="item.path" :cols="24" :lg="6" :md="8" :sm="12">
      <el-card class="my-3" shadow="hover">
        <template #header v-if="item.meta.image!">
          <el-image :src="item.meta.image! as string" class="w-full h-48"
            :class="{ 'light-theme-image': item.meta.lightThemeImage }" fit="cover"></el-image>
        </template>
        <el-space direction="vertical" alignment="normal">
          <h3 class="m-0">
            <kumo-link :to="item" type="primary">
              {{ item.meta.title ?? guessPathName(item.name) }}
            </kumo-link>
          </h3>
          <el-text v-if="item.meta.description">{{ item.meta.description }}</el-text>
          <div class="flex gap-2">
            <el-tag type="danger" v-if="item.meta.layout === 'clean'">
              full page
            </el-tag>
          </div>
        </el-space>
      </el-card>
    </el-col>
  </el-row>
  <comments class="lg:max-w-prose! mx-auto!" />
</template>
<script setup lang="ts">
import type { RouteRecord } from "vue-router";
const router = useRouter();
const nav = ref(router.getRoutes());
const contentPage: RouteRecord = {
  path: "/c",
  meta: {
    title: "Content",
    description: "Markdown Content Archive"
  } as any
} as RouteRecord;

definePageMeta({
  title: "Index",
  description: '云\'s personal website',
});
</script>
<style lang="scss">
//@use "@/assets/scss/quotes.scss";
.el-card__header:has(> .el-image) {
  padding: 0 !important;
  border: none !important;
}

span.highlighted {
  @apply font-bold;
  background-color: #ff04;
}

html.dark .light-theme-image {
  filter: invert(1) hue-rotate(180deg);
}
</style>
