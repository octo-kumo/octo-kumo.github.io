import{d_ as zn,d$ as $n,e0 as kt,e as Pn,e1 as En,e2 as Ln,dW as Bn,c$ as Ye,e3 as Gn,e4 as Nt,E as ie,e5 as xt,e6 as qn,e7 as _n,e8 as vt,e9 as Un,cM as j,cP as Ce,ea as jn,eb as wt,ec as Tt,ed as Xn,ee as Yn,cB as ce,ef as Kn,cN as Mt,cO as K,eg as Zn,eh as Ft,ei as Rt,ej as Jn,ek as Qn,dp as ue,dq as Ie,dr as ke,el as Te,dl as Ne,cU as ve,ds as Ae,em as es,en as ts,eo as ns,ep as Dt,eq as Vt,er as Wt,es as Ht,et as At,eu as ss,ev as at,ew as Ge,cE as ot,ex as as,ey as Ke,ez as os,eA as rs,eB as is,eC as cs,eD as Ot,eE as zt,eF as $t,eG as ls,eH as ds,eI as ps,eJ as us,eK as Pt,eL as fs,eM as hs,eN as ms,eO as gs,eP as tt,eQ as Is,eR as rt,eS as Oe,dz as le,eT as ks,eU as xs,eV as bs,eW as it,eX as Ss,eY as ys,eZ as Et,e_ as Lt,e$ as Cs,f0 as Ns,dm as Ze,f1 as vs,f2 as Bt,f3 as ws,f4 as Ts,f5 as Ms,f6 as Fs,f7 as Rs,f8 as Ds,f9 as Vs,fa as Ws,fb as ct,d2 as lt,cS as Ee,cX as dt,fc as bt,t as De,fd as Gt,fe as St,ff as Hs,fg as As,fh as Os,fi as zs,fj as $s,fk as Ps,fl as Es,fm as Ls,fn as Bs,fo as qt,fp as Gs,fq as qs,fr as _s,fs as Us,ft as js,fu as Xs,fv as Ys,fw as _t,fx as Ut,dh as jt,fy as Ks,fz as Zs,fA as Js,fB as Qs,fC as ea,fD as ta,fE as na,fF as sa,fG as aa,fH as oa,fI as ra,fJ as ia,fK as ca,fL as la,fM as da,fN as pa,fO as ua,fP as Xt,fQ as Yt,fR as Kt,fS as fa,fT as Zt,fU as Jt,fV as Qt,fW as en,fX as ha,fY as ma,fZ as ga,f_ as Ia,f$ as ka,g0 as xa,g1 as ba,g2 as Sa,g3 as ya,g4 as Ca,g5 as Na,cR as tn,g6 as nn,g7 as va,g8 as wa,g9 as Ta,ga as Ma,gb as Fa,gc as Ra,gd as Da,ge as Va,gf as Wa,gg as Ha,gh as Aa,gi as Oa,gj as za,gk as $a,gl as sn,gm as Pa,gn as Ea,go as La,gp as Ba,gq as an,gr as Ga,gs as qa,gt as _a,gu as Ua,gv as ja,gw as Xa,gx as Ya,gy as on,gz as Ka,gA as pt,gB as Za,gC as Ja,gD as rn,gE as Qa,gF as eo,gG as cn,gH as ln,gI as dn,gJ as pn,gK as to,gL as no,gM as so,gN as ao,gO as oo,gP as ro,gQ as io,gR as co,gS as lo,gT as un,gU as po,gV as uo,gW as fo,gX as ho,gY as mo,gZ as go,g_ as fn,g$ as hn,h0 as Io,h1 as ko,h2 as xo,h3 as bo,h4 as ut,h5 as So,h6 as yo,h7 as Co,h8 as No}from"./Bay5WhZg.js";import{a as q,u as Q,c as Me,i as Fe,s as vo,b as Le,t as pe,d as ze,e as Ve,f as mn,r as Be,g as he,h as wo,j as To,k as ft,z as Mo,m as ht,l as gn,n as Fo,o as Ro,p as Do,q as Vo,v as Wo,w as Ho,x as Ao,y as Oo,A as zo,B as $o,C as Re,D as Po,E as Eo,F as In,G as Lo,H as Bo,I as Go,J as qo,K as _o,L as Uo,M as jo,N as Xo,O as Yo,P as Ko,Q as Zo,R as Jo,S as Qo,T as er,U as tr,V as nr,W as sr,X as ar,Y as or,Z as rr,_ as ir,$ as cr,a0 as lr,a1 as dr,a2 as pr,a3 as ur,a4 as fr,a5 as hr,a6 as mr,a7 as gr,a8 as Ir,a9 as kr,aa as xr,ab as br,ac as Sr,ad as yr,ae as Cr,af as Nr,ag as vr,ah as wr}from"./9ABwYb6F.js";import{ai as Jp}from"./9ABwYb6F.js";import{s as Tr}from"./B_3ykX47.js";import"./CLGT6fdw.js";/**
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
 */const Mr=qn;class Je extends zn{nextDataId(){return Je.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new $n(this,kt())}write(a,e,n){this.firstUse&&(this.firstUse=!1,Pn().get("IS_NODE")&&En(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const t={id:this.nextDataId()};return this.data.set(t,{values:a,dtype:n,refCount:1}),t}makeTensorInfo(a,e,n){let t;if(e==="string"&&n!=null&&n.length>0&&Ln(n[0])){const s=n.map(l=>Bn(l));t=this.write(s,a,e)}else t=this.write(n,a,e);return{dataId:t,shape:a,dtype:e}}refCount(a){return this.data.has(a)?this.data.get(a).refCount:0}incRef(a){const e=this.data.get(a);e.refCount++}decRef(a){if(this.data.has(a)){const e=this.data.get(a);e.refCount--}}move(a,e,n,t,s){this.data.set(a,{values:e,dtype:t,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(a){return this.readSync(a)}readSync(a){const{dtype:e,complexTensorInfos:n}=this.data.get(a);if(e==="complex64"){const t=this.readSync(n.real.dataId),s=this.readSync(n.imag.dataId);return Ye(t,s)}return Gn(this.data.get(a).values,e)}bufferSync(a){const e=this.readSync(a.dataId);if(a.dtype==="string")try{const n=e.map(t=>Nt(t));return ie(a.shape,a.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ie(a.shape,a.dtype,e)}makeOutput(a,e,n){return kt().makeTensorFromTensorInfo(this.makeTensorInfo(e,n,a),this)}disposeData(a,e=!1){if(this.data.has(a)){if(this.data.get(a).refCount--,!e&&this.data.get(a).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(a);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(a)}return!0}disposeIntermediateTensorInfo(a){this.disposeData(a.dataId)}async time(a){const e=xt();return a(),{kernelMs:xt()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(a){q([a],"where");const e=this.readSync(a.dataId);return Mr(a.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Je.nextDataId=0;/** @license See the LICENSE file. */const Yp="4.21.0";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */_n("cpu",()=>new Je,1);/**
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
 */const kn=Q(vt,o=>o>=0?o:Math.exp(o)-1),Fr={kernelName:vt,backendName:"cpu",kernelFunc:kn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xn(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{alpha:s}=n;q([t],"leakyRelu");const l=j(t.shape),c=e.data.get(t.dataId).values,d=Ce("float32",l);for(let i=0;i<c.length;i++)d[i]=c[i]<0?s*c[i]:c[i];return e.makeTensorInfo(t.shape,"float32",d)}const Rr={kernelName:Un,backendName:"cpu",kernelFunc:xn};/**
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
 */const Dr=Me((o,a)=>o<0?a*o:o);function bn(o){const{inputs:a,backend:e}=o,{x:n,alpha:t}=a;q([n,t],"prelu");const s=e.data.get(n.dataId).values,l=e.data.get(t.dataId).values,[c,d]=Dr(n.shape,t.shape,s,l,"float32");return e.makeTensorInfo(d,"float32",c)}const Vr={kernelName:jn,backendName:"cpu",kernelFunc:bn};/**
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
 */const Sn=Q(wt,o=>Math.max(0,o)),Wr={kernelName:wt,backendName:"cpu",kernelFunc:Sn};/**
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
 */const yn=Q(Tt,o=>Math.min(Math.max(0,o),6)),Hr={kernelName:Tt,backendName:"cpu",kernelFunc:yn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ue(o,a,e,n,t){if(e==="linear")return Fe({inputs:{x:a},backend:o});if(e==="relu")return Sn({inputs:{x:a},backend:o});if(e==="elu")return kn({inputs:{x:a},backend:o});if(e==="relu6")return yn({inputs:{x:a},backend:o});if(e==="prelu")return bn({inputs:{x:a,alpha:n},backend:o});if(e==="leakyrelu")return xn({inputs:{x:a},backend:o,attrs:{alpha:t}});if(e==="sigmoid")return vo({inputs:{x:a},backend:o});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{shape:s}=n,l=j(t.shape),c=Yn(s,l),d=j(c);ce(l===d,()=>`The new shape (${c}) has ${d} elements and the old shape (${t.shape}) has ${l} elements. The new shape and old shape must have the same number of elements.`),e.incRef(t.dataId);const i=e.data.get(t.dataId);if(i.complexTensorInfos!=null){const r=i.complexTensorInfos.real,u=i.complexTensorInfos.imag;r.shape=c,u.shape=c}return{dataId:t.dataId,shape:c,dtype:t.dtype}}const Ar={kernelName:Xn,backendName:"cpu",kernelFunc:ne};/**
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
 */function Cn(o){const{inputs:a,backend:e,attrs:n}=o,{a:t,b:s}=a,{transposeA:l,transposeB:c}=n;q([t,s],"matMul");const d=t.shape.length,i=s.shape.length,r=l?t.shape[d-2]:t.shape[d-1],u=c?s.shape[i-1]:s.shape[i-2],p=l?t.shape[d-1]:t.shape[d-2],f=c?s.shape[i-2]:s.shape[i-1],m=t.shape.slice(0,-2),h=s.shape.slice(0,-2),g=j(m),I=j(h),b=Mt(t.shape.slice(0,-2),s.shape.slice(0,-2)).concat([p,f]);ce(r===u,()=>`Error in matMul: inner shapes (${r}) and (${u}) of Tensors with shapes ${t.shape} and ${s.shape} and transposeA=${l} and transposeB=${c} must match.`);const k=l?[g,r,p]:[g,p,r],S=c?[I,f,u]:[I,u,f],y=ne({inputs:{x:t},backend:e,attrs:{shape:k}}),C=ne({inputs:{x:s},backend:e,attrs:{shape:S}}),M=l?y.shape[1]:y.shape[2],V=l?y.shape[2]:y.shape[1],R=c?C.shape[1]:C.shape[2],H=Math.max(g,I),A=e.data.get(y.dataId).values,N=e.data.get(C.dataId).values,F=K(y.shape),v=K(C.shape),[w,W,T]=l?[F[0],1,F[1]]:[F[0],F[1],1],[D,z,O]=c?[1,v[1],v[0]]:[v[1],1,v[0]],E=V*R,$=ie([H,V,R],y.dtype),L=$.values,P=e.blockSize;for(let B=0;B<H;B++){const G=B%g,U=B%I;for(let _=0;_<V;_+=P){const X=Math.min(_+P,V);for(let Y=0;Y<R;Y+=P){const Z=Math.min(Y+P,R);for(let ee=0;ee<M;ee+=P){const oe=Math.min(ee+P,M);for(let te=_;te<X;te++)for(let J=Y;J<Z;J++){let ae=0;for(let se=ee;se<oe;se++){const me=A[G*w+te*W+se*T],re=N[se*D+J*z+U*O];ae+=me*re}L[B*E+(te*R+J)]+=ae}}}}}return e.disposeIntermediateTensorInfo(y),e.disposeIntermediateTensorInfo(C),e.makeTensorInfo(b,$.dtype,$.values)}const Or={kernelName:Kn,backendName:"cpu",kernelFunc:Cn};/**
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
 */function zr(o){const{inputs:a,backend:e,attrs:n}=o,{a:t,b:s,bias:l,preluActivationWeights:c}=a,{transposeA:d,transposeB:i,activation:r,leakyreluAlpha:u}=n;let p,f,m;const h=[];p=Cn({inputs:{a:t,b:s},attrs:{transposeA:d,transposeB:i},backend:e}),l&&(f=Le({inputs:{a:p,b:l},backend:e}),h.push(p),p=f),r&&(m=Ue(e,p,r,c,u),h.push(p),p=m);for(const I of h)e.disposeIntermediateTensorInfo(I);return p}const $r={kernelName:Zn,backendName:"cpu",kernelFunc:zr};/**
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
 */const Pr=Q(Ft,o=>Math.acos(o)),Er={kernelName:Ft,backendName:"cpu",kernelFunc:Pr};/**
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
 */const Lr=Q(Rt,o=>Math.acosh(o)),Br={kernelName:Rt,backendName:"cpu",kernelFunc:Lr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gr(o){const{inputs:a,backend:e}=o,n=a;q(a,"addN");const t=n.map(c=>e.data.get(c.dataId).values),s=ie(n[0].shape,n[0].dtype),l=s.values;for(let c=0;c<n.length;c++){const d=t[c];for(let i=0;i<l.length;i++)l[i]+=d[i]}return e.makeTensorInfo(s.shape,s.dtype,s.values)}const qr={kernelName:Jn,backendName:"cpu",kernelFunc:Gr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _r(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,keepDims:l}=n;q(t,"all");const c=ue(s,t.shape);let d=c;const i=Ie(d,t.shape.length);let r=t;i!=null&&(r=pe({inputs:{x:t},backend:e,attrs:{perm:i}}),d=ke(d.length,t.shape.length)),Te("all",d,r.shape.length);const[u,p]=Ne(r.shape,d),f=j(p),m=ve(j(u),r.dtype),h=e.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*f;let b=h[x];for(let k=0;k<f;++k){const S=h[x+k];b=b&&S}m[I]=b}i!=null&&e.disposeIntermediateTensorInfo(r);const g=e.makeTensorInfo(u,r.dtype,m);if(l){const I=Ae(u,c),x=ne({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),x}return g}const Ur={kernelName:Qn,backendName:"cpu",kernelFunc:_r};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jr(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,keepDims:l}=n;q(t,"any");const c=ue(s,t.shape);let d=c;const i=Ie(d,t.shape.length);let r=t;i!=null&&(r=pe({inputs:{x:t},backend:e,attrs:{perm:i}}),d=ke(d.length,t.shape.length)),Te("any",d,r.shape.length);const[u,p]=Ne(r.shape,d),f=j(p),m=ve(j(u),r.dtype),h=e.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*f;let b=h[x];for(let k=0;k<f;++k){const S=h[x+k];b=b||S}m[I]=b}i!=null&&e.disposeIntermediateTensorInfo(r);const g=e.makeTensorInfo(u,r.dtype,m);if(l){const I=Ae(u,c),x=ne({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),x}return g}const Xr={kernelName:es,backendName:"cpu",kernelFunc:jr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yr(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s}=n;q(t,"argMax");let l=ue(s,t.shape);const c=Ie(l,t.shape.length);let d=t;const i=[];c!=null&&(d=pe({inputs:{x:t},backend:e,attrs:{perm:c}}),i.push(d),l=ke(l.length,d.shape.length)),l=[l[0]],Te("argMax",l,d.shape.length);const[r,u]=Ne(d.shape,l),p=j(r),f=ve(p,"int32"),m=j(u),h=e.data.get(d.dataId).values;for(let g=0;g<f.length;++g){const I=g*m;let x=h[I],b=0;for(let k=0;k<m;++k){const S=h[I+k];S>x&&(x=S,b=k)}f[g]=b}return i.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(r,"int32",f)}const Kr={kernelName:ts,backendName:"cpu",kernelFunc:Yr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zr(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s}=n;q(t,"argMin");let l=ue(s,t.shape);const c=Ie(l,t.shape.length);let d=t;const i=[];c!=null&&(d=pe({inputs:{x:t},backend:e,attrs:{perm:c}}),i.push(d),l=ke(l.length,d.shape.length)),l=[l[0]],Te("argMin",l,d.shape.length);const[r,u]=Ne(d.shape,l),p=j(r),f=ve(p,"int32"),m=j(u),h=e.data.get(d.dataId).values;for(let g=0;g<f.length;++g){const I=g*m;let x=h[I],b=0;for(let k=0;k<m;++k){const S=h[I+k];S<x&&(x=S,b=k)}f[g]=b}return i.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(r,"int32",f)}const Jr={kernelName:ns,backendName:"cpu",kernelFunc:Zr};/**
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
 */const Qr=Q(Dt,o=>Math.asin(o)),ei={kernelName:Dt,backendName:"cpu",kernelFunc:Qr};/**
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
 */const ti=Q(Vt,o=>Math.asinh(o)),ni={kernelName:Vt,backendName:"cpu",kernelFunc:ti};/**
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
 */const si=Q(Wt,o=>Math.atan(o)),ai={kernelName:Wt,backendName:"cpu",kernelFunc:si};/**
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
 */const oi=Me((o,a)=>Math.atan2(o,a)),ri=ze(Ht,oi),ii={kernelName:Ht,backendName:"cpu",kernelFunc:ri};/**
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
 */const ci=Q(At,o=>Math.atanh(o)),li={kernelName:At,backendName:"cpu",kernelFunc:ci};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mt(o,a,e,n,t,s){const l=t.strideHeight,c=t.strideWidth,d=t.dilationHeight,i=t.dilationWidth,r=t.effectiveFilterHeight,u=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left,m=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,h=ie(t.outShape,e),g=h.values,I=t.outShape[1]*t.outShape[2]*t.outShape[3],x=t.outShape[2]*t.outShape[3],b=t.outShape[3];for(let k=0;k<t.batchSize;++k){const S=k*I,y=k*n[0];for(let C=0;C<t.inChannels;++C)for(let M=0;M<t.outHeight;++M){const V=M*l-p,R=Math.max(0,V),H=Math.min(t.inHeight,r+V),A=S+M*x;for(let N=0;N<t.outWidth;++N){const F=N*c-f,v=Math.max(0,F),w=Math.min(t.inWidth,u+F);let W=m,T=0,D=0;for(let O=R;O<H;O+=d){const E=y+O*n[1];for(let $=v;$<w;$+=i){const L=E+$*n[2],P=o[L+C];s==="max"&&P>W?W=P:s==="avg"&&(T+=P,D++)}if(isNaN(W))break}const z=A+N*b+C;g[z]=s==="avg"?T/D:W}}}return h}function Nn(o,a,e,n,t=!1,s=!1){const l=ie(n.outShape,"int32"),c=n.strideHeight,d=n.strideWidth,i=n.dilationHeight,r=n.dilationWidth,u=n.effectiveFilterHeight,p=n.effectiveFilterWidth,f=n.padInfo.top,m=n.padInfo.left,h=ie(a,e,o);for(let g=0;g<n.batchSize;++g)for(let I=0;I<n.inChannels;++I)for(let x=0;x<n.outHeight;++x){const b=x*c-f;let k=b;for(;k<0;)k+=i;const S=Math.min(n.inHeight,u+b);for(let y=0;y<n.outWidth;++y){const C=y*d-m;let M=C;for(;M<0;)M+=r;const V=Math.min(n.inWidth,p+C);let R=Number.NEGATIVE_INFINITY,H=-1;for(let A=k;A<S;A+=i){const N=A-b;for(let F=M;F<V;F+=r){const v=F-C,w=h.get(g,A,F,I);w>R&&(R=w,t?H=s?((g*n.inHeight+A)*n.inWidth+F)*n.inChannels+I:(A*n.inWidth+F)*n.inChannels+I:H=N*p+v)}}l.set(H,g,x,y,I)}}return l}function vn(o,a,e,n,t,s){const l=t.strideDepth,c=t.strideHeight,d=t.strideWidth,i=t.dilationDepth,r=t.dilationHeight,u=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,h=t.padInfo.front,g=t.padInfo.top,I=t.padInfo.left,x=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=ie(t.outShape,e),k=b.values,S=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],y=t.outShape[2]*t.outShape[3]*t.outShape[4],C=t.outShape[3]*t.outShape[4],M=t.outShape[4];for(let V=0;V<t.batchSize;++V){const R=V*S,H=V*n[0];for(let A=0;A<t.inChannels;++A)for(let N=0;N<t.outDepth;++N){const F=N*l-h;let v=F;for(;v<0;)v+=i;const w=Math.min(t.inDepth,p+F),W=R+N*y;for(let T=0;T<t.outHeight;++T){const D=T*c-g;let z=D;for(;z<0;)z+=r;const O=Math.min(t.inHeight,f+D),E=W+T*C;for(let $=0;$<t.outWidth;++$){const L=$*d-I;let P=L;for(;P<0;)P+=u;const B=Math.min(t.inWidth,m+L),G=E+$*M;let U=x,_=0,X=0;for(let Z=v;Z<w;Z+=i){const ee=H+Z*n[1];for(let oe=z;oe<O;oe+=r){const te=ee+oe*n[2];for(let J=P;J<B;J+=u){const ae=te+J*n[3],se=o[ae+A];if(s==="max"&&se>U?U=se:s==="avg"&&(_+=se,X++),isNaN(U))break}if(isNaN(U))break}if(isNaN(U))break}const Y=G+A;k[Y]=s==="avg"?_/Math.max(X,1):U}}}}return b}function di(o,a){const e=ie(a.outShape,"int32"),n=a.strideDepth,t=a.strideHeight,s=a.strideWidth,l=a.dilationDepth,c=a.dilationHeight,d=a.dilationWidth,i=a.effectiveFilterDepth,r=a.effectiveFilterHeight,u=a.effectiveFilterWidth,p=a.padInfo.front,f=a.padInfo.top,m=a.padInfo.left;for(let h=0;h<a.batchSize;++h)for(let g=0;g<a.inChannels;++g)for(let I=0;I<a.outDepth;++I){const x=I*n-p;let b=x;for(;b<0;)b+=l;const k=Math.min(a.inDepth,i+x);for(let S=0;S<a.outHeight;++S){const y=S*t-f;let C=y;for(;C<0;)C+=c;const M=Math.min(a.inHeight,r+y);for(let V=0;V<a.outWidth;++V){const R=V*s-m;let H=R;for(;H<0;)H+=d;const A=Math.min(a.inWidth,u+R);let N=Number.NEGATIVE_INFINITY,F=-1;for(let v=b;v<k;v+=l){const w=v-x;for(let W=C;W<M;W+=c){const T=W-y;for(let D=H;D<A;D+=d){const z=D-R,O=o.get(h,v,W,D,g);O>=N&&(N=O,F=w*r*u+T*r+z)}}}e.set(F,h,I,S,V,g)}}}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pi(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a;q(t,"avgPool");const{filterSize:s,strides:l,pad:c,dimRoundingMode:d}=n,i=1;ce(at(l,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${i}'`);const r=Ge(t.shape,s,l,i,c,d);let u;if(r.filterWidth===1&&r.filterHeight===1&&ot(r.inShape,r.outShape))u=Fe({inputs:{x:t},backend:e});else{const p=e.data.get(t.dataId).values,f=K(t.shape),m=mt(p,t.shape,t.dtype,f,r,"avg");u=e.makeTensorInfo(r.outShape,t.dtype,m.values)}return u}const ui={kernelName:ss,backendName:"cpu",kernelFunc:pi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fi(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{filterSize:s,strides:l,pad:c,dimRoundingMode:d,dataFormat:i}=n;q(t,"avgPool3d");const r=Ke(t.shape,s,l,1,c,d,i),u=e.data.get(t.dataId).values,p=vn(u,t.shape,t.dtype,K(t.shape),r,"avg");return e.makeTensorInfo(p.shape,"float32",p.values)}const hi={kernelName:as,backendName:"cpu",kernelFunc:fi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mi(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,input:s}=a,{filterSize:l,strides:c,pad:d,dimRoundingMode:i}=n;q([t,s],"avgPool3DGrad");const r=Ke(s.shape,l,c,1,d,i),u=r.strideDepth,p=r.strideHeight,f=r.strideWidth,m=r.filterDepth,h=r.filterHeight,g=r.filterWidth,I=r.dilationDepth,x=r.dilationHeight,b=r.dilationWidth,k=r.effectiveFilterDepth,S=r.effectiveFilterHeight,y=r.effectiveFilterWidth,C=k-1-r.padInfo.front,M=y-1-r.padInfo.left,V=S-1-r.padInfo.top,R=ie(s.shape,"float32"),H=1/(m*h*g),A=e.bufferSync(t);for(let N=0;N<r.batchSize;++N)for(let F=0;F<r.inChannels;++F)for(let v=0;v<r.inDepth;++v)for(let w=0;w<r.inHeight;++w)for(let W=0;W<r.inWidth;++W){const T=v-C,D=w-V,z=W-M;let O=0;for(let E=0;E<k;E+=I){const $=(T+E)/u;if(!($<0||$>=r.outDepth||Math.floor($)!==$))for(let L=0;L<S;L+=x){const P=(D+L)/p;if(!(P<0||P>=r.outHeight||Math.floor(P)!==P))for(let B=0;B<y;B+=b){const G=(z+B)/f;if(G<0||G>=r.outWidth||Math.floor(G)!==G)continue;const U=A.get(N,$,P,G,F);O+=U}}}R.set(O*H,N,v,w,W,F)}return e.makeTensorInfo(R.shape,R.dtype,R.values)}const gi={kernelName:os,backendName:"cpu",kernelFunc:mi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ii(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,input:s}=a,l=s;q([t,s],"avgPoolGrad");const{filterSize:c,strides:d,pad:i}=n,r=Ge(l.shape,c,d,1,i),u=r.strideHeight,p=r.strideWidth,f=r.filterHeight,m=r.filterWidth,h=r.dilationHeight,g=r.dilationWidth,I=r.effectiveFilterHeight,x=r.effectiveFilterWidth,b=x-1-r.padInfo.left,k=I-1-r.padInfo.top,S=ie(l.shape,"float32"),y=1/(f*m),C=e.data.get(t.dataId).values,M=ie(t.shape,"float32",C);for(let V=0;V<r.batchSize;++V)for(let R=0;R<r.inChannels;++R)for(let H=0;H<r.inHeight;++H)for(let A=0;A<r.inWidth;++A){const N=H-k,F=A-b;let v=0;for(let w=0;w<I;w+=h){const W=(N+w)/u;if(!(W<0||W>=r.outHeight||Math.floor(W)!==W))for(let T=0;T<x;T+=g){const D=(F+T)/p;if(D<0||D>=r.outWidth||Math.floor(D)!==D)continue;const z=M.get(V,W,D,R);v+=z}}S.set(v*y,V,H,A,R)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const ki={kernelName:rs,backendName:"cpu",kernelFunc:Ii};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xi(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,scale:s,offset:l,mean:c,variance:d}=a;ce(c.shape.length===d.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),ce(l==null||c.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),ce(s==null||c.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),q([t,c,d,s,l],"batchNorm");let{varianceEpsilon:i}=n;i==null&&(i=.001);const r=e.data.get(t.dataId).values,u=e.data.get(c.dataId).values,p=e.data.get(d.dataId).values,f=s?e.data.get(s.dataId).values:new Float32Array([1]),m=l?e.data.get(l.dataId).values:new Float32Array([0]),h=new Float32Array(r.length),g=m.length,I=f.length,x=p.length,b=u.length;let k=0,S=0,y=0,C=0;for(let M=0;M<r.length;++M)h[M]=m[k++]+(r[M]-u[S++])*f[y++]/Math.sqrt(p[C++]+i),k>=g&&(k=0),S>=b&&(S=0),y>=I&&(y=0),C>=x&&(C=0);return e.makeTensorInfo(t.shape,t.dtype,h)}const bi={kernelName:is,backendName:"cpu",kernelFunc:xi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Si(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{blockShape:s,crops:l}=n;q([t],"batchToSpaceND");const c=s.reduce((I,x)=>I*x),d=Ot(t.shape,s,c),i=zt(d.length,s.length),r=$t(t.shape,s,c),u=ls(l,s.length),p=ds(r,l,s.length),f=ne({inputs:{x:t},backend:e,attrs:{shape:d}}),m=pe({inputs:{x:f},backend:e,attrs:{perm:i}}),h=ne({inputs:{x:m},backend:e,attrs:{shape:r}}),g=Ve({inputs:{x:h},backend:e,attrs:{begin:u,size:p}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(h),g}const yi={kernelName:cs,backendName:"cpu",kernelFunc:Si};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ci(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,weights:s}=a,{size:l}=n,c=e.data.get(t.dataId).values,d=e.data.get(s.dataId).values,i=mn(c,d,s.dtype,s.shape,l);return e.makeTensorInfo([l],s.dtype,i)}const Ni={kernelName:ps,backendName:"cpu",kernelFunc:Ci};/**
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
 */function vi(o){const{inputs:a,backend:e}=o,{s0:n,s1:t}=a,s=e.data.get(n.dataId).values,l=e.data.get(t.dataId).values,c=Mt(Array.from(s),Array.from(l));return e.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const wi={kernelName:us,backendName:"cpu",kernelFunc:vi};/**
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
 */const Ti=Q(Pt,(o,a)=>{const e=a;return o>e.clipValueMax?e.clipValueMax:o<e.clipValueMin?e.clipValueMin:o}),Mi={kernelName:Pt,backendName:"cpu",kernelFunc:Ti};/**
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
 */const Fi=o=>{const{x:a}=o.inputs,e=o.backend,n=new Float32Array(j(a.shape)),t=e.data.get(a.dataId),s=t.complexTensorInfos.real,l=t.complexTensorInfos.imag,c=e.data.get(s.dataId).values,d=e.data.get(l.dataId).values;for(let i=0;i<c.length;i++){const r=c[i],u=d[i];n[i]=Math.hypot(r,u)}return e.makeOutput(n,a.shape,"float32")},Ri={kernelName:fs,backendName:"cpu",kernelFunc:Fi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(o){const{inputs:a,backend:e}=o,{input:n}=a,t=e.data.get(n.dataId).complexTensorInfos.imag,s=e.data.get(t.dataId).values;return e.makeTensorInfo(t.shape,t.dtype,s)}const Di={kernelName:hs,backendName:"cpu",kernelFunc:We};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function He(o){const{inputs:a,backend:e,attrs:n}=o,{axis:t}=n,s=ue(t,a[0].shape)[0],l=a.map(h=>h.shape);gs(l,s);let c=tt(a.map(h=>h.shape),s);if(j(c)===0)return e.makeTensorInfo(c,a[0].dtype,[]);const d=a.filter(h=>j(h.shape)>0);if(d.length===1)return Fe({inputs:{x:d[0]},backend:e});if(d[0].dtype==="complex64"){const h=d.map(k=>Be({inputs:{input:k},backend:e})),g=d.map(k=>We({inputs:{input:k},backend:e})),I=He({inputs:h,backend:e,attrs:{axis:s}}),x=He({inputs:g,backend:e,attrs:{axis:s}}),b=he({inputs:{real:I,imag:x},backend:e});return h.forEach(k=>e.disposeIntermediateTensorInfo(k)),g.forEach(k=>e.disposeIntermediateTensorInfo(k)),e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(x),b}const i=d.map(h=>{const I=[-1,j(h.shape.slice(s))];return ne({inputs:{x:h},backend:e,attrs:{shape:I}})}),r=i.map(h=>({vals:e.data.get(h.dataId).values,shape:h.shape}));c=tt(i.map(h=>h.shape),1);const u=i[0].shape[0]===1,p=wo(r,c,a[0].dtype,u),f=tt(d.map(h=>h.shape),s),m=e.makeTensorInfo(f,a[0].dtype,p);return i.forEach(h=>e.disposeIntermediateTensorInfo(h)),m}const Vi={kernelName:ms,backendName:"cpu",kernelFunc:He};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wn(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,filter:s}=a,{strides:l,pad:c,dataFormat:d,dilations:i,dimRoundingMode:r}=n;q([t,s],"conv2d");const u=rt(d),p=Oe(t.shape,s.shape,l,i,c,r,!1,u),f=p.filterHeight,m=p.filterWidth,h=p.dilationHeight,g=p.dilationWidth,I=p.padInfo.left,x=p.padInfo.top,b=p.dataFormat==="channelsLast",k=new le(p.outShape,t.dtype),S=K(t.shape),y=K(s.shape),C=S[0],M=b?S[1]:S[2],V=b?S[2]:1,R=b?1:S[1],H=k.strides[0],A=b?k.strides[1]:k.strides[2],N=b?k.strides[2]:1,F=b?1:k.strides[1],v=e.data.get(t.dataId).values,w=e.data.get(s.dataId).values,W=k.values;for(let T=0;T<p.batchSize;++T){const D=T*C,z=T*H;for(let O=0;O<p.outHeight;++O){const E=z+O*A,$=O*p.strideHeight-x;for(let L=0;L<f;++L){const P=$+L*h;if(P<0||P>=p.inHeight)continue;const B=L*y[0],G=D+P*M;for(let U=0;U<p.outWidth;++U){const _=E+U*N,X=U*p.strideWidth-I;for(let Y=0;Y<m;++Y){const Z=X+Y*g;if(Z<0||Z>=p.inWidth)continue;const ee=B+Y*y[1],oe=G+Z*V;let te=ee;for(let J=0;J<p.inChannels;++J){const ae=v[oe+J*R];for(let se=0;se<p.outChannels;++se)W[_+se*F]+=ae*w[te+se];te+=p.outChannels}}}}}}return e.makeTensorInfo(k.shape,k.dtype,W)}const Wi={kernelName:Is,backendName:"cpu",kernelFunc:wn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hi(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,dy:s}=a,{strides:l,pad:c,dataFormat:d,dimRoundingMode:i,filterShape:r}=n;q([t,s],"conv2dBackpropFilter");const u=rt(d),p=Oe(t.shape,r,l,1,c,i,!1,u),{strideHeight:f,strideWidth:m,filterHeight:h,filterWidth:g}=p,I=p.dataFormat==="channelsLast",x=new le(p.filterShape,"float32"),b=p.padInfo.left,k=p.padInfo.top,S=e.data.get(t.dataId).values,y=e.data.get(s.dataId).values,C=new le(t.shape,t.dtype,S),M=new le(s.shape,s.dtype,y);for(let V=0;V<h;++V){const R=Math.max(0,Math.ceil((k-V)/f)),H=Math.min(p.outHeight,(p.inHeight+k-V)/f);for(let A=0;A<g;++A){const N=Math.max(0,Math.ceil((b-A)/m)),F=Math.min(p.outWidth,(p.inWidth+b-A)/m);for(let v=0;v<p.inChannels;++v)for(let w=0;w<p.outChannels;++w){let W=0;for(let T=0;T<p.batchSize;++T)for(let D=R;D<H;++D){const z=V+D*f-k;for(let O=N;O<F;++O){const E=A+O*m-b;I?W+=C.get(T,z,E,v)*M.get(T,D,O,w):W+=C.get(T,v,z,E)*M.get(T,w,D,O)}}x.set(W,V,A,v,w)}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const Ai={kernelName:ks,backendName:"cpu",kernelFunc:Hi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oi(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,filter:s}=a,{inputShape:l,strides:c,pad:d,dataFormat:i,dimRoundingMode:r}=n;q([t,s],"conv2dBackpropInput");const u=K(s.shape),p=K(t.shape);let f=rt(i);const m=Oe(l,s.shape,c,1,d,r,!1,f),h=new le(m.inShape,"float32"),g=h.values,I=e.data.get(t.dataId).values,x=e.data.get(s.dataId).values,[b,k,S]=u,{batchSize:y,filterHeight:C,filterWidth:M,inChannels:V,inHeight:R,inWidth:H,outChannels:A,outHeight:N,outWidth:F,strideHeight:v,strideWidth:w}=m;f=m.dataFormat;const W=C-1-m.padInfo.top,T=M-1-m.padInfo.left,D=f==="channelsLast",z=h.strides[0],O=D?h.strides[1]:h.strides[2],E=D?h.strides[2]:1,$=D?1:h.strides[1],L=p[0],P=D?p[1]:p[2],B=D?p[2]:1,G=D?1:p[1];for(let U=0;U<y;++U)for(let _=0;_<V;++_)for(let X=0;X<R;++X){const Y=X-W,Z=Math.max(0,Math.ceil(Y/v)),ee=Math.min(N,(C+Y)/v);for(let oe=0;oe<H;++oe){const te=oe-T,J=Math.max(0,Math.ceil(te/w)),ae=Math.min(F,(M+te)/w);let se=0;for(let re=Z;re<ee;++re){const xe=re*v-Y;for(let de=J;de<ae;++de){const we=de*w-te,fe=L*U+P*re+B*de,ge=b*(C-1-xe)+k*(M-1-we)+S*_;for(let be=0;be<A;++be){const Se=I[fe+G*be],ye=x[ge+be];se+=Se*ye}}}const me=z*U+O*X+E*oe+$*_;g[me]=se}}return e.makeTensorInfo(h.shape,h.dtype,h.values)}const zi={kernelName:xs,backendName:"cpu",kernelFunc:Oi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $i(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,filter:s}=a,{strides:l,pad:c,dilations:d}=n;q([t,s],"conv3d");const i=it(t.shape,s.shape,l,d,c),{filterDepth:r,filterHeight:u,filterWidth:p,dilationDepth:f,dilationHeight:m,dilationWidth:h,padInfo:g}=i,I=g.front,x=g.left,b=g.top,k=new le(i.outShape,t.dtype),S=e.data.get(t.dataId).values,y=e.data.get(s.dataId).values,C=k.values,M=K(t.shape),V=K(s.shape);for(let R=0;R<i.batchSize;++R){const H=R*M[0],A=R*k.strides[0];for(let N=0;N<i.outDepth;++N){const F=A+N*k.strides[1],v=N*i.strideDepth-I;for(let w=0;w<r;++w){const W=v+w*f;if(W<0||W>=i.inDepth)continue;const T=w*V[0],D=H+W*M[1];for(let z=0;z<i.outHeight;++z){const O=F+z*k.strides[2],E=z*i.strideHeight-b;for(let $=0;$<u;++$){const L=E+$*m;if(L<0||L>=i.inHeight)continue;const P=T+$*V[1],B=D+L*M[2];for(let G=0;G<i.outWidth;++G){const U=O+G*i.outChannels,_=G*i.strideWidth-x;for(let X=0;X<p;++X){const Y=_+X*h;if(Y<0||Y>=i.inWidth)continue;const Z=P+X*V[2],ee=B+Y*i.inChannels;let oe=Z;for(let te=0;te<i.inChannels;++te){const J=S[ee+te];for(let ae=0;ae<i.outChannels;++ae)C[U+ae]+=J*y[oe+ae];oe+=i.outChannels}}}}}}}}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const Pi={kernelName:bs,backendName:"cpu",kernelFunc:$i};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ei(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,dy:s}=a,{strides:l,pad:c,filterShape:d}=n;q([t,s],"conv3dBackpropFilterV2");const i=K(t.shape),r=K(s.shape),u=it(t.shape,d,l,1,c),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,h=u.filterDepth,g=u.filterHeight,I=u.filterWidth,x=new le(u.filterShape,"float32"),b=x.values,[k,S,y,C]=x.strides,M=e.data.get(s.dataId).values,[V,R,H,A]=r,N=e.data.get(t.dataId).values,[F,v,w,W]=i,T=u.padInfo.front,D=u.padInfo.left,z=u.padInfo.top;for(let O=0;O<h;++O){const E=Math.max(0,Math.ceil((T-O)/p)),$=Math.min(u.outDepth,(u.inDepth+T-O)/p),L=O*k;for(let P=0;P<g;++P){const B=Math.max(0,Math.ceil((z-P)/f)),G=Math.min(u.outHeight,(u.inHeight+z-P)/f),U=P*S+L;for(let _=0;_<I;++_){const X=Math.max(0,Math.ceil((D-_)/m)),Y=Math.min(u.outWidth,(u.inWidth+D-_)/m),Z=_*y+U;for(let ee=0;ee<u.inChannels;++ee){const oe=ee*C+Z;for(let te=0;te<u.outChannels;++te){let J=0;for(let ae=0;ae<u.batchSize;++ae){const se=ae*F,me=ae*V;for(let re=E;re<$;++re){const de=(O+re*p-T)*v+se,we=re*R+me;for(let fe=B;fe<G;++fe){const be=(P+fe*f-z)*w+de,Se=fe*H+we;for(let ye=X;ye<Y;++ye){const Qe=(_+ye*m-D)*W+be,et=ye*A+Se;J+=N[Qe+ee]*M[et+te]}}}}b[oe+te]=J}}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const Li={kernelName:Ss,backendName:"cpu",kernelFunc:Ei};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bi(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,filter:s}=a,{pad:l,strides:c,inputShape:d}=n;q([t],"conv3dBackpropInputV2");const i=K(t.shape),r=K(s.shape),u=it(d,s.shape,c,1,l),p=new le(u.inShape,"float32"),f=p.values,[m,h,g,I]=p.strides,x=e.data.get(t.dataId).values,[b,k,S,y]=i,C=e.data.get(s.dataId).values,[M,V,R,H]=r,{batchSize:A,filterDepth:N,filterHeight:F,filterWidth:v,inChannels:w,inDepth:W,inHeight:T,inWidth:D,outChannels:z,outDepth:O,outHeight:E,outWidth:$,strideDepth:L,strideHeight:P,strideWidth:B}=u,G=N-1-u.padInfo.front,U=F-1-u.padInfo.top,_=v-1-u.padInfo.left;for(let X=0;X<A;++X)for(let Y=0;Y<w;++Y)for(let Z=0;Z<W;++Z){const ee=Z-G,oe=Math.max(0,Math.ceil(ee/L)),te=Math.min(O,(N+ee)/L);for(let J=0;J<T;++J){const ae=J-U,se=Math.max(0,Math.ceil(ae/P)),me=Math.min(E,(F+ae)/P);for(let re=0;re<D;++re){const xe=re-_,de=Math.max(0,Math.ceil(xe/B)),we=Math.min($,(v+xe)/B);let fe=0;for(let ge=oe;ge<te;++ge){const be=ge*L-ee;for(let Se=se;Se<me;++Se){const ye=Se*P-ae;for(let $e=de;$e<we;++$e){const Qe=$e*B-xe,et=b*X+k*ge+S*Se+y*$e,Hn=M*(N-1-be)+V*(F-1-ye)+R*(v-1-Qe)+H*Y;for(let _e=0;_e<z;++_e){const An=x[et+_e],On=C[Hn+_e];fe+=An*On}}}}f[m*X+h*Z+g*J+I*re+Y]=fe}}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}const Gi={kernelName:ys,backendName:"cpu",kernelFunc:Bi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qi=Q(Et,o=>Math.cos(o)),_i={kernelName:Et,backendName:"cpu",kernelFunc:qi};/**
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
 */const Ui=Q(Lt,o=>Math.cosh(o)),ji={kernelName:Lt,backendName:"cpu",kernelFunc:Ui};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xi(o){const{inputs:a,backend:e,attrs:n}=o,{image:t,boxes:s,boxInd:l}=a,{cropSize:c,method:d,extrapolationValue:i}=n,[r,u,p,f]=t.shape,m=s.shape[0],[h,g]=c,I=ie([m,h,g,f],"float32"),x=e.data.get(s.dataId).values,b=e.data.get(l.dataId).values,k=e.data.get(t.dataId).values,S=K(t.shape),y=K(I.shape);for(let C=0;C<m;C++){const M=C*4,V=x[M],R=x[M+1],H=x[M+2],A=x[M+3],N=b[C];if(N>=r)continue;const F=h>1?(H-V)*(u-1)/(h-1):0,v=g>1?(A-R)*(p-1)/(g-1):0;for(let w=0;w<h;w++){const W=h>1?V*(u-1)+w*F:.5*(V+H)*(u-1);if(W<0||W>u-1){for(let T=0;T<g;T++)for(let D=0;D<f;D++){const z=D+T*y[2]+w*y[1]+C*y[0];I.values[z]=i}continue}if(d==="bilinear"){const T=Math.floor(W),D=Math.ceil(W),z=W-T;for(let O=0;O<g;O++){const E=g>1?R*(p-1)+O*v:.5*(R+A)*(p-1);if(E<0||E>p-1){for(let B=0;B<f;B++){const G=B+O*y[2]+w*y[1]+C*y[0];I.values[G]=i}continue}const $=Math.floor(E),L=Math.ceil(E),P=E-$;for(let B=0;B<f;B++){let G=B+$*S[2]+T*S[1]+N*S[0];const U=k[G];G=B+L*S[2]+T*S[1]+N*S[0];const _=k[G];G=B+$*S[2]+D*S[1]+N*S[0];const X=k[G];G=B+L*S[2]+D*S[1]+N*S[0];const Y=k[G],Z=U+(_-U)*P,ee=X+(Y-X)*P;G=B+O*y[2]+w*y[1]+C*y[0],I.values[G]=Z+(ee-Z)*z}}}else for(let T=0;T<g;++T){const D=g>1?R*(p-1)+T*v:.5*(R+A)*(p-1);if(D<0||D>p-1){for(let E=0;E<f;E++){const $=E+T*y[2]+w*y[1]+C*y[0];I.values[$]=i}continue}const z=Math.round(D),O=Math.round(W);for(let E=0;E<f;E++){const $=E+z*S[2]+O*S[1]+N*S[0],L=E+T*y[2]+w*y[1]+C*y[0];I.values[L]=k[$]}}}}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const Yi={kernelName:Cs,backendName:"cpu",kernelFunc:Xi};/**
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
 */function Ki(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,exclusive:l,reverse:c}=n;q(t,"cumprod");const d=Ie([s],t.shape.length);let i=t;d!=null&&(i=pe({inputs:{x:t},backend:e,attrs:{perm:d}}));const r=ke(1,t.shape.length)[0];if(r!==i.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${i.shape.length-1} but got axis=${r}`);const u=Ze(i.dtype,"int32"),p=vs(j(i.shape),u),f=e.data.get(i.dataId).values,m=i.shape[i.shape.length-1],h=c?(I,x)=>I+m-x-1:(I,x)=>I+x;for(let I=0;I<f.length;I+=m)for(let x=0;x<m;x++){const b=h(I,x);if(x===0)p[b]=l?1:f[b];else{const k=h(I,x-1);p[b]=l?f[k]*p[k]:f[b]*p[k]}}const g=e.makeTensorInfo(i.shape,u,p);if(d!=null){const I=Bt(d),x=pe({inputs:{x:g},backend:e,attrs:{perm:I}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(i),x}return g}const Zi={kernelName:Ns,backendName:"cpu",kernelFunc:Ki};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ji(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,exclusive:l,reverse:c}=n;q(t,"cumsum");const d=Ie([s],t.shape.length);let i=t;d!=null&&(i=pe({inputs:{x:t},backend:e,attrs:{perm:d}}));const r=ke(1,t.shape.length)[0];if(r!==i.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${i.shape.length-1} but got axis=${r}`);const u=Ze(i.dtype,"int32"),p=ve(j(i.shape),u),f=e.data.get(i.dataId).values,m=i.shape[i.shape.length-1],h=c?(I,x)=>I+m-x-1:(I,x)=>I+x;for(let I=0;I<f.length;I+=m)for(let x=0;x<m;x++){const b=h(I,x);if(x===0)p[b]=l?0:f[b];else{const k=h(I,x-1);p[b]=l?f[k]+p[k]:f[b]+p[k]}}const g=e.makeTensorInfo(i.shape,u,p);if(d!=null){const I=Bt(d),x=pe({inputs:{x:g},backend:e,attrs:{perm:I}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(i),x}return g}const Qi={kernelName:ws,backendName:"cpu",kernelFunc:Ji};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ec(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,weights:s}=a,{size:l,binaryOutput:c}=n;if(t.shape.length===1){const d=e.data.get(t.dataId).values,i=e.data.get(s.dataId).values,r=mn(d,i,s.dtype,s.shape,l);return e.makeTensorInfo([l],s.dtype,r)}else if(t.shape.length===2){const d=e.bufferSync(t),i=e.bufferSync(s),r=To(d,i,l,c);return e.makeTensorInfo(r.shape,s.dtype,r.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${t.shape.length}.`)}const tc={kernelName:Ts,backendName:"cpu",kernelFunc:ec};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nc(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{blockSize:s,dataFormat:l}=n;ce(l==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${l}`);const c=t.shape[0],d=t.shape[1],i=t.shape[2],r=t.shape[3],u=d*s,p=i*s,f=r/(s*s),m=e.data.get(t.dataId).values,h=new Float32Array(c*u*p*f);let g=0;for(let I=0;I<c;++I)for(let x=0;x<u;++x){const b=Math.floor(x/s),k=x%s;for(let S=0;S<p;++S){const y=Math.floor(S/s),C=S%s,M=(k*s+C)*f;for(let V=0;V<f;++V){const H=V+M+r*(y+i*(b+d*I));h[g++]=m[H]}}}return e.makeTensorInfo([c,u,p,f],t.dtype,h)}const sc={kernelName:Ms,backendName:"cpu",kernelFunc:nc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tn(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,filter:s}=a,{strides:l,pad:c,dilations:d,dimRoundingMode:i}=n;q([t,s],"depthwiseConv2DNative");const r=K(t.shape),u=K(s.shape);let p=d;p==null&&(p=[1,1]),ce(at(l,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${p}'`);const f=Oe(t.shape,s.shape,l,p,c,i,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:I,padInfo:x}=f,b=x.left,k=x.top,S=f.outChannels/f.inChannels,y=new le(f.outShape,t.dtype),C=e.data.get(t.dataId).values,M=e.data.get(s.dataId).values,V=y.values;for(let R=0;R<f.batchSize;++R){const H=R*r[0],A=R*y.strides[0];for(let N=0;N<f.outHeight;++N){const F=A+N*y.strides[1],v=N*f.strideHeight-k;for(let w=0;w<m;++w){const W=v+w*g;if(W<0||W>=f.inHeight)continue;const T=w*u[0],D=H+W*r[1];for(let z=0;z<f.outWidth;++z){const O=F+z*y.strides[2],E=z*f.strideWidth-b;for(let $=0;$<h;++$){const L=E+$*I;if(L<0||L>=f.inWidth)continue;const P=T+$*u[1],B=D+L*f.inChannels;let G=O,U=P;for(let _=0;_<f.inChannels;++_){const X=C[B+_];for(let Y=0;Y<S;++Y)V[G+Y]+=X*M[U+Y];G+=S,U+=S}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const ac={kernelName:Fs,backendName:"cpu",kernelFunc:Tn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oc(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,dy:s}=a,{strides:l,dilations:c,pad:d,dimRoundingMode:i,filterShape:r}=n;q([t,s],"depthwiseConv2dNativeBackpropFilter");const u=Oe(t.shape,r,l,c,d,i,!0),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:h}=u,g=new le(u.filterShape,"float32"),I=u.padInfo.left,x=u.padInfo.top,b=u.outChannels/u.inChannels,k=e.data.get(t.dataId).values,S=new le(t.shape,t.dtype,k),y=e.data.get(s.dataId).values,C=new le(s.shape,s.dtype,y);for(let M=0;M<m;++M){const V=Math.max(0,Math.ceil((x-M)/p)),R=Math.min(u.outHeight,(u.inHeight+x-M)/p);for(let H=0;H<h;++H){const A=Math.max(0,Math.ceil((I-H)/f)),N=Math.min(u.outWidth,(u.inWidth+I-H)/f);for(let F=0;F<u.outChannels;++F){const v=Math.trunc(F/b),w=F%b;let W=0;for(let T=0;T<u.batchSize;++T)for(let D=V;D<R;++D){const z=M+D*p-x;for(let O=A;O<N;++O){const E=H+O*f-I;W+=S.get(T,z,E,v)*C.get(T,D,O,F)}}g.set(W,M,H,v,w)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const rc={kernelName:Rs,backendName:"cpu",kernelFunc:oc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ic(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,filter:s}=a,{strides:l,dilations:c,pad:d,dimRoundingMode:i,inputShape:r}=n;q([t,s],"depthwiseConv2DNativeBackpropInput");const u=K(t.shape),p=K(s.shape),f=Oe(r,s.shape,l,c,d,i,!0),m=new le(f.inShape,"float32"),h=m.values,[g,I,x]=m.strides,b=e.data.get(t.dataId).values,[k,S,y]=u,C=e.data.get(s.dataId).values,[M,V,R]=p,{batchSize:H,filterHeight:A,filterWidth:N,inChannels:F,inHeight:v,inWidth:w,outChannels:W,outHeight:T,outWidth:D,strideHeight:z,strideWidth:O}=f,E=A-1-f.padInfo.top,$=N-1-f.padInfo.left,L=W/F;for(let P=0;P<H;++P)for(let B=0;B<F;++B)for(let G=0;G<v;++G){const U=G-E,_=Math.max(0,Math.ceil(U/z)),X=Math.min(T,(A+U)/z);for(let Y=0;Y<w;++Y){const Z=Y-$,ee=Math.max(0,Math.ceil(Z/O)),oe=Math.min(D,(N+Z)/O);let te=0;for(let J=_;J<X;++J){const ae=J*z-U;for(let se=ee;se<oe;++se){const me=se*O-Z,re=k*P+S*J+y*se,xe=M*(A-1-ae)+V*(N-1-me)+R*B;for(let de=0;de<L;++de){const we=B*L+de,fe=b[re+we],ge=C[xe+de];te+=fe*ge}}}h[g*P+I*G+x*Y+B]=te}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const cc={kernelName:Ds,backendName:"cpu",kernelFunc:ic};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lc(o){const{inputs:a,backend:e}=o,{x:n}=a,t=j(n.shape),s=e.data.get(n.dataId).values,l=ie([t,t],n.dtype),c=l.values;for(let i=0;i<s.length;i++)c[i*t+i]=s[i];const d=[...n.shape,...n.shape];return e.makeTensorInfo(d,l.dtype,l.values)}const dc={kernelName:Vs,backendName:"cpu",kernelFunc:lc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pc={kernelName:Ws,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:e})=>{const{x:n,filter:t}=o,{strides:s,pad:l,dilations:c}=e,d=a,i=d.data.get(n.dataId).values,r=n.shape.length,u=d.data.get(t.dataId).values,p=t.shape.length,{batchSize:f,inHeight:m,inWidth:h,inChannels:g,outHeight:I,outWidth:x,padInfo:b,strideHeight:k,strideWidth:S,filterHeight:y,filterWidth:C,dilationHeight:M,dilationWidth:V,outShape:R}=ct(n.shape,t.shape,s,l,"NHWC",c),H=j(R),A=R.length,N=lt(n.dtype,H);for(let v=0;v<f;++v)for(let w=0;w<I;++w){const W=w*k-b.top;for(let T=0;T<x;++T){const D=T*S-b.left;for(let z=0;z<g;++z){let O=Number.MIN_SAFE_INTEGER;for(let $=0;$<y;++$){const L=W+$*M;if(L>=0&&L<m)for(let P=0;P<C;++P){const B=D+P*V;if(B>=0&&B<h){const G=Ee([v,L,B,z],r,K(n.shape)),U=Ee([$,P,z],p,K(t.shape)),_=i[G]+u[U];_>O&&(O=_)}}}const E=Ee([v,w,T,z],A,K(R));N[E]=O}}}return{dataId:d.write(dt(N,n.dtype),R,n.dtype),shape:R,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uc={kernelName:bt,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:e})=>{const{x:n,filter:t,dy:s}=o,{strides:l,pad:c,dilations:d}=e,i=a,r=De(n.shape,i.data.get(n.dataId).values),u=De(t.shape,i.data.get(t.dataId).values),{batchSize:p,inHeight:f,inWidth:m,inChannels:h,outHeight:g,outWidth:I,padInfo:x,strideHeight:b,strideWidth:k,filterHeight:S,filterWidth:y,dilationHeight:C,dilationWidth:M,outShape:V}=ct(n.shape,t.shape,l,c,"NHWC",d);ce(s.rank===V.length,()=>`Error in ${bt}, dy must have the same rank as output ${V.length}, but got ${s.rank}`);const R=De(V,i.data.get(s.dataId).values),H=Gt(t.shape,t.dtype);for(let N=0;N<p;++N)for(let F=0;F<g;++F){const v=F*b-x.top;for(let w=0;w<I;++w){const W=w*k-x.left;for(let T=0;T<h;++T){let D=Number.MIN_SAFE_INTEGER,z=0,O=0;for(let E=0;E<S;++E){const $=v+E*C;if($>=0&&$<f)for(let L=0;L<y;++L){const P=W+L*M;if(P>=0&&P<m){const B=r[N][$][P][T]+u[E][L][T];B>D&&(D=B,z=E,O=L)}}}H[z][O][T]+=R[N][F][w][T]}}}return{dataId:i.write(dt(H,n.dtype),t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fc={kernelName:St,backendName:"cpu",kernelFunc:({inputs:o,backend:a,attrs:e})=>{const{x:n,filter:t,dy:s}=o,{strides:l,pad:c,dilations:d}=e,i=a,r=De(n.shape,i.data.get(n.dataId).values),u=De(t.shape,i.data.get(t.dataId).values),{batchSize:p,inHeight:f,inWidth:m,inChannels:h,outHeight:g,outWidth:I,padInfo:x,strideHeight:b,strideWidth:k,filterHeight:S,filterWidth:y,dilationHeight:C,dilationWidth:M,outShape:V}=ct(n.shape,t.shape,l,c,"NHWC",d);ce(s.rank===V.length,()=>`Error in ${St}, dy must have the same rank as output ${V.length}, but got ${s.rank}`);const R=De(V,i.data.get(s.dataId).values),H=Gt(n.shape,n.dtype);for(let N=0;N<p;++N)for(let F=0;F<g;++F){const v=F*b-x.top;for(let w=0;w<I;++w){const W=w*k-x.left;for(let T=0;T<h;++T){let D=Number.MIN_SAFE_INTEGER,z=v<0?0:v,O=W<0?0:W;for(let E=0;E<S;++E){const $=v+E*C;if($>=0&&$<f)for(let L=0;L<y;++L){const P=W+L*M;if(P>=0&&P<m){const B=r[N][$][P][T]+u[E][L][T];B>D&&(D=B,z=$,O=P)}}}H[N][z][O][T]+=R[N][F][w][T]}}}return{dataId:i.write(dt(H,n.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
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
 */function hc(o){const{inputs:a,backend:e,attrs:n}=o,{image:t}=a,{canvas:s,options:l}=n,{contextOptions:c,imageOptions:d}=l||{},i=(d==null?void 0:d.alpha)||1,r=(c==null?void 0:c.contextType)||"2d";if(r!=="2d")throw new Error(`Context type ${c.contextType} is not supported by the CPU backend.`);const u=s.getContext(r,(c==null?void 0:c.contextAttributes)||{});if(u==null)throw new Error(`Could not get the context with ${r} type.`);const[p,f]=t.shape.slice(0,2),m=t.shape.length===2?1:t.shape[2],h=e.data.get(t.dataId).values,g=t.dtype==="float32"?255:1,I=new Uint8ClampedArray(f*p*4);for(let b=0;b<p*f;++b){const k=[0,0,0,255*i];for(let y=0;y<m;y++){const C=h[b*m+y];if(t.dtype==="float32"){if(C<0||C>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${C}.`)}else if(t.dtype==="int32"&&(C<0||C>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${C}.`);m===1?(k[0]=C*g,k[1]=C*g,k[2]=C*g):k[y]=C*g}const S=b*4;I[S+0]=Math.round(k[0]),I[S+1]=Math.round(k[1]),I[S+2]=Math.round(k[2]),I[S+3]=Math.round(k[3])}s.width=f,s.height=p;const x=new ImageData(I,f,p);return u.putImageData(x,0,0),t}const mc={kernelName:Hs,backendName:"cpu",kernelFunc:hc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qe(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,keepDims:l}=n;q(t,"sum");let c;t.dtype==="bool"?c=ft({inputs:{x:t},backend:e,attrs:{dtype:"int32"}}):c=Fe({inputs:{x:t},backend:e});const d=c.shape.length,i=ue(s,c.shape),r=Ie(i,d);let u=i,p=c;r!=null&&(p=pe({inputs:{x:c},backend:e,attrs:{perm:r}}),u=ke(u.length,d)),Te("sum",u,p.shape.length);const[f,m]=Ne(p.shape,u),h=Ze(p.dtype,"int32");let g=Mo(e,f,h);const I=j(m),x=e.data.get(g.dataId).values,b=e.data.get(p.dataId).values;for(let k=0;k<x.length;++k){const S=k*I;let y=0;for(let C=0;C<I;++C)y+=b[S+C];x[k]=y}if(l){const k=Ae(g.shape,i),S=g;g=ne({inputs:{x:g},backend:e,attrs:{shape:k}}),e.disposeIntermediateTensorInfo(S)}return e.disposeIntermediateTensorInfo(c),r!=null&&e.disposeIntermediateTensorInfo(p),g}const gc={kernelName:As,backendName:"cpu",kernelFunc:qe};/**
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
 */function Ic(o){const{inputs:a,backend:e,attrs:n}=o,{equation:t}=n,s=a,{allDims:l,summedDims:c,idDims:d}=zs(t,s.length);$s(l.length,d,s);const{path:i,steps:r}=Ps(c,d),u=r.length;let p=null,f=l.length;const m=[];for(let h=0;h<u;++h){for(const g of r[h]){const{permutationIndices:I,expandDims:x}=Es(f,d[g]);let b;Ls(I)?b=s[g]:(b=pe({inputs:{x:s[g]},backend:e,attrs:{perm:I}}),m.push(b));const k=b.shape.slice();for(let S=0;S<x.length;++S)k.splice(x[S],0,1);ot(b.shape,k)||(b=ne({inputs:{x:b},backend:e,attrs:{shape:k}}),m.push(b)),p===null?p=b:(p=ht({inputs:{a:b,b:p},backend:e}),m.push(p))}h<u-1&&(i[h]>=0&&(p=qe({inputs:{x:p},backend:e,attrs:{axis:i[h]-(l.length-f),keepDims:!1}}),m.push(p)),f--)}for(const h of m)h!==p&&e.disposeIntermediateTensorInfo(h);return p}const kc={kernelName:Os,backendName:"cpu",kernelFunc:Ic};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xc(o){const{inputs:a,backend:e}=o,{dy:n,y:t}=a;q([n,t],"eluGrad");const s=new Float32Array(j(t.shape)),l=e.data.get(t.dataId).values,c=e.data.get(n.dataId).values;for(let d=0;d<l.length;++d){const i=l[d];i>=0?s[d]=c[d]:s[d]=c[d]*(i+1)}return e.makeTensorInfo(t.shape,"float32",s)}const bc={kernelName:Bs,backendName:"cpu",kernelFunc:xc};/**
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
 */const Sc=Xs,yc=Gs,Cc=qs,Nc=_s,vc=Us,wc=js,Tc=Q(qt,o=>{const a=Math.sign(o),e=Math.abs(o),n=1/(1+Sc*e);return a*(1-((((wc*n+vc)*n+Nc)*n+Cc)*n+yc)*n*Math.exp(-e*e))}),Mc={kernelName:qt,backendName:"cpu",kernelFunc:Tc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function je(o){const{inputs:a,backend:e,attrs:n}=o,{input:t}=a,{dim:s}=n,l=t.shape.length,c=t.shape.slice();let d=s;return s<0&&(ce(-(l+1)<=s,()=>`Axis must be in the interval [${-(l+1)}, ${l}]`),d=l+s+1),c.splice(d,0,1),ne({inputs:{x:t},backend:e,attrs:{shape:c}})}const Fc={kernelName:Ys,backendName:"cpu",kernelFunc:je};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rc=Me((o,a)=>o/a),gt=ze(_t,Rc),nt={kernelName:_t,backendName:"cpu",kernelFunc:gt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mn(o,a,e){const n=o.shape,t=n[0],s=n[1],l=e.data.get(o.dataId),c=l.complexTensorInfos.real,d=l.complexTensorInfos.imag,i=[t,s],r=j(i),u=Ce("float32",r),p=Ce("float32",r);for(let g=0;g<t;g++){const I=Ve({inputs:{x:c},backend:e,attrs:{begin:[g,0],size:[1,s]}}),x=Ve({inputs:{x:d},backend:e,attrs:{begin:[g,0],size:[1,s]}}),b=he({inputs:{real:I,imag:x},backend:e}),{real:k,imag:S}=Dc(b,a,e),y=Ye(k,S);for(let C=0;C<s;C++){const M=Ut(y,C);u[g*s+C]=M.real,p[g*s+C]=M.imag}e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b)}const f=e.makeTensorInfo(i,"float32",u),m=e.makeTensorInfo(i,"float32",p),h=he({inputs:{real:f,imag:m},backend:e});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),h}function Dc(o,a,e){const n=j(o.shape),t=e.data.get(o.dataId),s=e.data.get(t.complexTensorInfos.real.dataId).values,l=e.data.get(t.complexTensorInfos.imag.dataId).values;if(Vc(n)){const c=st(s,l,n,a,e),d=[o.shape[0],o.shape[1]];if(a){const i=e.makeTensorInfo(d,"float32",c.real),r=e.makeTensorInfo(d,"float32",c.imag),u=e.makeTensorInfo([],"float32",jt(n,"float32")),p=Fe({inputs:{x:u},backend:e}),f=nt.kernelFunc({inputs:{a:i,b:u},backend:e}),m=nt.kernelFunc({inputs:{a:r,b:p},backend:e}),h=e.data.get(f.dataId).values,g=e.data.get(m.dataId).values;return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),{real:h,imag:g}}return c}else{const c=Ye(s,l),d=Wc(c,n,a);return Ks(d)}}function Vc(o){return(o&o-1)===0}function st(o,a,e,n,t){if(e===1)return{real:o,imag:a};const s=Ye(o,a),l=e/2,c=Zs(s),d=c.real,i=c.imag,r=[d.length],u=t.makeTensorInfo(r,"float32",d),p=t.makeTensorInfo(r,"float32",i),f=he({inputs:{real:u,imag:p},backend:t}),m=Js(s),h=m.real,g=m.imag,I=[h.length],x=t.makeTensorInfo(I,"float32",h),b=t.makeTensorInfo(I,"float32",g),k=he({inputs:{real:x,imag:b},backend:t}),S=st(d,i,l,n,t),y=S.real,C=S.imag,M=[y.length],V=t.makeTensorInfo(M,"float32",y),R=t.makeTensorInfo(M,"float32",C),H=he({inputs:{real:V,imag:R},backend:t}),A=st(h,g,l,n,t),N=A.real,F=A.imag,v=[N.length],w=t.makeTensorInfo(v,"float32",N),W=t.makeTensorInfo(v,"float32",F),T=he({inputs:{real:w,imag:W},backend:t}),D=Qs(e,n),z=[D.real.length],O=t.makeTensorInfo(z,"float32",D.real),E=t.makeTensorInfo(z,"float32",D.imag),$=he({inputs:{real:O,imag:E},backend:t}),L=ht({inputs:{a:$,b:T},backend:t}),P=Le({inputs:{a:H,b:L},backend:t}),B=gn({inputs:{a:H,b:L},backend:t}),G=Be({inputs:{input:P},backend:t}),U=Be({inputs:{input:B},backend:t}),_=We({inputs:{input:P},backend:t}),X=We({inputs:{input:B},backend:t}),Y=He({inputs:[G,U],backend:t,attrs:{axis:0}}),Z=He({inputs:[_,X],backend:t,attrs:{axis:0}}),ee=t.data.get(Y.dataId).values,oe=t.data.get(Z.dataId).values;return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(V),t.disposeIntermediateTensorInfo(R),t.disposeIntermediateTensorInfo(H),t.disposeIntermediateTensorInfo(w),t.disposeIntermediateTensorInfo(W),t.disposeIntermediateTensorInfo(T),t.disposeIntermediateTensorInfo(O),t.disposeIntermediateTensorInfo(E),t.disposeIntermediateTensorInfo($),t.disposeIntermediateTensorInfo(L),t.disposeIntermediateTensorInfo(P),t.disposeIntermediateTensorInfo(B),t.disposeIntermediateTensorInfo(G),t.disposeIntermediateTensorInfo(_),t.disposeIntermediateTensorInfo(U),t.disposeIntermediateTensorInfo(X),t.disposeIntermediateTensorInfo(Y),t.disposeIntermediateTensorInfo(Z),{real:ee,imag:oe}}function Wc(o,a,e){const n=new Float32Array(a*2);for(let t=0;t<a;t++){let s=0,l=0;for(let c=0;c<a;c++){const d=ta(t*c,a,e),i=Ut(o,c);s+=i.real*d.real-i.imag*d.imag,l+=i.real*d.imag+i.imag*d.real}e&&(s/=a,l/=a),ea(n,s,l,t)}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hc(o){const{inputs:a,backend:e}=o,{input:n}=a,t=j(n.shape),s=n.shape[n.shape.length-1],l=t/s,c=ne({inputs:{x:n},backend:e,attrs:{shape:[l,s]}}),d=Mn(c,!1,e),i=ne({inputs:{x:d},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(d),i}const Ac={kernelName:na,backendName:"cpu",kernelFunc:Hc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function It(o){const{backend:a,attrs:e}=o,{shape:n,value:t,dtype:s}=e,l=s||aa(t),c=lt(l,j(n));return zc(c,t,l),a.makeTensorInfo(n,l,c)}const Oc={kernelName:sa,backendName:"cpu",kernelFunc:It};function zc(o,a,e){o.fill(a)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $c={kernelName:oa,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:e})=>{const{image:n}=o,t=e,s=Ce(n.dtype,j(n.shape)),[l,c,d,i]=n.shape,r=t.data.get(n.dataId).values;for(let p=0;p<l;p++){const f=p*d*c*i;for(let m=0;m<c;m++){const h=m*(d*i);for(let g=0;g<d;g++){const I=g*i;for(let x=0;x<i;x++){const b=Math.round(d-g-1),k=f+h+I+x;let S=r[k];if(b>=0&&b<d){const y=b*i,C=f+h+y+x;S=r[C]}s[k]=S}}}}return{dataId:t.write(s,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pc(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,filter:s,bias:l,preluActivationWeights:c}=a,{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=n;let h=wn({inputs:{x:t,filter:s},backend:e,attrs:{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p}});if(l){const g=h;if(r==="NCHW"&&l.shape.length===1&&l.shape[0]!==1){const I=ne({inputs:{x:l},backend:e,attrs:{shape:[l.shape[0],1,1]}});h=Le({inputs:{a:h,b:I},backend:e}),e.disposeIntermediateTensorInfo(I)}else h=Le({inputs:{a:h,b:l},backend:e});e.disposeIntermediateTensorInfo(g)}if(f){const g=h;if(r==="NCHW"&&f==="prelu"&&c.shape.length===1&&c.shape[0]!==1){const I=ne({inputs:{x:c},backend:e,attrs:{shape:[c.shape[0],1,1]}});h=Ue(e,h,f,I,m),e.disposeIntermediateTensorInfo(I)}else h=Ue(e,h,f,c,m);e.disposeIntermediateTensorInfo(g)}return h}const Ec={kernelName:ra,backendName:"cpu",kernelFunc:Pc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lc(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,filter:s,bias:l,preluActivationWeights:c}=a,{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=n;let h=Tn({inputs:{x:t,filter:s},backend:e,attrs:{strides:d,pad:i,dataFormat:r,dilations:u,dimRoundingMode:p}});if(l){const g=h;h=Le({inputs:{a:h,b:l},backend:e}),e.disposeIntermediateTensorInfo(g)}if(f){const g=h;h=Ue(e,h,f,c,m),e.disposeIntermediateTensorInfo(g)}return h}const Bc={kernelName:ia,backendName:"cpu",kernelFunc:Lc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gc(o){const{inputs:a,backend:e}=o,{params:n,indices:t}=a,s=j(n.shape),l=t.shape,c=l[l.length-1],[d,i,r,u]=la(n,t);if(i===0)return e.makeTensorInfo(d,n.dtype,[]);const p=e.data.get(t.dataId).values,f=e.bufferSync(n),m=Fo(p,f,n.dtype,i,c,r,u,n.shape,s);return e.makeTensorInfo(d,n.dtype,m.values)}const qc={kernelName:ca,backendName:"cpu",kernelFunc:Gc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _c(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,indices:s}=a,{axis:l,batchDims:c}=n;q([t,s],"gatherV2");const d=ue(l,t.shape)[0],i=e.data.get(s.dataId).values,r=t.shape[d];for(let k=0;k<i.length;++k){const S=i[k];ce(S<=r-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${r-1}]`)}let u=c;c==null&&(u=0);const p=j(s.shape),f=pa(t,s,d,u),m=ne({inputs:{x:t},backend:e,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),h=ne({inputs:{x:s},backend:e,attrs:{shape:[f.batchSize,p/f.batchSize]}}),g=[f.batchSize,f.outerSize,p/f.batchSize,f.sliceSize],I=e.bufferSync(h),x=e.bufferSync(m),b=Ro(x,I,g);return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(h),e.makeTensorInfo(f.outputShape,b.dtype,b.values)}const Uc={kernelName:da,backendName:"cpu",kernelFunc:_c};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jc(o){const{inputs:a,backend:e}=o,{input:n}=a,t=j(n.shape),s=n.shape[n.shape.length-1],l=t/s,c=ne({inputs:{x:n},backend:e,attrs:{shape:[l,s]}}),d=Mn(c,!0,e),i=ne({inputs:{x:d},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(d),i}const Xc={kernelName:ua,backendName:"cpu",kernelFunc:jc};/**
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
 */const Yc=Q(Xt,o=>Number.isFinite(o)?1:0,"bool"),Kc={kernelName:Xt,backendName:"cpu",kernelFunc:Yc};/**
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
 */const Zc=Q(Yt,o=>Math.abs(o)===1/0?1:0,"bool"),Jc={kernelName:Yt,backendName:"cpu",kernelFunc:Zc};/**
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
 */const Qc=Q(Kt,o=>Number.isNaN(o)?1:0,"bool"),el={kernelName:Kt,backendName:"cpu",kernelFunc:Qc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tl(o){const{backend:a,attrs:e}=o,{start:n,stop:t,num:s}=e,l=Do(n,t,s);return a.makeTensorInfo([l.length],"float32",l)}const nl={kernelName:fa,backendName:"cpu",kernelFunc:tl};/**
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
 */const sl=Q(Zt,o=>Math.log1p(o)),al={kernelName:Zt,backendName:"cpu",kernelFunc:sl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ol=Me((o,a)=>o&&a),rl=ze(Jt,ol,null,"bool"),il={kernelName:Jt,backendName:"cpu",kernelFunc:rl};/**
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
 */const cl=Q(Qt,o=>o?0:1,"bool"),ll={kernelName:Qt,backendName:"cpu",kernelFunc:cl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dl=Me((o,a)=>o||a),pl=ze(en,dl,null,"bool"),ul={kernelName:en,backendName:"cpu",kernelFunc:pl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fl(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{depthRadius:s,bias:l,alpha:c,beta:d}=n;q(t,"LRN");const i=t.shape[3],r=i-1,u=e.data.get(t.dataId).values,p=j(t.shape),f=new Float32Array(p);function m(h){const g=h%i;let I=h-g+Math.max(0,g-s);const x=h-g+Math.min(g+s,r);let b=0;for(;I<=x;I++){const k=u[I];b+=k*k}return b}for(let h=0;h<p;h++){const g=m(h),I=u[h]*Math.pow(l+c*g,-d);f[h]=I}return e.makeTensorInfo(t.shape,t.dtype,f)}const hl={kernelName:ha,backendName:"cpu",kernelFunc:fl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ml(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,y:s,dy:l}=a,{depthRadius:c,bias:d,alpha:i,beta:r}=n;q(l,"LRNGrad");const u=j(l.shape),p=l.shape[3],f=e.data.get(l.dataId).values,m=e.data.get(t.dataId).values,h=e.data.get(s.dataId).values,g=new Float32Array(u),I=u;for(let x=0;x<I;x++){const b=x%p,k=x-b+Math.max(0,b-c),S=x-b+Math.min(p,b+c+1);let y=0;for(let C=k;C<S;C++)y+=Math.pow(m[C],2);y=i*y+d;for(let C=k;C<S;C++){let M=-2*i*r*m[C]*h[x]/y;x===C&&(M+=Math.pow(y,-r)),M*=f[x],g[C]+=M}}return e.makeTensorInfo(l.shape,t.dtype,g)}const gl={kernelName:ma,backendName:"cpu",kernelFunc:ml};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fn(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{reductionIndices:s,keepDims:l}=n,c=e;let d=t.shape;const i=d.length,r=ue(s,d);let u=r;const p=Ie(u,i);let f=c.data.get(t.dataId).values;if(p!=null){const k=new Array(i);for(let S=0;S<k.length;S++)k[S]=d[p[S]];f=Vo(f,d,t.dtype,p,k),u=ke(u.length,i),d=k}q(t,"max"),Te("max",u,i);const[m,h]=Ne(d,u),g=j(h),I=Wo(f,g,m,t.dtype),x=c.write(I,m,t.dtype);let b=m;return l&&(b=Ae(m,r)),{dataId:x,shape:b,dtype:t.dtype}}const Il={kernelName:ga,backendName:"cpu",kernelFunc:Fn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kl(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a;q(t,"maxPool");const{filterSize:s,strides:l,pad:c,dimRoundingMode:d}=n,i=1;ce(at(l,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${l} and dilations '${i}'`);const r=Ge(t.shape,s,l,i,c,d);let u;if(r.filterWidth===1&&r.filterHeight===1&&ot(r.inShape,r.outShape))u=Fe({inputs:{x:t},backend:e});else{const p=e.data.get(t.dataId).values,f=K(t.shape),m=mt(p,t.shape,t.dtype,f,r,"max");u=e.makeTensorInfo(r.outShape,t.dtype,m.values)}return u}const xl={kernelName:Ia,backendName:"cpu",kernelFunc:kl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bl(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{filterSize:s,strides:l,pad:c,dimRoundingMode:d,dataFormat:i}=n;q(t,"maxPool3d");const r=Ke(t.shape,s,l,1,c,d,i),u=e.data.get(t.dataId).values,p=vn(u,t.shape,t.dtype,K(t.shape),r,"max");return e.makeTensorInfo(p.shape,"float32",p.values)}const Sl={kernelName:ka,backendName:"cpu",kernelFunc:bl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yl(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,input:s}=a,{filterSize:l,strides:c,pad:d,dimRoundingMode:i}=n;q([t,s],"maxPool3DGrad");const r=Ke(s.shape,l,c,1,d,i),u=e.bufferSync(s),p=di(u,r),f=r.strideDepth,m=r.strideHeight,h=r.strideWidth,g=r.dilationDepth,I=r.dilationHeight,x=r.dilationWidth,b=r.effectiveFilterDepth,k=r.effectiveFilterHeight,S=r.effectiveFilterWidth,y=b-1-r.padInfo.front,C=S-1-r.padInfo.left,M=k-1-r.padInfo.top,V=ie(s.shape,"float32"),R=e.bufferSync(t);for(let H=0;H<r.batchSize;++H)for(let A=0;A<r.inChannels;++A)for(let N=0;N<r.inDepth;++N)for(let F=0;F<r.inHeight;++F)for(let v=0;v<r.inWidth;++v){const w=N-y,W=F-M,T=v-C;let D=0;for(let z=0;z<b;z+=g){const O=(w+z)/f;if(!(O<0||O>=r.outDepth||Math.floor(O)!==O))for(let E=0;E<k;E+=I){const $=(W+E)/m;if(!($<0||$>=r.outHeight||Math.floor($)!==$))for(let L=0;L<S;L+=x){const P=(T+L)/h;if(P<0||P>=r.outWidth||Math.floor(P)!==P)continue;const B=b*k*S-1-p.get(H,O,$,P,A),G=z*k*S+E*S+L,U=B===G?1:0;if(U===0)continue;const _=R.get(H,O,$,P,A);D+=_*U}}}V.set(D,H,N,F,v,A)}return e.makeTensorInfo(V.shape,V.dtype,V.values)}const Cl={kernelName:xa,backendName:"cpu",kernelFunc:yl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nl(o){const{inputs:a,backend:e,attrs:n}=o,{dy:t,input:s,output:l}=a,c=s;q([s,l],"maxPoolGrad");const{filterSize:d,strides:i,pad:r,dimRoundingMode:u}=n,p=Ge(c.shape,d,i,1,r,u),f=e.data.get(c.dataId).values,m=ie(p.outShape,c.dtype,Nn(f,c.shape,c.dtype,p).values),h=p.strideHeight,g=p.strideWidth,I=p.dilationHeight,x=p.dilationWidth,b=p.effectiveFilterHeight,k=p.effectiveFilterWidth,S=k-1-p.padInfo.left,y=b-1-p.padInfo.top,C=ie(c.shape,"float32"),M=e.data.get(t.dataId).values,V=ie(t.shape,"float32",M);for(let R=0;R<p.batchSize;++R)for(let H=0;H<p.inChannels;++H)for(let A=0;A<p.inHeight;++A)for(let N=0;N<p.inWidth;++N){const F=A-y,v=N-S;let w=0;for(let W=0;W<b;W+=I){const T=(F+W)/h;if(!(T<0||T>=p.outHeight||Math.floor(T)!==T))for(let D=0;D<k;D+=x){const z=(v+D)/g;if(z<0||z>=p.outWidth||Math.floor(z)!==z)continue;const O=b*k-1-m.get(R,T,z,H),E=W*k+D,$=O===E?1:0;if($===0)continue;const L=V.get(R,T,z,H);w+=L*$}}C.set(w,R,A,N,H)}return e.makeTensorInfo(C.shape,C.dtype,C.values)}const vl={kernelName:ba,backendName:"cpu",kernelFunc:Nl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wl(o,a,e,n,t){const s=K(a),l=mt(o,a,e,s,t,"max"),c=Nn(o,a,e,t,!0,n);return[l.values,c.values]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl={kernelName:Sa,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:e})=>{const{x:n}=o,{filterSize:t,strides:s,pad:l,includeBatchInIndex:c}=a,d=e;q(n,"MaxPoolWithArgmax");const i=d.data.get(n.dataId).values,r=Ge(n.shape,t,s,[1,1],l),[u,p]=wl(i,n.shape,n.dtype,c,r),f=d.write(u,r.outShape,n.dtype),m=d.write(p,r.outShape,n.dtype);return[{dataId:f,shape:r.outShape,dtype:n.dtype},{dataId:m,shape:r.outShape,dtype:"int32"}]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ml(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,keepDims:l}=n,c=ue(s,t.shape),i=Ne(t.shape,c)[1],r=j(i),u=[],p=e.makeTensorInfo([],"float32",new Float32Array([r]));u.push(p);const f=ft({inputs:{x:t},backend:e,attrs:{dtype:"float32"}});u.push(f);const m=gt({inputs:{a:f,b:p},backend:e});u.push(m);const h=qe({inputs:{x:m},backend:e,attrs:{axis:s,keepDims:l}});return u.forEach(g=>e.disposeIntermediateTensorInfo(g)),h}const Fl={kernelName:ya,backendName:"cpu",kernelFunc:Ml};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rl(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{axis:s,keepDims:l}=n;q(t,"min");const c=ue(s,t.shape);let d=c;const i=Ie(d,t.shape.length);let r=t;i!=null&&(r=pe({inputs:{x:t},backend:e,attrs:{perm:i}}),d=ke(d.length,t.shape.length)),Te("min",d,r.shape.length);const[u,p]=Ne(r.shape,d),f=j(p),m=ve(j(u),r.dtype),h=e.data.get(r.dataId).values;for(let I=0;I<m.length;++I){const x=I*f;let b=h[x];for(let k=0;k<f;++k){const S=h[x+k];(Number.isNaN(S)||S<b)&&(b=S)}m[I]=b}i!=null&&e.disposeIntermediateTensorInfo(r);const g=e.makeTensorInfo(u,r.dtype,m);if(l){const I=Ae(u,c),x=ne({inputs:{x:g},backend:e,attrs:{shape:I}});return e.disposeIntermediateTensorInfo(g),x}return g}const Dl={kernelName:Ca,backendName:"cpu",kernelFunc:Rl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vl(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{paddings:s,mode:l}=n;q(t,"mirrorPad");const c=s.map((b,k)=>b[0]+t.shape[k]+b[1]),d=s.map(b=>b[0]),i=s.map((b,k)=>b[0]+t.shape[k]),r=l==="reflect"?0:1,u=e.data.get(t.dataId).values,p=t.shape.length,f=K(t.shape),m=j(c),h=c.length,g=K(c),I=Ce(t.dtype,m);for(let b=0;b<m;b++){let k=tn(b,h,g);for(let y=0;y<h;y++)k[y]<d[y]?k[y]=d[y]*2-k[y]-r:k[y]>=i[y]&&(k[y]=(i[y]-1)*2-k[y]+r);k=k.map((y,C)=>y-d[C]);const S=Ee(k,p,f);I[b]=u[S]}return{dataId:e.write(I,c,t.dtype),shape:c,dtype:t.dtype}}const Wl={kernelName:Na,backendName:"cpu",kernelFunc:Vl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=Me((o,a)=>{const e=o%a;return o<0&&a<0||o>=0&&a>=0?e:(e+a)%a}),Al=ze(nn,Hl),Ol={kernelName:nn,backendName:"cpu",kernelFunc:Al};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rn(o){const{inputs:a,backend:e,attrs:n}=o,{logits:t}=a,{dim:s}=n,l=t.shape.length;let c=s;if(c===-1&&(c=l-1),c!==l-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${l} and dim was ${c}`);const d=ue([c],t.shape),i=Fn({inputs:{x:t},backend:e,attrs:{reductionIndices:d,keepDims:!1}}),r=Ae(i.shape,d),u=ne({inputs:{x:i},backend:e,attrs:{shape:r}}),p=gn({inputs:{a:t,b:u},backend:e}),f=Ho({inputs:{x:p},backend:e}),m=qe({inputs:{x:f},backend:e,attrs:{axis:d,keepDims:!1}}),h=ne({inputs:{x:m},backend:e,attrs:{shape:r}}),g=gt({inputs:{a:f,b:h},backend:e});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(h),g}const zl={kernelName:va,backendName:"cpu",kernelFunc:Rn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $l(o){const{inputs:a,backend:e,attrs:n}=o,{logits:t}=a,{numSamples:s,seed:l,normalized:c}=n;q(t,"multinomial");const d=c?t:Rn({inputs:{logits:t},backend:e,attrs:{dim:-1}}),i=d.shape[0],r=d.shape[1],u=e.data.get(d.dataId).values,p=[i,s],f=ve(j(p),"int32");for(let m=0;m<i;++m){const h=m*r,g=new Float32Array(r-1);g[0]=u[h];for(let b=1;b<g.length;++b)g[b]=g[b-1]+u[h+b];const I=Tr.alea(l.toString()),x=m*s;for(let b=0;b<s;++b){const k=I();f[x+b]=g.length;for(let S=0;S<g.length;S++)if(k<g[S]){f[x+b]=S;break}}}return c||e.disposeIntermediateTensorInfo(d),e.makeTensorInfo(p,"int32",f)}const Pl={kernelName:wa,backendName:"cpu",kernelFunc:$l};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=Ma;function Ll(o){const{inputs:a,backend:e,attrs:n}=o,{boxes:t,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d}=n;q(t,"NonMaxSuppression");const i=e.data.get(t.dataId).values,r=e.data.get(s.dataId).values,{selectedIndices:u}=El(i,r,l,c,d);return e.makeTensorInfo([u.length],"int32",new Int32Array(u))}const Bl={kernelName:Ta,backendName:"cpu",kernelFunc:Ll};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=Ra;function ql(o){const{inputs:a,backend:e,attrs:n}=o,{boxes:t,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d,padToMaxOutputSize:i}=n;q(t,"NonMaxSuppressionPadded");const r=e.data.get(t.dataId).values,u=e.data.get(s.dataId).values,{selectedIndices:p,validOutputs:f}=Gl(r,u,l,c,d,i);return[e.makeTensorInfo([p.length],"int32",new Int32Array(p)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}const _l={kernelName:Fa,backendName:"cpu",kernelFunc:ql};/**
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
 */const Ul=Va;function jl(o){const{inputs:a,backend:e,attrs:n}=o,{boxes:t,scores:s}=a,{maxOutputSize:l,iouThreshold:c,scoreThreshold:d,softNmsSigma:i}=n;q(t,"NonMaxSuppressionWithScore");const r=e.data.get(t.dataId).values,u=e.data.get(s.dataId).values,p=l,f=c,m=d,h=i,{selectedIndices:g,selectedScores:I}=Ul(r,u,p,f,m,h);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([I.length],"float32",new Float32Array(I))]}const Xl={kernelName:Da,backendName:"cpu",kernelFunc:jl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yl(o){const{inputs:a,backend:e,attrs:n}=o,{indices:t}=a,{dtype:s,depth:l,onValue:c,offValue:d}=n;q(t,"oneHot");const i=j(t.shape),r=new Float32Array(i*l);r.fill(d);const u=e.data.get(t.dataId).values;for(let p=0;p<i;++p)u[p]>=0&&u[p]<l&&(r[p*l+u[p]]=c);return e.makeTensorInfo([...t.shape,l],s,r)}const Kl={kernelName:Wa,backendName:"cpu",kernelFunc:Yl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xe(o){const{inputs:a,backend:e}=o,{x:n}=a;if(n.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(n.dtype==="complex64"){const t=Be({inputs:{input:n},backend:e}),s=Xe({inputs:{x:t},backend:e}),l=We({inputs:{input:n},backend:e}),c=Xe({inputs:{x:l},backend:e}),d=he({inputs:{real:s,imag:c},backend:e});return e.disposeIntermediateTensorInfo(t),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(c),d}else return It({backend:e,attrs:{shape:n.shape,value:0,dtype:n.dtype}})}const Zl={kernelName:Ha,backendName:"cpu",kernelFunc:Xe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dn(o){const{inputs:a,backend:e}=o,{x:n}=a;if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(n.dtype==="complex64"){const t=Be({inputs:{input:n},backend:e}),s=Dn({inputs:{x:t},backend:e}),l=We({inputs:{input:n},backend:e}),c=Xe({inputs:{x:l},backend:e}),d=he({inputs:{real:s,imag:c},backend:e});return e.disposeIntermediateTensorInfo(t),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(c),d}else return It({backend:e,attrs:{shape:n.shape,value:1,dtype:n.dtype}})}const Jl={kernelName:Aa,backendName:"cpu",kernelFunc:Dn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vn(o){const{inputs:a,backend:e,attrs:n}=o,{axis:t}=n;if(a.length===1)return je({inputs:{input:a[0]},backend:e,attrs:{dim:t}});const s=a[0].shape,l=a[0].dtype;a.forEach(r=>{za(s,r.shape,"All tensors passed to stack must have matching shapes"),ce(l===r.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],d=a.map(r=>{const u=je({inputs:{input:r},backend:e,attrs:{dim:t}});return c.push(u),u}),i=He({inputs:d,backend:e,attrs:{axis:t}});return c.forEach(r=>e.disposeIntermediateTensorInfo(r)),i}const Ql={kernelName:Oa,backendName:"cpu",kernelFunc:Vn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{paddings:s,constantValue:l}=n;q(t,"pad");const c=s.map((x,b)=>x[0]+t.shape[b]+x[1]),d=s.map(x=>x[0]),i=e.data.get(t.dataId).values,r=j(t.shape),u=t.shape.length,p=K(t.shape),f=j(c),m=c.length,h=K(c),g=Ce(t.dtype,f);l!==0&&g.fill(l);for(let x=0;x<r;x++){const k=tn(x,u,p).map((y,C)=>y+d[C]),S=Ee(k,m,h);g[S]=i[x]}return{dataId:e.write(g,c,t.dtype),shape:c,dtype:t.dtype}}const Wn={kernelName:$a,backendName:"cpu",kernelFunc:ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const td=Me((o,a)=>Math.pow(o,a)),nd=ze(sn,td),sd={kernelName:sn,backendName:"cpu",kernelFunc:nd};/**
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
 */function ad(o){const{inputs:a,backend:e,attrs:n}=o,{paramsNestedSplits:t,paramsDenseValues:s,indices:l}=a,c=t.map(g=>e.data.get(g.dataId).values),d=t.map(g=>g.shape),i=e.data.get(s.dataId).values,r=e.data.get(l.dataId).values,[u,p,f]=Ao(c,d,i,s.shape,s.dtype,r,l.shape),m=u.map(g=>e.makeTensorInfo([g.length],"int32",g)),h=e.makeTensorInfo(f,s.dtype,p);return m.concat([h])}const od={kernelName:Pa,backendName:"cpu",kernelFunc:ad};/**
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
 */function rd(o){const{inputs:a,backend:e}=o,{starts:n,limits:t,deltas:s}=a,l=e.data.get(n.dataId).values,c=e.data.get(t.dataId).values,d=e.data.get(s.dataId).values,[i,r]=Oo(l,n.shape,n.dtype,c,t.shape,d,s.shape),u=e.makeTensorInfo([i.length],"int32",i),p=e.makeTensorInfo([r.length],n.dtype,r);return[u,p]}const id={kernelName:Ea,backendName:"cpu",kernelFunc:rd};/**
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
 */function cd(o){const{inputs:a,backend:e,attrs:n}=o,{shape:t,values:s,defaultValue:l,rowPartitionTensors:c}=a,{rowPartitionTypes:d}=n,i=e.data.get(t.dataId).values,r=e.data.get(s.dataId).values,u=e.data.get(l.dataId).values,p=c.map(g=>e.data.get(g.dataId).values),f=c.map(g=>g.shape),[m,h]=zo(i,t.shape,r,s.shape,s.dtype,u,l.shape,p,f,d);return e.makeTensorInfo(m,s.dtype,h)}const ld={kernelName:La,backendName:"cpu",kernelFunc:cd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(o){const{backend:a,attrs:e}=o,{start:n,stop:t,dtype:s,step:l}=e,c=$o(n,t,l,s);return a.makeTensorInfo([c.length],s,c)}const pd={kernelName:Ba,backendName:"cpu",kernelFunc:dd};/**
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
 */const ud=Q(an,o=>1/o),fd={kernelName:an,backendName:"cpu",kernelFunc:ud};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hd(o){const{inputs:a,backend:e,attrs:n}=o,{images:t}=a,{alignCorners:s,halfPixelCenters:l,size:c}=n;q(t,"resizeBilinear");const d=K(t.shape),[i,r]=c,[u,p,f,m]=t.shape,h=e.data.get(t.dataId).values,g=new Float32Array(j([u,i,r,m])),I=[s&&i>1?p-1:p,s&&r>1?f-1:f],x=[s&&i>1?i-1:i,s&&r>1?r-1:r];let b=0;const k=I[0]/x[0],S=I[1]/x[1];for(let y=0;y<u;y++)for(let C=0;C<i;C++){let M;l?M=k*(C+.5)-.5:M=k*C;const V=Math.max(0,Math.floor(M)),R=M-V,H=Math.min(p-1,Math.ceil(M)),A=y*d[0]+V*d[1],N=y*d[0]+H*d[1];for(let F=0;F<r;F++){let v;l?v=S*(F+.5)-.5:v=S*F;const w=Math.max(0,Math.floor(v)),W=v-w,T=Math.min(f-1,Math.ceil(v)),D=A+w*d[2],z=N+w*d[2],O=A+T*d[2],E=N+T*d[2];for(let $=0;$<m;$++){const L=h[D+$],P=h[z+$],B=h[O+$],G=h[E+$],U=L+(B-L)*W,_=P+(G-P)*W,X=U+(_-U)*R;g[b++]=X}}}return e.makeTensorInfo([u,i,r,m],"float32",g)}const md={kernelName:Ga,backendName:"cpu",kernelFunc:hd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(o){const{inputs:a,backend:e,attrs:n}=o,{images:t,dy:s}=a,{alignCorners:l}=n;q([s,t],"resizeBilinearGrad");const c=K(t.shape),[d,i,r,u]=t.shape,[,p,f]=s.shape,m=new Float32Array(d*i*r*u),h=[l&&p>1?i-1:i,l&&f>1?r-1:r],g=[l&&p>1?p-1:p,l&&f>1?f-1:f],I=h[0]/g[0],x=h[1]/g[1],b=e.data.get(s.dataId).values;let k=0;for(let S=0;S<d;S++){const y=S*c[0];for(let C=0;C<p;C++){const M=C*I,V=Math.floor(M),R=Math.min(Math.ceil(M),i-1),H=y+V*c[1],A=y+R*c[1],N=M-V,F=1-N;for(let v=0;v<f;v++){const w=v*x,W=Math.floor(w),T=Math.min(Math.ceil(w),r-1),D=w-W,z=1-D,O=H+W*c[2],E=H+T*c[2],$=A+W*c[2],L=A+T*c[2],P=F*z,B=F*D,G=N*z,U=N*D;for(let _=0;_<u;_++){const X=b[k++];m[O+_]+=X*P,m[E+_]+=X*B,m[$+_]+=X*G,m[L+_]+=X*U}}}}return e.makeTensorInfo([d,r,i,u],"float32",m)}const Id={kernelName:qa,backendName:"cpu",kernelFunc:gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(o){const{inputs:a,backend:e,attrs:n}=o,{images:t}=a,{alignCorners:s,halfPixelCenters:l,size:c}=n;q(t,"resizeNearestNeighbor");const d=K(t.shape),[i,r]=c,[u,p,f,m]=t.shape,h=e.data.get(t.dataId).values,g=new Float32Array(u*i*r*m),I=[s&&i>1?p-1:p,s&&r>1?f-1:f],x=[s&&i>1?i-1:i,s&&r>1?r-1:r],b=I[0]/x[0],k=I[1]/x[1];let S=0;for(let y=0;y<u;y++){const C=y*d[0];for(let M=0;M<i;M++){const V=l?b*(M+.5):b*M;let R=Math.min(p-1,s?Math.round(V):Math.floor(V));l&&(R=Math.max(0,R));const H=C+R*d[1];for(let A=0;A<r;A++){const N=l?k*(A+.5):k*A;let F=Math.min(f-1,s?Math.round(N):Math.floor(N));l&&(F=Math.max(0,F));const v=H+F*d[2];for(let w=0;w<m;w++){const W=h[v+w];g[S++]=W}}}}return e.makeTensorInfo([u,i,r,m],t.dtype,g)}const xd={kernelName:_a,backendName:"cpu",kernelFunc:kd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(o){const{inputs:a,backend:e,attrs:n}=o,{images:t,dy:s}=a,{alignCorners:l}=n;q([s,t],"resizeNearestNeighborGrad");const c=K(t.shape),d=K(s.shape),[i,r,u,p]=t.shape,[,f,m]=s.shape,h=new Float32Array(i*r*u*p),g=e.data.get(s.dataId).values,I=[l&&f>1?r-1:r,l&&m>1?u-1:u],x=[l&&f>1?f-1:f,l&&m>1?m-1:m],b=I[0]/x[0],k=I[1]/x[1],S=1/b,y=1/k,C=Math.ceil(S)*2+2,M=Math.ceil(y)*2+2;for(let V=0;V<i;V++){const R=V*c[0];for(let H=0;H<r;H++){const A=R+H*c[1],N=Math.floor(H*S),F=Math.floor(N-C/2);for(let v=0;v<u;v++){const w=A+v*c[2],W=Math.floor(v*y),T=Math.floor(W-M/2);for(let D=0;D<p;D++){let z=0;for(let O=0;O<C;O++){const E=O+F;if(E<0||E>=f)continue;const $=R+E*d[1],L=E*b,P=Math.min(r-1,l?Math.round(L):Math.floor(L));if(H===P)for(let B=0;B<M;B++){const G=B+T;if(G<0||G>=m)continue;const U=$+G*d[2],_=G*k,X=Math.min(u-1,l?Math.round(_):Math.floor(_));v===X&&(z+=g[U+D])}}h[w+D]=z}}}}return e.makeTensorInfo(t.shape,t.dtype,h)}const Sd={kernelName:Ua,backendName:"cpu",kernelFunc:bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{dims:s}=n;q(t,"reverse");const l=t.shape.length,c=ue(s,t.shape);if(l===0)return Fe({inputs:{x:t},backend:e});const d=new le(t.shape,t.dtype),i=e.bufferSync(t);for(let r=0;r<d.size;r++){const u=d.indexToLoc(r),p=u.slice();c.forEach(f=>p[f]=t.shape[f]-1-p[f]),d.set(i.get(...p),...u)}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const Cd={kernelName:ja,backendName:"cpu",kernelFunc:yd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nd={kernelName:Xa,backendName:"cpu",kernelFunc:({inputs:o,attrs:a,backend:e})=>{const{image:n}=o,{radians:t,fillValue:s,center:l}=a,c=e,d=Ce(n.dtype,j(n.shape)),[i,r,u,p]=n.shape,[f,m]=Ya(l,r,u),h=255,g=Math.sin(t),I=Math.cos(t),x=c.data.get(n.dataId).values;for(let k=0;k<i;k++){const S=k*u*r*p;for(let y=0;y<r;y++){const C=y*(u*p);for(let M=0;M<u;M++){const V=M*p;for(let R=0;R<p;R++){const H=[i,y,M,R],A=H[2],N=H[1];let F=(A-f)*I-(N-m)*g,v=(A-f)*g+(N-m)*I;F=Math.round(F+f),v=Math.round(v+m);let w=s;if(typeof s!="number"&&(R===3?w=h:w=s[R]),F>=0&&F<u&&v>=0&&v<r){const T=v*(u*p),D=F*p,z=S+T+D+R;w=x[z]}const W=S+C+V+R;d[W]=w}}}}return{dataId:c.write(d,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
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
 */function Td(o){const{inputs:a,backend:e,attrs:n}=o,{indices:t,updates:s}=a,{shape:l}=n,{sliceRank:c,numUpdates:d,sliceSize:i,strides:r,outputSize:u}=pt(s,t,l),p=!0,f=e.bufferSync(t),m=e.bufferSync(s),h=Re(f,m,l,u,i,d,c,r,0,p);return e.makeTensorInfo(l,h.dtype,h.values)}const Md={kernelName:Ka,backendName:"cpu",kernelFunc:Td};/**
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
 */function Fd(o,a){let e=0,n=o.length,t=0;for(;e<n;)t=Math.floor((e+n)/2),o[t]<a?e=t+1:n=t;return n}function Rd(o,a){let e=0,n=o.length,t=0;for(;e<n;)t=Math.floor((e+n)/2),o[t]<=a?e=t+1:n=t;return n}function Dd(o,a,e,n,t,s){const l=lt("int32",e*t);for(let c=0;c<e;++c){const d=o.slice(c*n,(c+1)*n),i=c*t;for(let r=0;r<t;++r)l[i+r]=s==="left"?Fd(d,a[r+i]):Rd(d,a[r+i])}return l}/**
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
 */function Vd(o){const{inputs:a,backend:e,attrs:n}=o,{sortedSequence:t,values:s}=a,{side:l}=n,c=e.data.get(t.dataId).values,d=e.data.get(s.dataId).values,i=Dd(c,d,t.shape[0],t.shape[1],s.shape[1],l);return e.makeTensorInfo(s.shape,"int32",i)}const Wd={kernelName:Za,backendName:"cpu",kernelFunc:Vd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(o){const{inputs:a,backend:e}=o,{condition:n,t,e:s}=a;q([n,t,s],"select");const l=n.shape.length,c=e.data.get(n.dataId).values,d=e.data.get(t.dataId).values,i=e.data.get(s.dataId).values,r=Ze(t.dtype,s.dtype),u=ve(j(t.shape),r);let p=0;const f=l===0||l>1||t.shape.length===1?1:j(t.shape.slice(1));for(let m=0;m<c.length;m++)for(let h=0;h<f;h++)c[m]===1?u[p++]=d[m]:u[p++]=i[m];return e.makeTensorInfo(t.shape,r,u)}const Ad={kernelName:Ja,backendName:"cpu",kernelFunc:Hd};/**
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
 */const Od=Qa,zd=eo,$d=Q(rn,o=>o>=0?zd*o:Od*(Math.exp(o)-1)),Pd={kernelName:rn,backendName:"cpu",kernelFunc:$d};/**
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
 */const Ud=11920928955078125e-23,yt=Math.log(Ud)+2,jd=Q(pn,o=>{const a=o>-yt,e=o<yt,n=Math.exp(o);let t;return e?t=n:a?t=o:t=Math.log(1+n),t}),Xd={kernelName:pn,backendName:"cpu",kernelFunc:jd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yd(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{blockShape:s,paddings:l}=n;q([t],"spaceToBatchND");const c=j(s),d=[[0,0]];d.push(...l);for(let y=1+s.length;y<t.shape.length;++y)d.push([0,0]);const i=Wn.kernelFunc({inputs:{x:t},backend:e,attrs:{paddings:d,constantValue:0}}),r=Ot(i.shape,s,c,!1),u=zt(r.length,s.length,!1),p=$t(i.shape,s,c,!1),h=ne({inputs:{x:i},backend:e,attrs:{shape:r}}),x=pe({inputs:{x:h},backend:e,attrs:{perm:u}}),S=ne({inputs:{x},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(x),S}const Kd={kernelName:to,backendName:"cpu",kernelFunc:Yd};/**
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
 */function Zd(o){const{inputs:a,backend:e}=o,{indices:n,values:t,denseShape:s,defaultValue:l}=a;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${s.shape}`);if(n.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${n.shape}`);if(t.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${t.shape}`);if(l.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${l.shape}`);const c=e.data.get(n.dataId).values,d=e.data.get(t.dataId).values,i=e.data.get(s.dataId).values,r=e.data.get(l.dataId).values[0],[u,p,f,m,h]=Po(c,n.shape,n.dtype,d,t.dtype,i,r);return[e.makeTensorInfo(p,n.dtype,u),e.makeTensorInfo([p[0]],t.dtype,f),e.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(g=>Number(g)))),e.makeTensorInfo([h.length],n.dtype,new Int32Array(h))]}const Jd={kernelName:no,backendName:"cpu",kernelFunc:Zd};/**
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
 */function Qd(o){const{inputs:a,backend:e}=o,{inputIndices:n,inputShape:t,newShape:s}=a;if(n.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${n.shape}`);if(t.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${t.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const l=Array.from(e.data.get(t.dataId).values),c=e.data.get(n.dataId).values,d=Array.from(e.data.get(s.dataId).values),[i,r,u]=Eo(c,n.shape,n.dtype,l,d);return[e.makeTensorInfo(r,n.dtype,i),e.makeTensorInfo([u.length],s.dtype,new Int32Array(u))]}const ep={kernelName:so,backendName:"cpu",kernelFunc:Qd};/**
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
 */function tp(o){const{inputs:a,backend:e}=o,{data:n,indices:t,segmentIds:s}=a;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(t.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${t.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(t.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const l=e.data.get(n.dataId).values,c=e.data.get(t.dataId).values,d=e.data.get(s.dataId).values,[i,r]=In(l,n.shape,n.dtype,c,d,!0);return e.makeTensorInfo(r,n.dtype,i)}const np={kernelName:ao,backendName:"cpu",kernelFunc:tp};/**
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
 */function sp(o){const{inputs:a,backend:e}=o,{data:n,indices:t,segmentIds:s}=a;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(t.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${t.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(t.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const l=e.data.get(n.dataId).values,c=e.data.get(t.dataId).values,d=e.data.get(s.dataId).values,[i,r]=In(l,n.shape,n.dtype,c,d);return e.makeTensorInfo(r,n.dtype,i)}const ap={kernelName:oo,backendName:"cpu",kernelFunc:sp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(o){const{inputs:a,backend:e,attrs:n}=o,{sparseIndices:t,sparseValues:s,defaultValue:l}=a,{outputShape:c}=n,{sliceRank:d,numUpdates:i,sliceSize:r,strides:u,outputSize:p}=pt(s,t,c),f=!1,m=e.bufferSync(t);let h;switch(s.dtype){case"bool":{const g=e.bufferSync(s),I=!!e.data.get(l.dataId).values[0];h=Re(m,g,c,p,r,i,d,u,I,f);break}case"float32":{const g=e.bufferSync(s),I=e.data.get(l.dataId).values[0];h=Re(m,g,c,p,r,i,d,u,I,f);break}case"int32":{const g=e.bufferSync(s),I=e.data.get(l.dataId).values[0];h=Re(m,g,c,p,r,i,d,u,I,f);break}case"string":{const g=e.bufferSync(s),I=Nt(e.data.get(l.dataId).values[0]);h=Re(m,g,c,p,r,i,d,u,I,f);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return e.makeTensorInfo(c,h.dtype,h.values)}const rp={kernelName:ro,backendName:"cpu",kernelFunc:op};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{numOrSizeSplits:s,axis:l}=n,c=ue(l,t.shape)[0],d=co(t,s,c),i=new Array(t.shape.length).fill(0),r=t.shape.slice();return d.map(u=>{const p=[...r];p[c]=u;const f=Ve({inputs:{x:t},backend:e,attrs:{begin:i,size:p}});return i[c]+=u,f})}const cp={kernelName:io,backendName:"cpu",kernelFunc:ip};/**
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
 */const lp={kernelName:lo,backendName:"cpu",kernelFunc:({inputs:o,backend:a})=>{const{x:e}=o,n=a;q(e,"square");const t=n.data.get(e.dataId).values,s=new Float32Array(t.length);for(let c=0;c<t.length;++c){const d=t[c];s[c]=d*d}return{dataId:n.write(s,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};/**
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
 */const dp=Q(un,(o,a)=>{const e=a;return isNaN(o)?NaN:o>0?1:e.alpha}),pp={kernelName:un,backendName:"cpu",kernelFunc:dp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function up(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{begin:s,end:l,strides:c,beginMask:d,endMask:i,ellipsisMask:r,newAxisMask:u,shrinkAxisMask:p}=n;q(t,"stridedSlice");const{finalShapeSparse:f,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:I,begin:x,end:b,strides:k}=uo(t.shape,s,l,c,d,i,r,u,p);let S;if(h)S=ne({inputs:{x:t},backend:e,attrs:{shape:m}});else if(g||I){ce(t.shape.length>=1,()=>`Input must have rank at least 1, got: ${t.shape.length}`);const y=fo(x,b,k),C=Ve({inputs:{x:t},backend:e,attrs:{begin:x,size:y}});S=ne({inputs:{x:C},backend:e,attrs:{shape:m}}),e.disposeIntermediateTensorInfo(C)}else{const y=e.bufferSync(t),C=Lo(f,y,k,x);S=e.makeTensorInfo(m,C.dtype,C.values)}return S}const fp={kernelName:po,backendName:"cpu",kernelFunc:up};/**
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
 */function hp(o){const{inputs:a,backend:e,attrs:n}=o,{separator:t,nGramWidths:s,leftPad:l,rightPad:c,padWidth:d,preserveShortSequences:i}=n,{data:r,dataSplits:u}=a,p=e.data.get(r.dataId).values,f=e.data.get(u.dataId).values,[m,h]=Bo(p,f,t,s,l,c,d,i);return[e.makeTensorInfo([m.length],"string",m),e.makeTensorInfo(u.shape,"int32",h)]}const mp={kernelName:ho,backendName:"cpu",kernelFunc:hp};/**
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
 */function gp(o){const{inputs:a,backend:e,attrs:n}=o,{skipEmpty:t}=n,{input:s,delimiter:l}=a;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(l.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${l.shape}`);const c=e.data.get(s.dataId).values,d=e.data.get(l.dataId).values[0],[i,r,u]=Go(c,d,t),p=r.length;return[e.makeTensorInfo([p,2],"int32",i),e.makeTensorInfo([p],"string",r),e.makeTensorInfo([2],"int32",new Int32Array(u))]}const Ip={kernelName:mo,backendName:"cpu",kernelFunc:gp};/**
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
 */function kp(o){const{inputs:a,backend:e,attrs:n}=o,{numBuckets:t}=n,{input:s}=a;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(t<=0)throw new Error("Number of buckets must be at least 1");const l=e.data.get(s.dataId).values,c=qo(l,t);return e.makeTensorInfo(s.shape,"int32",c)}const xp={kernelName:go,backendName:"cpu",kernelFunc:kp};/**
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
 */const bp=Q(fn,o=>Math.tan(o)),Sp={kernelName:fn,backendName:"cpu",kernelFunc:bp};/**
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
 */const yp=Q(hn,o=>Math.tanh(o)),Cp={kernelName:hn,backendName:"cpu",kernelFunc:yp};/**
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
 */function Np(o){const{inputs:a,backend:e}=o,{tensor:n,indices:t,updates:s}=a,{sliceRank:l,numUpdates:c,sliceSize:d,strides:i,outputSize:r}=pt(s,t,n.shape),u=!1,p=e.bufferSync(t),f=e.bufferSync(s),m=e.bufferSync(n),h=Re(p,f,n.shape,r,d,c,l,i,m,u);return e.makeTensorInfo(n.shape,h.dtype,h.values)}const vp={kernelName:Io,backendName:"cpu",kernelFunc:Np};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{reps:s}=n;q(t,"tile");const l=_o(e.bufferSync(t),s);return e.makeTensorInfo(l.shape,l.dtype,l.values)}const Tp={kernelName:ko,backendName:"cpu",kernelFunc:wp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(o){const{inputs:a,backend:e,attrs:n}=o,{x:t}=a,{k:s,sorted:l}=n;q(t,"topk");const c=e.data.get(t.dataId).values,[d,i]=Uo(c,t.shape,t.dtype,s,l);return[e.makeTensorInfo(d.shape,d.dtype,d.values),e.makeTensorInfo(i.shape,i.dtype,i.values)]}const Fp={kernelName:xo,backendName:"cpu",kernelFunc:Mp};/**
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
 */function Rp(o){const{inputs:a,attrs:e,backend:n}=o,{image:t,transforms:s}=a,{interpolation:l,fillMode:c,fillValue:d,outputShape:i}=e,[r,u,p,f]=t.shape,[m,h]=i??[u,p],g=[r,m,h,f],I=K(t.shape),x=I[0],b=I[1],k=I[2],S=K(g),y=S[0],C=S[1],M=S[2],V=Ce(t.dtype,j(g));V.fill(d);const R=n.data.get(t.dataId).values,H=n.data.get(s.dataId).values;for(let N=0;N<r;++N){const F=s.shape[0]===1?H:H.subarray(N*8,N*8+8);for(let v=0;v<m;++v)for(let w=0;w<h;++w)for(let W=0;W<f;++W){let T;const D=F[6]*w+F[7]*v+1;if(D===0)continue;const z=(F[0]*w+F[1]*v+F[2])/D,O=(F[3]*w+F[4]*v+F[5])/D,E=Ct(z,p,c),$=Ct(O,u,c);switch(l){case"nearest":T=Op(R,u,p,x,b,k,N,$,E,W,d);break;case"bilinear":T=zp(R,u,p,x,b,k,N,$,E,W,d);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${l}`)}const L=N*y+v*C+w*M+W;V[L]=T}return n.makeTensorInfo(g,t.dtype,V)}return{dataId:n.write(V,g,t.dtype),shape:t.shape,dtype:t.dtype}}const Dp={kernelName:bo,backendName:"cpu",kernelFunc:Rp};function Ct(o,a,e){switch(e){case"reflect":return Vp(o,a);case"wrap":return Wp(o,a);case"nearest":return Ap(o,a);case"constant":default:return Hp(o)}}function Vp(o,a){let e=o;if(e<0)if(a<=1)e=0;else{const n=2*a;e<n&&(e=n*Math.trunc(-e/n)+e),e=e<-a?e+n:-e-1}else if(e>a-1)if(a<=1)e=0;else{const n=2*a;e-=n*Math.trunc(e/n),e>=a&&(e=n-e-1)}return ut(0,e,a-1)}function Wp(o,a){let e=o;if(e<0)if(a<=1)e=0;else{const n=a-1;e+=a*(Math.trunc(-e/n)+1)}else if(e>a-1)if(a<=1)e=0;else{const n=a-1;e-=a*Math.trunc(e/n)}return ut(0,e,a-1)}function Hp(o,a){return o}function Ap(o,a){return ut(0,o,a-1)}function Pe(o,a,e,n,t,s,l,c,d,i,r){const u=l*n+c*t+d*s+i;return 0<=c&&c<a&&0<=d&&d<e?o[u]:r}function Op(o,a,e,n,t,s,l,c,d,i,r){const u=Math.round(c),p=Math.round(d);return Pe(o,a,e,n,t,s,l,u,p,i,r)}function zp(o,a,e,n,t,s,l,c,d,i,r){const u=Math.floor(c),p=Math.floor(d),f=u+1,m=p+1,h=(m-d)*Pe(o,a,e,n,t,s,l,u,p,i,r)+(d-p)*Pe(o,a,e,n,t,s,l,u,m,i,r),g=(m-d)*Pe(o,a,e,n,t,s,l,f,p,i,r)+(d-p)*Pe(o,a,e,n,t,s,l,f,m,i,r);return(f-c)*h+(c-u)*g}/**
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
 */function $p(o){const{inputs:a,attrs:e,backend:n}=o,{axis:t}=e,{x:s}=a;q(s,"unique");const l=n.data.get(s.dataId).values,{outputValues:c,outputShape:d,indices:i}=jo(l,t,s.shape,s.dtype);return[n.makeTensorInfo(d,s.dtype,c),n.makeTensorInfo([i.length],"int32",i)]}const Pp={kernelName:So,backendName:"cpu",kernelFunc:$p};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(o){const{inputs:a,backend:e,attrs:n}=o,{value:t}=a;let{axis:s}=n;s<0&&(s+=t.shape.length);const l=t.shape.length,c=t.shape[s],d=new Array(l-1);let i=0;for(let f=0;f<l;f++)f!==s&&(d[i++]=t.shape[f]);const r=new Array(l).fill(0),u=t.shape.slice();u[s]=1;const p=new Array(c);for(let f=0;f<p.length;f++){r[s]=f;const m=Ve({inputs:{x:t},backend:e,attrs:{begin:r,size:u}});p[f]=ne({inputs:{x:m},backend:e,attrs:{shape:d}}),e.disposeIntermediateTensorInfo(m)}return p}const Lp={kernelName:yo,backendName:"cpu",kernelFunc:Ep};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(o){const{inputs:a,backend:e,attrs:n}=o,{x:t,segmentIds:s}=a,{numSegments:l}=n;q(t,"unsortedSegmentSum");const c=t.shape.length,d=s.shape.length,i=[],r=[],u=c-d;let p=s;for(let m=0;m<u;++m){const h=je({inputs:{input:p},backend:e,attrs:{dim:m+1}});p=h,r.push(h)}for(let m=0;m<l;++m){const h=jt(m,"int32"),g=e.makeTensorInfo([],"int32",h),I=Xo({inputs:{a:g,b:p},backend:e}),x=ft({inputs:{x:I},backend:e,attrs:{dtype:"float32"}}),b=ht({inputs:{a:x,b:t},backend:e}),k=qe({inputs:{x:b},backend:e,attrs:{axis:0,keepDims:!1}});i.push(k),r.push(g),r.push(I),r.push(x),r.push(b),r.push(k)}const f=Vn({inputs:i,backend:e,attrs:{axis:0}});return r.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const Gp={kernelName:Co,backendName:"cpu",kernelFunc:Bp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qp=[$r,Yo,Er,Br,Ko,qr,Ur,Xr,Kr,Jr,ei,ni,ai,ii,li,ui,hi,gi,ki,Or,bi,yi,Ni,Zo,wi,Jo,Qo,Mi,er,Ri,Vi,Wi,Ai,zi,Pi,Li,Gi,_i,ji,Yi,Zi,Qi,tc,sc,ac,rc,cc,dc,pc,uc,fc,mc,kc,Fr,bc,tr,Mc,nr,Fc,sr,Ac,Oc,$c,ar,or,Ec,Bc,qc,Uc,rr,ir,cr,Xc,Di,Kc,Jc,el,Rr,lr,dr,nl,pr,al,il,ll,ul,hl,gl,Il,ur,xl,Sl,Cl,vl,Tl,Fl,Dl,fr,Wl,Ol,Pl,hr,mr,Bl,_l,Xl,gr,Kl,Jl,Ql,Wn,sd,Vr,Ir,od,id,ld,pd,kr,nt,fd,Wr,Hr,Ar,md,Id,xd,Sd,Cd,Nd,wd,xr,Md,Wd,Ad,Pd,br,Ld,Gd,_d,Sr,zl,Xd,Kd,Jd,ep,np,ap,rp,cp,yr,lp,Cr,Nr,pp,fp,mp,Ip,xp,vr,gc,Sp,Cp,vp,Tp,Fp,Dp,wr,Pp,Lp,Gp,Zl];for(const o of qp)No(o);export{Je as MathBackendCPU,Jp as shared,Yp as version_cpu};
