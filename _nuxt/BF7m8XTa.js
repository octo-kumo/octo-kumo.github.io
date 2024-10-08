import{cB as ct,cL as ue,cM as S,cN as it,cO as F,cP as D,cQ as B,cR as U,cS as z,cT as de,cU as O,cV as fe,cW as he,cX as pe,cY as ge,cZ as me,c_ as W,c$ as nt,d0 as ut,E as P,d1 as dt,d2 as R,d3 as ft,d4 as ht,d5 as pt,d6 as gt,d7 as mt,d8 as It,d9 as wt,da as xt,db as kt,dc as bt,dd as yt,de as Et,df as St,dg as Rt,dh as Ie,di as we,dj as vt,dk as xe,dl as ke,dm as be,dn as ye,dp as Tt,dq as Ee,dr as Se,ds as Re,dt as ve,du as Te,dv as Ne,dw as Me,cD as Pe,bA as Fe,D as Ce,dx as Ve,dy as Nt,dz as H,dA as Mt,dB as De,dC as Ae,dD as Oe,dE as Le,dF as qe,dG as $e,dH as ze,dI as We,dJ as Ge,dK as je,dL as Be,dM as _e,dN as Ue,dO as Ke,dP as st,dQ as Ze,dR as Xe,dS as He,dT as Pt,dU as Ft,dV as Ct,dW as X,dX as Qe,dY as Vt,dZ as q}from"./CCLcTp3q.js";/**
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
 */function A(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&ct(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}/**
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
 */function Dt(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}const Ye=n=>{const{x:e}=n.inputs,t=n.backend;A(e,"abs");let s=new Float32Array(S(e.shape));const o=t.data.get(e.dataId).values;return s=Dt(o),t.makeOutput(s,e.shape,e.dtype)},cs={kernelName:ue,backendName:"cpu",kernelFunc:Ye};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v(n){return(e,t,s,o,l)=>{const a=it(e,t),c=a.length,r=F(a),i=S(a),d=D(l,i),u=e.length,g=t.length,m=F(e),h=F(t),w=B(e,a),f=B(t,a);if(w.length+f.length===0)for(let p=0;p<d.length;++p)d[p]=n(s[p%s.length],o[p%o.length]);else for(let p=0;p<d.length;++p){const I=U(p,c,r),k=I.slice(-u);w.forEach(E=>k[E]=0);const x=z(k,u,m),b=I.slice(-g);f.forEach(E=>b[E]=0);const y=z(b,g,h);d[p]=n(s[x],o[y])}return[d,a]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,l=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,c=t.makeTensorInfo(s.shape,"complex64"),r=t.data.get(c.dataId);return r.complexTensorInfos={real:t.makeTensorInfo(s.shape,"float32",l),imag:t.makeTensorInfo(o.shape,"float32",a)},c}const is={kernelName:de,backendName:"cpu",kernelFunc:K};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q(n,e,t="float32"){if(t==="complex64"){const o=Q(n,e,"float32"),l=Q(n,e,"float32");return K({inputs:{real:o,imag:l},backend:n})}const s=O(S(e),t);return n.makeTensorInfo(e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const us={kernelName:fe,backendName:"cpu",kernelFunc:Y};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function At(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.data.get(s.dataId).complexTensorInfos.real,l=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,l)}const ds={kernelName:he,backendName:"cpu",kernelFunc:At};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ot(n,e,t,s){if(s==="int32"){const o=Int32Array.from(n);return[e,"int32",o]}if(s==="bool"){const o=pe([0],t),[l,a]=v((c,r)=>c!==r?1:0)(e,[],n,o,"bool");return[a,"bool",l]}throw new Error(`Error in Cast: failed to cast ${t} to ${s}`)}function G(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:l}=s;if(l==="complex64"){if(o.dtype==="complex64")return Y({inputs:{x:o},backend:t});const d=Q(t,o.shape,o.dtype),u=G({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),g=K({inputs:{real:u,imag:d},backend:t});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),g}if(o.dtype==="complex64"){const d=At({inputs:{input:o},backend:t}),u=G({inputs:{x:d},backend:t,attrs:{dtype:l}});return t.disposeIntermediateTensorInfo(d),u}if(!me(o.dtype,l)){const d=Y({inputs:{x:o},backend:t});return{dataId:d.dataId,shape:d.shape,dtype:l}}const a=t.data.get(o.dataId).values,[c,r,i]=Ot(a,o.shape,o.dtype,l);return t.makeTensorInfo(c,r,i)}const fs={kernelName:ge,backendName:"cpu",kernelFunc:G};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T(n,e,t,s){return t==null?({inputs:o,backend:l})=>{const{a,b:c}=o,r=l;A([a,c],n);const i=r.data.get(a.dataId).values,d=r.data.get(c.dataId).values,u=a.dtype==="string"?W(i):i,g=a.dtype==="string"?W(d):d,m=s||a.dtype,[h,w]=e(a.shape,c.shape,u,g,m);return r.makeTensorInfo(w,m,h)}:({inputs:o,backend:l})=>{const{a,b:c}=o,r=l;if(a.dtype==="complex64"||c.dtype==="complex64"){const i=G({inputs:{x:a},backend:r,attrs:{dtype:"complex64"}}),d=r.data.get(i.dataId),u=d.complexTensorInfos.real,g=d.complexTensorInfos.imag,m=r.data.get(u.dataId).values,h=r.data.get(g.dataId).values,w=G({inputs:{x:c},backend:r,attrs:{dtype:"complex64"}}),f=r.data.get(w.dataId),p=f.complexTensorInfos.real,I=f.complexTensorInfos.imag,k=r.data.get(p.dataId).values,x=r.data.get(I.dataId).values,[b,y,E]=t(a.shape,c.shape,m,h,k,x),N=r.makeTensorInfo(E,"float32",b),L=r.makeTensorInfo(E,"float32",y),j=K({inputs:{real:N,imag:L},backend:r});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(N),r.disposeIntermediateTensorInfo(L),j}else{const i=r.data.get(a.dataId).values,d=r.data.get(c.dataId).values,u=s||a.dtype,[g,m]=e(a.shape,c.shape,i,d,u);return r.makeTensorInfo(m,u,g)}}}function J(n){return(e,t,s,o,l,a)=>{const c=it(e,t),r=S(c),i=c.length,d=F(c),u=D("float32",r),g=D("float32",r),m=B(e,c),h=B(t,c),w=nt(s,o),f=nt(l,a),p=e.length,I=F(e),k=t.length,x=F(t);if(m.length+h.length===0)for(let b=0;b<u.length;b++){const y=b%w.length,E=b%f.length,N=n(w[y*2],w[y*2+1],f[E*2],f[E*2+1]);u[b]=N.real,g[b]=N.imag}else for(let b=0;b<u.length;b++){const y=U(b,i,d),E=y.slice(-p);m.forEach(Z=>E[Z]=0);const N=z(E,p,I),L=y.slice(-k);h.forEach(Z=>L[Z]=0);const j=z(L,k,x),et=n(w[N*2],w[N*2+1],f[j*2],f[j*2+1]);u[b]=et.real,g[b]=et.imag}return[u,g,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt=v((n,e)=>n+e),Je=J((n,e,t,s)=>({real:n+t,imag:e+s})),tn=T(ut,Lt,Je),hs={kernelName:ut,backendName:"cpu",kernelFunc:tn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function en(n,e,t,s,o){const l=S(s),a=O(o,t);for(let c=0;c<n.length;c++){const r=n[c];if(r<0)throw new Error("Input x must be non-negative!");r>=o||(l>0?a[r]+=e[c]:a[r]+=1)}return a}function nn(n,e,t,s=!1){const o=n.shape[0],l=n.shape[1],a=P([o,t],e.dtype);for(let c=0;c<o;c++)for(let r=0;r<l;r++){const i=n.get(c,r);if(i<0)throw new Error("Input x must be non-negative!");i>=t||(s?a.set(1,c,i):e.size>0?a.set(a.get(c,i)+e.get(c,r),c,i):a.set(a.get(c,i)+1,c,i))}return a}/**
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
 */const qt=v((n,e)=>n&e),sn=T(dt,qt),ps={kernelName:dt,backendName:"cpu",kernelFunc:sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C(n){return(e,t,s)=>{const o=R(t,e.length);for(let l=0;l<e.length;++l)o[l]=n(e[l],s);return o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $t(n,e,t){const s=C(e);return V(n,s,t)}function V(n,e,t){return({inputs:s,attrs:o,backend:l})=>{const{x:a}=s;A(a,n);const c=l,r=c.data.get(a.dataId).values;let i;if(a.dtype==="string"){if(!Array.isArray(r))throw new Error("String tensor's value was not an instance of Array");i=W(r)}else i=r;const d=t||a.dtype,u=e(i,d,o);return c.makeTensorInfo(a.shape,d,u)}}/**
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
 */const zt=C(n=>Math.ceil(n)),on=V(ft,zt),gs={kernelName:ft,backendName:"cpu",kernelFunc:on};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rn(n,e,t,s){const o=R(t,S(e));if(s&&t!=="string"){let l=0;n.forEach(a=>{const c=S(a.shape);o.set(a.vals,l),l+=c})}else{let l=0;n.forEach(a=>{const c=t==="string"?W(a.vals):a.vals;let r=0;for(let i=0;i<a.shape[0];++i){const d=i*e[1]+l;for(let u=0;u<a.shape[1];++u)o[d+u]=c[r++]}l+=a.shape[1]})}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wt=v((n,e)=>n===e?1:0),an=T(ht,Wt,null,"bool"),ms={kernelName:ht,backendName:"cpu",kernelFunc:an};/**
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
 */const Gt=C(n=>Math.exp(n)),ln=V(pt,Gt,"float32"),Is={kernelName:pt,backendName:"cpu",kernelFunc:ln};/**
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
 */const jt=C(n=>Math.expm1(n)),cn=V(gt,jt),ws={kernelName:gt,backendName:"cpu",kernelFunc:cn};/**
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
 */const Bt=C(n=>Math.floor(n)),un=V(mt,Bt),xs={kernelName:mt,backendName:"cpu",kernelFunc:un};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _t=v((n,e)=>Math.floor(n/e)),dn=T(It,_t,null,"int32"),ks={kernelName:It,backendName:"cpu",kernelFunc:dn};/**
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
 */function fn(n,e,t,s,o,l,a,c,r){const i=P([s,l],t);for(let d=0;d<s;d++){const u=[];let g=0;for(let m=0;m<o;m++){const h=n[d*o+m];g+=h*a[m],u.push(h)}if(g<0||g>=r/l)throw new Error(`Invalid indices: ${u} does not index into ${c}`);for(let m=0;m<l;m++)i.values[d*l+m]=e.get(...e.indexToLoc(g*l+m))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(n,e,t){const s=P(t,n.dtype);for(let o=0;o<s.size;++o){const a=s.indexToLoc(o).slice(),c=a[0],r=a[2],i=e.locToIndex([c,r]);a[2]=e.values[i];const d=n.locToIndex(a);0<=d&&d<n.values.length&&(s.values[o]=n.values[d])}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut=v((n,e)=>n>e?1:0),pn=T(wt,Ut,null,"bool"),bs={kernelName:wt,backendName:"cpu",kernelFunc:pn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kt=v((n,e)=>n>=e?1:0),gn=T(xt,Kt,null,"bool"),ys={kernelName:xt,backendName:"cpu",kernelFunc:gn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zt=v((n,e)=>n<e?1:0),mn=T(kt,Zt,null,"bool"),Es={kernelName:kt,backendName:"cpu",kernelFunc:mn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xt=v((n,e)=>n<=e?1:0),In=T(bt,Xt,null,"bool"),Ss={kernelName:bt,backendName:"cpu",kernelFunc:In};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wn(n,e,t){const s=(e-n)/(t-1),o=O(t,"float32");o[0]=n;for(let l=1;l<o.length;l++)o[l]=o[l-1]+s;return o}/**
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
 */const Ht=C(n=>Math.log(n)),xn=V(yt,Ht),Rs={kernelName:yt,backendName:"cpu",kernelFunc:xn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kn(n,e,t,s){const o=D(s,S(t));for(let l=0;l<o.length;++l){const a=l*e;let c=n[a];for(let r=0;r<e;++r){const i=n[a+r];(Number.isNaN(i)||i>c)&&(c=i)}o[l]=c}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=v((n,e)=>Math.max(n,e)),bn=T(Et,Qt),vs={kernelName:Et,backendName:"cpu",kernelFunc:bn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yt=v((n,e)=>Math.min(n,e)),yn=T(St,Yt),Ts={kernelName:St,backendName:"cpu",kernelFunc:yn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tt=v((n,e)=>n*e),En=J((n,e,t,s)=>({real:n*t-e*s,imag:n*s+e*t})),Sn=T(Rt,tt,En),Ns={kernelName:Rt,backendName:"cpu",kernelFunc:Sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jt(n,e,t){const s=Ie(-1,t);return tt([],e,s,n,t)}function Rn(n){const{inputs:e,backend:t}=n,{x:s}=e;A(s,"neg");const o=t.data.get(s.dataId).values,[l,a]=Jt(o,s.shape,s.dtype);return t.makeTensorInfo(a,s.dtype,l)}const Ms={kernelName:we,backendName:"cpu",kernelFunc:Rn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const te=v((n,e)=>n!==e?1:0),vn=T(vt,te,null,"bool"),Ps={kernelName:vt,backendName:"cpu",kernelFunc:vn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(n,e,t,s,o){const l=e.length,a=S(e),c=F(e),r=F(o),i=D(t,S(o));for(let d=0;d<a;++d){const u=U(d,l,c),g=new Array(u.length);for(let h=0;h<g.length;h++)g[h]=u[s[h]];const m=z(g,l,r);i[m]=n[d]}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(n){const{inputs:e,attrs:t,backend:s}=n,{x:o}=e,{perm:l}=t;A(o,"transpose");const a=o.shape.length,c=new Array(a);for(let u=0;u<c.length;u++)c[u]=o.shape[l[u]];const r=s.data.get(o.dataId).values,i=ee(r,o.shape,o.dtype,l,c);return{dataId:s.write(i,c,o.dtype),shape:c,dtype:o.dtype}}const Fs={kernelName:xe,backendName:"cpu",kernelFunc:ne};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function se(n,e,t,s){const[o,l]=ke(n,s),a=be(e,"int32"),c=O(S(o),a),r=S(l);for(let i=0;i<c.length;++i){const d=i*r;let u=1;for(let g=0;g<r;++g)u*=t[d+g];c[i]=u}return{outVals:c,outShape:o,outDtype:a}}function Tn(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:l,keepDims:a}=s;A(o,"prod");const c=o.shape.length,r=Tt(l,o.shape),i=Ee(r,c);let d=r,u=o;const g=[];i!=null&&(u=ne({inputs:{x:o},backend:t,attrs:{perm:i}}),g.push(u),d=Se(d.length,c));const m=t.data.get(u.dataId).values,{outVals:h,outShape:w,outDtype:f}=se(u.shape,u.dtype,m,d);let p=w;return a&&(p=Re(w,r)),g.forEach(I=>t.disposeIntermediateTensorInfo(I)),t.makeTensorInfo(p,f,h)}const Cs={kernelName:ye,backendName:"cpu",kernelFunc:Tn};/**
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
 */function Nn(n,e,t){n.forEach((s,o)=>{if(s<0||s>=t){const l=U(o,e.length,F(e)).join(",");throw new Error(`indices[${l}] = ${s} is not in [0, ${t})`)}})}function Mn(n,e){for(let t=0;t<n.length;++t){const s=n[t],o=t===n.length-1?e:n[t+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let l=1;l<s.length;++l)if(s[l-1]>s[l])throw new Error("Ragged splits must be sorted in ascending order")}}function Pn(n,e,t,s){const o=[];let l=0;const a=e.length-1+t.length,c=new Array(a).fill(null).map(()=>[0]);Mn(t,s);let r=1;for(let i=0;i<e.length-1;++i){r*=e[i];const d=e[i+1];for(let u=1;u<r+1;++u)c[i].push(u*d)}for(let i=0;i<n.length;++i){let d=n[i],u=n[i]+1;for(let g=0;g<t.length;++g){const m=t[g],h=g+e.length-1;if(h>=0){const w=c[h],f=w[w.length-1]-m[d];for(let p=d;p<u;++p)c[h].push(m[p+1]+f)}d=m[d],u=m[u]}u!==d&&(o.push([d,u]),l+=u-d)}return{outSplits:c,valueSlices:o,numValues:l}}function Fn(n){const e=[];for(let t=0;t<n.length;++t){const s=n[t].length,o=R("int32",s);e.push(o),n[t].forEach((l,a)=>o[a]=l)}return e}function ot(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let s=e;s<n.length;s++)t[e-1]*=n[s];return t}function Cn(n,e,t,s,o,l){const a=ot(e,2)[1],c=ot(l,2)[1];let r=0;for(const i of t)for(let d=i[0];d<i[1];++d){for(let u=0;u<s;++u)o[r*c+u]=n[d*a+u];++r}}function Vn(n,e,t,s,o){const l=e.slice();l[0]=o;const a=R(t,S(l)),c=n.length,r=c===0?0:c/e[0];return Cn(n,e,s,r,a,l),[a,l]}function Dn(n,e,t,s,o,l,a,c){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const r=e[0][0]-1;if(Nn(l,a,r),s.length===0)throw new Error("params.rank must be nonzero");const i=s[0],{outSplits:d,valueSlices:u,numValues:g}=Pn(l,a,n,i),m=Fn(d),h=Vn(t,s,o,u,g);return[m,h[0],h[1]]}/**
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
 */const rt=2147483647;function An(n,e,t,s,o,l,a){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(a.length>1)throw new Error("deltas must be a scalar or vector");const c=e.length===0,r=o.length===0,i=a.length===0,d=[];c||d.push(e[0]),r||d.push(o[0]),i||d.push(a[0]);for(let f=1;f<d.length;++f)if(d[f]!==d[f-1])throw new Error("starts, limits, and deltas must have the same shape");const u=d.length===0?1:d[0],g=R("int32",u+1);g[0]=0;for(let f=0;f<u;++f){const p=c?n[0]:n[f],I=r?s[0]:s[f],k=i?l[0]:l[f];if(k===0)throw new Error("Requires delta != 0");let x;if(k>0&&I<p||k<0&&I>p)x=0;else if(x=Math.ceil(Math.abs((I-p)/k)),x>rt)throw new Error(`Requires ((limit - start) / delta) <= ${rt}`);g[f+1]=g[f]+x}const m=g[u],h=R(t,m);let w=0;for(let f=0;f<u;++f){const p=g[f+1]-g[f];let I=c?n[0]:n[f];const k=i?l[0]:l[f];for(let x=0;x<p;++x)h[w++]=I,I+=k}return[g,h]}/**
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
 */var M=Ve;class _{constructor(e,t,s,o,l,a,c,r,i,d){this.shape=e,this.shapeShape=t,this.values=s,this.valuesShape=o,this.valuesDType=l,this.defaultValue=a,this.defaultValueShape=c,this.rowPartitionValues=r,this.rowPartitionValuesShapes=i,this.rowPartitionTypes=ve(d),this.raggedRank=Te(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case M.VALUE_ROWIDS:return _.getMaxWidthValueRowID(t);case M.ROW_SPLITS:return _.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${M[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let s=0;for(let o=0;o<t-1;++o){const l=e[o+1]-e[o];l>s&&(s=l)}return s}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let s=0,o=e[0],l=0;for(let a=1;a<t;++a){const c=e[a];c!==o&&(o=c,l=Math.max(a-s,l),s=a)}return Math.max(t-s,l)}tensorShapeFromTensor(e,t,s=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return lt(e,s)}calculateOutputSize(e){const t=this.valuesShape,s=this.defaultValueShape;Ne(s,t);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=Me(this.raggedRank,o,t);a[0]<0&&(a[0]=e);for(let c=1;c<=this.raggedRank;++c)a[c]<0&&(a[c]=this.getMaxWidth(c));return a}calculateFirstParentOutputIndex(e,t,s){const o=Math.min(e,s),l=[];let a=0;for(let c=0;c<o;++c,a+=t)l.push(a);for(let c=o;c<e;++c)l.push(-1);return ct(l.length===e,()=>"Final length of result must be equal to firstDimension."),l}calculateOutputIndexRowSplit(e,t,s,o){const l=e.length,a=[];for(let c=0;c<l-1;++c){const r=e[c+1]-e[c];let i=Math.min(o,r),d=t[c];d===-1&&(i=0);for(let u=0;u<i;++u)a.push(d),d+=s;for(let u=0;u<r-i;++u)a.push(-1)}if(l>0&&a.length!==e[l-1])throw new Error("Invalid row split size.");return a}calculateOutputIndexValueRowID(e,t,s,o){const l=e.length,a=[];if(l===0)return[];let c=0,r=e[0];if(r>=t.length)throw new Error(`Got currentValueRowId=${r}, which is not less than ${t.length}`);let i=t[r];a.push(i);for(let d=1;d<l;++d){const u=e[d];if(u===r)i>=0&&(++c,c<o?i+=s:i=-1);else{if(c=0,r=u,u>=t.length)throw new Error(`Got nextValueRowId=${u} which is not less than ${t.length}`);i=t[u]}a.push(i)}if(a.length!==e.length)throw new Error("Invalid row ids.");return a}calculateOutputIndex(e,t,s,o){const l=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case M.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(l,t,s,o);case M.ROW_SPLITS:if(l.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${l.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(l,t,s,o);default:throw new Error(`Unsupported partition type: ${M[a]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case M.FIRST_DIM_SIZE:return e[0];case M.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case M.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${M[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),s=this.calculateOutputSize(t),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let r=o.length-2;r>=0;--r)o[r]=o[r+1]*s[r+1];const l=lt(s,!1),a=R(this.valuesDType,S(l));if(o[0]*s[0]>0){let r=this.calculateFirstParentOutputIndex(t,o[0],s[0]);for(let i=1;i<=this.raggedRank;++i)r=this.calculateOutputIndex(i-1,r,o[i],s[i]);this.setOutput(this.raggedRank,r,a,l)}return[l,a]}setOutput(e,t,s,o){if(s.length===0)return;const l=this.values,a=s;let c=o.slice();c=c.slice(e+1);const r=S(c),i=t.length;let d=this.defaultValue;if(d.length!==r&&d.length!==1){const h=this.defaultValueShape;Pe(()=>{const w=Fe(d,h);d=Ce(w,c).dataSync()})}let u=0,g=0,m=0;for(let h=0;h<=i;++h){let w=h<i?t[h]:-1;if(w===m){++m;continue}if(g<m){const f=l.subarray(u*r),p=a.subarray(g*r),I=(m-g)*r;at(p,f,I)}if(h>=i){const f=s.length;w=Math.floor(f/r)}if(w>m)if(this.defaultValue.length===1)a.subarray(m*r,w*r).fill(this.defaultValue[0]),m=w;else for(;w>m;){const f=a.slice(m*r);at(f,d,r),++m}w<0?(u=h+1,g=m):(u=h,g=m,m=g+1)}}}function at(n,e,t){for(let s=0;s<t;s++)n[s]=e[s]}function lt(n,e){const t=[];for(let s of n){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}t.push(s)}return t}function On(n,e,t,s,o,l,a,c,r,i){return new _(n,e,t,s,o,l,a,c,r,i).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ln(n,e,t,s){const o=n===e,l=n<e&&t<0,a=e<n&&t>1;if(o||l||a)return O(0,s);const c=Math.abs(Math.ceil((e-n)/t)),r=O(c,s);e<n&&t===1&&(t=-1),r[0]=n;for(let i=1;i<r.length;i++)r[i]=r[i-1]+t;return r}/**
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
 */const oe=C(n=>1/Math.sqrt(n)),qn=V(Nt,oe),Vs={kernelName:Nt,backendName:"cpu",kernelFunc:qn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $n(n,e,t,s,o,l,a,c,r,i){const d=[s/o,o],u=n.values,g=e.values;if(s===0)return P(t,e.dtype);const m=r instanceof H?r:P(d,e.dtype);typeof r=="string"||typeof r=="number"?m.values.fill(r):typeof r=="boolean"&&m.values.fill(+r);for(let h=0;h<l;h++){const w=[];let f=0;for(let p=0;p<a;p++){const I=u[h*a+p];w.push(I),f+=I*c[p]}if(f<0||f>=s/o)throw new Error(`Invalid indices: ${w} does not index into ${t}`);for(let p=0;p<o;p++)i?m.values[f*o+p]+=g[h*o+p]:m.values[f*o+p]=e.rank===0?g[0]:g[h*o+p]}return m}/**
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
 */const zn=C(n=>1/(1+Math.exp(-n))),Wn=$t(Mt,n=>1/(1+Math.exp(-n))),Ds={kernelName:Mt,backendName:"cpu",kernelFunc:Wn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function re(n,e,t,s,o){const l=De(s,e,t),a=S(t),c=F(s);if(l){const u=Ae(e,c);return o==="string"?n.slice(u,u+a):n.subarray(u,u+a)}const r=o==="string"?W(n):n,i=P(s,o,r),d=P(t,o);for(let u=0;u<d.size;++u){const g=d.indexToLoc(u),m=g.map((h,w)=>h+e[w]);d.set(i.get(...m),...g)}return o==="string"?Oe(d.values):d.values}function Gn(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:l,size:a}=s;A(o,"slice");const[c,r]=qe(o,l,a);$e(o,c,r);const i=t.data.get(o.dataId).values,d=re(i,c,r,o.shape,o.dtype);return t.makeTensorInfo(r,o.dtype,d)}const As={kernelName:Le,backendName:"cpu",kernelFunc:Gn};/**
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
 */function jn(n,e,t,s,o,l,a){const c=e[0],r=l[0],i=new Array(r),d=new Array(c),u=e[1];if(r===0){if(c!==0)throw new Error(ze(c));const f=R(t,0),p=R(o,0);return[f,[0,u],p,i,d]}let g=!0,m=0;const h=new Array(r).fill(0);for(let f=0;f<c;++f){const p=n[f*u];if(p<0)throw new Error(We(f,p));if(p>=r)throw new Error(Ge(f,p,r));++h[p],g=g&&p>=m,m=p}let w=!0;for(let f=0;f<r;++f){const p=h[f]===0;i[f]=p,w=w&&!p,h[f]=Math.max(h[f],1),f>0&&(h[f]+=h[f-1])}if(w&&g){const f=n,p=s;for(let I=0;I<c;++I)d[I]=I;return[f,[c,u],p,i,d]}else{const f=h[r-1],p=R(t,f*u),I=R(o,f),k=new Array(r).fill(0);for(let x=0;x<c;++x){const b=n[x*u],y=k[b],E=(b===0?0:h[b-1])+y;k[b]++;for(let N=0;N<u;++N)p[E*u+N]=n[x*u+N];I[E]=s[x],d[x]=E}for(let x=0;x<r;++x)if(k[x]===0){const y=x===0?0:h[x-1];p[y*u+0]=x;for(let E=1;E<u;++E)p[y*u+E]=0;I[y]=a}return[p,[f,u],I,i,d]}}/**
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
 */function Bn(n,e,t,s,o){const l=S(s),a=e[0],c=o.length,r=[];let i=1,d=-1;for(let f=0;f<c;++f){const p=o[f];if(p===-1){if(d!==-1)throw new Error(je(d,f));d=f,r.push(1)}else{if(p<0)throw new Error(Be(f,p));i*=p,r.push(p)}}if(d!==-1){if(i<=0)throw new Error(_e());const f=Math.trunc(l/i);if(i*f!==l)throw new Error(Ue(s,r));r[d]=f}if(S(r)!==l)throw new Error(Ke(s,r));const g=s.length,m=[];if(g>0){m[g-1]=1;for(let f=g-2;f>=0;--f)m[f]=m[f+1]*s[f+1]}const h=[];if(c>0){h[c-1]=1;for(let f=c-2;f>=0;--f)h[f]=h[f+1]*r[f+1]}const w=R(t,a*c);for(let f=0;f<a;++f){let p=0;for(let I=0;I<g;++I)p+=n[f*g+I]*m[I];for(let I=0;I<c;++I)w[f*c+I]=Math.trunc(p/h[I]),p%=h[I]}return[w,[a,c],r]}/**
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
 */function _n(n,e,t,s,o,l=!1,a=0){const c=s.length,r=[e[0],n.length/e[0]],i=r[1],u=c>0?o[c-1]+1:0;if(u<0)throw new Error(st());const g=e.slice();g[0]=u;const m=g.reduce((k,x)=>k*x,1),h=R(t,m);if(c===0)return u>0&&h.fill(a),[h,g];if(u<=0)throw new Error(st());let w=0,f=1,p=0,I=o[w];for(;;){let k=0;if(f<c){if(k=o[f],I===k){++f;continue}if(I>=k)throw new Error(Ze())}if(I<0||I>=u)throw new Error(Xe(I,u));I>p&&h.fill(a,p*i,I*i);for(let x=w;x<f;++x){const b=s[x];if(b<0||b>=r[0])throw new Error(He(x,s[x],r[0]));for(let y=0;y<i;y++)h[I*i+y]+=n[b*i+y]}if(l)for(let x=0;x<i;x++)h[I*i+x]/=f-w;if(w=f,++f,p=I+1,I=k,f>c)break}return p<u&&h.fill(a,p*i,u*i),[h,g]}/**
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
 */const Un=C(n=>Math.sqrt(n)),Kn=$t(Pt,n=>Math.sqrt(n)),Os={kernelName:Pt,backendName:"cpu",kernelFunc:Kn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ae=v((n,e)=>{const t=n-e;return t*t}),Zn=T(Ft,ae),Ls={kernelName:Ft,backendName:"cpu",kernelFunc:Zn};/**
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
 */const le=C((n,e)=>{const{pattern:t,replaceGlobal:s,rewrite:o}=e;return n.replace(new RegExp(t,s?"g":""),o)}),Xn=V(Ct,le),qs={kernelName:Ct,backendName:"cpu",kernelFunc:Xn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hn(n,e,t,s){const o=P(n,e.dtype);for(let l=0;l<o.size;l++){const a=o.indexToLoc(l),c=new Array(a.length);for(let r=0;r<c.length;r++)c[r]=a[r]*t[r]+s[r];o.set(e.get(...c),...a)}return o}/**
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
 */class Qn{constructor(e,t,s,o,l,a){this.separator=X(e),this.nGramWidths=t,this.leftPad=X(s),this.rightPad=X(o),this.padWidth=l,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const s=this.getPadWidth(t);return Math.max(0,e+2*s-t+1)}createNGrams(e,t,s,o,l,a){for(let c=0;c<l;++c){const r=this.getPadWidth(a),i=Math.max(0,r-c),d=Math.max(0,r-(l-(c+1))),u=a-(i+d),g=t+(i>0?0:c-r);let m=0;m+=i*this.leftPad.length;for(let I=0;I<u;++I)m+=e[g+I].length;m+=d*this.rightPad.length;const h=i+d+u-1;m+=h*this.separator.length,s[o+c]=new Uint8Array(m);const w=s[o+c];let f=0;const p=I=>I.forEach(k=>w[f++]=k);for(let I=0;I<i;++I)p(this.leftPad),p(this.separator);for(let I=0;I<u-1;++I)p(e[g+I]),p(this.separator);if(u>0){p(e[g+u-1]);for(let I=0;I<d;++I)p(this.separator),p(this.rightPad)}else{for(let I=0;I<d-1;++I)p(this.rightPad),p(this.separator);p(this.rightPad)}}}compute(e,t){const s=e.length,o=t.length;if(o>0){let r=t[0];if(r!==0)throw new Error(`First split value must be 0, got ${r}`);for(let i=1;i<o;++i){let d=t[i]>=r;if(d=d&&t[i]<=s,!d)throw new Error(`Invalid split value ${t[i]}, must be in [${r}, ${s}]`);r=t[i]}if(r!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${r}`)}const l=o-1,a=R("int32",o);if(s===0||o===0){const r=new Array(s);for(let i=0;i<=l;++i)a[i]=0;return[r,a]}a[0]=0;for(let r=1;r<=l;++r){const i=t[r]-t[r-1];let d=0;this.nGramWidths.forEach(u=>{d+=this.getNumNGrams(i,u)}),this.preserveShort&&i>0&&d===0&&(d=1),a[r]=a[r-1]+d}const c=new Array(a[l]);for(let r=0;r<l;++r){const i=t[r];let d=a[r];if(this.nGramWidths.forEach(u=>{const g=t[r+1]-t[r],m=this.getNumNGrams(g,u);this.createNGrams(e,i,c,d,m,u),d+=m}),this.preserveShort&&d===a[r]){const u=t[r+1]-t[r];if(u===0)continue;const g=u+2*this.padWidth;this.createNGrams(e,i,c,d,1,g)}}return[c,a]}}function Yn(n,e,t,s,o,l,a,c){return new Qn(t,s,o,l,a,c).compute(n,e)}/**
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
 */function Jn(n,e,t,s){if(!n.length)return;if(e.length===0){for(let l=0;l<n.length;++l)s.push(n.subarray(l,l+1));return}if(e.length===1){const l=e[0];let a=n.indexOf(l);for(;a!==-1;){const c=n.subarray(0,a);(!t||c.length!==0)&&s.push(c),n=n.subarray(a+1),a=n.indexOf(l)}(!t||n.length!==0)&&s.push(n);return}let o=0;for(let l=0;l<n.length+1;l++)if(l===n.length||e.indexOf(n[l])!==-1){const a=n.subarray(o,l);(!t||a.length!==0)&&s.push(a),o=l+1}}function ts(n,e,t){const s=n.length,o=[];let l=0,a=0;const c=new Array(s);for(let g=0;g<s;++g){const m=o.length;Jn(n[g],e,t,o);const h=o.length-m;c[g]=h,l+=h,a=Math.max(a,h)}const r=R("int32",l*2),i=new Array(l),d=[s,a];let u=0;for(let g=0;g<s;++g)for(let m=0;m<c[g];++m)r[u*2]=g,r[u*2+1]=m,i[u]=o[u],++u;return[r,i,d]}/**
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
 */function es(n,e){const t=R("int32",n.length);for(let s=0;s<n.length;++s)t[s]=Qe(n[s]).modulo(e).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ce=v((n,e)=>n-e),ns=J((n,e,t,s)=>({real:n-t,imag:e-s})),ss=T(Vt,ce,ns),$s={kernelName:Vt,backendName:"cpu",kernelFunc:ss};/**
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
 */function os(n,e){const t=new Array(n.rank);for(let o=0;o<t.length;o++)t[o]=n.shape[o]*e[o];const s=P(t,n.dtype);for(let o=0;o<s.values.length;++o){const l=s.indexToLoc(o),a=new Array(n.rank);for(let r=0;r<a.length;r++)a[r]=l[r]%n.shape[r];const c=n.locToIndex(a);s.values[o]=n.values[c]}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function ie(n,e,t=0,s=n.length-1){for(;s>t;){if(s-t>600){const c=s-t+1,r=e-t+1,i=Math.log(c),d=.5*Math.exp(2*i/3),u=.5*Math.sqrt(i*d*(c-d)/c)*Math.sign(r-c/2),g=Math.max(t,Math.floor(e-r*d/c+u)),m=Math.min(s,Math.floor(e+(c-r)*d/c+u));ie(n,e,g,m)}const o=n[e];let l=t,a=s;for(q(n,t,e),$(n[s],o)>0&&q(n,t,s);l<a;){for(q(n,l,a),l++,a--;$(n[l],o)<0;)l=l+1;for(;$(n[a],o)>0;)a=a-1}$(n[t],o)===0?q(n,t,a):(a=a+1,q(n,a,s)),a<=e&&(t=a+1),e<=a&&(s=a-1)}}function rs(n,e,t,s,o){const l=e[e.length-1],[a,c]=[n.length/l,l],r=D(t,a*s),i=D("int32",a*s);for(let u=0;u<a;u++){const g=u*c,m=n.subarray(g,g+c);let h=new Array(m.length);m.forEach((I,k)=>h[k]={value:I,index:k}),s<h.length&&(ie(h,s),h=h.slice(0,s)),o&&h.sort($);const w=u*s,f=r.subarray(w,w+s),p=i.subarray(w,w+s);for(let I=0;I<s;I++)f[I]=h[I].value,p[I]=h[I].index}const d=e.slice();return d[d.length-1]=s,[P(d,t,r),P(d,"int32",i)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function as(n,e,t,s){const o=Tt(e,t)[0],l=[1,t[0],1];for(let h=0;h<o;h++)l[0]*=t[h];l[1]=t[o];for(let h=o+1;h<t.length;h++)l[2]*=t[h];const a=new Map,c=new Int32Array(t[o]),r=new H(l,s,n),i=[],d=l[0]===1&&l[2]===1;for(let h=0;h<t[o];h++){let w;if(d)w=n[h].toString();else{const p=[];for(let I=0;I<l[0];I++)for(let k=0;k<l[2];k++)p.push(r.get(I,h,k));w=p.join(",")}const f=a.get(w);if(f!=null)c[h]=f;else{const p=a.size;a.set(w,p),c[h]=p,i.push(h)}}const u=l.slice();u[1]=a.size;const g=new H(u,s);i.forEach((h,w)=>{for(let f=0;f<l[0];f++)for(let p=0;p<l[2];p++)g.set(r.get(f,h,p),f,w,p)});const m=t.slice();return m[o]=u[1],{outputValues:g.values,outputShape:m,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zs=Object.freeze(Object.defineProperty({__proto__:null,addImpl:Lt,bincountImpl:en,bincountReduceImpl:nn,bitwiseAndImpl:qt,castImpl:Ot,ceilImpl:zt,concatImpl:rn,equalImpl:Wt,expImpl:Gt,expm1Impl:jt,floorDivImpl:_t,floorImpl:Bt,gatherNdImpl:fn,gatherV2Impl:hn,greaterEqualImpl:Kt,greaterImpl:Ut,lessEqualImpl:Xt,lessImpl:Zt,linSpaceImpl:wn,logImpl:Ht,maxImpl:kn,maximumImpl:Qt,minimumImpl:Yt,multiplyImpl:tt,negImpl:Jt,notEqualImpl:te,prodImpl:se,raggedGatherImpl:Dn,raggedRangeImpl:An,raggedTensorToTensorImpl:On,rangeImpl:Ln,rsqrtImpl:oe,scatterImpl:$n,sigmoidImpl:zn,simpleAbsImpl:Dt,sliceImpl:re,sparseFillEmptyRowsImpl:jn,sparseReshapeImpl:Bn,sparseSegmentReductionImpl:_n,sqrtImpl:Un,squaredDifferenceImpl:ae,staticRegexReplaceImpl:le,stridedSliceImpl:Hn,stringNGramsImpl:Yn,stringSplitImpl:ts,stringToHashBucketFastImpl:es,subImpl:ce,tileImpl:os,topKImpl:rs,transposeImpl:ee,uniqueImpl:as},Symbol.toStringTag,{value:"Module"}));export{us as $,On as A,Ln as B,$n as C,jn as D,Bn as E,_n as F,Hn as G,Yn as H,ts as I,es as J,os as K,rs as L,as as M,an as N,cs as O,hs as P,ps as Q,fs as R,gs as S,is as T,ms as U,Is as V,ws as W,xs as X,ks as Y,bs as Z,ys as _,A as a,Es as a0,Ss as a1,Rs as a2,vs as a3,Ts as a4,Ns as a5,Ms as a6,Ps as a7,Cs as a8,ds as a9,Vs as aa,Ds as ab,As as ac,Os as ad,Ls as ae,qs as af,$s as ag,Fs as ah,zs as ai,tn as b,v as c,T as d,Gn as e,en as f,K as g,rn as h,Y as i,nn as j,G as k,ss as l,Sn as m,fn as n,hn as o,wn as p,ee as q,At as r,Wn as s,ne as t,$t as u,kn as v,ln as w,Dn as x,An as y,Q as z};
