import { factorizedToLatex, optimizeFactorized, SoP, type Bit } from "..";
import { generateTruthTable, parseLogicExpression } from "../expression";

const expr = parseLogicExpression("a*b*c*e+b*!d*!e+!b*d*e+!b*!e*(a^c)+!a*b*!c*e");
const varName = (i: number) => expr.variables[i];
const factorized = optimizeFactorized(SoP(toExpression(generateTruthTable(expr)), expr.variables.length), 2);
console.log(factorizedToLatex(factorized, varName, 'c'));

function toExpression(rows: Bit[]): string {
    const m = rows.map((v, i) => v === '1' ? i : -1).filter(i => i !== -1);
    const d = rows.map((v, i) => v === 'x' ? i : -1).filter(i => i !== -1);
    return 'm(' + m.join(',') + ')' + (d.length ? '+d(' + d.join(',') + ')' : '');
}