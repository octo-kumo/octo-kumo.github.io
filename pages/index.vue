<script setup lang="ts">
import type {Ref} from "@vue/reactivity";

definePageMeta({
  layout: 'clean'
});
useHead({
  title: '云',
  meta: [
    {name: 'description', content: '云\'s personal website'}
  ],
});
const options = {
  licenseKey: 'gplv3-license',
  // afterLoad: this.afterLoad,
  scrollOverflow: true,
  scrollBar: false,
  // menu: '#menu',
  navigation: true,
  anchors: ['intro', 'home'],
  sectionsColor: [
    '#ffffff',
    // '#000'
  ],
  credits: {
    enabled: false,
  }
};

const commits: Ref<any[]> = ref([]);
const fetchCommitHistory = async () => {
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
};
onMounted(() => {
  fetchCommitHistory();
  setInterval(fetchCommitHistory, 300000);
});
// onMounted(() => {
// });
</script>
<template>
  <client-only>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div class="section fp-noscroll">
        <div class="flex justify-center items-center">
          <blockquote class="max-w-fit">
            <p class="text-2xl font-bold pr-8 max-w-fit">
              几日行云何处去？
            </p>
            <p class="text-xl italic pl-8 max-w-fit">
              忘却归来，不道春将暮。
            </p>
          </blockquote>
        </div>
      </div>
      <!--      <div class="section">-->
      <!--        <div class="slide">-->
      <!--          <h3>Slide 2.1</h3>-->
      <!--        </div>-->
      <!--        <div class="slide">-->
      <!--          <h3>Slide 2.2</h3>-->
      <!--        </div>-->
      <!--        <div class="slide">-->
      <!--          <h3>Slide 2.3</h3>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="section">
        <v-layout>
          <v-app>
            <kumo-header/>
            <kumo-drawer/>
            <v-main>
              <v-container v-scroll>
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
                      @{{ commit.commit.author.name }}
                    </span>
                  </v-timeline-item>
                </v-timeline>
              </v-container>
            </v-main>
          </v-app>
        </v-layout>
      </div>
    </full-page>
  </client-only>
</template>
<style lang="scss">
@use "@/assets/scss/quotes.scss";
</style>
