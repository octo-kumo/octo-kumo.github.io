<script setup lang="ts">
import {ref} from "vue";
import type {Ref} from "@vue/reactivity";

import {PNG} from "pngjs/browser";
import JSZip from "jszip";
import fileSaver from "file-saver-es";

const files: Ref<File[]> = ref([]);
const urls: Ref<string[]> = ref([]);
const cols: Ref<number[]> = ref([]);
const rows: Ref<number[]> = ref([]);
const pngs: Ref<PNG[]> = ref([]);
const format = ref("{name}_{x}_{y}");

function gcd(a: number, b: number) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function onFilesChange() {
  urls.value = files.value.map(URL.createObjectURL);
  for (let i = 0; i < files.value.length; i++) {
    files.value[i].arrayBuffer().then(buf =>
        new PNG({filterType: 4}).parse(buf, async (error: Error, png: PNG) => {
          const {width, height} = pngs.value[i] = png;
          const g = gcd(width, height);
          cols.value[i] = Math.floor(width / g);
          rows.value[i] = Math.floor(height / g);
        }))
  }

}

function crop_all() {
  for (let i = 0; i < files.value.length; i++) {
    crop_index(i);
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
      const startX = col * subImageWidth;
      const startY = row * subImageHeight;
      const subImage = new PNG({filterType: 4, width: subImageWidth, height: subImageHeight});
      for (let y = 0; y < subImageHeight; y++) {
        for (let x = 0; x < subImageWidth; x++) {
          const sourceIndex = ((startY + y) * width + startX + x) * 4;
          const targetIndex = (y * subImageWidth + x) * 4;

          subImage.data[targetIndex] = data[sourceIndex];
          subImage.data[targetIndex + 1] = data[sourceIndex + 1];
          subImage.data[targetIndex + 2] = data[sourceIndex + 2];
          subImage.data[targetIndex + 3] = data[sourceIndex + 3];
        }
      }

      zip.file(format.value.replace("{name}", file.name)
          .replace("{x}", String(col))
          .replace("{y}", String(row)) + ".png", new Blob([PNG.sync.write(subImage)]), {binary: true});
    }
  }
  zip.generateAsync({type: 'blob'}).then(blob => fileSaver.saveAs(blob, `${file.name}.zip`));
}
</script>

<template>
  <v-container>
    <h1>Image Slicer</h1>
    <p>Slice up your images based on grid size, only supports PNG atm.</p>
    <p>Everything happens in your browser, nothing is uploaded to anywhere.</p>
    <hr class="my-4">
    <v-form>
      <v-row>
        <v-col
            cols="12">
          <v-file-input v-model="files" accept="image/*" density="compact"
                        @change="onFilesChange" label="Images"
                        chips
                        multiple
                        variant="underlined"></v-file-input>
        </v-col>
        <v-col
            cols="12"
            md="8">
          <v-text-field v-model="format" label="Format" suffix=".png" variant="underlined"></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="4">
          <v-btn @click="crop_all()" variant="outlined" block>Crop All</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <v-col cols="12" md="4" v-for="(f,i) in files">
        <v-card>
          <v-img
              :src="urls[i]"
              height="200px"
              cover
          ></v-img>

          <v-card-title>
            {{ f.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ pngs[i]?.width + "×" + pngs[i]?.height }}
          </v-card-subtitle>

          <v-card-actions>
            <v-text-field type="number" v-model="cols[i]" placeholder="Columns" density="compact" label="Columns"
                          variant="underlined"></v-text-field>
            <v-text-field type="number" v-model="rows[i]" placeholder="Rows" density="compact" label="Rows"
                          variant="underlined"></v-text-field>
            <v-btn variant="text" @click="crop_index(i)">
              Crop
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="css">

</style>
