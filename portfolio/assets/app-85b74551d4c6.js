var _cache,_setConsoleFunction,ReversedDepthFuncs,_lut,DEG2RAD,RAD2DEG,_vector$c,_quaternion$5,_m3,LINEAR_REC709_TO_XYZ,XYZ_TO_LINEAR_REC709,ColorManagement,_canvas,_sourceId,_textureId,_tempVec3,_v1$7,_m1$2,_zero,_one,_x,_y,_z,_matrix$2,_quaternion$4,_object3DId,_v1$6,_q1,_m1$1,_target,_position$4,_scale$3,_quaternion$3,_xAxis,_yAxis,_zAxis,_addedEvent,_removedEvent,_childaddedEvent,_childremovedEvent,_moveEvent,_colorKeywords,_hslA,_hslB,_color,_v0$2,_v1$5,_v2$4,_v3$2,_vab,_vac,_vbc,_vap,_vbp,_vcp,_v40,_v41,_v42,_points,_vector$b,_box$4,_v0$1,_v1$4,_v2$3,_f0,_f1,_f2,_center,_extents,_triangleNormal,_testAxis,_vector$a,_vector2$1,_id$2,_box$3,_v1$3,_v2$2,_id$1,_m1,_obj,_offset,_box$2,_boxMorphTargets,_vector$9,_materialId,_vector$7,_segCenter,_segDir,_diff,_edge1,_edge2,_normal$1,_inverseMatrix$3,_ray$3,_sphere$6,_sphereHitAt,_vA,_vB,_vC,_tempA,_morphA,_intersectionPoint,_intersectionPointWorld,_vector1,_vector2,_normalMatrix,_sphere$3,_defaultSpriteCenter,_vector$6,_inverseMatrix,_ray,_sphere,_position$3,tmp,px,py,pz,Curves,WorldUVGenerator,UniformsUtils,default_vertex,default_fragment,Cache,DefaultLoadingManager,loading,_loading,_projScreenMatrix,_lightPositionWorld,_lookTarget,_position$2,_quaternion$2,_scale$2,_v3$1,_minTarget,_maxTarget,_errorMap,fov,aspect,_RESERVED_CHARS_RE,_reservedRe,_wordChar,_wordCharOrDot,_directoryRe,_nodeRe,_objectRe,_propertyRe,_trackRe,_supportedObjectNames,_controlInterpolantsResultBuffer,_matrix,alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,envmap_physical_pars_fragment,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,vertex$h,fragment$h,vertex$g,fragment$g,vertex$f,fragment$f,vertex$e,fragment$e,vertex$d,fragment$d,vertex$c,fragment$c,vertex$b,fragment$b,vertex$a,fragment$a,vertex$9,fragment$9,vertex$8,fragment$8,vertex$7,fragment$7,vertex$6,fragment$6,vertex$5,fragment$5,vertex$4,fragment$4,vertex$3,fragment$3,vertex$2,fragment$2,vertex$1,fragment$1,ShaderChunk,UniformsLib,ShaderLib,_rgb,_e1$1,_m1$12,LOD_MIN,EXTRA_LOD_SIGMA,MAX_SAMPLES,GGX_SAMPLES,_flatCamera,_clearColor,_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel,_oldXrEnabled,_origin,toneMappingMap,emptyTexture,emptyShadowTexture,emptyArrayTexture,empty3dTexture,emptyCubeTexture,arrayCacheF32,arrayCacheI32,mat4array,mat3array,mat2array,RePathPart,COMPLETION_STATUS_KHR,programIdCount,_m0,toneMappingFunctions,_v0,includePattern,shaderChunkMap,unrollLoopPattern,shadowMapTypeDefines,envMapTypeDefines,envMapModeDefines,envMapBlendingDefines,_id,nextVersion,vertex,fragment,_cubeDirections,_cubeUps,_projScreenMatrix2,_lightPositionWorld2,_lookTarget2,_occlusion_vertex,_occlusion_fragment,_e1,_m12,DATA,lut,CopyShader,_camera,_geometry,SMAAEdgesShader,SMAAWeightsShader,SMAABlendShader,enabled,t0,frameSum,frameN,stack,samples,RING,frameRing,perf,GFX_LADDER,DOWNGRADE_AT,UPGRADE_AT,DOWNGRADE_WINDOWS,UPGRADE_WINDOWS,MIN_SAMPLES,EVAL_MS,level,applyFn,goodWindows,badWindows,lastLog,started,gfx,WWF_SVG,WWF_POS,BDC_SVG,BDC_POS,KEYFRAMES,spaceCamera,spaceRenderer,spaceComposer,cfg,dataEl,data,projects,keywordsWeighted,$2,SECTIONS,N,progress,CLICKS,clicks,tagline,marquee,MQ,wordCache,rows,verticalSpace,perfEl,searchInput,galleryInner,ICONS,targetPosition,scrollFrame,writeupSearch,writeupResults,writeupStatus,writeupEntries,writeupLive,writeupBase,E=Object.defineProperty,_=Object.defineProperties,$=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&p(e,n,t[n]);if(m)for(var n of m(t))C.call(t,n)&&p(e,n,t[n]);return e},G=(e,t)=>_(e,$(t)),y=(e="always")=>({playMode:e,optimizeSeo:!0,createContainers:!0,hideOverflow:!1,timing:e==="always"?{duration:2*1e3,iterations:1/0}:{duration:250,iterations:1},glitchTimeSpan:e==="always"?{start:.5,end:.7}:{start:0,end:1},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:e==="click"?{count:15,velocity:20,minHeight:.02,maxHeight:.15,hueRotate:!0,cssFilters:""}:{count:6,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0,cssFilters:""},pulse:!1}),v=(e,t)=>{if(!e.glitchTimeSpan)return 1;const n=e.glitchTimeSpan.start,s=e.glitchTimeSpan.end;if(t<n||t>s)return 0;const o=n+(s-n)/2;return t<o?(t-n)/(o-n):(s-t)/(s-o)},u=(e,t)=>(Math.random()-.5)*2*v(e,t),b=({minHeight:e,maxHeight:t,minWidth:n,maxWidth:s})=>{const a=Math.floor(Math.random()*((t-e)*100+1))+e*100,r=Math.floor(Math.random()*((s-n)*100+1))+n*100,o=Math.floor(Math.random()*(100-a)),i=Math.floor(Math.random()*(100-r)),c=`${i+r}% ${o}%`,l=`${i+r}% ${o+a}%`,d=`${i}% ${o+a}%`,u=`${i}% ${o}%`;return`polygon(${c},${l},${d},${u})`},M=e=>{const t=Math.floor(e.slice.velocity*e.timing.duration/1e3)+1,n=[];for(let s=0;s<t;++s){if(v(e,s/t)===0){n.push({opacity:"0",transform:"none",clipPath:"unset"});continue}const o={opacity:"1",transform:`translate3d(${u(e,s/t)*30}%,0,0)`,clipPath:b({minHeight:e.slice.minHeight,maxHeight:e.slice.maxHeight,minWidth:1,maxWidth:1})};e.slice.cssFilters?o.filter=e.slice.cssFilters:e.slice.hueRotate&&(o.filter=`hue-rotate(${Math.floor(u(e,s/t)*360)}deg)`),n.push(o)}return{steps:n,timing:f({easing:`steps(${t},jump-start)`},e.timing)}},A=e=>e.pulse?{steps:[{transform:"scale(1)",opacity:"1"},{transform:`scale(${e.pulse.scale})`,opacity:"0"}],timing:G(f({},e.timing),{delay:(e.glitchTimeSpan?e.glitchTimeSpan.start:0)*e.timing.duration,easing:"ease-in-out"})}:null,x=e=>{if(!e.shake)return{steps:[],timing:{}};const t=Math.floor(e.shake.velocity*e.timing.duration/1e3)+1,n=[];for(let s=0;s<t;++s){const o=u(e,s/t)*e.shake.amplitudeX*100,i=u(e,s/t)*e.shake.amplitudeY*100;n.push({transform:`translate3d(${o}%,${i}%,0)`})}return{steps:n,timing:f({easing:`steps(${t},jump-start)`},e.timing)}},w=e=>[x(e),A(e),...Array.from({length:e.slice.count}).map(()=>M(e))].filter(e=>e!==null),g=(...e)=>{const t=e=>e&&typeof e=="object";return e.reduce((e,n)=>(Object.keys(n).forEach(s=>{t(e[s])&&t(n[s])?e[s]=g(e[s],n[s]):n[s]!==0[0]&&(e[s]=n[s])}),e),{})},L=(e,t)=>{if(!t.createContainers)return{container:e,layersContainer:e,glitched:e.firstElementChild};if(!e.dataset.glitched){const n=document.createElement("div"),t=document.createElement("div");return getComputedStyle(e).getPropertyValue("display").match(/^inline/)&&(t.style.display="inline-block"),t.appendChild(n),(s=e.parentElement)==null||s.insertBefore(t,e),n.prepend(e),{container:t,layersContainer:n,glitched:e}}const n=e.parentElement,i=(o=e.parentElement)==null?0[0]:o.parentElement;for(var s,o;n.children.length>1;)n.removeChild(n.children[1]);return n.firstElementChild.getAnimations().forEach(e=>e.cancel()),{container:i,layersContainer:n,glitched:e}},O=(e,t,n)=>{const{glitched:r,container:s,layersContainer:i}=L(e,n);i.style.display="grid",n.hideOverflow&&(s.style.overflow="hidden"),n.html&&(r.innerHTML=n.html),r.style.gridArea="1/1/-1/-1";const o=r.cloneNode(!0);o.dataset.islayer="true",o.style.gridArea="1/1/-1/-1",o.style.userSelect="none",o.style.pointerEvents="none",o.style.opacity="0";for(let e=0;e<t.length-1;++e){const n=o.cloneNode(!0);i.appendChild(n)}const a=()=>{t.forEach((e,t)=>{i.children[t].animate(e.steps,e.timing)})},c=()=>{t.forEach((e,t)=>{i.children[t].getAnimations().forEach(e=>{e.cancel()})})};switch(s.onmouseenter=null,s.onmouseleave=null,s.onclick=null,n.playMode){case"always":a();break;case"hover":s.onmouseenter=a,s.onmouseleave=c;break;case"click":s.onclick=()=>{c(),a()};break}return e.dataset.glitched="1",{container:s,startGlitch:a,stopGlitch:c}},H=(e=".powerglitch",t={})=>{const s=g(y(t.playMode),t);if(s.optimizeSeo&&/google|bing|baidu|yandex|slurp|bot/i.exec(navigator.userAgent))return{containers:[],startGlitch:()=>{console.warn("PowerGlitch disabled")},stopGlitch:()=>{console.warn("PowerGlitch disabled")}};let n=[];typeof e=="string"?n=Array.from(document.querySelectorAll(e)):e instanceof NodeList?n=Array.from(e):Array.isArray(e)?n=e:e instanceof HTMLElement&&(n=[e]);const i=w(s),o=n.filter(e=>!e.dataset.islayer).map(e=>O(e,i,s));return{containers:o.map(e=>e.container),startGlitch:()=>o.forEach(e=>e.startGlitch()),stopGlitch:()=>o.forEach(e=>e.stopGlitch())}},R={glitch:H,generateLayers:w,getDefaultOptions:y},REVISION="183",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,UnsignedInt101111Type=35899,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,R11_EAC_Format=37488,SIGNED_R11_EAC_Format=37489,RG11_EAC_Format=37490,SIGNED_RG11_EAC_Format=37491,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,InterpolateDiscrete=2300,InterpolateLinear=2301,InterpolateSmooth=2302,InterpolateBezier=2303,ZeroCurvatureEnding=2400,ZeroSlopeEnding=2401,WrapAroundEnding=2402,BasicDepthPacking=3200,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;function arrayNeedsUint32(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function isTypedArray(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function createElementNS(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function createCanvasElement(){const e=createElementNS("canvas");return e.style.display="block",e}_cache={},_setConsoleFunction=null;function log(...e){const t="THREE."+e.shift();_setConsoleFunction?_setConsoleFunction("log",t,...e):console.log(t,...e)}function enhanceLogMessage(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const t=e[1];t&&t.isStackTrace?e[0]+=" "+t.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function warn(...e){e=enhanceLogMessage(e);const t="THREE."+e.shift();if(_setConsoleFunction)_setConsoleFunction("warn",t,...e);else{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function error(...e){e=enhanceLogMessage(e);const t="THREE."+e.shift();if(_setConsoleFunction)_setConsoleFunction("error",t,...e);else{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function warnOnce(...e){const t=e.join(" ");if(t in _cache)return;_cache[t]=!0,warn(...e)}function probeAsync(e,t,n){return new Promise(function(s,o){function i(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:o();break;case e.TIMEOUT_EXPIRED:setTimeout(i,n);break;default:s()}}setTimeout(i,n)})}ReversedDepthFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};class EventDispatcher{addEventListener(e,t){this._listeners===0[0]&&(this._listeners={});const n=this._listeners;n[e]===0[0]&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n!==0[0]&&n[e]!==0[0]&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===0[0])return;const n=s[e];if(n!==0[0]){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){const t=this._listeners;if(t===0[0])return;const n=t[e.type];if(n!==0[0]){e.target=this;const t=n.slice(0);for(let n=0,s=t.length;n<s;n++)t[n].call(this,e);e.target=null}}}_lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0,o=_lut[e&255]+_lut[e>>8&255]+_lut[e>>16&255]+_lut[e>>24&255]+"-"+_lut[t&255]+_lut[t>>8&255]+"-"+_lut[t>>16&15|64]+_lut[t>>24&255]+"-"+_lut[n&63|128]+_lut[n>>8&255]+"-"+_lut[n>>16&255]+_lut[n>>24&255]+_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255];return o.toLowerCase()}function clamp(e,t,n){return Math.max(t,Math.min(n,e))}function euclideanModulo(e,t){return(e%t+t)%t}function lerp(e,t,n){return(1-n)*e+n*t}function denormalize(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function normalize(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return(this.x*this.x+this.y*this.y)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}angleTo(e){const t=(this.lengthSq()*e.lengthSq())**.5;if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return this.distanceToSquared(e)**.5}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Quaternion{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3],u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(d!==f||r!==u||c!==h||l!==m){let t=r*u+c*h+l*m+d*f;t<0&&(u=-u,h=-h,m=-m,f=-f,t=-t);let e=1-a;if(t<.9995){const n=Math.acos(t),s=Math.sin(n);e=Math.sin(e*n)/s,a=Math.sin(a*n)/s,r=r*e+u*a,c=c*e+h*a,l=l*e+m*a,d=d*e+f*a}else{r=r*e+u*a,c=c*e+h*a,l=l*e+m*a,d=d*e+f*a;const t=1/(r*r+c*c+l*l+d*d)**.5;r*=t,c*=t,l*=t,d*=t}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const{_x:d,_y:u,_z:h,_order:m}=e,c=Math.cos,l=Math.sin,n=c(d/2),s=c(u/2),o=c(h/2),i=l(d/2),a=l(u/2),r=l(h/2);switch(m){case"XYZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"YXZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"ZXY":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"ZYX":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"YZX":this._x=i*s*o+n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o-i*a*r;break;case"XZY":this._x=i*s*o-n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o+i*a*r;break;default:warn("Quaternion: .setFromEuler() encountered an unknown order: "+m)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/(u+1)**.5;this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*(1+n-s-o)**.5;this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*(1+s-n-o)**.5;this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*(1+o-n-s)**.5;this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)**.5}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const{_x:n,_y:s,_z:o,_w:i}=e,{_x:a,_y:r,_z:c,_w:l}=t;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){let{_x:o,_y:i,_z:a,_w:r}=e,s=this.dot(e);s<0&&(o=-o,i=-i,a=-a,r=-r,s=-s);let n=1-t;if(s<.9995){const e=Math.acos(s),c=Math.sin(e);n=Math.sin(n*e)/c,t=Math.sin(t*e)/c,this._x=this._x*n+o*t,this._y=this._y*n+i*t,this._z=this._z*n+a*t,this._w=this._w*n+r*t,this._onChangeCallback()}else this._x=this._x*n+o*t,this._y=this._y*n+i*t,this._z=this._z*n+a*t,this._w=this._w*n+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=(1-n)**.5,o=n**.5;return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===0[0]&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$5.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$5.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const{x:t,y:n,z:s,w:r}=e,o=this.x,i=this.y,a=this.z,c=2*(n*a-s*i),l=2*(s*o-t*a),d=2*(t*i-n*o);return this.x=o+r*c+n*d-s*l,this.y=i+r*l+s*c-t*d,this.z=a+r*d+t*l-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return(this.x*this.x+this.y*this.y+this.z*this.z)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const{x:n,y:s,z:o}=e,{x:i,y:a,z:r}=t;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=(this.lengthSq()*e.lengthSq())**.5;if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return this.distanceToSquared(e)**.5}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=(1-e*e)**.5;return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}_vector$c=new Vector3,_quaternion$5=new Quaternion;class Matrix3{constructor(e,t,n,s,o,i,a,r,c){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==0[0]&&this.set(e,t,n,s,o,i,a,r,c)}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}}_m3=new Matrix3,LINEAR_REC709_TO_XYZ=(new Matrix3).set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=(new Matrix3).set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const e={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===SRGBTransfer&&(e.r=SRGBToLinear(e.r),e.g=SRGBToLinear(e.g),e.b=SRGBToLinear(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===SRGBTransfer&&(e.r=LinearToSRGB(e.r),e.g=LinearToSRGB(e.g),e.b=LinearToSRGB(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===NoColorSpace?LinearTransfer:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[LinearSRGBColorSpace]:{primaries:t,whitePoint:s,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:t,whitePoint:s,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),e}ColorManagement=createColorManagement();function SRGBToLinear(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function LinearToSRGB(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}class ImageUtils{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_canvas===0[0]&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const t=_canvas.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_canvas}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let e=0;e<s.length;e++)s[e]=SRGBToLinear(s[e]/255)*255;return n.putImageData(o,0,0),t}if(e.data){const t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(SRGBToLinear(t[e]/255)*255):t[e]=SRGBToLinear(t[e]);return{data:t,width:e.width,height:e.height}}return warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}_sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const s=e===0[0]||typeof e=="string";if(!s&&e.images[this.uuid]!==0[0])return e.images[this.uuid];const n={uuid:this.uuid,url:""},t=this.data;if(t!==null){let e;if(Array.isArray(t)){e=[];for(let n=0,s=t.length;n<s;n++)t[n].isDataTexture?e.push(serializeImage(t[n].image)):e.push(serializeImage(t[n]))}else e=serializeImage(t);n.url=e}return s||(e.images[this.uuid]=n),n}}function serializeImage(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?ImageUtils.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(warn("Texture: Unable to serialize Texture."),{})}_textureId=0,_tempVec3=new Vector3;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,s=ClampToEdgeWrapping,o=LinearFilter,i=LinearMipmapLinearFilter,a=RGBAFormat,r=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,l=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=i,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=r,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_tempVec3).x}get height(){return this.source.getSize(_tempVec3).y}get depth(){return this.source.getSize(_tempVec3).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const s in e){const t=e[s];if(t===0[0]){warn(`Texture.setValues(): parameter '${s}' has value of undefined.`);continue}const n=this[s];if(n===0[0]){warn(`Texture.setValues(): property '${s}' does not exist.`);continue}n&&t&&n.isVector2&&t.isVector2?n.copy(t):n&&t&&n.isVector3&&t.isVector3?n.copy(t):n&&t&&n.isMatrix3&&t.isMatrix3?n.copy(t):this[s]=t}}toJSON(e){const n=e===0[0]||typeof e=="string";if(!n&&e.textures[this.uuid]!==0[0])return e.textures[this.uuid];const t={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null,Texture.DEFAULT_MAPPING=UVMapping,Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,s=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==0[0]?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=(1-e.w*e.w)**.5;return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=e**.5,s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=t**.5,n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=h**.5,n=j/o,s=y/o),this.set(n,s,o,v),this}let h=((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i))**.5;return(h<0?-h:h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this.w=clamp(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this.w=clamp(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this.w=this.w|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new Texture(s),i=n.count;for(let e=0;e<i;e++)this.textures[e]=o.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:LinearFilter,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==0[0]&&(t.mapping=e.mapping),e.wrapS!==0[0]&&(t.wrapS=e.wrapS),e.wrapT!==0[0]&&(t.wrapT=e.wrapT),e.wrapR!==0[0]&&(t.wrapR=e.wrapR),e.magFilter!==0[0]&&(t.magFilter=e.magFilter),e.minFilter!==0[0]&&(t.minFilter=e.minFilter),e.format!==0[0]&&(t.format=e.format),e.type!==0[0]&&(t.type=e.type),e.anisotropy!==0[0]&&(t.anisotropy=e.anisotropy),e.colorSpace!==0[0]&&(t.colorSpace=e.colorSpace),e.flipY!==0[0]&&(t.flipY=e.flipY),e.generateMipmaps!==0[0]&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==0[0]&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++){const n=this.textures[e];n.setValues(t)}}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Source(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Matrix4{constructor(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==0[0]&&this.set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p)}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new Matrix4).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/_v1$7.setFromMatrixColumn(e,0).length(),o=1/_v1$7.setFromMatrixColumn(e,1).length(),i=1/_v1$7.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const{x:c,y:l,z:d}=e,t=this.elements,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if(e.order==="XYZ"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if(e.order==="YXZ"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if(e.order==="ZXY"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if(e.order==="ZYX"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if(e.order==="YZX"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if(e.order==="XZY"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const s=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),s[0]=_x.x,s[4]=_y.x,s[8]=_z.x,s[1]=_x.y,s[5]=_y.y,s[9]=_z.y,s[2]=_x.z,s[6]=_y.z,s[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,j=e[0],y=e[4],w=e[8],_=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],t=e[6],h=e[10],n=e[14],d=e[3],u=e[7],o=e[11],s=e[15],m=r*n-c*h,f=a*n-c*t,p=a*h-r*t,g=i*n-c*l,v=i*h-r*l,b=i*t-a*l;return j*(u*m-o*f+s*p)-y*(d*m-o*g+s*v)+w*(d*f-u*g+s*b)-_*(d*p-u*v+o*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,v=e[0],f=e[1],g=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],s=e[8],d=e[9],u=e[10],h=e[11],m=e[12],n=e[13],p=e[14],l=e[15],_=v*a-f*i,S=v*r-g*i,j=v*c-o*i,y=f*r-g*a,b=f*c-o*a,w=g*c-o*r,O=s*n-d*m,x=s*p-u*m,C=s*l-h*m,E=d*p-u*n,k=d*l-h*n,A=u*l-h*p,M=_*A-S*k+j*E+y*C-b*x+w*O;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const t=1/M;return e[0]=(a*A-r*k+c*E)*t,e[1]=(g*k-f*A-o*E)*t,e[2]=(n*w-p*b+l*y)*t,e[3]=(u*b-d*w-h*y)*t,e[4]=(r*C-i*A-c*x)*t,e[5]=(v*A-g*C+o*x)*t,e[6]=(p*j-m*w-l*S)*t,e[7]=(s*w-u*j+h*S)*t,e[8]=(i*k-a*C+c*O)*t,e[9]=(f*C-v*k-o*O)*t,e[10]=(m*b-n*j+l*_)*t,e[11]=(d*j-s*b-h*_)*t,e[12]=(a*x-i*E-r*O)*t,e[13]=(v*E-f*x+g*O)*t,e[14]=(n*S-m*y-p*_)*t,e[15]=(s*y-d*S+u*_)*t,this}scale(e){const{x:n,y:s,z:o}=e,t=this.elements;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.max(t,n,s)**.5}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const{x:r,y:o,z:n}=e,a=Math.cos(t),s=Math.sin(t),c=1-a,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,i){return this.set(1,n,o,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const{_x:o,_y:i,_z:r,_w:c}=t,s=this.elements,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,{x:h,y:u,z:l}=n;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const c=this.determinant();if(c===0)return n.set(1,1,1),t.identity(),this;let o=_v1$7.set(s[0],s[1],s[2]).length();const l=_v1$7.set(s[4],s[5],s[6]).length(),d=_v1$7.set(s[8],s[9],s[10]).length();c<0&&(o=-o),_m1$2.copy(this);const i=1/o,a=1/l,r=1/d;return _m1$2.elements[0]*=i,_m1$2.elements[1]*=i,_m1$2.elements[2]*=i,_m1$2.elements[4]*=a,_m1$2.elements[5]*=a,_m1$2.elements[6]*=a,_m1$2.elements[8]*=r,_m1$2.elements[9]*=r,_m1$2.elements[10]*=r,t.setFromRotationMatrix(_m1$2),n.x=o,n.y=l,n.z=d,this}makePerspective(e,t,n,s,o,i,a=WebGLCoordinateSystem,r=!1){const c=this.elements,u=2*o/(t-e),h=2*o/(n-s),m=(t+e)/(t-e),f=(n+s)/(n-s);let l,d;if(r)l=o/(i-o),d=i*o/(i-o);else if(a===WebGLCoordinateSystem)l=-(i+o)/(i-o),d=-2*i*o/(i-o);else if(a===WebGPUCoordinateSystem)l=-i/(i-o),d=-i*o/(i-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,i,a=WebGLCoordinateSystem,r=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),m=-(t+e)/(t-e),f=-(n+s)/(n-s);let l,d;if(r)l=1/(i-o),d=i/(i-o);else if(a===WebGLCoordinateSystem)l=-2/(i-o),d=-(i+o)/(i-o);else if(a===WebGPUCoordinateSystem)l=-1/(i-o),d=-o/(i-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}_v1$7=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$4=new Quaternion;class Euler{constructor(e=0,t=0,n=0,s=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],c=s[8],l=s[1],i=s[5],d=s[9],u=s[2],h=s[6],a=s[10];switch(t){case"XYZ":this._y=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,a),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,i),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,a),this._z=Math.atan2(l,i)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,a),this._z=Math.atan2(-r,i)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,a),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,i));break;case"YZX":this._z=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,i),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,a));break;case"XZY":this._z=Math.asin(-clamp(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,i),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,a),this._y=0);break;default:warn("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$4.setFromEuler(this),this.setFromQuaternion(_quaternion$4,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==0[0]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}_object3DId=0,_v1$6=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$4=new Vector3,_scale$3=new Vector3,_quaternion$3=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const n=new Vector3,e=new Euler,t=new Quaternion,s=new Vector3(1,1,1);function o(){t.setFromEuler(e,!1)}function i(){e.setFromQuaternion(t,0[0],!1)}e._onChange(o),t._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=0[0],this.customDistanceMaterial=0[0],this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$6.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$6.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_position$4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$4,_target,this.up):_m1$1.lookAt(_target,_position$4,this.up),this.quaternion.setFromRotationMatrix(_m1$1),s&&(_m1$1.extractRotation(s.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(error("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):error("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const i=this.children[n],s=i.getObjectByProperty(e,t);if(s!==0[0])return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$4,e,_scale$3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$4,_quaternion$3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const{x:n,y:s,z:o}=e,t=this.matrix.elements;t[12]+=n-t[0]*n-t[4]*s-t[8]*o,t[13]+=s-t[1]*n-t[5]*s-t[9]*o,t[14]+=o-t[2]*n-t[6]*s-t[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const e=this.children;for(let t=0,n=e.length;t<n;t++){const s=e[t];s.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===0[0]||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const t={};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.castShadow===!0&&(t.castShadow=!0),this.receiveShadow===!0&&(t.receiveShadow=!0),this.visible===!1&&(t.visible=!1),this.frustumCulled===!1&&(t.frustumCulled=!1),this.renderOrder!==0&&(t.renderOrder=this.renderOrder),this.static!==!1&&(t.static=this.static),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),this.pivot!==null&&(t.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(t.matrixAutoUpdate=!1),this.morphTargetDictionary!==0[0]&&(t.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==0[0]&&(t.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():0[0],boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():0[0]})),t.instanceInfo=this._instanceInfo.map(e=>({...e})),t.availableInstanceIds=this._availableInstanceIds.slice(),t.availableGeometryIds=this._availableGeometryIds.slice(),t.nextIndexStart=this._nextIndexStart,t.nextVertexStart=this._nextVertexStart,t.geometryCount=this._geometryCount,t.maxInstanceCount=this._maxInstanceCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.matricesTexture=this._matricesTexture.toJSON(e),t.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(t.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(t.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(t.boundingBox=this.boundingBox.toJSON()));function o(t,n){return t[n.uuid]===0[0]&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(t.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=o(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==0[0]&&n.shapes!==0[0]){const t=n.shapes;if(Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const i=t[n];o(e.shapes,i)}else o(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==0[0]&&(o(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),this.material!==0[0])if(Array.isArray(this.material)){const n=[];for(let t=0,s=this.material.length;t<s;t++)n.push(o(e.materials,this.material[t]));t.material=n}else t.material=o(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];t.animations.push(o(e.animations,s))}}if(i){const t=s(e.geometries),o=s(e.materials),i=s(e.textures),a=s(e.images),r=s(e.shapes),c=s(e.skeletons),l=s(e.animations),d=s(e.nodes);t.length>0&&(n.geometries=t),o.length>0&&(n.materials=o),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),d.length>0&&(n.nodes=d)}return n.object=t,n;function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0),Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0,Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}_moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const s=this._targetRay,o=this._grip,r=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(r&&e.hand){c=!0;for(const i of e.hand.values()){const o=t.getJointPose(i,n),s=this._getHandJoint(r,i);o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=o.radius),s.visible=o!==null}const a=r.joints["index-finger-tip"],l=r.joints["thumb-tip"],s=a.position.distanceTo(l.position),o=.02,i=.005;r.inputState.pinching&&s>o+i?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&s<=o-i&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),r!==null&&(r.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===0[0]){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===0[0]&&n===0[0]){const t=e;t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hue2rgb(o,s,e+1/3),this.g=hue2rgb(o,s,e),this.b=hue2rgb(o,s,e-1/3)}return ColorManagement.colorSpaceToWorking(this,s),this}setStyle(e,t=SRGBColorSpace){function s(t){if(t===0[0])return;parseFloat(t)<1&&warn("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^)]*)\)/.exec(e)){let o;const a=n[1],i=n[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)%\s*,\s*(\d*\.?\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:warn("Color: Unknown color model "+e)}}else if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);warn("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==0[0]?this.setHex(n,t):warn("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),t);const{r:a,g:n,b:s}=_color,o=Math.max(a,n,s),r=Math.min(a,n,s);let i,c;const l=(r+o)/2;if(r===o)i=0,c=0;else{const e=o-r;switch(c=l<=.5?e/(o+r):e/(2-o-r),o){case a:i=(n-s)/e+(n<s?6:0);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4;break}i/=6}return e.h=i,e.s=c,e.l=l,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),e);const{r:t,g:n,b:s}=_color;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),s=lerp(_hslA.s,_hslB.s,t),o=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,t=e.elements;return this.r=t[0]*n+t[3]*s+t[6]*o,this.g=t[1]*n+t[4]*s+t[7]*o,this.b=t[2]*n+t[5]*s+t[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}_color=new Color,Color.NAMES=_colorKeywords;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}_v0$2=new Vector3,_v1$5=new Vector3,_v2$4=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_v0$2.subVectors(e,t),s.cross(_v0$2);const o=s.lengthSq();return o>0?s.multiplyScalar(1/o**.5):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){_v0$2.subVectors(s,t),_v1$5.subVectors(n,t),_v2$4.subVectors(e,t);const a=_v0$2.dot(_v0$2),i=_v0$2.dot(_v1$5),r=_v0$2.dot(_v2$4),c=_v1$5.dot(_v1$5),l=_v1$5.dot(_v2$4),d=a*c-i*i;if(d===0)return o.set(0,0,0),null;const u=1/d,h=(c*r-i*l)*u,m=(a*l-i*r)*u;return o.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_v3$2)!==null&&_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,n,s,o,i,a,r){return this.getBarycoord(e,t,n,s,_v3$2)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,_v3$2.x),r.addScaledVector(i,_v3$2.y),r.addScaledVector(a,_v3$2.z),r)}static getInterpolatedAttribute(e,t,n,s,o,i){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,t),_v41.fromBufferAttribute(e,n),_v42.fromBufferAttribute(e,s),i.setScalar(0),i.addScaledVector(_v40,o.x),i.addScaledVector(_v41,o.y),i.addScaledVector(_v42,o.z),i}static isFrontFacing(e,t,n,s){return _v0$2.subVectors(n,t),_v1$5.subVectors(e,t),_v0$2.cross(_v1$5).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$2.subVectors(this.c,this.b),_v1$5.subVectors(this.a,this.b),_v0$2.cross(_v1$5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,d=this.b,h=this.c;let u,i;_vab.subVectors(d,o),_vac.subVectors(h,o),_vap.subVectors(e,o);const a=_vab.dot(_vap),r=_vac.dot(_vap);if(a<=0&&r<=0)return t.copy(o);_vbp.subVectors(e,d);const n=_vab.dot(_vbp),c=_vac.dot(_vbp);if(n>=0&&c<=n)return t.copy(d);const m=a*c-n*r;if(m<=0&&a>=0&&n<=0)return u=a/(a-n),t.copy(o).addScaledVector(_vab,u);_vcp.subVectors(e,h);const l=_vab.dot(_vcp),s=_vac.dot(_vcp);if(s>=0&&l<=s)return t.copy(h);const f=l*r-a*s;if(f<=0&&r>=0&&s<=0)return i=r/(r-s),t.copy(o).addScaledVector(_vac,i);const p=n*s-l*c;if(p<=0&&c-n>=0&&l-s>=0)return _vbc.subVectors(h,d),i=(c-n)/(c-n+(l-s)),t.copy(d).addScaledVector(_vbc,i);const g=1/(p+f+m);return u=f*g,i=m*g,t.copy(o).addScaledVector(_vab,u).addScaledVector(_vac,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-(1/0),-(1/0),-(1/0))){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-(1/0),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==0[0]){const s=n.getAttribute("position");if(t===!0&&s!==0[0]&&e.isInstancedMesh!==!0)for(let t=0,n=s.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_vector$b):_vector$b.fromBufferAttribute(s,t),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==0[0]?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_box$4.copy(n.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const s=e.children;for(let e=0,n=s.length;e<n;e++)this.expandByObject(s[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$1.subVectors(e.a,_center),_v1$4.subVectors(e.b,_center),_v2$3.subVectors(e.c,_center),_f0.subVectors(_v1$4,_v0$1),_f1.subVectors(_v2$3,_v1$4),_f2.subVectors(_v0$1,_v2$3);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!!satForAxes(t,_v0$1,_v1$4,_v2$3,_extents)&&(t=[1,0,0,0,1,0,0,0,1],!!satForAxes(t,_v0$1,_v1$4,_v2$3,_extents)&&(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$1,_v1$4,_v2$3,_extents)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}_points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$1=new Vector3,_v1$4=new Vector3,_v2$3=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){_testAxis.fromArray(e,i);const d=o.x*Math.abs(_testAxis.x)+o.y*Math.abs(_testAxis.y)+o.z*Math.abs(_testAxis.z),a=t.dot(_testAxis),r=n.dot(_testAxis),c=s.dot(_testAxis);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}_vector$a=new Vector3,_vector2$1=new Vector2,_id$2=0;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==0[0]?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyMatrix3(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyMatrix4(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.applyNormalMatrix(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$a.fromBufferAttribute(this,t),_vector$a.transformDirection(e),this.setXYZ(t,_vector$a.x,_vector$a.y,_vector$a.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),s=normalize(s,this.array),o=normalize(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}_box$3=new Box3,_v1$3=new Vector3,_v2$2=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==0[0]?n.copy(t):_box$3.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=s**.5,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$3.subVectors(e,this.center);const t=_v1$3.lengthSq();if(t>this.radius*this.radius){const e=t**.5,n=(e-this.radius)*.5;this.center.addScaledVector(_v1$3,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$2.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$3.copy(e.center).add(_v2$2)),this.expandByPoint(_v1$3.copy(e.center).sub(_v2$2))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}_id$1=0,_m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$9=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==0[0]}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==0[0]&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==0[0]){const t=(new Matrix3).getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==0[0]&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,n){return _m1.makeTranslation(e,t,n),this.applyMatrix4(_m1),this}scale(e,t,n){return _m1.makeScale(e,t,n),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===0[0]){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Float32BufferAttribute(t,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-(1/0),-(1/0),-(1/0)),new Vector3(1/0,1/0,1/0));return}if(e!==0[0]){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){const s=t[e];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$9.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$9),_vector$9.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$9)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&error('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const s=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){const s=t[e];_boxMorphTargets.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$9.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$9),_vector$9.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$9)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(s);let n=0;for(let t=0,o=e.count;t<o;t++)_vector$9.fromBufferAttribute(e,t),n=Math.max(n,s.distanceToSquared(_vector$9));if(t)for(let o=0,a=t.length;o<a;o++){const i=t[o],r=this.morphTargetsRelative;for(let t=0,o=i.count;t<o;t++)_vector$9.fromBufferAttribute(i,t),r&&(_offset.fromBufferAttribute(e,t),_vector$9.add(_offset)),n=Math.max(n,s.distanceToSquared(_vector$9))}this.boundingSphere.radius=n**.5,isNaN(this.boundingSphere.radius)&&error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===0[0]||n.normal===0[0]||n.uv===0[0]){error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,y=n.normal,v=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*i.count),4));const w=this.getAttribute("tangent"),r=[],c=[];for(let e=0;e<i.count;e++)r[e]=new Vector3,c[e]=new Vector3;const p=new Vector3,u=new Vector3,d=new Vector3,f=new Vector2,t=new Vector2,o=new Vector2,h=new Vector3,l=new Vector3;function _(e,n,s){p.fromBufferAttribute(i,e),u.fromBufferAttribute(i,n),d.fromBufferAttribute(i,s),f.fromBufferAttribute(v,e),t.fromBufferAttribute(v,n),o.fromBufferAttribute(v,s),u.sub(p),d.sub(p),t.sub(f),o.sub(f);const a=1/(t.x*o.y-o.x*t.y);if(!isFinite(a))return;h.copy(u).multiplyScalar(o.y).addScaledVector(d,-t.y).multiplyScalar(a),l.copy(d).multiplyScalar(t.x).addScaledVector(u,-o.x).multiplyScalar(a),r[e].add(h),r[n].add(h),r[s].add(h),c[e].add(l),c[n].add(l),c[s].add(l)}let s=this.groups;s.length===0&&(s=[{start:0,count:e.count}]);for(let t=0,i=s.length;t<i;++t){const n=s[t],o=n.start,a=n.count;for(let t=o,n=o+a;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}const a=new Vector3,b=new Vector3,m=new Vector3,j=new Vector3;function g(e){m.fromBufferAttribute(y,e),j.copy(m);const t=r[e];a.copy(t),a.sub(m.multiplyScalar(m.dot(t))).normalize(),b.crossVectors(j,t);const n=b.dot(c[e]),s=n<0?-1:1;w.setXYZW(e,a.x,a.y,a.z,s)}for(let t=0,i=s.length;t<i;++t){const n=s[t],o=n.start,a=n.count;for(let t=o,n=o+a;t<n;t+=3)g(e.getX(t+0)),g(e.getX(t+1)),g(e.getX(t+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==0[0]){let s=this.getAttribute("normal");if(s===0[0])s=new BufferAttribute(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let e=0,t=s.count;e<t;e++)s.setXYZ(e,0,0,0);const c=new Vector3,o=new Vector3,l=new Vector3,i=new Vector3,a=new Vector3,r=new Vector3,n=new Vector3,d=new Vector3;if(t)for(let u=0,p=t.count;u<p;u+=3){const h=t.getX(u+0),m=t.getX(u+1),f=t.getX(u+2);c.fromBufferAttribute(e,h),o.fromBufferAttribute(e,m),l.fromBufferAttribute(e,f),n.subVectors(l,o),d.subVectors(c,o),n.cross(d),i.fromBufferAttribute(s,h),a.fromBufferAttribute(s,m),r.fromBufferAttribute(s,f),i.add(n),a.add(n),r.add(n),s.setXYZ(h,i.x,i.y,i.z),s.setXYZ(m,a.x,a.y,a.z),s.setXYZ(f,r.x,r.y,r.z)}else for(let t=0,i=e.count;t<i;t+=3)c.fromBufferAttribute(e,t+0),o.fromBufferAttribute(e,t+1),l.fromBufferAttribute(e,t+2),n.subVectors(l,o),d.subVectors(c,o),n.cross(d),s.setXYZ(t+0,n.x,n.y,n.z),s.setXYZ(t+1,n.x,n.y,n.z),s.setXYZ(t+2,n.x,n.y,n.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$9.fromBufferAttribute(e,t),_vector$9.normalize(),e.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z)}toNonIndexed(){function t(e,t){const o=e.array,n=e.itemSize,a=e.normalized,i=new o.constructor(t.length*n);let s=0,r=0;for(let a=0,c=t.length;a<c;a++){e.isInterleavedBufferAttribute?s=t[a]*e.data.stride+e.offset:s=t[a]*n;for(let e=0;e<n;e++)i[r++]=o[s++]}return new BufferAttribute(i,n,a)}if(this.index===null)return warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new BufferGeometry,n=this.index.array,s=this.attributes;for(const o in s){const i=s[o],a=t(i,n);e.setAttribute(o,a)}const o=this.morphAttributes;for(const s in o){const i=[],a=o[s];for(let e=0,s=a.length;e<s;e++){const o=a[e],r=t(o,n);i.push(r)}e.morphAttributes[s]=i}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==0[0]){const t=this.parameters;for(const n in t)t[n]!==0[0]&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const t in n){const s=n[t];e.data.attributes[t]=s.toJSON(e.data)}const s={};let o=!1;for(const n in this.morphAttributes){const i=this.morphAttributes[n],t=[];for(let n=0,s=i.length;n<s;n++){const o=i[n];t.push(o.toJSON(e.data))}t.length>0&&(s[n]=t,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(e.data.groups=JSON.parse(JSON.stringify(i)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}_materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!==e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===0[0])return;for(const s in e){const n=e[s];if(n===0[0]){warn(`Material: parameter '${s}' has value of undefined.`);continue}const t=this[s];if(t===0[0]){warn(`Material: '${s}' is not a property of THREE.${this.type}.`);continue}t&&t.isColor?t.set(n):t&&t.isVector3&&n&&n.isVector3?t.copy(n):this[s]=n}}toJSON(e){const n=e===0[0]||typeof e=="string";n&&(e={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==0[0]&&(t.roughness=this.roughness),this.metalness!==0[0]&&(t.metalness=this.metalness),this.sheen!==0[0]&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==0[0]&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==0[0]&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==0[0]&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==0[0]&&(t.shininess=this.shininess),this.clearcoat!==0[0]&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==0[0]&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==0[0]&&(t.dispersion=this.dispersion),this.iridescence!==0[0]&&(t.iridescence=this.iridescence),this.iridescenceIOR!==0[0]&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==0[0]&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==0[0]&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==0[0]&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==0[0]&&(t.combine=this.combine)),this.envMapRotation!==0[0]&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==0[0]&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==0[0]&&(t.reflectivity=this.reflectivity),this.refractionRatio!==0[0]&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==0[0]&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==0[0]&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==0[0]&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==0[0]&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==0[0]&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==0[0]&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(t.blending=this.blending),this.side!==FrontSide&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(t.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(t.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(t.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==0[0]&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==0[0]&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==0[0]&&(t.dashSize=this.dashSize),this.gapSize!==0[0]&&(t.gapSize=this.gapSize),this.scale!==0[0]&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.allowOverride===!1&&(t.allowOverride=!1),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}_vector$7=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$7)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return this.distanceSqToPoint(e)**.5}distanceSqToPoint(e){const t=_vector$7.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$7.copy(this.origin).addScaledVector(this.direction,t),_vector$7.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const a=e.distanceTo(t)*.5,r=-this.direction.dot(_segDir),l=_diff.dot(this.direction),c=-_diff.dot(_segDir),u=_diff.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,i),s&&s.copy(_segCenter).addScaledVector(_segDir,o),d}intersectSphere(e,t){_vector$7.subVectors(e.center,this.origin);const n=_vector$7.dot(this.direction),s=_vector$7.dot(_vector$7)-n*n,o=e.radius*e.radius;if(s>o)return null;const i=(o-s)**.5,a=n-i,r=n+i;return r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,_vector$7)!==null}intersectTriangle(e,t,n,s,o){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let i=this.direction.dot(_normal$1),a;if(i>0){if(s)return null;a=1}else if(i<0)a=-1,i=-i;else return null;_diff.subVectors(this.origin,e);const r=a*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(r<0)return null;const c=a*this.direction.dot(_edge1.cross(_diff));if(c<0)return null;if(r+c>i)return null;const l=-a*_diff.dot(_normal$1);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}_inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA=new Vector3,_vB=new Vector3,_vC=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==0[0]&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==0[0]&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==0[0]){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const i=o[n],c=s[n];if(i===0)continue;_tempA.fromBufferAttribute(c,e),a?_morphA.addScaledVector(_tempA,i):_morphA.addScaledVector(_tempA.sub(t),i)}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;if(o===0[0])return;if(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$6.copy(n.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),_sphere$6.containsPoint(_ray$3.origin)===!1){if(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null)return;if(_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2)return}if(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)return;this._computeIntersections(e,t,_ray$3)}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,i=a.index,h=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,u=a.groups,o=a.drawRange;if(i!==null)if(Array.isArray(r))for(let h=0,m=u.length;h<m;h++){const a=u[h],f=r[a.materialIndex],p=Math.max(a.start,o.start),g=Math.min(i.count,Math.min(a.start+a.count,o.start+o.count));for(let o=p,r=g;o<r;o+=3){const u=i.getX(o),h=i.getX(o+1),m=i.getX(o+2);s=checkGeometryIntersection(this,f,e,n,c,l,d,u,h,m),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=a.materialIndex,t.push(s))}}else{const a=Math.max(0,o.start),u=Math.min(i.count,o.start+o.count);for(let o=a,h=u;o<h;o+=3){const m=i.getX(o),f=i.getX(o+1),p=i.getX(o+2);s=checkGeometryIntersection(this,r,e,n,c,l,d,m,f,p),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}else if(h!==0[0])if(Array.isArray(r))for(let a=0,m=u.length;a<m;a++){const i=u[a],f=r[i.materialIndex],p=Math.max(i.start,o.start),g=Math.min(h.count,Math.min(i.start+i.count,o.start+o.count));for(let o=p,a=g;o<a;o+=3){const r=o,u=o+1,h=o+2;s=checkGeometryIntersection(this,f,e,n,c,l,d,r,u,h),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=i.materialIndex,t.push(s))}}else{const i=Math.max(0,o.start),a=Math.min(h.count,o.start+o.count);for(let o=i,u=a;o<u;o+=3){const h=o,m=o+1,f=o+2;s=checkGeometryIntersection(this,r,e,n,c,l,d,h,m,f),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}}}function checkIntersection$1(e,t,n,s,o,i,a,r){let c;if(t.side===BackSide?c=s.intersectTriangle(a,i,o,!0,r):c=s.intersectTriangle(o,i,a,t.side===FrontSide,r),c===null)return null;_intersectionPointWorld.copy(r),_intersectionPointWorld.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(_intersectionPointWorld);return l<n.near||l>n.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:e}}function checkGeometryIntersection(e,t,n,s,o,i,a,r,c,l){e.getVertexPosition(r,_vA),e.getVertexPosition(c,_vB),e.getVertexPosition(l,_vC);const d=checkIntersection$1(e,t,n,s,_vA,_vB,_vC,_intersectionPoint);if(d){const e=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA,_vB,_vC,e),o&&(d.uv=Triangle.getInterpolatedAttribute(o,r,c,l,e,new Vector2)),i&&(d.uv1=Triangle.getInterpolatedAttribute(i,r,c,l,e,new Vector2)),a&&(d.normal=Triangle.getInterpolatedAttribute(a,r,c,l,e,new Vector3),d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1));const t={a:r,b:c,c:l,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA,_vB,_vC,t.normal),d.face=t,d.barycoord=e}return d}class DataTexture extends Texture{constructor(e=null,t=1,n=1,s,o,i,a,r,c=NearestFilter,l=NearestFilter,d,u){super(null,i,a,r,c,l,s,o,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}_vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(_vector1),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(e.start).addScaledVector(s,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),s=this.coplanarPoint(_vector1).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}}_sphere$3=new Sphere,_defaultSpriteCenter=new Vector2(.5,.5),_vector$6=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,s=new Plane,o=new Plane,i=new Plane){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem,n=!1){const o=this.planes,s=e.elements,y=s[0],v=s[1],d=s[2],c=s[3],f=s[4],m=s[5],l=s[6],r=s[7],p=s[8],g=s[9],u=s[10],a=s[11],b=s[12],j=s[13],h=s[14],i=s[15];if(o[0].setComponents(c-y,r-f,a-p,i-b).normalize(),o[1].setComponents(c+y,r+f,a+p,i+b).normalize(),o[2].setComponents(c+v,r+m,a+g,i+j).normalize(),o[3].setComponents(c-v,r-m,a-g,i-j).normalize(),n)o[4].setComponents(d,l,u,h).normalize(),o[5].setComponents(c-d,r-l,a-u,i-h).normalize();else if(o[4].setComponents(c-d,r-l,a-u,i-h).normalize(),t===WebGLCoordinateSystem)o[5].setComponents(c+d,r+l,a+u,i+h).normalize();else if(t===WebGPUCoordinateSystem)o[5].setComponents(d,l,u,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==0[0])e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(e){_sphere$3.center.set(0,0,0);const t=_defaultSpriteCenter.distanceTo(e.center);return _sphere$3.radius=.7071067811865476+t,_sphere$3.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++){const o=t[e].distanceToPoint(n);if(o<s)return!1}return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(_vector$6.x=n.normal.x>0?e.max.x:e.min.x,_vector$6.y=n.normal.y>0?e.max.y:e.min.y,_vector$6.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}_inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$3=new Vector3;class Points extends Object3D{constructor(e=new BufferGeometry,t=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere.copy(n.boundingSphere),_sphere.applyMatrix4(o),_sphere.radius+=r,e.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(o).invert(),_ray.copy(e.ray).applyMatrix4(_inverseMatrix);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,i=n.index,d=n.attributes,a=d.position;if(i!==null){const n=Math.max(0,s.start),r=Math.min(i.count,s.start+s.count);for(let s=n,d=r;s<d;s++){const c=i.getX(s);_position$3.fromBufferAttribute(a,c),testPoint(_position$3,c,l,o,e,t,this)}}else{const n=Math.max(0,s.start),i=Math.min(a.count,s.start+s.count);for(let s=n,r=i;s<r;s++)_position$3.fromBufferAttribute(a,s),testPoint(_position$3,s,l,o,e,t,this)}}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==0[0]){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}}function testPoint(e,t,n,s,o,i,a){const r=_ray.distanceSqToPoint(e);if(r<n){const n=new Vector3;_ray.closestPointToPoint(e,n),n.applyMatrix4(s);const c=o.ray.origin.distanceTo(n);if(c<o.near||c>o.far)return;i.push({distance:c,distanceToRay:r**.5,point:n,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class CubeTexture extends Texture{constructor(e=[],t=CubeReflectionMapping,n,s,o,i,a,r,c,l){super(e,t,n,s,o,i,a,r,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DepthTexture extends Texture{constructor(e,t,n=UnsignedIntType,s,o,i,a=NearestFilter,r=NearestFilter,c,l=DepthFormat,d=1){if(l!==DepthFormat&&l!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,o,i,a,r,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CubeDepthTexture extends DepthTexture{constructor(e,t=UnsignedIntType,n=CubeReflectionMapping,s,o,i=NearestFilter,a=NearestFilter,r,c=DepthFormat){const l={width:e,height:e,depth:1},d=[l,l,l,l,l,l];super(e,e,t,n,s,o,i,a,r,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ExternalTexture extends Texture{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,s=1,o=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:i};const m=this;s=Math.floor(s),o=Math.floor(o),i=Math.floor(i);const c=[],d=[],u=[],l=[];let r=0,h=0;a("z","y","x",-1,-1,n,t,e,i,o,0),a("z","y","x",1,-1,n,t,-e,i,o,1),a("x","z","y",1,1,e,n,t,s,i,2),a("x","z","y",1,-1,e,n,-t,s,i,3),a("x","y","z",1,-1,e,t,n,s,o,4),a("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(l,2));function a(e,t,n,s,o,i,a,f,p,g,v){const w=i/p,O=a/g,x=i/2,C=a/2,E=f/2,j=p+1,k=g+1;let _=0,y=0;const b=new Vector3;for(let i=0;i<k;i++){const a=i*O-C;for(let r=0;r<j;r++){const c=r*w-x;b[e]=c*s,b[t]=a*o,b[n]=E,d.push(b.x,b.y,b.z),b[e]=0,b[t]=0,b[n]=f>0?1:-1,u.push(b.x,b.y,b.z),l.push(r/p),l.push(1-i/g),_+=1}}for(let e=0;e<g;e++)for(let t=0;t<p;t++){const o=r+t+j*e,n=r+t+j*(e+1),i=r+(t+1)+j*(e+1),s=r+(t+1)+j*e;c.push(o,n,s),c.push(n,i,s),y+=6}m.addGroup(h,y,v),h+=y,r+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){warn("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let i=1;i<=e;i++)n=this.getPoint(i/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const s=this.getLengths();let n=0;const a=s.length;let o;t?o=t:o=e*s[a-1];let r=0,i=a-1,c;for(;r<=i;)if(n=Math.floor(r+(i-r)/2),c=s[n]-o,c<0)r=n+1;else if(c>0)i=n-1;else{i=n;break}if(n=i,s[n]===o)return n/(a-1);const l=s[n],d=s[n+1],u=d-l,h=(o-l)/u,m=(n+h)/(a-1);return m}getTangent(e,t){const o=1e-4;let n=e-o,s=e+o;n<0&&(n=0),s>1&&(s=1);const i=this.getPoint(n),r=this.getPoint(s),a=t||(i.isVector2?new Vector2:new Vector3);return a.copy(r).sub(i).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const r=new Vector3,n=[],s=[],o=[],i=new Vector3,c=new Matrix4;for(let t=0;t<=e;t++){const s=t/e;n[t]=this.getTangentAt(s,new Vector3)}s[0]=new Vector3,o[0]=new Vector3;let a=Number.MAX_VALUE;const l=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);l<=a&&(a=l,r.set(1,0,0)),d<=a&&(a=d,r.set(0,1,0)),u<=a&&r.set(0,0,1),i.crossVectors(n[0],r).normalize(),s[0].crossVectors(n[0],i),o[0].crossVectors(n[0],s[0]);for(let t=1;t<=e;t++){if(s[t]=s[t-1].clone(),o[t]=o[t-1].clone(),i.crossVectors(n[t-1],n[t]),i.length()>Number.EPSILON){i.normalize();const e=Math.acos(clamp(n[t-1].dot(n[t]),-1,1));s[t].applyMatrix4(c.makeRotationAxis(i,e))}o[t].crossVectors(n[t],s[t])}if(t===!0){let t=Math.acos(clamp(s[0].dot(s[e]),-1,1));t/=e,n[0].dot(i.crossVectors(s[0],s[e]))>0&&(t=-t);for(let i=1;i<=e;i++)s[i].applyMatrix4(c.makeRotationAxis(n[i],t*i)),o[i].crossVectors(n[i],s[i])}return{tangents:n,normals:s,binormals:o}}clone(){return(new this.constructor).copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,n=1,s=1,o=0,i=Math.PI*2,a=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=i,this.aClockwise=a,this.aRotation=r}getPoint(e,t=new Vector2){const c=t,s=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=(n<0?-n:n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(a?n=0:n=s),this.aClockwise===!0&&!a&&(n===s?n=-s:n=n-s);const r=this.aStartAngle+e*n;let o=this.aX+this.xRadius*Math.cos(r),i=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=o-this.aX,s=i-this.aY;o=n*e-s*t+this.aX,i=n*t+s*e+this.aY}return c.set(o,i)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,n,s,o,i){super(e,t,n,n,s,o,i),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let e=0,t=0,n=0,s=0;function o(o,i,a,r){e=o,t=a,n=-3*o+3*i-2*a-r,s=2*o-2*i+a+r}return{initCatmullRom:function(e,t,n,s,i){o(t,n,i*(n-e),i*(s-t))},initNonuniformCatmullRom:function(e,t,n,s,i,a,r){let c=(t-e)/i-(n-e)/(i+a)+(n-t)/a,l=(n-t)/a-(s-t)/(a+r)+(s-n)/r;c*=a,l*=a,o(t,n,c,l)},calc:function(o){const i=o*o,a=i*o;return e+t*o+n*i+s*a}}}tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Vector3){const d=t,o=this.points,n=o.length,u=(n-(this.closed?0:1))*e;let s=Math.floor(u),l=u-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:l===0&&s===n-1&&(s=n-2,l=1);let i,a;this.closed||s>0?i=o[(s-1)%n]:(tmp.subVectors(o[0],o[1]).add(o[0]),i=tmp);const r=o[s%n],c=o[(s+1)%n];if(this.closed||s+2<n?a=o[(s+2)%n]:(tmp.subVectors(o[n-1],o[n-2]).add(o[n-1]),a=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const s=this.curveType==="chordal"?.5:.25;let t=i.distanceToSquared(r)**s,e=r.distanceToSquared(c)**s,n=c.distanceToSquared(a)**s;e<1e-4&&(e=1),t<1e-4&&(t=e),n<1e-4&&(n=e),px.initNonuniformCatmullRom(i.x,r.x,c.x,a.x,t,e,n),py.initNonuniformCatmullRom(i.y,r.y,c.y,a.y,t,e,n),pz.initNonuniformCatmullRom(i.z,r.z,c.z,a.z,t,e,n)}else this.curveType==="catmullrom"&&(px.initCatmullRom(i.x,r.x,c.x,a.x,this.tension),py.initCatmullRom(i.y,r.y,c.y,a.y,this.tension),pz.initCatmullRom(i.z,r.z,c.z,a.z,this.tension));return d.set(px.calc(l),py.calc(l),pz.calc(l)),d}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push((new Vector3).fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(e,t,n,s,o){const i=(s-t)*.5,a=(o-n)*.5,r=e*e,c=e*r;return(2*n-2*s+i+a)*c+(-3*n+3*s-2*i-a)*r+i*e+n}function QuadraticBezierP0(e,t){const n=1-e;return n*n*t}function QuadraticBezierP1(e,t){return 2*(1-e)*e*t}function QuadraticBezierP2(e,t){return e*e*t}function QuadraticBezier(e,t,n,s){return QuadraticBezierP0(e,t)+QuadraticBezierP1(e,n)+QuadraticBezierP2(e,s)}function CubicBezierP0(e,t){const n=1-e;return n*n*n*t}function CubicBezierP1(e,t){const n=1-e;return 3*n*n*e*t}function CubicBezierP2(e,t){return 3*(1-e)*e*e*t}function CubicBezierP3(e,t){return e*e*e*t}function CubicBezier(e,t,n,s,o){return CubicBezierP0(e,t)+CubicBezierP1(e,n)+CubicBezierP2(e,s)+CubicBezierP3(e,o)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2,s=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Vector2){const n=t,s=this.v0,o=this.v1,i=this.v2,a=this.v3;return n.set(CubicBezier(e,s.x,o.x,i.x,a.x),CubicBezier(e,s.y,o.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3,s=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Vector3){const a=t,n=this.v0,s=this.v1,o=this.v2,i=this.v3;return a.set(CubicBezier(e,n.x,s.x,o.x,i.x),CubicBezier(e,n.y,s.y,o.y,i.y),CubicBezier(e,n.z,s.z,o.z,i.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector3){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector2){const n=t,s=this.v0,o=this.v1,i=this.v2;return n.set(QuadraticBezier(e,s.x,o.x,i.x),QuadraticBezier(e,s.y,o.y,i.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector3){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(QuadraticBezier(e,n.x,s.x,o.x),QuadraticBezier(e,n.y,s.y,o.y),QuadraticBezier(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const o=t,n=this.points,i=(n.length-1)*e,s=Math.floor(i),a=i-s,r=n[s===0?s:s-1],c=n[s],l=n[s>n.length-2?n.length-1:s+1],d=n[s>n.length-3?n.length-1:s+2];return o.set(CatmullRom(a,r.x,c.x,l.x,d.x),CatmullRom(a,r.y,c.y,l.y,d.y)),o}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push((new Vector2).fromArray(s))}return this}}Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Curves[n](t,e))}return this}getPoint(e,t){const o=e*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=o){const a=s[n]-o,e=this.curves[n],i=e.getLength(),r=i===0?0:1-a/i;return e.getPointAt(r,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let o=0,i=this.curves;o<i.length;o++){const s=i[o],r=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(r);for(let e=0;e<a.length;e++){const s=a[e];if(n&&n.equals(s))continue;t.push(s),n=s}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const n=e.curves[t];this.curves.push((new Curves[n.type]).fromJSON(n))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,i){const a=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,s),new Vector2(o,i));return this.curves.push(a),this.currentPoint.set(o,i),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new SplineCurve(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,i){const a=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+a,t+r,n,s,o,i),this}absarc(e,t,n,s,o,i){return this.absellipse(e,t,n,n,s,o,i),this}ellipse(e,t,n,s,o,i,a,r){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,o,i,a,r),this}absellipse(e,t,n,s,o,i,a,r){const c=new EllipseCurve(e,t,n,s,o,i,a,r);if(this.curves.length>0){const e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push((new Path).fromJSON(s))}return this}}function earcut(e,t,n=2){const c=t&&t.length,l=c?t[0]*n:e.length;let s=linkedList(e,0,l,n,!0);const r=[];if(!s||s.next===s.prev)return r;let o,i,a;if(c&&(s=eliminateHoles(e,t,s,n)),e.length>80*n){o=e[0],i=e[1];let t=o,s=i;for(let a=n;a<l;a+=n){const r=e[a],c=e[a+1];r<o&&(o=r),c<i&&(i=c),r>t&&(t=r),c>s&&(s=c)}a=Math.max(t-o,s-i),a=a!==0?32767/a:0}return earcutLinked(s,r,n,o,i,a,0),r}function linkedList(e,t,n,s,o){let i;if(o===signedArea(e,t,n,s)>0)for(let o=t;o<n;o+=s)i=insertNode(o/s|0,e[o],e[o+1],i);else for(let o=n-s;o>=t;o-=s)i=insertNode(o/s|0,e[o],e[o+1],i);return i&&equals(i,i.next)&&(removeNode(i),i=i.next),i}function filterPoints(e,t){if(!e)return e;t||(t=e);let n=e,s;do if(s=!1,!n.steiner&&(equals(n,n.next)||area(n.prev,n,n.next)===0)){if(removeNode(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t)return t}function earcutLinked(e,t,n,s,o,i,a){if(!e)return;!a&&i&&indexCurve(e,s,o,i);let r=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(i?isEarHashed(e,s,o,i):isEar(e)){t.push(l.i,e.i,c.i),removeNode(e),e=c.next,r=c.next;continue}if(e=c,e===r){a?a===1?(e=cureLocalIntersections(filterPoints(e),t),earcutLinked(e,t,n,s,o,i,2)):a===2&&splitEarcut(e,t,n,s,o,i):earcutLinked(filterPoints(e),t,n,s,o,i,1);break}}}function isEar(e){const n=e.prev,d=e,s=e.next;if(area(n,d,s)>=0)return!1;const r=n.x,i=d.x,a=s.x,o=n.y,c=d.y,l=s.y,u=Math.min(r,i,a),h=Math.min(o,c,l),m=Math.max(r,i,a),f=Math.max(o,c,l);let t=s.next;for(;t!==n;){if(t.x>=u&&t.x<=m&&t.y>=h&&t.y<=f&&pointInTriangleExceptFirst(r,o,i,c,a,l,t.x,t.y)&&area(t.prev,t,t.next)>=0)return!1;t=t.next}return!0}function isEarHashed(e,t,n,s){const a=e.prev,b=e,r=e.next;if(area(a,b,r)>=0)return!1;const m=a.x,h=b.x,l=r.x,d=a.y,u=b.y,c=r.y,f=Math.min(m,h,l),p=Math.min(d,u,c),g=Math.max(m,h,l),v=Math.max(d,u,c),j=zOrder(f,p,t,n,s),y=zOrder(g,v,t,n,s);let{prevZ:i,nextZ:o}=e;for(;i&&i.z>=j&&o&&o.z<=y;){if(i.x>=f&&i.x<=g&&i.y>=p&&i.y<=v&&i!==a&&i!==r&&pointInTriangleExceptFirst(m,d,h,u,l,c,i.x,i.y)&&area(i.prev,i,i.next)>=0)return!1;if(i=i.prevZ,o.x>=f&&o.x<=g&&o.y>=p&&o.y<=v&&o!==a&&o!==r&&pointInTriangleExceptFirst(m,d,h,u,l,c,o.x,o.y)&&area(o.prev,o,o.next)>=0)return!1;o=o.nextZ}for(;i&&i.z>=j;){if(i.x>=f&&i.x<=g&&i.y>=p&&i.y<=v&&i!==a&&i!==r&&pointInTriangleExceptFirst(m,d,h,u,l,c,i.x,i.y)&&area(i.prev,i,i.next)>=0)return!1;i=i.prevZ}for(;o&&o.z<=y;){if(o.x>=f&&o.x<=g&&o.y>=p&&o.y<=v&&o!==a&&o!==r&&pointInTriangleExceptFirst(m,d,h,u,l,c,o.x,o.y)&&area(o.prev,o,o.next)>=0)return!1;o=o.nextZ}return!0}function cureLocalIntersections(e,t){let n=e;do{const o=n.prev,s=n.next.next;!equals(o,s)&&intersects(o,n,n.next,s)&&locallyInside(o,s)&&locallyInside(s,o)&&(t.push(o.i,n.i,s.i),removeNode(n),removeNode(n.next),n=e=s),n=n.next}while(n!==e)return filterPoints(n)}function splitEarcut(e,t,n,s,o,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&isValidDiagonal(a,e)){let r=splitPolygon(a,e);a=filterPoints(a,a.next),r=filterPoints(r,r.next),earcutLinked(a,t,n,s,o,i,0),earcutLinked(r,t,n,s,o,i,0);return}e=e.next}a=a.next}while(a!==e)}function eliminateHoles(e,t,n,s){const o=[];for(let n=0,a=t.length;n<a;n++){const r=t[n]*s,c=n<a-1?t[n+1]*s:e.length,i=linkedList(e,r,c,s,!1);i===i.next&&(i.steiner=!0),o.push(getLeftmost(i))}o.sort(compareXYSlope);for(let e=0;e<o.length;e++)n=eliminateHole(o[e],n);return n}function compareXYSlope(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){const s=(e.next.y-e.y)/(e.next.x-e.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=s-o}return n}function eliminateHole(e,t){const n=findHoleBridge(e,t);if(!n)return t;const s=splitPolygon(n,e);return filterPoints(s,s.next),filterPoints(n,n.next)}function findHoleBridge(e,t){let n=t;const i=e.x,o=e.y;let a=-(1/0),s;if(equals(e,n))return n;do{if(equals(e,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=i&&e>a&&(a=e,s=n.x<n.next.x?n:n.next,e===i))return s}n=n.next}while(n!==t)if(!s)return null;const d=s,l=s.x,r=s.y;let c=1/0;n=s;do{if(i>=n.x&&n.x>=l&&i!==n.x&&pointInTriangle(o<r?i:a,o,l,r,o<r?a:i,o,n.x,n.y)){const t=Math.abs(o-n.y)/(i-n.x);locallyInside(n,e)&&(t<c||t===c&&(n.x>s.x||n.x===s.x&&sectorContainsSector(s,n)))&&(s=n,c=t)}n=n.next}while(n!==d)return s}function sectorContainsSector(e,t){return area(e.prev,e,t.prev)<0&&area(t.next,e,e.next)<0}function indexCurve(e,t,n,s){let o=e;do o.z===0&&(o.z=zOrder(o.x,o.y,t,n,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e)o.prevZ.nextZ=null,o.prevZ=null,sortLinked(o)}function sortLinked(e){let t,n=1;do{let s=e,o;e=null;let i=null;for(t=0;s;){t++;let a=s,r=0;for(let e=0;e<n;e++)if(r++,a=a.nextZ,!a)break;let c=n;for(;r>0||c>0&&a;)r!==0&&(c===0||!a||s.z<=a.z)?(o=s,s=s.nextZ,r--):(o=a,a=a.nextZ,c--),i?i.nextZ=o:e=o,o.prevZ=i,i=o;s=a}i.nextZ=null,n*=2}while(t>1)return e}function zOrder(e,t,n,s,o){return e=(e-n)*o|0,t=(t-s)*o|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function getLeftmost(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e)return n}function pointInTriangle(e,t,n,s,o,i,a,r){return(o-a)*(t-r)>=(e-a)*(i-r)&&(e-a)*(s-r)>=(n-a)*(t-r)&&(n-a)*(i-r)>=(o-a)*(s-r)}function pointInTriangleExceptFirst(e,t,n,s,o,i,a,r){return(e!==a||t!==r)&&pointInTriangle(e,t,n,s,o,i,a,r)}function isValidDiagonal(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!intersectsPolygon(e,t)&&(locallyInside(e,t)&&locallyInside(t,e)&&middleInside(e,t)&&(area(e.prev,e,t.prev)||area(e,t.prev,t))||equals(e,t)&&area(e.prev,e,e.next)>0&&area(t.prev,t,t.next)>0)}function area(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function equals(e,t){return e.x===t.x&&e.y===t.y}function intersects(e,t,n,s){const o=sign(area(e,t,n)),i=sign(area(e,t,s)),a=sign(area(n,s,e)),r=sign(area(n,s,t));return o!==i&&a!==r||!!(o===0&&onSegment(e,n,t))||!!(i===0&&onSegment(e,s,t))||!!(a===0&&onSegment(n,e,s))||!!(r===0&&onSegment(n,t,s))}function onSegment(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function sign(e){return e>0?1:e<0?-1:0}function intersectsPolygon(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&intersects(n,n.next,e,t))return!0;n=n.next}while(n!==e)return!1}function locallyInside(e,t){return area(e.prev,e,e.next)<0?area(e,t,e.next)>=0&&area(e,e.prev,t)>=0:area(e,t,e.prev)<0||area(e,e.next,t)<0}function middleInside(e,t){let n=e,s=!1;const i=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!==n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e)return s}function splitPolygon(e,t){const s=createNode(e.i,e.x,e.y),n=createNode(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,s.next=o,o.prev=s,n.next=s,s.prev=n,i.next=n,n.prev=i,n}function insertNode(e,t,n,s){const o=createNode(e,t,n);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function removeNode(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function createNode(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function signedArea(e,t,n,s){let o=0;for(let i=t,a=n-s;i<n;i+=s)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}class Earcut{static triangulate(e,t,n=2){return earcut(e,t,n)}}class ShapeUtils{static area(e){const t=e.length;let n=0;for(let o=t-1,s=0;s<t;o=s++)n+=e[o].x*e[s].y-e[s].x*e[o].y;return n*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];removeDupEndPts(e),addContour(n,e);let i=e.length;t.forEach(removeDupEndPts);for(let e=0;e<t.length;e++)s.push(i),i+=t[e].length,addContour(n,t[e]);const a=Earcut.triangulate(n,s);for(let e=0;e<a.length;e+=3)o.push(a.slice(e,e+3));return o}}function removeDupEndPts(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function addContour(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class ExtrudeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,n=[],o=[];for(let t=0,n=e.length;t<n;t++){const s=e[t];i(s)}this.setAttribute("position",new Float32BufferAttribute(n,3)),this.setAttribute("uv",new Float32BufferAttribute(o,2)),this.computeVertexNormals();function i(e){const b=[],K=t.curveSegments!==0[0]?t.curveSegments:12,c=t.steps!==0[0]?t.steps:1,N=t.depth!==0[0]?t.depth:1;let w=t.bevelEnabled===0[0]||t.bevelEnabled,A=t.bevelThickness!==0[0]?t.bevelThickness:.2,C=t.bevelSize!==0[0]?t.bevelSize:A-.1,E=t.bevelOffset!==0[0]?t.bevelOffset:0,p=t.bevelSegments!==0[0]?t.bevelSegments:3;const x=t.extrudePath,L=t.UVGenerator!==0[0]?t.UVGenerator:WorldUVGenerator;let O,S=!1,_,j,y,m;if(x){O=x.getSpacedPoints(c),S=!0,w=!1;const e=!!x.isCatmullRomCurve3&&x.closed;_=x.computeFrenetFrames(c,e),j=new Vector3,y=new Vector3,m=new Vector3}w||(p=0,A=0,C=0,E=0);const B=e.extractPoints(K);let a=B.shape;const i=B.holes,W=!ShapeUtils.isClockWise(a);if(W){a=a.reverse();for(let e=0,n=i.length;e<n;e++){const t=i[e];ShapeUtils.isClockWise(t)&&(i[e]=t.reverse())}}function I(e){const n=.1e-9,s=n*n;let t=e[0];for(let o=1;o<=e.length;o++){const i=o%e.length,n=e[i],a=n.x-t.x,r=n.y-t.y,l=a*a+r*r,c=Math.max(Math.abs(n.x),Math.abs(n.y),Math.abs(t.x),Math.abs(t.y)),d=s*c*c;if(l<=d){e.splice(i,1),o--;continue}t=n}}I(a),i.forEach(I);const z=i.length,r=a;for(let e=0;e<z;e++){const t=i[e];a=a.concat(t)}function v(e,t,n){return t||error("ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,n)}const l=a.length;function R(e,t,n){let a,r,l;const s=e.x-t.x,o=e.y-t.y,i=n.x-e.x,c=n.y-e.y,d=s*s+o*o,u=s*c-o*i;if((u<0?-u:u)>Number.EPSILON){const u=d**.5,h=(i*i+c*c)**.5,m=t.x-o/u,f=t.y+s/u,v=n.x-c/h,b=n.y+i/h,p=((v-m)*c-(b-f)*i)/(s*c-o*i);a=m+s*p-e.x,r=f+o*p-e.y;const g=a*a+r*r;if(g<=2)return new Vector2(a,r);l=(g/2)**.5}else{let e=!1;s>Number.EPSILON?i>Number.EPSILON&&(e=!0):s<-Number.EPSILON?i<-Number.EPSILON&&(e=!0):Math.sign(o)===Math.sign(c)&&(e=!0),e?(a=-o,r=s,l=d**.5):(a=s,r=o,l=(d/2)**.5)}return new Vector2(a/l,r/l)}const F=[];for(let e=0,t=r.length,n=t-1,s=e+1;e<t;e++,n++,s++)n===t&&(n=0),s===t&&(s=0),F[e]=R(r[e],r[n],r[s]);const D=[];let f,T=F.concat();for(let t=0,n=z;t<n;t++){const e=i[t];f=[];for(let t=0,n=e.length,s=n-1,o=t+1;t<n;t++,s++,o++)s===n&&(s=0),o===n&&(o=0),f[t]=R(e[t],e[s],e[o]);D.push(f),T=T.concat(f)}let g;if(p===0)g=ShapeUtils.triangulateShape(r,i);else{const e=[],t=[];for(let s=0;s<p;s++){const n=s/p,o=A*Math.cos(n*Math.PI/2),a=C*Math.sin(n*Math.PI/2)+E;for(let t=0,i=r.length;t<i;t++){const s=v(r[t],F[t],a);d(s.x,s.y,-o),n===0&&e.push(s)}for(let e=0,c=z;e<c;e++){const s=i[e];f=D[e];const r=[];for(let e=0,i=s.length;e<i;e++){const t=v(s[e],f[e],a);d(t.x,t.y,-o),n===0&&r.push(t)}n===0&&t.push(r)}}g=ShapeUtils.triangulateShape(e,t)}const M=g.length,P=C+E;for(let e=0;e<l;e++){const t=w?v(a[e],T[e],P):a[e];S?(y.copy(_.normals[0]).multiplyScalar(t.x),j.copy(_.binormals[0]).multiplyScalar(t.y),m.copy(O[0]).add(y).add(j),d(m.x,m.y,m.z)):d(t.x,t.y,0)}for(let e=1;e<=c;e++)for(let t=0;t<l;t++){const n=w?v(a[t],T[t],P):a[t];S?(y.copy(_.normals[e]).multiplyScalar(n.x),j.copy(_.binormals[e]).multiplyScalar(n.y),m.copy(O[e]).add(y).add(j),d(m.x,m.y,m.z)):d(n.x,n.y,N/c*e)}for(let e=p-1;e>=0;e--){const n=e/p,t=A*Math.cos(n*Math.PI/2),s=C*Math.sin(n*Math.PI/2)+E;for(let e=0,o=r.length;e<o;e++){const n=v(r[e],F[e],s);d(n.x,n.y,N+t)}for(let e=0,o=i.length;e<o;e++){const n=i[e];f=D[e];for(let e=0,i=n.length;e<i;e++){const o=v(n[e],f[e],s);S?d(o.x,o.y+O[c-1].y,O[c-1].x+t):d(o.x,o.y,N+t)}}}V(),$();function V(){const e=n.length/3;if(w){let t=0,e=l*t;for(let t=0;t<M;t++){const n=g[t];k(n[2]+e,n[1]+e,n[0]+e)}t=c+p*2,e=l*t;for(let t=0;t<M;t++){const n=g[t];k(n[0]+e,n[1]+e,n[2]+e)}}else{for(let e=0;e<M;e++){const t=g[e];k(t[2],t[1],t[0])}for(let e=0;e<M;e++){const t=g[e];k(t[0]+l*c,t[1]+l*c,t[2]+l*c)}}s.addGroup(e,n.length/3-e,0)}function $(){const t=n.length/3;let e=0;H(r,e),e+=r.length;for(let t=0,s=i.length;t<s;t++){const n=i[t];H(n,e),e+=n.length}s.addGroup(t,n.length/3-t,1)}function H(e,t){let n=e.length;for(;--n>=0;){const o=n;let s=n-1;s<0&&(s=e.length-1);for(let e=0,a=c+p*2;e<a;e++){const n=l*e,i=l*(e+1),r=t+o+n,d=t+s+n,u=t+s+i,h=t+o+i;U(r,d,u,h)}}}function d(e,t,n){b.push(e),b.push(t),b.push(n)}function k(e,t,o){h(e),h(t),h(o);const i=n.length/3,a=L.generateTopUV(s,n,i-3,i-2,i-1);u(a[0]),u(a[1]),u(a[2])}function U(e,t,o,i){h(e),h(t),h(i),h(t),h(o),h(i);const r=n.length/3,a=L.generateSideWallUV(s,n,r-6,r-3,r-2,r-1);u(a[0]),u(a[1]),u(a[3]),u(a[1]),u(a[2]),u(a[3])}function h(e){n.push(b[e*3+0]),n.push(b[e*3+1]),n.push(b[e*3+2])}function u(e){o.push(e.x),o.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return toJSON$1(t,n,e)}static fromJSON(e,t){const s=[];for(let n=0,o=e.shapes.length;n<o;n++){const i=t[e.shapes[n]];s.push(i)}const n=e.options.extrudePath;return n!==0[0]&&(e.options.extrudePath=(new Curves[n.type]).fromJSON(n)),new ExtrudeGeometry(s,e.options)}}WorldUVGenerator={generateTopUV:function(e,t,n,s,o){const i=t[n*3],a=t[n*3+1],r=t[s*3],c=t[s*3+1],l=t[o*3],d=t[o*3+1];return[new Vector2(i,a),new Vector2(r,c),new Vector2(l,d)]},generateSideWallUV:function(e,t,n,s,o,i){const a=t[n*3],r=t[n*3+1],c=t[n*3+2],l=t[s*3],d=t[s*3+1],u=t[s*3+2],f=t[o*3],p=t[o*3+1],h=t[o*3+2],g=t[i*3],v=t[i*3+1],m=t[i*3+2];return Math.abs(r-d)<Math.abs(a-l)?[new Vector2(a,1-c),new Vector2(l,1-u),new Vector2(f,1-h),new Vector2(g,1-m)]:[new Vector2(r,1-c),new Vector2(d,1-u),new Vector2(p,1-h),new Vector2(v,1-m)]}};function toJSON$1(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const o=e[t];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==0[0]&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const u=e/2,h=t/2,i=Math.floor(n),a=Math.floor(s),o=i+1,m=a+1,f=e/i,p=t/a,r=[],l=[],d=[],c=[];for(let e=0;e<m;e++){const t=e*p-h;for(let n=0;n<o;n++){const s=n*f-u;l.push(s,-t,0),d.push(0,0,1),c.push(n/i),c.push(1-e/a)}}for(let e=0;e<a;e++)for(let t=0;t<i;t++){const a=t+o*e,n=t+o*(e+1),c=t+1+o*(e+1),s=t+1+o*e;r.push(a,n,s),r.push(n,c,s)}this.setIndex(r),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(d,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}class RingGeometry extends BufferGeometry{constructor(e=.5,t=1,n=32,s=1,o=0,i=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:i},n=Math.max(3,n),s=Math.max(1,s);const c=[],d=[],u=[],h=[];let l=e;const m=(t-e)/s,a=new Vector3,r=new Vector2;for(let e=0;e<=s;e++){for(let e=0;e<=n;e++){const s=o+e/n*i;a.x=l*Math.cos(s),a.y=l*Math.sin(s),d.push(a.x,a.y,a.z),u.push(0,0,1),r.x=(a.x/t+1)/2,r.y=(a.y/t+1)/2,h.push(r.x,r.y)}l+=m}for(let e=0;e<s;e++){const t=e*(n+1);for(let s=0;s<n;s++){const e=s+t,a=e,o=e+n+1,r=e+n+2,i=e+1;c.push(a,o,i),c.push(o,r,i)}}this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new RingGeometry(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,i=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:i,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(i+a,Math.PI);let p=0;const c=[],r=new Vector3,l=new Vector3,d=[],h=[],m=[],f=[];for(let d=0;d<=n;d++){const b=[],g=d/n;let v=0;d===0&&i===0?v=.5/t:d===n&&u===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){const c=n/t;r.x=-e*Math.cos(s+c*o)*Math.sin(i+g*a),r.y=e*Math.cos(i+g*a),r.z=e*Math.sin(s+c*o)*Math.sin(i+g*a),h.push(r.x,r.y,r.z),l.copy(r).normalize(),m.push(l.x,l.y,l.z),f.push(c+v,1-g),b.push(p++)}c.push(b)}for(let e=0;e<n;e++)for(let s=0;s<t;s++){const r=c[e][s+1],o=c[e][s],l=c[e+1][s],a=c[e+1][s+1];(e!==0||i>0)&&d.push(r,o,a),(e!==n-1||u<Math.PI)&&d.push(o,l,a)}this.setIndex(d),this.setAttribute("position",new Float32BufferAttribute(h,3)),this.setAttribute("normal",new Float32BufferAttribute(m,3)),this.setAttribute("uv",new Float32BufferAttribute(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function cloneUniforms(e){const t={};for(const n in e){t[n]={};for(const o in e[n]){const s=e[n][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][o]=null):t[n][o]=s.clone():Array.isArray(s)?t[n][o]=s.slice():t[n][o]=s}}return t}function mergeUniforms(e){const t={};for(let n=0;n<e.length;n++){const s=cloneUniforms(e[n]);for(const e in s)t[e]=s[e]}return t}function cloneUniformsGroups(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function getUnlitUniformColorSpace(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ColorManagement.workingColorSpace}UniformsUtils={clone:cloneUniforms,merge:mergeUniforms},default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=0[0],this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==0[0]&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s],n=o.value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!==e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!==e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!==e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!==e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!==e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!==e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function convertArray(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}class Interpolant{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==0[0]?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const s=this.parameterPositions;let t=this._cachedIndex,o=s[t],n=s[t-1];validate_interval:{seek:{let i;linear_scan:{forward_scan:if(!(e<o)){for(let i=t+2;;){if(o===0[0]){if(e<n)break forward_scan;return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===i)break;if(n=o,o=s[++t],e<o)break seek}i=s.length;break linear_scan}if(!(e>=n)){const a=s[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(n===0[0])return this._cachedIndex=0,this.copySampleValue_(0);if(t===i)break;if(o=n,n=s[--t-1],e>=n)break seek}i=t,t=0;break linear_scan}break validate_interval}for(;t<i;){const n=t+i>>>1;e<s[n]?i=n:t=n+1}if(o=s[t],n=s[t-1],n===0[0])return this._cachedIndex=0,this.copySampleValue_(0);if(o===0[0])return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,n,o)}return this.interpolate_(t,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class CubicInterpolant extends Interpolant{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(a===0[0])switch(this.getSettings_().endingStart){case ZeroSlopeEnding:o=e,a=2*t-n;break;case WrapAroundEnding:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(r===0[0])switch(this.getSettings_().endingEnd){case ZeroSlopeEnding:i=e,r=2*n-t;break;case WrapAroundEnding:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}}class LinearInterpolant extends Interpolant{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}}class DiscreteInterpolant extends Interpolant{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class BezierInterpolant extends Interpolant{interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,d=r-o,u=this.settings||this.DefaultSettings_,c=u.inTangents,l=u.outTangents;if(!c||!l){const e=(n-t)/(s-t),c=1-e;for(let t=0;t!==o;++t)i[t]=a[d+t]*c+a[r+t]*e;return i}const h=o*2,m=e-1;for(let f=0;f!==o;++f){const k=a[d+f],E=a[r+f],w=m*h+f*2,j=l[w],C=l[w+1],O=e*h+f*2,_=c[O],x=c[O+1];let u=(n-t)/(s-t),v,y,p,g,b;for(let e=0;e<8;e++){v=u*u,y=v*u,p=1-u,g=p*p,b=g*p;const a=b*t+3*g*u*j+3*p*v*_+y*s,o=a-n;if((o<0?-o:o)<.1e-9)break;const i=3*g*(j-t)+6*p*u*(_-j)+3*v*(s-_);if((i<0?-i:i)<.1e-9)break;u=u-o/i,u=Math.max(0,Math.min(1,u))}i[f]=b*k+3*g*u*C+3*p*v*x+y*E}return i}}class KeyframeTrack{constructor(e,t,n,s){if(e===0[0])throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===0[0]||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=convertArray(t,this.TimeBufferType),this.values=convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:convertArray(e.times,Array),values:convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LinearInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new CubicInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new BezierInterpolant(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case InterpolateDiscrete:t=this.InterpolantFactoryMethodDiscrete;break;case InterpolateLinear:t=this.InterpolantFactoryMethodLinear;break;case InterpolateSmooth:t=this.InterpolantFactoryMethodSmooth;break;case InterpolateBezier:t=this.InterpolantFactoryMethodBezier;break}if(t===0[0]){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===0[0])if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return warn("KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return InterpolateSmooth;case this.InterpolantFactoryMethodBezier:return InterpolateBezier}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;n!==-1&&o[n]>t;)--n;if(++n,s!==0||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=o.slice(s,n),this.values=this.values.slice(s*e,n*e)}return this}validate(){let e=!0;const s=this.getValueSize();s-Math.floor(s)!==0&&(error("KeyframeTrack: Invalid value size in track.",this),e=!1);const o=this.times,t=this.values,i=o.length;i===0&&(error("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==i;s++){const t=o[s];if(typeof t=="number"&&isNaN(t)){error("KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(n!==null&&n>t){error("KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(t!==0[0]&&isTypedArray(t))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){error("KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}return e}optimize(){const e=this.times.slice(),s=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===InterpolateSmooth,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=s.slice(0,n*t)):(this.times=e,this.values=s),this}clone(){const t=this.times.slice(),n=this.values.slice(),s=this.constructor,e=new s(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}}KeyframeTrack.prototype.ValueTypeName="",KeyframeTrack.prototype.TimeBufferType=Float32Array,KeyframeTrack.prototype.ValueBufferType=Float32Array,KeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;class BooleanKeyframeTrack extends KeyframeTrack{constructor(e,t,n){super(e,t,n)}}BooleanKeyframeTrack.prototype.ValueTypeName="bool",BooleanKeyframeTrack.prototype.ValueBufferType=Array,BooleanKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete,BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=0[0],BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=0[0];class ColorKeyframeTrack extends KeyframeTrack{constructor(e,t,n,s){super(e,t,n,s)}}ColorKeyframeTrack.prototype.ValueTypeName="color";class NumberKeyframeTrack extends KeyframeTrack{constructor(e,t,n,s){super(e,t,n,s)}}NumberKeyframeTrack.prototype.ValueTypeName="number";class QuaternionLinearInterpolant extends Interpolant{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)Quaternion.slerpFlat(a,0,r,o-i,r,o,c);return a}}class QuaternionKeyframeTrack extends KeyframeTrack{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)}}QuaternionKeyframeTrack.prototype.ValueTypeName="quaternion",QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=0[0];class StringKeyframeTrack extends KeyframeTrack{constructor(e,t,n){super(e,t,n)}}StringKeyframeTrack.prototype.ValueTypeName="string",StringKeyframeTrack.prototype.ValueBufferType=Array,StringKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete,StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=0[0],StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=0[0];class VectorKeyframeTrack extends KeyframeTrack{constructor(e,t,n,s){super(e,t,n,s)}}VectorKeyframeTrack.prototype.ValueTypeName="vector",Cache={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(isBlobURL(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(isBlobURL(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function isBlobURL(e){try{const t=e.slice(e.indexOf(":")+1),n=new URL(t);return n.protocol==="blob:"}catch{return!1}}class LoadingManager{constructor(e,t,n){const s=this;let r=!1,i=0,a=0,c=0[0];const o=[];this.onStart=0[0],this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){a++,r===!1&&s.onStart!==0[0]&&s.onStart(e,i,a),r=!0},this.itemEnd=function(e){i++,s.onProgress!==0[0]&&s.onProgress(e,i,a),i===a&&(r=!1,s.onLoad!==0[0]&&s.onLoad())},this.itemError=function(e){s.onError!==0[0]&&s.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return o.push(e,t),this},this.removeHandler=function(e){const t=o.indexOf(e);return t!==-1&&o.splice(t,2),this},this.getHandler=function(e){for(let t=0,s=o.length;t<s;t+=2){const n=o[t],i=o[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==0[0]?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT",loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===0[0]&&(e=""),this.path!==0[0]&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Cache.get(`file:${e}`);if(o!==0[0])return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(loading[e]!==0[0]){loading[e].push({onLoad:t,onProgress:n,onError:s});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),i=this.mimeType,r=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&warn("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||t.body===0[0]||t.body.getReader===0[0])return t;const n=loading[e],a=t.body.getReader(),s=t.headers.get("X-File-Size")||t.headers.get("Content-Length"),o=s?parseInt(s):0,r=o!==0;let i=0;const c=new ReadableStream({start(e){t();function t(){a.read().then(({done:s,value:a})=>{if(s)e.close();else{i+=a.byteLength;const s=new ProgressEvent("progress",{lengthComputable:r,loaded:i,total:o});for(let e=0,o=n.length;e<o;e++){const t=n[e];t.onProgress&&t.onProgress(s)}e.enqueue(a),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new HttpError(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(r){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>{const t=new DOMParser;return t.parseFromString(e,i)});case"json":return e.json();default:if(i==="")return e.text();const n=/charset="?([^;"\s]*)"?/i,t=n.exec(i),s=t&&t[1]?t[1].toLowerCase():0[0],o=new TextDecoder(s);return e.arrayBuffer().then(e=>o.decode(e))}}).then(t=>{Cache.add(`file:${e}`,t);const n=loading[e];delete loading[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onLoad&&s.onLoad(t)}}).catch(t=>{const n=loading[e];if(n===0[0])throw this.manager.itemError(e),t;delete loading[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}_loading=new WeakMap;class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}_projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class LightShadow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.mapType=UnsignedByteType,this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld),_lookTarget.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget),t.updateMatrixWorld(),_projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===WebGPUCoordinateSystem||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}_position$2=new Vector3,_quaternion$2=new Quaternion,_scale$2=new Vector3;class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_position$2,_quaternion$2,_scale$2),_scale$2.x===1&&_scale$2.y===1&&_scale$2.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_position$2,_quaternion$2,_scale$2.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(_position$2,_quaternion$2,_scale$2),_scale$2.x===1&&_scale$2.y===1&&_scale$2.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_position$2,_quaternion$2,_scale$2.set(1,1,1)).invert()}clone(){return(new this.constructor).copy(this)}}_v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(this.view!==null&&this.view.enabled){const{fullWidth:i,fullHeight:a}=e;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;a!==0&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0}}class PointLight extends Light{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}_errorMap=new WeakMap,fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const i=new PerspectiveCamera(fov,aspect,e,t);i.layers=this.layers,this.add(i);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const a=this.coordinateSystem,r=this.children.concat(),[e,t,n,s,o,i]=r;for(const e of r)this.remove(e);if(a===WebGLCoordinateSystem)e.up.set(0,1,0),e.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else if(a===WebGPUCoordinateSystem)e.up.set(0,-1,0),e.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const e of r)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[p,c,a,r,i,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let s=!1;e.isWebGLRenderer===!0?s=e.state.buffers.depth.getReversed():s=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,1,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,4,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Timer{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==0[0]&&(this._pageVisibilityHandler=handleVisibilityChange.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==0[0]?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function handleVisibilityChange(){this._document.hidden===!1&&this.reset()}_RESERVED_CHARS_RE="\\[\\]\\.:\\/",_reservedRe=new RegExp("["+_RESERVED_CHARS_RE+"]","g"),_wordChar="[^"+_RESERVED_CHARS_RE+"]",_wordCharOrDot="[^"+_RESERVED_CHARS_RE.replace("\\.","")+"]",_directoryRe=/((?:WC+[/:])*)/.source.replace("WC",_wordChar),_nodeRe=/(WCOD+)?/.source.replace("WCOD",_wordCharOrDot),_objectRe=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_wordChar),_propertyRe=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_wordChar),_trackRe=new RegExp("^"+_directoryRe+_nodeRe+_objectRe+_propertyRe+"$"),_supportedObjectNames=["material","materials","bones","map"];class Composite{constructor(e,t,n){const s=n||PropertyBinding.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];n!==0[0]&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class PropertyBinding{constructor(e,t,n){this.path=t,this.parsedPath=n||PropertyBinding.parseTrackName(t),this.node=PropertyBinding.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new PropertyBinding.Composite(e,t,n):new PropertyBinding(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_reservedRe,"")}static parseTrackName(e){const n=_trackRe.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(s!==0[0]&&s!==-1){const e=t.nodeName.substring(s+1);_supportedObjectNames.indexOf(e)!==-1&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(t===0[0]||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==0[0])return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,a=n.propertyName;let s=n.propertyIndex;if(e||(e=PropertyBinding.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){warn("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let t=n.objectIndex;switch(i){case"materials":if(!e.material){error("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){error("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){error("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){error("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){error("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===0[0]){error("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(t!==0[0]){if(e[t]===0[0]){error("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[t]}}const t=e[a];if(t===0[0]){const t=n.nodeName;error("PropertyBinding: Trying to update property for track: "+t+"."+a+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?r=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==0[0]){if(a==="morphTargetInfluences"){if(!e.geometry){error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==0[0]&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else t.fromArray!==0[0]&&t.toArray!==0[0]?(o=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(o=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}PropertyBinding.Composite=Composite,PropertyBinding.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},PropertyBinding.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},PropertyBinding.prototype.GetterByBindingType=[PropertyBinding.prototype._getValue_direct,PropertyBinding.prototype._getValue_array,PropertyBinding.prototype._getValue_arrayElement,PropertyBinding.prototype._getValue_toArray],PropertyBinding.prototype.SetterByBindingTypeAndVersioning=[[PropertyBinding.prototype._setValue_direct,PropertyBinding.prototype._setValue_direct_setNeedsUpdate,PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_array,PropertyBinding.prototype._setValue_array_setNeedsUpdate,PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_arrayElement,PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_fromArray,PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],_controlInterpolantsResultBuffer=new Float32Array(1),_matrix=new Matrix4;class Raycaster{constructor(e,t,n=0,s=1/0){this.ray=new Ray(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):error("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _matrix.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_matrix),this}intersectObject(e,t=!0,n=[]){return intersect(e,this,n,t),n.sort(ascSort),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)intersect(e[s],this,n,t);return n.sort(ascSort),n}}function ascSort(e,t){return e.distance-t.distance}function intersect(e,t,n,s){let o=!0;if(e.layers.test(t.layers)){const s=e.raycast(t,n);s===!1&&(o=!1)}if(o===!0&&s===!0){const s=e.children;for(let e=0,o=s.length;e<o;e++)intersect(s[e],t,n,!0)}}class ShapePath{constructor(){this.type="ShapePath",this.color=new Color,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Path,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,o,i){return this.currentPath.bezierCurveTo(e,t,n,s,o,i),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function f(e){const t=[];for(let n=0,o=e.length;n<o;n++){const i=e[n],s=new Shape;s.curves=i.curves,t.push(s)}return t}function p(e,t){const s=t.length;let n=!1;for(let c=s-1,r=0;r<s;c=r++){let o=t[c],i=t[r],l=i.x-o.x,a=i.y-o.y;if((a<0?-a:a)>Number.EPSILON){if(a<0&&(o=t[r],l=-l,i=t[c],a=-a),e.y<o.y||e.y>i.y)continue;if(e.y===o.y){if(e.x===o.x)return!0}else{const t=a*(e.x-o.x)-l*(e.y-o.y);if(t===0)return!0;if(t<0)continue;n=!n}}else{if(e.y!==o.y)continue;if(i.x<=e.x&&e.x<=o.x||o.x<=e.x&&e.x<=i.x)return!0}}return n}const m=ShapeUtils.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,i,o;const l=[];if(s.length===1)return i=s[0],o=new Shape,o.curves=i.curves,l.push(o),l;let c=!m(s[0].getPoints());c=e?!c:c;const d=[],t=[];let a=[],n=0,u;t[n]=0[0],a[n]=[];for(let o=0,l=s.length;o<l;o++)i=s[o],u=i.getPoints(),r=m(u),r=e?!r:r,r?(!c&&t[n]&&n++,t[n]={s:new Shape,p:u},t[n].s.curves=i.curves,c&&n++,a[n]=[]):a[n].push({h:i,p:u[0]});if(!t[0])return f(s);if(t.length>1){let e=!1,n=0;for(let e=0,n=t.length;e<n;e++)d[e]=[];for(let s=0,i=t.length;s<i;s++){const o=a[s];for(let i=0;i<o.length;i++){const a=o[i];let r=!0;for(let o=0;o<t.length;o++)p(a.p,t[o].p)&&(s!==o&&n++,r?(r=!1,d[o].push(a)):e=!0);r&&d[s].push(a)}}n>0&&e===!1&&(a=d)}let h;for(let e=0,n=t.length;e<n;e++){o=t[e].s,l.push(o),h=a[e];for(let e=0,t=h.length;e<t;e++)o.holes.push(h[e].h)}return l}}function getByteLength(e,t,n,s){const o=getTextureTypeByteLength(s);switch(n){case AlphaFormat:return e*t;case RedFormat:return e*t/o.components*o.byteLength;case RedIntegerFormat:return e*t/o.components*o.byteLength;case RGFormat:return e*t*2/o.components*o.byteLength;case RGIntegerFormat:return e*t*2/o.components*o.byteLength;case RGBFormat:return e*t*3/o.components*o.byteLength;case RGBAFormat:return e*t*4/o.components*o.byteLength;case RGBAIntegerFormat:return e*t*4/o.components*o.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(e,16)*Math.max(t,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(e,8)*Math.max(t,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:case R11_EAC_Format:case SIGNED_R11_EAC_Format:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case RGBA_ETC2_EAC_Format:case RG11_EAC_Format:case SIGNED_RG11_EAC_Format:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(e/4)*Math.ceil(t/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(e/4)*Math.ceil(t/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function getTextureTypeByteLength(e){switch(e){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:case UnsignedInt101111Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}})),typeof window!="undefined"&&(window.__THREE__?warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);function WebGLAnimation(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){if(t===!0)return;if(n===null)return;s=e.requestAnimationFrame(o),t=!0},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function WebGLAttributes(e){const t=new WeakMap;function n(t,n){const s=t.array,a=t.usage,r=s.byteLength,i=e.createBuffer();e.bindBuffer(n,i),e.bufferData(n,s,a),t.onUploadCallback();let o;if(s instanceof Float32Array)o=e.FLOAT;else if(typeof Float16Array!="undefined"&&s instanceof Float16Array)o=e.HALF_FLOAT;else if(s instanceof Uint16Array)t.isFloat16BufferAttribute?o=e.HALF_FLOAT:o=e.UNSIGNED_SHORT;else if(s instanceof Int16Array)o=e.SHORT;else if(s instanceof Uint32Array)o=e.UNSIGNED_INT;else if(s instanceof Int32Array)o=e.INT;else if(s instanceof Int8Array)o=e.BYTE;else if(s instanceof Uint8Array)o=e.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)o=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:i,type:o,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version,size:r}}function s(t,n,s){const i=n.array,o=n.updateRanges;if(e.bindBuffer(s,t),o.length===0)e.bufferSubData(s,0,i);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let s=1;s<o.length;s++){const e=o[t],n=o[s];n.start<=e.start+e.count+1?e.count=Math.max(e.count,n.start+n.count-e.start):(++t,o[t]=n)}o.length=t+1;for(let t=0,a=o.length;t<a;t++){const n=o[t];e.bufferSubData(s,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function i(n){n.isInterleavedBufferAttribute&&(n=n.data);const s=t.get(n);s&&(e.deleteBuffer(s.buffer),t.delete(n))}function a(e,o){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){const n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}const i=t.get(e);if(i===0[0])t.set(e,n(e,o));else if(i.version<e.version){if(i.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(i.buffer,e,o),i.version=e.version}}return{get:o,remove:i,update:a}}alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distance_vert:vertex$d,distance_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distance:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distance_vert,fragmentShader:ShaderChunk.distance_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}},ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},_rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$12=new Matrix4;function WebGLBackground(e,t,n,s,o,i){const l=new Color(0);let c=o===!0?0:1,r,a,d=null,u=0,h=null;function f(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){const s=e.backgroundBlurriness>0;n=t.get(n,s)}return n}function p(t){let o=!1;const s=f(t);s===null?m(l,c):s&&s.isColor&&(m(s,1),o=!0);const a=e.xr.getEnvironmentBlendMode();a==="additive"?n.buffers.color.setClear(0,0,0,1,i):a==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,i),(e.autoClear||o)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){const o=f(n);o&&(o.isCubeTexture||o.mapping===CubeUVReflectionMapping)?(a===0[0]&&(a=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(a)),_e1$1.copy(n.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),a.material.uniforms.envMap.value=o,a.material.uniforms.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,a.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$12.makeRotationFromEuler(_e1$1)),a.material.toneMapped=ColorManagement.getTransfer(o.colorSpace)!==SRGBTransfer,(d!==o||u!==o.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,d=o,u=o.version,h=e.toneMapping),a.layers.enableAll(),t.unshift(a,a.geometry,a.material,0,0,null)):o&&o.isTexture&&(r===0[0]&&(r=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(r)),r.material.uniforms.t2D.value=o,r.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,r.material.toneMapped=ColorManagement.getTransfer(o.colorSpace)!==SRGBTransfer,o.matrixAutoUpdate===!0&&o.updateMatrix(),r.material.uniforms.uvTransform.value.copy(o.matrix),(d!==o||u!==o.version||h!==e.toneMapping)&&(r.material.needsUpdate=!0,d=o,u=o.version,h=e.toneMapping),r.layers.enableAll(),t.unshift(r,r.geometry,r.material,0,0,null))}function m(t,s){t.getRGB(_rgb,getUnlitUniformColorSpace(e)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,s,i)}function v(){a!==0[0]&&(a.geometry.dispose(),a.material.dispose(),a=0[0]),r!==0[0]&&(r.geometry.dispose(),r.material.dispose(),r=0[0])}return{getClearColor:function(){return l},setClearColor:function(e,t=1){l.set(e),c=t,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,m(l,c)},render:p,addToRenderList:g,dispose:v}}function WebGLBindingStates(e,t){const v=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},o=h(null);let n=o,a=!1;function E(s,o,i,r,c){let l=!1;const u=j(s,r,i,o);n!==u&&(n=u,d(n.object)),l=b(s,r,i,c),l&&g(s,r,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(l||a)&&(a=!1,y(s,o,i,r),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function C(){return e.createVertexArray()}function d(t){return e.bindVertexArray(t)}function i(t){return e.deleteVertexArray(t)}function j(e,t,n,o){const l=o.wireframe===!0;let i=s[t.id];i===0[0]&&(i={},s[t.id]=i);const d=e.isInstancedMesh===!0?e.id:0;let a=i[d];a===0[0]&&(a={},i[d]=a);let r=a[n.id];r===0[0]&&(r={},a[n.id]=r);let c=r[l];return c===0[0]&&(c=h(C()),r[l]=c),c}function h(e){const t=[],n=[],s=[];for(let e=0;e<v;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function b(e,t,s,o){const r=n.attributes,c=t.attributes;let i=0;const a=s.getAttributes();for(const t in a){const n=a[t];if(n.location>=0){const s=r[t];let n=c[t];if(n===0[0]&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor)),s===0[0])return!0;if(s.attribute!==n)return!0;if(n&&s.data!==n.data)return!0;i++}}return n.attributesNum!==i||n.index!==o}function g(e,t,s,o){const i={},c=t.attributes;let a=0;const r=s.getAttributes();for(const t in r){const n=r[t];if(n.location>=0){let n=c[t];n===0[0]&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor));const s={};s.attribute=n,n&&n.data&&(s.data=n.data),i[t]=s,a++}}n.attributes=i,n.attributesNum=a,n.index=o}function p(){const e=n.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function c(e){r(e,0)}function r(t,s){const a=n.newAttributes,o=n.enabledAttributes,i=n.attributeDivisors;a[t]=1,o[t]===0&&(e.enableVertexAttribArray(t),o[t]=1),i[t]!==s&&(e.vertexAttribDivisor(t,s),i[t]=s)}function m(){const s=n.newAttributes,t=n.enabledAttributes;for(let n=0,o=t.length;n<o;n++)t[n]!==s[n]&&(e.disableVertexAttribArray(n),t[n]=0)}function u(t,n,s,o,i,a,r){r===!0?e.vertexAttribIPointer(t,n,s,i,a):e.vertexAttribPointer(t,n,s,o,i,a)}function y(n,s,o,i){p();const d=i.attributes,a=o.getAttributes(),l=s.defaultAttributeValues;for(const o in a){const s=a[o];if(s.location>=0){let a=d[o];if(a===0[0]&&(o==="instanceMatrix"&&n.instanceMatrix&&(a=n.instanceMatrix),o==="instanceColor"&&n.instanceColor&&(a=n.instanceColor)),a!==0[0]){const m=a.normalized,o=a.itemSize,l=t.get(a);if(l===0[0])continue;const f=l.buffer,d=l.type,h=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||a.gpuType===IntType;if(a.isInterleavedBufferAttribute){const t=a.data,l=t.stride,g=a.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<s.locationSize;e++)r(s.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===0[0]&&(i._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,l*h,(g+o/s.locationSize*e)*h,p)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<s.locationSize;e++)r(s.location+e,a.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===0[0]&&(i._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,o*h,o/s.locationSize*e*h,p)}}else if(l!==0[0]){const t=l[o];if(t!==0[0])switch(t.length){case 2:e.vertexAttrib2fv(s.location,t);break;case 3:e.vertexAttrib3fv(s.location,t);break;case 4:e.vertexAttrib4fv(s.location,t);break;default:e.vertexAttrib1fv(s.location,t)}}}}m()}function _(){l();for(const e in s){const t=s[e];for(const n in t){const e=t[n];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}}delete s[e]}}function w(e){if(s[e.id]===0[0])return;const t=s[e.id];for(const n in t){const e=t[n];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}}delete s[e.id]}function O(e){for(const n in s){const t=s[n];for(const o in t){const n=t[o];if(n[e.id]===0[0])continue;const s=n[e.id];for(const e in s)i(s[e].object),delete s[e];delete n[e.id]}}}function x(e){for(const o in s){const n=s[o],a=e.isInstancedMesh===!0?e.id:0,t=n[a];if(t===0[0])continue;for(const n in t){const e=t[n];for(const t in e)i(e[t].object),delete e[t];delete t[n]}delete n[a],Object.keys(n).length===0&&delete s[o]}}function l(){if(f(),a=!0,n===o)return;n=o,d(n.object)}function f(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:E,reset:l,resetDefaultState:f,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:O,initAttributes:p,enableAttribute:c,disableUnusedAttributes:m}}function WebGLBufferRenderer(e,t,n){let s;function i(e){s=e}function a(t,o){e.drawArrays(s,t,o),n.update(o,s,1)}function o(t,o,i){if(i===0)return;e.drawArraysInstanced(s,t,o,i),n.update(o,s,i)}function r(e,o,i){if(i===0)return;const r=t.get("WEBGL_multi_draw");r.multiDrawArraysWEBGL(s,e,0,o,0,i);let a=0;for(let e=0;e<i;e++)a+=o[e];n.update(a,s,1)}function c(e,i,a,r){if(a===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],r[t]);else{c.multiDrawArraysInstancedWEBGL(s,e,0,i,0,r,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*r[e];n.update(t,s,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function WebGLCapabilities(e,t,n,s){let o;function h(){if(o!==0[0])return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const n=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(t){return t===RGBAFormat||s.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function p(n){const o=n===HalfFloatType&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(n!==UnsignedByteType&&s.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==FloatType&&!o)}function r(t){if(t==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return t==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let i=n.precision!==0[0]?n.precision:"highp";const a=r(i);a!==i&&(warn("WebGLRenderer:",i,"not supported, using",a,"instead."),i=a);const u=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),j=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:h,getMaxPrecision:r,textureFormatReadable:d,textureTypeReadable:p,precision:i,logarithmicDepthBuffer:u,reversedDepthBuffer:c,maxTextures:m,maxVertexTextures:f,maxTextureSize:l,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:b,maxVaryings:j,maxFragmentUniforms:y,maxSamples:_,samples:w}}function WebGLClipping(e){const o=this;let i=null,n=0,r=!1,s=!1;const c=new Plane,l=new Matrix3,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){const s=e.length!==0||t||n!==0||r;return r=t,n=e.length,s},this.beginShadows=function(){s=!0,a(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=a(e,t,0)},this.setState=function(o,c,l){const{clippingPlanes:u,clipIntersection:m,clipShadows:f}=o,h=e.get(o);if(!r||u===null||u.length===0||s&&!f)s?a(null):d();else{const o=s?0:n,r=o*4;let e=h.clippingState||null;t.value=e,e=a(u,c,r,l);for(let t=0;t!==r;++t)e[t]=i[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}};function d(){t.value!==i&&(t.value=i,t.needsUpdate=n>0),o.numPlanes=n,o.numIntersection=0}function a(e,n,s,i){const r=e!==null?e.length:0;let a=null;if(r!==0){if(a=t.value,i!==!0||a===null){const t=s+r*4,o=n.matrixWorldInverse;l.getNormalMatrix(o),(a===null||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)c.copy(e[t]).applyMatrix4(o,l),c.normal.toArray(a,n),a[n+3]=c.constant}t.value=a,t.needsUpdate=!0}return o.numPlanes=r,o.numIntersection=0,a}}LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,GGX_SAMPLES=256,_flatCamera=new OrthographicCamera,_clearColor=new Color,_oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1,_origin=new Vector3;class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:a=256,position:r=_origin}=o;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i,r),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},s=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_createPlanes(s),this._blurMaterial=_getBlurShader(s,e,t),this._ggxMaterial=_getGGXShader(s,e,t))}return s}_compileMaterial(e){const t=new Mesh(new BufferGeometry,e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,s,o){const p=90,v=1,a=new PerspectiveCamera(p,v,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],i=this._renderer,g=i.autoClear,m=i.toneMapping;i.getClearColor(_clearColor),i.toneMapping=NoToneMapping,i.autoClear=!1;const f=i.state.buffers.depth.getReversed();f&&(i.setRenderTarget(s),i.clearDepth(),i.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mesh(new BoxGeometry,new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,h=u.material;let c=!1;const r=e.background;r?r.isColor&&(h.color.copy(r),e.background=null,c=!0):(h.color.copy(_clearColor),c=!0);for(let t=0;t<6;t++){const r=t%3;r===0?(a.up.set(0,l[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x+d[t],o.y,o.z)):r===1?(a.up.set(0,0,l[t]),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y+d[t],o.z)):(a.up.set(0,l[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y,o.z+d[t]));const n=this._cubeSize;_setViewport(s,r*n,t>2?n:0,n,n),i.setRenderTarget(s),c&&i.render(u,a),i.render(e,a)}i.toneMapping=m,i.autoClear=g,e.background=r}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const o=s?this._cubemapMaterial:this._equirectMaterial,i=this._lodMeshes[0];i.material=o;const r=o.uniforms;r.envMap.value=e;const a=this._cubeSize;_setViewport(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(i,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let t=1;t<s;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const{_lodMax:i}=this,o=u.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),g=(l*l-d*d)**.5,f=0+l*1.25,p=g*f,s=this._sizeLods[n],h=3*s*(n>i-LOD_MIN?n-i+LOD_MIN:0),m=4*(this._cubeSize-s);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=i-t,_setViewport(r,h,m,3*s,2*s),a.setRenderTarget(r),a.render(c,_flatCamera),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=i-n,_setViewport(e,h,m,3*s,2*s),a.setRenderTarget(e),a.render(c,_flatCamera)}_blur(e,t,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",o),this._halfBlur(i,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,i,a){const g=this._renderer,v=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&error("blur direction must be either latitudinal or longitudinal!");const j=3,m=this._lodMeshes[s];m.material=v;const r=v.uniforms,b=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*b):2*Math.PI/(2*MAX_SAMPLES-1),f=o/p,l=isFinite(o)?1+Math.floor(j*f):MAX_SAMPLES;l>MAX_SAMPLES&&warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${MAX_SAMPLES}`);const c=[];let h=0;for(let e=0;e<MAX_SAMPLES;++e){const n=e/f,t=Math.exp(-n*n/2);c.push(t),e===0?h+=t:e<l&&(h+=2*t)}for(let e=0;e<c.length;e++)c[e]=c[e]/h;r.envMap.value=e.texture,r.samples.value=l,r.weights.value=c,r.latitudinal.value=i==="latitudinal",a&&(r.poleAxis.value=a);const{_lodMax:u}=this;r.dTheta.value=p,r.mipInt.value=u-n;const d=this._sizeLods[s],y=3*d*(s>u-LOD_MIN?s-u+LOD_MIN:0),_=4*(this._cubeSize-d);_setViewport(t,y,_,3*d,2*d),g.setRenderTarget(t),g.render(m,_flatCamera)}}function _createPlanes(e){const n=[],s=[],o=[];let t=e;const i=e-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let l=0;l<i;l++){const m=2**t;n.push(m);let g=1/m;l>e-LOD_MIN?g=EXTRA_LOD_SIGMA[l-e+LOD_MIN-1]:l===0&&(g=0),s.push(g);const v=1/(m-2),r=-v,c=1+v,_=[r,r,c,r,c,c,r,r,c,c,r,c],u=6,a=6,h=3,f=2,p=1,b=new Float32Array(h*a*u),j=new Float32Array(f*a*u),y=new Float32Array(p*a*u);for(let e=0;e<u;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];b.set(s,h*a*e),j.set(_,f*a*e);const o=[e,e,e,e,e,e];y.set(o,p*a*e)}const d=new BufferGeometry;d.setAttribute("position",new BufferAttribute(b,h)),d.setAttribute("uv",new BufferAttribute(j,f)),d.setAttribute("faceIndex",new BufferAttribute(y,p)),o.push(new Mesh(d,null)),t>LOD_MIN&&t--}return{lodMeshes:o,sizeLods:n,sigmas:s}}function _createRenderTarget(e,t,n){const s=new WebGLRenderTarget(e,t,n);return s.texture.mapping=CubeUVReflectionMapping,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _setViewport(e,t,n,s,o){e.viewport.set(t,n,s,o),e.scissor.set(t,n,s,o)}function _getGGXShader(e,t,n){const s=new ShaderMaterial({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1});return s}function _getBlurShader(e,t,n){const s=new Float32Array(MAX_SAMPLES),o=new Vector3(0,1,0),i=new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1});return i}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new CubeTexture(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new BoxGeometry(5,5,5),o=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});o.uniforms.tEquirect.value=t;const s=new Mesh(i,o),a=t.minFilter;t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter);const r=new CubeCamera(1,10,this);return r.update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}}function WebGLEnvironments(e){let n=new WeakMap,s=new WeakMap,t=null;function r(e,t=!1){return e==null?null:t?l(e):c(e)}function c(t){if(t&&t.isTexture){const s=t.mapping;if(s===EquirectangularReflectionMapping||s===EquirectangularRefractionMapping){if(n.has(t)){const e=n.get(t).texture;return o(e,t.mapping)}const s=t.image;if(s&&s.height>0){const a=new WebGLCubeRenderTarget(s.height);return a.fromEquirectangularTexture(e,t),n.set(t,a),t.addEventListener("dispose",i),o(a.texture,t.mapping)}return null}}return t}function l(n){if(n&&n.isTexture){const o=n.mapping,i=o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping,r=o===CubeReflectionMapping||o===CubeRefractionMapping;if(i||r){let o=s.get(n);const c=o!==0[0]?o.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new PMREMGenerator(e)),o=i?t.fromEquirectangular(n,o):t.fromCubemap(n,o),o.texture.pmremVersion=n.pmremVersion,s.set(n,o),o.texture;if(o!==0[0])return o.texture;const image=n.image;return i&&image&&image.height>0||r&&image&&d(image)?(t===null&&(t=new PMREMGenerator(e)),o=i?t.fromEquirectangular(n):t.fromCubemap(n),o.texture.pmremVersion=n.pmremVersion,s.set(n,o),n.addEventListener("dispose",a),o.texture):null}}return n}function o(e,t){return t===EquirectangularReflectionMapping?e.mapping=CubeReflectionMapping:t===EquirectangularRefractionMapping&&(e.mapping=CubeRefractionMapping),e}function d(e){let t=0;const n=6;for(let s=0;s<n;s++)e[s]!==0[0]&&t++;return t===n}function i(e){const t=e.target;t.removeEventListener("dispose",i);const s=n.get(t);s!==0[0]&&(n.delete(t),s.dispose())}function a(e){const t=e.target;t.removeEventListener("dispose",a);const n=s.get(t);n!==0[0]&&(s.delete(t),n.dispose())}function u(){n=new WeakMap,s=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function WebGLExtensions(e){const n={};function t(t){if(n[t]!==0[0])return n[t];const s=e.getExtension(t);return n[t]=s,s}return{has:function(e){return t(e)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(e){const n=t(e);return n===null&&warnOnce("WebGLRenderer: "+e+" extension not supported."),n}}}function WebGLGeometries(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;r.index!==null&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),r.isInstancedBufferGeometry===!0&&delete r._maxInstanceCount,n.memory.geometries--}function c(e,t){return i[t.id]===!0?t:(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++,t)}function l(n){const s=n.attributes;for(const n in s)t.update(s[n],e.ARRAY_BUFFER)}function r(e){const s=[],i=e.index,n=e.attributes.position;let a=0;if(n===0[0])return;if(i!==null){const e=i.array;a=i.version;for(let t=0,a=e.length;t<a;t+=3){const n=e[t+0],o=e[t+1],i=e[t+2];s.push(n,o,o,i,i,n)}}else{const e=n.array;a=n.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const n=t+0,o=t+1,i=t+2;s.push(n,o,o,i,i,n)}}const r=new(n.count>=65535?Uint32BufferAttribute:Uint16BufferAttribute)(s,1);r.version=a;const c=o.get(e);c&&t.remove(c),o.set(e,r)}function d(e){const t=o.get(e);if(t){const n=e.index;n!==null&&t.version<n.version&&r(e)}else r(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function WebGLIndexedBufferRenderer(e,t,n){let s;function r(e){s=e}let o,i;function c(e){o=e.type,i=e.bytesPerElement}function l(t,a){e.drawElements(s,a,o,t*i),n.update(a,s,1)}function a(t,a,r){if(r===0)return;e.drawElementsInstanced(s,a,o,t*i,r),n.update(a,s,r)}function d(e,i,a){if(a===0)return;const c=t.get("WEBGL_multi_draw");c.multiDrawElementsWEBGL(s,i,0,o,e,0,a);let r=0;for(let e=0;e<a;e++)r+=i[e];n.update(r,s,1)}function u(e,r,c,l){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let t=0;t<e.length;t++)a(e[t]/i,r[t],l[t]);else{d.multiDrawElementsInstancedWEBGL(s,r,0,o,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=r[e]*l[e];n.update(t,s,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function WebGLInfo(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(n,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(n/3);break;case e.LINES:t.lines+=o*(n/2);break;case e.LINE_STRIP:t.lines+=o*(n-1);break;case e.LINE_LOOP:t.lines+=o*n;break;case e.POINTS:t.points+=o*n;break;default:error("WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:s}}function WebGLMorphtargets(e,t,n){const o=new WeakMap,s=new Vector4;function i(i,a,r){const d=i.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=u!==0[0]?u.length:0;let c=o.get(a);if(c===0[0]||c.count!==l){let h=function(){d.dispose(),o.delete(a),a.removeEventListener("dispose",h)};c!==0[0]&&c.texture.dispose();const f=a.morphAttributes.position!==0[0],m=a.morphAttributes.normal!==0[0],u=a.morphAttributes.color!==0[0],v=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let i=0;f===!0&&(i=1),m===!0&&(i=2),u===!0&&(i=3);let n=a.attributes.position.count*i,r=1;n>t.maxTextureSize&&(r=Math.ceil(n/t.maxTextureSize),n=t.maxTextureSize);const e=new Float32Array(n*r*4*l),d=new DataArrayTexture(e,n,r,l);d.type=FloatType,d.needsUpdate=!0;const b=i*4;for(let o=0;o<l;o++){const i=v[o],c=g[o],a=p[o],t=n*r*4*o;for(let o=0;o<i.count;o++){const n=o*b;f===!0&&(s.fromBufferAttribute(i,o),e[t+n+0]=s.x,e[t+n+1]=s.y,e[t+n+2]=s.z,e[t+n+3]=0),m===!0&&(s.fromBufferAttribute(c,o),e[t+n+4]=s.x,e[t+n+5]=s.y,e[t+n+6]=s.z,e[t+n+7]=0),u===!0&&(s.fromBufferAttribute(a,o),e[t+n+8]=s.x,e[t+n+9]=s.y,e[t+n+10]=s.z,e[t+n+11]=a.itemSize===4?s.w:1)}}c={count:l,texture:d,size:new Vector2(n,r)},o.set(a,c),a.addEventListener("dispose",h)}if(i.isInstancedMesh===!0&&i.morphTexture!==null)r.getUniforms().setValue(e,"morphTexture",i.morphTexture,n);else{let t=0;for(let e=0;e<d.length;e++)t+=d[e];const n=a.morphTargetsRelative?1:1-t;r.getUniforms().setValue(e,"morphTargetBaseInfluence",n),r.getUniforms().setValue(e,"morphTargetInfluences",d)}r.getUniforms().setValue(e,"morphTargetsTexture",c.texture,n),r.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:i}}function WebGLObjects(e,t,n,s,o){let i=new WeakMap;function r(s){const r=o.render.frame,l=s.geometry,c=t.get(s,l);if(i.get(c)!==r&&(t.update(c),i.set(c,r)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),i.get(s)!==r&&(n.update(s.instanceMatrix,e.ARRAY_BUFFER),s.instanceColor!==null&&n.update(s.instanceColor,e.ARRAY_BUFFER),i.set(s,r))),s.isSkinnedMesh){const e=s.skeleton;i.get(e)!==r&&(e.update(),i.set(e,r))}return c}function c(){i=new WeakMap}function a(e){const t=e.target;t.removeEventListener("dispose",a),s.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:r,dispose:c}}toneMappingMap={[LinearToneMapping]:"LINEAR_TONE_MAPPING",[ReinhardToneMapping]:"REINHARD_TONE_MAPPING",[CineonToneMapping]:"CINEON_TONE_MAPPING",[ACESFilmicToneMapping]:"ACES_FILMIC_TONE_MAPPING",[AgXToneMapping]:"AGX_TONE_MAPPING",[NeutralToneMapping]:"NEUTRAL_TONE_MAPPING",[CustomToneMapping]:"CUSTOM_TONE_MAPPING"};function WebGLOutput(e,t,n,s,o){const a=new WebGLRenderTarget(t,n,{type:e,depthBuffer:s,stencilBuffer:o}),m=new WebGLRenderTarget(t,n,{type:HalfFloatType,depthBuffer:!1,stencilBuffer:!1}),c=new BufferGeometry;c.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2));const r=new RawShaderMaterial({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Mesh(c,r),g=new OrthographicCamera(-1,1,1,-1,0,1);let d=null,u=null,l=!1,p,h=null,i=[],f=!1;this.setSize=function(e,t){a.setSize(e,t),m.setSize(e,t);for(let n=0;n<i.length;n++){const s=i[n];s.setSize&&s.setSize(e,t)}},this.setEffects=function(e){i=e,f=i.length>0&&i[0].isRenderPass===!0;const t=a.width,n=a.height;for(let e=0;e<i.length;e++){const s=i[e];s.setSize&&s.setSize(t,n)}},this.begin=function(e,t){if(l)return!1;if(e.toneMapping===NoToneMapping&&i.length===0)return!1;if(h=t,t!==null){const e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return f===!1&&e.setRenderTarget(a),p=e.toneMapping,e.toneMapping=NoToneMapping,!0},this.hasRenderPass=function(){return f},this.end=function(e,t){e.toneMapping=p,l=!0;let n=a,s=m;for(let o=0;o<i.length;o++){const a=i[o];if(a.enabled===!1)continue;if(a.render(e,s,n,t),a.needsSwap!==!1){const e=n;n=s,s=e}}if(d!==e.outputColorSpace||u!==e.toneMapping){d=e.outputColorSpace,u=e.toneMapping,r.defines={},ColorManagement.getTransfer(d)===SRGBTransfer&&(r.defines.SRGB_TRANSFER="");const t=toneMappingMap[u];t&&(r.defines[t]=""),r.needsUpdate=!0}r.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(v,g),h=null,l=!1},this.isCompositing=function(){return l},this.dispose=function(){a.dispose(),m.dispose(),c.dispose(),r.dispose()}}emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=arrayCacheF32[i];if(s===0[0]&&(s=new Float32Array(i),arrayCacheF32[i]=s),t!==0){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function copyArray(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function allocTexUnits(e,t){let n=arrayCacheI32[t];n===0[0]&&(n=new Int32Array(t),arrayCacheI32[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function setValueV1f(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function setValueV2f(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2fv(this.addr,t),copyArray(n,t)}}function setValueV3f(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==0[0])(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(arraysEqual(n,t))return;e.uniform3fv(this.addr,t),copyArray(n,t)}}function setValueV4f(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4fv(this.addr,t),copyArray(n,t)}}function setValueM2(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(arraysEqual(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,s))return;mat2array.set(s),e.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(n,s)}}function setValueM3(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(arraysEqual(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,s))return;mat3array.set(s),e.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(n,s)}}function setValueM4(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(arraysEqual(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,s))return;mat4array.set(s),e.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(n,s)}}function setValueV1i(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function setValueV2i(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2iv(this.addr,t),copyArray(n,t)}}function setValueV3i(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;e.uniform3iv(this.addr,t),copyArray(n,t)}}function setValueV4i(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4iv(this.addr,t),copyArray(n,t)}}function setValueV1ui(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function setValueV2ui(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2uiv(this.addr,t),copyArray(n,t)}}function setValueV3ui(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;e.uniform3uiv(this.addr,t),copyArray(n,t)}}function setValueV4ui(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4uiv(this.addr,t),copyArray(n,t)}}function setValueT1(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=n.isReversedDepthBuffer()?GreaterEqualCompare:LessEqualCompare,o=emptyShadowTexture):o=emptyTexture,n.setTexture2D(t||o,s)}function setValueT3D1(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||empty3dTexture,s)}function setValueT6(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTextureCube(t||emptyCubeTexture,s)}function setValueT2DArray1(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||emptyArrayTexture,s)}function getSingularSetter(e){switch(e){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(e,t){e.uniform1fv(this.addr,t)}function setValueV2fArray(e,t){const n=flatten(t,this.size,2);e.uniform2fv(this.addr,n)}function setValueV3fArray(e,t){const n=flatten(t,this.size,3);e.uniform3fv(this.addr,n)}function setValueV4fArray(e,t){const n=flatten(t,this.size,4);e.uniform4fv(this.addr,n)}function setValueM2Array(e,t){const n=flatten(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function setValueM3Array(e,t){const n=flatten(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function setValueM4Array(e,t){const n=flatten(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function setValueV1iArray(e,t){e.uniform1iv(this.addr,t)}function setValueV2iArray(e,t){e.uniform2iv(this.addr,t)}function setValueV3iArray(e,t){e.uniform3iv(this.addr,t)}function setValueV4iArray(e,t){e.uniform4iv(this.addr,t)}function setValueV1uiArray(e,t){e.uniform1uiv(this.addr,t)}function setValueV2uiArray(e,t){e.uniform2uiv(this.addr,t)}function setValueV3uiArray(e,t){e.uniform3uiv(this.addr,t)}function setValueV4uiArray(e,t){e.uniform4uiv(this.addr,t)}function setValueT1Array(e,t,n){const i=this.cache,a=t.length,s=allocTexUnits(n,a);arraysEqual(i,s)||(e.uniform1iv(this.addr,s),copyArray(i,s));let o;this.type===e.SAMPLER_2D_SHADOW?o=emptyShadowTexture:o=emptyTexture;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||o,s[e])}function setValueT3DArray(e,t,n){const o=this.cache,i=t.length,s=allocTexUnits(n,i);arraysEqual(o,s)||(e.uniform1iv(this.addr,s),copyArray(o,s));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||empty3dTexture,s[e])}function setValueT6Array(e,t,n){const o=this.cache,i=t.length,s=allocTexUnits(n,i);arraysEqual(o,s)||(e.uniform1iv(this.addr,s),copyArray(o,s));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||emptyCubeTexture,s[e])}function setValueT2DArrayArray(e,t,n){const o=this.cache,i=t.length,s=allocTexUnits(n,i);arraysEqual(o,s)||(e.uniform1iv(this.addr,s),copyArray(o,s));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||emptyArrayTexture,s[e])}function getPureArraySetter(e){switch(e){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}}}RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(e,t){e.seq.push(t),e.map[t.id]=t}function parseUniform(e,t,n){const s=e.name,o=s.length;for(RePathPart.lastIndex=0;!0;){const r=RePathPart.exec(s),l=RePathPart.lastIndex;let i=r[1];const d=r[2]==="]",c=r[3];if(d&&(i=i|0),c===0[0]||c==="["&&l+2===o){addUniform(n,c===0[0]?new SingleUniform(i,e,t):new PureArrayUniform(i,e,t));break}const u=n.map;let a=u[i];a===0[0]&&(a=new StructuredUniform(i),addUniform(n,a)),n=a}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<o;++n){const s=e.getActiveUniform(t,n),i=e.getUniformLocation(t,s.name);parseUniform(s,i,this)}const n=[],s=[];for(const t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(t):s.push(t);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,n,s){const o=this.map[t];o!==0[0]&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==0[0]&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];a.needsUpdate!==!1&&i.setValue(e,a.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function WebGLShader(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}COMPLETION_STATUS_KHR=37297,programIdCount=0;function handleSource(e,t){const n=e.split(`
`),s=[],o=Math.max(t-6,0),i=Math.min(t+6,n.length);for(let e=o;e<i;e++){const a=e+1;s.push(`${a===t?">":" "} ${a}: ${n[e]}`)}return s.join(`
`)}_m0=new Matrix3;function getEncodingComponents(e){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,e);const t=`mat3( ${_m0.elements.map(e=>e.toFixed(4))} )`;switch(ColorManagement.getTransfer(e)){case LinearTransfer:return[t,"LinearTransferOETF"];case SRGBTransfer:return[t,"sRGBTransferOETF"];default:return warn("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function getShaderErrors(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t)||"",s=a.trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const i=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+handleSource(e.getShaderSource(t),i)}return s}function getTexelEncodingFunction(e,t){const n=getEncodingComponents(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}toneMappingFunctions={[LinearToneMapping]:"Linear",[ReinhardToneMapping]:"Reinhard",[CineonToneMapping]:"Cineon",[ACESFilmicToneMapping]:"ACESFilmic",[AgXToneMapping]:"AgX",[NeutralToneMapping]:"Neutral",[CustomToneMapping]:"Custom"};function getToneMappingFunction(e,t){const n=toneMappingFunctions[t];return n===0[0]?(warn("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}_v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const e=_v0.x.toFixed(4),t=_v0.y.toFixed(4),n=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(e){const t=[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""];return t.filter(filterEmptyLine).join(`
`)}function generateDefines(e){const t=[];for(const n in e){const s=e[n];if(s===!1)continue;t.push("#define "+n+" "+s)}return t.join(`
`)}function fetchAttributeLocations(e,t){const n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=e.getActiveAttrib(t,a),r=o.name;let i=1;o.type===e.FLOAT_MAT2&&(i=2),o.type===e.FLOAT_MAT3&&(i=3),o.type===e.FLOAT_MAT4&&(i=4),n[r]={type:o.type,location:e.getAttribLocation(t,r),locationSize:i}}return n}function filterEmptyLine(e){return e!==""}function replaceLightNums(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function replaceClippingPlaneNums(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(e){return e.replace(includePattern,includeReplacer)}shaderChunkMap=new Map;function includeReplacer(e,t){let n=ShaderChunk[t];if(n===0[0]){const e=shaderChunkMap.get(t);if(e!==0[0])n=ShaderChunk[e],warn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return resolveIncludes(n)}unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(e){return e.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function generatePrecision(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}shadowMapTypeDefines={[PCFShadowMap]:"SHADOWMAP_TYPE_PCF",[VSMShadowMap]:"SHADOWMAP_TYPE_VSM"};function generateShadowMapTypeDefine(e){return shadowMapTypeDefines[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}envMapTypeDefines={[CubeReflectionMapping]:"ENVMAP_TYPE_CUBE",[CubeRefractionMapping]:"ENVMAP_TYPE_CUBE",[CubeUVReflectionMapping]:"ENVMAP_TYPE_CUBE_UV"};function generateEnvMapTypeDefine(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":envMapTypeDefines[e.envMapMode]||"ENVMAP_TYPE_CUBE"}envMapModeDefines={[CubeRefractionMapping]:"ENVMAP_MODE_REFRACTION"};function generateEnvMapModeDefine(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":envMapModeDefines[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}envMapBlendingDefines={[MultiplyOperation]:"ENVMAP_BLENDING_MULTIPLY",[MixOperation]:"ENVMAP_BLENDING_MIX",[AddOperation]:"ENVMAP_BLENDING_ADD"};function generateEnvMapBlendingDefine(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":envMapBlendingDefines[e.combine]||"ENVMAP_BLENDING_NONE"}function generateCubeUVSize(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t,o=1/(3*Math.max(2**n,7*16));return{texelWidth:o,texelHeight:s,maxMip:n}}function WebGLProgram(e,t,n,s){const o=e.getContext(),E=n.defines;let a=n.vertexShader,r=n.fragmentShader;const j=generateShadowMapTypeDefine(n),_=generateEnvMapTypeDefine(n),b=generateEnvMapModeDefine(n),C=generateEnvMapBlendingDefine(n),d=generateCubeUVSize(n),x=generateVertexExtensions(n),m=generateDefines(E),i=o.createProgram();let l,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(filterEmptyLine).join(`
`),l.length>0&&(l+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(filterEmptyLine).join(`
`),c.length>0&&(c+=`
`)):(l=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+b:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+j:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),c=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.envMap?"#define "+b:"",n.envMap?"#define "+C:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+j:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",n.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",n.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",n.outputColorSpace),getLuminanceFunction(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,n),a=replaceClippingPlaneNums(a,n),r=resolveIncludes(r),r=replaceLightNums(r,n),r=replaceClippingPlaneNums(r,n),a=unrollLoops(a),r=unrollLoops(r),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,l=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,c=["#define varying in",n.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const O=v+l+a,w=v+c+r,u=WebGLShader(o,o.VERTEX_SHADER,O),h=WebGLShader(o,o.FRAGMENT_SHADER,w);o.attachShader(i,u),o.attachShader(i,h),n.index0AttributeName!==0[0]?o.bindAttribLocation(i,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(i,0,"position"),o.linkProgram(i);function y(t){if(e.debug.checkShaderErrors){const m=o.getProgramInfoLog(i)||"",f=o.getShaderInfoLog(u)||"",p=o.getShaderInfoLog(h)||"",n=m.trim(),s=f.trim(),a=p.trim();let r=!0,d=!0;if(o.getProgramParameter(i,o.LINK_STATUS)===!1)if(r=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,i,u,h);else{const e=getShaderErrors(o,u,"vertex"),s=getShaderErrors(o,h,"fragment");error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(i,o.VALIDATE_STATUS)+`

`+"Material Name: "+t.name+`
`+"Material Type: "+t.type+`

`+"Program Info Log: "+n+`
`+e+`
`+s)}else n!==""?warn("WebGLProgram: Program Info Log:",n):(s===""||a==="")&&(d=!1);d&&(t.diagnostics={runnable:r,programLog:n,vertexShader:{log:s,prefix:l},fragmentShader:{log:a,prefix:c}})}o.deleteShader(u),o.deleteShader(h),p=new WebGLUniforms(o,i),f=fetchAttributeLocations(o,i)}let p;this.getUniforms=function(){return p===0[0]&&y(this),p};let f;this.getAttributes=function(){return f===0[0]&&y(this),f};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=o.getProgramParameter(i,COMPLETION_STATUS_KHR)),g},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(i),this.program=0[0]},this.type=n.shaderType,this.name=n.shaderName,this.id=programIdCount++,this.cacheKey=t,this.usedTimes=1,this.program=i,this.vertexShader=u,this.fragmentShader=h,this}_id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(o),s=this._getShaderStage(i),t=this._getShaderCacheForMaterial(e);return t.has(n)===!1&&(t.add(n),n.usedTimes++),t.has(s)===!1&&(t.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);return t===0[0]&&(t=new Set,n.set(e,t)),t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);return t===0[0]&&(t=new WebGLShaderStage(e),n.set(e,t)),t}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(e,t,n,s,o,i){const a=new Layers,l=new WebGLShaderCache,d=new Set,c=[],h=new Map,f=s.logarithmicDepthBuffer;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(e){return d.add(e),e===0?"uv":`uv${e}`}function p(o,a,c,h,p){const N=h.fog,g=p.geometry,ge=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?h.environment:null,ue=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,b=t.get(o.envMap||ge,ue),re=!!b&&b.mapping===CubeUVReflectionMapping?b.image.height:null,A=m[o.type];o.precision!==null&&(u=s.getMaxPrecision(o.precision),u!==o.precision&&warn("WebGLProgram.getParameters:",o.precision,"not supported, using",u,"instead."));const G=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,ce=G!==0[0]?G.length:0;let y=0;g.morphAttributes.position!==0[0]&&(y=1),g.morphAttributes.normal!==0[0]&&(y=2),g.morphAttributes.color!==0[0]&&(y=3);let x,k,K,U;if(A){const e=ShaderLib[A];x=e.vertexShader,k=e.fragmentShader}else x=o.vertexShader,k=o.fragmentShader,l.update(o),K=l.getVertexShaderID(o),U=l.getFragmentShaderID(o);const j=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),T=p.isInstancedMesh===!0,z=p.isBatchedMesh===!0,w=!!o.map,pe=!!o.matcap,I=!!b,J=!!o.aoMap,P=!!o.lightMap,H=!!o.bumpMap,v=!!o.normalMap,L=!!o.displacementMap,F=!!o.emissiveMap,$=!!o.metalnessMap,W=!!o.roughnessMap,S=o.anisotropy>0,O=o.clearcoat>0,le=o.dispersion>0,C=o.iridescence>0,E=o.sheen>0,M=o.transmission>0,Q=S&&!!o.anisotropyMap,Z=O&&!!o.clearcoatMap,R=O&&!!o.clearcoatNormalMap,ee=O&&!!o.clearcoatRoughnessMap,te=C&&!!o.iridescenceMap,ne=C&&!!o.iridescenceThicknessMap,se=E&&!!o.sheenColorMap,oe=E&&!!o.sheenRoughnessMap,ie=!!o.specularMap,ae=!!o.specularColorMap,X=!!o.specularIntensityMap,Y=M&&!!o.transmissionMap,q=M&&!!o.thicknessMap,de=!!o.gradientMap,D=!!o.alphaMap,he=o.alphaTest>0,me=!!o.alphaHash,V=!!o.extensions;let B=NoToneMapping;o.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(B=e.toneMapping);const _={shaderID:A,shaderType:o.type,shaderName:o.name,vertexShader:x,fragmentShader:k,defines:o.defines,customVertexShaderID:K,customFragmentShaderID:U,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:u,batching:z,batchingColor:z&&p._colorsTexture!==null,instancing:T,instancingColor:T&&p.instanceColor!==null,instancingMorph:T&&p.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:w,matcap:pe,envMap:I,envMapMode:I&&b.mapping,envMapCubeUVHeight:re,aoMap:J,lightMap:P,bumpMap:H,normalMap:v,displacementMap:L,emissiveMap:F,normalMapObjectSpace:v&&o.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:v&&o.normalMapType===TangentSpaceNormalMap,metalnessMap:$,roughnessMap:W,anisotropy:S,anisotropyMap:Q,clearcoat:O,clearcoatMap:Z,clearcoatNormalMap:R,clearcoatRoughnessMap:ee,dispersion:le,iridescence:C,iridescenceMap:te,iridescenceThicknessMap:ne,sheen:E,sheenColorMap:se,sheenRoughnessMap:oe,specularMap:ie,specularColorMap:ae,specularIntensityMap:X,transmission:M,transmissionMap:Y,thicknessMap:q,gradientMap:de,opaque:o.transparent===!1&&o.blending===NormalBlending&&o.alphaToCoverage===!1,alphaMap:D,alphaTest:he,alphaHash:me,combine:o.combine,mapUv:w&&r(o.map.channel),aoMapUv:J&&r(o.aoMap.channel),lightMapUv:P&&r(o.lightMap.channel),bumpMapUv:H&&r(o.bumpMap.channel),normalMapUv:v&&r(o.normalMap.channel),displacementMapUv:L&&r(o.displacementMap.channel),emissiveMapUv:F&&r(o.emissiveMap.channel),metalnessMapUv:$&&r(o.metalnessMap.channel),roughnessMapUv:W&&r(o.roughnessMap.channel),anisotropyMapUv:Q&&r(o.anisotropyMap.channel),clearcoatMapUv:Z&&r(o.clearcoatMap.channel),clearcoatNormalMapUv:R&&r(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&r(o.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&r(o.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&r(o.iridescenceThicknessMap.channel),sheenColorMapUv:se&&r(o.sheenColorMap.channel),sheenRoughnessMapUv:oe&&r(o.sheenRoughnessMap.channel),specularMapUv:ie&&r(o.specularMap.channel),specularColorMapUv:ae&&r(o.specularColorMap.channel),specularIntensityMapUv:X&&r(o.specularIntensityMap.channel),transmissionMapUv:Y&&r(o.transmissionMap.channel),thicknessMapUv:q&&r(o.thicknessMap.channel),alphaMapUv:D&&r(o.alphaMap.channel),vertexTangents:!!g.attributes.tangent&&(v||S),vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!g.attributes.uv&&(w||D),fog:!!N,useFog:o.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||g.attributes.normal===0[0]&&v===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:p.isSkinnedMesh===!0,morphTargets:g.morphAttributes.position!==0[0],morphNormals:g.morphAttributes.normal!==0[0],morphColors:g.morphAttributes.color!==0[0],morphTargetsCount:ce,morphTextureStride:y,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&c.length>0,shadowMapType:e.shadowMap.type,toneMapping:B,decodeVideoTexture:w&&o.map.isVideoTexture===!0&&ColorManagement.getTransfer(o.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:F&&o.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(o.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===DoubleSide,flipSided:o.side===BackSide,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:V&&o.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&o.extensions.multiDraw===!0||z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return _.vertexUv1s=d.has(1),_.vertexUv2s=d.has(2),_.vertexUv3s=d.has(3),d.clear(),_}function g(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==0[0])for(const e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){a.disableAll(),t.instancing&&a.enable(0),t.instancingColor&&a.enable(1),t.instancingMorph&&a.enable(2),t.matcap&&a.enable(3),t.envMap&&a.enable(4),t.normalMapObjectSpace&&a.enable(5),t.normalMapTangentSpace&&a.enable(6),t.clearcoat&&a.enable(7),t.iridescence&&a.enable(8),t.alphaTest&&a.enable(9),t.vertexColors&&a.enable(10),t.vertexAlphas&&a.enable(11),t.vertexUv1s&&a.enable(12),t.vertexUv2s&&a.enable(13),t.vertexUv3s&&a.enable(14),t.vertexTangents&&a.enable(15),t.anisotropy&&a.enable(16),t.alphaHash&&a.enable(17),t.batching&&a.enable(18),t.dispersion&&a.enable(19),t.batchingColor&&a.enable(20),t.gradientMap&&a.enable(21),e.push(a.mask),a.disableAll(),t.fog&&a.enable(0),t.useFog&&a.enable(1),t.flatShading&&a.enable(2),t.logarithmicDepthBuffer&&a.enable(3),t.reversedDepthBuffer&&a.enable(4),t.skinning&&a.enable(5),t.morphTargets&&a.enable(6),t.morphNormals&&a.enable(7),t.morphColors&&a.enable(8),t.premultipliedAlpha&&a.enable(9),t.shadowMapEnabled&&a.enable(10),t.doubleSided&&a.enable(11),t.flipSided&&a.enable(12),t.useDepthPacking&&a.enable(13),t.dithering&&a.enable(14),t.transmission&&a.enable(15),t.sheen&&a.enable(16),t.opaque&&a.enable(17),t.pointsUvs&&a.enable(18),t.decodeVideoTexture&&a.enable(19),t.decodeVideoTextureEmissive&&a.enable(20),t.alphaToCoverage&&a.enable(21),e.push(a.mask)}function j(e){const n=m[e.type];let t;if(n){const e=ShaderLib[n];t=UniformsUtils.clone(e.uniforms)}else t=e.uniforms;return t}function y(t,n){let s=h.get(n);return s!==0[0]?++s.usedTimes:(s=new WebGLProgram(e,n,t,o),c.push(s),h.set(n,s)),s}function _(e){if(--e.usedTimes===0){const t=c.indexOf(e);c[t]=c[c.length-1],c.pop(),h.delete(e.cacheKey),e.destroy()}}function w(e){l.remove(e)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:j,acquireProgram:y,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:O}}function WebGLProperties(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===0[0]&&(n={},e.set(t,n)),n}function s(t){e.delete(t)}function o(t,n,s){e.get(t)[n]=s}function i(){e=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:i}}function painterSortStable(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function reversePainterSortStable(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function WebGLRenderList(){const o=[];let s=0;const e=[],t=[],n=[];function r(){s=0,e.length=0,t.length=0,n.length=0}function i(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function a(e,t,n,a,r,c){let l=o[s];return l===0[0]?(l={id:e.id,object:e,geometry:t,material:n,materialVariant:i(e),groupOrder:a,renderOrder:e.renderOrder,z:r,group:c},o[s]=l):(l.id=e.id,l.object=e,l.geometry=t,l.material=n,l.materialVariant=i(e),l.groupOrder=a,l.renderOrder=e.renderOrder,l.z=r,l.group=c),s++,l}function c(s,o,i,r,c,l){const d=a(s,o,i,r,c,l);i.transmission>0?t.push(d):i.transparent===!0?n.push(d):e.push(d)}function l(s,o,i,r,c,l){const d=a(s,o,i,r,c,l);i.transmission>0?t.unshift(d):i.transparent===!0?n.unshift(d):e.unshift(d)}function d(s,o){e.length>1&&e.sort(s||painterSortStable),t.length>1&&t.sort(o||reversePainterSortStable),n.length>1&&n.sort(o||reversePainterSortStable)}function u(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(e.id===null)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}}return{opaque:e,transmissive:t,transparent:n,init:r,push:c,unshift:l,finish:u,sort:d}}function WebGLRenderLists(){let e=new WeakMap;function t(t,n){const o=e.get(t);let s;return o===0[0]?(s=new WebGLRenderList,e.set(t,[s])):n>=o.length?(s=new WebGLRenderList,o.push(s)):s=o[n],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function UniformsCache(){const e={};return{get:function(t){if(e[t.id]!==0[0])return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Vector3,color:new Color};break;case"SpotLight":n={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":n={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return e[t.id]=n,n}}}function ShadowUniformsCache(){const e={};return{get:function(t){if(e[t.id]!==0[0])return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}nextVersion=0;function shadowCastingAndTexturingLightsFirst(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function WebGLLights(e){const n=new UniformsCache,i=ShadowUniformsCache(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)t.probe.push(new Vector3);const s=new Vector3,a=new Matrix4,o=new Matrix4;function r(s){let b=0,j=0,v=0;for(let e=0;e<9;e++)t.probe[e].set(0,0,0);let c=0,a=0,r=0,l=0,f=0,d=0,u=0,h=0,m=0,g=0,p=0;s.sort(shadowCastingAndTexturingLightsFirst);for(let w=0,O=s.length;w<O;w++){const e=s[w],y=e.color,o=e.intensity,x=e.distance;let _=null;if(e.shadow&&e.shadow.map&&(e.shadow.map.texture.format===RGFormat?_=e.shadow.map.texture:_=e.shadow.map.depthTexture||e.shadow.map.texture),e.isAmbientLight)b+=y.r*o,j+=y.g*o,v+=y.b*o;else if(e.isLightProbe){for(let n=0;n<9;n++)t.probe[n].addScaledVector(e.sh.coefficients[n],o);p++}else if(e.isDirectionalLight){const s=n.get(e);if(s.color.copy(e.color).multiplyScalar(e.intensity),e.castShadow){const s=e.shadow,n=i.get(e);n.shadowIntensity=s.intensity,n.shadowBias=s.bias,n.shadowNormalBias=s.normalBias,n.shadowRadius=s.radius,n.shadowMapSize=s.mapSize,t.directionalShadow[c]=n,t.directionalShadowMap[c]=_,t.directionalShadowMatrix[c]=e.shadow.matrix,d++}t.directional[c]=s,c++}else if(e.isSpotLight){const s=n.get(e);s.position.setFromMatrixPosition(e.matrixWorld),s.color.copy(y).multiplyScalar(o),s.distance=x,s.coneCos=Math.cos(e.angle),s.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),s.decay=e.decay,t.spot[r]=s;const a=e.shadow;if(e.map&&(t.spotLightMap[m]=e.map,m++,a.updateMatrices(e),e.castShadow&&g++),t.spotLightMatrix[r]=a.matrix,e.castShadow){const n=i.get(e);n.shadowIntensity=a.intensity,n.shadowBias=a.bias,n.shadowNormalBias=a.normalBias,n.shadowRadius=a.radius,n.shadowMapSize=a.mapSize,t.spotShadow[r]=n,t.spotShadowMap[r]=_,h++}r++}else if(e.isRectAreaLight){const s=n.get(e);s.color.copy(y).multiplyScalar(o),s.halfWidth.set(e.width*.5,0,0),s.halfHeight.set(0,e.height*.5,0),t.rectArea[l]=s,l++}else if(e.isPointLight){const s=n.get(e);if(s.color.copy(e.color).multiplyScalar(e.intensity),s.distance=e.distance,s.decay=e.decay,e.castShadow){const s=e.shadow,n=i.get(e);n.shadowIntensity=s.intensity,n.shadowBias=s.bias,n.shadowNormalBias=s.normalBias,n.shadowRadius=s.radius,n.shadowMapSize=s.mapSize,n.shadowCameraNear=s.camera.near,n.shadowCameraFar=s.camera.far,t.pointShadow[a]=n,t.pointShadowMap[a]=_,t.pointShadowMatrix[a]=e.shadow.matrix,u++}t.point[a]=s,a++}else if(e.isHemisphereLight){const s=n.get(e);s.skyColor.copy(e.color).multiplyScalar(o),s.groundColor.copy(e.groundColor).multiplyScalar(o),t.hemi[f]=s,f++}}l>0&&(e.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,t.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(t.rectAreaLTC1=UniformsLib.LTC_HALF_1,t.rectAreaLTC2=UniformsLib.LTC_HALF_2)),t.ambient[0]=b,t.ambient[1]=j,t.ambient[2]=v;const o=t.hash;(o.directionalLength!==c||o.pointLength!==a||o.spotLength!==r||o.rectAreaLength!==l||o.hemiLength!==f||o.numDirectionalShadows!==d||o.numPointShadows!==u||o.numSpotShadows!==h||o.numSpotMaps!==m||o.numLightProbes!==p)&&(t.directional.length=c,t.spot.length=r,t.rectArea.length=l,t.point.length=a,t.hemi.length=f,t.directionalShadow.length=d,t.directionalShadowMap.length=d,t.pointShadow.length=u,t.pointShadowMap.length=u,t.spotShadow.length=h,t.spotShadowMap.length=h,t.directionalShadowMatrix.length=d,t.pointShadowMatrix.length=u,t.spotLightMatrix.length=h+m-g,t.spotLightMap.length=m,t.numSpotLightShadowsWithMaps=g,t.numLightProbes=p,o.directionalLength=c,o.pointLength=a,o.spotLength=r,o.rectAreaLength=l,o.hemiLength=f,o.numDirectionalShadows=d,o.numPointShadows=u,o.numSpotShadows=h,o.numSpotMaps=m,o.numLightProbes=p,t.version=nextVersion++)}function c(e,n){let r=0,c=0,l=0,d=0,u=0;const i=n.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const n=e[h];if(n.isDirectionalLight){const e=t.directional[r];e.direction.setFromMatrixPosition(n.matrixWorld),s.setFromMatrixPosition(n.target.matrixWorld),e.direction.sub(s),e.direction.transformDirection(i),r++}else if(n.isSpotLight){const e=t.spot[l];e.position.setFromMatrixPosition(n.matrixWorld),e.position.applyMatrix4(i),e.direction.setFromMatrixPosition(n.matrixWorld),s.setFromMatrixPosition(n.target.matrixWorld),e.direction.sub(s),e.direction.transformDirection(i),l++}else if(n.isRectAreaLight){const e=t.rectArea[d];e.position.setFromMatrixPosition(n.matrixWorld),e.position.applyMatrix4(i),o.identity(),a.copy(n.matrixWorld),a.premultiply(i),o.extractRotation(a),e.halfWidth.set(n.width*.5,0,0),e.halfHeight.set(0,n.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),d++}else if(n.isPointLight){const e=t.point[c];e.position.setFromMatrixPosition(n.matrixWorld),e.position.applyMatrix4(i),c++}else if(n.isHemisphereLight){const e=t.hemi[u];e.direction.setFromMatrixPosition(n.matrixWorld),e.direction.transformDirection(i),u++}}}return{setup:r,setupView:c,state:t}}function WebGLRenderState(e){const n=new WebGLLights(e),t=[],s=[];function i(e){o.camera=e,t.length=0,s.length=0}function a(e){t.push(e)}function r(e){s.push(e)}function c(){n.setup(t)}function l(e){n.setupView(t,e)}const o={lightsArray:t,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:i,state:o,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function WebGLRenderStates(e){let t=new WeakMap;function n(n,s=0){const i=t.get(n);let o;return i===0[0]?(o=new WebGLRenderState(e),t.set(n,[o])):s>=i.length?(o=new WebGLRenderState(e),i.push(o)):o=i[s],o}function s(){t=new WeakMap}return{get:n,dispose:s}}vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],_cubeUps=[new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,-1,0),new Vector3(0,-1,0)],_projScreenMatrix2=new Matrix4,_lightPositionWorld2=new Vector3,_lookTarget2=new Vector3;function WebGLShadowMap(e,t,n){let f=new Frustum;const s=new Vector2,o=new Vector2,p=new Vector4,b=new MeshDepthMaterial,_=new MeshDistanceMaterial,c={},r=n.maxTextureSize,y={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},i=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),a=i.clone();a.defines.HORIZONTAL_PASS=1;const g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Mesh(g,i),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let v=this.type;this.render=function(t,n,i){if(l.enabled===!1)return;if(l.autoUpdate===!1&&l.needsUpdate===!1)return;if(t.length===0)return;this.type===PCFSoftShadowMap&&(warn("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=PCFShadowMap);const d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),a=e.state;a.setBlending(NoBlending),a.buffers.depth.getReversed()===!0?a.buffers.color.setClear(0,0,0,0):a.buffers.color.setClear(1,1,1,1),a.buffers.depth.setTest(!0),a.setScissorTest(!1);const c=v!==this.type;c&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let h=0,v=t.length;h<v;h++){const d=t[h],l=d.shadow;if(l===0[0]){warn("WebGLShadowMap:",d,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;s.copy(l.mapSize);const u=l.getFrameExtents();s.multiply(u),o.copy(l.mapSize),(s.x>r||s.y>r)&&(s.x>r&&(o.x=Math.floor(r/u.x),s.x=o.x*u.x,l.mapSize.x=o.x),s.y>r&&(o.y=Math.floor(r/u.y),s.y=o.y*u.y,l.mapSize.y=o.y));const g=e.state.buffers.depth.getReversed();if(l.camera._reversedDepth=g,l.map===null||c===!0){if(l.map!==null&&(l.map.depthTexture!==null&&(l.map.depthTexture.dispose(),l.map.depthTexture=null),l.map.dispose()),this.type===VSMShadowMap){if(d.isPointLight){warn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new WebGLRenderTarget(s.x,s.y,{format:RGFormat,type:HalfFloatType,minFilter:LinearFilter,magFilter:LinearFilter,generateMipmaps:!1}),l.map.texture.name=d.name+".shadowMap",l.map.depthTexture=new DepthTexture(s.x,s.y,FloatType),l.map.depthTexture.name=d.name+".shadowMapDepth",l.map.depthTexture.format=DepthFormat,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=NearestFilter,l.map.depthTexture.magFilter=NearestFilter}else d.isPointLight?(l.map=new WebGLCubeRenderTarget(s.x),l.map.depthTexture=new CubeDepthTexture(s.x,UnsignedIntType)):(l.map=new WebGLRenderTarget(s.x,s.y),l.map.depthTexture=new DepthTexture(s.x,s.y,UnsignedIntType)),l.map.depthTexture.name=d.name+".shadowMap",l.map.depthTexture.format=DepthFormat,this.type===PCFShadowMap?(l.map.depthTexture.compareFunction=g?GreaterEqualCompare:LessEqualCompare,l.map.depthTexture.minFilter=LinearFilter,l.map.depthTexture.magFilter=LinearFilter):(l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=NearestFilter,l.map.depthTexture.magFilter=NearestFilter);l.camera.updateProjectionMatrix()}const b=l.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<b;t++){if(l.map.isWebGLCubeRenderTarget)e.setRenderTarget(l.map,t),e.clear();else{t===0&&(e.setRenderTarget(l.map),e.clear());const n=l.getViewport(t);p.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),a.viewport(p)}if(d.isPointLight){const e=l.camera,s=l.matrix,n=d.distance||e.far;n!==e.far&&(e.far=n,e.updateProjectionMatrix()),_lightPositionWorld2.setFromMatrixPosition(d.matrixWorld),e.position.copy(_lightPositionWorld2),_lookTarget2.copy(e.position),_lookTarget2.add(_cubeDirections[t]),e.up.copy(_cubeUps[t]),e.lookAt(_lookTarget2),e.updateMatrixWorld(),s.makeTranslation(-_lightPositionWorld2.x,-_lightPositionWorld2.y,-_lightPositionWorld2.z),_projScreenMatrix2.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l._frustum.setFromProjectionMatrix(_projScreenMatrix2,e.coordinateSystem,e.reversedDepth)}else l.updateMatrices(d);f=l.getFrustum(),m(n,i,l.camera,d,this.type)}l.isPointLightShadow!==!0&&this.type===VSMShadowMap&&j(l,i),l.needsUpdate=!1}v=this.type,l.needsUpdate=!1,e.setRenderTarget(d,u,h)};function j(n,o){const r=t.update(d);i.defines.VSM_SAMPLES!==n.blurSamples&&(i.defines.VSM_SAMPLES=n.blurSamples,a.defines.VSM_SAMPLES=n.blurSamples,i.needsUpdate=!0,a.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new WebGLRenderTarget(s.x,s.y,{format:RGFormat,type:HalfFloatType})),i.uniforms.shadow_pass.value=n.map.depthTexture,i.uniforms.resolution.value=n.mapSize,i.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(o,null,r,i,d,null),a.uniforms.shadow_pass.value=n.mapPass.texture,a.uniforms.resolution.value=n.mapSize,a.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(o,null,r,a,d,null)}function u(t,n,s,o){let i=null;const a=s.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(a!==0[0])i=a;else if(i=s.isPointLight===!0?_:b,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){const s=i.uuid,o=n.uuid;let e=c[s];e===0[0]&&(e={},c[s]=e);let t=e[o];t===0[0]&&(t=i.clone(),e[o]=t,n.addEventListener("dispose",h)),i=t}if(i.visible=n.visible,i.wireframe=n.wireframe,o===VSMShadowMap?i.side=n.shadowSide!==null?n.shadowSide:n.side:i.side=n.shadowSide!==null?n.shadowSide:y[n.side],i.alphaMap=n.alphaMap,i.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,i.map=n.map,i.clipShadows=n.clipShadows,i.clippingPlanes=n.clippingPlanes,i.clipIntersection=n.clipIntersection,i.displacementMap=n.displacementMap,i.displacementScale=n.displacementScale,i.displacementBias=n.displacementBias,i.wireframeLinewidth=n.wireframeLinewidth,i.linewidth=n.linewidth,s.isPointLight===!0&&i.isMeshDistanceMaterial===!0){const t=e.properties.get(i);t.light=s}return i}function m(n,s,o,i,a){if(n.visible===!1)return;const c=n.layers.test(s.layers);if(c&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&a===VSMShadowMap)&&(!n.frustumCulled||f.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);const r=t.update(n),c=n.material;if(Array.isArray(c)){{const t=r.groups;for(let d=0,m=t.length;d<m;d++){const l=t[d],h=c[l.materialIndex];if(h&&h.visible){const t=u(n,h,i,a);n.onBeforeShadow(e,n,s,o,r,t,l),e.renderBufferDirect(o,null,r,t,n,l),n.onAfterShadow(e,n,s,o,r,t,l)}}}}else if(c.visible){const t=u(n,c,i,a);n.onBeforeShadow(e,n,s,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,s,o,r,t,null)}}const r=n.children;for(let e=0,t=r.length;e<t;e++)m(r[e],s,o,i,a)}function h(e){const t=e.target;t.removeEventListener("dispose",h);for(const s in c){const t=c[s],n=e.target.uuid;if(n in t){const e=t[n];e.dispose(),delete t[n]}}}}function WebGLState(e,t){function Z(){let t=!1;const n=new Vector4;let s=null;const o=new Vector4(0,0,0,0);return{setMask:function(n){s!==n&&!t&&(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){r===!0&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),o.equals(n)===!1&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}}function te(){let a=!1,o=!1,r=null,c=null,i=null;return{setReversed:function(e){if(o!==e){const n=t.get("EXT_clip_control");e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),o=e;const s=i;i=null,this.setClear(s)}},getReversed:function(){return o},setTest:function(t){t?n(e.DEPTH_TEST):s(e.DEPTH_TEST)},setMask:function(t){r!==t&&!a&&(e.depthMask(t),r=t)},setFunc:function(t){if(o&&(t=ReversedDepthFuncs[t]),c!==t){switch(t){case NeverDepth:e.depthFunc(e.NEVER);break;case AlwaysDepth:e.depthFunc(e.ALWAYS);break;case LessDepth:e.depthFunc(e.LESS);break;case LessEqualDepth:e.depthFunc(e.LEQUAL);break;case EqualDepth:e.depthFunc(e.EQUAL);break;case GreaterEqualDepth:e.depthFunc(e.GEQUAL);break;case GreaterDepth:e.depthFunc(e.GREATER);break;case NotEqualDepth:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}c=t}},setLocked:function(e){a=e},setClear:function(t){i!==t&&(i=t,o&&(t=1-t),e.clearDepth(t))},reset:function(){a=!1,r=null,c=null,i=null,o=!1}}}function J(){let t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(o){t||(o?n(e.STENCIL_TEST):s(e.STENCIL_TEST))},setMask:function(n){o!==n&&!t&&(e.stencilMask(n),o=n)},setFunc:function(t,n,s){(i!==t||a!==n||r!==s)&&(e.stencilFunc(t,n,s),i=t,a=n,r=s)},setOp:function(t,n,s){(c!==t||l!==n||d!==s)&&(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null}}}const v=new Z,o=new te,a=new J,B=new WeakMap,N=new WeakMap;let d={},u={},F=new WeakMap,U=[],M=null,r=!1,g=null,h=null,b=null,j=null,l=null,_=null,w=null,O=new Color(0,0,0),m=0,C=!1,L=null,D=null,z=null,H=null,R=null;const V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let T=!1,A=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(k)[1]),T=A>=1):k.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),T=A>=2);let i=null,E={};const K=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),P=(new Vector4).fromArray(K),I=(new Vector4).fromArray(X);function y(t,n,s,o){const i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let a=0;a<s;a++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,o,0,e.RGBA,e.UNSIGNED_BYTE,i):e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,i);return a}const c={};c[e.TEXTURE_2D]=y(e.TEXTURE_2D,e.TEXTURE_2D,1),c[e.TEXTURE_CUBE_MAP]=y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),c[e.TEXTURE_2D_ARRAY]=y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),c[e.TEXTURE_3D]=y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),v.setClear(0,0,0,1),o.setClear(1),a.setClear(0),n(e.DEPTH_TEST),o.setFunc(LessEqualDepth),S(!1),$(CullFaceBack),n(e.CULL_FACE),f(NoBlending);function n(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function s(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function G(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function Y(t,n){let s=U,o=!1;if(t){{s=F.get(n),s===0[0]&&(s=[],F.set(n,s));const i=t.textures;if(s.length!==i.length||s[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=i.length;t<n;t++)s[t]=e.COLOR_ATTACHMENT0+t;s.length=i.length,o=!0}}}else s[0]!==e.BACK&&(s[0]=e.BACK,o=!0);o&&e.drawBuffers(s)}function q(t){return M!==t&&(e.useProgram(t),M=t,!0)}const x={[AddEquation]:e.FUNC_ADD,[SubtractEquation]:e.FUNC_SUBTRACT,[ReverseSubtractEquation]:e.FUNC_REVERSE_SUBTRACT};x[MinEquation]=e.MIN,x[MaxEquation]=e.MAX;const p={[ZeroFactor]:e.ZERO,[OneFactor]:e.ONE,[SrcColorFactor]:e.SRC_COLOR,[SrcAlphaFactor]:e.SRC_ALPHA,[SrcAlphaSaturateFactor]:e.SRC_ALPHA_SATURATE,[DstColorFactor]:e.DST_COLOR,[DstAlphaFactor]:e.DST_ALPHA,[OneMinusSrcColorFactor]:e.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:e.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:e.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:e.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:e.CONSTANT_COLOR,[OneMinusConstantColorFactor]:e.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:e.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:e.ONE_MINUS_CONSTANT_ALPHA};function f(t,o,i,a,c,d,u,f,v,y){if(t===NoBlending){r===!0&&(s(e.BLEND),r=!1);return}if(r===!1&&(n(e.BLEND),r=!0),t!==CustomBlending){if(t!==g||y!==C){if((h!==AddEquation||l!==AddEquation)&&(e.blendEquation(e.FUNC_ADD),h=AddEquation,l=AddEquation),y)switch(t){case NormalBlending:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:e.blendFunc(e.ONE,e.ONE);break;case SubtractiveBlending:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case MultiplyBlending:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:error("WebGLState: Invalid blending: ",t);break}else switch(t){case NormalBlending:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case SubtractiveBlending:error("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:error("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:error("WebGLState: Invalid blending: ",t);break}b=null,j=null,_=null,w=null,O.set(0,0,0),m=0,g=t,C=y}return}c=c||o,d=d||i,u=u||a,(o!==h||c!==l)&&(e.blendEquationSeparate(x[o],x[c]),h=o,l=c),(i!==b||a!==j||d!==_||u!==w)&&(e.blendFuncSeparate(p[i],p[a],p[d],p[u]),b=i,j=a,_=d,w=u),(f.equals(O)===!1||v!==m)&&(e.blendColor(f.r,f.g,f.b,v),O.copy(f),m=v),g=t,C=!1}function Q(t,i){t.side===DoubleSide?s(e.CULL_FACE):n(e.CULL_FACE);let r=t.side===BackSide;i&&(r=!r),S(r),t.blending===NormalBlending&&t.transparent===!1?f(NoBlending):f(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),v.setMask(t.colorWrite);const c=t.stencilWrite;a.setTest(c),c&&(a.setMask(t.stencilWriteMask),a.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),a.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),W(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?n(e.SAMPLE_ALPHA_TO_COVERAGE):s(e.SAMPLE_ALPHA_TO_COVERAGE)}function S(t){L!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),L=t)}function $(t){t!==CullFaceNone?(n(e.CULL_FACE),t!==D&&(t===CullFaceBack?e.cullFace(e.BACK):t===CullFaceFront?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):s(e.CULL_FACE),D=t}function ee(t){t!==z&&(T&&e.lineWidth(t),z=t)}function W(t,i,a){t?(n(e.POLYGON_OFFSET_FILL),(H!==i||R!==a)&&(H=i,R=a,o.getReversed()&&(i=-i),e.polygonOffset(i,a))):s(e.POLYGON_OFFSET_FILL)}function ne(t){t?n(e.SCISSOR_TEST):s(e.SCISSOR_TEST)}function se(t){t===0[0]&&(t=e.TEXTURE0+V-1),i!==t&&(e.activeTexture(t),i=t)}function oe(t,n,s){s===0[0]&&(i===null?s=e.TEXTURE0+V-1:s=i);let o=E[s];o===0[0]&&(o={type:0[0],texture:0[0]},E[s]=o),(o.type!==t||o.texture!==n)&&(i!==s&&(e.activeTexture(s),i=s),e.bindTexture(t,n||c[t]),o.type=t,o.texture=n)}function ie(){const t=E[i];t!==0[0]&&t.type!==0[0]&&(e.bindTexture(t.type,null),t.type=0[0],t.texture=0[0])}function ae(){try{e.compressedTexImage2D(...arguments)}catch(e){error("WebGLState:",e)}}function re(){try{e.compressedTexImage3D(...arguments)}catch(e){error("WebGLState:",e)}}function ce(){try{e.texSubImage2D(...arguments)}catch(e){error("WebGLState:",e)}}function le(){try{e.texSubImage3D(...arguments)}catch(e){error("WebGLState:",e)}}function de(){try{e.compressedTexSubImage2D(...arguments)}catch(e){error("WebGLState:",e)}}function ue(){try{e.compressedTexSubImage3D(...arguments)}catch(e){error("WebGLState:",e)}}function he(){try{e.texStorage2D(...arguments)}catch(e){error("WebGLState:",e)}}function me(){try{e.texStorage3D(...arguments)}catch(e){error("WebGLState:",e)}}function fe(){try{e.texImage2D(...arguments)}catch(e){error("WebGLState:",e)}}function pe(){try{e.texImage3D(...arguments)}catch(e){error("WebGLState:",e)}}function ge(t){P.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))}function ve(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function be(t,n){let s=N.get(n);s===0[0]&&(s=new WeakMap,N.set(n,s));let o=s.get(t);o===0[0]&&(o=e.getUniformBlockIndex(n,t.name),s.set(t,o))}function je(t,n){const o=N.get(n),s=o.get(t);B.get(n)!==s&&(e.uniformBlockBinding(n,s,t.__bindingPointIndex),B.set(n,s))}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},i=null,E={},u={},F=new WeakMap,U=[],M=null,r=!1,g=null,h=null,b=null,j=null,l=null,_=null,w=null,O=new Color(0,0,0),m=0,C=!1,L=null,D=null,z=null,H=null,R=null,P.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),v.reset(),o.reset(),a.reset()}return{buffers:{color:v,depth:o,stencil:a},enable:n,disable:s,bindFramebuffer:G,drawBuffers:Y,useProgram:q,setBlending:f,setMaterial:Q,setFlipSided:S,setCullFace:$,setLineWidth:ee,setPolygonOffset:W,setScissorTest:ne,activeTexture:se,bindTexture:oe,unbindTexture:ie,compressedTexImage2D:ae,compressedTexImage3D:re,texImage2D:fe,texImage3D:pe,updateUBOMapping:be,uniformBlockBinding:je,texStorage2D:he,texStorage3D:me,texSubImage2D:ce,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:ue,scissor:ge,viewport:ve,reset:ye}}function WebGLTextures(e,t,n,s,o,i,a){const g=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,T=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),l=new Vector2,C=new WeakMap;let y;const f=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(e,t){return D?new OffscreenCanvas(e,t):createElementNS("canvas")}function R(e,t,n){let o=1;const s=v(e);if((s.width>n||s.height>n)&&(o=n/Math.max(s.width,s.height)),o<1){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap||typeof VideoFrame!="undefined"&&e instanceof VideoFrame){const n=Math.floor(o*s.width),i=Math.floor(o*s.height);y===0[0]&&(y=N(n,i));const a=t?N(n,i):y;a.width=n,a.height=i;const r=a.getContext("2d");return r.drawImage(e,0,0,n,i),warn("WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+n+"x"+i+")."),a}return"data"in e&&warn("WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+")."),e}return e}function u(e){return e.generateMipmaps}function m(t){e.generateMipmap(t)}function $(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function p(n,s,o,i,a=!1){if(n!==null){if(e[n]!==0[0])return e[n];warn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let r=s;if(s===e.RED&&(o===e.FLOAT&&(r=e.R32F),o===e.HALF_FLOAT&&(r=e.R16F),o===e.UNSIGNED_BYTE&&(r=e.R8)),s===e.RED_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.R8UI),o===e.UNSIGNED_SHORT&&(r=e.R16UI),o===e.UNSIGNED_INT&&(r=e.R32UI),o===e.BYTE&&(r=e.R8I),o===e.SHORT&&(r=e.R16I),o===e.INT&&(r=e.R32I)),s===e.RG&&(o===e.FLOAT&&(r=e.RG32F),o===e.HALF_FLOAT&&(r=e.RG16F),o===e.UNSIGNED_BYTE&&(r=e.RG8)),s===e.RG_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RG8UI),o===e.UNSIGNED_SHORT&&(r=e.RG16UI),o===e.UNSIGNED_INT&&(r=e.RG32UI),o===e.BYTE&&(r=e.RG8I),o===e.SHORT&&(r=e.RG16I),o===e.INT&&(r=e.RG32I)),s===e.RGB_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RGB8UI),o===e.UNSIGNED_SHORT&&(r=e.RGB16UI),o===e.UNSIGNED_INT&&(r=e.RGB32UI),o===e.BYTE&&(r=e.RGB8I),o===e.SHORT&&(r=e.RGB16I),o===e.INT&&(r=e.RGB32I)),s===e.RGBA_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RGBA8UI),o===e.UNSIGNED_SHORT&&(r=e.RGBA16UI),o===e.UNSIGNED_INT&&(r=e.RGBA32UI),o===e.BYTE&&(r=e.RGBA8I),o===e.SHORT&&(r=e.RGBA16I),o===e.INT&&(r=e.RGBA32I)),s===e.RGB&&(o===e.UNSIGNED_INT_5_9_9_9_REV&&(r=e.RGB9_E5),o===e.UNSIGNED_INT_10F_11F_11F_REV&&(r=e.R11F_G11F_B10F)),s===e.RGBA){const t=a?LinearTransfer:ColorManagement.getTransfer(i);o===e.FLOAT&&(r=e.RGBA32F),o===e.HALF_FLOAT&&(r=e.RGBA16F),o===e.UNSIGNED_BYTE&&(r=t===SRGBTransfer?e.SRGB8_ALPHA8:e.RGBA8),o===e.UNSIGNED_SHORT_4_4_4_4&&(r=e.RGBA4),o===e.UNSIGNED_SHORT_5_5_5_1&&(r=e.RGB5_A1)}return(r===e.R16F||r===e.R32F||r===e.RG16F||r===e.RG32F||r===e.RGBA16F||r===e.RGBA32F)&&t.get("EXT_color_buffer_float"),r}function M(t,n){let s;return t?n===null||n===UnsignedIntType||n===UnsignedInt248Type?s=e.DEPTH24_STENCIL8:n===FloatType?s=e.DEPTH32F_STENCIL8:n===UnsignedShortType&&(s=e.DEPTH24_STENCIL8,warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):n===null||n===UnsignedIntType||n===UnsignedInt248Type?s=e.DEPTH_COMPONENT24:n===FloatType?s=e.DEPTH_COMPONENT32F:n===UnsignedShortType&&(s=e.DEPTH_COMPONENT16),s}function I(e,t){return u(e)===!0||e.isFramebufferTexture&&e.minFilter!==NearestFilter&&e.minFilter!==LinearFilter?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==0[0]&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){const t=e.target;t.removeEventListener("dispose",w),U(t),t.isVideoTexture&&C.delete(t)}function B(e){const t=e.target;t.removeEventListener("dispose",B),W(t)}function U(e){const n=s.get(e);if(n.__webglInit===0[0])return;const o=e.source,t=f.get(o);if(t){const s=t[n.__cacheKey];s.usedTimes--,s.usedTimes===0&&F(e),Object.keys(t).length===0&&f.delete(o)}s.remove(e)}function F(t){const n=s.get(t);e.deleteTexture(n.__webglTexture);const o=t.source,i=f.get(o);delete i[n.__cacheKey],a.memory.textures--}function W(t){const n=s.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),s.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let s=0;s<n.__webglFramebuffer[t].length;s++)e.deleteFramebuffer(n.__webglFramebuffer[t][s]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}const o=t.textures;for(let t=0,i=o.length;t<i;t++){const n=s.get(o[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),a.memory.textures--),s.remove(o[t])}s.remove(t)}let k=0;function q(){k=0}function V(){const e=k;return e>=o.maxTextures&&warn("WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+o.maxTextures),k+=1,e}function ee(e){const t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,o){const i=s.get(t);if(t.isVideoTexture&&ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){const e=t.image;if(e===null)warn("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)warn("WebGLRenderer: Texture marked for update but image is incomplete");else{E(i,t,o);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+o)}function oe(t,o){const i=s.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){E(i,t,o);return}t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+o)}function se(t,o){const i=s.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){E(i,t,o);return}n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+o)}function te(t,o){const i=s.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&i.__version!==t.version){Q(i,t,o);return}n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+o)}const S={[RepeatWrapping]:e.REPEAT,[ClampToEdgeWrapping]:e.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:e.MIRRORED_REPEAT},L={[NearestFilter]:e.NEAREST,[NearestMipmapNearestFilter]:e.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:e.NEAREST_MIPMAP_LINEAR,[LinearFilter]:e.LINEAR,[LinearMipmapNearestFilter]:e.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:e.LINEAR_MIPMAP_LINEAR},Z={[NeverCompare]:e.NEVER,[AlwaysCompare]:e.ALWAYS,[LessCompare]:e.LESS,[LessEqualCompare]:e.LEQUAL,[EqualCompare]:e.EQUAL,[GreaterEqualCompare]:e.GEQUAL,[GreaterCompare]:e.GREATER,[NotEqualCompare]:e.NOTEQUAL};function h(n,i){if(i.type===FloatType&&t.has("OES_texture_float_linear")===!1&&(i.magFilter===LinearFilter||i.magFilter===LinearMipmapNearestFilter||i.magFilter===NearestMipmapLinearFilter||i.magFilter===LinearMipmapLinearFilter||i.minFilter===LinearFilter||i.minFilter===LinearMipmapNearestFilter||i.minFilter===NearestMipmapLinearFilter||i.minFilter===LinearMipmapLinearFilter)&&warn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(n,e.TEXTURE_WRAP_S,S[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,S[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,S[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,L[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,L[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Z[i.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(i.magFilter===NearestFilter)return;if(i.minFilter!==NearestMipmapLinearFilter&&i.minFilter!==LinearMipmapLinearFilter)return;if(i.type===FloatType&&t.has("OES_texture_float_linear")===!1)return;if(i.anisotropy>1||s.get(i).__currentAnisotropy){const a=t.get("EXT_texture_filter_anisotropic");e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,o.getMaxAnisotropy())),s.get(i).__currentAnisotropy=i.anisotropy}}}function H(t,n){let i=!1;t.__webglInit===0[0]&&(t.__webglInit=!0,n.addEventListener("dispose",w));const r=n.source;let s=f.get(r);s===0[0]&&(s={},f.set(r,s));const o=ee(n);if(o!==t.__cacheKey){s[o]===0[0]&&(s[o]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++;const r=s[t.__cacheKey];r!==0[0]&&(s[t.__cacheKey].usedTimes--,r.usedTimes===0&&F(n)),t.__cacheKey=o,t.__webglTexture=s[o].texture}return i}function A(e,t,n){return Math.floor(Math.floor(e/n)/t)}function K(t,s,o,i){const r=4,a=t.updateRanges;if(a.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,o,i,s.data);else{a.sort((e,t)=>e.start-t.start);let c=0;for(let n=1;n<a.length;n++){const t=a[c],e=a[n],i=t.start+t.count,o=A(e.start,s.width,r),l=A(t.start,s.width,r);e.start<=i+1&&o===l&&A(e.start+e.count-1,s.width,r)===o?t.count=Math.max(t.count,e.start+e.count-t.start):(++c,a[c]=e)}a.length=c+1;const l=e.getParameter(e.UNPACK_ROW_LENGTH),d=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let t=0,h=a.length;t<h;t++){const c=a[t],l=Math.floor(c.start/r),m=Math.ceil(c.count/r),d=l%s.width,u=Math.floor(l/s.width),f=m,p=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,d),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),n.texSubImage2D(e.TEXTURE_2D,0,d,u,f,p,o,i,s.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,l),e.pixelStorei(e.UNPACK_SKIP_PIXELS,d),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function E(t,a,r){let c=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(c=e.TEXTURE_3D);const f=H(t,a),l=a.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+r);const d=s.get(l);if(l.version!==d.__version||f===!0){n.activeTexture(e.TEXTURE0+r);const E=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),k=a.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(a.colorSpace),C=a.colorSpace===NoColorSpace||E===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let t=R(a.image,!1,o.maxTextureSize);t=z(a,t);const g=i.convert(a.format,a.colorSpace),j=i.convert(a.type);let b=p(a.internalFormat,g,j,a.colorSpace,a.isVideoTexture);h(c,a);let s;const y=a.mipmaps,_=a.isVideoTexture!==!0,w=d.__version===0[0]||f===!0,O=l.dataReady,x=I(a,t);if(a.isDepthTexture)b=M(a.format===DepthStencilFormat,a.type),w&&(_?n.texStorage2D(e.TEXTURE_2D,1,b,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,b,t.width,t.height,0,g,j,null));else if(a.isDataTexture)if(y.length>0){_&&w&&n.texStorage2D(e.TEXTURE_2D,x,b,y[0].width,y[0].height);for(let t=0,o=y.length;t<o;t++)s=y[t],_?O&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,j,s.data):n.texImage2D(e.TEXTURE_2D,t,b,s.width,s.height,0,g,j,s.data);a.generateMipmaps=!1}else _?(w&&n.texStorage2D(e.TEXTURE_2D,x,b,t.width,t.height),O&&K(a,t,g,j)):n.texImage2D(e.TEXTURE_2D,0,b,t.width,t.height,0,g,j,t.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){_&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,b,y[0].width,y[0].height,t.depth);for(let o=0,i=y.length;o<i;o++)if(s=y[o],a.format!==RGBAFormat)if(g!==null)if(_){if(O)if(a.layerUpdates.size>0){const t=getByteLength(s.width,s.height,a.format,a.type);for(const i of a.layerUpdates){const r=s.data.subarray(i*t/s.data.BYTES_PER_ELEMENT,(i+1)*t/s.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,i,s.width,s.height,1,g,r)}a.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,g,s.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,o,b,s.width,s.height,t.depth,0,s.data,0,0);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,g,j,s.data):n.texImage3D(e.TEXTURE_2D_ARRAY,o,b,s.width,s.height,t.depth,0,g,j,s.data)}else{_&&w&&n.texStorage2D(e.TEXTURE_2D,x,b,y[0].width,y[0].height);for(let t=0,o=y.length;t<o;t++)s=y[t],a.format!==RGBAFormat?g!==null?_?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,s.data):n.compressedTexImage2D(e.TEXTURE_2D,t,b,s.width,s.height,0,s.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?O&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,j,s.data):n.texImage2D(e.TEXTURE_2D,t,b,s.width,s.height,0,g,j,s.data)}else if(a.isDataArrayTexture)if(_){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,b,t.width,t.height,t.depth),O)if(a.layerUpdates.size>0){const s=getByteLength(t.width,t.height,a.format,a.type);for(const o of a.layerUpdates){const i=t.data.subarray(o*s/t.data.BYTES_PER_ELEMENT,(o+1)*s/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,g,j,i)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,g,j,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,b,t.width,t.height,t.depth,0,g,j,t.data);else if(a.isData3DTexture)_?(w&&n.texStorage3D(e.TEXTURE_3D,x,b,t.width,t.height,t.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,g,j,t.data)):n.texImage3D(e.TEXTURE_3D,0,b,t.width,t.height,t.depth,0,g,j,t.data);else if(a.isFramebufferTexture){if(w)if(_)n.texStorage2D(e.TEXTURE_2D,x,b,t.width,t.height);else{let{width:s,height:o}=t;for(let t=0;t<x;t++)n.texImage2D(e.TEXTURE_2D,t,b,s,o,0,g,j,null),s>>=1,o>>=1}}else if(y.length>0){if(_&&w){const t=v(y[0]);n.texStorage2D(e.TEXTURE_2D,x,b,t.width,t.height)}for(let t=0,o=y.length;t<o;t++)s=y[t],_?O&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g,j,s):n.texImage2D(e.TEXTURE_2D,t,b,g,j,s);a.generateMipmaps=!1}else if(_){if(w){const s=v(t);n.texStorage2D(e.TEXTURE_2D,x,b,s.width,s.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,g,j,t)}else n.texImage2D(e.TEXTURE_2D,0,b,g,j,t);u(a)&&m(c),d.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function Q(t,a,r){if(a.image.length!==6)return;const d=H(t,a),c=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);const l=s.get(c);if(c.version!==l.__version||d===!0){n.activeTexture(e.TEXTURE0+r);const E=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),A=a.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(a.colorSpace),k=a.colorSpace===NoColorSpace||E===A?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const x=a.isCompressedTexture||a.image[0].isCompressedTexture,w=a.image[0]&&a.image[0].isDataTexture,t=[];for(let e=0;e<6;e++)!x&&!w?t[e]=R(a.image[e],!0,o.maxCubemapSize):t[e]=w?a.image[e].image:a.image[e],t[e]=z(a,t[e]);const _=t[0],s=i.convert(a.format,a.colorSpace),f=i.convert(a.type),j=p(a.internalFormat,s,f,a.colorSpace),b=a.isVideoTexture!==!0,C=l.__version===0[0]||d===!0,y=c.dataReady;let O=I(a,_);h(e.TEXTURE_CUBE_MAP,a);let g;if(x){b&&C&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,j,_.width,_.height);for(let o=0;o<6;o++){g=t[o].mipmaps;for(let i=0;i<g.length;i++){const t=g[i];a.format!==RGBAFormat?s!==null?b?y&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,0,0,t.width,t.height,s,t.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,j,t.width,t.height,0,t.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,0,0,t.width,t.height,s,f,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,j,t.width,t.height,0,s,f,t.data)}}}else{if(g=a.mipmaps,b&&C){g.length>0&&O++;const s=v(t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,j,s.width,s.height)}for(let o=0;o<6;o++)if(w){b?y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,t[o].width,t[o].height,s,f,t[o].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,t[o].width,t[o].height,0,s,f,t[o].data);for(let i=0;i<g.length;i++){const a=g[i],t=a.image[o].image;b?y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,0,0,t.width,t.height,s,f,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,j,t.width,t.height,0,s,f,t.data)}}else{b?y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,s,f,t[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,s,f,t[o]);for(let t=0;t<g.length;t++){const i=g[t];b?y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,0,0,s,f,i.image[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,j,s,f,i.image[o])}}}u(a)&&m(e.TEXTURE_CUBE_MAP),l.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function d(t,o,a,l,d,u){const h=i.convert(a.format,a.colorSpace),m=i.convert(a.type),v=p(a.internalFormat,h,m,a.colorSpace),b=s.get(o),f=s.get(a);if(f.__renderTarget=o,!b.__hasExternalTextures){const t=Math.max(1,o.width>>u),s=Math.max(1,o.height>>u);d===e.TEXTURE_3D||d===e.TEXTURE_2D_ARRAY?n.texImage3D(d,u,v,t,s,o.depth,0,h,m,null):n.texImage2D(d,u,v,t,s,0,h,m,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),r(o)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,d,f.__webglTexture,0,c(o)):(d===e.TEXTURE_2D||d>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&d<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,l,d,f.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function x(t,n,s){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){const o=n.depthTexture,a=o&&o.isDepthTexture?o.type:null,i=M(n.stencilBuffer,a),l=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;r(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c(n),i,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,c(n),i,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,l,e.RENDERBUFFER,t)}else{const t=n.textures;for(let a=0;a<t.length;a++){const o=t[a],d=i.convert(o.format,o.colorSpace),u=i.convert(o.type),l=p(o.internalFormat,d,u,o.colorSpace);r(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c(n),l,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,c(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function O(t,o,a){const f=o.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const l=s.get(o.depthTexture);if(l.__renderTarget=o,(!l.__webglTexture||o.depthTexture.image.width!==o.width||o.depthTexture.image.height!==o.height)&&(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),f){if(l.__webglInit===0[0]&&(l.__webglInit=!0,o.depthTexture.addEventListener("dispose",w)),l.__webglTexture===0[0]){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),h(e.TEXTURE_CUBE_MAP,o.depthTexture);const s=i.convert(o.depthTexture.format),a=i.convert(o.depthTexture.type);let t;o.depthTexture.format===DepthFormat?t=e.DEPTH_COMPONENT24:o.depthTexture.format===DepthStencilFormat&&(t=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t,o.width,o.height,0,s,a,null)}}else P(o.depthTexture,0);const d=l.__webglTexture,p=c(o),u=f?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,m=o.depthTexture.format===DepthStencilFormat?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(o.depthTexture.format===DepthFormat)r(o)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,m,u,d,0,p):e.framebufferTexture2D(e.FRAMEBUFFER,m,u,d,0);else if(o.depthTexture.format===DepthStencilFormat)r(o)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,m,u,d,0,p):e.framebufferTexture2D(e.FRAMEBUFFER,m,u,d,0);else throw new Error("Unknown depthTexture format")}function j(t){const o=s.get(t),i=t.isWebGLCubeRenderTarget===!0;if(o.__boundDepthTexture!==t.depthTexture){const e=t.depthTexture;if(o.__depthDisposeCallback&&o.__depthDisposeCallback(),e){const t=()=>{delete o.__boundDepthTexture,delete o.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),o.__depthDisposeCallback=t}o.__boundDepthTexture=e}if(t.depthTexture&&!o.__autoAllocateDepthBuffer)if(i)for(let e=0;e<6;e++)O(o.__webglFramebuffer[e],t,e);else{const e=t.texture.mipmaps;e&&e.length>0?O(o.__webglFramebuffer[0],t,0):O(o.__webglFramebuffer,t,0)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[s]),o.__webglDepthbuffer[s]===0[0])o.__webglDepthbuffer[s]=e.createRenderbuffer(),x(o.__webglDepthbuffer[s],t,!1);else{const i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer[s];e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,n)}}else{const s=t.texture.mipmaps;if(s&&s.length>0?n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),o.__webglDepthbuffer===0[0])o.__webglDepthbuffer=e.createRenderbuffer(),x(o.__webglDepthbuffer,t,!1);else{const s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,n)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Y(t,n,o){const i=s.get(t);n!==0[0]&&d(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),o!==0[0]&&j(t)}function G(t){const o=t.texture,l=s.get(t),g=s.get(o);t.addEventListener("dispose",B);const f=t.textures,b=t.isWebGLCubeRenderTarget===!0,v=f.length>1;if(v||(g.__webglTexture===0[0]&&(g.__webglTexture=e.createTexture()),g.__version=o.version,a.memory.textures++),b){l.__webglFramebuffer=[];for(let t=0;t<6;t++)if(o.mipmaps&&o.mipmaps.length>0){l.__webglFramebuffer[t]=[];for(let n=0;n<o.mipmaps.length;n++)l.__webglFramebuffer[t][n]=e.createFramebuffer()}else l.__webglFramebuffer[t]=e.createFramebuffer()}else{if(o.mipmaps&&o.mipmaps.length>0){l.__webglFramebuffer=[];for(let t=0;t<o.mipmaps.length;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else l.__webglFramebuffer=e.createFramebuffer();if(v)for(let t=0,o=f.length;t<o;t++){const n=s.get(f[t]);n.__webglTexture===0[0]&&(n.__webglTexture=e.createTexture(),a.memory.textures++)}if(t.samples>0&&r(t)===!1){l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer);for(let n=0;n<f.length;n++){const s=f[n];l.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);const o=i.convert(s.format,s.colorSpace),a=i.convert(s.type),r=p(s.internalFormat,o,a,s.colorSpace,t.isXRRenderTarget===!0),d=c(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,d,r,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,l.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),x(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(b){n.bindTexture(e.TEXTURE_CUBE_MAP,g.__webglTexture),h(e.TEXTURE_CUBE_MAP,o);for(let n=0;n<6;n++)if(o.mipmaps&&o.mipmaps.length>0)for(let s=0;s<o.mipmaps.length;s++)d(l.__webglFramebuffer[n][s],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,s);else d(l.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);u(o)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(v){for(let i=0,r=f.length;i<r;i++){const a=f[i],c=s.get(a);let o=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,c.__webglTexture),h(o,a),d(l.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,o,0),u(a)&&m(o)}n.unbindTexture()}else{let s=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(s,g.__webglTexture),h(s,o),o.mipmaps&&o.mipmaps.length>0)for(let n=0;n<o.mipmaps.length;n++)d(l.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,s,n);else d(l.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0,s,0);u(o)&&m(s),n.unbindTexture()}t.depthBuffer&&j(t)}function X(e){const t=e.textures;for(let o=0,a=t.length;o<a;o++){const i=t[o];if(u(i)){const t=$(e),o=s.get(i).__webglTexture;n.bindTexture(t,o),m(t),n.unbindTexture()}}}const b=[],_=[];function J(t){if(t.samples>0)if(r(t)===!1){const i=t.textures,c=t.width,l=t.height;let a=e.COLOR_BUFFER_BIT;const d=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=s.get(t),r=i.length>1;if(r)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);const u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),r){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);const t=s.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,c,l,0,0,c,l,a,e.NEAREST),T===!0&&(b.length=0,_.length=0,b.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(b.push(d),_.push(d),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),r)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,o.__webglColorRenderbuffer[t]);const a=s.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&T){const n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}function c(e){return Math.min(o.maxSamples,e.samples)}function r(e){const n=s.get(e);return e.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&n.__useRenderToTexture!==!1}function ne(e){const t=a.render.frame;C.get(e)!==t&&(C.set(e,t),e.update())}function z(e,t){const n=e.colorSpace,s=e.format,o=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0?t:(n!==LinearSRGBColorSpace&&n!==NoColorSpace&&(ColorManagement.getTransfer(n)===SRGBTransfer?(s!==RGBAFormat||o!==UnsignedByteType)&&warn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):error("WebGLTextures: Unsupported texture color space:",n)),t)}function v(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=P,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=te,this.rebindTextures=Y,this.setupRenderTarget=G,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=d,this.useMultisampledRTT=r,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WebGLUtils(e,t){function n(n,s=NoColorSpace){let o;const i=ColorManagement.getTransfer(s);if(n===UnsignedByteType)return e.UNSIGNED_BYTE;if(n===UnsignedShort4444Type)return e.UNSIGNED_SHORT_4_4_4_4;if(n===UnsignedShort5551Type)return e.UNSIGNED_SHORT_5_5_5_1;if(n===UnsignedInt5999Type)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===UnsignedInt101111Type)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===ByteType)return e.BYTE;if(n===ShortType)return e.SHORT;if(n===UnsignedShortType)return e.UNSIGNED_SHORT;if(n===IntType)return e.INT;if(n===UnsignedIntType)return e.UNSIGNED_INT;if(n===FloatType)return e.FLOAT;if(n===HalfFloatType)return e.HALF_FLOAT;if(n===AlphaFormat)return e.ALPHA;if(n===RGBFormat)return e.RGB;if(n===RGBAFormat)return e.RGBA;if(n===DepthFormat)return e.DEPTH_COMPONENT;if(n===DepthStencilFormat)return e.DEPTH_STENCIL;if(n===RedFormat)return e.RED;if(n===RedIntegerFormat)return e.RED_INTEGER;if(n===RGFormat)return e.RG;if(n===RGIntegerFormat)return e.RG_INTEGER;if(n===RGBAIntegerFormat)return e.RGBA_INTEGER;if(n===RGB_S3TC_DXT1_Format||n===RGBA_S3TC_DXT1_Format||n===RGBA_S3TC_DXT3_Format||n===RGBA_S3TC_DXT5_Format)if(i===SRGBTransfer)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){{if(n===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){{if(n===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}}else return null;if(n===RGB_PVRTC_4BPPV1_Format||n===RGB_PVRTC_2BPPV1_Format||n===RGBA_PVRTC_4BPPV1_Format||n===RGBA_PVRTC_2BPPV1_Format)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){{if(n===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}}else return null;if(n===RGB_ETC1_Format||n===RGB_ETC2_Format||n===RGBA_ETC2_EAC_Format||n===R11_EAC_Format||n===SIGNED_R11_EAC_Format||n===RG11_EAC_Format||n===SIGNED_RG11_EAC_Format)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){{if(n===RGB_ETC1_Format||n===RGB_ETC2_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===RGBA_ETC2_EAC_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===R11_EAC_Format)return o.COMPRESSED_R11_EAC;if(n===SIGNED_R11_EAC_Format)return o.COMPRESSED_SIGNED_R11_EAC;if(n===RG11_EAC_Format)return o.COMPRESSED_RG11_EAC;if(n===SIGNED_RG11_EAC_Format)return o.COMPRESSED_SIGNED_RG11_EAC}}else return null;if(n===RGBA_ASTC_4x4_Format||n===RGBA_ASTC_5x4_Format||n===RGBA_ASTC_5x5_Format||n===RGBA_ASTC_6x5_Format||n===RGBA_ASTC_6x6_Format||n===RGBA_ASTC_8x5_Format||n===RGBA_ASTC_8x6_Format||n===RGBA_ASTC_8x8_Format||n===RGBA_ASTC_10x5_Format||n===RGBA_ASTC_10x6_Format||n===RGBA_ASTC_10x8_Format||n===RGBA_ASTC_10x10_Format||n===RGBA_ASTC_12x10_Format||n===RGBA_ASTC_12x12_Format)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){{if(n===RGBA_ASTC_4x4_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===RGBA_ASTC_5x4_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===RGBA_ASTC_5x5_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===RGBA_ASTC_6x5_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===RGBA_ASTC_6x6_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===RGBA_ASTC_8x5_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===RGBA_ASTC_8x6_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===RGBA_ASTC_8x8_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===RGBA_ASTC_10x5_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===RGBA_ASTC_10x6_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===RGBA_ASTC_10x8_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===RGBA_ASTC_10x10_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===RGBA_ASTC_12x10_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===RGBA_ASTC_12x12_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}}else return null;if(n===RGBA_BPTC_Format||n===RGB_BPTC_SIGNED_Format||n===RGB_BPTC_UNSIGNED_Format)if(o=t.get("EXT_texture_compression_bptc"),o!==null){{if(n===RGBA_BPTC_Format)return i===SRGBTransfer?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===RGB_BPTC_SIGNED_Format)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===RGB_BPTC_UNSIGNED_Format)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}}else return null;if(n===RED_RGTC1_Format||n===SIGNED_RED_RGTC1_Format||n===RED_GREEN_RGTC2_Format||n===SIGNED_RED_GREEN_RGTC2_Format)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){{if(n===RED_RGTC1_Format)return o.COMPRESSED_RED_RGTC1_EXT;if(n===SIGNED_RED_RGTC1_Format)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===RED_GREEN_RGTC2_Format)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===SIGNED_RED_GREEN_RGTC2_Format)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}}else return null;return n===UnsignedInt248Type?e.UNSIGNED_INT_24_8:e[n]!==0[0]?e[n]:null}return{convert:n}}_occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ExternalTexture(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const h=this;let n=null,k=1,v=null,R="local-floor",x=1,p=null,E=null,l=null,i=null,o=null,w=null;const j=typeof XRWebGLBinding!="undefined",u=new WebXRDepthSensing,b={},c=t.getContextAttributes();let L=null,m=null;const a=[],d=[],O=new Vector2;let S=null;const f=new PerspectiveCamera;f.viewport=new Vector4;const g=new PerspectiveCamera;g.viewport=new Vector4;const M=[f,g],s=new ArrayCamera;let A=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=a[e];return t===0[0]&&(t=new WebXRController,a[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=a[e];return t===0[0]&&(t=new WebXRController,a[e]=t),t.getGripSpace()},this.getHand=function(e){let t=a[e];return t===0[0]&&(t=new WebXRController,a[e]=t),t.getHandSpace()};function r(e){const n=d.indexOf(e.inputSource);if(n===-1)return;const t=a[n];t!==0[0]&&(t.update(e.inputSource,e.frame,p||v),t.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){n.removeEventListener("select",r),n.removeEventListener("selectstart",r),n.removeEventListener("selectend",r),n.removeEventListener("squeeze",r),n.removeEventListener("squeezestart",r),n.removeEventListener("squeezeend",r),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",T);for(let e=0;e<a.length;e++){const t=d[e];if(t===null)continue;d[e]=null,a[e].disconnect(t)}A=null,C=null,u.reset();for(const e in b)delete b[e];e.setRenderTarget(L),o=null,i=null,l=null,n=null,m=null,y.stop(),h.isPresenting=!1,e.setPixelRatio(S),e.setSize(O.width,O.height,!1),h.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){k=e,h.isPresenting===!0&&warn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){R=e,h.isPresenting===!0&&warn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||v},this.setReferenceSpace=function(e){p=e},this.getBaseLayer=function(){return i!==null?i:o},this.getBinding=function(){return l===null&&j&&(l=new XRWebGLBinding(n,t)),l},this.getFrame=function(){return w},this.getSession=function(){return n},this.setSession=async function(s){if(n=s,n!==null){L=e.getRenderTarget(),n.addEventListener("select",r),n.addEventListener("selectstart",r),n.addEventListener("selectend",r),n.addEventListener("squeeze",r),n.addEventListener("squeezestart",r),n.addEventListener("squeezeend",r),n.addEventListener("end",F),n.addEventListener("inputsourceschange",T),c.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(O);const s=j&&"createProjectionLayer"in XRWebGLBinding.prototype;if(s){let s=null,o=null,a=null;c.depth&&(a=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,s=c.stencil?DepthStencilFormat:DepthFormat,o=c.stencil?UnsignedInt248Type:UnsignedIntType);const r={colorFormat:t.RGBA8,depthFormat:a,scaleFactor:k};l=this.getBinding(),i=l.createProjectionLayer(r),n.updateRenderState({layers:[i]}),e.setPixelRatio(1),e.setSize(i.textureWidth,i.textureHeight,!1),m=new WebGLRenderTarget(i.textureWidth,i.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(i.textureWidth,i.textureHeight,o,0[0],0[0],0[0],0[0],0[0],0[0],s),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:i.ignoreDepthValues===!1,resolveStencilBuffer:i.ignoreDepthValues===!1})}else{const s={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:k};o=new XRWebGLLayer(n,t,s),n.updateRenderState({baseLayer:o}),e.setPixelRatio(1),e.setSize(o.framebufferWidth,o.framebufferHeight,!1),m=new WebGLRenderTarget(o.framebufferWidth,o.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil,resolveDepthBuffer:o.ignoreDepthValues===!1,resolveStencilBuffer:o.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(x),p=null,v=await n.requestReferenceSpace(R),y.setContext(n),y.start(),h.isPresenting=!0,h.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function T(e){for(let t=0;t<e.removed.length;t++){const s=e.removed[t],n=d.indexOf(s);n>=0&&(d[n]=null,a[n].disconnect(s))}for(let s=0;s<e.added.length;s++){const n=e.added[s];let t=d.indexOf(n);if(t===-1){for(let e=0;e<a.length;e++){if(e>=d.length){d.push(n),t=e;break}if(d[e]===null){d[e]=n,t=e;break}}if(t===-1)break}const o=a[t];o&&o.connect(n)}}const z=new Vector3,D=new Vector3;function P(e,t,n){z.setFromMatrixPosition(t.matrixWorld),D.setFromMatrixPosition(n.matrixWorld);const d=z.distanceTo(D),s=t.projectionMatrix.elements,l=n.projectionMatrix.elements,i=s[14]/(s[10]-1),a=s[14]/(s[10]+1),p=(s[9]+1)/s[5],h=(s[9]-1)/s[5],c=(s[8]-1)/s[0],u=(l[8]+1)/l[0],f=i*c,m=i*u,o=d/(-c+u),r=o*-c;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(r),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),s[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{const t=i+o,n=a+o,s=f-r,c=m+(d-r),l=p*a/n*t,u=h*a/n*t;e.projectionMatrix.makePerspective(s,c,l,u,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(n===null)return;let i=e.near,a=e.far;u.texture!==null&&(u.depthNear>0&&(i=u.depthNear),u.depthFar>0&&(a=u.depthFar)),s.near=g.near=f.near=i,s.far=g.far=f.far=a,(A!==s.near||C!==s.far)&&(n.updateRenderState({depthNear:s.near,depthFar:s.far}),A=s.near,C=s.far),s.layers.mask=e.layers.mask|6,f.layers.mask=s.layers.mask&-5,g.layers.mask=s.layers.mask&-3;const t=e.parent,o=s.cameras;N(s,t);for(let e=0;e<o.length;e++)N(o[e],t);o.length===2?P(s,f,g):s.projectionMatrix.copy(f.projectionMatrix),H(e,s,t)};function H(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=RAD2DEG*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return s},this.getFoveation=function(){if(i===null&&o===null)return;return x},this.setFoveation=function(e){x=e,i!==null&&(i.fixedFoveation=e),o!==null&&o.fixedFoveation!==0[0]&&(o.fixedFoveation=e)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(s)},this.getCameraTexture=function(e){return b[e]};let _=null;function I(t,r){if(E=r.getViewerPose(p||v),w=r,E!==null){const t=E.views;o!==null&&(e.setRenderTargetFramebuffer(m,o.framebuffer),e.setRenderTarget(m));let r=!1;t.length!==s.cameras.length&&(s.cameras.length=0,r=!0);for(let a=0;a<t.length;a++){const d=t[a];let c=null;if(o!==null)c=o.getViewport(d);else{const t=l.getViewSubImage(i,d);c=t.viewport,a===0&&(e.setRenderTargetTextures(m,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(m))}let n=M[a];n===0[0]&&(n=new PerspectiveCamera,n.layers.enable(a),n.viewport=new Vector4,M[a]=n),n.matrix.fromArray(d.transform.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale),n.projectionMatrix.fromArray(d.projectionMatrix),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),n.viewport.set(c.x,c.y,c.width,c.height),a===0&&(s.matrix.copy(n.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale)),r===!0&&s.cameras.push(n)}const a=n.enabledFeatures,c=a&&a.includes("depth-sensing")&&n.depthUsage=="gpu-optimized";if(c&&j){l=h.getBinding();const e=l.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&u.init(e,n.renderState)}const d=a&&a.includes("camera-access");if(d&&j){e.state.unbindTexture(),l=h.getBinding();for(let n=0;n<t.length;n++){const e=t[n].camera;if(e){let t=b[e];t||(t=new ExternalTexture,b[e]=t);const n=l.getCameraImage(e);t.sourceTexture=n}}}}for(let e=0;e<a.length;e++){const t=d[e],n=a[e];t!==null&&n!==0[0]&&n.update(t,r,p||v)}_&&_(t,r),r.detectedPlanes&&h.dispatchEvent({type:"planesdetected",data:r}),w=null}const y=new WebGLAnimation;y.setAnimationLoop(I),this.setAnimationLoop=function(e){_=e},this.dispose=function(){}}}_e1=new Euler,_m12=new Matrix4;function WebGLMaterials(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function c(t,n){n.color.getRGB(t.fogColor.value,getUnlitUniformColorSpace(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,i,c){t.isMeshBasicMaterial?s(e,t):t.isMeshLambertMaterial?(s(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(s(e,t),u(e,t)):t.isMeshPhongMaterial?(s(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(s(e,t),h(e,t),t.isMeshPhysicalMaterial&&m(e,t,c)):t.isMeshMatcapMaterial?(s(e,t),f(e,t)):t.isMeshDepthMaterial?s(e,t):t.isMeshDistanceMaterial?(s(e,t),p(e,t)):t.isMeshNormalMaterial?s(e,t):t.isLineBasicMaterial?(a(e,t),t.isLineDashedMaterial&&r(e,t)):t.isPointsMaterial?o(e,t,n,i):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function s(e,s){e.opacity.value=s.opacity,s.color&&e.diffuse.value.copy(s.color),s.emissive&&e.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(e.map.value=s.map,n(s.map,e.mapTransform)),s.alphaMap&&(e.alphaMap.value=s.alphaMap,n(s.alphaMap,e.alphaMapTransform)),s.bumpMap&&(e.bumpMap.value=s.bumpMap,n(s.bumpMap,e.bumpMapTransform),e.bumpScale.value=s.bumpScale,s.side===BackSide&&(e.bumpScale.value*=-1)),s.normalMap&&(e.normalMap.value=s.normalMap,n(s.normalMap,e.normalMapTransform),e.normalScale.value.copy(s.normalScale),s.side===BackSide&&e.normalScale.value.negate()),s.displacementMap&&(e.displacementMap.value=s.displacementMap,n(s.displacementMap,e.displacementMapTransform),e.displacementScale.value=s.displacementScale,e.displacementBias.value=s.displacementBias),s.emissiveMap&&(e.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,e.emissiveMapTransform)),s.specularMap&&(e.specularMap.value=s.specularMap,n(s.specularMap,e.specularMapTransform)),s.alphaTest>0&&(e.alphaTest.value=s.alphaTest);const i=t.get(s),o=i.envMap,a=i.envMapRotation;o&&(e.envMap.value=o,_e1.copy(a),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),e.envMapRotation.value.setFromMatrix4(_m12.makeRotationFromEuler(_e1)),e.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=s.reflectivity,e.ior.value=s.ior,e.refractionRatio.value=s.refractionRatio),s.lightMap&&(e.lightMap.value=s.lightMap,e.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,e.lightMapTransform)),s.aoMap&&(e.aoMap.value=s.aoMap,e.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,e.aoMapTransform))}function a(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function r(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function o(e,t,s,o){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*s,e.scale.value=o*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function u(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function h(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,s){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===BackSide&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=s.texture,e.transmissionSamplerSize.value.set(s.width,s.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function f(e,t){t.matcap&&(e.matcap.value=t.matcap)}function p(e,n){const s=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(s.matrixWorld),e.nearDistance.value=s.shadow.camera.near,e.farDistance.value=s.shadow.camera.far}return{refreshFogUniforms:c,refreshMaterialUniforms:i}}function WebGLUniformsGroups(e,t,n,s){let o={},a={},i=[];const g=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function p(e,t){const n=t.program;s.uniformBlockBinding(e,n)}function d(e,n){let i=o[e.id];i===0[0]&&(f(e),i=l(e),o[e.id]=i,e.addEventListener("dispose",r));const d=n.program;s.updateUBOMapping(e,d);const c=t.render.frame;a[e.id]!==c&&(h(e),a[e.id]=c)}function l(t){const s=u();t.__bindingPointIndex=s;const n=e.createBuffer(),o=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,o,i),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,s,n),n}function u(){for(let e=0;e<g;e++)if(i.indexOf(e)===-1)return i.push(e),e;return error("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(t){const s=o[t.id],n=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,s);for(let t=0,o=n.length;t<o;t++){const s=Array.isArray(n[t])?n[t]:[n[t]];for(let o=0,a=s.length;o<a;o++){const n=s[o];if(m(n,t,o,i)===!0){const s=n.__offset,o=Array.isArray(n.value)?n.value:[n.value];let t=0;for(let a=0;a<o.length;a++){const i=o[a],r=c(i);typeof i=="number"||typeof i=="boolean"?(n.__data[0]=i,e.bufferSubData(e.UNIFORM_BUFFER,s+t,n.__data)):i.isMatrix3?(n.__data[0]=i.elements[0],n.__data[1]=i.elements[1],n.__data[2]=i.elements[2],n.__data[3]=0,n.__data[4]=i.elements[3],n.__data[5]=i.elements[4],n.__data[6]=i.elements[5],n.__data[7]=0,n.__data[8]=i.elements[6],n.__data[9]=i.elements[7],n.__data[10]=i.elements[8],n.__data[11]=0):(i.toArray(n.__data,t),t+=r.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,s,n.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(e,t,n,s){const o=e.value,i=t+"_"+n;if(s[i]===0[0])return typeof o=="number"||typeof o=="boolean"?s[i]=o:s[i]=o.clone(),!0;const a=s[i];if(typeof o=="number"||typeof o=="boolean"){if(a!==o)return s[i]=o,!0}else if(a.equals(o)===!1)return a.copy(o),!0;return!1}function f(e){const s=e.uniforms;let t=0;const n=16;for(let e=0,i=s.length;e<i;e++){const o=Array.isArray(s[e])?s[e]:[s[e]];for(let s=0,a=o.length;s<a;s++){const e=o[s],i=Array.isArray(e.value)?e.value:[e.value];for(let o=0,d=i.length;o<d;o++){const u=i[o],s=c(u),r=t%n,l=r%s.boundary,a=r+l;t+=l,a!==0&&n-a<s.storage&&(t+=n-a),e.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=t,t+=s.storage}}}const o=t%n;return o>0&&(t+=n-o),e.__size=t,e.__cache={},this}function c(e){const t={boundary:0,storage:0};return typeof e=="number"||typeof e=="boolean"?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?warn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):warn("WebGLRenderer: Unsupported uniform value type.",e),t}function r(t){const n=t.target;n.removeEventListener("dispose",r);const s=i.indexOf(n.__bindingPointIndex);i.splice(s,1),e.deleteBuffer(o[n.id]),delete o[n.id],delete a[n.id]}function v(){for(const t in o)e.deleteBuffer(o[t]);i=[],o={},a={}}return{bind:p,update:d,dispose:v}}DATA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),lut=null;function getDFGLUT(){return lut===null&&(lut=new DataTexture(DATA,16,16,RGFormat,HalfFloatType),lut.name="DFG_LUT",lut.minFilter=LinearFilter,lut.magFilter=LinearFilter,lut.wrapS=ClampToEdgeWrapping,lut.wrapT=ClampToEdgeWrapping,lut.generateMipmaps=!1,lut.needsUpdate=!0),lut}class WebGLRenderer{constructor(e={}){const{canvas:c=createCanvasElement(),context:K=null,depth:ve=!0,stencil:oe=!1,alpha:Be=!1,antialias:Pe=!1,premultipliedAlpha:Ce=!0,preserveDrawingBuffer:Ne=!1,powerPreference:Re="default",failIfMajorPerformanceCaveat:He=!1,reversedDepthBuffer:Ie=!1,outputBufferType:Ve=UnsignedByteType}=e;this.isWebGLRenderer=!0;let X;if(K!==null){if(typeof WebGLRenderingContext!="undefined"&&K instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");X=K.getContextAttributes().alpha}else X=Be;const Z=Ve,$e=new Set([RGBAIntegerFormat,RGIntegerFormat,RedIntegerFormat]),We=new Set([UnsignedByteType,UnsignedIntType,UnsignedShortType,UnsignedInt248Type,UnsignedShort4444Type,UnsignedShort5551Type]),H=new Uint32Array(4),I=new Int32Array(4);let u=null,a=null;const N=[],x=[];let b=null;this.domElement=c,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const n=this;let se=!1;this._outputColorSpace=SRGBColorSpace;let ee=0,W=0,r=null,M=-1,S=null;const j=new Vector4,F=new Vector4;let R=null;const pe=new Color(0);let re=0,E=c.width,w=c.height,m=1,fe=null,me=null;const B=new Vector4(0,0,E,w),L=new Vector4(0,0,E,w);let J=!1;const ce=new Frustum;let C=!1,ae=!1;const q=new Matrix4,Ue=new Vector3,A=new Vector4,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function de(){return r===null?m:1}let t=K;function Fe(e,t){return c.getContext(e,t)}try{const e={alpha:!0,depth:ve,stencil:oe,antialias:Pe,premultipliedAlpha:Ce,preserveDrawingBuffer:Ne,powerPreference:Re,failIfMajorPerformanceCaveat:He};if("setAttribute"in c&&c.setAttribute("data-engine",`three.js r${REVISION}`),c.addEventListener("webglcontextlost",Ee,!1),c.addEventListener("webglcontextrestored",ke,!1),c.addEventListener("webglcontextcreationerror",Ae,!1),t===null){const n="webgl2";if(t=Fe(n,e),t===null)throw Fe(n)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(e){throw error("WebGLRenderer: "+e.message),e}let d,h,s,v,o,i,z,T,le,D,_,ie,U,G,p,g,f,be,je,ye,y,O,V;function xe(){d=new WebGLExtensions(t),d.init(),y=new WebGLUtils(t,d),h=new WebGLCapabilities(t,d,e,y),s=new WebGLState(t,d),h.reversedDepthBuffer&&Ie&&s.buffers.depth.setReversed(!0),v=new WebGLInfo(t),o=new WebGLProperties,i=new WebGLTextures(t,d,s,o,h,y,v),z=new WebGLEnvironments(n),T=new WebGLAttributes(t),O=new WebGLBindingStates(t,T),le=new WebGLGeometries(t,T,v,O),D=new WebGLObjects(t,le,T,O,v),be=new WebGLMorphtargets(t,h,i),p=new WebGLClipping(o),_=new WebGLPrograms(n,z,d,h,O,p),ie=new WebGLMaterials(n,o),U=new WebGLRenderLists,G=new WebGLRenderStates(d),f=new WebGLBackground(n,z,s,D,X,Ce),g=new WebGLShadowMap(n,D,h),V=new WebGLUniformsGroups(t,v,h,s),je=new WebGLBufferRenderer(t,d,v),ye=new WebGLIndexedBufferRenderer(t,d,v),v.programs=_.programs,n.capabilities=h,n.extensions=d,n.properties=o,n.renderLists=U,n.shadowMap=g,n.state=s,n.info=v}xe(),Z!==UnsignedByteType&&(b=new WebGLOutput(Z,c.width,c.height,ve,oe));const l=new WebXRManager(n,t);this.xr=l,this.getContext=function(){return t},this.getContextAttributes=function(){return t.getContextAttributes()},this.forceContextLoss=function(){const e=d.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=d.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return m},this.setPixelRatio=function(e){if(e===0[0])return;m=e,this.setSize(E,w,!1)},this.getSize=function(e){return e.set(E,w)},this.setSize=function(e,t,n=!0){if(l.isPresenting){warn("WebGLRenderer: Can't change size while VR device is presenting.");return}E=e,w=t,c.width=Math.floor(e*m),c.height=Math.floor(t*m),n===!0&&(c.style.width=e+"px",c.style.height=t+"px"),b!==null&&b.setSize(c.width,c.height),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(E*m,w*m).floor()},this.setDrawingBufferSize=function(e,t,n){E=e,w=t,m=n,c.width=Math.floor(e*n),c.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(Z===UnsignedByteType){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(e)for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}b.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(j)},this.getViewport=function(e){return e.copy(B)},this.setViewport=function(e,t,n,o){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,o),s.viewport(j.copy(B).multiplyScalar(m).round())},this.getScissor=function(e){return e.copy(L)},this.setScissor=function(e,t,n,o){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,o),s.scissor(F.copy(L).multiplyScalar(m).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(e){s.setScissorTest(J=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(f.getClearColor())},this.setClearColor=function(){f.setClearColor(...arguments)},this.getClearAlpha=function(){return f.getClearAlpha()},this.setClearAlpha=function(){f.setClearAlpha(...arguments)},this.clear=function(e=!0,n=!0,s=!0){let o=0;if(e){let e=!1;if(r!==null){const t=r.texture.format;e=$e.has(t)}if(e){const a=r.texture.type,c=We.has(a),e=f.getClearColor(),n=f.getClearAlpha(),s=e.r,o=e.g,i=e.b;c?(H[0]=s,H[1]=o,H[2]=i,H[3]=n,t.clearBufferuiv(t.COLOR,0,H)):(I[0]=s,I[1]=o,I[2]=i,I[3]=n,t.clearBufferiv(t.COLOR,0,I))}else o|=t.COLOR_BUFFER_BIT}n&&(o|=t.DEPTH_BUFFER_BIT),s&&(o|=t.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),o!==0&&t.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){c.removeEventListener("webglcontextlost",Ee,!1),c.removeEventListener("webglcontextrestored",ke,!1),c.removeEventListener("webglcontextcreationerror",Ae,!1),f.dispose(),U.dispose(),G.dispose(),o.dispose(),z.dispose(),D.dispose(),O.dispose(),V.dispose(),_.dispose(),l.dispose(),l.removeEventListener("sessionstart",_e),l.removeEventListener("sessionend",Me),k.stop()};function Ee(e){e.preventDefault(),log("WebGLRenderer: Context Lost."),se=!0}function ke(){log("WebGLRenderer: Context Restored."),se=!1;const e=v.autoReset,t=g.enabled,n=g.autoUpdate,s=g.needsUpdate,o=g.type;xe(),v.autoReset=e,g.enabled=t,g.autoUpdate=n,g.needsUpdate=s,g.type=o}function Ae(e){error("WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function Se(e){const t=e.target;t.removeEventListener("dispose",Se),Le(t)}function Le(e){ze(e),o.remove(e)}function ze(e){const t=o.get(e).programs;t!==0[0]&&(t.forEach(function(e){_.releaseProgram(e)}),e.isShaderMaterial&&_.releaseShaderCache(e))}this.renderBufferDirect=function(e,n,i,a,r,c){n===null&&(n=Q);const j=r.isMesh&&r.matrixWorld.determinant()<0,y=Ke(e,n,i,a,r);s.setMaterial(a,j);let h=i.index,f=1;if(a.wireframe===!0){if(h=le.getWireframeAttribute(i),h===0[0])return;f=2}const g=i.drawRange,v=i.attributes.position;let u=g.start*f,m=(g.start+g.count)*f;c!==null&&(u=Math.max(u,c.start*f),m=Math.min(m,(c.start+c.count)*f)),h!==null?(u=Math.max(u,0),m=Math.min(m,h.count)):v!=null&&(u=Math.max(u,0),m=Math.min(m,v.count));const p=m-u;if(p<0||p===1/0)return;O.setup(r,a,y,i,h);let b,l=je;if(h!==null&&(b=T.get(h),l=ye,l.setIndex(b)),r.isMesh)a.wireframe===!0?(s.setLineWidth(a.wireframeLinewidth*de()),l.setMode(t.LINES)):l.setMode(t.TRIANGLES);else if(r.isLine){let e=a.linewidth;e===0[0]&&(e=1),s.setLineWidth(e*de()),r.isLineSegments?l.setMode(t.LINES):r.isLineLoop?l.setMode(t.LINE_LOOP):l.setMode(t.LINE_STRIP)}else r.isPoints?l.setMode(t.POINTS):r.isSprite&&l.setMode(t.TRIANGLES);if(r.isBatchedMesh)if(r._multiDrawInstances!==null)warnOnce("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),l.renderMultiDrawInstances(r._multiDrawStarts,r._multiDrawCounts,r._multiDrawCount,r._multiDrawInstances);else if(d.get("WEBGL_multi_draw"))l.renderMultiDraw(r._multiDrawStarts,r._multiDrawCounts,r._multiDrawCount);else{const e=r._multiDrawStarts,n=r._multiDrawCounts,s=r._multiDrawCount,i=h?T.get(h).bytesPerElement:1,c=o.get(a).currentProgram.getUniforms();for(let o=0;o<s;o++)c.setValue(t,"_gl_DrawID",o),l.render(e[o]/i,n[o])}else if(r.isInstancedMesh)l.renderInstances(u,p,r.count);else if(i.isInstancedBufferGeometry){const e=i._maxInstanceCount!==0[0]?i._maxInstanceCount:1/0,t=Math.min(i.instanceCount,e);l.renderInstances(u,p,t)}else l.render(u,p)};function Te(e,t,n){e.transparent===!0&&e.side===DoubleSide&&e.forceSinglePass===!1?(e.side=BackSide,e.needsUpdate=!0,Y(e,t,n),e.side=FrontSide,e.needsUpdate=!0,Y(e,t,n),e.side=DoubleSide):Y(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),a=G.get(n),a.init(t),x.push(a),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(a.pushLight(e),e.castShadow&&a.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(a.pushLight(e),e.castShadow&&a.pushShadow(e))}),a.setupLights();const s=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;const t=e.material;if(t)if(Array.isArray(t))for(let o=0;o<t.length;o++){const i=t[o];Te(i,n,e),s.add(i)}else Te(t,n,e),s.add(t)}),a=x.pop(),s},this.compileAsync=function(e,t,n=null){const s=this.compile(e,t,n);return new Promise(t=>{function n(){if(s.forEach(function(e){const t=o.get(e),n=t.currentProgram;n.isReady()&&s.delete(e)}),s.size===0){t(e);return}setTimeout(n,10)}d.get("KHR_parallel_shader_compile")!==null?n():setTimeout(n,10)})};let te=null;function De(e){te&&te(e)}function _e(){k.stop()}function Me(){k.start()}const k=new WebGLAnimation;k.setAnimationLoop(De),typeof self!="undefined"&&k.setContext(self),this.setAnimationLoop=function(e){te=e,l.setAnimationLoop(e),e===null?k.stop():k.start()},l.addEventListener("sessionstart",_e),l.addEventListener("sessionend",Me),this.render=function(e,t){if(t!==0[0]&&t.isCamera!==!0){error("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(se===!0)return;const o=l.enabled===!0&&l.isPresenting===!0,s=b!==null&&(r===null||o)&&b.begin(n,r);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),l.enabled===!0&&l.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(l.cameraAutoUpdate===!0&&l.updateCamera(t),t=l.getCamera()),e.isScene===!0&&e.onBeforeRender(n,e,t,r),a=G.get(e,x.length),a.init(t),x.push(a),q.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ce.setFromProjectionMatrix(q,WebGLCoordinateSystem,t.reversedDepth),ae=this.localClippingEnabled,C=p.init(this.clippingPlanes,ae),u=U.get(e,N.length),u.init(),N.push(u),l.enabled===!0&&l.isPresenting===!0){const e=n.xr.getDepthSensingMesh();e!==null&&ne(e,t,-(1/0),n.sortObjects)}ne(e,t,0,n.sortObjects),u.finish(),n.sortObjects===!0&&u.sort(fe,me),P=l.enabled===!1||l.isPresenting===!1||l.hasDepthSensing()===!1,P&&f.addToRenderList(u,e),this.info.render.frame++,C===!0&&p.beginShadows();const c=a.state.shadowsArray;g.render(c,e,t),C===!0&&p.endShadows(),this.info.autoReset===!0&&this.info.reset();const d=s&&b.hasRenderPass();if(d===!1){const s=u.opaque,n=u.transmissive;if(a.setupLights(),t.isArrayCamera){const o=t.cameras;if(n.length>0)for(let t=0,i=o.length;t<i;t++){const a=o[t];we(s,n,e,a)}P&&f.render(e);for(let t=0,s=o.length;t<s;t++){const n=o[t];Oe(u,e,n,n.viewport)}}else n.length>0&&we(s,n,e,t),P&&f.render(e),Oe(u,e,t)}r!==null&&W===0&&(i.updateMultisampleRenderTarget(r),i.updateRenderTargetMipmap(r)),s&&b.end(n),e.isScene===!0&&e.onAfterRender(n,e,t),O.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(a=x[x.length-1],C===!0&&p.setGlobalState(n.clippingPlanes,a.state.camera)):a=null,N.pop(),N.length>0?u=N[N.length-1]:u=null};function ne(e,t,n,s){if(e.visible===!1)return;const i=e.layers.test(t.layers);if(i)if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)a.pushLight(e),e.castShadow&&a.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ce.intersectsSprite(e)){s&&A.setFromMatrixPosition(e.matrixWorld).applyMatrix4(q);const o=D.update(e),t=e.material;t.visible&&u.push(e,o,t,n,A.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ce.intersectsObject(e))){const t=D.update(e),o=e.material;if(s&&(e.boundingSphere!==0[0]?(e.boundingSphere===null&&e.computeBoundingSphere(),A.copy(e.boundingSphere.center)):(t.boundingSphere===null&&t.computeBoundingSphere(),A.copy(t.boundingSphere.center)),A.applyMatrix4(e.matrixWorld).applyMatrix4(q)),Array.isArray(o)){const s=t.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=o[r.materialIndex];a&&a.visible&&u.push(e,t,a,n,A.z,r)}}else o.visible&&u.push(e,t,o,n,A.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)ne(o[e],t,n,s)}function Oe(e,t,o,i){const{opaque:r,transmissive:c,transparent:l}=e;a.setupLightsView(o),C===!0&&p.setGlobalState(n.clippingPlanes,o),i&&s.viewport(j.copy(i)),r.length>0&&$(r,t,o),c.length>0&&$(c,t,o),l.length>0&&$(l,t,o),s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function we(e,t,s,o){const u=s.isScene===!0?s.overrideMaterial:null;if(u!==null)return;if(a.state.transmissionRenderTarget[o.id]===0[0]){const e=d.has("EXT_color_buffer_half_float")||d.has("EXT_color_buffer_float");a.state.transmissionRenderTarget[o.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:e?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:Math.max(4,h.samples),stencilBuffer:oe,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace})}const r=a.state.transmissionRenderTarget[o.id],c=o.viewport||j;r.setSize(c.z*n.transmissionResolutionScale,c.w*n.transmissionResolutionScale);const m=n.getRenderTarget(),g=n.getActiveCubeFace(),v=n.getActiveMipmapLevel();n.setRenderTarget(r),n.getClearColor(pe),re=n.getClearAlpha(),re<1&&n.setClearColor(16777215,.5),n.clear(),P&&f.render(s);const b=n.toneMapping;n.toneMapping=NoToneMapping;const l=o.viewport;if(o.viewport!==0[0]&&(o.viewport=0[0]),a.setupLightsView(o),C===!0&&p.setGlobalState(n.clippingPlanes,o),$(e,s,o),i.updateMultisampleRenderTarget(r),i.updateRenderTargetMipmap(r),d.has("WEBGL_multisampled_render_to_texture")===!1){let e=!1;for(let i=0,r=t.length;i<r;i++){const c=t[i],{object:a,geometry:l,material:n,group:d}=c;if(n.side===DoubleSide&&a.layers.test(o.layers)){const t=n.side;n.side=BackSide,n.needsUpdate=!0,ue(a,s,o,l,n,d),n.side=t,n.needsUpdate=!0,e=!0}}e===!0&&(i.updateMultisampleRenderTarget(r),i.updateRenderTargetMipmap(r))}n.setRenderTarget(m,g,v),n.setClearColor(pe,re),l!==0[0]&&(o.viewport=l),n.toneMapping=b}function $(e,t,n){const s=t.isScene===!0?t.overrideMaterial:null;for(let o=0,c=e.length;o<c;o++){const a=e[o],{object:r,geometry:l,group:d}=a;let i=a.material;i.allowOverride===!0&&s!==null&&(i=s),r.layers.test(n.layers)&&ue(r,t,n,l,i,d)}}function ue(e,t,s,o,i,a){e.onBeforeRender(n,t,s,o,i,a),e.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(n,t,s,o,e,a),i.transparent===!0&&i.side===DoubleSide&&i.forceSinglePass===!1?(i.side=BackSide,i.needsUpdate=!0,n.renderBufferDirect(s,t,o,i,e,a),i.side=FrontSide,i.needsUpdate=!0,n.renderBufferDirect(s,t,o,i,e,a),i.side=DoubleSide):n.renderBufferDirect(s,t,o,i,e,a),e.onAfterRender(n,t,s,o,i,a)}function Y(e,t,s){t.isScene!==!0&&(t=Q);const r=o.get(e),i=a.state.lights,f=a.state.shadowsArray,m=i.state.version,l=_.getParameters(e,i.state,f,t,s),h=_.getProgramCacheKey(l);let u=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;const g=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=z.get(e.envMap||r.environment,g),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,u===0[0]&&(e.addEventListener("dispose",Se),u=new Map,r.programs=u);let d=u.get(h);if(d!==0[0]){if(r.currentProgram===d&&r.lightsStateVersion===m)return he(e,l),d}else l.uniforms=_.getUniforms(e),e.onBeforeCompile(l,n),d=_.acquireProgram(l,h),u.set(h,d),r.uniforms=l.uniforms;const c=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(c.clippingPlanes=p.uniform),he(e,l),r.needsLights=Ye(e),r.lightsStateVersion=m,r.needsLights&&(c.ambientLightColor.value=i.state.ambient,c.lightProbe.value=i.state.probe,c.directionalLights.value=i.state.directional,c.directionalLightShadows.value=i.state.directionalShadow,c.spotLights.value=i.state.spot,c.spotLightShadows.value=i.state.spotShadow,c.rectAreaLights.value=i.state.rectArea,c.ltc_1.value=i.state.rectAreaLTC1,c.ltc_2.value=i.state.rectAreaLTC2,c.pointLights.value=i.state.point,c.pointLightShadows.value=i.state.pointShadow,c.hemisphereLights.value=i.state.hemi,c.directionalShadowMatrix.value=i.state.directionalShadowMatrix,c.spotLightMatrix.value=i.state.spotLightMatrix,c.spotLightMap.value=i.state.spotLightMap,c.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function ge(e){if(e.uniformsList===null){const t=e.currentProgram.getUniforms();e.uniformsList=WebGLUniforms.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function he(e,t){const n=o.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ke(e,c,l,d,u){c.isScene!==!0&&(c=Q),i.resetTextureUnits();const O=c.fog,$=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?c.environment:null,B=r===null?n.outputColorSpace:r.isXRRenderTarget===!0?r.texture.colorSpace:LinearSRGBColorSpace,I=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,H=z.get(d.envMap||$,I),P=d.vertexColors===!0&&!!l.attributes.color&&l.attributes.color.itemSize===4,R=!!l.attributes.tangent&&(!!d.normalMap||d.anisotropy>0),L=!!l.morphAttributes.position,N=!!l.morphAttributes.normal,D=!!l.morphAttributes.color;let k=NoToneMapping;d.toneMapped&&(r===null||r.isXRRenderTarget===!0)&&(k=n.toneMapping);const A=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,T=A!==0[0]?A.length:0,f=o.get(d),y=a.state.lights;if(C===!0&&(ae===!0||e!==S)){const t=e===S&&d.id===M;p.setState(d,e,t)}let g=!1;d.version===f.__version?f.needsLights&&f.lightsStateVersion!==y.state.version?g=!0:f.outputColorSpace!==B?g=!0:u.isBatchedMesh&&f.batching===!1?g=!0:!u.isBatchedMesh&&f.batching===!0?g=!0:u.isBatchedMesh&&f.batchingColor===!0&&u.colorTexture===null?g=!0:u.isBatchedMesh&&f.batchingColor===!1&&u.colorTexture!==null?g=!0:u.isInstancedMesh&&f.instancing===!1?g=!0:!u.isInstancedMesh&&f.instancing===!0?g=!0:u.isSkinnedMesh&&f.skinning===!1?g=!0:!u.isSkinnedMesh&&f.skinning===!0?g=!0:u.isInstancedMesh&&f.instancingColor===!0&&u.instanceColor===null?g=!0:u.isInstancedMesh&&f.instancingColor===!1&&u.instanceColor!==null?g=!0:u.isInstancedMesh&&f.instancingMorph===!0&&u.morphTexture===null?g=!0:u.isInstancedMesh&&f.instancingMorph===!1&&u.morphTexture!==null?g=!0:f.envMap!==H?g=!0:d.fog===!0&&f.fog!==O?g=!0:f.numClippingPlanes!==0[0]&&(f.numClippingPlanes!==p.numPlanes||f.numIntersection!==p.numIntersection)?g=!0:f.vertexAlphas!==P?g=!0:f.vertexTangents!==R?g=!0:f.morphTargets!==L?g=!0:f.morphNormals!==N?g=!0:f.morphColors!==D?g=!0:f.toneMapping!==k?g=!0:f.morphTargetsCount!==T&&(g=!0):(g=!0,f.__version=d.version);let j=f.currentProgram;g===!0&&(j=Y(d,c,u));let F=!1,_=!1,E=!1;const v=j.getUniforms(),b=f.uniforms;if(s.useProgram(j.program)&&(F=!0,_=!0,E=!0),d.id!==M&&(M=d.id,_=!0),F||S!==e){const o=s.buffers.depth.getReversed();o&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),v.setValue(t,"projectionMatrix",e.projectionMatrix),v.setValue(t,"viewMatrix",e.matrixWorldInverse);const n=v.map.cameraPosition;n!==0[0]&&n.setValue(t,Ue.setFromMatrixPosition(e.matrixWorld)),h.logarithmicDepthBuffer&&v.setValue(t,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(d.isMeshPhongMaterial||d.isMeshToonMaterial||d.isMeshLambertMaterial||d.isMeshBasicMaterial||d.isMeshStandardMaterial||d.isShaderMaterial)&&v.setValue(t,"isOrthographic",e.isOrthographicCamera===!0),S!==e&&(S=e,_=!0,E=!0)}if(f.needsLights&&(y.state.directionalShadowMap.length>0&&v.setValue(t,"directionalShadowMap",y.state.directionalShadowMap,i),y.state.spotShadowMap.length>0&&v.setValue(t,"spotShadowMap",y.state.spotShadowMap,i),y.state.pointShadowMap.length>0&&v.setValue(t,"pointShadowMap",y.state.pointShadowMap,i)),u.isSkinnedMesh){v.setOptional(t,u,"bindMatrix"),v.setOptional(t,u,"bindMatrixInverse");const e=u.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),v.setValue(t,"boneTexture",e.boneTexture,i))}u.isBatchedMesh&&(v.setOptional(t,u,"batchingTexture"),v.setValue(t,"batchingTexture",u._matricesTexture,i),v.setOptional(t,u,"batchingIdTexture"),v.setValue(t,"batchingIdTexture",u._indirectTexture,i),v.setOptional(t,u,"batchingColorTexture"),u._colorsTexture!==null&&v.setValue(t,"batchingColorTexture",u._colorsTexture,i));const x=l.morphAttributes;if((x.position!==0[0]||x.normal!==0[0]||x.color!==0[0])&&be.update(u,l,j),(_||f.receiveShadow!==u.receiveShadow)&&(f.receiveShadow=u.receiveShadow,v.setValue(t,"receiveShadow",u.receiveShadow)),(d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial)&&d.envMap===null&&c.environment!==null&&(b.envMapIntensity.value=c.environmentIntensity),b.dfgLUT!==0[0]&&(b.dfgLUT.value=getDFGLUT()),_&&(v.setValue(t,"toneMappingExposure",n.toneMappingExposure),f.needsLights&&qe(b,E),O&&d.fog===!0&&ie.refreshFogUniforms(b,O),ie.refreshMaterialUniforms(b,d,m,w,a.state.transmissionRenderTarget[e.id]),WebGLUniforms.upload(t,ge(f),b,i)),d.isShaderMaterial&&d.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(t,ge(f),b,i),d.uniformsNeedUpdate=!1),d.isSpriteMaterial&&v.setValue(t,"center",u.center),v.setValue(t,"modelViewMatrix",u.modelViewMatrix),v.setValue(t,"normalMatrix",u.normalMatrix),v.setValue(t,"modelMatrix",u.matrixWorld),d.isShaderMaterial||d.isRawShaderMaterial){const e=d.uniformsGroups;for(let t=0,s=e.length;t<s;t++){const n=e[t];V.update(n,j),V.bind(n,j)}}return j}function qe(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ye(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return r},this.setRenderTargetTextures=function(e,t,n){const s=o.get(e);s.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,s.__autoAllocateDepthBuffer===!1&&(s.__useRenderToTexture=!1),o.get(e.texture).__webglTexture=t,o.get(e.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?0[0]:n,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){const n=o.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===0[0]};const Ge=t.createFramebuffer();this.setRenderTarget=function(e,n=0,a=0){r=e,ee=n,W=a;let c=null,l=!1,d=!1;if(e){const u=o.get(e);if(u.__useDefaultFramebuffer!==0[0]){s.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),j.copy(e.viewport),F.copy(e.scissor),R=e.scissorTest,s.viewport(j),s.scissor(F),s.setScissorTest(R),M=-1;return}if(u.__webglFramebuffer===0[0])i.setupRenderTarget(e);else if(u.__hasExternalTextures)i.rebindTextures(e,o.get(e.texture).__webglTexture,o.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){const t=e.depthTexture;if(u.__boundDepthTexture!==t){if(t!==null&&o.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");i.setupDepthRenderbuffer(e)}}const h=e.texture;(h.isData3DTexture||h.isDataArrayTexture||h.isCompressedArrayTexture)&&(d=!0);const r=o.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(Array.isArray(r[n])?c=r[n][a]:c=r[n],l=!0):e.samples>0&&i.useMultisampledRTT(e)===!1?c=o.get(e).__webglMultisampledFramebuffer:Array.isArray(r)?c=r[a]:c=r,j.copy(e.viewport),F.copy(e.scissor),R=e.scissorTest}else j.copy(B).multiplyScalar(m).floor(),F.copy(L).multiplyScalar(m).floor(),R=J;a!==0&&(c=Ge);const u=s.bindFramebuffer(t.FRAMEBUFFER,c);if(u&&s.drawBuffers(e,c),s.viewport(j),s.scissor(F),s.setScissorTest(R),l){const s=o.get(e.texture);t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n,s.__webglTexture,a)}else if(d){const s=n;for(let n=0;n<e.textures.length;n++){const i=o.get(e.textures[n]);t.framebufferTextureLayer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,i.__webglTexture,a,s)}}else if(e!==null&&a!==0){const n=o.get(e.texture);t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n.__webglTexture,a)}M=-1},this.readRenderTargetPixels=function(e,n,i,a,c,l,d,u=0){if(!e||!e.isWebGLRenderTarget){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let m=o.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&d!==0[0]&&(m=m[d]),m){s.bindFramebuffer(t.FRAMEBUFFER,m);try{const s=e.textures[u],o=s.format,r=s.type;if(e.textures.length>1&&t.readBuffer(t.COLOR_ATTACHMENT0+u),!h.textureFormatReadable(o)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!h.textureTypeReadable(r)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}n>=0&&n<=e.width-a&&i>=0&&i<=e.height-c&&t.readPixels(n,i,a,c,y.convert(o),y.convert(r),l)}finally{const e=r!==null?o.get(r).__webglFramebuffer:null;s.bindFramebuffer(t.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,n,i,a,c,l,d,u=0){if(!e||!e.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let m=o.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&d!==0[0]&&(m=m[d]),m){if(n>=0&&n<=e.width-a&&i>=0&&i<=e.height-c){s.bindFramebuffer(t.FRAMEBUFFER,m);const f=e.textures[u],p=f.format,g=f.type;if(e.textures.length>1&&t.readBuffer(t.COLOR_ATTACHMENT0+u),!h.textureFormatReadable(p))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!h.textureTypeReadable(g))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const d=t.createBuffer();t.bindBuffer(t.PIXEL_PACK_BUFFER,d),t.bufferData(t.PIXEL_PACK_BUFFER,l.byteLength,t.STREAM_READ),t.readPixels(n,i,a,c,y.convert(p),y.convert(g),0);const b=r!==null?o.get(r).__webglFramebuffer:null;s.bindFramebuffer(t.FRAMEBUFFER,b);const v=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);return t.flush(),await probeAsync(t,v,4),t.bindBuffer(t.PIXEL_PACK_BUFFER,d),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,l),t.deleteBuffer(d),t.deleteSync(v),l}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(e,n=null,o=0){const a=2**-o,r=Math.floor(e.image.width*a),c=Math.floor(e.image.height*a),l=n!==null?n.x:0,d=n!==null?n.y:0;i.setTexture2D(e,0),t.copyTexSubImage2D(t.TEXTURE_2D,o,0,0,l,d,r,c),s.unbindTexture()};const Xe=t.createFramebuffer(),Qe=t.createFramebuffer();this.copyTextureToTexture=function(e,n,a=null,r=null,c=0,l=0){let h,u,g,b,j,w,m,f,v;const d=e.isCompressedTexture?e.mipmaps[l]:e.image;if(a!==null)h=a.max.x-a.min.x,u=a.max.y-a.min.y,g=a.isBox3?a.max.z-a.min.z:1,b=a.min.x,j=a.min.y,w=a.isBox3?a.min.z:0;else{const t=2**-c;h=Math.floor(d.width*t),u=Math.floor(d.height*t),e.isDataArrayTexture?g=d.depth:e.isData3DTexture?g=Math.floor(d.depth*t):g=1,b=0,j=0,w=0}r!==null?(m=r.x,f=r.y,v=r.z):(m=0,f=0,v=0);const _=y.convert(n.format),O=y.convert(n.type);let p;n.isData3DTexture?(i.setTexture3D(n,0),p=t.TEXTURE_3D):n.isDataArrayTexture||n.isCompressedArrayTexture?(i.setTexture2DArray(n,0),p=t.TEXTURE_2D_ARRAY):(i.setTexture2D(n,0),p=t.TEXTURE_2D),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment);const E=t.getParameter(t.UNPACK_ROW_LENGTH),k=t.getParameter(t.UNPACK_IMAGE_HEIGHT),A=t.getParameter(t.UNPACK_SKIP_PIXELS),S=t.getParameter(t.UNPACK_SKIP_ROWS),M=t.getParameter(t.UNPACK_SKIP_IMAGES);t.pixelStorei(t.UNPACK_ROW_LENGTH,d.width),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,d.height),t.pixelStorei(t.UNPACK_SKIP_PIXELS,b),t.pixelStorei(t.UNPACK_SKIP_ROWS,j),t.pixelStorei(t.UNPACK_SKIP_IMAGES,w);const C=e.isDataArrayTexture||e.isData3DTexture,x=n.isDataArrayTexture||n.isData3DTexture;if(e.isDepthTexture){const i=o.get(e),a=o.get(n),r=o.get(i.__renderTarget),d=o.get(a.__renderTarget);s.bindFramebuffer(t.READ_FRAMEBUFFER,r.__webglFramebuffer),s.bindFramebuffer(t.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let s=0;s<g;s++)C&&(t.framebufferTextureLayer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,o.get(e).__webglTexture,c,w+s),t.framebufferTextureLayer(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,o.get(n).__webglTexture,l,v+s)),t.blitFramebuffer(b,j,h,u,m,f,h,u,t.DEPTH_BUFFER_BIT,t.NEAREST);s.bindFramebuffer(t.READ_FRAMEBUFFER,null),s.bindFramebuffer(t.DRAW_FRAMEBUFFER,null)}else if(c!==0||e.isRenderTargetTexture||o.has(e)){const i=o.get(e),a=o.get(n);s.bindFramebuffer(t.READ_FRAMEBUFFER,Xe),s.bindFramebuffer(t.DRAW_FRAMEBUFFER,Qe);for(let e=0;e<g;e++)C?t.framebufferTextureLayer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,i.__webglTexture,c,w+e):t.framebufferTexture2D(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i.__webglTexture,c),x?t.framebufferTextureLayer(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,a.__webglTexture,l,v+e):t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a.__webglTexture,l),c!==0?t.blitFramebuffer(b,j,h,u,m,f,h,u,t.COLOR_BUFFER_BIT,t.NEAREST):x?t.copyTexSubImage3D(p,l,m,f,v+e,b,j,h,u):t.copyTexSubImage2D(p,l,m,f,b,j,h,u);s.bindFramebuffer(t.READ_FRAMEBUFFER,null),s.bindFramebuffer(t.DRAW_FRAMEBUFFER,null)}else x?e.isDataTexture||e.isData3DTexture?t.texSubImage3D(p,l,m,f,v,h,u,g,_,O,d.data):n.isCompressedArrayTexture?t.compressedTexSubImage3D(p,l,m,f,v,h,u,g,_,d.data):t.texSubImage3D(p,l,m,f,v,h,u,g,_,O,d):e.isDataTexture?t.texSubImage2D(t.TEXTURE_2D,l,m,f,h,u,_,O,d.data):e.isCompressedTexture?t.compressedTexSubImage2D(t.TEXTURE_2D,l,m,f,d.width,d.height,_,d.data):t.texSubImage2D(t.TEXTURE_2D,l,m,f,h,u,_,O,d);t.pixelStorei(t.UNPACK_ROW_LENGTH,E),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,k),t.pixelStorei(t.UNPACK_SKIP_PIXELS,A),t.pixelStorei(t.UNPACK_SKIP_ROWS,S),t.pixelStorei(t.UNPACK_SKIP_IMAGES,M),l===0&&n.generateMipmaps&&t.generateMipmap(p),s.unbindTexture()},this.initRenderTarget=function(e){o.get(e).__webglFramebuffer===0[0]&&i.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?i.setTextureCube(e,0):e.isData3DTexture?i.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?i.setTexture2DArray(e,0):i.setTexture2D(e,0),s.unbindTexture()},this.resetState=function(){ee=0,W=0,r=null,s.reset(),O.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e),t.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}class FontLoader extends Loader{constructor(e){super(e)}load(e,t,n,s){const i=this,o=new FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(e){const n=i.parse(JSON.parse(e));t&&t(n)},n,s)}parse(e){return new Font(e)}}class Font{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){const s=[],o=createPaths(e,t,this.data,n);for(let e=0,t=o.length;e<t;e++)s.push(...o[e].toShapes());return s}}function createPaths(e,t,n,s){const i=Array.from(e),a=t/n.resolution,l=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,c=[];let o=0,r=0;(s=="rtl"||s=="tb")&&i.reverse();for(let e=0;e<i.length;e++){const t=i[e];if(t===`
`)o=0,r-=l;else{const e=createPath(t,a,o,r,n);s=="tb"?(o=0,r+=n.ascender*a):o+=e.offsetX,c.push(e.path)}}return c}function createPath(e,t,n,s,o){const i=o.glyphs[e]||o.glyphs["?"];if(!i){console.error('THREE.Font: character "'+e+'" does not exists in font family '+o.familyName+".");return}const a=new ShapePath;let r,c,l,d,u,h,m,f;if(i.o){const e=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let o=0,i=e.length;o<i;){const p=e[o++];switch(p){case"m":r=e[o++]*t+n,c=e[o++]*t+s,a.moveTo(r,c);break;case"l":r=e[o++]*t+n,c=e[o++]*t+s,a.lineTo(r,c);break;case"q":l=e[o++]*t+n,d=e[o++]*t+s,u=e[o++]*t+n,h=e[o++]*t+s,a.quadraticCurveTo(u,h,l,d);break;case"b":l=e[o++]*t+n,d=e[o++]*t+s,u=e[o++]*t+n,h=e[o++]*t+s,m=e[o++]*t+n,f=e[o++]*t+s,a.bezierCurveTo(u,h,m,f,l,d);break}}}return{offsetX:i.ha*t,path:a}}class TextGeometry extends ExtrudeGeometry{constructor(e,t={}){const n=t.font;if(n===0[0])super();else{const s=n.generateShapes(e,t.size,t.direction);t.depth===0[0]&&(t.depth=50),t.bevelThickness===0[0]&&(t.bevelThickness=10),t.bevelSize===0[0]&&(t.bevelSize=8),t.bevelEnabled===0[0]&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}CopyShader={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Pass{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}_camera=new OrthographicCamera(-1,1,1,-1,0,1);class FullscreenTriangleGeometry extends BufferGeometry{constructor(){super(),this.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2))}}_geometry=new FullscreenTriangleGeometry;class FullScreenQuad{constructor(e){this._mesh=new Mesh(_geometry,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_camera)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ShaderPass extends Pass{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=UniformsUtils.clone(e.uniforms),this.material=new ShaderMaterial({name:e.name!==0[0]?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new FullScreenQuad(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class MaskPass extends Pass{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const o=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let i,a;this.inverse?(i=0,a=1):(i=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,i,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class ClearMaskPass extends Pass{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EffectComposer{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===0[0]){const n=e.getSize(new Vector2);this._width=n.width,this._height=n.height,t=new WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:HalfFloatType}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ShaderPass(CopyShader),this.copyPass.material.blending=NoBlending,this.timer=new Timer}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===0[0]&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let t=!1;for(let s=0,o=this.passes.length;s<o;s++){const n=this.passes[s];if(n.enabled===!1)continue;if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,t),n.needsSwap){if(t){const t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}MaskPass!==0[0]&&(n instanceof MaskPass?t=!0:n instanceof ClearMaskPass&&(t=!1))}this.renderer.setRenderTarget(n)}reset(e){if(e===0[0]){const t=this.renderer.getSize(new Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RenderPass extends Pass{constructor(e,t,n=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Color}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}SMAAEdgesShader={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Vector2(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},SMAAWeightsShader={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Vector2(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},SMAABlendShader={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Vector2(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class SMAAPass extends Pass{constructor(){super(),this._edgesRT=new WebGLRenderTarget(1,1,{depthBuffer:!1,type:HalfFloatType}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new WebGLRenderTarget(1,1,{depthBuffer:!1,type:HalfFloatType}),this._weightsRT.texture.name="SMAAPass.weights";const n=this,e=new Image;e.src=this._getAreaTexture(),e.onload=function(){n._areaTexture.needsUpdate=!0},this._areaTexture=new Texture,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=e,this._areaTexture.minFilter=LinearFilter,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const t=new Image;t.src=this._getSearchTexture(),t.onload=function(){n._searchTexture.needsUpdate=!0},this._searchTexture=new Texture,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=t,this._searchTexture.magFilter=NearestFilter,this._searchTexture.minFilter=NearestFilter,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=UniformsUtils.clone(SMAAEdgesShader.uniforms),this._materialEdges=new ShaderMaterial({defines:Object.assign({},SMAAEdgesShader.defines),uniforms:this._uniformsEdges,vertexShader:SMAAEdgesShader.vertexShader,fragmentShader:SMAAEdgesShader.fragmentShader}),this._uniformsWeights=UniformsUtils.clone(SMAAWeightsShader.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new ShaderMaterial({defines:Object.assign({},SMAAWeightsShader.defines),uniforms:this._uniformsWeights,vertexShader:SMAAWeightsShader.vertexShader,fragmentShader:SMAAWeightsShader.fragmentShader}),this._uniformsBlend=UniformsUtils.clone(SMAABlendShader.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new ShaderMaterial({uniforms:this._uniformsBlend,vertexShader:SMAABlendShader.vertexShader,fragmentShader:SMAABlendShader.fragmentShader}),this._fsQuad=new FullScreenQuad(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}enabled=!1,t0=0,frameSum=0,frameN=0,stack=[],samples=new Map,RING=120,frameRing=[],perf={get on(){return enabled},set on(e){enabled=e,e&&(stack.length=0,samples.clear(),frameSum=0,frameN=0)},begin(e,t){if(!enabled)return;stack.push(`${e}${t}${performance.now()}`)},end(e,t){if(!enabled)return;const s=`${e}${t}`,o=stack.pop();if(!o||!o.startsWith(s+""))return;const i=performance.now()-parseFloat(o.slice(s.length+1));let n=samples.get(s);n||(n={sum:0,n:0},samples.set(s,n)),n.sum+=i,n.n+=1},frameStart(){enabled&&(t0=performance.now())},frameEnd(){if(!enabled)return;frameSum+=performance.now()-t0,frameN+=1},sampleFrame(e){frameRing.push(e),frameRing.length>RING&&frameRing.shift()},frameSampleCount(){return frameRing.length},clearFrameRing(){frameRing.length=0},recentAvg(){if(!frameRing.length)return 0;let e=0;for(const t of frameRing)e+=t;return e/frameRing.length},frameCount(){return frameN},frameAvg(){return frameN?frameSum/frameN:0},rows(){const e=[];for(const[t,n]of samples){const s=t.indexOf("");e.push({type:t.slice(0,s),name:t.slice(s+1),avg:n.sum/n.n})}return e.sort((e,t)=>e.type<t.type?-1:e.type>t.type?1:e.name<t.name?-1:1)}},GFX_LADDER=[{label:"low",pixelRatio:.5,smaa:!1,stars:400},{label:"medium",pixelRatio:.75,smaa:!0,stars:600},{label:"high",pixelRatio:1,smaa:!0,stars:900},{label:"ultra",pixelRatio:1,smaa:!0,stars:1200}],DOWNGRADE_AT=33,UPGRADE_AT=14,DOWNGRADE_WINDOWS=2,UPGRADE_WINDOWS=4,MIN_SAMPLES=30,EVAL_MS=2e3,level=3,applyFn=null,goodWindows=0,badWindows=0,lastLog="gfx: starting at ultra",started=!1,gfx={register(e){applyFn=e},start(){if(started)return;started=!0,setInterval(evaluate,EVAL_MS)},get level(){return level},get settings(){return GFX_LADDER[level]},lastChange(){return lastLog}};function evaluate(){if(!applyFn)return;if(perf.frameSampleCount()<MIN_SAMPLES)return;const e=perf.recentAvg();e>DOWNGRADE_AT&&level>0?(badWindows+=1,badWindows>=DOWNGRADE_WINDOWS&&(--level,badWindows=0,goodWindows=0,lastLog=`gfx: auto-downgraded → ${GFX_LADDER[level].label} (avg frame ${e.toFixed(0)}ms)`,perf.clearFrameRing(),applyFn(level))):e<UPGRADE_AT&&level<3?(goodWindows+=1,goodWindows>=UPGRADE_WINDOWS&&(++level,goodWindows=0,badWindows=0,lastLog=`gfx: auto-upgraded → ${GFX_LADDER[level].label} (avg frame ${e.toFixed(2)}ms)`,perf.clearFrameRing(),applyFn(level))):(goodWindows=0,badWindows=0)}function makeStars(e=100,t=50,n=5e3,s=.1){const o=new Float32Array(n*3),r=new Float32Array(n);let i=e+t;const c=t/n;for(let e=0;e<n;e++){i-=c*Math.random();const t=Math.acos(1-Math.random()*2),s=Math.random()*2*Math.PI,a=Math.sin(t);o[e*3]=i*a*Math.cos(s),o[e*3+1]=i*a*Math.sin(s),o[e*3+2]=i*Math.cos(t),r[e]=(.5+.5*Math.random())*4}const a=new BufferGeometry;a.setAttribute("position",new BufferAttribute(o,3)),a.setAttribute("aScale",new BufferAttribute(r,1));const l=new ShaderMaterial({uniforms:{uSize:{value:s}},vertexShader:`
      attribute float aScale;
      uniform float uSize;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      void main() {
        if (distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;
        gl_FragColor = vec4(1.0);
      }`,transparent:!0,alphaTest:.01});return new Points(a,l)}WWF_SVG=`<svg width="230px" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" fill="#f15025" stroke="#f15025"><g id="layer1"><rect width="34.031982" height="13.166141" x="109.12134" y="221.50067"/><rect width="41.3274" height="13.189176" x="156.43027" y="139.43732"/><rect width="55.877949" height="13.189176" x="136.63039" y="166.83044"/><circle cx="36.019543" cy="200.72112" r="6.614224"/><circle cx="83.208626" cy="228.10573" r="6.614224"/><circle cx="71.801262" cy="228.02882" r="6.614224"/><circle cx="109.50446" cy="228.07835" r="6.614224"/><circle cx="21.976299" cy="173.41405" r="6.614224"/><circle cx="101.19189" cy="173.38173" r="6.614224"/><circle cx="105.7051" cy="200.7291" r="6.614224"/><circle cx="142.81274" cy="228.07237" r="6.614224"/><circle cx="132.05998" cy="200.86003" r="6.614224"/><circle cx="178.70616" cy="200.85172" r="6.614224"/><circle cx="137.02592" cy="173.40887" r="6.614224"/><circle cx="192.00768" cy="173.40335" r="6.614224"/><circle cx="197.11247" cy="146.0321" r="6.614224"/><circle cx="157.06224" cy="146.0208" r="6.614224"/><circle cx="192.02562" cy="118.71578" r="6.614224"/><circle cx="137.07158" cy="118.65047" r="6.614224"/><circle cx="21.880394" cy="118.62907" r="6.614224"/><circle cx="101.57488" cy="118.62296" r="6.614224"/><circle cx="18.059219" cy="146.02701" r="6.614224"/><circle cx="120.49805" cy="146.02385" r="6.614224"/><circle cx="120.29967" cy="91.317184" r="6.614224"/><circle cx="178.82605" cy="91.297127" r="6.614224"/><circle cx="35.918694" cy="91.32531" r="6.614224"/><circle cx="87.017815" cy="91.325363" r="6.614224"/><circle cx="142.87708" cy="64.034698" r="6.614224"/><circle cx="71.855606" cy="64.032326" r="6.614224"/><circle cx="101.8694" cy="63.991955" r="6.614224"/><circle cx="131.77686" cy="64.024857" r="6.614224"/><rect width="30.155174" height="13.275864" x="71.737076" y="57.370689"/><rect width="12.031983" height="13.233194" x="131.29428" y="57.407383"/><rect width="12.031983" height="13.233194" x="71.735992" y="221.43167"/><rect width="58.766083" height="13.252156" x="120.24138" y="84.704735"/><rect width="54.925564" height="13.252156" x="137.1151" y="112.08276"/><rect width="51.681034" height="13.275862" x="35.84483" y="84.68103"/><rect width="79.994499" height="13.276539" x="21.792299" y="111.9789"/><rect width="79.947083" height="13.181711" x="21.526054" y="166.80881"/><rect width="70.760788" height="13.181711" x="35.676052" y="194.13606"/><rect width="102.35065" height="13.254238" x="18.238478" y="139.40367"/><rect width="47.496296" height="13.189176" x="131.71552" y="194.2543"/></g></svg>`,WWF_POS=new Vector3(Math.cos(1)*7.5,.01,Math.sin(1)*7.5),BDC_SVG=`<svg width="68" viewBox="154 3 70 75" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333333,0,0,-1.3333333,0,122.70213)"><g transform="translate(141.3896,35.1785)"><path fill="#ee2722" d="m 0,0 h -2.352 v 13.252 c 0,0.784 -0.633,1.416 -1.417,1.416 -0.394,0 -0.749,-0.158 -1.006,-0.414 l -8.779,-8.775 -9.373,9.372 8.642,8.635 c 0.263,0.267 0.439,0.625 0.439,1.026 0,0.587 -0.358,1.072 -0.858,1.304 l -10.864,5.064 5.604,12.011 11.297,-5.268 c 0.187,-0.087 0.397,-0.14 0.619,-0.14 0.784,0 1.42,0.636 1.42,1.416 V 53.125 H 0 Z"/></g><g transform="translate(141.3905,35.1785)"><path fill="#aa1228" d="m 0,0 h 2.352 v 13.252 c 0,0.784 0.633,1.416 1.417,1.416 0.394,0 0.749,-0.158 1.006,-0.414 l 8.779,-8.775 9.373,9.372 -8.642,8.635 c -0.263,0.267 -0.439,0.625 -0.439,1.026 0,0.587 0.358,1.072 0.858,1.304 L 25.568,30.88 19.964,42.891 8.667,37.623 C 8.48,37.536 8.27,37.483 8.048,37.483 c -0.784,0 -1.42,0.636 -1.42,1.416 v 14.226 l -6.628,0 z"/></g></g></svg>`,BDC_POS=new Vector3(Math.cos(-1)*7.5,.01,Math.sin(-1)*7.5),KEYFRAMES=[{value:0,position:new Vector3(0,.95,5),lookAt:new Vector3(0,0,-1),light:new Vector3(0,0,-1)},{value:.2,position:new Vector3(0,.6,7),lookAt:new Vector3(0,0,4.9),light:new Vector3(0,-1,1)},{value:.399,position:new Vector3(0,0,10),lookAt:new Vector3(0,0,-1),light:new Vector3(0,0,-1)},{value:.4,position:new Vector3(-6,10,7),lookAt:new Vector3(18,0,0),light:new Vector3(0,0,-1)},{value:.6,position:new Vector3(-17,10,7),lookAt:new Vector3(-2,0,0),light:new Vector3(0,0,-1)},{value:.8,position:new Vector3(Math.cos(3)*11.4,.2,Math.sin(3)*11.4),lookAt:new Vector3(Math.cos(3)*10,0,Math.sin(3)*10),light:new Vector3(0,0,-1)},{value:1.01,position:new Vector3(Math.cos(3)*14.4,.6,Math.sin(3)*14.4),lookAt:new Vector3(Math.cos(3)*13,0,Math.sin(3)*13),light:new Vector3(0,0,-1)}];function initSpace(e){const A=document.getElementById("space"),n=new WebGLRenderer({antialias:!0});n.setClearColor("#000000"),n.shadowMap.enabled=!0,n.setSize(window.innerWidth,window.innerHeight),A.appendChild(n.domElement),spaceRenderer=n;const s=new Scene,t=new PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(0,2,5),spaceCamera=t;const z=new Vector3(0,0,-1);let i=makeStars();s.add(i);const T=e=>{i&&(s.remove(i),i.geometry.dispose(),i.material.dispose()),i=makeStars(100,50,e,.1),s.add(i)},a=new EffectComposer(n);spaceComposer=a;const F=new RenderPass(s,t);a.addPass(F);const E=new SMAAPass;a.addPass(E);const S=e=>{const t=GFX_LADDER[e];n.setPixelRatio(t.pixelRatio),n.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(t.pixelRatio),a.setSize(window.innerWidth,window.innerHeight),E.enabled=t.smaa,T(t.stars)};gfx.register(S),gfx.start();const h=new DirectionalLight(16777215,1);h.castShadow=!0,h.position.set(0,0,-1),s.add(h);const x=new Mesh(new SphereGeometry(1,32,32),new MeshPhysicalMaterial({color:0,side:DoubleSide}));x.position.set(0,0,4.9),s.add(x);let c=null;(new FontLoader).load(`/fonts/space_font.json`,e=>{const t=new TextGeometry("yun",{font:e,size:.5,depth:.2,curveSegments:5,bevelEnabled:!0,bevelThickness:.05,bevelSize:.02,bevelOffset:0,bevelSegments:4});c=new Mesh(t,new MeshBasicMaterial({color:16777215})),t.center(),c.position.set(0,1,0),s.add(c)});const o=new Group,D=new MeshPhysicalMaterial({color:0,side:DoubleSide}),N=new MeshBasicMaterial({color:16777215,side:DoubleSide}),L=new MeshBasicMaterial({color:16777215});o.add(new AmbientLight(16777215,.5));const j=new PointLight(16777215,10,100,.1);j.position.set(0,0,0),o.add(j);const l=new Mesh(new SphereGeometry(1,32,32),L);l.scale.setScalar(.3),l.position.set(0,0,0),o.add(l);const b=(e,t)=>{const n=new Mesh(new SphereGeometry(1,32,32),D);return n.position.set(...e),n.scale.setScalar(t),o.add(n),n},v=(e,t)=>{const n=new Mesh(new RingGeometry(e,e+.01,128),N);return n.position.set(...t),n.rotation.set(Math.PI/2,0,0),o.add(n),n},r=[];r.push(l),v(5,[0,0,0]),v(10,[0,0,0]),r.push(b([Math.cos(3)*10,0,Math.sin(3)*10],.3)),v(7.5,[0,0,0]),r.push(b([Math.cos(1+Math.PI)*7.5,0,Math.sin(1+Math.PI)*7.5],.2)),r.push(b([Math.cos(3)*13,0,Math.sin(3)*13],.3)),s.add(o);const p=new Raycaster,u=new Vector3,d=[],k=(e,t,n,s)=>{const i=document.createElement("div");i.className="space-webpage",i.innerHTML=`<div class="space-card ${t}">${e}</div>`,document.body.appendChild(i);const o=n?document.getElementById(n):null,a=i.firstElementChild;return a.addEventListener("mouseenter",()=>{if(!o)return;const e=a.getBoundingClientRect();o.style.left=`${Math.min(Math.max(e.left+e.width/2-120,8),window.innerWidth-260)}px`,o.style.top=`${Math.max(8,e.top-10)}px`,o.style.transform="translateY(-100%)",o.style.opacity="1"}),a.addEventListener("mouseleave",()=>{o&&(o.style.opacity="0")}),{el:i,pos:new Vector3,distanceFactor:s,tipEl:o}};d.push({...k(WWF_SVG,"wwf","wwf-tip",3),pos:WWF_POS}),d.push({...k(BDC_SVG,"bdc","bdc-tip",10),pos:BDC_POS});const y=.05,C=3,M=2;let f=0,g=0;const m={x:0,y:0};window.addEventListener("mousemove",e=>{m.x=e.clientX,m.y=e.clientY});const O=()=>{perf.frameStart();const v=performance.now();perf.begin("3D","camera");const s=e(),l=KEYFRAMES.findIndex(e=>s<e.value),n=KEYFRAMES[l-1],i=KEYFRAMES[l];if(n&&i){const e=(s-n.value)/(i.value-n.value),o=e<.5?4*e*e*e:1-(-2*e+2)**3/2;t.position.lerpVectors(n.position,i.position,o),t.lookAt(z.copy(n.lookAt).lerp(i.lookAt,o)),h.position.lerpVectors(n.light,i.light,o);const a=(m.x/window.innerWidth-.5)*y,r=-(m.y/window.innerHeight-.5)*y;f+=(a-f)*C*.008,g+=(r-g)*C*.008,t.position.x+=f,t.position.y+=g,t.position.y+=(M-t.position.y)*.1}if(perf.end("3D","camera"),c&&(c.visible=s<.2),o.visible=s>.4,perf.begin("DOM","overlays"),s>.5){t.updateProjectionMatrix(),t.updateMatrixWorld(!0),t.matrixWorldInverse.copy(t.matrixWorld).invert();const e=2*Math.tan(50*Math.PI/360);for(const n of d){u.copy(n.pos).project(t);const o=u.z<1;p.ray.origin.copy(t.position),p.ray.direction.copy(n.pos).sub(t.position).normalize();const s=p.intersectObjects(r,!1)[0],i=s&&s.distance<t.position.distanceTo(n.pos)-.05;if(o&&!i){const o=t.position.distanceTo(n.pos);let s=n.distanceFactor/400*window.innerHeight/(e*o);s=Math.min(s,2.5),n.el.style.transform=`translate(${((u.x*.5+.5)*window.innerWidth).toFixed(1)}px, ${((-u.y*.5+.5)*window.innerHeight).toFixed(1)}px) translate(-50%, -50%) scale(${s.toFixed(4)})`,n.el.style.display="block"}else n.el.style.display="none"}}else for(const e of d)e.el.style.display="none";perf.end("DOM","overlays"),perf.begin("3D","render"),a.render(),perf.end("3D","render"),perf.frameEnd(),perf.sampleFrame(performance.now()-v)};let w=performance.now();function _(e){w=e;try{O()}catch(e){console.error("space frame error:",e)}requestAnimationFrame(_)}requestAnimationFrame(_),setInterval(()=>{if(performance.now()-w>100)try{O()}catch(e){console.error("space frame error:",e)}},33)}spaceCamera=null,spaceRenderer=null,spaceComposer=null;function resizeSpace(){if(!spaceCamera||!spaceRenderer)return;spaceCamera.aspect=window.innerWidth/window.innerHeight,spaceCamera.updateProjectionMatrix(),spaceRenderer.setSize(window.innerWidth,window.innerHeight),spaceComposer?.setSize(window.innerWidth,window.innerHeight)}cfg={basePath:"/portfolio",siteUrl:"https://yun.ng",writeupsUrl:"https://yun.ng/search-index.json",viewsUrl:"https://views.yun.ng"},dataEl=document.getElementById("portfolio-data"),data=JSON.parse(dataEl.textContent||"{}");for(const e of data.projects)e.langs=e.langs.map(e=>e.toLowerCase()),e.keys&&(e.keys=e.keys.map(e=>e.toLowerCase()));data.projects.sort((e,t)=>e.year===t.year?0:e.year<t.year?1:-1),projects=data.projects,keywordsWeighted=projects.flatMap(e=>[...e.langs,...e.keys??[]]).map(e=>e.toLowerCase()),$2=e=>document.querySelector(e),SECTIONS=[{key:"hero",title:"Home",icon:"\uD83D\uDEF8"},{key:"about",title:"About",icon:"\uD83D\uDE80"},{key:"skills",title:"Skills",icon:"\uD83D\uDCBB"},{key:"work",title:"Work",icon:"\uD83E\uDE90"},{key:"writeups",title:"Writeups",icon:"\uD83D\uDCDD"},{key:"contact",title:"Contact",icon:"\uD83D\uDCE7"}],N=SECTIONS.length;function resolveLink(e){if(!e)return;if(typeof e=="string")return e;const t=navigator.userAgentData?.platform??navigator.platform??"";return/win/i.test(t)?e.win:e.linux}progress=0;function onScroll(){const e=document.documentElement.scrollHeight-window.innerHeight;progress=e>0?Math.min(1,Math.max(0,window.scrollY/e)):0;const n=Math.floor(.5+progress*(N-1));document.querySelectorAll(".nav-item").forEach((e,t)=>{e.classList.toggle("active",t===n)});const t=progress*(N-1);$2(".tagline h2").classList.toggle("faded",t>.1),$2("#scroll-indicator").classList.toggle("hidden",t>.1)}window.addEventListener("scroll",onScroll,{passive:!0}),onScroll(),document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.getElementById(e.dataset.nav)?.scrollIntoView({behavior:"smooth"})})}),$2("#scroll-indicator").addEventListener("click",()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"})),fetch(`${cfg.viewsUrl}${cfg.basePath}`).then(e=>e.ok?e.json():Promise.reject(new Error(String(e.status)))).then(e=>{typeof e?.count=="number"&&($2("#page-views").textContent=`${e.count}th`)}).catch(()=>{}),CLICKS=114,clicks=0,tagline=$2("#tagline"),tagline.addEventListener("click",()=>{clicks++,clicks>=CLICKS?(tagline.classList.remove("clickable"),R.glitch(tagline,{playMode:"manual",timing:{easing:"ease-in-out"},slice:{count:20}}).startGlitch(),setTimeout(()=>{tagline.innerHTML="<ruby>Seventh Phase of the Sky<rt>「天空的第七种相态」</rt></ruby>",R.glitch(tagline,{timing:{easing:"ease-in-out",duration:4e3},slice:{count:2},shake:{amplitudeX:.05,amplitudeY:.05}})},125)):clicks<CLICKS&&R.glitch(tagline,{playMode:"manual",timing:{easing:"ease-in-out"},slice:{count:10*clicks/CLICKS},shake:{amplitudeX:.5*(clicks/CLICKS),amplitudeY:.5*(clicks/CLICKS)}}).startGlitch()}),marquee=$2("#marquee"),MQ={words:keywordsWeighted,duration:100,rowHeight:30,angle:10,selected:[]},wordCache=[],rows=0,verticalSpace=0;function getWords(e,t){if(wordCache[e])return wordCache[e];if(t)wordCache[e]=[...new Set(MQ.words)].sort(()=>Math.random()-.5).map(e=>e.toUpperCase());else{const t=[];for(;t.length<20;){const e=MQ.words[Math.floor(Math.random()*MQ.words.length)];t.includes(e)||t.push(e)}wordCache[e]=t.map(e=>e.toUpperCase())}return wordCache[e]}function renderMarquee(){const e=Math.floor(rows/2),t=rows*MQ.rowHeight/2,n=MQ.selected;marquee.innerHTML="";for(let o=0;o<rows;o++){const s=document.createElement("div");s.className="marquee-row"+(o%2!==0?" reverse":""),s.style.setProperty("--angle",`-${MQ.angle}deg`),s.style.setProperty("--duration",`${MQ.duration}s`),s.style.top=`${o*MQ.rowHeight-t}px`,s.addEventListener("mouseenter",()=>s.classList.add("paused")),s.addEventListener("mouseleave",()=>s.classList.remove("paused"));const i=o===e;for(let t=0;t<2;t++){const e=document.createElement("div");e.className="marquee-copy";for(const s of getWords(o,i)){const t=document.createElement("span"),a=s.toLowerCase();t.className="marquee-word"+(i?" center":"")+(n.includes(a)?" selected":""),t.textContent=s,t.addEventListener("click",()=>wordClick(a)),e.appendChild(t)}s.appendChild(e)}marquee.appendChild(s)}}function calculateRows(){const e=MQ.angle*Math.PI/180;verticalSpace=MQ.rowHeight/Math.cos(e),rows=Math.ceil(1.3*window.innerHeight/verticalSpace),renderMarquee()}function updateMarqueeSelection(){const e=MQ.selected;marquee.querySelectorAll(".marquee-word").forEach(t=>{t.classList.toggle("selected",e.includes(t.textContent.toLowerCase()))})}$2("#back-link").addEventListener("click",e=>{window.opener&&!window.opener.closed&&(e.preventDefault(),window.close())}),perfEl=document.createElement("div"),perfEl.id="perf-overlay",perfEl.style.display="none",document.body.appendChild(perfEl),window.addEventListener("keydown",e=>{if(e.key!=="F1")return;e.preventDefault(),perf.on=!perf.on,perfEl.style.display=perf.on?"block":"none",perfEl.textContent="profiling…"}),setInterval(()=>{if(!perf.on)return;const n=perf.rows(),s=n.map(e=>`${e.type.padEnd(4)} ${e.name.padEnd(9)} ${e.avg.toFixed(2)} ms`),e=gfx.settings,t=document.querySelector("#space canvas");perfEl.textContent=`avg frame ${perf.frameAvg().toFixed(2)} ms over ${perf.frameCount()} frames
`+s.join(`
`)+`

gfx ${e.label} (${gfx.level}/3) · ${t?t.width+"×"+t.height:"?"} · dpr ${e.pixelRatio} · ${e.stars} stars · smaa ${e.smaa?"on":"off"}
`+gfx.lastChange()},500),searchInput=$2("#portfolio-search"),galleryInner=$2("#gallery-inner"),ICONS={github:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>',link:'<svg fill="#ffffff" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z" /><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" /></svg>',youtube:'<svg fill="#ffffff" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_822_"><path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861C204.394,157.263,202.325,160.684,199.021,162.41z" /></g></svg>',jar:'<svg fill="#ffffff" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 305.001 305.001" xml:space="preserve"><g id="XMLID_7_"><path id="XMLID_8_" d="M150.99,56.513c-14.093,9.912-30.066,21.147-38.624,39.734c-14.865,32.426,30.418,67.798,32.353,69.288c0.45,0.347,0.988,0.519,1.525,0.519c0.57,0,1.141-0.195,1.605-0.583c0.899-0.752,1.154-2.029,0.614-3.069c-0.164-0.316-16.418-31.888-15.814-54.539c0.214-7.888,11.254-16.837,22.942-26.312c10.705-8.678,22.839-18.514,29.939-30.02c15.586-25.327-1.737-50.231-1.914-50.479c-0.688-0.966-1.958-1.317-3.044-0.84c-1.085,0.478-1.686,1.652-1.438,2.811c0.035,0.164,3.404,16.633-5.97,33.6C169.301,43.634,160.816,49.603,150.99,56.513z" /><path id="XMLID_9_" d="M210.365,67.682c0.994-0.749,1.286-2.115,0.684-3.205c-0.602-1.09-1.913-1.571-3.077-1.129c-2.394,0.91-58.627,22.585-58.627,48.776c0,18.053,7.712,27.591,13.343,34.556c2.209,2.731,4.116,5.09,4.744,7.104c1.769,5.804-2.422,16.294-4.184,19.846c-0.508,1.022-0.259,2.259,0.605,3.005c0.467,0.403,1.05,0.607,1.634,0.607c0.497,0,0.996-0.148,1.427-0.448c0.967-0.673,23.63-16.696,19.565-36.001c-1.514-7.337-5.12-12.699-8.302-17.43c-4.929-7.329-8.489-12.624-3.088-22.403C181.419,89.556,210.076,67.899,210.365,67.682z" /><path id="XMLID_10_" d="M63.99,177.659c-0.964,2.885-0.509,5.75,1.315,8.283c6.096,8.462,27.688,13.123,60.802,13.123c0.002,0,0.003,0,0.004,0c4.487,0,9.224-0.088,14.076-0.262c52.943-1.896,72.58-18.389,73.39-19.09c0.883-0.764,1.119-2.037,0.57-3.067c-0.549-1.029-1.733-1.546-2.864-1.235c-18.645,5.091-53.463,6.898-77.613,6.898c-27.023,0-40.785-1.946-44.154-3.383c1.729-2.374,12.392-6.613,25.605-9.212c1.263-0.248,2.131-1.414,2.006-2.695c-0.125-1.281-1.201-2.258-2.488-2.258C106.893,164.762,68.05,165.384,63.99,177.659z" /><path id="XMLID_11_" d="M241.148,160.673c-10.92,0-21.275,5.472-21.711,5.705c-1.01,0.541-1.522,1.699-1.245,2.811c0.278,1.111,1.277,1.892,2.423,1.893c0.232,0.001,23.293,0.189,25.382,13.365c1.85,11.367-21.82,29.785-31.097,35.923c-1.002,0.663-1.391,1.945-0.926,3.052c0.395,0.943,1.314,1.533,2.304,1.533c0.173,0,0.348-0.018,0.522-0.056c2.202-0.47,53.855-11.852,48.394-41.927C261.862,164.541,250.278,160.673,241.148,160.673z" /><path id="XMLID_12_" d="M205.725,216.69c0.18-0.964-0.221-1.944-1.023-2.506l-12.385-8.675c-0.604-0.423-1.367-0.556-2.076-0.368c-0.129,0.034-13.081,3.438-31.885,5.526c-7.463,0.837-15.822,1.279-24.175,1.279c-18.799,0-31.091-2.209-32.881-3.829c-0.237-0.455-0.162-0.662-0.12-0.777c0.325-0.905,2.068-1.98,3.192-2.405c1.241-0.459,1.91-1.807,1.524-3.073c-0.385-1.266-1.69-2.012-2.978-1.702c-12.424,2.998-18.499,7.191-18.057,12.461c0.785,9.343,22.428,14.139,40.725,15.408c2.631,0.18,5.477,0.272,8.456,0.272c0.002,0,0.003,0,0.005,0c30.425,0,69.429-9.546,69.819-9.643C204.818,218.423,205.544,217.654,205.725,216.69z" /><path id="XMLID_13_" d="M112.351,236.745c0.938-0.611,1.354-1.77,1.021-2.838c-0.332-1.068-1.331-1.769-2.453-1.755c-1.665,0.044-16.292,0.704-17.316,10.017c-0.31,2.783,0.487,5.325,2.37,7.556c5.252,6.224,19.428,9.923,43.332,11.31c2.828,0.169,5.7,0.254,8.539,0.254c30.39,0,50.857-9.515,51.714-9.92c0.831-0.393,1.379-1.209,1.428-2.127c0.049-0.917-0.409-1.788-1.193-2.267l-15.652-9.555c-0.543-0.331-1.193-0.441-1.813-0.314c-0.099,0.021-10.037,2.082-25.035,4.119c-2.838,0.385-6.392,0.581-10.562,0.581c-14.982,0-31.646-2.448-34.842-4.05C111.843,237.455,111.902,237.075,112.351,236.745z" /><path id="XMLID_14_" d="M133.681,290.018c69.61-0.059,106.971-12.438,114.168-20.228c2.548-2.757,2.823-5.366,2.606-7.07c-0.535-4.194-4.354-6.761-4.788-7.04c-1.045-0.672-2.447-0.496-3.262,0.444c-0.813,0.941-0.832,2.314-0.016,3.253c0.439,0.565,0.693,1.51-0.591,2.795c-2.877,2.687-31.897,10.844-80.215,13.294c-6.619,0.345-13.561,0.519-20.633,0.52c-43.262,0-74.923-5.925-79.079-9.379c1.603-2.301,12.801-5.979,24.711-8.058c1.342-0.234,2.249-1.499,2.041-2.845c-0.208-1.346-1.449-2.273-2.805-2.096c-0.336,0.045-1.475,0.115-2.796,0.195c-19.651,1.2-42.36,3.875-43.545,13.999c-0.36,3.086,0.557,5.886,2.726,8.324c5.307,5.963,20.562,13.891,91.475,13.891C133.68,290.018,133.68,290.018,133.681,290.018z" /><path id="XMLID_15_" d="M261.522,271.985c-0.984-0.455-2.146-0.225-2.881,0.567c-0.103,0.11-10.568,11.054-42.035,17.48c-12.047,2.414-34.66,3.638-67.211,3.638c-32.612,0-63.643-1.283-63.953-1.296c-1.296-0.063-2.405,0.879-2.581,2.155c-0.177,1.276,0.645,2.477,1.897,2.775c0.323,0.077,32.844,7.696,77.31,7.696c21.327,0,42.08-1.733,61.684-5.151c36.553-6.408,39.112-24.533,39.203-25.301C263.082,273.474,262.504,272.44,261.522,271.985z" /></g></svg>'};function cardHTML(e){const t=resolveLink(e.link),s=(e,t=!1)=>(e??[]).map(e=>`<span class="chip${t?" chip-keys":""}" data-word="${e}">${e}</span>`).join("");let n="";return e.github&&(n+=`<a class="card-icon" href="https://github.com/${e.github}" target="_blank" rel="noopener">${ICONS.github}</a>`),t&&(n+=t.endsWith(".jar")?`<a class="card-icon" href="${t}" target="_blank" rel="noopener">${ICONS.jar}</a>`:`<a class="card-icon" href="${t}" target="_blank" rel="noopener">${ICONS.link}</a>`),e.video&&(n+=`<a class="card-icon" href="https://www.youtube.com/watch?v=${e.video}" target="_blank" rel="noopener">${ICONS.youtube}</a>`),`<div class="project-card" style="--image: url('${e.image??""}')">
    <small class="card-year">${e.year}</small>
    <h2 class="card-title">${e.name}</h2>
    <div class="card-desc scroll-container"><small class="card-desc-text">${e.desc}</small></div>
    <div class="card-chips scroll-container">${s(e.langs)}</div>
    ${e.keys&&e.keys.length?`<div class="card-chips card-chips-keys scroll-container">${s(e.keys,!0)}</div>`:""}
    <div class="card-icons scroll-container">${n}</div>
  </div>`}function filteredProjects(e){const n=projects.filter(e=>!e.hidden);if(!e)return n;const t=e.toLowerCase(),s=t.split(" ");return n.filter(e=>s.some(t=>t!==""&&(!!e.name.toLowerCase().includes(t)||!!e.desc.toLowerCase().includes(t)||!!e.langs.some(e=>e.toLowerCase()===t)||!!e.keys?.some(e=>e.toLowerCase()===t)))||e.langs.includes(t)||e.keys?.includes(t))}function renderProjects(e){galleryInner.innerHTML=filteredProjects(e).map(cardHTML).join(""),galleryInner.querySelectorAll(".chip").forEach(e=>e.addEventListener("click",()=>wordClick(e.dataset.word))),galleryInner.classList.toggle("gallery-centered",galleryInner.children.length<=1)}function wordClick(e){searchInput.value=searchInput.value.toLowerCase()===e.toLowerCase()?"":e.toLowerCase(),MQ.selected=searchInput.value?[searchInput.value]:[],updateMarqueeSelection(),renderProjects(searchInput.value)}searchInput.addEventListener("input",()=>{MQ.selected=searchInput.value?[searchInput.value.toLowerCase()]:[],updateMarqueeSelection(),renderProjects(searchInput.value)}),targetPosition=0,scrollFrame=null;function approach(){if(scrollFrame=null,targetPosition===-1)return;if(targetPosition=Math.min(Math.max(targetPosition,0),galleryInner.scrollWidth-galleryInner.clientWidth),Math.abs(targetPosition-galleryInner.scrollLeft)<1){targetPosition=-1;return}galleryInner.scrollLeft=(targetPosition+galleryInner.scrollLeft*2)/3,scrollFrame=requestAnimationFrame(approach)}function tileWidth(){const t=Array.from(galleryInner.children).map(e=>e.offsetLeft??0),e=t.slice(1).map((e,n)=>e-t[n]);return e.length?e.reduce((e,t)=>e+t,0)/e.length:0}galleryInner.addEventListener("wheel",e=>{e.preventDefault();const o=galleryInner.children.length;if(o<=1)return;const t=tileWidth(),s=.5*((e.deltaY||e.detail||0)>0?t:0-t);targetPosition=Math.min(Math.max(galleryInner.scrollLeft+s,0),galleryInner.scrollWidth-galleryInner.clientWidth);const n=targetPosition%t,i=n>t/2?t-n:n;(i<0?-i:i)<s/4&&(targetPosition=Math.round(targetPosition/t)*t),scrollFrame===null&&typeof requestAnimationFrame!="undefined"&&(scrollFrame=requestAnimationFrame(approach))},{passive:!1}),writeupSearch=$2("#writeup-search"),writeupResults=$2("#writeup-results"),writeupStatus=$2("#writeup-status"),writeupEntries=[],writeupLive=!1,writeupBase=cfg.writeupsUrl.replace(/\/search-index\.json$/,"");function parseQuery(e){const n=[],t={type:null,tags:[],ctf:[],cat:[]},o=/"([^"]+)"|(\S+)/g;let s;for(;(s=o.exec(e))!==null;){const e=s[1]||s[2],o=e.toLowerCase(),i=e.match(/^type:(\w+)$/i);if(i){t.type=i[1].toLowerCase();continue}const a=e.match(/^tag:(\w+)$/i);if(a){t.tags.push(a[1].toLowerCase());continue}const r=e.match(/^ctf:(\w+)$/i);if(r){t.ctf.push(r[1].toLowerCase());continue}const c=e.match(/^cat:(\w+)$/i);if(c){t.cat.push(c[1].toLowerCase());continue}if(o==="and"||o==="or")continue;if(o==="not"||e.startsWith("-")){const t=e.startsWith("-")?e.slice(1).toLowerCase():o;t.length>=2&&n.push({type:"exclude",text:t})}else n.push({type:"include",text:o})}return{tokens:n,filters:t}}function searchDocs(e,t){const{tokens:o,filters:n}=parseQuery(t),s=o.filter(e=>e.type==="include").map(e=>e.text),a=o.filter(e=>e.type==="exclude").map(e=>e.text);if(s.length===0&&!n.type&&n.tags.length===0&&n.ctf.length===0&&n.cat.length===0)return e.slice().sort((e,t)=>(t.created||"").localeCompare(e.created||"")).slice(0,50);const i=[];for(const t of e){if(n.type){const e=(t.path||"").startsWith("/blog/"),s=(t.path||"").startsWith("/ctf/")||(t.path||"").startsWith("/htb/");if(n.type==="blog"&&!e)continue;if(n.type==="writeup"&&!s)continue}if(n.tags.length>0){const e=(t.tags||[]).map(e=>e.toLowerCase());if(!n.tags.every(t=>e.includes(t)))continue}if(n.ctf.length>0){const e=(t.path||"").split("/").filter(Boolean),s=e[1]?e[1].replace(/^\d+-/,"").toLowerCase():"";if(!n.ctf.every(e=>s.includes(e)))continue}if(n.cat.length>0){const e=(t.path||"").split("/").filter(Boolean),s=e[2]?e[2].toLowerCase():"";if(!n.cat.every(e=>s===e))continue}const r=(t.title||"").toLowerCase(),c=(t.description||"").toLowerCase(),l=(t.text||"").toLowerCase(),d=(t.tags||[]).join(" ").toLowerCase();let u=!1;for(const e of a)if(r.includes(e)||c.includes(e)||l.includes(e)||d.includes(e)){u=!0;break}if(u)continue;let o=0,h=!0;for(const t of s){let e=0;if(r.includes(t)&&(e+=10),d.includes(t)&&(e+=5),c.includes(t)&&(e+=3),l.includes(t)&&(e+=1),e===0){h=!1;break}o+=e}h&&(o>0||s.length===0)&&i.push({doc:t,score:o||1})}return i.sort((e,t)=>t.score-e.score).slice(0,50).map(e=>e.doc)}function writeupRowHTML(e){const t=(e.tags??[]).slice(0,6).map(e=>`<span class="w-tag">#${e}</span>`).join(""),n=e.dateStr||(e.created?new Date(e.created).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"");return`<a class="w-row" href="${writeupBase}/c${e.path}" target="_blank" rel="noopener">
    <div class="w-row-title">${e.title??e.path.split("/").pop()}</div>
    <div class="w-row-meta">${n}${t?" · "+t:""}</div>
    ${e.description?`<div class="w-row-desc">${e.description}</div>`:""}
  </a>`}function renderWriteups(){const e=writeupSearch.value.trim(),t=searchDocs(writeupEntries,e);writeupResults.innerHTML=t.map(writeupRowHTML).join("");const n=writeupLive?"live index":"local list";writeupEntries.length?e?writeupStatus.textContent=`${t.length} / ${writeupEntries.length} matches · ${n}`:writeupStatus.textContent=`${writeupEntries.length} writeups · ${n}${writeupLive?"":" (v2 index unreachable — using fallback list)"}`:writeupStatus.textContent="no writeups found"}async function loadWriteups(){writeupStatus.textContent="loading index…";try{const e=await fetch(cfg.writeupsUrl,{signal:AbortSignal.timeout(8e3)});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json(),n=Array.isArray(t)?t:t?.entries;if(!Array.isArray(n))throw new Error("unexpected index shape");writeupEntries=n,writeupLive=!0}catch(e){console.warn("[writeups] index unreachable, using local fallback:",e),writeupEntries=data.writeups??[],writeupLive=!1}renderWriteups()}writeupSearch.addEventListener("input",renderWriteups),loadWriteups(),calculateRows(),renderProjects(""),tagline.classList.add("clickable"),initSpace(()=>{const e=document.documentElement.scrollHeight-window.innerHeight;return e>0?Math.min(1,Math.max(0,window.scrollY/e)):0}),window.addEventListener("resize",()=>{calculateRows(),resizeSpace()});export{projects,keywordsWeighted}