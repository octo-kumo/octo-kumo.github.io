<script setup lang="ts">
import {useStorage} from '@vueuse/core'

const summary = ref("");
const loading = ref(false);
const form = reactive({
  input_text: useStorage("summary-text", ""),
  max_length: useStorage("summary-max-len", 50)
});
const onSubmit = () => {
  loading.value = true;
  serverResponseCheck(fetch("https://ai.octo-kumo.me/summary", {
    method: "POST",
    body: JSON.stringify(form)
  })).then(data => summary.value = data.summary)
      .catch(e => ElMessage.error(e.message))
      .finally(() => loading.value = false)
}
</script>

<template>
  <el-form :model="form" label-width="auto">
    <el-form-item label="Max Length">
      <el-input-number v-model="form.max_length" :min="1"/>
    </el-form-item>
    <el-form-item label="Input Text">
      <el-input v-model="form.input_text" type="textarea" :rows="3" minlength="1"/>
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary" @click="onSubmit">Summarize</el-button>
    </el-form-item>
    <el-form-item label="Summary">
      <el-skeleton v-if="loading" :rows="3" animated/>
      <el-input v-else v-model="summary" type="textarea" readonly :rows="3"/>
    </el-form-item>
  </el-form>
  <el-text>Model: <code>bart-large-cnn</code></el-text>
</template>

<style scoped lang="scss">
</style>
