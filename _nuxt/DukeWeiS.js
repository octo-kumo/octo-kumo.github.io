import{aT as Al}from"./DxdssFWe.js";import{s as Ss}from"./c4zV7nmi.js";function Dl(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}/**
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
 */const Nl=1e-7,Ml=1e-4;class Fl{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Nr{refCount(t){return ht("refCount")}incRef(t){return ht("incRef")}timerAvailable(){return!0}time(t){return ht("time")}read(t){return ht("read")}readSync(t){return ht("readSync")}readToGPU(t,n){return ht("readToGPU")}numDataIds(){return ht("numDataIds")}disposeData(t,n){return ht("disposeData")}write(t,n,s){return ht("write")}move(t,n,s,r,o){return ht("move")}createTensorFromGPUData(t,n,s){return ht("createTensorFromGPUData")}memory(){return ht("memory")}floatPrecision(){return ht("floatPrecision")}epsilon(){return this.floatPrecision()===32?Nl:Ml}dispose(){return ht("dispose")}}function ht(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function Mr(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,mn(e,t,n)}function Bl(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,mn(e,n,s),mn(t,n,s)}function Le(e,t,n){return Math.max(e,Math.min(t,n))}function Rl(e){return e%2===0?e:e+1}function mn(e,t,n){const s=e[t];e[t]=e[n],e[n]=s}function Cl(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Pl(e,t){const n=Math.random();return t*n+(1-n)*e}function Ol(e,t){let n=0;for(let s=0;s<e.length;s++){const r=Number(e[s])-Number(t[s]);n+=r*r}return n}function p(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function it(e,t,n=""){p(Rt(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function he(e){p(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function L(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Ll(e){return e.length===0}function Fr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function Rt(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Te(e){return e%1===0}function Wl(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function Ul(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function ql(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return Mr(t),t}function Ce(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Gl(e,t=r=>0,n,s){return new Promise((r,o)=>{let a=0;const i=()=>{if(e()){r();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}s!=null?s(i,c):setTimeout(i,c)};i()})}function zl(e,t){let n=1,s=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const r=e.slice();return r[s]=t/n,r}function tn(e,t){const n=t.length;return e=e==null?t.map((s,r)=>r):[].concat(e),p(e.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),p(e.every(s=>Te(s)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(s=>s<0?n+s:s)}function Br(e,t){const n=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:tn(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),s.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),s.push(i))}return{newShape:n,keptDims:s}}function Rr(e,t){return xs(e,t)}function xs(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Cr(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Pr(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Kl(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function bn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Or(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Ut(e){return typeof e=="string"||e instanceof String}function Lr(e){return typeof e=="boolean"}function Wr(e){return typeof e=="number"}function en(e){return Array.isArray(e)?en(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Wr(e)?"float32":Ut(e)?"string":Lr(e)?"bool":"float32"}function Kt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function wn(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function Ne(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*e[s+1];return n}function Ur(e,t,n,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let a=0;a<o;a++)r[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<o;c++)r[c]=Ur(e+c*i,a,n,s)}return r}function $e(e,t,n=!1){if(e.length===0)return t[0];const s=e.reduce((r,o)=>r*o)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Ur(0,e,t,n)}function Vl(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function vs(e,t){const n=_n(e,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function _n(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function Hl(e,t){const n=e.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return $e(e,new Float32Array(n));if(t==="int32")return $e(e,new Int32Array(n));if(t==="bool")return $e(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function pt(e){e.forEach(t=>{p(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function jl(e,t,n){if(t===0)return 0;if(t===1)return e[0];let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=n[r]*e[r];return s}function Xl(e,t,n){if(t===0)return[];if(t===1)return[e];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(e/n[r]),e-=s[r]*n[r];return s[s.length-1]=e,s}function An(e){return e&&e.then&&typeof e.then=="function"}/**
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
 */const ur="tfjsflags";class qr{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Zl,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(N().getBool("IS_TEST")||N().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];N().getBool("IS_TEST")||N().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(An(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);ur in t&&t[ur].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=Jl(r,o)})}}function Zl(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(Yl(t,s[0],s[1]),s.join("="))),t}function Yl(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function Jl(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function N(){return Ts}let Ts=null;function Ql(e){Ts=e}/**
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
 */let Kn;function Gr(){if(Kn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Kn=e}return Kn}function tu(){const e=Gr();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function Is(e,t){const n=tu();if(n.has(e))return n.get(e);{const s=t();return n.set(e,s),n.get(e)}}const zr="Abs",Kr="Acos",Vr="Acosh",_s="Add",Hr="AddN",jr="All",Xr="Any",Zr="ArgMax",Yr="ArgMin",Jr="Asin",Qr="Asinh",to="Atan",eo="Atanh",no="Atan2",so="AvgPool",eu="AvgPoolGrad",ro="AvgPool3D",nu="AvgPool3DGrad",oo="BatchMatMul",ao="BatchToSpaceND",io="Bincount",co="BitwiseAnd",su="BroadcastTo",lo="BroadcastArgs",As="Cast",uo="Ceil",ho="ClipByValue",fo="Complex",po="ComplexAbs",go="Concat",mo="Conv2D",bo="Conv2DBackpropFilter",wo="Conv2DBackpropInput",yo="Conv3D",ru="Conv3DBackpropFilterV2",$o="Conv3DBackpropInputV2",Eo="Cos",ko="Cosh",So="Cumprod",xo="Cumsum",vo="CropAndResize",To="DenseBincount",Io="DepthToSpace",_o="DepthwiseConv2dNative",Ao="DepthwiseConv2dNativeBackpropFilter",Do="DepthwiseConv2dNativeBackpropInput",No="Diag",Mo="Dilation2D",ou="Dilation2DBackpropInput",au="Dilation2DBackpropFilter",Ds="Draw",Fo="RealDiv",Bo="Einsum",Ro="Elu",iu="EluGrad",Co="Erf",Po="Equal",Oo="Exp",Lo="ExpandDims",Wo="Expm1",Uo="FFT",qo="Fill",Go="FlipLeftRight",zo="Floor",Ko="FloorDiv",Vo="FusedBatchNorm",Ho="GatherV2",jo="GatherNd",Xo="Greater",Zo="GreaterEqual",Ns="Identity",Yo="IFFT",Jo="Imag",Qo="IsFinite",ta="IsInf",ea="IsNan",na="LeakyRelu",sa="Less",ra="LessEqual",oa="LinSpace",aa="Log",ia="Log1p",ca="LogicalAnd",la="LogicalNot",ua="LogicalOr",cu="LogicalXor",lu="LogSoftmax",uu="LowerBound",ha="LRN",hu="LRNGrad",fu="MatrixBandPart",fa="Max",da="Maximum",pa="MaxPool",du="MaxPoolGrad",ga="MaxPool3D",pu="MaxPool3DGrad",ma="MaxPoolWithArgmax",ba="Mean",wa="Min",ya="Minimum",$a="MirrorPad",Ea="Mod",ka="Multinomial",Sa="Multiply",xa="Neg",va="NotEqual",Ta="NonMaxSuppressionV3",Ia="NonMaxSuppressionV4",_a="NonMaxSuppressionV5",Aa="OnesLike",Da="OneHot",Na="Pack",Ma="PadV2",gu="Pool",Fa="Pow",Ba="Prelu",Ra="Prod",Ca="RaggedGather",Pa="RaggedRange",Oa="RaggedTensorToTensor",La="Range",Wa="Real",Ua="Reciprocal",qa="Relu",Ga="Reshape",za="ResizeNearestNeighbor",mu="ResizeNearestNeighborGrad",Ka="ResizeBilinear",bu="ResizeBilinearGrad",Va="Relu6",Ha="Reverse",ja="Round",Xa="Rsqrt",Za="ScatterNd",Ya="TensorScatterUpdate",Ja="SearchSorted",Qa="Select",ti="Selu",ei="Slice",ni="Sin",si="Sinh",ri="Sign",oi="Sigmoid",ai="Softplus",ii="Sqrt",ci="Sum",li="SpaceToBatchND",ui="SplitV",hi="Softmax",fi="SparseFillEmptyRows",di="SparseReshape",pi="SparseSegmentMean",gi="SparseSegmentSum",mi="SparseToDense",bi="SquaredDifference",wu="Square",wi="StaticRegexReplace",yi="StridedSlice",$i="StringNGrams",Ei="StringSplit",ki="StringToHashBucketFast",Si="Sub",xi="Tan",vi="Tanh",Ms="Tile",Ti="TopK",Ii="Transform",fn="Transpose",_i="Unique",Ai="Unpack",Di="UnsortedSegmentSum",yu="UpperBound",Ni="ZerosLike",Mi="Step",Yn="FromPixels",Fi="RotateWithOffset",Jn="_FusedMatMul",Qn="FusedConv2D",ts="FusedDepthwiseConv2D";/**
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
 */const Ie=Is("kernelRegistry",()=>new Map),We=Is("gradRegistry",()=>new Map);function Ue(e,t){const n=Fs(e,t);return Ie.get(n)}function es(e){return We.get(e)}function yn(e){const t=Ie.entries(),n=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,a]=r,[i]=o.split("_");i===e&&n.push(a)}return n}function Bi(e){const{kernelName:t,backendName:n}=e,s=Fs(t,n);Ie.has(s)&&Lt(`The kernel '${t}' for backend '${n}' is already registered`),Ie.set(s,e)}function Eu(e){const{kernelName:t}=e;We.has(t)&&N().getBool("DEBUG")&&Lt(`Overriding the gradient for '${t}'`),We.set(t,e)}function ku(e,t){const n=Fs(e,t);if(!Ie.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);Ie.delete(n)}function Su(e){if(!We.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);We.delete(e)}function xu(e,t){yn(e).forEach(s=>{const r=Object.assign({},s,{backendName:t});Bi(r)})}function Fs(e,t){return`${t}_${e}`}/**
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
 */function Ri(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var Ci=z,wt=null;try{wt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function z(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}z.prototype.__isLong__;Object.defineProperty(z.prototype,"__isLong__",{value:!0});function gt(e){return(e&&e.__isLong__)===!0}z.isLong=gt;var hr={},fr={};function fe(e,t){var n,s,r;return t?(e>>>=0,(r=0<=e&&e<256)&&(s=fr[e],s)?s:(n=K(e,(e|0)<0?-1:0,!0),r&&(fr[e]=n),n)):(e|=0,(r=-128<=e&&e<128)&&(s=hr[e],s)?s:(n=K(e,e<0?-1:0,!1),r&&(hr[e]=n),n))}z.fromInt=fe;function yt(e,t){if(isNaN(e))return t?te:$t;if(t){if(e<0)return te;if(e>=Pi)return Wi}else{if(e<=-pr)return ft;if(e+1>=pr)return Li}return e<0?yt(-e,t).neg():K(e%_e|0,e/_e|0,t)}z.fromNumber=yt;function K(e,t,n){return new z(e,t,n)}z.fromBits=K;var $n=Math.pow;function Bs(e,t,n){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return $t;if(typeof t=="number"?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var s;if((s=e.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return Bs(e.substring(1),t,n).neg();for(var r=yt($n(n,8)),o=$t,a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a),c=parseInt(e.substring(a,a+i),n);if(i<8){var l=yt($n(n,i));o=o.mul(l).add(yt(c))}else o=o.mul(r),o=o.add(yt(c))}return o.unsigned=t,o}z.fromString=Bs;function vt(e,t){return typeof e=="number"?yt(e,t):typeof e=="string"?Bs(e,t):K(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}z.fromValue=vt;var dr=65536,vu=1<<24,_e=dr*dr,Pi=_e*_e,pr=Pi/2,gr=fe(vu),$t=fe(0);z.ZERO=$t;var te=fe(0,!0);z.UZERO=te;var ye=fe(1);z.ONE=ye;var Oi=fe(1,!0);z.UONE=Oi;var ns=fe(-1);z.NEG_ONE=ns;var Li=K(-1,2147483647,!1);z.MAX_VALUE=Li;var Wi=K(-1,-1,!0);z.MAX_UNSIGNED_VALUE=Wi;var ft=K(0,-2147483648,!1);z.MIN_VALUE=ft;var x=z.prototype;x.toInt=function(){return this.unsigned?this.low>>>0:this.low};x.toNumber=function(){return this.unsigned?(this.high>>>0)*_e+(this.low>>>0):this.high*_e+(this.low>>>0)};x.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ft)){var n=yt(t),s=this.div(n),r=s.mul(n).sub(this);return s.toString(t)+r.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var o=yt($n(t,6),this.unsigned),a=this,i="";;){var c=a.div(o),l=a.sub(c.mul(o)).toInt()>>>0,h=l.toString(t);if(a=c,a.isZero())return h+i;for(;h.length<6;)h="0"+h;i=""+h+i}};x.getHighBits=function(){return this.high};x.getHighBitsUnsigned=function(){return this.high>>>0};x.getLowBits=function(){return this.low};x.getLowBitsUnsigned=function(){return this.low>>>0};x.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ft)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,n=31;n>0&&!(t&1<<n);n--);return this.high!=0?n+33:n+1};x.isZero=function(){return this.high===0&&this.low===0};x.eqz=x.isZero;x.isNegative=function(){return!this.unsigned&&this.high<0};x.isPositive=function(){return this.unsigned||this.high>=0};x.isOdd=function(){return(this.low&1)===1};x.isEven=function(){return(this.low&1)===0};x.equals=function(t){return gt(t)||(t=vt(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};x.eq=x.equals;x.notEquals=function(t){return!this.eq(t)};x.neq=x.notEquals;x.ne=x.notEquals;x.lessThan=function(t){return this.comp(t)<0};x.lt=x.lessThan;x.lessThanOrEqual=function(t){return this.comp(t)<=0};x.lte=x.lessThanOrEqual;x.le=x.lessThanOrEqual;x.greaterThan=function(t){return this.comp(t)>0};x.gt=x.greaterThan;x.greaterThanOrEqual=function(t){return this.comp(t)>=0};x.gte=x.greaterThanOrEqual;x.ge=x.greaterThanOrEqual;x.compare=function(t){if(gt(t)||(t=vt(t)),this.eq(t))return 0;var n=this.isNegative(),s=t.isNegative();return n&&!s?-1:!n&&s?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};x.comp=x.compare;x.negate=function(){return!this.unsigned&&this.eq(ft)?ft:this.not().add(ye)};x.neg=x.negate;x.add=function(t){gt(t)||(t=vt(t));var n=this.high>>>16,s=this.high&65535,r=this.low>>>16,o=this.low&65535,a=t.high>>>16,i=t.high&65535,c=t.low>>>16,l=t.low&65535,h=0,u=0,d=0,b=0;return b+=o+l,d+=b>>>16,b&=65535,d+=r+c,u+=d>>>16,d&=65535,u+=s+i,h+=u>>>16,u&=65535,h+=n+a,h&=65535,K(d<<16|b,h<<16|u,this.unsigned)};x.subtract=function(t){return gt(t)||(t=vt(t)),this.add(t.neg())};x.sub=x.subtract;x.multiply=function(t){if(this.isZero())return $t;if(gt(t)||(t=vt(t)),wt){var n=wt.mul(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}if(t.isZero())return $t;if(this.eq(ft))return t.isOdd()?ft:$t;if(t.eq(ft))return this.isOdd()?ft:$t;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(gr)&&t.lt(gr))return yt(this.toNumber()*t.toNumber(),this.unsigned);var s=this.high>>>16,r=this.high&65535,o=this.low>>>16,a=this.low&65535,i=t.high>>>16,c=t.high&65535,l=t.low>>>16,h=t.low&65535,u=0,d=0,b=0,w=0;return w+=a*h,b+=w>>>16,w&=65535,b+=o*h,d+=b>>>16,b&=65535,b+=a*l,d+=b>>>16,b&=65535,d+=r*h,u+=d>>>16,d&=65535,d+=o*l,u+=d>>>16,d&=65535,d+=a*c,u+=d>>>16,d&=65535,u+=s*h+r*l+o*c+a*i,u&=65535,K(b<<16|w,u<<16|d,this.unsigned)};x.mul=x.multiply;x.divide=function(t){if(gt(t)||(t=vt(t)),t.isZero())throw Error("division by zero");if(wt){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var n=(this.unsigned?wt.div_u:wt.div_s)(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?te:$t;var s,r,o;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return te;if(t.gt(this.shru(1)))return Oi;o=te}else{if(this.eq(ft)){if(t.eq(ye)||t.eq(ns))return ft;if(t.eq(ft))return ye;var a=this.shr(1);return s=a.div(t).shl(1),s.eq($t)?t.isNegative()?ye:ns:(r=this.sub(t.mul(s)),o=s.add(r.div(t)),o)}else if(t.eq(ft))return this.unsigned?te:$t;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();o=$t}for(r=this;r.gte(t);){s=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(s)/Math.LN2),c=i<=48?1:$n(2,i-48),l=yt(s),h=l.mul(t);h.isNegative()||h.gt(r);)s-=c,l=yt(s,this.unsigned),h=l.mul(t);l.isZero()&&(l=ye),o=o.add(l),r=r.sub(h)}return o};x.div=x.divide;x.modulo=function(t){if(gt(t)||(t=vt(t)),wt){var n=(this.unsigned?wt.rem_u:wt.rem_s)(this.low,this.high,t.low,t.high);return K(n,wt.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};x.mod=x.modulo;x.rem=x.modulo;x.not=function(){return K(~this.low,~this.high,this.unsigned)};x.and=function(t){return gt(t)||(t=vt(t)),K(this.low&t.low,this.high&t.high,this.unsigned)};x.or=function(t){return gt(t)||(t=vt(t)),K(this.low|t.low,this.high|t.high,this.unsigned)};x.xor=function(t){return gt(t)||(t=vt(t)),K(this.low^t.low,this.high^t.high,this.unsigned)};x.shiftLeft=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?K(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):K(0,this.low<<t-32,this.unsigned)};x.shl=x.shiftLeft;x.shiftRight=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?K(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):K(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};x.shr=x.shiftRight;x.shiftRightUnsigned=function(t){if(gt(t)&&(t=t.toInt()),t&=63,t===0)return this;var n=this.high;if(t<32){var s=this.low;return K(s>>>t|n<<32-t,n>>>t,this.unsigned)}else return t===32?K(n,0,this.unsigned):K(n>>>t-32,0,this.unsigned)};x.shru=x.shiftRightUnsigned;x.shr_u=x.shiftRightUnsigned;x.toSigned=function(){return this.unsigned?K(this.low,this.high,!1):this};x.toUnsigned=function(){return this.unsigned?this:K(this.low,this.high,!0)};x.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};x.toBytesLE=function(){var t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};x.toBytesBE=function(){var t=this.high,n=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};z.fromBytes=function(t,n,s){return s?z.fromBytesLE(t,n):z.fromBytesBE(t,n)};z.fromBytesLE=function(t,n){return new z(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,n)};z.fromBytesBE=function(t,n){return new z(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],n)};const Ui=Al(Ci),Tu=Dl({__proto__:null,default:Ui},[Ci]);/**
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
 */const Qt=Ui||Tu;function nn(e){return Qt.fromString(e,!0,16)}const qi=nn("c3a5c85c97cb3127"),Jt=nn("b492b66fbe98f273"),ot=nn("9ae16a3b2f90404f");function ss(e){return e.xor(e.shru(47))}function Gi(e,t,n){const s=e.slice(t,t+n);return Qt.fromBytes(Array.from(s),!0,!0)}function U(e,t){return Gi(e,t,8)}function mr(e,t){return Gi(e,t,4)}function tt(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Gt(e,t,n=nn("9ddfea08eb382d69")){let s=e.xor(t).mul(n);s=s.xor(s.shru(47));let r=t.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function Iu(e,t,n,s,r,o){r=r.add(e),o=tt(o.add(r).add(s),21);const a=r;return r=r.add(t),r=r.add(n),o=o.add(tt(r,44)),[r.add(s),o.add(a)]}function un(e,t,n,s){return Iu(U(e,t),U(e,t+8),U(e,t+16),U(e,t+24),n,s)}function _u(e,t=e.length){if(t>=8){const n=ot.add(t*2),s=U(e,0).add(ot),r=U(e,t-8),o=tt(r,37).mul(n).add(s),a=tt(s,25).add(r).mul(n);return Gt(o,a,n)}if(t>=4){const n=ot.add(t*2),s=mr(e,0);return Gt(s.shl(3).add(t),mr(e,t-4),n)}if(t>0){const n=e[0],s=e[t>>1],r=e[t-1],o=n+(s<<8),a=t+(r<<2);return ss(ot.mul(o).xor(qi.mul(a))).mul(ot)}return ot}function Au(e,t=e.length){const n=ot.add(t*2),s=U(e,0).mul(Jt),r=U(e,8),o=U(e,t-8).mul(n),a=U(e,t-16).mul(ot);return Gt(tt(s.add(r),43).add(tt(o,30)).add(a),s.add(tt(r.add(ot),18)).add(o),n)}function Du(e,t=e.length){const n=ot.add(t*2),s=U(e,0).mul(ot),r=U(e,8),o=U(e,t-8).mul(n),a=U(e,t-16).mul(ot),i=tt(s.add(r),43).add(tt(o,30)).add(a),c=Gt(i,s.add(tt(r.add(ot),18)).add(o),n),l=U(e,16).mul(n),h=U(e,24),u=i.add(U(e,t-32)).mul(n),d=c.add(U(e,t-24)).mul(n);return Gt(tt(l.add(h),43).add(tt(u,30)).add(d),l.add(tt(h.add(s),18)).add(u),n)}function Nu(e,t=e.length){const n=Qt.fromNumber(81,!0);if(t<=32)return t<=16?_u(e,t):Au(e,t);if(t<=64)return Du(e,t);let s=n,r=n.mul(Jt).add(113),o=ss(r.mul(ot).add(113)).mul(ot),a=[Qt.UZERO,Qt.UZERO],i=[Qt.UZERO,Qt.UZERO];s=s.mul(ot).add(U(e,0));let c=0;const l=(t-1>>6)*64,h=l+(t-1&63)-63;do s=tt(s.add(r).add(a[0]).add(U(e,c+8)),37).mul(Jt),r=tt(r.add(a[1]).add(U(e,c+48)),42).mul(Jt),s=s.xor(i[1]),r=r.add(a[0]).add(U(e,c+40)),o=tt(o.add(i[0]),33).mul(Jt),a=un(e,c,a[1].mul(Jt),s.add(i[0])),i=un(e,c+32,o.add(i[1]),r.add(U(e,c+16))),[o,s]=[s,o],c+=64;while(c!==l);const u=Jt.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),s=tt(s.add(r).add(a[0]).add(U(e,c+8)),37).mul(u),r=tt(r.add(a[1]).add(U(e,c+48)),42).mul(u),s=s.xor(i[1].mul(9)),r=r.add(a[0].mul(9).add(U(e,c+40))),o=tt(o.add(i[0]),33).mul(u),a=un(e,c,a[1].mul(u),s.add(i[0])),i=un(e,c+32,o.add(i[1]),r.add(U(e,c+16))),[o,s]=[s,o],Gt(Gt(a[0],i[0],u).add(ss(r).mul(qi)).add(o),Gt(a[1],i[1],u).add(s),u)}/**
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
 */function Mu(e,t){return t==="string"?sn(e):Dn([e],t)}function Fu(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Dn(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Vt(e)),N().getBool("DEBUG")&&Cr(e,t),Fu(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let s=0;s<n.length;++s)Math.round(e[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function qe(){return N().platform.now()}function Bu(e,t){return N().platform.fetch(e,t)}function sn(e,t="utf-8"){return t=t||"utf-8",N().platform.encode(e,t)}function En(e,t="utf-8"){return t=t||"utf-8",N().platform.decode(e,t)}function et(e){return N().platform.isTypedArray!=null?N().platform.isTypedArray(e):Ri(e)}function Vt(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||An(e)||e==null||et(e)&&n)t.push(e);else if(Array.isArray(e)||et(e))for(let s=0;s<e.length;++s)Vt(e[s],t,n);else{let s=-1;for(const r of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)Vt(e[r],t,n)}return t}const Ru=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Rt,arraysEqualWithNull:Fr,assert:p,assertNonNegativeIntegerDimensions:pt,assertNonNull:he,assertShapesMatch:it,bytesFromStringArray:Or,bytesPerElement:bn,checkConversionForErrors:Cr,clamp:Le,computeStrides:Ne,convertBackendValuesAndArrayBuffer:Vl,createScalarValue:Mu,createShuffledIndices:ql,decodeString:En,distSquared:Ol,encodeString:sn,fetch:Bu,fingerPrint64:Nu,flatten:Vt,getArrayFromDType:xs,getTypedArrayFromDType:Rr,hasEncodingLoss:Kl,hexToLong:nn,indexToLoc:Xl,inferDtype:en,inferFromImplicitShape:zl,isBoolean:Lr,isFunction:Kt,isInt:Te,isNumber:Wr,isPromise:An,isScalarShape:Ll,isString:Ut,isTypedArray:et,isValidDtype:Pr,locToIndex:jl,makeOnesTypedArray:vs,makeZerosNestedTypedArray:Hl,makeZerosTypedArray:_n,nearestDivisor:wn,nearestLargerEven:Rl,now:qe,parseAxisParam:tn,randUniform:Pl,repeatedTry:Gl,rightPad:Ce,shuffle:Mr,shuffleCombo:Bl,sizeFromShape:L,sizeToSquarishShape:Ul,squeezeShape:Br,sum:Cl,swap:mn,tanh:Wl,toNestedArray:$e,toTypedArray:Dn},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Cu{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Ou)}profileKernel(t,n,s){let r;const o=()=>{r=s()};let a;const i=qe();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const l of r)l.dataSync();a=Promise.resolve({kernelMs:qe()-i})}if(N().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<r.length;l++){const h=r[l];h.data().then(u=>{Pu(u,h.dtype,t)})}return{kernelName:t,outputs:r,inputs:n,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:r,inputs:o,extraInfo:a}=t;s.forEach(i=>{Promise.all([i.data(),r,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function Pu(e,t,n){if(t!=="float32")return!1;for(let s=0;s<e.length;s++){const r=e[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Ou{logKernelProfile(t,n,s,r,o,a){const i=typeof r=="number"?Ce(`${r}ms`,9):r.error,c=Ce(t,25),l=n.rank,h=n.size,u=Ce(n.shape.toString(),14);let d="";for(const b in o){const w=o[b];if(w!=null){const $=w.shape||n.shape,y=$.length;d+=`${b}: ${y}D ${y>0?$:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${u}	%c${h}	%c${d}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function Lu(e,t,n){const s={},r={};for(let c=0;c<t.length;c++)s[t[c].id]=!0;for(let c=0;c<e.length;c++){const l=e[c],h=l.inputs;for(const u in h){const d=h[u];let b=!1;for(let w=0;w<t.length;w++)if(s[d.id]){l.outputs.forEach($=>s[$.id]=!0),b=!0,r[l.id]=!0;break}if(b)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const l=e[c],h=l.inputs;for(let u=0;u<l.outputs.length;u++)if(o[l.outputs[u].id]){for(const d in h)o[h[d].id]=!0,a[l.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const l=e[c];if(r[l.id]&&a[l.id]){const h={};for(const d in l.inputs){const b=l.inputs[d];s[b.id]&&(h[d]=b)}const u=Object.assign({},l);u.inputs=h,u.outputs=l.outputs,i.push(u)}}return i}function Wu(e,t,n,s){for(let r=t.length-1;r>=0;r--){const o=t[r],a=[];if(o.outputs.forEach(c=>{const l=e[c.id];l!=null?a.push(l):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=n(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const h=o.inputs[c];if(!Rt(l.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=l;else{const u=e[h.id];e[h.id]=s(u,l),u.dispose()}}}}/**
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
 */const br=20,Fe=3,Vn=7;function Uu(e,t,n,s){const r=Ne(t),o=qu(e,t,n,r),a=t.length,i=dn(e,t,n,r,o),c=["Tensor"];return s&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function qu(e,t,n,s){const r=L(t),o=s[s.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?Re(e):e;if(i>1)for(let l=0;l<r/o;l++){const h=l*o;for(let u=0;u<o;u++)a[u]=Math.max(a[u],Be(c[h+u],0,n).length)}return a}function Be(e,t,n){let s;return Array.isArray(e)?s=`${parseFloat(e[0].toFixed(Vn))} + ${parseFloat(e[1].toFixed(Vn))}j`:Ut(e)?s=`'${e}'`:n==="bool"?s=zi(e):s=parseFloat(e.toFixed(Vn)).toString(),Ce(s,t)}function zi(e){return e===0?"false":"true"}function dn(e,t,n,s,r,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const $=Re(e);return[Be($[0],0,n)]}return n==="bool"?[zi(e[0])]:[e[0].toString()]}if(c===1){if(i>br){const y=Fe*a;let S=Array.from(e.slice(0,y)),D=Array.from(e.slice((i-Fe)*a,i*a));return n==="complex64"&&(S=Re(S),D=Re(D)),["["+S.map((k,T)=>Be(k,r[T],n)).join(", ")+", ..., "+D.map((k,T)=>Be(k,r[i-Fe+T],n)).join(", ")+"]"]}return["["+(n==="complex64"?Re(e):Array.from(e)).map((y,S)=>Be(y,r[S],n)).join(", ")+"]"]}const l=t.slice(1),h=s.slice(1),u=s[0]*a,d=[];if(i>br){for(let $=0;$<Fe;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,r,!1))}d.push("...");for(let $=i-Fe;$<i;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,r,$===i-1))}}else for(let $=0;$<i;$++){const y=$*u,S=y+u;d.push(...dn(e.slice(y,S),l,n,h,r,$===i-1))}const b=c===2?",":"";d[0]="["+(i>0?d[0]+b:"");for(let $=1;$<d.length-1;$++)d[$]=" "+d[$]+b;let w=`,
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
 */class kn{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=L(t),s!=null){const r=s.length;p(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||xs(n,this.size),this.strides=Ne(t)}set(t,...n){n.length===0&&(n=[0]),p(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const r of t){if(r<0||r>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return St().makeTensor(this.values,this.shape,this.dtype)}}let St=null,me=null;function Gu(e){St=e}function zu(e){me=e}class Z{constructor(t,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=L(t),this.strides=Ne(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return me.buffer(this.shape,this.dtype,t)}bufferSync(){return me.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return $e(this.shape,t,this.dtype==="complex64")}arraySync(){return $e(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=St().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>En(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),St().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=St().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>En(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await St().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),St().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return me.print(this,t)}clone(){return this.throwIfDisposed(),me.clone(this)}toString(t=!1){const n=this.dataSync();return Uu(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),me.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),St().makeVariable(this,t,n,s)}}Object.defineProperty(Z,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Ki(){return Is("Tensor",()=>Z)}Ki();class Ge extends Z{constructor(t,n,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Rt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);St().disposeTensor(this),this.dataId=t.dataId,St().incRef(this,null)}dispose(){St().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ge,Symbol.hasInstance,{value:e=>e instanceof Z&&e.assign!=null&&e.assign instanceof Function});/**
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
 */var rs;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(rs||(rs={}));var os;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(os||(os={}));var as;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(as||(as={}));var is;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(is||(is={}));var cs;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(cs||(cs={}));const Ku={float32:is,int32:os,bool:as,complex64:cs};function Nn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return Ku[e][t]}function Vu(e){return Nn(e,"int32")}function Vi(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function Hi(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
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
 */function X(e,t){if(e.dtype===t.dtype)return[e,t];const n=Nn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ji(e,t){p(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function Hu(e,t){return t.some(n=>n.id===e.id)}function Rs(e){const t=[];return Xi(e,t,new Set),t}function Xi(e,t,n){if(e==null)return;if(e instanceof Z){t.push(e);return}if(!ju(e))return;const s=e;for(const r in s){const o=s[r];n.has(o)||(n.add(o),Xi(o,t,n))}}function ju(e){return Array.isArray(e)||typeof e=="object"}const Xu=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:ji,getTensorsInContainer:Rs,isTensorInList:Hu,makeTypesMatch:X},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Hn(e){return e.kernelName!=null}class wr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Ae{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new wr}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(Lt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Cu(this.backendInstance),!0}setupRegisteredKernels(){yn(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){yn(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof Nr)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(a=>r<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Lt(`Initialization of backend ${t} failed`),Lt(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Lt(`Initialization of backend ${t} failed`),Lt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),r=s.backend,o=this.readSync(n),a=r.refCount(n);r.disposeData(n,!0),s.backend=t,t.move(n,o,s.shape,s.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,n,s){t();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return Ae.nextTensorId++}nextVariableId(){return Ae.nextVariableId++}clone(t){const n=m.runKernel(Ns,{x:t}),s={x:t},r=a=>({x:()=>{const i="float32",c={x:a},l={dtype:i};return m.runKernel(As,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,o,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!(Ue(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const r=this.backend.numDataIds();let o=0;s.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const r=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=Hn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Hn(t)){const{kernelName:w,inputs:$,attrs:y}=t;this.backendName==null&&this.backend;const S=Ue(w,this.backendName);p(S!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const D=this.backend.numDataIds();c=S.kernelFunc({inputs:$,attrs:y,backend:this.backend});const k=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,D,k);const T=k.map(_=>_.rank!=null?_:this.makeTensorFromTensorInfo(_));if(r){const _=this.getTensorsForGradient(w,$,T);s=this.saveTensorsForBackwardMode(_)}return T}}else{const{forwardFunc:w}=t,$=y=>{r&&(s=y.map(S=>this.keep(this.clone(S))))};i=()=>{const y=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,$));const S=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,y,S),S}}const{inputs:h,attrs:u}=t,d=Hn(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(b=this.profiler.profileKernel(l,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),n=b.outputs)}),r&&this.addTapeNode(l,h,n,d,s,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const r=es(t);if(r!=null){const o=r.inputsToSave||[],a=r.outputsToSave||[];let i;r.saveAllInputs?(p(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(l=>n[l])):i=o.map(l=>n[l]);const c=s.filter((l,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&Ut(t[0])&&(o=t.map(c=>sn(c)));const a=r.write(o,n,s),i=new Z(n,s,a,this.nextTensorId());if(this.trackTensor(i,r),s==="string"){const c=this.state.tensorInfo.get(a),l=Or(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,n,s,r){s=s||"float32";const o={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:r,dtype:o}=t,a=new Z(r,o,s,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new Ge(t,n,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*bn(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Ge||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*bn(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,r,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:o},c=es(t);c!=null&&(r=c.gradFunc),r!=null&&(i.gradient=l=>(l=l.map((h,u)=>{if(h==null){const d=s[u],b=_n(d.size,d.dtype);return this.makeTensor(b,d.shape,d.dtype)}return h}),r(l.length>1?l:l[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=Rs(t),s=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!s.has(a.id)&&a.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,n,s,r=!1){if(p(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));p(o instanceof Z,()=>"The result y returned by f() must be a tensor.");const a=Lu(this.state.activeTape,n,o);if(!r&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=s??Zu(o.shape),Wu(i,a,l=>this.tidy(l),Yu);const c=n.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const h of l.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return p(Kt(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{p(n.every(i=>i instanceof Z),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((i,c)=>{r[c]=i});const o=(i,c)=>(s=t(...n,c),p(s.value instanceof Z,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),p(Kt(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),a=(i,c)=>{const l=s.gradFunc(i,c),h=Array.isArray(l)?l:[l];p(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),p(h.every(d=>d instanceof Z),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const u={};return h.forEach((d,b)=>{u[b]=()=>d}),u};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=qe(),s=await this.backend.time(t);return s.wallMs=qe()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new wr;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ae.nextTensorId=0;Ae.nextVariableId=0;function Zu(e){const t=vs(L(e),"float32");return m.makeTensor(t,e,"float32")}function Zi(){const e=Gr();if(e._tfengine==null){const t=new qr(e);e._tfengine=new Ae(t)}return Ql(e._tfengine.ENV),Gu(()=>e._tfengine),e._tfengine}const m=Zi();function Yu(e,t){const n={a:e,b:t};return m.runKernel(_s,n)}/**
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
 */function Ju(){return typeof navigator<"u"&&navigator!=null}let ls;function Qu(e){ls=e}function th(e){if(ls!==void 0)return ls;if(e||Ju()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Yi(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const eh=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Yi,isMobile:th,mockIsMobile:Qu},Symbol.toStringTag,{value:"Module"}));/**
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
 */function At(e,t){let n=e;if(et(e))return t==="string"?[]:[e.length];if(Vi(e)){const r=e.channels||"RGBA";return[e.height,e.width*r.length]}else if(Hi(e))return[e.buffer.size/(t==null?4:bn(t))];if(!Array.isArray(e))return[];const s=[];for(;Array.isArray(n)||et(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(e)&&N().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ji(e,s,[]),s}function Ji(e,t,n){if(n=n||[],!Array.isArray(e)&&!et(e)){p(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}p(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),p(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const s=t.slice(1);for(let r=0;r<e.length;++r)Ji(e[r],s,n.concat(r))}function yr(e,t,n,s){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${e} tensor, but got ${t} tensor`)}}function f(e,t,n,s="numeric"){if(e instanceof Ki())return yr(s,e.dtype,t,n),e;let r=en(e);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),yr(s,r,t,n),e==null||!et(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=At(e,r);!et(e)&&!Array.isArray(e)&&(e=[e]);const i=r!=="string"?Dn(e,r):Vt(e,[],!0);return m.makeTensor(i,o,r)}function ze(e,t,n,s="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>f(o,`${t}[${a}]`,n,s))}/**
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
 */const Qi="__op";function g(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Qi;const r=(...o)=>{m.startScope(n);try{const a=s(...o);return An(a)&&console.error("Cannot return a Promise inside of tidy."),m.endScope(a),a}catch(a){throw m.endScope(null),a}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
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
 */function nh(e,t){const n=f(e,"real","complex"),s=f(t,"imag","complex");it(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return m.runKernel(fo,r)}const Ht=g({complex_:nh});/**
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
 */function Xt(e,t,n,s){if(s==null)s=en(e);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Hi(e)||Vi(e)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return m.backend.createTensorFromGPUData(e,t||n,s)}if(!et(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){pt(t);const r=L(t),o=L(n);p(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==L(t.slice(a)):!0;p(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!et(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=s!=="string"?Dn(e,s):Vt(e,[],!0),m.makeTensor(e,t,s)}/**
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
 */function Ee(e,t,n){const s=At(e,n);return Xt(e,t,s,n)}/**
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
 */const re={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Tt{static join(t){return new Tt(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>et(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=n+r.byteLength;this.shards.push({buffer:r,start:n,end:o}),n=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=n-t,o=new ArrayBuffer(r),a=new Uint8Array(o);let i=0;for(let c=s;c<this.shards.length;c++){const l=this.shards[c],u=t+i-l.start,d=i,w=Math.min(n,l.end)-l.start,$=new Uint8Array(l.buffer,u,w-u);if(a.set($,d),i+=$.length,n<l.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(r){return t<r.start?-1:t>=r.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=sh(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function sh(e,t){let n=0,s=e.length;for(;n<=s;){const r=Math.floor((s-n)/2)+n,o=t(e[r]);if(o===0)return r;o<0?s=r:n=r+1}return-1}/**
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
 */function rh(){N().set("PROD",!0)}function oh(){N().set("DEBUG",!0)}function ah(){N().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function ih(e){N().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ch(){m.disposeVariables()}function lh(){return m}function uh(){return m.memory()}function hh(e){return m.profile(e)}function Y(e,t){return m.tidy(e,t)}function ct(e){Rs(e).forEach(n=>n.dispose())}function tc(e){return m.keep(e)}function fh(e){return m.time(e)}function dh(e){return m.setBackend(e)}function ph(){return m.ready()}function ec(){return m.backendName}function gh(e){m.removeBackend(e)}function mh(e){return m.findBackend(e)}function bh(e){return m.findBackendFactory(e)}function wh(e,t,n=1){return m.registerBackend(e,t,n)}function nc(){return m.backend}function yh(e,t){N().setPlatform(e,t)}/**
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
 */const jt=4;async function $h(e,t){const n=[],s=[],r=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<r.length;++a){const i=r[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async u=>{const d=await c.bytes(),b=d.reduce((y,S)=>y+S.length,0)+jt*d.length,w=new Uint8Array(b);let $=0;for(let y=0;y<d.length;y++){const S=d[y],D=new Uint8Array(new Uint32Array([S.length]).buffer);w.set(D,$),$+=jt,w.set(S,$),$+=S.length}u(w)});s.push(h)}else s.push(c.data());t!=null&&(l.group=t),n.push(l)}const o=await Promise.all(s);return{data:xh(o),specs:n}}function sc(e,t){const n=new Tt(e),s={};let r=0;for(const o of t){const a=Eh(o,(i,c)=>n.slice(r+i,r+c));s[o.name]=rc(o,n.slice(r,r+a)),r+=a}return s}function Eh(e,t){const n=L(e.shape);let s;if("quantization"in e){const r=e.quantization;s=re[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=jt+new Uint32Array(t(r,r+jt))[0];return r}else s=re[e.dtype];return n*s}async function kh(e,t){const n=L(e.shape);let s;if("quantization"in e){const r=e.quantization;s=re[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=jt+new Uint32Array(await t(r,r+jt))[0];return r}else s=re[e.dtype];return n*s}function rc(e,t){const n=e.name,s=e.dtype,r=e.shape,o=L(r);let a,i=0;if("quantization"in e){const c=e.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${e.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${e.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=re[c.dtype],h=c.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=d*c.scale+c.min}}else if(c.dtype==="float16")a=Nh()(h);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(s==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=Math.round(d*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*l}else if(s==="string"){const c=L(e.shape);a=[];for(let l=0;l<c;l++){const h=new Uint32Array(t.slice(i,i+jt))[0];i+=jt;const u=new Uint8Array(t.slice(i,i+h));a.push(u),i+=h}}else{const c=re[s];if(s==="float32")a=new Float32Array(t);else if(s==="int32")a=new Int32Array(t);else if(s==="bool")a=new Uint8Array(t);else if(s==="complex64"){a=new Float32Array(t);const l=new Float32Array(a.length/2),h=new Float32Array(a.length/2);for(let w=0;w<l.length;w++)l[w]=a[w*2],h[w]=a[w*2+1];const u=Ee(l,r,"float32"),d=Ee(h,r,"float32"),b=Ht(u,d);return u.dispose(),d.dispose(),b}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*c}return Ee(a,r,s)}async function $r(e,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:r,value:o}=await e.read();if(r&&o==null){const i=n-s.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const a=new Uint8Array(s.length+o.byteLength);a.set(s,0),a.set(new Uint8Array(o),s.length),s=a}return s.buffer}async function Sh(e,t){const n={},s=e.getReader();let r=new ArrayBuffer(0);for(const o of t){const a=await kh(o,async(l,h)=>(r=await $r(s,r,h),r.slice(l,h)));r=await $r(s,r,a);const i=r.slice(0,a);r=r.slice(a);const c=rc(o,i);if(n[o.name]=c,ec()==="webgpu"){const l=nc();"uploadToGPU"in l&&L(c.shape)>=N().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return n}function xh(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return n.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const Cs=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Er(e){return Cs?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function vh(e){if(Cs)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let s=0,r=t.length;s<r;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function Th(e){if(Cs){const s=Buffer.from(e,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function Ih(e){return Tt.join(e)}function kr(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function oc(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function ac(e,t,n){const s={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(s.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return e.signature!=null&&(s.signature=e.signature),e.userDefinedMetadata!=null&&(s.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(s.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(s.initializerSignature=e.initializerSignature),s}async function Ps(e,t){let n,s;return e.weightsManifest!=null&&([n,s]=await t(e.weightsManifest)),ac(e,n,s)}function rn(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Er(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Er(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new Tt(e.weightData).byteLength}}function us(e){const t=[];for(const n of e)t.push(...n.weights);return t}function _h(){const e=n=>{let s=n<<13,r=0;for(;!(s&8388608);)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Ah(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Dh(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Nh(){const e=_h(),t=Ah(),n=Dh();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let a=0;a<s.length;a++){const i=s[a],c=e[n[i>>10]+(i&1023)]+t[i>>10];o[a]=c}return new Float32Array(r)}}/**
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
 */class j{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return j.instance==null&&(j.instance=new j),j.instance}static registerSaveRouter(t){j.getInstance().saveRouters.push(t)}static registerLoadRouter(t){j.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return j.getHandlers(t,"save")}static getLoadHandlers(t,n){return j.getHandlers(t,"load",n)}static getHandlers(t,n,s){const r=[];return(n==="load"?j.getInstance().loadRouters:j.getInstance().saveRouters).forEach(a=>{const i=a(t,s);i!==null&&r.push(i)}),r}}const Mh=e=>j.registerSaveRouter(e),Fh=e=>j.registerLoadRouter(e),Bh=e=>j.getSaveHandlers(e),Rh=(e,t)=>j.getLoadHandlers(e,t);/**
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
 */const hs="tensorflowjs",fs=1,ee="models_store",qt="model_info_store";function ic(){if(!N().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ds(e){const t=e.result;t.createObjectStore(ee,{keyPath:"modelPath"}),t.createObjectStore(qt,{keyPath:"modelPath"})}class oe{constructor(t){if(this.indexedDB=ic(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,r)=>{const o=this.indexedDB.open(hs,fs);o.onupgradeneeded=()=>ds(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(ee,"readonly"),l=i.objectStore(ee).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=h=>(a.close(),r(l.error)),i.oncomplete=()=>a.close()}else{n.weightData=Tt.join(n.weightData);const i=rn(n),c=a.transaction(qt,"readwrite");let l=c.objectStore(qt),h;try{h=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(d){return r(d)}let u;h.onsuccess=()=>{u=a.transaction(ee,"readwrite");const d=u.objectStore(ee);let b;try{b=d.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(w){return r(w)}b.onsuccess=()=>s({modelArtifactsInfo:i}),b.onerror=w=>{l=c.objectStore(qt);const $=l.delete(this.modelPath);$.onsuccess=()=>(a.close(),r(b.error)),$.onerror=y=>(a.close(),r(b.error))}},h.onerror=d=>(a.close(),r(h.error)),c.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}}},o.onerror=a=>r(o.error)})}}oe.URL_SCHEME="indexeddb://";const cc=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(oe.URL_SCHEME)?Ch(e.slice(oe.URL_SCHEME.length)):null;j.registerSaveRouter(cc);j.registerLoadRouter(cc);function Ch(e){return new oe(e)}function Ph(e){return e.startsWith(oe.URL_SCHEME)?e.slice(oe.URL_SCHEME.length):e}class Oh{constructor(){this.indexedDB=ic()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(hs,fs);s.onupgradeneeded=()=>ds(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(qt,"readonly"),i=o.objectStore(qt).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(r.close(),n(i.error)),o.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})}async removeModel(t){return t=Ph(t),new Promise((n,s)=>{const r=this.indexedDB.open(hs,fs);r.onupgradeneeded=()=>ds(r),r.onsuccess=()=>{const o=r.result,a=o.transaction(qt,"readwrite"),i=a.objectStore(qt),c=i.get(t);let l;c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),u=()=>{l=o.transaction(ee,"readwrite");const b=l.objectStore(ee).delete(t);b.onsuccess=()=>n(c.result.modelArtifactsInfo),b.onerror=w=>s(c.error)};h.onsuccess=u,h.onerror=d=>(u(),o.close(),s(c.error))}},c.onerror=h=>(o.close(),s(c.error)),a.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}/**
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
 */const Mt="/",be="tensorflowjs_models",lc="info",Lh="model_topology",Wh="weight_specs",Uh="weight_data",qh="model_metadata";function uc(e){return{info:[be,e,lc].join(Mt),topology:[be,e,Lh].join(Mt),weightSpecs:[be,e,Wh].join(Mt),weightData:[be,e,Uh].join(Mt),modelMetadata:[be,e,qh].join(Mt)}}function hc(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Gh(e){const t=e.split(Mt);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Mt)}function zh(e){return e.startsWith(ae.URL_SCHEME)?e.slice(ae.URL_SCHEME.length):e}class ae{constructor(t){if(!N().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=uc(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=rn(t),o=Tt.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,vh(o));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw hc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Th(a),n}}ae.URL_SCHEME="localstorage://";const fc=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ae.URL_SCHEME)?Kh(e.slice(ae.URL_SCHEME.length)):null;j.registerSaveRouter(fc);j.registerLoadRouter(fc);function Kh(e){return new ae(e)}class Vh{constructor(){p(N().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),p(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=be+Mt,s=Mt+lc;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(s)){const a=Gh(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=zh(t);const n=uc(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return hc(n),s}}/**
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
 */const ke="://";class rt{constructor(){this.managers={}}static getInstance(){return rt.instance==null&&(rt.instance=new rt),rt.instance}static registerManager(t,n){p(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ke)&&(t=t.slice(0,t.indexOf(ke))),p(t.length>0,()=>"scheme must not be an empty string.");const s=rt.getInstance();p(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=rt.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(rt.getInstance().managers)}}function pn(e){if(e.indexOf(ke)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${rt.getSchemes().join(",")}`);return{scheme:e.split(ke)[0],path:e.split(ke)[1]}}async function dc(e,t,n=!1){p(e!==t,()=>`Old path and new path are the same: '${e}'`);const s=j.getLoadHandlers(e);p(s.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),p(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${e}.`);const r=s[0],o=j.getSaveHandlers(t);p(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),p(o.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const a=o[0],i=pn(e).scheme,c=pn(e).path,l=i===pn(e).scheme,h=await r.load();n&&l&&await rt.getManager(i).removeModel(c);const u=await a.save(h);return n&&!l&&await rt.getManager(i).removeModel(c),u.modelArtifactsInfo}async function Hh(){const e=rt.getSchemes(),t={};for(const n of e){const s=await rt.getManager(n).listModels();for(const r in s){const o=n+ke+r;t[o]=s[r]}}return t}async function jh(e){const t=pn(e);return rt.getManager(t.scheme).removeModel(t.path)}async function Xh(e,t){return dc(e,t,!1)}async function Zh(e,t){return dc(e,t,!0)}/**
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
 */class Yh{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!N().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Ri(t)}}if(N().get("IS_BROWSER")){N().setPlatform("browser",new Yh);try{rt.registerManager(ae.URL_SCHEME,new Vh)}catch{}try{rt.registerManager(oe.URL_SCHEME,new Oh)}catch{}}/**
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
 */function tf(e,t){const n=f(e,"x","cast");if(!Pr(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:t};return m.runKernel(As,s,r)}const V=g({cast_:tf});/**
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
 */function ef(e){const n={x:f(e,"x","clone","string_or_numeric")};return m.runKernel(Ns,n)}const se=g({clone_:ef});/**
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
 */Zi();const nf={buffer:Ft,cast:V,clone:se,print:pc};zu(nf);/**
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
 */function sf(e,t){let n=f(e,"a","add"),s=f(t,"b","add");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(_s,r)}const A=g({add_:sf});/**
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
 */function rf(e,t){let n=f(e,"a","floorDiv"),s=f(t,"b","floorDiv");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(Ko,r)}const gc=g({floorDiv_:rf});/**
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
 */function of(e,t){let n=f(e,"a","div"),s=f(t,"b","div");if([n,s]=X(n,s),n.dtype==="int32"&&s.dtype==="int32")return gc(n,s);const r={a:n,b:s},o={};return m.runKernel(Fo,r,o)}const G=g({div_:of});/**
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
 */function af(e,t){let n=f(e,"a","mul"),s=f(t,"b","mul");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(Sa,r)}const v=g({mul_:af});/**
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
 */function cf(e){const t=f(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return m.runKernel(po,n)}else{const n={x:t};return m.runKernel(zr,n)}}const mt=g({abs_:cf});/**
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
 */function lf(e){const n={x:f(e,"x","acos")};return m.runKernel(Kr,n)}const uf=g({acos_:lf});/**
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
 */function hf(e){const n={x:f(e,"x","acosh")};return m.runKernel(Vr,n)}const ff=g({acosh_:hf});/**
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
 */function df(e){p(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),p(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((r,o)=>f(r,`tensors${o}`,"addN")),n=t[0];t.forEach(r=>{if(r.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(r=>{if(!Rt(r.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return m.runKernel(Hr,s)}const pf=g({addN_:df});/**
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
 */function gf(e,t=null,n=!1){const r={x:f(e,"x","all","bool")},o={axis:t,keepDims:n};return m.runKernel(jr,r,o)}const mf=g({all_:gf});/**
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
 */function bf(e,t=null,n=!1){const r={x:f(e,"x","any","bool")},o={axis:t,keepDims:n};return m.runKernel(Xr,r,o)}const wf=g({any_:bf});/**
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
 */function yf(e,t=0){const s={x:f(e,"x","argMax")},r={axis:t};return m.runKernel(Zr,s,r)}const $f=g({argMax_:yf});/**
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
 */function Ef(e,t=0){const s={x:f(e,"x","argMin")},r={axis:t};return m.runKernel(Yr,s,r)}const kf=g({argMin_:Ef});/**
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
 */function Sf(e){const n={x:f(e,"x","asin")};return m.runKernel(Jr,n)}const xf=g({asin_:Sf});/**
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
 */function vf(e){const n={x:f(e,"x","asinh")};return m.runKernel(Qr,n)}const Tf=g({asinh_:vf});/**
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
 */function If(e){const n={x:f(e,"x","atan")};return m.runKernel(to,n)}const _f=g({atan_:If});/**
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
 */function Af(e,t){let n=f(e,"a","atan2"),s=f(t,"b","atan2");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(no,r)}const Df=g({atan2_:Af});/**
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
 */function Ff(e,t,n,s,r="NHWC",o){const a=e[3],i=[...t,a],c=wc(r);return on(e,i,n,o,s,null,null,c)}function mc(e,t,n,s,r,o,a="channelsLast"){const[i,c]=Ke(t);let l;if(a==="channelsLast")l=[i,c,e[3],e[3]];else if(a==="channelsFirst")l=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return on(e,l,n,s,r,o,!1,a)}function Bf(e,t,n,s,r,o,a="NDHWC"){const[i,c,l]=ps(t);let h,u;if(a==="NDHWC")u="channelsLast",h=[i,c,l,e[4],e[4]];else if(a==="NCDHW")u="channelsFirst",h=[i,c,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return bc(e,h,n,s,r,!1,u,o)}function on(e,t,n,s,r,o,a=!1,i="channelsLast"){let[c,l,h,u]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,h,u]=e;else if(i==="channelsFirst")[c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[d,b,,w]=t,[$,y]=Ke(n),[S,D]=Ke(s),k=Se(d,S),T=Se(b,D),{padInfo:_,outHeight:I,outWidth:R}=Pf(r,l,h,$,y,k,T,o,i),B=a?w*u:w;let M;return i==="channelsFirst"?M=[c,B,I,R]:i==="channelsLast"&&(M=[c,I,R,B]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:h,inChannels:u,outHeight:I,outWidth:R,outChannels:B,padInfo:_,strideHeight:$,strideWidth:y,filterHeight:d,filterWidth:b,effectiveFilterHeight:k,effectiveFilterWidth:T,dilationHeight:S,dilationWidth:D,inShape:e,outShape:M,filterShape:t}}function bc(e,t,n,s,r,o=!1,a="channelsLast",i){let[c,l,h,u,d]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,h,u,d]=e;else if(a==="channelsFirst")[c,d,l,h,u]=e;else throw new Error(`Unknown dataFormat ${a}`);const[b,w,$,,y]=t,[S,D,k]=ps(n),[T,_,I]=ps(s),R=Se(b,T),B=Se(w,_),M=Se($,I),{padInfo:P,outDepth:C,outHeight:Q,outWidth:nt}=Of(r,l,h,u,S,D,k,R,B,M,i),st=o?y*d:y;let ut;return a==="channelsFirst"?ut=[c,st,C,Q,nt]:a==="channelsLast"&&(ut=[c,C,Q,nt,st]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:u,inChannels:d,outDepth:C,outHeight:Q,outWidth:nt,outChannels:st,padInfo:P,strideDepth:S,strideHeight:D,strideWidth:k,filterDepth:b,filterHeight:w,filterWidth:$,effectiveFilterDepth:R,effectiveFilterHeight:B,effectiveFilterWidth:M,dilationDepth:T,dilationHeight:_,dilationWidth:I,inShape:e,outShape:ut,filterShape:t}}function Rf(e,t,n,s,r){s==null&&(s=Os(e,t,n));const o=e[0],a=e[1],i=Ve((o-t+2*s)/n+1,r),c=Ve((a-t+2*s)/n+1,r);return[i,c]}function Cf(e,t,n,s,r,o){r==null&&(r=Os(e,t[0],s[0]));const a=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*r>=t[i]&&(a[i]=Ve((e[i]-t[i]+2*r)/s[i]+1,o));return a}function Os(e,t,n,s=1){const r=Se(t,s);return Math.floor((e[0]*(n-1)-n+r)/2)}function Ke(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ps(e){return typeof e=="number"?[e,e,e]:e}function Se(e,t){return t<=1?e:e+(e-1)*(t-1)}function Pf(e,t,n,s,r,o,a,i,c){let l,h,u;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const b=Rf([t,n],o,s,e,i);h=b[0],u=b[1]}else if(e==="same"){h=Math.ceil(t/s),u=Math.ceil(n/r);const d=Math.max(0,(h-1)*s+o-t),b=Math.max(0,(u-1)*r+a-n),w=Math.floor(d/2),$=d-w,y=Math.floor(b/2),S=b-y;l={top:w,bottom:$,left:y,right:S,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/s),u=Math.ceil((n-a+1)/r);else if(typeof e=="object"){const d=c==="channelsLast"?e[1][0]:e[2][0],b=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],$=c==="channelsLast"?e[2][1]:e[3][1];l={top:d,bottom:b,left:w,right:$,type:d===0&&b===0&&w===0&&$===0?"VALID":"EXPLICIT"},h=Ve((t-o+d+b)/s+1,i),u=Ve((n-a+w+$)/r+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:h,outWidth:u}}function Of(e,t,n,s,r,o,a,i,c,l,h){let u,d,b,w;if(e==="valid"&&(e=0),typeof e=="number"){u={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const y=Cf([t,n,s,1],[i,c,l],1,[r,o,a],e,h);d=y[0],b=y[1],w=y[2]}else if(e==="same"){d=Math.ceil(t/r),b=Math.ceil(n/o),w=Math.ceil(s/a);const $=(d-1)*r+i-t,y=(b-1)*o+c-n,S=(w-1)*a+l-s,D=Math.floor($/2),k=$-D,T=Math.floor(y/2),_=y-T,I=Math.floor(S/2),R=S-I;u={top:T,bottom:_,left:I,right:R,front:D,back:k,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:b,outWidth:w}}function Ve(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function He(e){const[t,n,s]=Ke(e);return t===1&&n===1&&s===1}function Ct(e,t){return He(e)||He(t)}function ie(e){return Ke(e).every(t=>t>0)}function wc(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function kt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")p(Te(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{p(Te(r),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
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
 */function Lf(e,t){const s={x:f(e,"x","reshape","string_or_numeric")},r={shape:t};return m.runKernel(Ga,s,r)}const E=g({reshape_:Lf});/**
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
 */function Wf(e,t,n,s,r){const o=f(e,"x","avgPool","float32"),a=1;p(Ct(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),kt("avgPool",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r};let u=m.runKernel(so,l,h);return u=V(u,o.dtype),c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const yc=g({avgPool_:Wf});/**
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
 */function Uf(e,t,n,s,r,o="NDHWC"){const a=f(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),p(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),kt("avgPool3d",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o};let u=m.runKernel(ro,l,h);return u=V(u,i.dtype),c?E(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const qf=g({avgPool3d_:Uf});/**
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
          with dtype ${o.dtype}. `)}),n.length===1)return se(n[0]);const s=n,r={axis:t};return m.runKernel(go,s,r)}const dt=g({concat_:Gf});/**
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
 */function zf(e,t,n=!1,s=!1){let r=f(e,"a","matMul"),o=f(t,"b","matMul");[r,o]=X(r,o);const a={a:r,b:o},i={transposeA:n,transposeB:s};return m.runKernel(oo,a,i)}const O=g({matMul_:zf});/**
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
 */function Vf(e,t,n){const s=f(e,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:n};return m.runKernel(ei,r,o)}const H=g({slice_:Vf});/**
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
 */function Hf(e){const n={x:f(e,"x","tanh","float32")};return m.runKernel(vi,n)}const gs=g({tanh_:Hf});/**
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
 */function jf(e,t,n,s,r,o){const a=f(e,"forgetBias","basicLSTMCell"),i=f(t,"lstmKernel","basicLSTMCell"),c=f(n,"lstmBias","basicLSTMCell"),l=f(s,"data","basicLSTMCell"),h=f(r,"c","basicLSTMCell"),u=f(o,"h","basicLSTMCell"),d=dt([l,u],1),b=O(d,i),w=A(b,c),$=w.shape[0],y=w.shape[1]/4,S=[$,y],D=H(w,[0,0],S),k=H(w,[0,y],S),T=H(w,[0,y*2],S),_=H(w,[0,y*3],S),I=A(v(xe(D),gs(k)),v(h,xe(A(a,T)))),R=v(gs(I),xe(_));return[I,R]}const Xf=g({basicLSTMCell_:jf});/**
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
 */function Zf(e,t,n){const s=f(e,"x","batchToSpaceND"),r=t.reduce((i,c)=>i*c);p(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),p(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),p(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},a={blockShape:t,crops:n};return m.runKernel(ao,o,a)}const $c=g({batchToSpaceND_:Zf});function Yf(e){let t;return e.rank===0||e.rank===1?t=E(e,[1,1,1,e.size]):e.rank===2?t=E(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
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
 */function Jf(e,t,n,s,r,o){o==null&&(o=.001);const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;s!=null&&(h=f(s,"offset","batchNorm")),p(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),p(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),p(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Yf(a),scale:l,offset:h,mean:i,variance:c},b={varianceEpsilon:o},w=m.runKernel(Vo,d,b);return E(w,a.shape)}const Mn=g({batchNorm_:Jf});function Qf(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),p(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),p(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const td=g({batchNorm2d_:Qf});function ed(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),p(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),p(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const nd=g({batchNorm3d_:ed});function sd(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),p(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),p(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Mn(a,i,c,h,l,o)}const rd=g({batchNorm4d_:sd});/**
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
 */function od(e,t,n){const s=f(e,"x","bincount"),r=f(t,"weights","bincount");p(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},a={size:n};return m.runKernel(io,o,a)}const Ec=g({bincount_:od});/**
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
 */function ad(e,t){const n=f(e,"x","bitwiseAnd"),s=f(t,"y","bitwiseAnd");if(!Rt(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const r={a:n,b:s};return m.runKernel(co,r)}const id=g({bitwiseAnd_:ad});/**
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
 */function cd(e,t){const n=f(e,"s0","broadcastArgs","int32"),s=f(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const r={s0:n,s1:s};return m.runKernel(lo,r)}const ld=g({broadcastArgs_:cd});/**
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
 */function ud(e,t){let n=f(e,"broadcastTo","x");const s=n.shape;if(pt(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=E(n,l)}const r=n.shape,o=Array.from(t);for(let l=t.length-1;l>=0;l--)if(r[l]===t[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((l,h)=>l>1?h:-1).filter(l=>l>=0).length===0)return se(n);const i={x:n},c={reps:o};return m.runKernel(Ms,i,c)}const gn=g({broadcastTo_:ud});/**
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
 */function an(e,t,n){pt(e),n=n||en(t);const s={shape:e,value:t,dtype:n};return m.runKernel(qo,{},s)}/**
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
 */function dd(e,t,n){const s=f(e,"x","clipByValue");if(p(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return an(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:n};return m.runKernel(ho,r,o)}const pd=g({clipByValue_:dd});function gd(e){return dt(e,0)}const md=g({concat1d_:gd});function bd(e,t){return dt(e,t)}const wd=g({concat2d_:bd});function yd(e,t){return dt(e,t)}const $d=g({concat3d_:yd});function Ed(e,t){return dt(e,t)}const kd=g({concat4d_:Ed});/**
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
 */function Sd(e,t,n,s,r="NHWC",o=[1,1],a){const i=f(e,"x","conv2d","float32"),c=f(t,"filter","conv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),kt("conv2d",s,a);const u=r==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in conv2d: depth of input (${u}) must match input depth for filter ${c.shape[2]}.`),p(Ct(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(ie(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:l,filter:c},b={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=m.runKernel(mo,d,b);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Fn=g({conv2d_:Sd});function xd(e,t,n,s,r="NWC",o=1,a){const i=f(e,"x","conv1d"),c=f(t,"filter","conv1d");let l=i,h=!1;i.rank===2&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1]])),p(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),p(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),kt("conv1d",s,a),p(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),p(Ct(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),p(ie(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv1D: Stride should be larger than 0."),p(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const u=E(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=E(l,[l.shape[0],1,l.shape[1],l.shape[2]]),y=Fn(d,u,[1,n],s,"NHWC",[1,o],a);return h?E(y,[y.shape[2],y.shape[3]]):E(y,[y.shape[0],y.shape[2],y.shape[3]])}const vd=g({conv1d_:xd});/**
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
 */function Td(e,t,n,s,r,o="NHWC",a){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,l=!1;t.rank===3&&(l=!0,c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),p(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),p(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),p(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],u=o==="NHWC"?c.shape[3]:c.shape[1];p(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),p(u===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[3]}.`),kt("conv2dDerInput",r,a);const d={dy:c,filter:n},b={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,inputShape:i},w=m.runKernel(wo,d,b);return l?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const kc=g({conv2DBackpropInput_:Td});function Id(e,t,n,s,r,o){const a=f(e,"x","conv2dTranspose"),i=f(t,"filter","conv2dTranspose");return kc(n,a,i,s,r,"NHWC",o)}const _d=g({conv2dTranspose_:Id});/**
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
 */function Ad(e,t,n,s,r="NDHWC",o=[1,1,1]){const a=f(e,"x","conv3d"),i=f(t,"filter","conv3d");let c=a,l=!1;a.rank===4&&(l=!0,c=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),p(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),p(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),p(Ct(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),p(ie(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),p(ie(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:c,filter:i},u={strides:n,pad:s,dataFormat:r,dilations:o},d=m.runKernel(yo,h,u);return l?E(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Dd=g({conv3d_:Ad});/**
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
 */function Nd(e,t,n,s,r){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=E(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],l=a.shape[4];p(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),p(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),p(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),p(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),p(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},u={pad:r,strides:s,inputShape:o},d=m.runKernel($o,h,u);return i?E(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Md=g({conv3DBackpropInput_:Nd});function Fd(e,t,n,s,r){const o=f(e,"x","conv3dTranspose"),a=f(t,"filter","conv3dTranspose");return Md(n,o,a,s,r)}const Bd=g({conv3dTranspose_:Fd});/**
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
 */function Ld(e,t=0,n=!1,s=!1){const o={x:f(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:s};return m.runKernel(So,o,a)}const Wd=g({cumprod_:Ld});/**
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
 */function Ud(e,t=0,n=!1,s=!1){const o={x:f(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:s};return m.runKernel(xo,o,a)}const qd=g({cumsum_:Ud});/**
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
 */function Gd(e,t,n,s=!1){const r=f(e,"x","denseBincount"),o=f(t,"weights","denseBincount");p(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),p(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const a={x:r,weights:o},i={size:n,binaryOutput:s};return m.runKernel(To,a,i)}const zd=g({denseBincount_:Gd});/**
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
 */function Kd(e,t,n="NHWC"){const s=f(e,"x","depthToSpace","float32"),r=n==="NHWC"?s.shape[1]:s.shape[2],o=n==="NHWC"?s.shape[2]:s.shape[3],a=n==="NHWC"?s.shape[3]:s.shape[1];p(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),p(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),p(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),p(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${s.shape}`);const i={x:s},c={blockSize:t,dataFormat:n};return m.runKernel(Io,i,c)}const Vd=g({depthToSpace_:Kd});/**
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
 */function Hd(e,t,n,s,r="NHWC",o=[1,1],a){const i=f(e,"x","depthwiseConv2d","float32"),c=f(t,"filter","depthwiseConv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const u=r==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${u}) must match the inChannels dimension in filter ${c.shape[2]}.`),kt("depthwiseConv2d",s,a);const d={x:l,filter:c},b={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=m.runKernel(_o,d,b);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Ls=g({depthwiseConv2d_:Hd});/**
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
 */function Zd(e,t,n,s,r=[1,1],o="NHWC"){const a=f(e,"x","dilation2d"),i=f(t,"filter","dilation2d");p(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),p(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),p(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,l=!1;a.rank===3&&(c=E(a,[1,a.shape[0],a.shape[1],a.shape[2]]),l=!0),p(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);const h={x:c,filter:i},u={strides:n,pad:s,dilations:r},d=m.runKernel(Mo,h,u);return l?E(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Yd=g({dilation2d_:Zd});/**
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
 */function Sc(e,t){const n=e.length,s=[];for(let r=0;r<n;r++){const o=n-1-r,a=e[o]||1;(t[t.length-1-r]||1)>1&&a===1&&s.unshift(o)}return s}function Ws(e,t){const n=[];for(let s=0;s<t.length;s++){const r=e[e.length-s-1],o=t.length-s-1,a=t[o];(r==null||r===1&&a>1)&&n.unshift(o)}return n}function J(e,t){const n=Math.max(e.length,t.length),s=new Array(n);for(let r=0;r<n;r++){let o=e[e.length-r-1];o==null&&(o=1);let a=t[t.length-r-1];if(a==null&&(a=1),o===1)s[n-r-1]=a;else if(a===1)s[n-r-1]=o;else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else s[n-r-1]=o}return s}const Jd=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:J,getBroadcastDims:Sc,getReductionAxes:Ws},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Qd(e,t){let n=f(e,"a","equal","string_or_numeric"),s=f(t,"b","equal","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Po,r)}const xc=g({equal_:Qd});/**
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
 */function tp(e,t,n){const s=f(t,"a","where"),r=f(n,"b","where"),o=f(e,"condition","where","bool"),a=J(J(o.shape,s.shape),r.shape),i=gn(o,a),c=gn(s,a),l=gn(r,a),h={condition:i,t:c,e:l};return m.runKernel(Qa,h)}const zt=g({where_:tp});/**
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
 */function np(e,t){let n=f(e,"a","div"),s=f(t,"b","div");[n,s]=X(n,s);const r=G(n,s),o=bt(r),a=xc(s,o);return zt(a,o,r)}const sp=g({divNoNan_:np});/**
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
 */function rp(e,t){const n=f(e,"t1","dot"),s=f(t,"t2","dot");p((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const r=n.rank===1?n.size:n.shape[1],o=s.rank===1?s.size:s.shape[0];if(p(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),n.rank===1&&s.rank===1){const a=E(n,[1,-1]),i=E(s,[-1,1]),c=O(a,i);return E(c,[])}else if(n.rank===1&&s.rank===2){const a=E(n,[1,-1]),i=E(s,[s.shape[0],s.shape[1]]),c=O(a,i);return E(c,[c.size])}else if(n.rank===2&&s.rank===1){const a=E(s,[-1,1]),i=O(n,a);return E(i,[i.size])}else{const a=E(s,[s.shape[0],s.shape[1]]);return O(n,a)}}const op=g({dot_:rp});/**
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
 */function ap(e,...t){const n=t.map((r,o)=>f(r,`tensors${o}`,"einsum")),s={equation:e};return m.runKernel(Bo,n,s)}const we=g({einsum_:ap});/**
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
 */function cp(e,t){const n=f(e,"x","ensureShape","string_or_numeric");if(!Fr(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const lp=g({ensureShape_:cp});/**
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
 */function Us(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Tc(e,t,n){const s=e.length+t.length,r=[];let o=0,a=0;for(let i=0;i<s;i++)n.indexOf(i)===-1?r.push(e[o++]):r.push(t[a++]);return r}function fp(e,t){const n=[],s=e.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&n.push(e[o]);const r=t.map(o=>e[o]);return[n,r]}function cn(e,t){const n=t.map(s=>1);return Tc(e,n,t)}function dp(e,t,n){p(Us(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function pp(e,t){if(Us(e,t))return null;const n=[];for(let s=0;s<t;++s)e.indexOf(s)===-1&&n.push(s);return e.forEach(s=>n.push(s)),n}function gp(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function mp(e,t){const n=[];for(let s=t-e;s<t;++s)n.push(s);return n}/**
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
 */function bp(e,t=null,n=!1){const r={x:f(e,"x","max")},o={reductionIndices:t,keepDims:n};return m.runKernel(fa,r,o)}const ve=g({max_:bp});/**
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
 */function wp(e,t=null,n=!1){const r={x:f(e,"x","min")},o={axis:t,keepDims:n};return m.runKernel(wa,r,o)}const ms=g({min_:wp});/**
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
 */function yp(e,t){let n=f(e,"base","pow"),s=f(t,"exp","pow");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(Fa,r)}const je=g({pow_:yp});/**
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
 */function kp(e,t=null,n=!1){let s=f(e,"x","sum");s.dtype==="bool"&&(s=V(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return m.runKernel(ci,r,o)}const q=g({sum_:kp});/**
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
 */function Sp(e,t="euclidean",n=null,s=!1){e=f(e,"x","norm");const r=Ic(e,t,n);let o=r.shape;if(s){const a=tn(n,e.shape);o=cn(r.shape,a)}return E(r,o)}function Ic(e,t,n=null){if(e.rank===0)return mt(e);if(e.rank!==1&&n===null)return Ic(E(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return q(mt(e),n);if(t===1/0)return ve(mt(e),n);if(t===-1/0)return ms(mt(e),n);if(t==="euclidean"||t===2)return Bt(q(je(mt(e),W(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return ve(q(mt(e),n[0]),n[1]-1);if(t===1/0)return ve(q(mt(e),n[1]),n[0]);if(t===-1/0)return ms(q(mt(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Bt(q(xt(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Bn=g({norm_:Sp});/**
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
 */function Tp(e){const n={x:f(e,"x","exp")};return m.runKernel(Oo,n)}const ce=g({exp_:Tp});/**
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
 */function Ip(e,t=0){const n=f(e,"x","expandDims","string_or_numeric");p(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:t};return m.runKernel(Lo,s,r)}const Ot=g({expandDims_:Ip});/**
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
 */function Dp(e,t){const n=f(e,"x","tile","string_or_numeric");p(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},r={reps:t};return m.runKernel(Ms,s,r)}const Pe=g({tile_:Dp});/**
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
 */function Np(e,t,n,s="float32"){t==null&&(t=e);const r=Ft([e,t],s),o=e<=t?e:t;for(let i=0;i<o;++i)r.set(1,i,i);const a=E(r.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return Pe(Ot(a,0),[n[0],1,1]);if(n.length===2)return Pe(Ot(Ot(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return Pe(Ot(Ot(Ot(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const _c=g({eye_:Np});/**
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
 */function Fp(e,t,n=0,s=0){const r=f(e,"x","gather"),o=f(t,"indices","gather","int32"),a={x:r,indices:o},i={axis:n,batchDims:s};return m.runKernel(Ho,a,i)}const Dc=g({gather_:Fp});/**
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
 */function Bp(e,t){let n=f(e,"a","greater","string_or_numeric"),s=f(t,"b","greater","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Xo,r)}const Rn=g({greater_:Bp});/**
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
 */function Rp(e,t){let n=f(e,"a","greaterEqual","string_or_numeric"),s=f(t,"b","greaterEqual","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Zo,r)}const Nc=g({greaterEqual_:Rp});/**
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
 */function Gp(e,t=.2){const s={x:f(e,"x","leakyRelu")},r={alpha:t};return m.runKernel(na,s,r)}const Mc=g({leakyRelu_:Gp});/**
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
 */function zp(e,t){let n=f(e,"a","less","string_or_numeric"),s=f(t,"b","less","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(sa,r)}const bs=g({less_:zp});/**
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
 */function Kp(e,t){let n=f(e,"a","lessEqual","string_or_numeric"),s=f(t,"b","lessEqual","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(ra,r)}const qs=g({lessEqual_:Kp});/**
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
 */function Vp(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:e,stop:t,num:n};return m.runKernel(oa,{},s)}/**
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
 */function Hp(e,t=5,n=1,s=1,r=.5){const o=f(e,"x","localResponseNormalization");p(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),p(Te(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=E(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},l={depthRadius:t,bias:n,alpha:s,beta:r},h=m.runKernel(ha,c,l);return i?E(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const jp=g({localResponseNormalization_:Hp});/**
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
 */function Yp(e){return p(Kt(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const s=f(t,"x","tf.grad","string_or_numeric"),r=n!=null?f(n,"dy","tf.grad"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(s),[s],r);return r!=null&&it(o.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Pn(a),a[0]})}}function Jp(e){return p(Kt(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{p(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=ze(t,"args","tf.grads","string_or_numeric"),r=n!=null?f(n,"dy","tf.grads"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(...s),s,r);return r!=null&&it(o.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Pn(a),a})}}function Qp(e){return p(Kt(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{p(t instanceof Z,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),p(n==null||n instanceof Z,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=m.gradients(()=>e(t),[t],n);return Pn(s),{grad:s[0],value:r}}}function tg(e){return p(Kt(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{p(Array.isArray(t)&&t.every(r=>r instanceof Z),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),p(n==null||n instanceof Z,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=m.gradients(()=>e(...t),t,n);return n!=null&&it(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Pn(s.grads),s}}function Bc(e,t){p(Kt(e),()=>"The f passed in variableGrads(f) must be a function"),p(t==null||Array.isArray(t)&&t.every(l=>l instanceof Ge),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in m.registeredVariables)t.push(m.registeredVariables[l])}const s=n?t.filter(l=>!l.trainable):null,r=t.length;t=t.filter(l=>l.trainable),p(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:a,grads:i}=m.gradients(e,t,null,o);p(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),p(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((l,h)=>{i[h]!=null&&(c[l.name]=i[h])}),s!=null&&s.forEach(l=>c[l.name]=null),{value:a,grads:c}}function Dt(e){return m.customGrad(e)}function Pn(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
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
 */function sg(e){const t=f(e,"x","logSigmoid");return Dt(s=>({value:_t(Rc(_t(s))),gradFunc:a=>v(a,xe(_t(s)))}))(t)}const rg=g({logSigmoid_:sg});/**
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
 */function og(e,t){let n=f(e,"a","sub"),s=f(t,"b","sub");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(Si,r)}const F=g({sub_:og});/**
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
 */function ag(e,t=-1){const n=f(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Dt((r,o)=>{const i=ve(r,t,!0),c=F(r,i),l=F(V(c,"float32"),Xe(q(ce(c),t,!0)));return o([l]),{value:l,gradFunc:(u,d)=>{const[b]=d,w=!0,$=ce(b);return F(u,v(q(u,t,w),$))}}})(n)}const ig=g({logSoftmax_:ag});/**
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
 */function cg(e,t=null,n=!1){const s=f(e,"x","logSumExp"),r=tn(t,s.shape),o=ve(s,r,!0),a=F(s,o),i=ce(a),c=q(i,r),l=Xe(c),h=A(E(o,l.shape),l);if(n){const u=cn(h.shape,r);return E(h,u)}return h}const Cc=g({logSumExp_:cg});/**
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
 */function lg(e,t){const n=f(e,"a","logicalAnd","bool"),s=f(t,"b","logicalAnd","bool");J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(ca,r)}const Sn=g({logicalAnd_:lg});/**
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
 */function hg(e,t){const n=f(e,"a","logicalOr","bool"),s=f(t,"b","logicalOr","bool");J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(ua,r)}const Oc=g({logicalOr_:hg});/**
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
 */function fg(e,t){const n=f(e,"a","logicalXor","bool"),s=f(t,"b","logicalXor","bool");return J(n.shape,s.shape),Sn(Oc(e,t),Pc(Sn(e,t)))}const dg=g({logicalXor_:fg});/**
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
 */const hn=2147483648;function pg(e,t,n="left"){const s=f(e,"sortedSequence","searchSorted"),r=f(t,"values","searchSorted"),o=s.shape[s.shape.length-1],a=r.shape[r.shape.length-1],i=E(s,[-1,o]),c=E(r,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(L(c.shape)>=hn)throw new Error(`values tensor size must less than ${hn}`);if(i.shape[1]>=hn)throw new Error(`trailing dim_size must less than ${hn} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:c},h={side:n};return m.runKernel(Ja,l,h)}const Gs=g({searchSorted_:pg});/**
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
 */function gg(e,t){return Gs(e,t,"left")}/**
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
 */function mg(e,t,n,s,r){const o=f(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),p(Ct(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),kt("maxPool",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r},u=m.runKernel(pa,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Lc=g({maxPool_:mg});/**
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
 */function bg(e,t=[1,1,1],n,s,r,o="NDHWC"){const a=f(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),kt("maxPool3d",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o},u=m.runKernel(ga,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const wg=g({maxPool3d_:bg});/**
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
 */function yg(e,t,n,s,r=!1){const a={x:f(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:s,includeBatchInIndex:r},c=m.runKernel(ma,a,i);return{result:c[0],indexes:c[1]}}const $g=g({maxPoolWithArgmax_:yg});/**
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
 */function Eg(e,t){let n=f(e,"a","maximum"),s=f(t,"b","maximum");[n,s]=X(n,s),n.dtype==="bool"&&(n=V(n,"int32"),s=V(s,"int32")),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(da,r)}const Wc=g({maximum_:Eg});/**
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
 */function kg(e,t=null,n=!1){const r={x:f(e,"x","mean")},o={axis:t,keepDims:n};return m.runKernel(ba,r,o)}const xn=g({mean_:kg});/**
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
 */function De(e,t="float32"){if(pt(e),t==="complex64"){const s=De(e,"float32"),r=De(e,"float32");return Ht(s,r)}const n=_n(L(e),t);return m.makeTensor(n,e,t)}/**
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
 */function ne(e,t="float32"){if(pt(e),t==="complex64"){const s=ne(e,"float32"),r=De(e,"float32");return Ht(s,r)}const n=vs(L(e),t);return m.makeTensor(n,e,t)}/**
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
 */function Sg(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let s=f(e,"x","meshgrid",e instanceof Z?e.dtype:"float32");if(t===void 0)return[s];let r=f(t,"y","meshgrid",t instanceof Z?t.dtype:"float32");const o=L(s.shape),a=L(r.shape);return n==="xy"?(s=E(s,[1,-1]),r=E(r,[-1,1]),[O(ne([a,1],s.dtype),s),O(r,ne([1,o],r.dtype))]):(s=E(s,[-1,1]),r=E(r,[1,-1]),[O(s,ne([1,a],s.dtype)),O(ne([o,1],r.dtype),r)])}/**
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
 */function xg(e,t){let n=f(e,"a","minimum"),s=f(t,"b","minimum");[n,s]=X(n,s),n.dtype==="bool"&&(n=V(n,"int32"),s=V(s,"int32")),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(ya,r)}const vn=g({minimum_:xg});/**
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
 */function vg(e,t,n){p(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=f(e,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");p(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=n==="reflect"?1:0;for(let i=0;i<s.rank;i++)p(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),p(t[i][0]>=0&&t[i][0]<=s.shape[i]-r&&t[i][1]>=0&&t[i][1]<=s.shape[i]-r,()=>`Padding in dimension ${i} cannot be greater than or equal to ${s.shape[i]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:n},a={x:s};return m.runKernel($a,a,o)}const Tg=g({mirrorPad_:vg});/**
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
 */function Ig(e,t){let n=f(e,"a","mod"),s=f(t,"b","mod");[n,s]=X(n,s);const r={a:n,b:s};return m.runKernel(Ea,r)}const _g=g({mod_:Ig});/**
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
 */function Ag(e,t=null,n=!1){e=f(e,"x","moments");const s=tn(t,e.shape),r=xn(e,s,n);let o=r.shape;n||(o=cn(r.shape,s));const a=xt(F(V(e,"float32"),E(r,o))),i=xn(a,s,n);return{mean:r,variance:i}}const Dg=g({moments_:Ag});function Ng(e,t,n,s){const r=f(t,"data","multiRNNCell"),o=ze(n,"c","multiRNNCell"),a=ze(s,"h","multiRNNCell");let i=r;const c=[];for(let u=0;u<e.length;u++){const d=e[u](i,o[u],a[u]);c.push(d[0]),c.push(d[1]),i=d[1]}const l=[],h=[];for(let u=0;u<c.length;u+=2)l.push(c[u]),h.push(c[u+1]);return[l,h]}const Mg=g({multiRNNCell_:Ng});/**
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
 */function Fg(e,t,n,s=!1){const r=f(e,"logits","multinomial"),o=r.size,a=r.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);n=n||Math.random();const c={logits:a===1?E(r,[1,-1]):r},l={numSamples:t,seed:n,normalized:s},h=m.runKernel(ka,c,l);return a===1?E(h,[h.size]):h}const Bg=g({multinomial_:Fg});/**
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
 */function Rg(e,t){let n=f(e,"a","notEqual","string_or_numeric"),s=f(t,"b","notEqual","string_or_numeric");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(va,r)}const Uc=g({notEqual_:Rg});/**
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
 */function Cg(e,t,n=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:f(e,"indices","oneHot","int32")},i={dtype:r,depth:t,onValue:n,offValue:s};return m.runKernel(Da,a,i)}const ws=g({oneHot_:Cg});/**
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
 */function Pg(e){const n={x:f(e,"x","onesLike")};return m.runKernel(Aa,n)}const Og=g({onesLike_:Pg});function Lg(e,t){const n=f(e,"v1","outerProduct"),s=f(t,"v2","outerProduct");p(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const r=E(n,[-1,1]),o=E(s,[1,-1]);return O(r,o)}const Wg=g({outerProduct_:Lg});/**
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
 */function Ug(e,t,n=0){const s=f(e,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:n},o={x:s};return m.runKernel(Ma,o,r)}const ln=g({pad_:Ug});function qg(e,t,n=0){return p(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),ln(e,[t],n)}const Gg=g({pad1d_:qg});function zg(e,t,n=0){return p(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Kg=g({pad2d_:zg});function Vg(e,t,n=0){return p(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Hg=g({pad3d_:Vg});function jg(e,t,n=0){return p(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ln(e,t,n)}const Xg=g({pad4d_:jg});/**
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
 */function Zg(e,t,n){const s=f(e,"x","spaceToBatchND");p(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),p(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),p(s.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:n};return m.runKernel(li,r,o)}const qc=g({spaceToBatchND_:Zg});/**
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
 */function Yg(e,t,n,s,r,o,a){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const i=f(e,"x","maxPool");let c=i,l=!1;i.rank===3&&(l=!0,c=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(Ct(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const h=mc(c.shape,t,o,r,s),u=[h.dilationHeight,h.dilationWidth];let d;s==="same"?d=Qg([h.filterHeight,h.filterWidth],u):d=[[0,0],[0,0]];const b=u[0]===1&&u[1]===1,[w,$]=Jg([h.inHeight,h.inWidth],u,d),y=b?s:"valid",S=b?c:qc(c,u,w),k=(n==="avg"?()=>yc(S,t,o,y,a):()=>Lc(S,t,o,y,a))(),T=b?k:$c(k,u,$);return l?E(T,[T.shape[1],T.shape[2],T.shape[3]]):T}function Jg(e,t,n){const s=n.map(h=>h[0]),r=n.map(h=>h[1]),o=e.concat(s,r),a=t.map((h,u)=>(h-o[u]%h)%h),i=r.map((h,u)=>h+a[u]),c=t.map((h,u)=>[s[u],i[u]]),l=t.map((h,u)=>[0,a[u]]);return[c,l]}function Qg(e,t){const s=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),r=s.map(a=>Math.floor(a/2)),o=s.map((a,i)=>a-r[i]);return s.map((a,i)=>[r[i],o[i]])}const tm=g({pool_:Yg});/**
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
 */function em(e,t){const n=f(e,"x","prelu"),s=f(t,"alpha","prelu"),r={x:n,alpha:s};return m.runKernel(Ba,r)}const Gc=g({prelu_:em});/**
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
 */function nm(e,t=null,n=!1){let s=f(e,"x","prod");s.dtype==="bool"&&(s=V(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return m.runKernel(Ra,r,o)}const sm=g({prod_:nm});/**
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
 */function rm(e,t,n,s){const r=e.map((h,u)=>f(h,`tensors${u}`,"raggedGather","int32")),o=f(t,"paramsDenseValues","raggedGather"),a=f(n,"indices","raggedGather","int32"),i={paramsNestedSplits:r,paramsDenseValues:o,indices:a},c={outputRaggedRank:s},l=m.runKernel(Ca,i,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const om=g({raggedGather_:rm});/**
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
 */function am(e,t,n){const s=f(e,"starts","raggedRange"),r=f(t,"limits","raggedRange",s.dtype),o=f(n,"deltas","raggedRange",s.dtype),a={starts:s,limits:r,deltas:o},i=m.runKernel(Pa,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const im=g({raggedRange_:am});/**
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
 */function cm(e,t,n,s,r){const o=f(e,"shape","raggedTensorToTensor","int32"),a=f(t,"values","raggedTensorToTensor"),i=f(n,"defaultValue","raggedTensorToTensor",a.dtype),c=s.map((u,d)=>f(u,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:o,values:a,defaultValue:i,rowPartitionTensors:c},h={rowPartitionTypes:r};return m.runKernel(Oa,l,h)}const lm=g({raggedTensorToTensor_:cm});/**
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
 */function um(e,t,n){pt(e);const s=L(e);let r=null;if(n==null||n==="float32")r=new Float32Array(s);else if(n==="int32")r=new Int32Array(s);else if(n==="bool")r=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<s;o++)r[o]=t();return m.makeTensor(r,e,n)}const hm=g({rand_:um});/**
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
 */const fm=.001,zc=.1;function dm(e,t,n){return n==null&&(n=zs()),ys(e,t,(s,r)=>Ks(s,r,n))}function zs(){return m.backend.floatPrecision()===32?fm:zc}function ys(e,t,n){let s=!0;if((et(e)||et(t))&&(s=!1),et(e)&&et(t)&&(s=!0),s){const a=e.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(e)&&Array.isArray(t)){const a=At(e),i=At(t);if(!Rt(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}const r=et(e)?e:Vt(e),o=et(t)?t:Vt(t);if(r.length!==o.length)throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${o.length}.
Actual:   ${r}.
Expected: ${o}.`);for(let a=0;a<o.length;++a){const i=r[a],c=o[a];if(!n(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${r}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function pm(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function gm(e,t){const n=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return Ut(e)||Ut(e[0])||Ut(t)||Ut(t[0])?ys(e,n,(s,r)=>s==r):ys(e,t,(s,r)=>Ks(s,r,0))}function mm(e,t,n){if(n==null&&(n=zs()),!Ks(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function Ks(e,t,n){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function bm(e,t,n){for(let s=0;s<e.length;s++)if(e[s]<t||e[s]>n)throw new Error(`Value out of range:${e[s]} low: ${t}, high: ${n}`)}function wm(e,t){const n=new Float32Array(e),s=new Float32Array(t);if(n.length!==s.length)throw new Error(`Expected ArrayBuffer to be of length ${s.length}, but it was ${n.length}`);for(let r=0;r<s.length;r++)if(n[r]!==s[r])throw new Error(`Expected ArrayBuffer value at ${r} to be ${s[r]} but got ${n[r]} instead`)}function Kc(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?Kc(n):e[t]=sn(n)}return e}function ym(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(n=>{t.addEventListener("loadeddata",s=>n(t)),t.load()})}async function $m(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const Em=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:zc,createVideoElement:ym,encodeStrings:Kc,expectArrayBuffersEqual:wm,expectArraysClose:dm,expectArraysEqual:gm,expectNumbersClose:mm,expectPromiseToFail:pm,expectValuesInRange:bm,play:$m,testEpsilon:zs},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Vs{constructor(t,n,s,r,o){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=Ss.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,n,s=!1;for(;!s;){let r,o,a;do r=2*this.random()-1,o=2*this.random()-1,a=r*r+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*r*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class km{constructor(t,n,s,r){this.alpha=t,this.beta=1/n,this.dtype=s;const o=r||Math.random();this.randu=Ss.alea(o.toString()),this.randn=new Vs(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,r,o,a;for(;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,t=r*r,n=1-.331*t*t,s=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<n||Math.log(o)<s)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Sm{constructor(t=0,n=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=Ss.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function xm(e,t,n=1,s="float32",r){if(pt(e),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const o=new km(t,n,s,r),a=Ft(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const vm=g({randomGamma_:xm});/**
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
 */function Tm(e,t=0,n=1,s,r){if(pt(e),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new Vs(t,n,s,!1,r),a=Ft(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Vc=g({randomNormal_:Tm});/**
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
 */function Im(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return Vc(e,0,1,t,n)}const _m=g({randomStandardNormal_:Im});/**
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
 */function Am(e,t=0,n=1,s="float32",r){pt(e);const o=Ft(e,s),a=new Sm(t,n,null,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Hs=g({randomUniform_:Am});/**
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
 */function Dm(e,t,n,s){return Hs(e,t,n,"int32",s)}const Nm=g({randomUniformInt_:Dm});/**
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
 */function Ze(e,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:e,stop:t,step:n,dtype:s};return m.runKernel(La,{},r)}/**
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
 */function Pm(e,t){const s={x:f(e,"x","reverse")},r={dims:t};return m.runKernel(Ha,s,r)}const le=g({reverse_:Pm});/**
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
 */function Xm(e){const n={x:f(e,"x","selu")};return m.runKernel(ti,n)}const Zm=g({selu_:Xm});function Ym(e,t,n,s,r,o=[1,1],a="NHWC"){const i=f(e,"x","separableConv2d"),c=f(t,"depthwiseFilter","separableConv2d"),l=f(n,"pointwiseFilter","separableConv2d");let h=i,u=!1;if(i.rank===3&&(u=!0,h=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");p(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),p(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),p(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),p(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),p(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=c.shape[2],b=c.shape[3];p(l.shape[2]===d*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*b}, but got ${l.shape[2]}.`);const w=Ls(h,c,s,r,a,o),y=Fn(w,l,1,"valid",a);return u?E(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const Jm=g({separableConv2d_:Ym});/**
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
 */async function Qm(e,t){const n=f(e,"x","setdiff1d"),s=f(t,"y","setdiff1d");p(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),p(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),p(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const r=await n.data(),o=await s.data(),a=new Set(o);let i=0;for(let h=0;h<r.length;h++)a.has(r[h])||i++;const c=new kn([i],n.dtype),l=new kn([i],"int32");for(let h=0,u=0;h<r.length;h++)a.has(r[h])||(c.values[u]=r[h],l.values[u]=h,u++);return[c.toTensor(),l.toTensor()]}const tb=Qm;/**
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
 */function eb(e){const n={x:f(e,"x","sign")};return m.runKernel(ri,n)}const nb=g({sign_:eb});/**
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
 */function sb(e){const n={x:f(e,"x","sin","float32")};return m.runKernel(ni,n)}const rb=g({sin_:sb});/**
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
 */function ob(e){const n={x:f(e,"x","sinh")};return m.runKernel(si,n)}const ab=g({sinh_:ob});/**
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
 */function ib(e,t,n){const s=f(e,"x","slice1d");return p(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),H(s,[t],[n])}const cb=g({slice1d_:ib});/**
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
 */function lb(e,t,n){const s=f(e,"x","slice2d");return p(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),H(s,t,n)}const ub=g({slice2d_:lb});/**
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
 */function hb(e,t,n){const s=f(e,"x","slice3d");return p(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),H(s,t,n)}const fb=g({slice3d_:hb});/**
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
 */function db(e,t,n){const s=f(e,"x","slice4d");return p(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),H(s,t,n)}const pb=g({slice4d_:db});/**
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
 */function gb(e,t=-1){const n=f(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},r={dim:t};return m.runKernel(hi,s,r)}const mb=g({softmax_:gb});/**
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
 */function bb(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Uo,t)}const js=g({fft_:bb});/**
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
 */function wb(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Yo,t)}const Tn=g({ifft_:wb});/**
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
 */function yb(e){const t=e.shape[e.shape.length-1],n=e.size/t;let s;if(t<=2){const r=E(e,[n,t]);s=Tn(r)}else{const r=[n,2*(t-1)],o=E(Ye(e),[n,t]),a=E(Cn(e),[n,t]),i=le(H(o,[0,1],[n,t-2]),1),c=v(le(H(a,[0,1],[n,t-2]),1),W(-1)),l=dt([o,i],1),h=dt([a,c],1),u=E(Ht(l,h),[r[0],r[1]]);s=Tn(u)}if(s=Ye(s),e.rank===3&&e.shape[0]!==0){const r=s,o=e.shape[0];s=E(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const Xc=g({irfft_:yb});/**
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
 */function $b(e,t,n=0){const r={x:f(e,"x","split")},o={numOrSizeSplits:t,axis:n};return m.runKernel(ui,r,o)}const Je=g({split_:$b});/**
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
 */function Eb(e,t){p(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const s=e.size/n;let r;if(t!=null&&t<n){const w=e.shape.map(y=>0),$=e.shape.map(y=>y);$[e.shape.length-1]=t,r=H(e,w,$),n=t}else if(t!=null&&t>n){const w=e.shape.map($=>$);w[e.shape.length-1]=t-n,r=dt([e,De(w)],e.shape.length-1),n=t}else r=e;const o=bt(r),a=E(Ht(r,o),[s,n]),i=js(a),c=Math.floor(n/2)+1,l=Ye(i),h=Cn(i),u=Je(l,[c,n-c],l.shape.length-1),d=Je(h,[c,n-c],h.shape.length-1),b=r.shape.slice();return b[r.shape.length-1]=c,E(Ht(u[0],d[0]),b)}const Xs=g({rfft_:Eb});/**
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
 */function kb(e,t){let n=f(e,"a","squaredDifference"),s=f(t,"b","squaredDifference");[n,s]=X(n,s),J(n.shape,s.shape);const r={a:n,b:s},o={};return m.runKernel(bi,r,o)}const Zc=g({squaredDifference_:kb});/**
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
 */function Sb(e,t){const n=f(e,"x","squeeze","string_or_numeric");return E(n,Br(n.shape,t).newShape)}const Zs=g({squeeze_:Sb});/**
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
 */function xb(e,t=0){const n=ze(e,"tensors","stack","string_or_numeric");p(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&p(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:t};return m.runKernel(Na,s,r)}const Qe=g({stack_:xb});/**
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
 */function vb(e,t=0){const s={x:f(e,"x","step")},r={alpha:t};return m.runKernel(Mi,s,r)}const Yc=g({step_:vb});/**
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
 */function Tb(e,t,n,s,r=0,o=0,a=0,i=0,c=0){const h={x:f(e,"x","stridedSlice","string_or_numeric")},u={begin:t,end:n,strides:s,beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return m.runKernel(yi,h,u)}const Ib=g({stridedSlice_:Tb});/**
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
 */function Oe(e,t,n){if(he(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=At(e,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Xt(e,t,s,n)}/**
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
 */function Jc(e,t,n){if(he(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=At(e,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Xt(e,t,s,n)}/**
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
 */function Db(e,t,n){if(he(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=At(e,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Xt(e,t,s,n)}/**
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
 */function Nb(e,t,n){if(he(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=At(e,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Xt(e,t,s,n)}/**
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
 */function Mb(e,t,n){if(he(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=At(e,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,Xt(e,t,s,n)}function Ys(e,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(o+` update.rank < ${r}. `);if(e.length<s+(n.rank-r))throw new Error(o+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+e.length-s)throw new Error(o+` update.rank != ${r+e.length-s}`);for(let a=0;a<r;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-r;++a)if(n.shape[a+r]!==e[a+s])throw new Error(o+` updates.shape[${a+r}] (${n.shape[a+r]}) != shape[${a+r}] (${e[a+r]})`)}function Ln(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Ys(n,t,e)}function Qc(e,t,n){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=n.length;let a=1;for(let u=r;u<o;++u)a*=n[u];const i=r<1?1:r,c=L(t.shape)/i,l=[...Ne(n.slice(0,r)),1],h=L(n);return{sliceRank:r,numUpdates:c,sliceSize:a,strides:l,outputSize:h}}const Fb=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Qc,validateInput:Ln,validateUpdateShape:Ys},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Bb(e,t,n){const s=f(e,"tensor","tensorScatterupdate"),r=f(t,"indices","tensorScatterupdate","int32"),o=f(n,"updates","tensorScatterupdate");if(Ln(o,r,s.shape),s.dtype!==o.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${o.dtype}.`);const a={tensor:s,indices:r,updates:o},i={};return m.runKernel(Ya,a,i)}const Rb=g({tensorScatterUpdate_:Bb});/**
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
 */function Cb(e,t=1,n=!0){const s=f(e,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},a={k:t,sorted:n},[i,c]=m.runKernel(Ti,o,a);return{values:i,indices:c}}const Pb=g({topk_:Cb});/**
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
 */function Ob(e,t=0,n=1,s,r){if(pt(e),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Vs(t,n,s,!0,r),a=Ft(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Lb=g({truncatedNormal_:Ob});/**
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
 */function Wb(e,t=0){const n=f(e,"x","unique","string_or_numeric");p(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},r={axis:t},[o,a]=m.runKernel(_i,s,r);return{values:o,indices:a}}const Ub=g({unique_:Wb});/**
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
 */function qb(e,t,n){const s=f(e,"x","unsortedSegmentSum"),r=f(t,"segmentIds","unsortedSegmentSum","int32");p(Te(n),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},a={numSegments:n};return m.runKernel(Di,o,a)}const Gb=g({unsortedSegmentSum_:qb});/**
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
 */function zb(e,t=0){const n=f(e,"x","unstack","string_or_numeric");p(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:t};return m.runKernel(Ai,s,r)}const Js=g({unstack_:zb});/**
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
 */function Kb(e,t){return Gs(e,t,"right")}/**
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
 */function Vb(e,t=!0,n,s){return m.makeVariable(e,t,n,s)}/**
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
 */function tl(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const s=Ft(e,"int32"),r=Ft([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=s.indexToLoc(n[o]),i=o*e.length;r.values.set(a,i)}return r.toTensor()}/**
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
 */async function Hb(e){const t=f(e,"condition","whereAsync","bool"),n=await t.data(),s=tl(t.shape,n);return e!==t&&t.dispose(),s}const el=Hb;/**
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
 */async function jb(e,t,n){const s=f(e,"tensor","boolMask"),r=f(t,"mask","boolMask","bool"),o=n??0,a=r.rank,i=s.shape;p(a>0,()=>"mask cannot be scalar"),it(i.slice(o,o+a),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let $=o;$<o+a;$++)c*=i[$];const l=i.slice(0,o).concat([c],i.slice(o+a)),h=E(s,l),u=E(r,[-1]),d=await el(u),b=Zs(d,[1]),w=Dc(h,b,o);return e!==s&&s.dispose(),t!==r&&r.dispose(),b.dispose(),h.dispose(),u.dispose(),d.dispose(),w}const Xb=jb;/**
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
 */function Zb(e,t,n){const s=f(e,"x","transpose");if(t==null&&(t=s.shape.map((a,i)=>i).reverse()),p(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(a=>{p(a>=0&&a<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?Y(()=>{let a=Ye(s),i=Cn(s);return a=m.runKernel(fn,{x:a},o),i=m.runKernel(fn,{x:i},o),n&&(i=_t(i)),Ht(a,i)}):m.runKernel(fn,r,o)}const In=g({transpose_:Zb});/**
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
 */function Yb(e,t,n,s,r=!0){const o=f(e,"v","movingAverage"),a=f(t,"x","movingAverage"),i=f(n,"decay","movingAverage");ji(o,a),p(Rt(o.shape,a.shape),()=>"Shape mismatch in v and x");const c=W(1),l=F(c,i);let h=v(F(a,o),l);if(r){p(s!=null,()=>"When using zeroDebias: true, step is required.");const u=f(s,"step","movingAverage");h=G(h,F(c,je(i,u)))}return A(o,h)}const Jb=g({movingAverage_:Yb});/**
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
 */function Qb(e,t,n){pt(n);const s=f(e,"indices","scatterND","int32"),r=f(t,"updates","scatterND");Ln(r,s,n);const o={indices:s,updates:r},a={shape:n};return m.runKernel(Za,o,a)}const tw=g({scatterND_:Qb});function ew(e,t,n,s){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const r=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===r))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${r}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
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
 */function nw(e,t,n,s=0){pt(n);const r=f(e,"sparseIndices","sparseToDense","int32"),o=f(t,"sparseValues","sparseToDense","string_or_numeric"),a=f(s,"defaultValue","sparseToDense",o.dtype);ew(r,o,n,a);const i={sparseIndices:r,sparseValues:o,defaultValue:a},c={outputShape:n};return m.runKernel(mi,i,c)}const sw=g({sparseToDense_:nw});/**
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
 */function rw(e,t){const n=f(t,"indices","gatherND","int32"),r={params:f(e,"x","gatherND","string_or_numeric"),indices:n};return m.runKernel(jo,r)}const ow=g({gatherND_:rw});/**
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
 */function aw(e,t){if(t==null)return e.shape.slice();if(Rt(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let s=0;s<e.shape.length;s++)t[s]==null&&e.shape[s]!=null?n.push(e.shape[s]):n.push(t[s]);return n}return t}/**
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
 */function iw(e,t,n,s){const r=f(e,"x","dropout");if(p(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),p(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Z?r.clone():r;const o=aw(r,n),a=1-t,i=G(Ac(A(Hs(o,0,1,"float32",s),a)),a);return v(r,i)}const cw=g({dropout_:iw});/**
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
 */function nl(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Qs(e,t,n){const s=1-e%2,r=new Float32Array(e);for(let o=0;o<e;++o){const a=2*Math.PI*o/(e+s-1);r[o]=t-n*Math.cos(a)}return Et(r,"float32")}/**
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
 */async function lw(e,t,n=1){const s=f(e,"predictions","inTopK"),r=f(t,"targets","inTopK");p(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),p(s.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${r.rank}`),it(s.shape.slice(0,s.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=s.shape[s.shape.length-1];p(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const a=await s.data(),i=await r.data(),[c,l]=[a.length/o,o],h=Rr("bool",c);for(let u=0;u<c;u++){const d=u*l,b=a.subarray(d,d+l),w=[];for(let $=0;$<b.length;$++)w.push({value:b[$],index:$});w.sort(($,y)=>y.value-$.value),h[u]=0;for(let $=0;$<n;$++)if(w[$].index===i[u]){h[u]=1;break}}return e!==s&&s.dispose(),t!==r&&r.dispose(),Ee(h,r.shape,"bool")}const uw=lw;/**
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
 */function hw(e,t,n,s,r,o="NHWC",a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]])),p(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),p(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),p(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];p(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),p(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),kt("conv2dDerFilter",r,a);const u={x:i,dy:c},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,filterShape:n};return m.runKernel(bo,u,d)}const fw=g({conv2DBackpropFilter_:hw});/**
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
 */function Wn(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return v(e,Yc(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Un(e,t){let n=t;const s=Ws(e.shape,t.shape);return s.length>0&&(n=q(n,s)),E(n,e.shape)}function qn(e,t,n,s){if(t==="linear")return e;if(t==="relu")return On(e);if(t==="elu")return vc(e);if(t==="relu6")return Hc(e);if(t==="prelu")return Gc(e,n);if(t==="leakyrelu")return Mc(e,s);if(t==="sigmoid")return xe(e);throw new Error(`Unknown fused activation ${t}.`)}const Gn=(e,t)=>!(e>0)||t==="linear";/**
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
 */function dw({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(c=c||"linear",Gn(m.state.gradientDepth,c)===!1){p(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let I=Fn(e,t,n,s,r,o,a);return i!=null&&(I=A(I,i)),qn(I,c,l,h)}const u=f(e,"x","conv2d","float32"),d=f(t,"filter","conv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=E(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),kt("fused conv2d",s,a);const $=r==="NHWC"?b.shape[3]:b.shape[1];p(d.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${d.shape[2]}.`),p(Ct(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const y=on(b.shape,d.shape,n,o,s,a);let S;i!=null&&(S=f(i,"bias","fused conv2d"),[S]=X(S,u),r==="NHWC"?J(y.outShape,S.shape):(p(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),p(S.shape.length===0||S.shape[0]===y.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${y.outChannels})`)));let D;if(l!=null){const I=l.shape;if(p(I.length<=1||I.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${I.length}.`),I.length===1)p(I[0]===1||I[0]===y.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the number of output channels (${y.outChannels}).`);else if(I.length===3)try{J(I,y.outShape)}catch{const B=`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(B)}D=f(l,"prelu weights","fused conv2d")}const k=(I,R)=>{p(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[B,M,P,C]=R,Q=Wn(I,P,c);p(He(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const nt=kc(M.shape,Q,B,n,s),st=fw(M,Q,B.shape,n,s),ut=[nt,st];if(C!=null){const de=Un(C,Q);ut.push(de)}return ut},T={x:b,filter:d,bias:S,preluActivationWeights:D},_={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Dt((R,B,M)=>{let P=m.runKernel(Qn,T,_);return M([B,R,P]),w&&(P=E(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:k}})(b,d):Dt((R,B,M,P)=>{let C=m.runKernel(Qn,T,_);return P([B,R,C,M]),w&&(C=E(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:k}})(b,d,S)}const pw=g({fusedConv2d_:dw});/**
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
 */function gw(e,t,n,s,r,o=[1,1],a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:c},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,filterShape:n};return m.runKernel(Ao,l,h)}const mw=g({depthwiseConv2dNativeBackpropFilter_:gw});/**
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
 */function bw(e,t,n,s,r,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,inputShape:e},u=m.runKernel(Do,l,h);return c?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ww=g({depthwiseConv2dNativeBackpropInput_:bw});/**
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
 */function yw({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(Gn(m.state.gradientDepth,c)===!1){let _=Ls(e,t,n,s,r,o,a);return i!=null&&(_=A(_,i)),qn(_,c,l,h)}const u=f(e,"x","depthwiseConv2d","float32"),d=f(t,"filter","depthwiseConv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=E(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),p(b.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),o==null&&(o=[1,1]),p(Ct(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),kt("fused depthwiseConv2d",s,a);const $=on(b.shape,d.shape,n,o,s,a,!0);let y;i!=null&&(y=f(i,"bias","fused conv2d"),[y]=X(y,u),J($.outShape,y.shape));let S;l!=null&&(S=f(l,"prelu weights","fused depthwiseConv2d"));const D=(_,I)=>{p(He(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[R,B,M,P]=I,C=Wn(_,M,c),Q=ww(B.shape,C,R,n,s,o,a),nt=mw(B,C,R.shape,n,s,o,a);if(P!=null){const st=Un(y,C);return[Q,nt,st]}return[Q,nt]},k={x:b,filter:d,bias:y,preluActivationWeights:S},T={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Dt((I,R,B)=>{let M=m.runKernel(ts,k,T);return B([R,I,M]),w&&(M=E(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:D}})(b,d):Dt((I,R,B,M)=>{let P=m.runKernel(ts,k,T);return M([R,I,P,B]),w&&(P=E(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:D}})(b,d,y)}const $w=g({fusedDepthwiseConv2d_:yw});/**
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
 */function Ew({a:e,b:t,transposeA:n=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Gn(m.state.gradientDepth,o)===!1){let C=O(e,t,n,s);return r!=null&&(C=A(C,r)),qn(C,o,a,i)}let c=f(e,"a","fused matMul"),l=f(t,"b","fused matMul");[c,l]=X(c,l);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],u=s?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?c.shape[c.rank-1]:c.shape[c.rank-2],b=s?l.shape[l.rank-2]:l.shape[l.rank-1],w=c.shape.slice(0,-2),$=l.shape.slice(0,-2),y=L(w),S=L($);p(h===u,()=>`Error in fused matMul: inner shapes (${h}) and (${u}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${s} must match.`);const k=J(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,b]),T=n?E(c,[y,h,d]):E(c,[y,d,h]),_=s?E(l,[S,b,u]):E(l,[S,u,b]);let I;r!=null&&(I=f(r,"bias","fused matMul"),[I]=X(I,c),J(k,I.shape));let R;a!=null&&(R=f(a,"prelu weights","fused matMul"));const B=(C,Q)=>{const[nt,st,ut,de]=Q,Nt=Wn(E(C,ut.shape),ut,o);let pe,ge;if(!n&&!s?(pe=O(Nt,st,!1,!0),ge=O(nt,Nt,!0,!1)):!n&&s?(pe=O(Nt,st,!1,!1),ge=O(Nt,nt,!0,!1)):n&&!s?(pe=O(st,Nt,!1,!0),ge=O(nt,Nt,!1,!1)):(pe=O(st,Nt,!0,!0),ge=O(Nt,nt,!0,!0)),r!=null){const _l=Un(de,Nt);return[pe,ge,_l]}else return[pe,ge]},M={a:T,b:_,bias:I,preluActivationWeights:R},P={transposeA:n,transposeB:s,activation:o,leakyreluAlpha:i};return r==null?Dt((Q,nt,st)=>{const ut=m.runKernel(Jn,M,P);return st([Q,nt,ut]),{value:E(ut,k),gradFunc:B}})(T,_):Dt((Q,nt,st,ut)=>{const de=m.runKernel(Jn,M,P);return ut([Q,nt,de,st]),{value:E(de,k),gradFunc:B}})(T,_,I)}const kw=g({fusedMatMul_:Ew});/**
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
 */function xw(e){return Qs(e,.54,.46)}const vw=g({hammingWindow_:xw});/**
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
 */function Tw(e){return Qs(e,.5,.5)}const sl=g({hannWindow_:Tw});/**
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
 */function Iw(e,t,n,s=!1,r=0){let o=0;const a=[];for(;o+t<=e.size;)a.push(H(e,o,t)),o+=n;if(s)for(;o<e.size;){const i=o+t-e.size,c=dt([H(e,o,t-i),an([i],r)]);a.push(c),o+=n}return a.length===0?Oe([],[0,t]):E(dt(a),[a.length,t])}const rl=g({frame_:Iw});/**
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
 */function _w(e,t,n,s,r=sl){s==null&&(s=nl(t));const o=rl(e,t,n),a=v(o,r(t));return Xs(a,s)}const Aw=g({stft_:_w});/**
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
 */function Dw(e,t,n,s,r="bilinear",o=0){const a=f(e,"image","cropAndResize"),i=f(t,"boxes","cropAndResize","float32"),c=f(n,"boxInd","cropAndResize","int32"),l=i.shape[0];p(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),p(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),p(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),p(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),p(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const h={image:a,boxes:i,boxInd:c},u={method:r,extrapolationValue:o,cropSize:s};return m.runKernel(vo,h,u)}const Nw=g({cropAndResize_:Dw});/**
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
 */function Bw(e){const t=f(e,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];p(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),p(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,n),r[n]=3,Pe(t,r)}const Rw=g({grayscaleToRGB_:Bw});/**
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
 */function Cw(e){const t=f(e,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];p(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),p(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=V(t,"float32"),a=Et([.2989,.587,.114]);let i;switch(t.rank){case 2:i=we("ij,j->i",o,a);break;case 3:i=we("ijk,k->ij",o,a);break;case 4:i=we("ijkl,l->ijk",o,a);break;case 5:i=we("ijklm,m->ijkl",o,a);break;case 6:i=we("ijklmn,n->ijklm",o,a);break;default:throw new Error("Not a valid tensor rank.")}return i=Ot(i,-1),V(i,r)}const Pw=g({rgbToGrayscale_:Cw});/**
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
 */function Ow(e,t,n=0,s=.5){const r=f(e,"image","rotateWithOffset","float32");p(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},a={radians:t,fillValue:n,center:s};return m.runKernel(Fi,o,a)}const Lw=g({rotateWithOffset_:Ow});/**
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
 */function Me(e,t,n,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),p(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),p(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),p(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),p(t.rank===1,()=>"scores must be a 1D tensor"),p(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),p(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}/**
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
 */function Ww(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppression","float32"),a=f(t,"scores","nonMaxSuppression","float32"),i=Me(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return m.runKernel(Ta,{boxes:o,scores:a},c)}const Uw=g({nonMaxSuppression_:Ww});/**
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
 */function qw(e,t,n){const s=Gw(e,t,n),r=s<0?-(s+1):s;e.splice(r,0,t)}function Gw(e,t,n){return Kw(e,t,n||zw)}function zw(e,t){return e>t?1:e<t?-1:0}function Kw(e,t,n){let s=0,r=e.length,o=0,a=!1;for(;s<r;){o=s+(r-s>>>1);const i=n(t,e[o]);i>0?s=o+1:(r=o,a=!i)}return a?s:-s-1}/**
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
 */function ol(e,t,n,s,r){return tr(e,t,n,s,r,0)}function al(e,t,n,s,r,o){return tr(e,t,n,s,r,0,!1,o,!0)}function il(e,t,n,s,r,o){return tr(e,t,n,s,r,o,!0)}function tr(e,t,n,s,r,o,a=!1,i=!1,c=!1){const l=[];for(let y=0;y<t.length;y++)t[y]>r&&l.push({score:t[y],boxIndex:y,suppressBeginIndex:0});l.sort(Sr);const h=o>0?-.5/o:0,u=[],d=[];for(;u.length<n&&l.length>0;){const y=l.pop(),{score:S,boxIndex:D,suppressBeginIndex:k}=y;if(S<r)break;let T=!1;for(let _=u.length-1;_>=k;--_){const I=Vw(e,D,u[_]);if(I>=s){T=!0;break}if(y.score=y.score*Hw(s,h,I),y.score<=r)break}y.suppressBeginIndex=u.length,T||(y.score===S?(u.push(D),d.push(y.score)):y.score>r&&qw(l,y,Sr))}const b=u.length,w=n-b;i&&w>0&&(u.push(...new Array(w).fill(0)),d.push(...new Array(w).fill(0)));const $={selectedIndices:u};return a&&($.selectedScores=d),c&&($.validOutputs=b),$}function Vw(e,t,n){const s=e.subarray(t*4,t*4+4),r=e.subarray(n*4,n*4+4),o=Math.min(s[0],s[2]),a=Math.min(s[1],s[3]),i=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),l=Math.min(r[0],r[2]),h=Math.min(r[1],r[3]),u=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),b=(i-o)*(c-a),w=(u-l)*(d-h);if(b<=0||w<=0)return 0;const $=Math.max(o,l),y=Math.max(a,h),S=Math.min(i,u),D=Math.min(c,d),k=Math.max(S-$,0)*Math.max(D-y,0);return k/(b+w-k)}function Hw(e,t,n){const s=Math.exp(t*n*n);return n<=e?s:0}function Sr(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
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
 */async function jw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppressionAsync"),a=f(t,"scores","nonMaxSuppressionAsync"),i=Me(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),l=c[0],h=c[1],{selectedIndices:u}=ol(l,h,n,s,r);return o!==e&&o.dispose(),a!==t&&a.dispose(),Et(u,"int32")}const Xw=jw;/**
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
 */function Zw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Me(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const l={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},u=m.runKernel(_a,l,h);return{selectedIndices:u[0],selectedScores:u[1]}}const Yw=g({nonMaxSuppressionWithScore_:Zw});/**
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
 */async function Jw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Me(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const l=await Promise.all([a.data(),i.data()]),h=l[0],u=l[1],{selectedIndices:d,selectedScores:b}=il(h,u,n,s,r,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Et(d,"int32"),selectedScores:Et(b)}}const Qw=Jw;/**
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
 */function ty(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Me(a,i,n,s,r,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,d={boxes:a,scores:i},b={maxOutputSize:l,iouThreshold:h,scoreThreshold:u,padToMaxOutputSize:o},w=m.runKernel(Ia,d,b);return{selectedIndices:w[0],validOutputs:w[1]}}const ey=g({nonMaxSuppressionPadded_:ty});/**
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
 */async function ny(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Me(a,i,n,s,r,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,[d,b]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:$}=al(d,b,l,h,u,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Et(w,"int32"),validOutputs:W($,"int32")}}const sy=ny;/**
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
 */function ry(e,t,n=!1,s=!1){const r=f(e,"images","resizeBilinear");p(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),p(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),p(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},l=m.runKernel(Ka,i,c);return a?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const oy=g({resizeBilinear_:ry});/**
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
 */function ay(e,t,n=!1,s=!1){const r=f(e,"images","resizeNearestNeighbor");p(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),p(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),p(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),p(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},l=m.runKernel(za,i,c);return a?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const iy=g({resizeNearestNeighbor_:ay});/**
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
 */function cy(e,t="binary",n=!1,s=.5){const r=f(e,"image","threshold"),o=.2989,a=.587,i=.114,c=r.shape[0]*r.shape[1];let l=v(Et([s]),255),h,u,d,b;if(p(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),p(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),p(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),p(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[h,u,d]=Je(r,[1,1,1],-1);const y=v(h,o),S=v(u,a),D=v(d,i);b=A(A(y,S),D)}else b=e;if(t==="otsu"){const y=Ec(V(jc(b),"int32"),Ee([]),256);l=ly(y,c)}const w=n?qs(b,l):Rn(b,l);return V(v(w,255),"int32")}function ly(e,t){let n=Et([-1]),s=Et([0]),r=Et([0]),o,a,i,c,l,h;for(let u=0;u<e.size-1;u++){o=H(e,0,u+1),a=H(e,u+1),l=G(q(o),t),h=G(q(a),t);const d=q(v(o,Ze(0,o.size)));i=G(d,q(o));const b=an(a.shape,o.size),w=A(Ze(0,a.size),b),$=v(a,w);c=G(q($),q(a));const y=F(i,c),S=F(i,c),D=v(l,h);r=v(v(D,y),S);const k=Rn(r,s);s=zt(k,r,s),n=zt(k,Et([u]),n)}return n}const uy=g({threshold_:cy});/**
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
 */function hy(e,t,n="nearest",s="constant",r=0,o){const a=f(e,"image","transform","float32"),i=f(t,"transforms","transform","float32");p(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),p(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},l={interpolation:n,fillMode:s,fillValue:r,outputShape:o};return m.runKernel(Ii,c,l)}const fy=g({transform_:hy});/**
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
 */function dy(e,t,n){const s=f(e,"a","bandPart");p(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,a]=s.shape.slice(-2);let i,c;typeof t=="number"?(p(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),p(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),i=f(t<0?o:t,"numLower","bandPart")):(p(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=zt(bs(t,0),o,vn(t,o))),typeof n=="number"?(p(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),p(n<=a,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`),c=f(n<0?a:n,"numUpper","bandPart")):(p(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=zt(bs(n,0),a,vn(n,a)));const l=E(Ze(0,o,1,"int32"),[-1,1]),h=Ze(0,a,1,"int32"),u=F(l,h),d=Sn(qs(u,i),Nc(u,_t(c))),b=De([o,a],s.dtype);return E(Qe(Js(E(s,[-1,o,a])).map(w=>zt(d,w,b))),r)}const py=g({bandPart_:dy});/**
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
 */function gy(e){let t;if(Array.isArray(e)){t=!1,p(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=e[0].shape[0];for(let o=1;o<e.length;++o)p(e[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${r})`)}else t=!0,e=Je(e,e.shape[0],0).map(r=>Zs(r,[0]));p(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],s=e;for(let r=0;r<e.length;++r)n.push(m.tidy(()=>{let o=s[r];if(r>0)for(let a=0;a<r;++a){const i=v(q(v(n[a],o)),n[a]);o=F(o,i)}return G(o,Bn(o,"euclidean"))}));return t?Qe(n,0):n}const my=g({gramSchmidt_:gy});/**
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
 */function by(e,t=!1){if(p(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return xr(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,l)=>c*l),s=Js(E(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],o=[];s.forEach(c=>{const[l,h]=xr(c,t);r.push(l),o.push(h)});const a=E(Qe(r,0),e.shape),i=E(Qe(o,0),e.shape);return[a,i]}}function xr(e,t=!1){return m.tidy(()=>{p(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],s=e.shape[1];let r=_c(n),o=se(e);const a=Oe([[1]],[1,1]);let i=se(a);const c=n>=s?s:n;for(let l=0;l<c;++l){const h=o,u=i,d=r;[i,o,r]=m.tidy(()=>{const b=H(o,[l,l],[n-l,1]),w=Bn(b),$=H(o,[l,l],[1,1]),y=zt(Rn($,0),Oe([[-1]]),Oe([[1]])),S=F($,v(y,w)),D=G(b,S);D.shape[0]===1?i=se(a):i=dt([a,H(D,[1,0],[D.shape[0]-1,D.shape[1]])],0);const k=_t(G(O(y,S),w)),T=H(o,[l,0],[n-l,s]),_=v(k,i),I=In(i);if(l===0)o=F(T,O(_,O(I,T)));else{const M=F(T,O(_,O(I,T)));o=dt([H(o,[0,0],[l,s]),M],0)}const R=In(_),B=H(r,[0,l],[n,r.shape[1]-l]);if(l===0)r=F(B,O(O(B,i),R));else{const M=F(B,O(O(B,i),R));r=dt([H(r,[0,0],[n,l]),M],1)}return[i,o,r]}),ct([h,u,d])}return!t&&n>s&&(r=H(r,[0,0],[n,s]),o=H(o,[0,0],[s,s])),[r,o]})}const wy=g({qr_:by});/**
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
 */var at;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(at||(at={}));function yy(e,t,n=at.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"losses","computeWeightedLoss");let r=null;t!=null&&(r=f(t,"weights","computeWeightedLoss"));const o=r==null?s:v(s,r);if(n===at.NONE)return o;if(n===at.SUM)return q(o);if(n===at.MEAN){if(r==null)return xn(o);{const a=s.size/r.size,i=G(q(o),q(r));return a>1?G(i,W(a)):i}}if(n===at.SUM_BY_NONZERO_WEIGHTS){if(r==null)return G(q(o),W(s.size));{const a=v(r,ne(s.shape)),i=V(q(Uc(a,W(0))),"float32");return G(q(o),i)}}throw Error(`Unknown reduction: ${n}`)}const Pt=g({computeWeightedLoss_:yy});/**
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
 */function $y(e,t,n,s=at.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"labels","absoluteDifference"),o=f(t,"predictions","absoluteDifference");let a=null;n!=null&&(a=f(n,"weights","absoluteDifference")),it(r.shape,o.shape,"Error in absoluteDifference: ");const i=mt(F(r,o));return Pt(i,a,s)}const Ey=g({absoluteDifference_:$y});function ky(e,t,n,s,r=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","cosineDistance"),a=f(t,"predictions","cosineDistance");let i=null;s!=null&&(i=f(s,"weights","cosineDistance")),it(o.shape,a.shape,"Error in cosineDistance: ");const c=W(1),l=F(c,q(v(o,a),n,!0));return Pt(l,i,r)}const Sy=g({cosineDistance_:ky});function xy(e,t,n,s=at.SUM_BY_NONZERO_WEIGHTS){let r=f(e,"labels","hingeLoss");const o=f(t,"predictions","hingeLoss");let a=null;n!=null&&(a=f(n,"weights","hingeLoss")),it(r.shape,o.shape,"Error in hingeLoss: ");const i=W(1);r=F(v(W(2),r),i);const c=On(F(i,v(r,o)));return Pt(c,a,s)}const vy=g({hingeLoss_:xy});/**
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
 */function Ty(e,t,n,s=1,r=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","huberLoss"),a=f(t,"predictions","huberLoss");let i=null;n!=null&&(i=f(n,"weights","huberLoss")),it(o.shape,a.shape,"Error in huberLoss: ");const c=W(s),l=mt(F(a,o)),h=vn(l,c),u=F(l,h),d=A(v(W(.5),xt(h)),v(c,u));return Pt(d,i,r)}const Iy=g({huberLoss_:Ty});/**
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
 */function _y(e,t,n,s=1e-7,r=at.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","logLoss"),a=f(t,"predictions","logLoss");let i=null;n!=null&&(i=f(n,"weights","logLoss")),it(o.shape,a.shape,"Error in logLoss: ");const c=W(1),l=W(s),h=_t(v(o,Xe(A(a,l)))),u=v(F(c,o),Xe(A(F(c,a),l))),d=F(h,u);return Pt(d,i,r)}const Ay=g({logLoss_:_y});/**
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
 */function Dy(e,t,n,s=at.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"labels","meanSquaredError"),o=f(t,"predictions","meanSquaredError");let a=null;n!=null&&(a=f(n,"weights","meanSquaredError")),it(r.shape,o.shape,"Error in meanSquaredError: ");const i=Zc(r,o);return Pt(i,a,s)}const Ny=g({meanSquaredError_:Dy});/**
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
 */function My(e,t){const n=f(e,"labels","sigmoidCrossEntropyWithLogits"),s=f(t,"logits","sigmoidCrossEntropyWithLogits");it(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=On(s),o=v(s,n),a=Fc(ce(_t(mt(s))));return A(F(r,o),a)}function Fy(e,t,n,s=0,r=at.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"multiClassLabels","sigmoidCrossEntropy");const a=f(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","sigmoidCrossEntropy")),it(o.shape,a.shape,"Error in sigmoidCrossEntropy: "),s>0){const l=W(s),h=W(1),u=W(.5);o=A(v(o,F(h,l)),v(u,l))}const c=My(o,a);return Pt(c,i,r)}const By=g({sigmoidCrossEntropy_:Fy});/**
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
 */function Ry(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Dt((r,o,a)=>{const c=Cc(o,[n],!0),l=F(V(o,"float32"),c);a([r,l]);const h=_t(v(l,r));return{value:q(h,[n]),gradFunc:(b,w)=>{const[$,y]=w,S=cn(b.shape,[n]);return[v(E(b,S),F(V($,"float32"),ce(y))),v(E(b,S),F(ce(y),V($,"float32")))]}}})(e,t)}function Cy(e,t,n,s=0,r=at.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"onehotLabels","softmaxCrossEntropy");const a=f(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","softmaxCrossEntropy")),it(o.shape,a.shape,"Error in softmaxCrossEntropy: "),s>0){const l=W(s),h=W(1),u=W(o.shape[1]);o=A(v(o,F(h,l)),G(l,u))}const c=Ry(o,a);return Pt(c,i,r)}const Py=g({softmaxCrossEntropy_:Cy});/**
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
 */function Oy(e,t,n,s){const r=f(e,"indices","sparseFillEmptyRows","int32"),o=f(t,"values","sparseFillEmptyRows"),a=f(n,"denseShape","sparseFillEmptyRows","int32"),i=f(s,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:r,values:o,denseShape:a,defaultValue:i},l=m.runKernel(fi,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Ly=g({sparseFillEmptyRows_:Oy});/**
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
 */function Wy(e,t,n){const s=f(e,"inputIndices","sparseReshape","int32"),r=f(t,"inputShape","sparseReshape","int32"),o=f(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const a={inputIndices:s,inputShape:r,newShape:o},i=m.runKernel(di,a);return{outputIndices:i[0],outputShape:i[1]}}const Uy=g({sparseReshape_:Wy});/**
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
 */function qy(e,t,n){const s=f(e,"data","sparseSegmentMean"),r=f(t,"indices","sparseSegmentMean","int32"),o=f(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return m.runKernel(pi,a)}const Gy=g({sparseSegmentMean_:qy});/**
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
 */function zy(e,t,n){const s=f(e,"data","sparseSegmentSum"),r=f(t,"indices","sparseSegmentSum","int32"),o=f(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return m.runKernel(gi,a)}const Ky=g({sparseSegmentSum_:zy});/**
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
 */function Vy(e,t,n,s,r,o,a,i){const c=f(e,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=f(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:s,leftPad:r,rightPad:o,padWidth:a,preserveShortSequences:i},u={data:c,dataSplits:l},d=m.runKernel($i,u,h);return{nGrams:d[0],nGramsSplits:d[1]}}const Hy=g({stringNGrams_:Vy});/**
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
 */function jy(e,t,n=!0){const s=f(e,"input","stringSplit","string"),r=f(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:n},a={input:s,delimiter:r},i=m.runKernel(Ei,a,o);return{indices:i[0],values:i[1],shape:i[2]}}const Xy=g({stringSplit_:jy});/**
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
 */function Zy(e,t){const n=f(e,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return m.runKernel(ki,r,s)}const Yy=g({stringToHashBucketFast_:Zy});/**
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
 */function Jy(e,t,n,s=!0){const r=f(e,"input","staticRegexReplace","string"),o={pattern:t,rewrite:n,replaceGlobal:s};return m.runKernel(wi,{x:r},o)}const Qy=g({staticRegexReplace_:Jy});/**
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
 */const t1={fft:js,ifft:Tn,rfft:Xs,irfft:Xc},e1={hammingWindow:vw,hannWindow:sl,frame:rl,stft:Aw},n1={flipLeftRight:Fw,grayscaleToRGB:Rw,resizeNearestNeighbor:iy,resizeBilinear:oy,rgbToGrayscale:Pw,rotateWithOffset:Lw,cropAndResize:Nw,nonMaxSuppression:Uw,nonMaxSuppressionAsync:Xw,nonMaxSuppressionWithScore:Yw,nonMaxSuppressionWithScoreAsync:Qw,nonMaxSuppressionPadded:ey,nonMaxSuppressionPaddedAsync:sy,threshold:uy,transform:fy},s1={bandPart:py,gramSchmidt:my,qr:wy},r1={absoluteDifference:Ey,computeWeightedLoss:Pt,cosineDistance:Sy,hingeLoss:vy,huberLoss:Iy,logLoss:Ay,meanSquaredError:Ny,sigmoidCrossEntropy:By,softmaxCrossEntropy:Py},o1={sparseFillEmptyRows:Ly,sparseReshape:Uy,sparseSegmentMean:Gy,sparseSegmentSum:Ky},a1={stringNGrams:Hy,stringSplit:Xy,stringToHashBucketFast:Yy,staticRegexReplace:Qy};/**
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
 */const i1=new Map,$s=new Map;class cl{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Wt{constructor(){this.classNameMap={}}static getMap(){return Wt.instance==null&&(Wt.instance=new Wt),Wt.instance}static register(t){Wt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function ll(e,t,n){p(e.className!=null,()=>"Class being registered does not have the static className property defined."),p(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),p(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const s=n,r=t+">"+s;return Wt.register(e),i1.set(r,e),$s.set(e,r),e}function c1(e){return $s.has(e)?$s.get(e):e.className}const l1=Object.freeze(Object.defineProperty({__proto__:null,Serializable:cl,SerializationMap:Wt,getRegisteredName:c1,registerClass:ll},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Zt extends cl{minimize(t,n=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const a=s.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ct(o),n?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return Bc(t,n)}dispose(){this.iterations_!=null&&ct(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:W(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Zt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
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
 */class er extends Zt{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s],a=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:Y(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedGrads[r].variable,l=this.accumulatedUpdates[r].variable;Y(()=>{const h=A(v(c,this.rho),v(xt(i),1-this.rho)),u=v(G(Bt(A(l,this.epsilon)),Bt(A(c,this.epsilon))),i),d=A(v(l,this.rho),v(xt(u),1-this.rho));c.assign(h),l.assign(d);const b=A(v(u,-this.learningRate),o);o.assign(b)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ct(this.accumulatedGrads.map(t=>t.variable)),ct(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
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
 */class nr extends Zt{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:Y(()=>an(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const i=this.accumulatedGrads[r].variable;Y(()=>{const c=A(i,xt(a));i.assign(c);const l=A(v(G(a,Bt(A(c,m.backend.epsilon()))),-this.learningRate),o);o.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ct(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
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
 */class sr extends Zt{static get className(){return"Adam"}constructor(t,n,s,r=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Y(()=>{this.accBeta1=W(n).variable(),this.accBeta2=W(s).variable()}),r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Y(()=>{const s=F(1,this.accBeta1),r=F(1,this.accBeta2);n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:Y(()=>bt(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:Y(()=>bt(i).variable(c))});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedSecondMoment[a].variable,d=A(v(h,this.beta1),v(l,1-this.beta1)),b=A(v(u,this.beta2),v(xt(l),1-this.beta2)),w=G(d,s),$=G(b,r);h.assign(d),u.assign(b);const y=A(v(G(w,A(Bt($),this.epsilon)),-this.learningRate),i);i.assign(y)}),this.accBeta1.assign(v(this.accBeta1,this.beta1)),this.accBeta2.assign(v(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ct(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),Y(()=>{this.accBeta1.assign(je(this.beta1,this.iterations_+1)),this.accBeta2.assign(je(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
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
 */class rr extends Zt{static get className(){return"Adamax"}constructor(t,n,s,r=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Y(()=>{this.iteration=W(0).variable(),this.accBeta1=W(n).variable()}),r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Y(()=>{const s=F(1,this.accBeta1),r=G(-this.learningRate,A(v(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:bt(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:bt(i).variable(c)});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedWeightedInfNorm[a].variable,d=A(v(h,this.beta1),v(l,1-this.beta1)),b=v(u,this.beta2),w=mt(l),$=Wc(b,w);h.assign(d),u.assign($);const y=A(v(G(r,s),G(d,A($,this.epsilon))),i);i.assign(y)}),this.iteration.assign(A(this.iteration,1)),this.accBeta1.assign(v(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ct(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ct(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
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
 */class zn extends Zt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const a=m.registeredVariables[s];Y(()=>{const i=A(v(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=tc(W(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
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
 */class or extends zn{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=W(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:Y(()=>bt(o).variable(!1))});const a=this.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[s];i!=null&&Y(()=>{let c;const l=A(v(this.m,a),i);this.useNesterov?c=A(v(this.c,A(i,v(l,this.m))),o):c=A(v(this.c,l),o),a.assign(l),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ct(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
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
 */class ar extends Zt{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=m.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s],a=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:Y(()=>bt(o).variable(a))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:Y(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedMeanSquares[r].variable,l=this.accumulatedMoments[r].variable;Y(()=>{const h=A(v(c,this.decay),v(xt(i),1-this.decay));if(this.centered){const u=this.accumulatedMeanGrads[r].variable,d=A(v(u,this.decay),v(i,1-this.decay)),b=G(v(i,this.learningRate),Bt(F(h,A(xt(d),this.epsilon)))),w=A(v(l,this.momentum),b);c.assign(h),u.assign(d),l.assign(w);const $=F(o,w);o.assign($)}else{const u=A(v(c,this.decay),v(xt(i),1-this.decay)),d=A(v(l,this.momentum),G(v(i,this.learningRate),Bt(A(u,this.epsilon))));c.assign(u),l.assign(d);const b=F(o,d);o.assign(b)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ct(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ct(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ct(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
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
 */const u1=[er,nr,sr,rr,or,ar,zn];function h1(){for(const e of u1)ll(e)}/**
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
 */const f1="model",d1=".json",p1=".weights.bin";function vr(e){return new Promise(t=>setTimeout(t)).then(e)}class ue{constructor(t){if(!N().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ue.URL_SCHEME)&&(t=t.slice(ue.URL_SCHEME.length)),(t==null||t.length===0)&&(t=f1),this.modelJsonFileName=t+d1,this.weightDataFileName=t+p1}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Tt.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=oc(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await vr(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=s,await vr(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:rn(t)}}}}ue.URL_SCHEME="downloads://";class g1{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{const o=JSON.parse(r.target.result),a=o.modelTopology;if(a==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const c=Ps(o,l=>this.loadWeights(l));t(c)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const a of t)n.push(...a.weights),s.push(...a.paths);const r=this.checkManifestAndWeightFiles(t),o=s.map(a=>this.loadWeightsFile(a,r[a]));return Promise.all(o).then(a=>[n,a])}loadWeightsFile(t,n){return new Promise((s,r)=>{const o=new FileReader;o.onload=a=>{const i=a.target.result;s(i)},o.onerror=a=>r(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(o=>kr(o.name)),r={};for(const o of t)o.paths.forEach(a=>{const i=kr(a);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),s.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);r[a]=this.weightsFiles[s.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const m1=e=>N().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ue.URL_SCHEME)?b1(e.slice(ue.URL_SCHEME.length)):null;j.registerSaveRouter(m1);function b1(e="model"){return new ue(e)}function w1(e){return new g1(e)}/**
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
 */function Tr(e,t,n,s){a(e),n=n??0,s=s??1,i(n,s);let r=0;const o=c=>(c.then(l=>{const h=n+ ++r/e.length*(s-n);return t(h),l}),c);function a(c){p(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){p(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),p(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),p(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(e.map(o))}/**
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
 */async function ul(e,t){t==null&&(t={});const n=t.fetchFunc==null?N().platform.fetch:t.fetchFunc,s=e.map(u=>n(u,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(s):await Tr(s,t.onProgress,0,.5)).map(u=>u.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Tr(i,t.onProgress,.5,1)}function y1(e,t){var n;const s=t.fetchFunc==null?N().platform.fetch:t.fetchFunc;let r=0,o;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async a=>{for(var i;r<e.length;){o||(o=(await s(e[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:l}=await o.read();if(c){r++,o=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,r/e.length);continue}a.enqueue(l);return}a.close()}})}async function $1(e,t="",n,s){return hl(a=>ul(a,{requestInit:s}))(e,t,n)}function hl(e){return async(t,n="",s)=>{const r=t.map(()=>!1),o={},a=s!=null?s.map(()=>!1):[],i=[];if(t.forEach((b,w)=>{let $=0;b.weights.forEach(y=>{const S="quantization"in y?y.quantization.dtype:y.dtype,D=re[S]*L(y.shape),k=()=>{r[w]=!0,o[w]==null&&(o[w]=[]),o[w].push({manifestEntry:y,groupOffset:$,sizeBytes:D})};s!=null?s.forEach((T,_)=>{T===y.name&&(k(),a[_]=!0)}):k(),i.push(y.name),$+=D})}),!a.every(b=>b)){const b=s.filter((w,$)=>!a[$]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=r.reduce((b,w,$)=>(w&&b.push($),b),[]),l=[];c.forEach(b=>{t[b].paths.forEach(w=>{const $=n+(n.endsWith("/")?"":"/")+w;l.push($)})});const h=await e(l),u={};let d=0;return c.forEach(b=>{const w=t[b].paths.length,$=new Tt(h.slice(d,d+w));o[b].forEach(S=>{const D=$.slice(S.groupOffset,S.groupOffset+S.sizeBytes),k=sc(D,[S.manifestEntry]);for(const T in k)u[T]=k[T]}),d+=w}),u}}/**
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
 */const E1="application/octet-stream",k1="application/json";class ir{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(p(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=N().platform.fetch,p(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&p(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=oc(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(r)],{type:k1}),"model.json"),t.weightData!=null){const a=Tt.join(t.weightData);n.body.append("model.weights.bin",new Blob([a],{type:E1}),"model.weights.bin")}const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:rn(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return Ps(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=us(t.weightsManifest),r=()=>y1(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=S1(n),o=this.weightPathPrefix||s,a=[],i=[];for(const c of t)for(const l of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(l)):a.push(o+l+r);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(t){const n=await this.getWeightUrls(t),s=us(t),r=await ul(n,this.loadOptions);return[s,r]}}ir.URL_SCHEME_REGEX=/^https?:\/\//;function S1(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),s=e.substring(0,t),r=n>t?e.substring(n):"";return[s+"/",r]}function Es(e){return e.match(ir.URL_SCHEME_REGEX)!=null}const fl=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(s=>Es(s)):n=Es(e),n)return cr(e,t)}return null};j.registerSaveRouter(fl);j.registerLoadRouter(fl);function cr(e,t){return new ir(e,t)}function x1(e,t){return cr(e,t)}/**
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
 */class Xn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class dl{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class v1{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function T1(e,t,n,s){const r=arguments;return new v1(pl(...r))}function pl(e,t,n,s){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Xn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:s}))}function I1(e){return new dl(e)}function _1(e){return new dl(e)}/**
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
 */const A1=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Tt,browserFiles:w1,browserHTTPRequest:x1,concatenateArrayBuffers:Ih,copyModel:Xh,decodeWeights:sc,decodeWeightsStream:Sh,encodeWeights:$h,fromMemory:T1,fromMemorySync:pl,getLoadHandlers:Rh,getModelArtifactsForJSON:Ps,getModelArtifactsForJSONSync:ac,getModelArtifactsInfoForJSON:rn,getSaveHandlers:Bh,getWeightSpecs:us,http:cr,isHTTPScheme:Es,listModels:Hh,loadWeights:$1,moveModel:Zh,registerLoadRouter:Fh,registerSaveRouter:Mh,removeModel:jh,weightsLoaderFactory:hl,withSaveHandler:I1,withSaveHandlerSync:_1},Symbol.toStringTag,{value:"Module"}));/**
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
 */function D1(e,t,n){const s=f(e,"labels","confusionMatrix"),r=f(t,"predictions","confusionMatrix");p(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),p(s.rank===1,()=>`Expected the rank of labels to be 1, but got ${s.rank}`),p(r.rank===1,()=>`Expected the rank of predictions to be 1, but got ${r.rank}`),p(s.shape[0]===r.shape[0],()=>`Mismatch in the number of examples: ${s.shape[0]} vs. ${r.shape[0]}. Labels and predictions should have the same number of elements.`),p(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const o=ws(V(s,"int32"),n),a=ws(V(r,"int32"),n),i=In(o),c=O(i,a);return V(c,"int32")}const N1=g({confusionMatrix_:D1});/**
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
 */let Yt,Ir=!1;function gl(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,r=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Ue(Yn,m.backendName)!=null){const w={pixels:e},$={numChannels:t};return m.runKernel(Yn,w,$)}const[l,h]=r?[e.videoWidth,e.videoHeight]:[e.width,e.height];let u;if(a)u=e.getContext("2d").getImageData(0,0,l,h).data;else if(s||n)u=e.data;else if(o||r||i){if(Yt==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Yt=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Yt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Yt.canvas.width=l,Yt.canvas.height=h,Yt.drawImage(e,0,0,l,h),u=Yt.getImageData(0,0,l,h).data}let d;if(t===4)d=new Int32Array(u);else{const w=l*h;d=new Int32Array(w*t);for(let $=0;$<w;$++)for(let y=0;y<t;++y)d[$*t+y]=u[$*4+y]}return Jc(d,[h,l,t],"int32")}function F1(e){return e!=null&&e.data instanceof Uint8Array}function B1(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function R1(e){return e!=null&&e.width!==0&&e.height!==0}function C1(e){return B1()&&!(e instanceof ImageBitmap)&&R1(e)&&!F1(e)}async function P1(e,t=3){let n=null;if(N().getBool("WRAP_TO_IMAGEBITMAP")&&C1(e)){let s;try{s=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===e.width&&s.height===e.height?n=s:n=e}else n=e;return gl(n,t)}function ml(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}function O1(e){const t=(e==null?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function L1(e,t){let n=f(e,"img","toPixels");if(!(e instanceof Z)){const l=n;n=V(l,"int32"),l.dispose()}ml(n);const[s,r]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2],a=await n.data(),i=n.dtype==="float32"?255:1,c=new Uint8ClampedArray(r*s*4);for(let l=0;l<s*r;++l){const h=[0,0,0,255];for(let d=0;d<o;d++){const b=a[l*o+d];if(n.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(n.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);o===1?(h[0]=b*i,h[1]=b*i,h[2]=b*i):h[d]=b*i}const u=l*4;c[u+0]=Math.round(h[0]),c[u+1]=Math.round(h[1]),c[u+2]=Math.round(h[2]),c[u+3]=Math.round(h[3])}if(t!=null){Ir||Ue(Ds,m.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Ir=!0),t.width=r,t.height=s;const l=t.getContext("2d"),h=new ImageData(c,r,s);l.putImageData(h,0,0)}return n!==e&&n.dispose(),c}function W1(e,t,n){let s=f(e,"img","draw");if(!(e instanceof Z)){const a=s;s=V(a,"int32"),a.dispose()}ml(s),O1(n==null?void 0:n.imageOptions);const r={image:s},o={canvas:t,options:n};m.runKernel(Ds,r,o)}const U1=g({fromPixels_:gl}),q1=Object.freeze(Object.defineProperty({__proto__:null,draw:W1,fromPixels:U1,fromPixelsAsync:P1,toPixels:L1},Symbol.toStringTag,{value:"Module"}));function bl(e,t){const n=e.shape.length,s=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${n}`);if(L(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const r=t.shape,o=r[r.length-1];let a=1;for(let u=0;u<r.length-1;++u)a*=r[u];const i=e.shape,c=r.slice();c.pop();let l=1;for(let u=o;u<n;++u)l*=i[u],c.push(i[u]);const h=[...Ne(e.shape).map(u=>u/l),1].slice(0,o);return[c,a,l,h]}const G1=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:bl},Symbol.toStringTag,{value:"Module"}));/**
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
 */const ks=-2,z1=-1;function K1(e,t,n){const s=e.shape.length;p(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),p(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)p(t[r]+n[r]<=e.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+n[r]}) would overflow input.shape[${r}] (${e.shape[r]})`)}function V1(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function H1(e,t,n){const s=[];for(let r=0;r<e.length;r++)s[r]=Math.ceil((t[r]-e[r])/n[r]);return s}function wl(e,t,n,s){const r=[...e];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<n;o++)o===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function yl(e,t,n){return n<=e?n:n-(t-1)}function $l(e,t){const n=[];for(let s=0;s<e;s++)n.push(t+s);return n}function j1(e,t,n,s,r,o,a,i,c){const l=e.length;let h=new Array(l),u=new Array(l),d=new Array(l);if(t.length&&n>0){const b=t[0],w=n+1;h=El(a,b,w,s,e),u=kl(i,b,w,r,e),d=wl(o,b,w,e)}else for(let b=0;b<l;b++)h[b]=xl(a,s,o,e,b,c),u[b]=vl(i,r,o,e,b,c),d[b]=Sl(o,b,c);return{begin:h,end:u,strides:d}}function El(e,t,n,s,r){const o=[...r],a=$l(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=yl(t,n,i);let l=s[c];e&1<<c&&(l=0),o[i]=l}return o}function kl(e,t,n,s,r){const o=[...r],a=$l(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=yl(t,n,i);let l=s[c];e&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[i]=l}for(let i=0;i<o.length;i++){const c=r[i];o[i]<0&&(o[i]+=c),o[i]=Le(0,o[i],r[i])}return o}function Sl(e,t,n){let s=e[t];return(n&1<<t||s==null)&&(s=1),s}function xl(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),a=Le(0,a,c-1),a}function vl(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),i>0?a=Le(0,a,c):a=Le(-1,a,c-1),a}function X1(e,t,n){let s=n.length;for(let r=0;r<n.length;r++)if(n[r]>1){s=r;break}for(let r=s+1;r<n.length;r++)if(t[r]>0||n[r]!==e[r])return!1;return!0}function Z1(e,t){let n=e.length>0?e[e.length-1]:1;for(let s=0;s<e.length-1;s++)n+=e[s]*t[s];return n}function Y1(e,t,n){let s;const r=e.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(a=>{p(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(r).fill(-1):typeof n=="number"?o=[n,...new Array(r-1).fill(-1)]:n.length<r?o=n.concat(new Array(r-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(p(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-s[i])),[s,o]}function J1(e,t,n,s,r,o,a,i,c){let l;if(s==null?(l=new Array(t.length),l.fill(1)):l=s,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const u={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let k=0;k<u.dims;k++)h&&1<<k&i&&u.numAddAxisAfterEllipsis++,1<<k&a&&(h=!0);h||(u.ellipsisMask|=1<<u.dims,u.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Q1(u,d);let b=!0,w=!0,$=!0;const y=[],S=[];for(let k=0;k<e.length;++k){if(d.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);const T=!!(d.shrinkAxisMask&1<<k),_=e[k];if(_===-1){y.push(T?1:-1);continue}const I=[d.beginMask&1<<k,d.endMask&1<<k],R=[d.strides[k]>0?0:-1,d.strides[k]>0?_:_-1];if(T&&d.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");$=$&&d.strides[k]===1;const B=!!(d.beginMask&1<<k&&d.endMask&1<<k);if(d.beginValid&&d.endValid){if(T){const Q=d.begin[k]<0?_+d.begin[k]:d.begin[k];if(d.begin[k]=Q,d.end[k]=d.begin[k]+1,Q<0||Q>=_)throw Error(`slice index ${d.begin[k]} of dimension ${k} out of bounds.`)}else d.begin[k]=_r(d.begin[k],0,d.strides[k],_,I,R),d.end[k]=_r(d.end[k],1,d.strides[k],_,I,R);const C=d.strides[k]===1&&d.begin[k]===0&&d.end[k]===_;b=b&&C,w=w&&(k===0&&d.strides[k]===1||C)}else b=b&&d.strides[k]===1&&B,w=w&&(k===0&&d.strides[k]===1||B);let M,P=!1;if(d.beginValid&&d.endValid?(M=d.end[k]-d.begin[k],P=!0):T?(M=1,P=!0):B&&_>=0&&(d.strides[k]<0?M=-_:M=_,P=!0),P){let C;M===0||M<0!=d.strides[k]<0?C=0:C=Math.trunc(M/d.strides[k])+(M%d.strides[k]!==0?1:0),y.push(C)}else y.push(-1)}for(let k=0;k<d.finalShapeGatherIndices.length;++k){const T=d.finalShapeGatherIndices[k];T>=0?S.push(y[T]):T===ks&&S.push(1)}return{finalShapeSparse:S.filter((k,T)=>d.finalShapeGatherIndices[T]!==ks),finalShape:S,isIdentity:b,sliceDim0:w,isSimpleSlice:$,begin:d.begin,end:d.end,strides:d.strides}}function Q1(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<e.dims;s++)if(1<<s&e.ellipsisMask){const r=Math.min(t.dims-(e.dims-s)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<r;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&e.newAxisMask)t.finalShapeGatherIndices.push(ks),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[s]),e.end!=null&&(t.end[n]=e.end[s]),t.strides[n]=e.strides[s],e.beginMask&1<<s&&(t.beginMask|=1<<n),e.endMask&1<<s&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(z1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[n]=s,n++}}function _r(e,t,n,s,r,o){if(r[t])return n>0?o[t]:o[t+1&1];{const a=e<0?s+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const Tl=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:K1,computeFlatOffset:Z1,computeOutShape:H1,getNormalizedAxes:j1,isSliceContinous:X1,maskToAxes:V1,parseSliceParams:Y1,sliceInfo:J1,startForAxis:xl,startIndicesWithElidedDims:El,stopForAxis:vl,stopIndicesWithElidedDims:kl,stridesForAxis:Sl,stridesWithElidedDims:wl},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const t0="4.21.0";/**
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
 */class Il{static sgd(t){return new zn(t)}static momentum(t,n,s=!1){return new or(t,n,s)}static rmsprop(t,n=.9,s=0,r=null,o=!1){return new ar(t,n,s,r,o)}static adam(t=.001,n=.9,s=.999,r=null){return new sr(t,n,s,r)}static adadelta(t=.001,n=.95,s=null){return new er(t,n,s)}static adamax(t=.002,n=.9,s=.999,r=null,o=0){return new rr(t,n,s,r,o)}static adagrad(t,n=.1){return new nr(t,n)}}/**
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
 */const e0=Il;/**
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
 */const n0=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e();function s0(){return new Promise(e=>n0(()=>e()))}/**
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
 */function r0(e,t){const n=e[0].length;e.forEach((r,o)=>{p(r.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),p(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=e[0];e.forEach((r,o)=>{for(let a=0;a<n;a++)p(a===t||r[a]===s[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function o0(e,t){const n=e[0].slice();for(let s=1;s<e.length;s++)n[t]+=e[s][t];return n}/**
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
 */var It;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(It||(It={}));function a0(e,t,n){let s=new Array;if(n==null&&t==null)return s;if(t==null)for(;s.length<e+n.length;)s.push(-1);else s=t.slice();if(n==null)return s;if(e+n.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${s.length}`);for(let r=1;r<n.length;++r){const o=n[r],a=s[s.length-n.length+r],i=s[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+e}] = ${o} but shape[${r+e}] = ${i}`)}else s[a]=o}return s}function i0(e){const t={FIRST_DIM_SIZE:It.FIRST_DIM_SIZE,VALUE_ROWIDS:It.VALUE_ROWIDS,ROW_LENGTHS:It.ROW_LENGTHS,ROW_SPLITS:It.ROW_SPLITS,ROW_LIMITS:It.ROW_LIMITS,ROW_STARTS:It.ROW_STARTS},n=[];for(const s of e)if(s in t)n.push(t[s]);else break;return n}function c0(e){return e.length===0?0:e[0]===It.FIRST_DIM_SIZE?e.length-1:e.length}function l0(e,t){if(e==null||t==null)return;const n=e.length,s=t.length;if(n>=s)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(n,s-1);++r){const o=e[r],a=t[r+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-e.length}] = ${o} but ragged tensor input.flatValues.shape[${r-e.length}] = ${a}`)}}/**
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
 */const lr=30;function u0(e){return e<=lr?e:wn(e,Math.floor(Math.sqrt(e)))}/**
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
 */function h0(e,t,n){const s=n*(typeof e=="number"?e:e[0]),r=t*(typeof e=="number"?e:e[1]);return[s,r]}/**
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
 */function f0(e,t,n,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(e[0]/n),r=r.concat(e.slice(1));else{r=r.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)r=r.concat([e[a+1]/t[a],t[a]]);r=r.concat(e.slice(o+1))}return r}function d0(e,t,n=!0){const s=[];if(n){s.push(t);for(let r=t+1;r<e;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):r.push(a);s.push(...r),s.push(0),s.push(...o)}return s}function p0(e,t,n,s=!0){const r=[];s?r.push(e[0]/n):r.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?s?r.push(t[o-1]*e[o]):r.push(e[o]/t[o-1]):r.push(e[o]);return r}function g0(e,t){const n=[0];for(let s=0;s<t;++s)n.push(e[s][0]);return n}function m0(e,t,n){const s=e.slice(0,1);for(let r=0;r<n;++r)s.push(e[r+1]-t[r][0]-t[r][1]);return s}/**
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
 */function v0(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let s=0;s<n.length;s+=2)n[s]=e[s/2],n[s+1]=t[s/2];return n}function T0(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let s=0;s<e.length;s+=2)t[s/2]=e[s],n[s/2]=e[s+1];return{real:t,imag:n}}function I0(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function _0(e){const t=Math.floor(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function A0(e,t){const n=e[t*2],s=e[t*2+1];return{real:n,imag:s}}function D0(e,t,n,s){e[s*2]=t,e[s*2+1]=n}function N0(e,t){const n=new Float32Array(e/2),s=new Float32Array(e/2);for(let r=0;r<Math.ceil(e/2);r++){const o=(t?2:-2)*Math.PI*(r/e);n[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:n,imag:s}}function M0(e,t,n){const s=(n?2:-2)*Math.PI*(e/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}/**
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
 */const Zn="->",F0=/->/g,Ar=",",Dr="...";function B0(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(F0,"").length)/Zn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Zn}").`);const[s,r]=e.split(Zn);p(s.indexOf(Dr)===-1,()=>`The ellipsis notation ("${Dr}") is not supported yet.`);const o=s.split(Ar),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let d=0;d<r.length;++d){const b=r[d];if(!o.some(w=>w.indexOf(b)!==-1))throw new Error(`Output subscripts contain the label ${b} not present in the input subscripts.`);i.indexOf(b)===-1&&i.push(b)}for(let d=0;d<s.length;++d){const b=s[d];i.indexOf(b)===-1&&b!==Ar&&i.push(b)}const c=new Array(o.length);for(let d=0;d<a;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);c[d]=[];for(let b=0;b<o[d].length;++b)c[d].push(i.indexOf(o[d][b]))}const l=i.length,h=r.length,u=[];for(let d=h;d<l;++d)u.push(d);return{allDims:i,summedDims:u,idDims:c}}function R0(e,t){let n=new Array(e);n.fill(-1);for(let r=0;r<t.length;++r)n[t[r]]=r;const s=[];for(let r=0;r<e;++r)n[r]===-1&&s.push(r);return n=n.filter(r=>r!==-1),{permutationIndices:n,expandDims:s}}function C0(e,t,n){const s=new Array(e);for(let r=0;r<n.length;++r){const o=n[r].shape;for(let a=0;a<t[r].length;++a)s[t[r][a]]===void 0?s[t[r][a]]=o[a]:p(s[t[r][a]]===o[a],()=>`Expected dimension ${s[t[r][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function P0(e,t){const n=e,s=[];let r=0;e.length===0&&n.push(-1),r=e.length+1;for(let a=0;a<r;++a)s.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=L0(t,i);for(const l of c)o.indexOf(l)===-1&&(s[a].push(l),o.push(l))}return{path:n,steps:s}}function O0(e){return e.every((t,n)=>t===n)}function L0(e,t){const n=[];for(let s=0;s<e.length;++s)(e[s].length===0||e[s].indexOf(t)!==-1||t===-1)&&n.push(s);return n}function W0(e,t,n=0){let s=[];if(typeof t=="number")p(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(e.shape[n]/t);else{const r=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);p(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}p(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}/**
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
 */function z0(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function K0(e,t){return`size ${e} must be non-negative, not ${t}`}function V0(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function H0(e,t){const n=L(e),s=L(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${e} outputShape= ${t}`}function j0(e,t){const n=L(e),s=L(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${e} outputShape=${t}`}/**
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
 */function Q0(e,t){let n=!1,s;for(e<=lr?(s=e,n=!0):s=wn(e,Math.floor(Math.sqrt(e)));!n;)s>t||s===e?n=!0:s=wn(e,s+1);return s}function t$(e,t,n){const s=[],r=e.length;for(let o=0;o<r;o++)o!==t?s.push(e[o]):s.push(n);return s}function e$(e,t,n,s){const r=t.shape.length,o=e.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let u=0;u<s;++u)if(e.shape[u]!==t.shape[u])throw new Error(`x.shape[${u}]: ${e.shape[u]} should be equal to indices.shape[${u}]: ${t.shape[u]}.`);const a=e.shape[n],i=[];let c=1,l=1,h=1;for(let u=0;u<s;++u)i.push(e.shape[u]),c*=e.shape[u];for(let u=s;u<n;u++)i.push(e.shape[u]),l*=e.shape[u];for(let u=s;u<r;u++)i.push(t.shape[u]);for(let u=n+1;u<o;u++)i.push(e.shape[u]),h*=e.shape[u];return{batchSize:c,sliceSize:h,outerSize:l,dimSize:a,outputShape:i}}const n$=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:e$,computeOutShape:t$,segOpComputeOptimalWindowSize:Q0},Symbol.toStringTag,{value:"Module"}));/**
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
 */function s$(e){try{return e.map(t=>En(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function r$(e){return e.map(t=>sn(t))}const o$=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:$0,ERF_A2:E0,ERF_A3:k0,ERF_A4:S0,ERF_A5:x0,ERF_P:y0,PARALLELIZE_THRESHOLD:lr,get RowPartitionType(){return It},SELU_SCALE:w0,SELU_SCALEALPHA:b0,applyActivation:qn,assertAndGetBroadcastShape:J,assertAxesAreInnerMostDims:dp,assertParamsConsistent:r0,assignToTypedArray:D0,axesAreInnerMostDims:Us,calculateShapes:Qc,checkEinsumDimSizes:C0,checkPadOnDimRoundingMode:kt,combineLocations:Tc,combineRaggedTensorToTensorShapes:a0,complexWithEvenIndex:I0,complexWithOddIndex:_0,computeConv2DInfo:on,computeConv3DInfo:bc,computeDefaultPad:Os,computeDilation2DInfo:Ff,computeOptimalWindowSize:u0,computeOutAndReduceShapes:fp,computeOutShape:o0,computePool2DInfo:mc,computePool3DInfo:Bf,convertConv2DDataFormat:wc,decodeEinsumEquation:B0,eitherStridesOrDilationsAreOne:Ct,expandShapeToKeepDim:cn,exponent:M0,exponents:N0,fromStringArrayToUint8:r$,fromUint8ToStringArray:s$,getAxesPermutation:pp,getBroadcastDims:Sc,getComplexWithIndex:A0,getEinsumComputePath:P0,getEinsumPermutation:R0,getFusedBiasGradient:Un,getFusedDyActivation:Wn,getImageCenter:h0,getInnerMostAxes:mp,getPermuted:d0,getRaggedRank:c0,getReductionAxes:Ws,getReshaped:f0,getReshapedPermuted:p0,getRowPartitionTypesHelper:i0,getSliceBeginCoords:g0,getSliceSize:m0,getSparseFillEmptyRowsIndicesDenseShapeMismatch:U0,getSparseFillEmptyRowsNegativeIndexErrorMessage:q0,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:G0,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:V0,getSparseReshapeInputOutputMismatchErrorMessage:j0,getSparseReshapeInputOutputMultipleErrorMessage:H0,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:z0,getSparseReshapeNegativeOutputDimErrorMessage:K0,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:J0,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:X0,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Z0,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Y0,getUndoAxesPermutation:gp,isIdentityPermutation:O0,log:$u,mergeRealAndImagArrays:v0,prepareAndValidate:bl,prepareSplitSize:W0,segment_util:n$,shouldFuse:Gn,slice_util:Tl,splitRealAndImagArrays:T0,stridesOrDilationsArePositive:ie,tupleValuesAreOne:He,upcastType:Nn,validateDefaultValueShape:l0,validateInput:Ln,validateUpdateShape:Ys,warn:Lt},Symbol.toStringTag,{value:"Module"}));/**
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
 */h1();const l$=Object.freeze(Object.defineProperty({__proto__:null,Abs:zr,Acos:Kr,Acosh:Vr,AdadeltaOptimizer:er,AdagradOptimizer:nr,AdamOptimizer:sr,AdamaxOptimizer:rr,Add:_s,AddN:Hr,All:jr,Any:Xr,ArgMax:Zr,ArgMin:Yr,Asin:Jr,Asinh:Qr,Atan:to,Atan2:no,Atanh:eo,AvgPool:so,AvgPool3D:ro,AvgPool3DGrad:nu,AvgPoolGrad:eu,BatchMatMul:oo,BatchToSpaceND:ao,Bincount:io,BitwiseAnd:co,BroadcastArgs:lo,BroadcastTo:su,Cast:As,Ceil:uo,ClipByValue:ho,Complex:fo,ComplexAbs:po,Concat:go,Conv2D:mo,Conv2DBackpropFilter:bo,Conv2DBackpropInput:wo,Conv3D:yo,Conv3DBackpropFilterV2:ru,Conv3DBackpropInputV2:$o,Cos:Eo,Cosh:ko,CropAndResize:vo,Cumprod:So,Cumsum:xo,DataStorage:Fl,DenseBincount:To,DepthToSpace:Io,DepthwiseConv2dNative:_o,DepthwiseConv2dNativeBackpropFilter:Ao,DepthwiseConv2dNativeBackpropInput:Do,Diag:No,Dilation2D:Mo,Dilation2DBackpropFilter:au,Dilation2DBackpropInput:ou,Draw:Ds,get ENV(){return Ts},Einsum:Bo,Elu:Ro,EluGrad:iu,Environment:qr,Equal:Po,Erf:Co,Exp:Oo,ExpandDims:Lo,Expm1:Wo,FFT:Uo,Fill:qo,FlipLeftRight:Go,Floor:zo,FloorDiv:Ko,FromPixels:Yn,FusedBatchNorm:Vo,FusedConv2D:Qn,FusedDepthwiseConv2D:ts,GatherNd:jo,GatherV2:Ho,Greater:Xo,GreaterEqual:Zo,IFFT:Yo,Identity:Ns,Imag:Jo,IsFinite:Qo,IsInf:ta,IsNan:ea,KernelBackend:Nr,LRN:ha,LRNGrad:hu,LeakyRelu:na,Less:sa,LessEqual:ra,LinSpace:oa,Log:aa,Log1p:ia,LogSoftmax:lu,LogicalAnd:ca,LogicalNot:la,LogicalOr:ua,LogicalXor:cu,LowerBound:uu,MatrixBandPart:fu,Max:fa,MaxPool:pa,MaxPool3D:ga,MaxPool3DGrad:pu,MaxPoolGrad:du,MaxPoolWithArgmax:ma,Maximum:da,Mean:ba,Min:wa,Minimum:ya,MirrorPad:$a,Mod:Ea,MomentumOptimizer:or,Multinomial:ka,Multiply:Sa,Neg:xa,NonMaxSuppressionV3:Ta,NonMaxSuppressionV4:Ia,NonMaxSuppressionV5:_a,NotEqual:va,OP_SCOPE_SUFFIX:Qi,OneHot:Da,OnesLike:Aa,Optimizer:Zt,OptimizerConstructors:Il,Pack:Na,PadV2:Ma,Pool:gu,Pow:Fa,Prelu:Ba,Prod:Ra,RMSPropOptimizer:ar,RaggedGather:Ca,RaggedRange:Pa,RaggedTensorToTensor:Oa,Range:La,get Rank(){return rs},Real:Wa,RealDiv:Fo,Reciprocal:Ua,get Reduction(){return at},Relu:qa,Relu6:Va,Reshape:Ga,ResizeBilinear:Ka,ResizeBilinearGrad:bu,ResizeNearestNeighbor:za,ResizeNearestNeighborGrad:mu,Reverse:Ha,RotateWithOffset:Fi,Round:ja,Rsqrt:Xa,SGDOptimizer:zn,ScatterNd:Za,SearchSorted:Ja,Select:Qa,Selu:ti,Sigmoid:oi,Sign:ri,Sin:ni,Sinh:si,Slice:ei,Softmax:hi,Softplus:ai,SpaceToBatchND:li,SparseFillEmptyRows:fi,SparseReshape:di,SparseSegmentMean:pi,SparseSegmentSum:gi,SparseToDense:mi,SplitV:ui,Sqrt:ii,Square:wu,SquaredDifference:bi,StaticRegexReplace:wi,Step:Mi,StridedSlice:yi,StringNGrams:$i,StringSplit:Ei,StringToHashBucketFast:ki,Sub:Si,Sum:ci,Tan:xi,Tanh:vi,Tensor:Z,TensorBuffer:kn,TensorScatterUpdate:Ya,Tile:Ms,TopK:Ti,Transform:Ii,Transpose:fn,Unique:_i,Unpack:Ai,UnsortedSegmentSum:Di,UpperBound:yu,Variable:Ge,ZerosLike:Ni,_FusedMatMul:Jn,abs:mt,acos:uf,acosh:ff,add:A,addN:pf,all:mf,any:wf,argMax:$f,argMin:kf,asin:xf,asinh:Tf,atan:_f,atan2:Df,atanh:Mf,avgPool:yc,avgPool3d:qf,backend:nc,backend_util:o$,basicLSTMCell:Xf,batchNorm:Mn,batchNorm2d:td,batchNorm3d:nd,batchNorm4d:rd,batchToSpaceND:$c,bincount:Ec,bitwiseAnd:id,booleanMaskAsync:Xb,broadcastArgs:ld,broadcastTo:gn,broadcast_util:Jd,browser:q1,buffer:Ft,cast:V,ceil:fd,clipByValue:pd,clone:se,complex:Ht,concat:dt,concat1d:md,concat2d:wd,concat3d:$d,concat4d:kd,conv1d:vd,conv2d:Fn,conv2dTranspose:_d,conv3d:Dd,conv3dTranspose:Bd,copyRegisteredKernels:xu,cos:Cd,cosh:Od,cosineWindow:Qs,cumprod:Wd,cumsum:qd,customGrad:Dt,denseBincount:zd,deprecationWarn:ih,depthToSpace:Vd,depthwiseConv2d:Ls,device_util:eh,diag:Xd,dilation2d:Yd,disableDeprecationWarnings:ah,dispose:ct,disposeVariables:ch,div:G,divNoNan:sp,dot:op,dropout:cw,einsum:we,elu:vc,enableDebugMode:oh,enableProdMode:rh,enclosingPowerOfTwo:nl,engine:lh,ensureShape:lp,env:N,equal:xc,erf:hp,euclideanNorm:vp,exp:ce,expandDims:Ot,expm1:Ap,eye:_c,fft:js,fill:an,findBackend:mh,findBackendFactory:bh,floor:Ac,floorDiv:gc,fused:Sw,gather:Dc,gatherND:ow,gather_util:G1,getBackend:ec,getGradient:es,getKernel:Ue,getKernelsForBackend:yn,grad:Yp,grads:Jp,greater:Rn,greaterEqual:Nc,ifft:Tn,imag:Cn,image:n1,inTopKAsync:uw,io:A1,irfft:Xc,isFinite:Op,isInf:Wp,isNaN:qp,keep:tc,kernel_impls:a$,leakyRelu:Mc,less:bs,lessEqual:qs,linalg:s1,linspace:Vp,localResponseNormalization:jp,log:Xe,log1p:Fc,logSigmoid:rg,logSoftmax:ig,logSumExp:Cc,logicalAnd:Sn,logicalNot:Pc,logicalOr:Oc,logicalXor:dg,losses:r1,lowerBound:gg,matMul:O,math:M1,max:ve,maxPool:Lc,maxPool3d:wg,maxPoolWithArgmax:$g,maximum:Wc,mean:xn,memory:uh,meshgrid:Sg,min:ms,minimum:vn,mirrorPad:Tg,mod:_g,moments:Dg,movingAverage:Jb,mul:v,multiRNNCell:Mg,multinomial:Bg,neg:_t,nextFrame:s0,norm:Bn,notEqual:Uc,oneHot:ws,ones:ne,onesLike:Og,op:g,outerProduct:Wg,pad:ln,pad1d:Gg,pad2d:Kg,pad3d:Hg,pad4d:Xg,pool:tm,pow:je,prelu:Gc,print:pc,prod:sm,profile:hh,raggedGather:om,raggedRange:im,raggedTensorToTensor:lm,rand:hm,randomGamma:vm,randomNormal:Vc,randomStandardNormal:_m,randomUniform:Hs,randomUniformInt:Nm,range:Ze,ready:ph,real:Ye,reciprocal:Bm,registerBackend:wh,registerGradient:Eu,registerKernel:Bi,relu:On,relu6:Hc,removeBackend:gh,reshape:E,reverse:le,reverse1d:Lm,reverse2d:Um,reverse3d:Gm,reverse4d:Km,rfft:Xs,round:jc,rsqrt:jm,scalar:W,scatterND:tw,scatter_util:Fb,searchSorted:Gs,selu:Zm,separableConv2d:Jm,serialization:l1,setBackend:dh,setPlatform:yh,setdiff1dAsync:tb,sigmoid:xe,sign:nb,signal:e1,sin:rb,sinh:ab,slice:H,slice1d:cb,slice2d:ub,slice3d:fb,slice4d:pb,slice_util:Tl,softmax:mb,softplus:Rc,spaceToBatchND:qc,sparse:o1,sparseToDense:sw,spectral:t1,split:Je,sqrt:Bt,square:xt,squaredDifference:Zc,squeeze:Zs,stack:Qe,step:Yc,stridedSlice:Ib,string:a1,sub:F,sum:q,sumOutType:Vu,tan:Ab,tanh:gs,tensor:Ee,tensor1d:Et,tensor2d:Oe,tensor3d:Jc,tensor4d:Db,tensor5d:Nb,tensor6d:Mb,tensorScatterUpdate:Rb,tensor_util:Xu,test_util:Em,tidy:Y,tile:Pe,time:fh,topk:Pb,train:e0,transpose:In,truncatedNormal:Lb,unique:Ub,unregisterGradient:Su,unregisterKernel:ku,unsortedSegmentSum:Gb,unstack:Js,upcastType:Nn,upperBound:Kb,util:Ru,valueAndGrad:Qp,valueAndGrads:tg,variable:Vb,variableGrads:Bc,version_core:t0,where:zt,whereAsync:el,zeros:De,zerosLike:bt},Symbol.toStringTag,{value:"Module"}));export{Ls as $,id as A,Xb as B,ld as C,gn as D,Ft as E,V as F,fd as G,pd as H,Ht as I,dt as J,md as K,wd as L,$d as M,kd as N,Qi as O,vd as P,Fn as Q,_d as R,Dd as S,Bd as T,Cd as U,Od as V,Qs as W,Wd as X,qd as Y,zd as Z,Vd as _,mt as a,Dg as a$,Xd as a0,Yd as a1,G as a2,sp as a3,op as a4,cw as a5,we as a6,vc as a7,nl as a8,lp as a9,qs as aA,s1 as aB,Vp as aC,jp as aD,Xe as aE,Fc as aF,rg as aG,ig as aH,Cc as aI,Sn as aJ,Pc as aK,Oc as aL,dg as aM,r1 as aN,gg as aO,O as aP,ve as aQ,Lc as aR,wg as aS,$g as aT,Wc as aU,xn as aV,Sg as aW,ms as aX,vn as aY,Tg as aZ,_g as a_,xc as aa,hp as ab,vp as ac,ce as ad,Ot as ae,Ap as af,_c as ag,js as ah,an as ai,Ac as aj,gc as ak,Sw as al,Dc as am,ow as an,Rn as ao,Nc as ap,Tn as aq,Cn as ar,n1 as as,uw as at,Xc as au,Op as av,Wp as aw,qp as ax,Mc as ay,bs as az,uf as b,qc as b$,Jb as b0,v as b1,Mg as b2,Bg as b3,_t as b4,Bn as b5,Uc as b6,ws as b7,ne as b8,Og as b9,E as bA,le as bB,Lm as bC,Um as bD,Gm as bE,Km as bF,Xs as bG,jc as bH,jm as bI,W as bJ,tw as bK,Gs as bL,Zm as bM,Jm as bN,tb as bO,xe as bP,nb as bQ,e1 as bR,rb as bS,ab as bT,H as bU,cb as bV,ub as bW,fb as bX,pb as bY,mb as bZ,Rc as b_,g as ba,Wg as bb,ln as bc,Gg as bd,Kg as be,Hg as bf,Xg as bg,tm as bh,je as bi,Gc as bj,pc as bk,sm as bl,om as bm,im as bn,lm as bo,hm as bp,vm as bq,Vc as br,_m as bs,Hs as bt,Nm as bu,Ze as bv,Ye as bw,Bm as bx,On as by,Hc as bz,se as c,v0 as c$,o1 as c0,sw as c1,t1 as c2,Je as c3,Bt as c4,xt as c5,Zc as c6,Zs as c7,Qe as c8,Yc as c9,bt as cA,p as cB,tc as cC,Y as cD,Rt as cE,An as cF,A1 as cG,Sh as cH,Z as cI,ct as cJ,Bu as cK,zr as cL,L as cM,J as cN,Ne as cO,Rr as cP,Sc as cQ,Xl as cR,jl as cS,fo as cT,_n as cU,Ns as cV,Wa as cW,Dn as cX,As as cY,Kl as cZ,s$ as c_,Ib as ca,a1 as cb,F as cc,q as cd,Ab as ce,gs as cf,Ee as cg,Et as ch,Oe as ci,Jc as cj,Db as ck,Nb as cl,Mb as cm,Rb as cn,Pe as co,Pb as cp,In as cq,Lb as cr,Ub as cs,Gb as ct,Js as cu,Kb as cv,Vb as cw,zt as cx,el as cy,De as cz,ff as d,Fl as d$,_s as d0,co as d1,xs as d2,uo as d3,Po as d4,Oo as d5,Wo as d6,zo as d7,Ko as d8,Xo as d9,oi as dA,X1 as dB,Z1 as dC,r$ as dD,ei as dE,Y1 as dF,K1 as dG,U0 as dH,q0 as dI,G0 as dJ,z0 as dK,K0 as dL,V0 as dM,H0 as dN,j0 as dO,X0 as dP,Z0 as dQ,Y0 as dR,J0 as dS,ii as dT,bi as dU,wi as dV,sn as dW,Nu as dX,Si as dY,mn as dZ,Nr as d_,Zo as da,sa as db,ra as dc,aa as dd,da as de,ya as df,Sa as dg,Mu as dh,xa as di,va as dj,fn as dk,fp as dl,Nn as dm,Ra as dn,tn as dp,pp as dq,mp as dr,cn as ds,i0 as dt,c0 as du,l0 as dv,a0 as dw,It as dx,Xa as dy,kn as dz,N as e,vo as e$,lh as e0,Lt as e1,Ut as e2,Vl as e3,En as e4,qe as e5,tl as e6,wh as e7,Ro as e8,na as e9,eu as eA,Vo as eB,ao as eC,f0 as eD,d0 as eE,p0 as eF,g0 as eG,m0 as eH,io as eI,lo as eJ,ho as eK,po as eL,Jo as eM,go as eN,r0 as eO,o0 as eP,mo as eQ,wc as eR,on as eS,bo as eT,wo as eU,yo as eV,bc as eW,ru as eX,$o as eY,Eo as eZ,ko as e_,Ba as ea,qa as eb,Va as ec,Ga as ed,zl as ee,oo as ef,Jn as eg,Kr as eh,Vr as ei,Hr as ej,jr as ek,dp as el,Xr as em,Zr as en,Yr as eo,Jr as ep,Qr as eq,to as er,no as es,eo as et,so as eu,Ct as ev,mc as ew,ro as ex,Bf as ey,nu as ez,A as f,ga as f$,So as f0,vs as f1,gp as f2,xo as f3,To as f4,Io as f5,_o as f6,Ao as f7,Do as f8,No as f9,_0 as fA,N0 as fB,D0 as fC,M0 as fD,Uo as fE,qo as fF,en as fG,Go as fH,Qn as fI,ts as fJ,jo as fK,bl as fL,Ho as fM,e$ as fN,Yo as fO,Qo as fP,ta as fQ,ea as fR,oa as fS,ia as fT,ca as fU,la as fV,ua as fW,ha as fX,hu as fY,fa as fZ,pa as f_,Mo as fa,Ff as fb,au as fc,Hl as fd,ou as fe,Ds as ff,ci as fg,Bo as fh,B0 as fi,C0 as fj,P0 as fk,R0 as fl,O0 as fm,iu as fn,Co as fo,$0 as fp,E0 as fq,k0 as fr,S0 as fs,x0 as ft,y0 as fu,Lo as fv,Fo as fw,A0 as fx,T0 as fy,I0 as fz,pf as g,vi as g$,pu as g0,du as g1,ma as g2,ba as g3,wa as g4,$a as g5,Ea as g6,hi as g7,ka as g8,Ta as g9,Qc as gA,Ja as gB,Qa as gC,ti as gD,b0 as gE,w0 as gF,ri as gG,ni as gH,si as gI,ai as gJ,li as gK,fi as gL,di as gM,pi as gN,gi as gO,mi as gP,ui as gQ,W0 as gR,wu as gS,Mi as gT,yi as gU,J1 as gV,H1 as gW,$i as gX,Ei as gY,ki as gZ,xi as g_,ol as ga,Ia as gb,al as gc,_a as gd,il as ge,Da as gf,Ni as gg,Aa as gh,Na as gi,it as gj,Ma as gk,Fa as gl,Ca as gm,Pa as gn,Oa as go,La as gp,Ua as gq,Ka as gr,bu as gs,za as gt,mu as gu,Ha as gv,Fi as gw,h0 as gx,ja as gy,Za as gz,mf as h,Ya as h0,Ms as h1,Ti as h2,Ii as h3,Le as h4,_i as h5,Ai as h6,Di as h7,Bi as h8,Ul as h9,Ce as ha,Rl as hb,Br as hc,th as hd,o$ as he,Gl as hf,Vt as hg,Cl as hh,bn as hi,s0 as hj,Yi as hk,Te as hl,u0 as hm,Vu as hn,Yn as ho,t$ as hp,Q0 as hq,l$ as hr,wf as i,$f as j,kf as k,xf as l,Tf as m,_f as n,Df as o,Mf as p,yc as q,qf as r,Xf as s,$e as t,Mn as u,td as v,nd as w,rd as x,$c as y,Ec as z};
