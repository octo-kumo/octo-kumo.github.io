import { Scene } from "three/src/scenes/Scene";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import {
    AmbientLight,
    Clock,
    Color,
    DirectionalLight,
    DirectionalLightHelper,
    FogExp2,
    HemisphereLight,
    PCFSoftShadowMap,
    Uniform,
    Vector3,
    type MeshStandardMaterial,
} from "three";
import { setScene } from "~/games/base/assets";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "dat.gui";
import type { Mesh } from "three/src/objects/Mesh";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera";
import { MapControls } from "three/examples/jsm/controls/MapControls";

import * as Skybox from "./environment/scene/Skybox";
import * as Ocean from "./environment/scene/Ocean";
import * as SeaFloor from "./environment/scene/SeaFloor";
export default class ThreeGame {

    protected parent?: HTMLElement;
    readonly scene: Scene;
    protected readonly resize_observer: ResizeObserver;
    protected readonly renderer: WebGLRenderer;
    protected readonly clock: Clock;
    protected camera!: PerspectiveCamera;
    protected controls!: MapControls;
    protected renderJob: number = 0;
    protected sunLight!: DirectionalLight;
    protected moonLight!: DirectionalLight;
    protected hemiLight: HemisphereLight;

    protected stats: Stats;
    protected gui: GUI;
    protected guiStatsEl!: HTMLDivElement;

    private cameraRight = new Vector3();
    private cameraUp = new Vector3();
    private cameraForward = new Vector3();
    private time = 0;
    private timeUniform = new Uniform(this.time);

    protected OCEAN = true;
    TIME_PASSES = false;
    private _lightHelper!: DirectionalLightHelper;

    constructor(ocean = true) {
        this.OCEAN = ocean;
        this.scene = new Scene();
        this.resize_observer = new ResizeObserver(this.on_resize.bind(this));
        this.renderer = new WebGLRenderer({ antialias: true });
        this.clock = new Clock(true);
        this.stats = new Stats();
        this.gui = new GUI({ autoPlace: false });
        setScene(this.scene);
        this.intiCamera();
        this.initRenderer();
        this.initScene();
        this.initDomHelpers();
        this.initSun();
        this.hemiLight = new HemisphereLight(0xffffff, 0.4);
        this.scene.add(this.hemiLight);
    }


    intiCamera() {
        this.camera = new PerspectiveCamera(60, 1, 0.1, 100);
        this.camera.near = 0.3;
        this.camera.far = 4000;
        this.camera.position.set(0, 1.5, -2);
        const controls = this.controls = new MapControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 20;
        controls.target.set(0, 1, 0);
    }

    initRenderer() {
        // this.scene.background = new Color(0x87CEEB);
        // this.envScene.background = new Color(0x87CEEB);
        this.renderer.autoClearColor = false;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.scene.fog = new FogExp2(0x87CEEB, 0.02);
    }

    initScene() {
        this.scene.add(this.camera);
        Skybox.Start();
        this.scene.add(Skybox.skybox);
        Ocean.Start(this.cameraForward, this.timeUniform);
        if (this.OCEAN) {
            this.scene.add(Ocean.surface);
            SeaFloor.Start();
            for (let tile of SeaFloor.tiles) this.scene.add(tile);
        }
        // Blocks.Start();
        // for (let i = 0; i < Blocks.blocks.length; i++) {
        //     this.scene.add(Blocks.blocks[i]);
        // }
    }

    initDomHelpers() {
        this.stats.dom.style.top = "unset";
        this.stats.dom.style.bottom = "0";
        this.gui.domElement.id = "game-dat-gui";
        const performance = this.gui.addFolder('Performance');
        performance.add({ wireframe: false }, 'wireframe').onChange(v => {
            this.scene.traverse((o) => {
                if (o.type === 'Mesh') {
                    ((o as Mesh).material as MeshStandardMaterial).wireframe = v;
                }
            })
        });
        let li = document.createElement('li');
        this.guiStatsEl = document.createElement('div');
        this.guiStatsEl.classList.add('gui-stats');
        li.appendChild(this.guiStatsEl);
        performance.domElement.querySelector("ul")?.appendChild(li);
        performance.open();

        const world = this.gui.addFolder('World');
        world.add(this, 'TIME_PASSES').name('Time Passes');
        world.open();
    }

