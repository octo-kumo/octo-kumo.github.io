import {type Matrix4, Object3D, Vector3} from "three";
import {loadInstance} from "~/games/civilisation-0/assets";
import type {AssetName} from "~/games/civilisation-0/types";

export class GroundObject extends Object3D {
    private _update?: (matrix: Matrix4) => void | undefined;
    objType: AssetName;

    constructor(name: AssetName, position = new Vector3(), rotation = 0) {
        super();
        this.objType = name;
        this.position.copy(position);
        this.rotateY(rotation);
        this.load();
    }

    async load() {
        this._update = await loadInstance(this.objType);
        this.update();
    }

    update() {
        if (!this._update) return;
        this.updateMatrix()
        this._update(this.matrix);
    }
}
