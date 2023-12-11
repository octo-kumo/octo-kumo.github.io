/**
 * A 2D Vector
 */

export function alwaysUp(radians: number) {
    let det = (radians / Math.PI) % 2
    if (det < 0) det += 2
    return det > 1 ? radians : radians + Math.PI
}

export interface VectorParams {
    x?: number;
    y?: number;
}

export default class Vector {
    static ZERO = new Vector({})

    constructor({x, y}: VectorParams) {
        this.set(x ?? 0, y ?? 0)
    }

    _x = 0

    get x(): number {
        return this._x
    }

    set x(value: number) {
        this._x = value
    }

    _y = 0

    get y(): number {
        return this._y
    }

    set y(value: number) {
        this._y = value
    }

    set(x: number | Vector, y?: number): Vector {
        if (x instanceof Vector) return this.set(x.x, x.y)
        this.x = x
        this.y = y ?? x
        return this
    }

    add(x: number | Vector, y?: number): Vector {
        return this.copy().incre(x, y)
    }

    minus(x: number | Vector, y?: number): Vector {
        return this.copy().decre(x, y)
    }

    incre(x: number | Vector, y?: number): Vector {
        if (x instanceof Vector) return this.set(this.x + x.x, this.y + x.y)
        return this.set(this.x + x, this.y + (y ?? x))
    }

    decre(x: number | Vector, y?: number): Vector {
        if (x instanceof Vector) return this.decre(x.x, x.y)
        return this.incre(-x, y ? -y : undefined)
    }

    scale(x: number, y?: number): Vector {
        return this.set(this.x * x, this.y * (y ?? x))
    }

    multi(x: number, y?: number): Vector {
        return this.copy().scale(x, y ?? x)
    }

    divide(scale: number): Vector {
        return this.copy().div(scale)
    }

    div(scale: number): Vector {
        return this.scale(1 / scale)
    }

    snap(grid: number): Vector {
        return this.div(grid).round().scale(grid)
    }

    snapTo(grid: number): Vector {
        return this.copy().snap(grid)
    }

    norm(): Vector {
        const len = this.len()
        if (len === 0) return this
        return this.scale(1 / len)
    }

    log(): Vector {
        return this.normalized().scale(Math.log(this.len()))
    }

    normalized(): Vector {
        return this.copy().norm()
    }

    len(): number {
        return Math.hypot(this.x, this.y)
    }

    len2(): number {
        return this.y * this.y + this.x * this.x
    }

    angle(): number {
        return Math.atan2(this.y, this.x)
    }

    cap(len: number): Vector {
        const clen = this.len()
        if (clen === 0) return this
        if (clen > len) return this.scale(len / clen)
        return this
    }

    dot(other: Vector): number {
        return this.x * other.x + this.y * other.y
    }

    round(): Vector {
        return this.set(Math.round(this.x), Math.round(this.y))
    }

    rounded(): Vector {
        return this.copy().round()
    }

    neg(): Vector {
        this.x = -this.x
        this.y = -this.y
        return this
    }

    negate(): Vector {
        return this.copy().neg()
    }

    copy(): Vector {
        return new Vector({x: this.x, y: this.y})
    }

    rot90(): Vector {
        return this.set(this.y, -this.x)
    }

    rotate90(): Vector {
        return this.copy().rot90()
    }

    toString() {
        return `(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`
    }
}
