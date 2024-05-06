<script setup lang="ts">
import {reactive, ref} from "vue";
import type {UnwrapNestedRefs} from "@vue/reactivity";
import {useStore} from "@/composables/states.ts";

const store = useStore();
const lang = ref(store.lang);
const ALL: { [k: string]: any } = {
  "EN": await fetch('https://raw.githubusercontent.com/octo-kumo/hsr-sim-universe-utils/master/out/handbook_eventsEN.json').then(r => r.json()),
  "CHS": await fetch('https://raw.githubusercontent.com/octo-kumo/hsr-sim-universe-utils/master/out/handbook_eventsCHS.json').then(r => r.json())
}
const handbook_events = ref(ALL[lang.value]);

watch(lang, () => handbook_events.value = ALL[lang.value]);
store.$subscribe((mutation, state) => lang.value = state.lang)

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
  return Object.entries(handbook_events.value[event_key].dialogue.triggers).some(([k, e]: [string, any]) =>
      e.triggers && e.triggers === event_trigger && check_recursive(event_key, k)
  );
}

const locale: { [k: string]: any } = ref({
  "CHS": {
    title: "星穹铁道·模拟宇宙 事件集",
    desc: "每次三选一都要去网上找太麻烦？在这里就可以搜！",
    label: "事件名字",
  },
  "EN": {
    title: "HSR Simulated Universe Events",
    desc: "Too lazy to search for events every time you get a 3-choose-1? Worry not, just search here!",
    label: "Event name",
  }
});

function setLang(l: string) {
  lang.value = l;
  store.lang = l;
  location.reload()
}

const queryStr = ref("");
</script>

<template>
  <v-container>
    <v-card v-if="lang">
      <v-card-title>{{ locale[lang].title }}
        <v-chip v-text="lang" @click="setLang(lang==='CHS'?'EN':'CHS')"></v-chip>
      </v-card-title>
      <v-card-text v-text="locale[lang].desc"></v-card-text>
      <v-text-field
          v-model="queryStr"
          density="compact"
          variant="solo"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          :label="locale[lang].label"
      ></v-text-field>
    </v-card>
    <hr class="my-4">
    <v-row v-if="handbook_events">
      <template v-for="(event, event_key) in handbook_events">
        <v-col
            v-if="queryStr.length===0||searchScore(event.title,queryStr)"
            cols="12"
            lg="4"
        >
          <v-card>
            <v-card-title v-text="event.title"></v-card-title>
            <v-card-text
                v-html="'<p>'+prompt_lines(event.dialogue.prompt).map((a:string[])=>a.join('</p><p>')).join('</br>')+'</p>'">
            </v-card-text>
            <v-row align="start" class="ma-2">
              <v-col cols="auto" v-for="(choice, key) in prompt_options(event.dialogue.prompt)" class="pa-1">
                <v-btn :variant="events[event_key+'_'+choice.triggers]?'outlined':'flat'" size="small"
                       @click="events[event_key+'_'+choice.triggers]=!events[event_key+'_'+choice.triggers]"
                       :triggers="event_key+'_'+choice.triggers">
                  {{ key }}<br>
                  {{ choice.desc }}
                </v-btn>
              </v-col>
            </v-row>
            <template v-for="tkey in Object.keys(event.dialogue.triggers).sort()" v-if="event.dialogue.triggers">
              <div v-if="check_recursive(event_key, tkey)">
                <v-card-text class="py-0"
                             v-html="'<p>'+prompt_lines(event.dialogue.triggers[tkey].lines).map((a:string[])=>a.join('</p><p>')).join('</br>')+'</p>'">
                </v-card-text>
                <v-row align="start" class="ma-2">
                  <v-col cols="auto" v-for="(choice, key) in prompt_options(event.dialogue.triggers[tkey].lines)"
                         class="pa-1">
                    <v-btn :variant="events[event_key+'_'+choice.triggers]?'outlined':'flat'" size="small"
                           @click="events[event_key+'_'+choice.triggers]=!events[event_key+'_'+choice.triggers]"
                           :triggers="event_key+'_'+choice.triggers">
                      <ruby>
                        {{ key }}
                        <rt v-text="choice.desc"></rt>
                      </ruby>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </template>
            <v-card v-if="events[event_key+'_ALL_TALK_END']">
              <v-card-text>结束</v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<style scoped lang="css">
.v-btn {
  height: unset !important;
}
</style>
