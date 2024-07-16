import {ADDITION, Brush, Evaluator} from 'three-bvh-csg';
import {TileWorld} from "~/games/civilisation-0/terrain/tileworld";
import {type BufferGeometry, Group, Material, MeshBasicMaterial, MeshPhongMaterial, Vector2, Vector3} from "three";
import quickNoise, {type PerlinNoise} from "~/games/civilisation-0/terrain/noise";
import {AllAssets, type AssetName} from "~/games/civilisation-0/types";
import {Mesh} from "three/src/objects/Mesh";
import {csmSetupMaterial, loadAsset} from "~/games/civilisation-0/assets";
import {mergeGeometries} from "three/examples/jsm/utils/BufferGeometryUtils";
import PQueue from 'p-queue';
import {Tile} from "~/games/civilisation-0/tile";
import {CLIFF_RULES, getRuledBlocks, GROUND_RULES} from "~/games/civilisation-0/terrain/wfc_rules";
import {GroundObject} from "~/games/civilisation-0/ground_object";

const resolution = 10;
const GROUND_MATERIAL = new MeshPhongMaterial({
    color: 0x73EDDD,
    shininess: 0
});

function height(perlin: PerlinNoise, x: number, z: number) {
    return Math.round(perlin(x / resolution, z / resolution, 0) * 4) / 4;
}

function rockOrStone(perlin: PerlinNoise, x: number, z: number) {
    return perlin(x / resolution, z / resolution, 0) >= 0;
}


function getBlocks(h: number[][], x: number, z: number, checkAd = false): [AssetName, number][] {
    let y = h[x + 1][z + 1];
    if (y < 0) {
        if (checkAd) {
            return getRuledBlocks([
                h[x + 2][z + 1], h[x + 2][z + 2], h[x + 1][z + 2],
                h[x][z + 2], h[x][z + 1], h[x][z], h[x + 1][z], h[x + 2][z],
            ].map(y => y < 0 ? 2 : 0), GROUND_RULES.allTiles, AllAssets.ground);
        } else {
            return [['ground_riverOpen.glb', 0]]
        }
    }
    let blocks: [AssetName, number][] = [];
    if (checkAd && y <= 0.25) {
        let ruleBlocks = getRuledBlocks([
            h[x + 2][z + 1], h[x + 2][z + 2], h[x + 1][z + 2],
            h[x][z + 2], h[x][z + 1], h[x][z], h[x + 1][z], h[x + 2][z],
        ].map(y => y < 0 ? 0 : y === 0 ? 0 : y === 0.25 ? 1 : y === 0.5 ? 2 : 3), CLIFF_RULES.allTiles, AllAssets.cliff);
        blocks.push(...ruleBlocks)
    }
    if (y === 0) {
        blocks.push(["ground_grass.glb", 0]);
    }
    if (y === 0.25) {
        blocks.push(["cliff_blockQuarter_rock.glb", 0]);
    }
    if (y === 0.5) {
        blocks.push(["cliff_blockHalf_rock.glb", 0]);
    }
    if (y > 0.5) {
        blocks.push(["cliff_block_rock.glb", 0]);
    }
    return blocks;
}

export class PerlinWorld extends TileWorld {
    chunks: { [key: string]: Chunk } = {};
    perlin!: PerlinNoise;
    center = new Vector2(0, 0);

    override generate() {
        this.perlin = quickNoise.create(this.r);
        this.lod();
        // loadAsset('ground_riverOpen.glb').then(s=>{
        //     let g = new Plane();
        //     this.parent.add(new Mesh())
        // });
    }

    lod() {
        let center = this.center.clone().divideScalar(16).round()
        let X = center.x, Y = center.y;
        // this.gen_chunk(0, 0, 1)
        loopEdge(2, 2, (x, y) => {
            this.gen_chunk(X + x - 1, Y + y - 1, 1)
        })
        loopEdge(3, 3, (x, y) => {
            this.gen_chunk(X + x * 2 - 3, Y + y * 2 - 3, 2);
        })
        loopEdge(4, 4, (x, y) => {
            this.gen_chunk(X + x * 3 - 6, Y + y * 3 - 6, 3);
        })
    }

