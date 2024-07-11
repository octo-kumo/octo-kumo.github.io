import {type GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import type {AssetName} from "~/games/civilisation-0/types";
import {InstancedMesh, Matrix4, type MeshStandardMaterial, Vector3} from "three";
import {Mesh} from "three/src/objects/Mesh";
import type {Scene} from "three/src/scenes/Scene";

const purgatory = new Matrix4();
purgatory.setPosition(9999, 9999, 9999); // send them to hell
type IObject = {
    count: number,
    capacity: number,
    meshes: InstancedMesh[],
    offsets: Vector3[]
};
const assets: {
    [key in AssetName]?: Promise<GLTF>
} = {};
const expandingObjectPool: {
    [key in AssetName]?: { [key: number]: Promise<IObject> }
} = {};
const objects: {
    [key in AssetName]?: IObject
} = {};
let scene: Scene | undefined;
const loader = new GLTFLoader();
const URL_PREFIX = "/projects/assets/c0/"

export function setScene(_scene: Scene) {
    scene = _scene;
    const _meshes = Object.values(objects).flatMap(a => a.meshes);
    if (_meshes.length > 0) scene.add(..._meshes);
}

export function loadAsset(name: AssetName) {
    return assets[name] ??= loader.loadAsync(URL_PREFIX + name);
}

async function expand(name: AssetName) {
    const oldObject = objects[name];
    const newCap = (oldObject?.capacity ?? 8) * 2;
    return (expandingObjectPool[name] ??= {})[newCap] ??= (async function () {
        console.log("expanding instanced-mesh", name, "to", newCap);
        const asset = await loadAsset(name);

        const newObject: IObject = {
            capacity: newCap,
            count: oldObject?.count ?? 0,
            meshes: [],
            offsets: []
        };
        asset.scene.traverse(child => {
            if (child.type === 'Mesh') {
                const _mesh = child as Mesh;
                (_mesh.material as MeshStandardMaterial).metalness = 0;
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

async function getSpot(name: AssetName) {
    if (!objects[name]) objects[name] = await expand(name);
    const index = objects[name].count++;
    while (index >= objects[name].capacity) await expand(name);
    return index;
}

export async function loadInstance(name: AssetName) {
    const index = await getSpot(name);
    return (matrix: Matrix4) => {
        objects[name]?.meshes.forEach(m => {
            m.setMatrixAt(index, matrix);
        })
    }
}

