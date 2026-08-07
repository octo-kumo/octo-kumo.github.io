// space.ts — vanilla three.js port of Space.vue (TresJS → plain three).
// The TresJS declarative scene is 1:1: same keyframes, same objects, same
// camera/light lerp, same cursor parallax. Removed: the embedded yun.ng
// iframe planet (writeups are now a real DOM section), OrbitControls
// (its only net effect was setting the look-at target, which we now do
// directly with camera.lookAt).

import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { perf } from "./perf.js";
import { gfx, GFX_LADDER, type GfxLevel } from "./gfx.js";

// cientos <Stars /> (a drei Stars port) uses THREE.Points with a custom
// shader: per-point aScale × uSize, size-attenuated by 300/-viewZ.
// Faithful vanilla reimplementation (same params: radius 100, depth 50,
// count 5000, size 0.1; per-point scale (0.5+0.5·rand)·4).
function makeStars(radius = 100, depth = 50, count = 5000, size = 0.1): THREE.Points {
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  let circle = radius + depth;
  const increment = depth / count;
  for (let i = 0; i < count; i++) {
    circle -= increment * Math.random();
    const phi = Math.acos(1 - Math.random() * 2);
    const theta = Math.random() * 2 * Math.PI;
    const s = Math.sin(phi);
    positions[i * 3] = circle * s * Math.cos(theta);
    positions[i * 3 + 1] = circle * s * Math.sin(theta);
    positions[i * 3 + 2] = circle * Math.cos(phi);
    scales[i] = (0.5 + 0.5 * Math.random()) * 4;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
  const material = new THREE.ShaderMaterial({
    uniforms: { uSize: { value: size } },
    vertexShader: /* glsl */ `
      attribute float aScale;
      uniform float uSize;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: /* glsl */ `
      void main() {
        if (distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;
        gl_FragColor = vec4(1.0);
      }`,
    transparent: true,
    alphaTest: 0.01,
  });
  return new THREE.Points(geo, material);
}

// WWF logo (wwf.vue) — shown as a floating "webpage" on the planet ring
const WWF_SVG = `<svg width="230px" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" fill="#f15025" stroke="#f15025"><g id="layer1"><rect width="34.031982" height="13.166141" x="109.12134" y="221.50067"/><rect width="41.3274" height="13.189176" x="156.43027" y="139.43732"/><rect width="55.877949" height="13.189176" x="136.63039" y="166.83044"/><circle cx="36.019543" cy="200.72112" r="6.614224"/><circle cx="83.208626" cy="228.10573" r="6.614224"/><circle cx="71.801262" cy="228.02882" r="6.614224"/><circle cx="109.50446" cy="228.07835" r="6.614224"/><circle cx="21.976299" cy="173.41405" r="6.614224"/><circle cx="101.19189" cy="173.38173" r="6.614224"/><circle cx="105.7051" cy="200.7291" r="6.614224"/><circle cx="142.81274" cy="228.07237" r="6.614224"/><circle cx="132.05998" cy="200.86003" r="6.614224"/><circle cx="178.70616" cy="200.85172" r="6.614224"/><circle cx="137.02592" cy="173.40887" r="6.614224"/><circle cx="192.00768" cy="173.40335" r="6.614224"/><circle cx="197.11247" cy="146.0321" r="6.614224"/><circle cx="157.06224" cy="146.0208" r="6.614224"/><circle cx="192.02562" cy="118.71578" r="6.614224"/><circle cx="137.07158" cy="118.65047" r="6.614224"/><circle cx="21.880394" cy="118.62907" r="6.614224"/><circle cx="101.57488" cy="118.62296" r="6.614224"/><circle cx="18.059219" cy="146.02701" r="6.614224"/><circle cx="120.49805" cy="146.02385" r="6.614224"/><circle cx="120.29967" cy="91.317184" r="6.614224"/><circle cx="178.82605" cy="91.297127" r="6.614224"/><circle cx="35.918694" cy="91.32531" r="6.614224"/><circle cx="87.017815" cy="91.325363" r="6.614224"/><circle cx="142.87708" cy="64.034698" r="6.614224"/><circle cx="71.855606" cy="64.032326" r="6.614224"/><circle cx="101.8694" cy="63.991955" r="6.614224"/><circle cx="131.77686" cy="64.024857" r="6.614224"/><rect width="30.155174" height="13.275864" x="71.737076" y="57.370689"/><rect width="12.031983" height="13.233194" x="131.29428" y="57.407383"/><rect width="12.031983" height="13.233194" x="71.735992" y="221.43167"/><rect width="58.766083" height="13.252156" x="120.24138" y="84.704735"/><rect width="54.925564" height="13.252156" x="137.1151" y="112.08276"/><rect width="51.681034" height="13.275862" x="35.84483" y="84.68103"/><rect width="79.994499" height="13.276539" x="21.792299" y="111.9789"/><rect width="79.947083" height="13.181711" x="21.526054" y="166.80881"/><rect width="70.760788" height="13.181711" x="35.676052" y="194.13606"/><rect width="102.35065" height="13.254238" x="18.238478" y="139.40367"/><rect width="47.496296" height="13.189176" x="131.71552" y="194.2543"/></g></svg>`;

const WWF_POS = new THREE.Vector3(Math.cos(1) * 7.5, 0.01, Math.sin(1) * 7.5);

// BDC logo mark only (the red 4-point asterisk/star — no "BDC" wordmark,
// no card background). Cropped viewBox around just the two symbol paths.
const BDC_SVG = `<svg width="68" viewBox="154 3 70 75" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333333,0,0,-1.3333333,0,122.70213)"><g transform="translate(141.3896,35.1785)"><path fill="#ee2722" d="m 0,0 h -2.352 v 13.252 c 0,0.784 -0.633,1.416 -1.417,1.416 -0.394,0 -0.749,-0.158 -1.006,-0.414 l -8.779,-8.775 -9.373,9.372 8.642,8.635 c 0.263,0.267 0.439,0.625 0.439,1.026 0,0.587 -0.358,1.072 -0.858,1.304 l -10.864,5.064 5.604,12.011 11.297,-5.268 c 0.187,-0.087 0.397,-0.14 0.619,-0.14 0.784,0 1.42,0.636 1.42,1.416 V 53.125 H 0 Z"/></g><g transform="translate(141.3905,35.1785)"><path fill="#aa1228" d="m 0,0 h 2.352 v 13.252 c 0,0.784 0.633,1.416 1.417,1.416 0.394,0 0.749,-0.158 1.006,-0.414 l 8.779,-8.775 9.373,9.372 -8.642,8.635 c -0.263,0.267 -0.439,0.625 -0.439,1.026 0,0.587 0.358,1.072 0.858,1.304 L 25.568,30.88 19.964,42.891 8.667,37.623 C 8.48,37.536 8.27,37.483 8.048,37.483 c -0.784,0 -1.42,0.636 -1.42,1.416 v 14.226 l -6.628,0 z"/></g></g></svg>`;

// BDC card mirrors the WWF card on the far ring (angle -1 vs +1, radius 7.5):
// two floating logo cards flanking the planet system, visible during the
// whole Work/Writeups fly-by. (The original iframe spot — radius 11, angle 3 —
// sits on the camera flight path and would blow up to screen-filling size.)
const BDC_POS = new THREE.Vector3(Math.cos(-1) * 7.5, 0.01, Math.sin(-1) * 7.5);

// camera / light keyframes (Space.vue, verbatim)
const KEYFRAMES = [
  { value: 0, position: new THREE.Vector3(0, 0.95, 5), lookAt: new THREE.Vector3(0, 0, -1), light: new THREE.Vector3(0, 0, -1) },
  { value: 0.2, position: new THREE.Vector3(0, 0.6, 7), lookAt: new THREE.Vector3(0, 0, 4.9), light: new THREE.Vector3(0, -1, 1) },
  { value: 0.399, position: new THREE.Vector3(0, 0, 10), lookAt: new THREE.Vector3(0, 0, -1), light: new THREE.Vector3(0, 0, -1) },
  { value: 0.4, position: new THREE.Vector3(-6, 10, 7), lookAt: new THREE.Vector3(18, 0, 0), light: new THREE.Vector3(0, 0, -1) },
  { value: 0.6, position: new THREE.Vector3(-17, 10, 7), lookAt: new THREE.Vector3(-2, 0, 0), light: new THREE.Vector3(0, 0, -1) },
  { value: 0.8, position: new THREE.Vector3(Math.cos(3) * 11.4, 0.2, Math.sin(3) * 11.4), lookAt: new THREE.Vector3(Math.cos(3) * 10, 0, Math.sin(3) * 10), light: new THREE.Vector3(0, 0, -1) },
  { value: 1.01, position: new THREE.Vector3(Math.cos(3) * 14.4, 0.6, Math.sin(3) * 14.4), lookAt: new THREE.Vector3(Math.cos(3) * 13, 0, Math.sin(3) * 13), light: new THREE.Vector3(0, 0, -1) },
];

export function initSpace(getProgress: () => number) {
  const container = document.getElementById("space")!;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#000000");
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  spaceRenderer = renderer;

  const scene = new THREE.Scene();
  // fov 50 = three.js default — the original's TresPerspectiveCamera had no
  // fov prop, so the whole scene renders ~1.64× larger than with fov 75.
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);
  spaceCamera = camera;
  const lookAtPos = new THREE.Vector3(0, 0, -1);

  // star field — rebuilt with fewer stars when the quality level drops (the
  // 5000-point custom shader is a per-frame vertex+pointSize cost).
  let stars: THREE.Points = makeStars();
  scene.add(stars);
  const rebuildStars = (count: number) => {
    if (stars) {
      scene.remove(stars);
      stars.geometry.dispose();
      (stars.material as THREE.Material).dispose();
    }
    stars = makeStars(100, 50, count, 0.1);
    scene.add(stars);
  };

  // Post-processing: SMAA is always on (the original had no MSAA — the
  // composer IS the AA).
  const composer = new EffectComposer(renderer);
  spaceComposer = composer;
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  const smaaPass = new SMAAPass(); // sizes itself from the composer/renderer
  composer.addPass(smaaPass);

  // adaptive graphics: the gfx module detects lag from the frame-time ring
  // and asks us to apply a quality level (resolution × SMAA × star count).
  const applyGfx = (l: GfxLevel) => {
    const s = GFX_LADDER[l];
    renderer.setPixelRatio(s.pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(s.pixelRatio);
    composer.setSize(window.innerWidth, window.innerHeight);
    smaaPass.enabled = s.smaa;
    rebuildStars(s.stars);
  };
  gfx.register(applyGfx);
  gfx.start();

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.castShadow = true;
  light.position.set(0, 0, -1);
  scene.add(light);

  // the black hole — camera starts inside it, hence the pure-black hero
  const blackHole = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshPhysicalMaterial({ color: 0x000000, side: THREE.DoubleSide })
  );
  blackHole.position.set(0, 0, 4.9);
  scene.add(blackHole);

  // "yun" text (Text3D in the original)
  let textMesh: THREE.Mesh | null = null;
  new FontLoader().load(`/fonts/space_font.json`, (font) => {
    // Text3D defaults (cientos): size .5, height .2, bevel on. No material is
    // rendered by the original (TresMesh without a material child), which in
    // three.js means the Mesh default: white unlit MeshBasicMaterial.
    const geo = new TextGeometry("yun", {
      font, size: 0.5, depth: 0.2, curveSegments: 5,
      bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.02, bevelOffset: 0, bevelSegments: 4,
    });
    textMesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    geo.center(); // cientos Text3D center=false by default (left-aligned) — center it so "yun" sits mid-screen
    textMesh.position.set(0, 1, 0);
    scene.add(textMesh);
  });

  // planet system (visible while scrolling the Work/Writeups area)
  const group = new THREE.Group();
  const blackMat = new THREE.MeshPhysicalMaterial({ color: 0x000000, side: THREE.DoubleSide });
  const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  // cientos <Sphere> default is an unlit WHITE MeshBasicMaterial — the center
  // sphere is the "sun" of the system (my first port made it black; the
  // original renders it bright white).
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  group.add(new THREE.AmbientLight(0xffffff, 0.5));
  const pointLight = new THREE.PointLight(0xffffff, 10, 100, 0.1);
  pointLight.position.set(0, 0, 0);
  group.add(pointLight);
  const sun = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), sunMat);
  sun.scale.setScalar(0.3);
  sun.position.set(0, 0, 0);
  group.add(sun);
  const sphere = (pos: [number, number, number], scale: number) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), blackMat);
    m.position.set(...pos);
    m.scale.setScalar(scale);
    group.add(m);
    return m;
  };
  const ring = (radius: number, pos: [number, number, number]) => {
    const r = new THREE.Mesh(new THREE.RingGeometry(radius, radius + 0.01, 128), whiteMat);
    r.position.set(...pos);
    r.rotation.set(Math.PI / 2, 0, 0);
    group.add(r);
    return r;
  };
  const occluders: THREE.Object3D[] = [];
  occluders.push(sun); // center sun doubles as an occluder
  ring(5, [0, 0, 0]);
  ring(10, [0, 0, 0]);
  occluders.push(sphere([Math.cos(3) * 10, 0, Math.sin(3) * 10], 0.3));
  ring(7.5, [0, 0, 0]);
  occluders.push(sphere([Math.cos(1 + Math.PI) * 7.5, 0, Math.sin(1 + Math.PI) * 7.5], 0.2));
  occluders.push(sphere([Math.cos(3) * 13, 0, Math.sin(3) * 13], 0.3));
  scene.add(group);

  // 3D html overlays (THTML in the original) — billboarded, distance-scaled,
  // occluded by the planet spheres via raycast (occlude="raycast").
  const raycaster = new THREE.Raycaster();
  const projected = new THREE.Vector3();
  const overlays: {
    el: HTMLElement;
    pos: THREE.Vector3;
    distanceFactor: number;
    tipEl: HTMLElement | null;
  }[] = [];
  const makeOverlay = (html: string, extraClass: string, tipId: string | null, distanceFactor: number) => {
    const el = document.createElement("div");
    el.className = "space-webpage";
    el.innerHTML = `<div class="space-card ${extraClass}">${html}</div>`;
    document.body.appendChild(el);
    const tipEl = tipId ? document.getElementById(tipId) : null;
    const card = el.firstElementChild as HTMLElement;
    card.addEventListener("mouseenter", () => {
      if (!tipEl) return;
      // park the tip above the card (the tips are fixed-position; without an
      // explicit top/left they'd sit at the bottom of the document, off-screen)
      const r = card.getBoundingClientRect();
      tipEl.style.left = `${Math.min(Math.max(r.left + r.width / 2 - 120, 8), window.innerWidth - 260)}px`;
      tipEl.style.top = `${Math.max(8, r.top - 10)}px`;
      tipEl.style.transform = "translateY(-100%)";
      tipEl.style.opacity = "1";
    });
    card.addEventListener("mouseleave", () => {
      if (tipEl) tipEl.style.opacity = "0";
    });
    return { el, pos: new THREE.Vector3(), distanceFactor, tipEl };
  };
  overlays.push({ ...makeOverlay(WWF_SVG, "wwf", "wwf-tip", 3), pos: WWF_POS });
  overlays.push({ ...makeOverlay(BDC_SVG, "bdc", "bdc-tip", 10), pos: BDC_POS });
  // ── camera & light: keyframe lerp + the two non-keyframe mechanisms ──
  // 1) useMouse parallax (Space.vue: factor .05, ease 3): smoothed cursor
  //    offset added to the camera every frame.
  // 2) ScrollControls (htmlScroll, distance=0, smoothScroll=.1): its own
  //    onBeforeRender pulls the camera's scroll-axis coord toward the value
  //    captured at mount (camera's initial y=2). With distance=0 this eases
  //    the y back toward 2 at 10%/frame — which is what keeps the resting
  //    camera just above the black-hole sphere (y~1.055 > r=1 at z=5) so the
  //    "yun" text is visible with the planet below it. Without it, the
  //    keyframe lerp parks the camera INSIDE the sphere (y=.95) = black.
  const CURSOR_FACTOR = 0.05;
  const CURSOR_EASE = 3;
  const SCROLL_ANCHOR_Y = 2; // camera's initial y (ScrollControls initCameraPos)
  let ox = 0;
  let oy = 0;
  const cursor = { x: 0, y: 0 };
  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  });

  const frame = () => {
    perf.frameStart();
    const f0 = performance.now();
    perf.begin("3D", "camera");
    const progress = getProgress();
    const ci = KEYFRAMES.findIndex((k) => progress < k.value);
    const cc = KEYFRAMES[ci - 1];
    const nc = KEYFRAMES[ci];
    if (cc && nc) {
      const t = (progress - cc.value) / (nc.value - cc.value);
      const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // cubic ease in-out
      camera.position.lerpVectors(cc.position, nc.position, easeT);
      camera.lookAt(lookAtPos.copy(cc.lookAt).lerp(nc.lookAt, easeT));
      light.position.lerpVectors(cc.light, nc.light, easeT);
      // useMouse parallax (original: ox += (cursorX - ox) * ease * .008)
      const cursorX = (cursor.x / window.innerWidth - 0.5) * CURSOR_FACTOR;
      const cursorY = -(cursor.y / window.innerHeight - 0.5) * CURSOR_FACTOR;
      ox += (cursorX - ox) * CURSOR_EASE * 0.008;
      oy += (cursorY - oy) * CURSOR_EASE * 0.008;
      camera.position.x += ox;
      camera.position.y += oy;
      // ScrollControls pull (distance=0, smoothScroll=.1): eases y back
      // toward the initial camera y every frame.
      camera.position.y += (SCROLL_ANCHOR_Y - camera.position.y) * 0.1;
    }
    perf.end("3D", "camera");

    // visibility toggles (were v-if/v-show in the original)
    if (textMesh) textMesh.visible = progress < 0.2;
    group.visible = progress > 0.4;

    // 3D html overlays: project 3D point → screen, billboard + distance scale
    // (scale = (distanceFactor/400)·H / (2·tan(vFOV/2)·dist) — cientos Html math)
    perf.begin("DOM", "overlays");
    if (progress > 0.5) {
      // Refresh the camera matrices NOW so the DOM projection matches the
      // frame that just rendered — otherwise the overlays drift off the
      // rings (the project() call otherwise sees the previous frame's
      // matrixWorldInverse / projectionMatrix).
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld(true);
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
      const vFovTan = 2 * Math.tan((50 * Math.PI) / 360); // camera fov is 50° (three default, like the original)
      for (const ov of overlays) {
        projected.copy(ov.pos).project(camera);
        const inFront = projected.z < 1;
        // raycast occlusion against the planet spheres (occlude="raycast")
        raycaster.ray.origin.copy(camera.position);
        raycaster.ray.direction.copy(ov.pos).sub(camera.position).normalize();
        const hit = raycaster.intersectObjects(occluders, false)[0];
        const occluded = hit && hit.distance < camera.position.distanceTo(ov.pos) - 0.05;
        if (inFront && !occluded) {
          const dist = camera.position.distanceTo(ov.pos);
          let scale = ((ov.distanceFactor / 400) * window.innerHeight) / (vFovTan * dist);
          scale = Math.min(scale, 2.5); // cap fly-through blowups
          ov.el.style.transform = `translate(${((projected.x * 0.5 + 0.5) * window.innerWidth).toFixed(1)}px, ${((-projected.y * 0.5 + 0.5) * window.innerHeight).toFixed(1)}px) translate(-50%, -50%) scale(${scale.toFixed(4)})`;
          ov.el.style.display = "block";
        } else {
          ov.el.style.display = "none";
        }
      }
    } else {
      for (const ov of overlays) ov.el.style.display = "none";
    }
    perf.end("DOM", "overlays");

    perf.begin("3D", "render");
    composer.render();
    perf.end("3D", "render");
    perf.frameEnd();
    // lag sensor: always-on sample of the frame BODY time (the actual render
    // work) — NOT wall-clock frame spacing, which is display-refresh-bound
    // (~16.6ms at 60Hz) and would block upgrades on 60Hz monitors.
    perf.sampleFrame(performance.now() - f0);
  }
  // Render loop: requestAnimationFrame with a timer watchdog. rAF is throttled
  // to 0 in hidden tabs (and some headless/webview environments), which would
  // freeze the scene — the watchdog renders instead when rAF goes quiet.
  // One bad frame must never kill the loop, so frame() is called defensively.
  let lastTick = performance.now();
  function tick(now: number) {
    lastTick = now;
    try {
      frame();
    } catch (err) {
      console.error("space frame error:", err);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  setInterval(() => {
    if (performance.now() - lastTick > 100) {
      try {
        frame();
      } catch (err) {
        console.error("space frame error:", err);
      }
    }
  }, 33);
}

let spaceCamera: THREE.PerspectiveCamera | null = null;
let spaceRenderer: THREE.WebGLRenderer | null = null;
let spaceComposer: EffectComposer | null = null;

export function resizeSpace() {
  if (!spaceCamera || !spaceRenderer) return;
  spaceCamera.aspect = window.innerWidth / window.innerHeight;
  spaceCamera.updateProjectionMatrix();
  spaceRenderer.setSize(window.innerWidth, window.innerHeight);
  spaceComposer?.setSize(window.innerWidth, window.innerHeight);
}
