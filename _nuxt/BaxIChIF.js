var ze=Object.defineProperty;var Te=(i,t,e)=>t in i?ze(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var x=(i,t,e)=>Te(i,typeof t!="symbol"?t+"":t,e);import{c as Ae,M as We,O as oe,a as X,P as fe,R as I,b as ne,V as y,T as De,S as K,U as $,B as Fe,d as je,e as pe,C as U,f as re,g as T,h as G,W as ve,H as ge,Q as L,i as xe,j as ye,k as He,l as we,G as Oe,m as Me,A as Se,n as N,o as ke,p as V,q as Ie,D as Ue,r as Be,s as Le,t as Ne,u as ce,F as Ve,v as Ge,w as qe,x as Qe,y as me,z as Xe,E as Ye,I as Ze,J as he}from"./OnWgeUms.js";import{d as Ke,r as $e,V as Je,o as et,b as tt,c as at}from"./GIo2RO3F.js";import{_ as it}from"./DlAUqK2U.js";import"./Cla90fIE.js";function be(i,t){let e=1/0,a=-1/0,r=i.length,n;for(t.easing=t.easing||se,n=0;n<r;n++)i[n]<e&&(e=i[n]),i[n]>a&&(a=i[n]);let s=a-e,u=t.maxHeight,l=t.minHeight,p=t.stretch?u:a<u?a:u,o=t.stretch?l:e>l?e:l,m=p-o;for(p<o&&(p=u,m=p-o),n=0;n<r;n++)i[n]=t.easing((i[n]-e)/s)*m+l}function nt(i,t,e=0){let a=new Float32Array(i.length);for(let n=0,s=t.xSegments+1,u=t.ySegments+1;n<s;n++)for(let l=0;l<u;l++){let p=0,o=0;for(let m=-1;m<=1;m++)for(let c=-1;c<=1;c++){let d=(l+m)*s+n+c;typeof i[d]<"u"&&n+c>=0&&l+m>=0&&n+c<s&&l+m<u&&(p+=i[d],o++)}a[l*s+n]=p/o}let r=1/(1+e);for(let n=0,s=i.length;n<s;n++)i[n]=(a[n]+i[n]*e)*r}function rt(i,t){let e=0,a=0,r=i.length,n=Math.floor(r/t),s=new Array(r),u=new Array(t);for(typeof t>"u"&&(t=Math.floor(Math.pow(r*.5,.25))),e=0;e<r;e++)s[e]=i[e];for(s.sort(function(l,p){return l-p}),e=0;e<t;e++){let l=s.slice(e*n,(e+1)*n),p=0,o=l.length;for(a=0;a<o;a++)p+=l[a];u[e]={min:l[0],max:l[l.length-1],avg:p/o}}for(e=0;e<r;e++){let l=i[e];for(a=0;a<t;a++)if(l>=u[a].min&&l<=u[a].max){i[e]=u[a].avg;break}}}function ot(i,t){let e=t.maxHeight-t.minHeight;for(let a=0,r=i.length;a<r;a++)i[a]=t.minHeight+Math.abs((i[a]-t.minHeight)*2-e)}function st(i,t){let e=document.createElement("canvas"),a=e.getContext("2d"),r=t.ySegments+1,n=t.xSegments+1,s=t.maxHeight-t.minHeight;if(e.width=n,e.height=r,!a)throw new Error("canvas context is null");a.drawImage(t.heightmap,0,0,e.width,e.height);let u=a.getImageData(0,0,e.width,e.height).data;for(let l=0;l<r;l++)for(let p=0;p<n;p++){let o=l*n+p,m=o*4;i[o]=(u[m]+u[m+1]+u[m+2])/765*s+t.minHeight}}class A{constructor(t,e,a){x(this,"x");x(this,"y");x(this,"z");this.x=t,this.y=e,this.z=a}dot2(t,e){return this.x*t+this.y*e}dot3(t,e,a){return this.x*t+this.y*e+this.z*a}}const lt=[new A(1,1,0),new A(-1,1,0),new A(1,-1,0),new A(-1,-1,0),new A(1,0,1),new A(-1,0,1),new A(1,0,-1),new A(-1,0,-1),new A(0,1,1),new A(0,-1,1),new A(0,1,-1),new A(0,-1,-1)],ue=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],O=new Array(512),k=new Array(512);function Pe(i){i>0&&i<1&&(i*=65536),i=Math.floor(i),i<256&&(i|=i<<8);for(let t=0;t<256;t++){let e;t&1?e=ue[t]^i&255:e=ue[t]^i>>8&255,O[t]=O[t+256]=e,k[t]=k[t+256]=lt[e%12]}}Pe(Math.random());function de(i){return i*i*i*(i*(i*6-15)+10)}function ie(i,t,e){return(1-e)*i+e*t}function ct(i,t){let e=Math.floor(i),a=Math.floor(t);i=i-e,t=t-a,e=e&255,a=a&255;let r=k[e+O[a]].dot2(i,t),n=k[e+O[a+1]].dot2(i,t-1),s=k[e+1+O[a]].dot2(i-1,t),u=k[e+1+O[a+1]].dot2(i-1,t-1),l=de(i);return ie(ie(r,s,l),ie(n,u,l),de(t))}function _e(i,t){let e=Ae(Math.max(t.xSegments,t.ySegments)+1),a=e+1,r=[],n=t.maxHeight-t.minHeight,s,u,l=t.xSegments+1,p=t.ySegments+1;for(s=0;s<=e;s++)r[s]=new Float64Array(e+1);for(let o=e;o>=2;o/=2){let m=Math.round(o*.5),c=Math.round(o),d,h,S,v;for(n/=2,d=0;d<e;d+=c)for(h=0;h<e;h+=c)v=Math.random()*n*2-n,S=r[d][h]+r[d+c][h]+r[d][h+c]+r[d+c][h+c],S*=.25,r[d+m][h+m]=S+v;for(d=0;d<e;d+=m)for(h=(d+m)%o;h<e;h+=o)v=Math.random()*n*2-n,S=r[(d-m+a)%a][h]+r[(d+m)%a][h]+r[d][(h+m)%a]+r[d][(h-m+a)%a],S*=.25,S+=v,r[d][h]=S,d===0&&(r[e][h]=S),h===0&&(r[d][e]=S)}for(s=0;s<l;s++)for(u=0;u<p;u++)i[u*l+s]+=r[s][u]}function mt(i,t){Pe(Math.random());let e=(t.maxHeight-t.minHeight)*.5,a=(Math.min(t.xSegments,t.ySegments)+1)/t.frequency;for(let r=0,n=t.xSegments+1;r<n;r++)for(let s=0,u=t.ySegments+1;s<u;s++)i[s*n+r]+=ct(r/a,s/a)*e}function ht(i={}){const e=Object.assign({after:void 0,easing:se,heightmap:_e,material:void 0,maxHeight:100,minHeight:-100,optimization:ut,frequency:2.5,steps:1,stretch:!0,turbulent:!1,xSegments:63,xSize:1024,ySegments:63,ySize:1024},i);e.material=e.material||new We({color:15623731});let a=new oe;a.rotation.x=-.5*Math.PI;let r=new X(new fe(e.xSize,e.ySize,e.xSegments,e.ySegments),e.material),n=Re(r.geometry.attributes.position.array);return e.heightmap instanceof HTMLCanvasElement||e.heightmap instanceof Image?st(n,e):typeof e.heightmap=="function"?e.heightmap(n,e):console.warn("An invalid value was passed for `options.heightmap`: "+e.heightmap),Ce(r.geometry.attributes.position.array,n),dt(r,e),r.receiveShadow=!0,a.add(r),a}const ut=0;function dt(i,t){let e=Re(i.geometry.attributes.position.array);t.turbulent&&ot(e,t),t.steps>1&&(rt(e,t.steps),nt(e,t)),be(e,t),typeof t.after=="function"&&t.after(e,t),Ce(i.geometry.attributes.position.array,e),i.geometry.computeBoundingSphere(),i.geometry.computeVertexNormals()}function Re(i){let t=new Float32Array(i.length/3);for(let e=0,a=t.length;e<a;e++)t[e]=i[e*3+2];return t}function Ce(i,t){for(let e=0,a=Math.min(i.length/3,t.length);e<a;e++)i[e*3+2]=t[e]}function ft(i,t){let e=new Float32Array((t.xSegments+1)*(t.ySegments+1));return e.fill(0),t.minHeight=t.minHeight||0,t.maxHeight=typeof t.maxHeight>"u"?1:t.maxHeight,t.stretch=t.stretch||!1,i(e,t),be(e,t),e}function se(i){return i}function Z(i){return i*i*(3-2*i)}function pt(i){let t=2*i-1;return .5*t*t*t+.5}const F="assets/airdefence/";function vt(i,t){function e(o){return o===(o|0)?o+".0":o+""}let a="",r="",n=i[0].texture.repeat,s=i[0].texture.offset;for(let o=0,m=i.length;o<m;o++)if(i[o].texture.wrapS=i[o].wrapT=I,i[o].texture.needsUpdate=!0,a+="uniform sampler2D texture_"+o+`;
`,o!==0){let c=i[o].levels,d=i[o].glsl,h=i[o].texture.repeat,S=i[o].texture.offset;if(typeof c<"u"){c[1]-c[0]<1&&(c[0]-=1),c[3]-c[2]<1&&(c[3]+=1);for(let b=0;b<c.length;b++)c[b]=e(c[b])}let v=typeof c<"u"?"1.0 - smoothstep("+c[0]+", "+c[1]+", vPosition.z) + smoothstep("+c[2]+", "+c[3]+", vPosition.z)":d;r+="        color = mix( texture2D( texture_"+o+", MyvUv * vec2( "+e(h.x)+", "+e(h.y)+" ) + vec2( "+e(S.x)+", "+e(S.y)+" ) ), color, max(min("+v+`, 1.0), 0.0));
`}let u=`float slope = acos(max(min(dot(myNormal, vec3(0.0, 0.0, 1.0)), 1.0), -1.0));
    diffuseColor = vec4( diffuse, opacity );
    vec4 color = texture2D( texture_0, MyvUv * vec2( `+e(n.x)+", "+e(n.y)+" ) + vec2( "+e(s.x)+", "+e(s.y)+` ) ); // base
`+r+`    diffuseColor = color;
`,l=a+`
varying vec2 MyvUv;
varying vec3 vPosition;
varying vec3 myNormal;
`,p=t||new ne;return p.onBeforeCompile=function(o){o.vertexShader=o.vertexShader.replace("#include <common>",`varying vec2 MyvUv;
varying vec3 vPosition;
varying vec3 myNormal;
#include <common>`),o.vertexShader=o.vertexShader.replace("#include <uv_vertex>",`MyvUv = uv;
vPosition = position;
myNormal = normal;
#include <uv_vertex>`),o.fragmentShader=o.fragmentShader.replace("#include <common>",l+`
#include <common>`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",u);for(let m=0,c=i.length;m<c;m++)o.uniforms["texture_"+m]={type:"t",value:i[m].texture}},p}function gt(i,t){if(!t.mesh){console.error("options.mesh is required for ScatterMeshes but was not passed");return}t.scene||(t.scene=new oe);let e={mesh:void 0,scene:void 0,spread:.025,smoothSpread:0,sizeVariance:.1,randomness:Math.random,maxSlope:.6283185307179586,maxTilt:1/0,w:0,h:0,...t};const a=typeof e.spread=="number";let r,n;const s=1/e.smoothSpread,u=e.sizeVariance*2,l=new y,p=new y,o=new y,m=new y,c=e.mesh.up.clone().applyAxisAngle(new y(1,0,0),.5*Math.PI);a&&(r=e.randomness(),n=typeof r=="number"?Math.random:h=>r[h]),i=i.toNonIndexed();const d=i.attributes.position.array;for(let h=0;h<d.length;h+=9){l.set(d[h],d[h+1],d[h+2]),p.set(d[h+3],d[h+4],d[h+5]),o.set(d[h+6],d[h+7],d[h+8]),De.getNormal(l,p,o,m);let S=!1;if(a){const v=n(h/9);v<e.spread?S=!0:v<e.spread+e.smoothSpread&&(S=Z((v-e.spread)*s)*e.spread>Math.random())}else S=e.spread(l,h/9,m,h);if(S){if(m.angleTo(c)>e.maxSlope)continue;const v=e.mesh.clone();if(v.position.addVectors(l,p).add(o).divideScalar(3),e.maxTilt>0){const b=v.position.clone().add(m);v.lookAt(b);const C=m.angleTo(c);if(C>e.maxTilt){const f=e.maxTilt/C;v.rotation.x*=f,v.rotation.y*=f,v.rotation.z*=f}}if(v.rotation.x+=90/180*Math.PI,v.rotateY(Math.random()*2*Math.PI),e.sizeVariance){const b=Math.random()*u-e.sizeVariance;v.scale.x=v.scale.z=1+b,v.scale.y+=b}v.updateMatrix(),e.scene.add(v)}}return e.scene}function xt(i,t,e,a){e=e||1,a=a||.25,t.frequency=t.frequency||2.5;let r=Object.assign({},t);r.xSegments*=2,r.stretch=!0,r.maxHeight=1,r.minHeight=0;let n=ft(i,r);for(let s=0,u=n.length;s<u;s++)(s%e||Math.random()>a)&&(n[s]=1);return()=>n}class J extends X{constructor(){const t=J.SkyShader,e=new K({name:t.name,uniforms:$.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Fe,depthWrite:!1});super(new je(1,1,1),e),this.isSky=!0}}J.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new y},up:{value:new y(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class q extends X{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new pe;const a=this,r=e.color!==void 0?new U(e.color):new U(8355711),n=e.textureWidth||512,s=e.textureHeight||512,u=e.clipBias||0,l=e.shader||q.ReflectorShader,p=e.multisample!==void 0?e.multisample:4,o=new re,m=new y,c=new y,d=new y,h=new T,S=new y(0,0,-1),v=new G,b=new y,C=new y,f=new G,M=new T,g=this.camera,R=new ve(n,s,{samples:p,type:ge}),_=new K({name:l.name!==void 0?l.name:"unspecified",uniforms:$.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});_.uniforms.tDiffuse.value=R.texture,_.uniforms.color.value=r,_.uniforms.textureMatrix.value=M,this.material=_,this.onBeforeRender=function(w,E,P){if(c.setFromMatrixPosition(a.matrixWorld),d.setFromMatrixPosition(P.matrixWorld),h.extractRotation(a.matrixWorld),m.set(0,0,1),m.applyMatrix4(h),b.subVectors(c,d),b.dot(m)>0)return;b.reflect(m).negate(),b.add(c),h.extractRotation(P.matrixWorld),S.set(0,0,-1),S.applyMatrix4(h),S.add(d),C.subVectors(c,S),C.reflect(m).negate(),C.add(c),g.position.copy(b),g.up.set(0,1,0),g.up.applyMatrix4(h),g.up.reflect(m),g.lookAt(C),g.far=P.far,g.updateMatrixWorld(),g.projectionMatrix.copy(P.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(g.projectionMatrix),M.multiply(g.matrixWorldInverse),M.multiply(a.matrixWorld),o.setFromNormalAndCoplanarPoint(m,c),o.applyMatrix4(g.matrixWorldInverse),v.set(o.normal.x,o.normal.y,o.normal.z,o.constant);const z=g.projectionMatrix;f.x=(Math.sign(v.x)+z.elements[8])/z.elements[0],f.y=(Math.sign(v.y)+z.elements[9])/z.elements[5],f.z=-1,f.w=(1+z.elements[10])/z.elements[14],v.multiplyScalar(2/v.dot(f)),z.elements[2]=v.x,z.elements[6]=v.y,z.elements[10]=v.z+1-u,z.elements[14]=v.w,a.visible=!1;const B=w.getRenderTarget(),te=w.xr.enabled,ae=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(R),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(E,g),w.xr.enabled=te,w.shadowMap.autoUpdate=ae,w.setRenderTarget(B);const le=P.viewport;le!==void 0&&w.state.viewport(le),a.visible=!0},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),a.material.dispose()}}}q.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Q extends X{constructor(t,e={}){super(t),this.isRefractor=!0,this.type="Refractor",this.camera=new pe;const a=this,r=e.color!==void 0?new U(e.color):new U(8355711),n=e.textureWidth||512,s=e.textureHeight||512,u=e.clipBias||0,l=e.shader||Q.RefractorShader,p=e.multisample!==void 0?e.multisample:4,o=this.camera;o.matrixAutoUpdate=!1,o.userData.refractor=!0;const m=new re,c=new T,d=new ve(n,s,{samples:p,type:ge});this.material=new K({name:l.name!==void 0?l.name:"unspecified",uniforms:$.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=c;const h=function(){const f=new y,M=new y,g=new T,R=new y,_=new y;return function(E){return f.setFromMatrixPosition(a.matrixWorld),M.setFromMatrixPosition(E.matrixWorld),R.subVectors(f,M),g.extractRotation(a.matrixWorld),_.set(0,0,1),_.applyMatrix4(g),R.dot(_)<0}}(),S=function(){const f=new y,M=new y,g=new L,R=new y;return function(){a.matrixWorld.decompose(M,g,R),f.set(0,0,1).applyQuaternion(g).normalize(),f.negate(),m.setFromNormalAndCoplanarPoint(f,M)}}(),v=function(){const f=new re,M=new G,g=new G;return function(_){o.matrixWorld.copy(_.matrixWorld),o.matrixWorldInverse.copy(o.matrixWorld).invert(),o.projectionMatrix.copy(_.projectionMatrix),o.far=_.far,f.copy(m),f.applyMatrix4(o.matrixWorldInverse),M.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const w=o.projectionMatrix;g.x=(Math.sign(M.x)+w.elements[8])/w.elements[0],g.y=(Math.sign(M.y)+w.elements[9])/w.elements[5],g.z=-1,g.w=(1+w.elements[10])/w.elements[14],M.multiplyScalar(2/M.dot(g)),w.elements[2]=M.x,w.elements[6]=M.y,w.elements[10]=M.z+1-u,w.elements[14]=M.w}}();function b(f){c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),c.multiply(f.projectionMatrix),c.multiply(f.matrixWorldInverse),c.multiply(a.matrixWorld)}function C(f,M,g){a.visible=!1;const R=f.getRenderTarget(),_=f.xr.enabled,w=f.shadowMap.autoUpdate;f.xr.enabled=!1,f.shadowMap.autoUpdate=!1,f.setRenderTarget(d),f.autoClear===!1&&f.clear(),f.render(M,o),f.xr.enabled=_,f.shadowMap.autoUpdate=w,f.setRenderTarget(R);const E=g.viewport;E!==void 0&&f.state.viewport(E),a.visible=!0}this.onBeforeRender=function(f,M,g){g.userData.refractor!==!0&&h(g)&&(S(),b(g),v(g),C(f,M,g))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),a.material.dispose()}}}Q.RefractorShader={name:"RefractorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class ee extends X{constructor(t,e={}){super(t),this.isWater=!0,this.type="Water";const a=this,r=e.color!==void 0?new U(e.color):new U(16777215),n=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,u=e.clipBias!==void 0?e.clipBias:0,l=e.flowDirection!==void 0?e.flowDirection:new xe(1,0),p=e.flowSpeed!==void 0?e.flowSpeed:.03,o=e.reflectivity!==void 0?e.reflectivity:.02,m=e.scale!==void 0?e.scale:1,c=e.shader!==void 0?e.shader:ee.WaterShader,d=new ye,h=e.flowMap||void 0,S=e.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),v=e.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),b=.15,C=b*.5,f=new T,M=new we;if(q===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Q===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const g=new q(t,{textureWidth:n,textureHeight:s,clipBias:u}),R=new Q(t,{textureWidth:n,textureHeight:s,clipBias:u});g.matrixAutoUpdate=!1,R.matrixAutoUpdate=!1,this.material=new K({name:c.name,uniforms:$.merge([He.fog,c.uniforms]),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,transparent:!0,fog:!0}),h!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:h}):this.material.uniforms.flowDirection={type:"v2",value:l},S.wrapS=S.wrapT=I,v.wrapS=v.wrapT=I,this.material.uniforms.tReflectionMap.value=g.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=R.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=S,this.material.uniforms.tNormalMap1.value=v,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=o,this.material.uniforms.textureMatrix.value=f,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=C,this.material.uniforms.config.value.z=C,this.material.uniforms.config.value.w=m;function _(E){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(E.projectionMatrix),f.multiply(E.matrixWorldInverse),f.multiply(a.matrixWorld)}function w(){const E=M.getDelta(),P=a.material.uniforms.config;P.value.x+=p*E,P.value.y=P.value.x+C,P.value.x>=b?(P.value.x=0,P.value.y=C):P.value.y>=b&&(P.value.y=P.value.y-b)}this.onBeforeRender=function(E,P,z){_(z),w(),a.visible=!1,g.matrixWorld.copy(a.matrixWorld),R.matrixWorld.copy(a.matrixWorld),g.onBeforeRender(E,P,z),R.onBeforeRender(E,P,z),a.visible=!0}}}ee.WaterShader={name:"WaterShader",uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new G}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};function yt(i,t){const e=i.uniforms,a=e.turbidity.value,r=e.rayleigh.value,n=e.mieCoefficient.value=.005,s=e.sunPosition.value,u=new y(68e-8,55e-8,45e-8),l=new y(.686,.678,.666),p=2*Math.PI;let o=.2*a*1e-17,m=new y(p,p,p),c=1-Math.min(Math.max(1-Math.exp(s.z),0),1);m.divide(u),m.multiply(m),m.multiply(l).multiplyScalar(.434*o*Math.PI);let d=m.multiplyScalar(n);const h=new y(0,1,0);let S=s.dot(h),v=Math.PI/1.95,C=1e3*Math.max(0,1-Math.exp(-((v-Math.acos(S))/1.5))),M=new y(5e-4/94,5e-4/40,5e-4/18).clone().multiplyScalar(r-(1-c)),g=Math.max(0,h.dot(s)),R=Math.acos(g),_=1/(g+.15*Math.pow(93.885-R*180/Math.PI,-1.253));const w=8400,E=1250;let P=w*_,z=E*_,B=d.clone().multiplyScalar(z),te=C/700,ae=Math.sqrt(te);t.color.setRGB(Math.max(Math.min(Math.exp(-(M.x*P+B.x)),1),0),Math.max(Math.min(Math.exp(-(M.y*P+B.y)),1),0),Math.max(Math.min(Math.exp(-(M.z*P+B.z)),1),0)),t.intensity=ae*Math.PI,t.position.copy(s.clone().multiplyScalar(500)),t.shadow.updateMatrices(t)}function wt(i){return 1-(1-i)*(1-i)}let j={};window.addEventListener("keydown",i=>{j[i.key.toLowerCase()]=!0});window.addEventListener("keyup",i=>{j[i.key.toLowerCase()]=!1});let Y=.5,W=0,D=0,Mt=40,H=0;function St(i,t,e,a,r,n){W*=.95,D*=.95,Math.abs(W)>Y&&(W=Math.sign(W)*Y),Math.abs(D)>Y&&(D=Math.sign(D)*Y),j.a&&(W+=.1*n),j.d&&(W-=.1*n),j.w&&(D-=.1*n),j.s&&(D+=.1*n),j.r&&(W=0,D=0,H=0,i.set(1,0,0),t.set(0,1,0),e.set(0,0,1),a.set(0,0,0)),i.applyAxisAngle(e,W),t.applyAxisAngle(e,W),t.applyAxisAngle(i,D),e.applyAxisAngle(i,D),i.normalize(),t.normalize(),e.normalize(),j.shift?H+=.025:H*=.95,H=Math.min(Math.max(H,0),1);let s=wt(H)*40;r.fov=45+s*.5,r.updateProjectionMatrix(),a.add(e.clone().multiplyScalar((-Mt-s)*n))}const bt=new Oe;class Pt extends Me{constructor(e){super();x(this,"x",new y(1,0,0));x(this,"y",new y(0,1,0));x(this,"z",new y(0,0,1));x(this,"parts",{});x(this,"camera");x(this,"delayedRotMatrix",new T);x(this,"delayedQuaternion",new L);this.camera=e,this.camera.position.set(0,10,10),bt.load(F+"airplane.glb",a=>{[this.parts.supports,this.parts.chassis,this.parts.helix]=a.scene.children,a.scene.rotation.y=Math.PI,this.parts.helix.geometry.center(),this.parts.helix.position.set(0,.655,6.2),this.add(a.scene),a.scene.add(new Se)})}update(e){St(this.x,this.y,this.z,this.position,this.camera,e);const a=new T().makeBasis(this.x,this.y,this.z),r=new T().multiply(new T().makeTranslation(this.position.x,this.position.y,this.position.z)).multiply(a);this.matrixAutoUpdate=!1,this.matrix.copy(r),this.matrixWorldNeedsUpdate=!0;var n=new L().copy(this.delayedQuaternion),s=new L;s.setFromRotationMatrix(a);var u=.175,l=new L().copy(n);l.slerp(s,u),this.delayedQuaternion.copy(l),this.delayedRotMatrix.identity(),this.delayedRotMatrix.makeRotationFromQuaternion(this.delayedQuaternion);const p=new T().multiply(new T().makeTranslation(this.position.x,this.position.y,this.position.z)).multiply(this.delayedRotMatrix).multiply(new T().makeRotationX(-.2)).multiply(new T().makeTranslation(0,-.015*10,.3*100));this.camera.matrixAutoUpdate=!1,this.camera.matrix.copy(p),this.camera.matrixWorldNeedsUpdate=!0,this.parts.helix&&(this.parts.helix.rotation.z-=e*(10+H))}}const _t=new y(0,-9.81,0),Ee=new N(.2,.2,25,8);Ee.rotateX(Math.PI/2);const Rt=new ke({color:"#000000",emissive:"#ff0000",emissiveIntensity:1});class Ct extends V{constructor(e){super();x(this,"options");x(this,"et",0);this.options=e,this.geometry=Ee.clone(),this.material=Rt.clone()}update(e){this.et+=e;const a=this.options.startPos.clone().add(this.options.startVec.clone().multiplyScalar(this.et)).add(_t.clone().multiplyScalar(.5*this.et*this.et*9.81));this.lookAt(a),this.position.copy(a),this.visible=this.et>=0,this.visible&&this.position.y<0&&this.removeFromParent()}trajectory(){new y(this.options.startVec.x,0,this.options.startVec.z).normalize(),this.options.startVec.clone().multiplyScalar(this.et)}}const Et=new Ie;class zt extends Me{constructor(e){super();x(this,"_game");x(this,"camera");this._game=e,Et.load(F+"gun.json",a=>{this.add(...a.children),this.camera=this.children[0].children[0]},a=>console.error("An error happened",a))}update(e){}setAngles(e,a){this.children[0].rotation.z=a,this.rotation.y=e-Math.PI/2}fireProjectile(){const e=this._game.plane.position.clone().sub(this.getStartPos()).normalize().multiplyScalar(810),a=e.length();let r=Math.asin(e.y/a),n=-Math.atan2(-e.x,e.z);this.setAngles(n,r);const s=.02;for(let u=0;u<100;u++){let l=Math.random()*s,p=Math.random()*2*Math.PI,o=r+Math.sin(p)*l,m=n+Math.cos(p)*l;const c=new Ct({drag:!1,gravity:!1,startPos:this.getStartPos(),startVec:new y(a*Math.sin(m)*Math.cos(o),a*Math.sin(o),a*Math.cos(m)*Math.cos(o))});c.et=-u*.02,this._game.objects.push(c),this._game.scene.add(c)}}getStartPos(){return this.children[0].getWorldPosition(new y)}}class Tt{constructor(){x(this,"parent");x(this,"loader");x(this,"stats");x(this,"gui");x(this,"scene");x(this,"sceneEnv");x(this,"renderer");x(this,"pmremGenerator");x(this,"clock");x(this,"camera");x(this,"fpsCamera");x(this,"controls");x(this,"resize_observer");x(this,"sky");x(this,"water");x(this,"terrainScene");x(this,"ratio",1);x(this,"options");x(this,"sun");x(this,"_renderTarget");x(this,"time",45);x(this,"useCamera","world");x(this,"objects",[]);x(this,"lights",{sky:new Ue(15252912,.2),hemi:new Be(16777215,9190156,.2),amb:new Le(16711680,.1)});x(this,"plane");x(this,"gun");this.loader=new ye,this.options={frequency:10,optimization:0,easing:se,heightmap:_e,maxHeight:100,minHeight:-100,steps:0,stretch:!0,turbulent:!1,xSize:2048,ySize:Math.round(2048*this.ratio),xSegments:63,ySegments:Math.round(63*this.ratio)},this.stats=new Ne,this.stats.dom.style.top="unset",this.stats.dom.style.bottom="0",this.scene=new ce,this.sceneEnv=new ce,this.scene.fog=new Ve(1876972,7e-5),this.renderer=new Ge({antialias:!0}),this.renderer.toneMapping=qe,this.pmremGenerator=new Qe(this.renderer),this.camera=new me(60,1,1,2e6),this.scene.add(this.camera),this.resetCamera(),this.clock=new we(!0),this.controls=new Xe(this.camera,this.renderer.domElement);{this.sky=new J,this.sun=new y,this.sky.scale.setScalar(1e5);const a=this.sky.material.uniforms;a.turbidity.value=10,a.rayleigh.value=1.443,a.mieCoefficient.value=.005,a.mieDirectionalG.value=.7,this.water=new ee(new fe(1e4,1e4),{textureWidth:1024,textureHeight:1024,color:"#1ca3ec",flowDirection:new xe(1,1),normalMap0:this.loader.load(F+"Water_1_M_Normal.jpg",function(r){r.wrapS=r.wrapT=I}),normalMap1:this.loader.load(F+"Water_2_M_Normal.jpg",function(r){r.wrapS=r.wrapT=I}),flowSpeed:.01}),this.water.position.y=-30,this.water.rotation.x=-Math.PI/2,this.scene.add(this.sky),this.scene.add(this.water),this.scene.add(this.lights.sky),this.scene.add(this.lights.hemi),this.scene.add(this.lights.amb),this.scene.add(new Ye(1e4,10,16777215,16777215)),this.scene.add(new Se(3))}this.loader.load(F+"sand1.jpg",a=>{a.wrapS=a.wrapT=I,this.loader.load(F+"grass1.jpg",r=>{this.loader.load(F+"stone1.jpg",n=>{this.loader.load(F+"snow1.jpg",s=>{this.regenerate(vt([{texture:a},{texture:r,levels:[-80,-35,20,50]},{texture:n,levels:[20,50,60,85]},{texture:s,glsl:"1.0 - smoothstep(65.0 + smoothstep(-256.0, 256.0, vPosition.x) * 10.0, 80.0, vPosition.z)"},{texture:n,glsl:"slope > 0.7853981633974483 ? 0.2 : 1.0 - smoothstep(0.47123889803846897, 0.7853981633974483, slope) + 0.2"}]))})})})});{this.gui=new Ze({autoPlace:!1}),this.gui.domElement.id="game-dat-gui";const a=this.gui.addFolder("Environment");a.add(this,"time",-90,90).name("Time").onChange(()=>this.updateStage()),a.open();const r=this.gui.addFolder("Game");r.add(this,"fireProjectile").name("Fire"),r.add(this,"useCamera",["world","plane","gun"]).name("Camera"),r.open()}this.fpsCamera=new me(60,1,1,1e4),this.scene.add(this.fpsCamera),this.plane=new Pt(this.fpsCamera),this.plane.position.set(100,100,-100),this.scene.add(this.plane),this.objects.push(this.plane),this.gun=new zt(this),this.scene.add(this.gun),this.gun.position.set(0,100,0),this.resize_observer=new ResizeObserver(this.on_resize.bind(this)),this.updateStage(),this.animation()}fireProjectile(){this.gun.fireProjectile()}attach(t){var e;this.parent&&(this.parent.removeChild(this.gui.domElement),this.parent.removeChild(this.stats.dom),this.parent.removeChild(this.renderer.domElement),this.resize_observer.unobserve(this.parent)),this.parent=t,t&&(t.appendChild(this.gui.domElement),t.appendChild(this.stats.dom),t.appendChild(this.renderer.domElement),this.resize_observer.observe(t),this.renderer.setPixelRatio(((e=t.ownerDocument.defaultView)==null?void 0:e.devicePixelRatio)??1))}animation(){requestAnimationFrame(()=>this.animation());const t=this.clock.getDelta();this.objects.forEach(e=>e.update(t)),this.objects.filter(e=>!this.scene.children.includes(e)).forEach(e=>{const a=this.objects.indexOf(e);this.objects.splice(a,1)}),this.controls.update(t),this.renderer.render(this.scene,this.useCamera==="plane"?this.fpsCamera:this.useCamera==="world"?this.camera:this.gun.camera),this.stats.update()}regenerate(t){this.options.material=t,this.terrainScene&&this.scene.remove(this.terrainScene),this.terrainScene=ht(this.options),this.scene.add(this.terrainScene),this.scatterMeshes(),this.placeGun()}scatterMeshes(){let t=60,e=xt(mt,this.options,2,.125)(),a=pt(t*.01);if(!this.terrainScene)return;let r=this.terrainScene.children[0].geometry,n=gt(r,{mesh:Wt(),w:this.options.xSize,h:this.options.ySize,spread:function(s,u){let l=e[u],p=!1;return l<a?p=!0:l<a+.2&&(p=Z((l-a)*5)*a<Math.random()),Math.random()<At(s.z)*5&&p},smoothSpread:.2,maxSlope:.6283185307179586,maxTilt:9});n&&this.terrainScene.add(n)}on_resize(){this.parent&&(this.renderer.setSize(this.parent.clientWidth,this.parent.clientHeight),this.camera.aspect=this.parent.clientWidth/this.parent.clientHeight,this.camera.updateProjectionMatrix(),this.fpsCamera.aspect=this.parent.clientWidth/this.parent.clientHeight,this.fpsCamera.updateProjectionMatrix())}updateStage(){const t=he.degToRad(90-this.time);this.renderer.toneMappingExposure=.5-Math.cos(t)*.25;const e=he.degToRad(180);this.sun.setFromSphericalCoords(1,t,e),this.sky.material.uniforms.sunPosition.value.copy(this.sun),yt(this.sky.material,this.lights.sky),this.lights.hemi.color.copy(this.lights.sky.color),this._renderTarget!==void 0&&this._renderTarget.dispose(),this.sceneEnv.add(this.sky),this._renderTarget=this.pmremGenerator.fromScene(this.sceneEnv),this.scene.add(this.sky),this.scene.environment=this._renderTarget.texture}resetCamera(){this.camera.position.x=449,this.camera.position.y=311,this.camera.position.z=376,this.camera.rotation.x=-52*Math.PI/180,this.camera.rotation.y=35*Math.PI/180,this.camera.rotation.z=37*Math.PI/180}placeGun(){this.terrainScene.children[0].geometry}}function At(i,t=60){return i>-80&&i<-50?Z((i+80)/30)*t*.002:i>-50&&i<20?t*.002:i>20&&i<50?Z((i-20)/30)*t*.002:0}function Wt(){const i=new ne({color:2968606}),t=new V(new N(2,2,12,6,1,!0),new ne({color:4007959}));t.position.setY(6);const e=new V(new N(0,10,14,8),i);e.position.setY(18);const a=new V(new N(0,9,13,8),i);a.position.setY(25);const r=new V(new N(0,8,12,8),i);r.position.setY(32);let n=new oe;return n.add(t),n.add(e),n.add(a),n.add(r),n.scale.set(5,1.25,5),n}const Dt=Ke({__name:"AirDefenceGame",setup(i){const t=$e(void 0);return Je(t,e=>{new Tt().attach(e)}),et(()=>{}),(e,a)=>(tt(),at("div",{id:"air-defence-game-parent",ref_key:"game_container",ref:t},null,512))}}),It=it(Dt,[["__scopeId","data-v-298dacf2"]]);export{It as default};
