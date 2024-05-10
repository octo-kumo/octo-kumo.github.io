<template>
  <canvas
      id="editor"
      ref="editor"
      tabindex="1"
      @drop.prevent="dropped"
      @wheel="scrolled"
      @click="clicked"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
      @keydown="keydown"
  />
</template>
<script setup lang="ts">
import Vector from "~/model/vector";
import type {ERObject} from "~/model/er_model/model";
import {Attribute, Entity, flatten, getObjectType, Relationship, Specialization} from "~/model/er_model/model";
import type {ObjectType} from "~/model/er_model/data-types";

useHead({
  title: 'Evil ER',
  meta: [
    {name: 'description', content: 'Shadow of its formal glory'},
    {name: "oldUrl", content: 'https://github.com/octo-kumo/cs6131-project'}
  ],
});
const editor = ref(null as HTMLCanvasElement | null);
const nodes: ERObject[] = reactive([]);

function PIXEL_RATIO() {
  const ctx: any = document.createElement("canvas").getContext("2d")
  const dpr = window.devicePixelRatio || 1
  const bsr = ctx["webkitBackingStorePixelRatio"] ||
      ctx["mozBackingStorePixelRatio"] ||
      ctx["msBackingStorePixelRatio"] ||
      ctx["oBackingStorePixelRatio"] ||
      ctx["backingStorePixelRatio"] || 1

  return dpr / bsr
}

const LEFT_BUTTON = 0
// const WHEEL_BUTTON = 1
// const RIGHT_BUTTON = 2

let mouseState: '' | 'empty' | 'dragging' | 'selecting' = ''

let ratio = 0
let lastCalledTime = 0
let fps = 0

let origin = new Vector({x: 200, y: 200})
let scale = 1

let mousePos = new Vector({})
let mouseWorld = new Vector({})

let panStart = new Vector({})
let mouseStart = new Vector({})

let selected: ERObject | Attribute | Relationship | Specialization | null = null

onMounted(() => {
  ratio = PIXEL_RATIO()
  paint()
  fetch("json/erdiagram.json").then(res => res.json())
      .then(objs => {
        const PA = (O: ERObject, o: ERObject) => {
          for (let A of O.attributes) {
            A.parent = o;
            A._parent = o.id;
            const a = new Attribute(A);
            PA(A, a);
            o.attributes.push(a);
          }
        }
        for (const O of objs) {
          const T = getObjectType(O.type);
          if (!T) continue;
          const o = new T(O);
          nodes.push(o);
          PA(O, o);
        }
        for (let O of objs) {
          const o = nodes.find(n => n.id === O.id);
          if (O.type as ObjectType === "relationship" || O.type as ObjectType === "specialization") {
            for (let i = 0; i < O.nodes.length; i++) {
              (o as Relationship).addRelation({
                entity: nodes.find(n => n.name === O.nodes[i])!,
                cardinality: O.specs[i].amm,
                role: O.specs[i].role,
                total: O.specs[i].total,
              });
            }
          }
        }
      });
})


// function emitUpdateEvent(obj: ERObject, fields?: (keyof (objectEntity & attributeEntity & specializationEntity))[]) {
//   let payload = obj.toObject(did)
//   if (fields) {
//     fields = [...fields, 'id', 'did']
//     const newPayload: objectEntity = {} as objectEntity
//     // @ts-ignore
//     for (const f of fields) newPayload[f] = payload[f]
//     payload = newPayload
//   }
// }

function paint() {
  if (!editor) return
  const ctx = editor.value?.getContext("2d")
  if (!ctx) return
  setupCanvas(editor.value!, ctx, window.innerWidth, window.innerHeight)
  ctx.save()
  nodes.forEach(n => n.predraw(ctx))
  nodes.forEach(n => n.draw(ctx))

  if (selected) {
    ctx.strokeStyle = '#f00'
    selected.getShapeWorld().draw(ctx)
    ctx.strokeStyle = '#000'
  }

  calculateFPS()
  requestAnimationFrame(() => paint())
}

function setupCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, w: number, h: number) {
  canvas.width = w * ratio
  canvas.height = h * ratio
  canvas.style.width = w + "px"
  canvas.style.height = h + "px"
  ctx.strokeStyle = "#000"
  ctx.font = "plain 24px serif"
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  drawInfo(ctx)
  ctx.translate(0.5, 0.5)
  ctx.scale(scale, scale)
  ctx.translate(origin.x, origin.y)
  ctx.fillRect(mouseWorld.x, mouseWorld.y, 10, 10)

  ctx.textAlign = "center"
  ctx.textBaseline = 'middle'
}

function drawInfo(ctx: CanvasRenderingContext2D) {
  ctx.fillText(`fps: ${fps.toFixed(2)}`, 10, 80)
  ctx.fillText(`scale: ${scale.toFixed(2)}`, 10, 90)
  ctx.fillText(`origin: ${origin.x.toFixed(2)}, ${origin.y.toFixed(2)}`, 10, 100)
  ctx.fillText(`screen: (${window.innerWidth}, ${window.innerHeight}) x${ratio}→ (${ctx.canvas.width}, ${ctx.canvas.height})`, 10, 110)
  ctx.fillText(`entities: ${nodes.length}`, 10, 120)
  ctx.fillText(`state = ${mouseState}`, 10, 140)
  ctx.fillText(`er-editor demo, a shadow of its former version (SQL+Sockets+Live+Colab)`, 10, 150)
  if (selected) ctx.fillText(`selected = ${selected}`, 10, 160)
}

