<script setup lang="ts">
import {useStorage} from '@vueuse/core'
import type {Ref} from "@vue/reactivity";
import type {UploadFiles} from "element-plus";

const canvas: Ref<HTMLCanvasElement> = ref();
const canvasReady = ref(false);
const finalImage = ref("");
const loading = ref(false);
const erase = ref(false);
const brushSize = ref(5);

const inputImage: Ref<UploadFiles> = ref([]);
watch(inputImage, (e: UploadFiles) => {
  if (e.length > 0) {
    const img = new Image();
    img.onload = () => {
      canvas.value.width = img.width;
      canvas.value.height = img.height;
      canvas.value.style.backgroundImage = `url("${e[0].url}")`;
      canvas.value.clear();
      canvasReady.value = true;
    };
    img.src = e[0].url;
  } else {
    canvasReady.value = false;
  }
}, {deep: true});
const form = reactive({
  prompt: useStorage("image-prompt", ""),
  image: null,
  mask: null,
  num_steps: useStorage("image-num_steps", 20),
  strength: useStorage("image-strength", 1),
  guidance: useStorage("image-guidance", 7.5),
});
onMounted(() => {
  makePainter(canvas.value, brushSize, erase);
})

function getMask() {
  return new Promise((resolve) => canvas.value.toBlob(async (blob: Blob) => {
    resolve(await blob.arrayBuffer())
  }))
}

const onSubmit = async () => {
  loading.value = true;
  form.image = inputImage.value.length > 0 ? [...new Uint8Array(await inputImage.value[0].raw.arrayBuffer())] : undefined;
  form.mask = inputImage.value.length > 0 ? [...new Uint8Array(await getMask())] : undefined;
  form.guidance = parseFloat(form.guidance);
  form.strength = parseFloat(form.strength);
  serverResponseCheck(fetch("https://ai.yun.ng/image", {
    method: "POST",
    body: JSON.stringify(form)
  }))
      .then(blob => finalImage.value = URL.createObjectURL(blob))
      .catch(e => ElMessage.error(e.message))
      .finally(() => loading.value = false)
}

function downloadImage() {
  const link = document.createElement("a");
  link.setAttribute('download', "kumo.ai." + new Date().toISOString() + ".png");
  link.href = finalImage.value;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
</script>

<template>
  <el-form :model="form" label-width="auto" v-loading="loading">
    <el-form-item label="Prompt">
      <el-input v-model="form.prompt" minlength="1" required autocomplete="off"/>
    </el-form-item>
    <el-form-item label="Steps">
      <el-input-number v-model="form.num_steps" :min="1" :max="20" placeholder="20"/>
    </el-form-item>
    <el-form-item label="Strength">
      <el-input type="number" v-model="form.strength" placeholder="1"/>
    </el-form-item>
    <el-form-item label="Guidance">
      <el-input type="number" v-model="form.guidance" placeholder="7.5"/>
    </el-form-item>
    <el-form-item label="Input Image">
      <el-upload
          :limit="1"
          accept="image/*"
          v-model:file-list="inputImage"
          :auto-upload="false"
          list-type="picture">
        <el-button>Upload image for in-painting! (optional)</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item :label="`Mask Brush Size`" v-show="canvasReady">
      <el-slider v-model="brushSize" :min="1" :max="1000"></el-slider>
    </el-form-item>
    <el-form-item label="Eraser" v-show="canvasReady">
      <el-checkbox v-model="erase"></el-checkbox>
    </el-form-item>
    <el-form-item label="Inpaint Mask" v-show="canvasReady">
      <canvas ref="canvas"/>
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary" @click="onSubmit">Generate</el-button>
    </el-form-item>
    <el-form-item label="Final" v-show="finalImage">
      <el-image :src="finalImage">
        <template #error>
          <div class="image-slot">
            <el-icon>
              <el-icon-picture/>
            </el-icon>
            Error
          </div>
        </template>
      </el-image>
    </el-form-item>
    <el-form-item label=" " v-show="finalImage">
      <el-button type="success" @click="downloadImage">
        <el-icon>
          <el-icon-download/>
        </el-icon>
        Download
      </el-button>
    </el-form-item>
  </el-form>
  <el-text>Model: <code>dreamshaper-8-lcm</code></el-text>
  <br/>
  <el-text>Model (in-paint): <code>stable-diffusion-v1-5-inpainting</code></el-text>
</template>

<style scoped lang="scss">
</style>
