<template>
  <v-container>
    <v-timeline align="center" dense side="end">
      <v-timeline-item
          v-for="commit in commits"
          :key="commit.sha"
          :icon="commit.commit.author.name[0].toUpperCase()"
          :fill-icon="true"
          :hide-icon="false"
          icon-size="16"
      >
        <template #opposite>
          <p>{{ new Date(commit.commit.author.date).toLocaleString() }}</p>
        </template>
        <p class="font-bold">
          <a class="text-red-500 font-mono" v-text="commit.sha.slice(0, 7)"></a>
          {{ commit.commit.message }}
        </p>
        <span>
                      by {{ commit.commit.author.name }}
                    </span>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script setup lang="ts">
import type {Ref} from "@vue/reactivity";

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
</script>
