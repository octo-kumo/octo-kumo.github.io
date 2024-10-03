import{e as $,cM as E,h9 as Ot,ha as un,hb as Ut,hc as Re,cE as z,cB as _,hd as Ln,cO as Ae,he as mo,cQ as go,hf as ln,d_ as Co,d$ as $o,e0 as ue,e5 as me,c$ as dn,e4 as Wt,E as xt,hg as pn,hh as vo,e1 as $t,e2 as bo,dW as Ro,cP as Bn,cD as So,bJ as yo,hi as wo,hj as To,e6 as Io,hk as No,e7 as Eo,cN as q,cV as ko,cT as Oo,e9 as Ao,dh as Qe,ea as Do,dm as ke,c_ as At,dg as Po,ed as Fo,ee as _o,hl as Lo,hm as Mt,dp as K,dq as ne,dr as se,el as re,dl as pe,ds as he,hn as Gt,fg as Bo,dk as Vo,eg as Uo,cL as Wo,eh as Mo,ei as Go,d0 as zo,ej as Ho,ek as Xo,em as Ko,en as jo,eo as qo,ep as Yo,eq as Qo,er as Zo,es as Jo,et as ea,eu as ta,ev as Ze,ew as Je,ex as na,ey as vt,ez as sa,eA as oa,ef as aa,eB as ra,dE as ia,dF as ca,dG as ua,dB as la,dC as da,eC as pa,eD as Vn,eE as Un,eF as Wn,eG as ha,eH as fa,eI as xa,d1 as ma,eJ as ga,dj as Ca,cW as $a,cY as va,cz as ba,cZ as Ra,d3 as Sa,eK as ya,eL as wa,eP as Oe,eM as Ta,eN as Ia,eO as Na,eQ as Ea,eR as bt,eS as fe,eT as ka,eU as Oa,eV as Aa,eW as zt,eX as Da,eY as Pa,eZ as Fa,e_ as _a,e$ as La,f2 as Mn,f0 as Ba,f3 as Va,f4 as Ua,f5 as Wa,f6 as Ma,f7 as Ga,f8 as za,f9 as Ha,fa as Xa,fb as Ka,fh as ja,fi as qa,fj as Ya,fk as Qa,fl as Za,fm as Ja,e8 as er,fn as tr,d4 as nr,fo as sr,fu as or,fp as ar,fq as rr,fr as ir,fs as cr,ft as ur,d5 as lr,fv as dr,d6 as pr,fE as hr,fF as fr,fG as xr,d2 as mr,fH as gr,d7 as Cr,d8 as $r,ho as vr,fI as br,fJ as Rr,fK as Sr,fL as yr,fM as wr,fN as Tr,d9 as Ir,da as Nr,fO as Er,fP as kr,fQ as Or,fR as Ar,db as Dr,dc as Pr,fS as Fr,dd as _r,fT as Lr,fU as Br,fV as Vr,fW as Ur,fX as Wr,fY as Mr,fZ as Gr,de as zr,f_ as Hr,f$ as Xr,g0 as Kr,g1 as jr,g2 as qr,g3 as Yr,g4 as Qr,df as Zr,g5 as Jr,g6 as ei,fw as ti,dY as ni,g7 as si,g8 as oi,di as ai,g9 as ri,ga as ii,gb as ci,gc as ui,gd as li,ge as di,gf as pi,gg as hi,gh as fi,gi as xi,gj as mi,gk as gi,gl as Ci,dn as $i,gm as vi,gn as bi,go as Ri,gp as Si,gq as yi,eb as wi,ec as Ti,gr as Ii,gs as Ni,gt as Ei,gu as ki,gv as Oi,gw as Ai,gx as Di,gy as Pi,dy as Fi,gz as _i,gA as Ht,gB as Li,gC as Bi,gD as Vi,gE as Ui,gF as Wi,dA as Mi,gG as Gi,gH as zi,gI as Hi,gJ as Xi,gK as Ki,gL as ji,gM as qi,gN as Yi,gO as Qi,gP as Zi,gQ as Ji,gR as ec,dT as tc,gS as nc,dU as sc,dV as oc,gT as ac,gU as rc,gV as ic,gW as cc,gX as uc,gY as lc,gZ as dc,g_ as pc,g$ as hc,h0 as fc,h1 as xc,h2 as mc,h3 as gc,h5 as Cc,h6 as $c,h7 as vc,hp as bc,hq as Rc,h8 as Sc}from"./CkQ8b2Sy.js";import{ai as yc}from"./ClGREnwh.js";import"./CcL3bgDe.js";import"./DYsAHKpn.js";/**
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
 */const Ce={},at={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function wc(n,e){Ce[n]=e}function te(n,e){if(!(n in Ce)||e!=null){const s=Ic(n,e);if(s!==null)Ce[n]=s;else return console.log("Could not get context for WebGL version",n),null}const t=Ce[n];return t==null||t.isContextLost()?(delete Ce[n],te(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Ce[n])}function Tc(n){if(!$().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Ic(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e??Tc(n);return t.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Ce[n]},!1),$().getBool("SOFTWARE_WEBGL_ENABLED")&&(at.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",at)||t.getContext("experimental-webgl",at):t.getContext("webgl2",at)}/**
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
 */var Xe;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Xe||(Xe={}));var Y;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Y||(Y={}));var L;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(L||(L={}));function et(n,e){return[e,n]}function Nc(n,e){return n*e}function rt(n){const e=E(n),t=Math.ceil(e/4);return Ot(t)}function De(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function Ec(n,e){const[t,s]=De(n,e);return t*s*4}function Xt(n,e){const t=n;let s,o,a,r,c,i,u,l,d,p;return $().getNumber("WEBGL_VERSION")===2?(s=t.R32F,o=t.R16F,a=t.RGBA16F,r=t.RGBA32F,c=t.RED,u=4,l=1,d=t.HALF_FLOAT,p=t.FLOAT,i=t.RGBA8):(s=n.RGBA,o=n.RGBA,a=n.RGBA,r=t.RGBA,c=n.RGBA,u=4,l=4,d=e!=null?e.HALF_FLOAT_OES:null,p=n.FLOAT,i=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:r,textureFormatFloat:c,downloadTextureFormat:i,downloadUnpackNumChannels:u,defaultNumChannels:l,textureTypeHalfFloat:d,textureTypeFloat:p}}/**
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
 */function y(n,e){const t=e();return $().getBool("DEBUG")&&kc(n),t}function kc(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+zn(n,e))}const Oc=596e-10,Ac=65504;function Gn(n){return!!($().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Oc<Math.abs(n)&&Math.abs(n)<Ac)}function zn(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function Me(n,e){return ie(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function Hn(n,e){const t=ie(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(y(n,()=>n.shaderSource(t,e)),y(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function Xn(n,e){const t=ie(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(y(n,()=>n.shaderSource(t,e)),y(n,()=>n.compileShader(t)),$().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw Kt(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const Dc=/ERROR: [0-9]+:([0-9]+):/g;function Kt(n,e){const t=Dc.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(n);return}const s=+t[1],o=n.split(`
`),a=o.length.toString().length+2,r=o.map((d,p)=>un((p+1).toString(),a)+d);let c=0;for(let d=0;d<r.length;d++)c=Math.max(r[d].length,c);const i=r.slice(0,s-1),u=r.slice(s-1,s),l=r.slice(s);console.log(i.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${un(u[0],c)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(l.join(`
`))}function Kn(n){return ie(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function jn(n,e){if(y(n,()=>n.linkProgram(e)),!$().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function lt(n,e){if(y(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function qn(n,e){const t=ie(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return y(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),y(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function Yn(n,e){const t=ie(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return y(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),y(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function Pc(){return $().getNumber("WEBGL_VERSION")===2?1:4}function Qn(n){return ie(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function Zn(n,e){const t=$().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const s=`[${n}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>t||e>t){const s=`[${n}x${e}]`,o=`[${t}x${t}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function Jn(n){return ie(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Dt(n,e,t,s,o,a,r){const c=n.getAttribLocation(e,t);return c===-1?!1:(y(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),y(n,()=>n.vertexAttribPointer(c,o,n.FLOAT,!1,a,r)),y(n,()=>n.enableVertexAttribArray(c)),!0)}function es(n,e,t){as(n,t),y(n,()=>n.activeTexture(n.TEXTURE0+t)),y(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function Fc(n,e){as(n,e),y(n,()=>n.activeTexture(n.TEXTURE0+e)),y(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function ts(n,e,t){return ie(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function ns(n,e,t){return n.getUniformLocation(e,t)}function ss(n,e,t,s){y(n,()=>es(n,e,s)),y(n,()=>n.uniform1i(t,s))}function _c(n){y(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,null)),y(n,()=>n.viewport(0,0,n.canvas.width,n.canvas.height)),y(n,()=>n.scissor(0,0,n.canvas.width,n.canvas.height))}function dt(n,e,t){y(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),y(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function Pt(n,e){y(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),y(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Ge(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+os(n,e))}function os(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function ie(n,e,t){const s=y(n,()=>e());if(s==null)throw new Error(t);return s}function as(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+n.TEXTURE0;if(s<n.TEXTURE0||s>t){const o=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${o}.`)}}function $e(n,e=2){return E(n.slice(0,n.length-e))}function ve(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function ze(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[$e(n),...ve(n)]),e}function rs(n,e=!1){let t=$().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=$().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&$().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=t/2),e&&(t=t*2,s=s*2,n=n.map((c,i)=>i>=n.length-2?Ut(n[i]):n[i]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Re(n).newShape);let o=E(n),a=null;n.length<=1&&o<=t?a=[1,o]:n.length===2&&n[0]<=t&&n[1]<=t?a=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?a=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?a=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?a=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(a=[n[0],n[1]*n[2]*n[3]]);const r=a!=null&&Math.max(...a)>s&&Math.min(...a)<=(e?2:1)&&Math.min(...a)>0;if(a==null||r)if(e){const c=$e(n);let i=2,u=2;n.length&&([i,u]=ve(n)),o=c*(i/2)*(u/2),a=Ot(o).map(l=>l*2)}else a=Ot(o);return a}function it(n){return n%2===0}function Ke(n,e){if(n=n.slice(-2),e=e.slice(-2),z(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n[n.length-1],s=e[e.length-1];if(t===s||it(t)&&it(s)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&it(n[0])&&it(e[0])}let pt,ht;function is(n){if(pt==null){const e=te(n);pt=e.getParameter(e.MAX_TEXTURE_SIZE)}return pt}function Lc(){pt=null}function Bc(){ht=null}function cs(n){if(ht==null){const e=te(n);ht=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ht)}function us(n){if(n===0)return 0;let e;const t=te(n);return Q(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:Q(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function Q(n,e){return n.getExtension(e)!=null}function Ft(n){try{if(te(n)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function ls(n){if(n===0)return!1;const e=te(n);if(n===1){if(!Q(e,"OES_texture_float"))return!1}else if(!Q(e,"EXT_color_buffer_float"))return!1;return _t(e)}function ds(n){if(n===0)return!1;const e=te(n);if(n===1){if(!Q(e,"OES_texture_float")||!Q(e,"WEBGL_color_buffer_float"))return!1}else{if(Q(e,"EXT_color_buffer_float"))return _t(e);const s="EXT_color_buffer_half_float";if(Q(e,s)){const o=e.getExtension(s);return Vc(e,o)}return!1}return _t(e)}function _t(n){const e=Xt(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const a=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const r=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(a),r}function Vc(n,e){const t=Xt(n,e),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const c=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(r),c}function ps(n){return n!==2?!1:te(n).fenceSync!=null}function Pe(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&_(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const V$=Object.freeze(Object.defineProperty({__proto__:null,assertNotComplex:Pe,bindCanvasToFramebuffer:_c,bindColorTextureToFramebuffer:dt,bindTextureToProgramUniformSampler:ss,bindTextureUnit:es,bindVertexBufferToProgramAttribute:Dt,callAndCheck:y,canBeRepresented:Gn,createFragmentShader:Xn,createFramebuffer:Jn,createProgram:Kn,createStaticIndexBuffer:Yn,createStaticVertexBuffer:qn,createTexture:Qn,createVertexShader:Hn,getBatchDim:$e,getExtensionOrThrow:Me,getFramebufferErrorMessage:os,getMaxTexturesInShader:cs,getNumChannels:Pc,getProgramUniformLocation:ns,getProgramUniformLocationOrThrow:ts,getRowsCols:ve,getShapeAs3D:ze,getTextureShapeFromLogicalShape:rs,getWebGLDisjointQueryTimerVersion:us,getWebGLErrorMessage:zn,getWebGLMaxTextureSize:is,hasExtension:Q,isCapableOfRenderingToFloatTexture:ls,isDownloadFloatTextureEnabled:ds,isReshapeFree:Ke,isWebGLFenceEnabled:ps,isWebGLVersionEnabled:Ft,linkProgram:jn,logShaderSourceAndInfoLog:Kt,resetMaxTextureSize:Lc,resetMaxTexturesInShader:Bc,unbindColorTextureFromFramebuffer:Pt,unbindTextureUnit:Fc,validateFramebuffer:Ge,validateProgram:lt,validateTextureSize:Zn},Symbol.toStringTag,{value:"Module"}));/**
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
 */const T=$();T.registerFlag("HAS_WEBGL",()=>T.getNumber("WEBGL_VERSION")>0);T.registerFlag("WEBGL_VERSION",()=>Ft(2)?2:Ft(1)?1:0);T.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);T.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>T.get("WEBGL_VERSION")===2);T.registerFlag("WEBGL_CPU_FORWARD",()=>!0);T.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);T.registerFlag("WEBGL_PACK",()=>T.getBool("HAS_WEBGL"));T.registerFlag("WEBGL_PACK_NORMALIZATION",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_CLIP",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_REDUCE",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_LAZILY_UNPACK",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_CONV_IM2COL",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>T.getBool("WEBGL_PACK"));T.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>is(T.getNumber("WEBGL_VERSION")));T.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>cs(T.getNumber("WEBGL_VERSION")));T.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=T.getNumber("WEBGL_VERSION");return n===0?0:us(n)});T.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>T.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ln());T.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>ls(T.getNumber("WEBGL_VERSION")));T.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>T.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:T.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));T.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>ds(T.getNumber("WEBGL_VERSION")));T.registerFlag("WEBGL_FENCE_API_ENABLED",()=>ps(T.getNumber("WEBGL_VERSION")));T.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>T.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);T.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});T.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ln()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});T.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);T.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);T.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);T.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);T.registerFlag("WEBGL_EXP_CONV",()=>!1);T.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>T.getBool("IS_TEST"));T.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);T.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);T.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);T.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);/**
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
 */function G(){let n,e,t,s,o,a,r,c,i,u;return $().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",s="in",o="texture",a="outputColor",r="out vec4 outputColor;",c=$().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",i="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",e="attribute",t="varying",s="varying",o="texture2D",a="gl_FragColor",r="",c=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,i=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:e,varyingVs:t,varyingFs:s,texture2D:o,output:a,defineOutput:r,defineSpecialNaN:c,defineSpecialInf:i,defineRound:u}}/**
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
 */function Se(n,e,t="index"){const s=Ae(e);return s.map((o,a)=>{const r=`int ${n[a]} = ${t} / ${o}`,c=a===s.length-1?`int ${n[a+1]} = ${t} - ${n[a]} * ${o}`:`index -= ${n[a]} * ${o}`;return`${r}; ${c};`}).join("")}function Rt(n,e,t="index"){const s=Ae(e);return s.map((o,a)=>{const r=`int ${n[a]} = ${t} / outShapeStrides[${a}]`,c=a===s.length-1?`int ${n[a+1]} = ${t} - ${n[a]} * outShapeStrides[${a}]`:`index -= ${n[a]} * outShapeStrides[${a}]`;return`${r}; ${c};`}).join("")}function Uc(n,e){const t=n.length,s=n.map(a=>`${e}[${a}]`),o=new Array(t-1);o[t-2]=s[t-1];for(let a=t-3;a>=0;--a)o[a]=`(${o[a+1]} * ${s[a+1]})`;return o}function Wc(n,e,t="index"){const s=n.map((a,r)=>r),o=Uc(s,e);return o.map((a,r)=>{const c=`int ${n[r]} = ${t} / ${o[r]}`,i=r===o.length-1?`int ${n[r+1]} = ${t} - ${n[r]} * ${o[r]}`:`index -= ${n[r]} * ${o[r]}`;return`${c}; ${i};`}).join("")}function jt(n){const e=Ae(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function qt(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const hs=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
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
 */const{getBroadcastDims:fs}=mo;function Mc(n,e,t){const s=[];if(n.forEach(h=>{const f=E(h.shapeInfo.logicalShape);if(h.shapeInfo.isUniform?s.push(`uniform float ${h.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${h.name};`),s.push(`uniform int offset${h.name};`)),t.enableShapeUniforms){const{uniformShape:m}=Yt(t.packedInputs,h.shapeInfo.logicalShape,h.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${h.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${h.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${h.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${h.name}Shape;`);break}s.push(`uniform ivec2 ${h.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(h=>{s.push(`uniform ${h.type} ${h.name}${h.arrayIndex?`[${h.arrayIndex}]`:""};`)});const o=s.join(`
`),a=n.map(h=>Gc(h,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),r=e.texShape,c=G(),i=Xc(c);let u,l,d=qc(c);return e.isPacked?(u=zc(e.logicalShape,r,t.enableShapeUniforms),l=jc(c)):(u=Hc(e.logicalShape,r,t.enableShapeUniforms),l=Kc(c)),t.packedInputs&&(d+=Jc),[d,i,l,o,u,a,t.userCode].join(`
`)}function Fe(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return du(n,e);case 1:return hu(n,e);case 2:return xu(n,e);case 3:return gu(n,e);case 4:return $u(n,e);case 5:return vu(n);case 6:return bu(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function xs(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return lu(n);case 1:return pu(n,e);case 2:return fu(n,e);case 3:return mu(n,e);default:return Cu(n,e)}}function Gc(n,e,t=!1,s){let o="";t?o+=xs(n,s):o+=Fe(n,s);const a=n.shapeInfo.logicalShape,r=e.logicalShape;return a.length<=r.length&&(t?o+=Ru(n,e):o+=Su(n,e)),o}function zc(n,e,t){switch(n.length){case 0:return ms();case 1:return eu(n,e,t);case 2:return cu(n,e,t);case 3:return nu(n,e,t);default:return ou(n,e,t)}}function Hc(n,e,t){switch(n.length){case 0:return ms();case 1:return tu(n,e,t);case 2:return uu(n,e,t);case 3:return su(n,e,t);case 4:return au(n,e,t);case 5:return ru(n,e);case 6:return iu(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function Xc(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function Kc(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function jc(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function qc(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${Yc}
    ${Qc}
    ${Zc}
  `}const Yc=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qc=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Zc=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jc=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function ms(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function eu(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function tu(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function nu(n,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[2]/2),a=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function su(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Rt(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Se(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function ou(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[n.length-1]/2),a=o*Math.ceil(n[n.length-2]/2);let r=a,c="",i="b, r, c";for(let u=2;u<n.length-1;u++)r*=n[n.length-u-1],c=`
      int b${u} = index / ${r};
      index -= b${u} * ${r};
    `+c,i=`b${u}, `+i;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${c}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${i});
    }
  `}function au(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Rt(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Se(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function ru(n,e){const t=Se(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function iu(n,e){const t=Se(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function cu(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(z(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function uu(n,e,t){return z(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function ye(n){return`offset${n}`}function lu(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),s=G();return`
    vec4 ${t}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function du(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${t};}`;const[o,a]=n.shapeInfo.texShape;if(o===1&&a===1)return`
      float ${s}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const r=ye(t);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${r});
      return sampleTexture(${t}, uv);
    }
  `;const[c,i]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${c}, ${i}, ${r});
      return sampleTexture(${t}, uv);
    }
  `}function pu(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=n.shapeInfo.texShape,a=G();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${t}, uv);
    }
  `;const r=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${r[0]}, ${r[1]}, index);
      return ${a.texture2D}(${t}, uv);
    }
  `}function hu(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${_e(n)}
      }
    `;const o=n.shapeInfo.texShape,a=o[0],r=o[1];if(r===1&&a===1)return`
      float ${s}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const c=ye(t);return r===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / ${a}.0);
        return sampleTexture(${t}, uv);
      }
    `:a===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / ${r}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${c});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${a}, ${r}, index + ${c});
      return sampleTexture(${t}, uv);
    }
  `}function fu(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),a=n.shapeInfo.texShape,r=a[0],c=a[1],i=G();if(a!=null&&z(t,a))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${i.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${c}.0, ${r}.0);

        return ${i.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${i.texture2D}(${s}, uv);
    }
  `;const u=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],l=Math.ceil(t[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${l}, ${u[0]}, ${u[1]}, row, col);
      return ${i.texture2D}(${s}, uv);
    }
  `}function xu(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),a=n.shapeInfo.texShape;if(a!=null&&z(t,a)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const p=a[0],h=a[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${h}.0, ${p}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:r,keptDims:c}=Re(t),i=r;if(i.length<t.length){const p=Le(n,i),h=["row","col"];return`
      ${Fe(p,e)}
      float ${o}(int row, int col) {
        return ${o}(${Be(h,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${_e(n)}
      }
    `;const u=a[0],l=a[1],d=ye(s);return l===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${s}, uv);
    }
  `:u===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${l}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${d};
    vec2 uv = uvFromFlat(${u}, ${l}, index);
    return sampleTexture(${s}, uv);
  }
`}function mu(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),a=n.shapeInfo.texShape,r=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(t[0]===1){const p=t.slice(1),h=[1,2],f=Le(n,p),m=["b","row","col"];return`
        ${xs(f,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${Be(m,h)});
        }
      `}const c=G();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const i=r[0],u=r[1],l=Math.ceil(t[2]/2),d=l*Math.ceil(t[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${i}, ${u}, ${d}, ${l}, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function gu(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),a=t[1]*t[2],r=t[2],{newShape:c,keptDims:i}=Re(t),u=c;if(u.length<t.length){const m=Le(n,u),g=["row","col","depth"];return`
        ${Fe(m,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${Be(g,i)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${r}, 1)));
        ${_e(n)}
      }
    `;const l=n.shapeInfo.texShape,d=l[0],p=l[1],h=n.shapeInfo.flatOffset;if(p===a&&h==null)return e?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${r}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${p}.0, ${d}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(p===r&&h==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=ye(s);return e?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${r} + depth + ${f};
        vec2 uv = uvFromFlat(${d}, ${p}, index);
        return sampleTexture(${s}, uv);
      }
  `}function Cu(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=G();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${t}, uv);
    }
  `;const a=n.shapeInfo.logicalShape,r=a.length,c=n.shapeInfo.texShape,i=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],u=i[0],l=i[1],d=Math.ceil(a[r-1]/2);let p=d*Math.ceil(a[r-2]/2),h="int b, int row, int col",f=`b * ${p} + (row / 2) * ${d} + (col / 2)`;for(let m=2;m<r-1;m++)h=`int b${m}, `+h,p*=a[r-m-1],f=`b${m} * ${p} + `+f;return`
    vec4 ${s}(${h}) {
      int index = ${f};
      int texR = index / ${l};
      int texC = index - texR * ${l};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${l}, ${u});
      return ${o.texture2D}(${t}, uv);
    }
  `}function $u(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),a=t[3],r=t[2]*a,c=t[1]*r,{newShape:i,keptDims:u}=Re(t);if(i.length<t.length){const C=Le(n,i),b=["row","col","depth","depth2"];return`
      ${Fe(C,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${Be(b,u)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${c}, ${r}, ${a}, 1)));
        ${_e(n)}
      }
    `;const l=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],h=d[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(h===c&&l==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${f}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${r}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${p}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(h===a&&l==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${p}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=ye(s);return e?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${f}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${r} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${p}, ${h}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function vu(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=e[4],a=e[3]*o,r=e[2]*a,c=e[1]*r,{newShape:i,keptDims:u}=Re(e);if(i.length<e.length){const m=Le(n,i),g=["row","col","depth","depth2","depth3"];return`
      ${Fe(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Be(g,u)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${r}, ${a}, ${o})) +
          depth3;
        ${_e(n)}
      }
    `;const l=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],h=d[1];if(h===c&&l==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${r}, ${a}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${p}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(h===o&&l==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${p}.0);
        return sampleTexture(${t}, uv);
      }
    `;const f=ye(t);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${r} + depth * ${a} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${p}, ${h}, index);
      return sampleTexture(${t}, uv);
    }
  `}function bu(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:o,keptDims:a}=Re(e);if(o.length<e.length){const g=Le(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Fe(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Be(x,a)});
      }
    `}const r=e[5],c=e[4]*r,i=e[3]*c,u=e[2]*i,l=e[1]*u;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${l}, ${u}, ${i}, ${c})) +
          dot(
            vec2(depth3, depth4),
            vec2(${r}, 1)));
        ${_e(n)}
      }
    `;const d=n.shapeInfo.flatOffset,p=n.shapeInfo.texShape,h=p[0],f=p[1];if(f===l&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${i}, ${c}, ${r})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===r&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;const m=ye(t);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${u} + depth * ${i} +
          depth2 * ${c} + depth3 * ${r} + depth4 + ${m};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function _e(n){const e=n.name,t=E(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function Ru(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",a=n.shapeInfo.logicalShape.length,r=e.logicalShape.length,c=fs(n.shapeInfo.logicalShape,e.logicalShape),i=D(r),u=r-a;let l;const d=["x","y","z","w","u","v"];a===0?l="":r<2&&c.length>=1?l="coords = 0;":l=c.map(C=>`coords.${d[C+u]} = 0;`).join(`
`);let p="";r<2&&a>0?p="coords":p=n.shapeInfo.logicalShape.map((C,b)=>`coords.${d[b+u]}`).join(", ");let h="return outputValue;";const m=E(n.shapeInfo.logicalShape)===1,x=E(e.logicalShape)===1;if(a===1&&!m&&!x)h=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)r===1?h=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:h=`
        return vec4(outputValue.x);
      `;else if(c.length){const C=a-2,b=a-1;c.indexOf(C)>-1&&c.indexOf(b)>-1?h="return vec4(outputValue.x);":c.indexOf(C)>-1?h="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":c.indexOf(b)>-1&&(h="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${i} coords = getOutputCoords();
      ${l}
      vec4 outputValue = get${s}(${p});
      ${h}
    }
  `}function Su(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",a=e.texShape,r=n.shapeInfo.texShape,c=n.shapeInfo.logicalShape.length,i=e.logicalShape.length;if(!n.shapeInfo.isUniform&&c===i&&n.shapeInfo.flatOffset==null&&z(r,a))return`
      float ${o}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const u=D(i),l=fs(n.shapeInfo.logicalShape,e.logicalShape),d=i-c;let p;const h=["x","y","z","w","u","v"];c===0?p="":i<2&&l.length>=1?p="coords = 0;":p=l.map(m=>`coords.${h[m+d]} = 0;`).join(`
`);let f="";return i<2&&c>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${h[g+d]}`).join(", "),`
    float ${o}() {
      ${u} coords = getOutputCoords();
      ${p}
      return get${s}(${f});
    }
  `}function D(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function Yt(n,e,t){const{newShape:s,keptDims:o}=Re(e),a=e.length,r=n&&a===3&&e[0]===1,c=r?e.slice(1):s,i=!n&&a>1&&!z(e,t)&&s.length<a||r;return{useSqueezeShape:i,uniformShape:i?c:e,keptDims:o}}function Le(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function Be(n,e){return e.map(t=>n[t]).join(", ")}/**
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
 */function yu(n,e,t,s){const o=t.map((l,d)=>{const p={logicalShape:l.shape,texShape:l.isUniform?null:l.texData.texShape,isUniform:l.isUniform,isPacked:l.isUniform?!1:l.texData.isPacked,flatOffset:null};return l.texData!=null&&l.texData.slice!=null&&l.texData.slice.flatOffset>0&&(p.flatOffset=l.texData.slice.flatOffset),{name:e.variableNames[d],shapeInfo:p}}),a=o.map(l=>l.shapeInfo),r={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},c=Mc(o,r,e),i=Xn(n.gl,c),u=n.createProgram(i);return $().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:i,source:c,webGLProgram:u,inShapeInfos:a,outShapeInfo:r,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(u),Object.assign({program:e,fragmentShader:i,source:c,webGLProgram:u,inShapeInfos:a,outShapeInfo:r},gs(n,e,u)))}function gs(n,e,t){const s=[],o=[];let a,r,c,i=null,u=null;u=n.getUniformLocation(t,"NAN",!1),$().getNumber("WEBGL_VERSION")===1&&(i=n.getUniformLocation(t,"INFINITY",!1));const l=!1;for(const d of e.variableNames){const p={name:d,uniform:n.getUniformLocation(t,d,l),offset:n.getUniformLocation(t,`offset${d}`,l)};e.enableShapeUniforms&&(p.shape=n.getUniformLocation(t,`${d}Shape`,l),p.texShape=n.getUniformLocation(t,`${d}TexShape`,l)),s.push(p)}if(e.enableShapeUniforms&&(a=n.getUniformLocation(t,"outShape",l),c=n.getUniformLocation(t,"outShapeStrides",l),r=n.getUniformLocation(t,"outTexShape",l)),e.customUniforms)for(const d of e.customUniforms)o.push(n.getUniformLocation(t,d.name,l));return{variablesLocations:s,customUniformLocations:o,infLoc:i,nanLoc:u,outShapeLocation:a,outShapeStridesLocation:c,outTexShapeLocation:r}}function hn(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,s)=>{const o=t.logicalShape,a=e[s],r=a.shape;if(!z(o,r))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${r} must match`);if(t.isUniform&&a.isUniform)return;const c=t.texShape,i=a.isUniform?null:a.texData.texShape;if(!z(c,i))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${c} and ${i} must match`)})}function wu(n,e,t,s,o){e.program.enableShapeUniforms||(hn(e.inShapeInfos,t),hn([e.outShapeInfo],[s]));const a=s.texData.texture,r=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(a.texture,r[0],r[1]):n.setOutputMatrixTexture(a.texture,r[0],r[1]),n.setProgram(e.webGLProgram),n.bindVertexArray(e.webGLProgram.vao),$().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN);for(let i=0;i<t.length;++i){const u=t[i],{uniform:l,offset:d,shape:p,texShape:h}=e.variablesLocations[i];if(p){const{uniformShape:f}=Yt(e.program.packedInputs,u.shape,u.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(p,new Int32Array(f));break;case 2:n.gl.uniform2iv(p,new Int32Array(f));break;case 3:n.gl.uniform3iv(p,new Int32Array(f));break;case 4:n.gl.uniform4iv(p,new Int32Array(f));break}}if(h&&n.gl.uniform2i(h,u.texData.texShape[0],u.texData.texShape[1]),l!=null){if(u.isUniform){if(E(u.shape)<2)n.gl.uniform1f(l,u.uniformValues[0]);else{let f=u.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(l,f)}continue}u.texData.slice!=null&&d!=null&&n.gl.uniform1i(d,u.texData.slice.flatOffset),n.setInputMatrixTexture(u.texData.texture.texture,l,i)}}const c=e.outShapeLocation;if(c)switch(s.shape.length){case 1:n.gl.uniform1iv(c,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(c,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(c,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(c,new Int32Array(s.shape));break}if(e.outShapeStridesLocation){const i=Ae(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(i));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(i));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(i));break}}if(e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&o)for(let i=0;i<e.program.customUniforms.length;++i){const u=e.program.customUniforms[i],l=e.customUniformLocations[i],d=o[i];if(u.type==="float")n.gl.uniform1fv(l,d);else if(u.type==="vec2")n.gl.uniform2fv(l,d);else if(u.type==="vec3")n.gl.uniform3fv(l,d);else if(u.type==="vec4")n.gl.uniform4fv(l,d);else if(u.type==="int")n.gl.uniform1iv(l,d);else if(u.type==="ivec2")n.gl.uniform2iv(l,d);else if(u.type==="ivec3")n.gl.uniform3iv(l,d);else if(u.type==="ivec4")n.gl.uniform4iv(l,d);else throw Error(`uniform type ${u.type} is not supported yet.`)}n.executeProgram()}function Tu(n,e,t){let s="";e.concat(t).forEach(r=>{const c=r.texData!=null&&r.texData.slice!=null&&r.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!r.isUniform){const i=r.texData.texShape,{useSqueezeShape:u,uniformShape:l,keptDims:d}=Yt(n.packedInputs,r.shape,i);let p="",h="",f="";if(l.length===1&&n.packedInputs){const R=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];p=`${R[0]>1}_${R[1]>1}`}else if(l.length===2&&!n.packedInputs)h=`${l[0]>1}_${l[1]>1}`;else if(l.length>2&&!n.packedInputs){const R=Ae(l);f=`${R[0]===i[1]}_${R[R.length-1]===i[1]}`}const m=r.shape.length,g=l.length===2&&z(r.shape,i),x=E(r.shape)===1,C=go(r.shape,t.shape),b=!n.packedInputs&&m===t.shape.length&&z(i,t.texData.texShape),v=n.packedInputs||l.length>2?"":`${i[0]>1}_${i[1]>1}`;s+=`${m}_${b}_${u?d:""}_${l.length}_${x}_${C}_${g}_${p}_${h}_${f}_${v}_${c}`}else{const i=r.isUniform?"uniform":r.texData.texShape;s+=`${r.shape}_${i}_${c}`}});const o=n.userCode;let a=n.constructor.name;return a+="_"+s+"_"+o+`${$().getNumber("WEBGL_VERSION")}`,a}function V(n){return $().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}/**
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
 */class Iu{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Xe.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=G();this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Rt(["r","c","d"],e):Se(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}/**
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
 */class Nu{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Xe.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=G();this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Rt(["r","c","d"],e):Se(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}/**
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
 */class Eu{constructor(e){this.variableNames=["A"],this.outTexUsage=Y.DOWNLOAD;const t=G();this.outputShape=e,this.userCode=`
      ${hs}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}/**
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
 */class ku{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Y.DOWNLOAD;const t=G();this.outputShape=e,this.userCode=`
      ${hs}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}/**
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
 */const Ou={R:0,G:1,B:2,A:3};class fn{constructor(e,t=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=G();this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length);let a="result";t&&(a="floor(result * 255. + 0.5)");let r="";for(let c=0;c<s.length;c++){const i=s[c];r+=`
          if(offset == ${c}) {
            result = values[${Ou[i]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?qt():jt(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${r}
        }
        ${o.output} = vec4(${a}, 0., 0., 0.);
      }
    `}}/**
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
 */class Au{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=G();this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length);let o="",a="result";t&&(a="floor(result * 255. + 0.5)");for(let r=0;r<=1;r++)for(let c=0;c<=1;c++){const i=r*2+c;o+=`
          localCoords = coords;
          if(localCoords[2] + ${c} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${c};
          if (localCoords[1] + ${r} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${r};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${i}] = values[0];
            } else if (offset == 1) {
              result[${i}] = values[1];
            } else if (offset == 2) {
              result[${i}] = values[2];
            } else {
              result[${i}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?qt():jt(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${a};
        }
    `}}/**
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
 */function Cs(n){const e=G(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return Hn(n,t)}function $s(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return qn(n,e)}function vs(n){const e=new Uint16Array([0,1,2,2,1,3]);return Yn(n,e)}function tt(n,e,t,s,o,a){Zn(e,t);const r=Qn(n),c=n.TEXTURE_2D;return y(n,()=>n.bindTexture(c,r)),y(n,()=>n.texParameteri(c,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),y(n,()=>n.texParameteri(c,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),y(n,()=>n.texParameteri(c,n.TEXTURE_MIN_FILTER,n.NEAREST)),y(n,()=>n.texParameteri(c,n.TEXTURE_MAG_FILTER,n.NEAREST)),$().getNumber("WEBGL_VERSION")===1?y(n,()=>n.texImage2D(c,0,s,e,t,0,o,a,null)):y(n,()=>n.texStorage2D(c,1,s,e,t)),y(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:r,texShape:[t,e]}}function Qt(n){return n.internalFormatFloat}function bs(n,e,t,s){const[o,a]=et(e,t);return tt(n,o,a,Qt(s),s.textureFormatFloat,n.FLOAT)}function Zt(n){return n.internalFormatHalfFloat}function Rs(n,e,t,s){const[o,a]=et(e,t);return tt(n,o,a,Zt(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Jt(n){return n.downloadTextureFormat}function Ss(n,e,t,s){const[o,a]=et(e,t);return tt(n,o,a,Jt(s),n.RGBA,n.UNSIGNED_BYTE)}function en(n){return n.internalFormatPackedFloat}function ys(n,e,t,s){const[o,a]=De(e,t);return tt(n,o,a,en(s),n.RGBA,n.FLOAT)}function tn(n){return n.internalFormatPackedHalfFloat}function ws(n,e,t,s){const[o,a]=De(e,t);return tt(n,o,a,tn(s),n.RGBA,s.textureTypeHalfFloat)}function Ts(n,e,t){return y(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),Dt(n,e,"clipSpacePos",t,3,20,0)&&Dt(n,e,"uv",t,2,20,12)}function Is(n,e,t,s,o,a){y(n,()=>n.bindTexture(n.TEXTURE_2D,e));let r,c,i;o instanceof Uint8Array?(r=new Uint8Array(t*s*4),c=n.UNSIGNED_BYTE,i=n.RGBA):(r=new Float32Array(t*s*4),c=n.FLOAT,i=a.internalFormatPackedFloat),r.set(o),$().getNumber("WEBGL_VERSION")===2?y(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,s,n.RGBA,c,r)):y(n,()=>n.texImage2D(n.TEXTURE_2D,0,i,t,s,0,n.RGBA,c,r)),y(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function Ns(n,e,t){y(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?$().getNumber("WEBGL_VERSION")===2?y(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):y(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):$().getNumber("WEBGL_VERSION")===2?y(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):y(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),y(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function Es(n,e,t,s){const o=n.createBuffer();y(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const c=4*4*e*t;return y(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,c,n.STREAM_READ)),y(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),y(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function ks(n,e,t){const s=n,o=new Float32Array(t);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function Os(n,e,t,s){const[o,a]=et(e,t),r=4,c=new Uint8Array(Nc(e*t,r));return y(n,()=>n.readPixels(0,0,o,a,s.downloadTextureFormat,n.UNSIGNED_BYTE,c)),new Float32Array(c.buffer)}function As(n,e,t,s,o,a,r,c){const i=n,u=new Float32Array(Ec(a,r));return i.bindBuffer(i.PIXEL_PACK_BUFFER,e),i.getBufferSubData(i.PIXEL_PACK_BUFFER,0,u),i.bindBuffer(i.PIXEL_PACK_BUFFER,null),u}function Ds(n,e,t){const s=new Float32Array(e*t*4);return y(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,s)),s}const U$=Object.freeze(Object.defineProperty({__proto__:null,bindVertexProgramAttributeStreams:Ts,createBufferFromOutputTexture:Es,createFloat16MatrixTexture:Rs,createFloat16PackedMatrixTexture:ws,createFloat32MatrixTexture:bs,createIndexBuffer:vs,createPackedMatrixTexture:ys,createUnsignedBytesMatrixTexture:Ss,createVertexBuffer:$s,createVertexShader:Cs,downloadByteEncodedFloatMatrixFromOutputTexture:Os,downloadFloat32MatrixFromBuffer:ks,downloadMatrixFromPackedOutputTexture:Ds,downloadPackedMatrixFromBuffer:As,getInternalFormatForFloat16MatrixTexture:Zt,getInternalFormatForFloat16PackedMatrixTexture:tn,getInternalFormatForFloat32MatrixTexture:Qt,getInternalFormatForPackedMatrixTexture:en,getInternalFormatForUnsignedBytesMatrixTexture:Jt,uploadDenseMatrixToTexture:Is,uploadPixelDataToTexture:Ns},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Et{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=$().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,wc(t,e)):this.gl=te(t),e=this.gl,$().getNumber("WEBGL_VERSION")===2){const a=e;this.createVertexArray=()=>y(a,()=>a.createVertexArray()),this.bindVertexArray=r=>y(a,()=>a.bindVertexArray(r)),this.deleteVertexArray=r=>y(a,()=>a.deleteVertexArray(r)),this.getVertexArray=()=>y(a,()=>a.getParameter(a.VERTEX_ARRAY_BINDING))}else if(e!=null){const a=e.getExtension("OES_vertex_array_object");if(a==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>y(e,()=>a.createVertexArrayOES()),this.bindVertexArray=r=>y(e,()=>a.bindVertexArrayOES(r)),this.deleteVertexArray=r=>y(e,()=>a.deleteVertexArrayOES(r)),this.getVertexArray=()=>y(e,()=>e.getParameter(a.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),$().getNumber("WEBGL_VERSION")===1){const a="OES_texture_float",r="OES_texture_half_float";if(this.textureFloatExtension=Me(this.gl,a),Q(this.gl,r))this.textureHalfFloatExtension=Me(this.gl,r);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),Q(this.gl,o))this.colorBufferHalfFloatExtension=Me(this.gl,o);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",Q(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(Q(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=$s(this.gl),this.indexBuffer=vs(this.gl),this.framebuffer=Jn(this.gl),this.textureConfig=Xt(this.gl,this.textureHalfFloatExtension)}get debug(){return $().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;y(e,()=>e.finish()),y(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),y(e,()=>e.deleteFramebuffer(this.framebuffer)),y(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),y(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),y(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),bs(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Rs(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Ss(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),Ns(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,s,o){this.throwIfDisposed(),Is(this.gl,e,t,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),ws(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),ys(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Pt(this.gl,this.framebuffer),this.outputTexture=null),y(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,s){return this.downloadMatrixDriver(e,()=>Os(this.gl,t,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,s,o,a,r){return As(this.gl,e,t,s,o,a,r,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return ks(this.gl,e,t)}createBufferFromTexture(e,t,s){this.bindTextureToFrameBuffer(e);const o=Es(this.gl,t,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,s;if($().getBool("WEBGL_FENCE_API_ENABLED")){const o=e,a=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const r=o.clientWaitSync(a,0,0);return r===o.ALREADY_SIGNALED||r===o.CONDITION_SATISFIED},t=a}else $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(t,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:t,isFencePassed:s}}downloadMatrixFromPackedTexture(e,t,s){return this.downloadMatrixDriver(e,()=>Ds(this.gl,t,s))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=Cs(t));const s=Kn(t);y(t,()=>t.attachShader(s,this.vertexShader)),y(t,()=>t.attachShader(s,e)),jn(t,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&lt(t,o),o}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);const t=this.gl;y(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),Ts(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(y(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&lt(this.gl,this.program),y(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,s=!0){return this.throwIfDisposed(),s?ts(this.gl,e,t):ns(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),y(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,s){this.throwIfDisposed(),this.throwIfNoProgram(),ss(this.gl,e,t,s)}setOutputMatrixTexture(e,t,s){this.setOutputMatrixTextureDriver(e,s,t)}setOutputPackedMatrixTexture(e,t,s){this.throwIfDisposed();const[o,a]=De(t,s);this.setOutputMatrixTextureDriver(e,o,a)}setOutputMatrixWriteRegion(e,t,s,o){this.setOutputMatrixWriteRegionDriver(s,e,o,t)}setOutputPackedMatrixWriteRegion(e,t,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&lt(this.gl,this.program),Ge(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}y(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),y(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Me(this.gl,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,a),a}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,s=this.getQueryTimerExtensionWebGL2();t.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await ln(()=>this.disposed||this.isQueryAvailable(e,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=Du(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:s}=this.itemsToPoll[t];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in $().platform&&(s=$().platform.setTimeoutCustom.bind($().platform)),ln(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),dt(this.gl,e,this.framebuffer),this.debug&&Ge(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(dt(this.gl,this.outputTexture,this.framebuffer),this.debug&&Ge(this.gl)):Pt(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const s=t();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,t,s){this.throwIfDisposed();const o=this.gl;dt(o,e,this.framebuffer),this.debug&&Ge(o),this.outputTexture=e,y(o,()=>o.viewport(0,0,t,s)),y(o,()=>o.scissor(0,0,t,s))}setOutputMatrixWriteRegionDriver(e,t,s,o){this.throwIfDisposed(),y(this.gl,()=>this.gl.scissor(e,t,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function Du(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:Pu,bincountImpl:Ps,bincountReduceImpl:Fu,bitwiseAndImpl:_u,castImpl:Lu,ceilImpl:Bu,concatImpl:Vu,equalImpl:Uu,expImpl:Wu,expm1Impl:Mu,floorImpl:Gu,gatherNdImpl:zu,gatherV2Impl:Hu,greaterImpl:Xu,greaterEqualImpl:Ku,lessImpl:ju,lessEqualImpl:qu,linSpaceImpl:Yu,logImpl:Qu,maxImpl:Zu,maximumImpl:Ju,minimumImpl:el,multiplyImpl:tl,negImpl:nl,notEqualImpl:sl,prodImpl:ol,raggedGatherImpl:al,raggedRangeImpl:rl,raggedTensorToTensorImpl:il,rangeImpl:cl,rsqrtImpl:ul,scatterImpl:ll,sigmoidImpl:dl,simpleAbsImpl:Fs,sliceImpl:pl,sparseFillEmptyRowsImpl:hl,sparseReshapeImpl:fl,sparseSegmentReductionImpl:_s,sqrtImpl:xl,staticRegexReplaceImpl:ml,stridedSliceImpl:gl,stringNGramsImpl:Cl,stringSplitImpl:$l,stringToHashBucketFastImpl:vl,subImpl:bl,tileImpl:Rl,topKImpl:Sl,transposeImpl:nn,uniqueImpl:yl}=yc;/**
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
 */function Ls(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function W(n,e){return e===1?[n]:Ls(n,e)}function wl(n,e){if(n===1)return"rc";let t="";for(let s=0;s<n;s++)t+=e[s],s<n-1&&(t+=",");return t}/**
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
 */class Tl{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=V(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=W("rc",this.rank),s=D(this.rank),o=this.getOutOfBoundsCondition(t),a=this.getSetup(t),r=this.getOutput(t);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${a}

            setOutput(vec4(${r}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let a=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let r=2;r<this.rank;r++)a=`${e[e.length-1-r]},`+a;t.push(a)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let s=this.rank-2;s<this.rank;s++)t+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}/**
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
 */class Bs{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length);let s="";for(let o=0;o<4;o++){let a="thisRC = rc;";o%2===1&&(a+="thisRC.z += 1;"),o>1&&(a+="thisRC.y += 1;"),s+=`
        ${a}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${Il(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?qt():jt(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Il(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?Wc(["r","c","d"],"inputShape"):Se(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}/**
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
 */class Nl{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,s){const o=mn(t,s),a=gn(e,o,s);a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]);const r=xn(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=r,this.log();const i=this.freeTextures[a].pop();return this.usedTextures[a].push(i),i}let c;return o===L.PACKED_2X2_FLOAT32?c=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===L.PACKED_2X2_FLOAT16?c=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===L.UNPACKED_FLOAT32?c=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===L.UNPACKED_FLOAT16?c=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===L.PACKED_4X1_UNSIGNED_BYTE&&(c=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(c),this.numUsedTextures++,this._numBytesAllocated+=r,this.log(),c}releaseTexture(e,t,s,o){if(this.freeTextures==null)return;const a=mn(s,o),r=gn(t,a,o);r in this.freeTextures||(this.freeTextures[r]=[]);const c=xn(t,a,this.gpgpu.gl,this.gpgpu.textureConfig,o),i=$().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");i!==-1&&this._numBytesAllocated>i?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=c):(this.freeTextures[r].push(e),this.numFreeTextures++,this._numBytesFree+=c),this.numUsedTextures--;const u=this.usedTextures[r],l=u&&u.indexOf(e);if(l==null||l<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u[l]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function El(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function xn(n,e,t,s,o){const a=kl(e,s);let r;if(o){const[i,u]=De(n[0],n[1]);r=i*u}else{const[i,u]=et(n[0],n[1]);r=i*u}const c=El(t,a);return r*c}function kl(n,e){switch(n){case L.PACKED_2X2_FLOAT32:return en(e);case L.PACKED_2X2_FLOAT16:return tn(e);case L.UNPACKED_FLOAT32:return Qt(e);case L.UNPACKED_FLOAT16:return Zt(e);case L.PACKED_4X1_UNSIGNED_BYTE:return Jt(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function Ol(n){return $().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?L.PACKED_2X2_FLOAT32:L.UNPACKED_FLOAT32:n?L.PACKED_2X2_FLOAT16:L.UNPACKED_FLOAT16}function mn(n,e){if(n===Y.UPLOAD)return L.PACKED_2X2_FLOAT32;if(n===Y.RENDER||n==null)return Ol(e);if(n===Y.DOWNLOAD||n===Y.PIXELS)return L.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function gn(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}/**
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
 */class ae{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const J="if (isnan(x)) return x;",Al="return x;",Cn="return abs(x);",Dl="return (x >= 0.0) ? x : (exp(x) - 1.0);",Pl=J+`
  return (x < 0.0) ? 0.0 : x;
`,Fl=J+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,le="return x;",_l="return 1.0 / (1.0 + exp(-1.0 * x));";/**
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
 */const Ll="return x;",Bl=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Vl=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ul=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Wl="return 1.0 / (1.0 + exp(-1.0 * x));";class de{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
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
 */class Ml{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length);const t=e.length,s=W("rc",t),o=D(t),a=wl(t,s),r=s.slice(-2),c=t<=1?"rc":`vec2(${r.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${a});

        setOutput(getChannel(packedInput, ${c}));
      }
    `}}/**
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
 */const Gl=Io,zl=1e-7,Hl=1e-4,ct={};function Xl(n){return n in ct||(ct[n]={}),ct[n]}const Kl=$().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),jl=600;function ql(){return $().global.screen==null?1024:$().global.screen.height*$().global.screen.width*window.devicePixelRatio*jl/1024/1024}class St extends Co{nextDataId(){return St.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!$().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof Et)t=e;else{const s=te($().getNumber("WEBGL_VERSION"),e);t=new Et(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=te($().getNumber("WEBGL_VERSION"));t=new Et(s),this.binaryCache=Xl($().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Nl(this.gpgpu),this.numMBBeforeWarning=ql(),this.texData=new $o(this,ue())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,s,o,a,r){const c=this.makeTensorInfo(t,s),i=this.texData.get(c.dataId);i.isPacked=!1,i.texture={texture:e,texShape:[o,a]},i.texShape=[o,a];const u=ze(t),l=new fn(u,!1,r),d=this.runWebGLProgram(l,[c],s,[[o,a]]);return d.shape=t,i.texture=null,this.disposeIntermediateTensorInfo(c),d.dataId}write(e,t,s){if(($().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||$().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:t,dtype:s,values:e,usage:Y.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,s,o,a){if($().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:o,values:t,usage:Y.UPLOAD,refCount:a})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:s,dtype:o,complexTensorInfos:a,slice:r,shape:c,isPacked:i}=t;if(r!=null){let p;i?p=new de(c,le):p=new ae(c,le);const h=this.runWebGLProgram(p,[{dataId:e,shape:c,dtype:o}],o),f=this.readSync(h.dataId);return this.disposeIntermediateTensorInfo(h),f}if(s!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return s;const u=this.activeTimers!=null;let l;u&&(l=me());let d;if(o==="complex64"){const p=this.readSync(a.real.dataId),h=this.readSync(a.imag.dataId);d=dn(p,h)}else d=this.getValuesFromTexture(e);return u&&(this.downloadWaitMs+=me()-l),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const f=this.pendingRead.get(e);return new Promise(m=>f.push(m))}const t=this.texData.get(e),{values:s,shape:o,slice:a,dtype:r,complexTensorInfos:c,isPacked:i}=t;if(a!=null){let f;i?f=new de(o,le):f=new ae(o,le);const m=this.runWebGLProgram(f,[{dataId:e,shape:o,dtype:r}],r),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(e);if($().getBool("DEBUG")&&!$().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&$().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null,l;if(r!=="complex64"&&$().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(e);const f=this.texData.get(l.dataId);u=this.gpgpu.createBufferFromTexture(f.texture.texture,...rt(o))}this.pendingRead.set(e,[]),r!=="complex64"&&await this.gpgpu.createAndWaitForFence();let d;if(r==="complex64"){const f=await Promise.all([this.read(c.real.dataId),this.read(c.imag.dataId)]),m=f[0],g=f[1];d=dn(m,g)}else if(u==null)d=this.getValuesFromTexture(e);else{const f=E(o);d=this.gpgpu.downloadFloat32MatrixFromBuffer(u,f)}if(l!=null&&this.disposeIntermediateTensorInfo(l),u!=null){const f=this.gpgpu.gl;y(f,()=>f.deleteBuffer(u))}const p=this.convertAndCacheOnCPU(e,d),h=this.pendingRead.get(e);return this.pendingRead.delete(e),h.forEach(f=>f(p)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&ue().removeDataId(e,this),this.pendingDeletes--),p}readToGPU(e,t={}){const s=this.texData.get(e),{values:o,shape:a,slice:r,dtype:c,isPacked:i,texture:u}=s;if(c==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(r!=null){let h;i?h=new de(a,le):h=new ae(a,le);const f=this.runWebGLProgram(h,[{dataId:e,shape:a,dtype:c}],c),m=this.readToGPU(f,t);return this.disposeIntermediateTensorInfo(f),m}if(u==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const l=this.decode(e,t.customTexShape),d=ue().makeTensorFromTensorInfo(l),p=this.texData.get(l.dataId);return Object.assign({tensorRef:d},p.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(o=>Wt(o));return xt(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return xt(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const s=e[t];if(!Gn(s))throw $().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:s,isPacked:o}=this.texData.get(e),a=E(t);if($().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const p=this.decode(e),h=this.texData.get(p.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(h.texture.texture,...rt(t)).subarray(0,a);return this.disposeIntermediateTensorInfo(p),f}const r=$().getBool("WEBGL_PACK")&&o===!0,c=r?ze(t):t,i=r?new ku(c):new Eu(c),u=this.runWebGLProgram(i,[{shape:c,dtype:s,dataId:e}],"float32"),l=this.texData.get(u.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,a);return this.disposeIntermediateTensorInfo(u),d}timerAvailable(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,e();const a=pn(this.activeTimers.map(i=>i.query)).filter(i=>i!=null),r=pn(this.activeTimers.map(i=>i.name)).filter(i=>i!=null);this.activeTimers=t,o&&(this.programTimersStack=null);const c={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const i=await Promise.all(a);c.kernelMs=vo(i),c.getExtraProfileInfo=()=>i.map((u,l)=>({name:r[l],ms:u})).map(u=>`${u.name}: ${u.ms}`).join(", ")}else c.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,c})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:me(),endMs:null}}endTimer(e){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=me(),e)}async getQueryTime(e){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,t),this.disposeData(s.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:s,texShape:o,usage:a,isPacked:r,slice:c}=this.texData.get(e),i=c&&c.origDataId||e,u=this.dataRefCount.get(i);u>1?this.dataRefCount.set(i,u-1):(this.dataRefCount.delete(i),t!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(t,o,a,r)));const l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=Kl){return $().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&E(s.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){$t("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return Gl(e.shape,t)}packedUnaryOp(e,t,s){const o=new de(e.shape,t),a=this.compileAndRun(o,[e],s);return ue().makeTensorFromTensorInfo(a)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const o=Fs(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if($().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Cn,e.dtype);const t=new ae(e.shape,Cn),s=this.compileAndRun(t,[e]);return ue().makeTensorFromTensorInfo(s)}makeTensorInfo(e,t,s){let o;if(t==="string"&&s!=null&&s.length>0&&bo(s[0])){const a=s.map(r=>Ro(r));o=this.write(a,e,t)}else o=this.write(s,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}}makeOutput(e,t,s){return ue().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,s),this)}unpackTensor(e){const t=new Ml(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new Tl(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const s=[$e(e.shape),...ve(e.shape)],o={dtype:e.dtype,shape:s,dataId:e.dataId},a=[$e(t),...ve(t)],r=new Bs(a,s),c=!0,i=[s],u=this.runWebGLProgram(r,[o],e.dtype,i,c);return{dataId:u.dataId,shape:t,dtype:u.dtype}}decode(e,t){const s=this.texData.get(e),{isPacked:o,shape:a,dtype:r}=s;if(t!=null){const p=E(a),h=t[0]*t[1]*4;_(p<=h,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const c=ze(a);let i;o?i=new Nu(c):i=new Iu(c);const u=!0,l=[t??rt(c)],d=this.runWebGLProgram(i,[{shape:c,dtype:r,dataId:e}],r,l,u,t);return{dtype:r,shape:a,dataId:d.dataId}}runWebGLProgram(e,t,s,o,a=!1,r){const c=this.makeTensorInfo(e.outputShape,s),i=this.texData.get(c.dataId);if(e.packedOutput&&(i.isPacked=!0),e.outPackingScheme===Xe.DENSE){const x=r??rt(e.outputShape);i.texShape=x.map(C=>C*2)}if(e.outTexUsage!=null&&(i.usage=e.outTexUsage),E(c.shape)===0)return i.values=Bn(c.dtype,0),c;const u=[],l=t.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let C=this.texData.get(x.dataId);if(C.texture==null){if(!e.packedInputs&&E(x.shape)<=$().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:C.values};e.packedInputs&&(C.isPacked=!0,C.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!C.isPacked!=!!e.packedInputs)x=C.isPacked?this.unpackTensor(x):this.packTensor(x),u.push(x),C=this.texData.get(x.dataId);else if(C.isPacked&&!Ke(C.shape,x.shape)){const b=x,v=x.shape;x.shape=C.shape,x=this.packedReshape(x,v),u.push(x),C=this.texData.get(x.dataId),b.shape=v}return{shape:x.shape,texData:C,isUniform:!1}});this.uploadToGPU(c.dataId);const d={shape:c.shape,texData:i,isUniform:!1},p=Tu(e,l,d),h=this.getAndSaveBinary(p,()=>yu(this.gpgpu,e,l,d)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),$().get("ENGINE_COMPILE_ONLY")||wu(this.gpgpu,h,l,d,o),u.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));const g=$().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=me();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!$().getBool("WEBGL_LAZILY_UNPACK")&&i.isPacked&&a===!1){const x=this.unpackTensor(c);return this.disposeIntermediateTensorInfo(c),x}return c}compileAndRun(e,t,s,o,a=!1){return s=s||t[0].dtype,this.runWebGLProgram(e,t,s,o,a)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||($().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=So(()=>{if(!$().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=$().getBool("DEBUG");$().set("DEBUG",!1);const t=this.abs(yo(1e-8)).dataSync()[0];if($().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?zl:Hl}uploadToGPU(e){const t=this.texData.get(e),{shape:s,dtype:o,values:a,texture:r,usage:c,isPacked:i}=t;if(r!=null)return;const u=this.activeTimers!=null;let l;u&&(l=me());let d=t.texShape;if(d==null&&(d=rs(s,i),t.texShape=d),a!=null){const p=ze(s);let h,f=d[1],m=d[0];const g=a instanceof Uint8Array||a instanceof Uint8ClampedArray;(i||!g)&&([f,m]=De(d[0],d[1])),i?h=new Au(p,g):h=new fn(p,g);const x=g?[m,f]:d,C=this.makeTensorInfo(x,o),b=this.texData.get(C.dataId);g?b.usage=Y.PIXELS:b.usage=Y.UPLOAD,b.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(C.dataId),f,m,a);const v=[[m,f]],N=this.runWebGLProgram(h,[C],o,v,!0),I=this.texData.get(N.dataId);t.texShape=I.texShape,t.isPacked=I.isPacked,t.usage=I.usage,$().get("ENGINE_COMPILE_ONLY")?this.disposeData(N.dataId):(t.texture=I.texture,t.values=null,this.texData.delete(N.dataId)),this.disposeIntermediateTensorInfo(C),u&&(this.uploadWaitMs+=me()-l)}else{const p=this.acquireTexture(d,c,o,i);t.texture=p}}convertAndCacheOnCPU(e,t){const s=this.texData.get(e),{dtype:o}=s;return t!=null&&(s.values=Yl(t,o)),s.values}acquireTexture(e,t,s,o){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${a} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,o)}computeBytes(e,t){return e[0]*e[1]*wo(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(t),o(!0)}catch(a){throw a}});e.push(s)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await To(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Kt(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);const{variablesLocations:t,customUniformLocations:s,infLoc:o,nanLoc:a,outShapeLocation:r,outShapeStridesLocation:c,outTexShapeLocation:i}=gs(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=s,e.infLoc=o,e.nanLoc=a,e.outShapeLocation=r,e.outShapeStridesLocation=c,e.outTexShapeLocation=i}}createTensorFromGPUData(e,t,s){e.channels=e.channels||"RGBA";const{texture:o,height:a,width:r,channels:c}=e,i=ue().backend;if(!i.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const u=i.writeTexture(o,t,s,a,r,c);return ue().makeTensorFromDataId(u,t,s,i)}}St.nextDataId=0;function Yl(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<t.length;++s)t[s]=Math.round(n[s]);return t}else throw new Error(`Unknown dtype ${e}`)}/** @license See the LICENSE file. */const W$="4.21.0";/**
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
 */function Ql(){$().set("WEBGL_FORCE_F16_TEXTURES",!0)}/**
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
 */No()&&Eo("webgl",()=>new St,2);const M$={forceHalfFloat:Ql};/**
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
 */const sn=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class be{constructor(e,t,s){this.variableNames=["A","B"],this.outputShape=q(t,s),this.enableShapeUniforms=V(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
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
 */const we=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Ve{constructor(e,t,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=q(t,s);const a=this.outputShape.length;this.enableShapeUniforms=V(a);let r="";if(o)if(a===0||E(this.outputShape)===1)r=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(r=`
          ${D(a)} coords = getOutputCoords();
        `,a===1)this.enableShapeUniforms?r+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:r+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const i=W("coords",a);this.enableShapeUniforms?r+=`
            bool nextRowOutOfBounds =
              (${i[a-2]} + 1) >= outShape[${a} - 2];
            bool nextColOutOfBounds =
              (${i[a-1]} + 1) >= outShape[${a} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:r+=`
            bool nextRowOutOfBounds =
              (${i[a-2]} + 1) >= ${this.outputShape[a-2]};
            bool nextColOutOfBounds =
              (${i[a-1]} + 1) >= ${this.outputShape[a-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${r}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const Zl={kernelName:ko,backendName:"webgl",kernelFunc:X};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xe(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,a=t.makeTensorInfo(s.shape,"complex64"),r=t.texData.get(a.dataId),c=X({inputs:{x:s},backend:t}),i=X({inputs:{x:o},backend:t});return r.complexTensorInfos={real:c,imag:i},a}const Jl={kernelName:Oo,backendName:"webgl",kernelFunc:xe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vs="return (a < 0.) ? b * a : a;",Us=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function ed(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{alpha:a}=s,r=t.makeTensorInfo([],"float32",Qe(a,"float32")),c=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ve(Us,o.shape,r.shape):new be(Vs,o.shape,r.shape),i=t.runWebGLProgram(c,[o,r],"float32");return t.disposeIntermediateTensorInfo(r),i}const td={kernelName:Ao,backendName:"webgl",kernelFunc:ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ws="return (a < 0.) ? b * a : a;",Ms=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function nd(n){const{inputs:e,backend:t}=n,{x:s,alpha:o}=e,a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ve(Ms,s.shape,o.shape):new be(Ws,s.shape,o.shape);return t.runWebGLProgram(a,[s,o],"float32")}const sd={kernelName:Do,backendName:"webgl",kernelFunc:nd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ue="if (isnan(x)) return x;";function A({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:s}){return({inputs:o,backend:a})=>{const{x:r}=o,c=a,i=s||r.dtype;if(c.shouldExecuteOnCPU([r])&&t!=null){const d=c.texData.get(r.dataId),p=t(d.values,i);return c.makeTensorInfo(r.shape,i,p)}const u=$().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let l;return u?l=new de(r.shape,e):l=new ae(r.shape,n),c.runWebGLProgram(l,[r],i)}}function B({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:a}){return({inputs:r,backend:c})=>{const{a:i,b:u}=r,l=c;if(s&&i.dtype==="complex64"){const f=l.texData.get(i.dataId),m=l.texData.get(u.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(b=>{const[v,R]=b,N={dataId:v.dataId,dtype:v.dtype,shape:i.shape},I={dataId:R.dataId,dtype:R.dtype,shape:u.shape},w=new be(n,i.shape,u.shape);return l.runWebGLProgram(w,[N,I],ke(v.dtype,R.dtype))}),C=xe({inputs:{real:g,imag:x},backend:l});return l.disposeIntermediateTensorInfo(g),l.disposeIntermediateTensorInfo(x),C}const d=a||ke(i.dtype,u.dtype);if((i.dtype==="string"||u.dtype==="string"||l.shouldExecuteOnCPU([i,u]))&&o!=null){const f=l.texData.get(i.dataId).values,m=l.texData.get(u.dataId).values,g=i.dtype==="string"?At(f):f,x=i.dtype==="string"?At(m):m,[C,b]=o(i.shape,u.shape,g,x,d),v=l.makeTensorInfo(b,d),R=l.texData.get(v.dataId);return R.values=C,v}const p=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let h;return p?h=new Ve(e,i.shape,u.shape,t):h=new be(n,i.shape,u.shape),l.runWebGLProgram(h,[i,u],d)}}function je(n,e=!1){if(n==="linear")return e?Ll:Al;if(n==="relu")return e?Vl:Pl;if(n==="elu")return e?Bl:Dl;if(n==="relu6")return e?Ul:Fl;if(n==="prelu")return e?Ms:Ws;if(n==="leakyrelu")return e?Us:Vs;if(n==="sigmoid")return e?Wl:_l;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}/**
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
 */class Gs{constructor(e,t,s,o=!1,a=!1,r=!1,c=null,i=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=V(this.outputShape.length);const l=o?e[1]:e[2],d=Math.ceil(l/2),p=o?"i * 2, rc.y":"rc.y, i * 2",h=a?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=a?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";c&&(i?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${c}
        }`:u?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${c}
        }`:g=`vec4 activation(vec4 x) {
          ${c}
        }`,x="result = activation(result);");const C=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let b="rc.x",v="rc.x";e[0]<t[0]?b=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(v=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${b};
        int batchB = ${v};
        for (int i = 0; i < ${d}; i++) {
          vec4 a = getMatrixA(batchA, ${p});
          vec4 b = getMatrixB(batchB, ${h});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${f[0]} * ${m[0]});
          result += (${f[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${C}

        ${x}

        setOutput(result);
      }
    `}}/**
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
 */const $n={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class vn{constructor(e,t,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=q(t,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bn="return a * b;";function on(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,a=ke(s.dtype,o.dtype);if(s.dtype==="complex64"){const c=t.texData.get(s.dataId),i=t.texData.get(o.dataId),u=new vn($n.REAL,s.shape,o.shape),l=new vn($n.IMAG,s.shape,o.shape),d=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:s.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:o.shape},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:o.shape}],p=t.runWebGLProgram(u,d,"float32"),h=t.runWebGLProgram(l,d,"float32"),f=xe({inputs:{real:p,imag:h},backend:t});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),f}if(t.shouldExecuteOnCPU([s,o])){const c=t.texData.get(s.dataId),i=t.texData.get(o.dataId),[u,l]=tl(s.shape,o.shape,c.values,i.values,a),d=t.makeTensorInfo(l,a),p=t.texData.get(d.dataId);return p.values=u,d}let r;return $().getBool("WEBGL_PACK_BINARY_OPERATIONS")?r=new Ve(bn,s.shape,o.shape):r=new be(bn,s.shape,o.shape),t.runWebGLProgram(r,[s,o],a)}const od={kernelName:Po,backendName:"webgl",kernelFunc:on};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(n,e,t){const s=[$e(n.shape),...ve(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},a=[$e(e),...ve(e)],r=new Bs(a,s),c=!0,i=[s],u=t.runWebGLProgram(r,[o],n.dtype,i,c);return{dataId:u.dataId,shape:e,dtype:u.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{shape:a}=s,r=t,c=E(o.shape),i=_o(a,c),u=E(i);_(c===u,()=>`The new shape (${i}) has ${u} elements and the old shape (${o.shape}) has ${c} elements. The new shape and old shape must have the same number of elements.`);const l=r.texData.get(o.dataId);return l.isPacked&&!Ke(o.shape,i)&&!(l.texture!==null&&Ke(l.shape,i))?ad(o,i,r):(r.incRef(o.dataId),{dataId:o.dataId,shape:i,dtype:o.dtype})}const rd={kernelName:Fo,backendName:"webgl",kernelFunc:S};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rn{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:a,outSize:r}=e;this.outputShape=[o,r];const c=Math.floor(s/4)*4,i=s%4;let u="sumValue += dot(values, ones);";if(t!=null){const d=1/t;u=`sumValue += dot(values * ${Lo(d)?d.toPrecision(2):d}, ones);`}let l="";a%s>0&&(l=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${c};
        if (${i===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${i===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${i===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}}/**
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
 */class id{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:a,outSize:r}=e;this.outputShape=[o,r];let c="0.0",i="";t==="prod"?c="1.0":t==="min"?(c="1.0 / 1e-20",i="min"):t==="max"&&(c="-1.0 / 1e-20",i="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");const l=Math.floor(s/4)*4,d=s%4;let p=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${i}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${i}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,h="vec4";t==="all"?(c="1.0",p=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(c="0.0",p=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");let f="";a%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${c};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${c});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${p}
        }

        int inIdx = inOffset + ${l};
        if (${d===1}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${p}
        } else if (${d===2}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${p}
        } else if (${d===3}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${p}
        }
        setOutput(${u});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],s=Mt(t);e.push({inSize:t,windowSize:s,outSize:Math.ceil(t/s)})}return e}function Te(n,e,t,s){const o=cd(n.shape);let a=n;for(let r=0;r<o.length;r++){const{inSize:c,windowSize:i,outSize:u}=o[r];let l,d;t==="mean"?l=r===0?new Rn({windowSize:i,inSize:c,batchSize:n.shape[0],outSize:u},c):new Rn({windowSize:i,inSize:c,batchSize:n.shape[0],outSize:u}):l=new id({windowSize:i,inSize:c,batchSize:n.shape[0],outSize:u},t),d=a,a=s.runWebGLProgram(l,[a],e),d.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(d)}return a}/**
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
 */class ud{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let r=0;r<s.length;r++)s[r]=e[t[r]];this.outputShape=s,this.rank=s.length;const o=D(this.rank),a=ld(t);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${a}));
    }
    `}}function ld(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let o=0;o<n.length;o++)s[n[o]]=t[o];return s.join()}/**
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
 */class dd{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let l=0;l<s.length;l++)s[l]=e[t[l]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=D(this.rank),a=Ls("rc",this.rank),r=new Array(this.rank);for(let l=0;l<t.length;l++)r[t[l]]=a[l];const c=`vec2(${r.slice(-2).join()})`,i=`++${a[this.rank-1]} < ${s[this.rank-1]}`,u=`getChannel(getA(${r.join()}), ${c})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${u};
      if(${i}) {
        result[1] = ${u};
      }
      --${a[this.rank-1]};
      if(++${a[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${u};
        if(${i}) {
          result[3] = ${u};
        }
      }
      setOutput(result);
    }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yt(n,e,t){const s=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dd(n.shape,e):new ud(n.shape,e);return t.runWebGLProgram(s,[n],n.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(n,e,t,s){const o=e,a=n.shape.length,r=K(o,n.shape);let c=r;const i=ne(c,a),u=i!=null;let l=n;u&&(l=yt(n,i,s),c=se(c.length,a)),re("sum",c,a);const[d,p]=pe(l.shape,c);let h=d;t&&(h=he(d,r));const f=E(p),g=E(n.shape)/f,x=S({inputs:{x:l},attrs:{shape:[g,f]},backend:s}),C=Gt(n.dtype),b=Te(x,C,"sum",s),v=S({inputs:{x:b},attrs:{shape:h},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(b),u&&s.disposeIntermediateTensorInfo(l),v}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wt(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,keepDims:r}=s;return pd(o,a,r,t)}const hd={kernelName:Bo,backendName:"webgl",kernelFunc:wt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{perm:a}=s,r=t,c=o.shape.length,i=new Array(c);for(let l=0;l<i.length;l++)i[l]=o.shape[a[l]];let u;if(r.shouldExecuteOnCPU([o])){const d=r.texData.get(o.dataId).values,p=nn(d,o.shape,o.dtype,a,i);u=r.makeTensorInfo(i,o.dtype);const h=r.texData.get(u.dataId);h.values=p}else u=yt(o,a,r);return u}const fd={kernelName:Vo,backendName:"webgl",kernelFunc:M};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zs=1e3;function mt({a:n,b:e,transposeA:t,transposeB:s,backend:o,bias:a=null,preluActivationWeights:r=null,leakyreluAlpha:c=0,activation:i=null}){const u=n.shape.length,l=e.shape.length,d=t?n.shape[u-2]:n.shape[u-1],p=s?e.shape[l-1]:e.shape[l-2],h=t?n.shape[u-1]:n.shape[u-2],f=s?e.shape[l-2]:e.shape[l-1],m=n.shape.slice(0,-2),g=e.shape.slice(0,-2),x=E(m),C=E(g),v=q(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([h,f]);_(d===p,()=>`Error in matMul: inner shapes (${d}) and (${p}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${s} must match.`);const R=t?[x,d,h]:[x,h,d],N=s?[C,f,p]:[C,p,f],I=S({inputs:{x:n},backend:o,attrs:{shape:R}}),w=S({inputs:{x:e},backend:o,attrs:{shape:N}}),O=[I,w],k=Math.max(x,C),P=t?I.shape[1]:I.shape[2],F=a!=null,oe=r!=null,H=i==="leakyrelu",j=i!=null?je(i,!0):null,Z=F||oe||H||j!=null;let ee;if((h===1||f===1)&&P>zs&&Z===!1){let ce=I,Ie=w;t&&(ce=M({inputs:{x:I},backend:o,attrs:{perm:[0,2,1]}}),O.push(ce)),s&&(Ie=M({inputs:{x:w},backend:o,attrs:{perm:[0,2,1]}}),O.push(Ie));const Ne=f!==1,ot=f===1;let It=ce;Ne&&(It=S({inputs:{x:ce},backend:o,attrs:{shape:[k,P,1]}}),O.push(It));const xo=f===1?2:1;let Nt=Ie;ot&&(Nt=S({inputs:{x:Ie},backend:o,attrs:{shape:[k,1,P]}}),O.push(Nt));const cn=on({inputs:{a:It,b:Nt},backend:o});ee=wt({inputs:{x:cn},backend:o,attrs:{axis:xo,keepDims:!0}}),O.push(cn)}else{const ce=ke(n.dtype,e.dtype),Ie=new Gs(R,N,[k,h,f],t,s,F,j,oe,H),Ne=[I,w];if(a!=null&&Ne.push(a),oe&&Ne.push(r),H){const ot=o.makeTensorInfo([],"float32",Qe(c,"float32"));Ne.push(ot),O.push(ot)}ee=o.runWebGLProgram(Ie,Ne,ce)}const U=S({inputs:{x:ee},backend:o,attrs:{shape:v}});O.push(ee);for(const ce of O)o.disposeIntermediateTensorInfo(ce);return U}/**
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
 */function xd(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:a,bias:r,preluActivationWeights:c}=e,{transposeA:i,transposeB:u,activation:l,leakyreluAlpha:d}=s;return mt({a:o,b:a,transposeA:i,transposeB:u,backend:t,bias:r,preluActivationWeights:c,leakyreluAlpha:d,activation:l})}const md={kernelName:Uo,backendName:"webgl",kernelFunc:xd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sn="return abs(x);";function gd(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const a=t.texData.get(s.dataId),r=Fs(a.values);return t.makeTensorInfo(s.shape,s.dtype,r)}let o;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new de(s.shape,Sn):o=new ae(s.shape,Sn),t.runWebGLProgram(o,[s],s.dtype)}const Cd={kernelName:Wo,backendName:"webgl",kernelFunc:gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $d=J+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,vd=A({opSnippet:$d}),bd={kernelName:Mo,backendName:"webgl",kernelFunc:vd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rd=J+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,Sd=A({opSnippet:Rd}),yd={kernelName:Go,backendName:"webgl",kernelFunc:Sd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yn="return a + b;",wd=B({opSnippet:yn,packedOpSnippet:yn,supportsComplex:!0,cpuKernelImpl:Pu}),Td={kernelName:zo,backendName:"webgl",kernelFunc:wd};/**
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
 */class Id{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((a,r)=>`T${r}`);const s=[];this.variableNames.forEach(a=>{s.push(`float v${a} = get${a}AtOutCoords();`)});const o=this.variableNames.map(a=>`v${a}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}/**
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
 */class Nd{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((a,r)=>`T${r}`);const s=[];this.variableNames.forEach(a=>{s.push(`vec4 v${a} = get${a}AtOutCoords();`)});const o=this.variableNames.map(a=>`v${a}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ft(n){const{inputs:e,backend:t}=n,s=e;if(s.length===1)return X({inputs:{x:s[0]},backend:t});if(s.length>$().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const i=Math.floor(s.length/2),u=ft({inputs:s.slice(0,i),backend:t}),l=ft({inputs:s.slice(i),backend:t});return ft({inputs:[u,l],backend:t})}const o=s.map(i=>i.dtype).reduce((i,u)=>ke(i,u)),a=s.map(i=>i.shape),c=$().getBool("WEBGL_PACK")?new Nd(s[0].shape,a):new Id(s[0].shape,a);return t.runWebGLProgram(c,s,o)}const Ed={kernelName:Ho,backendName:"webgl",kernelFunc:ft};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,keepDims:r}=s,c=o.shape.length,i=K(a,o.shape);let u=i;const l=ne(u,c);let d=o;l!=null&&(d=M({inputs:{x:o},backend:t,attrs:{perm:l}}),u=se(u.length,c)),re("all",u,c);const[p,h]=pe(d.shape,u),f=E(h),m=S({inputs:{x:d},backend:t,attrs:{shape:[-1,f]}}),g=Te(m,m.dtype,"all",t);let x;if(r){const C=he(p,i);x=S({inputs:{x:g},backend:t,attrs:{shape:C}})}else x=S({inputs:{x:g},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),l!=null&&t.disposeIntermediateTensorInfo(d),x}const Od={kernelName:Xo,backendName:"webgl",kernelFunc:kd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,keepDims:r}=s,c=o.shape.length,i=K(a,o.shape);let u=i;const l=ne(u,c);let d=o;l!=null&&(d=M({inputs:{x:o},backend:t,attrs:{perm:l}}),u=se(u.length,c)),re("any",u,c);const[p,h]=pe(d.shape,u),f=E(h),m=S({inputs:{x:d},backend:t,attrs:{shape:[-1,f]}}),g=Te(m,m.dtype,"any",t);let x;if(r){const C=he(p,i);x=S({inputs:{x:g},backend:t,attrs:{shape:C}})}else x=S({inputs:{x:g},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),l!=null&&t.disposeIntermediateTensorInfo(d),x}const Dd={kernelName:Ko,backendName:"webgl",kernelFunc:Ad};/**
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
 */class Pd{constructor(e,t,s){this.variableNames=["A"];const{windowSize:o,batchSize:a,outSize:r}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[a,r];const c=t==="max"?">":"<",i=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${i};
          float candidate = getA(batch, inIdx);
          if (candidate ${c} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
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
 */class Fd{constructor(e,t,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,_(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const a=e[e.length-1],r=Math.ceil(a/t);this.outputShape=e.slice(0,-1),r>1&&this.outputShape.push(r),o||this.variableNames.push("bestIndicesA");const c=this.outputShape,i=c.length,u=D(i),l=W("coords",i);let d,p;if(r===1){p=i+1;const w=D(p);d=`
        ${w} sourceLocR = ${w}(${l.join()}, 0);
        ++${l[i-1]};
        ${w} sourceLocG = ${w}(${l.join()}, 0);
        ++${l[i-2]};
        ${w} sourceLocA = ${w}(${l.join()}, 0);
        --${l[i-1]};
        ${w} sourceLocB = ${w}(${l.join()}, 0);
        --${l[i-2]};`}else p=i,d=`
        ${u} sourceLocR = coords;
        ++${l[i-1]};
        ${u} sourceLocG = coords;
        ++${l[i-2]};
        ${u} sourceLocA = coords;
        --${l[i-1]};
        ${u} sourceLocB = coords;
        --${l[i-2]};`;const h=["x","y","z","w","u","v"].slice(0,p),f="."+h[p-1],m=h.map(w=>"int "+w),g=W("sourceLocR",p-1).concat("inIdx.r"),x=W("sourceLocG",p-1).concat("inIdx.g"),C=W("sourceLocB",p-1).concat("inIdx.b"),b=W("sourceLocA",p-1).concat("inIdx.a"),v=s==="max"?"greaterThan":"lessThan",R=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${C.join()}),
                             getBestIndicesAChannel(${b.join()})));`,N=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${C.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${b.join()}) : 0.)`,I=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${h.join()}),
                                          vec2(${h.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${h.join()}),
                               vec2(${h.slice(-2).join()}));
      }
      ${I}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${l[i-1]} < ${c[i-1]-1};
        bool hasNextRow = ${l[i-2]} < ${c[i-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${N};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${R}
          vec4 candidate = ${N};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${v}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hs(n,e,t,s=null){let o=e.shape[0],a=e.shape[1];s!=null&&(o=s.shape[0],a=s.shape[1]);const r=Mt(a),c={windowSize:r,inSize:a,batchSize:o,outSize:Math.ceil(a/r)},i=new Pd(c,t,s==null),u=[e];s!=null&&u.push(s);const l=n.runWebGLProgram(i,u,"int32");if(l.shape[1]===1)return l;const d=Hs(n,e,t,l);return n.disposeIntermediateTensorInfo(l),d}function Xs(n,e,t,s=null){const o=s!=null?s.shape:e.shape,a=o[o.length-1],r=Mt(a),c=new Fd(o,r,t,s==null),i=s==null?[e]:[e,s],u=n.runWebGLProgram(c,i,"int32");if(u.shape.length===e.shape.length){const l=Xs(n,e,t,u);return n.disposeIntermediateTensorInfo(u),l}return u}function Ks(n,e,t,s){const o=[t];if(re("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,e.shape.length),!$().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const a=[],r=n.texData.get(e.dataId),c=r!==null&&r.isPacked;let i=e;c&&(i=n.unpackTensor(e),a.push(i));const[u,l]=pe(i.shape,o),d=E(l),p=S({inputs:{x:i},backend:n,attrs:{shape:[-1,d]}});a.push(p);const h=Hs(n,p,s);a.push(h);const f=S({inputs:{x:h},backend:n,attrs:{shape:u}});return a.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return Xs(n,e,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _d(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a}=s;let r=K(a,o.shape);const c=ne(r,o.shape.length);let i=o;const u=[];c!=null&&(i=M({inputs:{x:o},backend:t,attrs:{perm:c}}),u.push(i),r=se(r.length,i.shape.length)),re("argMax",[r[0]],i.shape.length);const l=Ks(t,i,r[0],"max");return u.forEach(d=>t.disposeIntermediateTensorInfo(d)),l}const Ld={kernelName:jo,backendName:"webgl",kernelFunc:_d};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a}=s;let r=K(a,o.shape);const c=ne(r,o.shape.length);let i=o;const u=[];c!=null&&(i=M({inputs:{x:o},backend:t,attrs:{perm:c}}),u.push(i),r=se(r.length,i.shape.length)),re("argMin",[r[0]],i.shape.length);const l=Ks(t,i,r[0],"min");return u.forEach(d=>t.disposeIntermediateTensorInfo(d)),l}const Vd={kernelName:qo,backendName:"webgl",kernelFunc:Bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ud=J+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Wd=A({opSnippet:Ud}),Md={kernelName:Yo,backendName:"webgl",kernelFunc:Wd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gd=J+"return log(x + sqrt(x * x + 1.0));",zd=A({opSnippet:Gd}),Hd={kernelName:Qo,backendName:"webgl",kernelFunc:zd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xd=J+`
  return atan(x);
`,Kd=A({opSnippet:Xd}),jd={kernelName:Zo,backendName:"webgl",kernelFunc:Kd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qd=sn+`
  return atan(a, b);
`,Yd=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+we+`
  return result;
`,Qd=B({opSnippet:qd,packedOpSnippet:Yd}),Zd={kernelName:Jo,backendName:"webgl",kernelFunc:Qd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jd=J+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ep=A({opSnippet:Jd}),tp={kernelName:ea,backendName:"webgl",kernelFunc:ep};/**
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
 */class qe{constructor(e,t,s,o=!1,a=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const r=e.filterWidth,c=e.strideHeight,i=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,h=e.padInfo.top,f=e.padInfo.left;this.outputShape=e.outShape;const m=t==="avg",g=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let C="0.0";if(m||(C="-1.0 / 1e-20"),s){const w=">=";this.userCode=`
        const ivec2 strides = ivec2(${c}, ${i});
        const ivec2 pads = ivec2(${h}, ${f});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${w} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?a?g:x:`wR * ${p} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const b="max";let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(v="avgValue / max(count, 1.0)");const R=Math.floor(r/4)*4,N=r%4,I=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${b}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${c}, ${i});
      const ivec2 pads = ivec2(${h}, ${f});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${R}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${I}
          }

          int xC = xCCorner + ${R};
          if (${N===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${I}
          } else if (${N===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${I}
          } else if (${N===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${I}
          }
        }
        setOutput(${v});
      }
    `}}class an{constructor(e,t,s,o=!1,a=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const r=e.filterWidth,c=e.strideDepth,i=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,d=e.dilationHeight,p=e.dilationWidth,h=e.effectiveFilterDepth,f=e.effectiveFilterHeight,m=e.effectiveFilterWidth,g=e.padInfo.front,x=e.padInfo.top,C=e.padInfo.left;this.outputShape=e.outShape;const b=t==="avg";let v="0.0";if(b||(v="-1.0 / 1e-20"),s){const k=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${c}, ${i}, ${u});
        const ivec3 pads = ivec3(${g}, ${x}, ${C});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${h};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${p}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${k} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?a?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const R="max";let N=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(N="avgValue / max(count, 1.0)");const I=Math.floor(r/4)*4,w=r%4,O=`
      if (${b}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${R}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${c}, ${i}, ${u});
      const ivec3 pads = ivec3(${g}, ${x}, ${C});
      const float initializationValue = ${v};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${v});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${I}; wC += 4) {
              int xC = xCCorner + wC * ${p};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${p}, ch),
                getValue(batch, xD, xR, xC + 2 * ${p}, ch),
                getValue(batch, xD, xR, xC + 3 * ${p}, ch)
              );

              ${O}
            }

            int xC = xCCorner + ${I};
            if (${w===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${O}
            } else if (${w===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${p}, ch),
                initializationValue,
                initializationValue
              );

              ${O}
            } else if (${w===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${p}, ch),
                getValue(batch, xD, xR, xC + 2 * ${p}, ch),
                initializationValue
              );

              ${O}
            }
          }
        }
        setOutput(${N});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;Pe(o,"avgPool");const{filterSize:a,strides:r,pad:c,dimRoundingMode:i}=s,u=1;_(Ze(r,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${u}'`);const l=Je(o.shape,a,r,u,c,i);if(l.filterWidth===1&&l.filterHeight===1&&z(l.inShape,l.outShape))return X({inputs:{x:o},backend:t});const d=new qe(l,"avg",!1);return t.runWebGLProgram(d,[o],"float32")}const sp={kernelName:ta,backendName:"webgl",kernelFunc:np};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:a,strides:r,pad:c,dimRoundingMode:i,dataFormat:u}=s,l=[1,1,1],d=vt(o.shape,a,r,l,c,i,u),p=new an(d,"avg",!1);return t.runWebGLProgram(p,[o],"float32")}const ap={kernelName:na,backendName:"webgl",kernelFunc:op};/**
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
 */class rp{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,a=e.strideWidth,r=e.dilationHeight,c=e.dilationWidth,i=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=i-1-e.padInfo.top,d=u-1-e.padInfo.left,p=1/(t*s);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${d});
      const float avgMultiplier = float(${p});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
            wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${c}) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class ip{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,a=e.strideDepth,r=e.strideHeight,c=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,d=e.effectiveFilterDepth,p=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=d-1-e.padInfo.front,m=p-1-e.padInfo.top,g=h-1-e.padInfo.left,x=1/(t*s*o);this.userCode=`
      const ivec3 pads = ivec3(${f}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${a}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${p};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${h};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:a}=e,r=a,{filterSize:c,strides:i,pad:u,dimRoundingMode:l}=s,d=[1,1,1],p=vt(r.shape,c,i,d,u,l),h=new ip(p);return t.runWebGLProgram(h,[o],r.dtype)}const up={kernelName:sa,backendName:"webgl",kernelFunc:cp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lp(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:a}=e,r=a;Pe([o,a],"avgPoolGrad");const{filterSize:c,strides:i,pad:u}=s,l=Je(r.shape,c,i,1,u),d=new rp(l);return t.runWebGLProgram(d,[o],r.dtype)}const dp={kernelName:oa,backendName:"webgl",kernelFunc:lp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:a}=e,{transposeA:r,transposeB:c}=s;return mt({a:o,b:a,transposeA:r,transposeB:c,backend:t})}const hp={kernelName:aa,backendName:"webgl",kernelFunc:pp};/**
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
 */class fp{constructor(e,t,s,o,a,r){this.outputShape=[],this.variableNames=["x","mean","variance"],q(e,t),q(e,s);let c="0.0";o!=null&&(q(e,o),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let i="1.0";a!=null&&(q(e,a),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${c};
        float scale = ${i};
        float inv = scale * inversesqrt(variance + float(${r}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
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
 */class xp{constructor(e,t,s,o,a,r){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],q(e,t),q(e,s);let c="vec4(0.0)";o!=null&&(q(e,o),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let i="vec4(1.0)";a!=null&&(q(e,a),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${c};
        vec4 scale = ${i};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${r}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mp=({inputs:n,backend:e,attrs:t})=>{const{x:s,mean:o,variance:a,offset:r,scale:c}=n;_(o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(r==null||o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(c==null||o.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:i}=t;i==null&&(i=.001);const u=[s,o,a];let l=null;r!=null&&(l=r.shape,u.push(r));let d=null;c!=null&&(d=c.shape,u.push(c));const p=$().getBool("WEBGL_PACK_NORMALIZATION")?new xp(s.shape,o.shape,a.shape,l,d,i):new fp(s.shape,o.shape,a.shape,l,d,i);return e.runWebGLProgram(p,u,u[0].dtype)},gp={kernelName:ra,backendName:"webgl",kernelFunc:mp};/**
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
 */class Cp{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=D(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=$p(this.rank);let o;const a=e.map((r,c)=>`sourceLoc.${Lt[c]} = start[${c}] + coords.${Lt[c]};`);o=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${a.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const Lt=["x","y","z","w","u","v"];function $p(n){if(n===1)return"sourceLoc";if(n<=6)return Lt.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}/**
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
 */class vp{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=D(this.rank),s=W("coords",this.rank),o=W("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,r=`getChannel(getSource(${o.join()}), ${a})`,c=`
      result.x = ${r};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${r};
        --${o[this.rank-1]};
      }
    `,i=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${r};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${r};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((l,d)=>`start[${d}]`).join()});`:e.map((l,d)=>`${o[d]} = ${s[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${c}
        ${i}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(n,e,t,s){const o=s.texData.get(n.dataId),a=s.makeTensorInfo(t,n.dtype),r=s.texData.get(a.dataId);Object.assign(r,o),r.refCount=1,r.shape=t,r.dtype=n.dtype;let c=da(e,Ae(n.shape));o.slice&&(c+=o.slice.flatOffset),r.slice={flatOffset:c,origDataId:o.slice&&o.slice.origDataId||n.dataId};const i=s.dataRefCount.get(r.slice.origDataId)||1;return s.dataRefCount.set(r.slice.origDataId,i+1),a}function We(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:a,size:r}=s,[c,i]=ca(o,a,r);if(ua(o,c,i),E(i)===0)return t.makeTensorInfo(i,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=t.texData.get(o.dataId),p=pl(d.values,c,i,o.shape,o.dtype);return t.makeTensorInfo(i,o.dtype,p)}const{isPacked:u}=t.texData.get(o.dataId),l=la(o.shape,c,i);if(u||!l){const d=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vp(i):new Cp(i),p=[c];return t.runWebGLProgram(d,[o],o.dtype,p)}return t.uploadToGPU(o.dataId),bp(o,c,i,t)}const Rp={kernelName:ia,backendName:"webgl",kernelFunc:We};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sp=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:a,crops:r}=s;_(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const c=a.reduce((C,b)=>C*b),i=Vn(o.shape,a,c),u=Un(i.length,a.length),l=Wn(o.shape,a,c),d=ha(r,a.length),p=fa(l,r,a.length),h=[],f=S({inputs:{x:o},backend:t,attrs:{shape:i}}),m=M({inputs:{x:f},backend:t,attrs:{perm:u}}),g=S({inputs:{x:m},backend:t,attrs:{shape:l}}),x=We({inputs:{x:g},backend:t,attrs:{begin:d,size:p}});return h.push(f),h.push(m),h.push(g),h.forEach(C=>t.disposeIntermediateTensorInfo(C)),x},yp={kernelName:pa,backendName:"webgl",kernelFunc:Sp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:a}=e,{size:r}=s,c=t.readSync(o.dataId),i=t.readSync(a.dataId),u=Ps(c,i,a.dtype,a.shape,r);return t.makeTensorInfo([r],a.dtype,u)}const Tp={kernelName:xa,backendName:"webgl",kernelFunc:wp};/**
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
 */const Ip=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,Np=`
  return float(int(a.r) & int(b.r));
`;function Ep(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS"),r=$().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([s,o])||r===1){const i=t.texData.get(s.dataId).values,u=t.texData.get(o.dataId).values,[l,d]=_u(s.shape,o.shape,i,u,s.dtype),p=t.makeTensorInfo(d,s.dtype),h=t.texData.get(p.dataId);return h.values=l,p}let c;return a?c=new Ve(Ip,s.shape,o.shape,!1):c=new be(Np,s.shape,o.shape),t.runWebGLProgram(c,[s,o],s.dtype)}const kp={kernelName:ma,backendName:"webgl",kernelFunc:Ep};/**
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
 */function Op(n){const{inputs:e,backend:t}=n,{s0:s,s1:o}=e,a=t.readSync(s.dataId),r=t.readSync(o.dataId),c=q(Array.from(a),Array.from(r));return t.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const Ap={kernelName:ga,backendName:"webgl",kernelFunc:Op};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dp="return float(a != b);",js=B({opSnippet:Dp,cpuKernelImpl:sl,dtype:"bool"}),Pp={kernelName:Ca,backendName:"webgl",kernelFunc:js};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nt(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return X({inputs:{x:o.complexTensorInfos.real},backend:t})}const Fp={kernelName:$a,backendName:"webgl",kernelFunc:nt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _p="return float(int(x));";function Lp(n,e){const t=new ae(n.shape,_p),s=e.runWebGLProgram(t,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bt(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:a}=s;if(a==="complex64"){if(o.dtype==="complex64")return X({inputs:{x:o},backend:t});const r=ba(o.shape),c=Bt({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),i=xe({inputs:{real:c,imag:r},backend:t});return r.dispose(),t.disposeIntermediateTensorInfo(c),i}if(o.dtype==="complex64"){const r=nt({inputs:{input:o},backend:t}),c=Bt({inputs:{x:r},backend:t,attrs:{dtype:a}});return t.disposeIntermediateTensorInfo(r),c}if(!Ra(o.dtype,a)){const r=X({inputs:{x:o},backend:t});return{dataId:r.dataId,shape:r.shape,dtype:a}}if(t.shouldExecuteOnCPU([o])){const r=t.texData.get(o.dataId).values,[c,i,u]=Lu(r,o.shape,o.dtype,a);return t.makeTensorInfo(c,i,u)}if(a==="int32")return Lp(o,t);if(a==="bool"){const r=t.makeTensorInfo([],"bool",Bn("bool",1)),i=js({inputs:{a:o,b:r},backend:t});return t.disposeIntermediateTensorInfo(r),i}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${a}`)}const Bp={kernelName:va,backendName:"webgl",kernelFunc:Bt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn="return ceil(x);",Vp=A({opSnippet:wn,packedOpSnippet:wn,cpuKernelImpl:Bu}),Up={kernelName:Sa,backendName:"webgl",kernelFunc:Vp};/**
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
 */class Wp{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
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
 */class Mp{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{clipValueMin:a,clipValueMax:r}=s;let c;$().getBool("WEBGL_PACK_CLIP")?c=new Mp(o.shape):c=new Wp(o.shape);const i=[[a],[r]];return t.runWebGLProgram(c,[o],o.dtype,i)}const zp={kernelName:ya,backendName:"webgl",kernelFunc:Gp};/**
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
 */class Hp{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tn(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function Xp(n){const{inputs:e,backend:t}=n,{x:s}=e,o=t.texData.get(s.dataId),a=new Hp(s.shape),r=[Tn(s,o.complexTensorInfos.real),Tn(s,o.complexTensorInfos.imag)];return t.runWebGLProgram(a,r,r[0].dtype)}const Kp={kernelName:wa,backendName:"webgl",kernelFunc:Xp};/**
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
 */class jp{constructor(e){this.outputShape=[],this.outputShape=Oe(e,1),this.variableNames=e.map((r,c)=>`T${c}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let r=1;r<t.length;r++)t[r]=t[r-1]+e[r][1];const s=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let r=1;r<t.length;r++){const c=t[r-1];s.push(`else if (yC < ${t[r]}) setOutput(getT${r}(yR, yC-${c}));`)}const o=t.length,a=t[t.length-1];s.push(`else setOutput(getT${o}(yR, yC-${a}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}/**
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
 */class qp{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Oe(e,t);const s=this.outputShape,o=s.length,a=D(o),r=W("coords",o),c=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((m,g)=>`T${g}`);const i=new Array(e.length-1);i[0]=e[0][t];for(let m=1;m<i.length;m++)i[m]=i[m-1]+e[m][t];const u=c[t],l=c.slice(-2),d=c.join();let p=`if (${u} < ${i[0]}) {
        return getChannel(
            getT0(${d}), vec2(${l.join()}));
        }`;for(let m=1;m<i.length;m++){const g=i[m-1];p+=`
        if (${u} < ${i[m]}  && ${u} >= ${i[m-1]}) {
          return getChannel(
            getT${m}(${ut(c,u,g)}),
            vec2(${ut(l,u,g)}));
        }`}const h=i.length,f=i[i.length-1];p+=`
        return getChannel(
          getT${h}(${ut(c,u,f)}),
          vec2(${ut(l,u,f)}));`,this.userCode=`
      float getValue(${c.map(m=>"int "+m)}) {
        ${p}
      }

      void main() {
        ${a} coords = getOutputCoords();
        vec4 result = vec4(getValue(${r}), 0., 0., 0.);

        ${r[o-1]} = ${r[o-1]} + 1;
        if (${r[o-1]} < ${s[o-1]}) {
          result.g = getValue(${r});
        }

        ${r[o-2]} = ${r[o-2]} + 1;
        if (${r[o-2]} < ${s[o-2]}) {
          result.a = getValue(${r});
        }

        ${r[o-1]} = ${r[o-1]} - 1;
        if (${r[o-2]} < ${s[o-2]} &&
            ${r[o-1]} < ${s[o-1]}) {
          result.b = getValue(${r});
        }
        setOutput(result);
      }
    `}}function ut(n,e,t){const s=n.indexOf(e);return n.map((a,r)=>r===s?`${a} - ${t}`:a).join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return X({inputs:{x:o.complexTensorInfos.imag},backend:t})}const Yp={kernelName:Ta,backendName:"webgl",kernelFunc:Tt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function He(n,e,t){const s=n[0].dtype;if(s==="complex64"){const h=n.map(C=>nt({inputs:{input:C},backend:t})),f=n.map(C=>Tt({inputs:{input:C},backend:t})),m=He(h,e,t),g=He(f,e,t),x=xe({inputs:{real:m,imag:g},backend:t});return h.forEach(C=>t.disposeIntermediateTensorInfo(C)),f.forEach(C=>t.disposeIntermediateTensorInfo(C)),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),x}let o=t.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const h=n.map(v=>{const N=[-1,E(v.shape.slice(e))];return S({inputs:{x:v},backend:t,attrs:{shape:N}})}),f=h.map(v=>({vals:t.readSync(v.dataId),shape:v.shape})),m=Oe(h.map(v=>v.shape),1),g=h[0].shape[0]===1,x=Vu(f,m,s,g),C=Oe(n.map(v=>v.shape),e),b=t.makeTensorInfo(C,s,x);return h.forEach(v=>t.disposeIntermediateTensorInfo(v)),b}const a=n.filter(h=>E(h.shape)>0),r=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&a[0].shape.length>1;if(a.length===1){const h=r?new ae(n[0].shape,le):new de(n[0].shape,le);return t.runWebGLProgram(h,n,s)}const c=$().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(a.length>c){const h=[];for(let m=0;m<a.length;m+=c){const g=a.slice(m,m+c);h.push(He(g,e,t))}const f=He(h,e,t);for(const m of h)t.disposeIntermediateTensorInfo(m);return f}if(r){const h=new qp(a.map(f=>f.shape),e);return t.runWebGLProgram(h,a,s)}const{tensors2D:i,outShape:u}=Qp(a,e,t),l=new jp(i.map(h=>h.shape)),d=t.runWebGLProgram(l,i,s);i.forEach(h=>t.disposeIntermediateTensorInfo(h));const p=S({inputs:{x:d},attrs:{shape:u},backend:t});return t.disposeIntermediateTensorInfo(d),p}function Qp(n,e,t){const s=Oe(n.map(a=>a.shape),e);return{tensors2D:n.map(a=>S({inputs:{x:a},attrs:{shape:[-1,E(a.shape.slice(e))]},backend:t})),outShape:s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s,a=K(o,e[0].shape)[0],r=e.map(u=>u.shape);Na(r,a);const c=Oe(e.map(u=>u.shape),a);if(E(c)===0)return t.makeTensorInfo(c,e[0].dtype,[]);const i=e.filter(u=>E(u.shape)>0);return i.length===1?X({inputs:{x:i[0]},backend:t}):He(i,a,t)}const Zp={kernelName:Ia,backendName:"webgl",kernelFunc:qs};/**
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
 */class Ys{constructor(e,t=!1,s=null,o=!1,a=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const r=e.padInfo.top,c=e.padInfo.left,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,d=e.dilationWidth,p=e.filterHeight,h=e.filterWidth,f=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,g=e.dataFormat==="channelsLast",x=g?1:2,C=g?2:3,b=g?3:1;let v="",R="";s&&(o?v=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:a?v=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:v=`
          float activation(float x) {
            ${s}
          }
        `,R="result = activation(result);");const N=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${v}

      const ivec2 strides = ivec2(${i}, ${u});
      const ivec2 pads = ivec2(${r}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${b}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${C}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${p}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${h}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${f}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${f}) *
                    getW(wR, wC, ${f}, d2);
              } else {
                dotProd +=
                    getX(batch, ${f}, xR, xC) *
                    getW(wR, wC, ${f}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2),
                getW(wR, wC, ${f} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1),
                  getX(batch, xR, xC, ${f} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC),
                  getX(batch, ${f} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${N}
        ${R}
        setOutput(result);
      }
    `}}class Jp{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left,a=e.strideDepth,r=e.strideHeight,c=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,d=e.filterDepth,p=e.filterHeight,h=e.filterWidth,f=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${a}, ${r}, ${c});
      const ivec3 pads = ivec3(${t}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${i};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${f}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${f}) *
                  getW(wF, wR, wC, ${f}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1),
                  getX(batch, xF, xR, xC, ${f} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2),
                  getW(wF, wR, wC, ${f} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */class Qs{constructor(e,t=!1,s=null,o=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=V(this.outputShape.length);const r=e.padInfo.left,c=e.strideWidth,i=e.dilationWidth,u=e.filterHeight,l=e.filterWidth,d=l;let p=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<l;g++)p+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;p+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let g=0;g<l;g++)p+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;p+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(d+1)/2;g++){const x=g*2;if(p+=`
           xC = xCCorner + ${x*i};
           `,c===1){if(x<l&&(r%2===1?(p+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,i===1&&x>0?p+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:p+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):p+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<l)){const C=r%2===0?Ut(i):i;i%2===0&&r%2===1||i%2!==0&&r%2!==1?(p+=`
                   xCOffset = xC + imod(pads[1], 2) + ${C};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,i>1?p+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:p+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):C===1?p+=`
                     xC${x+1} = xTexelC${x};
                     `:p+=`
                     xCOffset = xC + ${C};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<l&&(r%2===1?(p+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<l&&(p+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(p+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<l&&(p+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<l&&(p+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<l&&(p+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}p+=`
     }
   `,p+=`
     }
   `,p+=`
     }
   `;let h="",f="";s&&(o?h=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:a?h=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:h=`vec4 activation(vec4 x) {
           ${s}
         }`,f="result = activation(result);");const m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${h}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${p}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${f}
         setOutput(result);
       }
     `}}/**
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
 */class eh{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=V(this.outputShape.length);const{dataFormat:s}=t,o=G(),a=s==="channelsLast",r=a?1:2,c=a?2:3,i=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let u="";for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)u+=`
          blockIndex = rc.z + ${d};
          pos = rc.y + ${l};

          ${i}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${r}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${c}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${a}) {
                  innerDims = vec2(d1, ch);
                  result[${l*2+d}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${l*2+d}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${o.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gt(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function Zs({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:a=null,leakyreluAlpha:r=0,activation:c=null}){const i=n.shape,u=s.texData.get(n.dataId),l=t.inChannels,d=i[0]*i[1]*i[2],p=t.outChannels,h=t.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(a!=null){const v=gt(a.shape,h);v!=null&&(a=S({inputs:{x:a},backend:s,attrs:{shape:v}}),x.push(a))}if(o!=null){const v=gt(o.shape,h);v!=null&&(o=S({inputs:{x:o},backend:s,attrs:{shape:v}}),x.push(o))}if(!((d===1||p===1)&&l>zs)&&u.isPacked&&h&&u.texture!=null&&i[2]%2!==0&&z(u.shape.slice(-3),i.slice(-3))){const v=i[0]*i[1]*(i[2]+1),R={dataId:n.dataId,shape:[1,v,t.inChannels],dtype:n.dtype},N=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,_(Ke(u.shape,R.shape),()=>`packed reshape ${u.shape} to ${R.shape} isn't free`);const I=S({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});x.push(I);const w=mt({a:R,b:I,backend:s,transposeA:f,transposeB:m,bias:o,activation:c,preluActivationWeights:a,leakyreluAlpha:r}),O=s.texData.get(w.dataId);_(O.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=N,O.shape=t.outShape,g=X({inputs:{x:w},backend:s}),g.shape=t.outShape,x.push(w)}else{const v=t.outHeight*t.outWidth,R=S({inputs:{x:n},backend:s,attrs:{shape:h?[t.batchSize,v,t.inChannels]:[t.batchSize,t.inChannels,v]}}),N=S({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),I=mt({a:h?R:N,b:h?N:R,transposeA:!h,transposeB:m,backend:s,bias:o,activation:c,preluActivationWeights:a,leakyreluAlpha:r});g=S({inputs:{x:I},backend:s,attrs:{shape:t.outShape}}),x.push(R),x.push(N),x.push(I)}for(const v of x)s.disposeIntermediateTensorInfo(v);return g}function Js({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:a=null,leakyreluAlpha:r=0,activation:c=null}){const{filterWidth:i,filterHeight:u,inChannels:l,outWidth:d,outHeight:p,dataFormat:h}=t,f=h==="channelsLast",m=i*u*l,g=p*d,x=[t.batchSize,m,g],C=!0,b=!1,v=[];if(a!=null){const U=gt(a.shape,f);U!=null&&(a=S({inputs:{x:a},backend:s,attrs:{shape:U}}),v.push(a))}if(o!=null){const U=gt(o.shape,f);U!=null&&(o=S({inputs:{x:o},backend:s,attrs:{shape:U}}),v.push(o))}const R=S({inputs:{x:e},backend:s,attrs:{shape:[1,m,E(e.shape)/m]}});v.push(R);const N=new eh(x,t),I=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],w=s.runWebGLProgram(N,[n],"float32",I),O=S({inputs:{x:w},backend:s,attrs:{shape:x}});v.push(w),v.push(O);const k=o!=null,P=a!=null,F=c==="leakyrelu",oe=c?je(c,!0):null,H=new Gs(f?O.shape:R.shape,f?R.shape:O.shape,f?[t.batchSize,g,t.outChannels]:[t.batchSize,t.outChannels,g],C,b,k,oe,P,F),j=f?[O,R]:[R,O];if(o&&j.push(o),P&&j.push(a),F){const U=s.makeTensorInfo([],"float32",Qe(r,"float32"));j.push(U),v.push(U)}const Z=s.runWebGLProgram(H,j,"float32"),ee=S({inputs:{x:Z},backend:s,attrs:{shape:t.outShape}});v.push(Z);for(const U of v)s.disposeIntermediateTensorInfo(U);return ee}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function th(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a}=e,{strides:r,pad:c,dataFormat:i,dilations:u,dimRoundingMode:l}=s,d=bt(i),p=fe(o.shape,a.shape,r,u,c,l,!1,d);let h;if(p.filterHeight===1&&p.filterWidth===1&&p.dilationHeight===1&&p.dilationWidth===1&&p.strideHeight===1&&p.strideWidth===1&&(p.padInfo.type==="SAME"||p.padInfo.type==="VALID"))h=Zs({x:o,filter:a,convInfo:p,backend:t});else if(p.strideWidth<=2&&d==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){const m=new Qs(p),g=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];h=t.runWebGLProgram(m,[o,a],"float32",g)}else if($().getBool("WEBGL_CONV_IM2COL"))h=Js({x:o,filter:a,convInfo:p,backend:t});else{const m=new Ys(p);h=t.runWebGLProgram(m,[o,a],"float32")}const f=S({inputs:{x:h},backend:t,attrs:{shape:p.outShape}});return t.disposeIntermediateTensorInfo(h),f}const nh={kernelName:Ea,backendName:"webgl",kernelFunc:th};/**
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
 */class sh{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,a=e.padInfo.left,r=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${r?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class oh{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,a=e.strideWidth,r=e.dataFormat==="channelsLast",c=t-1-e.padInfo.top,i=s-1-e.padInfo.left,u=r?1:2,l=r?2:3,d=r?3:1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${u}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${r}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ah{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,a=e.padInfo.front,r=e.padInfo.top,c=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${a};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${r};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${c};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class rh{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,a=e.strideDepth,r=e.strideHeight,c=e.strideWidth,i=t-1-e.padInfo.front,u=s-1-e.padInfo.top,l=o-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${i}, ${u}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${a}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ih(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:a}=e,{strides:r,pad:c,dataFormat:i,dimRoundingMode:u,filterShape:l}=s,d=bt(i),p=fe(o.shape,l,r,1,c,u,!1,d),h=new sh(p);return t.runWebGLProgram(h,[o,a],"float32")}const ch={kernelName:ka,backendName:"webgl",kernelFunc:ih};/**
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
 */class uh{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=V(this.outputShape.length);const t=e.filterHeight,s=e.filterWidth,o=t-1-e.padInfo.top,a=s-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:a}=e,{inputShape:r,strides:c,pad:i,dataFormat:u,dimRoundingMode:l}=s,d=bt(u),p=fe(r,a.shape,c,1,i,l,!1,d);if($().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&d==="channelsLast"){const h=[[p.strideHeight,p.strideWidth]],f=new uh(p);return t.runWebGLProgram(f,[o,a],"float32",h)}else{const h=new oh(p);return t.runWebGLProgram(h,[o,a],"float32")}}const dh={kernelName:Oa,backendName:"webgl",kernelFunc:lh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ph(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a}=e,{strides:r,pad:c,dilations:i}=s,u=zt(o.shape,a.shape,r,i,c),l=new Jp(u);return t.runWebGLProgram(l,[o,a],"float32")}const hh={kernelName:Aa,backendName:"webgl",kernelFunc:ph};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:a}=e,{strides:r,pad:c,filterShape:i}=s,u=zt(o.shape,i,r,1,c),l=new ah(u);return t.runWebGLProgram(l,[o,a],"float32")}const xh={kernelName:Da,backendName:"webgl",kernelFunc:fh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mh(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:a}=e,{pad:r,strides:c,inputShape:i}=s,u=zt(i,a.shape,c,1,r),l=new rh(u);return t.runWebGLProgram(l,[o,a],"float32")}const gh={kernelName:Pa,backendName:"webgl",kernelFunc:mh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ch=Ue+`
  return cos(x);
`,$h=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${we}
  return result;
`,vh=A({opSnippet:Ch,packedOpSnippet:$h}),bh={kernelName:Fa,backendName:"webgl",kernelFunc:vh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rh=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,Sh=A({opSnippet:Rh}),yh={kernelName:_a,backendName:"webgl",kernelFunc:Sh};/**
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
 */class wh{constructor(e,t,s,o,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[r,c,i,u]=e,[l]=t,[d,p]=s;this.outputShape=[l,d,p,u];const h=o==="bilinear"?1:0,[f,m]=[`${c-1}.0`,`${i-1}.0`],[g,x,C]=d>1?[`${(c-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[b,v,R]=p>1?[`${(i-1)/(p-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${b});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${r}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${v};

        float in_y = ${C};
        if( in_y < 0.0 || in_y > ${f} ) {
          setOutput(float(${a}));
          return;
        }
        float in_x = ${R};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${a}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${h} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Th=n=>{const{inputs:e,backend:t,attrs:s}=n,{image:o,boxes:a,boxInd:r}=e,{cropSize:c,method:i,extrapolationValue:u}=s,l=new wh(o.shape,a.shape,c,i,u);return t.runWebGLProgram(l,[o,a,r],"float32")},Ih={kernelName:La,backendName:"webgl",kernelFunc:Th};var Ye;(function(n){n.Prod="*",n.Sum="+"})(Ye||(Ye={}));class In{constructor(e,t,s,o){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const a=this.outputShape.length,r=this.op===Ye.Prod?"1.0":"0.0",c=s?r:`getX(${Nn(a,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1];let u="",l="";s?(u=o?`end != ${i-1}`:"end != 0",l=o?"end + 1":"end - 1"):(u=o?`end + pow2 < ${i}`:"end >= pow2",l=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${D(a)} coords = getOutputCoords();
        int end = ${En(a,"coords",this.op)};
        float val = ${c};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${l};
          ${En(a,"coords",this.op)} = idx;
          val ${this.op}= getX(${Nn(a,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Nn(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function En(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}/**
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
 */function eo(n,e,t,s,o,a){const r=e.shape.length,c=ne([s],r);let i=e;c!=null&&(i=M({inputs:{x:e},backend:t,attrs:{perm:c}}));const u=se(1,r)[0];if(u!==r-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const l=i.shape[u];let d=X({inputs:{x:i},backend:t});for(let p=0;p<=Math.ceil(Math.log2(l))-1;p++){const h=new In(n,i.shape,!1,a),f=[[p]],m=d;d=t.runWebGLProgram(h,[d],d.dtype,f),t.disposeIntermediateTensorInfo(m)}if(o){const p=new In(n,i.shape,o,a),h=d;d=t.runWebGLProgram(p,[d],d.dtype),t.disposeIntermediateTensorInfo(h)}if(c!=null){const p=Mn(c),h=M({inputs:{x:d},backend:t,attrs:{perm:p}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(i),h}return d}/**
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
 */function Nh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,exclusive:r,reverse:c}=s;return eo(Ye.Prod,o,t,a,r,c)}const Eh={kernelName:Ba,backendName:"webgl",kernelFunc:Nh};/**
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
 */function kh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,exclusive:r,reverse:c}=s;return eo(Ye.Sum,o,t,a,r,c)}const Oh={kernelName:Va,backendName:"webgl",kernelFunc:kh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ah(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:a}=e,{size:r,binaryOutput:c}=s;if(o.shape.length===1){const i=t.readSync(o.dataId),u=t.readSync(a.dataId),l=Ps(i,u,a.dtype,a.shape,r);return t.makeTensorInfo([r],a.dtype,l)}else if(o.shape.length===2){const i=t.bufferSync(o),u=t.bufferSync(a),l=Fu(i,u,r,c);return t.makeTensorInfo(l.shape,a.dtype,l.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const Dh={kernelName:Ua,backendName:"webgl",kernelFunc:Ah};/**
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
 */class Ph{constructor(e,t,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockSize:a,dataFormat:r}=s,c=o.shape[0],i=r==="NHWC"?o.shape[1]:o.shape[2],u=r==="NHWC"?o.shape[2]:o.shape[3],l=r==="NHWC"?o.shape[3]:o.shape[1],d=i*a,p=u*a,h=l/(a*a),f=r==="NHWC"?[c,d,p,h]:[c,h,d,p],m=new Ph(f,a,r);return t.runWebGLProgram(m,[o],o.dtype)}const _h={kernelName:Wa,backendName:"webgl",kernelFunc:Fh};/**
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
 */class to{constructor(e,t=!1,s=null,o=!1,a=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=V(this.outputShape.length);const r=e.filterHeight,c=e.filterWidth,i=e.outChannels/e.inChannels;let u="",l="";s&&(o?u=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:a?u=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:u=`
          float activation(float x) {
            ${s}
          }
        `,l="result = activation(result);");const d=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${r}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${c}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${l}
        setOutput(result);
      }
    `}}/**
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
 */class no{constructor(e,t=!1,s=null,o=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=V(this.outputShape.length);const r=e.outChannels/e.inChannels,c=e.padInfo.left,i=e.strideWidth,u=e.dilationWidth,l=e.filterHeight,d=e.filterWidth,p=d;let h=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<d;x++)h+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;h+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let x=0;x<d;x++)h+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;h+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(p+1)/2;x++){const C=x*2;if(h+=`
          xC = xCCorner + ${C*u};
          `,i===1){if(C<d&&(c%2===1?(h+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }
              `,u===1&&C>0?h+=`
                xC${C} = vec4(xTexelC${C-2}.zw, xTexelC${C}.xy);
                `:h+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${C} = vec4(previous.zw, xTexelC${C}.xy);
                  } else {
                    xC${C} = vec4(0.0, 0.0, xTexelC${C}.xy);
                  }
                  `):h+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                xC${C} = xTexelC${C};
                `,C+1<d)){const b=c%2===0?Ut(u):u;u%2===0&&c%2===1||u%2!==0&&c%2!==1?(h+=`
                  xCOffset = xC + imod(pads[1], 2) + ${b};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                    xTexelC${C+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${C+1}.zw = vec2(0.0);
                    }
                    xTexelC${C+1}Ready = 1;
                  }
                  `,u>1?h+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${C+1} = vec4(previous.zw, xTexelC${C+1}.xy);
                    } else {
                     xC${C+1} = vec4(0.0, 0.0, xTexelC${C+1}.xy);
                    }
                    `:h+=`
                    xC${C+1} = vec4(xTexelC${C}.zw, xTexelC${C+1}.xy);
                    `):b===1?h+=`
                    xC${C+1} = xTexelC${C};
                    `:h+=`
                    xCOffset = xC + ${b};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                      xTexelC${C+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${C+1}.zw = vec2(0.0);
                      }
                      xTexelC${C+1}Ready = 1;
                    }

                    xC${C+1} = xTexelC${C+1};
                    `}}else C<d&&(c%2===1?(h+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${C+1}Ready == 0) {
                  xTexelC${C+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${C+1}.zw = vec2(0.0);
                  }
                  xTexelC${C+1}Ready = 1;
                }

                xC${C} = vec4(xTexelC${C}.zw, xTexelC${C+1}.zw);
              `,C+1<d&&(h+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${C+1} = vec4(xTexelC${C+1}.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                  xTexelC${C+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C+1}.zw = vec2(0.);
                  }
                  xTexelC${C+1}Ready = 1;
                }

                xC${C} = vec4(
                  xTexelC${C}.xy, xTexelC${C+1}.xy);
              `,C+1<d&&(h+=`
                  xC${C+1} = vec4(xTexelC${C}.zw, xTexelC${C+1}.zw);
                `)));C<d&&(h+=`
            wTexel = getW(r, ${C}, d1, q);
            dotProd += xC${C} * vec4(wTexel.xz, wTexel.xz);
          `,C+1<d&&(h+=`
              wTexel = getW(r, ${C+1}, d1, q);
              dotProd += xC${C+1} * vec4(wTexel.xz, wTexel.xz);
            `))}h+=`
    }
  `,h+=`
      }
    `;let f="",m="";s&&(o?f=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:a?f=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:f=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${r};
        int q = d2 - d1 * ${r};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${h}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a}=e,{strides:r,pad:c,dilations:i,dimRoundingMode:u}=s;let l=i;l==null&&(l=[1,1]),_(Ze(r,l),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const d=fe(o.shape,a.shape,r,l,c,u,!0);let p;$().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?p=new no(d):p=new to(d);const h=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return t.runWebGLProgram(p,[o,a],"float32",h)}const Bh={kernelName:Ma,backendName:"webgl",kernelFunc:Lh};/**
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
 */class Vh{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,a=e.padInfo.left,r=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${r} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Uh{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,a=e.strideWidth,r=t-1-e.padInfo.top,c=s-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${i}; dm++) {
              int d2 = d1 * ${i} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:a}=e,{strides:r,dilations:c,pad:i,dimRoundingMode:u,filterShape:l}=s,d=fe(o.shape,l,r,c,i,u,!0),p=new Vh(d);return t.runWebGLProgram(p,[o,a],"float32")}const Mh={kernelName:Ga,backendName:"webgl",kernelFunc:Wh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gh(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:a}=e,{strides:r,dilations:c,pad:i,dimRoundingMode:u,inputShape:l}=s,d=fe(l,a.shape,r,c,i,u,!0),p=new Uh(d);return t.runWebGLProgram(p,[o,a],"float32")}const zh={kernelName:za,backendName:"webgl",kernelFunc:Gh};/**
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
 */class Hh{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(n){const{inputs:e,backend:t}=n,{x:s}=e,o=[...s.shape,...s.shape],a=E(s.shape),r=S({inputs:{x:s},backend:t,attrs:{shape:[a]}}),c=new Hh(a),i=t.runWebGLProgram(c,[r],r.dtype),u=S({inputs:{x:i},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),u}const Kh={kernelName:Ha,backendName:"webgl",kernelFunc:Xh};/**
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
 */class jh{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:s,padInfo:o,strideHeight:a,strideWidth:r,filterHeight:c,filterWidth:i,dilationHeight:u,dilationWidth:l}=e,{top:d,left:p}=o;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${r});
      const ivec2 pads = ivec2(${d}, ${p});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${c}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${i}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qh(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a}=e,{strides:r,pad:c,dilations:i}=s,u=Ka(o.shape,a.shape,r,c,"NHWC",i);let l;const d=new jh(u);l=t.runWebGLProgram(d,[o,a],"float32");const p=S({inputs:{x:l},backend:t,attrs:{shape:u.outShape}});return t.disposeIntermediateTensorInfo(l),p}const Yh={kernelName:Xa,backendName:"webgl",kernelFunc:qh};/**
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
 */function Qh(n){const{inputs:e,backend:t,attrs:s}=n,{equation:o}=s,a=e,{allDims:r,summedDims:c,idDims:i}=qa(o,a.length);Ya(r.length,i,a);const{path:u,steps:l}=Qa(c,i),d=l.length;let p=null,h=r.length;const f=[];for(let m=0;m<d;++m){for(const g of l[m]){const{permutationIndices:x,expandDims:C}=Za(h,i[g]);let b;Ja(x)?b=a[g]:(b=M({inputs:{x:a[g]},backend:t,attrs:{perm:x}}),f.push(b));const v=b.shape.slice();for(let R=0;R<C.length;++R)v.splice(C[R],0,1);z(b.shape,v)||(b=S({inputs:{x:b},backend:t,attrs:{shape:v}}),f.push(b)),p===null?p=b:(p=on({inputs:{a:b,b:p},backend:t}),f.push(p))}m<d-1&&(u[m]>=0&&(p=wt({inputs:{x:p},backend:t,attrs:{axis:u[m]-(r.length-h),keepDims:!1}}),f.push(p)),h--)}for(const m of f)m!==p&&t.disposeIntermediateTensorInfo(m);return p}const Zh={kernelName:ja,backendName:"webgl",kernelFunc:Qh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jh="return (x >= 0.0) ? x : (exp(x) - 1.0);",ef=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,tf=A({opSnippet:Jh,packedOpSnippet:ef}),nf={kernelName:er,backendName:"webgl",kernelFunc:tf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sf="return (b >= 0.0) ? a : a * (b + 1.0);",of=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,af=n=>{const{inputs:e,backend:t}=n,{dy:s,y:o}=e,a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ve(of,s.shape,o.shape):new be(sf,s.shape,o.shape);return t.runWebGLProgram(a,[s,o],s.dtype)},rf={kernelName:tr,backendName:"webgl",kernelFunc:af};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cf=`
  return vec4(equal(a, b));
`,uf="return float(a == b);",lf=B({opSnippet:uf,packedOpSnippet:cf,dtype:"bool",cpuKernelImpl:Uu}),df={kernelName:nr,backendName:"webgl",kernelFunc:lf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pf=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${or};
  float a1 = ${ar};
  float a2 = ${rr};
  float a3 = ${ir};
  float a4 = ${cr};
  float a5 = ${ur};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,hf=A({opSnippet:pf}),ff={kernelName:sr,backendName:"webgl",kernelFunc:hf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xf=Ue+`
  return exp(x);
`,mf=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,so=A({opSnippet:xf,packedOpSnippet:mf,cpuKernelImpl:Wu,dtype:"float32"}),gf={kernelName:lr,backendName:"webgl",kernelFunc:so};/**
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
 */function Vt(n){const{inputs:e,attrs:t,backend:s}=n,{dim:o}=t,{input:a}=e,r=a.shape.length,c=a.shape.slice();let i=o;return o<0&&(_(-(r+1)<=o,()=>`Axis must be in the interval [${-(r+1)}, ${r}]`),i=r+o+1),c.splice(i,0,1),S({inputs:{x:a},backend:s,attrs:{shape:c}})}const Cf={kernelName:dr,backendName:"webgl",kernelFunc:Vt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kn="return exp(x) - 1.0;",$f=A({opSnippet:kn,packedOpSnippet:kn,cpuKernelImpl:Mu}),vf={kernelName:pr,backendName:"webgl",kernelFunc:$f};/**
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
 */class On{constructor(e,t,s){this.variableNames=["real","imag"];const o=t[1];this.outputShape=t;const a=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,r=s?`${o}.0`:"1.0";let c;if(e==="real")c="return real * expR - imag * expI;";else if(e==="imag")c="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${a};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${c}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${r};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oo(n,e,t){const s=t.texData.get(n.dataId),o=E(n.shape),a=n.shape[n.shape.length-1],r=o/a,c=S({inputs:{x:n},backend:t,attrs:{shape:[r,a]}}),i=c.shape,u=new On("real",i,e),l=new On("imag",i,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:i},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:i}],p=t.runWebGLProgram(u,d,"float32"),h=t.runWebGLProgram(l,d,"float32"),f=xe({inputs:{real:p,imag:h},backend:t});t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h);const m=S({inputs:{x:f},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(f),m}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(n){const{inputs:e,backend:t}=n,{input:s}=e;return oo(s,!1,t)}const Rf={kernelName:hr,backendName:"webgl",kernelFunc:bf};/**
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
 */class Sf{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function st(n){const{backend:e,attrs:t}=n,{shape:s,value:o}=t;let{dtype:a}=t;if(a=a||xr(o),a==="string"){const r=mr(a,E(s));return r.fill(o),e.makeTensorInfo(s,a,r)}else{const r=new Sf(s,o),c=[[o]];return e.runWebGLProgram(r,[],a,c)}}const yf={kernelName:fr,backendName:"webgl",kernelFunc:st};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wf{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tf={kernelName:gr,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,s=e,o=new wf(t.shape);return s.runWebGLProgram(o,[t],t.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const An="return floor(x);",If=A({opSnippet:An,packedOpSnippet:An,cpuKernelImpl:Gu}),Nf={kernelName:Cr,backendName:"webgl",kernelFunc:If};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ef=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,kf=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,Of=B({opSnippet:Ef,packedOpSnippet:kf,dtype:"int32"}),Af={kernelName:$r,backendName:"webgl",kernelFunc:Of};/**
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
 */class Df{constructor(e){this.variableNames=["A"];const t=G(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
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
 */class Pf{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=G(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}/**
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
 */const Ff={kernelName:vr,backendName:"webgl",kernelFunc:_f};let Ee,kt=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function _f(n){const{inputs:e,backend:t,attrs:s}=n;let{pixels:o}=e;const{numChannels:a}=s,r=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,c=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[i,u]=r?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=[u,i],d=[u,i,a];if(c||r){const m=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Ee==null||m!==kt)&&(kt=m,Ee=document.createElement("canvas").getContext("2d",{willReadFrequently:kt})),Ee.canvas.width=i,Ee.canvas.height=u,Ee.drawImage(o,0,0,i,u),o=Ee.canvas}const p=t.makeTensorInfo(l,"int32");t.texData.get(p.dataId).usage=Y.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(p.dataId),o);const h=$().getBool("WEBGL_PACK")?new Pf(d):new Df(d),f=t.runWebGLProgram(h,[p],"int32");return t.disposeData(p.dataId),f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a,bias:r,preluActivationWeights:c}=e,{strides:i,pad:u,dataFormat:l,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=s,m=bt(l),g=fe(o.shape,a.shape,i,d,u,p,!1,m);let x;const C=[],b=r!=null,v=c!=null,R=h==="leakyrelu",N=()=>{const w=[o,a],O=(k,P)=>{if(P==="NCHW"&&k.shape.length===1&&k.shape[0]!==1){const F=S({inputs:{x:k},backend:t,attrs:{shape:[k.shape[0],1,1]}});return C.push(F),F}return k};if(b&&w.push(O(r,l)),v&&w.push(O(c,l)),R){const k=t.makeTensorInfo([],"float32",Qe(f,"float32"));w.push(k),C.push(k)}return w};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Zs({x:o,filter:a,convInfo:g,backend:t,bias:r,activation:h,preluActivationWeights:c,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){const w=h?je(h,!0):null,O=new Qs(g,b,w,v,R),k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],P=N();x=t.runWebGLProgram(O,P,"float32",k)}else if($().getBool("WEBGL_CONV_IM2COL"))x=Js({x:o,filter:a,convInfo:g,backend:t,bias:r,activation:h,preluActivationWeights:c,leakyreluAlpha:f});else{const w=h?je(h,!1):null,O=new Ys(g,b,w,v,R),k=N();x=t.runWebGLProgram(O,k,"float32")}const I=S({inputs:{x},backend:t,attrs:{shape:g.outShape}});return C.push(x),C.forEach(w=>t.disposeIntermediateTensorInfo(w)),I}const Bf={kernelName:br,backendName:"webgl",kernelFunc:Lf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:a,bias:r,preluActivationWeights:c}=e,{strides:i,pad:u,dilations:l,dimRoundingMode:d,activation:p,leakyreluAlpha:h}=s,f=[];let m=l;m==null&&(m=[1,1]),_(Ze(i,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${m}'`);const g=fe(o.shape,a.shape,i,m,u,d,!0),x=$().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,C=p?je(p,x):null,b=[o,a],v=r!=null,R=c!=null,N=p==="leakyrelu";if(v&&b.push(r),R&&b.push(c),N){const k=t.makeTensorInfo([],"float32",Qe(h,"float32"));b.push(k),f.push(k)}let I;x?I=new no(g,v,C,R,N):I=new to(g,v,C,R,N);const w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],O=t.runWebGLProgram(I,b,"float32",w);return f.forEach(k=>t.disposeIntermediateTensorInfo(k)),O}const Uf={kernelName:Rr,backendName:"webgl",kernelFunc:Vf};class Wf{constructor(e,t,s,o){this.sliceDim=e,this.strides=t,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const a=D(s.length);let r=`
    int index;`;for(let c=0;c<this.sliceDim;c++)r+=`
          index = round(getIndices(coords[0], ${c}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[c]};
          flattenIndex += index * ${this.strides[c]};`;this.userCode=`
         void main() {
          ${a} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${r}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(n){const{inputs:e,backend:t}=n,{params:s,indices:o}=e,a=o.shape,r=a[a.length-1],c=E(s.shape),[i,u,l,d]=yr(s,o),p=S({inputs:{x:o},backend:t,attrs:{shape:[u,r]}}),h=S({inputs:{x:s},backend:t,attrs:{shape:[E(s.shape)/l,l]}});if(t.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=t.readSync(o.dataId),C=t.bufferSync(s),b=zu(x,C,s.dtype,u,r,l,d,s.shape,c);return t.makeTensorInfo(i,s.dtype,b.values)}const f=new Wf(r,d,[u,l],s.shape),m=t.runWebGLProgram(f,[h,p],h.dtype),g=S({inputs:{x:m},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),g}const Gf={kernelName:Sr,backendName:"webgl",kernelFunc:Mf};/**
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
 */class zf{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const s=D(this.rank),o=Hf(e);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function Hf(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${t[o]}`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ao(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,indices:a}=e,{axis:r,batchDims:c}=s,i=K(r,o.shape)[0];if($().get("DEBUG")){const C=t.readSync(a.dataId),b=o.shape[i];for(let v=0;v<C.length;++v){const R=C[v];_(R<=b-1&&R>=0,()=>`GatherV2: the index value ${R} is not in [0, ${b-1}]`)}}const u=Tr(o,a,i,c),l=E(a.shape),d=[],p=S({inputs:{x:o},backend:t,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),h=S({inputs:{x:a},backend:t,attrs:{shape:[u.batchSize,l/u.batchSize]}});d.push(p),d.push(h);const f=[u.batchSize,u.outerSize,l/u.batchSize,u.sliceSize];if(t.shouldExecuteOnCPU([o,a])||o.dtype==="string"){const C=t.bufferSync(h),b=t.bufferSync(p),v=Hu(b,C,f);return d.forEach(R=>t.disposeIntermediateTensorInfo(R)),t.makeTensorInfo(u.outputShape,v.dtype,v.values)}const m=new zf(p.shape,f),g=t.runWebGLProgram(m,[p,h],p.dtype);d.push(g);const x=S({inputs:{x:g},backend:t,attrs:{shape:u.outputShape}});return d.forEach(C=>t.disposeIntermediateTensorInfo(C)),x}const Xf={kernelName:wr,backendName:"webgl",kernelFunc:ao};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kf="return float(a > b);",jf=`
  return vec4(greaterThan(a, b));
`,qf=B({opSnippet:Kf,packedOpSnippet:jf,cpuKernelImpl:Xu,dtype:"bool"}),Yf={kernelName:Ir,backendName:"webgl",kernelFunc:qf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qf="return float(a >= b);",Zf=`
  return vec4(greaterThanEqual(a, b));
`,Jf=B({opSnippet:Qf,packedOpSnippet:Zf,dtype:"bool",cpuKernelImpl:Ku}),ex={kernelName:Nr,backendName:"webgl",kernelFunc:Jf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tx(n){const{inputs:e,backend:t}=n,{input:s}=e;return oo(s,!0,t)}const nx={kernelName:Er,backendName:"webgl",kernelFunc:tx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sx="return float(!isnan(x) && !isinf(x));",ox=A({opSnippet:sx,dtype:"bool"}),ax={kernelName:kr,backendName:"webgl",kernelFunc:ox};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rx="return float(isinf(x));",ix=A({opSnippet:rx,dtype:"bool"}),cx={kernelName:Or,backendName:"webgl",kernelFunc:ix};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ux="return float(isnan(x));",lx=A({opSnippet:ux,dtype:"bool"}),dx={kernelName:Ar,backendName:"webgl",kernelFunc:lx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const px="return float(a < b);",hx=`
  return vec4(lessThan(a, b));
`,fx=B({opSnippet:px,packedOpSnippet:hx,cpuKernelImpl:ju,dtype:"bool"}),xx={kernelName:Dr,backendName:"webgl",kernelFunc:fx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mx="return float(a <= b);",gx=`
  return vec4(lessThanEqual(a, b));
`,Cx=B({opSnippet:mx,packedOpSnippet:gx,cpuKernelImpl:qu,dtype:"bool"}),$x={kernelName:Pr,backendName:"webgl",kernelFunc:Cx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vx(n){const{backend:e,attrs:t}=n,{start:s,stop:o,num:a}=t,r=Yu(s,o,a);return e.makeTensorInfo([r.length],"float32",r)}const bx={kernelName:Fr,backendName:"webgl",kernelFunc:vx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rx=Ue+`
  return x < 0.0 ? 0./0. : log(x);
`,Sx=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,yx=A({opSnippet:Rx,packedOpSnippet:Sx,cpuKernelImpl:Qu}),wx={kernelName:_r,backendName:"webgl",kernelFunc:yx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tx=Ue+`
  return log(1.0 + x);
`,Ix=A({opSnippet:Tx}),Nx={kernelName:Lr,backendName:"webgl",kernelFunc:Ix};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ex="return float(a >= 1.0 && b >= 1.0);",kx=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,Ox=B({opSnippet:Ex,packedOpSnippet:kx,dtype:"bool"}),Ax={kernelName:Br,backendName:"webgl",kernelFunc:Ox};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dx="return float(!(x >= 1.0));",Px=A({opSnippet:Dx}),Fx={kernelName:Vr,backendName:"webgl",kernelFunc:Px};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _x="return float(a >= 1.0 || b >= 1.0);",Lx=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,Bx=B({opSnippet:_x,packedOpSnippet:Lx,dtype:"bool"}),Vx={kernelName:Ur,backendName:"webgl",kernelFunc:Bx};/**
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
 */class Ux{constructor(e,t,s,o,a){this.variableNames=["x"],this.outputShape=[];const r=t,c=e[3]-1;this.outputShape=e;let i;const u=`float(${s}) + float(${o}) * sum`;a===.5?i=`inversesqrt(${u})`:a===1?i=`1.0/(${u})`:i=`exp(log(${u}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${r}; j <= ${r}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${c}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${i};
        setOutput(val);
      }
    `}}/**
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
 */class Wx{constructor(e,t,s,o,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const r=t,c=e[3]-1;this.outputShape=e;let i;const u=`float(${s}) + float(${o}) * sum`;a===.5?i=`inversesqrt(${u})`:a===1?i=`1.0/(${u})`:i=`exp(log(${u}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${r};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${r}; j <= ${r}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${c}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${i};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mx=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{depthRadius:a,bias:r,alpha:c,beta:i}=s,u=$().getBool("WEBGL_PACK_NORMALIZATION")?new Wx(o.shape,a,r,c,i):new Ux(o.shape,a,r,c,i);return t.runWebGLProgram(u,[o],o.dtype)},Gx={kernelName:Wr,backendName:"webgl",kernelFunc:Mx};/**
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
 */class zx{constructor(e,t,s,o,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=s,this.alpha=o,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${a})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${a});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hx=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o,y:a,dy:r}=e,{depthRadius:c,bias:i,alpha:u,beta:l}=s,d=new zx(o.shape,c,i,u,l);return t.runWebGLProgram(d,[o,a,r],o.dtype)},Xx={kernelName:Mr,backendName:"webgl",kernelFunc:Hx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kx(n,e,t,s){const o=E(e),r=E(n.shape)/o,c=S({inputs:{x:n},attrs:{shape:[r,o]},backend:s}),i=Te(c,n.dtype,"max",s),u=S({inputs:{x:i},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(i),u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reductionIndices:a,keepDims:r}=s,c=o.shape.length,i=K(a,o.shape);let u=i;const l=ne(u,c),d=l!=null,p=t.shouldExecuteOnCPU([o]);let h=o;if(d){if(p){const b=t.texData.get(h.dataId).values,v=new Array(c);for(let I=0;I<v.length;I++)v[I]=o.shape[l[I]];const R=nn(b,o.shape,o.dtype,l,v);h=t.makeTensorInfo(v,o.dtype);const N=t.texData.get(h.dataId);N.values=R}else h=yt(o,l,t);u=se(u.length,c)}re("max",u,c);const[f,m]=pe(h.shape,u);let g=f;r&&(g=he(f,i));let x;if(p){const b=t.texData.get(h.dataId).values,v=Zu(b,E(m),g,o.dtype);x=t.makeTensorInfo(g,o.dtype);const R=t.texData.get(x.dataId);R.values=v}else x=Kx(h,m,g,t);return d&&t.disposeIntermediateTensorInfo(h),x}const jx={kernelName:Gr,backendName:"webgl",kernelFunc:ro};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qx=sn+`
  return max(a, b);
`,Yx=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+we+`
  return result;
`,Qx=B({opSnippet:qx,packedOpSnippet:Yx,cpuKernelImpl:Ju}),Zx={kernelName:zr,backendName:"webgl",kernelFunc:Qx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jx(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;Pe(o,"maxPool");const{filterSize:a,strides:r,pad:c,dimRoundingMode:i}=s,u=1;_(Ze(r,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${u}'`);const l=Je(o.shape,a,r,u,c,i);if(l.filterWidth===1&&l.filterHeight===1&&z(l.inShape,l.outShape))return X({inputs:{x:o},backend:t});const d=new qe(l,"max",!1);return t.runWebGLProgram(d,[o],o.dtype)}const em={kernelName:Hr,backendName:"webgl",kernelFunc:Jx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:a,strides:r,pad:c,dataFormat:i,dimRoundingMode:u}=s,l=[1,1,1],d=vt(o.shape,a,r,l,c,u,i),p=new an(d,"max",!1);return t.runWebGLProgram(p,[o],o.dtype)}const nm={kernelName:Xr,backendName:"webgl",kernelFunc:tm};/**
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
 */class sm{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,a=e.effectiveFilterHeight,r=e.effectiveFilterWidth,c=a-1-e.padInfo.top,i=r-1-e.padInfo.left,u=a*r-1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${a};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${r} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class om{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,a=e.dilationDepth,r=e.dilationHeight,c=e.dilationWidth,i=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,d=i-1-e.padInfo.front,p=u-1-e.padInfo.top,h=l-1-e.padInfo.left,f=i*u*l-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${p}, ${h});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${i};
           wD += ${a}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${r}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${f} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:a}=e,r=a,{filterSize:c,strides:i,pad:u,dimRoundingMode:l}=s,d=[1,1,1],p=vt(r.shape,c,i,d,u,l),h=new an(p,"max",!0),f=t.runWebGLProgram(h,[r],r.dtype),m=new om(p),g=t.runWebGLProgram(m,[o,f],r.dtype);return t.disposeIntermediateTensorInfo(f),g}const rm={kernelName:Kr,backendName:"webgl",kernelFunc:am};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:a,output:r}=e,c=a;Pe([a,r],"maxPoolGrad");const{filterSize:i,strides:u,pad:l,dimRoundingMode:d}=s,p=Je(c.shape,i,u,1,l,d),h=!0,f=new qe(p,"max",h),m=t.runWebGLProgram(f,[c],c.dtype),g=new sm(p),x=t.runWebGLProgram(g,[o,m],c.dtype);return t.disposeIntermediateTensorInfo(m),x}const cm={kernelName:jr,backendName:"webgl",kernelFunc:im};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(n,e,t,s){let o=new qe(t,"max",!1);const a=s.runWebGLProgram(o,[n],"float32");o=new qe(t,"max",!0,!0,e);const r=s.runWebGLProgram(o,[n],"float32");return[a,r]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lm={kernelName:qr,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:o,strides:a,pad:r,includeBatchInIndex:c}=e,i=t;_(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const u=[1,1];_(Ze(a,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${u}'`);const l=Je(s.shape,o,a,u,r),[d,p]=um(s,c,l,i);return[d,p]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(n,e,t,s){const o=E(e),r=E(n.shape)/o,c=S({inputs:{x:n},attrs:{shape:[r,o]},backend:s}),i=Te(c,"float32","mean",s),u=S({inputs:{x:i},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(i),u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pm={kernelName:Yr,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{keepDims:o,axis:a}=e,r=t,c=s.shape.length,i=K(a,s.shape);let u=i;const l=ne(u,c),d=l!=null,p=r.shouldExecuteOnCPU([s]),h=[];let f=s;if(d){if(p){const v=r.texData.get(f.dataId).values,R=new Array(c);for(let w=0;w<R.length;w++)R[w]=s.shape[l[w]];const N=nn(v,s.shape,s.dtype,l,R);f=r.makeTensorInfo(R,s.dtype);const I=r.texData.get(f.dataId);I.values=N}else f=yt(s,l,r);h.push(f),u=se(u.length,c)}re("sum",u,c);const[m,g]=pe(f.shape,u);let x=m;o&&(x=he(m,i));const C=dm(f,g,x,r);for(const b of h)r.disposeIntermediateTensorInfo(b);return C}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,keepDims:r}=s,c=o.shape.length,i=K(a,o.shape);let u=i;const l=ne(u,c);let d=o;l!=null&&(d=M({inputs:{x:o},backend:t,attrs:{perm:l}}),u=se(u.length,o.shape.length)),re("min",u,c);const[p,h]=pe(d.shape,u),f=E(h),m=S({inputs:{x:d},backend:t,attrs:{shape:[-1,f]}}),g=Te(m,m.dtype,"min",t);let x;if(r){const C=he(p,i);x=S({inputs:{x:g},backend:t,attrs:{shape:C}})}else x=S({inputs:{x:g},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),l!=null&&t.disposeIntermediateTensorInfo(d),x}const fm={kernelName:Qr,backendName:"webgl",kernelFunc:hm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xm=sn+`
  return min(a, b);
`,mm=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+we+`
  return result;
`,gm=B({opSnippet:xm,packedOpSnippet:mm,cpuKernelImpl:el}),Cm={kernelName:Zr,backendName:"webgl",kernelFunc:gm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $m{constructor(e,t,s){this.variableNames=["x"],this.outputShape=t.map((l,d)=>l[0]+e[d]+l[1]);const o=e.length,a=D(o),r=t.map(l=>l[0]).join(","),c=t.map((l,d)=>l[0]+e[d]).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),u=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${r};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${r});
      ${a} end = ${a}(${c});

      void main() {
        ${a} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${a} coords = outC - start;
        setOutput(getX(${i}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vm{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((f,m)=>f[0]+e[m]+f[1]);const o=e.length,a=D(o),r=t.map(f=>f[0]).join(","),c=t.map((f,m)=>f[0]+e[m]).join(","),i=W("rc",o),u=W("source",o),l=`${i[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${u.slice(-2).join()})`,p=s==="reflect"?0:1;let h="";if(o===1){const f=`
        ${a} source = rc;
        if (source < start) {
          source = start * 2 - source - ${p};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${p};
        }
        source -= start;
      `;h=`
        ${a} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${u.join()}), ${d});
        ${i[o-1]} += 1;
        if(${l}) {
          ${f}
          result[1] = getChannel(getX(${u.join()}), ${d});
        }
      `}else{const f=`
        ${a} source = rc;
        ${a} lt = ${a}(lessThan(source, start));
        ${a} gte = ${a}(greaterThanEqual(source, end));
        ${a} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${p}) +
                gte * ((end - 1) * 2 - source + ${p});
        source -= start;
      `;h=`
        ${a} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${u.join()}), ${d});
        ${i[o-1]} += 1;
        if(${l}) {
          ${f}
          result[1] = getChannel(getX(${u.join()}), ${d});
        }
        rc = outputLoc;
        ${i[o-2]} += 1;
        if(${i[o-2]} < ${this.outputShape[o-2]}) {
          ${f}
          result[2] = getChannel(getX(${u.join()}), ${d});
          ${i[o-1]} += 1;
          if(${l}) {
            ${f}
            result[3] = getChannel(getX(${u.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${a} start = ${a}(${r});
      const ${a} end = ${a}(${c});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bm=({inputs:n,backend:e,attrs:t})=>{const{x:s}=n,{paddings:o,mode:a}=t,r=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vm(s.shape,o,a):new $m(s.shape,o,a);return e.runWebGLProgram(r,[s],s.dtype)},Rm={kernelName:Jr,backendName:"webgl",kernelFunc:bm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sm=`if (b == 0.0) return NAN;
  return mod(a, b);`,ym=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+we+`
  return result;
`,wm=B({opSnippet:Sm,packedOpSnippet:ym}),Tm={kernelName:ei,backendName:"webgl",kernelFunc:wm};/**
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
 */class Im{constructor(e,t,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nm=`
if (a == b) {
  return 1.0;
};
return a / b;`,Em=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,io=B({opSnippet:Nm,packedOpSnippet:Em,checkOutOfBounds:!0}),km={kernelName:ti,backendName:"webgl",kernelFunc:io};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dn="return a - b;",co=B({opSnippet:Dn,packedOpSnippet:Dn,supportsComplex:!0,cpuKernelImpl:bl}),Om={kernelName:ni,backendName:"webgl",kernelFunc:co};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uo(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{dim:a}=s,r=K([a],o.shape),c=ro({inputs:{x:o},backend:t,attrs:{reductionIndices:r,keepDims:!1}}),i=he(c.shape,r),u=S({inputs:{x:c},backend:t,attrs:{shape:i}}),l=co({inputs:{a:o,b:u},backend:t}),d=so({inputs:{x:l},backend:t}),p=wt({inputs:{x:d},backend:t,attrs:{axis:r,keepDims:!1}}),h=S({inputs:{x:p},backend:t,attrs:{shape:i}}),f=io({inputs:{a:d,b:h},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),f}const Am={kernelName:si,backendName:"webgl",kernelFunc:uo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{numSamples:a,seed:r,normalized:c}=s,i=c?o:uo({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),u=i.shape[0],l=i.shape[1],d=new Im(u,l,a),p=[[r]],h=t.runWebGLProgram(d,[i],"int32",p);return c||t.disposeIntermediateTensorInfo(i),h}const Pm={kernelName:oi,backendName:"webgl",kernelFunc:Dm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fm=J+`
  return -x;
`,_m=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function Lm(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])){const a=t.texData.get(s.dataId),[r,c]=nl(a.values,s.shape,s.dtype);return t.makeTensorInfo(c,s.dtype,r)}let o;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new de(s.shape,_m):o=new ae(s.shape,Fm),t.runWebGLProgram(o,[s],s.dtype)}const Bm={kernelName:ai,backendName:"webgl",kernelFunc:Lm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vm=ii;function Um(n){$t("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:a}=e,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i}=s,u=t.readSync(o.dataId),l=t.readSync(a.dataId),{selectedIndices:d}=Vm(u,l,r,c,i);return t.makeTensorInfo([d.length],"int32",new Int32Array(d))}const Wm={kernelName:ri,backendName:"webgl",kernelFunc:Um};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mm=ui;function Gm(n){$t("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:a}=e,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i,padToMaxOutputSize:u}=s,l=t.readSync(o.dataId),d=t.readSync(a.dataId),{selectedIndices:p,validOutputs:h}=Mm(l,d,r,c,i,u);return[t.makeTensorInfo([p.length],"int32",new Int32Array(p)),t.makeTensorInfo([],"int32",new Int32Array([h]))]}const zm={kernelName:ci,backendName:"webgl",kernelFunc:Gm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hm=di;function Xm(n){$t("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:a}=e,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i,softNmsSigma:u}=s,l=t.readSync(o.dataId),d=t.readSync(a.dataId),p=r,h=c,f=i,m=u,{selectedIndices:g,selectedScores:x}=Hm(l,d,p,h,f,m);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const Km={kernelName:li,backendName:"webgl",kernelFunc:Xm};/**
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
 */class jm{constructor(e,t,s,o){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qm=n=>{const{inputs:e,backend:t,attrs:s}=n,{indices:o}=e,{dtype:a,depth:r,onValue:c,offValue:i}=s,u=E(o.shape),l=new jm(u,r,c,i),d=S({inputs:{x:o},backend:t,attrs:{shape:[u]}}),p=t.runWebGLProgram(l,[d],a);t.disposeIntermediateTensorInfo(d);const h=[...o.shape,r],f=S({inputs:{x:p},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(p),f},Ym={kernelName:pi,backendName:"webgl",kernelFunc:qm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ct(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="complex64"){const o=nt({inputs:{input:s},backend:t}),a=Ct({inputs:{x:o},backend:t}),r=Tt({inputs:{input:s},backend:t}),c=Ct({inputs:{x:r},backend:t}),i=xe({inputs:{real:a,imag:c},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(c),i}else return st({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:t})}const Qm={kernelName:hi,backendName:"webgl",kernelFunc:Ct};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lo(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=nt({inputs:{input:s},backend:t}),a=lo({inputs:{x:o},backend:t}),r=Tt({inputs:{input:s},backend:t}),c=Ct({inputs:{x:r},backend:t}),i=xe({inputs:{real:a,imag:c},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(c),i}else return st({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:t})}const Zm={kernelName:fi,backendName:"webgl",kernelFunc:lo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s;if(e.length===1)return Vt({inputs:{input:e[0]},backend:t,attrs:{dim:o}});const a=e[0].shape,r=e[0].dtype;e.forEach(l=>{mi(a,l.shape,"All tensors passed to stack must have matching shapes"),_(r===l.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],i=e.map(l=>{const d=Vt({inputs:{input:l},backend:t,attrs:{dim:o}});return c.push(d),d}),u=qs({inputs:i,backend:t,attrs:{axis:o}});return c.forEach(l=>t.disposeIntermediateTensorInfo(l)),u}const eg={kernelName:xi,backendName:"webgl",kernelFunc:Jm};/**
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
 */class tg{constructor(e,t,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((u,l)=>u[0]+e[l]+u[1]);const o=e.length,a=D(o),r=t.map(u=>u[0]).join(","),c=t.map((u,l)=>u[0]+e[l]).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${r};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${r});
      ${a} end = ${a}(${c});

      void main() {
        ${a} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${a} coords = outC - start;
          setOutput(getX(${i}));
        }
      }
    `}}/**
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
 */class ng{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((m,g)=>m[0]+e[g]+m[1]);const o=e.length,a=D(o),r=t.map(m=>m[0]).join(","),c=t.map((m,g)=>m[0]+e[g]).join(","),i=W("rc",o),u=W("source",o),l=`${i[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${u.slice(-2).join()})`,p=[`${a} rc = outputLoc;`,`${i[o-1]} += 1;
       if(${l}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${i[o-2]} += 1;
       if(${i[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${i[o-1]} += 1;
         if(${l}) {`],h=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let m=0,g=o===1?2:4;m<g;m++)f+=`
        ${p[m]}
        if (${h}) {
          result[${m}] = float(value);
        } else {
          ${a} source = rc - start;
          result[${m}] = getChannel(getX(${u.join()}), ${d});
        }
      `;f+=o===1?"} ":"}}",this.userCode=`
      const ${a} start = ${a}(${r});
      const ${a} end = ${a}(${c});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const po=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{paddings:a,constantValue:r}=s;if(E(o.shape)===0){const u=a.map((l,d)=>l[0]+o.shape[d]+l[1]);return st({backend:t,attrs:{shape:u,value:r,dtype:o.dtype}})}const c=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ng(o.shape,a,r):new tg(o.shape,a,r),i=[[r]];return t.runWebGLProgram(c,[o],o.dtype,i)},sg={kernelName:gi,backendName:"webgl",kernelFunc:po};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const og=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,ag=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+we+`
  return result;
`,rg=B({opSnippet:og,packedOpSnippet:ag}),ig={kernelName:Ci,backendName:"webgl",kernelFunc:rg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:a,keepDims:r}=s,c=o.shape.length,i=[],u=K(a,o.shape);let l=u;const d=ne(l,c);let p=o;d!=null&&(p=M({inputs:{x:o},backend:t,attrs:{perm:d}}),l=se(l.length,c),i.push(p)),re("prod",l,c);let h;if(t.shouldExecuteOnCPU([p])){const f=t.texData.get(p.dataId).values,{outVals:m,outShape:g,outDtype:x}=ol(p.shape,p.dtype,f,l);h=t.makeTensorInfo(g,x,m)}else{const[f,m]=pe(p.shape,l),g=E(m),x=S({inputs:{x:p},backend:t,attrs:{shape:[-1,g]}}),C=Gt(o.dtype),b=Te(x,C,"prod",t);h=S({inputs:{x:b},backend:t,attrs:{shape:f}}),i.push(x),i.push(b)}if(r){i.push(h);const f=he(h.shape,u);h=S({inputs:{x:h},backend:t,attrs:{shape:f}})}return i.forEach(f=>t.disposeIntermediateTensorInfo(f)),h}const ug={kernelName:$i,backendName:"webgl",kernelFunc:cg};/**
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
 */function lg(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:a,indices:r}=e,{outputRaggedRank:c}=s,i=o.map(x=>t.readSync(x.dataId)),u=o.map(x=>x.shape),l=t.readSync(a.dataId),d=t.readSync(r.dataId),[p,h,f]=al(i,u,l,a.shape,a.dtype,d,r.shape,c),m=p.map(x=>t.makeTensorInfo([x.length],"int32",x)),g=t.makeTensorInfo(f,a.dtype,h);return m.concat([g])}const dg={kernelName:vi,backendName:"webgl",kernelFunc:lg};/**
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
 */function pg(n){const{inputs:e,backend:t}=n,{starts:s,limits:o,deltas:a}=e,r=t.readSync(s.dataId),c=t.readSync(o.dataId),i=t.readSync(a.dataId),[u,l]=rl(r,s.shape,s.dtype,c,o.shape,i,a.shape),d=t.makeTensorInfo([u.length],"int32",u),p=t.makeTensorInfo([l.length],s.dtype,l);return[d,p]}const hg={kernelName:bi,backendName:"webgl",kernelFunc:pg};/**
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
 */function fg(n){const{inputs:e,backend:t,attrs:s}=n,{shape:o,values:a,defaultValue:r,rowPartitionTensors:c}=e,{rowPartitionTypes:i}=s,u=t.readSync(o.dataId),l=t.readSync(a.dataId),d=t.readSync(r.dataId),p=c.map(g=>t.readSync(g.dataId)),h=c.map(g=>g.shape),[f,m]=il(u,o.shape,l,a.shape,a.dtype,d,r.shape,p,h,i);return t.makeTensorInfo(f,a.dtype,m)}const xg={kernelName:Ri,backendName:"webgl",kernelFunc:fg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ho=n=>{const{backend:e,attrs:t}=n,{start:s,stop:o,step:a,dtype:r}=t,c=cl(s,o,a,r);return e.makeTensorInfo([c.length],r,c)},mg={kernelName:Si,backendName:"webgl",kernelFunc:ho};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gg="return 1.0 / x;",Cg=A({opSnippet:gg}),$g={kernelName:yi,backendName:"webgl",kernelFunc:Cg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vg=J+`
  return (x < 0.0) ? 0.0 : x;
`,bg=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rg=A({opSnippet:vg,packedOpSnippet:bg}),Sg={kernelName:wi,backendName:"webgl",kernelFunc:Rg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yg=J+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,wg=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Tg=A({opSnippet:yg,packedOpSnippet:wg}),Ig={kernelName:Ti,backendName:"webgl",kernelFunc:Tg};/**
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
 */class Ng{constructor(e,t,s,o,a){this.variableNames=["A"],this.outputShape=[];const[r,c,i,u]=e;this.outputShape=[r,t,s,u];const l=[o&&t>1?c-1:c,o&&s>1?i-1:i],d=[o&&t>1?t-1:t,o&&s>1?s-1:s];let p;a?p="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/d[0]},
          ${l[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${i}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${p};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
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
 */class Eg{constructor(e,t,s,o,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[r,c,i,u]=e;this.outputShape=[r,t,s,u];const l=[o&&t>1?c-1:c,o&&s>1?i-1:i],d=[o&&t>1?t-1:t,o&&s>1?s-1:s];let p;a?p="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/d[0]},
          ${l[1]/d[1]},
          ${l[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${i}.0,
                                     ${i}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${p};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:a,halfPixelCenters:r,size:c}=s,[i,u]=c,l=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Eg(o.shape,i,u,a,r):new Ng(o.shape,i,u,a,r);return t.runWebGLProgram(l,[o],"float32")}const Og={kernelName:Ii,backendName:"webgl",kernelFunc:kg};/**
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
 */class Ag{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,a]=t,[,r,c]=e,i=[s&&r>1?o-1:o,s&&c>1?a-1:a],u=[s&&r>1?r-1:r,s&&c>1?c-1:c],l=i[0]/u[0],d=i[1]/u[1],p=1/l,h=1/d,f=Math.ceil(p)*2+2,m=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${d});

        const float invHeightScale = float(${p});
        const float invWidthScale = float(${h});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${r}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${a-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:a}=e,{alignCorners:r}=s,c=new Ag(a.shape,o.shape,r);return t.runWebGLProgram(c,[a],a.dtype)}const Pg={kernelName:Ni,backendName:"webgl",kernelFunc:Dg};/**
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
 */class Fg{constructor(e,t,s,o,a){this.variableNames=["A"],this.outputShape=[];const[r,c,i,u]=e;this.outputShape=[r,t,s,u];const l=[o&&t>1?c-1:c,o&&s>1?i-1:i],d=[o&&t>1?t-1:t,o&&s>1?s-1:s],p=o?"0.5":"0.0";let h;a?h="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/d[0]},
          ${l[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${i}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${p})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
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
 */class _g{constructor(e,t,s,o,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[r,c,i,u]=e;this.outputShape=[r,t,s,u];const l=[o&&t>1?c-1:c,o&&s>1?i-1:i],d=[o&&t>1?t-1:t,o&&s>1?s-1:s],p=o?"0.5":"0.0";let h;a?h="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/d[0]},
          ${l[1]/d[1]},
          ${l[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${i}.0,
                                     ${i}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${p})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lg(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:a,halfPixelCenters:r,size:c}=s,[i,u]=c,l=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new _g(o.shape,i,u,a,r):new Fg(o.shape,i,u,a,r);return t.runWebGLProgram(l,[o],o.dtype)}const Bg={kernelName:Ei,backendName:"webgl",kernelFunc:Lg};/**
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
 */class Vg{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,a]=t,[,r,c]=e,i=[s&&r>1?o-1:o,s&&c>1?a-1:a],u=[s&&r>1?r-1:r,s&&c>1?c-1:c],l=i[0]/u[0],d=i[1]/u[1],p=1/l,h=1/d,f=Math.ceil(p)*2+2,m=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${d});

        const float invHeightScale = float(${p});
        const float invWidthScale = float(${h});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${r}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float sourceFracRow =
              float(${i[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${i[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${a}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:a}=e,{alignCorners:r}=s,c=new Vg(a.shape,o.shape,r);return t.runWebGLProgram(c,[a],a.dtype)}const Wg={kernelName:ki,backendName:"webgl",kernelFunc:Ug};/**
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
 */class Mg{constructor(e,t){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const o=c=>t.indexOf(c)!==-1&&e[c]!==1?`${e[c]} - coords[${c}] - 1`:`coords[${c}]`,a=e.map((c,i)=>o(i)).join(","),r=D(s);this.userCode=`
      void main() {
        ${r} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}/**
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
 */class Gg{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const o=W("rc",s),a=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,r=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,c=D(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${a}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${c} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${i(o.slice())};
          if(${a}){
            result.g = ${u(o.slice())};
          }
          if(${r}) {
            result.b = ${l(o.slice())};
            if(${a}) {
              result.a = ${d(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function i(f){return p(f)}function u(f){return f[s-1]="("+f[s-1]+" + 1)",p(f)}function l(f){return f[s-2]="("+f[s-2]+" + 1)",p(f)}function d(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",p(f)}function p(f){const m=e.map((C,b)=>h(b,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function h(f,m){return t.indexOf(f)!==-1&&e[f]!==1?`${e[f]} - ${m[f]} - 1`:`${m[f]}`}}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dims:a}=s,r=o.shape.length,c=K(a,o.shape);if(r===0)return X({inputs:{x:o},backend:t});const i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Gg(o.shape,c):new Mg(o.shape,c);return t.runWebGLProgram(i,[o],o.dtype)}const Hg={kernelName:Oi,backendName:"webgl",kernelFunc:zg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xg{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],o=e[2];this.outputShape=e;let a="";typeof t=="number"?a=`float outputValue = ${t.toFixed(2)};`:a=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${a}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kg={kernelName:Ai,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:o,fillValue:a,center:r}=e,c=t,i=new Xg(s.shape,a),[u,l]=Di(r,s.shape[1],s.shape[2]),d=[[u,l,Math.sin(o),Math.cos(o)]];return c.runWebGLProgram(i,[s],s.dtype,d)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jg=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,qg=A({opSnippet:jg}),Yg={kernelName:Pi,backendName:"webgl",kernelFunc:qg};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qg="return inversesqrt(x);",Zg=A({opSnippet:Qg,cpuKernelImpl:ul}),Jg={kernelName:Fi,backendName:"webgl",kernelFunc:Zg};/**
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
 */class rn{constructor(e,t,s,o,a,r,c=!0,i=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=r;const u=D(a.length),l=D(r.length);let d="";s===1?d="i":s===2&&(d="i, j");const p=`getIndices(${d})`;let h="";o===1?h="i":o===2&&(h="i, coords[1]");const f=`getUpdates(${h})`;let m="";i&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=t>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${a});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${p});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}/**
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
 */class eC{constructor(e,t,s,o,a,r,c=!0,i=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;const u=D(a.length),l=D(r.length);let d="";s===1?d="i":s===2&&(d="i, j");const p=`getIndices(${d})`;let h="";o===1?h="i":o===2&&(h="i, coords[1]");const f=`getUpdates(${h})`;let m="";i&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=t>1?"strides[j]":"strides",C=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${u} strides = ${u}(${a});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${p});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${C};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${f};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tC(n){const{inputs:e,backend:t,attrs:s}=n,{indices:o,updates:a}=e,{shape:r}=s,{sliceRank:c,numUpdates:i,sliceSize:u,strides:l,outputSize:d}=Ht(a,o,r),p=[d/u,u];if(d===0)return t.makeTensorInfo(r,o.dtype);const h=S({inputs:{x:o},backend:t,attrs:{shape:[i,c]}}),f=S({inputs:{x:a},backend:t,attrs:{shape:[i,u]}}),m=t.makeTensorInfo([],"float32",new Float32Array([0]));let g;$().getBool("WEBGL_PACK")?g=new eC(i,c,h.shape.length,f.shape.length,l,p):g=new rn(i,c,h.shape.length,f.shape.length,l,p);const x=t.runWebGLProgram(g,[f,h,m],f.dtype),C=S({inputs:{x},backend:t,attrs:{shape:r}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),C}const nC={kernelName:_i,backendName:"webgl",kernelFunc:tC};/**
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
 */class sC{constructor(e,t,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const a="while (left < right) {",r=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,c=$().getNumber("WEBGL_VERSION")===2?a:r,i=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${c}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${i} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
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
 */function oC(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:o,values:a}=e,{side:r}=s,c=new sC(o.shape[0],o.shape[1],a.shape[1],r),i=[[o.shape[1]]];return t.runWebGLProgram(c,[o,a],"int32",i)}const aC={kernelName:Li,backendName:"webgl",kernelFunc:oC};/**
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
 */class rC{constructor(e,t,s){this.variableNames=["c","a","b"],this.outputShape=t;let o,a;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)a="resRC",o="resRC";else{const c=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],u=[];for(let l=0;l<t.length;l++)u.push(`${c[l]}`),l<e&&i.push(`${c[l]}`);o=i.join(),a=u.join()}const r=D(s);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${a}));
        } else {
          setOutput(getB(${a}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iC(n){const{inputs:e,backend:t}=n,{condition:s,t:o,e:a}=e,r=new rC(s.shape.length,o.shape,o.shape.length);return t.runWebGLProgram(r,[s,o,a],ke(o.dtype,a.dtype))}const cC={kernelName:Bi,backendName:"webgl",kernelFunc:iC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uC=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Ui};
  float scale = ${Wi};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,lC=A({opSnippet:uC}),dC={kernelName:Vi,backendName:"webgl",kernelFunc:lC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pC=Ue+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,hC=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,fC=A({opSnippet:pC,packedOpSnippet:hC,cpuKernelImpl:dl}),xC={kernelName:Mi,backendName:"webgl",kernelFunc:fC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mC=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,gC=A({opSnippet:mC}),CC={kernelName:Gi,backendName:"webgl",kernelFunc:gC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $C=Ue+`
  return sin(x);
`,vC=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${we}
  return result;
`,bC=A({opSnippet:$C,packedOpSnippet:vC}),RC={kernelName:zi,backendName:"webgl",kernelFunc:bC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SC=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,yC=A({opSnippet:SC}),wC={kernelName:Hi,backendName:"webgl",kernelFunc:yC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TC=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,IC=A({opSnippet:TC}),NC={kernelName:Xi,backendName:"webgl",kernelFunc:IC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EC=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:a,paddings:r}=s;_(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const c=a.reduce((x,C)=>x*C),i=[[0,0]];i.push(...r);for(let x=1+a.length;x<o.shape.length;++x)i.push([0,0]);const u=[],l=po({inputs:{x:o},backend:t,attrs:{paddings:i,constantValue:0}}),d=Vn(l.shape,a,c,!1),p=Un(d.length,a.length,!1),h=Wn(l.shape,a,c,!1),f=S({inputs:{x:l},backend:t,attrs:{shape:d}}),m=M({inputs:{x:f},backend:t,attrs:{perm:p}}),g=S({inputs:{x:m},backend:t,attrs:{shape:h}});return u.push(l),u.push(f),u.push(m),u.forEach(x=>t.disposeIntermediateTensorInfo(x)),g},kC={kernelName:Ki,backendName:"webgl",kernelFunc:EC};/**
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
 */function OC(n){const{inputs:e,backend:t}=n,{indices:s,values:o,denseShape:a,defaultValue:r}=e;if(a.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(r.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${r.shape}`);const c=t.readSync(s.dataId),i=t.readSync(o.dataId),u=t.readSync(a.dataId),l=t.readSync(r.dataId)[0],[d,p,h,f,m]=hl(c,s.shape,s.dtype,i,o.dtype,u,l);return[t.makeTensorInfo(p,s.dtype,d),t.makeTensorInfo([p[0]],o.dtype,h),t.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),t.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const AC={kernelName:ji,backendName:"webgl",kernelFunc:OC};/**
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
 */function DC(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:o,newShape:a}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(a.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${a.shape}`);const r=Array.from(t.readSync(o.dataId)),c=t.readSync(s.dataId),i=Array.from(t.readSync(a.dataId)),[u,l,d]=fl(c,s.shape,s.dtype,r,i);return[t.makeTensorInfo(l,s.dtype,u),t.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}const PC={kernelName:qi,backendName:"webgl",kernelFunc:DC};/**
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
 */function FC(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:a}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(a.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${a.shape}`);const r=t.readSync(s.dataId),c=t.readSync(o.dataId),i=t.readSync(a.dataId),[u,l]=_s(r,s.shape,s.dtype,c,i,!0);return t.makeTensorInfo(l,s.dtype,u)}const _C={kernelName:Yi,backendName:"webgl",kernelFunc:FC};/**
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
 */function LC(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:a}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(a.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${a.shape}`);const r=t.readSync(s.dataId),c=t.readSync(o.dataId),i=t.readSync(a.dataId),[u,l]=_s(r,s.shape,s.dtype,c,i);return t.makeTensorInfo(l,s.dtype,u)}const BC={kernelName:Qi,backendName:"webgl",kernelFunc:LC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VC(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:o,sparseValues:a,defaultValue:r}=e,{outputShape:c}=s,{sliceRank:i,numUpdates:u,sliceSize:l,strides:d,outputSize:p}=Ht(a,o,c),h=!1;if(a.dtype==="string"){const x=t.bufferSync(o),C=t.bufferSync(a),b=Wt(t.readSync(r.dataId)[0]),v=ll(x,C,c,p,l,u,i,d,b,h);return t.makeTensorInfo(c,v.dtype,v.values)}const f=new rn(u,i,o.shape.length,a.shape.length,d,[p,1],h),m=t.runWebGLProgram(f,[a,o,r],a.dtype),g=S({inputs:{x:m},backend:t,attrs:{shape:c}});return t.disposeIntermediateTensorInfo(m),g}const UC={kernelName:Zi,backendName:"webgl",kernelFunc:VC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WC(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{numOrSizeSplits:a,axis:r}=s,c=K(r,o.shape)[0],i=ec(o,a,c),u=o.shape.length,l=new Array(u).fill(0),d=o.shape.slice();return i.map(p=>{const h=[...d];h[c]=p;const f=We({inputs:{x:o},backend:t,attrs:{begin:l,size:h}});return l[c]+=p,f})}const MC={kernelName:Ji,backendName:"webgl",kernelFunc:WC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn="return sqrt(x);",GC=A({opSnippet:Pn,packedOpSnippet:Pn,cpuKernelImpl:xl}),zC={kernelName:tc,backendName:"webgl",kernelFunc:GC};/**
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
 */const HC="return x * x;",XC=A({opSnippet:HC}),KC={kernelName:nc,backendName:"webgl",kernelFunc:XC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fn="return (a - b) * (a - b);",jC=B({opSnippet:Fn,packedOpSnippet:Fn}),qC={kernelName:sc,backendName:"webgl",kernelFunc:jC};/**
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
 */function YC(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const a=t.readSync(o.dataId),r=At(a),c=ml(r,"string",s);return t.makeTensorInfo(o.shape,"string",c)}const QC={kernelName:oc,backendName:"webgl",kernelFunc:YC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZC({inputs:n,attrs:e,backend:t}){const{x:s}=n,o=J+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,a=new ae(s.shape,o);return t.runWebGLProgram(a,[s],s.dtype)}const JC={kernelName:ac,backendName:"webgl",kernelFunc:ZC};/**
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
 */class e${constructor(e,t,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,a=D(s.length),r=D(s.length);let c="";if(o===1)c="coords * strides + begin";else{let i=0;c=s.map((u,l)=>(i++,s.length===1?`coords * strides[${l}] + begin[${l}]`:`coords[${i-1}] * strides[${l}] + begin[${l}]`)).join(",")}this.userCode=`
      ${a} begin = ${a}(${e});
      ${a} strides = ${a}(${t});

      void main() {
        ${r} coords = getOutputCoords();
        setOutput(getX(${c}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:a,end:r,strides:c,beginMask:i,endMask:u,ellipsisMask:l,newAxisMask:d,shrinkAxisMask:p}=s,{finalShapeSparse:h,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:C,end:b,strides:v}=ic(o.shape,a,r,c,i,u,l,d,p);let R;if(m)R=S({inputs:{x:o},backend:t,attrs:{shape:f}});else if(g||x){_(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const I=cc(C,b,v),w=We({inputs:{x:o},backend:t,attrs:{begin:C,size:I}});R=S({inputs:{x:w},backend:t,attrs:{shape:f}}),t.disposeIntermediateTensorInfo(w)}else if(t.shouldExecuteOnCPU([o])){const w=t.readSync(o.dataId),O=xt(o.shape,o.dtype,w),k=gl(h,O,v,C);R=t.makeTensorInfo(f,o.dtype,k.values)}else{const w=new e$(C,v,h);R=t.runWebGLProgram(w,[o],o.dtype)}const N=S({inputs:{x:R},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(R),N}const n$={kernelName:rc,backendName:"webgl",kernelFunc:t$};/**
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
 */function s$(n){const{inputs:e,backend:t,attrs:s}=n,{separator:o,nGramWidths:a,leftPad:r,rightPad:c,padWidth:i,preserveShortSequences:u}=s,{data:l,dataSplits:d}=e,p=t.readSync(l.dataId),h=t.readSync(d.dataId),[f,m]=Cl(p,h,o,a,r,c,i,u);return[t.makeTensorInfo([f.length],"string",f),t.makeTensorInfo(d.shape,"int32",m)]}const o$={kernelName:uc,backendName:"webgl",kernelFunc:s$};/**
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
 */function a$(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:o}=s,{input:a,delimiter:r}=e;if(a.dtype!=="string")throw new Error("Input must be of datatype string");if(a.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${a.shape}`);if(r.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${r.shape}`);const c=t.readSync(a.dataId),i=t.readSync(r.dataId)[0],[u,l,d]=$l(c,i,o),p=l.length;return[t.makeTensorInfo([p,2],"int32",u),t.makeTensorInfo([p],"string",l),t.makeTensorInfo([2],"int32",new Int32Array(d))]}const r$={kernelName:lc,backendName:"webgl",kernelFunc:a$};/**
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
 */function i$(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:o}=s,{input:a}=e;if(a.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const r=t.readSync(a.dataId),c=vl(r,o);return t.makeTensorInfo(a.shape,"int32",c)}const c$={kernelName:dc,backendName:"webgl",kernelFunc:i$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u$="return tan(x);",l$=A({opSnippet:u$}),d$={kernelName:pc,backendName:"webgl",kernelFunc:l$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p$=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,h$=A({opSnippet:p$}),f$={kernelName:hc,backendName:"webgl",kernelFunc:h$};/**
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
 */function x$(n){const{inputs:e,backend:t,attrs:s}=n,{tensor:o,indices:a,updates:r}=e,{sliceRank:c,numUpdates:i,sliceSize:u,strides:l,outputSize:d}=Ht(r,a,o.shape),p=[d/u,u];if(d===0)return t.makeTensorInfo(o.shape,a.dtype);const h=S({inputs:{x:a},backend:t,attrs:{shape:[i,c]}}),f=S({inputs:{x:r},backend:t,attrs:{shape:[i,u]}}),m=S({inputs:{x:o},backend:t,attrs:{shape:p}}),g=new rn(i,c,h.shape.length,f.shape.length,l,p,!1,!0),x=t.runWebGLProgram(g,[f,h,m],m.dtype),C=S({inputs:{x},backend:t,attrs:{shape:o.shape}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(x),C}const m$={kernelName:fc,backendName:"webgl",kernelFunc:x$};/**
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
 */class g${constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let r=0;r<s.length;r++)s[r]=e[r]*t[r];this.outputShape=s,this.rank=s.length;const o=D(this.rank),a=C$(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${a}));
      }
    `}}function C$(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${t[o]}, ${n[o]})`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fo(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reps:a}=s;if(o.dtype==="string"||o.shape.length>5){const i=t.readSync(o.dataId),u=o.dtype==="string"?i.map(p=>Wt(p)):i,l=xt(o.shape,o.dtype,u),d=Rl(l,a);return t.makeTensorInfo(d.shape,d.dtype,d.values)}const r=new g$(o.shape,a);return t.runWebGLProgram(r,[o],o.dtype)}const $$={kernelName:xc,backendName:"webgl",kernelFunc:fo};class v${constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class b${constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ge(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function _n(n){let e=1;for(;e<n;)e*=2;return e}function R$(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{k:a,sorted:r}=s,c=$().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),i=$().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=o.shape,l=u[u.length-1];if(t.shouldExecuteOnCPU([o])||l<c||a>i){const k=t.readSync(o.dataId),[P,F]=Sl(k,u,o.dtype,a,r);return[t.makeTensorInfo(P.shape,P.dtype,P.values),t.makeTensorInfo(F.shape,F.dtype,F.values)]}if(a===0)return u[u.length-1]=0,[t.makeTensorInfo(u,o.dtype,[]),t.makeTensorInfo(u,"int32",[])];if(l===1)return[o,st({attrs:{shape:u,dtype:"int32",value:0},backend:t})];const d=t.texData.get(o.dataId),p=d!==null&&d.isPacked,h=p?t.unpackTensor(o):o,m=E(u)/l,g=S({inputs:{x:h},attrs:{shape:[m,l]},backend:t});p&&ge(t,h);const x=_n(a),C=_n(l);let b=null;const v=()=>b===null?[g,g]:[g,b],R=(k,P,F)=>{const oe=v(),H=new v$(F),Z=[[l],[b===null?1:0],[Number.NEGATIVE_INFINITY],[k],[P]],ee=b;b=t.runWebGLProgram(H,oe,"int32",Z),ge(t,ee)};for(let k=1;k<x;k*=2){const P=k*2;for(let F=k;F>=1;F/=2)R(P,F,[m,C])}for(let k=C;k>x;k/=2){const P=v(),F=new b$([m,k/2]),H=[[l],[b===null?1:0],[x]],j=b;b=t.runWebGLProgram(F,P,"int32",H),ge(t,j);const Z=x/2,ee=Z*2;for(let U=Z;U>=1;U/=2)R(ee,U,b.shape)}let N=b;b=We({inputs:{x:b},backend:t,attrs:{begin:0,size:[m,a]}}),ge(t,N);let I=ao({inputs:{x:g,indices:b},backend:t,attrs:{axis:1,batchDims:1}});ge(t,g);const w=u.slice(0,-1);w.push(a),N=b,b=S({inputs:{x:b},attrs:{shape:w},backend:t}),ge(t,N);const O=I;return I=S({inputs:{x:I},attrs:{shape:w},backend:t}),ge(t,O),[I,b]}const S$={kernelName:mc,backendName:"webgl",kernelFunc:R$};/**
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
 */class y${constructor(e,t,s,o,a,r){this.variableNames=["Image","Transforms"],this.outputShape=r;const c=s==="nearest"?1:2;let i;switch(o){case"constant":i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4;break;default:i=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${i} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${i} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${i} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${a});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${a});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${c} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
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
 */function w$(n){const{inputs:e,backend:t,attrs:s}=n,{image:o,transforms:a}=e,{interpolation:r,fillMode:c,fillValue:i,outputShape:u}=s,[l,d,p,h]=o.shape,[f,m]=u??[d,p],g=[l,f,m,h],x=new y$(d,p,r,c,i,g);return t.runWebGLProgram(x,[o,a],"float32")}const T$={kernelName:gc,backendName:"webgl",kernelFunc:w$};/**
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
 */function I$(n){const{inputs:e,attrs:t,backend:s}=n,{axis:o}=t,{x:a}=e;Pe(a,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const r=s.readSync(a.dataId),{outputValues:c,outputShape:i,indices:u}=yl(r,o,a.shape,a.dtype);return[s.makeTensorInfo(i,a.dtype,c),s.makeTensorInfo([u.length],"int32",u)]}const N$={kernelName:Cc,backendName:"webgl",kernelFunc:I$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(n){const{inputs:e,backend:t,attrs:s}=n,{value:o}=e;let{axis:a}=s;a<0&&(a+=o.shape.length);const r=o,c=r.shape.length,i=o.shape[a],u=new Array(c-1);let l=0;for(let m=0;m<c;m++)m!==a&&(u[l++]=r.shape[m]);const d=[],p=new Array(c).fill(0),h=r.shape.slice();h[a]=1;const f=new Array(i);for(let m=0;m<f.length;m++){p[a]=m;const g=We({inputs:{x:r},backend:t,attrs:{begin:p,size:h}}),x=S({inputs:{x:g},backend:t,attrs:{shape:u}});f[m]=x,d.push(g)}return d.forEach(m=>t.disposeIntermediateTensorInfo(m)),f}const k$={kernelName:$c,backendName:"webgl",kernelFunc:E$};/**
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
 */class O${constructor(e,t){this.variableNames=["x","segmentIds"];const s=e.windowSize,o=e.batchSize,a=e.inSize,r=e.numSegments,c=r*Math.ceil(a/s);this.outputShape=[o,c];const i="0.0",u="sumValue",l=Math.floor(s/4)*4,d=s%4,p=`
        sumValue += dot(values, segFilter);
    `;let h="";a%s>0&&(h=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `);let f="";a%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${i};

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${f}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${r})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${r})));

        float sumValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${p}
        }

        int inIdx = inOffset + ${l};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${p}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${p}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${p}
        }
        setOutput(${u});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A$(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,segmentIds:a}=e,{numSegments:r}=s,c=o.shape.length,i=[];let u=0;const l=ne([u],c);let d=o;l!=null&&(d=M({inputs:{x:o},backend:t,attrs:{perm:l}}),i.push(d),u=se(1,c)[0]);const p=bc(d.shape,u,r),h=E([d.shape[u]]),f=S({inputs:{x:d},backend:t,attrs:{shape:[-1,h]}});i.push(f);const m=Gt(o.dtype),g=(v,R,N,I,w)=>{const O=v.shape[0],k=v.shape[1],P=Rc(k,w),F={windowSize:P,inSize:k,batchSize:O,numSegments:w},oe=new O$(F,R),H=t.compileAndRun(oe,[v,N],I);if(i.push(H),H.shape[1]===w)return H;const j=ho({backend:t,attrs:{start:0,stop:w,step:1,dtype:"float32"}}),Z=fo({inputs:{x:j},backend:t,attrs:{reps:[k/P]}});return i.push(j),i.push(Z),g(H,R,Z,I,w)},x=g(f,"unsortedSegmentSum",a,m,r),C=S({inputs:{x},backend:t,attrs:{shape:p}});let b=C;if(l!=null){i.push(C);const v=Mn(l);b=M({inputs:{x:b},backend:t,attrs:{perm:v}})}return i.forEach(v=>t.disposeIntermediateTensorInfo(v)),b}const D$={kernelName:vc,backendName:"webgl",kernelFunc:A$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P$=[md,Cd,bd,yd,Td,Ed,Od,Dd,Ld,Vd,Md,Hd,jd,Zd,tp,sp,ap,up,dp,hp,gp,yp,Tp,kp,Ap,Bp,Up,zp,Jl,Kp,Zp,nh,ch,dh,hh,xh,gh,bh,yh,Ih,Eh,Oh,Dh,_h,Bh,Mh,zh,Kh,Yh,Zh,nf,rf,df,ff,gf,Cf,vf,Rf,yf,Tf,Nf,Af,Ff,Bf,Uf,Gf,Xf,Yf,ex,Zl,nx,Yp,ax,cx,dx,td,xx,$x,bx,wx,Nx,Ax,Fx,Vx,Gx,Xx,jx,Zx,em,nm,rm,cm,lm,pm,fm,Cm,Rm,Tm,Pm,od,Bm,Wm,zm,Km,Pp,Ym,Zm,eg,sg,ig,sd,ug,dg,hg,xg,mg,Fp,km,$g,Sg,Ig,rd,Og,Pg,Bg,Wg,Hg,Kg,Yg,Jg,nC,aC,cC,dC,xC,CC,RC,wC,Rp,Am,NC,kC,AC,PC,_C,BC,UC,MC,zC,KC,qC,QC,JC,n$,o$,r$,c$,Om,hd,d$,f$,m$,$$,S$,T$,fd,N$,k$,D$,Qm];for(const n of P$)Sc(n);export{Et as GPGPUContext,St as MathBackendWebGL,Ql as forceHalfFloat,U$ as gpgpu_util,wc as setWebGLContext,W$ as version_webgl,M$ as webgl,V$ as webgl_util};
