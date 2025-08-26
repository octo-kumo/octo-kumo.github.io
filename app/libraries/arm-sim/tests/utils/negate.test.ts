import { expect, test } from "bun:test";
import { fromSigned, negateSigned, toSigned } from "../../src/utils";

const BITS = 8;
test("negate", () => {
    expect(negateSigned(0b00000000n, BITS)).toBe(0b00000000n);
    expect(negateSigned(0b00000001n, BITS)).toBe(0b11111111n);
    expect(negateSigned(0b11111111n, BITS)).toBe(0b00000001n);
});


test("negate_random", () => {
    for (let i = 0; i < 1000; i++) {
        const value = BigInt(Math.floor(Math.random() * 2 ** BITS));
        const expected = toSigned(-fromSigned(value, BITS), BITS);
        expect(negateSigned(value, BITS)).toBe(expected);
    }
});