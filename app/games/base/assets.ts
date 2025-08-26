import type { AssetName } from "~/games/base/types";
import {
    DoubleSide,
    InstancedMesh,
    Material,
    Matrix4,
    MeshBasicMaterial,
    MeshStandardMaterial,
    ShapeGeometry,
    type Texture,
    TextureLoader,
    Vector3,
    Mesh,
    type Scene,
} from "three";

import { Font, FontLoader } from "three/addons/loaders/FontLoader.js";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const purgatory = new Matrix4();
purgatory.setPosition(99999, 99999, 99999); // send them to hell
type IObject = {
    count: number,
    capacity: number,
    meshes: InstancedMesh[],
    offsets: Vector3[]
};
const assets: {
    [key in AssetName]?: Promise<GLTF>
} = {};
const texture: {
    [key in AssetName]?: Promise<Texture>
} = {};
const expandingObjectPool: {
    [key in AssetName]?: { [key: number]: Promise<IObject> }
} = {};
const objects: {
    [key in AssetName]?: IObject
} = {};
let scene: Scene | undefined;
const loader = new GLTFLoader();
const texture_loader = new TextureLoader();
const URL_PREFIX = "/projects/assets/"

export function getTexture(name: AssetName) {
    return texture[name] ??= texture_loader.loadAsync(URL_PREFIX + name);
}


export function setupMaterial(material: Material | Material[]) {
    if (material instanceof Material) {
        (material as MeshStandardMaterial).metalness = 0;
    } else if (Array.isArray(material)) material.forEach(m => {
        (m as MeshStandardMaterial).metalness = 0;
    });
}

export function setScene(_scene: Scene) {
    scene = _scene;
    const _meshes = Object.values(objects).flatMap(a => a.meshes);
    if (_meshes.length > 0) scene.add(..._meshes);
}

export function loadAsset(name: AssetName, rs = false, cs = false) {
    return assets[name] ??= loader.loadAsync(URL_PREFIX + name).then((r: any) => {
        r.scene.traverse((child: any) => {
            if (child.type === 'Mesh') {
                const _mesh = child as Mesh;
                _mesh.geometry.computeVertexNormals();
                _mesh.geometry.computeBoundingBox();
                _mesh.receiveShadow = rs;
                _mesh.castShadow = cs;
                setupMaterial(_mesh.material);
            }
        });
        return r;
    });
}

async function expandObject(name: AssetName) {
    const oldObject = objects[name];
    const newCap = oldObject?.capacity ? oldObject?.capacity * 2 : 1;
    return (expandingObjectPool[name] ??= {})[newCap] ??= (async function () {
        const asset = await loadAsset(name);

        const newObject: IObject = {
            capacity: newCap,
            count: oldObject?.count ?? 0,
            meshes: [],
            offsets: []
        };
        asset.scene.traverse((child: any) => {
            if (child.type === 'Mesh') {
                const _mesh = child as Mesh;
                setupMaterial(_mesh.material);
                const mesh = new InstancedMesh(_mesh.geometry, _mesh.material, newCap);
                const offset = new Vector3();
                child.getWorldPosition(offset);
                newObject.offsets.push(offset);
                newObject.meshes.push(mesh);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene?.add(mesh);
            }
        });
        if (oldObject) {
            let matrix = new Matrix4();
            if (newObject.meshes.length !== oldObject.meshes.length) throw new Error("Mesh length mismatch during expansion!")
            for (let mid = 0; mid < newObject.meshes.length; mid++) {
                for (let iid = 0; iid < oldObject.count; iid++) {
                    oldObject.meshes[mid].getMatrixAt(iid, matrix);
                    newObject.meshes[mid].setMatrixAt(iid, matrix);
                }
                for (let iid = oldObject.count; iid < newCap; iid++)
                    newObject.meshes[mid].setMatrixAt(iid, purgatory);
            }
            scene?.remove(...oldObject.meshes);
            oldObject.meshes.forEach(m => m.dispose());
            oldObject.meshes = [];
        } else {
            for (let mid = 0; mid < newObject.meshes.length; mid++)
                for (let iid = 0; iid < newCap; iid++) newObject.meshes[mid].setMatrixAt(iid, purgatory);
        }
        return objects[name] = newObject;
    })();
}

async function getInstanceIndex(name: AssetName) {
    if (!objects[name]) objects[name] = await expandObject(name);
    const index = objects[name].count++;
    while (index >= objects[name].capacity) await expandObject(name);
    return index;
}

export async function loadInstance(name: AssetName) {
    const index = await getInstanceIndex(name);
    return (matrix: Matrix4) => {
        objects[name]?.meshes.forEach(m => {
            m.setMatrixAt(index, matrix);
        })
    }
}

let font: Font | undefined = undefined;

export async function textToShape(text: string, size: number, justify: 'left' | 'right' | 'center' = 'left', align: 'top' | 'bottom' | 'center' = 'bottom') {
    if (!font) font = await new FontLoader().loadAsync("https://raw.githubusercontent.com/mrdoob/three.js/e7fd8b9d7d941c4670521f7d843a7fa12435410a/examples/fonts/helvetiker_regular.typeface.json");
    const color = 0x006699;

    const mat = new MeshBasicMaterial({
        color: color,
        side: DoubleSide
    });

    const shapes = font.generateShapes(text, size);
    const geometry = new ShapeGeometry(shapes);
    geometry.computeBoundingBox();
    const width = ((geometry.boundingBox?.max?.x ?? 0) - (geometry.boundingBox?.min?.x ?? 0));
    const height = ((geometry.boundingBox?.max?.y ?? 0) - (geometry.boundingBox?.min?.y ?? 0));
    if (justify == 'center') geometry.translate(-0.5 * width, 0, 0);
    else if (justify === 'right') geometry.translate(-width, 0, 0);
    if (align == 'center') geometry.translate(0, -0.5 * height, 0);
    else if (align === 'top') geometry.translate(0, -height, 0);
    let mesh = new Mesh(geometry, mat);
    mesh.castShadow = true;
    return mesh;
}
