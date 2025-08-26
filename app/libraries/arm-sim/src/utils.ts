
export function prettyPrint(code: number) {
    const bits = code.toString(2).padStart(32, '0');
    const cond = bits.slice(0, 4);
    const ic = bits.slice(4, 7);
    const op = bits.slice(7, 11);
    const S = bits.slice(11, 12);
    const rn = bits.slice(12, 16);
    const rd = bits.slice(16, 20);
    const op2 = bits.slice(20, 32);
    console.log(`+------+-----+------+---+------+------+--------------+`);
    console.log(`| cond | ic  |  op  | S |  rn  |  rd  | op2          |`);
    console.log(`+------+-----+------+---+------+------+--------------+`);
    console.log(`| ${cond} | ${ic} | ${op} | ${S} | ${rn} | ${rd} | ${op2} |`);
    console.log(`+------+-----+------+---+------+------+--------------+`);
}

export function signExtend(value: bigint, from_bits: number, to_bits: number) {
    const sign_bit = 1n << (BigInt(from_bits) - 1n);
    const is_negative = (value & sign_bit) !== 0n;
    if (is_negative) {
        const mask = ((1n << BigInt(to_bits)) - 1n) & ~((1n << BigInt(from_bits)) - 1n);
        return value | mask;
    }

    return value;
}

export function toSigned(value: bigint, bits: number) {
    const mask = (1n << BigInt(bits)) - 1n;
    if (value < 0n)
        return ((-value) ^ mask) + 1n & mask;
    else
        return value & mask;
}

export function fromSigned(value: bigint, bits: number) {
    const mask = (1n << BigInt(bits)) - 1n;
    if (value & 1n << BigInt(bits - 1))
        return -((value ^ mask) + 1n);
    else
        return value;
}

export function negateSigned(value: bigint, bits: number) {
    return toSigned(-value, bits);
}

export function plainToSignedString(a: bigint, nBits: bigint): string {
    if ((a > 0 && a >= 2n ** (nBits - 1n)) || (a < 0 && -a > 2n ** (nBits - 1n))) {
        throw new RangeError("overflow error");
    }
    return a >= 0
        ? a.toString(2).padStart(Number(nBits), "0")
        : (2n ** nBits + a).toString(2);
}