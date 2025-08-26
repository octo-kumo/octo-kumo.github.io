import type { VectorParams } from "@/model/vector";
import Vector from "@/model/vector";
import { Diamond, Ellipse2D, Rectangle2D, Shape } from "@/model/er_model/shape";
import type { attributeEntity, objectEntity, ObjectType, specializationEntity } from "@/model/er_model/data-types";
import { Line, lineUnderString, RelationLine } from "@/model/er_model/line";

export type AttributeType = 'char' | 'string' | 'boolean' | 'integer' | 'float' | 'datetime' | 'date';

export type RelationParam = ObjectParams

export interface Relation {
    entity: Entity;
    role?: string;
    cardinality?: string;
    total?: boolean;

    index?: number;
    dupeCount?: number;
    uniqueIndex?: number;
}

export interface SpecializationParam extends RelationParam {
    disjoint?: boolean;
    superclass?: Entity;
}

export interface AttributeParams extends ObjectParams {
    key?: boolean;
    derived?: boolean;
    type?: AttributeType;
    parent?: ERObject;
    _parent?: string;
}

export interface ObjectParams extends VectorParams {
    id: string;
    name: string;
    weak?: boolean;
    _type: ObjectType;
}

export type CustomCTX = CanvasRenderingContext2D & { background: string, foreground: string };

export const WIDTH = 100
export const HEIGHT = 40

export class ERObject extends Vector {
    _trueWidth = WIDTH
    _type: ObjectType
    id: string
    name: string
    weak: boolean
    attributes: Attribute[] = []
    highlight = false

    constructor({ id, name, weak, x, y, _type }: ObjectParams) {
        super({ x, y })
        this._type = _type
        this.id = id ?? crypto.randomUUID()
        this.name = name
        this.weak = weak ?? false
    }

    predraw(ctx: CustomCTX) {
        ctx.save()
        ctx.translate(this._x, this._y)
        this.prepaint(ctx)
        ctx.restore()
    }

    draw(ctx: CustomCTX) {
        ctx.save()
        ctx.translate(this._x, this._y)
        this.paint(ctx)
        ctx.restore()
    }

    prepaint(ctx: CustomCTX) {
        this._trueWidth = this.updateTrueWidth(ctx)
        this.attributes.forEach(a => a.predraw(ctx))
    }

    paint(ctx: CustomCTX) {
        this._trueWidth = this.updateTrueWidth(ctx)
        this.attributes.forEach(a => a.draw(ctx))
        this.drawShape(ctx)
        ctx.fillText(this.name, 0, 0)
    }

    drawShape(ctx: CustomCTX, shape?: Shape) {
        if (shape) {
            shape.draw(ctx)
        } else {
            this.drawShape(ctx, this.getShape())
            if (this.weak) this.drawShape(ctx, this.getShape(this._trueWidth - 6, HEIGHT - 6))
        }
        ctx.fillStyle = ctx.background
        ctx.fill()
        ctx.fillStyle = ctx.foreground
        ctx.stroke()
    }

    getShape(width?: number, height?: number): Shape {
        if (width && height) return new Rectangle2D(-width / 2, -height / 2, width, height)
        else return this.getShape(this._trueWidth, HEIGHT)
    }

    getShapeWorld(): Shape {
        return this.getShape().translated(this.x, this.y)
    }

    updateTrueWidth(ctx: CustomCTX) {
        return Math.max(WIDTH, ctx.measureText(this.name).width * 1.05)
    }

    override toString() {
        return `[${this.name} ${super.toString()}]`
    }

    toObject(did: string): objectEntity {
        return { did, id: this.id, name: this.name, outlined: this.weak, type: this._type, x: this.x, y: this.y }
    }
}

export class Relationship extends ERObject {
    relations: Relation[] = []
    lines: RelationLine[] = []

    addRelation(relation: Relation) {
        this.relations.push(relation)
        this.revalidate()
    }

    //
    // removeRelation(i: number) {
    //     const r = this.relations.splice(i, 1)
    //     this.revalidate()
    //     return r
    // }

    removeRelations(is: number[] | Relation[]) {
        if (!Array.isArray(is) || is.length === 0) return
        if (is[0] instanceof Number) {
            is = is as number[]
            is = is.sort((a, b) => b - a)
            is.forEach(i => this.relations.splice(i, 1))
        }
        if (typeof is[0] === 'object') {
            is = is as Relation[]
            this.relations = this.relations.filter(R => !is.includes(R as (Relation & number)))
        }
        this.revalidate()
        return is
    }

    revalidate() {
        const map = new Map<string, number>()
        for (let i = 0; i < this.relations.length; i++) {
            const r = this.relations[i]
            r.index = i
            map.set(r.entity.id, (r.uniqueIndex = (map.get(r.entity.id) ?? 0)) + 1)
        }
        for (let i = 0; i < this.relations.length; i++) {
            this.relations[i].dupeCount = map.get(this.relations[i].entity.id) ?? 0
            this.lines[i] = new RelationLine({ a: this, b: this.relations[i].entity, r: this.relations[i] })
        }
    }

    override predraw(ctx: CustomCTX) {
        super.predraw(ctx)
        this.lines.forEach(l => l.predraw(ctx))
        this.lines.forEach(l => l.draw(ctx))
    }

    override getShape(width?: number, height?: number): Shape {
        if (width && height) return new Diamond(-width / 2, -height / 2, width, height)
        else return this.getShape(this._trueWidth, HEIGHT)
    }

