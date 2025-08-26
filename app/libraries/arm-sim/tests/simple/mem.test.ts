import { describe, expect, test } from "bun:test";
import RAM from "../../src/ram";
import CPU, { ALUFunction, CPUDatapathState } from "../../src/cpu";
import { asm2bin } from "../../src/compiler/asm2bin";
import { plainToSignedString, toSigned } from "../../src/utils";

describe("Simple Memory", () => {
    test("Homework", () => {
        const ram = new RAM();
        const cpu = new CPU(ram);
        cpu.reg[2] = 1337n;
        cpu.reg[3] = 4n;
        cpu.reg[4] = 8n;
        let num = asm2bin(0, ALUFunction.ADD, 0, 3, 2, 4, 0);
        console.log("OP1", plainToSignedString(BigInt(num), 32n));
        ram.w32(0n, num);
        while (cpu.d.pc < 4n) cpu.clock();
        expect(cpu.d.state).toBe(CPUDatapathState.FETCH);
        expect(cpu.d.pc).toBe(4n);
        expect(cpu.reg[2]).toBe(12n);

        let num4 = num = asm2bin(0, ALUFunction.ADD, 1, 3, 2, 0, Number(toSigned(-3n, 12)));
        console.log("OP2", plainToSignedString(BigInt(num), 32n));
        ram.w32(4n, num);
        while (cpu.d.pc < 8n) cpu.clock();
        expect(cpu.d.state).toBe(CPUDatapathState.FETCH);
        expect(cpu.d.pc).toBe(8n);
        expect(cpu.reg[2]).toBe(1n);

        cpu.c.Mem_read = true;
        num = asm2bin(1, ALUFunction.ADD, 1, 3, 2, 0, 0);
        console.log("OP3", plainToSignedString(BigInt(num), 32n));
        ram.w32(8n, num); // if (R2 >= R3) goto 0x08
        while (cpu.d.pc < 12n) cpu.clock();
        expect(cpu.d.state).toBe(CPUDatapathState.FETCH);
        expect(cpu.d.pc).toBe(12n);
        expect(cpu.reg[2]).toBe(toSigned(BigInt(num4), 32));
    });
});
