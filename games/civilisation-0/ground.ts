import { getRandomMix32 } from "~/games/civilisation-0/random";
import { Tile } from "~/games/civilisation-0/tile";
import { Object3D } from "three";
import { GroundObject } from "~/games/civilisation-0/ground_object";
import type { TileWorld } from "~/games/civilisation-0/terrain/tileworld";
import { RandomWorld } from "./terrain/random_world";

export default class Ground extends Object3D {
    private readonly r: () => number;
    private readonly tiles: Tile[];
    private readonly objects: GroundObject[];

    world: TileWorld;
    // grid: GridHelper;

    constructor() {
        super();
        const r = this.r = getRandomMix32(273);
        this.tiles = [];
        this.objects = [];
        // (this.world = new PerlinWorld(this, 100, 100, this.tiles, this.objects, r)).generate();
        // (this.world = new DebugWorld(this, 100, 100, this.tiles, this.objects, r)).generate();
        (this.world = new RandomWorld(this, 100, 100, this.tiles, this.objects, r)).generate();

        const w = Math.max(100, 100);
        // const grid = new GridHelper(w, w);
        // const o = w % 2 == 0 ? 0.5 : 0;
        // grid.position.set(o, 0, o)
        // this.add(this.grid = grid)
    }
}
