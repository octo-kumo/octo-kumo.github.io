<script setup lang="ts">
import { saveAs } from "~/libraries/file-saver";
import type { Ref } from "@vue/reactivity";
import type { PNG as IPNG } from "pngjs/browser";
import type IJSZIP from "jszip";
import type { UploadUserFile } from "element-plus";

definePageMeta({
  layout: "default",
  title: "Slicer",
  description: "Sprite-sheet Slicing tool",
});
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const files: Ref<UploadUserFile[]> = ref([]);
const urls: Ref<string[]> = ref([]);
const cols: Ref<number[]> = ref([]);
const rows: Ref<number[]> = ref([]);
const pngs: Ref<IPNG[]> = ref([]);
const errors: Ref<Error[]> = ref([]);
const loadings: Ref<boolean[]> = ref([]);
const initLoaded: Ref<boolean> = ref(true);
const minTransparency = ref(255);
const subWidths = computed(() =>
  pngs.value.map(({ width }, i) =>
    computed({
      get: () => width / cols.value[i],
      set: (newValue) => (cols.value[i] = width / newValue),
    })
  )
);
const subHeights = computed(() =>
  pngs.value.map(({ height }, i) =>
    computed({
      get: () => height / rows.value[i],
      set: (newValue) => (rows.value[i] = height / newValue),
    })
  )
);
const format = ref("{name}_{x}_{y}");
let PNG: typeof IPNG | undefined;
let JSZip: IJSZIP | undefined;

function largestFactorUnder10(n: number) {
  for (let i = 9; i > 0; i--) if (n % i === 0) return i;
  return null;
}

function gcd(a: number, b: number) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

async function loadLibraries() {
  if (PNG) return;
  if (!import.meta.browser) return;
  if (import.meta.prerender) return;
  PNG = (await import("pngjs/browser")).PNG;
  JSZip = (await import("jszip")) as any as IJSZIP;
}

async function onFilesChange() {
  await loadLibraries();
  urls.value = files.value
    .map((f) => f.raw && URL.createObjectURL(f.raw))
    .filter((u) => u) as string[];
  loadings.value = new Array(files.value.length).fill(false);
  initLoaded.value = false;
  for (let i = 0; i < files.value.length; i++) {
    loadings.value[i] = true;
    const raw = files.value[i].raw!;
    const buf =
      raw.type === "image/png"
        ? await raw.arrayBuffer()
        : await convertFile(raw);
    try {
      await new Promise(
        (resolve, reject) =>
          PNG &&
          new PNG({ filterType: 4 }).parse(
            buf as any,
            async (error: Error, png: IPNG) => {
              if (!png) return reject(error);
              const { width, height } = (pngs.value[i] = png);
              const g = gcd(width, height);
              cols.value[i] = Math.floor(width / g);
              rows.value[i] = Math.floor(height / g);
              console.log(
                "gcd",
                width,
                height,
                g,
                cols.value[i],
                rows.value[i]
              );
              if (cols.value[i] * rows.value[i] > 128) {
                cols.value[i] = largestFactorUnder10(width) ?? 1;
                rows.value[i] = largestFactorUnder10(height) ?? 1;
              }
              resolve(0);
            }
          )
      );
    } catch (e) {
      errors.value[i] = <Error>e;
    }
    loadings.value[i] = false;
  }
  initLoaded.value = true;
}

watch(files, onFilesChange, { deep: true });

function convertFile(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    reader.onload = function (e) {
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) =>
            blob ? blob.arrayBuffer().then((arr) => resolve(arr)) : reject(),
          "image/png"
        );
      };
      img.onerror = reject;
      img.src = <string>e.target?.result;
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

async function crop_all() {
  for (let i = 0; i < files.value.length; i++) {
    loadings.value[i] = true;
    await crop_index(i);
    loadings.value[i] = false;
  }
}

