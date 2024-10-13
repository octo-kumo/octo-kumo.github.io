import type { Bit, Implicant } from ".";

export type ImplicantRect = {
    x: number;
    y: number;
    width: number;
    height: number;
    zs: number[];
};
export type DrawImplicantRect = {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    borders: { top: boolean, right: boolean, bottom: boolean, left: boolean };
    color: string;
};
export function drawImplicants(ts: HTMLCollection, width: number, height: number, imps: Implicant[]): DrawImplicantRect[] {
    // const ts = kmapTables.value?.children;
    // if (!ts) return [];
    const tbs = Array.from(ts).map(t => t.children[1] as HTMLTableSectionElement);
    // return []
    const gp = (_x: number, _y: number, _z: number) => {
        _z %= tbs.length;
        _y %= tbs[_z].rows.length;
        _x %= tbs[_z].rows[_y].cells.length - 1;
        const { x, y, width, height } = tbs[_z].rows[_y].cells[_x + 1].getBoundingClientRect();
        return { x: x, y: y, width, height };
    }
    function kmapPosNSize(a: Bit, b?: Bit) {
        if (!b) return a === 'x' ? [0, 2] : a === '0' ? [0, 1] : [1, 1];
        let l, s;
        if (a === 'x') {
            l = b === '0' ? 3 : b === '1' ? 1 : 0;
            s = b === 'x' ? 4 : 2;
        } else {
            l = (a === '0' ? (b === '1' ? 1 : 0) : (b === '0' ? 3 : 2));
            s = b === 'x' ? 2 : 1;
        }
        return [l, s];
    }
    const impl = imps.map((imp: Implicant) => {
        const r: ImplicantRect = { x: 0, y: 0, zs: [0], width: 0, height: 0 };
        if (imp.bits.length === 6) {
            [r.x, r.width] = kmapPosNSize(imp.bits[2], imp.bits[3]);
            [r.y, r.height] = kmapPosNSize(imp.bits[4], imp.bits[5]);
            const bitMap: { [k: string]: number[] } = {
                '00': [0],
                '01': [1],
                '10': [3],
                '11': [2],
                '0x': [0, 1],
                '1x': [3, 2],
                'x0': [0, 3],
                'x1': [1, 2],
                'xx': [0, 1, 2, 3]
            };
            r.zs = bitMap[imp.bits[0] + imp.bits[1]];
        } else if (imp.bits.length === 5) {
            [r.x, r.width] = kmapPosNSize(imp.bits[1], imp.bits[2]);
            [r.y, r.height] = kmapPosNSize(imp.bits[3], imp.bits[4]);
            r.zs = imp.bits[0] === '0' ? [0] : imp.bits[0] === '1' ? [1] : [0, 1];
        } else if (imp.bits.length === 4) {
            [r.x, r.width] = kmapPosNSize(imp.bits[0], imp.bits[1]);
            [r.y, r.height] = kmapPosNSize(imp.bits[2], imp.bits[3]);
        } else if (imp.bits.length === 3) {
            [r.x, r.width] = kmapPosNSize(imp.bits[0], imp.bits[1]);
            [r.y, r.height] = kmapPosNSize(imp.bits[2]);
        } else if (imp.bits.length === 2) {
            [r.x, r.width] = kmapPosNSize(imp.bits[0]);
            [r.y, r.height] = kmapPosNSize(imp.bits[1]);
        } else if (imp.bits.length === 1) {
            [r.x, r.width] = kmapPosNSize(imp.bits[0]);
            [r.y, r.height] = [0, 1];
        }
        return r;
    });
    const rects: DrawImplicantRect[] = [];
    for (let i = 0; i < impl.length; i++) {
        const imp = impl[i];
        for (let z of imp.zs) {
            const { x, y } = ts[z].getBoundingClientRect();
            const CTL = gp(0, 0, z);
            const CBR = gp(width - 1, height - 1, z);
            const r1 = gp(imp.x, imp.y, z);
            const r2 = gp(imp.x + imp.width - 1, imp.y + imp.height - 1, z);
            const xwrap = r2.x < r1.x;
            const ywrap = r2.y < r1.y;
            const color = `hsl(${i * 70}, 50%, 50%)`;
            const pad = 2 + i;
            function rect(x1: number, y1: number, x2: number, y2: number, borders: { top: boolean, right: boolean, bottom: boolean, left: boolean }): DrawImplicantRect {
                return {
                    z,
                    x: x1 - x + (borders.left ? pad : 0),
                    y: y1 - y + (borders.top ? pad : 0),
                    width: x2 - x1 - (borders.left ? pad : 0) - (borders.right ? pad : 0),
                    height: y2 - y1 - (borders.top ? pad : 0) - (borders.bottom ? pad : 0),
                    borders, color
                };
            }
            if (xwrap && ywrap) {
                rects.push(rect(r1.x, r1.y, CBR.x + CBR.width, CBR.y + CBR.height, { top: true, right: false, bottom: false, left: true }));
                rects.push(rect(r1.x, CTL.y, CBR.x + CBR.width, r2.y + r2.height, { top: false, right: false, bottom: true, left: true }));
                rects.push(rect(CTL.x, r1.y, r2.x + r2.width, CBR.y + CBR.height, { top: true, right: true, bottom: false, left: false }));
                rects.push(rect(CTL.x, CTL.y, r2.x + r2.width, r2.y + r2.height, { top: false, right: true, bottom: true, left: false }));
            } else if (xwrap && !ywrap) {
                rects.push(rect(r1.x, r1.y, CBR.x + CBR.width, r2.y + r2.height, { top: true, right: false, bottom: true, left: true }));
                rects.push(rect(CTL.x, r1.y, r2.x + r2.width, r2.y + r2.height, { top: true, right: true, bottom: true, left: false }));
            } else if (!xwrap && ywrap) {
                rects.push(rect(r1.x, r1.y, r2.x + r2.width, CBR.y + CBR.height, { top: true, right: true, bottom: false, left: true }));
                rects.push(rect(r1.x, CTL.y, r2.x + r2.width, r2.y + r2.height, { top: false, right: true, bottom: true, left: true }));
            } else if (!xwrap && !ywrap) {
                rects.push(rect(r1.x, r1.y, r2.x + r2.width, r2.y + r2.height, { top: true, right: true, bottom: true, left: true }));
            }
        }
    }
    return rects;
}