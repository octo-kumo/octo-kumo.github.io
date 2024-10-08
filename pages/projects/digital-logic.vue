<template>
  <div>
    <el-form @submit.prevent inline>
      <el-text size='small' class="block"><em>3<sup>n</sup> possible implicants will be tried</em></el-text>
      <el-text size='small' class="block">
        <em>DFS used for finding essential prime implicants with max 10<sup>5</sup> iterations.</em>
        <el-tag class="mx-2" v-if="form._iterations !== 0">{{ form._iterations }}</el-tag>
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
    <el-table :data="truthTable.rows" :height="500">
      <el-table-column v-for="i in truthTable.inputSize" :key="i" :label="'x' + (i - 1)" align="center">
        <template #default="{ row, $index }">
          {{ $index & (1 << (truthTable.inputSize - i)) ? '1' : '0' }} </template>
      </el-table-column>
      <el-table-column label="f(x)" align="center">
        <template #default="{ row, $index }">
          {{ row }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import katex from 'katex';
import 'katex/dist/katex.css';
import { generateTruthTable, parseLogicExpression } from '~/libraries/logic-expr';
definePageMeta({
  title: "Digital Logic",
  description: "Utilities for digital logic",
  image: '/img/digital-logic.webp',
});

type Bit = '0' | '1' | 'x';
type Implicant = {
  bits: Bit[],
  cells: number[],
  area: number
}; // same length as inputSize
type ImplicantRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  zs: number[];
};
type DrawImplicantRect = {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  borders: { top: boolean, right: boolean, bottom: boolean, left: boolean };
  color: string;
};
type TruthTable = {
  inputSize: number;
  rows: Bit[];
  truths: number[];
};
type KMap = {
  inputSize: number;
  width: number;
  height: number;
  depth: number;
  h_heads: string[];
  v_heads: string[];
  z_heads: string[];
  rows: { bit: Bit, label: number }[][][];
};

const kmapTables = ref<HTMLTableElement | null>(null);

function increm(bit: Bit): Bit {
  return bit === '0' ? '1' : bit === '1' ? 'x' : '0';
}

function SoP(expression: string): TruthTable {
  // parse expression m(0,1,2,3)+d(4,5,6) etc into truth table
  const regex = /([md])\(([\d\s,\-]+)\)/g;
  const matches = [...expression.matchAll(regex)];
  const trues = [...new Set(matches.filter(([_, type, values]) => type === 'm')
    .flatMap(([_, type, values]) => values.split(',').map(i => parseInt(i))).filter(Number.isInteger))]
  const dCare = [...new Set(matches.filter(([_, type, values]) => type === 'd')
    .flatMap(([_, type, values]) => values.split(',').map(i => parseInt(i))).filter(Number.isInteger))];
  if (dCare.find(i => trues.includes(i)) || trues.find(i => dCare.includes(i)))
    throw new Error('m and d cannot have common values');
  if (trues.find(i => i < 0) || dCare.find(i => i < 0))
    throw new Error('m and d values must be positive');
  const max = Math.max(...trues, ...dCare);
  if (max >= 2 ** form.varCount) throw new Error('m and d values must be within range');
  const inputSize = form.varCount;
  const rows = Array.from({ length: 2 ** inputSize }, (_, i) => {
    return trues.includes(i) ? '1' : dCare.includes(i) ? 'x' : '0' as Bit;
  });
  return { inputSize, rows, truths: trues };
}

