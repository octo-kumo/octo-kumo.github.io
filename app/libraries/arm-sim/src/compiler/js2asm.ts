import * as acorn from 'acorn';
import type { Node, Program, ExpressionStatement, AssignmentExpression, BinaryExpression, Identifier, Literal, WhileStatement, UpdateExpression, BlockStatement } from 'acorn';
const ALU_OPS = {
    ADD: '000',
    SUB: '001',
    AND: '010',
    OR: '011',
    NOR: '100',
    LSL: '101',
    LSR: '110',
    ASR: '111'
} as const;

const CONDITIONS = {
    EQ: '000',
    NE: '001',
    LT: '010',
    LE: '011',
    GT: '100',
    GE: '101'
} as const;

interface Instruction {
    opcode: string;
    aluOp?: string;
    immediate?: string;
    dest?: string;
    src1?: string;
    src2?: string;
}

interface LabelReference {
    position: number;
    label: string;
    instruction: Instruction;
}

class Environment {
    private variables: Map<string, number>;
    private nextMemoryLocation: number;

    constructor() {
        this.variables = new Map();
        this.nextMemoryLocation = 0;
    }

    allocateVariable(name: string): number {
        if (!this.variables.has(name)) {
            this.variables.set(name, this.nextMemoryLocation++);
        }
        return this.variables.get(name)!;
    }

    getVariableLocation(name: string): number {
        const location = this.variables.get(name);
        if (location === undefined) {
            throw new Error(`Undefined variable: ${name}`);
        }
        return location;
    }
}

class Label {
    private static counter = 0;
    private value: number;

    constructor() {
        this.value = Label.counter++;
    }

    toString(): string {
        return `.L${this.value}`;
    }
}

abstract class AST {
    abstract emit(compiler: Compiler): void;
}

class ASTCompiler {
    private parseNode(node: Node): AST {
        switch (node.type) {
            case 'Program':
                return new Block((node as Program).body.map(stmt => this.parseNode(stmt)));

            case 'ExpressionStatement':
                return this.parseNode((node as ExpressionStatement).expression);

            case 'AssignmentExpression': {
                const assign = node as AssignmentExpression;
                if (assign.operator === '=') {
                    return new Assignment(
                        (assign.left as Identifier).name,
                        this.parseNode(assign.right)
                    );
                } else if (assign.operator === '+=') {
                    return new Assignment(
                        (assign.left as Identifier).name,
                        new BinaryOp(
                            '+',
                            new Variable((assign.left as Identifier).name),
                            this.parseNode(assign.right)
                        )
                    );
                }
                throw new Error(`Unsupported assignment operator: ${assign.operator}`);
            }

            case 'BinaryExpression': {
                const binary = node as BinaryExpression;
                if (binary.operator === '<' || binary.operator === '>' ||
                    binary.operator === '<=' || binary.operator === '>=') {
                    return new Comparison(
                        binary.operator,
                        this.parseNode(binary.left),
                        this.parseNode(binary.right)
                    );
                }
                return new BinaryOp(
                    binary.operator,
                    this.parseNode(binary.left),
                    this.parseNode(binary.right)
                );
            }

            case 'Identifier':
                return new Variable((node as Identifier).name);

            case 'Literal':
                return new NumberLiteral((node as Literal).value as number);

            case 'WhileStatement': {
                const whileStmt = node as WhileStatement;
                return new WhileLoop(
                    this.parseNode(whileStmt.test),
                    this.parseNode(whileStmt.body)
                );
            }

            case 'UpdateExpression': {
                const update = node as UpdateExpression;
                const varName = (update.argument as Identifier).name;
                return new Assignment(
                    varName,
                    new BinaryOp(
                        update.operator === '++' ? '+' : '-',
                        new Variable(varName),
                        new NumberLiteral(1)
                    )
                );
            }

            case 'BlockStatement':
                return new Block((node as BlockStatement).body.map(stmt => this.parseNode(stmt)));

            default:
                throw new Error(`Unsupported AST node type: ${node.type}`);
        }
    }

    compile(sourceCode: string): AST[] {
        const ast = acorn.parse(sourceCode, { ecmaVersion: 2020 }) as Program;
        return ast.body.map(node => this.parseNode(node));
    }
}

class Compiler {
    env: Environment;
    instructions: Instruction[];
    labelPositions: Map<string, number>;
    labelReferences: LabelReference[];

    constructor() {
        this.env = new Environment();
        this.instructions = [];
        this.labelPositions = new Map();
        this.labelReferences = [];
    }

    emit(instruction: Instruction): number {
        this.instructions.push(instruction);
        return this.instructions.length - 1;
    }

    emitLabel(label: Label): void {
        this.labelPositions.set(label.toString(), this.instructions.length);
    }

    private toBinary(instruction: Instruction): string {
        const { opcode, aluOp = '000', immediate = '0', dest = '000', src1 = '000', src2 = '0000' } = instruction;
        return `${opcode}${aluOp}${immediate}${dest}${src1}${src2}`;
    }

