import { expect, test } from "bun:test";
import { plainToSignedString, signExtend } from "../../src/utils";

test("sign_extend", () => {
    expect(signExtend(0b1111n, 4, 8)).toBe(0b11111111n);
    expect(signExtend(0b0111n, 4, 8)).toBe(0b00000111n);
    expect(signExtend(0b0000n, 4, 8)).toBe(0b00000000n);
    expect(signExtend(0b1000n, 4, 8)).toBe(0b11111000n);
    expect(signExtend(0b1000n, 4, 16)).toBe(0b1111111111111000n);
    expect(signExtend(0b1000n, 4, 32)).toBe(0b11111111111111111111111111111000n);
});

test("sign_extend_random", () => {
    for (let i = 0; i < 1000; i++) {
        const from = 1 + Math.floor(Math.random() * 32);
        const to = from + Math.floor(Math.random() * 32);
        const value = BigInt(Math.floor(Math.random() * 2 ** from)) - 2n ** BigInt(from - 1);
        const expected = plainToSignedString(value, BigInt(to));
        const actual = plainToSignedString(signExtend(value, from, to), BigInt(to));
        expect(actual).toBe(expected);
    }
});