async function crop_index(index: number) {
  await loadLibraries();
  if (!PNG || !JSZip) return;
  const file = files.value[index].raw;
  const { width, height, data } = pngs.value[index];
  const subImageWidth = width / cols.value[index];
  const subImageHeight = height / rows.value[index];
  const zip = new JSZip();
  for (let col = 0; col < cols.value[index]; col++) {
    for (let row = 0; row < rows.value[index]; row++) {
      const startX = Math.floor(col * subImageWidth);
      const startY = Math.floor(row * subImageHeight);
      if (width - startX < subImageWidth || height - startY < subImageHeight)
        continue;

      const subImage = new PNG({
        filterType: 4,
        width: subImageWidth,
        height: subImageHeight,
      });
      let maxTr = 0;
      for (let y = 0; y < subImageHeight; y++)
        for (let x = 0; x < subImageWidth; x++) {
          const sourceIndex = ((startY + y) * width + startX + x) * 4;
          const targetIndex = (y * subImageWidth + x) * 4;

          subImage.data[targetIndex] = data[sourceIndex];
          subImage.data[targetIndex + 1] = data[sourceIndex + 1];
          subImage.data[targetIndex + 2] = data[sourceIndex + 2];
          subImage.data[targetIndex + 3] = data[sourceIndex + 3];
          if (maxTr < data[sourceIndex + 3]) maxTr = data[sourceIndex + 3];
        }

      if (minTransparency.value > maxTr) continue;

      zip.file(
        format.value
          .replace("{name}", file!.name)
          .replace("{x}", String(col))
          .replace("{y}", String(row)) + ".png",
        new Blob([PNG.sync.write(subImage) as any]),
        { binary: true }
      );
    }
  }
  zip
    .generateAsync({ type: "blob" })
    .then((blob) => saveAs(blob, `${file!.name}.zip`));
}
</script>

<template>
  <div>
    <el-card>
      <template #header>Image Slicer</template>
      <p>
        Slice up your images based on grid size, only PNGs are exacto-cropped,
        other images are auto-converted to PNG via canvas API. Sliced images
        will be downloaded as a zip file. You can change both grid size and grid
        item size, they sync automatically. In case of fractional grid, extra
        parts will be discarded, you can also discard empty grids.
      </p>
      <p>
        <b>
          Everything happens in your browser, nothing is uploaded to anywhere.
        </b>
      </p>
      <p><b>You may run out of memory if the images are too large!</b></p>
    </el-card>
    <el-divider />
    <el-card>
      <el-row :gutter="5" class="space-y-2">
        <el-col :cols="24">
          <el-upload
            v-model:file-list="files"
            accept="image/*"
            multiple
            :auto-upload="false">
            <el-button>Click to upload</el-button>
            <template #tip>
              <div class="el-upload__tip">jpg/png files</div>
            </template>
          </el-upload>
        </el-col>
        <el-col :cols="24" :md="8">
          <el-input v-model="format">
            <template #prefix>format&nbsp;</template>
            <template #suffix>.png</template>
          </el-input>
        </el-col>
        <el-col :cols="24" :md="8">
          <el-input
            v-model="minTransparency"
            placeholder="Empty Item Elimination (max alpha)"
            type="number"
            :min="0"
            :max="255">
            <template #suffix>≤ keep</template>
            <template #prefix>discard</template>
          </el-input>
        </el-col>
        <el-col :cols="24" :md="8">
          <el-button :disabled="!initLoaded" @click="crop_all()">
            Crop All
          </el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-divider />
    <el-row :gutter="10">
      <el-col :cols="24" :md="8" class="mb-2" v-for="(f, i) in files">
        <el-card v-loading="loadings[i]" shadow="hover">
          <el-image
            :src="urls[i]"
            style="height: 200px; width: 100%"
            fit="cover"
            lazy></el-image>
          <template #header>
            {{ f.name }}
          </template>

          <div v-if="pngs[i]" class="flex gap-2">
            <el-tag
              type="primary"
              v-text="pngs[i]?.width + '×' + pngs[i]?.height"></el-tag>
            <el-tag
              type="primary"
              v-text="f.raw!.type.replace('image/', '')"></el-tag>
            <el-tag
              type="info"
              v-text="displayFilesize(f.size!, true)"></el-tag>
          </div>
          <el-text v-if="errors[i]">
            {{ errors[i].message }}
          </el-text>

          <template #footer v-if="!isNaN(cols[i]) && !isNaN(rows[i])">
            <div class="flex gap-4 mb-2" v-if="subWidths[i] && subHeights[i]">
              <el-input type="number" v-model="subWidths[i].value"></el-input>
              <el-input type="number" v-model="subHeights[i].value"></el-input>
            </div>
            <div class="flex gap-4">
              <el-input-number
                type="number"
                v-model="cols[i]"></el-input-number>
              <el-input-number
                type="number"
                v-model="rows[i]"></el-input-number>
              <el-button
                @click="crop_index(i)"
                type="primary"
                class="flex-auto">
                Crop
              </el-button>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <canvas ref="canvas" style="display: none"></canvas>
  </div>
</template>

<style scoped lang="css">
.close-popup {
  position: absolute !important;
  right: 0;
  transform: translate(50%, -50%);
}
</style>
