import Ground from "~/games/civilisation-0/ground";
import ThreeGame from "~/games/baseGame";

export class CivilisationZero extends ThreeGame {
    protected ground!: Ground;

    constructor() {
        super();
        this.scene.add(this.ground = new Ground());
        this.extraDomHelpers();
    }

    extraDomHelpers() {
        const gui = this.gui;
        const world = gui.addFolder('World');
        world.add(this.sky, 'visible').name('fancySky');
        world.add(this.ground, 'fancyWater');
        world.add(this.ground.grid, 'visible').name("gridVisible");
        world.add(this, 'time', 0, 1);
        world.add(this, 'timeFlows');
        world.open();
    }
}
