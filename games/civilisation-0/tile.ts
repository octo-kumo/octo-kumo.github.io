import {type Matrix4, Object3D, Vector3} from "three";
import {loadInstance} from "~/games/civilisation-0/assets";

export class Tile extends Object3D {
    private _update?: (matrix: Matrix4) => void | undefined;

    constructor(position = new Vector3(), rotation = 0) {
        super();
        this.position.copy(position);
        this.rotateY(rotation);
        this.load();
    }

    async load() {
        this._update = await loadInstance("ground_grass.glb");
        this.update();
    }

    update() {
        if (!this._update) return;
        this.updateMatrix()
        this._update(this.matrix);
    }
}
