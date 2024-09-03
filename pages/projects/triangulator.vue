<template>
  <div class="flex">
    <canvas ref="canvas" width="800" height="600" id="canvas" @mousedown="canvasDown" @mousemove="canvasMove"
      @mouseup="canvasUp" @wheel="canvasWheel" @mouseleave="canvasLeave"></canvas>
    <div id="controls" v-auto-animate>
      <table class="px-2">
        <thead>
          <tr>
            <th>Points</th>
            <th>x</th>
            <th>y</th>
            <th>dx</th>
            <th>dy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(anchor, index) in anchors" :key="index">
            <td>{{ index + 1 }}{{ selectedAnchor === anchor ? ' ←' : '' }}</td>
            <td><math-field v-model="anchor.x" hide-eval /></td>
            <td><math-field v-model="anchor.y" hide-eval /></td>
            <td><math-field v-model="anchor.dx" hide-eval /></td>
            <td><math-field v-model="anchor.dy" hide-eval /></td>
            <td><el-button @click="anchors.splice(index, 1)">x</el-button></td>
          </tr>
          <tr>
            <td></td>
            <td><math-field v-model="newAnchor.x" hide-eval /></td>
            <td><math-field v-model="newAnchor.y" hide-eval /></td>
            <td><math-field v-model="newAnchor.dx" hide-eval /></td>
            <td><math-field v-model="newAnchor.dy" hide-eval /></td>
            <td><el-button @click="anchors.push({ ...newAnchor })">+</el-button></td>
          </tr>
        </tbody>
      </table>
      <el-form label-position="top" inline v-if="showOptions" class="px-2">
        <el-form-item label="Tolerance">
          <el-input-number v-model="tolerance" controls-position="right" />
        </el-form-item>
        <el-form-item label="Max Iterations">
          <el-input-number v-model="maxIterations" controls-position="right" :min="1" />
        </el-form-item>
        <el-form-item label="Initial Learning Rate">
          <el-input-number v-model="initialLearningRate" controls-position="right" :min="0.01" :step="0.01" />
        </el-form-item>
        <el-form-item label="Reward Multiplier">
          <el-input-number v-model="rewardMultiplier" controls-position="right" :min="0.01" :step="0.01" />
        </el-form-item>
        <el-form-item label="Error Multiplier">
          <el-input-number v-model="errorMultiplier" controls-position="right" :min="0.01" :step="0.01" />
        </el-form-item>
        <el-form-item label="Show Optimization Path">
          <el-checkbox v-model="showOptimizationPath" />
        </el-form-item>
        <el-form-item label="Round Target Number">
          <el-checkbox v-model="roundTargetNumber" />
        </el-form-item>
      </el-form>
      <el-descriptions class="margin-top px-2" title="Results" border>
        <template #extra>
          <el-checkbox v-model="showOptions" label="Show options" size="large" />
        </template>
        <el-descriptions-item>
          <template #label>Iterations</template>
          {{ iterationsUsed }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>X</template>
          {{ displayNumber(result.x) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>Y</template>
          {{ displayNumber(result.y) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>Radius</template>
          {{ displayNumber(radius) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>Error</template>
          {{ displayNumber(finalError) }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
  <!-- <div>
    <ul>
      <li v-for="item in iterationHistory" :key="item.x">{{ item.x.toPrecision(6) }}, {{ item.y.toPrecision(6) }},
        {{ item.gx.toPrecision(6) }}, {{ item.gy.toPrecision(6) }}</li>
    </ul>
  </div> -->
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
  title: 'Triangulator',
  description: 'A tool to triangulate points on 2D maps.'
});
const colorMode = useColorMode();
const dark = computed(() => colorMode.value === 'dark');
const canvas: Ref<HTMLCanvasElement | undefined> = ref();
const canvasOpt = {
  scale: 100,
  ox: 400,
  oy: 300
};
type Anchor = {
  x: number;
  y: number;
  dx: number;
  dy: number;
};

function angularErrorSquared(x: number, y: number, anchor: Anchor): number {
  const { x: xi, y: yi, dx, dy } = anchor;
  if (x === xi && y === yi) return 0;
  const phi = Math.atan2(y - yi, x - xi);
  const theta = Math.atan2(dy, dx);
  let error = phi - theta;
  error = Math.atan2(Math.sin(error), Math.cos(error));
  return error * error;
}
function totalAngularErrorSquared(x: number, y: number, anchors: Anchor[]): number {
  return anchors.reduce((sum, anchor) => sum + angularErrorSquared(x, y, anchor), 0);
}
function getAABB(anchors: Anchor[]): { minX: number, minY: number, maxX: number, maxY: number } {
  if (anchors.length === 0) return { minX: 0, minY: 0, maxX: 0, maxY: 0 };
  const minX = Math.min(...anchors.map(a => a.x));
  const minY = Math.min(...anchors.map(a => a.y));
  const maxX = Math.max(...anchors.map(a => a.x));
  const maxY = Math.max(...anchors.map(a => a.y));
  return { minX, minY, maxX, maxY };
}
function gradientDescent(
  anchors: Anchor[],
  initialLearningRate: number,
  tolerance: number,
  maxIterations: number,
  onCancel: (func: () => any) => void
): { x: number, y: number } {
  if (!import.meta.client) return { x: 0, y: 0 };
  const AABB = getAABB(anchors);
  let x = (AABB.minX + AABB.maxX) / 2;
  let y = (AABB.minY + AABB.maxY) / 2;
  const L = Math.hypot(AABB.maxX - AABB.minX, AABB.maxY - AABB.minY);

  let prevError = Infinity;
  let error = totalAngularErrorSquared(x, y, anchors);
  let learningRate = initialLearningRate;
  let history = [];
  let iteration = 0;
  onCancel(() => iteration = maxIterations);
  for (; iteration < maxIterations; iteration++) {
    prevError = error;
    let gx = anchors.reduce((sum, anchor) => {
      const { x: xi, y: yi, dx, dy } = anchor;
      if (x === xi && y === yi) return sum;
      const phi = Math.atan2(y - yi, x - xi);
      const theta = Math.atan2(dy, dx);
      let error = phi - theta;
      error = Math.atan2(Math.sin(error), Math.cos(error));
      return sum + 2 * error * (-Math.sin(phi)) * L / (Math.hypot(x - xi, y - yi));
    }, 0);
    let gy = anchors.reduce((sum, anchor) => {
      const { x: xi, y: yi, dx, dy } = anchor;
      if (x === xi && y === yi) return sum;
      const phi = Math.atan2(y - yi, x - xi);
      const theta = Math.atan2(dy, dx);
      let error = phi - theta;
      error = Math.atan2(Math.sin(error), Math.cos(error));
      return sum + 2 * error * (Math.cos(phi)) * L / (Math.hypot(x - xi, y - yi));
    }, 0);
    history.push({ x, y, gx, gy });
    x -= learningRate * gx;
    y -= learningRate * gy;
    error = totalAngularErrorSquared(x, y, anchors);
    learningRate = error < prevError ? learningRate * rewardMultiplier.value : learningRate * errorMultiplier.value;
    if (learningRate > L) learningRate = L;
    finalError.value = error;
    if (Math.abs(prevError - error) < tolerance) break;
    prevError = error;
  }
  iterationHistory.value = history;
  if (roundTargetNumber.value) {
    x = Math.round(x);
    y = Math.round(y);
  }
  return { x, y };
}
function perpendicularDistance(x: number, y: number, anchor: Anchor): number {
  const { x: xi, y: yi, dx, dy } = anchor;
  const length = Math.hypot(dx, dy);
  if (length === 0) return 0;
  const normalizedDx = dx / length;
  const normalizedDy = dy / length;
  const distance = Math.abs((normalizedDy) * (x - xi) - (normalizedDx) * (y - yi));
  return distance;
}
function radiusOfProbability(x: number, y: number, anchors: Anchor[]): number {
  const distances = anchors.map(anchor => perpendicularDistance(x, y, anchor));
  return Math.max(...distances);
}
let _frameId = -1;
const colors = computed(() => dark.value ? {
  target: '#f00',
  fore: '#fff',
  grid: '#fff2',
  gridHigh: '#fff7',
  anchor: '#eee',
  anchorSelect: '#99f',
  anchorHover: '#9f9',
} : {
  target: '#f00',
  fore: '#000',
  grid: '#0002',
  gridHigh: '#0007',
  anchor: '#222',
  anchorSelect: '#22f',
  anchorHover: '#2f2',
});
function drawGrid(ctx: CanvasRenderingContext2D) {
  ctx.setLineDash([]);
  ctx.strokeStyle = colors.value.grid;
  ctx.lineWidth = 1;
  const { scale, ox, oy } = canvasOpt;
  const step = Math.pow(2, Math.ceil(Math.log(100 / scale) / Math.log(2)));
  const startx = Math.ceil(-ox / scale / step) * step;
  const starty = Math.ceil(-oy / scale / step) * step;
  for (let x = startx; x * scale + ox < ctx.canvas.width; x += step) {
    ctx.strokeStyle = x === 0 ? colors.value.gridHigh : colors.value.grid;
    ctx.beginPath();
    ctx.moveTo(x * scale + ox, 0);
    ctx.lineTo(x * scale + ox, ctx.canvas.height);
    ctx.stroke();
  }
  for (let y = starty; y * scale + oy < ctx.canvas.height; y += step) {
    ctx.strokeStyle = y === 0 ? colors.value.gridHigh : colors.value.grid;
    ctx.beginPath();
    ctx.moveTo(0, y * scale + oy);
    ctx.lineTo(ctx.canvas.width, y * scale + oy);
    ctx.stroke();
  }
  // draw scale at bottom right
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'right';
  ctx.fillStyle = colors.value.fore;
  ctx.strokeStyle = colors.value.fore;
  ctx.fillText(`${step}`, ctx.canvas.width - 30, ctx.canvas.height - 30);
  // draw a line representing step size, with two ends
  ctx.beginPath();
  ctx.moveTo(ctx.canvas.width - 20, ctx.canvas.height - 30);
  ctx.lineTo(ctx.canvas.width - 20, ctx.canvas.height - 20);
  ctx.lineTo(ctx.canvas.width - 20 - step * scale, ctx.canvas.height - 20);
  ctx.lineTo(ctx.canvas.width - 20 - step * scale, ctx.canvas.height - 30);
  ctx.stroke();
}
function startRender() {
  const ctx = canvas.value?.getContext('2d');
  const { scale, ox, oy } = canvasOpt;
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  drawGrid(ctx);
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  const { fore, anchor, anchorSelect, anchorHover, target } = colors.value;
  anchors.forEach(a => {
    const tx = a.x * scale + ox, ty = a.y * scale + oy;
    ctx.fillStyle = a === selectedAnchor.value ? anchorSelect : a === hoverAnchor.value ? anchorHover : anchor;
    ctx.strokeStyle = (a === selectedAnchorLine.value ? anchorSelect : a === hoverAnchorLine.value ? anchorHover : anchor) + '9';
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx + a.dx * 1e4, ty + a.dy * 1e4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(tx, ty, 5, 0, 2 * Math.PI);
    ctx.fill();
  });

  if (showOptimizationPath.value) {
    ctx.fillStyle = fore;
    ctx.strokeStyle = fore + '9';
    ctx.beginPath();
    for (let i = 0; i < iterationHistory.value.length - 1; i++) {
      const { x, y } = iterationHistory.value[i];
      const { x: nx, y: ny } = iterationHistory.value[i + 1];
      ctx.moveTo(x * scale + ox, y * scale + oy);
      ctx.lineTo(nx * scale + ox, ny * scale + oy);
    }
    ctx.stroke();
  }
  // ctx.setLineDash([]);
  ctx.fillStyle = target;
  ctx.strokeStyle = target;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(result.value.x * scale + ox, result.value.y * scale + oy, radius.value * scale, 0, 2 * Math.PI);
  ctx.moveTo(result.value.x * scale + ox - 5, result.value.y * scale + oy);
  ctx.lineTo(result.value.x * scale + ox + 5, result.value.y * scale + oy);
  ctx.moveTo(result.value.x * scale + ox, result.value.y * scale + oy - 5);
  ctx.lineTo(result.value.x * scale + ox, result.value.y * scale + oy + 5);
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.font = '20px "STIX Two Math", "Cambria Math", "Times New Roman", serif';
  ctx.fillText(`(${displayNumber(result.value.x)}, ${displayNumber(result.value.y)})`, result.value.x * scale + ox, result.value.y * scale + oy - 10);
  _frameId = requestAnimationFrame(startRender);
}
function getxy(e: MouseEvent): [number, number] {
  const rect = (e.target as Element).getBoundingClientRect();
  const x = e.clientX - rect.left; //x position within the element.
  const y = e.clientY - rect.top;  //y position within the element.
  return [x, y];
}
const hoverAnchor: Ref<Anchor | undefined> = ref(undefined);
const hoverAnchorLine: Ref<Anchor | undefined> = ref(undefined);
const selectedAnchor: Ref<Anchor | undefined> = ref(undefined);
const selectedAnchorLine: Ref<Anchor | undefined> = ref(undefined);
const mouseDownPos: Ref<[number, number] | undefined> = ref(undefined);
function getAnchor(x: number, y: number): Anchor | undefined {
  return anchors.find(anchor => Math.hypot(anchor.x * canvasOpt.scale + canvasOpt.ox - x, anchor.y * canvasOpt.scale + canvasOpt.oy - y) < 5);
}
function getAnchorLine(x: number, y: number): Anchor | undefined {
  const tx = (x - canvasOpt.ox) / canvasOpt.scale, ty = (y - canvasOpt.oy) / canvasOpt.scale;
  return anchors.find(anchor => perpendicularDistance(tx, ty, anchor) * canvasOpt.scale < 5 && (anchor.dx === 0 || Math.sign(anchor.dx) === Math.sign(tx - anchor.x)) && (anchor.dy === 0 || Math.sign(anchor.dy) === Math.sign(ty - anchor.y)));
}
function canvasDown(e: MouseEvent) {
  mouseDownPos.value = getxy(e);
  selectedAnchor.value = getAnchor(mouseDownPos.value[0], mouseDownPos.value[1]);
  selectedAnchorLine.value = getAnchorLine(mouseDownPos.value[0], mouseDownPos.value[1]);
}
function canvasUp(e: MouseEvent) {
  mouseDownPos.value = undefined;
}
function canvasMove(e: MouseEvent) {
  const [x, y] = getxy(e);

  if (mouseDownPos.value) {
    const dx = x - mouseDownPos.value[0];
    const dy = y - mouseDownPos.value[1];
    mouseDownPos.value = [x, y];
    if (selectedAnchor.value) {
      selectedAnchor.value.x += dx / canvasOpt.scale;
      selectedAnchor.value.y += dy / canvasOpt.scale;
    } else if (selectedAnchorLine.value) {
      const tx = (x - canvasOpt.ox) / canvasOpt.scale, ty = (y - canvasOpt.oy) / canvasOpt.scale;
      selectedAnchorLine.value.dx = tx - selectedAnchorLine.value.x;
      selectedAnchorLine.value.dy = ty - selectedAnchorLine.value.y;
      // normalize
      const length = Math.hypot(selectedAnchorLine.value.dx, selectedAnchorLine.value.dy);
      selectedAnchorLine.value.dx /= length;
      selectedAnchorLine.value.dy /= length;
    } else {
      canvasOpt.ox += dx;
      canvasOpt.oy += dy;
    }
  } else {
    hoverAnchor.value = getAnchor(x, y);
    hoverAnchorLine.value = getAnchorLine(x, y);
  }
}
function canvasWheel(e: WheelEvent) {
  const [x, y] = getxy(e);
  const scale = Math.exp(-e.deltaY / 500);
  canvasOpt.scale *= scale;
  canvasOpt.ox = x + (canvasOpt.ox - x) * scale;
  canvasOpt.oy = y + (canvasOpt.oy - y) * scale;
  e.preventDefault();
}
function canvasLeave(e: MouseEvent) {
  mouseDownPos.value = undefined;
}

const newAnchor = ref(<Anchor>{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0
});
const anchors = reactive<Anchor[]>([
  { x: 0, y: 0, dx: 1, dy: 1 },
  { x: 1, y: 0, dx: 0, dy: 1 },
  { x: 0, y: 1, dx: 1, dy: 0 }
]);
const canvasCursor = computed(() => {
  if (mouseDownPos.value) {
    if (selectedAnchor.value || selectedAnchor.value) return 'grabbing';
    return 'grabbing';
  } else {
    if (hoverAnchor.value || hoverAnchorLine.value) return 'grab';
  }
  return 'default';
});
const showOptions = ref(false);
const roundTargetNumber = ref(false);
const showOptimizationPath = ref(false);
const tolerance = ref(1e-9);
const maxIterations = ref(100);
const initialLearningRate = ref(0.1);
const rewardMultiplier = ref(1.2);
const errorMultiplier = ref(0.2);

const iterationsUsed = computed(() => iterationHistory.value.length);
const finalError = ref(0);
const evaluating = ref(false);
const result = computedAsync(
  async (onCancel) => gradientDescent(anchors, initialLearningRate.value, tolerance.value, maxIterations.value, onCancel),
  { x: 1, y: 1 },
  evaluating,
);
const iterationHistory = ref(<{ x: number, y: number, gx: number, gy: number }[]>[]);
const radius = computed(() => radiusOfProbability(result.value.x, result.value.y, anchors));
onMounted(() => {
  if (import.meta.client) _frameId = requestAnimationFrame(startRender)
});
onUnmounted(() => {
  if (import.meta.client) cancelAnimationFrame(_frameId);
});
</script>

<style scoped lang="scss">
#canvas {
  border: 1px solid var(--el-border-color);
  cursor: v-bind(canvasCursor)
}
</style>