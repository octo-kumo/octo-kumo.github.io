import{K as zn,D as $n,e as ke,a as Pn,w as En,i as Ln,b as Bn,m as Xt,c as Gn,d as Ne,f as it,n as xe,g as qn,r as _n,E as ve,L as Un,s as j,h as Ct,P as jn,R as we,j as Te,k as Yn,l as Xn,o as ct,B as Kn,p as Me,q as K,_ as Zn,A as Fe,t as Re,u as Jn,v as Qn,x as ut,y as It,z as kt,C as Tt,F as Nt,G as vt,H as At,I as ts,J as es,M as ns,N as De,O as Ve,Q as We,S as He,T as Ae,U as ss,V as ae,W as Gt,X as oe,Y as as,Z as Kt,$ as os,a0 as rs,a1 as is,a2 as cs,a3 as Oe,a4 as ze,a5 as $e,a6 as ls,a7 as ds,a8 as ps,a9 as us,aa as Pe,ab as hs,ac as fs,ad as ms,ae as gs,af as ee,ag as Is,ah as re,ai as Ot,aj as lt,ak as ks,al as xs,am as bs,an as ie,ao as Ss,ap as ys,aq as Ee,ar as Le,as as Cs,at as Ns,au as Zt,av as vs,aw as Be,ax as ws,ay as Ts,az as Ms,aA as Fs,aB as Rs,aC as Ds,aD as Vs,aE as Ws,aF as ce,aG as le,aH as Et,aI as de,aJ as be,aK as Dt,aL as Ge,aM as Se,aN as Hs,aO as As,aP as Os,aQ as zs,aR as $s,aS as Ps,aT as Es,aU as Ls,aV as Bs,aW as qe,aX as Gs,aY as qs,aZ as _s,a_ as Us,a$ as js,b0 as Ys,b1 as Xs,b2 as _e,b3 as Ue,b4 as je,b5 as Ks,b6 as Zs,b7 as Js,b8 as Qs,b9 as ta,ba as ea,bb as na,bc as sa,bd as aa,be as oa,bf as ra,bg as ia,bh as ca,bi as la,bj as da,bk as pa,bl as ua,bm as Ye,bn as Xe,bo as Ke,bp as ha,bq as Ze,br as Je,bs as Qe,bt as tn,bu as fa,bv as ma,bw as ga,bx as Ia,by as ka,bz as xa,bA as ba,bB as Sa,bC as ya,bD as Ca,bE as Na,bF as en,bG as nn,bH as va,bI as wa,bJ as Ta,bK as Ma,bL as Fa,bM as Ra,bN as Da,bO as Va,bP as Wa,bQ as Ha,bR as Aa,bS as Oa,bT as za,bU as $a,bV as sn,bW as Pa,bX as Ea,bY as La,bZ as Ba,b_ as an,b$ as Ga,c0 as qa,c1 as _a,c2 as Ua,c3 as ja,c4 as Ya,c5 as Xa,c6 as on,c7 as Ka,c8 as pe,c9 as Za,ca as Ja,cb as rn,cc as Qa,cd as to,ce as cn,cf as ln,cg as dn,ch as pn,ci as eo,cj as no,ck as so,cl as ao,cm as oo,cn as ro,co as io,cp as co,cq as lo,cr as un,cs as po,ct as uo,cu as ho,cv as fo,cw as mo,cx as go,cy as hn,cz as fn,cA as Io,cB as ko,cC as xo,cD as bo,cE as ue,cF as So,cG as yo,cH as Co,cI as No}from"./DLggS0h7.js";import{a as q,u as Q,c as Mt,i as Ft,s as vo,b as Lt,t as pt,d as zt,e as Vt,f as mn,r as Bt,g as ft,h as wo,j as To,k as he,z as Mo,m as fe,l as gn,n as Fo,o as Ro,p as Do,q as Vo,v as Wo,w as Ho,x as Ao,y as Oo,A as zo,B as $o,C as Rt,D as Po,E as Eo,F as In,G as Lo,H as Bo,I as Go,J as qo,K as _o,L as Uo,M as jo,N as Yo,O as Xo,P as Ko,Q as Zo,R as Jo,S as Qo,T as tr,U as er,V as nr,W as sr,X as ar,Y as or,Z as rr,_ as ir,$ as cr,a0 as lr,a1 as dr,a2 as pr,a3 as ur,a4 as hr,a5 as fr,a6 as mr,a7 as gr,a8 as Ir,a9 as kr,aa as xr,ab as br,ac as Sr,ad as yr,ae as Cr,af as Nr,ag as vr,ah as wr}from"./CAON60Ce.js";import{ai as Jp}from"./CAON60Ce.js";import{a as Tr}from"./Cc8bWdRz.js";import"./BosuxZz1.js";/**
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
 */const Mr=qn;class Jt extends zn{nextDataId(){return Jt.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new $n(this,ke())}write(a,t,n){this.firstUse&&(this.firstUse=!1,Pn().get("IS_NODE")&&En(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const e={id:this.nextDataId()};return this.data.set(e,{values:a,dtype:n,refCount:1}),e}makeTensorInfo(a,t,n){let e;if(t==="string"&&n!=null&&n.length>0&&Ln(n[0])){const s=n.map(l=>Bn(l));e=this.write(s,a,t)}else e=this.write(n,a,t);return{dataId:e,shape:a,dtype:t}}refCount(a){return this.data.has(a)?this.data.get(a).refCount:0}incRef(a){const t=this.data.get(a);t.refCount++}decRef(a){if(this.data.has(a)){const t=this.data.get(a);t.refCount--}}move(a,t,n,e,s){this.data.set(a,{values:t,dtype:e,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(a){return this.readSync(a)}readSync(a){const{dtype:t,complexTensorInfos:n}=this.data.get(a);if(t==="complex64"){const e=this.readSync(n.real.dataId),s=this.readSync(n.imag.dataId);return Xt(e,s)}return Gn(this.data.get(a).values,t)}bufferSync(a){const t=this.readSync(a.dataId);if(a.dtype==="string")try{const n=t.map(e=>Ne(e));return it(a.shape,a.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return it(a.shape,a.dtype,t)}makeOutput(a,t,n){return ke().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,a),this)}disposeData(a,t=!1){if(this.data.has(a)){if(this.data.get(a).refCount--,!t&&this.data.get(a).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(a);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(a)}return!0}disposeIntermediateTensorInfo(a){this.disposeData(a.dataId)}async time(a){const t=xe();return a(),{kernelMs:xe()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(a){q([a],"where");const t=this.readSync(a.dataId);return Mr(a.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Jt.nextDataId=0;/** @license See the LICENSE file. */const Xp="4.20.0";/**
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
 */_n("cpu",()=>new Jt,1);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kn=Q(ve,o=>o>=0?o:Math.exp(o)-1),Fr={kernelName:ve,backendName:"cpu",kernelFunc:kn};/**
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
 */function xn(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{alpha:s}=n;q([e],"leakyRelu");const l=j(e.shape),c=t.data.get(e.dataId).values,d=Ct("float32",l);for(let i=0;i<c.length;i++)d[i]=c[i]<0?s*c[i]:c[i];return t.makeTensorInfo(e.shape,"float32",d)}const Rr={kernelName:Un,backendName:"cpu",kernelFunc:xn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dr=Mt((o,a)=>o<0?a*o:o);function bn(o){const{inputs:a,backend:t}=o,{x:n,alpha:e}=a;q([n,e],"prelu");const s=t.data.get(n.dataId).values,l=t.data.get(e.dataId).values,[c,d]=Dr(n.shape,e.shape,s,l,"float32");return t.makeTensorInfo(d,"float32",c)}const Vr={kernelName:jn,backendName:"cpu",kernelFunc:bn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sn=Q(we,o=>Math.max(0,o)),Wr={kernelName:we,backendName:"cpu",kernelFunc:Sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yn=Q(Te,o=>Math.min(Math.max(0,o),6)),Hr={kernelName:Te,backendName:"cpu",kernelFunc:yn};/**
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
 */function Ut(o,a,t,n,e){if(t==="linear")return Ft({inputs:{x:a},backend:o});if(t==="relu")return Sn({inputs:{x:a},backend:o});if(t==="elu")return kn({inputs:{x:a},backend:o});if(t==="relu6")return yn({inputs:{x:a},backend:o});if(t==="prelu")return bn({inputs:{x:a,alpha:n},backend:o});if(t==="leakyrelu")return xn({inputs:{x:a},backend:o,attrs:{alpha:e}});if(t==="sigmoid")return vo({inputs:{x:a},backend:o});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}/**
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
 */function nt(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{shape:s}=n,l=j(e.shape),c=Xn(s,l),d=j(c);ct(l===d,()=>`The new shape (${c}) has ${d} elements and the old shape (${e.shape}) has ${l} elements. The new shape and old shape must have the same number of elements.`),t.incRef(e.dataId);const i=t.data.get(e.dataId);if(i.complexTensorInfos!=null){const r=i.complexTensorInfos.real,u=i.complexTensorInfos.imag;r.shape=c,u.shape=c}return{dataId:e.dataId,shape:c,dtype:e.dtype}}const Ar={kernelName:Yn,backendName:"cpu",kernelFunc:nt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cn(o){const{inputs:a,backend:t,attrs:n}=o,{a:e,b:s}=a,{transposeA:l,transposeB:c}=n;q([e,s],"matMul");const d=e.shape.length,i=s.shape.length,r=l?e.shape[d-2]:e.shape[d-1],u=c?s.shape[i-1]:s.shape[i-2],p=l?e.shape[d-1]:e.shape[d-2],h=c?s.shape[i-2]:s.shape[i-1],m=e.shape.slice(0,-2),f=s.shape.slice(0,-2),g=j(m),I=j(f),b=Me(e.shape.slice(0,-2),s.shape.slice(0,-2)).concat([p,h]);ct(r===u,()=>`Error in matMul: inner shapes (${r}) and (${u}) of Tensors with shapes ${e.shape} and ${s.shape} and transposeA=${l} and transposeB=${c} must match.`);const k=l?[g,r,p]:[g,p,r],S=c?[I,h,u]:[I,u,h],y=nt({inputs:{x:e},backend:t,attrs:{shape:k}}),C=nt({inputs:{x:s},backend:t,attrs:{shape:S}}),M=l?y.shape[1]:y.shape[2],V=l?y.shape[2]:y.shape[1],R=c?C.shape[1]:C.shape[2],H=Math.max(g,I),A=t.data.get(y.dataId).values,N=t.data.get(C.dataId).values,F=K(y.shape),v=K(C.shape),[w,W,T]=l?[F[0],1,F[1]]:[F[0],F[1],1],[D,z,O]=c?[1,v[1],v[0]]:[v[1],1,v[0]],E=V*R,$=it([H,V,R],y.dtype),L=$.values,P=t.blockSize;for(let B=0;B<H;B++){const G=B%g,U=B%I;for(let _=0;_<V;_+=P){const Y=Math.min(_+P,V);for(let X=0;X<R;X+=P){const Z=Math.min(X+P,R);for(let tt=0;tt<M;tt+=P){const ot=Math.min(tt+P,M);for(let et=_;et<Y;et++)for(let J=X;J<Z;J++){let at=0;for(let st=tt;st<ot;st++){const mt=A[G*w+et*W+st*T],rt=N[st*D+J*z+U*O];at+=mt*rt}L[B*E+(et*R+J)]+=at}}}}}return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(C),t.makeTensorInfo(b,$.dtype,$.values)}const Or={kernelName:Kn,backendName:"cpu",kernelFunc:Cn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zr(o){const{inputs:a,backend:t,attrs:n}=o,{a:e,b:s,bias:l,preluActivationWeights:c}=a,{transposeA:d,transposeB:i,activation:r,leakyreluAlpha:u}=n;let p,h,m;const f=[];p=Cn({inputs:{a:e,b:s},attrs:{transposeA:d,transposeB:i},backend:t}),l&&(h=Lt({inputs:{a:p,b:l},backend:t}),f.push(p),p=h),r&&(m=Ut(t,p,r,c,u),f.push(p),p=m);for(const I of f)t.disposeIntermediateTensorInfo(I);return p}const $r={kernelName:Zn,backendName:"cpu",kernelFunc:zr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pr=Q(Fe,o=>Math.acos(o)),Er={kernelName:Fe,backendName:"cpu",kernelFunc:Pr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lr=Q(Re,o=>Math.acosh(o)),Br={kernelName:Re,backendName:"cpu",kernelFunc:Lr};/**
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
 */function Gr(o){const{inputs:a,backend:t}=o,n=a;q(a,"addN");const e=n.map(c=>t.data.get(c.dataId).values),s=it(n[0].shape,n[0].dtype),l=s.values;for(let c=0;c<n.length;c++){const d=e[c];for(let i=0;i<l.length;i++)l[i]+=d[i]}return t.makeTensorInfo(s.shape,s.dtype,s.values)}const qr={kernelName:Jn,backendName:"cpu",kernelFunc:Gr};/**
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
 */function _r(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,keepDims:l}=n;q(e,"all");const c=ut(s,e.shape);let d=c;const i=It(d,e.shape.length);let r=e;i!=null&&(r=pt({inputs:{x:e},backend:t,attrs:{perm:i}}),d=kt(d.length,e.shape.length)),Tt("all",d,r.shape.length);const[u,p]=Nt(r.shape,d),h=j(p),m=vt(j(u),r.dtype),f=t.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*h;let b=f[x];for(let k=0;k<h;++k){const S=f[x+k];b=b&&S}m[I]=b}i!=null&&t.disposeIntermediateTensorInfo(r);const g=t.makeTensorInfo(u,r.dtype,m);if(l){const I=At(u,c),x=nt({inputs:{x:g},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(g),x}return g}const Ur={kernelName:Qn,backendName:"cpu",kernelFunc:_r};/**
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
 */function jr(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,keepDims:l}=n;q(e,"any");const c=ut(s,e.shape);let d=c;const i=It(d,e.shape.length);let r=e;i!=null&&(r=pt({inputs:{x:e},backend:t,attrs:{perm:i}}),d=kt(d.length,e.shape.length)),Tt("any",d,r.shape.length);const[u,p]=Nt(r.shape,d),h=j(p),m=vt(j(u),r.dtype),f=t.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*h;let b=f[x];for(let k=0;k<h;++k){const S=f[x+k];b=b||S}m[I]=b}i!=null&&t.disposeIntermediateTensorInfo(r);const g=t.makeTensorInfo(u,r.dtype,m);if(l){const I=At(u,c),x=nt({inputs:{x:g},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(g),x}return g}const Yr={kernelName:ts,backendName:"cpu",kernelFunc:jr};/**
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
 */function Xr(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s}=n;q(e,"argMax");let l=ut(s,e.shape);const c=It(l,e.shape.length);let d=e;const i=[];c!=null&&(d=pt({inputs:{x:e},backend:t,attrs:{perm:c}}),i.push(d),l=kt(l.length,d.shape.length)),l=[l[0]],Tt("argMax",l,d.shape.length);const[r,u]=Nt(d.shape,l),p=j(r),h=vt(p,"int32"),m=j(u),f=t.data.get(d.dataId).values;for(let g=0;g<h.length;++g){const I=g*m;let x=f[I],b=0;for(let k=0;k<m;++k){const S=f[I+k];S>x&&(x=S,b=k)}h[g]=b}return i.forEach(g=>t.disposeIntermediateTensorInfo(g)),t.makeTensorInfo(r,"int32",h)}const Kr={kernelName:es,backendName:"cpu",kernelFunc:Xr};/**
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
 */function Zr(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s}=n;q(e,"argMin");let l=ut(s,e.shape);const c=It(l,e.shape.length);let d=e;const i=[];c!=null&&(d=pt({inputs:{x:e},backend:t,attrs:{perm:c}}),i.push(d),l=kt(l.length,d.shape.length)),l=[l[0]],Tt("argMin",l,d.shape.length);const[r,u]=Nt(d.shape,l),p=j(r),h=vt(p,"int32"),m=j(u),f=t.data.get(d.dataId).values;for(let g=0;g<h.length;++g){const I=g*m;let x=f[I],b=0;for(let k=0;k<m;++k){const S=f[I+k];S<x&&(x=S,b=k)}h[g]=b}return i.forEach(g=>t.disposeIntermediateTensorInfo(g)),t.makeTensorInfo(r,"int32",h)}const Jr={kernelName:ns,backendName:"cpu",kernelFunc:Zr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qr=Q(De,o=>Math.asin(o)),ti={kernelName:De,backendName:"cpu",kernelFunc:Qr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ei=Q(Ve,o=>Math.asinh(o)),ni={kernelName:Ve,backendName:"cpu",kernelFunc:ei};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const si=Q(We,o=>Math.atan(o)),ai={kernelName:We,backendName:"cpu",kernelFunc:si};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oi=Mt((o,a)=>Math.atan2(o,a)),ri=zt(He,oi),ii={kernelName:He,backendName:"cpu",kernelFunc:ri};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ci=Q(Ae,o=>Math.atanh(o)),li={kernelName:Ae,backendName:"cpu",kernelFunc:ci};/**
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
 */function me(o,a,t,n,e,s){const l=e.strideHeight,c=e.strideWidth,d=e.dilationHeight,i=e.dilationWidth,r=e.effectiveFilterHeight,u=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left,m=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,f=it(e.outShape,t),g=f.values,I=e.outShape[1]*e.outShape[2]*e.outShape[3],x=e.outShape[2]*e.outShape[3],b=e.outShape[3];for(let k=0;k<e.batchSize;++k){const S=k*I,y=k*n[0];for(let C=0;C<e.inChannels;++C)for(let M=0;M<e.outHeight;++M){const V=M*l-p,R=Math.max(0,V),H=Math.min(e.inHeight,r+V),A=S+M*x;for(let N=0;N<e.outWidth;++N){const F=N*c-h,v=Math.max(0,F),w=Math.min(e.inWidth,u+F);let W=m,T=0,D=0;for(let O=R;O<H;O+=d){const E=y+O*n[1];for(let $=v;$<w;$+=i){const L=E+$*n[2],P=o[L+C];s==="max"&&P>W?W=P:s==="avg"&&(T+=P,D++)}if(isNaN(W))break}const z=A+N*b+C;g[z]=s==="avg"?T/D:W}}}return f}function Nn(o,a,t,n,e=!1,s=!1){const l=it(n.outShape,"int32"),c=n.strideHeight,d=n.strideWidth,i=n.dilationHeight,r=n.dilationWidth,u=n.effectiveFilterHeight,p=n.effectiveFilterWidth,h=n.padInfo.top,m=n.padInfo.left,f=it(a,t,o);for(let g=0;g<n.batchSize;++g)for(let I=0;I<n.inChannels;++I)for(let x=0;x<n.outHeight;++x){const b=x*c-h;let k=b;for(;k<0;)k+=i;const S=Math.min(n.inHeight,u+b);for(let y=0;y<n.outWidth;++y){const C=y*d-m;let M=C;for(;M<0;)M+=r;const V=Math.min(n.inWidth,p+C);let R=Number.NEGATIVE_INFINITY,H=-1;for(let A=k;A<S;A+=i){const N=A-b;for(let F=M;F<V;F+=r){const v=F-C,w=f.get(g,A,F,I);w>R&&(R=w,e?H=s?((g*n.inHeight+A)*n.inWidth+F)*n.inChannels+I:(A*n.inWidth+F)*n.inChannels+I:H=N*p+v)}}l.set(H,g,x,y,I)}}return l}function vn(o,a,t,n,e,s){const l=e.strideDepth,c=e.strideHeight,d=e.strideWidth,i=e.dilationDepth,r=e.dilationHeight,u=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,m=e.effectiveFilterWidth,f=e.padInfo.front,g=e.padInfo.top,I=e.padInfo.left,x=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=it(e.outShape,t),k=b.values,S=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],y=e.outShape[2]*e.outShape[3]*e.outShape[4],C=e.outShape[3]*e.outShape[4],M=e.outShape[4];for(let V=0;V<e.batchSize;++V){const R=V*S,H=V*n[0];for(let A=0;A<e.inChannels;++A)for(let N=0;N<e.outDepth;++N){const F=N*l-f;let v=F;for(;v<0;)v+=i;const w=Math.min(e.inDepth,p+F),W=R+N*y;for(let T=0;T<e.outHeight;++T){const D=T*c-g;let z=D;for(;z<0;)z+=r;const O=Math.min(e.inHeight,h+D),E=W+T*C;for(let $=0;$<e.outWidth;++$){const L=$*d-I;let P=L;for(;P<0;)P+=u;const B=Math.min(e.inWidth,m+L),G=E+$*M;let U=x,_=0,Y=0;for(let Z=v;Z<w;Z+=i){const tt=H+Z*n[1];for(let ot=z;ot<O;ot+=r){const et=tt+ot*n[2];for(let J=P;J<B;J+=u){const at=et+J*n[3],st=o[at+A];if(s==="max"&&st>U?U=st:s==="avg"&&(_+=st,Y++),isNaN(U))break}if(isNaN(U))break}if(isNaN(U))break}const X=G+A;k[X]=s==="avg"?_/Math.max(Y,1):U}}}}return b}function di(o,a){const t=it(a.outShape,"int32"),n=a.strideDepth,e=a.strideHeight,s=a.strideWidth,l=a.dilationDepth,c=a.dilationHeight,d=a.dilationWidth,i=a.effectiveFilterDepth,r=a.effectiveFilterHeight,u=a.effectiveFilterWidth,p=a.padInfo.front,h=a.padInfo.top,m=a.padInfo.left;for(let f=0;f<a.batchSize;++f)for(let g=0;g<a.inChannels;++g)for(let I=0;I<a.outDepth;++I){const x=I*n-p;let b=x;for(;b<0;)b+=l;const k=Math.min(a.inDepth,i+x);for(let S=0;S<a.outHeight;++S){const y=S*e-h;let C=y;for(;C<0;)C+=c;const M=Math.min(a.inHeight,r+y);for(let V=0;V<a.outWidth;++V){const R=V*s-m;let H=R;for(;H<0;)H+=d;const A=Math.min(a.inWidth,u+R);let N=Number.NEGATIVE_INFINITY,F=-1;for(let v=b;v<k;v+=l){const w=v-x;for(let W=C;W<M;W+=c){const T=W-y;for(let D=H;D<A;D+=d){const z=D-R,O=o.get(f,v,W,D,g);O>=N&&(N=O,F=w*r*u+T*r+z)}}}t.set(F,f,I,S,V,g)}}}return t}/**
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
 */function pi(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a;q(e,"avgPool");const{filterSize:s,strides:l,pad:c,dimRoundingMode:d}=n,i=1;ct(ae(l,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${i}'`);const r=Gt(e.shape,s,l,i,c,d);let u;if(r.filterWidth===1&&r.filterHeight===1&&oe(r.inShape,r.outShape))u=Ft({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,h=K(e.shape),m=me(p,e.shape,e.dtype,h,r,"avg");u=t.makeTensorInfo(r.outShape,e.dtype,m.values)}return u}const ui={kernelName:ss,backendName:"cpu",kernelFunc:pi};/**
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
 */function hi(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{filterSize:s,strides:l,pad:c,dimRoundingMode:d,dataFormat:i}=n;q(e,"avgPool3d");const r=Kt(e.shape,s,l,1,c,d,i),u=t.data.get(e.dataId).values,p=vn(u,e.shape,e.dtype,K(e.shape),r,"avg");return t.makeTensorInfo(p.shape,"float32",p.values)}const fi={kernelName:as,backendName:"cpu",kernelFunc:hi};/**
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
 */function mi(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,input:s}=a,{filterSize:l,strides:c,pad:d,dimRoundingMode:i}=n;q([e,s],"avgPool3DGrad");const r=Kt(s.shape,l,c,1,d,i),u=r.strideDepth,p=r.strideHeight,h=r.strideWidth,m=r.filterDepth,f=r.filterHeight,g=r.filterWidth,I=r.dilationDepth,x=r.dilationHeight,b=r.dilationWidth,k=r.effectiveFilterDepth,S=r.effectiveFilterHeight,y=r.effectiveFilterWidth,C=k-1-r.padInfo.front,M=y-1-r.padInfo.left,V=S-1-r.padInfo.top,R=it(s.shape,"float32"),H=1/(m*f*g),A=t.bufferSync(e);for(let N=0;N<r.batchSize;++N)for(let F=0;F<r.inChannels;++F)for(let v=0;v<r.inDepth;++v)for(let w=0;w<r.inHeight;++w)for(let W=0;W<r.inWidth;++W){const T=v-C,D=w-V,z=W-M;let O=0;for(let E=0;E<k;E+=I){const $=(T+E)/u;if(!($<0||$>=r.outDepth||Math.floor($)!==$))for(let L=0;L<S;L+=x){const P=(D+L)/p;if(!(P<0||P>=r.outHeight||Math.floor(P)!==P))for(let B=0;B<y;B+=b){const G=(z+B)/h;if(G<0||G>=r.outWidth||Math.floor(G)!==G)continue;const U=A.get(N,$,P,G,F);O+=U}}}R.set(O*H,N,v,w,W,F)}return t.makeTensorInfo(R.shape,R.dtype,R.values)}const gi={kernelName:os,backendName:"cpu",kernelFunc:mi};/**
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
 */function Ii(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,input:s}=a,l=s;q([e,s],"avgPoolGrad");const{filterSize:c,strides:d,pad:i}=n,r=Gt(l.shape,c,d,1,i),u=r.strideHeight,p=r.strideWidth,h=r.filterHeight,m=r.filterWidth,f=r.dilationHeight,g=r.dilationWidth,I=r.effectiveFilterHeight,x=r.effectiveFilterWidth,b=x-1-r.padInfo.left,k=I-1-r.padInfo.top,S=it(l.shape,"float32"),y=1/(h*m),C=t.data.get(e.dataId).values,M=it(e.shape,"float32",C);for(let V=0;V<r.batchSize;++V)for(let R=0;R<r.inChannels;++R)for(let H=0;H<r.inHeight;++H)for(let A=0;A<r.inWidth;++A){const N=H-k,F=A-b;let v=0;for(let w=0;w<I;w+=f){const W=(N+w)/u;if(!(W<0||W>=r.outHeight||Math.floor(W)!==W))for(let T=0;T<x;T+=g){const D=(F+T)/p;if(D<0||D>=r.outWidth||Math.floor(D)!==D)continue;const z=M.get(V,W,D,R);v+=z}}S.set(v*y,V,H,A,R)}return t.makeTensorInfo(S.shape,S.dtype,S.values)}const ki={kernelName:rs,backendName:"cpu",kernelFunc:Ii};/**
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
 */function xi(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,scale:s,offset:l,mean:c,variance:d}=a;ct(c.shape.length===d.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),ct(l==null||c.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),ct(s==null||c.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),q([e,c,d,s,l],"batchNorm");let{varianceEpsilon:i}=n;i==null&&(i=.001);const r=t.data.get(e.dataId).values,u=t.data.get(c.dataId).values,p=t.data.get(d.dataId).values,h=s?t.data.get(s.dataId).values:new Float32Array([1]),m=l?t.data.get(l.dataId).values:new Float32Array([0]),f=new Float32Array(r.length),g=m.length,I=h.length,x=p.length,b=u.length;let k=0,S=0,y=0,C=0;for(let M=0;M<r.length;++M)f[M]=m[k++]+(r[M]-u[S++])*h[y++]/Math.sqrt(p[C++]+i),k>=g&&(k=0),S>=b&&(S=0),y>=I&&(y=0),C>=x&&(C=0);return t.makeTensorInfo(e.shape,e.dtype,f)}const bi={kernelName:is,backendName:"cpu",kernelFunc:xi};/**
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
 */function Si(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{blockShape:s,crops:l}=n;q([e],"batchToSpaceND");const c=s.reduce((I,x)=>I*x),d=Oe(e.shape,s,c),i=ze(d.length,s.length),r=$e(e.shape,s,c),u=ls(l,s.length),p=ds(r,l,s.length),h=nt({inputs:{x:e},backend:t,attrs:{shape:d}}),m=pt({inputs:{x:h},backend:t,attrs:{perm:i}}),f=nt({inputs:{x:m},backend:t,attrs:{shape:r}}),g=Vt({inputs:{x:f},backend:t,attrs:{begin:u,size:p}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),g}const yi={kernelName:cs,backendName:"cpu",kernelFunc:Si};/**
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
 */function Ci(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,weights:s}=a,{size:l}=n,c=t.data.get(e.dataId).values,d=t.data.get(s.dataId).values,i=mn(c,d,s.dtype,s.shape,l);return t.makeTensorInfo([l],s.dtype,i)}const Ni={kernelName:ps,backendName:"cpu",kernelFunc:Ci};/**
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
 */function vi(o){const{inputs:a,backend:t}=o,{s0:n,s1:e}=a,s=t.data.get(n.dataId).values,l=t.data.get(e.dataId).values,c=Me(Array.from(s),Array.from(l));return t.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const wi={kernelName:us,backendName:"cpu",kernelFunc:vi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ti=Q(Pe,(o,a)=>{const t=a;return o>t.clipValueMax?t.clipValueMax:o<t.clipValueMin?t.clipValueMin:o}),Mi={kernelName:Pe,backendName:"cpu",kernelFunc:Ti};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fi=o=>{const{x:a}=o.inputs,t=o.backend,n=new Float32Array(j(a.shape)),e=t.data.get(a.dataId),s=e.complexTensorInfos.real,l=e.complexTensorInfos.imag,c=t.data.get(s.dataId).values,d=t.data.get(l.dataId).values;for(let i=0;i<c.length;i++){const r=c[i],u=d[i];n[i]=Math.hypot(r,u)}return t.makeOutput(n,a.shape,"float32")},Ri={kernelName:hs,backendName:"cpu",kernelFunc:Fi};/**
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
 */function Wt(o){const{inputs:a,backend:t}=o,{input:n}=a,e=t.data.get(n.dataId).complexTensorInfos.imag,s=t.data.get(e.dataId).values;return t.makeTensorInfo(e.shape,e.dtype,s)}const Di={kernelName:fs,backendName:"cpu",kernelFunc:Wt};/**
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
 */function Ht(o){const{inputs:a,backend:t,attrs:n}=o,{axis:e}=n,s=ut(e,a[0].shape)[0],l=a.map(f=>f.shape);gs(l,s);let c=ee(a.map(f=>f.shape),s);if(j(c)===0)return t.makeTensorInfo(c,a[0].dtype,[]);const d=a.filter(f=>j(f.shape)>0);if(d.length===1)return Ft({inputs:{x:d[0]},backend:t});if(d[0].dtype==="complex64"){const f=d.map(k=>Bt({inputs:{input:k},backend:t})),g=d.map(k=>Wt({inputs:{input:k},backend:t})),I=Ht({inputs:f,backend:t,attrs:{axis:s}}),x=Ht({inputs:g,backend:t,attrs:{axis:s}}),b=ft({inputs:{real:I,imag:x},backend:t});return f.forEach(k=>t.disposeIntermediateTensorInfo(k)),g.forEach(k=>t.disposeIntermediateTensorInfo(k)),t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(x),b}const i=d.map(f=>{const I=[-1,j(f.shape.slice(s))];return nt({inputs:{x:f},backend:t,attrs:{shape:I}})}),r=i.map(f=>({vals:t.data.get(f.dataId).values,shape:f.shape}));c=ee(i.map(f=>f.shape),1);const u=i[0].shape[0]===1,p=wo(r,c,a[0].dtype,u),h=ee(d.map(f=>f.shape),s),m=t.makeTensorInfo(h,a[0].dtype,p);return i.forEach(f=>t.disposeIntermediateTensorInfo(f)),m}const Vi={kernelName:ms,backendName:"cpu",kernelFunc:Ht};/**
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
 */function wn(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,filter:s}=a,{strides:l,pad:c,dataFormat:d,dilations:i,dimRoundingMode:r}=n;q([e,s],"conv2d");const u=re(d),p=Ot(e.shape,s.shape,l,i,c,r,!1,u),h=p.filterHeight,m=p.filterWidth,f=p.dilationHeight,g=p.dilationWidth,I=p.padInfo.left,x=p.padInfo.top,b=p.dataFormat==="channelsLast",k=new lt(p.outShape,e.dtype),S=K(e.shape),y=K(s.shape),C=S[0],M=b?S[1]:S[2],V=b?S[2]:1,R=b?1:S[1],H=k.strides[0],A=b?k.strides[1]:k.strides[2],N=b?k.strides[2]:1,F=b?1:k.strides[1],v=t.data.get(e.dataId).values,w=t.data.get(s.dataId).values,W=k.values;for(let T=0;T<p.batchSize;++T){const D=T*C,z=T*H;for(let O=0;O<p.outHeight;++O){const E=z+O*A,$=O*p.strideHeight-x;for(let L=0;L<h;++L){const P=$+L*f;if(P<0||P>=p.inHeight)continue;const B=L*y[0],G=D+P*M;for(let U=0;U<p.outWidth;++U){const _=E+U*N,Y=U*p.strideWidth-I;for(let X=0;X<m;++X){const Z=Y+X*g;if(Z<0||Z>=p.inWidth)continue;const tt=B+X*y[1],ot=G+Z*V;let et=tt;for(let J=0;J<p.inChannels;++J){const at=v[ot+J*R];for(let st=0;st<p.outChannels;++st)W[_+st*F]+=at*w[et+st];et+=p.outChannels}}}}}}return t.makeTensorInfo(k.shape,k.dtype,W)}const Wi={kernelName:Is,backendName:"cpu",kernelFunc:wn};/**
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
 */function Hi(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,dy:s}=a,{strides:l,pad:c,dataFormat:d,dimRoundingMode:i,filterShape:r}=n;q([e,s],"conv2dBackpropFilter");const u=re(d),p=Ot(e.shape,r,l,1,c,i,!1,u),{strideHeight:h,strideWidth:m,filterHeight:f,filterWidth:g}=p,I=p.dataFormat==="channelsLast",x=new lt(p.filterShape,"float32"),b=p.padInfo.left,k=p.padInfo.top,S=t.data.get(e.dataId).values,y=t.data.get(s.dataId).values,C=new lt(e.shape,e.dtype,S),M=new lt(s.shape,s.dtype,y);for(let V=0;V<f;++V){const R=Math.max(0,Math.ceil((k-V)/h)),H=Math.min(p.outHeight,(p.inHeight+k-V)/h);for(let A=0;A<g;++A){const N=Math.max(0,Math.ceil((b-A)/m)),F=Math.min(p.outWidth,(p.inWidth+b-A)/m);for(let v=0;v<p.inChannels;++v)for(let w=0;w<p.outChannels;++w){let W=0;for(let T=0;T<p.batchSize;++T)for(let D=R;D<H;++D){const z=V+D*h-k;for(let O=N;O<F;++O){const E=A+O*m-b;I?W+=C.get(T,z,E,v)*M.get(T,D,O,w):W+=C.get(T,v,z,E)*M.get(T,w,D,O)}}x.set(W,V,A,v,w)}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const Ai={kernelName:ks,backendName:"cpu",kernelFunc:Hi};/**
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
 */function Oi(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,filter:s}=a,{inputShape:l,strides:c,pad:d,dataFormat:i,dimRoundingMode:r}=n;q([e,s],"conv2dBackpropInput");const u=K(s.shape),p=K(e.shape);let h=re(i);const m=Ot(l,s.shape,c,1,d,r,!1,h),f=new lt(m.inShape,"float32"),g=f.values,I=t.data.get(e.dataId).values,x=t.data.get(s.dataId).values,[b,k,S]=u,{batchSize:y,filterHeight:C,filterWidth:M,inChannels:V,inHeight:R,inWidth:H,outChannels:A,outHeight:N,outWidth:F,strideHeight:v,strideWidth:w}=m;h=m.dataFormat;const W=C-1-m.padInfo.top,T=M-1-m.padInfo.left,D=h==="channelsLast",z=f.strides[0],O=D?f.strides[1]:f.strides[2],E=D?f.strides[2]:1,$=D?1:f.strides[1],L=p[0],P=D?p[1]:p[2],B=D?p[2]:1,G=D?1:p[1];for(let U=0;U<y;++U)for(let _=0;_<V;++_)for(let Y=0;Y<R;++Y){const X=Y-W,Z=Math.max(0,Math.ceil(X/v)),tt=Math.min(N,(C+X)/v);for(let ot=0;ot<H;++ot){const et=ot-T,J=Math.max(0,Math.ceil(et/w)),at=Math.min(F,(M+et)/w);let st=0;for(let rt=Z;rt<tt;++rt){const xt=rt*v-X;for(let dt=J;dt<at;++dt){const wt=dt*w-et,ht=L*U+P*rt+B*dt,gt=b*(C-1-xt)+k*(M-1-wt)+S*_;for(let bt=0;bt<A;++bt){const St=I[ht+G*bt],yt=x[gt+bt];st+=St*yt}}}const mt=z*U+O*Y+E*ot+$*_;g[mt]=st}}return t.makeTensorInfo(f.shape,f.dtype,f.values)}const zi={kernelName:xs,backendName:"cpu",kernelFunc:Oi};/**
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
 */function $i(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,filter:s}=a,{strides:l,pad:c,dilations:d}=n;q([e,s],"conv3d");const i=ie(e.shape,s.shape,l,d,c),{filterDepth:r,filterHeight:u,filterWidth:p,dilationDepth:h,dilationHeight:m,dilationWidth:f,padInfo:g}=i,I=g.front,x=g.left,b=g.top,k=new lt(i.outShape,e.dtype),S=t.data.get(e.dataId).values,y=t.data.get(s.dataId).values,C=k.values,M=K(e.shape),V=K(s.shape);for(let R=0;R<i.batchSize;++R){const H=R*M[0],A=R*k.strides[0];for(let N=0;N<i.outDepth;++N){const F=A+N*k.strides[1],v=N*i.strideDepth-I;for(let w=0;w<r;++w){const W=v+w*h;if(W<0||W>=i.inDepth)continue;const T=w*V[0],D=H+W*M[1];for(let z=0;z<i.outHeight;++z){const O=F+z*k.strides[2],E=z*i.strideHeight-b;for(let $=0;$<u;++$){const L=E+$*m;if(L<0||L>=i.inHeight)continue;const P=T+$*V[1],B=D+L*M[2];for(let G=0;G<i.outWidth;++G){const U=O+G*i.outChannels,_=G*i.strideWidth-x;for(let Y=0;Y<p;++Y){const X=_+Y*f;if(X<0||X>=i.inWidth)continue;const Z=P+Y*V[2],tt=B+X*i.inChannels;let ot=Z;for(let et=0;et<i.inChannels;++et){const J=S[tt+et];for(let at=0;at<i.outChannels;++at)C[U+at]+=J*y[ot+at];ot+=i.outChannels}}}}}}}}return t.makeTensorInfo(k.shape,k.dtype,k.values)}const Pi={kernelName:bs,backendName:"cpu",kernelFunc:$i};/**
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
 */function Ei(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,dy:s}=a,{strides:l,pad:c,filterShape:d}=n;q([e,s],"conv3dBackpropFilterV2");const i=K(e.shape),r=K(s.shape),u=ie(e.shape,d,l,1,c),p=u.strideDepth,h=u.strideHeight,m=u.strideWidth,f=u.filterDepth,g=u.filterHeight,I=u.filterWidth,x=new lt(u.filterShape,"float32"),b=x.values,[k,S,y,C]=x.strides,M=t.data.get(s.dataId).values,[V,R,H,A]=r,N=t.data.get(e.dataId).values,[F,v,w,W]=i,T=u.padInfo.front,D=u.padInfo.left,z=u.padInfo.top;for(let O=0;O<f;++O){const E=Math.max(0,Math.ceil((T-O)/p)),$=Math.min(u.outDepth,(u.inDepth+T-O)/p),L=O*k;for(let P=0;P<g;++P){const B=Math.max(0,Math.ceil((z-P)/h)),G=Math.min(u.outHeight,(u.inHeight+z-P)/h),U=P*S+L;for(let _=0;_<I;++_){const Y=Math.max(0,Math.ceil((D-_)/m)),X=Math.min(u.outWidth,(u.inWidth+D-_)/m),Z=_*y+U;for(let tt=0;tt<u.inChannels;++tt){const ot=tt*C+Z;for(let et=0;et<u.outChannels;++et){let J=0;for(let at=0;at<u.batchSize;++at){const st=at*F,mt=at*V;for(let rt=E;rt<$;++rt){const dt=(O+rt*p-T)*v+st,wt=rt*R+mt;for(let ht=B;ht<G;++ht){const bt=(P+ht*h-z)*w+dt,St=ht*H+wt;for(let yt=Y;yt<X;++yt){const Qt=(_+yt*m-D)*W+bt,te=yt*A+St;J+=N[Qt+tt]*M[te+et]}}}}b[ot+et]=J}}}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const Li={kernelName:Ss,backendName:"cpu",kernelFunc:Ei};/**
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
 */function Bi(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,filter:s}=a,{pad:l,strides:c,inputShape:d}=n;q([e],"conv3dBackpropInputV2");const i=K(e.shape),r=K(s.shape),u=ie(d,s.shape,c,1,l),p=new lt(u.inShape,"float32"),h=p.values,[m,f,g,I]=p.strides,x=t.data.get(e.dataId).values,[b,k,S,y]=i,C=t.data.get(s.dataId).values,[M,V,R,H]=r,{batchSize:A,filterDepth:N,filterHeight:F,filterWidth:v,inChannels:w,inDepth:W,inHeight:T,inWidth:D,outChannels:z,outDepth:O,outHeight:E,outWidth:$,strideDepth:L,strideHeight:P,strideWidth:B}=u,G=N-1-u.padInfo.front,U=F-1-u.padInfo.top,_=v-1-u.padInfo.left;for(let Y=0;Y<A;++Y)for(let X=0;X<w;++X)for(let Z=0;Z<W;++Z){const tt=Z-G,ot=Math.max(0,Math.ceil(tt/L)),et=Math.min(O,(N+tt)/L);for(let J=0;J<T;++J){const at=J-U,st=Math.max(0,Math.ceil(at/P)),mt=Math.min(E,(F+at)/P);for(let rt=0;rt<D;++rt){const xt=rt-_,dt=Math.max(0,Math.ceil(xt/B)),wt=Math.min($,(v+xt)/B);let ht=0;for(let gt=ot;gt<et;++gt){const bt=gt*L-tt;for(let St=st;St<mt;++St){const yt=St*P-at;for(let $t=dt;$t<wt;++$t){const Qt=$t*B-xt,te=b*Y+k*gt+S*St+y*$t,Hn=M*(N-1-bt)+V*(F-1-yt)+R*(v-1-Qt)+H*X;for(let _t=0;_t<z;++_t){const An=x[te+_t],On=C[Hn+_t];ht+=An*On}}}}h[m*Y+f*Z+g*J+I*rt+X]=ht}}}return t.makeTensorInfo(p.shape,p.dtype,p.values)}const Gi={kernelName:ys,backendName:"cpu",kernelFunc:Bi};/**
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
 */const qi=Q(Ee,o=>Math.cos(o)),_i={kernelName:Ee,backendName:"cpu",kernelFunc:qi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ui=Q(Le,o=>Math.cosh(o)),ji={kernelName:Le,backendName:"cpu",kernelFunc:Ui};/**
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
 */function Yi(o){const{inputs:a,backend:t,attrs:n}=o,{image:e,boxes:s,boxInd:l}=a,{cropSize:c,method:d,extrapolationValue:i}=n,[r,u,p,h]=e.shape,m=s.shape[0],[f,g]=c,I=it([m,f,g,h],"float32"),x=t.data.get(s.dataId).values,b=t.data.get(l.dataId).values,k=t.data.get(e.dataId).values,S=K(e.shape),y=K(I.shape);for(let C=0;C<m;C++){const M=C*4,V=x[M],R=x[M+1],H=x[M+2],A=x[M+3],N=b[C];if(N>=r)continue;const F=f>1?(H-V)*(u-1)/(f-1):0,v=g>1?(A-R)*(p-1)/(g-1):0;for(let w=0;w<f;w++){const W=f>1?V*(u-1)+w*F:.5*(V+H)*(u-1);if(W<0||W>u-1){for(let T=0;T<g;T++)for(let D=0;D<h;D++){const z=D+T*y[2]+w*y[1]+C*y[0];I.values[z]=i}continue}if(d==="bilinear"){const T=Math.floor(W),D=Math.ceil(W),z=W-T;for(let O=0;O<g;O++){const E=g>1?R*(p-1)+O*v:.5*(R+A)*(p-1);if(E<0||E>p-1){for(let B=0;B<h;B++){const G=B+O*y[2]+w*y[1]+C*y[0];I.values[G]=i}continue}const $=Math.floor(E),L=Math.ceil(E),P=E-$;for(let B=0;B<h;B++){let G=B+$*S[2]+T*S[1]+N*S[0];const U=k[G];G=B+L*S[2]+T*S[1]+N*S[0];const _=k[G];G=B+$*S[2]+D*S[1]+N*S[0];const Y=k[G];G=B+L*S[2]+D*S[1]+N*S[0];const X=k[G],Z=U+(_-U)*P,tt=Y+(X-Y)*P;G=B+O*y[2]+w*y[1]+C*y[0],I.values[G]=Z+(tt-Z)*z}}}else for(let T=0;T<g;++T){const D=g>1?R*(p-1)+T*v:.5*(R+A)*(p-1);if(D<0||D>p-1){for(let E=0;E<h;E++){const $=E+T*y[2]+w*y[1]+C*y[0];I.values[$]=i}continue}const z=Math.round(D),O=Math.round(W);for(let E=0;E<h;E++){const $=E+z*S[2]+O*S[1]+N*S[0],L=E+T*y[2]+w*y[1]+C*y[0];I.values[L]=k[$]}}}}return t.makeTensorInfo(I.shape,I.dtype,I.values)}const Xi={kernelName:Cs,backendName:"cpu",kernelFunc:Yi};/**
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
 */function Ki(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,exclusive:l,reverse:c}=n;q(e,"cumprod");const d=It([s],e.shape.length);let i=e;d!=null&&(i=pt({inputs:{x:e},backend:t,attrs:{perm:d}}));const r=kt(1,e.shape.length)[0];if(r!==i.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${i.shape.length-1} but got axis=${r}`);const u=Zt(i.dtype,"int32"),p=vs(j(i.shape),u),h=t.data.get(i.dataId).values,m=i.shape[i.shape.length-1],f=c?(I,x)=>I+m-x-1:(I,x)=>I+x;for(let I=0;I<h.length;I+=m)for(let x=0;x<m;x++){const b=f(I,x);if(x===0)p[b]=l?1:h[b];else{const k=f(I,x-1);p[b]=l?h[k]*p[k]:h[b]*p[k]}}const g=t.makeTensorInfo(i.shape,u,p);if(d!=null){const I=Be(d),x=pt({inputs:{x:g},backend:t,attrs:{perm:I}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(i),x}return g}const Zi={kernelName:Ns,backendName:"cpu",kernelFunc:Ki};/**
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
 */function Ji(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,exclusive:l,reverse:c}=n;q(e,"cumsum");const d=It([s],e.shape.length);let i=e;d!=null&&(i=pt({inputs:{x:e},backend:t,attrs:{perm:d}}));const r=kt(1,e.shape.length)[0];if(r!==i.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${i.shape.length-1} but got axis=${r}`);const u=Zt(i.dtype,"int32"),p=vt(j(i.shape),u),h=t.data.get(i.dataId).values,m=i.shape[i.shape.length-1],f=c?(I,x)=>I+m-x-1:(I,x)=>I+x;for(let I=0;I<h.length;I+=m)for(let x=0;x<m;x++){const b=f(I,x);if(x===0)p[b]=l?0:h[b];else{const k=f(I,x-1);p[b]=l?h[k]+p[k]:h[b]+p[k]}}const g=t.makeTensorInfo(i.shape,u,p);if(d!=null){const I=Be(d),x=pt({inputs:{x:g},backend:t,attrs:{perm:I}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(i),x}return g}const Qi={kernelName:ws,backendName:"cpu",kernelFunc:Ji};/**
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
 */function tc(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,weights:s}=a,{size:l,binaryOutput:c}=n;if(e.shape.length===1){const d=t.data.get(e.dataId).values,i=t.data.get(s.dataId).values,r=mn(d,i,s.dtype,s.shape,l);return t.makeTensorInfo([l],s.dtype,r)}else if(e.shape.length===2){const d=t.bufferSync(e),i=t.bufferSync(s),r=To(d,i,l,c);return t.makeTensorInfo(r.shape,s.dtype,r.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${e.shape.length}.`)}const ec={kernelName:Ts,backendName:"cpu",kernelFunc:tc};/**
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
 */function nc(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{blockSize:s,dataFormat:l}=n;ct(l==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${l}`);const c=e.shape[0],d=e.shape[1],i=e.shape[2],r=e.shape[3],u=d*s,p=i*s,h=r/(s*s),m=t.data.get(e.dataId).values,f=new Float32Array(c*u*p*h);let g=0;for(let I=0;I<c;++I)for(let x=0;x<u;++x){const b=Math.floor(x/s),k=x%s;for(let S=0;S<p;++S){const y=Math.floor(S/s),C=S%s,M=(k*s+C)*h;for(let V=0;V<h;++V){const H=V+M+r*(y+i*(b+d*I));f[g++]=m[H]}}}return t.makeTensorInfo([c,u,p,h],e.dtype,f)}const sc={kernelName:Ms,backendName:"cpu",kernelFunc:nc};/**
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
 */function Tn(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,filter:s}=a,{strides:l,pad:c,dilations:d,dimRoundingMode:i}=n;q([e,s],"depthwiseConv2DNative");const r=K(e.shape),u=K(s.shape);let p=d;p==null&&(p=[1,1]),ct(ae(l,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${p}'`);const h=Ot(e.shape,s.shape,l,p,c,i,!0),{filterHeight:m,filterWidth:f,dilationHeight:g,dilationWidth:I,padInfo:x}=h,b=x.left,k=x.top,S=h.outChannels/h.inChannels,y=new lt(h.outShape,e.dtype),C=t.data.get(e.dataId).values,M=t.data.get(s.dataId).values,V=y.values;for(let R=0;R<h.batchSize;++R){const H=R*r[0],A=R*y.strides[0];for(let N=0;N<h.outHeight;++N){const F=A+N*y.strides[1],v=N*h.strideHeight-k;for(let w=0;w<m;++w){const W=v+w*g;if(W<0||W>=h.inHeight)continue;const T=w*u[0],D=H+W*r[1];for(let z=0;z<h.outWidth;++z){const O=F+z*y.strides[2],E=z*h.strideWidth-b;for(let $=0;$<f;++$){const L=E+$*I;if(L<0||L>=h.inWidth)continue;const P=T+$*u[1],B=D+L*h.inChannels;let G=O,U=P;for(let _=0;_<h.inChannels;++_){const Y=C[B+_];for(let X=0;X<S;++X)V[G+X]+=Y*M[U+X];G+=S,U+=S}}}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}const ac={kernelName:Fs,backendName:"cpu",kernelFunc:Tn};/**
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
 */function oc(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,dy:s}=a,{strides:l,dilations:c,pad:d,dimRoundingMode:i,filterShape:r}=n;q([e,s],"depthwiseConv2dNativeBackpropFilter");const u=Ot(e.shape,r,l,c,d,i,!0),{strideHeight:p,strideWidth:h,filterHeight:m,filterWidth:f}=u,g=new lt(u.filterShape,"float32"),I=u.padInfo.left,x=u.padInfo.top,b=u.outChannels/u.inChannels,k=t.data.get(e.dataId).values,S=new lt(e.shape,e.dtype,k),y=t.data.get(s.dataId).values,C=new lt(s.shape,s.dtype,y);for(let M=0;M<m;++M){const V=Math.max(0,Math.ceil((x-M)/p)),R=Math.min(u.outHeight,(u.inHeight+x-M)/p);for(let H=0;H<f;++H){const A=Math.max(0,Math.ceil((I-H)/h)),N=Math.min(u.outWidth,(u.inWidth+I-H)/h);for(let F=0;F<u.outChannels;++F){const v=Math.trunc(F/b),w=F%b;let W=0;for(let T=0;T<u.batchSize;++T)for(let D=V;D<R;++D){const z=M+D*p-x;for(let O=A;O<N;++O){const E=H+O*h-I;W+=S.get(T,z,E,v)*C.get(T,D,O,F)}}g.set(W,M,H,v,w)}}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}const rc={kernelName:Rs,backendName:"cpu",kernelFunc:oc};/**
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
 */function ic(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,filter:s}=a,{strides:l,dilations:c,pad:d,dimRoundingMode:i,inputShape:r}=n;q([e,s],"depthwiseConv2DNativeBackpropInput");const u=K(e.shape),p=K(s.shape),h=Ot(r,s.shape,l,c,d,i,!0),m=new lt(h.inShape,"float32"),f=m.values,[g,I,x]=m.strides,b=t.data.get(e.dataId).values,[k,S,y]=u,C=t.data.get(s.dataId).values,[M,V,R]=p,{batchSize:H,filterHeight:A,filterWidth:N,inChannels:F,inHeight:v,inWidth:w,outChannels:W,outHeight:T,outWidth:D,strideHeight:z,strideWidth:O}=h,E=A-1-h.padInfo.top,$=N-1-h.padInfo.left,L=W/F;for(let P=0;P<H;++P)for(let B=0;B<F;++B)for(let G=0;G<v;++G){const U=G-E,_=Math.max(0,Math.ceil(U/z)),Y=Math.min(T,(A+U)/z);for(let X=0;X<w;++X){const Z=X-$,tt=Math.max(0,Math.ceil(Z/O)),ot=Math.min(D,(N+Z)/O);let et=0;for(let J=_;J<Y;++J){const at=J*z-U;for(let st=tt;st<ot;++st){const mt=st*O-Z,rt=k*P+S*J+y*st,xt=M*(A-1-at)+V*(N-1-mt)+R*B;for(let dt=0;dt<L;++dt){const wt=B*L+dt,ht=b[rt+wt],gt=C[xt+dt];et+=ht*gt}}}f[g*P+I*G+x*X+B]=et}}return t.makeTensorInfo(m.shape,m.dtype,m.values)}const cc={kernelName:Ds,backendName:"cpu",kernelFunc:ic};/**
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
 */function lc(o){const{inputs:a,backend:t}=o,{x:n}=a,e=j(n.shape),s=t.data.get(n.dataId).values,l=it([e,e],n.dtype),c=l.values;for(let i=0;i<s.length;i++)c[i*e+i]=s[i];const d=[...n.shape,...n.shape];return t.makeTensorInfo(d,l.dtype,l.values)}const dc={kernelName:Vs,backendName:"cpu",kernelFunc:lc};/**
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
 */const pc={kernelName:Ws,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:t})=>{const{x:n,filter:e}=o,{strides:s,pad:l,dilations:c}=t,d=a,i=d.data.get(n.dataId).values,r=n.shape.length,u=d.data.get(e.dataId).values,p=e.shape.length,{batchSize:h,inHeight:m,inWidth:f,inChannels:g,outHeight:I,outWidth:x,padInfo:b,strideHeight:k,strideWidth:S,filterHeight:y,filterWidth:C,dilationHeight:M,dilationWidth:V,outShape:R}=ce(n.shape,e.shape,s,l,"NHWC",c),H=j(R),A=R.length,N=le(n.dtype,H);for(let v=0;v<h;++v)for(let w=0;w<I;++w){const W=w*k-b.top;for(let T=0;T<x;++T){const D=T*S-b.left;for(let z=0;z<g;++z){let O=Number.MIN_SAFE_INTEGER;for(let $=0;$<y;++$){const L=W+$*M;if(L>=0&&L<m)for(let P=0;P<C;++P){const B=D+P*V;if(B>=0&&B<f){const G=Et([v,L,B,z],r,K(n.shape)),U=Et([$,P,z],p,K(e.shape)),_=i[G]+u[U];_>O&&(O=_)}}}const E=Et([v,w,T,z],A,K(R));N[E]=O}}}return{dataId:d.write(de(N,n.dtype),R,n.dtype),shape:R,dtype:n.dtype}}};/**
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
 */const uc={kernelName:be,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:t})=>{const{x:n,filter:e,dy:s}=o,{strides:l,pad:c,dilations:d}=t,i=a,r=Dt(n.shape,i.data.get(n.dataId).values),u=Dt(e.shape,i.data.get(e.dataId).values),{batchSize:p,inHeight:h,inWidth:m,inChannels:f,outHeight:g,outWidth:I,padInfo:x,strideHeight:b,strideWidth:k,filterHeight:S,filterWidth:y,dilationHeight:C,dilationWidth:M,outShape:V}=ce(n.shape,e.shape,l,c,"NHWC",d);ct(s.rank===V.length,()=>`Error in ${be}, dy must have the same rank as output ${V.length}, but got ${s.rank}`);const R=Dt(V,i.data.get(s.dataId).values),H=Ge(e.shape,e.dtype);for(let N=0;N<p;++N)for(let F=0;F<g;++F){const v=F*b-x.top;for(let w=0;w<I;++w){const W=w*k-x.left;for(let T=0;T<f;++T){let D=Number.MIN_SAFE_INTEGER,z=0,O=0;for(let E=0;E<S;++E){const $=v+E*C;if($>=0&&$<h)for(let L=0;L<y;++L){const P=W+L*M;if(P>=0&&P<m){const B=r[N][$][P][T]+u[E][L][T];B>D&&(D=B,z=E,O=L)}}}H[z][O][T]+=R[N][F][w][T]}}}return{dataId:i.write(de(H,n.dtype),e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};/**
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
 */const hc={kernelName:Se,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:t})=>{const{x:n,filter:e,dy:s}=o,{strides:l,pad:c,dilations:d}=t,i=a,r=Dt(n.shape,i.data.get(n.dataId).values),u=Dt(e.shape,i.data.get(e.dataId).values),{batchSize:p,inHeight:h,inWidth:m,inChannels:f,outHeight:g,outWidth:I,padInfo:x,strideHeight:b,strideWidth:k,filterHeight:S,filterWidth:y,dilationHeight:C,dilationWidth:M,outShape:V}=ce(n.shape,e.shape,l,c,"NHWC",d);ct(s.rank===V.length,()=>`Error in ${Se}, dy must have the same rank as output ${V.length}, but got ${s.rank}`);const R=Dt(V,i.data.get(s.dataId).values),H=Ge(n.shape,n.dtype);for(let N=0;N<p;++N)for(let F=0;F<g;++F){const v=F*b-x.top;for(let w=0;w<I;++w){const W=w*k-x.left;for(let T=0;T<f;++T){let D=Number.MIN_SAFE_INTEGER,z=v<0?0:v,O=W<0?0:W;for(let E=0;E<S;++E){const $=v+E*C;if($>=0&&$<h)for(let L=0;L<y;++L){const P=W+L*M;if(P>=0&&P<m){const B=r[N][$][P][T]+u[E][L][T];B>D&&(D=B,z=$,O=P)}}}H[N][z][O][T]+=R[N][F][w][T]}}}return{dataId:i.write(de(H,n.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
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
 */function fc(o){const{inputs:a,backend:t,attrs:n}=o,{image:e}=a,{canvas:s,options:l}=n,{contextOptions:c,imageOptions:d}=l||{},i=(d==null?void 0:d.alpha)||1,r=(c==null?void 0:c.contextType)||"2d";if(r!=="2d")throw new Error(`Context type ${c.contextType} is not supported by the CPU backend.`);const u=s.getContext(r,(c==null?void 0:c.contextAttributes)||{});if(u==null)throw new Error(`Could not get the context with ${r} type.`);const[p,h]=e.shape.slice(0,2),m=e.shape.length===2?1:e.shape[2],f=t.data.get(e.dataId).values,g=e.dtype==="float32"?255:1,I=new Uint8ClampedArray(h*p*4);for(let b=0;b<p*h;++b){const k=[0,0,0,255*i];for(let y=0;y<m;y++){const C=f[b*m+y];if(e.dtype==="float32"){if(C<0||C>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${C}.`)}else if(e.dtype==="int32"&&(C<0||C>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${C}.`);m===1?(k[0]=C*g,k[1]=C*g,k[2]=C*g):k[y]=C*g}const S=b*4;I[S+0]=Math.round(k[0]),I[S+1]=Math.round(k[1]),I[S+2]=Math.round(k[2]),I[S+3]=Math.round(k[3])}s.width=h,s.height=p;const x=new ImageData(I,h,p);return u.putImageData(x,0,0),e}const mc={kernelName:Hs,backendName:"cpu",kernelFunc:fc};/**
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
 */function qt(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,keepDims:l}=n;q(e,"sum");let c;e.dtype==="bool"?c=he({inputs:{x:e},backend:t,attrs:{dtype:"int32"}}):c=Ft({inputs:{x:e},backend:t});const d=c.shape.length,i=ut(s,c.shape),r=It(i,d);let u=i,p=c;r!=null&&(p=pt({inputs:{x:c},backend:t,attrs:{perm:r}}),u=kt(u.length,d)),Tt("sum",u,p.shape.length);const[h,m]=Nt(p.shape,u),f=Zt(p.dtype,"int32");let g=Mo(t,h,f);const I=j(m),x=t.data.get(g.dataId).values,b=t.data.get(p.dataId).values;for(let k=0;k<x.length;++k){const S=k*I;let y=0;for(let C=0;C<I;++C)y+=b[S+C];x[k]=y}if(l){const k=At(g.shape,i),S=g;g=nt({inputs:{x:g},backend:t,attrs:{shape:k}}),t.disposeIntermediateTensorInfo(S)}return t.disposeIntermediateTensorInfo(c),r!=null&&t.disposeIntermediateTensorInfo(p),g}const gc={kernelName:As,backendName:"cpu",kernelFunc:qt};/**
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
 */function Ic(o){const{inputs:a,backend:t,attrs:n}=o,{equation:e}=n,s=a,{allDims:l,summedDims:c,idDims:d}=zs(e,s.length);$s(l.length,d,s);const{path:i,steps:r}=Ps(c,d),u=r.length;let p=null,h=l.length;const m=[];for(let f=0;f<u;++f){for(const g of r[f]){const{permutationIndices:I,expandDims:x}=Es(h,d[g]);let b;Ls(I)?b=s[g]:(b=pt({inputs:{x:s[g]},backend:t,attrs:{perm:I}}),m.push(b));const k=b.shape.slice();for(let S=0;S<x.length;++S)k.splice(x[S],0,1);oe(b.shape,k)||(b=nt({inputs:{x:b},backend:t,attrs:{shape:k}}),m.push(b)),p===null?p=b:(p=fe({inputs:{a:b,b:p},backend:t}),m.push(p))}f<u-1&&(i[f]>=0&&(p=qt({inputs:{x:p},backend:t,attrs:{axis:i[f]-(l.length-h),keepDims:!1}}),m.push(p)),h--)}for(const f of m)f!==p&&t.disposeIntermediateTensorInfo(f);return p}const kc={kernelName:Os,backendName:"cpu",kernelFunc:Ic};/**
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
 */function xc(o){const{inputs:a,backend:t}=o,{dy:n,y:e}=a;q([n,e],"eluGrad");const s=new Float32Array(j(e.shape)),l=t.data.get(e.dataId).values,c=t.data.get(n.dataId).values;for(let d=0;d<l.length;++d){const i=l[d];i>=0?s[d]=c[d]:s[d]=c[d]*(i+1)}return t.makeTensorInfo(e.shape,"float32",s)}const bc={kernelName:Bs,backendName:"cpu",kernelFunc:xc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sc=Ys,yc=Gs,Cc=qs,Nc=_s,vc=Us,wc=js,Tc=Q(qe,o=>{const a=Math.sign(o),t=Math.abs(o),n=1/(1+Sc*t);return a*(1-((((wc*n+vc)*n+Nc)*n+Cc)*n+yc)*n*Math.exp(-t*t))}),Mc={kernelName:qe,backendName:"cpu",kernelFunc:Tc};/**
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
 */function jt(o){const{inputs:a,backend:t,attrs:n}=o,{input:e}=a,{dim:s}=n,l=e.shape.length,c=e.shape.slice();let d=s;return s<0&&(ct(-(l+1)<=s,()=>`Axis must be in the interval [${-(l+1)}, ${l}]`),d=l+s+1),c.splice(d,0,1),nt({inputs:{x:e},backend:t,attrs:{shape:c}})}const Fc={kernelName:Xs,backendName:"cpu",kernelFunc:jt};/**
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
 */const Rc=Mt((o,a)=>o/a),ge=zt(_e,Rc),ne={kernelName:_e,backendName:"cpu",kernelFunc:ge};/**
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
 */function Mn(o,a,t){const n=o.shape,e=n[0],s=n[1],l=t.data.get(o.dataId),c=l.complexTensorInfos.real,d=l.complexTensorInfos.imag,i=[e,s],r=j(i),u=Ct("float32",r),p=Ct("float32",r);for(let g=0;g<e;g++){const I=Vt({inputs:{x:c},backend:t,attrs:{begin:[g,0],size:[1,s]}}),x=Vt({inputs:{x:d},backend:t,attrs:{begin:[g,0],size:[1,s]}}),b=ft({inputs:{real:I,imag:x},backend:t}),{real:k,imag:S}=Dc(b,a,t),y=Xt(k,S);for(let C=0;C<s;C++){const M=Ue(y,C);u[g*s+C]=M.real,p[g*s+C]=M.imag}t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b)}const h=t.makeTensorInfo(i,"float32",u),m=t.makeTensorInfo(i,"float32",p),f=ft({inputs:{real:h,imag:m},backend:t});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),f}function Dc(o,a,t){const n=j(o.shape),e=t.data.get(o.dataId),s=t.data.get(e.complexTensorInfos.real.dataId).values,l=t.data.get(e.complexTensorInfos.imag.dataId).values;if(Vc(n)){const c=se(s,l,n,a,t),d=[o.shape[0],o.shape[1]];if(a){const i=t.makeTensorInfo(d,"float32",c.real),r=t.makeTensorInfo(d,"float32",c.imag),u=t.makeTensorInfo([],"float32",je(n,"float32")),p=Ft({inputs:{x:u},backend:t}),h=ne.kernelFunc({inputs:{a:i,b:u},backend:t}),m=ne.kernelFunc({inputs:{a:r,b:p},backend:t}),f=t.data.get(h.dataId).values,g=t.data.get(m.dataId).values;return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),{real:f,imag:g}}return c}else{const c=Xt(s,l),d=Wc(c,n,a);return Ks(d)}}function Vc(o){return(o&o-1)===0}function se(o,a,t,n,e){if(t===1)return{real:o,imag:a};const s=Xt(o,a),l=t/2,c=Zs(s),d=c.real,i=c.imag,r=[d.length],u=e.makeTensorInfo(r,"float32",d),p=e.makeTensorInfo(r,"float32",i),h=ft({inputs:{real:u,imag:p},backend:e}),m=Js(s),f=m.real,g=m.imag,I=[f.length],x=e.makeTensorInfo(I,"float32",f),b=e.makeTensorInfo(I,"float32",g),k=ft({inputs:{real:x,imag:b},backend:e}),S=se(d,i,l,n,e),y=S.real,C=S.imag,M=[y.length],V=e.makeTensorInfo(M,"float32",y),R=e.makeTensorInfo(M,"float32",C),H=ft({inputs:{real:V,imag:R},backend:e}),A=se(f,g,l,n,e),N=A.real,F=A.imag,v=[N.length],w=e.makeTensorInfo(v,"float32",N),W=e.makeTensorInfo(v,"float32",F),T=ft({inputs:{real:w,imag:W},backend:e}),D=Qs(t,n),z=[D.real.length],O=e.makeTensorInfo(z,"float32",D.real),E=e.makeTensorInfo(z,"float32",D.imag),$=ft({inputs:{real:O,imag:E},backend:e}),L=fe({inputs:{a:$,b:T},backend:e}),P=Lt({inputs:{a:H,b:L},backend:e}),B=gn({inputs:{a:H,b:L},backend:e}),G=Bt({inputs:{input:P},backend:e}),U=Bt({inputs:{input:B},backend:e}),_=Wt({inputs:{input:P},backend:e}),Y=Wt({inputs:{input:B},backend:e}),X=Ht({inputs:[G,U],backend:e,attrs:{axis:0}}),Z=Ht({inputs:[_,Y],backend:e,attrs:{axis:0}}),tt=e.data.get(X.dataId).values,ot=e.data.get(Z.dataId).values;return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(k),e.disposeIntermediateTensorInfo(V),e.disposeIntermediateTensorInfo(R),e.disposeIntermediateTensorInfo(H),e.disposeIntermediateTensorInfo(w),e.disposeIntermediateTensorInfo(W),e.disposeIntermediateTensorInfo(T),e.disposeIntermediateTensorInfo(O),e.disposeIntermediateTensorInfo(E),e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(L),e.disposeIntermediateTensorInfo(P),e.disposeIntermediateTensorInfo(B),e.disposeIntermediateTensorInfo(G),e.disposeIntermediateTensorInfo(_),e.disposeIntermediateTensorInfo(U),e.disposeIntermediateTensorInfo(Y),e.disposeIntermediateTensorInfo(X),e.disposeIntermediateTensorInfo(Z),{real:tt,imag:ot}}function Wc(o,a,t){const n=new Float32Array(a*2);for(let e=0;e<a;e++){let s=0,l=0;for(let c=0;c<a;c++){const d=ea(e*c,a,t),i=Ue(o,c);s+=i.real*d.real-i.imag*d.imag,l+=i.real*d.imag+i.imag*d.real}t&&(s/=a,l/=a),ta(n,s,l,e)}return n}/**
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
 */function Hc(o){const{inputs:a,backend:t}=o,{input:n}=a,e=j(n.shape),s=n.shape[n.shape.length-1],l=e/s,c=nt({inputs:{x:n},backend:t,attrs:{shape:[l,s]}}),d=Mn(c,!1,t),i=nt({inputs:{x:d},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(d),i}const Ac={kernelName:na,backendName:"cpu",kernelFunc:Hc};/**
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
 */function Ie(o){const{backend:a,attrs:t}=o,{shape:n,value:e,dtype:s}=t,l=s||aa(e),c=le(l,j(n));return zc(c,e,l),a.makeTensorInfo(n,l,c)}const Oc={kernelName:sa,backendName:"cpu",kernelFunc:Ie};function zc(o,a,t){o.fill(a)}/**
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
 */const $c={kernelName:oa,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:t})=>{const{image:n}=o,e=t,s=Ct(n.dtype,j(n.shape)),[l,c,d,i]=n.shape,r=e.data.get(n.dataId).values;for(let p=0;p<l;p++){const h=p*d*c*i;for(let m=0;m<c;m++){const f=m*(d*i);for(let g=0;g<d;g++){const I=g*i;for(let x=0;x<i;x++){const b=Math.round(d-g-1),k=h+f+I+x;let S=r[k];if(b>=0&&b<d){const y=b*i,C=h+f+y+x;S=r[C]}s[k]=S}}}}return{dataId:e.write(s,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
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
 */function Pc(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,filter:s,bias:l,preluActivationWeights:c}=a,{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p,activation:h,leakyreluAlpha:m}=n;let f=wn({inputs:{x:e,filter:s},backend:t,attrs:{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p}});if(l){const g=f;if(r==="NCHW"&&l.shape.length===1&&l.shape[0]!==1){const I=nt({inputs:{x:l},backend:t,attrs:{shape:[l.shape[0],1,1]}});f=Lt({inputs:{a:f,b:I},backend:t}),t.disposeIntermediateTensorInfo(I)}else f=Lt({inputs:{a:f,b:l},backend:t});t.disposeIntermediateTensorInfo(g)}if(h){const g=f;if(r==="NCHW"&&h==="prelu"&&c.shape.length===1&&c.shape[0]!==1){const I=nt({inputs:{x:c},backend:t,attrs:{shape:[c.shape[0],1,1]}});f=Ut(t,f,h,I,m),t.disposeIntermediateTensorInfo(I)}else f=Ut(t,f,h,c,m);t.disposeIntermediateTensorInfo(g)}return f}const Ec={kernelName:ra,backendName:"cpu",kernelFunc:Pc};/**
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
 */function Lc(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,filter:s,bias:l,preluActivationWeights:c}=a,{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p,activation:h,leakyreluAlpha:m}=n;let f=Tn({inputs:{x:e,filter:s},backend:t,attrs:{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p}});if(l){const g=f;f=Lt({inputs:{a:f,b:l},backend:t}),t.disposeIntermediateTensorInfo(g)}if(h){const g=f;f=Ut(t,f,h,c,m),t.disposeIntermediateTensorInfo(g)}return f}const Bc={kernelName:ia,backendName:"cpu",kernelFunc:Lc};/**
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
 */function Gc(o){const{inputs:a,backend:t}=o,{params:n,indices:e}=a,s=j(n.shape),l=e.shape,c=l[l.length-1],[d,i,r,u]=la(n,e);if(i===0)return t.makeTensorInfo(d,n.dtype,[]);const p=t.data.get(e.dataId).values,h=t.bufferSync(n),m=Fo(p,h,n.dtype,i,c,r,u,n.shape,s);return t.makeTensorInfo(d,n.dtype,m.values)}const qc={kernelName:ca,backendName:"cpu",kernelFunc:Gc};/**
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
 */function _c(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,indices:s}=a,{axis:l,batchDims:c}=n;q([e,s],"gatherV2");const d=ut(l,e.shape)[0],i=t.data.get(s.dataId).values,r=e.shape[d];for(let k=0;k<i.length;++k){const S=i[k];ct(S<=r-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${r-1}]`)}let u=c;c==null&&(u=0);const p=j(s.shape),h=pa(e,s,d,u),m=nt({inputs:{x:e},backend:t,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),f=nt({inputs:{x:s},backend:t,attrs:{shape:[h.batchSize,p/h.batchSize]}}),g=[h.batchSize,h.outerSize,p/h.batchSize,h.sliceSize],I=t.bufferSync(f),x=t.bufferSync(m),b=Ro(x,I,g);return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.makeTensorInfo(h.outputShape,b.dtype,b.values)}const Uc={kernelName:da,backendName:"cpu",kernelFunc:_c};/**
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
 */function jc(o){const{inputs:a,backend:t}=o,{input:n}=a,e=j(n.shape),s=n.shape[n.shape.length-1],l=e/s,c=nt({inputs:{x:n},backend:t,attrs:{shape:[l,s]}}),d=Mn(c,!0,t),i=nt({inputs:{x:d},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(d),i}const Yc={kernelName:ua,backendName:"cpu",kernelFunc:jc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xc=Q(Ye,o=>Number.isFinite(o)?1:0,"bool"),Kc={kernelName:Ye,backendName:"cpu",kernelFunc:Xc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zc=Q(Xe,o=>Math.abs(o)===1/0?1:0,"bool"),Jc={kernelName:Xe,backendName:"cpu",kernelFunc:Zc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qc=Q(Ke,o=>Number.isNaN(o)?1:0,"bool"),tl={kernelName:Ke,backendName:"cpu",kernelFunc:Qc};/**
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
 */function el(o){const{backend:a,attrs:t}=o,{start:n,stop:e,num:s}=t,l=Do(n,e,s);return a.makeTensorInfo([l.length],"float32",l)}const nl={kernelName:ha,backendName:"cpu",kernelFunc:el};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sl=Q(Ze,o=>Math.log1p(o)),al={kernelName:Ze,backendName:"cpu",kernelFunc:sl};/**
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
 */const ol=Mt((o,a)=>o&&a),rl=zt(Je,ol,null,"bool"),il={kernelName:Je,backendName:"cpu",kernelFunc:rl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=Q(Qe,o=>o?0:1,"bool"),ll={kernelName:Qe,backendName:"cpu",kernelFunc:cl};/**
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
 */const dl=Mt((o,a)=>o||a),pl=zt(tn,dl,null,"bool"),ul={kernelName:tn,backendName:"cpu",kernelFunc:pl};/**
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
 */function hl(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{depthRadius:s,bias:l,alpha:c,beta:d}=n;q(e,"LRN");const i=e.shape[3],r=i-1,u=t.data.get(e.dataId).values,p=j(e.shape),h=new Float32Array(p);function m(f){const g=f%i;let I=f-g+Math.max(0,g-s);const x=f-g+Math.min(g+s,r);let b=0;for(;I<=x;I++){const k=u[I];b+=k*k}return b}for(let f=0;f<p;f++){const g=m(f),I=u[f]*Math.pow(l+c*g,-d);h[f]=I}return t.makeTensorInfo(e.shape,e.dtype,h)}const fl={kernelName:fa,backendName:"cpu",kernelFunc:hl};/**
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
 */function ml(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,y:s,dy:l}=a,{depthRadius:c,bias:d,alpha:i,beta:r}=n;q(l,"LRNGrad");const u=j(l.shape),p=l.shape[3],h=t.data.get(l.dataId).values,m=t.data.get(e.dataId).values,f=t.data.get(s.dataId).values,g=new Float32Array(u),I=u;for(let x=0;x<I;x++){const b=x%p,k=x-b+Math.max(0,b-c),S=x-b+Math.min(p,b+c+1);let y=0;for(let C=k;C<S;C++)y+=Math.pow(m[C],2);y=i*y+d;for(let C=k;C<S;C++){let M=-2*i*r*m[C]*f[x]/y;x===C&&(M+=Math.pow(y,-r)),M*=h[x],g[C]+=M}}return t.makeTensorInfo(l.shape,e.dtype,g)}const gl={kernelName:ma,backendName:"cpu",kernelFunc:ml};/**
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
 */function Fn(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{reductionIndices:s,keepDims:l}=n,c=t;let d=e.shape;const i=d.length,r=ut(s,d);let u=r;const p=It(u,i);let h=c.data.get(e.dataId).values;if(p!=null){const k=new Array(i);for(let S=0;S<k.length;S++)k[S]=d[p[S]];h=Vo(h,d,e.dtype,p,k),u=kt(u.length,i),d=k}q(e,"max"),Tt("max",u,i);const[m,f]=Nt(d,u),g=j(f),I=Wo(h,g,m,e.dtype),x=c.write(I,m,e.dtype);let b=m;return l&&(b=At(m,r)),{dataId:x,shape:b,dtype:e.dtype}}const Il={kernelName:ga,backendName:"cpu",kernelFunc:Fn};/**
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
 */function kl(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a;q(e,"maxPool");const{filterSize:s,strides:l,pad:c,dimRoundingMode:d}=n,i=1;ct(ae(l,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${i}'`);const r=Gt(e.shape,s,l,i,c,d);let u;if(r.filterWidth===1&&r.filterHeight===1&&oe(r.inShape,r.outShape))u=Ft({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,h=K(e.shape),m=me(p,e.shape,e.dtype,h,r,"max");u=t.makeTensorInfo(r.outShape,e.dtype,m.values)}return u}const xl={kernelName:Ia,backendName:"cpu",kernelFunc:kl};/**
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
 */function bl(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{filterSize:s,strides:l,pad:c,dimRoundingMode:d,dataFormat:i}=n;q(e,"maxPool3d");const r=Kt(e.shape,s,l,1,c,d,i),u=t.data.get(e.dataId).values,p=vn(u,e.shape,e.dtype,K(e.shape),r,"max");return t.makeTensorInfo(p.shape,"float32",p.values)}const Sl={kernelName:ka,backendName:"cpu",kernelFunc:bl};/**
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
 */function yl(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,input:s}=a,{filterSize:l,strides:c,pad:d,dimRoundingMode:i}=n;q([e,s],"maxPool3DGrad");const r=Kt(s.shape,l,c,1,d,i),u=t.bufferSync(s),p=di(u,r),h=r.strideDepth,m=r.strideHeight,f=r.strideWidth,g=r.dilationDepth,I=r.dilationHeight,x=r.dilationWidth,b=r.effectiveFilterDepth,k=r.effectiveFilterHeight,S=r.effectiveFilterWidth,y=b-1-r.padInfo.front,C=S-1-r.padInfo.left,M=k-1-r.padInfo.top,V=it(s.shape,"float32"),R=t.bufferSync(e);for(let H=0;H<r.batchSize;++H)for(let A=0;A<r.inChannels;++A)for(let N=0;N<r.inDepth;++N)for(let F=0;F<r.inHeight;++F)for(let v=0;v<r.inWidth;++v){const w=N-y,W=F-M,T=v-C;let D=0;for(let z=0;z<b;z+=g){const O=(w+z)/h;if(!(O<0||O>=r.outDepth||Math.floor(O)!==O))for(let E=0;E<k;E+=I){const $=(W+E)/m;if(!($<0||$>=r.outHeight||Math.floor($)!==$))for(let L=0;L<S;L+=x){const P=(T+L)/f;if(P<0||P>=r.outWidth||Math.floor(P)!==P)continue;const B=b*k*S-1-p.get(H,O,$,P,A),G=z*k*S+E*S+L,U=B===G?1:0;if(U===0)continue;const _=R.get(H,O,$,P,A);D+=_*U}}}V.set(D,H,N,F,v,A)}return t.makeTensorInfo(V.shape,V.dtype,V.values)}const Cl={kernelName:xa,backendName:"cpu",kernelFunc:yl};/**
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
 */function Nl(o){const{inputs:a,backend:t,attrs:n}=o,{dy:e,input:s,output:l}=a,c=s;q([s,l],"maxPoolGrad");const{filterSize:d,strides:i,pad:r,dimRoundingMode:u}=n,p=Gt(c.shape,d,i,1,r,u),h=t.data.get(c.dataId).values,m=it(p.outShape,c.dtype,Nn(h,c.shape,c.dtype,p).values),f=p.strideHeight,g=p.strideWidth,I=p.dilationHeight,x=p.dilationWidth,b=p.effectiveFilterHeight,k=p.effectiveFilterWidth,S=k-1-p.padInfo.left,y=b-1-p.padInfo.top,C=it(c.shape,"float32"),M=t.data.get(e.dataId).values,V=it(e.shape,"float32",M);for(let R=0;R<p.batchSize;++R)for(let H=0;H<p.inChannels;++H)for(let A=0;A<p.inHeight;++A)for(let N=0;N<p.inWidth;++N){const F=A-y,v=N-S;let w=0;for(let W=0;W<b;W+=I){const T=(F+W)/f;if(!(T<0||T>=p.outHeight||Math.floor(T)!==T))for(let D=0;D<k;D+=x){const z=(v+D)/g;if(z<0||z>=p.outWidth||Math.floor(z)!==z)continue;const O=b*k-1-m.get(R,T,z,H),E=W*k+D,$=O===E?1:0;if($===0)continue;const L=V.get(R,T,z,H);w+=L*$}}C.set(w,R,A,N,H)}return t.makeTensorInfo(C.shape,C.dtype,C.values)}const vl={kernelName:ba,backendName:"cpu",kernelFunc:Nl};/**
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
 */function wl(o,a,t,n,e){const s=K(a),l=me(o,a,t,s,e,"max"),c=Nn(o,a,t,e,!0,n);return[l.values,c.values]}/**
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
 */const Tl={kernelName:Sa,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:t})=>{const{x:n}=o,{filterSize:e,strides:s,pad:l,includeBatchInIndex:c}=a,d=t;q(n,"MaxPoolWithArgmax");const i=d.data.get(n.dataId).values,r=Gt(n.shape,e,s,[1,1],l),[u,p]=wl(i,n.shape,n.dtype,c,r),h=d.write(u,r.outShape,n.dtype),m=d.write(p,r.outShape,n.dtype);return[{dataId:h,shape:r.outShape,dtype:n.dtype},{dataId:m,shape:r.outShape,dtype:"int32"}]}};/**
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
 */function Ml(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,keepDims:l}=n,c=ut(s,e.shape),i=Nt(e.shape,c)[1],r=j(i),u=[],p=t.makeTensorInfo([],"float32",new Float32Array([r]));u.push(p);const h=he({inputs:{x:e},backend:t,attrs:{dtype:"float32"}});u.push(h);const m=ge({inputs:{a:h,b:p},backend:t});u.push(m);const f=qt({inputs:{x:m},backend:t,attrs:{axis:s,keepDims:l}});return u.forEach(g=>t.disposeIntermediateTensorInfo(g)),f}const Fl={kernelName:ya,backendName:"cpu",kernelFunc:Ml};/**
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
 */function Rl(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{axis:s,keepDims:l}=n;q(e,"min");const c=ut(s,e.shape);let d=c;const i=It(d,e.shape.length);let r=e;i!=null&&(r=pt({inputs:{x:e},backend:t,attrs:{perm:i}}),d=kt(d.length,e.shape.length)),Tt("min",d,r.shape.length);const[u,p]=Nt(r.shape,d),h=j(p),m=vt(j(u),r.dtype),f=t.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*h;let b=f[x];for(let k=0;k<h;++k){const S=f[x+k];(Number.isNaN(S)||S<b)&&(b=S)}m[I]=b}i!=null&&t.disposeIntermediateTensorInfo(r);const g=t.makeTensorInfo(u,r.dtype,m);if(l){const I=At(u,c),x=nt({inputs:{x:g},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(g),x}return g}const Dl={kernelName:Ca,backendName:"cpu",kernelFunc:Rl};/**
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
 */function Vl(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{paddings:s,mode:l}=n;q(e,"mirrorPad");const c=s.map((b,k)=>b[0]+e.shape[k]+b[1]),d=s.map(b=>b[0]),i=s.map((b,k)=>b[0]+e.shape[k]),r=l==="reflect"?0:1,u=t.data.get(e.dataId).values,p=e.shape.length,h=K(e.shape),m=j(c),f=c.length,g=K(c),I=Ct(e.dtype,m);for(let b=0;b<m;b++){let k=en(b,f,g);for(let y=0;y<f;y++)k[y]<d[y]?k[y]=d[y]*2-k[y]-r:k[y]>=i[y]&&(k[y]=(i[y]-1)*2-k[y]+r);k=k.map((y,C)=>y-d[C]);const S=Et(k,p,h);I[b]=u[S]}return{dataId:t.write(I,c,e.dtype),shape:c,dtype:e.dtype}}const Wl={kernelName:Na,backendName:"cpu",kernelFunc:Vl};/**
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
 */const Hl=Mt((o,a)=>{const t=o%a;return o<0&&a<0||o>=0&&a>=0?t:(t+a)%a}),Al=zt(nn,Hl),Ol={kernelName:nn,backendName:"cpu",kernelFunc:Al};/**
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
 */function Rn(o){const{inputs:a,backend:t,attrs:n}=o,{logits:e}=a,{dim:s}=n,l=e.shape.length;let c=s;if(c===-1&&(c=l-1),c!==l-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${l} and dim was ${c}`);const d=ut([c],e.shape),i=Fn({inputs:{x:e},backend:t,attrs:{reductionIndices:d,keepDims:!1}}),r=At(i.shape,d),u=nt({inputs:{x:i},backend:t,attrs:{shape:r}}),p=gn({inputs:{a:e,b:u},backend:t}),h=Ho({inputs:{x:p},backend:t}),m=qt({inputs:{x:h},backend:t,attrs:{axis:d,keepDims:!1}}),f=nt({inputs:{x:m},backend:t,attrs:{shape:r}}),g=ge({inputs:{a:h,b:f},backend:t});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),g}const zl={kernelName:va,backendName:"cpu",kernelFunc:Rn};/**
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
 */function $l(o){const{inputs:a,backend:t,attrs:n}=o,{logits:e}=a,{numSamples:s,seed:l,normalized:c}=n;q(e,"multinomial");const d=c?e:Rn({inputs:{logits:e},backend:t,attrs:{dim:-1}}),i=d.shape[0],r=d.shape[1],u=t.data.get(d.dataId).values,p=[i,s],h=vt(j(p),"int32");for(let m=0;m<i;++m){const f=m*r,g=new Float32Array(r-1);g[0]=u[f];for(let b=1;b<g.length;++b)g[b]=g[b-1]+u[f+b];const I=Tr.alea(l.toString()),x=m*s;for(let b=0;b<s;++b){const k=I();h[x+b]=g.length;for(let S=0;S<g.length;S++)if(k<g[S]){h[x+b]=S;break}}}return c||t.disposeIntermediateTensorInfo(d),t.makeTensorInfo(p,"int32",h)}const Pl={kernelName:wa,backendName:"cpu",kernelFunc:$l};/**
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
 */const El=Ma;function Ll(o){const{inputs:a,backend:t,attrs:n}=o,{boxes:e,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d}=n;q(e,"NonMaxSuppression");const i=t.data.get(e.dataId).values,r=t.data.get(s.dataId).values,{selectedIndices:u}=El(i,r,l,c,d);return t.makeTensorInfo([u.length],"int32",new Int32Array(u))}const Bl={kernelName:Ta,backendName:"cpu",kernelFunc:Ll};/**
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
 */const Gl=Ra;function ql(o){const{inputs:a,backend:t,attrs:n}=o,{boxes:e,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d,padToMaxOutputSize:i}=n;q(e,"NonMaxSuppressionPadded");const r=t.data.get(e.dataId).values,u=t.data.get(s.dataId).values,{selectedIndices:p,validOutputs:h}=Gl(r,u,l,c,d,i);return[t.makeTensorInfo([p.length],"int32",new Int32Array(p)),t.makeTensorInfo([],"int32",new Int32Array([h]))]}const _l={kernelName:Fa,backendName:"cpu",kernelFunc:ql};/**
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
 */const Ul=Va;function jl(o){const{inputs:a,backend:t,attrs:n}=o,{boxes:e,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d,softNmsSigma:i}=n;q(e,"NonMaxSuppressionWithScore");const r=t.data.get(e.dataId).values,u=t.data.get(s.dataId).values,p=l,h=c,m=d,f=i,{selectedIndices:g,selectedScores:I}=Ul(r,u,p,h,m,f);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([I.length],"float32",new Float32Array(I))]}const Yl={kernelName:Da,backendName:"cpu",kernelFunc:jl};/**
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
 */function Xl(o){const{inputs:a,backend:t,attrs:n}=o,{indices:e}=a,{dtype:s,depth:l,onValue:c,offValue:d}=n;q(e,"oneHot");const i=j(e.shape),r=new Float32Array(i*l);r.fill(d);const u=t.data.get(e.dataId).values;for(let p=0;p<i;++p)u[p]>=0&&u[p]<l&&(r[p*l+u[p]]=c);return t.makeTensorInfo([...e.shape,l],s,r)}const Kl={kernelName:Wa,backendName:"cpu",kernelFunc:Xl};/**
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
 */function Yt(o){const{inputs:a,backend:t}=o,{x:n}=a;if(n.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Bt({inputs:{input:n},backend:t}),s=Yt({inputs:{x:e},backend:t}),l=Wt({inputs:{input:n},backend:t}),c=Yt({inputs:{x:l},backend:t}),d=ft({inputs:{real:s,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),d}else return Ie({backend:t,attrs:{shape:n.shape,value:0,dtype:n.dtype}})}const Zl={kernelName:Ha,backendName:"cpu",kernelFunc:Yt};/**
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
 */function Dn(o){const{inputs:a,backend:t}=o,{x:n}=a;if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Bt({inputs:{input:n},backend:t}),s=Dn({inputs:{x:e},backend:t}),l=Wt({inputs:{input:n},backend:t}),c=Yt({inputs:{x:l},backend:t}),d=ft({inputs:{real:s,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),d}else return Ie({backend:t,attrs:{shape:n.shape,value:1,dtype:n.dtype}})}const Jl={kernelName:Aa,backendName:"cpu",kernelFunc:Dn};/**
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
 */function Vn(o){const{inputs:a,backend:t,attrs:n}=o,{axis:e}=n;if(a.length===1)return jt({inputs:{input:a[0]},backend:t,attrs:{dim:e}});const s=a[0].shape,l=a[0].dtype;a.forEach(r=>{za(s,r.shape,"All tensors passed to stack must have matching shapes"),ct(l===r.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],d=a.map(r=>{const u=jt({inputs:{input:r},backend:t,attrs:{dim:e}});return c.push(u),u}),i=Ht({inputs:d,backend:t,attrs:{axis:e}});return c.forEach(r=>t.disposeIntermediateTensorInfo(r)),i}const Ql={kernelName:Oa,backendName:"cpu",kernelFunc:Vn};/**
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
 */function td(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{paddings:s,constantValue:l}=n;q(e,"pad");const c=s.map((x,b)=>x[0]+e.shape[b]+x[1]),d=s.map(x=>x[0]),i=t.data.get(e.dataId).values,r=j(e.shape),u=e.shape.length,p=K(e.shape),h=j(c),m=c.length,f=K(c),g=Ct(e.dtype,h);l!==0&&g.fill(l);for(let x=0;x<r;x++){const k=en(x,u,p).map((y,C)=>y+d[C]),S=Et(k,m,f);g[S]=i[x]}return{dataId:t.write(g,c,e.dtype),shape:c,dtype:e.dtype}}const Wn={kernelName:$a,backendName:"cpu",kernelFunc:td};/**
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
 */const ed=Mt((o,a)=>Math.pow(o,a)),nd=zt(sn,ed),sd={kernelName:sn,backendName:"cpu",kernelFunc:nd};/**
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
 */function ad(o){const{inputs:a,backend:t,attrs:n}=o,{paramsNestedSplits:e,paramsDenseValues:s,indices:l}=a,c=e.map(g=>t.data.get(g.dataId).values),d=e.map(g=>g.shape),i=t.data.get(s.dataId).values,r=t.data.get(l.dataId).values,[u,p,h]=Ao(c,d,i,s.shape,s.dtype,r,l.shape),m=u.map(g=>t.makeTensorInfo([g.length],"int32",g)),f=t.makeTensorInfo(h,s.dtype,p);return m.concat([f])}const od={kernelName:Pa,backendName:"cpu",kernelFunc:ad};/**
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
 */function rd(o){const{inputs:a,backend:t}=o,{starts:n,limits:e,deltas:s}=a,l=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,d=t.data.get(s.dataId).values,[i,r]=Oo(l,n.shape,n.dtype,c,e.shape,d,s.shape),u=t.makeTensorInfo([i.length],"int32",i),p=t.makeTensorInfo([r.length],n.dtype,r);return[u,p]}const id={kernelName:Ea,backendName:"cpu",kernelFunc:rd};/**
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
 */function cd(o){const{inputs:a,backend:t,attrs:n}=o,{shape:e,values:s,defaultValue:l,rowPartitionTensors:c}=a,{rowPartitionTypes:d}=n,i=t.data.get(e.dataId).values,r=t.data.get(s.dataId).values,u=t.data.get(l.dataId).values,p=c.map(g=>t.data.get(g.dataId).values),h=c.map(g=>g.shape),[m,f]=zo(i,e.shape,r,s.shape,s.dtype,u,l.shape,p,h,d);return t.makeTensorInfo(m,s.dtype,f)}const ld={kernelName:La,backendName:"cpu",kernelFunc:cd};/**
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
 */function dd(o){const{backend:a,attrs:t}=o,{start:n,stop:e,dtype:s,step:l}=t,c=$o(n,e,l,s);return a.makeTensorInfo([c.length],s,c)}const pd={kernelName:Ba,backendName:"cpu",kernelFunc:dd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ud=Q(an,o=>1/o),hd={kernelName:an,backendName:"cpu",kernelFunc:ud};/**
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
 */function fd(o){const{inputs:a,backend:t,attrs:n}=o,{images:e}=a,{alignCorners:s,halfPixelCenters:l,size:c}=n;q(e,"resizeBilinear");const d=K(e.shape),[i,r]=c,[u,p,h,m]=e.shape,f=t.data.get(e.dataId).values,g=new Float32Array(j([u,i,r,m])),I=[s&&i>1?p-1:p,s&&r>1?h-1:h],x=[s&&i>1?i-1:i,s&&r>1?r-1:r];let b=0;const k=I[0]/x[0],S=I[1]/x[1];for(let y=0;y<u;y++)for(let C=0;C<i;C++){let M;l?M=k*(C+.5)-.5:M=k*C;const V=Math.max(0,Math.floor(M)),R=M-V,H=Math.min(p-1,Math.ceil(M)),A=y*d[0]+V*d[1],N=y*d[0]+H*d[1];for(let F=0;F<r;F++){let v;l?v=S*(F+.5)-.5:v=S*F;const w=Math.max(0,Math.floor(v)),W=v-w,T=Math.min(h-1,Math.ceil(v)),D=A+w*d[2],z=N+w*d[2],O=A+T*d[2],E=N+T*d[2];for(let $=0;$<m;$++){const L=f[D+$],P=f[z+$],B=f[O+$],G=f[E+$],U=L+(B-L)*W,_=P+(G-P)*W,Y=U+(_-U)*R;g[b++]=Y}}}return t.makeTensorInfo([u,i,r,m],"float32",g)}const md={kernelName:Ga,backendName:"cpu",kernelFunc:fd};/**
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
 */function gd(o){const{inputs:a,backend:t,attrs:n}=o,{images:e,dy:s}=a,{alignCorners:l}=n;q([s,e],"resizeBilinearGrad");const c=K(e.shape),[d,i,r,u]=e.shape,[,p,h]=s.shape,m=new Float32Array(d*i*r*u),f=[l&&p>1?i-1:i,l&&h>1?r-1:r],g=[l&&p>1?p-1:p,l&&h>1?h-1:h],I=f[0]/g[0],x=f[1]/g[1],b=t.data.get(s.dataId).values;let k=0;for(let S=0;S<d;S++){const y=S*c[0];for(let C=0;C<p;C++){const M=C*I,V=Math.floor(M),R=Math.min(Math.ceil(M),i-1),H=y+V*c[1],A=y+R*c[1],N=M-V,F=1-N;for(let v=0;v<h;v++){const w=v*x,W=Math.floor(w),T=Math.min(Math.ceil(w),r-1),D=w-W,z=1-D,O=H+W*c[2],E=H+T*c[2],$=A+W*c[2],L=A+T*c[2],P=F*z,B=F*D,G=N*z,U=N*D;for(let _=0;_<u;_++){const Y=b[k++];m[O+_]+=Y*P,m[E+_]+=Y*B,m[$+_]+=Y*G,m[L+_]+=Y*U}}}}return t.makeTensorInfo([d,r,i,u],"float32",m)}const Id={kernelName:qa,backendName:"cpu",kernelFunc:gd};/**
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
 */function kd(o){const{inputs:a,backend:t,attrs:n}=o,{images:e}=a,{alignCorners:s,halfPixelCenters:l,size:c}=n;q(e,"resizeNearestNeighbor");const d=K(e.shape),[i,r]=c,[u,p,h,m]=e.shape,f=t.data.get(e.dataId).values,g=new Float32Array(u*i*r*m),I=[s&&i>1?p-1:p,s&&r>1?h-1:h],x=[s&&i>1?i-1:i,s&&r>1?r-1:r],b=I[0]/x[0],k=I[1]/x[1];let S=0;for(let y=0;y<u;y++){const C=y*d[0];for(let M=0;M<i;M++){const V=l?b*(M+.5):b*M;let R=Math.min(p-1,s?Math.round(V):Math.floor(V));l&&(R=Math.max(0,R));const H=C+R*d[1];for(let A=0;A<r;A++){const N=l?k*(A+.5):k*A;let F=Math.min(h-1,s?Math.round(N):Math.floor(N));l&&(F=Math.max(0,F));const v=H+F*d[2];for(let w=0;w<m;w++){const W=f[v+w];g[S++]=W}}}}return t.makeTensorInfo([u,i,r,m],e.dtype,g)}const xd={kernelName:_a,backendName:"cpu",kernelFunc:kd};/**
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
 */function bd(o){const{inputs:a,backend:t,attrs:n}=o,{images:e,dy:s}=a,{alignCorners:l}=n;q([s,e],"resizeNearestNeighborGrad");const c=K(e.shape),d=K(s.shape),[i,r,u,p]=e.shape,[,h,m]=s.shape,f=new Float32Array(i*r*u*p),g=t.data.get(s.dataId).values,I=[l&&h>1?r-1:r,l&&m>1?u-1:u],x=[l&&h>1?h-1:h,l&&m>1?m-1:m],b=I[0]/x[0],k=I[1]/x[1],S=1/b,y=1/k,C=Math.ceil(S)*2+2,M=Math.ceil(y)*2+2;for(let V=0;V<i;V++){const R=V*c[0];for(let H=0;H<r;H++){const A=R+H*c[1],N=Math.floor(H*S),F=Math.floor(N-C/2);for(let v=0;v<u;v++){const w=A+v*c[2],W=Math.floor(v*y),T=Math.floor(W-M/2);for(let D=0;D<p;D++){let z=0;for(let O=0;O<C;O++){const E=O+F;if(E<0||E>=h)continue;const $=R+E*d[1],L=E*b,P=Math.min(r-1,l?Math.round(L):Math.floor(L));if(H===P)for(let B=0;B<M;B++){const G=B+T;if(G<0||G>=m)continue;const U=$+G*d[2],_=G*k,Y=Math.min(u-1,l?Math.round(_):Math.floor(_));v===Y&&(z+=g[U+D])}}f[w+D]=z}}}}return t.makeTensorInfo(e.shape,e.dtype,f)}const Sd={kernelName:Ua,backendName:"cpu",kernelFunc:bd};/**
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
 */function yd(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{dims:s}=n;q(e,"reverse");const l=e.shape.length,c=ut(s,e.shape);if(l===0)return Ft({inputs:{x:e},backend:t});const d=new lt(e.shape,e.dtype),i=t.bufferSync(e);for(let r=0;r<d.size;r++){const u=d.indexToLoc(r),p=u.slice();c.forEach(h=>p[h]=e.shape[h]-1-p[h]),d.set(i.get(...p),...u)}return t.makeTensorInfo(d.shape,d.dtype,d.values)}const Cd={kernelName:ja,backendName:"cpu",kernelFunc:yd};/**
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
 */const Nd={kernelName:Ya,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:t})=>{const{image:n}=o,{radians:e,fillValue:s,center:l}=a,c=t,d=Ct(n.dtype,j(n.shape)),[i,r,u,p]=n.shape,[h,m]=Xa(l,r,u),f=255,g=Math.sin(e),I=Math.cos(e),x=c.data.get(n.dataId).values;for(let k=0;k<i;k++){const S=k*u*r*p;for(let y=0;y<r;y++){const C=y*(u*p);for(let M=0;M<u;M++){const V=M*p;for(let R=0;R<p;R++){const H=[i,y,M,R],A=H[2],N=H[1];let F=(A-h)*I-(N-m)*g,v=(A-h)*g+(N-m)*I;F=Math.round(F+h),v=Math.round(v+m);let w=s;if(typeof s!="number"&&(R===3?w=f:w=s[R]),F>=0&&F<u&&v>=0&&v<r){const T=v*(u*p),D=F*p,z=S+T+D+R;w=x[z]}const W=S+C+V+R;d[W]=w}}}}return{dataId:c.write(d,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vd=Q(on,o=>{const a=Math.floor(o);return o-a<.5?Math.floor(o):o-a>.5?Math.ceil(o):a%2===0?a:a+1}),wd={kernelName:on,backendName:"cpu",kernelFunc:vd};/**
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
 */function Td(o){const{inputs:a,backend:t,attrs:n}=o,{indices:e,updates:s}=a,{shape:l}=n,{sliceRank:c,numUpdates:d,sliceSize:i,strides:r,outputSize:u}=pe(s,e,l),p=!0,h=t.bufferSync(e),m=t.bufferSync(s),f=Rt(h,m,l,u,i,d,c,r,0,p);return t.makeTensorInfo(l,f.dtype,f.values)}const Md={kernelName:Ka,backendName:"cpu",kernelFunc:Td};/**
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
 */function Fd(o,a){let t=0,n=o.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),o[e]<a?t=e+1:n=e;return n}function Rd(o,a){let t=0,n=o.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),o[e]<=a?t=e+1:n=e;return n}function Dd(o,a,t,n,e,s){const l=le("int32",t*e);for(let c=0;c<t;++c){const d=o.slice(c*n,(c+1)*n),i=c*e;for(let r=0;r<e;++r)l[i+r]=s==="left"?Fd(d,a[r+i]):Rd(d,a[r+i])}return l}/**
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
 */function Vd(o){const{inputs:a,backend:t,attrs:n}=o,{sortedSequence:e,values:s}=a,{side:l}=n,c=t.data.get(e.dataId).values,d=t.data.get(s.dataId).values,i=Dd(c,d,e.shape[0],e.shape[1],s.shape[1],l);return t.makeTensorInfo(s.shape,"int32",i)}const Wd={kernelName:Za,backendName:"cpu",kernelFunc:Vd};/**
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
 */function Hd(o){const{inputs:a,backend:t}=o,{condition:n,t:e,e:s}=a;q([n,e,s],"select");const l=n.shape.length,c=t.data.get(n.dataId).values,d=t.data.get(e.dataId).values,i=t.data.get(s.dataId).values,r=Zt(e.dtype,s.dtype),u=vt(j(e.shape),r);let p=0;const h=l===0||l>1||e.shape.length===1?1:j(e.shape.slice(1));for(let m=0;m<c.length;m++)for(let f=0;f<h;f++)c[m]===1?u[p++]=d[m]:u[p++]=i[m];return t.makeTensorInfo(e.shape,r,u)}const Ad={kernelName:Ja,backendName:"cpu",kernelFunc:Hd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Od=Qa,zd=to,$d=Q(rn,o=>o>=0?zd*o:Od*(Math.exp(o)-1)),Pd={kernelName:rn,backendName:"cpu",kernelFunc:$d};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ed=Q(cn,o=>o<0?-1:o>0?1:0),Ld={kernelName:cn,backendName:"cpu",kernelFunc:Ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bd=Q(ln,o=>Math.sin(o)),Gd={kernelName:ln,backendName:"cpu",kernelFunc:Bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qd=Q(dn,o=>Math.sinh(o)),_d={kernelName:dn,backendName:"cpu",kernelFunc:qd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ud=11920928955078125e-23,ye=Math.log(Ud)+2,jd=Q(pn,o=>{const a=o>-ye,t=o<ye,n=Math.exp(o);let e;return t?e=n:a?e=o:e=Math.log(1+n),e}),Yd={kernelName:pn,backendName:"cpu",kernelFunc:jd};/**
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
 */function Xd(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{blockShape:s,paddings:l}=n;q([e],"spaceToBatchND");const c=j(s),d=[[0,0]];d.push(...l);for(let y=1+s.length;y<e.shape.length;++y)d.push([0,0]);const i=Wn.kernelFunc({inputs:{x:e},backend:t,attrs:{paddings:d,constantValue:0}}),r=Oe(i.shape,s,c,!1),u=ze(r.length,s.length,!1),p=$e(i.shape,s,c,!1),f=nt({inputs:{x:i},backend:t,attrs:{shape:r}}),x=pt({inputs:{x:f},backend:t,attrs:{perm:u}}),S=nt({inputs:{x},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),S}const Kd={kernelName:eo,backendName:"cpu",kernelFunc:Xd};/**
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
 */function Zd(o){const{inputs:a,backend:t}=o,{indices:n,values:e,denseShape:s,defaultValue:l}=a;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${s.shape}`);if(n.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${e.shape}`);if(l.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${l.shape}`);const c=t.data.get(n.dataId).values,d=t.data.get(e.dataId).values,i=t.data.get(s.dataId).values,r=t.data.get(l.dataId).values[0],[u,p,h,m,f]=Po(c,n.shape,n.dtype,d,e.dtype,i,r);return[t.makeTensorInfo(p,n.dtype,u),t.makeTensorInfo([p[0]],e.dtype,h),t.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(g=>Number(g)))),t.makeTensorInfo([f.length],n.dtype,new Int32Array(f))]}const Jd={kernelName:no,backendName:"cpu",kernelFunc:Zd};/**
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
 */function Qd(o){const{inputs:a,backend:t}=o,{inputIndices:n,inputShape:e,newShape:s}=a;if(n.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${e.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const l=Array.from(t.data.get(e.dataId).values),c=t.data.get(n.dataId).values,d=Array.from(t.data.get(s.dataId).values),[i,r,u]=Eo(c,n.shape,n.dtype,l,d);return[t.makeTensorInfo(r,n.dtype,i),t.makeTensorInfo([u.length],s.dtype,new Int32Array(u))]}const tp={kernelName:so,backendName:"cpu",kernelFunc:Qd};/**
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
 */function ep(o){const{inputs:a,backend:t}=o,{data:n,indices:e,segmentIds:s}=a;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${e.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(e.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const l=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,d=t.data.get(s.dataId).values,[i,r]=In(l,n.shape,n.dtype,c,d,!0);return t.makeTensorInfo(r,n.dtype,i)}const np={kernelName:ao,backendName:"cpu",kernelFunc:ep};/**
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
 */function sp(o){const{inputs:a,backend:t}=o,{data:n,indices:e,segmentIds:s}=a;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${e.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(e.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const l=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,d=t.data.get(s.dataId).values,[i,r]=In(l,n.shape,n.dtype,c,d);return t.makeTensorInfo(r,n.dtype,i)}const ap={kernelName:oo,backendName:"cpu",kernelFunc:sp};/**
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
 */function op(o){const{inputs:a,backend:t,attrs:n}=o,{sparseIndices:e,sparseValues:s,defaultValue:l}=a,{outputShape:c}=n,{sliceRank:d,numUpdates:i,sliceSize:r,strides:u,outputSize:p}=pe(s,e,c),h=!1,m=t.bufferSync(e);let f;switch(s.dtype){case"bool":{const g=t.bufferSync(s),I=!!t.data.get(l.dataId).values[0];f=Rt(m,g,c,p,r,i,d,u,I,h);break}case"float32":{const g=t.bufferSync(s),I=t.data.get(l.dataId).values[0];f=Rt(m,g,c,p,r,i,d,u,I,h);break}case"int32":{const g=t.bufferSync(s),I=t.data.get(l.dataId).values[0];f=Rt(m,g,c,p,r,i,d,u,I,h);break}case"string":{const g=t.bufferSync(s),I=Ne(t.data.get(l.dataId).values[0]);f=Rt(m,g,c,p,r,i,d,u,I,h);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return t.makeTensorInfo(c,f.dtype,f.values)}const rp={kernelName:ro,backendName:"cpu",kernelFunc:op};/**
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
 */function ip(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{numOrSizeSplits:s,axis:l}=n,c=ut(l,e.shape)[0],d=co(e,s,c),i=new Array(e.shape.length).fill(0),r=e.shape.slice();return d.map(u=>{const p=[...r];p[c]=u;const h=Vt({inputs:{x:e},backend:t,attrs:{begin:i,size:p}});return i[c]+=u,h})}const cp={kernelName:io,backendName:"cpu",kernelFunc:ip};/**
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
 */const lp={kernelName:lo,backendName:"cpu",kernelFunc:({inputs:o,backend:a})=>{const{x:t}=o,n=a;q(t,"square");const e=n.data.get(t.dataId).values,s=new Float32Array(e.length);for(let c=0;c<e.length;++c){const d=e[c];s[c]=d*d}return{dataId:n.write(s,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dp=Q(un,(o,a)=>{const t=a;return isNaN(o)?NaN:o>0?1:t.alpha}),pp={kernelName:un,backendName:"cpu",kernelFunc:dp};/**
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
 */function up(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{begin:s,end:l,strides:c,beginMask:d,endMask:i,ellipsisMask:r,newAxisMask:u,shrinkAxisMask:p}=n;q(e,"stridedSlice");const{finalShapeSparse:h,finalShape:m,isIdentity:f,sliceDim0:g,isSimpleSlice:I,begin:x,end:b,strides:k}=uo(e.shape,s,l,c,d,i,r,u,p);let S;if(f)S=nt({inputs:{x:e},backend:t,attrs:{shape:m}});else if(g||I){ct(e.shape.length>=1,()=>`Input must have rank at least 1, got: ${e.shape.length}`);const y=ho(x,b,k),C=Vt({inputs:{x:e},backend:t,attrs:{begin:x,size:y}});S=nt({inputs:{x:C},backend:t,attrs:{shape:m}}),t.disposeIntermediateTensorInfo(C)}else{const y=t.bufferSync(e),C=Lo(h,y,k,x);S=t.makeTensorInfo(m,C.dtype,C.values)}return S}const hp={kernelName:po,backendName:"cpu",kernelFunc:up};/**
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
 */function fp(o){const{inputs:a,backend:t,attrs:n}=o,{separator:e,nGramWidths:s,leftPad:l,rightPad:c,padWidth:d,preserveShortSequences:i}=n,{data:r,dataSplits:u}=a,p=t.data.get(r.dataId).values,h=t.data.get(u.dataId).values,[m,f]=Bo(p,h,e,s,l,c,d,i);return[t.makeTensorInfo([m.length],"string",m),t.makeTensorInfo(u.shape,"int32",f)]}const mp={kernelName:fo,backendName:"cpu",kernelFunc:fp};/**
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
 */function gp(o){const{inputs:a,backend:t,attrs:n}=o,{skipEmpty:e}=n,{input:s,delimiter:l}=a;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(l.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${l.shape}`);const c=t.data.get(s.dataId).values,d=t.data.get(l.dataId).values[0],[i,r,u]=Go(c,d,e),p=r.length;return[t.makeTensorInfo([p,2],"int32",i),t.makeTensorInfo([p],"string",r),t.makeTensorInfo([2],"int32",new Int32Array(u))]}const Ip={kernelName:mo,backendName:"cpu",kernelFunc:gp};/**
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
 */function kp(o){const{inputs:a,backend:t,attrs:n}=o,{numBuckets:e}=n,{input:s}=a;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(e<=0)throw new Error("Number of buckets must be at least 1");const l=t.data.get(s.dataId).values,c=qo(l,e);return t.makeTensorInfo(s.shape,"int32",c)}const xp={kernelName:go,backendName:"cpu",kernelFunc:kp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bp=Q(hn,o=>Math.tan(o)),Sp={kernelName:hn,backendName:"cpu",kernelFunc:bp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yp=Q(fn,o=>Math.tanh(o)),Cp={kernelName:fn,backendName:"cpu",kernelFunc:yp};/**
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
 */function Np(o){const{inputs:a,backend:t}=o,{tensor:n,indices:e,updates:s}=a,{sliceRank:l,numUpdates:c,sliceSize:d,strides:i,outputSize:r}=pe(s,e,n.shape),u=!1,p=t.bufferSync(e),h=t.bufferSync(s),m=t.bufferSync(n),f=Rt(p,h,n.shape,r,d,c,l,i,m,u);return t.makeTensorInfo(n.shape,f.dtype,f.values)}const vp={kernelName:Io,backendName:"cpu",kernelFunc:Np};/**
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
 */function wp(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{reps:s}=n;q(e,"tile");const l=_o(t.bufferSync(e),s);return t.makeTensorInfo(l.shape,l.dtype,l.values)}const Tp={kernelName:ko,backendName:"cpu",kernelFunc:wp};/**
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
 */function Mp(o){const{inputs:a,backend:t,attrs:n}=o,{x:e}=a,{k:s,sorted:l}=n;q(e,"topk");const c=t.data.get(e.dataId).values,[d,i]=Uo(c,e.shape,e.dtype,s,l);return[t.makeTensorInfo(d.shape,d.dtype,d.values),t.makeTensorInfo(i.shape,i.dtype,i.values)]}const Fp={kernelName:xo,backendName:"cpu",kernelFunc:Mp};/**
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
 */function Rp(o){const{inputs:a,attrs:t,backend:n}=o,{image:e,transforms:s}=a,{interpolation:l,fillMode:c,fillValue:d,outputShape:i}=t,[r,u,p,h]=e.shape,[m,f]=i??[u,p],g=[r,m,f,h],I=K(e.shape),x=I[0],b=I[1],k=I[2],S=K(g),y=S[0],C=S[1],M=S[2],V=Ct(e.dtype,j(g));V.fill(d);const R=n.data.get(e.dataId).values,H=n.data.get(s.dataId).values;for(let N=0;N<r;++N){const F=s.shape[0]===1?H:H.subarray(N*8,N*8+8);for(let v=0;v<m;++v)for(let w=0;w<f;++w)for(let W=0;W<h;++W){let T;const D=F[6]*w+F[7]*v+1;if(D===0)continue;const z=(F[0]*w+F[1]*v+F[2])/D,O=(F[3]*w+F[4]*v+F[5])/D,E=Ce(z,p,c),$=Ce(O,u,c);switch(l){case"nearest":T=Op(R,u,p,x,b,k,N,$,E,W,d);break;case"bilinear":T=zp(R,u,p,x,b,k,N,$,E,W,d);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${l}`)}const L=N*y+v*C+w*M+W;V[L]=T}return n.makeTensorInfo(g,e.dtype,V)}return{dataId:n.write(V,g,e.dtype),shape:e.shape,dtype:e.dtype}}const Dp={kernelName:bo,backendName:"cpu",kernelFunc:Rp};function Ce(o,a,t){switch(t){case"reflect":return Vp(o,a);case"wrap":return Wp(o,a);case"nearest":return Ap(o,a);case"constant":default:return Hp(o)}}function Vp(o,a){let t=o;if(t<0)if(a<=1)t=0;else{const n=2*a;t<n&&(t=n*Math.trunc(-t/n)+t),t=t<-a?t+n:-t-1}else if(t>a-1)if(a<=1)t=0;else{const n=2*a;t-=n*Math.trunc(t/n),t>=a&&(t=n-t-1)}return ue(0,t,a-1)}function Wp(o,a){let t=o;if(t<0)if(a<=1)t=0;else{const n=a-1;t+=a*(Math.trunc(-t/n)+1)}else if(t>a-1)if(a<=1)t=0;else{const n=a-1;t-=a*Math.trunc(t/n)}return ue(0,t,a-1)}function Hp(o,a){return o}function Ap(o,a){return ue(0,o,a-1)}function Pt(o,a,t,n,e,s,l,c,d,i,r){const u=l*n+c*e+d*s+i;return 0<=c&&c<a&&0<=d&&d<t?o[u]:r}function Op(o,a,t,n,e,s,l,c,d,i,r){const u=Math.round(c),p=Math.round(d);return Pt(o,a,t,n,e,s,l,u,p,i,r)}function zp(o,a,t,n,e,s,l,c,d,i,r){const u=Math.floor(c),p=Math.floor(d),h=u+1,m=p+1,f=(m-d)*Pt(o,a,t,n,e,s,l,u,p,i,r)+(d-p)*Pt(o,a,t,n,e,s,l,u,m,i,r),g=(m-d)*Pt(o,a,t,n,e,s,l,h,p,i,r)+(d-p)*Pt(o,a,t,n,e,s,l,h,m,i,r);return(h-c)*f+(c-u)*g}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(o){const{inputs:a,attrs:t,backend:n}=o,{axis:e}=t,{x:s}=a;q(s,"unique");const l=n.data.get(s.dataId).values,{outputValues:c,outputShape:d,indices:i}=jo(l,e,s.shape,s.dtype);return[n.makeTensorInfo(d,s.dtype,c),n.makeTensorInfo([i.length],"int32",i)]}const Pp={kernelName:So,backendName:"cpu",kernelFunc:$p};/**
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
 */function Ep(o){const{inputs:a,backend:t,attrs:n}=o,{value:e}=a;let{axis:s}=n;s<0&&(s+=e.shape.length);const l=e.shape.length,c=e.shape[s],d=new Array(l-1);let i=0;for(let h=0;h<l;h++)h!==s&&(d[i++]=e.shape[h]);const r=new Array(l).fill(0),u=e.shape.slice();u[s]=1;const p=new Array(c);for(let h=0;h<p.length;h++){r[s]=h;const m=Vt({inputs:{x:e},backend:t,attrs:{begin:r,size:u}});p[h]=nt({inputs:{x:m},backend:t,attrs:{shape:d}}),t.disposeIntermediateTensorInfo(m)}return p}const Lp={kernelName:yo,backendName:"cpu",kernelFunc:Ep};/**
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
 */function Bp(o){const{inputs:a,backend:t,attrs:n}=o,{x:e,segmentIds:s}=a,{numSegments:l}=n;q(e,"unsortedSegmentSum");const c=e.shape.length,d=s.shape.length,i=[],r=[],u=c-d;let p=s;for(let m=0;m<u;++m){const f=jt({inputs:{input:p},backend:t,attrs:{dim:m+1}});p=f,r.push(f)}for(let m=0;m<l;++m){const f=je(m,"int32"),g=t.makeTensorInfo([],"int32",f),I=Yo({inputs:{a:g,b:p},backend:t}),x=he({inputs:{x:I},backend:t,attrs:{dtype:"float32"}}),b=fe({inputs:{a:x,b:e},backend:t}),k=qt({inputs:{x:b},backend:t,attrs:{axis:0,keepDims:!1}});i.push(k),r.push(g),r.push(I),r.push(x),r.push(b),r.push(k)}const h=Vn({inputs:i,backend:t,attrs:{axis:0}});return r.forEach(m=>t.disposeIntermediateTensorInfo(m)),h}const Gp={kernelName:Co,backendName:"cpu",kernelFunc:Bp};/**
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
 */const qp=[$r,Xo,Er,Br,Ko,qr,Ur,Yr,Kr,Jr,ti,ni,ai,ii,li,ui,fi,gi,ki,Or,bi,yi,Ni,Zo,wi,Jo,Qo,Mi,tr,Ri,Vi,Wi,Ai,zi,Pi,Li,Gi,_i,ji,Xi,Zi,Qi,ec,sc,ac,rc,cc,dc,pc,uc,hc,mc,kc,Fr,bc,er,Mc,nr,Fc,sr,Ac,Oc,$c,ar,or,Ec,Bc,qc,Uc,rr,ir,cr,Yc,Di,Kc,Jc,tl,Rr,lr,dr,nl,pr,al,il,ll,ul,fl,gl,Il,ur,xl,Sl,Cl,vl,Tl,Fl,Dl,hr,Wl,Ol,Pl,fr,mr,Bl,_l,Yl,gr,Kl,Jl,Ql,Wn,sd,Vr,Ir,od,id,ld,pd,kr,ne,hd,Wr,Hr,Ar,md,Id,xd,Sd,Cd,Nd,wd,xr,Md,Wd,Ad,Pd,br,Ld,Gd,_d,Sr,zl,Yd,Kd,Jd,tp,np,ap,rp,cp,yr,lp,Cr,Nr,pp,hp,mp,Ip,xp,vr,gc,Sp,Cp,vp,Tp,Fp,Dp,wr,Pp,Lp,Gp,Zl];for(const o of qp)No(o);export{Jt as MathBackendCPU,Jp as shared,Xp as version_cpu};
