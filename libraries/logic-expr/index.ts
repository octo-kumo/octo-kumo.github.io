const operators: { [key: string]: number } = {
    '!': 14,  // NOT
    '==': 8,  // EQUALS
    '^': 6,  // XOR
    '*': 4,  // AND
    '&&': 4, // AND
    '+': 3,  // OR
    '||': 3, // OR
};

function isOp(token: string): boolean {
    return operators.hasOwnProperty(token);
}
function getPrecedence(op: string): number {
    return operators[op];
}
function isMOp(expression: string, index: number): string | undefined {
    const op = expression.slice(index, index + 2);
    if (isOp(op)) return op;
    return undefined;
}
export function isLiteral(val: string): boolean | undefined {
    const lowerVal = val.toLowerCase();
    if (lowerVal === '1' || lowerVal === 'true') return true;
    if (lowerVal === '0' || lowerVal === 'false') return false;
    return undefined;
};
export type LogicExpression = {
    variables: string[];
    evaluate: (input: boolean[]) => boolean;
}
export function parseLogicExpression(expression: string): LogicExpression {
    const vars = new Set<string>();
    const queue: (string | boolean)[] = [];
    const stack: string[] = [];
    let cVar = '';
    const flushCVar = () => {
        if (cVar) {
            const literalValue = isLiteral(cVar);
            if (literalValue !== undefined) queue.push(literalValue);
            else {
                vars.add(cVar);
                queue.push(cVar);
            }
            cVar = '';
        }
    };

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (/\s/.test(char)) continue;
        const mop = isMOp(expression, i);
        if (mop) {
            flushCVar();
            i++;
            const op = mop;
            while (
                stack.length > 0 &&
                isOp(stack[stack.length - 1]) &&
                getPrecedence(stack[stack.length - 1]) >= getPrecedence(op)
            ) queue.push(stack.pop()!);
            stack.push(op);
        } else if (/[a-zA-Z0-9]/.test(char)) {
            cVar += char;
        } else {
            flushCVar();
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                while (stack.length > 0 && stack[stack.length - 1] !== '(')
                    queue.push(stack.pop()!);
                stack.pop();
            } else if (isOp(char)) {
                while (
                    stack.length > 0 &&
                    isOp(stack[stack.length - 1]) &&
                    getPrecedence(stack[stack.length - 1]) >= getPrecedence(char)
                ) queue.push(stack.pop()!);
                stack.push(char);
            }
        }
    }

    flushCVar();
    while (stack.length > 0) queue.push(stack.pop()!);

    const variables = Array.from(vars);
    const evaluate = (input: boolean[]): boolean => {
        const stack: boolean[] = [];
        queue.forEach(token => {
            if (typeof token === 'string') {
                if (isOp(token)) {
                    if (token === '!') {
                        const value = stack.pop();
                        stack.push(!value!);
                    } else if (token === '*' || token === '&&') {
                        const b = stack.pop();
                        const a = stack.pop();
                        stack.push(a! && b!);
                    } else if (token === '^') {
                        const b = stack.pop();
                        const a = stack.pop();
                        stack.push(a! !== b!);
                    } else if (token === '+' || token === '||') {
                        const b = stack.pop();
                        const a = stack.pop();
                        stack.push(a! || b!);
                    } else if (token === '==') {
                        const b = stack.pop();
                        const a = stack.pop();
                        stack.push(a! === b!);
                    }
                } else {
                    const varIndex = variables.indexOf(token);
                    stack.push(input[varIndex]);
                }
            } else {
                stack.push(token as boolean);
            }
        });

        return stack.pop()!;
    };

    return { variables, evaluate };
}

type Bit = '0' | '1' | 'x';
export function generateTruthTable({ variables, evaluate }: LogicExpression): Bit[] {
    const tableSize = 1 << variables.length; // 2^n combinations
    const truthTable: Bit[] = [];

    for (let i = 0; i < tableSize; i++) {
        const row: boolean[] = Array.from({ length: variables.length }, (_, idx) => (i & (1 << (variables.length - idx - 1))) !== 0);
        truthTable[i] = evaluate(row) ? '1' : '0';
    }

    return truthTable;
}