    queue = new PQueue({concurrency: 1});

    gen_chunk(x: number, z: number, scale = 1) {
        let size = scale * 16;
        if (this.chunks[x + "-" + z]) {
            if (this.chunks[x + "-" + z].chunk_size === size) return;
            this.chunks[x + "-" + z].dispose();
            this.parent.remove(this.chunks[x + "-" + z]);
        }
        const chunk = this.chunks[x + "-" + z] = new Chunk(x * 16, z * 16, this.perlin, this.r, size);
        this.parent.add(chunk);
        this.queue.add(async () => {
            await chunk.create(scale === 1 ? 'high' : scale === 2 ? 'mid' : 'low')
            console.log("chunk.create!")
        });
    }
}


class Chunk extends Group {
    private readonly X: number;
    private readonly Z: number;
    private readonly grid: number[][];
    private readonly _tiles: Tile[] = [];
    private readonly _objects: GroundObject[] = [];
    readonly chunk_size: number;
    private readonly r: () => number;

    constructor(X: number, Z: number, perlin: (x: number, y: number, z: number) => number, r: () => number, chunk_size = 16, resolution = 10) {
        super();
        this.X = X;
        this.Z = Z;
        this.r = r;
        this.chunk_size = chunk_size;
        this.position.set(X, 0, Z);
        this.grid = new Array(chunk_size + 2).fill(0).map((_, x) => new Array(chunk_size + 2).fill(0).map((_, z) => {
            return height(perlin, X + x - 1, Z + z - 1);
        }));
    }

    async create(mode: 'high' | 'mid' | 'low' = 'low') {
        switch (mode) {
            case 'high':
                await this.makeGrass();
                return this.instancing()
            case "mid":
                return this.directMerge({
                    receiveShadow: true,
                    castShadow: true,
                    retain_material: true
                });
            case "low":
                return this.directMerge({
                    receiveShadow: true,
                    castShadow: true,
                    retain_material: false
                });
        }
    }

    dispose() {
        this.children.forEach(o => {
            if (o.type === 'Mesh') (o as Mesh).geometry.dispose();
        })
    }

    async makeGrass() {
        let grass = ((await loadAsset("grass.glb")).scene.children[0] as Mesh);
        let merge: Mergable = {
            geometries: [],
            material: grass.material
        };
        for (let i = 0; i < this.chunk_size * this.chunk_size; i++) {
            let x = this.r() * this.chunk_size, z = this.r() * this.chunk_size;
            let tile = AllAssets.grass[Math.floor(this.r() * AllAssets.grass.length)]
            let mesh = ((await loadAsset(tile)).scene.children[0] as Mesh);
            merge.geometries.push(mesh.geometry.clone()
                .rotateY(this.r() * Math.PI * 2)
                .translate(x, this.grid[Math.floor(x) + 1][Math.floor(z) + 1], z));
        }
        csmSetupMaterial(grass.material);
        let mesh = new Mesh(mergeGeometries(merge.geometries), grass.material);
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        this.add(mesh)
        return mesh;
    }

