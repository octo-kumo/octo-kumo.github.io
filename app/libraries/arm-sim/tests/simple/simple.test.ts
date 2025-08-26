import { expect, test } from "bun:test";
import CPU, { ALUFunction, CPUDatapathState, SYSTEM_BITS } from "../../src/cpu";
import RAM from "../../src/ram";
import { toSigned } from "../../src/utils";
type EIGHT_BOOLEAN = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];
test("R3=R4+R5", () => {
    const cpu = new CPU(new RAM());
    cpu.reg[4] = 1234n;
    cpu.reg[5] = 4321n;

    cpu.c.RF_addrA = 4;
    cpu.c.RF_addrB = 5;
    cpu.d.state = CPUDatapathState.DECODE;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [1, 1, 0, 0, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.IMux_sel = false;
    cpu.c.ALU_fun = ALUFunction.ADD;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 1, 1, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.MMux_sel = false;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 0, 1, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.RF_addrC = 3;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 0, 0, 1].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    expect(cpu.reg[3]).toBe(1234n + 4321n);
});

test("R3=R4-R5", () => {
    const cpu = new CPU(new RAM());
    cpu.reg[4] = 1234n;
    cpu.reg[5] = 4321n;

    cpu.c.RF_addrA = 4;
    cpu.c.RF_addrB = 5;
    cpu.d.state = CPUDatapathState.DECODE;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [1, 1, 0, 0, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.IMux_sel = false;
    cpu.c.ALU_fun = ALUFunction.SUB;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 1, 1, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.MMux_sel = false;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 0, 1, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.RF_addrC = 3;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 0, 0, 1].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    expect(cpu.reg[3]).toBe(toSigned(1234n - 4321n, SYSTEM_BITS));
});

test("fancy", () => {
    const cpu = new CPU(new RAM());
    cpu.reg[2] = 1337n;
    cpu.reg[5] = 0x1000n;

    cpu.c.RF_addrA = 5;
    cpu.c.RF_addrB = 2;
    cpu.d.state = CPUDatapathState.DECODE;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [1, 1, 0, 0, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.IMux_sel = true;
    cpu.c.ImmValue = 4n;
    cpu.c.ALU_fun = ALUFunction.ADD;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 1, 1, 0, 0, 0, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.MMux_sel = false;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 1, 1, 0].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    cpu.c.RF_addrC = 3;
    [cpu.c.RA_we, cpu.c.RB_we, cpu.c.RZ_we, cpu.c.RD_we, cpu.c.Mem_read, cpu.c.Mem_write, cpu.c.RW_we, cpu.c.RF_we]
        = [0, 0, 0, 0, 0, 0, 0, 1].map(Boolean) as EIGHT_BOOLEAN;
    cpu.d.process();

    expect(cpu.ram.r32(0x1004n)).toBe(1337);
    expect(cpu.reg[3]).toBe(0x1004n);
});