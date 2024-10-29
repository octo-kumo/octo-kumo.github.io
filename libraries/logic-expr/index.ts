export type Bit = '0' | '1' | 'x';
export type Implicant = {
    bits: Bit[],
    cells: number[],
    area: number
}; // same length as inputSize

export type TruthTable = {
    inputSize: number;
    rows: Bit[];
    truths: number[];
};
export type KMap = {
    inputSize: number;
    width: number;
    height: number;
    depth: number;
    h_heads: string[];
    v_heads: string[];
    z_heads: string[];
    rows: { bit: Bit, label: number }[][][];
};
export interface Cover {
    type: 'sop' | 'pos'; // sum of products or product of sums
    implicants: Implicant[],
    cost: number;         // Total cost of the cover
    coveredCells: Set<number>; // Set of all covered cells
    included: boolean[];  // Boolean array representing included implicants
    costs: number[];      // Precomputed costs for each implicant
    iterations?: number;  // Number of iterations to find the optimal cover
}
export interface FactorizedCover {
    inputSize: number,
    factors: number[],
    cost: number,
    covers: Map<number[], Cover>,
    costsMap?: Map<number[], FactorizedCover>
}
export function SoP(expression: string, varCount: number): TruthTable {
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
    if (max >= 2 ** varCount) throw new Error('m and d values must be within range');
    const inputSize = varCount;
    const rows = Array.from({ length: 2 ** inputSize }, (_, i) => {
        return trues.includes(i) ? '1' : dCare.includes(i) ? 'x' : '0' as Bit;
    });
    return { inputSize, rows, truths: trues };
}

export function kMap(truthTable: TruthTable): KMap {
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

export function solveKMap(kmap: KMap, truthTable: TruthTable, target: Bit = '1', optimize = false): Cover {
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
    const cover = createCover(primes, new Array(primes.length).fill(true), primes.map(calculateImplicantCost), target === '1' ? 'sop' : 'pos');
    if (optimize) return optimizeCover(cover);
    else return cover;
}

export function createCover(implicants: Implicant[], included: boolean[], costs: number[], type: 'sop' | 'pos'): Cover {
    const coveredCells = new Set<number>(implicants.filter((v, i) => included[i]).flatMap(imp => imp.cells));
    return { cost: calculateTotalCost(included, costs), coveredCells, included: [...included], costs, implicants, type };
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
export function optimizeCover(cover: Cover, maxIter = 1e5): Cover {
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
            const newCover = createCover(cover.implicants, cover.included, cover.costs, cover.type);
            if (!requiredCells.every(cell => newCover.coveredCells.has(cell))) {
                essentialImplicants.add(i);
            } else {
                stack.push({ cover: newCover, essentialImplicants: new Set(essentialImplicants) });
            }
            cover.included[i] = true;
        }
    }
    bestCover.iterations = iters;
    return bestCover;
}

// generated factorized based on the factors (used for 2 mux 4 mux etc)
export function factorized(truthTable: TruthTable, factors: number[], optimize = false): FactorizedCover {
    const factorCount = factors.length;
    const factorStates = 2 ** factorCount;
    const factorMap = new Map<number[], Cover>();
    for (let i = 0; i < factorStates; i++) {
        const factorState = Array.from({ length: factorCount }, (_, j) => (i >> (factorCount - j - 1)) & 1);
        const mask1 = factors.filter((f, i) => factorState[i] === 1).reduce((acc, factor) => acc | (1 << (truthTable.inputSize - factor - 1)), 0);
        const mask0 = factors.filter((f, i) => factorState[i] === 0).reduce((acc, factor) => acc | (1 << (truthTable.inputSize - factor - 1)), 0);
        const newRows = truthTable.rows.filter((_, idx) =>
            (idx & mask1) === mask1 && (idx & mask0) === 0);
        if (newRows.length !== 2 ** (truthTable.inputSize - factorCount)) {
            throw new Error(`Invalid factorization: expected ${2 ** (truthTable.inputSize - factorCount)}, but got ${newRows.length}`);
        }
        const truths = newRows.map((_, idx) => _ === '1' ? idx : -1).filter(i => i !== -1);
        // console.log(factorState, truths);
        const newTruthTable = { inputSize: truthTable.inputSize - factorCount, rows: newRows, truths } as TruthTable;
        const newKMap = kMap(newTruthTable);
        const cover0 = solveKMap(newKMap, newTruthTable, '0', optimize);
        const cover1 = solveKMap(newKMap, newTruthTable, '1', optimize);
        factorMap.set(factorState, cover0.cost < cover1.cost ? cover0 : cover1);
    }
    const cost = Array.from(factorMap.values()).reduce((acc, cover) => acc + cover.cost, 0);
    return { factors, cost, covers: factorMap, inputSize: truthTable.inputSize };
}

export function optimizeFactorized(truthTable: TruthTable, factorCount: number): FactorizedCover {
    const costsMap = new Map<number[], FactorizedCover>();
    factorCount = Math.min(truthTable.inputSize - 1, factorCount);
    return generateCombinations(truthTable.inputSize, factorCount).map(factors => {
        const covers = factorized(truthTable, factors, true);
        costsMap.set(factors, covers);
        return { ...covers, costsMap };
    }).reduce((acc, factorized) => {
        if (factorized.cost < acc.cost) return factorized;
        return acc;
    }, { factors: [], cost: Infinity, covers: new Map<number[], Cover>(), costsMap, inputSize: truthTable.inputSize });
}

export function coverToLatex(cover: Cover, mode: 'sop' | 'pos', varName: (i: number) => string) {
    const imps = cover.implicants.filter((_, i) => cover.included[i]);
    let latex;
    const T = mode === 'sop' ? '1' : '0';
    const aT = mode === 'sop' ? '0' : '1';
    if (imps.length === 0) latex = mode === 'sop' ? '0' : '1';
    else if (imps.length === 1 && imps[0].bits.every(b => b === 'x')) latex = mode === 'sop' ? '1' : '0';
    else latex = imps.map((imp, i) => {
        const term = imp.bits.map((b, i) => b === aT ? `\\bar{${varName(i)}}` : b === T ? varName(i) : '')
            .filter(i => i)
            .join(mode === 'sop' ? '' : '+');
        const end = ((i + 1) % 3 === 0 && i !== imps.length - 1) ? '\\\\\\\n&' : '';
        if (mode === 'sop') return term + end;
        else return `(${term})` + end;
    }).join(mode === 'sop' ? ' + ' : ' ');
    return latex;
}

export function factorizedToLatex({ factors, covers, inputSize }: FactorizedCover, varName: (i: number) => string, fname = 'f') {
    const latex = [];
    const stateToFactor = (state: number[]) => state.map((v, i) => v ? varName(factors[i]) : `\\bar{${varName(factors[i])}}`).join('');
    const nonFactors = Array.from({ length: inputSize }, (_, idx) => idx).filter(idx => !factors.includes(idx));
    const nvarName = (i: number): string => varName(nonFactors[i]);
    for (const [state, cover] of covers) {
        const pred = stateToFactor(state);
        const coverStr = coverToLatex(cover, cover.type, nvarName);
        latex.push(`${fname}_{${pred}}&\\triangleq ${coverStr}\\\\`);
    }
    return latex.join("\n");
}

function generateCombinations(N: number, k: number): number[][] {
    const results: number[][] = [];
    function backtrack(start: number, combination: number[]) {
        if (combination.length === k) return results.push([...combination]);
        for (let i = start; i < N; i++) {
            combination.push(i);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }
    backtrack(0, []);
    return results;
}