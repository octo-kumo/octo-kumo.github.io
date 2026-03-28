<script setup lang="ts">
import displayDocDates from "~/utils/display-doc-dates";
import getCtfCategory from "~/utils/get-ctf-category";
import guessArticleTitle from "~/utils/guess-article-title";
import { computed } from "vue";
import type { PageCollections } from "@nuxt/content";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  path: String,
  title: { type: String, default: "Blog" },
  description: { type: String, default: "" },
  color: { type: String },
  docPath: { type: String, required: true },
  padding: { type: String, default: "0 50px" },
  titleFontSize: { type: String, default: "50px" },
  descriptionFontSize: { type: String, default: "35px" },
  icon: { type: [String, Boolean], default: "logos:nuxt" },
  image: { type: String, required: false },
  siteName: { type: String, required: false },
  siteLogo: { type: String, required: false },
  readingMins: { type: Number, required: false },
});

const { data: doc } = await useAsyncData(`c/doc_${props.docPath}`, () =>
  queryCollection("content")
    .path(props.docPath)
    .first()
    .then((r: PageCollections["content"] | null) => {
      if (!r) return r;
      r.title = guessArticleTitle(r);
      return r;
    })
);

const siteName = computed(() => "Yun's Blog");
const siteLogo = computed(() => props.siteLogo || "/logo.png");
</script>

<template>
  <!-- Backgrounds -->
  <div class="absolute inset-0" style="z-index: -9999; background: black;" />
  <img src="/img/og_bg.png" class="absolute bottom-0 right-0" style="z-index: -1; width: 400px; height: 300px;" />

  <!-- Main content -->
  <div class="flex flex-col justify-between h-full p-8 py-4 text-gray-100">
    <div class="flex flex-col">
      <div class="flex gap-1">
        <span class="color-blue font-bold">{{ getCtfCategory(doc) }}</span>
        <span v-for="tag in doc?.tags ?? []" class="color-gray">#{{ tag }}</span>
      </div>
      <div class="color-gray text-sm">{{ displayDocDates(doc) }}</div>
      <div class="text-4xl leading-none mb-1 mt-2 font-mono font-bold">{{ guessArticleTitle(doc) }}</div>
      <div v-if="doc?.description || description" class="text-2xl">{{ doc?.description || description }}</div>
      <div v-if="readingMins" class="text-2xl">{{ readingMins }} min read</div>
    </div>

    <div class="flex items-center gap-3">
      <img v-if="siteLogo" :src="siteLogo" height="50" class="rounded" />
      <span style="font-size: 30px" class="font-bold px-4">{{ siteName }}</span>
    </div>
  </div>

  <!-- CTF badges -->
  <div class="absolute bottom-0 right-0 flex flex-col items-end">
    <span v-if="doc?.rank" class="tag">🏆 {{ doc?.rank }}</span>
    <span v-if="doc?.solves" class="tag">{{ doc?.solves }} solves</span>
    <span v-if="doc?.points" class="tag">{{ doc?.points }} points</span>
  </div>
</template>

<style>
.tag {
  background-color: #0006;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
</style>