import {TileWorld} from "~/games/civilisation-0/terrain/tileworld";
import {AllAssets} from "~/games/civilisation-0/types";
import {Vector3} from "three";
import {GroundObject} from "~/games/civilisation-0/ground_object";
import {textToShape} from "~/games/civilisation-0/assets";

export class DebugWorld extends TileWorld {
    override async generate() {
        let types = Object.keys(AllAssets) as Array<keyof typeof AllAssets>;
        let maxy = 0;
        for (let x = 0; x < types.length; x++) {
            let a = AllAssets[types[x]];
            maxy = Math.max(maxy, a.length);
            for (let y = 0; y < a.length; y++) {
                // for (let z = -50; z < 60; z += 2) {
                this.objects.push(new GroundObject(a[y], new Vector3(x, 0, y), 0));
                // }
            }
            const m = await textToShape(types[x], 0.7, 'right');
            m.position.set(x - 0.5, 0, -1);
            m.rotateY(-Math.PI / 2);
            m.rotateX(-Math.PI / 2);
            this.parent.add(m)
        }
    }
}
