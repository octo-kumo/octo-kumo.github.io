import { isLiteral, parseLogicExpression } from ".";
// Tests generated by helpful ChatGPT
const stats = {
    expressions: {
        total: 0,
        failed: 0,
    },
    tests: {
        total: 0,
        failed: 0,
    },
}
function replaceOperatorsForEval(expression: string): string {
    return expression.replace(/\*/g, '&&').replace(/\+/g, '||');
}
function testLogicExpression(expression: string) {
    const { variables, evaluate } = parseLogicExpression(expression);
    const truthTable = generateTruthTable(variables);
    stats.expressions.total++;
    let failed = false;
    truthTable.forEach(row => {
        stats.tests.total++;
        const inputMapping = variables.reduce((acc, variable, idx) => {
            acc[variable] = row[idx];
            return acc;
        }, {} as { [key: string]: boolean });

        try {
            const jsExpression = expression.replace(/\b[a-zA-Z0-9]+\b/g, match => {
                const lit = isLiteral(match);
                if (lit !== undefined) return lit.toString();
                return inputMapping[match].toString();
            });
            const directEvalResult = eval(replaceOperatorsForEval(jsExpression)); // Evaluate with JS
            const parserResult = evaluate(row);          // Evaluate with the parser
            if (Boolean(directEvalResult) !== Boolean(parserResult)) {
                failed = true;
                stats.tests.failed++;
                console.log(`\nTesting expression: ${expression}`);
                console.log(replaceOperatorsForEval(jsExpression))
                // console.log(`Variables: ${variables}`);
                console.log(`Inputs: ${JSON.stringify(inputMapping)} -> JS Eval: ${directEvalResult}, Parser: ${parserResult}`);
                console.error(`Mismatch! Expected ${directEvalResult}, got ${parserResult}`);
            }
        } catch (e: any) {
            console.log(`\nTesting expression: ${expression}`);
            console.log('Variables:', variables);
            console.error(`Error! Expected ${e.message}, got ${e.message}`);
            stats.tests.failed++;
        }

    });
    if (failed) {
        stats.expressions.failed++;
    }
}
function generateTruthTable(variables: string[]): boolean[][] {
    const tableSize = 1 << variables.length; // 2^n combinations
    const truthTable: boolean[][] = [];

    for (let i = 0; i < tableSize; i++) {
        const row: boolean[] = [];
        for (let j = 0; j < variables.length; j++) {
            row.push((i & (1 << j)) !== 0);
        }
        truthTable.push(row);
    }

    return truthTable;
}
function runTests() {
    const testCases = [
        'a || b * c',                // Simple OR and AND
        '!a + b',                    // Unary NOT with OR
        'a * (b + c)',               // Nested parentheses
        'a == (b && !c)',            // Equality with AND and NOT
        'a + b == c',                // OR with equality
        '!(a + b) == !c',            // NOT applied to expressions
        '(a * b) + (c * d)',         // Multiple parentheses and AND/OR
        '(a || b) * (c || d)',       // ORs inside AND
        'a ^ b',                     // XOR between two variables
        'a && (b || c)',             // AND with OR inside
        '(a * b) == (c || !d)',      // Complex expression with comparison
        'a && b || c',               // AND with OR without parentheses
        'a * (b + c * d)',                             // AND inside OR inside AND
        'a + (b * (!c + d) * (e ^ f))',                // Mixed AND, OR, XOR, and NOT
        '((a + b) * (c + d)) == (e + !f)',             // Nested expressions with equality
        'a * b + (c * d) + (e * f)',                   // Multiple ANDs and ORs
        'a ^ (b * (c + (d == e)))',                    // XOR with nested parentheses and equality
        'a + b + c + d + e * f',                       // Long chain of ORs and a single AND
        '(a + b + c) * (d * e * f)',                   // ORs in one group and ANDs in another
        'a * (b + c) * (d + e) == f',                  // Equality after multiple AND/OR
        '!((a + b) * (!c + !d)) == (e * f)',           // Complex NOT expression
        'a * (b + c * (d ^ e) + f)',                   // Nested XOR with other operators
        '((a * b) + (c * d)) == (e * f)',              // Complex equality comparison
        'a + (b * (c + (d == (e + f))))',              // Deeply nested equality
        'a * (b + c * (d == (e + f))) * g',            // Deep nesting with multiple operators
        'a ^ b * c + d * e == (f || g)',               // XOR, AND, OR, and equality combined
        'a * (b + (c * d + e)) * f + g',               // Complex combination of operations
        'a + b * c + d * e + f + g * h',               // Long chain of ORs and ANDs
        '1a + 0b',                                      // '1 AND a OR 0 AND b'
        'a1 * b2',                                      // Two multi-letter variables
        'a + b == c',                                   // Basic OR and equality
        'a1 * (b2 + c3) == d4',                         // Multi-letter vars with AND, OR, and equality
        'hellow02 * 1a + b3',                           // Mixed variables and confusing cases
        '!(a1 + b2) == !c3',                            // Negation with multi-letter variables
        '1a * (b2 + c3) * d4',                          // Complex case with confusing vars and multi-letter
        '(a1 * b2) == (c3 + d4)',                       // Complex case with multiple comparisons
        'hellow02 * (1a + (b3 * d5)) + e6',             // Nested multi-letter and confusing variables
        '(1a || b2) * (c3 || d4)',                      // Parentheses around confusing and multi-letter variables
        '1a * (b2 + c3 * (d4 == e5))',                  // Deeply nested example
        'a1 * (b2 || c3 * (d4 == (e5 + f6)))',          // More complex deep nesting
        '((a1 * b2) + (c3 * d4)) == (e5 * f6)',         // Deep equality comparison
        'a1 + (b2 * (c3 + (d4 == (e5 + f6))))',         // Deeply nested equality
        'a1 * (b2 + c3 * (d4 == (e5 + f6))) * g7',      // Deep nesting with multiple operators
        'a1 ^ b2 * c3 + d4 * e5 == (f6 || g7)',         // XOR, AND, OR, and equality combined
        'a1 * (b2 + (c3 * d4 + e5)) * f6 + g7',         // Complex combination of operations
        'a1 + b2 * c3 + d4 * e5 + f6 + g7 * h8',        // Long chain of ORs and ANDs
        '1a1 + 0b2',                                   // '1 AND a1 OR 0 AND b2'
        'a1 * b2',                                     // Two multi-letter variables
        'a1 + b2 == c3',                               // Basic OR and equality
        'a1 * (b2 + c3) == d4',                         // Multi-letter vars with AND, OR, and equality
        'hellow02 * 1a1 + b2',                          // Mixed variables and confusing cases
        '!(a1 + b2) == !c3',                           // Negation with multi-letter variables
        '1a1 * (b2 + c3) * d4',                         // Complex case with confusing vars and multi-letter
        '(a1 * b2) == (c3 + d4)',                       // Complex case with multiple comparisons
        'hellow02 * (1a1 + (b2 * d5)) + e6',            // Nested multi-letter and confusing variables
        '(1a1 || b2) * (c3 || d4)',                     // Parentheses around confusing and multi-letter variables
        '1a1 * (b2 + c3 * (d4 == e5))',                 // Deeply nested example
        // multiple equalities nested with other operators
        'a == b == c',
        '(a==b)^c+d==e*(f||h==g)',
        'a+(b==c)==d',
        'a==b==c==d==e',
        '(((!(a==b))==(c==d))==(e==f))',
        // formulas with 'true' 'false' literals
        'true',
        'false',
        // longer, very complex ones with true false and all operators mixed
        '!(a + b) == !c || true && false',
        'a + b == c || false && true',
        'a * (b + c) * (d + e) == f && true || false',
        '!(a + b) == !c && true || false',
        'a + b == c || false && true',
        'a * (b + c) * (d + e) == f && true || false',
        '!(a + b) == !c && true || false',
        '((b^e+b^d)*(c^(a+f)==d*e))+(c*a)'
    ];

    testCases.forEach(expression => testLogicExpression(expression));
}
runTests();
console.log(`\n\nTests completed!`);
console.table(stats);
/*
Tests completed!
┌─────────────┬───────┬────────┐
│             │ total │ failed │
├─────────────┼───────┼────────┤
│ expressions │ 62    │ 0      │
│       tests │ 2968  │ 0      │
└─────────────┴───────┴────────┘
*/