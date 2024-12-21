<template>
  <div class="lg:max-w-prose mx-auto">
    <el-descriptions>
      <el-descriptions-item label="Name">
        云 (yun)
      </el-descriptions-item>
      <el-descriptions-item label="Email">yun@yun.ng</el-descriptions-item>
      <el-descriptions-item label="CTF Team">World Wide Flags</el-descriptions-item>
      <el-descriptions-item label="Occupation">Student</el-descriptions-item>
      <el-descriptions-item label="Location">Canada</el-descriptions-item>
      <el-descriptions-item label="Main CTF Category">
        <el-tag size="small">web</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Host">
        Github Pages
      </el-descriptions-item>
      <el-descriptions-item label="Framework">nuxt.js</el-descriptions-item>
      <el-descriptions-item label="UI Framework">
        <el-link href="https://element-plus.org">element-plus</el-link>
      </el-descriptions-item>
      <el-descriptions-item label="License">
        CC-BY-SA-4.0
      </el-descriptions-item>
    </el-descriptions>

    <h4>Change Log</h4>
    <el-timeline>
      <el-timeline-item v-for="commit in commits" :key="commit.sha"
        :timestamp="displayDatetime(commit.commit.author.date) + ' by ' + commit.commit.author.name">
        <a class="text-red-500 font-mono" v-text="commit.sha.slice(0, 7)"></a>
        {{ commit.commit.message }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup lang="ts">
import type { Ref } from "@vue/reactivity";

const commits: Ref<any[]> = ref([]);

async function fetchCommitHistory() {
  try {
    const response = await fetch('https://api.github.com/repos/octo-kumo/octo-kumo.github.io/commits');
    if (response.ok) {
      commits.value = await response.json();
    } else {
      console.error('Error fetching commit history:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching commit history:', error);
  }
}

onMounted(() => {
  fetchCommitHistory();
  setInterval(fetchCommitHistory, 300000);
});

definePageMeta({
  title: "About",
  description: "About Yun, the author of this website.",
});
</script>
