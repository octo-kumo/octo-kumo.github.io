import assert from "assert";
import type RAM from "./ram";
import { fromSigned, negateSigned, signExtend, toSigned } from "./utils";
const U64_MAX = 0xffffffffffffffffn;
const U32_MAX = 0xffffffffn;
export const SYSTEM_BITS: 32 | 64 = 32;
export const SYSTEM_MAX = SYSTEM_BITS === 32 ? U32_MAX : U64_MAX;
const SIGN_BIT = 1n << (BigInt(SYSTEM_BITS) - 1n);

export default class CPU {
    ram: RAM;
    c: CPUControl;
    d: CPUDatapath;

    constructor(ram: RAM) {
        this.ram = ram;
        this.c = new CPUControl();
        this.d = new CPUDatapath(ram, this.c);
    }

    clock() {
        this.d.process();
    }

    get reg() {
        return this.d.rf.reg;
    }
}


export class CPUControl {
    /**
     * Control unit of the CPU
     * 
     * When pipeline is implemented, each stage will be processing a different instruction.
     * e.g.
     * CLK 1
     * - A is in stage 1.
     * CLK 2
     * - A is decoded, moved to stage 2.
     * - B is in stage 1.
     * CLK 3
     * - A is executed, moved to stage 3.
     * - B is decoded, moved to stage 2.
     * - C is in stage 1.
     * etc
     */

    // stage 1: decode
    RF_addrA = 0; // ir
    RF_addrB = 0; // ir
    RA_we = true;
    RB_we = true;

    // stage 2: execute
    ImmValue = 0n; // ir
    IMux_sel = false; // ir
    ALU_fun = 0; // ir
    RZ_we = true;
    RD_we = true;

    // stage 3: memory
    MMux_sel = false; // ir
    Mem_read = false;
    Mem_write = false;
    RW_we = true;

    // stage 4: write back
    RF_we = true;
    RF_addrC = 0; // ir

    // branch
    Cond = 0; // ir

    decode(ir: number) {
        this.Cond = ir >> 29 & 0b111;
        const branch = !(this.Cond === 0b110 || this.Cond === 0b111);
        this.MMux_sel = Boolean(ir >> 24 & 1);
        this.ALU_fun = ir >> 21 & 0b111;
        this.IMux_sel = Boolean(ir >> 20 & 1);
        this.RF_addrA = ir >> 16 & 0b1111;
        this.RF_addrC = ir >> 12 & 0b1111;
        this.RF_addrB = branch ? ir >> 12 & 0b1111 : ir >> 8 & 0b1111;
        this.ImmValue = signExtend(BigInt(ir & 0xfff), 12, SYSTEM_BITS);
        if (branch) {
            assert(this.ALU_fun === ALUFunction.SUB, "Branch instruction must be SUB");
            assert(this.MMux_sel === false, "Branch instruction must not use MMux");
            assert(this.IMux_sel === false, "Branch instruction must not use IMux");
        }
    }
}

export enum CPUDatapathState {
    FETCH,
    DECODE,
    EXECUTE,
    MEMORY,
    WRITEBACK,
}

export class CPUDatapath {
    pmi: PMI;
    alu: ALU;
    c: CPUControl;
    rf: RegisterFile;

    pc: bigint = 0n;
    ir: number = 0;

    ra = 0n;
    rb = 0n;
    rz = 0n;
    rd = 0n;
    rw = 0n;
    alu_flags = 0;
    branch_taken = false;

    constructor(ram: RAM, control: CPUControl) {
        this.c = control;
        this.alu = new ALU();
        this.rf = new RegisterFile();
        this.pmi = new PMI(ram);
    }

    state = CPUDatapathState.FETCH;

    process() {
        switch (this.state) {
            case CPUDatapathState.FETCH:
                this.fetch();
                break;
            case CPUDatapathState.DECODE:
                this.decode();
                break;
            case CPUDatapathState.EXECUTE:
                this.execute();
                break;
            case CPUDatapathState.MEMORY:
                this.memory();
                break;
            case CPUDatapathState.WRITEBACK:
                this.writeback();
                break;
        }
    }

    // process_pipeline() {
    //     this.writeback();
    //     this.memory();
    //     this.execute();
    //     this.decode();
    //     // this.fetch();
    // }

    fetch() {
        this.pmi.memory(this.pc, 0n, true, false);
        this.c.decode(Number(this.pmi.data));
        this.state = CPUDatapathState.DECODE;
    }

    decode() {
        // step 1: read register file / decode
        this.rf.decode(this.c.RF_addrA, this.c.RF_addrB);
        if (this.c.RA_we) this.ra = this.rf.A;
        if (this.c.RB_we) this.rb = this.rf.B;
        this.state = CPUDatapathState.EXECUTE;
    }

