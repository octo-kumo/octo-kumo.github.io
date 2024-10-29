import { kMap, type Bit, type TruthTable, solveKMap, coverToLatex } from "..";

const vars = 4 + 4 + 2;
const truths: Bit[][] = [[], [], [], [], []]
for (let i = 0; i < 2 ** vars; i++) {
    const s0 = i >> 9;
    const s1 = i >> 8 & 1;
    const x = i >> 4 & 0xf;
    const y = i & 0xf;
    const signedX = (x & 0x8) ? x - 0x10 : x;
    const signedY = (y & 0x8) ? y - 0x10 : y;

    const a00 = signedX + signedY;
    const a01 = signedX + 2 * signedY;
    const a10 = signedX - signedY;
    const a11 = Math.floor(signedX / 2) - signedY;
    const a = s0 === 0 ? s1 === 0 ? a00 : a01 : s1 === 0 ? a10 : a11;
    for (let j = 0; j < 5; j++) {
        truths[j].push((a >> j & 1) === 1 ? '1' : '0');
    }
}
const truthTables: TruthTable[] = truths.map(truth => ({
    inputSize: vars,
    rows: truth,
    truths: truth.map((v, i) => v === '1' ? i : -1).filter(v => v !== -1)
}));
truthTables.forEach(truthTable => {
    const newKMap = kMap(truthTable);
    const cover = solveKMap(newKMap, truthTable, '1', true);
    console.log(coverToLatex(cover, 'sop', i => {
        if (i < 2) return `s_${i}`;
        if (i < 6) return `x_${5 - i}`;
        return `y_${9 - i}`;
    }));
});