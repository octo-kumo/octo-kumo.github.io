<script setup lang="ts">
import {PNG} from "pngjs/browser";
import JSZip from "jszip";
import {saveAs} from "~/libraries/file-saver";
import type {Ref} from "@vue/reactivity";
import {humanFileSize} from "@/mixins/utils";

definePageMeta({
  layout: "default",
  title: "Slicer",
  description: 'Sprite-sheet Slicing tool'
});
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const files: Ref<File[]> = ref([]);
const urls: Ref<string[]> = ref([]);
const cols: Ref<number[]> = ref([]);
const rows: Ref<number[]> = ref([]);
const pngs: Ref<PNG[]> = ref([]);
const errors: Ref<Error[]> = ref([]);
const loadings: Ref<boolean[]> = ref([]);
const initLoaded: Ref<boolean> = ref(true);
const minTransparency = ref(255);
const subWidths = computed(() => pngs.value.map(({width}, i) => computed({
  get: () => width / cols.value[i],
  set: newValue => cols.value[i] = width / newValue
})));
const subHeights = computed(() => pngs.value.map(({height}, i) => computed({
  get: () => height / rows.value[i],
  set: newValue => rows.value[i] = height / newValue
})));
const format = ref("{name}_{x}_{y}");

function gcd(a: number, b: number) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

async function onFilesChange() {
  urls.value = files.value.map(URL.createObjectURL);
  loadings.value = new Array(files.value.length).fill(false);
  initLoaded.value = false;
  for (let i = 0; i < files.value.length; i++) {
    loadings.value[i] = true;
    const buf = files.value[i].type === "image/png" ?
        await files.value[i].arrayBuffer() :
        await convertFile(files.value[i]);
    try {
      await new Promise((resolve, reject) => new PNG({filterType: 4}).parse(buf, async (error: Error, png: PNG) => {
        if (!png) return reject(error);
        const {width, height} = pngs.value[i] = png;
        const g = gcd(width, height);
        cols.value[i] = Math.floor(width / g);
        rows.value[i] = Math.floor(height / g);
        if (cols.value[i] * rows.value[i] > 128) cols.value[i] = rows.value[i] = 1;
        resolve(0);
      }));
    } catch (e) {
      errors.value[i] = <Error>e;
    }
    loadings.value[i] = false;
  }
  initLoaded.value = true;
}

watch(files, onFilesChange, {deep: true});

