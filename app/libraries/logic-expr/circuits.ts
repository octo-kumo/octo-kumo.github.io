import type { Bit, Cover } from ".";
import type { CircuitNode } from "./circuit-artist";
export function coverToCircuit(cover: Cover): CircuitNode[] {
    const ins: { [k: number]: CircuitNode } = {};
    const cins: { [k: number]: CircuitNode } = {};

    function getIn(bit: Bit, i: number) {
        if (bit === 'x') return null;
        if ((bit === '1') === (cover.type === 'sop')) {
            return ins[i] ??= { type: 'in', label: 'x' + (i + 1), input: [] }
        } else {
            return cins[i] ??= { type: 'in', label: 'not x' + (i + 1), input: [] }
        }
    }
    const comb: CircuitNode = {
        type: cover.type === 'sop' ? 'or' : 'and', input: cover.implicants.map(imp => {
            return {
                type: cover.type === 'sop' ? 'and' : 'or',
                input: imp.bits.map((bit, index) => getIn(bit, index)).filter(Boolean) as CircuitNode[],
            }
        })
    };
    const output: CircuitNode = { type: 'out', input: [comb], label: 'f' };

    return [output];
}