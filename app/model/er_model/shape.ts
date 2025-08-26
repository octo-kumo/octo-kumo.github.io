import Vector from "@/model/vector";
import type { CustomCTX } from "./model";

export abstract class Shape {
    predraw(_ctx: CustomCTX) {
        //
    }

    abstract draw(ctx: CustomCTX): void;

    abstract translated(x: number, y: number): Shape;

    dashed(ctx: CustomCTX) {
        ctx.setLineDash([2])
        this.draw(ctx)
        ctx.setLineDash([])
    }

    abstract contains(point: Vector): boolean;
}

export class Rectangle2D extends Shape {
    x: number
    y: number
    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx: CustomCTX): void {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.closePath()
        ctx.stroke()
    }

    translated(x: number, y: number): Shape {
        return new Rectangle2D(x + this.x, y + this.y, this.width, this.height)
    }

    contains(point: Vector): boolean {
        return point.x > this.x && point.x < this.x + this.width && point.y > this.y && point.y < this.y + this.height
    }
}

export class Ellipse2D extends Shape {
    x: number
    y: number
    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx: CustomCTX): void {
        ctx.beginPath()
        ctx.ellipse(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, this.height / 2, 0, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.stroke()
    }

    translated(x: number, y: number): Shape {
        return new Ellipse2D(x + this.x, y + this.y, this.width, this.height)
    }

    contains(point: Vector): boolean {
        const X = point.x - this.x - this.width / 2
        const Y = point.y - this.y - this.height / 2
        return X * X / this.width / this.width + Y * Y / this.height / this.height < 0.25
    }
}

export class Diamond extends Shape {
    x: number
    y: number
    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx: CustomCTX): void {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y + this.height / 2)
        ctx.lineTo(this.x + this.width / 2, this.y)
        ctx.lineTo(this.x + this.width, this.y + this.height / 2)
        ctx.lineTo(this.x + this.width / 2, this.y + this.height)
        ctx.closePath()
        ctx.stroke()
    }

    translated(x: number, y: number): Shape {
        return new Diamond(x + this.x, y + this.y, this.width, this.height)
    }

    contains(point: Vector): boolean {
        const X = this.x + this.width / 2 - point.x
        const Y = this.y + this.height / 2 - point.y
        return Math.max(Math.abs(X / this.width + Y / this.height), Math.abs(X / this.width - Y / this.height)) < 0.5
    }
}

// export function drawLine(ctx: CustomCTX, x1: number, y1: number, x2: number, y2: number) {
//     ctx.beginPath()
//     ctx.moveTo(x1, y1)
//     ctx.lineTo(x2, y2)
//     ctx.closePath()
//     ctx.stroke()
// }
