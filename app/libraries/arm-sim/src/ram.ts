export default class RAM {
    pager: Map<bigint, Page> = new Map();

    get_page(address: bigint, create = false): Page | undefined {
        let page = this.pager.get(address & BigInt("0xfffffffffffff000"));
        if (!page && create) {
            page = new Page(address & BigInt("0xfffffffffffff000"));
            this.pager.set(address & BigInt("0xfffffffffffff000"), page);
        }
        return page;
    }

    r8(address: bigint): number {
        return this.get_page(address)?.r8(address) ?? 0;
    }
    w8(address: bigint, value: number): void {
        this.get_page(address, true)?.w8(address, value);
    }
    r32(address: bigint): number {
        return this.get_page(address)?.r32(address) ?? 0;
    }
    w32(address: bigint, value: number): void {
        this.get_page(address, true)?.w32(address, value);
    }
    r64(address: bigint): bigint {
        return this.get_page(address)?.r64(address) ?? BigInt(0);
    }
    w64(address: bigint, value: bigint): void {
        this.get_page(address, true)?.w64(address, value);
    }
}

class Page {
    offset: bigint = BigInt('0');
    data: Uint8Array = new Uint8Array(4096);

    constructor(offset: bigint) {
        this.offset = offset;
    }

    r8(address: bigint): number {
        return this.data[Number(address - this.offset)];
    }

    w8(address: bigint, value: number): void {
        this.data[Number(address - this.offset)] = value;
    }

    r16(address: bigint): number {
        let addr = Number(address - this.offset)
        if (addr % 2 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        return (this.data[addr] << 8) | this.data[addr + 1];
    }

    w16(address: bigint, value: number): void {
        let addr = Number(address - this.offset)
        if (addr % 2 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        this.data[addr] = (value >> 8) & 0xff;
        this.data[addr + 1] = value & 0xff;
    }

    r32(address: bigint): number {
        let addr = Number(address - this.offset)
        if (addr % 4 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        return (this.data[addr] << 24) | (this.data[addr + 1] << 16) | (this.data[addr + 2] << 8) | this.data[addr + 3];
    }

    w32(address: bigint, value: number): void {
        let addr = Number(address - this.offset)
        if (addr % 4 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        this.data[addr] = (value >> 24) & 0xff;
        this.data[addr + 1] = (value >> 16) & 0xff;
        this.data[addr + 2] = (value >> 8) & 0xff;
        this.data[addr + 3] = value & 0xff;
    }

    r64(address: bigint): bigint {
        let addr = Number(address - this.offset)
        if (addr % 8 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        return (BigInt(this.data[addr]) << BigInt(56)) | (BigInt(this.data[addr + 1]) << BigInt(48)) | (BigInt(this.data[addr + 2]) << BigInt(40)) | (BigInt(this.data[addr + 3]) << BigInt(32)) | (BigInt(this.data[addr + 4]) << BigInt(24)) | (BigInt(this.data[addr + 5]) << BigInt(16)) | (BigInt(this.data[addr + 6]) << BigInt(8)) | BigInt(this.data[addr + 7]);
    }

    w64(address: bigint, value: bigint): void {
        let addr = Number(address - this.offset)
        if (addr % 8 !== 0) throw new Error(`Unaligned memory access at ${address}`);
        this.data[addr] = Number((value >> 56n) & 0xffn);
        this.data[addr + 1] = Number((value >> 48n) & 0xffn);
        this.data[addr + 2] = Number((value >> 40n) & 0xffn);
        this.data[addr + 3] = Number((value >> 32n) & 0xffn);
        this.data[addr + 4] = Number((value >> 24n) & 0xffn);
        this.data[addr + 5] = Number((value >> 16n) & 0xffn);
        this.data[addr + 6] = Number((value >> 8n) & 0xffn);
        this.data[addr + 7] = Number(value & 0xffn);
    }
}