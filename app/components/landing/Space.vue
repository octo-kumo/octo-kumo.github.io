<script lang="ts" setup>
import { Html as THTML } from '@tresjs/cientos'
import type { OrbitControls } from '#components';
import { DirectionalLight, Vector3, type PerspectiveCamera } from 'three';
import { onMounted, onUnmounted } from 'vue';
import { useElementSize, useMouse, useWindowSize } from '@vueuse/core'
defineEmits(['navigate']);

const props = defineProps<{
  sections: {
    key: string;
    value: any;
    title: string;
  }[];
}>();
const controls = ref<InstanceType<typeof OrbitControls> | null>(null);
const progress = defineModel<number>({ required: true });
const cameraRef = ref<InstanceType<typeof PerspectiveCamera> | null>(null);
const lightRef = ref<InstanceType<typeof DirectionalLight> | null>(null);

const keyframes = [{
  value: 0,
  position: new Vector3(0, 0.95, 5),
  lookAt: new Vector3(0, 0, -1),
  light: new Vector3(0, 0, -1)
}, {
  value: 0.20,
  position: new Vector3(0, 0.6, 7),
  lookAt: new Vector3(0, 0, 4.9),
  light: new Vector3(0, -1, 1)
}, {
  value: 0.399,
  position: new Vector3(0, 0, 10),
  lookAt: new Vector3(0, 0, -1),
  light: new Vector3(0, 0, -1)
}, {
  value: 0.4,
  position: new Vector3(-6, 10, 7),
  lookAt: new Vector3(18, 0, 0),
  light: new Vector3(0, 0, -1)
}, {
  value: 0.6,
  position: new Vector3(-17, 10, 7),
  lookAt: new Vector3(-2, 0, 0),
  light: new Vector3(0, 0, -1)
}, {
  value: 0.8,
  position: new Vector3(Math.cos(3) * 11.4, 0.2, Math.sin(3) * 11.4),
  lookAt: new Vector3(Math.cos(3) * 10, 0, Math.sin(3) * 10),
  light: new Vector3(0, 0, -1)
}, {
  value: 1.01,
  position: new Vector3(Math.cos(3) * 14.4, 0.6, Math.sin(3) * 14.4),
  lookAt: new Vector3(Math.cos(3) * 13, 0, Math.sin(3) * 13),
  light: new Vector3(0, 0, -1)
}]
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const factor = 0.05;
const ease = 3;
const cursorX = computed(() => (x.value / width.value - 0.5) * factor);
const cursorY = computed(() => -(y.value / height.value - 0.5) * factor);
const ox = ref(0);
const oy = ref(0);

function befRender(){
  const ci = keyframes.findIndex(camera => progress.value < camera.value)
  const cc = keyframes[ci - 1]
  const nc = keyframes[ci]

  if (cc && nc) {
    const t = (progress.value - cc.value) / (nc.value - cc.value);
    const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // cubic ease in-out
    cameraRef.value?.position.lerpVectors(cc.position, nc.position, easeT);
    if (cc.lookAt && nc.lookAt && controls.value?.instance) {
      controls.value.instance.target = cc.lookAt.clone().lerp(nc.lookAt, easeT);
    }
    lightRef.value?.position.lerpVectors(cc.light, nc.light, easeT);
    ox.value += (cursorX.value - ox.value) * ease * 0.008;
    oy.value += (cursorY.value - oy.value) * ease * 0.008;
    if(cameraRef.value){
      cameraRef.value.position.x += ox.value;
      cameraRef.value.position.y += oy.value;
    }

  }
}
const workOpen = reactive({
  wwf: false
})
</script>


