import Ground from "~/games/civilisation-0/ground";
import ThreeGame from "~/games/base/baseGame";

export class CivilisationZero extends ThreeGame {
    protected ground: Ground;
    constructor() {
        super(false);
        this.scene.add(this.ground = new Ground());

        this.controls.minPolarAngle = Math.PI * 0.05 / 2;
        this.controls.maxPolarAngle = Math.PI * 0.95 / 2;
    }
}
