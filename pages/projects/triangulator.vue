<template>
  <div class="flex h-600px">
    <canvas ref="canvas" width="800" height="600" id="canvas" @mousedown="canvasDown" @mousemove="canvasMove"
      @mouseup="canvasUp" @wheel="canvasWheel" @mouseleave="canvasLeave" @mouseenter="canvasEnter"></canvas>
    <el-scrollbar id="controls" v-auto-animate>
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
            <td><el-checkbox v-model="anchor.disabled"
                :label="(index + 1) + ((selectedAnchor === anchor || selectedAnchorLine == anchor) ? ' ←' : '')" />
            </td>
            <td><math-field v-model="anchor.x" hide-eval :disabled='anchor.disabled' /></td>
            <td><math-field v-model="anchor.y" hide-eval :disabled='anchor.disabled' /></td>
            <td><math-field v-model="anchor.dx" hide-eval :disabled='anchor.disabled' /></td>
            <td><math-field v-model="anchor.dy" hide-eval :disabled='anchor.disabled' /></td>
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

        <el-form-item label="Distance Falloff">
          <el-select v-model="distanceFalloff">
            <el-option v-for="item in falloffOptions" :key="item.label" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="Error Graph">
          <el-select v-model="errorGraph">
            <el-option v-for="item in errorGraphOptions" :key="item.label" :label="item.label" :value="item.value" />
          </el-select>
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
    </el-scrollbar>
  </div>
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
  _scale: 100,
  ox: 400,
  _ox: 400,
  oy: 300,
  _oy: 400,
};
type Anchor = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  disabled?: boolean;
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
  const falloff = distanceFalloff.value;
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
      let f = falloff === 0 ? 1 : 1 / Math.pow(Math.hypot(x - xi, y - yi), falloff);
      return sum + 2 * error * (-Math.sin(phi)) * L * f;
    }, 0);
    let gy = anchors.reduce((sum, anchor) => {
      const { x: xi, y: yi, dx, dy } = anchor;
      if (x === xi && y === yi) return sum;
      const phi = Math.atan2(y - yi, x - xi);
      const theta = Math.atan2(dy, dx);
      let error = phi - theta;
      error = Math.atan2(Math.sin(error), Math.cos(error));
      let f = falloff === 0 ? 1 : 1 / Math.pow(Math.hypot(x - xi, y - yi), falloff);
      return sum + 2 * error * (Math.cos(phi)) * L * f;
    }, 0);
    const h = { x, y, gx, gy, error: 0 };
    x -= learningRate * gx;
    y -= learningRate * gy;
    h.error = error = totalAngularErrorSquared(x, y, anchors);
    history.push(h);
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
function findIntersection(width: number, height: number, x1: number, y1: number, x2: number, y2: number) {
  const yAtX0 = y1 + ((0 - x1) * (y2 - y1)) / (x2 - x1);
  if (yAtX0 >= 0 && yAtX0 <= height && x1 <= 0) return [0, yAtX0];
  const yAtXW = y1 + ((width - x1) * (y2 - y1)) / (x2 - x1);
  if (yAtXW >= 0 && yAtXW <= height && x1 > width) return [width, yAtXW];
  const xAtY0 = x1 + ((0 - y1) * (x2 - x1)) / (y2 - y1);
  if (xAtY0 >= 0 && xAtY0 <= width && y1 <= 0) return [xAtY0, 0];
  const xAtYH = x1 + ((height - y1) * (x2 - x1)) / (y2 - y1);
  if (xAtYH >= 0 && xAtYH <= width && y1 > height) return [xAtYH, height];
  return undefined;
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
  anchorDisable: '#444',
} : {
  target: '#f00',
  fore: '#000',
  grid: '#0002',
  gridHigh: '#0007',
  anchor: '#222',
  anchorSelect: '#22f',
  anchorHover: '#2f2',
  anchorDisable: '#bbb',
});
function drawErrorGraph(ctx: CanvasRenderingContext2D) {
  if ((!iterationHistory.value) || iterationHistory.value.length === 0) return;
  const opt = errorGraph.value;
  if (opt === 0) return;
  ctx.setLineDash([]);
  ctx.strokeStyle = colors.value.fore;
  ctx.lineWidth = 1;
  ctx.save()
  ctx.translate(0, ctx.canvas.height - 50);
  // ctx.rect(0, 0, 100, 50);
  // ctx.stroke();

  const trans =
    opt === 1 ? (n: number) => n :
      opt === 2 ? (n: number) => Math.log(n) :
        opt === 3 ? (n: number) => Math.exp(n) :
          opt === -1 ? (n: number) => 1 / n : (n: number) => n;
  const maxError = Math.max(...iterationHistory.value.map(h => trans(h.error)));
  const minError = Math.min(...iterationHistory.value.map(h => trans(h.error)));
  const norm = (n: number) => (n - minError) / (maxError - minError);
  ctx.beginPath();
  ctx.moveTo(0, 50 - norm(trans(iterationHistory.value[0].error)) * 50);
  iterationHistory.value.forEach((h, i) => {
    ctx.lineTo(i * 100 / iterationHistory.value.length, 50 - 50 * norm(trans(h.error)));
  });
  ctx.stroke();
  ctx.restore();
}
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
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  drawGrid(ctx);
  drawErrorGraph(ctx);
  ctx.lineWidth = 2;
  const { fore, anchor, anchorSelect, anchorHover, anchorDisable, target } = colors.value;
  anchors.forEach(a => {
    ctx.setLineDash([10, 10]);
    let [tx, ty] = tranW2C(a.x, a.y);

    ctx.fillStyle = a.disabled ? anchorDisable : a === selectedAnchor.value ? anchorSelect : a === hoverAnchor.value ? anchorHover : anchor;
    ctx.strokeStyle = (a.disabled ? anchorDisable : a === selectedAnchorLine.value ? anchorSelect : a === hoverAnchorLine.value ? anchorHover : anchor) + '9';
    let stroke = false;
    if (tx < 0 || tx > ctx.canvas.width || ty < 0 || ty > ctx.canvas.height) {
      stroke = true;
      const i = findIntersection(ctx.canvas.width, ctx.canvas.height, tx, ty, tx + a.dx * 1e4, ty - a.dy * 1e4);
      if (i) [tx, ty] = i;
      else return;
    }
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx + a.dx * 1e4, ty - a.dy * 1e4);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(tx, ty, 5, 0, 2 * Math.PI);
    if (stroke) ctx.stroke();
    else ctx.fill();
  });

  if (showOptimizationPath.value) {
    ctx.fillStyle = fore;
    ctx.strokeStyle = fore + '9';
    ctx.beginPath();
    for (let i = 0; i < iterationHistory.value.length - 1; i++) {
      const { x, y } = iterationHistory.value[i];
      const { x: nx, y: ny } = iterationHistory.value[i + 1];
      const [tx, ty] = tranW2C(x, y);
      const [tnx, tny] = tranW2C(nx, ny);
      ctx.moveTo(tx, ty);
      ctx.lineTo(tnx, tny);
    }
    ctx.stroke();
  }
  // ctx.setLineDash([]);
  ctx.fillStyle = target;
  ctx.strokeStyle = target;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const [rtx, rty] = tranW2C(result.value.x, result.value.y);
  ctx.arc(rtx, rty, radius.value * canvasOpt.scale, 0, 2 * Math.PI);
  ctx.moveTo(rtx - 5, rty);
  ctx.lineTo(rtx + 5, rty);
  ctx.moveTo(rtx, rty - 5);
  ctx.lineTo(rtx, rty + 5);
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.font = '20px "STIX Two Math", "Cambria Math", "Times New Roman", serif';
  ctx.fillText(`(${displayNumber(result.value.x)}, ${displayNumber(result.value.y)})`, rtx, rty - 10);
  rescale();
  _frameId = requestAnimationFrame(startRender);
}
function getxy(e: MouseEvent): [number, number] {
  const rect = (e.target as Element).getBoundingClientRect();
  const x = e.clientX - rect.left; //x position within the element.
  const y = e.clientY - rect.top;  //y position within the element.
  return [x, y];
}
function tranC2W(x: number, y: number): [number, number] {
  return [(x - canvasOpt.ox) / canvasOpt.scale, (-y + canvasOpt.oy) / canvasOpt.scale];
}
function tranW2C(x: number, y: number): [number, number] {
  return [x * canvasOpt.scale + canvasOpt.ox, -y * canvasOpt.scale + canvasOpt.oy];
}
function hypot([x1, y1]: [number, number], [x2, y2]: [number, number]): number {
  return Math.hypot(x1 - x2, y1 - y2);
}
const hoverAnchor: Ref<Anchor | undefined> = ref(undefined);
const hoverAnchorLine: Ref<Anchor | undefined> = ref(undefined);
const selectedAnchor: Ref<Anchor | undefined> = ref(undefined);
const selectedAnchorLine: Ref<Anchor | undefined> = ref(undefined);
const mouseDownPos: Ref<[number, number] | undefined> = ref(undefined);
function getAnchor(x: number, y: number): Anchor | undefined {
  return anchors.find(anchor => hypot(tranW2C(anchor.x, anchor.y), [x, y]) < 5);
}
function getAnchorLine(x: number, y: number): Anchor | undefined {
  const [tx, ty] = tranC2W(x, y);
  return anchors.find(anchor => perpendicularDistance(tx, ty, anchor) * canvasOpt.scale < 5 && (tx - anchor.x) * anchor.dx + (ty - anchor.y) * anchor.dy > 0);
}
function canvasDown(e: MouseEvent) {
  mouseDownPos.value = getxy(e);
  selectedAnchor.value = getAnchor(mouseDownPos.value[0], mouseDownPos.value[1]);
  if (!selectedAnchor.value) selectedAnchorLine.value = getAnchorLine(mouseDownPos.value[0], mouseDownPos.value[1]);
  else selectedAnchorLine.value = undefined;
  e.preventDefault();
}
function canvasUp(e: MouseEvent) {
  mouseDownPos.value = undefined;
  e.preventDefault();
}
function canvasMove(e: MouseEvent) {
  const [x, y] = getxy(e);

  if (mouseDownPos.value) {
    const dx = x - mouseDownPos.value[0];
    const dy = y - mouseDownPos.value[1];
    mouseDownPos.value = [x, y];
    if (selectedAnchor.value) {
      selectedAnchor.value.x += dx / canvasOpt.scale;
      selectedAnchor.value.y -= dy / canvasOpt.scale;
    } else if (selectedAnchorLine.value) {
      const [tx, ty] = tranC2W(x, y);
      selectedAnchorLine.value.dx = tx - selectedAnchorLine.value.x;
      selectedAnchorLine.value.dy = ty - selectedAnchorLine.value.y;
      // normalize
      const length = Math.hypot(selectedAnchorLine.value.dx, selectedAnchorLine.value.dy);
      selectedAnchorLine.value.dx /= length;
      selectedAnchorLine.value.dy /= length;
    } else {
      canvasOpt._ox = (canvasOpt.ox += dx);
      canvasOpt._oy = (canvasOpt.oy += dy);
    }
  } else {
    hoverAnchor.value = getAnchor(x, y);
    hoverAnchorLine.value = getAnchorLine(x, y);
  }
  e.preventDefault();
}
function canvasWheel(e: WheelEvent) {
  const [x, y] = getxy(e);
  const scale = Math.exp(-e.deltaY / 500);
  canvasOpt._scale *= scale;
  canvasOpt._ox = x + (canvasOpt._ox - x) * scale;
  canvasOpt._oy = y + (canvasOpt._oy - y) * scale;
  e.preventDefault();
}
function rescale() {
  // if (canvasOpt.scale === canvasOpt._scale) return;
  canvasOpt.scale = (canvasOpt.scale + canvasOpt._scale) / 2;
  canvasOpt.ox = (canvasOpt.ox + canvasOpt._ox) / 2;
  canvasOpt.oy = (canvasOpt.oy + canvasOpt._oy) / 2;
  // console.log("rescale", scale, canvasOpt._scale);
}
function canvasEnter(e: MouseEvent) {
  // mouseDownPos.value = undefined;
}
function canvasLeave(e: MouseEvent) {
  // mouseDownPos.value = undefined;
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
const distanceFalloff = ref(1);
const falloffOptions = [
  { label: 'None', value: 0 },
  { label: 'Linear', value: 1 },
  { label: 'Quadratic', value: 2 },
  { label: 'Cubic', value: 3 },
  { label: 'Quartic', value: 4 },
  { label: 'Quintic', value: 5 },
  { label: 'Inverse', value: -1 },
];
const errorGraph = ref(0);
const errorGraphOptions = [
  { label: 'Hide', value: 0 },
  { label: 'Linear', value: 1 },
  { label: 'Logarithmic', value: 2 },
  { label: 'Exponential', value: 3 },
  { label: 'Inverse', value: -1 },
];
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
const iterationHistory = ref(<{ x: number, y: number, gx: number, gy: number, error: number }[]>[]);
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
  width: 800px;
  height: 600px;
  border: 1px solid var(--el-border-color);
  cursor: v-bind(canvasCursor)
}
</style>