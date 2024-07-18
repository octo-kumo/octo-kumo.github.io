import {Scene} from "three/src/scenes/Scene";
import {WebGLRenderer} from "three/src/renderers/WebGLRenderer";
import {
    Clock,
    Color,
    DirectionalLight,
    DirectionalLightHelper,
    FogExp2,
    HemisphereLight,
    MathUtils,
    type MeshStandardMaterial,
    PMREMGenerator,
    Vector3
} from "three";
import {setCSM, setScene} from "~/games/civilisation-0/assets";
import Stats from "three/examples/jsm/libs/stats.module";
import {GUI} from "dat.gui";
import type {Mesh} from "three/src/objects/Mesh";
import {PerspectiveCamera} from "three/src/cameras/PerspectiveCamera";
import {MapControls} from "three/examples/jsm/controls/MapControls";
import CSM from "three-csm";
import {calculateSunPosition} from "~/games/civilisation-0/sky";
import {Sky} from "three/examples/jsm/objects/Sky";
import {ACESFilmicToneMapping, PCFSoftShadowMap} from "three/src/constants";

export default class ThreeGame {

    protected parent?: HTMLElement;
    protected readonly scene: Scene;
    protected readonly resize_observer: ResizeObserver;
    protected readonly renderer: WebGLRenderer;
    private readonly envRenderer: PMREMGenerator;
    private readonly envScene: Scene;
    protected readonly clock: Clock;
    protected camera!: PerspectiveCamera;
    protected controls!: MapControls;
    protected renderJob: number = 0;

    protected sunDirection = new Vector3();
    protected sun!: DirectionalLight;
    protected csm?: CSM;

    protected stats!: Stats;
    protected gui!: GUI;
    protected guiStatsEl!: HTMLDivElement;

    protected _time = 0;
    protected _useCSM = false;
    protected timeFlows = false;
    protected updateShadows = true;

    protected sky!: Sky;
    protected hemilight!: HemisphereLight;

    constructor() {
        this.scene = new Scene();
        this.envScene = new Scene();
        this.resize_observer = new ResizeObserver(this.on_resize.bind(this));
        this.renderer = new WebGLRenderer({antialias: true});
        this.envRenderer = new PMREMGenerator(this.renderer);
        this.clock = new Clock(true);
        setScene(this.scene);
        this.intiCamera();
        this.initRenderer();
        this.initScene();
        this.initSun();
        this.initDomHelpers();
        this.time = 0.3;
    }


    intiCamera() {
        const camera = this.camera = new PerspectiveCamera(60, 1, 0.1, 100);
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
        this.envScene.background = new Color(0x87CEEB);
        this.scene.fog = new FogExp2(0x87CEEB, 0.02);
        this.renderer.toneMapping = ACESFilmicToneMapping;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.renderer.toneMappingExposure = 0.5;
        // const composer = new EffectComposer(this.renderer);
        // const renderPass = new RenderPass(this.scene, this.camera);
        // composer.addPass(renderPass);
        //
        // const adaptiveToneMappingPass = new AdaptiveToneMappingPass(true, 256);
        // composer.addPass(adaptiveToneMappingPass);
    }

    initScene() {
        this.scene.add(this.camera);
        this.scene.add(this.hemilight = new HemisphereLight(0x87CEEB, 0x73EDDD, 0.1));

        this.sky = new Sky();
        this.sky.scale.setScalar(450000);
        this.scene.add(this.sky);
        const uniforms = this.sky.material.uniforms;
        uniforms['turbidity'].value = 10;
        uniforms['rayleigh'].value = 3;
        uniforms['mieCoefficient'].value = 0.0005;
        uniforms['mieDirectionalG'].value = 0.7;
    }

