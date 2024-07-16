import {Tile} from "~/games/civilisation-0/tile";
import {GroundObject} from "~/games/civilisation-0/ground_object";
import Ground from "~/games/civilisation-0/ground";

export abstract class TileWorld {
    protected readonly r: () => number;
    protected width: number;
    protected parent: Ground;
    protected height: number;
    protected tiles: Tile[];
    protected objects: GroundObject[];

    constructor(parent: Ground, width: number, height: number, tiles: Tile[], objects: GroundObject[], r: () => number) {
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.tiles = tiles;
        this.objects = objects;
        this.r = r;
    }

    abstract generate(): void;
}
