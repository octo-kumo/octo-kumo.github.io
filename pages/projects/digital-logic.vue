<template>
  <div>
    <el-form @submit.prevent>
      <el-form-item label="Variable Count">
        <el-select v-model="form.varCount">
          <el-option v-for="i in 4" :key="i" :label="i + 1" :value="i + 1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Expression" :error="formErrors['expr']">
        <el-input v-model="form.expression" placeholder="m(0,1,2,3)+d(4,5,6)">
          <template #prefix>Σ</template>
        </el-input>
      </el-form-item>
      <div class="flex gap-2">
        <el-tag type="danger" v-for="k in Object.keys(formErrors).filter(e => formErrors[e])">
          {{ k }} : {{ formErrors[k] }}
        </el-tag>
      </div>
    </el-form>
    <div v-show="truthTable.inputSize < 5 && truthTable.inputSize > 1">
      <el-text size="small"><em>n<sup>3</sup> possible implicants will be tried.</em></el-text>
      <table class="kmap relative" ref="kmapTable">
        <thead>
          <tr>
            <th></th>
            <th v-for="h in kmap.h_heads" :key="h">{{ h }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in kmap.rows" :key="i">
            <th>{{ kmap.v_heads[i] }}</th>
            <td v-for="(cell, j) in row" :key="j">
              <ruby @click="updateExpr(cell.label, increm(truthTable.rows[cell.label]))" :class="'bit-' + cell.bit">
                {{ cell.bit }}<rt>{{ cell.label }}</rt>
              </ruby>
            </td>
          </tr>
        </tbody>
        <div v-for="rect in implicantsRects" :style="{
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
definePageMeta({
  title: "Digital Logic",
  description: "Utilities for digital logic"
});

type Bit = '0' | '1' | 'x';
type Implicant = {
  bits: Bit[],
  truths: number[],
  area: number
}; // same length as inputSize
type ImplicantRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type DrawImplicantRect = {
  x: number;
  y: number;
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
  h_heads: string[];
  v_heads: string[];
  rows: { bit: Bit, label: number }[][];
};

const kmapTable = ref<HTMLTableElement | null>(null);

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
  const v2 = ['00', '01', '11', '10'], v1 = ['0', '1'];
  if (truthTable.inputSize < 2 || truthTable.inputSize > 4) throw new Error('KMap only supports 2, 3, 4 inputs');
  const width = truthTable.inputSize > 2 ? 4 : 2;
  const height = truthTable.inputSize > 3 ? 4 : 2;
  const h_heads = width > 2 ? v2 : v1;
  const v_heads = height > 2 ? v2 : v1;
  const rows = Array.from({ length: height }, (_, i) => {
    return Array.from({ length: width }, (_, j) => {
      const I = parseInt(h_heads[j] + v_heads[i], 2);
      return { bit: truthTable.rows[I], label: I };
    });
  });
  return { inputSize: truthTable.inputSize, width, height, h_heads, v_heads, rows };
}
const formErrors = reactive({} as any);
const form = reactive({
  varCount: 4,
  expression: 'm(2,4,6,9,12)+d(1,3,13,14)'
});

function updateExpr(i: number, b: Bit) {
  const rows = truthTable.value.rows;
  rows[i] = b;
  const d = rows.map((v, i) => [v, i]).filter(([v, i]) => v === 'x').map(([v, i]) => i);
  form.expression = 'm(' + rows.map((v, i) => [v, i]).filter(([v, i]) => v === '1').map(([v, i]) => i).join(',') + ')' +
    (d.length ? '+d(' + d.join(',') + ')' : '');
}
function solveKMap(kmap: KMap, truthTable: TruthTable, target: Bit = '1'): ImplicantRect[] {
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
    let nonX = false;
    const imp: Implicant = { bits, truths: [], area };
    for (let i = 0; i < truthTable.rows.length; i++) {
      const trueMatch = (i & TRUE_MASK) === TRUE_MASK;
      const falseMatch = (i & FALSE_MASK) === 0;
      if (trueMatch && falseMatch) if (truthTable.rows[i] !== 'x') {
        nonX = true;
        if (truthTable.rows[i] !== target) return undefined;
        else imp.truths.push(i);
      }
    }
    return nonX ? imp : undefined;
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
      !((a.area > b.area || a.truths.length > b.truths.length) && b.truths.every(t => a.truths.includes(t)))))
    .filter((a, i, arr) => arr.every((b, j) => i <= j ||
      !(a.area === b.area && a.truths.length === b.truths.length && a.truths.every(t => b.truths.includes(t)))));
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
  return primes.map((imp: Implicant) => {
    const r = { x: 0, y: 0, width: 0, height: 0 } as ImplicantRect;
    if (imp.bits.length === 4) {
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
}

function drawImplicants(width: number, height: number, impl: ImplicantRect[]) {
  const t = kmapTable.value;
  if (!t) return [];
  const tb = t.children[1] as HTMLTableSectionElement;
  const { x, y } = t.getBoundingClientRect();
  const gp = (_x: number, _y: number) => {
    _y %= tb.rows.length;
    _x %= tb.rows[_y].cells.length - 1;
    const { x, y, width, height } = tb.rows[_y].cells[_x + 1].getBoundingClientRect();
    return { x: x, y: y, width, height };
  }
  const rects: DrawImplicantRect[] = [];
  const CTL = gp(0, 0);
  const CBR = gp(width - 1, height - 1);
  for (let i = 0; i < impl.length; i++) {
    const imp = impl[i];
    const r1 = gp(imp.x, imp.y);
    const r2 = gp(imp.x + imp.width - 1, imp.y + imp.height - 1);
    const xwrap = r2.x < r1.x;
    const ywrap = r2.y < r1.y;
    const color = `hsl(${i * 70}, 50%, 50%)`;
    const pad = 2 + i;
    function rect(x1: number, y1: number, x2: number, y2: number, borders: { top: boolean, right: boolean, bottom: boolean, left: boolean }) {
      return {
        x: x1 - x + (borders.left ? pad : 0),
        y: y1 - y + (borders.top ? pad : 0),
        width: x2 - x1 - (borders.left ? pad : 0) - (borders.right ? pad : 0),
        height: y2 - y1 - (borders.top ? pad : 0) - (borders.bottom ? pad : 0),
        borders, color
      } as DrawImplicantRect;
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
const kmap = computed(() => {
  try {
    formErrors['kmap'] = null;
    return kMap(truthTable.value);
  } catch (e: any) {
    formErrors['kmap'] = e.message;
    return { width: 0, height: 0, h_heads: [], v_heads: [], rows: [], inputSize: 0 } as KMap;
  }
});
const implicants = computed(() => {
  try {
    formErrors['implicants'] = null;
    return solveKMap(kmap.value, truthTable.value);
  } catch (e: any) {
    formErrors['implicants'] = e.message;
    return [];
  }
});
const implicantsRects = computed(() => {
  try {
    console.log("implicantsRects");
    formErrors['implicantsRects'] = null;
    return drawImplicants(kmap.value.width, kmap.value.height, implicants.value);
  } catch (e: any) {
    formErrors['implicantsRects'] = e.message;
    return [];
  }
});
</script>

<style lang="scss">
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
</style>