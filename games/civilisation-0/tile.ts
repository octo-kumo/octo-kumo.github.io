import { type Matrix4, Object3D, type Vector3 } from "three";
import { loadInstance } from "~/games/base/assets";
import type { AssetName } from "~/games/base/types";


export class Tile extends Object3D {
    private _update?: (matrix: Matrix4) => void | undefined;
    height = 0;
    tname: AssetName;

    constructor(position: Vector3, name: AssetName = "c0/ground_grass.glb", rotation = 0) {
        super();
        this.tname = name;
        this.position.copy(position);
        this.rotateY(rotation);
        this.load();
    }

    async load() {
        this._update = await loadInstance(this.tname);
        this.update();
    }

    update() {
        if (!this._update) return;
        this.updateMatrix()
        this._update(this.matrix);
    }
}