    async csgMerged({
                        scale = 1,
                        retain_material = false,
                        receiveShadow = false,
                        castShadow = false
                    }: {
        scale?: number,
        retain_material?: boolean,
        receiveShadow?: boolean,
        castShadow?: boolean
    }) {
        const evaluator = new Evaluator();
        let res: Brush | undefined = undefined;
        for (let x = 0; x < this.chunk_size; x += scale)
            for (let z = 0; z < this.chunk_size; z += scale) {
                const blocks = getBlocks(this.grid, x, z, retain_material);
                for (let block of blocks) {
                    if (block[0] === 'ground_riverOpen.glb') continue;
                    (await loadAsset(block[0])).scene.traverse((c) => {
                        if (c.type === 'Mesh') {
                            let brush = new Brush(
                                (c as Mesh).geometry.clone().rotateY(block[1]).scale(scale, 1, scale).translate(x + (scale - 1) / 2, 0, z + (scale - 1) / 2),
                                retain_material ? (c as Mesh).material : undefined);
                            if (!res) res = brush;
                            else res = evaluator.evaluate(res, brush, ADDITION);
                        }
                    })
                }
            }
        if (!res) return;
        const mesh: Mesh = res;
        if (!retain_material) mesh.material = GROUND_MATERIAL;
        else {
            const old = mesh.material;
            const wire = new MeshBasicMaterial({
                wireframe: true,
                color: 0,
                opacity: 0.15,
                transparent: true,
            });
            for (let o of [old, wire]) Object.defineProperty(o, "wireframe", {
                set: function (value) {
                    this._wireframe = value;
                    if (value) {
                        mesh.material = wire;
                    } else {
                        mesh.material = old;
                    }
                },
                get: function () {
                    return this._wireframe;
                }
            });
        }
        csmSetupMaterial(mesh.material);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.add(mesh);
    }

    /**
     * Merge Same Blocks Together
     */
    async directMerge({scale = 1, receiveShadow = false, castShadow = false, retain_material = true}: {
        scale?: number,
        receiveShadow?: boolean,
        castShadow?: boolean,
        retain_material?: boolean
    }) {
        const mergables: { [key: string]: Mergable } = {};
        for (let x = 0; x < this.chunk_size; x += scale)
            for (let z = 0; z < this.chunk_size; z += scale) {
                const blocks = getBlocks(this.grid, x, z, retain_material);
                for (let block of blocks) {
                    if (block[0] === 'ground_riverOpen.glb') continue;
                    (await loadAsset(block[0])).scene.traverse((c) => {
                        if (c.type === 'Mesh') {
                            mergables[retain_material ? c.uuid : "all"] ??= {
                                geometries: [],
                                material: (c as Mesh).material
                            };
                            mergables[retain_material ? c.uuid : "all"].geometries.push((c as Mesh).geometry.clone()
                                .rotateY(block[1])
                                .scale(scale, 1, scale).translate(x + (scale - 1) / 2, 0, z + (scale - 1) / 2));
                        }
                    })
                }
            }
        Object.values(mergables).forEach((mergable) => {
            if (retain_material) csmSetupMaterial(mergable.material);
            let mesh = new Mesh(mergeGeometries(mergable.geometries),
                retain_material ? mergable.material : GROUND_MATERIAL);
            mesh.receiveShadow = receiveShadow;
            mesh.castShadow = castShadow;
            this.add(mesh)
        });
    }

    async instancing() {
        for (let x = 0; x < this.chunk_size; x++)
            for (let z = 0; z < this.chunk_size; z++) {
                const blocks = getBlocks(this.grid, x, z, true);
                for (let block of blocks) {
                    if (block[0] === 'ground_riverOpen.glb') continue;
                    this._tiles.push(new Tile(new Vector3(this.X + x, 0, this.Z + z), block[0], block[1]))
                }
            }
    }
}

type Mergable = {
    material: Material | Material[];
    geometries: BufferGeometry[];
}

function loopEdge(width: number, height: number, callback: (x: number, y: number) => any) {
    const totalEdgeCells = 2 * (width + height) - 4;
    for (let i = 0; i < totalEdgeCells; i++) {
        let x, y;
        if (i < width) {
            x = i;
            y = 0;
        } else if (i < width + height - 1) {
            x = width - 1;
            y = i - width + 1;
        } else if (i < 2 * width + height - 2) {
            x = 2 * width + height - 3 - i;
            y = height - 1;
        } else {
            x = 0;
            y = 2 * (width + height) - 4 - i;
        }
        callback(x, y);
    }
}

