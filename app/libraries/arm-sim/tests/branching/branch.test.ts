import { describe, expect, test } from "bun:test";
import CPU, { ALUFunction, BranchCondition, CPUDatapathState, SYSTEM_BITS } from "../../src/cpu";
import RAM from "../../src/ram";
import { asm2bin_branch } from "../../src/compiler/asm2bin";
import { toSigned } from "../../src/utils";

describe("Branching", () => {
    const ram = new RAM();
    const cpu = new CPU(ram);
    cpu.reg[2] = 6n;
    cpu.reg[3] = toSigned(-7n, SYSTEM_BITS);

    ram.w32(0n, asm2bin_branch(BranchCondition.GE, 2, 3, 0x08)); // if (R2 >= R3) goto 0x08
    cpu.clock();
    cpu.clock();
    cpu.clock();
    test("Branch taken", () => {
        expect(cpu.d.state).toBe(CPUDatapathState.FETCH);
        expect(cpu.d.pc).toBe(0x08n);
    });
});