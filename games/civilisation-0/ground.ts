import {getRandomMix32} from "~/games/civilisation-0/random";
import {Tile} from "~/games/civilisation-0/tile";
import {GridHelper, Object3D, PlaneGeometry, RepeatWrapping, Vector2} from "three";
import {GroundObject} from "~/games/civilisation-0/ground_object";
import type {TileWorld} from "~/games/civilisation-0/terrain/tileworld";
import {Water} from "three/examples/jsm/objects/Water2";
import {csmSetupMaterial, getTexture, loadAsset} from "~/games/civilisation-0/assets";
import type {Mesh} from "three/src/objects/Mesh";
import {DebugWorld} from "~/games/civilisation-0/terrain/debug_world";

export default class Ground extends Object3D {
    private readonly r: () => number;
    private readonly tiles: Tile[];
    private readonly objects: GroundObject[];

    world: TileWorld;
    private water!: Water;
    private water2!: Object3D;
    private _wq = false;
    grid: GridHelper;

    constructor() {
        super();
        const r = this.r = getRandomMix32(273);
        this.tiles = [];
        this.objects = [];
        // (this.world = new PerlinWorld(this, 100, 100, this.tiles, this.objects, r)).generate();
        (this.world = new DebugWorld(this, 100, 100, this.tiles, this.objects, r)).generate();
        // (this.world = new RandomWorld(this, 100, 100, this.tiles, this.objects, r)).generate();

        this.makeWater();
        loadAsset('ground_riverOpen.glb', true).then(a => {
            this.water2 = a.scene.children[0].clone();
            this.water2.scale.set(1000, 1, 1000);
            this.water2.position.y = -0.05;
            this.add(this.water2);
            csmSetupMaterial((this.water2 as Mesh).material);
            (this.water2 as Mesh).receiveShadow = true;
        });

        const w = Math.max(100, 100);
        const grid = new GridHelper(w, w);
        const o = w % 2 == 0 ? 0.5 : 0;
        grid.position.set(o, 0, o)
        this.add(this.grid = grid)
    }

    set fancyWater(_wq: boolean) {
        this._wq = _wq;
        this.water.visible = _wq;
    }

    get fancyWater() {
        return this._wq;
    }

    async makeWater() {
        this.water = new Water(
            new PlaneGeometry(1000, 1000),
            {
                scale: 20,
                textureWidth: 1024,
                textureHeight: 1024,
                color: "#B0F5FF",
                flowDirection: new Vector2(1, 1),
                normalMap0: await getTexture('Water_1_M_Normal.jpg').then(texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping;
                    return texture;
                }),
                normalMap1: await getTexture('Water_2_M_Normal.jpg').then(texture => {
                    texture.wrapS = texture.wrapT = RepeatWrapping;
                    return texture;
                }),
                flowSpeed: 0.01,
            }
        );
        this.water.position.y = -0.04;
        this.water.rotation.x = -Math.PI / 2;
        this.water.visible = false;
        this.add(this.water);
    }
}
