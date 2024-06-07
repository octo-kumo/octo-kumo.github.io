import{o as ct,cJ as ue,s as S,p as it,q as P,h as D,cK as _,bF as K,aH as z,cL as fe,G as O,cM as de,cN as he,aI as pe,cO as ge,cP as me,cQ as G,m as nt,cR as ut,f as F,cS as ft,aG as R,cT as dt,cU as ht,cV as pt,cW as gt,cX as mt,cY as It,cZ as wt,c_ as xt,c$ as kt,d0 as bt,d1 as yt,d2 as Et,d3 as St,d4 as Rt,b4 as Ie,d5 as we,d6 as vt,d7 as xe,F as ke,au as be,d8 as ye,x as Tt,y as Ee,z as Se,H as Re,d9 as ve,da as Te,db as Ne,dc as Me,dd as Fe,de as Pe,df as Ce,dg as Ve,dh as Nt,aj as X,di as Mt,dj as De,dk as Ae,dl as Oe,dm as qe,dn as Le,dp as $e,dq as ze,dr as Ge,ds as We,dt as je,du as _e,dv as Be,dw as Ke,dx as Ue,dy as st,dz as Ze,dA as He,dB as Xe,dC as Ft,dD as Pt,dE as Ct,b as H,dF as Je,dG as Vt,dH as L}from"./DLggS0h7.js";/**
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
 */function Dt(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}const Qe=n=>{const{x:e}=n.inputs,t=n.backend;A(e,"abs");let s=new Float32Array(S(e.shape));const o=t.data.get(e.dataId).values;return s=Dt(o),t.makeOutput(s,e.shape,e.dtype)},cs={kernelName:ue,backendName:"cpu",kernelFunc:Qe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v(n){return(e,t,s,o,l)=>{const a=it(e,t),c=a.length,r=P(a),i=S(a),f=D(l,i),u=e.length,g=t.length,m=P(e),h=P(t),w=_(e,a),d=_(t,a);if(w.length+d.length===0)for(let p=0;p<f.length;++p)f[p]=n(s[p%s.length],o[p%o.length]);else for(let p=0;p<f.length;++p){const I=K(p,c,r),k=I.slice(-u);w.forEach(E=>k[E]=0);const x=z(k,u,m),b=I.slice(-g);d.forEach(E=>b[E]=0);const y=z(b,g,h);f[p]=n(s[x],o[y])}return[f,a]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,l=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,c=t.makeTensorInfo(s.shape,"complex64"),r=t.data.get(c.dataId);return r.complexTensorInfos={real:t.makeTensorInfo(s.shape,"float32",l),imag:t.makeTensorInfo(o.shape,"float32",a)},c}const is={kernelName:fe,backendName:"cpu",kernelFunc:U};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J(n,e,t="float32"){if(t==="complex64"){const o=J(n,e,"float32"),l=J(n,e,"float32");return U({inputs:{real:o,imag:l},backend:n})}const s=O(S(e),t);return n.makeTensorInfo(e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const us={kernelName:de,backendName:"cpu",kernelFunc:Q};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function At(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.data.get(s.dataId).complexTensorInfos.real,l=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,l)}const fs={kernelName:he,backendName:"cpu",kernelFunc:At};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ot(n,e,t,s){if(s==="int32"){const o=Int32Array.from(n);return[e,"int32",o]}if(s==="bool"){const o=pe([0],t),[l,a]=v((c,r)=>c!==r?1:0)(e,[],n,o,"bool");return[a,"bool",l]}throw new Error(`Error in Cast: failed to cast ${t} to ${s}`)}function W(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:l}=s;if(l==="complex64"){if(o.dtype==="complex64")return Q({inputs:{x:o},backend:t});const f=J(t,o.shape,o.dtype),u=W({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),g=U({inputs:{real:u,imag:f},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(u),g}if(o.dtype==="complex64"){const f=At({inputs:{input:o},backend:t}),u=W({inputs:{x:f},backend:t,attrs:{dtype:l}});return t.disposeIntermediateTensorInfo(f),u}if(!me(o.dtype,l)){const f=Q({inputs:{x:o},backend:t});return{dataId:f.dataId,shape:f.shape,dtype:l}}const a=t.data.get(o.dataId).values,[c,r,i]=Ot(a,o.shape,o.dtype,l);return t.makeTensorInfo(c,r,i)}const ds={kernelName:ge,backendName:"cpu",kernelFunc:W};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T(n,e,t,s){return t==null?({inputs:o,backend:l})=>{const{a,b:c}=o,r=l;A([a,c],n);const i=r.data.get(a.dataId).values,f=r.data.get(c.dataId).values,u=a.dtype==="string"?G(i):i,g=a.dtype==="string"?G(f):f,m=s||a.dtype,[h,w]=e(a.shape,c.shape,u,g,m);return r.makeTensorInfo(w,m,h)}:({inputs:o,backend:l})=>{const{a,b:c}=o,r=l;if(a.dtype==="complex64"||c.dtype==="complex64"){const i=W({inputs:{x:a},backend:r,attrs:{dtype:"complex64"}}),f=r.data.get(i.dataId),u=f.complexTensorInfos.real,g=f.complexTensorInfos.imag,m=r.data.get(u.dataId).values,h=r.data.get(g.dataId).values,w=W({inputs:{x:c},backend:r,attrs:{dtype:"complex64"}}),d=r.data.get(w.dataId),p=d.complexTensorInfos.real,I=d.complexTensorInfos.imag,k=r.data.get(p.dataId).values,x=r.data.get(I.dataId).values,[b,y,E]=t(a.shape,c.shape,m,h,k,x),N=r.makeTensorInfo(E,"float32",b),q=r.makeTensorInfo(E,"float32",y),j=U({inputs:{real:N,imag:q},backend:r});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(N),r.disposeIntermediateTensorInfo(q),j}else{const i=r.data.get(a.dataId).values,f=r.data.get(c.dataId).values,u=s||a.dtype,[g,m]=e(a.shape,c.shape,i,f,u);return r.makeTensorInfo(m,u,g)}}}function Y(n){return(e,t,s,o,l,a)=>{const c=it(e,t),r=S(c),i=c.length,f=P(c),u=D("float32",r),g=D("float32",r),m=_(e,c),h=_(t,c),w=nt(s,o),d=nt(l,a),p=e.length,I=P(e),k=t.length,x=P(t);if(m.length+h.length===0)for(let b=0;b<u.length;b++){const y=b%w.length,E=b%d.length,N=n(w[y*2],w[y*2+1],d[E*2],d[E*2+1]);u[b]=N.real,g[b]=N.imag}else for(let b=0;b<u.length;b++){const y=K(b,i,f),E=y.slice(-p);m.forEach(Z=>E[Z]=0);const N=z(E,p,I),q=y.slice(-k);h.forEach(Z=>q[Z]=0);const j=z(q,k,x),et=n(w[N*2],w[N*2+1],d[j*2],d[j*2+1]);u[b]=et.real,g[b]=et.imag}return[u,g,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt=v((n,e)=>n+e),Ye=Y((n,e,t,s)=>({real:n+t,imag:e+s})),tn=T(ut,qt,Ye),hs={kernelName:ut,backendName:"cpu",kernelFunc:tn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function en(n,e,t,s,o){const l=S(s),a=O(o,t);for(let c=0;c<n.length;c++){const r=n[c];if(r<0)throw new Error("Input x must be non-negative!");r>=o||(l>0?a[r]+=e[c]:a[r]+=1)}return a}function nn(n,e,t,s=!1){const o=n.shape[0],l=n.shape[1],a=F([o,t],e.dtype);for(let c=0;c<o;c++)for(let r=0;r<l;r++){const i=n.get(c,r);if(i<0)throw new Error("Input x must be non-negative!");i>=t||(s?a.set(1,c,i):e.size>0?a.set(a.get(c,i)+e.get(c,r),c,i):a.set(a.get(c,i)+1,c,i))}return a}/**
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
 */const Lt=v((n,e)=>n&e),sn=T(ft,Lt),ps={kernelName:ft,backendName:"cpu",kernelFunc:sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function $t(n,e,t){const s=C(e);return V(n,s,t)}function V(n,e,t){return({inputs:s,attrs:o,backend:l})=>{const{x:a}=s;A(a,n);const c=l,r=c.data.get(a.dataId).values;let i;if(a.dtype==="string"){if(!Array.isArray(r))throw new Error("String tensor's value was not an instance of Array");i=G(r)}else i=r;const f=t||a.dtype,u=e(i,f,o);return c.makeTensorInfo(a.shape,f,u)}}/**
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
 */const zt=C(n=>Math.ceil(n)),on=V(dt,zt),gs={kernelName:dt,backendName:"cpu",kernelFunc:on};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rn(n,e,t,s){const o=R(t,S(e));if(s&&t!=="string"){let l=0;n.forEach(a=>{const c=S(a.shape);o.set(a.vals,l),l+=c})}else{let l=0;n.forEach(a=>{const c=t==="string"?G(a.vals):a.vals;let r=0;for(let i=0;i<a.shape[0];++i){const f=i*e[1]+l;for(let u=0;u<a.shape[1];++u)o[f+u]=c[r++]}l+=a.shape[1]})}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gt=v((n,e)=>n===e?1:0),an=T(ht,Gt,null,"bool"),ms={kernelName:ht,backendName:"cpu",kernelFunc:an};/**
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
 */const Wt=C(n=>Math.exp(n)),ln=V(pt,Wt,"float32"),Is={kernelName:pt,backendName:"cpu",kernelFunc:ln};/**
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
 */const _t=C(n=>Math.floor(n)),un=V(mt,_t),xs={kernelName:mt,backendName:"cpu",kernelFunc:un};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bt=v((n,e)=>Math.floor(n/e)),fn=T(It,Bt,null,"int32"),ks={kernelName:It,backendName:"cpu",kernelFunc:fn};/**
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
 */function dn(n,e,t,s,o,l,a,c,r){const i=F([s,l],t);for(let f=0;f<s;f++){const u=[];let g=0;for(let m=0;m<o;m++){const h=n[f*o+m];g+=h*a[m],u.push(h)}if(g<0||g>=r/l)throw new Error(`Invalid indices: ${u} does not index into ${c}`);for(let m=0;m<l;m++)i.values[f*l+m]=e.get(...e.indexToLoc(g*l+m))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(n,e,t){const s=F(t,n.dtype);for(let o=0;o<s.size;++o){const a=s.indexToLoc(o).slice(),c=a[0],r=a[2],i=e.locToIndex([c,r]);a[2]=e.values[i];const f=n.locToIndex(a);0<=f&&f<n.values.length&&(s.values[o]=n.values[f])}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kt=v((n,e)=>n>e?1:0),pn=T(wt,Kt,null,"bool"),bs={kernelName:wt,backendName:"cpu",kernelFunc:pn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut=v((n,e)=>n>=e?1:0),gn=T(xt,Ut,null,"bool"),ys={kernelName:xt,backendName:"cpu",kernelFunc:gn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */const Ht=v((n,e)=>n<=e?1:0),In=T(bt,Ht,null,"bool"),Ss={kernelName:bt,backendName:"cpu",kernelFunc:In};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */const Xt=C(n=>Math.log(n)),xn=V(yt,Xt),Rs={kernelName:yt,backendName:"cpu",kernelFunc:xn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */const Jt=v((n,e)=>Math.max(n,e)),bn=T(Et,Jt),vs={kernelName:Et,backendName:"cpu",kernelFunc:bn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=v((n,e)=>Math.min(n,e)),yn=T(St,Qt),Ts={kernelName:St,backendName:"cpu",kernelFunc:yn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tt=v((n,e)=>n*e),En=Y((n,e,t,s)=>({real:n*t-e*s,imag:n*s+e*t})),Sn=T(Rt,tt,En),Ns={kernelName:Rt,backendName:"cpu",kernelFunc:Sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yt(n,e,t){const s=Ie(-1,t);return tt([],e,s,n,t)}function Rn(n){const{inputs:e,backend:t}=n,{x:s}=e;A(s,"neg");const o=t.data.get(s.dataId).values,[l,a]=Yt(o,s.shape,s.dtype);return t.makeTensorInfo(a,s.dtype,l)}const Ms={kernelName:we,backendName:"cpu",kernelFunc:Rn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const te=v((n,e)=>n!==e?1:0),vn=T(vt,te,null,"bool"),Fs={kernelName:vt,backendName:"cpu",kernelFunc:vn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(n,e,t,s,o){const l=e.length,a=S(e),c=P(e),r=P(o),i=D(t,S(o));for(let f=0;f<a;++f){const u=K(f,l,c),g=new Array(u.length);for(let h=0;h<g.length;h++)g[h]=u[s[h]];const m=z(g,l,r);i[m]=n[f]}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(n){const{inputs:e,attrs:t,backend:s}=n,{x:o}=e,{perm:l}=t;A(o,"transpose");const a=o.shape.length,c=new Array(a);for(let u=0;u<c.length;u++)c[u]=o.shape[l[u]];const r=s.data.get(o.dataId).values,i=ee(r,o.shape,o.dtype,l,c);return{dataId:s.write(i,c,o.dtype),shape:c,dtype:o.dtype}}const Ps={kernelName:xe,backendName:"cpu",kernelFunc:ne};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function se(n,e,t,s){const[o,l]=ke(n,s),a=be(e,"int32"),c=O(S(o),a),r=S(l);for(let i=0;i<c.length;++i){const f=i*r;let u=1;for(let g=0;g<r;++g)u*=t[f+g];c[i]=u}return{outVals:c,outShape:o,outDtype:a}}function Tn(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:l,keepDims:a}=s;A(o,"prod");const c=o.shape.length,r=Tt(l,o.shape),i=Ee(r,c);let f=r,u=o;const g=[];i!=null&&(u=ne({inputs:{x:o},backend:t,attrs:{perm:i}}),g.push(u),f=Se(f.length,c));const m=t.data.get(u.dataId).values,{outVals:h,outShape:w,outDtype:d}=se(u.shape,u.dtype,m,f);let p=w;return a&&(p=Re(w,r)),g.forEach(I=>t.disposeIntermediateTensorInfo(I)),t.makeTensorInfo(p,d,h)}const Cs={kernelName:ye,backendName:"cpu",kernelFunc:Tn};/**
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
 */function Nn(n,e,t){n.forEach((s,o)=>{if(s<0||s>=t){const l=K(o,e.length,P(e)).join(",");throw new Error(`indices[${l}] = ${s} is not in [0, ${t})`)}})}function Mn(n,e){for(let t=0;t<n.length;++t){const s=n[t],o=t===n.length-1?e:n[t+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let l=1;l<s.length;++l)if(s[l-1]>s[l])throw new Error("Ragged splits must be sorted in ascending order")}}function Fn(n,e,t,s){const o=[];let l=0;const a=e.length-1+t.length,c=new Array(a).fill(null).map(()=>[0]);Mn(t,s);let r=1;for(let i=0;i<e.length-1;++i){r*=e[i];const f=e[i+1];for(let u=1;u<r+1;++u)c[i].push(u*f)}for(let i=0;i<n.length;++i){let f=n[i],u=n[i]+1;for(let g=0;g<t.length;++g){const m=t[g],h=g+e.length-1;if(h>=0){const w=c[h],d=w[w.length-1]-m[f];for(let p=f;p<u;++p)c[h].push(m[p+1]+d)}f=m[f],u=m[u]}u!==f&&(o.push([f,u]),l+=u-f)}return{outSplits:c,valueSlices:o,numValues:l}}function Pn(n){const e=[];for(let t=0;t<n.length;++t){const s=n[t].length,o=R("int32",s);e.push(o),n[t].forEach((l,a)=>o[a]=l)}return e}function ot(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let s=e;s<n.length;s++)t[e-1]*=n[s];return t}function Cn(n,e,t,s,o,l){const a=ot(e,2)[1],c=ot(l,2)[1];let r=0;for(const i of t)for(let f=i[0];f<i[1];++f){for(let u=0;u<s;++u)o[r*c+u]=n[f*a+u];++r}}function Vn(n,e,t,s,o){const l=e.slice();l[0]=o;const a=R(t,S(l)),c=n.length,r=c===0?0:c/e[0];return Cn(n,e,s,r,a,l),[a,l]}function Dn(n,e,t,s,o,l,a,c){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const r=e[0][0]-1;if(Nn(l,a,r),s.length===0)throw new Error("params.rank must be nonzero");const i=s[0],{outSplits:f,valueSlices:u,numValues:g}=Fn(l,a,n,i),m=Pn(f),h=Vn(t,s,o,u,g);return[m,h[0],h[1]]}/**
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
 */const rt=2147483647;function An(n,e,t,s,o,l,a){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(a.length>1)throw new Error("deltas must be a scalar or vector");const c=e.length===0,r=o.length===0,i=a.length===0,f=[];c||f.push(e[0]),r||f.push(o[0]),i||f.push(a[0]);for(let d=1;d<f.length;++d)if(f[d]!==f[d-1])throw new Error("starts, limits, and deltas must have the same shape");const u=f.length===0?1:f[0],g=R("int32",u+1);g[0]=0;for(let d=0;d<u;++d){const p=c?n[0]:n[d],I=r?s[0]:s[d],k=i?l[0]:l[d];if(k===0)throw new Error("Requires delta != 0");let x;if(k>0&&I<p||k<0&&I>p)x=0;else if(x=Math.ceil(Math.abs((I-p)/k)),x>rt)throw new Error(`Requires ((limit - start) / delta) <= ${rt}`);g[d+1]=g[d]+x}const m=g[u],h=R(t,m);let w=0;for(let d=0;d<u;++d){const p=g[d+1]-g[d];let I=c?n[0]:n[d];const k=i?l[0]:l[d];for(let x=0;x<p;++x)h[w++]=I,I+=k}return[g,h]}/**
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
 */var M=Ve;class B{constructor(e,t,s,o,l,a,c,r,i,f){this.shape=e,this.shapeShape=t,this.values=s,this.valuesShape=o,this.valuesDType=l,this.defaultValue=a,this.defaultValueShape=c,this.rowPartitionValues=r,this.rowPartitionValuesShapes=i,this.rowPartitionTypes=ve(f),this.raggedRank=Te(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case M.VALUE_ROWIDS:return B.getMaxWidthValueRowID(t);case M.ROW_SPLITS:return B.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${M[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let s=0;for(let o=0;o<t-1;++o){const l=e[o+1]-e[o];l>s&&(s=l)}return s}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let s=0,o=e[0],l=0;for(let a=1;a<t;++a){const c=e[a];c!==o&&(o=c,l=Math.max(a-s,l),s=a)}return Math.max(t-s,l)}tensorShapeFromTensor(e,t,s=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return lt(e,s)}calculateOutputSize(e){const t=this.valuesShape,s=this.defaultValueShape;Ne(s,t);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=Me(this.raggedRank,o,t);a[0]<0&&(a[0]=e);for(let c=1;c<=this.raggedRank;++c)a[c]<0&&(a[c]=this.getMaxWidth(c));return a}calculateFirstParentOutputIndex(e,t,s){const o=Math.min(e,s),l=[];let a=0;for(let c=0;c<o;++c,a+=t)l.push(a);for(let c=o;c<e;++c)l.push(-1);return ct(l.length===e,()=>"Final length of result must be equal to firstDimension."),l}calculateOutputIndexRowSplit(e,t,s,o){const l=e.length,a=[];for(let c=0;c<l-1;++c){const r=e[c+1]-e[c];let i=Math.min(o,r),f=t[c];f===-1&&(i=0);for(let u=0;u<i;++u)a.push(f),f+=s;for(let u=0;u<r-i;++u)a.push(-1)}if(l>0&&a.length!==e[l-1])throw new Error("Invalid row split size.");return a}calculateOutputIndexValueRowID(e,t,s,o){const l=e.length,a=[];if(l===0)return[];let c=0,r=e[0];if(r>=t.length)throw new Error(`Got currentValueRowId=${r}, which is not less than ${t.length}`);let i=t[r];a.push(i);for(let f=1;f<l;++f){const u=e[f];if(u===r)i>=0&&(++c,c<o?i+=s:i=-1);else{if(c=0,r=u,u>=t.length)throw new Error(`Got nextValueRowId=${u} which is not less than ${t.length}`);i=t[u]}a.push(i)}if(a.length!==e.length)throw new Error("Invalid row ids.");return a}calculateOutputIndex(e,t,s,o){const l=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case M.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(l,t,s,o);case M.ROW_SPLITS:if(l.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${l.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(l,t,s,o);default:throw new Error(`Unsupported partition type: ${M[a]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case M.FIRST_DIM_SIZE:return e[0];case M.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case M.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${M[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),s=this.calculateOutputSize(t),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let r=o.length-2;r>=0;--r)o[r]=o[r+1]*s[r+1];const l=lt(s,!1),a=R(this.valuesDType,S(l));if(o[0]*s[0]>0){let r=this.calculateFirstParentOutputIndex(t,o[0],s[0]);for(let i=1;i<=this.raggedRank;++i)r=this.calculateOutputIndex(i-1,r,o[i],s[i]);this.setOutput(this.raggedRank,r,a,l)}return[l,a]}setOutput(e,t,s,o){if(s.length===0)return;const l=this.values,a=s;let c=o.slice();c=c.slice(e+1);const r=S(c),i=t.length;let f=this.defaultValue;if(f.length!==r&&f.length!==1){const h=this.defaultValueShape;Fe(()=>{const w=Pe(f,h);f=Ce(w,c).dataSync()})}let u=0,g=0,m=0;for(let h=0;h<=i;++h){let w=h<i?t[h]:-1;if(w===m){++m;continue}if(g<m){const d=l.subarray(u*r),p=a.subarray(g*r),I=(m-g)*r;at(p,d,I)}if(h>=i){const d=s.length;w=Math.floor(d/r)}if(w>m)if(this.defaultValue.length===1)a.subarray(m*r,w*r).fill(this.defaultValue[0]),m=w;else for(;w>m;){const d=a.slice(m*r);at(d,f,r),++m}w<0?(u=h+1,g=m):(u=h,g=m,m=g+1)}}}function at(n,e,t){for(let s=0;s<t;s++)n[s]=e[s]}function lt(n,e){const t=[];for(let s of n){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}t.push(s)}return t}function On(n,e,t,s,o,l,a,c,r,i){return new B(n,e,t,s,o,l,a,c,r,i).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qn(n,e,t,s){const o=n===e,l=n<e&&t<0,a=e<n&&t>1;if(o||l||a)return O(0,s);const c=Math.abs(Math.ceil((e-n)/t)),r=O(c,s);e<n&&t===1&&(t=-1),r[0]=n;for(let i=1;i<r.length;i++)r[i]=r[i-1]+t;return r}/**
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
 */const oe=C(n=>1/Math.sqrt(n)),Ln=V(Nt,oe),Vs={kernelName:Nt,backendName:"cpu",kernelFunc:Ln};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $n(n,e,t,s,o,l,a,c,r,i){const f=[s/o,o],u=n.values,g=e.values;if(s===0)return F(t,e.dtype);const m=r instanceof X?r:F(f,e.dtype);typeof r=="string"||typeof r=="number"?m.values.fill(r):typeof r=="boolean"&&m.values.fill(+r);for(let h=0;h<l;h++){const w=[];let d=0;for(let p=0;p<a;p++){const I=u[h*a+p];w.push(I),d+=I*c[p]}if(d<0||d>=s/o)throw new Error(`Invalid indices: ${w} does not index into ${t}`);for(let p=0;p<o;p++)i?m.values[d*o+p]+=g[h*o+p]:m.values[d*o+p]=e.rank===0?g[0]:g[h*o+p]}return m}/**
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
 */const zn=C(n=>1/(1+Math.exp(-n))),Gn=$t(Mt,n=>1/(1+Math.exp(-n))),Ds={kernelName:Mt,backendName:"cpu",kernelFunc:Gn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function re(n,e,t,s,o){const l=De(s,e,t),a=S(t),c=P(s);if(l){const u=Ae(e,c);return o==="string"?n.slice(u,u+a):n.subarray(u,u+a)}const r=o==="string"?G(n):n,i=F(s,o,r),f=F(t,o);for(let u=0;u<f.size;++u){const g=f.indexToLoc(u),m=g.map((h,w)=>h+e[w]);f.set(i.get(...m),...g)}return o==="string"?Oe(f.values):f.values}function Wn(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:l,size:a}=s;A(o,"slice");const[c,r]=Le(o,l,a);$e(o,c,r);const i=t.data.get(o.dataId).values,f=re(i,c,r,o.shape,o.dtype);return t.makeTensorInfo(r,o.dtype,f)}const As={kernelName:qe,backendName:"cpu",kernelFunc:Wn};/**
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
 */function jn(n,e,t,s,o,l,a){const c=e[0],r=l[0],i=new Array(r),f=new Array(c),u=e[1];if(r===0){if(c!==0)throw new Error(ze(c));const d=R(t,0),p=R(o,0);return[d,[0,u],p,i,f]}let g=!0,m=0;const h=new Array(r).fill(0);for(let d=0;d<c;++d){const p=n[d*u];if(p<0)throw new Error(Ge(d,p));if(p>=r)throw new Error(We(d,p,r));++h[p],g=g&&p>=m,m=p}let w=!0;for(let d=0;d<r;++d){const p=h[d]===0;i[d]=p,w=w&&!p,h[d]=Math.max(h[d],1),d>0&&(h[d]+=h[d-1])}if(w&&g){const d=n,p=s;for(let I=0;I<c;++I)f[I]=I;return[d,[c,u],p,i,f]}else{const d=h[r-1],p=R(t,d*u),I=R(o,d),k=new Array(r).fill(0);for(let x=0;x<c;++x){const b=n[x*u],y=k[b],E=(b===0?0:h[b-1])+y;k[b]++;for(let N=0;N<u;++N)p[E*u+N]=n[x*u+N];I[E]=s[x],f[x]=E}for(let x=0;x<r;++x)if(k[x]===0){const y=x===0?0:h[x-1];p[y*u+0]=x;for(let E=1;E<u;++E)p[y*u+E]=0;I[y]=a}return[p,[d,u],I,i,f]}}/**
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
 */function _n(n,e,t,s,o){const l=S(s),a=e[0],c=o.length,r=[];let i=1,f=-1;for(let d=0;d<c;++d){const p=o[d];if(p===-1){if(f!==-1)throw new Error(je(f,d));f=d,r.push(1)}else{if(p<0)throw new Error(_e(d,p));i*=p,r.push(p)}}if(f!==-1){if(i<=0)throw new Error(Be());const d=Math.trunc(l/i);if(i*d!==l)throw new Error(Ke(s,r));r[f]=d}if(S(r)!==l)throw new Error(Ue(s,r));const g=s.length,m=[];if(g>0){m[g-1]=1;for(let d=g-2;d>=0;--d)m[d]=m[d+1]*s[d+1]}const h=[];if(c>0){h[c-1]=1;for(let d=c-2;d>=0;--d)h[d]=h[d+1]*r[d+1]}const w=R(t,a*c);for(let d=0;d<a;++d){let p=0;for(let I=0;I<g;++I)p+=n[d*g+I]*m[I];for(let I=0;I<c;++I)w[d*c+I]=Math.trunc(p/h[I]),p%=h[I]}return[w,[a,c],r]}/**
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
 */function Bn(n,e,t,s,o,l=!1,a=0){const c=s.length,r=[e[0],n.length/e[0]],i=r[1],u=c>0?o[c-1]+1:0;if(u<0)throw new Error(st());const g=e.slice();g[0]=u;const m=g.reduce((k,x)=>k*x,1),h=R(t,m);if(c===0)return u>0&&h.fill(a),[h,g];if(u<=0)throw new Error(st());let w=0,d=1,p=0,I=o[w];for(;;){let k=0;if(d<c){if(k=o[d],I===k){++d;continue}if(I>=k)throw new Error(Ze())}if(I<0||I>=u)throw new Error(He(I,u));I>p&&h.fill(a,p*i,I*i);for(let x=w;x<d;++x){const b=s[x];if(b<0||b>=r[0])throw new Error(Xe(x,s[x],r[0]));for(let y=0;y<i;y++)h[I*i+y]+=n[b*i+y]}if(l)for(let x=0;x<i;x++)h[I*i+x]/=d-w;if(w=d,++d,p=I+1,I=k,d>c)break}return p<u&&h.fill(a,p*i,u*i),[h,g]}/**
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
 */const Kn=C(n=>Math.sqrt(n)),Un=$t(Ft,n=>Math.sqrt(n)),Os={kernelName:Ft,backendName:"cpu",kernelFunc:Un};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ae=v((n,e)=>{const t=n-e;return t*t}),Zn=T(Pt,ae),qs={kernelName:Pt,backendName:"cpu",kernelFunc:Zn};/**
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
 */const le=C((n,e)=>{const{pattern:t,replaceGlobal:s,rewrite:o}=e;return n.replace(new RegExp(t,s?"g":""),o)}),Hn=V(Ct,le),Ls={kernelName:Ct,backendName:"cpu",kernelFunc:Hn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xn(n,e,t,s){const o=F(n,e.dtype);for(let l=0;l<o.size;l++){const a=o.indexToLoc(l),c=new Array(a.length);for(let r=0;r<c.length;r++)c[r]=a[r]*t[r]+s[r];o.set(e.get(...c),...a)}return o}/**
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
 */class Jn{constructor(e,t,s,o,l,a){this.separator=H(e),this.nGramWidths=t,this.leftPad=H(s),this.rightPad=H(o),this.padWidth=l,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const s=this.getPadWidth(t);return Math.max(0,e+2*s-t+1)}createNGrams(e,t,s,o,l,a){for(let c=0;c<l;++c){const r=this.getPadWidth(a),i=Math.max(0,r-c),f=Math.max(0,r-(l-(c+1))),u=a-(i+f),g=t+(i>0?0:c-r);let m=0;m+=i*this.leftPad.length;for(let I=0;I<u;++I)m+=e[g+I].length;m+=f*this.rightPad.length;const h=i+f+u-1;m+=h*this.separator.length,s[o+c]=new Uint8Array(m);const w=s[o+c];let d=0;const p=I=>I.forEach(k=>w[d++]=k);for(let I=0;I<i;++I)p(this.leftPad),p(this.separator);for(let I=0;I<u-1;++I)p(e[g+I]),p(this.separator);if(u>0){p(e[g+u-1]);for(let I=0;I<f;++I)p(this.separator),p(this.rightPad)}else{for(let I=0;I<f-1;++I)p(this.rightPad),p(this.separator);p(this.rightPad)}}}compute(e,t){const s=e.length,o=t.length;if(o>0){let r=t[0];if(r!==0)throw new Error(`First split value must be 0, got ${r}`);for(let i=1;i<o;++i){let f=t[i]>=r;if(f=f&&t[i]<=s,!f)throw new Error(`Invalid split value ${t[i]}, must be in [${r}, ${s}]`);r=t[i]}if(r!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${r}`)}const l=o-1,a=R("int32",o);if(s===0||o===0){const r=new Array(s);for(let i=0;i<=l;++i)a[i]=0;return[r,a]}a[0]=0;for(let r=1;r<=l;++r){const i=t[r]-t[r-1];let f=0;this.nGramWidths.forEach(u=>{f+=this.getNumNGrams(i,u)}),this.preserveShort&&i>0&&f===0&&(f=1),a[r]=a[r-1]+f}const c=new Array(a[l]);for(let r=0;r<l;++r){const i=t[r];let f=a[r];if(this.nGramWidths.forEach(u=>{const g=t[r+1]-t[r],m=this.getNumNGrams(g,u);this.createNGrams(e,i,c,f,m,u),f+=m}),this.preserveShort&&f===a[r]){const u=t[r+1]-t[r];if(u===0)continue;const g=u+2*this.padWidth;this.createNGrams(e,i,c,f,1,g)}}return[c,a]}}function Qn(n,e,t,s,o,l,a,c){return new Jn(t,s,o,l,a,c).compute(n,e)}/**
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
 */function Yn(n,e,t,s){if(!n.length)return;if(e.length===0){for(let l=0;l<n.length;++l)s.push(n.subarray(l,l+1));return}if(e.length===1){const l=e[0];let a=n.indexOf(l);for(;a!==-1;){const c=n.subarray(0,a);(!t||c.length!==0)&&s.push(c),n=n.subarray(a+1),a=n.indexOf(l)}(!t||n.length!==0)&&s.push(n);return}let o=0;for(let l=0;l<n.length+1;l++)if(l===n.length||e.indexOf(n[l])!==-1){const a=n.subarray(o,l);(!t||a.length!==0)&&s.push(a),o=l+1}}function ts(n,e,t){const s=n.length,o=[];let l=0,a=0;const c=new Array(s);for(let g=0;g<s;++g){const m=o.length;Yn(n[g],e,t,o);const h=o.length-m;c[g]=h,l+=h,a=Math.max(a,h)}const r=R("int32",l*2),i=new Array(l),f=[s,a];let u=0;for(let g=0;g<s;++g)for(let m=0;m<c[g];++m)r[u*2]=g,r[u*2+1]=m,i[u]=o[u],++u;return[r,i,f]}/**
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
 */function es(n,e){const t=R("int32",n.length);for(let s=0;s<n.length;++s)t[s]=Je(n[s]).modulo(e).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ce=v((n,e)=>n-e),ns=Y((n,e,t,s)=>({real:n-t,imag:e-s})),ss=T(Vt,ce,ns),$s={kernelName:Vt,backendName:"cpu",kernelFunc:ss};/**
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
 */function os(n,e){const t=new Array(n.rank);for(let o=0;o<t.length;o++)t[o]=n.shape[o]*e[o];const s=F(t,n.dtype);for(let o=0;o<s.values.length;++o){const l=s.indexToLoc(o),a=new Array(n.rank);for(let r=0;r<a.length;r++)a[r]=l[r]%n.shape[r];const c=n.locToIndex(a);s.values[o]=n.values[c]}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function ie(n,e,t=0,s=n.length-1){for(;s>t;){if(s-t>600){const c=s-t+1,r=e-t+1,i=Math.log(c),f=.5*Math.exp(2*i/3),u=.5*Math.sqrt(i*f*(c-f)/c)*Math.sign(r-c/2),g=Math.max(t,Math.floor(e-r*f/c+u)),m=Math.min(s,Math.floor(e+(c-r)*f/c+u));ie(n,e,g,m)}const o=n[e];let l=t,a=s;for(L(n,t,e),$(n[s],o)>0&&L(n,t,s);l<a;){for(L(n,l,a),l++,a--;$(n[l],o)<0;)l=l+1;for(;$(n[a],o)>0;)a=a-1}$(n[t],o)===0?L(n,t,a):(a=a+1,L(n,a,s)),a<=e&&(t=a+1),e<=a&&(s=a-1)}}function rs(n,e,t,s,o){const l=e[e.length-1],[a,c]=[n.length/l,l],r=D(t,a*s),i=D("int32",a*s);for(let u=0;u<a;u++){const g=u*c,m=n.subarray(g,g+c);let h=new Array(m.length);m.forEach((I,k)=>h[k]={value:I,index:k}),s<h.length&&(ie(h,s),h=h.slice(0,s)),o&&h.sort($);const w=u*s,d=r.subarray(w,w+s),p=i.subarray(w,w+s);for(let I=0;I<s;I++)d[I]=h[I].value,p[I]=h[I].index}const f=e.slice();return f[f.length-1]=s,[F(f,t,r),F(f,"int32",i)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function as(n,e,t,s){const o=Tt(e,t)[0],l=[1,t[0],1];for(let h=0;h<o;h++)l[0]*=t[h];l[1]=t[o];for(let h=o+1;h<t.length;h++)l[2]*=t[h];const a=new Map,c=new Int32Array(t[o]),r=new X(l,s,n),i=[],f=l[0]===1&&l[2]===1;for(let h=0;h<t[o];h++){let w;if(f)w=n[h].toString();else{const p=[];for(let I=0;I<l[0];I++)for(let k=0;k<l[2];k++)p.push(r.get(I,h,k));w=p.join(",")}const d=a.get(w);if(d!=null)c[h]=d;else{const p=a.size;a.set(w,p),c[h]=p,i.push(h)}}const u=l.slice();u[1]=a.size;const g=new X(u,s);i.forEach((h,w)=>{for(let d=0;d<l[0];d++)for(let p=0;p<l[2];p++)g.set(r.get(d,h,p),d,w,p)});const m=t.slice();return m[o]=u[1],{outputValues:g.values,outputShape:m,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zs=Object.freeze(Object.defineProperty({__proto__:null,addImpl:qt,bincountImpl:en,bincountReduceImpl:nn,bitwiseAndImpl:Lt,castImpl:Ot,ceilImpl:zt,concatImpl:rn,equalImpl:Gt,expImpl:Wt,expm1Impl:jt,floorDivImpl:Bt,floorImpl:_t,gatherNdImpl:dn,gatherV2Impl:hn,greaterEqualImpl:Ut,greaterImpl:Kt,lessEqualImpl:Ht,lessImpl:Zt,linSpaceImpl:wn,logImpl:Xt,maxImpl:kn,maximumImpl:Jt,minimumImpl:Qt,multiplyImpl:tt,negImpl:Yt,notEqualImpl:te,prodImpl:se,raggedGatherImpl:Dn,raggedRangeImpl:An,raggedTensorToTensorImpl:On,rangeImpl:qn,rsqrtImpl:oe,scatterImpl:$n,sigmoidImpl:zn,simpleAbsImpl:Dt,sliceImpl:re,sparseFillEmptyRowsImpl:jn,sparseReshapeImpl:_n,sparseSegmentReductionImpl:Bn,sqrtImpl:Kn,squaredDifferenceImpl:ae,staticRegexReplaceImpl:le,stridedSliceImpl:Xn,stringNGramsImpl:Qn,stringSplitImpl:ts,stringToHashBucketFastImpl:es,subImpl:ce,tileImpl:os,topKImpl:rs,transposeImpl:ee,uniqueImpl:as},Symbol.toStringTag,{value:"Module"}));export{us as $,On as A,qn as B,$n as C,jn as D,_n as E,Bn as F,Xn as G,Qn as H,ts as I,es as J,os as K,rs as L,as as M,an as N,cs as O,hs as P,ps as Q,ds as R,gs as S,is as T,ms as U,Is as V,ws as W,xs as X,ks as Y,bs as Z,ys as _,A as a,Es as a0,Ss as a1,Rs as a2,vs as a3,Ts as a4,Ns as a5,Ms as a6,Fs as a7,Cs as a8,fs as a9,Vs as aa,Ds as ab,As as ac,Os as ad,qs as ae,Ls as af,$s as ag,Ps as ah,zs as ai,tn as b,v as c,T as d,Wn as e,en as f,U as g,rn as h,Q as i,nn as j,W as k,ss as l,Sn as m,dn as n,hn as o,wn as p,ee as q,At as r,Gn as s,ne as t,$t as u,kn as v,ln as w,Dn as x,An as y,J as z};
