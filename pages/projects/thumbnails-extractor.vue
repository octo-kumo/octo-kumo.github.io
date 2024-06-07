<script setup lang="ts">
import {ref} from 'vue'

const id = ref("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

function parse(url: string) {
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

const bili_regex = {
  av: {
    regexps: [new RegExp("^(?:(?:a|A)(?:v|V))?([0-9]+)$"), new RegExp("^http[s]?://.*?bilibili.*?av([0-9]+).*?$")]
  },
  bv: {
    regexps: [new RegExp("^(?:(?:b|B)(?:v|V)){1}([0-9a-zA-Z]+)$"), new RegExp("^http[s]?://.*?bilibili.*?BV([0-9a-zA-Z]+).*?$")]
  },
  cv: {
    regexps: [new RegExp("^(?:(?:c|C)(?:v|V)){1}([0-9]+)$"), new RegExp("^http[s]?://.*?bilibili.*?cv([0-9]+).*?$")]
  },
  live: {
    regexps: [new RegExp("^http[s]?://live\\.bilibili.*?\\/([0-9]+).*?$")]
  },
  b23: {
    regexps: [new RegExp("^http[s]?://b23\\.tv/([0-9a-zA-Z]+).*?$")]
  }
};

function parseBili(url: string) {
  for (const e in bili_regex)
    for (let n = bili_regex[e].regexps, i = 0; i < n.length; i++) {
      let r;
      if (null != (r = n[i].exec(url)))
        return {
          type: e,
          id: r[1]
        }
    }
  return null
}

const evaluating = ref(false)
const thumbnails = computedAsync(async (onCancel) => {
  console.log("computed")
  console.log(parseBili(id.value))
  if (parse(id.value)) return {
    max: "https://img.youtube.com/vi/" + parse(id.value) + "/maxresdefault.jpg",
    sd: "https://img.youtube.com/vi/" + parse(id.value) + "/sddefault.jpg",
    hq: "https://img.youtube.com/vi/" + parse(id.value) + "/hqdefault.jpg",
    mq: "https://img.youtube.com/vi/" + parse(id.value) + "/mqdefault.jpg",
    thumb: "https://img.youtube.com/vi/" + parse(id.value) + "/default.jpg",
  }; else if (parseBili(id.value)) {
    const info = parseBili(id.value);
    const url = new URL('https://api.bilibili.com/x/web-interface/view');
    url.searchParams.append(info.type === 'av' ? 'aid' : 'bvid', info?.id);
    const abortController = new AbortController()
    // onCancel(() => abortController.abort())
    return {
      max: await fetch(url, {
        mode: 'no-cors',
        signal: abortController.signal
      }).then(async r => {
        console.log(await r.text())
        return r.json();
      })
          .then(d => d.cover)
          .catch(e => {
            console.log("error", e);
          })
    }
  } else {
    return {}
  }
}, null, evaluating);
</script>

<template>
  <el-card>
    <el-input v-model="id">
      <template #append>
        <el-button>Go!</el-button>
      </template>
    </el-input>
  </el-card>
  <el-space wrap>
    <el-card v-for="(url, key) in thumbnails" :key="key">
      <el-image :src="url" lazy></el-image>
    </el-card>
  </el-space>
</template>

<style scoped>
</style>
<style>
html,
body {
  scroll-snap-type: y mandatory;
}
</style>
