<script setup lang="ts">
import {reactive, ref} from "vue";
import type {UnwrapNestedRefs} from "@vue/reactivity";
import {useStorage} from '@vueuse/core'

definePageMeta({
  layout: 'default',
  title: 'Simulated Universe Tools',
  description: 'A tool to preview all simulated universe encounters.',
  image: '/img/sim-uni.webp'
});
const showAll = ref(false);
const lang = useStorage('sim-u-lang', 'CHS');

const {
  data: data_en,
  status: status_en
} = useLazyAsyncData('simu-en', () => fetch('https://raw.githubusercontent.com/octo-kumo/hsr-sim-universe-utils/master/out/handbook_eventsEN.json').then(r => r.json()));
const {
  data: data_cn,
  status: status_cn
} = useLazyAsyncData('simu-cn', () => fetch('https://raw.githubusercontent.com/octo-kumo/hsr-sim-universe-utils/master/out/handbook_eventsCHS.json').then(r => r.json()));
const loaded = computed(() => (lang.value === 'EN' ? status_en.value : status_cn.value) !== 'pending');
const handbook_events = computed(() => lang.value === 'EN' ? data_en.value : data_cn.value);
const prompt_lines = (lines: any[]) => lines.filter(e => Array.isArray(e));
const prompt_options = (lines: any[]) => lines.find(e => !Array.isArray(e));

const events: UnwrapNestedRefs<{ [key: string | number]: boolean }> = reactive({});

function searchScore(str: string, query: string) {
  for (let c of query) {
    if (!str.includes(c)) return false;
  }
  return true;
}

function check_recursive(event_key: string | number, event_trigger: string): any {
  if (events[event_key + "_" + event_trigger]) return true;
  // return false;
  return Object.entries(handbook_events.value[event_key].dialogue.triggers).some(([k, e]: [string, any]) =>
      Array.isArray(e.triggers) && e.triggers.includes(event_trigger) && check_recursive(event_key, k)
  );
}

const locale: { [k: string]: any } = ref({
  "CHS": {
    title: "星穹铁道·模拟宇宙 事件集",
    desc: "每次三选一都要去网上找太麻烦？在这里就可以搜！",
    label: "事件名字",
    showAll: "全部显示",
    end: "结束"
  },
  "EN": {
    title: "HSR Simulated Universe Events",
    desc: "Too lazy to search for events every time you get a 3-choose-1? Worry not, just search here!",
    label: "Event name",
    showAll: "Show all",
    end: "End"
  }
});

function toggle(key: number, choice: any, choices: any[], val: any = undefined) {
  let c = val === undefined ? !events[key + '_' + choice.triggers[0]] : val;
  Object.values(choices).map(e => e.triggers).flat().filter(c => !choice.triggers.includes(c)).forEach(e => {
    toggle(key, {triggers: [e]}, [], false);
  })
  for (let event of choice.triggers) {
    events[key + '_' + event] = c;
    let rec_trig = handbook_events.value[key].dialogue.triggers?.[event]?.triggers;
    if (Array.isArray(rec_trig)) {
      for (let rec of rec_trig) {
        toggle(key, handbook_events.value[key].dialogue.triggers[event], [], c)
      }
    }
  }
}

const queryStr = ref("");
</script>

<template>
  <el-card v-if="lang" shadow="never">
    <template #header>
      {{ locale[lang].title }}
      <el-check-tag checked @click="lang=(lang==='CHS'?'EN':'CHS')">{{ lang }}</el-check-tag>
    </template>
    <el-text v-text="locale[lang].desc"></el-text>
    <el-input
        v-model="queryStr"
        :placeholder="locale[lang].label"
        :prefix-icon="ElIconSearch"
    ></el-input>
    <el-checkbox v-model="showAll">{{ locale[lang].showAll }}</el-checkbox>
  </el-card>
  <el-divider/>
  <el-row v-if="loaded&&handbook_events" :gutter="5" v-auto-animate>
    <template v-for="(event, event_key) in handbook_events">
      <el-col
          v-if="queryStr.length===0||searchScore(event.title,queryStr)"
          class="my-2"
          :cols="24"
          :lg="8">
        <el-card shadow="never">
          <template #header>{{ event.title }}</template>
          <el-space direction="vertical" alignment="flex-start">
            <template v-for="(lines,i) in prompt_lines(event.dialogue.prompt)">
              <el-divider v-if="i!==0"/>
              <el-text tag="p" v-for="line in lines" v-text="line"/>
            </template>
          </el-space>
          <el-button-group class="mt-2">
            <el-button
                v-for="(choice, key) in prompt_options(event.dialogue.prompt)"
                :type="events[event_key+'_'+choice.triggers?.[0]]?'primary':'default'" size="small"
                @click="toggle(event_key,choice,prompt_options(event.dialogue.prompt))">
              {{ key }}<br>
              {{ choice.desc }}
            </el-button>
          </el-button-group>
          <template v-for="tkey in Object.keys(event.dialogue.triggers??{}).sort()">
            <div v-if="check_recursive(event_key, tkey)||showAll">
              <el-text class="py-0"
                       v-html="'<p>'+prompt_lines(event.dialogue.triggers[tkey].lines).map((a:string[])=>a.join('</p><p>')).join('</br>')+'</p>'">
              </el-text>
              <div class="flex gap-4" v-if="event.dialogue.triggers[tkey].triggers">
                <el-tag v-for="trig in event.dialogue.triggers[tkey].triggers" v-text="trig"/>
              </div>
              <el-tag type="success" v-if="event.dialogue.triggers[tkey].effect"
                      v-text="event.dialogue.triggers[tkey].effect"/>
              <el-button-group>
                <el-button
                    v-for="(choice, key) in prompt_options(event.dialogue.triggers[tkey].lines)"
                    :type="events[event_key+'_'+choice.triggers[0]]?'primary':'default'" size="small"
                    @click="toggle(event_key,choice,prompt_options(event.dialogue.triggers[tkey].lines))">
                  {{ key }}<br>
                  {{ choice.desc }}
                </el-button>
              </el-button-group>
            </div>
          </template>
          <el-text tag="p" v-if="events[event_key+'_ALL_TALK_END']">
            {{ locale[lang].end }}
          </el-text>
        </el-card>
      </el-col>
    </template>
  </el-row>
  <el-skeleton v-else/>
</template>

<style scoped lang="css">
.v-btn {
  height: unset !important;
}
</style>
