<template>
  <div>
    <el-form @submit.prevent inline>
      <el-text size='small' class="block"><em>3<sup>n</sup> possible implicants will be tried</em></el-text>
      <el-text size='small' class="block">
        <em>DFS used for finding essential prime implicants with max 10<sup>5</sup> iterations.</em>
        <el-tag class="mx-2" v-if="cover.iterations">{{ cover.iterations }}</el-tag>
      </el-text>
      <el-form-item label="Logic Expression">
        <el-input v-model="form.logicExpr" placeholder="!(a + b) == !c && true || false">
          <template #suffix>
            <el-button link @click="evalLogicExpr">Evaluate</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Variable Count">
        <el-select v-model="form.varCount" placeholder="Input Size" :disabled="Boolean(form.logicExpr)">
          <el-option v-for="i in 5" :key="i" :label="i + 1" :value="i + 1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Mode">
        <el-select v-model="form.mode" placeholder="SoP or PoS">
          <el-option label="Product of Sum" value="pos"></el-option>
          <el-option label="Sum of Product" value="sop"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Prune (slow)">
        <el-checkbox v-model="form.onlyEssential"></el-checkbox>
      </el-form-item>
      <el-form-item label="Hide Latex">
        <el-checkbox v-model="form.hideLatex"></el-checkbox>
      </el-form-item>
      <el-form-item v-if="!Boolean(form.logicExpr)">
        <el-button @click="complementify">Complement</el-button>
        <el-button @click="randomize">Randomize</el-button>
      </el-form-item>
      <el-form-item label="Expression" :error="formErrors['expr']" class="w-full">
        <el-input v-model="form.expression" placeholder="m(0,1,2,3)+d(4,5,6)" :disabled="Boolean(form.logicExpr)">
          <template #prefix>Σ</template>
        </el-input>
      </el-form-item>
      <div class="flex gap-2">
        <el-tag type="danger" v-for="k in Object.keys(formErrors).filter(e => formErrors[e])">
          {{ k }} : {{ formErrors[k] }}
        </el-tag>
      </div>
    </el-form>
    <div class='flex gap-4 flex-col lg:flex-row items-center'>
      <div ref="kmapTables" class="grid grid-cols-2 gap-1">
        <table v-for="(zmap, z) in kmap.rows" class="kmap relative">
          <thead>
            <tr v-if="kmap.depth > 1">
              <th v-html='katex.renderToString(`${kmap.z_heads[z]}`)'></th>
              <th colspan="4"
                v-html="katex.renderToString(varName(kmap.inputSize - 4) + ' ' + varName(kmap.inputSize - 3))">
              </th>
            </tr>
            <tr>
              <th
                v-html="kmap.depth > 1 ? katex.renderToString(varName(kmap.inputSize - 2) + ' ' + varName(kmap.inputSize - 1)) : ''">
              </th>
              <th v-for="h in kmap.h_heads" :key="h">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in zmap" :key="i">
              <th>{{ kmap.v_heads[i] }}</th>
              <td v-for="(cell, j) in row" :key="j">
                <ruby @click="updateExpr(cell.label, increm(truthTable.rows[cell.label]))" :class="'bit-' + cell.bit">
                  {{ cell.bit }}<rt>{{ cell.label }}</rt>
                </ruby>
              </td>
            </tr>
          </tbody>
          <div v-for="rect in implicantsRects.filter(imp => imp.z === z)" :style="{
            position: 'absolute',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            top: `${rect.y}px`, left: `${rect.x}px`, width: `${rect.width}px`, height: `${rect.height}px`,
            borderTop: rect.borders.top ? `1px solid ${rect.color}` : 'none',
            borderRight: rect.borders.right ? `1px solid ${rect.color}` : 'none',
            borderBottom: rect.borders.bottom ? `1px solid ${rect.color}` : 'none',
            borderLeft: rect.borders.left ? `1px solid ${rect.color}` : 'none',
          }">
          </div>
        </table>
      </div>
      <div>
        <el-tag type="danger">Cost: {{ cover.cost }}</el-tag>
        <div class="implicants-katex" v-html="implicantKatex">
        </div>
      </div>
    </div>

    <!--<div class="">
      <canvas ref="canvas" width="800" height="600"></canvas>
    </div>-->
    <el-table :data="truthTable.rows" :height="500">
      <el-table-column v-for="i in truthTable.inputSize" :key="i" align="center">
        <template #default="{ row, $index }">
          <el-tag v-if="$index & (1 << (truthTable.inputSize - i))" type="success">
            1
          </el-tag>
          <el-tag v-else type="danger">
            0
          </el-tag>
        </template>
        <template #header>
          <span v-html="katex.renderToString(varName(i - 1))"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" class="max-w-full">
        <template #default="{ row, $index }">
          <el-tag v-if="row === '1'" type="success">
            1
          </el-tag>
          <el-tag v-else-if="row === '0'" type="danger">
            0
          </el-tag>
          <el-tag v-else type="info">
            ∅
          </el-tag>
        </template>
        <template #header>
          <span v-html="katex.renderToString('f(x)')"></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import katex from 'katex';