    execute() {
        // step 2: ALU / execute
        this.alu.execute(
            this.rf.A,
            this.c.IMux_sel ? this.c.ImmValue : this.rf.B,
            this.c.ALU_fun);
        if (this.c.RZ_we) this.rz = this.alu.Z;
        if (this.c.RD_we) this.rd = this.rb;

        // branch
        this.branch_taken = false;
        switch (this.c.Cond) {
            case BranchCondition.EQ:
                this.branch_taken = this.alu.flags.Z; // subtracts to zero
                break;
            case BranchCondition.NE:
                this.branch_taken = !this.alu.flags.Z; // subtracts to non-zero
                break;
            case BranchCondition.LT:
                this.branch_taken = this.alu.flags.N !== this.alu.flags.V;
                break;
            case BranchCondition.LE:
                this.branch_taken = this.alu.flags.Z || this.alu.flags.N !== this.alu.flags.V;
                break;
            case BranchCondition.GT:
                this.branch_taken = !this.alu.flags.Z && this.alu.flags.N === this.alu.flags.V;
                break;
            case BranchCondition.GE:
                this.branch_taken = this.alu.flags.N === this.alu.flags.V;
                break;
        }

        if (this.branch_taken) {
            this.state = CPUDatapathState.FETCH;
            this.pc += fromSigned(this.c.ImmValue, SYSTEM_BITS);
        } else {
            this.state = CPUDatapathState.MEMORY;
        }
    }

    memory() {
        // step 3: memory
        this.pmi.memory(this.rz, this.rd, this.c.Mem_read, this.c.Mem_write);
        if (this.c.RW_we) this.rw = this.c.MMux_sel ? this.pmi.data : this.rz;
        this.state = CPUDatapathState.WRITEBACK;
    }

    writeback() {
        // step 4: write back
        this.rf.writeback(this.c.RF_we, this.c.RF_addrC, this.rw);
        this.pc += 4n;
        this.state = CPUDatapathState.FETCH;
    }
}

export class RegisterFile {
    reg = new BigUint64Array(32);

    A = 0n;
    B = 0n;

    decode(addrA: number, addrB: number) {
        this.A = this.reg[addrA];
        this.B = this.reg[addrB];
    }

    writeback(we: boolean, addr: number, data: bigint) {
        if (we) this.reg[addr] = data;
    }
}

export enum ALUFunction {
    ADD = 0,
    SUB = 1,
    AND = 2,
    OR = 3,
    NOR = 4,
    LSL = 5,
    LSR = 6,
    ASR = 7,
}

export enum BranchCondition {
    EQ = 0b000,
    NE = 0b001,
    LT = 0b010,
    LE = 0b011,
    GT = 0b100,
    GE = 0b101,
}

export class ALU {
    /**
     * Arithmetic Logic Unit
     */
    Z = 0n;
    flags = {
        N: false,
        Z: false,
        C: false,
        V: false
    }
    execute(A: bigint, B: bigint, fun: number) {
        switch (fun) {
            case ALUFunction.ADD:
                this.Z = A + B;
                break;
            case ALUFunction.SUB:
                B = negateSigned(B, SYSTEM_BITS)
                this.Z = A + B;
                break;
            case ALUFunction.AND:
                this.Z = A & B;
                break;
            case ALUFunction.OR:
                this.Z = A | B;
                break;
            case ALUFunction.NOR:
                this.Z = ~(A | B);
                break;
            case ALUFunction.LSL:
                this.Z = A << B;
                break;
            case ALUFunction.LSR:
                this.Z = A >> B & ((1n << (BigInt(SYSTEM_BITS) - B)) - 1n);
                break;
            case ALUFunction.ASR:
                this.Z = A >> B;
                break;
        }
        this.flags.N = (this.Z >> BigInt(SYSTEM_BITS - 1) & 1n) === 1n; // negative
        this.flags.C = (this.Z >> BigInt(SYSTEM_BITS) & 1n) === 1n; // carry generated
        this.flags.V = ((A ^ B) & SIGN_BIT) === 0n && ((A ^ this.Z) & SIGN_BIT) !== 0n; // overflow generated
        this.Z = this.Z & SYSTEM_MAX;
        this.flags.Z = this.Z === 0n; // is zero
    }
}

export class PMI {
    /**
     * Program Memory Interface
     */
    private _ram: RAM;
    data = 0n;
    constructor(ram: RAM) {
        this._ram = ram;
    }
    memory(addr: bigint, data: bigint, mem_read: boolean, mem_write: boolean) {
        if (mem_read) this.data = toSigned(BigInt(this._ram.r32(addr)), SYSTEM_BITS);
        if (mem_write) this._ram.w32(addr, Number(data));
    }
}