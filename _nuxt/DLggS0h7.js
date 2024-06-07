import{g as Al}from"./BosuxZz1.js";import{a as Sr}from"./Cc8bWdRz.js";function Dl(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nl=1e-7,Ml=1e-4;class Fl{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Ns{refCount(t){return ht("refCount")}incRef(t){return ht("incRef")}timerAvailable(){return!0}time(t){return ht("time")}read(t){return ht("read")}readSync(t){return ht("readSync")}readToGPU(t,n){return ht("readToGPU")}numDataIds(){return ht("numDataIds")}disposeData(t,n){return ht("disposeData")}write(t,n,r){return ht("write")}move(t,n,r,s,o){return ht("move")}createTensorFromGPUData(t,n,r){return ht("createTensorFromGPUData")}memory(){return ht("memory")}floatPrecision(){return ht("floatPrecision")}epsilon(){return this.floatPrecision()===32?Nl:Ml}dispose(){return ht("dispose")}}function ht(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ms(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,mn(e,t,n)}function Bl(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,mn(e,n,r),mn(t,n,r)}function Le(e,t,n){return Math.max(e,Math.min(t,n))}function Rl(e){return e%2===0?e:e+1}function mn(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Cl(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Pl(e,t){const n=Math.random();return t*n+(1-n)*e}function Ol(e,t){let n=0;for(let r=0;r<e.length;r++){const s=Number(e[r])-Number(t[r]);n+=s*s}return n}function p(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function it(e,t,n=""){p(Rt(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function he(e){p(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function L(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Ll(e){return e.length===0}function Fs(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function Rt(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ie(e){return e%1===0}function Wl(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function Ul(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function ql(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return Ms(t),t}function Ce(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Gl(e,t=s=>0,n,r){return new Promise((s,o)=>{let a=0;const i=()=>{if(e()){s();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}r!=null?r(i,c):setTimeout(i,c)};i()})}function zl(e,t){let n=1,r=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${o}`);r=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const s=e.slice();return s[r]=t/n,s}function tn(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),p(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),p(e.every(r=>Ie(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function Bs(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||s?null:tn(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),r.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function Rs(e,t){return xr(e,t)}function xr(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Cs(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Ps(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Kl(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function bn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Os(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Ut(e){return typeof e=="string"||e instanceof String}function Ls(e){return typeof e=="boolean"}function Ws(e){return typeof e=="number"}function en(e){return Array.isArray(e)?en(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Ws(e)?"float32":Ut(e)?"string":Ls(e)?"bool":"float32"}function Kt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function wn(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function Ne(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Us(e,t,n,r=!1){const s=new Array;if(t.length===1){const o=t[0]*(r?2:1);for(let a=0;a<o;a++)s[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,l)=>c*l)*(r?2:1);for(let c=0;c<o;c++)s[c]=Us(e+c*i,a,n,r)}return s}function $e(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,o)=>s*o)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Us(0,e,t,n)}function Vl(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function vr(e,t){const n=_n(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function _n(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function Hl(e,t){const n=e.reduce((r,s)=>r*s,1);if(t==null||t==="float32")return $e(e,new Float32Array(n));if(t==="int32")return $e(e,new Int32Array(n));if(t==="bool")return $e(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function pt(e){e.forEach(t=>{p(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function jl(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=n[s]*e[s];return r}function Xl(e,t,n){if(t===0)return[];if(t===1)return[e];const r=new Array(t);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(e/n[s]),e-=r[s]*n[s];return r[r.length-1]=e,r}function An(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const us="tfjsflags";class qs{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Zl,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(N().getBool("IS_TEST")||N().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];N().getBool("IS_TEST")||N().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(An(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);us in t&&t[us].split(",").forEach(r=>{const[s,o]=r.split(":");this.urlFlags[s]=Jl(s,o)})}}function Zl(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(Yl(t,r[0],r[1]),r.join("="))),t}function Yl(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function Jl(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function N(){return Ir}let Ir=null;function Ql(e){Ir=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Kn;function Gs(){if(Kn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Kn=e}return Kn}function tu(){const e=Gs();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function Tr(e,t){const n=tu();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const zs="Abs",Ks="Acos",Vs="Acosh",_r="Add",Hs="AddN",js="All",Xs="Any",Zs="ArgMax",Ys="ArgMin",Js="Asin",Qs="Asinh",to="Atan",eo="Atanh",no="Atan2",ro="AvgPool",eu="AvgPoolGrad",so="AvgPool3D",nu="AvgPool3DGrad",oo="BatchMatMul",ao="BatchToSpaceND",io="Bincount",co="BitwiseAnd",ru="BroadcastTo",lo="BroadcastArgs",Ar="Cast",uo="Ceil",ho="ClipByValue",fo="Complex",po="ComplexAbs",go="Concat",mo="Conv2D",bo="Conv2DBackpropFilter",wo="Conv2DBackpropInput",yo="Conv3D",su="Conv3DBackpropFilterV2",$o="Conv3DBackpropInputV2",Eo="Cos",ko="Cosh",So="Cumprod",xo="Cumsum",vo="CropAndResize",Io="DenseBincount",To="DepthToSpace",_o="DepthwiseConv2dNative",Ao="DepthwiseConv2dNativeBackpropFilter",Do="DepthwiseConv2dNativeBackpropInput",No="Diag",Mo="Dilation2D",ou="Dilation2DBackpropInput",au="Dilation2DBackpropFilter",Dr="Draw",Fo="RealDiv",Bo="Einsum",Ro="Elu",iu="EluGrad",Co="Erf",Po="Equal",Oo="Exp",Lo="ExpandDims",Wo="Expm1",Uo="FFT",qo="Fill",Go="FlipLeftRight",zo="Floor",Ko="FloorDiv",Vo="FusedBatchNorm",Ho="GatherV2",jo="GatherNd",Xo="Greater",Zo="GreaterEqual",Nr="Identity",Yo="IFFT",Jo="Imag",Qo="IsFinite",ta="IsInf",ea="IsNan",na="LeakyRelu",ra="Less",sa="LessEqual",oa="LinSpace",aa="Log",ia="Log1p",ca="LogicalAnd",la="LogicalNot",ua="LogicalOr",cu="LogicalXor",lu="LogSoftmax",uu="LowerBound",ha="LRN",hu="LRNGrad",fu="MatrixBandPart",fa="Max",da="Maximum",pa="MaxPool",du="MaxPoolGrad",ga="MaxPool3D",pu="MaxPool3DGrad",ma="MaxPoolWithArgmax",ba="Mean",wa="Min",ya="Minimum",$a="MirrorPad",Ea="Mod",ka="Multinomial",Sa="Multiply",xa="Neg",va="NotEqual",Ia="NonMaxSuppressionV3",Ta="NonMaxSuppressionV4",_a="NonMaxSuppressionV5",Aa="OnesLike",Da="OneHot",Na="Pack",Ma="PadV2",gu="Pool",Fa="Pow",Ba="Prelu",Ra="Prod",Ca="RaggedGather",Pa="RaggedRange",Oa="RaggedTensorToTensor",La="Range",Wa="Real",Ua="Reciprocal",qa="Relu",Ga="Reshape",za="ResizeNearestNeighbor",mu="ResizeNearestNeighborGrad",Ka="ResizeBilinear",bu="ResizeBilinearGrad",Va="Relu6",Ha="Reverse",ja="Round",Xa="Rsqrt",Za="ScatterNd",Ya="TensorScatterUpdate",Ja="SearchSorted",Qa="Select",ti="Selu",ei="Slice",ni="Sin",ri="Sinh",si="Sign",oi="Sigmoid",ai="Softplus",ii="Sqrt",ci="Sum",li="SpaceToBatchND",ui="SplitV",hi="Softmax",fi="SparseFillEmptyRows",di="SparseReshape",pi="SparseSegmentMean",gi="SparseSegmentSum",mi="SparseToDense",bi="SquaredDifference",wu="Square",wi="StaticRegexReplace",yi="StridedSlice",$i="StringNGrams",Ei="StringSplit",ki="StringToHashBucketFast",Si="Sub",xi="Tan",vi="Tanh",Mr="Tile",Ii="TopK",Ti="Transform",fn="Transpose",_i="Unique",Ai="Unpack",Di="UnsortedSegmentSum",yu="UpperBound",Ni="ZerosLike",Mi="Step",Yn="FromPixels",Fi="RotateWithOffset",Jn="_FusedMatMul",Qn="FusedConv2D",tr="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lt(...e){N().getBool("IS_TEST")||N().getBool("PROD")||console.warn(...e)}function $u(...e){N().getBool("IS_TEST")||N().getBool("PROD")||console.log(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Te=Tr("kernelRegistry",()=>new Map),We=Tr("gradRegistry",()=>new Map);function Ue(e,t){const n=Fr(e,t);return Te.get(n)}function er(e){return We.get(e)}function yn(e){const t=Te.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[o,a]=s,[i]=o.split("_");i===e&&n.push(a)}return n}function Bi(e){const{kernelName:t,backendName:n}=e,r=Fr(t,n);Te.has(r)&&Lt(`The kernel '${t}' for backend '${n}' is already registered`),Te.set(r,e)}function Eu(e){const{kernelName:t}=e;We.has(t)&&N().getBool("DEBUG")&&Lt(`Overriding the gradient for '${t}'`),We.set(t,e)}function ku(e,t){const n=Fr(e,t);if(!Te.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);Te.delete(n)}function Su(e){if(!We.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);We.delete(e)}function xu(e,t){yn(e).forEach(r=>{const s=Object.assign({},r,{backendName:t});Bi(s)})}function Fr(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ri(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var Ci=z,wt=null;try{wt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function z(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}z.prototype.__isLong__;Object.defineProperty(z.prototype,"__isLong__",{value:!0});function gt(e){return(e&&e.__isLong__)===!0}z.isLong=gt;var hs={},fs={};function fe(e,t){var n,r,s;return t?(e>>>=0,(s=0<=e&&e<256)&&(r=fs[e],r)?r:(n=K(e,(e|0)<0?-1:0,!0),s&&(fs[e]=n),n)):(e|=0,(s=-128<=e&&e<128)&&(r=hs[e],r)?r:(n=K(e,e<0?-1:0,!1),s&&(hs[e]=n),n))}z.fromInt=fe;function yt(e,t){if(isNaN(e))return t?te:$t;if(t){if(e<0)return te;if(e>=Pi)return Wi}else{if(e<=-ps)return ft;if(e+1>=ps)return Li}return e<0?yt(-e,t).neg():K(e%_e|0,e/_e|0,t)}z.fromNumber=yt;function K(e,t,n){return new z(e,t,n)}z.fromBits=K;var $n=Math.pow;function Br(e,t,n){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return $t;if(typeof t=="number"?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return Br(e.substring(1),t,n).neg();for(var s=yt($n(n,8)),o=$t,a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a),c=parseInt(e.substring(a,a+i),n);if(i<8){var l=yt($n(n,i));o=o.mul(l).add(yt(c))}else o=o.mul(s),o=o.add(yt(c))}return o.unsigned=t,o}z.fromString=Br;function vt(e,t){return typeof e=="number"?yt(e,t):typeof e=="string"?Br(e,t):K(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}z.fromValue=vt;var ds=65536,vu=1<<24,_e=ds*ds,Pi=_e*_e,ps=Pi/2,gs=fe(vu),$t=fe(0);z.ZERO=$t;var te=fe(0,!0);z.UZERO=te;var ye=fe(1);z.ONE=ye;var Oi=fe(1,!0);z.UONE=Oi;var nr=fe(-1);z.NEG_ONE=nr;var Li=K(-1,2147483647,!1);z.MAX_VALUE=Li;var Wi=K(-1,-1,!0);z.MAX_UNSIGNED_VALUE=Wi;var ft=K(0,-2147483648,!1);z.MIN_VALUE=ft;var x=z.prototype;x.toInt=function(){return this.unsigned?this.low>>>0:this.low};x.toNumber=function(){return this.unsigned?(this.high>>>0)*_e+(this.low>>>0):this.high*_e+(this.low>>>0)};x.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ft)){var n=yt(t),r=this.div(n),s=r.mul(n).sub(this);return r.toString(t)+s.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var o=yt($n(t,6),this.unsigned),a=this,i="";;){var c=a.div(o),l=a.sub(c.mul(o)).toInt()>>>0,h=l.toString(t);if(a=c,a.isZero())return h+i;for(;h.length<6;)h="0"+h;i=""+h+i}};x.getHighBits=function(){return this.high};x.getHighBitsUnsigned=function(){return this.high>>>0};x.getLowBits=function(){return this.low};x.getLowBitsUnsigned=function(){return this.low>>>0};x.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ft)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,n=31;n>0&&!(t&1<<n);n--);return this.high!=0?n+33:n+1};x.isZero=function(){return this.high===0&&this.low===0};x.eqz=x.isZero;x.isNegative=function(){return!this.unsigned&&this.high<0};x.isPositive=function(){return this.unsigned||this.high>=0};x.isOdd=function(){return(this.low&1)===1};x.isEven=function(){return(this.low&1)===0};x.equals=function(t){return gt(t)||(t=vt(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};x.eq=x.equals;x.notEquals=function(t){return!this.eq(t)};x.neq=x.notEquals;x.ne=x.notEquals;x.lessThan=function(t){return this.comp(t)<0};x.lt=x.lessThan;x.lessThanOrEqual=function(t){return this.comp(t)<=0};x.lte=x.lessThanOrEqual;x.le=x.lessThanOrEqual;x.greaterThan=function(t){return this.comp(t)>0};x.gt=x.greaterThan;x.greaterThanOrEqual=function(t){return this.comp(t)>=0};x.gte=x.greaterThanOrEqual;x.ge=x.greaterThanOrEqual;x.compare=function(t){if(gt(t)||(t=vt(t)),this.eq(t))return 0;var n=this.isNegative(),r=t.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};x.comp=x.compare;x.negate=function(){return!this.unsigned&&this.eq(ft)?ft:this.not().add(ye)};x.neg=x.negate;x.add=function(t){gt(t)||(t=vt(t));var n=this.high>>>16,r=this.high&65535,s=this.low>>>16,o=this.low&65535,a=t.high>>>16,i=t.high&65535,c=t.low>>>16,l=t.low&65535,h=0,u=0,d=0,b=0;return b+=o+l,d+=b>>>16,b&=65535,d+=s+c,u+=d>>>16,d&=65535,u+=r+i,h+=u>>>16,u&=65535,h+=n+a,h&=65535,K(d<<16|b,h<<16|u,this.unsigned)};x.subtract=function(t){return gt(t)||(t=vt(t)),this.add(t.neg())};x.sub=x.subtract;x.multiply=function(t){if(this.isZero())return $t;if(gt(t)||(t=vt(t)),wt){var n=wt.mul(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}if(t.isZero())return $t;if(this.eq(ft))return t.isOdd()?ft:$t;if(t.eq(ft))return this.isOdd()?ft:$t;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(gs)&&t.lt(gs))return yt(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,s=this.high&65535,o=this.low>>>16,a=this.low&65535,i=t.high>>>16,c=t.high&65535,l=t.low>>>16,h=t.low&65535,u=0,d=0,b=0,w=0;return w+=a*h,b+=w>>>16,w&=65535,b+=o*h,d+=b>>>16,b&=65535,b+=a*l,d+=b>>>16,b&=65535,d+=s*h,u+=d>>>16,d&=65535,d+=o*l,u+=d>>>16,d&=65535,d+=a*c,u+=d>>>16,d&=65535,u+=r*h+s*l+o*c+a*i,u&=65535,K(b<<16|w,u<<16|d,this.unsigned)};x.mul=x.multiply;x.divide=function(t){if(gt(t)||(t=vt(t)),t.isZero())throw Error("division by zero");if(wt){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var n=(this.unsigned?wt.div_u:wt.div_s)(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?te:$t;var r,s,o;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return te;if(t.gt(this.shru(1)))return Oi;o=te}else{if(this.eq(ft)){if(t.eq(ye)||t.eq(nr))return ft;if(t.eq(ft))return ye;var a=this.shr(1);return r=a.div(t).shl(1),r.eq($t)?t.isNegative()?ye:nr:(s=this.sub(t.mul(r)),o=r.add(s.div(t)),o)}else if(t.eq(ft))return this.unsigned?te:$t;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();o=$t}for(s=this;s.gte(t);){r=Math.max(1,Math.floor(s.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(r)/Math.LN2),c=i<=48?1:$n(2,i-48),l=yt(r),h=l.mul(t);h.isNegative()||h.gt(s);)r-=c,l=yt(r,this.unsigned),h=l.mul(t);l.isZero()&&(l=ye),o=o.add(l),s=s.sub(h)}return o};x.div=x.divide;x.modulo=function(t){if(gt(t)||(t=vt(t)),wt){var n=(this.unsigned?wt.rem_u:wt.rem_s)(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};x.mod=x.modulo;x.rem=x.modulo;x.not=function(){return K(~this.low,~this.high,this.unsigned)};x.and=function(t){return gt(t)||(t=vt(t)),K(this.low&t.low,this.high&t.high,this.unsigned)};x.or=function(t){return gt(t)||(t=vt(t)),K(this.low|t.low,this.high|t.high,this.unsigned)};x.xor=function(t){return gt(t)||(t=vt(t)),K(this.low^t.low,this.high^t.high,this.unsigned)};x.shiftLeft=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?K(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):K(0,this.low<<t-32,this.unsigned)};x.shl=x.shiftLeft;x.shiftRight=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?K(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):K(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};x.shr=x.shiftRight;x.shiftRightUnsigned=function(t){if(gt(t)&&(t=t.toInt()),t&=63,t===0)return this;var n=this.high;if(t<32){var r=this.low;return K(r>>>t|n<<32-t,n>>>t,this.unsigned)}else return t===32?K(n,0,this.unsigned):K(n>>>t-32,0,this.unsigned)};x.shru=x.shiftRightUnsigned;x.shr_u=x.shiftRightUnsigned;x.toSigned=function(){return this.unsigned?K(this.low,this.high,!1):this};x.toUnsigned=function(){return this.unsigned?this:K(this.low,this.high,!0)};x.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};x.toBytesLE=function(){var t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};x.toBytesBE=function(){var t=this.high,n=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};z.fromBytes=function(t,n,r){return r?z.fromBytesLE(t,n):z.fromBytesBE(t,n)};z.fromBytesLE=function(t,n){return new z(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,n)};z.fromBytesBE=function(t,n){return new z(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],n)};const Ui=Al(Ci),Iu=Dl({__proto__:null,default:Ui},[Ci]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=Ui||Iu;function nn(e){return Qt.fromString(e,!0,16)}const qi=nn("c3a5c85c97cb3127"),Jt=nn("b492b66fbe98f273"),ot=nn("9ae16a3b2f90404f");function rr(e){return e.xor(e.shru(47))}function Gi(e,t,n){const r=e.slice(t,t+n);return Qt.fromBytes(Array.from(r),!0,!0)}function U(e,t){return Gi(e,t,8)}function ms(e,t){return Gi(e,t,4)}function tt(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Gt(e,t,n=nn("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let s=t.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Tu(e,t,n,r,s,o){s=s.add(e),o=tt(o.add(s).add(r),21);const a=s;return s=s.add(t),s=s.add(n),o=o.add(tt(s,44)),[s.add(r),o.add(a)]}function un(e,t,n,r){return Tu(U(e,t),U(e,t+8),U(e,t+16),U(e,t+24),n,r)}function _u(e,t=e.length){if(t>=8){const n=ot.add(t*2),r=U(e,0).add(ot),s=U(e,t-8),o=tt(s,37).mul(n).add(r),a=tt(r,25).add(s).mul(n);return Gt(o,a,n)}if(t>=4){const n=ot.add(t*2),r=ms(e,0);return Gt(r.shl(3).add(t),ms(e,t-4),n)}if(t>0){const n=e[0],r=e[t>>1],s=e[t-1],o=n+(r<<8),a=t+(s<<2);return rr(ot.mul(o).xor(qi.mul(a))).mul(ot)}return ot}function Au(e,t=e.length){const n=ot.add(t*2),r=U(e,0).mul(Jt),s=U(e,8),o=U(e,t-8).mul(n),a=U(e,t-16).mul(ot);return Gt(tt(r.add(s),43).add(tt(o,30)).add(a),r.add(tt(s.add(ot),18)).add(o),n)}function Du(e,t=e.length){const n=ot.add(t*2),r=U(e,0).mul(ot),s=U(e,8),o=U(e,t-8).mul(n),a=U(e,t-16).mul(ot),i=tt(r.add(s),43).add(tt(o,30)).add(a),c=Gt(i,r.add(tt(s.add(ot),18)).add(o),n),l=U(e,16).mul(n),h=U(e,24),u=i.add(U(e,t-32)).mul(n),d=c.add(U(e,t-24)).mul(n);return Gt(tt(l.add(h),43).add(tt(u,30)).add(d),l.add(tt(h.add(r),18)).add(u),n)}function Nu(e,t=e.length){const n=Qt.fromNumber(81,!0);if(t<=32)return t<=16?_u(e,t):Au(e,t);if(t<=64)return Du(e,t);let r=n,s=n.mul(Jt).add(113),o=rr(s.mul(ot).add(113)).mul(ot),a=[Qt.UZERO,Qt.UZERO],i=[Qt.UZERO,Qt.UZERO];r=r.mul(ot).add(U(e,0));let c=0;const l=(t-1>>6)*64,h=l+(t-1&63)-63;do r=tt(r.add(s).add(a[0]).add(U(e,c+8)),37).mul(Jt),s=tt(s.add(a[1]).add(U(e,c+48)),42).mul(Jt),r=r.xor(i[1]),s=s.add(a[0]).add(U(e,c+40)),o=tt(o.add(i[0]),33).mul(Jt),a=un(e,c,a[1].mul(Jt),r.add(i[0])),i=un(e,c+32,o.add(i[1]),s.add(U(e,c+16))),[o,r]=[r,o],c+=64;while(c!==l);const u=Jt.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),r=tt(r.add(s).add(a[0]).add(U(e,c+8)),37).mul(u),s=tt(s.add(a[1]).add(U(e,c+48)),42).mul(u),r=r.xor(i[1].mul(9)),s=s.add(a[0].mul(9).add(U(e,c+40))),o=tt(o.add(i[0]),33).mul(u),a=un(e,c,a[1].mul(u),r.add(i[0])),i=un(e,c+32,o.add(i[1]),s.add(U(e,c+16))),[o,r]=[r,o],Gt(Gt(a[0],i[0],u).add(rr(s).mul(qi)).add(o),Gt(a[1],i[1],u).add(r),u)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mu(e,t){return t==="string"?rn(e):Dn([e],t)}function Fu(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Dn(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Vt(e)),N().getBool("DEBUG")&&Cs(e,t),Fu(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function qe(){return N().platform.now()}function Bu(e,t){return N().platform.fetch(e,t)}function rn(e,t="utf-8"){return t=t||"utf-8",N().platform.encode(e,t)}function En(e,t="utf-8"){return t=t||"utf-8",N().platform.decode(e,t)}function et(e){return N().platform.isTypedArray!=null?N().platform.isTypedArray(e):Ri(e)}function Vt(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||An(e)||e==null||et(e)&&n)t.push(e);else if(Array.isArray(e)||et(e))for(let r=0;r<e.length;++r)Vt(e[r],t,n);else{let r=-1;for(const s of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)Vt(e[s],t,n)}return t}const Ru=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Rt,arraysEqualWithNull:Fs,assert:p,assertNonNegativeIntegerDimensions:pt,assertNonNull:he,assertShapesMatch:it,bytesFromStringArray:Os,bytesPerElement:bn,checkConversionForErrors:Cs,clamp:Le,computeStrides:Ne,convertBackendValuesAndArrayBuffer:Vl,createScalarValue:Mu,createShuffledIndices:ql,decodeString:En,distSquared:Ol,encodeString:rn,fetch:Bu,fingerPrint64:Nu,flatten:Vt,getArrayFromDType:xr,getTypedArrayFromDType:Rs,hasEncodingLoss:Kl,hexToLong:nn,indexToLoc:Xl,inferDtype:en,inferFromImplicitShape:zl,isBoolean:Ls,isFunction:Kt,isInt:Ie,isNumber:Ws,isPromise:An,isScalarShape:Ll,isString:Ut,isTypedArray:et,isValidDtype:Ps,locToIndex:jl,makeOnesTypedArray:vr,makeZerosNestedTypedArray:Hl,makeZerosTypedArray:_n,nearestDivisor:wn,nearestLargerEven:Rl,now:qe,parseAxisParam:tn,randUniform:Pl,repeatedTry:Gl,rightPad:Ce,shuffle:Ms,shuffleCombo:Bl,sizeFromShape:L,sizeToSquarishShape:Ul,squeezeShape:Bs,sum:Cl,swap:mn,tanh:Wl,toNestedArray:$e,toTypedArray:Dn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cu{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Ou)}profileKernel(t,n,r){let s;const o=()=>{s=r()};let a;const i=qe();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const l of s)l.dataSync();a=Promise.resolve({kernelMs:qe()-i})}if(N().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const h=s[l];h.data().then(u=>{Pu(u,h.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:o,extraInfo:a}=t;r.forEach(i=>{Promise.all([i.data(),s,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function Pu(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class Ou{logKernelProfile(t,n,r,s,o,a){const i=typeof s=="number"?Ce(`${s}ms`,9):s.error,c=Ce(t,25),l=n.rank,h=n.size,u=Ce(n.shape.toString(),14);let d="";for(const b in o){const w=o[b];if(w!=null){const $=w.shape||n.shape,y=$.length;d+=`${b}: ${y}D ${y>0?$:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${u}	%c${h}	%c${d}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lu(e,t,n){const r={},s={};for(let c=0;c<t.length;c++)r[t[c].id]=!0;for(let c=0;c<e.length;c++){const l=e[c],h=l.inputs;for(const u in h){const d=h[u];let b=!1;for(let w=0;w<t.length;w++)if(r[d.id]){l.outputs.forEach($=>r[$.id]=!0),b=!0,s[l.id]=!0;break}if(b)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const l=e[c],h=l.inputs;for(let u=0;u<l.outputs.length;u++)if(o[l.outputs[u].id]){for(const d in h)o[h[d].id]=!0,a[l.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const l=e[c];if(s[l.id]&&a[l.id]){const h={};for(const d in l.inputs){const b=l.inputs[d];r[b.id]&&(h[d]=b)}const u=Object.assign({},l);u.inputs=h,u.outputs=l.outputs,i.push(u)}}return i}function Wu(e,t,n,r){for(let s=t.length-1;s>=0;s--){const o=t[s],a=[];if(o.outputs.forEach(c=>{const l=e[c.id];l!=null?a.push(l):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=n(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const h=o.inputs[c];if(!Rt(l.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=l;else{const u=e[h.id];e[h.id]=r(u,l),u.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bs=20,Fe=3,Vn=7;function Uu(e,t,n,r){const s=Ne(t),o=qu(e,t,n,s),a=t.length,i=dn(e,t,n,s,o),c=["Tensor"];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function qu(e,t,n,r){const s=L(t),o=r[r.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?Re(e):e;if(i>1)for(let l=0;l<s/o;l++){const h=l*o;for(let u=0;u<o;u++)a[u]=Math.max(a[u],Be(c[h+u],0,n).length)}return a}function Be(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(Vn))} + ${parseFloat(e[1].toFixed(Vn))}j`:Ut(e)?r=`'${e}'`:n==="bool"?r=zi(e):r=parseFloat(e.toFixed(Vn)).toString(),Ce(r,t)}function zi(e){return e===0?"false":"true"}function dn(e,t,n,r,s,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const $=Re(e);return[Be($[0],0,n)]}return n==="bool"?[zi(e[0])]:[e[0].toString()]}if(c===1){if(i>bs){const y=Fe*a;let S=Array.from(e.slice(0,y)),D=Array.from(e.slice((i-Fe)*a,i*a));return n==="complex64"&&(S=Re(S),D=Re(D)),["["+S.map((k,I)=>Be(k,s[I],n)).join(", ")+", ..., "+D.map((k,I)=>Be(k,s[i-Fe+I],n)).join(", ")+"]"]}return["["+(n==="complex64"?Re(e):Array.from(e)).map((y,S)=>Be(y,s[S],n)).join(", ")+"]"]}const l=t.slice(1),h=r.slice(1),u=r[0]*a,d=[];if(i>bs){for(let $=0;$<Fe;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,s,!1))}d.push("...");for(let $=i-Fe;$<i;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,s,$===i-1))}}else for(let $=0;$<i;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,s,$===i-1))}const b=c===2?",":"";d[0]="["+(i>0?d[0]+b:"");for(let $=1;$<d.length-1;$++)d[$]=" "+d[$]+b;let w=`,
`;for(let $=2;$<c;$++)w+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":w),d}function Re(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kn{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=L(t),r!=null){const s=r.length;p(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||xr(n,this.size),this.strides=Ne(t)}set(t,...n){n.length===0&&(n=[0]),p(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return St().makeTensor(this.values,this.shape,this.dtype)}}let St=null,me=null;function Gu(e){St=e}function zu(e){me=e}class Z{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=L(t),this.strides=Ne(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return me.buffer(this.shape,this.dtype,t)}bufferSync(){return me.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return $e(this.shape,t,this.dtype==="complex64")}arraySync(){return $e(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=St().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>En(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),St().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=St().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>En(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await St().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),St().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return me.print(this,t)}clone(){return this.throwIfDisposed(),me.clone(this)}toString(t=!1){const n=this.dataSync();return Uu(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),me.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),St().makeVariable(this,t,n,r)}}Object.defineProperty(Z,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Ki(){return Tr("Tensor",()=>Z)}Ki();class Ge extends Z{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Rt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);St().disposeTensor(this),this.dataId=t.dataId,St().incRef(this,null)}dispose(){St().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ge,Symbol.hasInstance,{value:e=>e instanceof Z&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var sr;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(sr||(sr={}));var or;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(or||(or={}));var ar;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(ar||(ar={}));var ir;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(ir||(ir={}));var cr;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(cr||(cr={}));const Ku={float32:ir,int32:or,bool:ar,complex64:cr};function Nn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return Ku[e][t]}function Vu(e){return Nn(e,"int32")}function Vi(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function Hi(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X(e,t){if(e.dtype===t.dtype)return[e,t];const n=Nn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ji(e,t){p(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function Hu(e,t){return t.some(n=>n.id===e.id)}function Rr(e){const t=[];return Xi(e,t,new Set),t}function Xi(e,t,n){if(e==null)return;if(e instanceof Z){t.push(e);return}if(!ju(e))return;const r=e;for(const s in r){const o=r[s];n.has(o)||(n.add(o),Xi(o,t,n))}}function ju(e){return Array.isArray(e)||typeof e=="object"}const Xu=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:ji,getTensorsInContainer:Rr,isTensorInList:Hu,makeTypesMatch:X},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hn(e){return e.kernelName!=null}class ws{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Ae{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ws}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(Lt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Cu(this.backendInstance),!0}setupRegisteredKernels(){yn(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){yn(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Ns)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,o=r.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Lt(`Initialization of backend ${t} failed`),Lt(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return Lt(`Initialization of backend ${t} failed`),Lt(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:o}=this.initializeBackend(r);if(o||s)return{name:r,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,o=this.readSync(n),a=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,o,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Ae.nextTensorId++}nextVariableId(){return Ae.nextVariableId++}clone(t){const n=m.runKernel(Nr,{x:t}),r={x:t},s=a=>({x:()=>{const i="float32",c={x:a},l={dtype:i};return m.runKernel(Ar,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,o,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(Ue(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let o=0;r.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=Hn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Hn(t)){const{kernelName:w,inputs:$,attrs:y}=t;this.backendName==null&&this.backend;const S=Ue(w,this.backendName);p(S!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const D=this.backend.numDataIds();c=S.kernelFunc({inputs:$,attrs:y,backend:this.backend});const k=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,D,k);const I=k.map(_=>_.rank!=null?_:this.makeTensorFromTensorInfo(_));if(s){const _=this.getTensorsForGradient(w,$,I);r=this.saveTensorsForBackwardMode(_)}return I}}else{const{forwardFunc:w}=t,$=y=>{s&&(r=y.map(S=>this.keep(this.clone(S))))};i=()=>{const y=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,$));const S=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,y,S),S}}const{inputs:h,attrs:u}=t,d=Hn(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(b=this.profiler.profileKernel(l,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),n=b.outputs)}),s&&this.addTapeNode(l,h,n,d,r,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=er(t);if(s!=null){const o=s.inputsToSave||[],a=s.outputsToSave||[];let i;s.saveAllInputs?(p(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(l=>n[l])):i=o.map(l=>n[l]);const c=r.filter((l,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let o=t;r==="string"&&Ut(t[0])&&(o=t.map(c=>rn(c)));const a=s.write(o,n,r),i=new Z(n,r,a,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const c=this.state.tensorInfo.get(a),l=Os(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,n,r,s){r=r||"float32";const o={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(o,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:o}=t,a=new Z(s,o,r,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const o=new Ge(t,n,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*bn(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Ge||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*bn(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:o},c=er(t);c!=null&&(s=c.gradFunc),s!=null&&(i.gradient=l=>(l=l.map((h,u)=>{if(h==null){const d=r[u],b=_n(d.size,d.dtype);return this.makeTensor(b,d.shape,d.dtype)}return h}),s(l.length>1?l:l[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=Rr(t),r=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!r.has(a.id)&&a.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===s.id&&this.track(o)})}gradients(t,n,r,s=!1){if(p(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));p(o instanceof Z,()=>"The result y returned by f() must be a tensor.");const a=Lu(this.state.activeTape,n,o);if(!s&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=r??Zu(o.shape),Wu(i,a,l=>this.tidy(l),Yu);const c=n.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const h of l.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return p(Kt(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{p(n.every(i=>i instanceof Z),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,c)=>{s[c]=i});const o=(i,c)=>(r=t(...n,c),p(r.value instanceof Z,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),p(Kt(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),a=(i,c)=>{const l=r.gradFunc(i,c),h=Array.isArray(l)?l:[l];p(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),p(h.every(d=>d instanceof Z),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const u={};return h.forEach((d,b)=>{u[b]=()=>d}),u};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=qe(),r=await this.backend.time(t);return r.wallMs=qe()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ws;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ae.nextTensorId=0;Ae.nextVariableId=0;function Zu(e){const t=vr(L(e),"float32");return m.makeTensor(t,e,"float32")}function Zi(){const e=Gs();if(e._tfengine==null){const t=new qs(e);e._tfengine=new Ae(t)}return Ql(e._tfengine.ENV),Gu(()=>e._tfengine),e._tfengine}const m=Zi();function Yu(e,t){const n={a:e,b:t};return m.runKernel(_r,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ju(){return typeof navigator<"u"&&navigator!=null}let lr;function Qu(e){lr=e}function th(e){if(lr!==void 0)return lr;if(e||Ju()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Yi(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const eh=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Yi,isMobile:th,mockIsMobile:Qu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lt=N();lt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});lt.registerFlag("IS_BROWSER",()=>Yi());lt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");lt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));lt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));lt.registerFlag("PROD",()=>!1);lt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>lt.getBool("DEBUG"));lt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);lt.registerFlag("IS_TEST",()=>!1);lt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>lt.getBool("DEBUG"));lt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);lt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);lt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function At(e,t){let n=e;if(et(e))return t==="string"?[]:[e.length];if(Vi(e)){const s=e.channels||"RGBA";return[e.height,e.width*s.length]}else if(Hi(e))return[e.buffer.size/(t==null?4:bn(t))];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||et(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&N().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ji(e,r,[]),r}function Ji(e,t,n){if(n=n||[],!Array.isArray(e)&&!et(e)){p(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}p(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),p(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)Ji(e[s],r,n.concat(s))}function ys(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function f(e,t,n,r="numeric"){if(e instanceof Ki())return ys(r,e.dtype,t,n),e;let s=en(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),ys(r,s,t,n),e==null||!et(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=At(e,s);!et(e)&&!Array.isArray(e)&&(e=[e]);const i=s!=="string"?Dn(e,s):Vt(e,[],!0);return m.makeTensor(i,o,s)}function ze(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>f(o,`${t}[${a}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qi="__op";function g(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Qi;const s=(...o)=>{m.startScope(n);try{const a=r(...o);return An(a)&&console.error("Cannot return a Promise inside of tidy."),m.endScope(a),a}catch(a){throw m.endScope(null),a}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nh(e,t){const n=f(e,"real","complex"),r=f(t,"imag","complex");it(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return m.runKernel(fo,s)}const Ht=g({complex_:nh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xt(e,t,n,r){if(r==null)r=en(e);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Hi(e)||Vi(e)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return m.backend.createTensorFromGPUData(e,t||n,r)}if(!et(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){pt(t);const s=L(t),o=L(n);p(s===o,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==L(t.slice(a)):!0;p(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!et(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?Dn(e,r):Vt(e,[],!0),m.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(e,t,n){const r=At(e,n);return Xt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const se={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class It{static join(t){return new It(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(r=>et(r)?r.buffer:r),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let r=0;r<t.length;r++){const s=t[r];r!==t.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=n+s.byteLength;this.shards.push({buffer:s,start:n,end:o}),n=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const r=this.findShardForByte(t);if(r===-1)throw new Error(`Could not find start shard for byte ${t}`);const s=n-t,o=new ArrayBuffer(s),a=new Uint8Array(o);let i=0;for(let c=r;c<this.shards.length;c++){const l=this.shards[c],u=t+i-l.start,d=i,w=Math.min(n,l.end)-l.start,$=new Uint8Array(l.buffer,u,w-u);if(a.set($,d),i+=$.length,n<l.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(s){return t<s.start?-1:t>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=rh(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function rh(e,t){let n=0,r=e.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,o=t(e[s]);if(o===0)return s;o<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sh(){N().set("PROD",!0)}function oh(){N().set("DEBUG",!0)}function ah(){N().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function ih(e){N().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ch(){m.disposeVariables()}function lh(){return m}function uh(){return m.memory()}function hh(e){return m.profile(e)}function Y(e,t){return m.tidy(e,t)}function ct(e){Rr(e).forEach(n=>n.dispose())}function tc(e){return m.keep(e)}function fh(e){return m.time(e)}function dh(e){return m.setBackend(e)}function ph(){return m.ready()}function ec(){return m.backendName}function gh(e){m.removeBackend(e)}function mh(e){return m.findBackend(e)}function bh(e){return m.findBackendFactory(e)}function wh(e,t,n=1){return m.registerBackend(e,t,n)}function nc(){return m.backend}function yh(e,t){N().setPlatform(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jt=4;async function $h(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<s.length;++a){const i=s[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async u=>{const d=await c.bytes(),b=d.reduce((y,S)=>y+S.length,0)+jt*d.length,w=new Uint8Array(b);let $=0;for(let y=0;y<d.length;y++){const S=d[y],D=new Uint8Array(new Uint32Array([S.length]).buffer);w.set(D,$),$+=jt,w.set(S,$),$+=S.length}u(w)});r.push(h)}else r.push(c.data());t!=null&&(l.group=t),n.push(l)}const o=await Promise.all(r);return{data:xh(o),specs:n}}function rc(e,t){const n=new It(e),r={};let s=0;for(const o of t){const a=Eh(o,(i,c)=>n.slice(s+i,s+c));r[o.name]=sc(o,n.slice(s,s+a)),s+=a}return r}function Eh(e,t){const n=L(e.shape);let r;if("quantization"in e){const s=e.quantization;r=se[s.dtype]}else if(e.dtype==="string"){let s=0;for(let o=0;o<n;o++)s+=jt+new Uint32Array(t(s,s+jt))[0];return s}else r=se[e.dtype];return n*r}async function kh(e,t){const n=L(e.shape);let r;if("quantization"in e){const s=e.quantization;r=se[s.dtype]}else if(e.dtype==="string"){let s=0;for(let o=0;o<n;o++)s+=jt+new Uint32Array(await t(s,s+jt))[0];return s}else r=se[e.dtype];return n*r}function sc(e,t){const n=e.name,r=e.dtype,s=e.shape,o=L(s);let a,i=0;if("quantization"in e){const c=e.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${e.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${e.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=se[c.dtype],h=c.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(r==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=d*c.scale+c.min}}else if(c.dtype==="float16")a=Nh()(h);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(r==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=Math.round(d*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=o*l}else if(r==="string"){const c=L(e.shape);a=[];for(let l=0;l<c;l++){const h=new Uint32Array(t.slice(i,i+jt))[0];i+=jt;const u=new Uint8Array(t.slice(i,i+h));a.push(u),i+=h}}else{const c=se[r];if(r==="float32")a=new Float32Array(t);else if(r==="int32")a=new Int32Array(t);else if(r==="bool")a=new Uint8Array(t);else if(r==="complex64"){a=new Float32Array(t);const l=new Float32Array(a.length/2),h=new Float32Array(a.length/2);for(let w=0;w<l.length;w++)l[w]=a[w*2],h[w]=a[w*2+1];const u=Ee(l,s,"float32"),d=Ee(h,s,"float32"),b=Ht(u,d);return u.dispose(),d.dispose(),b}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=o*c}return Ee(a,s,r)}async function $s(e,t,n){let r=new Uint8Array(t);for(;r.byteLength<n;){const{done:s,value:o}=await e.read();if(s&&o==null){const i=n-r.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const a=new Uint8Array(r.length+o.byteLength);a.set(r,0),a.set(new Uint8Array(o),r.length),r=a}return r.buffer}async function Sh(e,t){const n={},r=e.getReader();let s=new ArrayBuffer(0);for(const o of t){const a=await kh(o,async(l,h)=>(s=await $s(r,s,h),s.slice(l,h)));s=await $s(r,s,a);const i=s.slice(0,a);s=s.slice(a);const c=sc(o,i);if(n[o.name]=c,ec()==="webgpu"){const l=nc();"uploadToGPU"in l&&L(c.shape)>=N().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return n}function xh(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(o=>{r.set(new Uint8Array(o.buffer),s),s+=o.byteLength}),r.buffer}const Cr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Es(e){return Cr?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function vh(e){if(Cr)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function Ih(e){if(Cr){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function Th(e){return It.join(e)}function ks(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function oc(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function ac(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function Pr(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),ac(e,n,r)}function sn(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Es(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Es(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new It(e.weightData).byteLength}}function ur(e){const t=[];for(const n of e)t.push(...n.weights);return t}function _h(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Ah(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Dh(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Nh(){const e=_h(),t=Ah(),n=Dh();return r=>{const s=new ArrayBuffer(4*r.length),o=new Uint32Array(s);for(let a=0;a<r.length;a++){const i=r[a],c=e[n[i>>10]+(i&1023)]+t[i>>10];o[a]=c}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class j{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return j.instance==null&&(j.instance=new j),j.instance}static registerSaveRouter(t){j.getInstance().saveRouters.push(t)}static registerLoadRouter(t){j.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return j.getHandlers(t,"save")}static getLoadHandlers(t,n){return j.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?j.getInstance().loadRouters:j.getInstance().saveRouters).forEach(a=>{const i=a(t,r);i!==null&&s.push(i)}),s}}const Mh=e=>j.registerSaveRouter(e),Fh=e=>j.registerLoadRouter(e),Bh=e=>j.getSaveHandlers(e),Rh=(e,t)=>j.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hr="tensorflowjs",fr=1,ee="models_store",qt="model_info_store";function ic(){if(!N().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function dr(e){const t=e.result;t.createObjectStore(ee,{keyPath:"modelPath"}),t.createObjectStore(qt,{keyPath:"modelPath"})}class oe{constructor(t){if(this.indexedDB=ic(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const o=this.indexedDB.open(hr,fr);o.onupgradeneeded=()=>dr(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(ee,"readonly"),l=i.objectStore(ee).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=h=>(a.close(),s(l.error)),i.oncomplete=()=>a.close()}else{n.weightData=It.join(n.weightData);const i=sn(n),c=a.transaction(qt,"readwrite");let l=c.objectStore(qt),h;try{h=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(d){return s(d)}let u;h.onsuccess=()=>{u=a.transaction(ee,"readwrite");const d=u.objectStore(ee);let b;try{b=d.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(w){return s(w)}b.onsuccess=()=>r({modelArtifactsInfo:i}),b.onerror=w=>{l=c.objectStore(qt);const $=l.delete(this.modelPath);$.onsuccess=()=>(a.close(),s(b.error)),$.onerror=y=>(a.close(),s(b.error))}},h.onerror=d=>(a.close(),s(h.error)),c.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}}},o.onerror=a=>s(o.error)})}}oe.URL_SCHEME="indexeddb://";const cc=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(oe.URL_SCHEME)?Ch(e.slice(oe.URL_SCHEME.length)):null;j.registerSaveRouter(cc);j.registerLoadRouter(cc);function Ch(e){return new oe(e)}function Ph(e){return e.startsWith(oe.URL_SCHEME)?e.slice(oe.URL_SCHEME.length):e}class Oh{constructor(){this.indexedDB=ic()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(hr,fr);r.onupgradeneeded=()=>dr(r),r.onsuccess=()=>{const s=r.result,o=s.transaction(qt,"readonly"),i=o.objectStore(qt).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(s.close(),n(i.error)),o.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=Ph(t),new Promise((n,r)=>{const s=this.indexedDB.open(hr,fr);s.onupgradeneeded=()=>dr(s),s.onsuccess=()=>{const o=s.result,a=o.transaction(qt,"readwrite"),i=a.objectStore(qt),c=i.get(t);let l;c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),u=()=>{l=o.transaction(ee,"readwrite");const b=l.objectStore(ee).delete(t);b.onsuccess=()=>n(c.result.modelArtifactsInfo),b.onerror=w=>r(c.error)};h.onsuccess=u,h.onerror=d=>(u(),o.close(),r(c.error))}},c.onerror=h=>(o.close(),r(c.error)),a.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},s.onerror=o=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mt="/",be="tensorflowjs_models",lc="info",Lh="model_topology",Wh="weight_specs",Uh="weight_data",qh="model_metadata";function uc(e){return{info:[be,e,lc].join(Mt),topology:[be,e,Lh].join(Mt),weightSpecs:[be,e,Wh].join(Mt),weightData:[be,e,Uh].join(Mt),modelMetadata:[be,e,qh].join(Mt)}}function hc(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Gh(e){const t=e.split(Mt);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Mt)}function zh(e){return e.startsWith(ae.URL_SCHEME)?e.slice(ae.URL_SCHEME.length):e}class ae{constructor(t){if(!N().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=uc(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=sn(t),o=It.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,vh(o));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw hc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Ih(a),n}}ae.URL_SCHEME="localstorage://";const fc=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ae.URL_SCHEME)?Kh(e.slice(ae.URL_SCHEME.length)):null;j.registerSaveRouter(fc);j.registerLoadRouter(fc);function Kh(e){return new ae(e)}class Vh{constructor(){p(N().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),p(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=be+Mt,r=Mt+lc;for(let s=0;s<this.LS.length;++s){const o=this.LS.key(s);if(o.startsWith(n)&&o.endsWith(r)){const a=Gh(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=zh(t);const n=uc(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return hc(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ke="://";class st{constructor(){this.managers={}}static getInstance(){return st.instance==null&&(st.instance=new st),st.instance}static registerManager(t,n){p(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ke)&&(t=t.slice(0,t.indexOf(ke))),p(t.length>0,()=>"scheme must not be an empty string.");const r=st.getInstance();p(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=st.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(st.getInstance().managers)}}function pn(e){if(e.indexOf(ke)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${st.getSchemes().join(",")}`);return{scheme:e.split(ke)[0],path:e.split(ke)[1]}}async function dc(e,t,n=!1){p(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=j.getLoadHandlers(e);p(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),p(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],o=j.getSaveHandlers(t);p(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),p(o.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const a=o[0],i=pn(e).scheme,c=pn(e).path,l=i===pn(e).scheme,h=await s.load();n&&l&&await st.getManager(i).removeModel(c);const u=await a.save(h);return n&&!l&&await st.getManager(i).removeModel(c),u.modelArtifactsInfo}async function Hh(){const e=st.getSchemes(),t={};for(const n of e){const r=await st.getManager(n).listModels();for(const s in r){const o=n+ke+s;t[o]=r[s]}}return t}async function jh(e){const t=pn(e);return st.getManager(t.scheme).removeModel(t.path)}async function Xh(e,t){return dc(e,t,!1)}async function Zh(e,t){return dc(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yh{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!N().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Ri(t)}}if(N().get("IS_BROWSER")){N().setPlatform("browser",new Yh);try{st.registerManager(ae.URL_SCHEME,new Vh)}catch{}try{st.registerManager(oe.URL_SCHEME,new Oh)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jh={importFetch:()=>require("node-fetch")};let jn;class Qh{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return N().global.fetch!=null?N().global.fetch(t,n):(jn==null&&(jn=Jh.importFetch()),jn(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}N().get("IS_NODE")&&!N().get("IS_BROWSER")&&N().setPlatform("node",new Qh);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ft(e,t="float32",n){return t=t||"float32",pt(e),new kn(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(e,t){const n=f(e,"x","cast");if(!Ps(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return m.runKernel(Ar,r,s)}const V=g({cast_:tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ef(e){const n={x:f(e,"x","clone","string_or_numeric")};return m.runKernel(Nr,n)}const re=g({clone_:ef});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pc(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Zi();const nf={buffer:Ft,cast:V,clone:re,print:pc};zu(nf);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rf(e,t){let n=f(e,"a","add"),r=f(t,"b","add");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(_r,s)}const A=g({add_:rf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sf(e,t){let n=f(e,"a","floorDiv"),r=f(t,"b","floorDiv");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(Ko,s)}const gc=g({floorDiv_:sf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(e,t){let n=f(e,"a","div"),r=f(t,"b","div");if([n,r]=X(n,r),n.dtype==="int32"&&r.dtype==="int32")return gc(n,r);const s={a:n,b:r},o={};return m.runKernel(Fo,s,o)}const G=g({div_:of});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(e,t){let n=f(e,"a","mul"),r=f(t,"b","mul");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(Sa,s)}const v=g({mul_:af});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(e){const t=f(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return m.runKernel(po,n)}else{const n={x:t};return m.runKernel(zs,n)}}const mt=g({abs_:cf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lf(e){const n={x:f(e,"x","acos")};return m.runKernel(Ks,n)}const uf=g({acos_:lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(e){const n={x:f(e,"x","acosh")};return m.runKernel(Vs,n)}const ff=g({acosh_:hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function df(e){p(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),p(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,o)=>f(s,`tensors${o}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!Rt(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return m.runKernel(Hs,r)}const pf=g({addN_:df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(e,t=null,n=!1){const s={x:f(e,"x","all","bool")},o={axis:t,keepDims:n};return m.runKernel(js,s,o)}const mf=g({all_:gf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(e,t=null,n=!1){const s={x:f(e,"x","any","bool")},o={axis:t,keepDims:n};return m.runKernel(Xs,s,o)}const wf=g({any_:bf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(e,t=0){const r={x:f(e,"x","argMax")},s={axis:t};return m.runKernel(Zs,r,s)}const $f=g({argMax_:yf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(e,t=0){const r={x:f(e,"x","argMin")},s={axis:t};return m.runKernel(Ys,r,s)}const kf=g({argMin_:Ef});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sf(e){const n={x:f(e,"x","asin")};return m.runKernel(Js,n)}const xf=g({asin_:Sf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vf(e){const n={x:f(e,"x","asinh")};return m.runKernel(Qs,n)}const If=g({asinh_:vf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tf(e){const n={x:f(e,"x","atan")};return m.runKernel(to,n)}const _f=g({atan_:Tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Af(e,t){let n=f(e,"a","atan2"),r=f(t,"b","atan2");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(no,s)}const Df=g({atan2_:Af});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nf(e){const n={x:f(e,"x","atanh")};return m.runKernel(eo,n)}const Mf=g({atanh_:Nf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(e,t,n,r,s="NHWC",o){const a=e[3],i=[...t,a],c=wc(s);return on(e,i,n,o,r,null,null,c)}function mc(e,t,n,r,s,o,a="channelsLast"){const[i,c]=Ke(t);let l;if(a==="channelsLast")l=[i,c,e[3],e[3]];else if(a==="channelsFirst")l=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return on(e,l,n,r,s,o,!1,a)}function Bf(e,t,n,r,s,o,a="NDHWC"){const[i,c,l]=pr(t);let h,u;if(a==="NDHWC")u="channelsLast",h=[i,c,l,e[4],e[4]];else if(a==="NCDHW")u="channelsFirst",h=[i,c,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return bc(e,h,n,r,s,!1,u,o)}function on(e,t,n,r,s,o,a=!1,i="channelsLast"){let[c,l,h,u]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,h,u]=e;else if(i==="channelsFirst")[c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[d,b,,w]=t,[$,y]=Ke(n),[S,D]=Ke(r),k=Se(d,S),I=Se(b,D),{padInfo:_,outHeight:T,outWidth:R}=Pf(s,l,h,$,y,k,I,o,i),B=a?w*u:w;let M;return i==="channelsFirst"?M=[c,B,T,R]:i==="channelsLast"&&(M=[c,T,R,B]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:h,inChannels:u,outHeight:T,outWidth:R,outChannels:B,padInfo:_,strideHeight:$,strideWidth:y,filterHeight:d,filterWidth:b,effectiveFilterHeight:k,effectiveFilterWidth:I,dilationHeight:S,dilationWidth:D,inShape:e,outShape:M,filterShape:t}}function bc(e,t,n,r,s,o=!1,a="channelsLast",i){let[c,l,h,u,d]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,h,u,d]=e;else if(a==="channelsFirst")[c,d,l,h,u]=e;else throw new Error(`Unknown dataFormat ${a}`);const[b,w,$,,y]=t,[S,D,k]=pr(n),[I,_,T]=pr(r),R=Se(b,I),B=Se(w,_),M=Se($,T),{padInfo:P,outDepth:C,outHeight:Q,outWidth:nt}=Of(s,l,h,u,S,D,k,R,B,M,i),rt=o?y*d:y;let ut;return a==="channelsFirst"?ut=[c,rt,C,Q,nt]:a==="channelsLast"&&(ut=[c,C,Q,nt,rt]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:u,inChannels:d,outDepth:C,outHeight:Q,outWidth:nt,outChannels:rt,padInfo:P,strideDepth:S,strideHeight:D,strideWidth:k,filterDepth:b,filterHeight:w,filterWidth:$,effectiveFilterDepth:R,effectiveFilterHeight:B,effectiveFilterWidth:M,dilationDepth:I,dilationHeight:_,dilationWidth:T,inShape:e,outShape:ut,filterShape:t}}function Rf(e,t,n,r,s){r==null&&(r=Or(e,t,n));const o=e[0],a=e[1],i=Ve((o-t+2*r)/n+1,s),c=Ve((a-t+2*r)/n+1,s);return[i,c]}function Cf(e,t,n,r,s,o){s==null&&(s=Or(e,t[0],r[0]));const a=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*s>=t[i]&&(a[i]=Ve((e[i]-t[i]+2*s)/r[i]+1,o));return a}function Or(e,t,n,r=1){const s=Se(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function Ke(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function pr(e){return typeof e=="number"?[e,e,e]:e}function Se(e,t){return t<=1?e:e+(e-1)*(t-1)}function Pf(e,t,n,r,s,o,a,i,c){let l,h,u;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const b=Rf([t,n],o,r,e,i);h=b[0],u=b[1]}else if(e==="same"){h=Math.ceil(t/r),u=Math.ceil(n/s);const d=Math.max(0,(h-1)*r+o-t),b=Math.max(0,(u-1)*s+a-n),w=Math.floor(d/2),$=d-w,y=Math.floor(b/2),S=b-y;l={top:w,bottom:$,left:y,right:S,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/r),u=Math.ceil((n-a+1)/s);else if(typeof e=="object"){const d=c==="channelsLast"?e[1][0]:e[2][0],b=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],$=c==="channelsLast"?e[2][1]:e[3][1];l={top:d,bottom:b,left:w,right:$,type:d===0&&b===0&&w===0&&$===0?"VALID":"EXPLICIT"},h=Ve((t-o+d+b)/r+1,i),u=Ve((n-a+w+$)/s+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:h,outWidth:u}}function Of(e,t,n,r,s,o,a,i,c,l,h){let u,d,b,w;if(e==="valid"&&(e=0),typeof e=="number"){u={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const y=Cf([t,n,r,1],[i,c,l],1,[s,o,a],e,h);d=y[0],b=y[1],w=y[2]}else if(e==="same"){d=Math.ceil(t/s),b=Math.ceil(n/o),w=Math.ceil(r/a);const $=(d-1)*s+i-t,y=(b-1)*o+c-n,S=(w-1)*a+l-r,D=Math.floor($/2),k=$-D,I=Math.floor(y/2),_=y-I,T=Math.floor(S/2),R=S-T;u={top:I,bottom:_,left:T,right:R,front:D,back:k,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:b,outWidth:w}}function Ve(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function He(e){const[t,n,r]=Ke(e);return t===1&&n===1&&r===1}function Ct(e,t){return He(e)||He(t)}function ie(e){return Ke(e).every(t=>t>0)}function wc(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function kt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")p(Ie(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{p(Ie(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(e,t){const r={x:f(e,"x","reshape","string_or_numeric")},s={shape:t};return m.runKernel(Ga,r,s)}const E=g({reshape_:Lf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wf(e,t,n,r,s){const o=f(e,"x","avgPool","float32"),a=1;p(Ct(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),kt("avgPool",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let u=m.runKernel(ro,l,h);return u=V(u,o.dtype),c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const yc=g({avgPool_:Wf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uf(e,t,n,r,s,o="NDHWC"){const a=f(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),p(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),kt("avgPool3d",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o};let u=m.runKernel(so,l,h);return u=V(u,i.dtype),c?E(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const qf=g({avgPool3d_:Uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(e,t=0){p(e.length>=1,()=>"Pass at least one tensor to concat");const n=ze(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return re(n[0]);const r=n,s={axis:t};return m.runKernel(go,r,s)}const dt=g({concat_:Gf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(e,t,n=!1,r=!1){let s=f(e,"a","matMul"),o=f(t,"b","matMul");[s,o]=X(s,o);const a={a:s,b:o},i={transposeA:n,transposeB:r};return m.runKernel(oo,a,i)}const O=g({matMul_:zf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kf(e){const n={x:f(e,"x","sigmoid","float32")};return m.runKernel(oi,n)}const xe=g({sigmoid_:Kf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(e,t,n){const r=f(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},o={begin:t,size:n};return m.runKernel(ei,s,o)}const H=g({slice_:Vf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(e){const n={x:f(e,"x","tanh","float32")};return m.runKernel(vi,n)}const gr=g({tanh_:Hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(e,t,n,r,s,o){const a=f(e,"forgetBias","basicLSTMCell"),i=f(t,"lstmKernel","basicLSTMCell"),c=f(n,"lstmBias","basicLSTMCell"),l=f(r,"data","basicLSTMCell"),h=f(s,"c","basicLSTMCell"),u=f(o,"h","basicLSTMCell"),d=dt([l,u],1),b=O(d,i),w=A(b,c),$=w.shape[0],y=w.shape[1]/4,S=[$,y],D=H(w,[0,0],S),k=H(w,[0,y],S),I=H(w,[0,y*2],S),_=H(w,[0,y*3],S),T=A(v(xe(D),gr(k)),v(h,xe(A(a,I)))),R=v(gr(T),xe(_));return[T,R]}const Xf=g({basicLSTMCell_:jf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(e,t,n){const r=f(e,"x","batchToSpaceND"),s=t.reduce((i,c)=>i*c);p(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),p(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),p(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const o={x:r},a={blockShape:t,crops:n};return m.runKernel(ao,o,a)}const $c=g({batchToSpaceND_:Zf});function Yf(e){let t;return e.rank===0||e.rank===1?t=E(e,[1,1,1,e.size]):e.rank===2?t=E(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(e,t,n,r,s,o){o==null&&(o=.001);const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;r!=null&&(h=f(r,"offset","batchNorm")),p(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),p(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),p(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Yf(a),scale:l,offset:h,mean:i,variance:c},b={varianceEpsilon:o},w=m.runKernel(Vo,d,b);return E(w,a.shape)}const Mn=g({batchNorm_:Jf});function Qf(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),p(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),p(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const td=g({batchNorm2d_:Qf});function ed(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),p(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),p(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const nd=g({batchNorm3d_:ed});function rd(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),p(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),p(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const sd=g({batchNorm4d_:rd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(e,t,n){const r=f(e,"x","bincount"),s=f(t,"weights","bincount");p(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const o={x:r,weights:s},a={size:n};return m.runKernel(io,o,a)}const Ec=g({bincount_:od});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(e,t){const n=f(e,"x","bitwiseAnd"),r=f(t,"y","bitwiseAnd");if(!Rt(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return m.runKernel(co,s)}const id=g({bitwiseAnd_:ad});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(e,t){const n=f(e,"s0","broadcastArgs","int32"),r=f(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return m.runKernel(lo,s)}const ld=g({broadcastArgs_:cd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(e,t){let n=f(e,"broadcastTo","x");const r=n.shape;if(pt(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=E(n,l)}const s=n.shape,o=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(o.map((l,h)=>l>1?h:-1).filter(l=>l>=0).length===0)return re(n);const i={x:n},c={reps:o};return m.runKernel(Mr,i,c)}const gn=g({broadcastTo_:ud});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hd(e){const n={x:f(e,"x","ceil","float32")};return m.runKernel(uo,n)}const fd=g({ceil_:hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function an(e,t,n){pt(e),n=n||en(t);const r={shape:e,value:t,dtype:n};return m.runKernel(qo,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(e,t,n){const r=f(e,"x","clipByValue");if(p(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return an(r.shape,t,r.dtype);const s={x:r},o={clipValueMin:t,clipValueMax:n};return m.runKernel(ho,s,o)}const pd=g({clipByValue_:dd});function gd(e){return dt(e,0)}const md=g({concat1d_:gd});function bd(e,t){return dt(e,t)}const wd=g({concat2d_:bd});function yd(e,t){return dt(e,t)}const $d=g({concat3d_:yd});function Ed(e,t){return dt(e,t)}const kd=g({concat4d_:Ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd(e,t,n,r,s="NHWC",o=[1,1],a){const i=f(e,"x","conv2d","float32"),c=f(t,"filter","conv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),kt("conv2d",r,a);const u=s==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in conv2d: depth of input (${u}) must match input depth for filter ${c.shape[2]}.`),p(Ct(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(ie(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:l,filter:c},b={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=m.runKernel(mo,d,b);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Fn=g({conv2d_:Sd});function xd(e,t,n,r,s="NWC",o=1,a){const i=f(e,"x","conv1d"),c=f(t,"filter","conv1d");let l=i,h=!1;i.rank===2&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1]])),p(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),p(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),kt("conv1d",r,a),p(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),p(Ct(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),p(ie(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv1D: Stride should be larger than 0."),p(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const u=E(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=E(l,[l.shape[0],1,l.shape[1],l.shape[2]]),y=Fn(d,u,[1,n],r,"NHWC",[1,o],a);return h?E(y,[y.shape[2],y.shape[3]]):E(y,[y.shape[0],y.shape[2],y.shape[3]])}const vd=g({conv1d_:xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(e,t,n,r,s,o="NHWC",a){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,l=!1;t.rank===3&&(l=!0,c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),p(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),p(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),p(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],u=o==="NHWC"?c.shape[3]:c.shape[1];p(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),p(u===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[3]}.`),kt("conv2dDerInput",s,a);const d={dy:c,filter:n},b={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,inputShape:i},w=m.runKernel(wo,d,b);return l?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const kc=g({conv2DBackpropInput_:Id});function Td(e,t,n,r,s,o){const a=f(e,"x","conv2dTranspose"),i=f(t,"filter","conv2dTranspose");return kc(n,a,i,r,s,"NHWC",o)}const _d=g({conv2dTranspose_:Td});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(e,t,n,r,s="NDHWC",o=[1,1,1]){const a=f(e,"x","conv3d"),i=f(t,"filter","conv3d");let c=a,l=!1;a.rank===4&&(l=!0,c=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),p(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),p(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),p(Ct(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),p(ie(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:c,filter:i},u={strides:n,pad:r,dataFormat:s,dilations:o},d=m.runKernel(yo,h,u);return l?E(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Dd=g({conv3d_:Ad});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(e,t,n,r,s){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=E(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],l=a.shape[4];p(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),p(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),p(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),p(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),p(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},u={pad:s,strides:r,inputShape:o},d=m.runKernel($o,h,u);return i?E(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Md=g({conv3DBackpropInput_:Nd});function Fd(e,t,n,r,s){const o=f(e,"x","conv3dTranspose"),a=f(t,"filter","conv3dTranspose");return Md(n,o,a,r,s)}const Bd=g({conv3dTranspose_:Fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(e){const n={x:f(e,"x","cos","float32")};return m.runKernel(Eo,n)}const Cd=g({cos_:Rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(e){const n={x:f(e,"x","cosh","float32")};return m.runKernel(ko,n)}const Od=g({cosh_:Pd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(e,t=0,n=!1,r=!1){const o={x:f(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:r};return m.runKernel(So,o,a)}const Wd=g({cumprod_:Ld});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(e,t=0,n=!1,r=!1){const o={x:f(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:r};return m.runKernel(xo,o,a)}const qd=g({cumsum_:Ud});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(e,t,n,r=!1){const s=f(e,"x","denseBincount"),o=f(t,"weights","denseBincount");p(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),p(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(o.size===s.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${o.shape}.`);const a={x:s,weights:o},i={size:n,binaryOutput:r};return m.runKernel(Io,a,i)}const zd=g({denseBincount_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(e,t,n="NHWC"){const r=f(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],o=n==="NHWC"?r.shape[2]:r.shape[3],a=n==="NHWC"?r.shape[3]:r.shape[1];p(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),p(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),p(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${r.shape}`),p(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${r.shape}`);const i={x:r},c={blockSize:t,dataFormat:n};return m.runKernel(To,i,c)}const Vd=g({depthToSpace_:Kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e,t,n,r,s="NHWC",o=[1,1],a){const i=f(e,"x","depthwiseConv2d","float32"),c=f(t,"filter","depthwiseConv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const u=s==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${u}) must match the inChannels dimension in filter ${c.shape[2]}.`),kt("depthwiseConv2d",r,a);const d={x:l,filter:c},b={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=m.runKernel(_o,d,b);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Lr=g({depthwiseConv2d_:Hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(e){const n={x:f(e,"x","diag")};return m.runKernel(No,n)}const Xd=g({diag_:jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(e,t,n,r,s=[1,1],o="NHWC"){const a=f(e,"x","dilation2d"),i=f(t,"filter","dilation2d");p(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),p(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),p(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,l=!1;a.rank===3&&(c=E(a,[1,a.shape[0],a.shape[1],a.shape[2]]),l=!0),p(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);const h={x:c,filter:i},u={strides:n,pad:r,dilations:s},d=m.runKernel(Mo,h,u);return l?E(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Yd=g({dilation2d_:Zd});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sc(e,t){const n=e.length,r=[];for(let s=0;s<n;s++){const o=n-1-s,a=e[o]||1;(t[t.length-1-s]||1)>1&&a===1&&r.unshift(o)}return r}function Wr(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],o=t.length-r-1,a=t[o];(s==null||s===1&&a>1)&&n.unshift(o)}return n}function J(e,t){const n=Math.max(e.length,t.length),r=new Array(n);for(let s=0;s<n;s++){let o=e[e.length-s-1];o==null&&(o=1);let a=t[t.length-s-1];if(a==null&&(a=1),o===1)r[n-s-1]=a;else if(a===1)r[n-s-1]=o;else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else r[n-s-1]=o}return r}const Jd=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:J,getBroadcastDims:Sc,getReductionAxes:Wr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(e,t){let n=f(e,"a","equal","string_or_numeric"),r=f(t,"b","equal","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Po,s)}const xc=g({equal_:Qd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(e,t,n){const r=f(t,"a","where"),s=f(n,"b","where"),o=f(e,"condition","where","bool"),a=J(J(o.shape,r.shape),s.shape),i=gn(o,a),c=gn(r,a),l=gn(s,a),h={condition:i,t:c,e:l};return m.runKernel(Qa,h)}const zt=g({where_:tp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ep(e){const n={x:f(e,"x","zerosLike")};return m.runKernel(Ni,n)}const bt=g({zerosLike_:ep});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(e,t){let n=f(e,"a","div"),r=f(t,"b","div");[n,r]=X(n,r);const s=G(n,r),o=bt(s),a=xc(r,o);return zt(a,o,s)}const rp=g({divNoNan_:np});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sp(e,t){const n=f(e,"t1","dot"),r=f(t,"t2","dot");p((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],o=r.rank===1?r.size:r.shape[0];if(p(s===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${o}.`),n.rank===1&&r.rank===1){const a=E(n,[1,-1]),i=E(r,[-1,1]),c=O(a,i);return E(c,[])}else if(n.rank===1&&r.rank===2){const a=E(n,[1,-1]),i=E(r,[r.shape[0],r.shape[1]]),c=O(a,i);return E(c,[c.size])}else if(n.rank===2&&r.rank===1){const a=E(r,[-1,1]),i=O(n,a);return E(i,[i.size])}else{const a=E(r,[r.shape[0],r.shape[1]]);return O(n,a)}}const op=g({dot_:sp});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ap(e,...t){const n=t.map((s,o)=>f(s,`tensors${o}`,"einsum")),r={equation:e};return m.runKernel(Bo,n,r)}const we=g({einsum_:ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(e){const n={x:f(e,"x","elu","float32")};return m.runKernel(Ro,n)}const vc=g({elu_:ip});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(e,t){const n=f(e,"x","ensureShape","string_or_numeric");if(!Fs(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const lp=g({ensureShape_:cp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function up(e){let t=f(e,"x","erf");p(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=V(t,"float32"));const n={x:t};return m.runKernel(Co,n)}const hp=g({erf_:up});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ur(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Ic(e,t,n){const r=e.length+t.length,s=[];let o=0,a=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(e[o++]):s.push(t[a++]);return s}function fp(e,t){const n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);const s=t.map(o=>e[o]);return[n,s]}function cn(e,t){const n=t.map(r=>1);return Ic(e,n,t)}function dp(e,t,n){p(Ur(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function pp(e,t){if(Ur(e,t))return null;const n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(r=>n.push(r)),n}function gp(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function mp(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(e,t=null,n=!1){const s={x:f(e,"x","max")},o={reductionIndices:t,keepDims:n};return m.runKernel(fa,s,o)}const ve=g({max_:bp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(e,t=null,n=!1){const s={x:f(e,"x","min")},o={axis:t,keepDims:n};return m.runKernel(wa,s,o)}const mr=g({min_:wp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(e,t){let n=f(e,"base","pow"),r=f(t,"exp","pow");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(Fa,s)}const je=g({pow_:yp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W(e,t){if((et(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&et(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Xt(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(e){const n={x:f(e,"x","sqrt","float32")};return m.runKernel(ii,n)}const Bt=g({sqrt_:$p});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(e){const t=f(e,"x","square"),n={};return m.runKernel("Square",{x:t},n)}const xt=g({square_:Ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(e,t=null,n=!1){let r=f(e,"x","sum");r.dtype==="bool"&&(r=V(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return m.runKernel(ci,s,o)}const q=g({sum_:kp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(e,t="euclidean",n=null,r=!1){e=f(e,"x","norm");const s=Tc(e,t,n);let o=s.shape;if(r){const a=tn(n,e.shape);o=cn(s.shape,a)}return E(s,o)}function Tc(e,t,n=null){if(e.rank===0)return mt(e);if(e.rank!==1&&n===null)return Tc(E(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return q(mt(e),n);if(t===1/0)return ve(mt(e),n);if(t===-1/0)return mr(mt(e),n);if(t==="euclidean"||t===2)return Bt(q(je(mt(e),W(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return ve(q(mt(e),n[0]),n[1]-1);if(t===1/0)return ve(q(mt(e),n[1]),n[0]);if(t===-1/0)return mr(q(mt(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Bt(q(xt(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Bn=g({norm_:Sp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(e,t=null,n=!1){return Bn(e,"euclidean",t,n)}const vp=g({euclideanNorm_:xp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(e){const n={x:f(e,"x","exp")};return m.runKernel(Oo,n)}const ce=g({exp_:Ip});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(e,t=0){const n=f(e,"x","expandDims","string_or_numeric");p(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return m.runKernel(Lo,r,s)}const Ot=g({expandDims_:Tp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(e){const n={x:f(e,"x","expm1")};return m.runKernel(Wo,n)}const Ap=g({expm1_:_p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dp(e,t){const n=f(e,"x","tile","string_or_numeric");p(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return m.runKernel(Mr,r,s)}const Pe=g({tile_:Dp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(e,t,n,r="float32"){t==null&&(t=e);const s=Ft([e,t],r),o=e<=t?e:t;for(let i=0;i<o;++i)s.set(1,i,i);const a=E(s.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return Pe(Ot(a,0),[n[0],1,1]);if(n.length===2)return Pe(Ot(Ot(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return Pe(Ot(Ot(Ot(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const _c=g({eye_:Np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(e){const n={x:f(e,"x","floor","float32")};return m.runKernel(zo,n)}const Ac=g({floor_:Mp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(e,t,n=0,r=0){const s=f(e,"x","gather"),o=f(t,"indices","gather","int32"),a={x:s,indices:o},i={axis:n,batchDims:r};return m.runKernel(Ho,a,i)}const Dc=g({gather_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(e,t){let n=f(e,"a","greater","string_or_numeric"),r=f(t,"b","greater","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Xo,s)}const Rn=g({greater_:Bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(e,t){let n=f(e,"a","greaterEqual","string_or_numeric"),r=f(t,"b","greaterEqual","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Zo,s)}const Nc=g({greaterEqual_:Rp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(e){const n={input:f(e,"input","imag")};return m.runKernel(Jo,n)}const Cn=g({imag_:Cp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(e){const n={x:f(e,"x","isFinite")};return m.runKernel(Qo,n)}const Op=g({isFinite_:Pp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(e){const n={x:f(e,"x","isInf")};return m.runKernel(ta,n)}const Wp=g({isInf_:Lp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(e){const n={x:f(e,"x","isNaN")};return m.runKernel(ea,n)}const qp=g({isNaN_:Up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(e,t=.2){const r={x:f(e,"x","leakyRelu")},s={alpha:t};return m.runKernel(na,r,s)}const Mc=g({leakyRelu_:Gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(e,t){let n=f(e,"a","less","string_or_numeric"),r=f(t,"b","less","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ra,s)}const br=g({less_:zp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kp(e,t){let n=f(e,"a","lessEqual","string_or_numeric"),r=f(t,"b","lessEqual","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(sa,s)}const qr=g({lessEqual_:Kp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return m.runKernel(oa,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(e,t=5,n=1,r=1,s=.5){const o=f(e,"x","localResponseNormalization");p(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),p(Ie(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=E(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},l={depthRadius:t,bias:n,alpha:r,beta:s},h=m.runKernel(ha,c,l);return i?E(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const jp=g({localResponseNormalization_:Hp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(e){const n={x:f(e,"x","log","float32")};return m.runKernel(aa,n)}const Xe=g({log_:Xp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(e){const n={x:f(e,"x","log1p")};return m.runKernel(ia,n)}const Fc=g({log1p_:Zp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yp(e){return p(Kt(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const r=f(t,"x","tf.grad","string_or_numeric"),s=n!=null?f(n,"dy","tf.grad"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(r),[r],s);return s!=null&&it(o.shape,s.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Pn(a),a[0]})}}function Jp(e){return p(Kt(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{p(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const r=ze(t,"args","tf.grads","string_or_numeric"),s=n!=null?f(n,"dy","tf.grads"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(...r),r,s);return s!=null&&it(o.shape,s.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Pn(a),a})}}function Qp(e){return p(Kt(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{p(t instanceof Z,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),p(n==null||n instanceof Z,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:r,value:s}=m.gradients(()=>e(t),[t],n);return Pn(r),{grad:r[0],value:s}}}function tg(e){return p(Kt(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{p(Array.isArray(t)&&t.every(s=>s instanceof Z),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),p(n==null||n instanceof Z,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const r=m.gradients(()=>e(...t),t,n);return n!=null&&it(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Pn(r.grads),r}}function Bc(e,t){p(Kt(e),()=>"The f passed in variableGrads(f) must be a function"),p(t==null||Array.isArray(t)&&t.every(l=>l instanceof Ge),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in m.registeredVariables)t.push(m.registeredVariables[l])}const r=n?t.filter(l=>!l.trainable):null,s=t.length;t=t.filter(l=>l.trainable),p(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const o=!0,{value:a,grads:i}=m.gradients(e,t,null,o);p(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),p(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((l,h)=>{i[h]!=null&&(c[l.name]=i[h])}),r!=null&&r.forEach(l=>c[l.name]=null),{value:a,grads:c}}function Dt(e){return m.customGrad(e)}function Pn(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(e){const n={x:f(e,"x","neg")};return m.runKernel(xa,n)}const _t=g({neg_:eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(e){const n={x:f(e,"x","softplus")};return m.runKernel(ai,n)}const Rc=g({softplus_:ng});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(e){const t=f(e,"x","logSigmoid");return Dt(r=>({value:_t(Rc(_t(r))),gradFunc:a=>v(a,xe(_t(r)))}))(t)}const sg=g({logSigmoid_:rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(e,t){let n=f(e,"a","sub"),r=f(t,"b","sub");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(Si,s)}const F=g({sub_:og});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(e,t=-1){const n=f(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Dt((s,o)=>{const i=ve(s,t,!0),c=F(s,i),l=F(V(c,"float32"),Xe(q(ce(c),t,!0)));return o([l]),{value:l,gradFunc:(u,d)=>{const[b]=d,w=!0,$=ce(b);return F(u,v(q(u,t,w),$))}}})(n)}const ig=g({logSoftmax_:ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(e,t=null,n=!1){const r=f(e,"x","logSumExp"),s=tn(t,r.shape),o=ve(r,s,!0),a=F(r,o),i=ce(a),c=q(i,s),l=Xe(c),h=A(E(o,l.shape),l);if(n){const u=cn(h.shape,s);return E(h,u)}return h}const Cc=g({logSumExp_:cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(e,t){const n=f(e,"a","logicalAnd","bool"),r=f(t,"b","logicalAnd","bool");J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ca,s)}const Sn=g({logicalAnd_:lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(e){const n={x:f(e,"x","logicalNot","bool")};return m.runKernel(la,n)}const Pc=g({logicalNot_:ug});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(e,t){const n=f(e,"a","logicalOr","bool"),r=f(t,"b","logicalOr","bool");J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ua,s)}const Oc=g({logicalOr_:hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(e,t){const n=f(e,"a","logicalXor","bool"),r=f(t,"b","logicalXor","bool");return J(n.shape,r.shape),Sn(Oc(e,t),Pc(Sn(e,t)))}const dg=g({logicalXor_:fg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hn=2147483648;function pg(e,t,n="left"){const r=f(e,"sortedSequence","searchSorted"),s=f(t,"values","searchSorted"),o=r.shape[r.shape.length-1],a=s.shape[s.shape.length-1],i=E(r,[-1,o]),c=E(s,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(L(c.shape)>=hn)throw new Error(`values tensor size must less than ${hn}`);if(i.shape[1]>=hn)throw new Error(`trailing dim_size must less than ${hn} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:c},h={side:n};return m.runKernel(Ja,l,h)}const Gr=g({searchSorted_:pg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(e,t){return Gr(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(e,t,n,r,s){const o=f(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),p(Ct(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),kt("maxPool",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s},u=m.runKernel(pa,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Lc=g({maxPool_:mg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bg(e,t=[1,1,1],n,r,s,o="NDHWC"){const a=f(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),kt("maxPool3d",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o},u=m.runKernel(ga,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const wg=g({maxPool3d_:bg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(e,t,n,r,s=!1){const a={x:f(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},c=m.runKernel(ma,a,i);return{result:c[0],indexes:c[1]}}const $g=g({maxPoolWithArgmax_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(e,t){let n=f(e,"a","maximum"),r=f(t,"b","maximum");[n,r]=X(n,r),n.dtype==="bool"&&(n=V(n,"int32"),r=V(r,"int32")),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(da,s)}const Wc=g({maximum_:Eg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(e,t=null,n=!1){const s={x:f(e,"x","mean")},o={axis:t,keepDims:n};return m.runKernel(ba,s,o)}const xn=g({mean_:kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(e,t="float32"){if(pt(e),t==="complex64"){const r=De(e,"float32"),s=De(e,"float32");return Ht(r,s)}const n=_n(L(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(e,t="float32"){if(pt(e),t==="complex64"){const r=ne(e,"float32"),s=De(e,"float32");return Ht(r,s)}const n=vr(L(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sg(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=f(e,"x","meshgrid",e instanceof Z?e.dtype:"float32");if(t===void 0)return[r];let s=f(t,"y","meshgrid",t instanceof Z?t.dtype:"float32");const o=L(r.shape),a=L(s.shape);return n==="xy"?(r=E(r,[1,-1]),s=E(s,[-1,1]),[O(ne([a,1],r.dtype),r),O(s,ne([1,o],s.dtype))]):(r=E(r,[-1,1]),s=E(s,[1,-1]),[O(r,ne([1,a],r.dtype)),O(ne([o,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(e,t){let n=f(e,"a","minimum"),r=f(t,"b","minimum");[n,r]=X(n,r),n.dtype==="bool"&&(n=V(n,"int32"),r=V(r,"int32")),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ya,s)}const vn=g({minimum_:xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vg(e,t,n){p(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=f(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");p(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)p(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),p(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const o={paddings:t,mode:n},a={x:r};return m.runKernel($a,a,o)}const Ig=g({mirrorPad_:vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(e,t){let n=f(e,"a","mod"),r=f(t,"b","mod");[n,r]=X(n,r);const s={a:n,b:r};return m.runKernel(Ea,s)}const _g=g({mod_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(e,t=null,n=!1){e=f(e,"x","moments");const r=tn(t,e.shape),s=xn(e,r,n);let o=s.shape;n||(o=cn(s.shape,r));const a=xt(F(V(e,"float32"),E(s,o))),i=xn(a,r,n);return{mean:s,variance:i}}const Dg=g({moments_:Ag});function Ng(e,t,n,r){const s=f(t,"data","multiRNNCell"),o=ze(n,"c","multiRNNCell"),a=ze(r,"h","multiRNNCell");let i=s;const c=[];for(let u=0;u<e.length;u++){const d=e[u](i,o[u],a[u]);c.push(d[0]),c.push(d[1]),i=d[1]}const l=[],h=[];for(let u=0;u<c.length;u+=2)l.push(c[u]),h.push(c[u+1]);return[l,h]}const Mg=g({multiRNNCell_:Ng});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(e,t,n,r=!1){const s=f(e,"logits","multinomial"),o=s.size,a=s.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);n=n||Math.random();const c={logits:a===1?E(s,[1,-1]):s},l={numSamples:t,seed:n,normalized:r},h=m.runKernel(ka,c,l);return a===1?E(h,[h.size]):h}const Bg=g({multinomial_:Fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rg(e,t){let n=f(e,"a","notEqual","string_or_numeric"),r=f(t,"b","notEqual","string_or_numeric");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(va,s)}const Uc=g({notEqual_:Rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:f(e,"indices","oneHot","int32")},i={dtype:s,depth:t,onValue:n,offValue:r};return m.runKernel(Da,a,i)}const wr=g({oneHot_:Cg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(e){const n={x:f(e,"x","onesLike")};return m.runKernel(Aa,n)}const Og=g({onesLike_:Pg});function Lg(e,t){const n=f(e,"v1","outerProduct"),r=f(t,"v2","outerProduct");p(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=E(n,[-1,1]),o=E(r,[1,-1]);return O(s,o)}const Wg=g({outerProduct_:Lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(e,t,n=0){const r=f(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},o={x:r};return m.runKernel(Ma,o,s)}const ln=g({pad_:Ug});function qg(e,t,n=0){return p(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),ln(e,[t],n)}const Gg=g({pad1d_:qg});function zg(e,t,n=0){return p(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Kg=g({pad2d_:zg});function Vg(e,t,n=0){return p(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Hg=g({pad3d_:Vg});function jg(e,t,n=0){return p(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Xg=g({pad4d_:jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(e,t,n){const r=f(e,"x","spaceToBatchND");p(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),p(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),p(r.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},o={blockShape:t,paddings:n};return m.runKernel(li,s,o)}const qc=g({spaceToBatchND_:Zg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yg(e,t,n,r,s,o,a){s==null&&(s=[1,1]),o==null&&(o=1),r===0&&(r="valid");const i=f(e,"x","maxPool");let c=i,l=!1;i.rank===3&&(l=!0,c=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(Ct(o,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${s}'`);const h=mc(c.shape,t,o,s,r),u=[h.dilationHeight,h.dilationWidth];let d;r==="same"?d=Qg([h.filterHeight,h.filterWidth],u):d=[[0,0],[0,0]];const b=u[0]===1&&u[1]===1,[w,$]=Jg([h.inHeight,h.inWidth],u,d),y=b?r:"valid",S=b?c:qc(c,u,w),k=(n==="avg"?()=>yc(S,t,o,y,a):()=>Lc(S,t,o,y,a))(),I=b?k:$c(k,u,$);return l?E(I,[I.shape[1],I.shape[2],I.shape[3]]):I}function Jg(e,t,n){const r=n.map(h=>h[0]),s=n.map(h=>h[1]),o=e.concat(r,s),a=t.map((h,u)=>(h-o[u]%h)%h),i=s.map((h,u)=>h+a[u]),c=t.map((h,u)=>[r[u],i[u]]),l=t.map((h,u)=>[0,a[u]]);return[c,l]}function Qg(e,t){const r=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),s=r.map(a=>Math.floor(a/2)),o=r.map((a,i)=>a-s[i]);return r.map((a,i)=>[s[i],o[i]])}const tm=g({pool_:Yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(e,t){const n=f(e,"x","prelu"),r=f(t,"alpha","prelu"),s={x:n,alpha:r};return m.runKernel(Ba,s)}const Gc=g({prelu_:em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(e,t=null,n=!1){let r=f(e,"x","prod");r.dtype==="bool"&&(r=V(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return m.runKernel(Ra,s,o)}const rm=g({prod_:nm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sm(e,t,n,r){const s=e.map((h,u)=>f(h,`tensors${u}`,"raggedGather","int32")),o=f(t,"paramsDenseValues","raggedGather"),a=f(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:o,indices:a},c={outputRaggedRank:r},l=m.runKernel(Ca,i,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const om=g({raggedGather_:sm});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(e,t,n){const r=f(e,"starts","raggedRange"),s=f(t,"limits","raggedRange",r.dtype),o=f(n,"deltas","raggedRange",r.dtype),a={starts:r,limits:s,deltas:o},i=m.runKernel(Pa,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const im=g({raggedRange_:am});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(e,t,n,r,s){const o=f(e,"shape","raggedTensorToTensor","int32"),a=f(t,"values","raggedTensorToTensor"),i=f(n,"defaultValue","raggedTensorToTensor",a.dtype),c=r.map((u,d)=>f(u,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:o,values:a,defaultValue:i,rowPartitionTensors:c},h={rowPartitionTypes:s};return m.runKernel(Oa,l,h)}const lm=g({raggedTensorToTensor_:cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(e,t,n){pt(e);const r=L(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<r;o++)s[o]=t();return m.makeTensor(s,e,n)}const hm=g({rand_:um});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fm=.001,zc=.1;function dm(e,t,n){return n==null&&(n=zr()),yr(e,t,(r,s)=>Kr(r,s,n))}function zr(){return m.backend.floatPrecision()===32?fm:zc}function yr(e,t,n){let r=!0;if((et(e)||et(t))&&(r=!1),et(e)&&et(t)&&(r=!0),r){const a=e.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(e)&&Array.isArray(t)){const a=At(e),i=At(t);if(!Rt(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}const s=et(e)?e:Vt(e),o=et(t)?t:Vt(t);if(s.length!==o.length)throw new Error(`Arrays have different lengths actual: ${s.length} vs expected: ${o.length}.
Actual:   ${s}.
Expected: ${o}.`);for(let a=0;a<o.length;++a){const i=s[a],c=o[a];if(!n(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${s}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function pm(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function gm(e,t){const n=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return Ut(e)||Ut(e[0])||Ut(t)||Ut(t[0])?yr(e,n,(r,s)=>r==s):yr(e,t,(r,s)=>Kr(r,s,0))}function mm(e,t,n){if(n==null&&(n=zr()),!Kr(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function Kr(e,t,n){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function bm(e,t,n){for(let r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw new Error(`Value out of range:${e[r]} low: ${t}, high: ${n}`)}function wm(e,t){const n=new Float32Array(e),r=new Float32Array(t);if(n.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);for(let s=0;s<r.length;s++)if(n[s]!==r[s])throw new Error(`Expected ArrayBuffer value at ${s} to be ${r[s]} but got ${n[s]} instead`)}function Kc(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?Kc(n):e[t]=rn(n)}return e}function ym(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(n=>{t.addEventListener("loadeddata",r=>n(t)),t.load()})}async function $m(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const Em=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:zc,createVideoElement:ym,encodeStrings:Kc,expectArrayBuffersEqual:wm,expectArraysClose:dm,expectArraysEqual:gm,expectNumbersClose:mm,expectPromiseToFail:pm,expectValuesInRange:bm,play:$m,testEpsilon:zr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vr{constructor(t,n,r,s,o){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=Sr.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,o,a;do s=2*this.random()-1,o=2*this.random()-1,a=s*s+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class km{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const o=s||Math.random();this.randu=Sr.alea(o.toString()),this.randn=new Vr(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,o,a;for(;;){do s=this.randn.nextValue(),a=1+this.c*s;while(a<=0);if(a*=a*a,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<n||Math.log(o)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Sm{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=Sr.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(e,t,n=1,r="float32",s){if(pt(e),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const o=new km(t,n,r,s),a=Ft(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const vm=g({randomGamma_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Im(e,t=0,n=1,r,s){if(pt(e),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const o=new Vr(t,n,r,!1,s),a=Ft(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Vc=g({randomNormal_:Im});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return Vc(e,0,1,t,n)}const _m=g({randomStandardNormal_:Tm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(e,t=0,n=1,r="float32",s){pt(e);const o=Ft(e,r),a=new Sm(t,n,null,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Hr=g({randomUniform_:Am});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(e,t,n,r){return Hr(e,t,n,"int32",r)}const Nm=g({randomUniformInt_:Dm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ze(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return m.runKernel(La,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(e){const n={input:f(e,"input","real")};return m.runKernel(Wa,n)}const Ye=g({real_:Mm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fm(e){const n={x:f(e,"x","reciprocal")};return m.runKernel(Ua,n)}const Bm=g({reciprocal_:Fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(e){const n={x:f(e,"x","relu")};return m.runKernel(qa,n)}const On=g({relu_:Rm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(e){const n={x:f(e,"x","relu6")};return m.runKernel(Va,n)}const Hc=g({relu6_:Cm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(e,t){const r={x:f(e,"x","reverse")},s={dims:t};return m.runKernel(Ha,r,s)}const le=g({reverse_:Pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(e){const t=f(e,"x","reverse");return p(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),le(t,0)}const Lm=g({reverse1d_:Om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(e,t){const n=f(e,"x","reverse");return p(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),le(n,t)}const Um=g({reverse2d_:Wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(e,t){const n=f(e,"x","reverse");return p(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),le(n,t)}const Gm=g({reverse3d_:qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(e,t){const n=f(e,"x","reverse");return p(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),le(n,t)}const Km=g({reverse4d_:zm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(e){const n={x:f(e,"x","round")};return m.runKernel(ja,n)}const jc=g({round_:Vm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(e){const n={x:f(e,"x","rsqrt","float32")};return m.runKernel(Xa,n)}const jm=g({rsqrt_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(e){const n={x:f(e,"x","selu")};return m.runKernel(ti,n)}const Zm=g({selu_:Xm});function Ym(e,t,n,r,s,o=[1,1],a="NHWC"){const i=f(e,"x","separableConv2d"),c=f(t,"depthwiseFilter","separableConv2d"),l=f(n,"pointwiseFilter","separableConv2d");let h=i,u=!1;if(i.rank===3&&(u=!0,h=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");p(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),p(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),p(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),p(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),p(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=c.shape[2],b=c.shape[3];p(l.shape[2]===d*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*b}, but got ${l.shape[2]}.`);const w=Lr(h,c,r,s,a,o),y=Fn(w,l,1,"valid",a);return u?E(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const Jm=g({separableConv2d_:Ym});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Qm(e,t){const n=f(e,"x","setdiff1d"),r=f(t,"y","setdiff1d");p(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),p(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),p(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),o=await r.data(),a=new Set(o);let i=0;for(let h=0;h<s.length;h++)a.has(s[h])||i++;const c=new kn([i],n.dtype),l=new kn([i],"int32");for(let h=0,u=0;h<s.length;h++)a.has(s[h])||(c.values[u]=s[h],l.values[u]=h,u++);return[c.toTensor(),l.toTensor()]}const tb=Qm;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(e){const n={x:f(e,"x","sign")};return m.runKernel(si,n)}const nb=g({sign_:eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rb(e){const n={x:f(e,"x","sin","float32")};return m.runKernel(ni,n)}const sb=g({sin_:rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(e){const n={x:f(e,"x","sinh")};return m.runKernel(ri,n)}const ab=g({sinh_:ob});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(e,t,n){const r=f(e,"x","slice1d");return p(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),H(r,[t],[n])}const cb=g({slice1d_:ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(e,t,n){const r=f(e,"x","slice2d");return p(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),H(r,t,n)}const ub=g({slice2d_:lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(e,t,n){const r=f(e,"x","slice3d");return p(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),H(r,t,n)}const fb=g({slice3d_:hb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(e,t,n){const r=f(e,"x","slice4d");return p(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),H(r,t,n)}const pb=g({slice4d_:db});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(e,t=-1){const n=f(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return m.runKernel(hi,r,s)}const mb=g({softmax_:gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Uo,t)}const jr=g({fft_:bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Yo,t)}const In=g({ifft_:wb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=E(e,[n,t]);r=In(s)}else{const s=[n,2*(t-1)],o=E(Ye(e),[n,t]),a=E(Cn(e),[n,t]),i=le(H(o,[0,1],[n,t-2]),1),c=v(le(H(a,[0,1],[n,t-2]),1),W(-1)),l=dt([o,i],1),h=dt([a,c],1),u=E(Ht(l,h),[s[0],s[1]]);r=In(u)}if(r=Ye(r),e.rank===3&&e.shape[0]!==0){const s=r,o=e.shape[0];r=E(r,[o,r.shape[0]/o,r.shape[1]]),s.dispose()}return r}const Xc=g({irfft_:yb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(e,t,n=0){const s={x:f(e,"x","split")},o={numOrSizeSplits:t,axis:n};return m.runKernel(ui,s,o)}const Je=g({split_:$b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(e,t){p(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const w=e.shape.map(y=>0),$=e.shape.map(y=>y);$[e.shape.length-1]=t,s=H(e,w,$),n=t}else if(t!=null&&t>n){const w=e.shape.map($=>$);w[e.shape.length-1]=t-n,s=dt([e,De(w)],e.shape.length-1),n=t}else s=e;const o=bt(s),a=E(Ht(s,o),[r,n]),i=jr(a),c=Math.floor(n/2)+1,l=Ye(i),h=Cn(i),u=Je(l,[c,n-c],l.shape.length-1),d=Je(h,[c,n-c],h.shape.length-1),b=s.shape.slice();return b[s.shape.length-1]=c,E(Ht(u[0],d[0]),b)}const Xr=g({rfft_:Eb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(e,t){let n=f(e,"a","squaredDifference"),r=f(t,"b","squaredDifference");[n,r]=X(n,r),J(n.shape,r.shape);const s={a:n,b:r},o={};return m.runKernel(bi,s,o)}const Zc=g({squaredDifference_:kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sb(e,t){const n=f(e,"x","squeeze","string_or_numeric");return E(n,Bs(n.shape,t).newShape)}const Zr=g({squeeze_:Sb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(e,t=0){const n=ze(e,"tensors","stack","string_or_numeric");p(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&p(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return m.runKernel(Na,r,s)}const Qe=g({stack_:xb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(e,t=0){const r={x:f(e,"x","step")},s={alpha:t};return m.runKernel(Mi,r,s)}const Yc=g({step_:vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(e,t,n,r,s=0,o=0,a=0,i=0,c=0){const h={x:f(e,"x","stridedSlice","string_or_numeric")},u={begin:t,end:n,strides:r,beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return m.runKernel(yi,h,u)}const Tb=g({stridedSlice_:Ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(e){const n={x:f(e,"x","tan","float32")};return m.runKernel(xi,n)}const Ab=g({tan_:_b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Et(e,t){he(e);const n=At(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Xt(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oe(e,t,n){if(he(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=At(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Xt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jc(e,t,n){if(he(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=At(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Xt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(e,t,n){if(he(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=At(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Xt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(e,t,n){if(he(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=At(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Xt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(e,t,n){if(he(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=At(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,Xt(e,t,r,n)}function Yr(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(o+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(o+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(o+` update.rank != ${s+e.length-r}`);for(let a=0;a<s;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-s;++a)if(n.shape[a+s]!==e[a+r])throw new Error(o+` updates.shape[${a+s}] (${n.shape[a+s]}) != shape[${a+s}] (${e[a+s]})`)}function Ln(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Yr(n,t,e)}function Qc(e,t,n){const r=t.shape.length,s=r>1?t.shape[r-1]:1,o=n.length;let a=1;for(let u=s;u<o;++u)a*=n[u];const i=s<1?1:s,c=L(t.shape)/i,l=[...Ne(n.slice(0,s)),1],h=L(n);return{sliceRank:s,numUpdates:c,sliceSize:a,strides:l,outputSize:h}}const Fb=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Qc,validateInput:Ln,validateUpdateShape:Yr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(e,t,n){const r=f(e,"tensor","tensorScatterupdate"),s=f(t,"indices","tensorScatterupdate","int32"),o=f(n,"updates","tensorScatterupdate");if(Ln(o,s,r.shape),r.dtype!==o.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${o.dtype}.`);const a={tensor:r,indices:s,updates:o},i={};return m.runKernel(Ya,a,i)}const Rb=g({tensorScatterUpdate_:Bb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(e,t=1,n=!0){const r=f(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const o={x:r},a={k:t,sorted:n},[i,c]=m.runKernel(Ii,o,a);return{values:i,indices:c}}const Pb=g({topk_:Cb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(e,t=0,n=1,r,s){if(pt(e),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Vr(t,n,r,!0,s),a=Ft(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Lb=g({truncatedNormal_:Ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(e,t=0){const n=f(e,"x","unique","string_or_numeric");p(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[o,a]=m.runKernel(_i,r,s);return{values:o,indices:a}}const Ub=g({unique_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(e,t,n){const r=f(e,"x","unsortedSegmentSum"),s=f(t,"segmentIds","unsortedSegmentSum","int32");p(Ie(n),()=>"numSegments must be of dtype int");const o={x:r,segmentIds:s},a={numSegments:n};return m.runKernel(Di,o,a)}const Gb=g({unsortedSegmentSum_:qb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(e,t=0){const n=f(e,"x","unstack","string_or_numeric");p(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return m.runKernel(Ai,r,s)}const Jr=g({unstack_:zb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(e,t){return Gr(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(e,t=!0,n,r){return m.makeVariable(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tl(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const r=Ft(e,"int32"),s=Ft([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=r.indexToLoc(n[o]),i=o*e.length;s.values.set(a,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Hb(e){const t=f(e,"condition","whereAsync","bool"),n=await t.data(),r=tl(t.shape,n);return e!==t&&t.dispose(),r}const el=Hb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function jb(e,t,n){const r=f(e,"tensor","boolMask"),s=f(t,"mask","boolMask","bool"),o=n??0,a=s.rank,i=r.shape;p(a>0,()=>"mask cannot be scalar"),it(i.slice(o,o+a),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let $=o;$<o+a;$++)c*=i[$];const l=i.slice(0,o).concat([c],i.slice(o+a)),h=E(r,l),u=E(s,[-1]),d=await el(u),b=Zr(d,[1]),w=Dc(h,b,o);return e!==r&&r.dispose(),t!==s&&s.dispose(),b.dispose(),h.dispose(),u.dispose(),d.dispose(),w}const Xb=jb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(e,t,n){const r=f(e,"x","transpose");if(t==null&&(t=r.shape.map((a,i)=>i).reverse()),p(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(a=>{p(a>=0&&a<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},o={perm:t};return r.dtype==="complex64"?Y(()=>{let a=Ye(r),i=Cn(r);return a=m.runKernel(fn,{x:a},o),i=m.runKernel(fn,{x:i},o),n&&(i=_t(i)),Ht(a,i)}):m.runKernel(fn,s,o)}const Tn=g({transpose_:Zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(e,t,n,r,s=!0){const o=f(e,"v","movingAverage"),a=f(t,"x","movingAverage"),i=f(n,"decay","movingAverage");ji(o,a),p(Rt(o.shape,a.shape),()=>"Shape mismatch in v and x");const c=W(1),l=F(c,i);let h=v(F(a,o),l);if(s){p(r!=null,()=>"When using zeroDebias: true, step is required.");const u=f(r,"step","movingAverage");h=G(h,F(c,je(i,u)))}return A(o,h)}const Jb=g({movingAverage_:Yb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(e,t,n){pt(n);const r=f(e,"indices","scatterND","int32"),s=f(t,"updates","scatterND");Ln(s,r,n);const o={indices:r,updates:s},a={shape:n};return m.runKernel(Za,o,a)}const tw=g({scatterND_:Qb});function ew(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(e,t,n,r=0){pt(n);const s=f(e,"sparseIndices","sparseToDense","int32"),o=f(t,"sparseValues","sparseToDense","string_or_numeric"),a=f(r,"defaultValue","sparseToDense",o.dtype);ew(s,o,n,a);const i={sparseIndices:s,sparseValues:o,defaultValue:a},c={outputShape:n};return m.runKernel(mi,i,c)}const rw=g({sparseToDense_:nw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(e,t){const n=f(t,"indices","gatherND","int32"),s={params:f(e,"x","gatherND","string_or_numeric"),indices:n};return m.runKernel(jo,s)}const ow=g({gatherND_:sw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(e,t){if(t==null)return e.shape.slice();if(Rt(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(e,t,n,r){const s=f(e,"x","dropout");if(p(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),p(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Z?s.clone():s;const o=aw(s,n),a=1-t,i=G(Ac(A(Hr(o,0,1,"float32",r),a)),a);return v(s,i)}const cw=g({dropout_:iw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nl(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Qr(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let o=0;o<e;++o){const a=2*Math.PI*o/(e+r-1);s[o]=t-n*Math.cos(a)}return Et(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function lw(e,t,n=1){const r=f(e,"predictions","inTopK"),s=f(t,"targets","inTopK");p(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),p(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),it(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=r.shape[r.shape.length-1];p(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const a=await r.data(),i=await s.data(),[c,l]=[a.length/o,o],h=Rs("bool",c);for(let u=0;u<c;u++){const d=u*l,b=a.subarray(d,d+l),w=[];for(let $=0;$<b.length;$++)w.push({value:b[$],index:$});w.sort(($,y)=>y.value-$.value),h[u]=0;for(let $=0;$<n;$++)if(w[$].index===i[u]){h[u]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),Ee(h,s.shape,"bool")}const uw=lw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(e,t,n,r,s,o="NHWC",a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]])),p(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),p(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),p(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];p(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),p(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),kt("conv2dDerFilter",s,a);const u={x:i,dy:c},d={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,filterShape:n};return m.runKernel(bo,u,d)}const fw=g({conv2DBackpropFilter_:hw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wn(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return v(e,Yc(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Un(e,t){let n=t;const r=Wr(e.shape,t.shape);return r.length>0&&(n=q(n,r)),E(n,e.shape)}function qn(e,t,n,r){if(t==="linear")return e;if(t==="relu")return On(e);if(t==="elu")return vc(e);if(t==="relu6")return Hc(e);if(t==="prelu")return Gc(e,n);if(t==="leakyrelu")return Mc(e,r);if(t==="sigmoid")return xe(e);throw new Error(`Unknown fused activation ${t}.`)}const Gn=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(c=c||"linear",Gn(m.state.gradientDepth,c)===!1){p(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let T=Fn(e,t,n,r,s,o,a);return i!=null&&(T=A(T,i)),qn(T,c,l,h)}const u=f(e,"x","conv2d","float32"),d=f(t,"filter","conv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=E(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),kt("fused conv2d",r,a);const $=s==="NHWC"?b.shape[3]:b.shape[1];p(d.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${d.shape[2]}.`),p(Ct(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const y=on(b.shape,d.shape,n,o,r,a);let S;i!=null&&(S=f(i,"bias","fused conv2d"),[S]=X(S,u),s==="NHWC"?J(y.outShape,S.shape):(p(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),p(S.shape.length===0||S.shape[0]===y.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${y.outChannels})`)));let D;if(l!=null){const T=l.shape;if(p(T.length<=1||T.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${T.length}.`),T.length===1)p(T[0]===1||T[0]===y.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${T}) is not compatible with the number of output channels (${y.outChannels}).`);else if(T.length===3)try{J(T,y.outShape)}catch{const B=`Error in fused conv2d: PReLU activation weights (${T}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(B)}D=f(l,"prelu weights","fused conv2d")}const k=(T,R)=>{p(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[B,M,P,C]=R,Q=Wn(T,P,c);p(He(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const nt=kc(M.shape,Q,B,n,r),rt=fw(M,Q,B.shape,n,r),ut=[nt,rt];if(C!=null){const de=Un(C,Q);ut.push(de)}return ut},I={x:b,filter:d,bias:S,preluActivationWeights:D},_={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Dt((R,B,M)=>{let P=m.runKernel(Qn,I,_);return M([B,R,P]),w&&(P=E(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:k}})(b,d):Dt((R,B,M,P)=>{let C=m.runKernel(Qn,I,_);return P([B,R,C,M]),w&&(C=E(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:k}})(b,d,S)}const pw=g({fusedConv2d_:dw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(e,t,n,r,s,o=[1,1],a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:c},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,filterShape:n};return m.runKernel(Ao,l,h)}const mw=g({depthwiseConv2dNativeBackpropFilter_:gw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bw(e,t,n,r,s,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,inputShape:e},u=m.runKernel(Do,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ww=g({depthwiseConv2dNativeBackpropInput_:bw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(Gn(m.state.gradientDepth,c)===!1){let _=Lr(e,t,n,r,s,o,a);return i!=null&&(_=A(_,i)),qn(_,c,l,h)}const u=f(e,"x","depthwiseConv2d","float32"),d=f(t,"filter","depthwiseConv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=E(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),p(b.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),o==null&&(o=[1,1]),p(Ct(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),kt("fused depthwiseConv2d",r,a);const $=on(b.shape,d.shape,n,o,r,a,!0);let y;i!=null&&(y=f(i,"bias","fused conv2d"),[y]=X(y,u),J($.outShape,y.shape));let S;l!=null&&(S=f(l,"prelu weights","fused depthwiseConv2d"));const D=(_,T)=>{p(He(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[R,B,M,P]=T,C=Wn(_,M,c),Q=ww(B.shape,C,R,n,r,o,a),nt=mw(B,C,R.shape,n,r,o,a);if(P!=null){const rt=Un(y,C);return[Q,nt,rt]}return[Q,nt]},k={x:b,filter:d,bias:y,preluActivationWeights:S},I={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Dt((T,R,B)=>{let M=m.runKernel(tr,k,I);return B([R,T,M]),w&&(M=E(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:D}})(b,d):Dt((T,R,B,M)=>{let P=m.runKernel(tr,k,I);return M([R,T,P,B]),w&&(P=E(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:D}})(b,d,y)}const $w=g({fusedDepthwiseConv2d_:yw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Gn(m.state.gradientDepth,o)===!1){let C=O(e,t,n,r);return s!=null&&(C=A(C,s)),qn(C,o,a,i)}let c=f(e,"a","fused matMul"),l=f(t,"b","fused matMul");[c,l]=X(c,l);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],u=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?c.shape[c.rank-1]:c.shape[c.rank-2],b=r?l.shape[l.rank-2]:l.shape[l.rank-1],w=c.shape.slice(0,-2),$=l.shape.slice(0,-2),y=L(w),S=L($);p(h===u,()=>`Error in fused matMul: inner shapes (${h}) and (${u}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);const k=J(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,b]),I=n?E(c,[y,h,d]):E(c,[y,d,h]),_=r?E(l,[S,b,u]):E(l,[S,u,b]);let T;s!=null&&(T=f(s,"bias","fused matMul"),[T]=X(T,c),J(k,T.shape));let R;a!=null&&(R=f(a,"prelu weights","fused matMul"));const B=(C,Q)=>{const[nt,rt,ut,de]=Q,Nt=Wn(E(C,ut.shape),ut,o);let pe,ge;if(!n&&!r?(pe=O(Nt,rt,!1,!0),ge=O(nt,Nt,!0,!1)):!n&&r?(pe=O(Nt,rt,!1,!1),ge=O(Nt,nt,!0,!1)):n&&!r?(pe=O(rt,Nt,!1,!0),ge=O(nt,Nt,!1,!1)):(pe=O(rt,Nt,!0,!0),ge=O(Nt,nt,!0,!0)),s!=null){const _l=Un(de,Nt);return[pe,ge,_l]}else return[pe,ge]},M={a:I,b:_,bias:T,preluActivationWeights:R},P={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:i};return s==null?Dt((Q,nt,rt)=>{const ut=m.runKernel(Jn,M,P);return rt([Q,nt,ut]),{value:E(ut,k),gradFunc:B}})(I,_):Dt((Q,nt,rt,ut)=>{const de=m.runKernel(Jn,M,P);return ut([Q,nt,de,rt]),{value:E(de,k),gradFunc:B}})(I,_,T)}const kw=g({fusedMatMul_:Ew});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sw=Object.freeze(Object.defineProperty({__proto__:null,conv2d:pw,depthwiseConv2d:$w,matMul:kw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(e){return Qr(e,.54,.46)}const vw=g({hammingWindow_:xw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(e){return Qr(e,.5,.5)}const rl=g({hannWindow_:Iw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw(e,t,n,r=!1,s=0){let o=0;const a=[];for(;o+t<=e.size;)a.push(H(e,o,t)),o+=n;if(r)for(;o<e.size;){const i=o+t-e.size,c=dt([H(e,o,t-i),an([i],s)]);a.push(c),o+=n}return a.length===0?Oe([],[0,t]):E(dt(a),[a.length,t])}const sl=g({frame_:Tw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(e,t,n,r,s=rl){r==null&&(r=nl(t));const o=sl(e,t,n),a=v(o,s(t));return Xr(a,r)}const Aw=g({stft_:_w});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(e,t,n,r,s="bilinear",o=0){const a=f(e,"image","cropAndResize"),i=f(t,"boxes","cropAndResize","float32"),c=f(n,"boxInd","cropAndResize","int32"),l=i.shape[0];p(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),p(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),p(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),p(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),p(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const h={image:a,boxes:i,boxInd:c},u={method:s,extrapolationValue:o,cropSize:r};return m.runKernel(vo,h,u)}const Nw=g({cropAndResize_:Dw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(e){const t=f(e,"image","flipLeftRight","float32");p(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return m.runKernel(Go,n,{})}const Fw=g({flipLeftRight_:Mw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bw(e){const t=f(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];p(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),p(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,Pe(t,s)}const Rw=g({grayscaleToRGB_:Bw});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(e){const t=f(e,"image","RGBToGrayscale"),n=t.rank-1,r=t.shape[n];p(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),p(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=t.dtype,o=V(t,"float32"),a=Et([.2989,.587,.114]);let i;switch(t.rank){case 2:i=we("ij,j->i",o,a);break;case 3:i=we("ijk,k->ij",o,a);break;case 4:i=we("ijkl,l->ijk",o,a);break;case 5:i=we("ijklm,m->ijkl",o,a);break;case 6:i=we("ijklmn,n->ijklm",o,a);break;default:throw new Error("Not a valid tensor rank.")}return i=Ot(i,-1),V(i,s)}const Pw=g({rgbToGrayscale_:Cw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(e,t,n=0,r=.5){const s=f(e,"image","rotateWithOffset","float32");p(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const o={image:s},a={radians:t,fillValue:n,center:r};return m.runKernel(Fi,o,a)}const Lw=g({rotateWithOffset_:Ow});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Me(e,t,n,r,s,o){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),p(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),p(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),p(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),p(t.rank===1,()=>"scores must be a 1D tensor"),p(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),p(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppression","float32"),a=f(t,"scores","nonMaxSuppression","float32"),i=Me(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return m.runKernel(Ia,{boxes:o,scores:a},c)}const Uw=g({nonMaxSuppression_:Ww});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(e,t,n){const r=Gw(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function Gw(e,t,n){return Kw(e,t,n||zw)}function zw(e,t){return e>t?1:e<t?-1:0}function Kw(e,t,n){let r=0,s=e.length,o=0,a=!1;for(;r<s;){o=r+(s-r>>>1);const i=n(t,e[o]);i>0?r=o+1:(s=o,a=!i)}return a?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ol(e,t,n,r,s){return ts(e,t,n,r,s,0)}function al(e,t,n,r,s,o){return ts(e,t,n,r,s,0,!1,o,!0)}function il(e,t,n,r,s,o){return ts(e,t,n,r,s,o,!0)}function ts(e,t,n,r,s,o,a=!1,i=!1,c=!1){const l=[];for(let y=0;y<t.length;y++)t[y]>s&&l.push({score:t[y],boxIndex:y,suppressBeginIndex:0});l.sort(Ss);const h=o>0?-.5/o:0,u=[],d=[];for(;u.length<n&&l.length>0;){const y=l.pop(),{score:S,boxIndex:D,suppressBeginIndex:k}=y;if(S<s)break;let I=!1;for(let _=u.length-1;_>=k;--_){const T=Vw(e,D,u[_]);if(T>=r){I=!0;break}if(y.score=y.score*Hw(r,h,T),y.score<=s)break}y.suppressBeginIndex=u.length,I||(y.score===S?(u.push(D),d.push(y.score)):y.score>s&&qw(l,y,Ss))}const b=u.length,w=n-b;i&&w>0&&(u.push(...new Array(w).fill(0)),d.push(...new Array(w).fill(0)));const $={selectedIndices:u};return a&&($.selectedScores=d),c&&($.validOutputs=b),$}function Vw(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),o=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),h=Math.min(s[1],s[3]),u=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),b=(i-o)*(c-a),w=(u-l)*(d-h);if(b<=0||w<=0)return 0;const $=Math.max(o,l),y=Math.max(a,h),S=Math.min(i,u),D=Math.min(c,d),k=Math.max(S-$,0)*Math.max(D-y,0);return k/(b+w-k)}function Hw(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function Ss(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function jw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppressionAsync"),a=f(t,"scores","nonMaxSuppressionAsync"),i=Me(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),l=c[0],h=c[1],{selectedIndices:u}=ol(l,h,n,r,s);return o!==e&&o.dispose(),a!==t&&a.dispose(),Et(u,"int32")}const Xw=jw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Me(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const l={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o},u=m.runKernel(_a,l,h);return{selectedIndices:u[0],selectedScores:u[1]}}const Yw=g({nonMaxSuppressionWithScore_:Zw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Jw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Me(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const l=await Promise.all([a.data(),i.data()]),h=l[0],u=l[1],{selectedIndices:d,selectedScores:b}=il(h,u,n,r,s,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Et(d,"int32"),selectedScores:Et(b)}}const Qw=Jw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Me(a,i,n,r,s,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,d={boxes:a,scores:i},b={maxOutputSize:l,iouThreshold:h,scoreThreshold:u,padToMaxOutputSize:o},w=m.runKernel(Ta,d,b);return{selectedIndices:w[0],validOutputs:w[1]}}const ey=g({nonMaxSuppressionPadded_:ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ny(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Me(a,i,n,r,s,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,[d,b]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:$}=al(d,b,l,h,u,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Et(w,"int32"),validOutputs:W($,"int32")}}const ry=ny;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(e,t,n=!1,r=!1){const s=f(e,"images","resizeBilinear");p(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),p(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=E(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},l=m.runKernel(Ka,i,c);return a?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const oy=g({resizeBilinear_:sy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(e,t,n=!1,r=!1){const s=f(e,"images","resizeNearestNeighbor");p(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),p(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),p(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=E(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},l=m.runKernel(za,i,c);return a?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const iy=g({resizeNearestNeighbor_:ay});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(e,t="binary",n=!1,r=.5){const s=f(e,"image","threshold"),o=.2989,a=.587,i=.114,c=s.shape[0]*s.shape[1];let l=v(Et([r]),255),h,u,d,b;if(p(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),p(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),p(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),p(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[h,u,d]=Je(s,[1,1,1],-1);const y=v(h,o),S=v(u,a),D=v(d,i);b=A(A(y,S),D)}else b=e;if(t==="otsu"){const y=Ec(V(jc(b),"int32"),Ee([]),256);l=ly(y,c)}const w=n?qr(b,l):Rn(b,l);return V(v(w,255),"int32")}function ly(e,t){let n=Et([-1]),r=Et([0]),s=Et([0]),o,a,i,c,l,h;for(let u=0;u<e.size-1;u++){o=H(e,0,u+1),a=H(e,u+1),l=G(q(o),t),h=G(q(a),t);const d=q(v(o,Ze(0,o.size)));i=G(d,q(o));const b=an(a.shape,o.size),w=A(Ze(0,a.size),b),$=v(a,w);c=G(q($),q(a));const y=F(i,c),S=F(i,c),D=v(l,h);s=v(v(D,y),S);const k=Rn(s,r);r=zt(k,s,r),n=zt(k,Et([u]),n)}return n}const uy=g({threshold_:cy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(e,t,n="nearest",r="constant",s=0,o){const a=f(e,"image","transform","float32"),i=f(t,"transforms","transform","float32");p(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),p(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},l={interpolation:n,fillMode:r,fillValue:s,outputShape:o};return m.runKernel(Ti,c,l)}const fy=g({transform_:hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(e,t,n){const r=f(e,"a","bandPart");p(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[o,a]=r.shape.slice(-2);let i,c;typeof t=="number"?(p(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),p(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),i=f(t<0?o:t,"numLower","bandPart")):(p(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=zt(br(t,0),o,vn(t,o))),typeof n=="number"?(p(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),p(n<=a,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`),c=f(n<0?a:n,"numUpper","bandPart")):(p(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=zt(br(n,0),a,vn(n,a)));const l=E(Ze(0,o,1,"int32"),[-1,1]),h=Ze(0,a,1,"int32"),u=F(l,h),d=Sn(qr(u,i),Nc(u,_t(c))),b=De([o,a],r.dtype);return E(Qe(Jr(E(r,[-1,o,a])).map(w=>zt(d,w,b))),s)}const py=g({bandPart_:dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(e){let t;if(Array.isArray(e)){t=!1,p(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let o=1;o<e.length;++o)p(e[o].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${s})`)}else t=!0,e=Je(e,e.shape[0],0).map(s=>Zr(s,[0]));p(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(m.tidy(()=>{let o=r[s];if(s>0)for(let a=0;a<s;++a){const i=v(q(v(n[a],o)),n[a]);o=F(o,i)}return G(o,Bn(o,"euclidean"))}));return t?Qe(n,0):n}const my=g({gramSchmidt_:gy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(e,t=!1){if(p(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return xs(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,l)=>c*l),r=Jr(E(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],o=[];r.forEach(c=>{const[l,h]=xs(c,t);s.push(l),o.push(h)});const a=E(Qe(s,0),e.shape),i=E(Qe(o,0),e.shape);return[a,i]}}function xs(e,t=!1){return m.tidy(()=>{p(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=_c(n),o=re(e);const a=Oe([[1]],[1,1]);let i=re(a);const c=n>=r?r:n;for(let l=0;l<c;++l){const h=o,u=i,d=s;[i,o,s]=m.tidy(()=>{const b=H(o,[l,l],[n-l,1]),w=Bn(b),$=H(o,[l,l],[1,1]),y=zt(Rn($,0),Oe([[-1]]),Oe([[1]])),S=F($,v(y,w)),D=G(b,S);D.shape[0]===1?i=re(a):i=dt([a,H(D,[1,0],[D.shape[0]-1,D.shape[1]])],0);const k=_t(G(O(y,S),w)),I=H(o,[l,0],[n-l,r]),_=v(k,i),T=Tn(i);if(l===0)o=F(I,O(_,O(T,I)));else{const M=F(I,O(_,O(T,I)));o=dt([H(o,[0,0],[l,r]),M],0)}const R=Tn(_),B=H(s,[0,l],[n,s.shape[1]-l]);if(l===0)s=F(B,O(O(B,i),R));else{const M=F(B,O(O(B,i),R));s=dt([H(s,[0,0],[n,l]),M],1)}return[i,o,s]}),ct([h,u,d])}return!t&&n>r&&(s=H(s,[0,0],[n,r]),o=H(o,[0,0],[r,r])),[s,o]})}const wy=g({qr_:by});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var at;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(at||(at={}));function yy(e,t,n=at.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=f(t,"weights","computeWeightedLoss"));const o=s==null?r:v(r,s);if(n===at.NONE)return o;if(n===at.SUM)return q(o);if(n===at.MEAN){if(s==null)return xn(o);{const a=r.size/s.size,i=G(q(o),q(s));return a>1?G(i,W(a)):i}}if(n===at.SUM_BY_NONZERO_WEIGHTS){if(s==null)return G(q(o),W(r.size));{const a=v(s,ne(r.shape)),i=V(q(Uc(a,W(0))),"float32");return G(q(o),i)}}throw Error(`Unknown reduction: ${n}`)}const Pt=g({computeWeightedLoss_:yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $y(e,t,n,r=at.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"labels","absoluteDifference"),o=f(t,"predictions","absoluteDifference");let a=null;n!=null&&(a=f(n,"weights","absoluteDifference")),it(s.shape,o.shape,"Error in absoluteDifference: ");const i=mt(F(s,o));return Pt(i,a,r)}const Ey=g({absoluteDifference_:$y});function ky(e,t,n,r,s=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","cosineDistance"),a=f(t,"predictions","cosineDistance");let i=null;r!=null&&(i=f(r,"weights","cosineDistance")),it(o.shape,a.shape,"Error in cosineDistance: ");const c=W(1),l=F(c,q(v(o,a),n,!0));return Pt(l,i,s)}const Sy=g({cosineDistance_:ky});function xy(e,t,n,r=at.SUM_BY_NONZERO_WEIGHTS){let s=f(e,"labels","hingeLoss");const o=f(t,"predictions","hingeLoss");let a=null;n!=null&&(a=f(n,"weights","hingeLoss")),it(s.shape,o.shape,"Error in hingeLoss: ");const i=W(1);s=F(v(W(2),s),i);const c=On(F(i,v(s,o)));return Pt(c,a,r)}const vy=g({hingeLoss_:xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(e,t,n,r=1,s=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","huberLoss"),a=f(t,"predictions","huberLoss");let i=null;n!=null&&(i=f(n,"weights","huberLoss")),it(o.shape,a.shape,"Error in huberLoss: ");const c=W(r),l=mt(F(a,o)),h=vn(l,c),u=F(l,h),d=A(v(W(.5),xt(h)),v(c,u));return Pt(d,i,s)}const Ty=g({huberLoss_:Iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(e,t,n,r=1e-7,s=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","logLoss"),a=f(t,"predictions","logLoss");let i=null;n!=null&&(i=f(n,"weights","logLoss")),it(o.shape,a.shape,"Error in logLoss: ");const c=W(1),l=W(r),h=_t(v(o,Xe(A(a,l)))),u=v(F(c,o),Xe(A(F(c,a),l))),d=F(h,u);return Pt(d,i,s)}const Ay=g({logLoss_:_y});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(e,t,n,r=at.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"labels","meanSquaredError"),o=f(t,"predictions","meanSquaredError");let a=null;n!=null&&(a=f(n,"weights","meanSquaredError")),it(s.shape,o.shape,"Error in meanSquaredError: ");const i=Zc(s,o);return Pt(i,a,r)}const Ny=g({meanSquaredError_:Dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function My(e,t){const n=f(e,"labels","sigmoidCrossEntropyWithLogits"),r=f(t,"logits","sigmoidCrossEntropyWithLogits");it(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=On(r),o=v(r,n),a=Fc(ce(_t(mt(r))));return A(F(s,o),a)}function Fy(e,t,n,r=0,s=at.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"multiClassLabels","sigmoidCrossEntropy");const a=f(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","sigmoidCrossEntropy")),it(o.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=W(r),h=W(1),u=W(.5);o=A(v(o,F(h,l)),v(u,l))}const c=My(o,a);return Pt(c,i,s)}const By=g({sigmoidCrossEntropy_:Fy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Dt((s,o,a)=>{const c=Cc(o,[n],!0),l=F(V(o,"float32"),c);a([s,l]);const h=_t(v(l,s));return{value:q(h,[n]),gradFunc:(b,w)=>{const[$,y]=w,S=cn(b.shape,[n]);return[v(E(b,S),F(V($,"float32"),ce(y))),v(E(b,S),F(ce(y),V($,"float32")))]}}})(e,t)}function Cy(e,t,n,r=0,s=at.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"onehotLabels","softmaxCrossEntropy");const a=f(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","softmaxCrossEntropy")),it(o.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){const l=W(r),h=W(1),u=W(o.shape[1]);o=A(v(o,F(h,l)),G(l,u))}const c=Ry(o,a);return Pt(c,i,s)}const Py=g({softmaxCrossEntropy_:Cy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(e,t,n,r){const s=f(e,"indices","sparseFillEmptyRows","int32"),o=f(t,"values","sparseFillEmptyRows"),a=f(n,"denseShape","sparseFillEmptyRows","int32"),i=f(r,"defaultValue","sparseFillEmptyRows",o.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:s,values:o,denseShape:a,defaultValue:i},l=m.runKernel(fi,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Ly=g({sparseFillEmptyRows_:Oy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wy(e,t,n){const r=f(e,"inputIndices","sparseReshape","int32"),s=f(t,"inputShape","sparseReshape","int32"),o=f(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const a={inputIndices:r,inputShape:s,newShape:o},i=m.runKernel(di,a);return{outputIndices:i[0],outputShape:i[1]}}const Uy=g({sparseReshape_:Wy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(e,t,n){const r=f(e,"data","sparseSegmentMean"),s=f(t,"indices","sparseSegmentMean","int32"),o=f(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const a={data:r,indices:s,segmentIds:o};return m.runKernel(pi,a)}const Gy=g({sparseSegmentMean_:qy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(e,t,n){const r=f(e,"data","sparseSegmentSum"),s=f(t,"indices","sparseSegmentSum","int32"),o=f(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const a={data:r,indices:s,segmentIds:o};return m.runKernel(gi,a)}const Ky=g({sparseSegmentSum_:zy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(e,t,n,r,s,o,a,i){const c=f(e,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=f(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:r,leftPad:s,rightPad:o,padWidth:a,preserveShortSequences:i},u={data:c,dataSplits:l},d=m.runKernel($i,u,h);return{nGrams:d[0],nGramsSplits:d[1]}}const Hy=g({stringNGrams_:Vy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(e,t,n=!0){const r=f(e,"input","stringSplit","string"),s=f(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const o={skipEmpty:n},a={input:r,delimiter:s},i=m.runKernel(Ei,a,o);return{indices:i[0],values:i[1],shape:i[2]}}const Xy=g({stringSplit_:jy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zy(e,t){const n=f(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return m.runKernel(ki,s,r)}const Yy=g({stringToHashBucketFast_:Zy});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jy(e,t,n,r=!0){const s=f(e,"input","staticRegexReplace","string"),o={pattern:t,rewrite:n,replaceGlobal:r};return m.runKernel(wi,{x:s},o)}const Qy=g({staticRegexReplace_:Jy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t1={fft:jr,ifft:In,rfft:Xr,irfft:Xc},e1={hammingWindow:vw,hannWindow:rl,frame:sl,stft:Aw},n1={flipLeftRight:Fw,grayscaleToRGB:Rw,resizeNearestNeighbor:iy,resizeBilinear:oy,rgbToGrayscale:Pw,rotateWithOffset:Lw,cropAndResize:Nw,nonMaxSuppression:Uw,nonMaxSuppressionAsync:Xw,nonMaxSuppressionWithScore:Yw,nonMaxSuppressionWithScoreAsync:Qw,nonMaxSuppressionPadded:ey,nonMaxSuppressionPaddedAsync:ry,threshold:uy,transform:fy},r1={bandPart:py,gramSchmidt:my,qr:wy},s1={absoluteDifference:Ey,computeWeightedLoss:Pt,cosineDistance:Sy,hingeLoss:vy,huberLoss:Ty,logLoss:Ay,meanSquaredError:Ny,sigmoidCrossEntropy:By,softmaxCrossEntropy:Py},o1={sparseFillEmptyRows:Ly,sparseReshape:Uy,sparseSegmentMean:Gy,sparseSegmentSum:Ky},a1={stringNGrams:Hy,stringSplit:Xy,stringToHashBucketFast:Yy,staticRegexReplace:Qy};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i1=new Map,$r=new Map;class cl{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Wt{constructor(){this.classNameMap={}}static getMap(){return Wt.instance==null&&(Wt.instance=new Wt),Wt.instance}static register(t){Wt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function ll(e,t,n){p(e.className!=null,()=>"Class being registered does not have the static className property defined."),p(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),p(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const r=n,s=t+">"+r;return Wt.register(e),i1.set(s,e),$r.set(e,s),e}function c1(e){return $r.has(e)?$r.get(e):e.className}const l1=Object.freeze(Object.defineProperty({__proto__:null,Serializable:cl,SerializationMap:Wt,getRegisteredName:c1,registerClass:ll},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zt extends cl{minimize(t,n=!1,r){const{value:s,grads:o}=this.computeGradients(t,r);if(r!=null){const a=r.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ct(o),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return Bc(t,n)}dispose(){this.iterations_!=null&&ct(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:W(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Zt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class es extends Zt{static get className(){return"Adadelta"}constructor(t,n,r=null){super(),this.learningRate=t,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r],a=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:Y(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedGrads[s].variable,l=this.accumulatedUpdates[s].variable;Y(()=>{const h=A(v(c,this.rho),v(xt(i),1-this.rho)),u=v(G(Bt(A(l,this.epsilon)),Bt(A(c,this.epsilon))),i),d=A(v(l,this.rho),v(xt(u),1-this.rho));c.assign(h),l.assign(d);const b=A(v(u,-this.learningRate),o);o.assign(b)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ct(this.accumulatedGrads.map(t=>t.variable)),ct(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ns extends Zt{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:Y(()=>an(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const i=this.accumulatedGrads[s].variable;Y(()=>{const c=A(i,xt(a));i.assign(c);const l=A(v(G(a,Bt(A(c,m.backend.epsilon()))),-this.learningRate),o);o.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ct(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rs extends Zt{static get className(){return"Adam"}constructor(t,n,r,s=null){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Y(()=>{this.accBeta1=W(n).variable(),this.accBeta2=W(r).variable()}),s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);Y(()=>{const r=F(1,this.accBeta1),s=F(1,this.accBeta2);n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:Y(()=>bt(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:Y(()=>bt(i).variable(c))});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedSecondMoment[a].variable,d=A(v(h,this.beta1),v(l,1-this.beta1)),b=A(v(u,this.beta2),v(xt(l),1-this.beta2)),w=G(d,r),$=G(b,s);h.assign(d),u.assign(b);const y=A(v(G(w,A(Bt($),this.epsilon)),-this.learningRate),i);i.assign(y)}),this.accBeta1.assign(v(this.accBeta1,this.beta1)),this.accBeta2.assign(v(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ct(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),Y(()=>{this.accBeta1.assign(je(this.beta1,this.iterations_+1)),this.accBeta2.assign(je(this.beta2,this.iterations_+1))});const n=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ss extends Zt{static get className(){return"Adamax"}constructor(t,n,r,s=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Y(()=>{this.iteration=W(0).variable(),this.accBeta1=W(n).variable()}),s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);Y(()=>{const r=F(1,this.accBeta1),s=G(-this.learningRate,A(v(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:bt(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:bt(i).variable(c)});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedWeightedInfNorm[a].variable,d=A(v(h,this.beta1),v(l,1-this.beta1)),b=v(u,this.beta2),w=mt(l),$=Wc(b,w);h.assign(d),u.assign($);const y=A(v(G(s,r),G(d,A($,this.epsilon))),i);i.assign(y)}),this.iteration.assign(A(this.iteration,1)),this.accBeta1.assign(v(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ct(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zn extends Zt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=Array.isArray(t)?t[s].tensor:t[r];if(o==null)return;const a=m.registeredVariables[r];Y(()=>{const i=A(v(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=tc(W(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class os extends zn{static get className(){return"Momentum"}constructor(t,n,r=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=W(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:Y(()=>bt(o).variable(!1))});const a=this.accumulations[s].variable,i=Array.isArray(t)?t[s].tensor:t[r];i!=null&&Y(()=>{let c;const l=A(v(this.m,a),i);this.useNesterov?c=A(v(this.c,A(i,v(l,this.m))),o):c=A(v(this.c,l),o),a.assign(l),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ct(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class as extends Zt{static get className(){return"RMSProp"}constructor(t,n=.9,r=0,s=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,s==null&&(this.epsilon=m.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r],a=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:Y(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedMeanSquares[s].variable,l=this.accumulatedMoments[s].variable;Y(()=>{const h=A(v(c,this.decay),v(xt(i),1-this.decay));if(this.centered){const u=this.accumulatedMeanGrads[s].variable,d=A(v(u,this.decay),v(i,1-this.decay)),b=G(v(i,this.learningRate),Bt(F(h,A(xt(d),this.epsilon)))),w=A(v(l,this.momentum),b);c.assign(h),u.assign(d),l.assign(w);const $=F(o,w);o.assign($)}else{const u=A(v(c,this.decay),v(xt(i),1-this.decay)),d=A(v(l,this.momentum),G(v(i,this.learningRate),Bt(A(u,this.epsilon))));c.assign(u),l.assign(d);const b=F(o,d);o.assign(b)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ct(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ct(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ct(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u1=[es,ns,rs,ss,os,as,zn];function h1(){for(const e of u1)ll(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f1="model",d1=".json",p1=".weights.bin";function vs(e){return new Promise(t=>setTimeout(t)).then(e)}class ue{constructor(t){if(!N().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ue.URL_SCHEME)&&(t=t.slice(ue.URL_SCHEME.length)),(t==null||t.length===0)&&(t=f1),this.modelJsonFileName=t+d1,this.weightDataFileName=t+p1}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=It.join(t.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=oc(t,s),a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await vs(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=r,await vs(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:sn(t)}}}}ue.URL_SCHEME="downloads://";class g1{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const o=JSON.parse(s.target.result),a=o.modelTopology;if(a==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const c=Pr(o,l=>this.loadWeights(l));t(c)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const a of t)n.push(...a.weights),r.push(...a.paths);const s=this.checkManifestAndWeightFiles(t),o=r.map(a=>this.loadWeightsFile(a,s[a]));return Promise.all(o).then(a=>[n,a])}loadWeightsFile(t,n){return new Promise((r,s)=>{const o=new FileReader;o.onload=a=>{const i=a.target.result;r(i)},o.onerror=a=>s(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(o=>ks(o.name)),s={};for(const o of t)o.paths.forEach(a=>{const i=ks(a);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[a]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const m1=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ue.URL_SCHEME)?b1(e.slice(ue.URL_SCHEME.length)):null;j.registerSaveRouter(m1);function b1(e="model"){return new ue(e)}function w1(e){return new g1(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Is(e,t,n,r){a(e),n=n??0,r=r??1,i(n,r);let s=0;const o=c=>(c.then(l=>{const h=n+ ++s/e.length*(r-n);return t(h),l}),c);function a(c){p(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){p(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),p(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),p(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(e.map(o))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ul(e,t){t==null&&(t={});const n=t.fetchFunc==null?N().platform.fetch:t.fetchFunc,r=e.map(u=>n(u,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await Is(r,t.onProgress,0,.5)).map(u=>u.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Is(i,t.onProgress,.5,1)}function y1(e,t){var n;const r=t.fetchFunc==null?N().platform.fetch:t.fetchFunc;let s=0,o;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async a=>{for(var i;s<e.length;){o||(o=(await r(e[s],t.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:l}=await o.read();if(c){s++,o=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,s/e.length);continue}a.enqueue(l);return}a.close()}})}async function $1(e,t="",n,r){return hl(a=>ul(a,{requestInit:r}))(e,t,n)}function hl(e){return async(t,n="",r)=>{const s=t.map(()=>!1),o={},a=r!=null?r.map(()=>!1):[],i=[];if(t.forEach((b,w)=>{let $=0;b.weights.forEach(y=>{const S="quantization"in y?y.quantization.dtype:y.dtype,D=se[S]*L(y.shape),k=()=>{s[w]=!0,o[w]==null&&(o[w]=[]),o[w].push({manifestEntry:y,groupOffset:$,sizeBytes:D})};r!=null?r.forEach((I,_)=>{I===y.name&&(k(),a[_]=!0)}):k(),i.push(y.name),$+=D})}),!a.every(b=>b)){const b=r.filter((w,$)=>!a[$]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=s.reduce((b,w,$)=>(w&&b.push($),b),[]),l=[];c.forEach(b=>{t[b].paths.forEach(w=>{const $=n+(n.endsWith("/")?"":"/")+w;l.push($)})});const h=await e(l),u={};let d=0;return c.forEach(b=>{const w=t[b].paths.length,$=new It(h.slice(d,d+w));o[b].forEach(S=>{const D=$.slice(S.groupOffset,S.groupOffset+S.sizeBytes),k=rc(D,[S.manifestEntry]);for(const I in k)u[I]=k[I]}),d+=w}),u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1="application/octet-stream",k1="application/json";class is{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(p(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=N().platform.fetch,p(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&p(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=oc(t,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:k1}),"model.json"),t.weightData!=null){const a=It.join(t.weightData);n.body.append("model.weights.bin",new Blob([a],{type:E1}),"model.weights.bin")}const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:sn(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return Pr(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),r=ur(t.weightsManifest),s=()=>y1(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=S1(n),o=this.weightPathPrefix||r,a=[],i=[];for(const c of t)for(const l of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(l)):a.push(o+l+s);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(t){const n=await this.getWeightUrls(t),r=ur(t),s=await ul(n,this.loadOptions);return[r,s]}}is.URL_SCHEME_REGEX=/^https?:\/\//;function S1(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function Er(e){return e.match(is.URL_SCHEME_REGEX)!=null}const fl=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>Er(r)):n=Er(e),n)return cs(e,t)}return null};j.registerSaveRouter(fl);j.registerLoadRouter(fl);function cs(e,t){return new is(e,t)}function x1(e,t){return cs(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class dl{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class v1{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function I1(e,t,n,r){const s=arguments;return new v1(pl(...s))}function pl(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Xn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function T1(e){return new dl(e)}function _1(e){return new dl(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A1=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:It,browserFiles:w1,browserHTTPRequest:x1,concatenateArrayBuffers:Th,copyModel:Xh,decodeWeights:rc,decodeWeightsStream:Sh,encodeWeights:$h,fromMemory:I1,fromMemorySync:pl,getLoadHandlers:Rh,getModelArtifactsForJSON:Pr,getModelArtifactsForJSONSync:ac,getModelArtifactsInfoForJSON:sn,getSaveHandlers:Bh,getWeightSpecs:ur,http:cs,isHTTPScheme:Er,listModels:Hh,loadWeights:$1,moveModel:Zh,registerLoadRouter:Fh,registerSaveRouter:Mh,removeModel:jh,weightsLoaderFactory:hl,withSaveHandler:T1,withSaveHandlerSync:_1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D1(e,t,n){const r=f(e,"labels","confusionMatrix"),s=f(t,"predictions","confusionMatrix");p(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),p(r.rank===1,()=>`Expected the rank of labels to be 1, but got ${r.rank}`),p(s.rank===1,()=>`Expected the rank of predictions to be 1, but got ${s.rank}`),p(r.shape[0]===s.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${s.shape[0]}. Labels and predictions should have the same number of elements.`),p(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const o=wr(V(r,"int32"),n),a=wr(V(s,"int32"),n),i=Tn(o),c=O(i,a);return V(c,"int32")}const N1=g({confusionMatrix_:D1});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M1=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:N1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Yt,Ts=!1;function gl(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Ue(Yn,m.backendName)!=null){const w={pixels:e},$={numChannels:t};return m.runKernel(Yn,w,$)}const[l,h]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let u;if(a)u=e.getContext("2d").getImageData(0,0,l,h).data;else if(r||n)u=e.data;else if(o||s||i){if(Yt==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Yt=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Yt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Yt.canvas.width=l,Yt.canvas.height=h,Yt.drawImage(e,0,0,l,h),u=Yt.getImageData(0,0,l,h).data}let d;if(t===4)d=new Int32Array(u);else{const w=l*h;d=new Int32Array(w*t);for(let $=0;$<w;$++)for(let y=0;y<t;++y)d[$*t+y]=u[$*4+y]}return Jc(d,[h,l,t],"int32")}function F1(e){return e!=null&&e.data instanceof Uint8Array}function B1(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function R1(e){return e!=null&&e.width!==0&&e.height!==0}function C1(e){return B1()&&!(e instanceof ImageBitmap)&&R1(e)&&!F1(e)}async function P1(e,t=3){let n=null;if(N().getBool("WRAP_TO_IMAGEBITMAP")&&C1(e)){let r;try{r=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{r=null}r!=null&&r.width===e.width&&r.height===e.height?n=r:n=e}else n=e;return gl(n,t)}function ml(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}function O1(e){const t=(e==null?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function L1(e,t){let n=f(e,"img","toPixels");if(!(e instanceof Z)){const l=n;n=V(l,"int32"),l.dispose()}ml(n);const[r,s]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2],a=await n.data(),i=n.dtype==="float32"?255:1,c=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const h=[0,0,0,255];for(let d=0;d<o;d++){const b=a[l*o+d];if(n.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(n.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);o===1?(h[0]=b*i,h[1]=b*i,h[2]=b*i):h[d]=b*i}const u=l*4;c[u+0]=Math.round(h[0]),c[u+1]=Math.round(h[1]),c[u+2]=Math.round(h[2]),c[u+3]=Math.round(h[3])}if(t!=null){Ts||Ue(Dr,m.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Ts=!0),t.width=s,t.height=r;const l=t.getContext("2d"),h=new ImageData(c,s,r);l.putImageData(h,0,0)}return n!==e&&n.dispose(),c}function W1(e,t,n){let r=f(e,"img","draw");if(!(e instanceof Z)){const a=r;r=V(a,"int32"),a.dispose()}ml(r),O1(n==null?void 0:n.imageOptions);const s={image:r},o={canvas:t,options:n};m.runKernel(Dr,s,o)}const U1=g({fromPixels_:gl}),q1=Object.freeze(Object.defineProperty({__proto__:null,draw:W1,fromPixels:U1,fromPixelsAsync:P1,toPixels:L1},Symbol.toStringTag,{value:"Module"}));function bl(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(L(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const s=t.shape,o=s[s.length-1];let a=1;for(let u=0;u<s.length-1;++u)a*=s[u];const i=e.shape,c=s.slice();c.pop();let l=1;for(let u=o;u<n;++u)l*=i[u],c.push(i[u]);const h=[...Ne(e.shape).map(u=>u/l),1].slice(0,o);return[c,a,l,h]}const G1=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:bl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kr=-2,z1=-1;function K1(e,t,n){const r=e.shape.length;p(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),p(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let s=0;s<r;++s)p(t[s]+n[s]<=e.shape[s],()=>`Error in slice${r}D: begin[${s}] + size[${s}] (${t[s]+n[s]}) would overflow input.shape[${s}] (${e.shape[s]})`)}function V1(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function H1(e,t,n){const r=[];for(let s=0;s<e.length;s++)r[s]=Math.ceil((t[s]-e[s])/n[s]);return r}function wl(e,t,n,r){const s=[...e];for(let o=s.length;o<r.length;o++)s.push(1);for(let o=0;o<n;o++)o===0?s[t]=1:(s.splice(t,0,1),s.pop());return s}function yl(e,t,n){return n<=e?n:n-(t-1)}function $l(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function j1(e,t,n,r,s,o,a,i,c){const l=e.length;let h=new Array(l),u=new Array(l),d=new Array(l);if(t.length&&n>0){const b=t[0],w=n+1;h=El(a,b,w,r,e),u=kl(i,b,w,s,e),d=wl(o,b,w,e)}else for(let b=0;b<l;b++)h[b]=xl(a,r,o,e,b,c),u[b]=vl(i,s,o,e,b,c),d[b]=Sl(o,b,c);return{begin:h,end:u,strides:d}}function El(e,t,n,r,s){const o=[...s],a=$l(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=yl(t,n,i);let l=r[c];e&1<<c&&(l=0),o[i]=l}return o}function kl(e,t,n,r,s){const o=[...s],a=$l(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=yl(t,n,i);let l=r[c];e&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[i]=l}for(let i=0;i<o.length;i++){const c=s[i];o[i]<0&&(o[i]+=c),o[i]=Le(0,o[i],s[i])}return o}function Sl(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function xl(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),a=Le(0,a,c-1),a}function vl(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),i>0?a=Le(0,a,c):a=Le(-1,a,c-1),a}function X1(e,t,n){let r=n.length;for(let s=0;s<n.length;s++)if(n[s]>1){r=s;break}for(let s=r+1;s<n.length;s++)if(t[s]>0||n[s]!==e[s])return!1;return!0}function Z1(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Y1(e,t,n){let r;const s=e.shape.length;typeof t=="number"?r=[t,...new Array(s-1).fill(0)]:t.length<s?r=t.concat(new Array(s-t.length).fill(0)):r=t.slice(),r.forEach(a=>{p(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(s).fill(-1):typeof n=="number"?o=[n,...new Array(s-1).fill(-1)]:n.length<s?o=n.concat(new Array(s-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(p(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-r[i])),[r,o]}function J1(e,t,n,r,s,o,a,i,c){let l;if(r==null?(l=new Array(t.length),l.fill(1)):l=r,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const u={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let k=0;k<u.dims;k++)h&&1<<k&i&&u.numAddAxisAfterEllipsis++,1<<k&a&&(h=!0);h||(u.ellipsisMask|=1<<u.dims,u.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Q1(u,d);let b=!0,w=!0,$=!0;const y=[],S=[];for(let k=0;k<e.length;++k){if(d.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);const I=!!(d.shrinkAxisMask&1<<k),_=e[k];if(_===-1){y.push(I?1:-1);continue}const T=[d.beginMask&1<<k,d.endMask&1<<k],R=[d.strides[k]>0?0:-1,d.strides[k]>0?_:_-1];if(I&&d.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");$=$&&d.strides[k]===1;const B=!!(d.beginMask&1<<k&&d.endMask&1<<k);if(d.beginValid&&d.endValid){if(I){const Q=d.begin[k]<0?_+d.begin[k]:d.begin[k];if(d.begin[k]=Q,d.end[k]=d.begin[k]+1,Q<0||Q>=_)throw Error(`slice index ${d.begin[k]} of dimension ${k} out of bounds.`)}else d.begin[k]=_s(d.begin[k],0,d.strides[k],_,T,R),d.end[k]=_s(d.end[k],1,d.strides[k],_,T,R);const C=d.strides[k]===1&&d.begin[k]===0&&d.end[k]===_;b=b&&C,w=w&&(k===0&&d.strides[k]===1||C)}else b=b&&d.strides[k]===1&&B,w=w&&(k===0&&d.strides[k]===1||B);let M,P=!1;if(d.beginValid&&d.endValid?(M=d.end[k]-d.begin[k],P=!0):I?(M=1,P=!0):B&&_>=0&&(d.strides[k]<0?M=-_:M=_,P=!0),P){let C;M===0||M<0!=d.strides[k]<0?C=0:C=Math.trunc(M/d.strides[k])+(M%d.strides[k]!==0?1:0),y.push(C)}else y.push(-1)}for(let k=0;k<d.finalShapeGatherIndices.length;++k){const I=d.finalShapeGatherIndices[k];I>=0?S.push(y[I]):I===kr&&S.push(1)}return{finalShapeSparse:S.filter((k,I)=>d.finalShapeGatherIndices[I]!==kr),finalShape:S,isIdentity:b,sliceDim0:w,isSimpleSlice:$,begin:d.begin,end:d.end,strides:d.strides}}function Q1(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const s=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<s;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(kr),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(z1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function _s(e,t,n,r,s,o){if(s[t])return n>0?o[t]:o[t+1&1];{const a=e<0?r+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const Il=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:K1,computeFlatOffset:Z1,computeOutShape:H1,getNormalizedAxes:j1,isSliceContinous:X1,maskToAxes:V1,parseSliceParams:Y1,sliceInfo:J1,startForAxis:xl,startIndicesWithElidedDims:El,stopForAxis:vl,stopIndicesWithElidedDims:kl,stridesForAxis:Sl,stridesWithElidedDims:wl},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const t0="4.20.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tl{static sgd(t){return new zn(t)}static momentum(t,n,r=!1){return new os(t,n,r)}static rmsprop(t,n=.9,r=0,s=null,o=!1){return new as(t,n,r,s,o)}static adam(t=.001,n=.9,r=.999,s=null){return new rs(t,n,r,s)}static adadelta(t=.001,n=.95,r=null){return new es(t,n,r)}static adamax(t=.002,n=.9,r=.999,s=null,o=0){return new ss(t,n,r,s,o)}static adagrad(t,n=.1){return new ns(t,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e0=Tl;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n0=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e();function r0(){return new Promise(e=>n0(()=>e()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(e,t){const n=e[0].length;e.forEach((s,o)=>{p(s.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),p(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=e[0];e.forEach((s,o)=>{for(let a=0;a<n;a++)p(a===t||s[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${s}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`)})}function o0(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Tt;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(Tt||(Tt={}));function a0(e,t,n){let r=new Array;if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let s=1;s<n.length;++s){const o=n[s],a=r[r.length-n.length+s],i=r[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${s+e}] = ${o} but shape[${s+e}] = ${i}`)}else r[a]=o}return r}function i0(e){const t={FIRST_DIM_SIZE:Tt.FIRST_DIM_SIZE,VALUE_ROWIDS:Tt.VALUE_ROWIDS,ROW_LENGTHS:Tt.ROW_LENGTHS,ROW_SPLITS:Tt.ROW_SPLITS,ROW_LIMITS:Tt.ROW_LIMITS,ROW_STARTS:Tt.ROW_STARTS},n=[];for(const r of e)if(r in t)n.push(t[r]);else break;return n}function c0(e){return e.length===0?0:e[0]===Tt.FIRST_DIM_SIZE?e.length-1:e.length}function l0(e,t){if(e==null||t==null)return;const n=e.length,r=t.length;if(n>=r)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let s=0;s<Math.min(n,r-1);++s){const o=e[s],a=t[s+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${s-e.length}] = ${o} but ragged tensor input.flatValues.shape[${s-e.length}] = ${a}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ls=30;function u0(e){return e<=ls?e:wn(e,Math.floor(Math.sqrt(e)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h0(e,t,n){const r=n*(typeof e=="number"?e:e[0]),s=t*(typeof e=="number"?e:e[1]);return[r,s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(e,t,n,r=!0){let s=[];if(r)s=s.concat(t.slice(0)),s.push(e[0]/n),s=s.concat(e.slice(1));else{s=s.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)s=s.concat([e[a+1]/t[a],t[a]]);s=s.concat(e.slice(o+1))}return s}function d0(e,t,n=!0){const r=[];if(n){r.push(t);for(let s=t+1;s<e;++s)s<=2*t?(r.push(s),r.push(s-(t+1))):r.push(s)}else{const s=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):s.push(a);r.push(...s),r.push(0),r.push(...o)}return r}function p0(e,t,n,r=!0){const s=[];r?s.push(e[0]/n):s.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?r?s.push(t[o-1]*e[o]):s.push(e[o]/t[o-1]):s.push(e[o]);return s}function g0(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function m0(e,t,n){const r=e.slice(0,1);for(let s=0;s<n;++s)r.push(e[s+1]-t[s][0]-t[s][1]);return r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b0=1.7580993408473768,w0=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y0=.3275911,$0=.254829592,E0=-.284496736,k0=1.421413741,S0=-1.453152027,x0=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function I0(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function T0(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=0;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function _0(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=2;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function A0(e,t){const n=e[t*2],r=e[t*2+1];return{real:n,imag:r}}function D0(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function N0(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let s=0;s<Math.ceil(e/2);s++){const o=(t?2:-2)*Math.PI*(s/e);n[s]=Math.cos(o),r[s]=Math.sin(o)}return{real:n,imag:r}}function M0(e,t,n){const r=(n?2:-2)*Math.PI*(e/t),s=Math.cos(r),o=Math.sin(r);return{real:s,imag:o}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zn="->",F0=/->/g,As=",",Ds="...";function B0(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(F0,"").length)/Zn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Zn}").`);const[r,s]=e.split(Zn);p(r.indexOf(Ds)===-1,()=>`The ellipsis notation ("${Ds}") is not supported yet.`);const o=r.split(As),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let d=0;d<s.length;++d){const b=s[d];if(!o.some(w=>w.indexOf(b)!==-1))throw new Error(`Output subscripts contain the label ${b} not present in the input subscripts.`);i.indexOf(b)===-1&&i.push(b)}for(let d=0;d<r.length;++d){const b=r[d];i.indexOf(b)===-1&&b!==As&&i.push(b)}const c=new Array(o.length);for(let d=0;d<a;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);c[d]=[];for(let b=0;b<o[d].length;++b)c[d].push(i.indexOf(o[d][b]))}const l=i.length,h=s.length,u=[];for(let d=h;d<l;++d)u.push(d);return{allDims:i,summedDims:u,idDims:c}}function R0(e,t){let n=new Array(e);n.fill(-1);for(let s=0;s<t.length;++s)n[t[s]]=s;const r=[];for(let s=0;s<e;++s)n[s]===-1&&r.push(s);return n=n.filter(s=>s!==-1),{permutationIndices:n,expandDims:r}}function C0(e,t,n){const r=new Array(e);for(let s=0;s<n.length;++s){const o=n[s].shape;for(let a=0;a<t[s].length;++a)r[t[s][a]]===void 0?r[t[s][a]]=o[a]:p(r[t[s][a]]===o[a],()=>`Expected dimension ${r[t[s][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function P0(e,t){const n=e,r=[];let s=0;e.length===0&&n.push(-1),s=e.length+1;for(let a=0;a<s;++a)r.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=L0(t,i);for(const l of c)o.indexOf(l)===-1&&(r[a].push(l),o.push(l))}return{path:n,steps:r}}function O0(e){return e.every((t,n)=>t===n)}function L0(e,t){const n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function W0(e,t,n=0){let r=[];if(typeof t=="number")p(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(e.shape[n]/t);else{const s=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);p(s<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}p(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function q0(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function G0(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function K0(e,t){return`size ${e} must be non-negative, not ${t}`}function V0(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function H0(e,t){const n=L(e),r=L(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${t}`}function j0(e,t){const n=L(e),r=L(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X0(){return"segment ids must be >= 0"}function Z0(){return"segment ids are not increasing"}function Y0(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function J0(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q0(e,t){let n=!1,r;for(e<=ls?(r=e,n=!0):r=wn(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=wn(e,r+1);return r}function t$(e,t,n){const r=[],s=e.length;for(let o=0;o<s;o++)o!==t?r.push(e[o]):r.push(n);return r}function e$(e,t,n,r){const s=t.shape.length,o=e.shape.length;if(r!==0&&(r<-s||r>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);if(r<0&&(r+=s),r>o)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${o}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let u=0;u<r;++u)if(e.shape[u]!==t.shape[u])throw new Error(`x.shape[${u}]: ${e.shape[u]} should be equal to indices.shape[${u}]: ${t.shape[u]}.`);const a=e.shape[n],i=[];let c=1,l=1,h=1;for(let u=0;u<r;++u)i.push(e.shape[u]),c*=e.shape[u];for(let u=r;u<n;u++)i.push(e.shape[u]),l*=e.shape[u];for(let u=r;u<s;u++)i.push(t.shape[u]);for(let u=n+1;u<o;u++)i.push(e.shape[u]),h*=e.shape[u];return{batchSize:c,sliceSize:h,outerSize:l,dimSize:a,outputShape:i}}const n$=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:e$,computeOutShape:t$,segOpComputeOptimalWindowSize:Q0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r$(e){try{return e.map(t=>En(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function s$(e){return e.map(t=>rn(t))}const o$=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:$0,ERF_A2:E0,ERF_A3:k0,ERF_A4:S0,ERF_A5:x0,ERF_P:y0,PARALLELIZE_THRESHOLD:ls,get RowPartitionType(){return Tt},SELU_SCALE:w0,SELU_SCALEALPHA:b0,applyActivation:qn,assertAndGetBroadcastShape:J,assertAxesAreInnerMostDims:dp,assertParamsConsistent:s0,assignToTypedArray:D0,axesAreInnerMostDims:Ur,calculateShapes:Qc,checkEinsumDimSizes:C0,checkPadOnDimRoundingMode:kt,combineLocations:Ic,combineRaggedTensorToTensorShapes:a0,complexWithEvenIndex:T0,complexWithOddIndex:_0,computeConv2DInfo:on,computeConv3DInfo:bc,computeDefaultPad:Or,computeDilation2DInfo:Ff,computeOptimalWindowSize:u0,computeOutAndReduceShapes:fp,computeOutShape:o0,computePool2DInfo:mc,computePool3DInfo:Bf,convertConv2DDataFormat:wc,decodeEinsumEquation:B0,eitherStridesOrDilationsAreOne:Ct,expandShapeToKeepDim:cn,exponent:M0,exponents:N0,fromStringArrayToUint8:s$,fromUint8ToStringArray:r$,getAxesPermutation:pp,getBroadcastDims:Sc,getComplexWithIndex:A0,getEinsumComputePath:P0,getEinsumPermutation:R0,getFusedBiasGradient:Un,getFusedDyActivation:Wn,getImageCenter:h0,getInnerMostAxes:mp,getPermuted:d0,getRaggedRank:c0,getReductionAxes:Wr,getReshaped:f0,getReshapedPermuted:p0,getRowPartitionTypesHelper:i0,getSliceBeginCoords:g0,getSliceSize:m0,getSparseFillEmptyRowsIndicesDenseShapeMismatch:U0,getSparseFillEmptyRowsNegativeIndexErrorMessage:q0,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:G0,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:V0,getSparseReshapeInputOutputMismatchErrorMessage:j0,getSparseReshapeInputOutputMultipleErrorMessage:H0,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:z0,getSparseReshapeNegativeOutputDimErrorMessage:K0,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:J0,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:X0,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Z0,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Y0,getUndoAxesPermutation:gp,isIdentityPermutation:O0,log:$u,mergeRealAndImagArrays:v0,prepareAndValidate:bl,prepareSplitSize:W0,segment_util:n$,shouldFuse:Gn,slice_util:Il,splitRealAndImagArrays:I0,stridesOrDilationsArePositive:ie,tupleValuesAreOne:He,upcastType:Nn,validateDefaultValueShape:l0,validateInput:Ln,validateUpdateShape:Yr,warn:Lt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a$=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:ol,nonMaxSuppressionV4Impl:al,nonMaxSuppressionV5Impl:il,whereImpl:tl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */h1();const l$=Object.freeze(Object.defineProperty({__proto__:null,Abs:zs,Acos:Ks,Acosh:Vs,AdadeltaOptimizer:es,AdagradOptimizer:ns,AdamOptimizer:rs,AdamaxOptimizer:ss,Add:_r,AddN:Hs,All:js,Any:Xs,ArgMax:Zs,ArgMin:Ys,Asin:Js,Asinh:Qs,Atan:to,Atan2:no,Atanh:eo,AvgPool:ro,AvgPool3D:so,AvgPool3DGrad:nu,AvgPoolGrad:eu,BatchMatMul:oo,BatchToSpaceND:ao,Bincount:io,BitwiseAnd:co,BroadcastArgs:lo,BroadcastTo:ru,Cast:Ar,Ceil:uo,ClipByValue:ho,Complex:fo,ComplexAbs:po,Concat:go,Conv2D:mo,Conv2DBackpropFilter:bo,Conv2DBackpropInput:wo,Conv3D:yo,Conv3DBackpropFilterV2:su,Conv3DBackpropInputV2:$o,Cos:Eo,Cosh:ko,CropAndResize:vo,Cumprod:So,Cumsum:xo,DataStorage:Fl,DenseBincount:Io,DepthToSpace:To,DepthwiseConv2dNative:_o,DepthwiseConv2dNativeBackpropFilter:Ao,DepthwiseConv2dNativeBackpropInput:Do,Diag:No,Dilation2D:Mo,Dilation2DBackpropFilter:au,Dilation2DBackpropInput:ou,Draw:Dr,get ENV(){return Ir},Einsum:Bo,Elu:Ro,EluGrad:iu,Environment:qs,Equal:Po,Erf:Co,Exp:Oo,ExpandDims:Lo,Expm1:Wo,FFT:Uo,Fill:qo,FlipLeftRight:Go,Floor:zo,FloorDiv:Ko,FromPixels:Yn,FusedBatchNorm:Vo,FusedConv2D:Qn,FusedDepthwiseConv2D:tr,GatherNd:jo,GatherV2:Ho,Greater:Xo,GreaterEqual:Zo,IFFT:Yo,Identity:Nr,Imag:Jo,IsFinite:Qo,IsInf:ta,IsNan:ea,KernelBackend:Ns,LRN:ha,LRNGrad:hu,LeakyRelu:na,Less:ra,LessEqual:sa,LinSpace:oa,Log:aa,Log1p:ia,LogSoftmax:lu,LogicalAnd:ca,LogicalNot:la,LogicalOr:ua,LogicalXor:cu,LowerBound:uu,MatrixBandPart:fu,Max:fa,MaxPool:pa,MaxPool3D:ga,MaxPool3DGrad:pu,MaxPoolGrad:du,MaxPoolWithArgmax:ma,Maximum:da,Mean:ba,Min:wa,Minimum:ya,MirrorPad:$a,Mod:Ea,MomentumOptimizer:os,Multinomial:ka,Multiply:Sa,Neg:xa,NonMaxSuppressionV3:Ia,NonMaxSuppressionV4:Ta,NonMaxSuppressionV5:_a,NotEqual:va,OP_SCOPE_SUFFIX:Qi,OneHot:Da,OnesLike:Aa,Optimizer:Zt,OptimizerConstructors:Tl,Pack:Na,PadV2:Ma,Pool:gu,Pow:Fa,Prelu:Ba,Prod:Ra,RMSPropOptimizer:as,RaggedGather:Ca,RaggedRange:Pa,RaggedTensorToTensor:Oa,Range:La,get Rank(){return sr},Real:Wa,RealDiv:Fo,Reciprocal:Ua,get Reduction(){return at},Relu:qa,Relu6:Va,Reshape:Ga,ResizeBilinear:Ka,ResizeBilinearGrad:bu,ResizeNearestNeighbor:za,ResizeNearestNeighborGrad:mu,Reverse:Ha,RotateWithOffset:Fi,Round:ja,Rsqrt:Xa,SGDOptimizer:zn,ScatterNd:Za,SearchSorted:Ja,Select:Qa,Selu:ti,Sigmoid:oi,Sign:si,Sin:ni,Sinh:ri,Slice:ei,Softmax:hi,Softplus:ai,SpaceToBatchND:li,SparseFillEmptyRows:fi,SparseReshape:di,SparseSegmentMean:pi,SparseSegmentSum:gi,SparseToDense:mi,SplitV:ui,Sqrt:ii,Square:wu,SquaredDifference:bi,StaticRegexReplace:wi,Step:Mi,StridedSlice:yi,StringNGrams:$i,StringSplit:Ei,StringToHashBucketFast:ki,Sub:Si,Sum:ci,Tan:xi,Tanh:vi,Tensor:Z,TensorBuffer:kn,TensorScatterUpdate:Ya,Tile:Mr,TopK:Ii,Transform:Ti,Transpose:fn,Unique:_i,Unpack:Ai,UnsortedSegmentSum:Di,UpperBound:yu,Variable:Ge,ZerosLike:Ni,_FusedMatMul:Jn,abs:mt,acos:uf,acosh:ff,add:A,addN:pf,all:mf,any:wf,argMax:$f,argMin:kf,asin:xf,asinh:If,atan:_f,atan2:Df,atanh:Mf,avgPool:yc,avgPool3d:qf,backend:nc,backend_util:o$,basicLSTMCell:Xf,batchNorm:Mn,batchNorm2d:td,batchNorm3d:nd,batchNorm4d:sd,batchToSpaceND:$c,bincount:Ec,bitwiseAnd:id,booleanMaskAsync:Xb,broadcastArgs:ld,broadcastTo:gn,broadcast_util:Jd,browser:q1,buffer:Ft,cast:V,ceil:fd,clipByValue:pd,clone:re,complex:Ht,concat:dt,concat1d:md,concat2d:wd,concat3d:$d,concat4d:kd,conv1d:vd,conv2d:Fn,conv2dTranspose:_d,conv3d:Dd,conv3dTranspose:Bd,copyRegisteredKernels:xu,cos:Cd,cosh:Od,cosineWindow:Qr,cumprod:Wd,cumsum:qd,customGrad:Dt,denseBincount:zd,deprecationWarn:ih,depthToSpace:Vd,depthwiseConv2d:Lr,device_util:eh,diag:Xd,dilation2d:Yd,disableDeprecationWarnings:ah,dispose:ct,disposeVariables:ch,div:G,divNoNan:rp,dot:op,dropout:cw,einsum:we,elu:vc,enableDebugMode:oh,enableProdMode:sh,enclosingPowerOfTwo:nl,engine:lh,ensureShape:lp,env:N,equal:xc,erf:hp,euclideanNorm:vp,exp:ce,expandDims:Ot,expm1:Ap,eye:_c,fft:jr,fill:an,findBackend:mh,findBackendFactory:bh,floor:Ac,floorDiv:gc,fused:Sw,gather:Dc,gatherND:ow,gather_util:G1,getBackend:ec,getGradient:er,getKernel:Ue,getKernelsForBackend:yn,grad:Yp,grads:Jp,greater:Rn,greaterEqual:Nc,ifft:In,imag:Cn,image:n1,inTopKAsync:uw,io:A1,irfft:Xc,isFinite:Op,isInf:Wp,isNaN:qp,keep:tc,kernel_impls:a$,leakyRelu:Mc,less:br,lessEqual:qr,linalg:r1,linspace:Vp,localResponseNormalization:jp,log:Xe,log1p:Fc,logSigmoid:sg,logSoftmax:ig,logSumExp:Cc,logicalAnd:Sn,logicalNot:Pc,logicalOr:Oc,logicalXor:dg,losses:s1,lowerBound:gg,matMul:O,math:M1,max:ve,maxPool:Lc,maxPool3d:wg,maxPoolWithArgmax:$g,maximum:Wc,mean:xn,memory:uh,meshgrid:Sg,min:mr,minimum:vn,mirrorPad:Ig,mod:_g,moments:Dg,movingAverage:Jb,mul:v,multiRNNCell:Mg,multinomial:Bg,neg:_t,nextFrame:r0,norm:Bn,notEqual:Uc,oneHot:wr,ones:ne,onesLike:Og,op:g,outerProduct:Wg,pad:ln,pad1d:Gg,pad2d:Kg,pad3d:Hg,pad4d:Xg,pool:tm,pow:je,prelu:Gc,print:pc,prod:rm,profile:hh,raggedGather:om,raggedRange:im,raggedTensorToTensor:lm,rand:hm,randomGamma:vm,randomNormal:Vc,randomStandardNormal:_m,randomUniform:Hr,randomUniformInt:Nm,range:Ze,ready:ph,real:Ye,reciprocal:Bm,registerBackend:wh,registerGradient:Eu,registerKernel:Bi,relu:On,relu6:Hc,removeBackend:gh,reshape:E,reverse:le,reverse1d:Lm,reverse2d:Um,reverse3d:Gm,reverse4d:Km,rfft:Xr,round:jc,rsqrt:jm,scalar:W,scatterND:tw,scatter_util:Fb,searchSorted:Gr,selu:Zm,separableConv2d:Jm,serialization:l1,setBackend:dh,setPlatform:yh,setdiff1dAsync:tb,sigmoid:xe,sign:nb,signal:e1,sin:sb,sinh:ab,slice:H,slice1d:cb,slice2d:ub,slice3d:fb,slice4d:pb,slice_util:Il,softmax:mb,softplus:Rc,spaceToBatchND:qc,sparse:o1,sparseToDense:rw,spectral:t1,split:Je,sqrt:Bt,square:xt,squaredDifference:Zc,squeeze:Zr,stack:Qe,step:Yc,stridedSlice:Tb,string:a1,sub:F,sum:q,sumOutType:Vu,tan:Ab,tanh:gr,tensor:Ee,tensor1d:Et,tensor2d:Oe,tensor3d:Jc,tensor4d:Db,tensor5d:Nb,tensor6d:Mb,tensorScatterUpdate:Rb,tensor_util:Xu,test_util:Em,tidy:Y,tile:Pe,time:fh,topk:Pb,train:e0,transpose:Tn,truncatedNormal:Lb,unique:Ub,unregisterGradient:Su,unregisterKernel:ku,unsortedSegmentSum:Gb,unstack:Jr,upcastType:Nn,upperBound:Kb,util:Ru,valueAndGrad:Qp,valueAndGrads:tg,variable:Vb,variableGrads:Bc,version_core:t0,where:zt,whereAsync:el,zeros:De,zerosLike:bt},Symbol.toStringTag,{value:"Module"}));export{nu as $,Ks as A,oo as B,dp as C,Fl as D,Ro as E,fp as F,_n as G,cn as H,Xs as I,Zs as J,Ns as K,na as L,Ys as M,Js as N,Qs as O,Ba as P,to as Q,qa as R,no as S,eo as T,ro as U,Ct as V,mc as W,Rt as X,so as Y,Bf as Z,Jn as _,N as a,x0 as a$,eu as a0,Vo as a1,ao as a2,f0 as a3,d0 as a4,p0 as a5,g0 as a6,m0 as a7,io as a8,lo as a9,_o as aA,Ao as aB,Do as aC,No as aD,Mo as aE,Ff as aF,xr as aG,jl as aH,Dn as aI,au as aJ,$e as aK,Hl as aL,ou as aM,Dr as aN,ci as aO,Bo as aP,B0 as aQ,C0 as aR,P0 as aS,R0 as aT,O0 as aU,iu as aV,Co as aW,$0 as aX,E0 as aY,k0 as aZ,S0 as a_,ho as aa,po as ab,Jo as ac,go as ad,s0 as ae,o0 as af,mo as ag,wc as ah,on as ai,kn as aj,bo as ak,wo as al,yo as am,bc as an,su as ao,$o as ap,Eo as aq,ko as ar,vo as as,So as at,Nn as au,vr as av,gp as aw,xo as ax,Io as ay,To as az,rn as b,Ka as b$,y0 as b0,Lo as b1,Fo as b2,A0 as b3,Mu as b4,I0 as b5,T0 as b6,_0 as b7,N0 as b8,D0 as b9,du as bA,ma as bB,ba as bC,wa as bD,$a as bE,Xl as bF,Ea as bG,hi as bH,ka as bI,Ia as bJ,ol as bK,Ta as bL,al as bM,_a as bN,il as bO,Da as bP,Ni as bQ,Aa as bR,Na as bS,it as bT,Ma as bU,Fa as bV,Ca as bW,Pa as bX,Oa as bY,La as bZ,Ua as b_,M0 as ba,Uo as bb,qo as bc,en as bd,Go as be,Qn as bf,tr as bg,jo as bh,bl as bi,Ho as bj,e$ as bk,Yo as bl,Qo as bm,ta as bn,ea as bo,oa as bp,ia as bq,ca as br,la as bs,ua as bt,ha as bu,hu as bv,fa as bw,pa as bx,ga as by,pu as bz,Vl as c,ra as c$,bu as c0,za as c1,mu as c2,Ha as c3,Fi as c4,h0 as c5,ja as c6,Za as c7,Qc as c8,Ja as c9,Ya as cA,Mr as cB,Ii as cC,Ti as cD,Le as cE,_i as cF,Ai as cG,Di as cH,Bi as cI,zs as cJ,Sc as cK,fo as cL,Nr as cM,Wa as cN,Ar as cO,Kl as cP,r$ as cQ,_r as cR,co as cS,uo as cT,Po as cU,Oo as cV,Wo as cW,zo as cX,Ko as cY,Xo as cZ,Zo as c_,Qa as ca,ti as cb,b0 as cc,w0 as cd,si as ce,ni as cf,ri as cg,ai as ch,li as ci,fi as cj,di as ck,pi as cl,gi as cm,mi as cn,ui as co,W0 as cp,wu as cq,Mi as cr,yi as cs,J1 as ct,H1 as cu,$i as cv,Ei as cw,ki as cx,xi as cy,vi as cz,En as d,Q0 as d$,sa as d0,aa as d1,da as d2,ya as d3,Sa as d4,xa as d5,va as d6,fn as d7,Ra as d8,i0 as d9,Y0 as dA,J0 as dB,ii as dC,bi as dD,wi as dE,Nu as dF,Si as dG,mn as dH,Ul as dI,Ce as dJ,Rl as dK,Bs as dL,th as dM,o$ as dN,Gl as dO,Vt as dP,Cl as dQ,W as dR,bn as dS,r0 as dT,Yi as dU,Ie as dV,u0 as dW,Vu as dX,De as dY,Yn as dZ,t$ as d_,c0 as da,l0 as db,a0 as dc,Y as dd,E as de,gn as df,Tt as dg,Xa as dh,oi as di,X1 as dj,Z1 as dk,s$ as dl,ei as dm,Y1 as dn,K1 as dp,U0 as dq,q0 as dr,G0 as ds,z0 as dt,K0 as du,V0 as dv,H0 as dw,j0 as dx,X0 as dy,Z0 as dz,lh as e,l$ as e0,Ft as f,tl as g,Rs as h,Ut as i,Va as j,Ga as k,zl as l,v0 as m,qe as n,p as o,J as p,Ne as q,wh as r,L as s,Vs as t,Hs as u,js as v,Lt as w,tn as x,pp as y,mp as z};
