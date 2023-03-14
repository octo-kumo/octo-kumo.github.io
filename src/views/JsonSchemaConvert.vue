<script setup lang="ts">
import { ref } from "vue";

const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );

function replaceText(text: string) {
  const BOOLEAN = /(?<=\n|^)\s*([\w_]+): (true|false)(,|$)/g;
  const NUMBERS = /(?<=\n|^)\s*([\w_]+): \d+(,|$)/g;
  const STRINGS = /(?<=\n|^)\s*([\w_]+): ('.*'|".*")(,|$)/g;
  const NULLS = /(?<=\n|^)\s*([\w_]+): (null)(,|$)/g;

  text = text.replace(
    BOOLEAN,
    ($0, $1) =>
      `@SerializedName("${$1}")\nprivate boolean ${snakeToCamel($1)};\n`
  );
  text = text.replace(
    NUMBERS,
    ($0, $1) => `@SerializedName("${$1}")\nprivate int ${snakeToCamel($1)};\n`
  );
  text = text.replace(
    STRINGS,
    ($0, $1) =>
      `@SerializedName("${$1}")\nprivate String ${snakeToCamel($1)};\n`
  );
  text = text.replace(
    NULLS,
    ($0, $1) =>
      `@SerializedName("${$1}")\nprivate Object ${snakeToCamel($1)};\n`
  );
  return text;
}

const text = ref("");
</script>
<template>
  <div class="flex flex-wrap h-screen">
    <textarea class="flex-1" v-model="text"></textarea>
    <textarea class="flex-1" v-text="replaceText(text)"></textarea>
  </div>
</template>
