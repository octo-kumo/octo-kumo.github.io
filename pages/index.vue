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
        <v-container>
          <v-row>
            <v-col v-for="item in nav.filter(r=>r.path.startsWith('/projects/'))" :key="item.name" cols="12" md="4">
              <v-card :to="item" class="my-3">
                <v-img class="align-end text-white" v-if="item.meta.image" :src="item.meta.image as string" height="200"
                       cover></v-img>
                <v-card-title>{{ item.meta.title ?? guessPathName(item.name!) }}</v-card-title>
                <v-card-text v-if="item.meta.description">{{ item.meta.description }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </full-page>
  </client-only>
</template>
<script setup lang="ts">
import {guessPathName} from "~/mixins/display";

const router = useRouter();
const nav = ref(router.getRoutes());
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
</script>
<style lang="scss">
@use "@/assets/scss/quotes.scss";

.fp-overflow {
  overflow: visible !important;
}
</style>
