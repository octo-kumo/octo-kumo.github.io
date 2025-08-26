import { TileWorld } from "~/games/civilisation-0/terrain/tileworld";
import { AllAssets } from "~/games/base/types";
import { loadAsset, textToShape } from "~/games/base/assets";
import { AxesHelper, MeshStandardMaterial, SphereGeometry } from "three";
import { Mesh } from "three";

const wideObjs = ['wall', 'siege']

export class DebugWorld extends TileWorld {
    override async generate() {
        this.parent.add(new AxesHelper(10));
        this.genBalls();
        let types = Object.keys(AllAssets) as Array<keyof typeof AllAssets>;
        let maxy = 0;
        for (let x = 0; x < types.length; x++) {
            let a = AllAssets[types[x]];
            maxy = Math.max(maxy, a.length);
            for (let y = 0; y < a.length; y++) {
                // for (let z = -50; z < 60; z += 2) {
                loadAsset(a[y], true, true).then((obj: any) => {
                    obj.scene.position.set(x, 0, y * (wideObjs.includes(types[x]) ? 2 : 1));
                    this.parent.add(obj.scene);

                }).catch(console.error);
                // console.log(a[y], obj);
                // this.objects.push(new GroundObject(a[y], new Vector3(x, 0, y), 0));
                // }
            }
            const m = await textToShape(types[x], 0.7, 'right');
            m.position.set(x - 0.5, 0, -1);
            m.rotateY(-Math.PI / 2);
            m.rotateX(-Math.PI / 2);
            this.parent.add(m)
        }
    }

    genBalls() {

        for (let m = 0; m < 1; m += 0.1) {
            for (let r = 0; r < 1; r += 0.1) {
                let mat = new MeshStandardMaterial({ metalness: m, roughness: r, color: 0xffffff });
                let geo = new SphereGeometry(0.2, 32, 32);
                geo.computeVertexNormals();
                let mesh = new Mesh(geo, mat);
                mesh.position.set(-1 - m * 5, 0, r * 5);
                this.parent.add(mesh);
            }
        }
    }
}