    compile(ast: AST[]): string[] {
        ast.forEach(node => node.emit(this));
        this.resolveLabelReferences();
        return this.instructions.map(inst => this.toBinary(inst));
    }

    private resolveLabelReferences(): void {
        for (const { position, label, instruction } of this.labelReferences) {
            const targetPosition = this.labelPositions.get(label);
            if (targetPosition === undefined) {
                throw new Error(`Undefined label: ${label}`);
            }
            // Calculate displacement and ensure it fits in 3 bits
            const displacement = targetPosition - (position + 1);
            const dispBits = (displacement & 0b111).toString(2).padStart(3, '0');
            instruction.dest = dispBits;
        }
    }
}

class NumberLiteral extends AST {
    constructor(private value: number) {
        super();
    }

    emit(compiler: Compiler): void {
        compiler.emit({
            opcode: '00', // ALU
            aluOp: '000', // ADD
            immediate: '1',
            dest: '000', // R0
            src1: '000', // R0
            src2: this.value.toString(2).padStart(4, '0')
        });
    }
}

class Variable extends AST {
    constructor(private name: string) {
        super();
    }

    emit(compiler: Compiler): void {
        const location = compiler.env.getVariableLocation(this.name);
        compiler.emit({
            opcode: '10', // LD
            aluOp: '000', // ADD
            immediate: '1',
            dest: '000', // R0
            src1: '000', // R0
            src2: location.toString(2).padStart(4, '0')
        });
    }
}

class Assignment extends AST {
    constructor(private name: string, private value: AST) {
        super();
    }

    emit(compiler: Compiler): void {
        const location = compiler.env.allocateVariable(this.name);
        this.value.emit(compiler);
        compiler.emit({
            opcode: '11', // ST
            aluOp: '000', // ADD
            immediate: '1',
            dest: '000', // R0 (data)
            src1: '000', // R0 (base addr)
            src2: location.toString(2).padStart(4, '0')
        });
    }
}

class BinaryOp extends AST {
    constructor(
        private operator: string,
        private left: AST,
        private right: AST
    ) {
        super();
    }

    emit(compiler: Compiler): void {
        this.left.emit(compiler);
        compiler.emit({
            opcode: '00', // ALU
            aluOp: '000', // ADD
            immediate: '0',
            dest: '001', // R1
            src1: '000', // R0
            src2: '0000'
        });

        this.right.emit(compiler);
        compiler.emit({
            opcode: '00', // ALU
            aluOp: this.getAluOp(),
            immediate: '0',
            dest: '000', // R0
            src1: '001', // R1
            src2: '0000' // R0
        });
    }

    private getAluOp(): string {
        switch (this.operator) {
            case '+': return ALU_OPS.ADD;
            case '-': return ALU_OPS.SUB;
            case '&': return ALU_OPS.AND;
            case '|': return ALU_OPS.OR;
            default: throw new Error(`Unknown operator: ${this.operator}`);
        }
    }
}

class WhileLoop extends AST {
    condition: AST;
    body: AST;

    constructor(condition: AST, body: AST) {
        super();
        this.condition = condition;
        this.body = body;
    }

    emit(compiler: Compiler): void {
        const startLabel = new Label();
        const endLabel = new Label();

        compiler.emitLabel(startLabel);

        this.condition.emit(compiler);

        // Branch if condition is false (using LT condition)
        const branchPosition = compiler.emit({
            opcode: '01', // B
            aluOp: '010', // LT condition
            immediate: '0',
            dest: '000', // Will be filled with displacement
            src1: '000', // R0
            src2: '0000'
        });
        compiler.labelReferences.push({
            position: branchPosition,
            label: endLabel.toString(),
            instruction: compiler.instructions[branchPosition]
        });

        this.body.emit(compiler);

        // Unconditional jump back (using EQ R0, R0 which is always true)
        const jumpPosition = compiler.emit({
            opcode: '01', // B
            aluOp: '000', // EQ condition
            immediate: '0',
            dest: '000', // Will be filled with displacement
            src1: '000', // R0
            src2: '0000'
        });
        compiler.labelReferences.push({
            position: jumpPosition,
            label: startLabel.toString(),
            instruction: compiler.instructions[jumpPosition]
        });

        compiler.emitLabel(endLabel);
    }
}

class Comparison extends AST {
    constructor(
        private operator: string,
        private left: AST,
        private right: AST
    ) {
        super();
    }

    emit(compiler: Compiler): void {
        this.left.emit(compiler);
        compiler.emit({
            opcode: '00', // ALU
            aluOp: '000', // ADD
            immediate: '0',
            dest: '001', // R1
            src1: '000', // R0
            src2: '0000'
        });

        this.right.emit(compiler);
        compiler.emit({
            opcode: '00', // ALU
            aluOp: ALU_OPS.SUB,
            immediate: '0',
            dest: '000', // R0 (result not used, only flags)
            src1: '001', // R1
            src2: '0000' // R0
        });
    }
}

