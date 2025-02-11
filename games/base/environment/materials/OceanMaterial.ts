import { DoubleSide, RepeatWrapping, ShaderMaterial, TextureLoader, Uniform, Vector3 } from "three";
import * as OceanShaders from "../shaders/OceanShaders.js";
import { SetSkyboxUniforms } from "./SkyboxMaterial.js";
import { URL_PREFIX } from "../../config.js";

export const surface = new ShaderMaterial();
export const volume = new ShaderMaterial();
export const object = new ShaderMaterial();
export const triplanar = new ShaderMaterial();

const normalMap1 = new Uniform(new TextureLoader().load(URL_PREFIX + "base/waterNormal1.png"));
normalMap1.value.wrapS = RepeatWrapping;
normalMap1.value.wrapT = RepeatWrapping;
const normalMap2 = new Uniform(new TextureLoader().load(URL_PREFIX + "base/waterNormal2.png"));
normalMap2.value.wrapS = RepeatWrapping;
normalMap2.value.wrapT = RepeatWrapping;

const spotLightSharpness = 10;

export const spotLightDistance = 200;
export const spotLightDistanceUniform = new Uniform(spotLightDistance);

const objectTexture = new TextureLoader().load(URL_PREFIX + "base/basicChecker.png");
objectTexture.wrapS = RepeatWrapping;
objectTexture.wrapT = RepeatWrapping;

export const landTexture = new TextureLoader().load(URL_PREFIX + "base/sand.png");
landTexture.wrapS = RepeatWrapping;
landTexture.wrapT = RepeatWrapping;

const blendSharpness = 3;
const triplanarScale = 1;

export function Start(cameraForward: Vector3, timeUniform: Uniform) {
    surface.vertexShader = OceanShaders.surfaceVertex;
    surface.fragmentShader = OceanShaders.surfaceFragment;
    surface.side = DoubleSide;
    surface.transparent = true;

    surface.uniforms =
    {
        _Time: timeUniform,
        _NormalMap1: normalMap1,
        _NormalMap2: normalMap2
    };
    SetSkyboxUniforms(surface);

    volume.vertexShader = OceanShaders.volumeVertex;
    volume.fragmentShader = OceanShaders.volumeFragment;
    SetSkyboxUniforms(volume);

    object.vertexShader = OceanShaders.objectVertex;
    object.fragmentShader = OceanShaders.objectFragment;
    object.uniforms =
    {
        _MainTexture: new Uniform(objectTexture),
        _CameraForward: new Uniform(cameraForward),
        _SpotLightSharpness: new Uniform(spotLightSharpness),
        _SpotLightDistance: spotLightDistanceUniform
    };
    SetSkyboxUniforms(object);

    triplanar.vertexShader = OceanShaders.triplanarVertex;
    triplanar.fragmentShader = OceanShaders.triplanarFragment;
    triplanar.uniforms =
    {
        _MainTexture: new Uniform(landTexture),
        _CameraForward: new Uniform(cameraForward),
        _BlendSharpness: new Uniform(blendSharpness),
        _Scale: new Uniform(triplanarScale),
        _SpotLightSharpness: new Uniform(spotLightSharpness),
        _SpotLightDistance: spotLightDistanceUniform
    };
    SetSkyboxUniforms(triplanar);
}