    initDomHelpers() {
        this.stats = new Stats();
        this.stats.dom.style.top = "unset";
        this.stats.dom.style.bottom = "0";
        this.gui = new GUI({autoPlace: false});
        this.gui.domElement.id = "game-dat-gui";
        const performance = this.gui.addFolder('Performance');
        performance.add({wireframe: false}, 'wireframe').onChange(v => {
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
        const shadow = this.gui.addFolder('Shadow')
        shadow.add(this, 'useCSM');
        shadow.add(this, 'updateShadows');
        shadow.add(this.sun.shadow, 'bias', -0.0005, 0.0005);
        shadow.add(this.sun.shadow, 'normalBias', -0.02, 0.02);
        shadow.add({shadowMapSize: 11}, 'shadowMapSize', 6, 13, 1).onChange(v => {
            if (this.csm) {
                if (2 ** v !== this.csm.shadowMapSize)
                    this.csm.updateShadowMapSize(2 ** v)
            } else {
                this.sun.shadow.mapSize.width = 2 ** v;
                this.sun.shadow.mapSize.height = 2 ** v;
            }
        });
        shadow.open()
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
        if (this.csm && this.updateShadows) this.csm.update();
        this.renderer.render(this.scene, this.camera);
        this.controls.update(delta);
        this.updateStats();
        if (this.timeFlows) this.time += delta * 0.01;
        if (this.sun.visible) this.sunFollowPlayer();
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

    private resetCamera() {
        this.camera.position.set(-5, 2, -5);
        this.camera.lookAt(new Vector3(0, 0, 0));
    }


    set time(time) {
        this._time = time % 1;
        let sunPosition = calculateSunPosition(this._time, 40, 100);
        const phi = MathUtils.degToRad(90 - sunPosition.elevation);
        const theta = MathUtils.degToRad(sunPosition.azimuth);
        let sun = new Vector3();
        sun.setFromSphericalCoords(1, phi, theta);
        if (this.csm) {
            this.csm.lightDirection.copy(sun.clone().multiplyScalar(-1));
        }
        this.sun.visible = phi < Math.PI / 2;
        this.sunDirection.copy(sun.clone());
        this.sunFollowPlayer();
        const uniforms = this.sky.material.uniforms;
        uniforms['sunPosition'].value.copy(sun);
        this.envScene.add(this.sky);
        const envMap = this.envRenderer.fromScene(this.envScene).texture;
        envMap.mipmaps = [];
        envMap.generateMipmaps = true;
        envMap.needsUpdate = true;
        this.scene.environment = envMap;
        this.scene.environmentIntensity = 0.2;
        this.scene.add(this.sky);
    }

    get time() {
        return this._time;
    }


    set useCSM(val) {
        this._useCSM = val;
        if (val) {
            this.initCSM();
            this.sun.visible = false;
            this.renderer.toneMappingExposure = 0.5;
        } else {
            if (this.csm) this.csm.dispose();
            this.csm = undefined;
            this.sun.visible = true;
            this.renderer.toneMappingExposure = 0.5;
        }
    }

    get useCSM() {
        return this._useCSM
    }

    initCSM() {
        if (this.csm) this.csm.dispose();
        this.csm = new CSM({
            maxFar: this.camera.far,
            shadowNormalBias: 0.015,
            cascades: 4,
            shadowMapSize: 4096,
            lightIntensity: 1,
            lightDirection: this.sunDirection.clone().multiplyScalar(-1),
            camera: this.camera,
            fade: true,
            parent: this.scene,
        });
        setCSM(this.csm);
    }

    initSun() {
        this.sun = new DirectionalLight(0xffffff, 1);
        this.sun.castShadow = true;
        this.sun.position.set(200, 200, 0);
        this.sun.shadow.mapSize.width = 2048;
        this.sun.shadow.mapSize.height = 2048;
        this.sun.shadow.radius = 1;
        this.sun.shadow.normalBias = 0.015;
        let camera = this.sun.shadow.camera;
        camera.near = 1;
        camera.far = 300;
        this.scene.add(this.sun);
        this.scene.add(this.sun.target);
        this.scene.add(new DirectionalLightHelper(this.sun));
    }


    sunFollowPlayer() {
        const c = this.controls.target;
        this.sun.target.position.set(c.x, c.y, c.z);
        this.sun.position.copy(c.clone().add(this.sunDirection.clone().multiplyScalar(200)));
        const camera = this.sun.shadow.camera;
        camera.left = camera.bottom = -(camera.top = camera.right = Math.max(this.controls.getDistance() * 2, 5))
        camera.updateProjectionMatrix()
    }
}
