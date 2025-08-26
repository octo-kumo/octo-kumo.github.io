import Vector, { alwaysUp } from "@/model/vector";
import { Shape } from "@/model/er_model/shape";
import type { CustomCTX, Relation } from "@/model/er_model/model";
import { ERObject } from "@/model/er_model/model";

export interface LineParam {
    a?: Vector
    b?: Vector
}

export interface RelationLineParam {
    a: ERObject;
    b: ERObject;
    r: Relation;
}

export type LineStyle = "curve" | "straight" | "axis"


export function lineUnderString(ctx: CustomCTX, text: string) {
    const textMetrics = ctx.measureText(text)
    return new Line({
        a: new Vector({ x: -textMetrics.width / 2, y: textMetrics.actualBoundingBoxAscent }),
        b: new Vector({ x: textMetrics.width / 2, y: textMetrics.actualBoundingBoxAscent })
    })
}

export function fancyLine(ctx: CustomCTX, a: Vector, b: Vector, style: LineStyle) {
    const d = b.minus(a)
    const s = a.add(b)
    const horizontal = Math.abs(d.y) < Math.abs(d.x)
    const mid = horizontal ? s.x / 2 : s.y / 2
    ctx.beginPath()
    switch (style) {
        case 'straight':
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            break
        case 'axis':
            moveTo(a.x, a.y)
            if (horizontal) {
                ctx.lineTo(mid, a.y)
                ctx.lineTo(mid, b.y)
            } else {
                ctx.lineTo(a.x, mid)
                ctx.lineTo(b.x, mid)
            }
            ctx.lineTo(b.x, b.y)
            break
        case 'curve':
            moveTo(a.x, a.y)
            if (horizontal) ctx.bezierCurveTo(mid, a.y, mid, b.y, b.x, b.y)
            else ctx.bezierCurveTo(a.x, mid, b.x, mid, b.x, b.y)
            break
    }
    ctx.closePath()
}


export class Line extends Shape {
    a!: Vector
    b!: Vector

    constructor({ a, b }: LineParam) {
        super()
        this.a = a ?? new Vector({})
        this.b = b ?? new Vector({})
    }

    draw(ctx: CustomCTX) {
        ctx.beginPath()
        ctx.moveTo(this.a.x, this.a.y)
        ctx.lineTo(this.b.x, this.b.y)
        ctx.closePath()
        ctx.stroke()
    }

    translated(x: number, y: number): Shape {
        return new Line({ a: this.a.add(x, y), b: this.b.add(x, y) })
    }

    contains(_point: Vector): boolean {
        return false
    }
}

export class RelationLine extends Line {
    private r: Relation
    private normal = new Vector({})

    constructor({ a, b, r }: RelationLineParam) {
        super({ a, b })
        this.r = r
    }

    override predraw(ctx: CustomCTX) {
        this.setNormal()
        const a = this.getStart()
        const b = this.getEnd()
        if (this.r.total) {
            ctx.lineWidth = 4
            fancyLine(ctx, a, b, 'straight')
            ctx.stroke()

            ctx.lineWidth = 3
            ctx.strokeStyle = ctx.background
            fancyLine(ctx, a, b, 'straight')
            ctx.stroke()
            ctx.strokeStyle = ctx.foreground
            ctx.lineWidth = 1
        } else {
            fancyLine(ctx, a, b, 'straight')
            ctx.stroke()
        }
    }

    override draw(ctx: CustomCTX) {
        this.setNormal()
        const a = this.getStart()
        const b = this.getEnd()
        const d = b.minus(a)
        const c = a.add(b).div(2)
        if (this.r.role) {
            const mid = b.add(a).div(2)
            const angle = alwaysUp(d.angle() - Math.PI / 2) + Math.PI / 2
            ctx.save()
            ctx.translate(mid.x, mid.y)
            ctx.rotate(angle)
            ctx.fillStyle = ctx.background
            const metrics = ctx.measureText(this.r.role)
            const w = metrics.width
            const h = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
            ctx.fillRect(-w / 2, -h / 2, w, h)
            ctx.fillStyle = ctx.foreground
            ctx.fillText(this.r.role, 0, 0)
            ctx.restore()
        }
        if (this.r.cardinality) {
            const dist = 10
            const angle = alwaysUp(d.angle() + Math.PI / 2) +
                ((this.r.uniqueIndex || 0) % 2 === (d.x >= 0 ? 1 : 0) ? 0 : Math.PI)
            c.incre(Math.cos(angle) * dist, Math.sin(angle) * dist)
            ctx.fillText(this.r.cardinality, c.x, c.y)
        }
    }

    getStart() {
        return this.a.add(this.normal.multi(this.bouncingIndex(this.r.uniqueIndex ?? 0) + ((this.r.dupeCount ?? 0) % 2 === 0 ? -0.5 : 0)))
    }

    getEnd() {
        return this.b.add(this.normal.multi(this.bouncingIndex(this.r.uniqueIndex ?? 0) + ((this.r.dupeCount ?? 0) % 2 === 0 ? -0.5 : 0)))
    }

    setNormal() {
        this.normal.set(this.b.minus(this.a).rot90().norm().scale(15))
    }

    bouncingIndex(i: number) {
        return i % 2 === 0 ? -Math.floor(i / 2) : Math.floor(i / 2) + 1
    }
}
