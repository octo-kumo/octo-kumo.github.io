import type { ALUFunction, BranchCondition } from "../cpu";

export function asm2bin_branch(cond: BranchCondition, addrA: number, addrB: number, Operand2: number) {
    return ((cond & 0b111) << 29) | (1 << 21) | ((addrA & 0xF) << 16) | ((addrB & 0xF) << 12) | (Operand2 & 0xFFF);
}

export function asm2bin(MMux_sel: number, ALU_fun: ALUFunction, IMux_sel: number, addrA: number, addrC: number, addrB: number, Operand2: number) {
    return (0b111 << 29) | (MMux_sel & 1) << 24 | (ALU_fun & 0b111) << 21 | (IMux_sel & 1) << 20 | (addrA & 0xf) << 16 | (addrC & 0xf) << 12 | (addrB & 0xf) << 8 | (Operand2 & 0xfff);
}