function convertFile(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    reader.onload = function (e) {
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob(blob => blob ? blob.arrayBuffer().then(arr => resolve(arr)) : reject(), 'image/png')
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
  const file = files.value[index];
  const {width, height, data} = pngs.value[index];
  const subImageWidth = width / cols.value[index];
  const subImageHeight = height / rows.value[index];
  const zip = new JSZip();
  for (let col = 0; col < cols.value[index]; col++) {
    for (let row = 0; row < rows.value[index]; row++) {
      const startX = Math.floor(col * subImageWidth);
      const startY = Math.floor(row * subImageHeight);
      if (width - startX < subImageWidth || height - startY < subImageHeight) continue;

      const subImage = new PNG({filterType: 4, width: subImageWidth, height: subImageHeight});
      let maxTr = 0;
      for (let y = 0; y < subImageHeight; y++) for (let x = 0; x < subImageWidth; x++) {
        const sourceIndex = ((startY + y) * width + startX + x) * 4;
        const targetIndex = (y * subImageWidth + x) * 4;

        subImage.data[targetIndex] = data[sourceIndex];
        subImage.data[targetIndex + 1] = data[sourceIndex + 1];
        subImage.data[targetIndex + 2] = data[sourceIndex + 2];
        subImage.data[targetIndex + 3] = data[sourceIndex + 3];
        if (maxTr < data[sourceIndex + 3]) maxTr = data[sourceIndex + 3]
      }

      if (minTransparency.value > maxTr) continue;

      zip.file(format.value.replace("{name}", file.name)
          .replace("{x}", String(col))
          .replace("{y}", String(row)) + ".png", new Blob([PNG.sync.write(subImage)]), {binary: true});
    }
  }
  zip.generateAsync({type: 'blob'}).then(blob => saveAs(blob, `${file.name}.zip`));
}
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Image Slicer</v-card-title>

      <v-card-text>
        <p>
          Slice up your images based on grid size, only PNGs are exacto-cropped, other images are auto-converted to PNG
          via canvas API. Sliced images will be downloaded as a zip file.
          You can change both grid size and grid item size, they sync automatically.
          In case of fractional grid, extra parts will be
          discarded, you can also discard empty grids.
        </p>
        <p><b>
          Everything happens in your browser, nothing is uploaded to anywhere.
        </b></p>
        <p><b>
          You may run out of memory if the images are too large!
        </b></p>
      </v-card-text>
    </v-card>
    <hr class="my-4">
    <v-form>
      <v-row>
        <v-col
            cols="12">
          <v-file-input v-model="files" accept="image/*" density="compact"
                        label="Images"
                        chips hide-details multiple
                        variant="underlined"></v-file-input>
        </v-col>
        <v-col
            cols="12"
            md="4">
          <v-text-field hide-details v-model="format" label="Format" suffix=".png" variant="underlined"></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="4">
          <v-text-field hide-details v-model="minTransparency" label="Empty Item Elimination (max alpha)"
                        type="number" variant="underlined" suffix="≤ keep" prefix="discard <"
                        :min="0" :max="255"></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="4">
          <v-btn :disabled="!initLoaded" @click="crop_all()" variant="outlined" block size="large" color="green">
            Crop All
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <v-col cols="12" md="4" v-for="(f,i) in files">
        <v-card :loading="loadings[i]">
          <v-img
              :src="urls[i]"
              height="200px"
              cover
          ></v-img>
          <v-btn
              @click="files.splice(i,1)"
              class="position-absolute top-2 right-2"
              icon="mdi-close-thick"
              color="red"
              variant="plain"
              size="x-small"
              elevation="0"/>
          <v-card-title>
            {{ f.name }}
          </v-card-title>

          <v-card-subtitle v-if="pngs[i]">
            <v-chip label variant="flat" density="compact" class="mr-1"
                    v-text="pngs[i]?.width + '×' + pngs[i]?.height"></v-chip>
            <v-chip label variant="flat" color="green" density="compact" class="mr-1"
                    v-text="f.type.replace('image/','')"></v-chip>
            <v-chip label variant="outlined" color="green" density="compact" class="mr-0"
                    v-text="humanFileSize(f.size, true)"></v-chip>
          </v-card-subtitle>
          <v-card-subtitle v-if="errors[i]">
            {{ errors[i].message }}
          </v-card-subtitle>

          <v-card-actions v-if="subWidths[i]&&subHeights[i]">
            <v-text-field hide-details type="number" v-model="subWidths[i].value" density="compact" label="Grid Width"
                          variant="underlined" suffix="×"></v-text-field>
            <v-text-field hide-details type="number" v-model="subHeights[i].value" density="compact" label="Grid Height"
                          variant="underlined"></v-text-field>
          </v-card-actions>
          <v-card-actions v-if="!isNaN(cols[i])&&!isNaN(rows[i])">
            <v-text-field hide-details type="number" v-model="cols[i]" density="compact" label="Columns"
                          variant="underlined"></v-text-field>
            <v-text-field hide-details type="number" v-model="rows[i]" density="compact" label="Rows"
                          variant="underlined"></v-text-field>
            <v-btn variant="text" @click="crop_index(i)" color="green">
              Crop
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <canvas ref="canvas" style="display: none"></canvas>
  </v-container>
</template>

<style scoped lang="css">
.close-popup {
  position: absolute !important;
  right: 0;
  transform: translate(50%, -50%);
}
</style>
