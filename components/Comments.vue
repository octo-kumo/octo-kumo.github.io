<template>
  <div style="view-transition-name: 'comment-sec';padding-bottom:3em;padding-top:1em;">
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
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
    />
  </div>
</template>
<script setup lang="ts">
import Giscus from "@giscus/vue";
</script>