    private on_resize() {
        if (this.parent) {
            this.renderer.setSize(this.parent.clientWidth, this.parent.clientHeight);
            this.camera.aspect = this.parent.clientWidth / this.parent.clientHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    render() {
        this.renderJob = requestAnimationFrame(() => this.render());

        const delta = this.clock.getDelta();
        if (this.TIME_PASSES) {
            this.time += delta;
        }
        this.timeUniform.value += delta;

        Skybox.Update(this.camera, this.time);
        if (this.OCEAN) {
            Ocean.Update(this.camera);
            SeaFloor.Update(this.camera);
        }

        this.updateSunMoon();
        this.cameraRight.copy(new Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion));
        this.cameraUp.copy(new Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion));
        this.cameraForward.copy(new Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion));

        this.renderer.render(this.scene, this.camera);
        this.controls.update(delta);
        this.updateStats();
        this.update(delta);
    }

    attach(parent?: HTMLElement) {
        if (this.renderJob) {
            cancelAnimationFrame(this.renderJob);
            this.renderJob = 0;
        }
        if (this.parent) {
            this.parent.removeChild(this.gui.domElement);
            this.parent.removeChild(this.stats.dom);
            this.parent.removeChild(this.renderer.domElement);
            this.resize_observer.unobserve(this.parent);
        }
        this.parent = parent;
        if (parent) {
            parent.appendChild(this.gui.domElement);
            parent.appendChild(this.stats.dom);
            parent.appendChild(this.renderer.domElement);
            this.resize_observer.observe(parent);
            this.renderer.setPixelRatio(parent.ownerDocument.defaultView?.devicePixelRatio ?? 1);
            this.renderJob = requestAnimationFrame(() => this.render());
        }
    }

    updateStats() {
        this.stats.update();
        const i = this.renderer.info;
        this.guiStatsEl.textContent = [
            `${i.memory.geometries}▦`,
            `${i.memory.textures}▨`,
            `${i.render.calls}c`,
            `${i.render.triangles}△`,
            `${i.render.lines}l`,
            `${i.render.points}p`,
        ].join(' ');
    }
    initSun() {
        this.sunLight = new DirectionalLight(0xffffff, 1);
        this.moonLight = new DirectionalLight(0x49759C, 0.8);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 2048;
        this.sunLight.shadow.mapSize.height = 2048;
        this.sunLight.shadow.radius = 1;
        this.sunLight.shadow.normalBias = 0.015;
        let camera = this.sunLight.shadow.camera;
        camera.near = 0;
        camera.far = 500;
        this.scene.add(this.sunLight);
        this.scene.add(this.moonLight);
        // this.scene.add(this.sunLight.target);
        // this.scene.add(this._lightHelper = new DirectionalLightHelper(this.sunLight));
    }

    updateSunMoon() {
        const c = this.controls.target;
        this.sunLight.position.copy(c.clone().add(Skybox.dirToLight.clone().multiplyScalar(200)));
        this.sunLight.target.position.copy(c);
        const camera = this.sunLight.shadow.camera;
        camera.left = camera.bottom = -(camera.top = camera.right = Math.max(this.controls.getDistance() * 2, 5))
        camera.updateProjectionMatrix();

        this.moonLight.position.copy(Skybox.dirToLight.clone().multiplyScalar(-200));
        this._lightHelper?.update();

        const skyLight = Skybox.calculateSunColor();
        this.moonLight.intensity = 0.3 * (1 - Skybox.SKYBOX.sunVisibility.value);
        this.sunLight.color.setFromVector3(skyLight);
        this.scene.fog?.color.copy(this.sunLight.color);
        this.hemiLight.color.copy(this.sunLight.color);
        this.hemiLight.groundColor.copy(new Color(0, skyLight.length() / 5, 0));
    }


    update(delta: number) {
    }
}
