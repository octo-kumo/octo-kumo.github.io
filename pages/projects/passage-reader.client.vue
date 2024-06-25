<script setup lang="ts">
import type {Ref} from "@vue/reactivity";
import type {Answer, QuestionAndAnswer} from "@tensorflow-models/qna/dist/question_and_answer";

const question = ref("");
const context = ref("");
const answers: Ref<Answer[]> = ref([]);
const loading = ref(false);
const loaded = ref(false);
let model: QuestionAndAnswer | null = null;

async function load() {
  loading.value = true;
  await import('@tensorflow/tfjs-core');
  await import('@tensorflow/tfjs-backend-cpu');
  await import('@tensorflow/tfjs-backend-webgl');
  const qna = await import('@tensorflow-models/qna')
  console.log("loading model...");
  model = await qna.load();
  loading.value = false;
  loaded.value = true;
  console.log("model loaded");
}

async function execute() {
  if (!model) return;
  loading.value = true;
  answers.value = await model.findAnswers(question.value, context.value);
  loading.value = false;
}
</script>

<template>
  <div class="flex flex-row gap-2 items-stretch" style="height: calc(100vh - 60px)">
    <el-input
        :disabled="!loaded"
        resize="none"
        v-model="context"
        class="flex-auto p-2"
        type="textarea"
        placeholder="Context"
        input-style="height:100%;"
    ></el-input>
    <div class="flex flex-col items-stretch w-lg" v-loading="loading">
      <el-input
          :disabled="!loaded"
          v-model="question"
          class="basis-0"
          type="textarea"
          placeholder="Question"
          :rows="2"></el-input>
      <el-button @click="execute" :disabled="loading" v-if="loaded">Find Answers!</el-button>
      <el-button @click="load" v-else>Load Model</el-button>
      <ul class="flex-auto" v-if="loaded">
        <li v-for="ans in answers"><code>{{ ans.score }}</code> {{ ans.text }}</li>
        <li v-if="answers.length===0"><em>No answers found!</em></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">

</style>