function calculateFPS() {
  const delta = (performance.now() - lastCalledTime) / 1000
  lastCalledTime = performance.now()
  fps = 1 / delta
}

/**
 * Mouse Event Handlers
 */
function clicked(e: MouseEvent) {
  mousePos.set(e.x, e.y)
  mouseWorld.set(unproject(mousePos))
  if (e.button === LEFT_BUTTON) {
    const element = e.currentTarget as (EventTarget & { clicks?: number, lastClick?: number })
    if (!element) return
    if ((element.lastClick ?? 0) - (element.lastClick = Date.now()) > -200) {
      element.clicks = (element.clicks || 0) + 1
    } else element.clicks = 1
    if (element.clicks >= 2) {
      element.clicks = 0
      if (!selected) {
        nodes.push(selected = new Entity({
          _type: 'entity',
          id: crypto.randomUUID(),
          name: "Unnamed",
          x: mouseWorld.x,
          y: mouseWorld.y
        }))
      }
    }
  }
  //
}

function mouseDown(e: MouseEvent) {
  mousePos.set(e.x, e.y)
  mouseWorld.set(unproject(mousePos))
  if (e.button === LEFT_BUTTON) {
    if (selected) {
      selected.highlight = false
      selected = null
    }
    const flat = flatten(nodes)
    for (const e1 of flat) {
      if (e1.getShapeWorld().contains(mouseWorld)) {
        (selected = e1).highlight = true
        break
      }
    }

    if (!selected) {
      mouseState = "empty"
      panStart.set(origin)
      mouseStart.set(mousePos)
    } else {
      mouseState = "dragging"
      mouseStart.set(mouseWorld.minus(selected))
    }
  }
}

function mouseUp(e: MouseEvent) {
  mousePos.set(e.x, e.y)
  mouseWorld.set(unproject(mousePos))
  // if (selected) {
  //   emitUpdateEvent(selected, ['x', 'y'])
  //   flatten(selected.attributes).forEach(e => emitUpdateEvent(e, ['x', 'y']))
  // }
  mouseState = ""
}

function mouseMove(e: MouseEvent) {
  mousePos.set(e.x, e.y)
  mouseWorld.set(unproject(mousePos))
  if (mouseState === "empty") { // Pan camera
    origin.set(panStart.add(mousePos.minus(mouseStart).div(scale)))
  } else if (mouseState === "dragging" && selected) {
    selected.set(mouseWorld.minus(mouseStart))
  }
  // console.log("move", e)
}

function keydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'Backspace':
      if (selected && (e.metaKey || e.ctrlKey)) deleteNode(selected)
      break
  }
  console.log(e)
}

function scrolled(e: WheelEvent) {
  const mouse = new Vector({x: e.x, y: e.y})
  const a = mouse.divide(scale)
  scale *= Math.pow(0.9, e.deltaY / 300)
  const b = mouse.divide(scale)
  origin.incre(b.minus(a))
}

function deleteNode(node: ERObject) {
  for (const o of nodes.filter(n => n._type === 'relationship')) {
    const r = o as Relationship
    r.removeRelations(r.relations.filter(R => R.entity === node))
    // ?.forEach((R: any) => notifyRelationDeleted(R as Relation, r))
  }
  // io?.emit(DELETE_OBJECT, node.toObject(did))
}

// function notifyRelationCreated(r: Relation, relationship: Relationship) {
//   io?.emit(CREATE_RELATE, relationToObj(r, did, relationship))
// }

// function notifyRelationUpdated(r: Relation, relationship: ERObject, old?: string) {
//   console.log(old, typeof old)
//   io?.emit(UPDATE_RELATE, relationToObj(r, did, relationship, old))
// }

// function notifyRelationDeleted(r: Relation, relationship: ERObject) {
//   io?.emit(DELETE_RELATE, relationToObj(r, did, relationship))
// }

/**
 * Dragging
 */

// function checkDrop(e: DragEvent) {
//   // console.log(e, e.dataTransfer)
// }

function dropped(e: DragEvent) {
  const pos = unproject(new Vector({x: e.x, y: e.y}))
  const Type = getObjectType(e.dataTransfer?.getData('type') as ObjectType)
  if (!Type) return
  const obj = new Type({
    id: crypto.randomUUID(),
    x: pos.x,
    y: pos.y,
    name: "Unnamed",
    _type: e.dataTransfer?.getData('type') as ObjectType
  })
  nodes.push(obj)
  // io?.emit(CREATE_OBJECT, obj.toObject(did))
}

function unproject(vector: Vector) {
  return vector.divide(scale).decre(origin)
}
</script>

<style scoped>
#editor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