<template>
  <TresCanvas class="fade-in" render-mode="on-demand" clear-color="#000000" window-size :antialias='true' shadows>
    <TresPerspectiveCamera :position="[0, 2, 5]" ref="cameraRef"/>
    <OrbitControls ref="controls" />
    <Stars />
    <LandingRunsEveryFrame :func="befRender" />
    <TresDirectionalLight :position="[0, 0, -1]" :intensity="1" castShadow ref="lightRef" />
    <TresMesh :position="[0, 0, 4.9]" >
      <TresSphereGeometry :args="[1, 32, 32]" />
      <TresMeshPhysicalMaterial 
      color="black" :side="2" />
    </TresMesh>
    <Suspense>
      <Text3D :visible="progress < 0.2" font="/fonts/space_font.json" text="yun" :position="[0, 1, 0]" />
    </Suspense>

    <!-- <Grid :args="[10.5, 10.5]" cell-color="#555555" :cell-size="0.6" :cell-thickness="0.5" section-color="#409eff"
      :section-size="2" :section-thickness="1.3" :infinite-grid="true" :fade-from="0" :fade-distance="12"
      :fade-strength="1" :position="[0, 0, 0]" /> -->
    <ScrollControls v-model="progress" :distance="0" :smooth-scroll="0.1" htmlScroll/>

    <TresGroup :visible="progress > 0.4">
      <TresAmbientLight color="#ffffff" :intensity="0.5" />
      <TresPointLight :position="[0, 0, 0]" :intensity="10" :distance="100" :decay="0.1" color="#ffffff" />
      <Sphere :position="[0, 0, 0]" :scale="0.3" />
      <Ring :args="[5, 5.01, 128]" :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
        <TresMeshBasicMaterial color="#ffffff" :side="2" />
      </Ring>

      <Ring :args="[10, 10.01, 128]" :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
        <TresMeshBasicMaterial color="#ffffff" :side="2" />
      </Ring>
      <Sphere :position="[Math.cos(3) * 10, 0, Math.sin(3) * 10]" :scale="0.3">
        <TresMeshPhysicalMaterial color="black" :side="2" />
      </Sphere>
      <Ring :args="[7.5, 7.51, 128]" :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
        <TresMeshBasicMaterial color="#ffffff" :side="2" />
      </Ring>
      <Sphere :position="[Math.cos(1 + Math.PI) * 7.5, 0, Math.sin(1 + Math.PI) * 7.5]" :scale="0.2">
        <TresMeshPhysicalMaterial color="black" :side="2" />
      </Sphere>
      <Sphere :position="[Math.cos(3) * 13, 0, Math.sin(3) * 13]" :scale="0.3">
        <TresMeshPhysicalMaterial color="black" :side="2" />
      </Sphere>
    </TresGroup>
    <THTML v-if="progress > 0.5" wrapper-class="space-webpage" center :zIndexRange="[100, 0]"
      :position="[Math.cos(1) * 7.5, 0.01, Math.sin(1) * 7.5]" :distance-factor="6" :occlude="'raycast' as unknown as 'blending'" sprite>
      <landing-wwf class="cursor-pointer" @mouseenter="workOpen.wwf = true" @mouseleave="workOpen.wwf = false" />
    </THTML>
    <THTML v-if="progress > 0.5" wrapper-class="space-webpage" center :zIndexRange="[100, 0]"
      :position="[Math.cos(3) * 11, 0.18, Math.sin(3) * 11]" :rotation="[1.54, 10.48, 20.48]" :distance-factor="0.35"
      :occlude="'raycast' as unknown as 'blending'">
      <iframe src="https://yun.ng" class="w-screen h-screen" style="border:none;overflow:hidden;"></iframe>
    </THTML>
  </TresCanvas>
  <transition name="fade">
    <div v-if="workOpen.wwf" @mouseenter="workOpen.wwf = true" @mouseleave="workOpen.wwf = false"
      class="fixed top-45% left-60% translate--50% bg-black p-4 rounded border border-solid border-white z-100000000">
      <small class="opacity-50">2024-now</small><br />
      <span>Member of CTF team <a target="_blank" href="https://ctftime.org/team/283853">World Wide Flags</a></span>
    </div>
  </transition>
</template>
<style>
.space-webpage {
  position: fixed !important;
}
</style>