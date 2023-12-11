<script setup lang="ts">
import {ref, computed} from 'vue'

const id = ref("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

function parse(url: string) {
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

const thumbnails = {
  max: computed(() => "https://img.youtube.com/vi/" + parse(id.value) + "/maxresdefault.jpg"),
  sd: computed(() => "https://img.youtube.com/vi/" + parse(id.value) + "/sddefault.jpg"),
  hq: computed(() => "https://img.youtube.com/vi/" + parse(id.value) + "/hqdefault.jpg"),
  mq: computed(() => "https://img.youtube.com/vi/" + parse(id.value) + "/mqdefault.jpg"),
  thumb: computed(() => "https://img.youtube.com/vi/" + parse(id.value) + "/default.jpg"),
};
</script>

<template>
  <div class="flex flex-col justify-between h-auto">
    <input class="flex-initial snap-start mx-2 my-1 outline-none" v-model="id"/>
    <div class="flex-auto bg-red-400 h-screen flex flex-wrap flex-row snap-start">
      <img class="flex-initial"
           :src="thumbnails.max.value">
    </div>
    <div class="flex-initial bg-purple-400 snap-start">
      <ul>
        <li v-for="(url, key) in thumbnails" :key="key" v-text="url.value"></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
<style>
html,
body {
  scroll-snap-type: y mandatory;
}
</style>