function kMap(truthTable: TruthTable): KMap {
  // generate kmap
  const v2 = ['00', '01', '11', '10'], v1 = ['0', '1'], v0 = ['0'];
  // if (truthTable.inputSize < 2 || truthTable.inputSize > 5) throw new Error('KMap only supports 2 to 5 inputs');
  const width = truthTable.inputSize > 2 ? 4 : 2;
  const height = truthTable.inputSize > 3 ? 4 : 2;
  const depth = truthTable.inputSize > 5 ? 4 : truthTable.inputSize > 4 ? 2 : 1;
  const h_heads = width > 2 ? v2 : v1;
  const v_heads = height > 2 ? v2 : v1;
  const z_heads = depth > 2 ? v2 : depth > 1 ? v1 : v0;
  const rows = Array.from({ length: depth }, (_, z) => {
    return Array.from({ length: height }, (_, i) => {
      return Array.from({ length: width }, (_, j) => {
        const I = parseInt(z_heads[z] + h_heads[j] + v_heads[i], 2);
        return { bit: truthTable.rows[I], label: I };
      });
    });
  });
  return { inputSize: truthTable.inputSize, width, height, h_heads, v_heads, z_heads, rows, depth };
}
const formErrors = reactive({} as any);
const form = reactive({
  _iterations: 0,
  varCount: 4,
  onlyEssential: false,
  mode: 'sop' as 'sop' | 'pos',
  hideLatex: false,
  expression: 'm(1,3,4,9,11,13,15)+d(5,6,7,14)',
  logicExpr: '',
});
const vars = ref<string[]>([]);
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
function solveKMap(kmap: KMap, truthTable: TruthTable, target: Bit = '1'): Cover {
  const allPossible = [] as Implicant[];
  // implicant array, [1,0,x] means (x1)(not x2)
  function checkImplicant(bits: Bit[]): Implicant | undefined {
    let TRUE_MASK = 0;
    let FALSE_MASK = 0;
    let area = 2 ** kmap.inputSize;
    for (let i = 0; i < kmap.inputSize; i++) {
      if (bits[i] === '1') TRUE_MASK |= 1 << (kmap.inputSize - i - 1);
      if (bits[i] === '0') FALSE_MASK |= 1 << (kmap.inputSize - i - 1);
      if (bits[i] !== 'x') area /= 2;
    }
    const imp: Implicant = { bits, cells: [], area };
    for (let i = 0; i < truthTable.rows.length; i++) {
      const trueMatch = (i & TRUE_MASK) === TRUE_MASK;
      const falseMatch = (i & FALSE_MASK) === 0;
      if (trueMatch && falseMatch) if (truthTable.rows[i] !== 'x') {
        if (truthTable.rows[i] !== target) return undefined;
        else imp.cells.push(i);
      }
    }
    return imp.cells.length > 0 ? imp : undefined;
  }

  const values: Bit[] = ['0', '1', 'x'];
  const totalCombinations = Math.pow(3, kmap.inputSize);
  for (let i = 0; i < totalCombinations; i++) {
    let num = i * 3;
    const imp = checkImplicant(Array.from({ length: kmap.inputSize }, () => values[(num = Math.floor(num / 3)) % 3]));
    if (imp) allPossible.push(imp);
  }
  const primes = allPossible
    .filter((b, i) => allPossible.every((a, j) => i === j ||
      !((a.area > b.area || a.cells.length > b.cells.length) && b.cells.every(t => a.cells.includes(t)))))
    .filter((a, i, arr) => arr.every((b, j) => i <= j ||
      !(a.area === b.area && a.cells.length === b.cells.length && a.cells.every(t => b.cells.includes(t)))));
  const cover = createCover(primes, new Array(primes.length).fill(true), primes.map(calculateImplicantCost));
  form._iterations = 0;
  if (form.onlyEssential) return optimizeCover(cover);
  else return cover;
}
interface Cover {
  implicants: Implicant[],
  cost: number;         // Total cost of the cover
  coveredCells: Set<number>; // Set of all covered cells
  included: boolean[];  // Boolean array representing included implicants
  costs: number[];      // Precomputed costs for each implicant
}
function createCover(implicants: Implicant[], included: boolean[], costs: number[]): Cover {
  const coveredCells = new Set<number>(implicants.filter((v, i) => included[i]).flatMap(imp => imp.cells));
  return { cost: calculateTotalCost(included, costs), coveredCells, included: [...included], costs, implicants };
}
function calculateTotalCost(included: boolean[], costs: number[]): number {
  let amm = 0;
  const cost = included.reduce((sum, v, index) => {
    if (v) amm++;
    return v ? sum + costs[index] : sum;
  }, 0);
  if (amm === 1) return cost - 1;
  if (cost !== 0) return cost + 1;
  else return 0;
}
function calculateImplicantCost(implicant: Implicant): number {
  const ins = implicant.bits.filter(bit => bit !== 'x').length;
  return ins <= 1 ? 1 : ins + 2;
}
// DFS
function optimizeCover(cover: Cover, maxIter = 1e5): Cover {
  const stack = [{ cover, essentialImplicants: new Set<number>() }];
  const requiredCells = [...cover.coveredCells]
  let bestCover = cover;
  let iters = 0;
  while (stack.length > 0) {
    if (iters++ > maxIter) break;
    const { cover, essentialImplicants } = stack.pop()!;
    if (!requiredCells.every(cell => cover.coveredCells.has(cell))) continue;
    if (!bestCover || cover.cost < bestCover.cost) {
      bestCover = { ...cover, included: [...cover.included] };
    }
    for (let i = 0; i < cover.implicants.length; i++) {
      if (!cover.included[i] || essentialImplicants.has(i)) continue;
      cover.included[i] = false;
      const newCover = createCover(cover.implicants, cover.included, cover.costs);
      if (!requiredCells.every(cell => newCover.coveredCells.has(cell))) {
        essentialImplicants.add(i);
      } else {
        stack.push({ cover: newCover, essentialImplicants: new Set(essentialImplicants) });
      }
      cover.included[i] = true;
    }
  }
  form._iterations = iters;
  return bestCover;
}
function drawImplicants(width: number, height: number, imps: Implicant[]): DrawImplicantRect[] {
  const ts = kmapTables.value?.children;
  if (!ts) return [];
  const tbs = Array.from(ts).map(t => t.children[1] as HTMLTableSectionElement);
  // return []
  const gp = (_x: number, _y: number, _z: number) => {
    _z %= tbs.length;
    _y %= tbs[_z].rows.length;
    _x %= tbs[_z].rows[_y].cells.length - 1;
    const { x, y, width, height } = tbs[_z].rows[_y].cells[_x + 1].getBoundingClientRect();
    return { x: x, y: y, width, height };
  }
  function kmapPosNSize(a: Bit, b?: Bit) {
    if (!b) return a === 'x' ? [0, 2] : a === '0' ? [0, 1] : [1, 1];
    let l, s;
    if (a === 'x') {
      l = b === '0' ? 3 : b === '1' ? 1 : 0;
      s = b === 'x' ? 4 : 2;
    } else {
      l = (a === '0' ? (b === '1' ? 1 : 0) : (b === '0' ? 3 : 2));
      s = b === 'x' ? 2 : 1;
    }
    return [l, s];
  }
  const impl = imps.map((imp: Implicant) => {
    const r: ImplicantRect = { x: 0, y: 0, zs: [0], width: 0, height: 0 };
    if (imp.bits.length === 6) {
      [r.x, r.width] = kmapPosNSize(imp.bits[2], imp.bits[3]);
      [r.y, r.height] = kmapPosNSize(imp.bits[4], imp.bits[5]);
      const bitMap: { [k: string]: number[] } = {
        '00': [0],
        '01': [1],
        '10': [3],
        '11': [2],
        '0x': [0, 1],
        '1x': [3, 2],
        'x0': [0, 3],
        'x1': [1, 2],
        'xx': [0, 1, 2, 3]
      };
      r.zs = bitMap[imp.bits[0] + imp.bits[1]];
    } else if (imp.bits.length === 5) {
      [r.x, r.width] = kmapPosNSize(imp.bits[1], imp.bits[2]);
      [r.y, r.height] = kmapPosNSize(imp.bits[3], imp.bits[4]);
      r.zs = imp.bits[0] === '0' ? [0] : imp.bits[0] === '1' ? [1] : [0, 1];
    } else if (imp.bits.length === 4) {
      [r.x, r.width] = kmapPosNSize(imp.bits[0], imp.bits[1]);
      [r.y, r.height] = kmapPosNSize(imp.bits[2], imp.bits[3]);
    } else if (imp.bits.length === 3) {
      [r.x, r.width] = kmapPosNSize(imp.bits[0], imp.bits[1]);
      [r.y, r.height] = kmapPosNSize(imp.bits[2]);
    } else if (imp.bits.length === 2) {
      [r.x, r.width] = kmapPosNSize(imp.bits[0]);
      [r.y, r.height] = kmapPosNSize(imp.bits[1]);
    } else if (imp.bits.length === 1) {
      [r.x, r.width] = kmapPosNSize(imp.bits[0]);
      [r.y, r.height] = [0, 1];
    }
    return r;
  });
  const rects: DrawImplicantRect[] = [];
  for (let i = 0; i < impl.length; i++) {
    const imp = impl[i];
    for (let z of imp.zs) {
      const { x, y } = ts[z].getBoundingClientRect();
      const CTL = gp(0, 0, z);
      const CBR = gp(width - 1, height - 1, z);
      const r1 = gp(imp.x, imp.y, z);
      const r2 = gp(imp.x + imp.width - 1, imp.y + imp.height - 1, z);
      const xwrap = r2.x < r1.x;
      const ywrap = r2.y < r1.y;
      const color = `hsl(${i * 70}, 50%, 50%)`;
      const pad = 2 + i;
      function rect(x1: number, y1: number, x2: number, y2: number, borders: { top: boolean, right: boolean, bottom: boolean, left: boolean }): DrawImplicantRect {
        return {
          z,
          x: x1 - x + (borders.left ? pad : 0),
          y: y1 - y + (borders.top ? pad : 0),
          width: x2 - x1 - (borders.left ? pad : 0) - (borders.right ? pad : 0),
          height: y2 - y1 - (borders.top ? pad : 0) - (borders.bottom ? pad : 0),
          borders, color
        };
      }
      if (xwrap && ywrap) {
        rects.push(rect(r1.x, r1.y, CBR.x + CBR.width, CBR.y + CBR.height, { top: true, right: false, bottom: false, left: true }));
        rects.push(rect(r1.x, CTL.y, CBR.x + CBR.width, r2.y + r2.height, { top: false, right: false, bottom: true, left: true }));
        rects.push(rect(CTL.x, r1.y, r2.x + r2.width, CBR.y + CBR.height, { top: true, right: true, bottom: false, left: false }));
        rects.push(rect(CTL.x, CTL.y, r2.x + r2.width, r2.y + r2.height, { top: false, right: true, bottom: true, left: false }));
      } else if (xwrap && !ywrap) {
        rects.push(rect(r1.x, r1.y, CBR.x + CBR.width, r2.y + r2.height, { top: true, right: false, bottom: true, left: true }));
        rects.push(rect(CTL.x, r1.y, r2.x + r2.width, r2.y + r2.height, { top: true, right: true, bottom: true, left: false }));
      } else if (!xwrap && ywrap) {
        rects.push(rect(r1.x, r1.y, r2.x + r2.width, CBR.y + CBR.height, { top: true, right: true, bottom: false, left: true }));
        rects.push(rect(r1.x, CTL.y, r2.x + r2.width, r2.y + r2.height, { top: false, right: true, bottom: true, left: true }));
      } else if (!xwrap && !ywrap) {
        rects.push(rect(r1.x, r1.y, r2.x + r2.width, r2.y + r2.height, { top: true, right: true, bottom: true, left: true }));
      }
    }
  }
  return rects;
}
const truthTable = computed(() => {
  try {
    formErrors['expr'] = null;
    return SoP(form.expression)
  } catch (e: any) {
    formErrors['expr'] = e.message;
    return { inputSize: 0, rows: [], truths: [] } as TruthTable;
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
    return solveKMap(kmap.value, truthTable.value, form.mode === 'sop' ? '1' : '0');
  } catch (e: any) {
    formErrors['implicants'] = e.message;
    return createCover([], [], []);
  }
}, createCover([], [], []));
const implicantsRects = ref<DrawImplicantRect[]>([]);
watch(cover, (cover) => {
  setTimeout(() => {
    try {
      formErrors['implicantsRects'] = null;
      implicantsRects.value = drawImplicants(kmap.value.width, kmap.value.height, cover.implicants
        .filter((_, i) => cover.included[i]));
    } catch (e: any) {
      formErrors['implicantsRects'] = e.message;
    }
  }, 50);
}, { immediate: true });
function varName(i: number) {
  if (form.logicExpr) return (vars.value[i]?.replace(/(\d+)$/, '_{$1}')) ?? `x_{${i + 1}}`;
  else return `x_{${i + 1}}`;
}
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