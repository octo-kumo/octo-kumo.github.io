<template>
  <v-container>
    <!-- Adder Section -->
    <v-card class="mb-4">
      <v-card-text>
        <v-row align="center" class="mb-2">
          <v-col cols="12" sm="8">
            <v-text-field v-model="newText" label="Enter text"></v-text-field>
          </v-col>
        </v-row>
        <v-chip-group
            v-model="selectedTags"
            multiple
            column
            selected-class="text-primary"
            class="overflow-auto"
            style="max-height: 50px;"
        >
          <v-chip
              v-for="(tag, index) in availableTags"
              :key="index"
              :value="tag.name"
              class="mr-2 mb-2"
          >
            <span role="img" :aria-label="`${tag.emoji} tag`">{{ tag.emoji }}</span> {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="addItem">Add</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Search Section -->
    <v-text-field v-model="searchQuery" label="Search" class="mb-4"></v-text-field>

    <!-- List Section -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(item, index) in filteredItems" :key="index">
          <v-card class="mb-4">
            <v-card-text>
              <div class="headline">{{ item.text }}</div>
              <v-row>
                <v-chip v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="mr-2 mb-2">
                  <span role="img" :aria-label="`${tag.emoji} tag`">{{ tag.emoji }}</span> {{ tag.name }}
                </v-chip>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';

definePageMeta({
  layout: 'default',
  title: '顔文字',
  description: '(* ^ ω ^)'
});

interface Item {
  text: string;
  tags: { name: string; emoji: string }[];
}

const items = ref<Item[]>([]);
const newText = ref<string>('');
const selectedTags = ref<string[]>([]);
const availableTags = [
  {name: 'Joy', emoji: '😄'},
  {name: 'Sadness', emoji: '😢'},
  {name: 'Anger', emoji: '😠'},
  {name: 'Fear', emoji: '😱'},
  {name: 'Surprise', emoji: '😯'},
  {name: 'Disgust', emoji: '🤢'},
  {name: 'Love', emoji: '❤️'},
  {name: 'Happiness', emoji: '😊'}
];
const searchQuery = ref<string>('');

const addItem = () => {
  if (newText.value.trim() !== '') {
    items.value.push({
      text: newText.value.trim(),
      tags: selectedTags.value.map(tag => availableTags.find(t => t.name === tag)!)
    });
    newText.value = '';
    selectedTags.value = [];
  }
};

const filteredItems = computed(() => {
  return items.value.filter((item) =>
      item.text.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.headline {
  font-size: 18px;
  font-weight: bold;
}

.overflow-auto {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
