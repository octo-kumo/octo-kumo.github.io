<script setup lang="ts">
import {useStorage} from '@vueuse/core'
import {events} from 'fetch-event-stream';

const prompt = ref("");
const loading = ref(false);
const form = reactive({
  stream: true,
  max_tokens: 256,
  messages: useStorage("chat-messages", [{role: "system", content: "You are a helpful assistant"}]),
});
const ROLES = ['system', 'user', 'assistant'];
const editing = reactive([]);
const onSubmit = () => {
  if (prompt.value.length > 0) {
    form.messages.push({role: "user", content: prompt.value});
    prompt.value = "";
  }
  editing.splice(0, editing.length);
  loading.value = true;
  const abort = new AbortController();
  serverResponseCheck(fetch("https://ai.yun.ng/chat", {
    method: "POST",
    signal: abort.signal,
    body: JSON.stringify(form)
  })).then(async res => {
    let stream = events(res, abort.signal);
    const d = {role: "assistant", content: ""};
    form.messages.push(d);
    const i = form.messages.length - 1;
    for await (let event of stream) {
      if (!event.data) continue;
      if (event.data === "[DONE]") console.log("hooray!", d.content, typeof d.content)
      else form.messages[i].content += JSON.parse(event.data).response;
    }
  }).catch(e => ElMessage.error(e.message))
      .finally(() => loading.value = false)
}

function resetChat() {
  form.messages.splice(0, form.messages.length);
  form.messages.push({role: "system", content: "You are a helpful assistant"});
}
</script>

<template>
  <el-form :model="form" label-width="auto">
    <el-form-item v-for="(_,i) in form.messages">
      <template #label>
        <el-select v-model="form.messages[i].role" placeholder="Role" style="width: 90px" size="small">
          <el-option
              v-for="role in ROLES"
              :key="role"
              :label="role"
              :value="role"
          />
        </el-select>
      </template>
      <div class="flex flex-1 gap-2">
        <el-input type="textarea" v-if="editing[i]" v-model="form.messages[i].content" placeholder="Content"
                  class="flex-1"/>
        <MDC v-else-if="form.messages[i].content" class="flex-1 chat-msg md-content"
             :value="form.messages[i].content||'...'"/>
        <el-skeleton :rows="1" v-else/>
        <el-button @click="editing[i]=!editing[i]" size="small" :type="editing[i]?'primary':''">
          <el-icon>
            <el-icon-edit/>
          </el-icon>
        </el-button>
        <el-button @click="form.messages.splice(i,1)" size="small" class="ml-0!">
          <el-icon>
            <el-icon-delete/>
          </el-icon>
        </el-button>
      </div>
    </el-form-item>
    <el-form-item label="Prompt">
      <el-input v-model="prompt" type="textarea" :rows="3" minlength="1" :disabled="loading"/>
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary" @click="onSubmit" :disabled="loading">Send!</el-button>
      <el-button type="danger" @click="resetChat" :disabled="loading">Clear!
      </el-button>
    </el-form-item>
  </el-form>
  <el-text>Model: <code>qwen1.5-14b-chat-awq</code></el-text>
</template>

<style lang="scss">
.chat-msg.md-content {
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  pre {
    line-height: 1.5;
  }
}
</style>
