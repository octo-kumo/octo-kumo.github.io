<script setup lang="ts">
import challenges, { type Challenge } from "@/assets/ctfs";
import ChallengeTitle from "~/components/ChallengeTitle.vue";
import { digest } from "ohash";
import { useStorage } from '@vueuse/core'
import type { MDCElement, MDCNode } from "@nuxtjs/mdc";
import type { Ref } from "@vue/reactivity";
import { ChallengeDetails } from "#components";

definePageMeta({
  title: 'CTF',
  description: 'My own CTF challenges'
});
const flags: Ref<{ [s: string]: string }> = useStorage("challenges_flags", {});
const filters: Ref<{ [s: string]: boolean }> = useStorage("challenges_filters", {});
const bindingFilter = computed(() => Object.keys(filters.value).filter(k => filters.value[k]));
const allTags = computed(() => Array.from(new Set(challenges.flatMap((v: Challenge) => [...v.tags, v.diff]))).sort());

function tagFilter(challenge: Challenge) {
  if (bindingFilter.value.length === 0) return true;
  return challenge.tags.some((tag: string) => bindingFilter.value.includes(tag)) || bindingFilter.value.includes(challenge.diff)
}

function makeLinksOpenNewTab(children: MDCNode[]) {
  for (let el of children) {
    if ((el as MDCElement).children) makeLinksOpenNewTab((el as MDCElement).children);
    if ((el as MDCElement).tag === 'a' && (el as MDCElement)?.props) (el as any).props.target = "_blank";
  }
}

async function openChallenge(chal: Challenge) {
  const { data: ast } = await useAsyncData(chal.desc, () => parseMarkdown(chal.desc));
  makeLinksOpenNewTab(ast.value?.body?.children ?? []);
  ElMessageBox.prompt(() => h(ChallengeDetails, {
    chal,
    ast: ast.value ?? undefined
  }), chal.name, {
    autofocus: false,
    inputPlaceholder: "kumo{}",
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputValidator: (str) => digest(str) === chal.sha256,
    inputErrorMessage: 'Flag is not correct >_<',
    inputType: flags.value[chal.name] === chal.sha256 ? 'success' : ''
  }).then(({ value }) => {
    flags.value[chal.name] = digest(value);
    ElMessage({
      type: 'success',
      message: `${chal.name} has been solved`,
    });
    umTrackEvent('ctf-solved', { chal: chal.name });
  }).catch(() => {
    console.log("cancelled")
  });
}
</script>

<template>
  <el-card shadow="never">
    <template #header>
      CTF Challenges
    </template>
    <el-text>
      Collection of my own challenges, I am completely new to this!
    </el-text>
    <div class="flex gap-1 flex-wrap mt-1">
      <el-check-tag v-for="cat in allTags" class="select-none" :checked="filters[cat]" type="primary"
        @change="filters[cat] = !filters[cat]">
        {{ cat }}
      </el-check-tag>
    </div>
  </el-card>
  <el-divider />
  <el-space wrap :size="30" alignment="flex-start" class="w-100%">
    <el-card shadow="hover" v-for="chal in challenges.filter(tagFilter)" @click="openChallenge(chal)"
      class="cursor-pointer">
      <template #header>
        <challenge-title :chal="chal" :solved="flags[chal.name] === chal.sha256" />
      </template>
      <challenge-details :chal="chal" />
    </el-card>
  </el-space>
</template>

<style lang="scss">
.el-message-box__message {
  max-width: 100%;
}
</style>
