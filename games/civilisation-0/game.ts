import {Scene} from "three/src/scenes/Scene";
import {WebGLRenderer} from "three/src/renderers/WebGLRenderer";
import {PerspectiveCamera} from "three/src/cameras/PerspectiveCamera";
import {
    Clock,
    Color,
    DirectionalLight,
    DirectionalLightHelper,
    FogExp2,
    HemisphereLight,
    PCFSoftShadowMap,
    Vector3
} from "three";
import {setScene} from "~/games/civilisation-0/assets";
import Ground from "~/games/civilisation-0/ground";
import Stats from "three/examples/jsm/libs/stats.module";
import {GUI} from "dat.gui";
import {MapControls} from "three/examples/jsm/controls/MapControls";

export class CivilisationZero {
    private parent?: HTMLElement;
    private readonly scene: Scene;
    private readonly resize_observer: ResizeObserver;
    private readonly renderer: WebGLRenderer;
    private readonly clock: Clock;

    private renderJob: number = 0;
    private ground!: Ground;
    private stats!: Stats;
    private gui!: GUI;
    private controls!: MapControls;
    private camera!: PerspectiveCamera;

    private guiStatsEl!: HTMLDivElement;
    private sun!: DirectionalLight;

    constructor() {
        this.scene = new Scene();
        this.resize_observer = new ResizeObserver(this.on_resize.bind(this));
        this.renderer = new WebGLRenderer({antialias: true});
        this.clock = new Clock(true);
        setScene(this.scene);
        this.intiCamera();
        this.initRenderer();
        this.initScene();
        this.initLights();
        this.initDomHelpers();
    }

    intiCamera() {
        this.camera = new PerspectiveCamera(60, 1, 0.1, 100);
        const controls = this.controls = new MapControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 10;
        controls.maxPolarAngle = Math.PI / 2;
        this.resetCamera();
    }

    initRenderer() {
        this.scene.background = new Color(0x87CEEB);
        this.scene.fog = new FogExp2(0x87CEEB, 0.02);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
    }


    initScene() {
        this.scene.add(this.camera);

        this.ground = new Ground();
        this.scene.add(this.ground);
        // this.scene.add(new GridHelper(10000, 10, 0xffffff, 0xffffff));
        // this.scene.add(new AxesHelper(100));
    }

    initLights() {
        let light = new DirectionalLight(0xffffff, 1);
        light.castShadow = true;
        light.position.set(200, 200, 0);
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        let camera = light.shadow.camera;
        camera.near = 1;
        camera.far = 300;
        this.scene.add(this.sun = light);
        this.scene.add(this.sun.target);
        this.scene.add(new DirectionalLightHelper(light));
        this.scene.add(new HemisphereLight(0x87CEEB, 0x73EDDD, 1));
    }


    initDomHelpers() {
        this.stats = new Stats();
        this.stats.dom.style.top = "unset";
        this.stats.dom.style.bottom = "0";
        const gui = this.gui = new GUI({autoPlace: false});
        this.gui.domElement.id = "game-dat-gui";
        const perfFolder = gui.addFolder('Performance');

        this.guiStatsEl = document.createElement('div');
        this.guiStatsEl.classList.add('gui-stats');
        perfFolder.domElement.appendChild(this.guiStatsEl);
        perfFolder.open();
        const sky = this.gui.addFolder('Environment')
        // sky.add(this, 'time', -90, 90).name("Time").onChange(() => this.updateStage())
        // sky.add(cube.rotation, 'y', 0, Math.PI * 2)
        // sky.add(cube.rotation, 'z', 0, Math.PI * 2)
        sky.open()
    }

    render() {
        this.renderJob = requestAnimationFrame(() => this.render());
        const delta = this.clock.getDelta();
        this.renderer.render(this.scene, this.camera);
        this.controls.update(delta);
        this.updateStats();
        this.sunFollowPlayer();
    }

    sunFollowPlayer() {
        const c = this.controls.target;
        this.sun.target.position.set(c.x, c.y, c.z);
        this.sun.position.set(c.x + 200, 200, c.z);
    }

    attach(parent?: HTMLElement) {
        if (this.parent) {
            this.parent.removeChild(this.gui.domElement);
            this.parent.removeChild(this.stats.dom);
            this.parent.removeChild(this.renderer.domElement);
            this.resize_observer.unobserve(this.parent);
            cancelAnimationFrame(this.renderJob);
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
        // this.guiStatsEl.innerHTML = [
        //
        //     `<b>GPU draw calls</b>: ${1}`,
        //
        // ].join('<br/>');
    }

    private on_resize() {
        if (this.parent) {
            this.renderer.setSize(this.parent.clientWidth, this.parent.clientHeight);
            this.camera.aspect = this.parent.clientWidth / this.parent.clientHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    private resetCamera() {
        this.camera.position.set(5, 2, 5);
        this.camera.lookAt(new Vector3(0, 0, 0));
    }
}