import 'katex/dist/katex.css';
import { createCover, kMap, optimizeCover, solveKMap, SoP, type Bit, type Cover, type KMap, type TruthTable } from '~/libraries/logic-expr';
import { generateTruthTable, parseLogicExpression } from '~/libraries/logic-expr/expression';
import { drawImplicants, type DrawImplicantRect } from '~/libraries/logic-expr/render';
definePageMeta({
  title: "Digital Logic",
  description: "Utilities for digital logic",
  image: '/img/digital-logic.webp',
});
const canvas = ref<HTMLCanvasElement | null>(null);
const kmapTables = ref<HTMLTableElement | null>(null);
const formErrors = reactive({} as any);
const form = reactive({
  varCount: 4,
  onlyEssential: false,
  mode: 'sop' as 'sop' | 'pos',
  hideLatex: false,
  expression: 'm(1,3,4,9,11,13,15)+d(5,6,7,14)',
  logicExpr: '',
});
const vars = ref<string[]>([]);
function varName(i: number) {
  if (form.logicExpr) return (vars.value[i]?.replace(/(\d+)$/, '_{$1}')) ?? `x_{${i + 1}}`;
  else return `x_{${i + 1}}`;
}
function evalLogicExpr() {
  const expr = parseLogicExpression(form.logicExpr);
  vars.value = expr.variables;
  form.varCount = expr.variables.length;
  form.expression = toExpression(generateTruthTable(expr));
}
function toExpression(rows: Bit[]): string {
  const m = rows.map((v, i) => v === '1' ? i : -1).filter(i => i !== -1);
  const d = rows.map((v, i) => v === 'x' ? i : -1).filter(i => i !== -1);
  return 'm(' + m.join(',') + ')' + (d.length ? '+d(' + d.join(',') + ')' : '');
}
function complementify() {
  const rows = [...truthTable.value.rows];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === '0') rows[i] = '1';
    else if (rows[i] === '1') rows[i] = '0';
  }
  form.expression = toExpression(rows);
}
function randomize() {
  const includeDC = Math.random() > 0.5;
  const rows: Bit[] = Array.from({ length: 2 ** form.varCount }, () => Math.random() > 0.5 ? '1' : '0');
  if (includeDC)
    for (let i = 0; i < rows.length; i++) if (Math.random() > 0.8) rows[i] = 'x';
  form.expression = toExpression(rows);
}
function updateExpr(i: number, b: Bit) {
  if (form.logicExpr) return;
  const rows = [...truthTable.value.rows];
  rows[i] = b;
  form.expression = toExpression(rows);
}
function increm(bit: Bit): Bit {
  return bit === '0' ? '1' : bit === '1' ? 'x' : '0';
}
const truthTable = computed<TruthTable>(() => {
  try {
    formErrors['expr'] = null;
    return SoP(form.expression, form.varCount)
  } catch (e: any) {
    formErrors['expr'] = e.message;
    return { inputSize: 0, rows: [], truths: [] };
  }
});
const kmap = computed<KMap>(() => {
  try {
    formErrors['kmap'] = null;
    return kMap(truthTable.value);
  } catch (e: any) {
    formErrors['kmap'] = e.message;
    return { width: 0, height: 0, depth: 0, h_heads: [], v_heads: [], z_heads: [], rows: [], inputSize: 0 };
  }
});
const cover = computedAsync<Cover>(async () => {
  try {
    formErrors['implicants'] = null;
    let cover = solveKMap(kmap.value, truthTable.value, form.mode === 'sop' ? '1' : '0');
    if (form.onlyEssential) cover = optimizeCover(cover);
    return cover;
  } catch (e: any) {
    formErrors['implicants'] = e.message;
    return createCover([], [], [], 'sop');
  }
}, createCover([], [], [], 'sop'));
const implicantsRects = ref<DrawImplicantRect[]>([]);
watch(cover, (cover) => {
  try {
    // if (canvas.value) drawCircuit(canvas.value, coverToCircuit(cover));
  } catch (e) {
    console.log(e);
  }
  setTimeout(() => {
    try {
      formErrors['implicantsRects'] = null;
      implicantsRects.value = drawImplicants(kmapTables.value!.children, kmap.value.width, kmap.value.height, cover.implicants
        .filter((_, i) => cover.included[i]));
    } catch (e: any) {
      formErrors['implicantsRects'] = e.message;
    }
  }, 50);
}, { immediate: true });
const implicantKatex = computed(() => {
  const imps = cover.value.implicants.filter((_, i) => cover.value.included[i]);
  let latex;
  const T = form.mode === 'sop' ? '1' : '0';
  const aT = form.mode === 'sop' ? '0' : '1';
  if (imps.length === 0) latex = form.mode === 'sop' ? '0' : '1';
  else if (imps.length === 1 && imps[0].bits.every(b => b === 'x')) latex = form.mode === 'sop' ? '1' : '0';
  else latex = imps.map((imp, i) => {
    const term = imp.bits.map((b, i) => b === aT ? `\\bar{${varName(i)}}` : b === T ? varName(i) : '')
      .filter(i => i)
      .join(form.mode === 'sop' ? '' : '+');
    const end = (i + 1) % 3 === 0 ? '\\\\\\\n&' : '';
    if (form.mode === 'sop') return term + end;
    else return `(${term})` + end;
  }).join(form.mode === 'sop' ? ' + ' : ' ');
  latex = "f&=" + latex;
  latex = `\\begin{align*}\n${latex}\n\\end{align*}`;
  return katex.renderToString(latex, {
    displayMode: true,
    output: 'htmlAndMathml',
    throwOnError: false
  }) + (form.hideLatex ? '' : "<span class='block font-mono text-xs max-w-4xl'>$$<br/>" + latex + "<br/>$$</span>");
});
//m(0,3,4,7,9,10,12,15)+d(6)
//m(0,1,2,5,6,7,9,10,11,12,13,14,17,18,19,21,22,23,26,28,29,30)
</script>

<style lang="scss" scoped>
.kmap {
  user-select: none;
  margin-bottom: 20px;
  border-collapse: collapse;

  td {
    box-sizing: content-box;
    border: 1px solid #9992;
    text-align: center;

    ruby {
      width: 2em;
      height: 2em;
      display: block;

      &:hover {
        background-color: #9992;
      }

      &.bit-0 {
        color: #a00a;
      }

      &.bit-1 {
        color: #0a0a;
      }

      &.bit-x {
        color: #999a;
      }
    }
  }

  th:first-child {
    border: none;
    padding-right: 10px;
  }
}

.el-select {
  min-width: 10em;
}
</style>
<!-- TODO: add intersection detection system to better calculate padding -->