class Block extends AST {
    constructor(private statements: AST[]) {
        super();
    }

    emit(compiler: Compiler): void {
        this.statements.forEach(stmt => stmt.emit(compiler));
    }
}
class Emulator {
    private registers: number[];
    private memory: number[];
    private instructionMemory: string[];
    private pc: number;
    private zeroFlag: boolean;
    private negativeFlag: boolean;
    private overflowFlag: boolean;

    constructor(instructions: string[]) {
        this.registers = new Array(8).fill(0);
        this.memory = new Array(16).fill(0); // 16 memory locations for simplicity
        this.instructionMemory = instructions;
        this.pc = 0;
        this.zeroFlag = false;
        this.negativeFlag = false;
        this.overflowFlag = false;
    }

    private parseInstruction(instruction: string): {
        opcode: number;
        aluOp: number;
        immediate: boolean;
        dest: number;
        src1: number;
        src2: number;
    } {
        return {
            opcode: parseInt(instruction.slice(0, 2), 2),
            aluOp: parseInt(instruction.slice(2, 5), 2),
            immediate: instruction[5] === '1',
            dest: parseInt(instruction.slice(6, 9), 2),
            src1: parseInt(instruction.slice(9, 12), 2),
            src2: parseInt(instruction.slice(12), 2)
        };
    }

    private updateFlags(result: number): void {
        this.zeroFlag = (result === 0);
        this.negativeFlag = (result < 0);
        // Simplified overflow detection
        this.overflowFlag = (result > 32767 || result < -32768);
    }

    private executeALU(aluOp: number, a: number, b: number): number {
        switch (aluOp) {
            case 0: // ADD
                return a + b;
            case 1: // SUB
                return a - b;
            case 2: // AND
                return a & b;
            case 3: // OR
                return a | b;
            case 4: // NOR
                return ~(a | b);
            case 5: // LSL
                return a << (b & 0xF);
            case 6: // LSR
                return a >>> (b & 0xF);
            case 7: // ASR
                return a >> (b & 0xF);
            default:
                throw new Error(`Unknown ALU operation: ${aluOp}`);
        }
    }

    private checkCondition(condition: number): boolean {
        switch (condition) {
            case 0: // EQ
                return this.zeroFlag;
            case 1: // NE
                return !this.zeroFlag;
            case 2: // LT
                return this.negativeFlag !== this.overflowFlag;
            case 3: // LE
                return this.zeroFlag || (this.negativeFlag !== this.overflowFlag);
            case 4: // GT
                return !this.zeroFlag && (this.negativeFlag === this.overflowFlag);
            case 5: // GE
                return this.negativeFlag === this.overflowFlag;
            default:
                throw new Error(`Unknown condition: ${condition}`);
        }
    }

    step(): boolean {
        if (this.pc >= this.instructionMemory.length) {
            return false;
        }

        const instruction = this.parseInstruction(this.instructionMemory[this.pc]);
        const src1Value = this.registers[instruction.src1];
        const src2Value = instruction.immediate ? instruction.src2 : this.registers[instruction.src2];

        switch (instruction.opcode) {
            case 0: // ALU
                const result = this.executeALU(instruction.aluOp, src1Value, src2Value);
                this.registers[instruction.dest] = result;
                this.updateFlags(result);
                this.pc++;
                break;

            case 1: // Branch
                if (this.checkCondition(instruction.aluOp)) {
                    // Convert 3-bit signed displacement to regular number
                    const displacement = instruction.dest;
                    this.pc += ((displacement & 0b100) ? displacement - 8 : displacement) + 1;
                } else {
                    this.pc++;
                }
                break;

            case 2: // Load
                const loadAddr = src1Value + (instruction.immediate ? instruction.src2 : src2Value);
                this.registers[instruction.dest] = this.memory[loadAddr];
                this.pc++;
                break;

            case 3: // Store
                const storeAddr = src1Value + (instruction.immediate ? instruction.src2 : src2Value);
                this.memory[storeAddr] = this.registers[instruction.dest];
                this.pc++;
                break;
        }

        return true;
    }

    run(): void {
        while (this.step()) {
            // For debugging:
            console.log(`PC: ${this.pc}`);
            console.log(`Registers: ${this.registers}`);
            console.log(`Memory: ${this.memory}`);
        }
    }

    getMemory(): number[] {
        return [...this.memory];
    }

    getRegisters(): number[] {
        return [...this.registers];
    }
}

// Example usage:
function compileCode(sourceCode: string): string[] {
    const astCompiler = new ASTCompiler();
    const ast = astCompiler.compile(sourceCode);
    const compiler = new Compiler();
    return compiler.compile(ast);
}

const sourceCode = `
a = 1;
b = 2;
while (a < 10) {
  b += 2;
  a += 1;
}
`;

const binaryInstructions = compileCode(sourceCode);

// Run it in the emulator
const emulator = new Emulator(binaryInstructions);
emulator.run();

// Check results
console.log('Final memory state:', emulator.getMemory());
console.log('Final register state:', emulator.getRegisters());