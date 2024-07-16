import {TileWorld} from "~/games/civilisation-0/terrain/tileworld";
import {Tile} from "~/games/civilisation-0/tile";
import {Vector3} from "three";
import {GroundObject} from "~/games/civilisation-0/ground_object";
import {AllAssets} from "~/games/civilisation-0/types";

export class RandomWorld extends TileWorld {
    override generate() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.tiles[y * this.width + x] = new Tile(new Vector3(
                    x - this.width / 2, 0, y - this.height / 2
                ));
            }
        }
        for (let i = 0; i < this.width * this.height / 3; i++) {
            let x = (this.r() - .5) * this.width, y = (this.r() - .5) * this.height;
            this.objects.push(new GroundObject(AllAssets.grass[Math.floor(this.r() * AllAssets.grass.length)],
                new Vector3(x, 0, y), this.r() * Math.PI * 2))
        }
        for (let i = 0; i < this.width * this.height / 10; i++) {
            let x = (this.r() - .5) * this.width, y = (this.r() - .5) * this.height;
            this.objects.push(new GroundObject(AllAssets.tree[Math.floor(this.r() * AllAssets.tree.length)],
                new Vector3(x, 0, y), this.r() * Math.PI * 2))
        }
    }
}
