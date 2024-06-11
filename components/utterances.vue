<script setup lang="ts">
const props = defineProps({
  repo: {
    type: String,
    default: "[ENTER REPO HERE]",
    required: true,
  },
  issueTerm: {
    type: String,
    default: "pathname",
  },
  theme: {
    type: String,
    default: "github-light",
  },
  label: {
    type: String,
    default: "",
  }
});
const vueUtterances = ref(null);
onMounted(() => {
  let utterances = document.createElement("script");

  utterances.async = true;
  utterances.setAttribute("src", "https://utteranc.es/client.js");
  utterances.setAttribute("repo", props.repo);
  utterances.setAttribute("issue-term", props.issueTerm);
  if (props.label !== "") {
    utterances.setAttribute("label", props.label);
  }
  utterances.setAttribute("theme", props.theme);
  utterances.setAttribute("crossorigin", "anonymous");

  vueUtterances.value.appendChild(utterances);
});

watch(() => props.theme, (newTheme, oldTheme) => {
  console.log(newTheme);
  console.log(oldTheme);
  vueUtterances.value.querySelector("iframe").contentWindow.postMessage(
      {
        type: "set-theme",
        theme: newTheme,
      },
      "https://utteranc.es"
  );
});

</script>

<template>
  <div class="vue-utterances" ref="vueUtterances">
  </div>
</template>

<style scoped></style>
