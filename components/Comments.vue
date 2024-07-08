<template>
  <div style="view-transition-name: 'comment-sec'">
    <Giscus
        repo="octo-kumo/octo-kumo.github.io"
        repo-id="R_kgDOIzFvHg"
        category="General"
        category-id="DIC_kwDOIzFvHs4Cgo6u"
        mapping="pathname"
        strict="1"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        :theme="color.value"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
    />
  </div>
</template>
<script setup lang="ts">
const color = useColorMode();
import Giscus from "@giscus/vue";
</script>