    override drawShape(ctx: CustomCTX, shape?: Shape) {
        if (shape) super.drawShape(ctx, shape)
        else {
            this.drawShape(ctx, this.getShape())
            this._trueWidth = Math.max(WIDTH, ctx.measureText(this.name).width * 1.05)
            if (this.weak) this.drawShape(ctx, this.getShape(this._trueWidth - 15, HEIGHT - 6))
        }
    }
}


export class Specialization extends Relationship {
    disjoint: boolean

    constructor({ id, name, weak, superclass, disjoint, x, y, _type }: SpecializationParam) {
        super({ id, name, weak, x, y, _type })
        this.disjoint = Boolean(disjoint)
        if (superclass) this.addRelation({ entity: superclass })
    }

    // setSuper(entity?: Entity) {
    //     if (!entity) return delete this.relations[0]
    //     this.relations[0] = {entity}
    // }
    //
    // getSuper() {
    //     return this.relations[0]?.entity
    // }

    override drawShape(ctx: CustomCTX, shape?: Shape) {
        if (shape) {
            if (this.relations.length === 2) {
                // if (ctx.context.exporting()) return;
                shape.dashed(ctx)
            } else shape.draw(ctx)
            ctx.fillStyle = ctx.background
            ctx.fill()
            ctx.fillStyle = ctx.foreground
            ctx.stroke()
        } else this.drawShape(ctx, this.getShape())
    }

    override paint(ctx: CustomCTX) {
        this.attributes.forEach(a => a.draw(ctx))
        this.drawShape(ctx)
        if (this.relations.length === 2) return
        ctx.fillText(this.name, 0, 0)
    }

    override getShape(width?: number, height?: number): Shape {
        if (width && height) return new Ellipse2D(-height * 0.25, -height * 0.25, height * 0.5, height * 0.5)
        else return this.getShape(this._trueWidth, HEIGHT)
    }

    override toObject(did: string): objectEntity & specializationEntity {
        return { disjoint: this.disjoint, ...super.toObject(did) }
    }
}

export class Attribute extends ERObject {
    parent?: ERObject
    _parent?: string
    key: boolean // underline
    derived: boolean // dashed outline

    type: AttributeType

    // param?: string

    constructor({ id, name, weak, key, derived, type, parent, x, y, _parent, _type }: AttributeParams) {
        super({ id, name, weak, x, y, _type })
        this.key = key ?? false
        this.derived = derived ?? false
        this.type = type ?? 'string'
        this.parent = parent
        this._parent = _parent
    }

    override get y(): number {
        return this._y + (this.parent?.y ?? 0)
    }

    override set y(value: number) {
        this._y = value - (this.parent?.y ?? 0)
    }

    override get x(): number {
        return this._x + (this.parent?.x ?? 0)
    }

    override set x(value: number) {
        this._x = value - (this.parent?.x ?? 0)
    }

    override drawShape(ctx: CustomCTX, shape?: Shape) {
        if (shape) {
            if (this.derived) shape.dashed(ctx)
            else shape.draw(ctx)
        } else super.drawShape(ctx)
        ctx.fillStyle = ctx.background
        ctx.fill()
        ctx.fillStyle = ctx.foreground
        ctx.stroke()
    }

    override prepaint(ctx: CustomCTX) {
        super.prepaint(ctx)
        new Line({ b: this.truePosition().neg() }).draw(ctx)
    }

    override paint(ctx: CustomCTX) {
        super.paint(ctx)
        if (this.key) {
            const shape = lineUnderString(ctx, this.name).translated(0, 3)
            if (this.parent instanceof ERObject && this.parent?.weak) shape.dashed(ctx)
            else this.drawShape(ctx, shape)
        }
        // if (ctx.getContext().drawDebugInfo()) {
        //   ctx.scale(0.7, 0.7);
        //   ctx.drawStringCenter(getDataType() + "(" + getDataParam() + ")", 0, -12);
        // }
    }

    override getShape(width?: number, height?: number): Shape {
        if (width && height) return new Ellipse2D(-width / 2, -height * 0.7 / 2, width, height * 0.7)
        else return this.getShape(this._trueWidth * 0.7, HEIGHT)
    }

    truePosition() {
        return new Vector({ x: this._x, y: this._y })
    }

    setParent(parent?: ERObject) {
        const pos = this.copy()
        this.parent = parent
        this.set(pos)
        return this.parent
    }

    override updateTrueWidth(ctx: CustomCTX) {
        return Math.max(WIDTH * 0.7, ctx.measureText(this.name).width * 1.05)
    }

    override toObject(did: string): objectEntity & attributeEntity {
        return { isDerived: this.derived, isKey: this.key, pid: this.parent?.id ?? null, ...super.toObject(did) }
    }
}

export class Entity extends ERObject {
}

export function getObjectType(type: ObjectType) {
    switch (type) {
        case "attribute":
            return Attribute
        case "relationship":
            return Relationship
        case "entity":
            return Entity
        case "specialization":
            return Specialization
        default:
            return null
    }
}

// function predraw(ctx: CustomCTX, relationship: Relationship, relation: Relation) {
//     drawLine(ctx, relationship.x, relationship.y, relation.entity.x, relation.entity.y)
// }

// export function relationToObj(r: Relation, did: string, relationship: ERObject, old?: string): relatesEntity {
//     return <relatesEntity>{
//         did,
//         cardinality: r.cardinality,
//         oid: r.entity.id,
//         rid: relationship.id,
//         role: r.role,
//         total: r.total,
//         ooid: old
//     }
// }

export function flatten(nodes: ERObject[]): ERObject[] {
    return [...nodes, ...nodes.flatMap(n => flatten(n.attributes))]
}
