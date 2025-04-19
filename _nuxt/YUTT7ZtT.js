var ap=Object.defineProperty;var cp=(n,e,t)=>e in n?ap(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var st=(n,e,t)=>cp(n,typeof e!="symbol"?e+"":e,t);import{ap as lp,aq as qc,ar as Ff,L as Of,as as Lr,s as nu,at as Oi,b as rt,w as Cn,au as tn,am as zr,av as up,aw as hp,ax as jc,a as Pt,V as ee,ay as Bf,Q as ma,az as fp,O as zf,aA as ds,aB as dp,a1 as Gt,x as pp,ah as Hf,ae as mp,ag as _p,ad as gp,af as Kc,a6 as kf,ai as Zt,aj as xp,a7 as vp,aC as yp,aD as ia,aE as Sp,M as Vf,D as nr,a4 as Gs,v as Ep,f as Zs,aF as Mp,c as sr,aG as Tp,aH as bp,aI as Ap,aJ as wp,G as Ua,q as Rp,K as Vt,p as Cp,aK as Pp,aL as Lp,aM as Dp,a2 as Ip,I as Gf,y as Np,$ as Nu,aN as Uu,aO as Fu,aP as Ou,aQ as Bu,aR as $c,aS as Up,j as Ai,d as Wf,u as Fp,aT as Op,aU as Bp,l as Qi,T as Sn,o as zu,R as su,t as ba,m as qr,ab as ct,a5 as zp,g as Xf,J as di,H as Ht,z as Hp,e as kp,W as ps,N as Vp,k as Gp,aV as Wp,ak as Xp,aW as Yp}from"./C4QezIMo.js";const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,Zc=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function qp(n,e){return(n%e+e)%e}function Oa(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==f||l!==p||u!==_){let m=1-a;const d=c*f+l*p+u*_+h*g,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),A=Math.atan2(T,d*v);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const x=a*v;if(c=c*m+f*x,l=l*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-a*p,e[t+2]=l*_+u*p+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new W,Hu=new Kr,jp="175",Kp=0,ku=1,$p=2,Yf=1,Zp=2,qi=3,Pn=0,Wt=1,$i=2,An=0,js=1,Vu=2,Gu=3,Wu=4,Jp=5,is=100,Qp=101,em=102,tm=103,im=104,nm=200,sm=201,rm=202,om=203,Jc=204,Qc=205,am=206,cm=207,lm=208,um=209,hm=210,fm=211,dm=212,pm=213,mm=214,el=0,tl=1,il=2,Js=3,nl=4,sl=5,rl=6,ol=7,qf=0,_m=1,gm=2,wn=0,xm=1,vm=2,ym=3,Sm=4,Em=5,Mm=6,Tm=7,jf=300,Qs=301,er=302,al=303,cl=304,Aa=306,ll=1e3,os=1001,ul=1002,bi=1003,bm=1004,no=1005,Di=1006,za=1007,as=1008,nn=1009,Kf=1010,$f=1011,Hr=1012,ru=1013,hs=1014,Zi=1015,$r=1016,ou=1017,au=1018,kr=1020,Zf=35902,Jf=1021,Qf=1022,Ti=1023,ed=1024,td=1025,Vr=1026,Gr=1027,id=1028,cu=1029,nd=1030,lu=1031,uu=1033,na=33776,sa=33777,ra=33778,oa=33779,hl=35840,fl=35841,dl=35842,pl=35843,ml=36196,_l=37492,gl=37496,xl=37808,vl=37809,yl=37810,Sl=37811,El=37812,Ml=37813,Tl=37814,bl=37815,Al=37816,wl=37817,Rl=37818,Cl=37819,Pl=37820,Ll=37821,aa=36492,Dl=36494,Il=36495,sd=36283,Nl=36284,Ul=36285,Fl=36286,Am=3200,wm=3201,Rm=0,Cm=1,vn="",oi="srgb",tr="srgb-linear",_a="linear",$e="srgb",xs=7680,Xu=519,Pm=512,Lm=513,Dm=514,rd=515,Im=516,Nm=517,Um=518,Fm=519,Yu=35044,qu="300 es",Ji=2e3,ga=2001;class vt{constructor(e,t,i,s,r,o,a,c,l,u,h,f,p,_,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,g,m)}set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,g=l*h;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,g=l*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Bm)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),on.crossVectors(i,qt),on.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),on.crossVectors(i,qt)),on.normalize(),so.crossVectors(qt,on),s[0]=on.x,s[4]=so.x,s[8]=qt.x,s[1]=on.y,s[5]=so.y,s[9]=qt.y,s[2]=on.z,s[6]=so.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],T=i[15],A=s[0],b=s[4],R=s[8],E=s[12],S=s[1],C=s[5],D=s[9],L=s[13],O=s[2],G=s[6],H=s[10],J=s[14],X=s[3],ne=s[7],de=s[11],Se=s[15];return r[0]=o*A+a*S+c*O+l*X,r[4]=o*b+a*C+c*G+l*ne,r[8]=o*R+a*D+c*H+l*de,r[12]=o*E+a*L+c*J+l*Se,r[1]=u*A+h*S+f*O+p*X,r[5]=u*b+h*C+f*G+p*ne,r[9]=u*R+h*D+f*H+p*de,r[13]=u*E+h*L+f*J+p*Se,r[2]=_*A+g*S+m*O+d*X,r[6]=_*b+g*C+m*G+d*ne,r[10]=_*R+g*D+m*H+d*de,r[14]=_*E+g*L+m*J+d*Se,r[3]=v*A+y*S+x*O+T*X,r[7]=v*b+y*C+x*G+T*ne,r[11]=v*R+y*D+x*H+T*de,r[15]=v*E+y*L+x*J+T*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*p-i*c*p)+g*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],v=h*m*l-g*f*l+g*c*p-a*m*p-h*c*d+a*f*d,y=_*f*l-u*m*l-_*c*p+o*m*p+u*c*d-o*f*d,x=u*g*l-_*h*l+_*a*p-o*g*p-u*a*d+o*h*d,T=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,A=t*v+i*y+s*x+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(g*f*r-h*m*r-g*s*p+i*m*p+h*s*d-i*f*d)*b,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*d+i*c*d)*b,e[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*p-i*c*p)*b,e[4]=y*b,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*d+t*f*d)*b,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*d-t*c*d)*b,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*b,e[8]=x*b,e[9]=(_*h*r-u*g*r-_*i*p+t*g*p+u*i*d-t*h*d)*b,e[10]=(o*g*r-_*a*r+_*i*l-t*g*l-o*i*d+t*a*d)*b,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*p-t*a*p)*b,e[12]=T*b,e[13]=(u*g*s-_*h*s+_*i*f-t*g*f-u*i*m+t*h*m)*b,e[14]=(_*a*s-o*g*s-_*i*c+t*g*c+o*i*m-t*a*m)*b,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,_=r*h,g=o*u,m=o*h,d=a*h,v=c*l,y=c*u,x=c*h,T=i.x,A=i.y,b=i.z;return s[0]=(1-(g+d))*T,s[1]=(p+x)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+d))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(_+y)*b,s[9]=(m-v)*b,s[10]=(1-(f+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);const l=1/r,u=1/o,h=1/a;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ji){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===Ji)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ga)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ji){const c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*l,p=(i+s)*u;let _,g;if(a===Ji)_=(o+r)*h,g=-2*h;else if(a===ga)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new W,gi=new vt,Om=new W(0,0,0),Bm=new W(1,1,1),on=new W,so=new W,qt=new W;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ju=new vt,Ku=new Kr;class sn{constructor(e=0,t=0,i=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}class De{constructor(e,t,i,s,r,o,a,c,l){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],g=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],T=s[2],A=s[5],b=s[8];return r[0]=o*g+a*v+c*T,r[3]=o*m+a*y+c*A,r[6]=o*d+a*x+c*b,r[1]=l*g+u*v+h*T,r[4]=l*m+u*y+h*A,r[7]=l*d+u*x+h*b,r[2]=f*g+p*v+_*T,r[5]=f*m+p*y+_*A,r[8]=f*d+p*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new De;let zm=0;const $u=new W,ys=new Kr,zi=new vt,ro=new W,ur=new W,Hm=new W,km=new Kr,Zu=new W(1,0,0),Ju=new W(0,1,0),Qu=new W(0,0,1),eh={type:"added"},Vm={type:"removed"},Ss={type:"childadded",child:null},ka={type:"childremoved",child:null};class $t extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new W,t=new sn,i=new Kr,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new De}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis(Ju,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis(Ju,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ur,ro,this.up):zi.lookAt(ro,ur,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(zi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new W(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gm extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const th=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===$e&&(s.r=en(s.r),s.g=en(s.g),s.b=en(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===$e&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?_a:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:th,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:$e,toXYZ:th,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}const Xe=Wm();function en(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=qp(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=oi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const i=ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Xe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Oe(Ct.r*255,0,255))*65536+Math.round(Oe(Ct.g*255,0,255))*256+Math.round(Oe(Ct.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=oi){Xe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,s=Ct.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(oo);const i=Oa(an.h,oo.h,t),s=Oa(an.s,oo.s,t),r=Oa(an.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ct=new Je;Je.NAMES=ad;class Zr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),co.subVectors(this.max,hr),Es.subVectors(e.a,hr),Ms.subVectors(e.b,hr),Ts.subVectors(e.c,hr),cn.subVectors(Ms,Es),ln.subVectors(Ts,Ms),zn.subVectors(Es,Ts);let t=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-zn.z,zn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,zn.z,0,-zn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-zn.y,zn.x,0];return!Ga(t,Es,Ms,Ts,co)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Es,Ms,Ts,co))?!1:(lo.crossVectors(cn,ln),t=[lo.x,lo.y,lo.z],Ga(t,Es,Ms,Ts,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new W,new W,new W,new W,new W,new W,new W,new W],xi=new W,ao=new Zr,Es=new W,Ms=new W,Ts=new W,cn=new W,ln=new W,zn=new W,hr=new W,co=new W,lo=new W,Hn=new W;function Ga(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hn.fromArray(n,r);const a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),u=i.dot(Hn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Xm=new Zr,fr=new W,Wa=new W;class hu{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Wa)),this.expandByPoint(fr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xa=new W,Ym=new W,qm=new De;class Jn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Xa.subVectors(i,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qm.getNormalMatrix(e),s=this.coplanarPoint(Xa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new hu,uo=new W;class cd{constructor(e=new Jn,t=new Jn,i=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],d=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,m-p,x-d).normalize(),i[1].setComponents(c+r,f+l,m+p,x+d).normalize(),i[2].setComponents(c+o,f+u,m+_,x+v).normalize(),i[3].setComponents(c-o,f-u,m-_,x-v).normalize(),i[4].setComponents(c-a,f-h,m-g,x-y).normalize(),t===Ji)i[5].setComponents(c+a,f+h,m+g,x+y).normalize();else if(t===ga)i[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(p+1)/2,T=(d+1)/2,A=(u+f)/4,b=(h+g)/4,R=(_+m)/4;return y>x&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=b/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=b/r,s=R/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function ld(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}const gt=new W,ho=new et;let Km=0;class Fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yu,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}}class ud extends Fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends Fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ls extends Fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}function fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $m(){const n=xa("canvas");return n.style.display="block",n}const nh={};function ca(n){n in nh||(nh[n]=!0,console.warn(n))}function Zm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Jm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}let e_=0;const ti=new vt,Ya=new $t,bs=new W,jt=new Zr,dr=new Zr,Mt=new W;class ms extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?hd:ud)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ls(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,dr.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,dr.max),jt.expandByPoint(Mt)):(jt.expandByPoint(dr.min),jt.expandByPoint(dr.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Mt.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(e,l),Mt.add(bs)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new W,c[R]=new W;const l=new W,u=new W,h=new W,f=new et,p=new et,_=new et,g=new W,m=new W;function d(R,E,S){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[R].add(g),a[E].add(g),a[S].add(g),c[R].add(m),c[E].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const S=v[R],C=S.start,D=S.count;for(let L=C,O=C+D;L<O;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new W,x=new W,T=new W,A=new W;function b(R){T.fromBufferAttribute(s,R),A.copy(T);const E=a[R];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(A,E);const C=x.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,E=v.length;R<E;++R){const S=v[R],C=S.start,D=S.count;for(let L=C,O=C+D;L<O;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new Fi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ms,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends ms{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ls(l,3)),this.setAttribute("normal",new ls(u,3)),this.setAttribute("uv",new ls(h,2));function _(g,m,d,v,y,x,T,A,b,R,E){const S=x/b,C=T/R,D=x/2,L=T/2,O=A/2,G=b+1,H=R+1;let J=0,X=0;const ne=new W;for(let de=0;de<H;de++){const Se=de*C-L;for(let Ue=0;Ue<G;Ue++){const Qe=Ue*S-D;ne[g]=Qe*v,ne[m]=Se*y,ne[d]=O,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[d]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ue/b),h.push(1-de/R),J+=1}}for(let de=0;de<R;de++)for(let Se=0;Se<b;Se++){const Ue=f+Se+G*de,Qe=f+Se+G*(de+1),j=f+(Se+1)+G*(de+1),se=f+(Se+1)+G*de;c.push(Ue,Qe,se),c.push(Qe,j,se),X+=6}a.addGroup(p,X,E),p+=X,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wa extends ms{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const v=d*f-o;for(let y=0;y<l;y++){const x=y*h-r;_.push(x,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const y=v+l*d,x=v+l*(d+1),T=v+1+l*(d+1),A=v+1+l*d;p.push(y,x,A),p.push(x,T,A)}this.setIndex(p),this.setAttribute("position",new ls(_,3)),this.setAttribute("normal",new ls(g,3)),this.setAttribute("uv",new ls(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}let t_=0;class Ra extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=js,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const s in i)e[s]=i[s]}return e}function i_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const n_={clone:ir,merge:Nt},s_=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,r_=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ln extends Ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const ki=new W,qa=new W,fo=new W,un=new W,ja=new W,po=new W,Ka=new W;class o_{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qa.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),un.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=un.dot(this.direction),c=-un.dot(fo),l=un.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qa).addScaledVector(fo,f),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,s,r){ja.subVectors(t,e),po.subVectors(i,e),Ka.crossVectors(ja,po);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,e);const c=a*this.direction.dot(po.crossVectors(un,po));if(c<0)return null;const l=a*this.direction.dot(ja.cross(un));if(l<0||c+l>o)return null;const u=-a*un.dot(Ka);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const vi=new W,Vi=new W,$a=new W,Gi=new W,As=new W,ws=new W,sh=new W,Za=new W,Ja=new W,Qa=new W,ec=new mt,tc=new mt,ic=new mt;class Ei{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vi.subVectors(e,t),s.cross(vi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vi.subVectors(s,t),Vi.subVectors(i,t),$a.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(Vi),c=vi.dot($a),l=Vi.dot(Vi),u=Vi.dot($a),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gi.x),c.addScaledVector(o,Gi.y),c.addScaledVector(a,Gi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ec.setScalar(0),tc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,i),ic.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ic,r.z),o}static isFrontFacing(e,t,i,s){return vi.subVectors(i,t),Vi.subVectors(e,t),vi.cross(Vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),vi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),ws.subVectors(r,i),Za.subVectors(e,i);const c=As.dot(Za),l=ws.dot(Za);if(c<=0&&l<=0)return t.copy(i);Ja.subVectors(e,s);const u=As.dot(Ja),h=ws.dot(Ja);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(As,o);Qa.subVectors(e,r);const p=As.dot(Qa),_=ws.dot(Qa);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(ws,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return sh.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(sh,a);const d=1/(m+g+f);return o=g*d,a=f*d,t.copy(i).addScaledVector(As,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pd extends Ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rh=new vt,Vn=new o_,mo=new hu,oh=new W,_o=new W,go=new W,xo=new W,nc=new W,vo=new W,ah=new W,yo=new W;class Ii extends $t{constructor(e=new ms,t=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(nc.fromBufferAttribute(h,e),o?vo.addScaledVector(nc,u):vo.addScaledVector(nc.sub(t),u))}t.add(vo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(mo.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(mo,oh)===null||Vn.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(rh),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const A=a.getX(x),b=a.getX(x+1),R=a.getX(x+2);s=So(this,d,e,i,l,u,h,A,b,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=So(this,o,e,i,l,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const A=x,b=x+1,R=x+2;s=So(this,d,e,i,l,u,h,A,b,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=m,y=m+1,x=m+2;s=So(this,o,e,i,l,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function a_(n,e,t,i,s,r,o,a){let c;if(e.side===Wt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Pn,a),c===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:n}}function So(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,_o),n.getVertexPosition(c,go),n.getVertexPosition(l,xo);const u=a_(n,e,t,i,_o,go,xo,ah);if(u){const h=new W;Ei.getBarycoord(ah,_o,go,xo,h),s&&(u.uv=Ei.getInterpolatedAttribute(s,a,c,l,h,new et)),r&&(u.uv1=Ei.getInterpolatedAttribute(r,a,c,l,h,new et)),o&&(u.normal=Ei.getInterpolatedAttribute(o,a,c,l,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new W,materialIndex:0};Ei.getNormal(_o,go,xo,f.normal),u.face=f,u.barycoord=h}return u}const c_=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,l_=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,u_=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,h_=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,f_=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,d_=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,p_=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
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

#endif
`,m_=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,__=`
#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`,g_=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,x_=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,v_=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,y_=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,S_=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,E_=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,M_=`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`,T_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,b_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,A_=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,w_=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,R_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,C_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,P_=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`,L_=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,D_=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,I_=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

#endif
`,N_=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,U_=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,F_=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,O_=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,B_=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,z_=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,H_=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,k_=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,V_=`
#ifdef USE_ENVMAP

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

#endif
`,G_=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,W_=`
#ifdef USE_ENVMAP

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

#endif
`,X_=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Y_=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,q_=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,j_=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,K_=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,$_=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Z_=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,J_=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,Q_=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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

#endif
`,eg=`
#ifdef USE_ENVMAP

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

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

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

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,tg=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,ig=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,ng=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,sg=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,rg=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
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

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

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

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,og=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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

// temporary
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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

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

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

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

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

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

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

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

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,ag=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

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

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

#endif
`,cg=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

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

#endif
`,lg=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,ug=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,hg=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,fg=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,dg=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,pg=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,mg=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,_g=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

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

#endif
`,gg=`
#if defined( USE_POINTS_UV )

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

#endif
`,xg=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,vg=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,yg=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,Sg=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Eg=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,Mg=`
#ifdef USE_MORPHTARGETS

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

#endif
`,Tg=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,bg=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

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

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,Ag=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

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

#endif
`,wg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Rg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Cg=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Pg=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Lg=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,Dg=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Ig=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,Ng=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Ug=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Fg=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
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
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
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

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Og=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Bg=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,zg=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Hg=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,kg=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Vg=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Gg=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

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

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,Wg=`

#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Xg=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,Yg=`
float getShadowMask() {

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

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,qg=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,jg=`
#ifdef USE_SKINNING

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

#endif
`,Kg=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,$g=`
#ifdef USE_SKINNING

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

#endif
`,Zg=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Jg=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Qg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,e0=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
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

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
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

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

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

vec3 CustomToneMapping( vec3 color ) { return color; }
`,t0=`
#ifdef USE_TRANSMISSION

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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,i0=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
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

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

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

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,n0=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,s0=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,r0=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,o0=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,a0=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,c0=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,l0=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,u0=`

#ifdef ENVMAP_TYPE_CUBE

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

}
`,h0=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,f0=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,d0=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
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

}
`,p0=`
#if DEPTH_PACKING == 3200

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

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`,m0=`
#define DISTANCE

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

}
`,_0=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
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
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,g0=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,x0=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,v0=`
uniform float scale;
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

}
`,y0=`
uniform vec3 diffuse;
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

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,S0=`
#include <common>
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

}
`,E0=`
uniform vec3 diffuse;
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

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
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

}
`,M0=`
#define LAMBERT

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

}
`,T0=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,b0=`
#define MATCAP

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

}
`,A0=`
#define MATCAP

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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,w0=`
#define NORMAL

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

}
`,R0=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
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

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,C0=`
#define PHONG

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

}
`,P0=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,L0=`
#define STANDARD

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
}
`,D0=`
#define STANDARD

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
#include <packing>
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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

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

}
`,I0=`
#define TOON

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

}
`,N0=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,U0=`
uniform float size;
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

}
`,F0=`
uniform vec3 diffuse;
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

}
`,O0=`
#include <common>
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

}
`,B0=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
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

}
`,z0=`
uniform float rotation;
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

}
`,H0=`
uniform vec3 diffuse;
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

}
`,Ne={alphahash_fragment:c_,alphahash_pars_fragment:l_,alphamap_fragment:u_,alphamap_pars_fragment:h_,alphatest_fragment:f_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:__,batching_vertex:g_,begin_vertex:x_,beginnormal_vertex:v_,bsdfs:y_,iridescence_fragment:S_,bumpmap_pars_fragment:E_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:R_,color_pars_vertex:C_,color_vertex:P_,common:L_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:I_,displacementmap_pars_vertex:N_,displacementmap_vertex:U_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:H_,envmap_common_pars_fragment:k_,envmap_pars_fragment:V_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:eg,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:Y_,fog_fragment:q_,fog_pars_fragment:j_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:$_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:tg,lights_toon_pars_fragment:ig,lights_phong_fragment:ng,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:_g,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:vg,morphinstance_vertex:yg,morphcolor_vertex:Sg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Tg,normal_fragment_begin:bg,normal_fragment_maps:Ag,normal_pars_fragment:wg,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Ng,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:qg,skinning_pars_vertex:jg,skinning_vertex:Kg,skinnormal_vertex:$g,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:i0,uv_pars_fragment:n0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:c0,backgroundCube_vert:l0,backgroundCube_frag:u0,cube_vert:h0,cube_frag:f0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:_0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:v0,linedashed_frag:y0,meshbasic_vert:S0,meshbasic_frag:E0,meshlambert_vert:M0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:A0,meshnormal_vert:w0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:I0,meshtoon_frag:N0,points_vert:U0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:H0},re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Pi={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Pi.physical={uniforms:Nt([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Eo={r:0,b:0,g:0},Gn=new sn,k0=new vt;function V0(n,e,t,i,s,r,o){const a=new Je(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1;const T=_(y);T===null?d(a,c):T&&T.isColor&&(d(T,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===Aa)?(u===void 0&&(u=new Ii(new Jr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ir(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gn.copy(x.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Gn)),u.material.toneMapped=Xe.getTransfer(T.colorSpace)!==$e,(h!==T||f!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ii(new wa(2,2),new Ln({name:"BackgroundMaterial",uniforms:ir(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(T.colorSpace)!==$e,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,x){y.getRGB(Eo,dd(n)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:g,addToRenderList:m,dispose:v}}function G0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,C,D,L,O){let G=!1;const H=h(L,D,C);r!==H&&(r=H,l(r.object)),G=p(S,L,D,O),G&&_(S,L,D,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,C,D,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,C,D){const L=D.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let G=O[C.id];G===void 0&&(G={},O[C.id]=G);let H=G[L];return H===void 0&&(H=f(c()),G[L]=H),H}function f(S){const C=[],D=[],L=[];for(let O=0;O<t;O++)C[O]=0,D[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,C,D,L){const O=r.attributes,G=C.attributes;let H=0;const J=D.getAttributes();for(const X in J)if(J[X].location>=0){const de=O[X];let Se=G[X];if(Se===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function _(S,C,D,L){const O={},G=C.attributes;let H=0;const J=D.getAttributes();for(const X in J)if(J[X].location>=0){let de=G[X];de===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),O[X]=Se,H++}r.attributes=O,r.attributesNum=H,r.index=L}function g(){const S=r.newAttributes;for(let C=0,D=S.length;C<D;C++)S[C]=0}function m(S){d(S,0)}function d(S,C){const D=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;D[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),O[S]!==C&&(n.vertexAttribDivisor(S,C),O[S]=C)}function v(){const S=r.newAttributes,C=r.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==S[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function y(S,C,D,L,O,G,H){H===!0?n.vertexAttribIPointer(S,C,D,O,G):n.vertexAttribPointer(S,C,D,L,O,G)}function x(S,C,D,L){g();const O=L.attributes,G=D.getAttributes(),H=C.defaultAttributeValues;for(const J in G){const X=G[J];if(X.location>=0){let ne=O[J];if(ne===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const de=ne.normalized,Se=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;const Qe=Ue.buffer,j=Ue.type,se=Ue.bytesPerElement,xe=j===n.INT||j===n.UNSIGNED_INT||ne.gpuType===ru;if(ne.isInterleavedBufferAttribute){const ae=ne.data,be=ae.stride,Ye=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let we=0;we<X.locationSize;we++)d(X.location+we,ae.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let we=0;we<X.locationSize;we++)m(X.location+we);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let we=0;we<X.locationSize;we++)y(X.location+we,Se/X.locationSize,j,de,be*se,(Ye+Se/X.locationSize*we)*se,xe)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)d(X.location+ae,ne.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae,Se/X.locationSize,j,de,Se*se,Se/X.locationSize*ae*se,xe)}}else if(H!==void 0){const de=H[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(X.location,de);break;case 3:n.vertexAttrib3fv(X.location,de);break;case 4:n.vertexAttrib4fv(X.location,de);break;default:n.vertexAttrib1fv(X.location,de)}}}}v()}function T(){R();for(const S in i){const C=i[S];for(const D in C){const L=C[D];for(const O in L)u(L[O].object),delete L[O];delete C[D]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const D in C){const L=C[D];for(const O in L)u(L[O].object),delete L[O];delete C[D]}delete i[S.id]}function b(S){for(const C in i){const D=i[C];if(D[S.id]===void 0)continue;const L=D[S.id];for(const O in L)u(L[O].object),delete L[O];delete D[S.id]}}function R(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function W0(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function X0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Ti&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Zi&&!R)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function Y0(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Jn,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,y=v*4;let x=d.clippingState||null;c.value=x,x=u(_,f,y,p);for(let T=0;T!==y;++T)x[T]=t[T];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}let Rs;class q0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=xa("canvas")),Rs.width=e.width,Rs.height=e.height;const s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=en(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(en(t[i]/255)*255):t[i]=en(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j0=0;class fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sc(s[o].image)):r.push(sc(s[o]))}else r=sc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K0=0;class Xt extends rr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=os,s=os,r=Di,o=as,a=Ti,c=nn,l=Xt.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=jr(),this.name="",this.source=new fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=jf;Xt.DEFAULT_ANISOTROPY=1;class $0 extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends $0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class md extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new W,ch=new et,lh=new et;class ai extends md{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zc*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,ch,lh),t.subVectors(lh,ch)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Ps=1;class Z0 extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ai(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const r=new ai(Cs,Ps,e,t);r.layers=this.layers,this.add(r);const o=new ai(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const a=new ai(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const c=new ai(Cs,Ps,e,t);c.layers=this.layers,this.add(c);const l=new ai(Cs,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _d extends Xt{constructor(e=[],t=Qs,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J0 extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _d(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:An});r.uniforms.tEquirect.value=t;const o=new Ii(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Di),new Z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Q0(n){let e=new WeakMap;function t(o,a){return a===al?o.mapping=Qs:a===cl&&(o.mapping=er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===al||a===cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new J0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ex extends md{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,uh=[.125,.215,.35,.446,.526,.582],ns=20,rc=new ex,hh=new Je;let oc=null,ac=0,cc=0,lc=!1;const Qn=(1+Math.sqrt(5))/2,Ls=1/Qn,fh=[new W(-Qn,Ls,0),new W(Qn,Ls,0),new W(-Ls,0,Qn),new W(Ls,0,Qn),new W(0,Qn,-Ls),new W(0,Qn,Ls),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],tx=new W;class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=tx}=r;oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,cc),this._renderer.xr.enabled=lc,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:$r,format:Ti,colorSpace:tr,depthBuffer:!1},s=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=nx(r,e,t)}return s}_compileMaterial(e){const t=new Ii(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,i,s,r){const c=new ai(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(hh),h.toneMapping=wn,h.autoClear=!1;const _=new pd({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Ii(new Jr,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(hh),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const x=this._cubeSize;Mo(s,y*x,v>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qs||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ii(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Mo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,rc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fh[(s-r-1)%fh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ii(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const d=[];let v=0;for(let b=0;b<ns;++b){const R=b/g,E=Math.exp(-R*R/2);d.push(E),b===0?v+=E:b<m&&(v+=2*E)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const x=this._sizeLods[s],T=3*x*(s>y-Ws?s-y+Ws:0),A=4*(this._cubeSize-x);Mo(t,T,A,3*x,2*x),c.setRenderTarget(t),c.render(h,rc)}}function ix(n){const e=[],t=[],i=[];let s=n;const r=n-Ws+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ws?c=uh[o-n+Ws-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,R=A>2?0:-1,E=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(E,g*_*A),y.set(f,m*_*A);const S=[A,A,A,A,A,A];x.set(S,d*_*A)}const T=new ms;T.setAttribute("position",new Fi(v,g)),T.setAttribute("uv",new Fi(y,m)),T.setAttribute("faceIndex",new Fi(x,d)),e.push(T),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ph(n,e,t){const i=new fs(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nx(n,e,t){const i=new Float32Array(ns),s=new W(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function mh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function _h(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function sx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===al||c===cl,u=c===Qs||c===er;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new dh(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new dh(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],A=v[y+1],b=v[y+2];f.push(T,A,A,b,b,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,A=y+1,b=y+2;f.push(T,A,A,b,b,T)}}else return;const m=new(fd(f)?hd:ud)(f,1);m.version=g;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ax(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,g,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v]*g[v];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}class gd extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}function lx(n,e,t){const i=new WeakMap,s=new mt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*T*4*h),b=new gd(A,x,T,h);b.type=Zi,b.needsUpdate=!0;const R=y*4;for(let S=0;S<h;S++){const C=m[S],D=d[S],L=v[S],O=x*T*4*S;for(let G=0;G<C.count;G++){const H=G*R;p===!0&&(s.fromBufferAttribute(C,G),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),_===!0&&(s.fromBufferAttribute(D,G),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),g===!0&&(s.fromBufferAttribute(L,G),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new et(x,T)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ux(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class hx extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xd extends Xt{constructor(e,t,i=hs,s,r,o,a=bi,c=bi,l,u=Vr){if(u!==Vr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vd=new Xt,gh=new xd(1,1),yd=new gd,Sd=new hx,Ed=new _d,xh=[],vh=[],yh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),Et(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Sh.set(i),n.uniformMatrix3fv(this.addr,!1,Sh),Et(t,i)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),Et(t,i)}}function vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function wx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gh.compareFunction=rd,r=gh):r=vd,t.setTexture2D(e||r,s)}function Rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sd,s)}function Cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ed,s)}function Px(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yd,s)}function Lx(n){switch(n){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Sx;case 35669:case 35673:return Ex;case 5125:return Mx;case 36294:return Tx;case 36295:return bx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Ix(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function Nx(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function Ux(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function Fx(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ox(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bx(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zx(n,e){n.uniform1iv(this.addr,e)}function Hx(n,e){n.uniform2iv(this.addr,e)}function kx(n,e){n.uniform3iv(this.addr,e)}function Vx(n,e){n.uniform4iv(this.addr,e)}function Gx(n,e){n.uniform1uiv(this.addr,e)}function Wx(n,e){n.uniform2uiv(this.addr,e)}function Xx(n,e){n.uniform3uiv(this.addr,e)}function Yx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){const i=this.cache,s=e.length,r=Ca(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vd,r[o])}function jx(n,e,t){const i=this.cache,s=e.length,r=Ca(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sd,r[o])}function Kx(n,e,t){const i=this.cache,s=e.length,r=Ca(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ed,r[o])}function $x(n,e,t){const i=this.cache,s=e.length,r=Ca(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function Zx(n){switch(n){case 5126:return Dx;case 35664:return Ix;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return $x}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}}class Qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zx(t.type)}}class ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Mh(n,e){n.seq.push(e),n.map[e.id]=e}function tv(n,e,t){const i=n.name,s=i.length;for(uc.lastIndex=0;;){const r=uc.exec(i),o=uc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(t,l===void 0?new Jx(a,n,e):new Qx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ev(a),Mh(t,h)),t=h}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iv=37297;let nv=0;function sv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const bh=new De;function rv(n){Xe._getMatrix(bh,Xe.workingColorSpace,n);const e=`mat3( ${bh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ah(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sv(n.getShaderSource(e),o)}else return s}function ov(n,e){const t=rv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function av(n,e){let t;switch(e){case xm:t="Linear";break;case vm:t="Reinhard";break;case ym:t="Cineon";break;case Sm:t="ACESFilmic";break;case Mm:t="AgX";break;case Tm:t="Neutral";break;case Em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const To=new W;function cv(){Xe.getLuminanceCoefficients(To);const n=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function uv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ar(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(fv,pv)}const dv=new Map;function pv(n,e){let t=Ne[e];if(t===void 0){const i=dv.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(mv,_v)}function _v(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case er:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case _m:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ev(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=gv(t),l=xv(t),u=vv(t),h=yv(t),f=Sv(t),p=lv(t),_=uv(r),g=s.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ar).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==wn?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),o=Ol(o),o=wh(o,t),o=Rh(o,t),a=Ol(a),a=wh(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+o,x=v+d+a,T=Th(s,s.VERTEX_SHADER,y),A=Th(s,s.FRAGMENT_SHADER,x);s.attachShader(g,T),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(A).trim();let G=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,A);else{const J=Ah(s,T,"vertex"),X=Ah(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+J+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||O==="")&&(H=!1);H&&(C.diagnostics={runnable:G,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(T),s.deleteShader(A),R=new la(s,g),E=hv(s,g)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,iv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let Mv=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bv(e),t.set(e,i)),i}}class bv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function Av(n,e,t,i,s,r,o){const a=new od,c=new Tv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,C,D,L){const O=D.fog,G=L.geometry,H=E.isMeshStandardMaterial?D.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),X=J&&J.mapping===Aa?J.image.height:null,ne=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const de=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=de!==void 0?de.length:0;let Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let Qe,j,se,xe;if(ne){const Ke=Pi[ne];Qe=Ke.vertexShader,j=Ke.fragmentShader}else Qe=E.vertexShader,j=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),xe=c.getFragmentShaderID(E);const ae=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ye=L.isInstancedMesh===!0,we=L.isBatchedMesh===!0,dt=!!E.map,lt=!!E.matcap,Be=!!J,I=!!E.aoMap,Jt=!!E.lightMap,ke=!!E.bumpMap,ze=!!E.normalMap,Ee=!!E.displacementMap,nt=!!E.emissiveMap,ye=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,Q=E.iridescence>0,q=E.sheen>0,ve=E.transmission>0,ce=M&&!!E.anisotropyMap,pe=B&&!!E.clearcoatMap,Ve=B&&!!E.clearcoatNormalMap,ie=B&&!!E.clearcoatRoughnessMap,me=Q&&!!E.iridescenceMap,Ae=Q&&!!E.iridescenceThicknessMap,Ce=q&&!!E.sheenColorMap,_e=q&&!!E.sheenRoughnessMap,He=!!E.specularMap,Ie=!!E.specularColorMap,tt=!!E.specularIntensityMap,N=ve&&!!E.transmissionMap,le=ve&&!!E.thicknessMap,Y=!!E.gradientMap,Z=!!E.alphaMap,he=E.alphaTest>0,ue=!!E.alphaHash,Le=!!E.extensions;let ut=wn;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ut=n.toneMapping);const wt={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:j,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&L._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&L.instanceColor!==null,instancingMorph:Ye&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tr,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:lt,envMap:Be,envMapMode:Be&&J.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:Jt,bumpMap:ke,normalMap:ze,displacementMap:f&&Ee,emissiveMap:nt,normalMapObjectSpace:ze&&E.normalMapType===Cm,normalMapTangentSpace:ze&&E.normalMapType===Rm,metalnessMap:ye,roughnessMap:P,anisotropy:M,anisotropyMap:ce,clearcoat:B,clearcoatMap:pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ie,dispersion:$,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:He,specularColorMap:Ie,specularIntensityMap:tt,transmission:ve,transmissionMap:N,thicknessMap:le,gradientMap:Y,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:ue,combine:E.combine,mapUv:dt&&g(E.map.channel),aoMapUv:I&&g(E.aoMap.channel),lightMapUv:Jt&&g(E.lightMap.channel),bumpMapUv:ke&&g(E.bumpMap.channel),normalMapUv:ze&&g(E.normalMap.channel),displacementMapUv:Ee&&g(E.displacementMap.channel),emissiveMapUv:nt&&g(E.emissiveMap.channel),metalnessMapUv:ye&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:ce&&g(E.anisotropyMap.channel),clearcoatMapUv:pe&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(E.sheenRoughnessMap.channel),specularMapUv:He&&g(E.specularMap.channel),specularColorMapUv:Ie&&g(E.specularColorMap.channel),specularIntensityMapUv:tt&&g(E.specularIntensityMap.channel),transmissionMapUv:N&&g(E.transmissionMap.channel),thicknessMapUv:le&&g(E.thicknessMap.channel),alphaMapUv:Z&&g(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ze||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(dt||Z),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&Xe.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$i,flipSided:E.side===Wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=_[E.type];let C;if(S){const D=Pi[S];C=n_.clone(D.uniforms)}else C=E.uniforms;return C}function T(E,S){let C;for(let D=0,L=u.length;D<L;D++){const O=u[D];if(O.cacheKey===S){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Ev(n,S,E,r),u.push(C)),C}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function wv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,_,g,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function a(h,f,p,_,g,m){const d=o(h,f,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,_,g,m){const d=o(h,f,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Rv),i.length>1&&i.sort(f||Lh),s.length>1&&s.sort(f||Lh)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Cv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Dh,n.set(i,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Je};break;case"SpotLight":t={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Lv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dv=0;function Iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nv(n){const e=new Pv,t=Lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const s=new W,r=new vt,o=new vt;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,v=0,y=0,x=0,T=0,A=0,b=0;l.sort(Iv);for(let E=0,S=l.length;E<S;E++){const C=l[E],D=C.color,L=C.intensity,O=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*L,h+=D.g*L,f+=D.b*L;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],L);b++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(D).multiplyScalar(L),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[g]=H;const J=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,J.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[g]=J.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.spotShadow[g]=X,i.spotShadowMap[g]=G,x++}g++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(D).multiplyScalar(L),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=C.shadow.matrix,y++}i.point[_]=H,_++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(L),H.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=b,i.version=Dv++)}function c(l,u){let h=0,f=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const y=l[d];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function Ih(n){const e=new Nv(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ih(n),e.set(s,[a])):r>=o.length?(a=new Ih(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Fv extends Ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ov extends Ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,zv=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Hv(n,e,t){let i=new cd;const s=new et,r=new et,o=new mt,a=new Fv({depthPacking:wm}),c=new Ov,l={},u=t.maxTextureSize,h={[Pn]:Wt,[Wt]:Pn,[$i]:$i},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ms;_.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ii(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let d=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(An),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=d!==qi&&this.type===qi,O=d===qi&&this.type!==qi;for(let G=0,H=A.length;G<H;G++){const J=A[G],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ne=X.getFrameExtents();if(s.multiply(ne),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,X.mapSize.y=r.y)),X.map===null||L===!0||O===!0){const Se=this.type!==qi?{minFilter:bi,magFilter:bi}:{};X.map!==null&&X.map.dispose(),X.map=new fs(s.x,s.y,Se),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const de=X.getViewportCount();for(let Se=0;Se<de;Se++){const Ue=X.getViewport(Se);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),D.viewport(o),X.updateMatrices(J,Se),i=X.getFrustum(),x(b,R,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===qi&&v(X,R),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,C)};function v(A,b){const R=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fs(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(b,null,R,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(b,null,R,p,g,null)}function y(A,b,R,E){let S=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=S.uuid,L=b.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let G=O[L];G===void 0&&(G=S.clone(),O[L]=G,b.addEventListener("dispose",T)),S=G}if(S.visible=b.visible,S.wireframe=b.wireframe,E===qi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=n.properties.get(S);D.light=R}return S}function x(A,b,R,E,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===qi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const L=e.update(A),O=A.material;if(Array.isArray(O)){const G=L.groups;for(let H=0,J=G.length;H<J;H++){const X=G[H],ne=O[X.materialIndex];if(ne&&ne.visible){const de=y(A,ne,E,S);A.onBeforeShadow(n,A,b,R,L,de,X),n.renderBufferDirect(R,null,L,de,A,X),A.onAfterShadow(n,A,b,R,L,de,X)}}}else if(O.visible){const G=y(A,O,E,S);A.onBeforeShadow(n,A,b,R,L,G,null),n.renderBufferDirect(R,null,L,G,A,null),A.onAfterShadow(n,A,b,R,L,G,null)}}const D=A.children;for(let L=0,O=D.length;L<O;L++)x(D[L],b,R,E,S)}function T(A){A.target.removeEventListener("dispose",T);for(const R in l){const E=l[R],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const kv={[el]:tl,[il]:rl,[nl]:ol,[Js]:sl,[tl]:el,[rl]:il,[ol]:nl,[sl]:Js};function Vv(n,e){function t(){let N=!1;const le=new mt;let Y=null;const Z=new mt(0,0,0,0);return{setMask:function(he){Y!==he&&!N&&(n.colorMask(he,he,he,he),Y=he)},setLocked:function(he){N=he},setClear:function(he,ue,Le,ut,wt){wt===!0&&(he*=ut,ue*=ut,Le*=ut),le.set(he,ue,Le,ut),Z.equals(le)===!1&&(n.clearColor(he,ue,Le,ut),Z.copy(le))},reset:function(){N=!1,Y=null,Z.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Y=null,Z=null,he=null;return{setReversed:function(ue){if(le!==ue){const Le=e.get("EXT_clip_control");ue?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),le=ue;const ut=he;he=null,this.setClear(ut)}},getReversed:function(){return le},setTest:function(ue){ue?ae(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ue){Y!==ue&&!N&&(n.depthMask(ue),Y=ue)},setFunc:function(ue){if(le&&(ue=kv[ue]),Z!==ue){switch(ue){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ue}},setLocked:function(ue){N=ue},setClear:function(ue){he!==ue&&(le&&(ue=1-ue),n.clearDepth(ue),he=ue)},reset:function(){N=!1,Y=null,Z=null,he=null,le=!1}}}function s(){let N=!1,le=null,Y=null,Z=null,he=null,ue=null,Le=null,ut=null,wt=null;return{setTest:function(Ke){N||(Ke?ae(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!N&&(n.stencilMask(Ke),le=Ke)},setFunc:function(Ke,mi,Bi){(Y!==Ke||Z!==mi||he!==Bi)&&(n.stencilFunc(Ke,mi,Bi),Y=Ke,Z=mi,he=Bi)},setOp:function(Ke,mi,Bi){(ue!==Ke||Le!==mi||ut!==Bi)&&(n.stencilOp(Ke,mi,Bi),ue=Ke,Le=mi,ut=Bi)},setLocked:function(Ke){N=Ke},setClear:function(Ke){wt!==Ke&&(n.clearStencil(Ke),wt=Ke)},reset:function(){N=!1,le=null,Y=null,Z=null,he=null,ue=null,Le=null,ut=null,wt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,A=null,b=new Je(0,0,0),R=0,E=!1,S=null,C=null,D=null,L=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let ne=null,de={};const Se=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Qe=new mt().fromArray(Se),j=new mt().fromArray(Ue);function se(N,le,Y,Z){const he=new Uint8Array(4),ue=n.createTexture();n.bindTexture(N,ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<Y;Le++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(le+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ue}const xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(Js),ke(!1),ze(ku),ae(n.CULL_FACE),I(An);function ae(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ye(N,le){return h[N]!==le?(n.bindFramebuffer(N,le),h[N]=le,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function we(N,le){let Y=p,Z=!1;if(N){Y=f.get(le),Y===void 0&&(Y=[],f.set(le,Y));const he=N.textures;if(Y.length!==he.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Le=he.length;ue<Le;ue++)Y[ue]=n.COLOR_ATTACHMENT0+ue;Y.length=he.length,Z=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Z=!0);Z&&n.drawBuffers(Y)}function dt(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const lt={[is]:n.FUNC_ADD,[Qp]:n.FUNC_SUBTRACT,[em]:n.FUNC_REVERSE_SUBTRACT};lt[tm]=n.MIN,lt[im]=n.MAX;const Be={[nm]:n.ZERO,[sm]:n.ONE,[rm]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[hm]:n.SRC_ALPHA_SATURATE,[lm]:n.DST_COLOR,[am]:n.DST_ALPHA,[om]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[um]:n.ONE_MINUS_DST_COLOR,[cm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[pm]:n.CONSTANT_ALPHA,[mm]:n.ONE_MINUS_CONSTANT_ALPHA};function I(N,le,Y,Z,he,ue,Le,ut,wt,Ke){if(N===An){g===!0&&(be(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),N!==Jp){if(N!==m||Ke!==E){if((d!==is||x!==is)&&(n.blendEquation(n.FUNC_ADD),d=is,x=is),Ke)switch(N){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,T=null,A=null,b.set(0,0,0),R=0,m=N,E=Ke}return}he=he||le,ue=ue||Y,Le=Le||Z,(le!==d||he!==x)&&(n.blendEquationSeparate(lt[le],lt[he]),d=le,x=he),(Y!==v||Z!==y||ue!==T||Le!==A)&&(n.blendFuncSeparate(Be[Y],Be[Z],Be[ue],Be[Le]),v=Y,y=Z,T=ue,A=Le),(ut.equals(b)===!1||wt!==R)&&(n.blendColor(ut.r,ut.g,ut.b,wt),b.copy(ut),R=wt),m=N,E=!1}function Jt(N,le){N.side===$i?be(n.CULL_FACE):ae(n.CULL_FACE);let Y=N.side===Wt;le&&(Y=!Y),ke(Y),N.blending===js&&N.transparent===!1?I(An):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function ze(N){N!==Kp?(ae(n.CULL_FACE),N!==C&&(N===ku?n.cullFace(n.BACK):N===$p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),C=N}function Ee(N){N!==D&&(H&&n.lineWidth(N),D=N)}function nt(N,le,Y){N?(ae(n.POLYGON_OFFSET_FILL),(L!==le||O!==Y)&&(n.polygonOffset(le,Y),L=le,O=Y)):be(n.POLYGON_OFFSET_FILL)}function ye(N){N?ae(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+G-1),ne!==N&&(n.activeTexture(N),ne=N)}function M(N,le,Y){Y===void 0&&(ne===null?Y=n.TEXTURE0+G-1:Y=ne);let Z=de[Y];Z===void 0&&(Z={type:void 0,texture:void 0},de[Y]=Z),(Z.type!==N||Z.texture!==le)&&(ne!==Y&&(n.activeTexture(Y),ne=Y),n.bindTexture(N,le||xe[N]),Z.type=N,Z.texture=le)}function B(){const N=de[ne];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){Qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Qe.copy(N))}function _e(N){j.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function He(N,le){let Y=l.get(le);Y===void 0&&(Y=new WeakMap,l.set(le,Y));let Z=Y.get(N);Z===void 0&&(Z=n.getUniformBlockIndex(le,N.name),Y.set(N,Z))}function Ie(N,le){const Z=l.get(le).get(N);c.get(le)!==Z&&(n.uniformBlockBinding(le,Z,N.__bindingPointIndex),c.set(le,Z))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,de={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,v=null,y=null,x=null,T=null,A=null,b=new Je(0,0,0),R=0,E=!1,S=null,C=null,D=null,L=null,O=null,Qe.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:be,bindFramebuffer:Ye,drawBuffers:we,useProgram:dt,setBlending:I,setMaterial:Jt,setFlipSided:ke,setCullFace:ze,setLineWidth:Ee,setPolygonOffset:nt,setScissorTest:ye,activeTexture:P,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:me,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:ie,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ce,viewport:_e,reset:tt}}function Nh(n,e,t,i){const s=Gv(i);switch(t){case Jf:return n*e;case ed:return n*e;case td:return n*e*2;case id:return n*e/s.components*s.byteLength;case cu:return n*e/s.components*s.byteLength;case nd:return n*e*2/s.components*s.byteLength;case lu:return n*e*2/s.components*s.byteLength;case Qf:return n*e*3/s.components*s.byteLength;case Ti:return n*e*4/s.components*s.byteLength;case uu:return n*e*4/s.components*s.byteLength;case na:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case pl:return Math.max(n,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(n,8)*Math.max(e,8)/2;case ml:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case aa:case Dl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sd:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gv(n){switch(n){case nn:case Kf:return{byteLength:1,components:1};case Hr:case $f:case $r:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case hs:case ru:case Zi:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Wv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return p?new OffscreenCanvas(P,M):xa("canvas")}function g(P,M,B){let $=1;const Q=ye(P);if((Q.width>B||Q.height>B)&&($=B/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor($*Q.width),ve=Math.floor($*Q.height);h===void 0&&(h=_(q,ve));const ce=M?_(q,ve):h;return ce.width=q,ce.height=ve,ce.getContext("2d").drawImage(P,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+ve+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,M,B,$,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=M;if(M===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),M===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const ve=Q?_a:Xe.getTransfer($);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=ve===$e?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(P,M){let B;return P?M===null||M===hs||M===kr?B=n.DEPTH24_STENCIL8:M===Zi?B=n.DEPTH32F_STENCIL8:M===Hr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hs||M===kr?B=n.DEPTH_COMPONENT24:M===Zi?B=n.DEPTH_COMPONENT32F:M===Hr&&(B=n.DEPTH_COMPONENT16),B}function T(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bi&&P.minFilter!==Di?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){const M=P.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&u.delete(M)}function b(P){const M=P.target;M.removeEventListener("dispose",b),S(M)}function R(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,$=f.get(B);if($){const Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(P),Object.keys($).length===0&&f.delete(B)}i.remove(P)}function E(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const B=P.source,$=f.get(B);delete $[M.__cacheKey],o.memory.textures--}function S(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=P.textures;for(let $=0,Q=B.length;$<Q;$++){const q=i.get(B[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(P)}let C=0;function D(){C=0}function L(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function O(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function G(P,M){const B=i.get(P);if(P.isVideoTexture&&Ee(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,P,M);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function H(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function J(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function X(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){se(B,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const ne={[ll]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},de={[bi]:n.NEAREST,[bm]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},Se={[Pm]:n.NEVER,[Fm]:n.ALWAYS,[Lm]:n.LESS,[rd]:n.LEQUAL,[Dm]:n.EQUAL,[Um]:n.GEQUAL,[Im]:n.GREATER,[Nm]:n.NOTEQUAL};function Ue(P,M){if(M.type===Zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Di||M.magFilter===za||M.magFilter===no||M.magFilter===as||M.minFilter===Di||M.minFilter===za||M.minFilter===no||M.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,de[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bi||M.minFilter!==no&&M.minFilter!==as||M.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qe(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const q=O(M);if(q!==P.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[q].usedTimes++;const ve=Q[P.__cacheKey];ve!==void 0&&(Q[P.__cacheKey].usedTimes--,ve.usedTimes===0&&E(M)),P.__cacheKey=q,P.__webglTexture=Q[q].texture}return B}function j(P,M,B){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const Q=Qe(P,M),q=M.source;t.bindTexture($,P.__webglTexture,n.TEXTURE0+B);const ve=i.get(q);if(q.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const ce=Xe.getPrimaries(Xe.workingColorSpace),pe=M.colorSpace===vn?null:Xe.getPrimaries(M.colorSpace),Ve=M.colorSpace===vn||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ie=g(M.image,!1,s.maxTextureSize);ie=nt(M,ie);const me=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type);let Ce=y(M.internalFormat,me,Ae,M.colorSpace,M.isVideoTexture);Ue($,M);let _e;const He=M.mipmaps,Ie=M.isVideoTexture!==!0,tt=ve.__version===void 0||Q===!0,N=q.dataReady,le=T(M,ie);if(M.isDepthTexture)Ce=x(M.format===Gr,M.type),tt&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Ae,null));else if(M.isDataTexture)if(He.length>0){Ie&&tt&&t.texStorage2D(n.TEXTURE_2D,le,Ce,He[0].width,He[0].height);for(let Y=0,Z=He.length;Y<Z;Y++)_e=He[Y],Ie?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,me,Ae,_e.data);M.generateMipmaps=!1}else Ie?(tt&&t.texStorage2D(n.TEXTURE_2D,le,Ce,ie.width,ie.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,me,Ae,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,me,Ae,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ce,He[0].width,He[0].height,ie.depth);for(let Y=0,Z=He.length;Y<Z;Y++)if(_e=He[Y],M.format!==Ti)if(me!==null)if(Ie){if(N)if(M.layerUpdates.size>0){const he=Nh(_e.width,_e.height,M.format,M.type);for(const ue of M.layerUpdates){const Le=_e.data.subarray(ue*he/_e.data.BYTES_PER_ELEMENT,(ue+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ue,_e.width,_e.height,1,me,Le)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,me,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ce,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,ie.depth,me,Ae,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ce,_e.width,_e.height,ie.depth,0,me,Ae,_e.data)}else{Ie&&tt&&t.texStorage2D(n.TEXTURE_2D,le,Ce,He[0].width,He[0].height);for(let Y=0,Z=He.length;Y<Z;Y++)_e=He[Y],M.format!==Ti?me!==null?Ie?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,me,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,Y,Ce,_e.width,_e.height,0,me,Ae,_e.data)}else if(M.isDataArrayTexture)if(Ie){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ce,ie.width,ie.height,ie.depth),N)if(M.layerUpdates.size>0){const Y=Nh(ie.width,ie.height,M.format,M.type);for(const Z of M.layerUpdates){const he=ie.data.subarray(Z*Y/ie.data.BYTES_PER_ELEMENT,(Z+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,me,Ae,he)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ae,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,me,Ae,ie.data);else if(M.isData3DTexture)Ie?(tt&&t.texStorage3D(n.TEXTURE_3D,le,Ce,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ae,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,me,Ae,ie.data);else if(M.isFramebufferTexture){if(tt)if(Ie)t.texStorage2D(n.TEXTURE_2D,le,Ce,ie.width,ie.height);else{let Y=ie.width,Z=ie.height;for(let he=0;he<le;he++)t.texImage2D(n.TEXTURE_2D,he,Ce,Y,Z,0,me,Ae,null),Y>>=1,Z>>=1}}else if(He.length>0){if(Ie&&tt){const Y=ye(He[0]);t.texStorage2D(n.TEXTURE_2D,le,Ce,Y.width,Y.height)}for(let Y=0,Z=He.length;Y<Z;Y++)_e=He[Y],Ie?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me,Ae,_e):t.texImage2D(n.TEXTURE_2D,Y,Ce,me,Ae,_e);M.generateMipmaps=!1}else if(Ie){if(tt){const Y=ye(ie);t.texStorage2D(n.TEXTURE_2D,le,Ce,Y.width,Y.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ae,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ce,me,Ae,ie);m(M)&&d($),ve.__version=q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function se(P,M,B){if(M.image.length!==6)return;const $=Qe(P,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const ve=Xe.getPrimaries(Xe.workingColorSpace),ce=M.colorSpace===vn?null:Xe.getPrimaries(M.colorSpace),pe=M.colorSpace===vn||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ve&&!ie?me[Z]=g(M.image[Z],!0,s.maxCubemapSize):me[Z]=ie?M.image[Z].image:M.image[Z],me[Z]=nt(M,me[Z]);const Ae=me[0],Ce=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),He=y(M.internalFormat,Ce,_e,M.colorSpace),Ie=M.isVideoTexture!==!0,tt=q.__version===void 0||$===!0,N=Q.dataReady;let le=T(M,Ae);Ue(n.TEXTURE_CUBE_MAP,M);let Y;if(Ve){Ie&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,He,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){Y=me[Z].mipmaps;for(let he=0;he<Y.length;he++){const ue=Y[he];M.format!==Ti?Ce!==null?Ie?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,He,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ue.width,ue.height,Ce,_e,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,He,ue.width,ue.height,0,Ce,_e,ue.data)}}}else{if(Y=M.mipmaps,Ie&&tt){Y.length>0&&le++;const Z=ye(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Ie?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ce,_e,me[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,me[Z].width,me[Z].height,0,Ce,_e,me[Z].data);for(let he=0;he<Y.length;he++){const Le=Y[he].image[Z].image;Ie?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Le.width,Le.height,Ce,_e,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,He,Le.width,Le.height,0,Ce,_e,Le.data)}}else{Ie?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,_e,me[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Ce,_e,me[Z]);for(let he=0;he<Y.length;he++){const ue=Y[he];Ie?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ce,_e,ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,He,Ce,_e,ue.image[Z])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function xe(P,M,B,$,Q,q){const ve=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),pe=y(B.internalFormat,ve,ce,B.colorSpace),Ve=i.get(M),ie=i.get(B);if(ie.__renderTarget=M,!Ve.__hasExternalTextures){const me=Math.max(1,M.width>>q),Ae=Math.max(1,M.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,pe,me,Ae,M.depth,0,ve,ce,null):t.texImage2D(Q,q,pe,me,Ae,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,ie.__webglTexture,0,ke(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,ie.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,q=x(M.stencilBuffer,Q),ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=ke(M);ze(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,P)}else{const $=M.textures;for(let Q=0;Q<$.length;Q++){const q=$[Q],ve=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),pe=y(q.internalFormat,ve,ce,q.colorSpace),Ve=ke(M);B&&ze(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,pe,M.width,M.height):ze(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const Q=$.__webglTexture,q=ke(M);if(M.depthTexture.format===Vr)ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Gr)ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,P)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),ae(M.__webglDepthbuffer[$],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ae(M.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(P,M,B){const $=i.get(P);M!==void 0&&xe($.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ye(P)}function dt(P){const M=P.texture,B=i.get(P),$=i.get(M);P.addEventListener("dispose",b);const Q=P.textures,q=P.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let pe=0;pe<M.mipmaps.length;pe++)B.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ce=0,pe=Q.length;ce<pe;ce++){const Ve=i.get(Q[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ze(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const pe=Q[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ve=r.convert(pe.format,pe.colorSpace),ie=r.convert(pe.type),me=y(pe.internalFormat,Ve,ie,pe.colorSpace,P.isXRRenderTarget===!0),Ae=ke(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,me,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)xe(B.__webglFramebuffer[ce][pe],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else xe(B.__webglFramebuffer[ce],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,pe=Q.length;ce<pe;ce++){const Ve=Q[ce],ie=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Ue(n.TEXTURE_2D,Ve),xe(B.__webglFramebuffer,P,Ve,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ve)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),Ue(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)xe(B.__webglFramebuffer[pe],P,M,n.COLOR_ATTACHMENT0,ce,pe);else xe(B.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&d(ce),t.unbindTexture()}P.depthBuffer&&Ye(P)}function lt(P){const M=P.textures;for(let B=0,$=M.length;B<$;B++){const Q=M[B];if(m(Q)){const q=v(P),ve=i.get(Q).__webglTexture;t.bindTexture(q,ve),d(q),t.unbindTexture()}}}const Be=[],I=[];function Jt(P){if(P.samples>0){if(ze(P)===!1){const M=P.textures,B=P.width,$=P.height;let Q=n.COLOR_BUFFER_BIT;const q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(P),ce=M.length>1;if(ce)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const Ve=i.get(M[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,Q,n.NEAREST),c===!0&&(Be.length=0,I.length=0,Be.push(n.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Be.push(q),I.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const Ve=i.get(M[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ke(P){return Math.min(s.maxSamples,P.samples)}function ze(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function nt(P,M){const B=P.colorSpace,$=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==tr&&B!==vn&&(Xe.getTransfer(B)===$e?($!==Ti||Q!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=we,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ze}function Xv(n,e){function t(i,s=vn){let r;const o=Xe.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kf)return n.BYTE;if(i===$f)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===ru)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===Qf)return n.RGB;if(i===Ti)return n.RGBA;if(i===ed)return n.LUMINANCE;if(i===td)return n.LUMINANCE_ALPHA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===id)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===nd)return n.RG;if(i===lu)return n.RG_INTEGER;if(i===uu)return n.RGBA_INTEGER;if(i===na||i===sa||i===ra||i===oa)if(o===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===fl||i===dl||i===pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===_l||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===_l)return o===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===vl||i===yl||i===Sl||i===El||i===Ml||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===Dl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sd||i===Nl||i===Ul||i===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Yv extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class bo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qv={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
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

}`;class $v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:jv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zv extends rr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const g=new $v,m=t.getContextAttributes();let d=null,v=null;const y=[],x=[],T=new et;let A=null;const b=new ai;b.viewport=new mt;const R=new ai;R.viewport=new mt;const E=[b,R],S=new Yv;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=y[j];return se===void 0&&(se=new hc,y[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=y[j];return se===void 0&&(se=new hc,y[j]=se),se.getGripSpace()},this.getHand=function(j){let se=y[j];return se===void 0&&(se=new hc,y[j]=se),se.getHandSpace()};function L(j){const se=x.indexOf(j.inputSource);if(se===-1)return;const xe=y[se];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let j=0;j<y.length;j++){const se=x[j];se!==null&&(x[j]=null,y[j].disconnect(se))}C=null,D=null,g.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ae=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Gr:Vr,ae=m.stencil?kr:hs);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new fs(f.textureWidth,f.textureHeight,{format:Ti,type:nn,depthTexture:new xd(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new fs(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(j){for(let se=0;se<j.removed.length;se++){const xe=j.removed[se],ae=x.indexOf(xe);ae>=0&&(x[ae]=null,y[ae].disconnect(xe))}for(let se=0;se<j.added.length;se++){const xe=j.added[se];let ae=x.indexOf(xe);if(ae===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=x.length){x.push(xe),ae=Ye;break}else if(x[Ye]===null){x[Ye]=xe,ae=Ye;break}if(ae===-1)break}const be=y[ae];be&&be.connect(xe)}}const H=new W,J=new W;function X(j,se,xe){H.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);const ae=H.distanceTo(J),be=se.projectionMatrix.elements,Ye=xe.projectionMatrix.elements,we=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),lt=(be[9]+1)/be[5],Be=(be[9]-1)/be[5],I=(be[8]-1)/be[0],Jt=(Ye[8]+1)/Ye[0],ke=we*I,ze=we*Jt,Ee=ae/(-I+Jt),nt=Ee*-I;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(nt),j.translateZ(Ee),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ye=we+Ee,P=dt+Ee,M=ke-nt,B=ze+(ae-nt),$=lt*dt/P*ye,Q=Be*dt/P*ye;j.projectionMatrix.makePerspective(M,B,$,Q,ye,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let se=j.near,xe=j.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),S.near=R.near=b.near=se,S.far=R.far=b.far=xe,(C!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,D=S.far),b.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,S.layers.mask=b.layers.mask|R.layers.mask;const ae=j.parent,be=S.cameras;ne(S,ae);for(let Ye=0;Ye<be.length;Ye++)ne(be[Ye],ae);be.length===2?X(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),de(j,S,ae)};function de(j,se,xe){xe===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Se=null;function Ue(j,se){if(u=se.getViewerPose(l||o),_=se,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let we=0;we<xe.length;we++){const dt=xe[we];let lt=null;if(p!==null)lt=p.getViewport(dt);else{const I=h.getViewSubImage(f,dt);lt=I.viewport,we===0&&(e.setRenderTargetTextures(v,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(v))}let Be=E[we];Be===void 0&&(Be=new ai,Be.layers.enable(we),Be.viewport=new mt,E[we]=Be),Be.matrix.fromArray(dt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(dt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(lt.x,lt.y,lt.width,lt.height),we===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Be)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const we=h.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&g.init(e,we,s.renderState)}}for(let xe=0;xe<y.length;xe++){const ae=x[xe],be=y[xe];ae!==null&&be!==void 0&&be.update(ae,se,l||o)}Se&&Se(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Qe=new ld;Qe.setAnimationLoop(Ue),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const Wn=new sn,Jv=new vt;function Qv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,dd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Wt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Wt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(Wn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ey(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(_(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const y=h();v.__bindingPointIndex=y;const x=n.createBuffer(),T=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,b=x.length;A<b;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=R.length;E<S;E++){const C=R[E];if(p(C,A,E,T)===!0){const D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let G=0;G<L.length;G++){const H=L[G],J=g(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+O,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,T){const A=v.value,b=y+"_"+x;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{const R=T[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return T[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(v){const y=v.uniforms;let x=0;const T=16;for(let b=0,R=y.length;b<R;b++){const E=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,C=E.length;S<C;S++){const D=E[S],L=Array.isArray(D.value)?D.value:[D.value];for(let O=0,G=L.length;O<G;O++){const H=L[O],J=g(H),X=x%T,ne=X%J.boundary,de=X+ne;x+=ne,de!==0&&T-de<J.storage&&(x+=T-de),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=J.storage}}}const A=x%T;return A>0&&(x+=T-A),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ty{constructor(e={}){const{canvas:t=$m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=oi;let A=0,b=0,R=null,E=-1,S=null;const C=new mt,D=new mt;let L=null;const O=new Je(0);let G=0,H=t.width,J=t.height,X=1,ne=null,de=null;const Se=new mt(0,0,H,J),Ue=new mt(0,0,H,J);let Qe=!1;const j=new cd;let se=!1,xe=!1;const ae=new vt,be=new vt,Ye=new W,we=new mt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Be(){return R===null?X:1}let I=i;function Jt(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jp}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const U="webgl2";if(I=Jt(U,w),I===null)throw Jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,ze,Ee,nt,ye,P,M,B,$,Q,q,ve,ce,pe,Ve,ie,me,Ae,Ce,_e,He,Ie,tt,N;function le(){ke=new rx(I),ke.init(),Ie=new Xv(I,ke),ze=new X0(I,ke,e,Ie),Ee=new Vv(I,ke),ze.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),nt=new cx(I),ye=new wv,P=new Wv(I,ke,Ee,ye,ze,Ie,nt),M=new Q0(x),B=new sx(x),$=new jm(I),tt=new G0(I,$),Q=new ox(I,$,nt,tt),q=new ux(I,Q,$,nt),Ce=new lx(I,ze,P),ie=new Y0(ye),ve=new Av(x,M,B,ke,ze,tt,ie),ce=new Qv(x,ye),pe=new Cv,Ve=new Uv(ke),Ae=new V0(x,M,B,Ee,q,p,c),me=new Hv(x,q,ze),N=new ey(I,nt,ze,Ee),_e=new W0(I,ke,nt),He=new ax(I,ke,nt),nt.programs=ve.programs,x.capabilities=ze,x.extensions=ke,x.properties=ye,x.renderLists=pe,x.shadowMap=me,x.state=Ee,x.info=nt}le();const Y=new Zv(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,J,!1))},this.getSize=function(w){return w.set(H,J)},this.setSize=function(w,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,J=U,t.width=Math.floor(w*X),t.height=Math.floor(U*X),k===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*X,J*X).floor()},this.setDrawingBufferSize=function(w,U,k){H=w,J=U,X=k,t.width=Math.floor(w*k),t.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,U,k,V){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,U,k,V),Ee.viewport(C.copy(Se).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,U,k,V){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,U,k,V),Ee.scissor(D.copy(Ue).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){Ee.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,k=!0){let V=0;if(w){let F=!1;if(R!==null){const te=R.texture.format;F=te===uu||te===lu||te===cu}if(F){const te=R.texture.type,oe=te===nn||te===hs||te===Hr||te===kr||te===ou||te===au,fe=Ae.getClearColor(),ge=Ae.getClearAlpha(),Pe=fe.r,Re=fe.g,Me=fe.b;oe?(_[0]=Pe,_[1]=Re,_[2]=Me,_[3]=ge,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Pe,g[1]=Re,g[2]=Me,g[3]=ge,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),k&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ae.dispose(),pe.dispose(),Ve.dispose(),ye.dispose(),M.dispose(),B.dispose(),q.dispose(),tt.dispose(),N.dispose(),ve.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",wu),Y.removeEventListener("sessionend",Ru),On.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=nt.autoReset,U=me.enabled,k=me.autoUpdate,V=me.needsUpdate,F=me.type;le(),nt.autoReset=w,me.enabled=U,me.autoUpdate=k,me.needsUpdate=V,me.type=F}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){const U=w.target;U.removeEventListener("dispose",Le),ut(U)}function ut(w){wt(w),ye.remove(w)}function wt(w){const U=ye.get(w).programs;U!==void 0&&(U.forEach(function(k){ve.releaseProgram(k)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,V,F,te){U===null&&(U=dt);const oe=F.isMesh&&F.matrixWorld.determinant()<0,fe=tp(w,U,k,V,F);Ee.setMaterial(V,oe);let ge=k.index,Pe=1;if(V.wireframe===!0){if(ge=Q.getWireframeAttribute(k),ge===void 0)return;Pe=2}const Re=k.drawRange,Me=k.attributes.position;let Ge=Re.start*Pe,qe=(Re.start+Re.count)*Pe;te!==null&&(Ge=Math.max(Ge,te.start*Pe),qe=Math.min(qe,(te.start+te.count)*Pe)),ge!==null?(Ge=Math.max(Ge,0),qe=Math.min(qe,ge.count)):Me!=null&&(Ge=Math.max(Ge,0),qe=Math.min(qe,Me.count));const _t=qe-Ge;if(_t<0||_t===1/0)return;tt.setup(F,V,fe,k,ge);let ht,We=_e;if(ge!==null&&(ht=$.get(ge),We=He,We.setIndex(ht)),F.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*Be()),We.setMode(I.LINES)):We.setMode(I.TRIANGLES);else if(F.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*Be()),F.isLineSegments?We.setMode(I.LINES):F.isLineLoop?We.setMode(I.LINE_LOOP):We.setMode(I.LINE_STRIP)}else F.isPoints?We.setMode(I.POINTS):F.isSprite&&We.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))We.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,At=F._multiDrawCounts,je=F._multiDrawCount,_i=ge?$.get(ge).bytesPerElement:1,gs=ye.get(V).currentProgram.getUniforms();for(let Yt=0;Yt<je;Yt++)gs.setValue(I,"_gl_DrawID",Yt),We.render(Te[Yt]/_i,At[Yt])}else if(F.isInstancedMesh)We.renderInstances(Ge,_t,F.count);else if(k.isInstancedBufferGeometry){const Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,At=Math.min(k.instanceCount,Te);We.renderInstances(Ge,_t,At)}else We.render(Ge,_t)};function Ke(w,U,k){w.transparent===!0&&w.side===$i&&w.forceSinglePass===!1?(w.side=Wt,w.needsUpdate=!0,io(w,U,k),w.side=Pn,w.needsUpdate=!0,io(w,U,k),w.side=$i):io(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),d=Ve.get(k),d.init(U),y.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){const fe=te[oe];Ke(fe,k,F),V.add(fe)}else Ke(te,k,F),V.add(te)}),d=y.pop(),V},this.compileAsync=function(w,U,k=null){const V=this.compile(w,U,k);return new Promise(F=>{function te(){if(V.forEach(function(oe){ye.get(oe).currentProgram.isReady()&&V.delete(oe)}),V.size===0){F(w);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let mi=null;function Bi(w){mi&&mi(w)}function wu(){On.stop()}function Ru(){On.start()}const On=new ld;On.setAnimationLoop(Bi),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(w){mi=w,Y.setAnimationLoop(w),w===null?On.stop():On.start()},Y.addEventListener("sessionstart",wu),Y.addEventListener("sessionend",Ru),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),d=Ve.get(w,y.length),d.init(U),y.push(d),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(be),xe=this.localClippingEnabled,se=ie.init(this.clippingPlanes,xe),m=pe.get(w,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Ia(te,U,-1/0,x.sortObjects)}Ia(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,de),lt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,lt&&Ae.addToRenderList(m,w),this.info.render.frame++,se===!0&&ie.beginShadows();const k=d.state.shadowsArray;me.render(k,w,U),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const te=U.cameras;if(F.length>0)for(let oe=0,fe=te.length;oe<fe;oe++){const ge=te[oe];Pu(V,F,w,ge)}lt&&Ae.render(w);for(let oe=0,fe=te.length;oe<fe;oe++){const ge=te[oe];Cu(m,w,ge,ge.viewport)}}else F.length>0&&Pu(V,F,w,U),lt&&Ae.render(w),Cu(m,w,U);R!==null&&b===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),tt.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],se===!0&&ie.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ia(w,U,k,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){V&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const oe=q.update(w),fe=w.material;fe.visible&&m.push(w,oe,fe,k,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const oe=q.update(w),fe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),we.copy(oe.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(fe)){const ge=oe.groups;for(let Pe=0,Re=ge.length;Pe<Re;Pe++){const Me=ge[Pe],Ge=fe[Me.materialIndex];Ge&&Ge.visible&&m.push(w,oe,Ge,k,we.z,Me)}}else fe.visible&&m.push(w,oe,fe,k,we.z,null)}}const te=w.children;for(let oe=0,fe=te.length;oe<fe;oe++)Ia(te[oe],U,k,V)}function Cu(w,U,k,V){const F=w.opaque,te=w.transmissive,oe=w.transparent;d.setupLightsView(k),se===!0&&ie.setGlobalState(x.clippingPlanes,k),V&&Ee.viewport(C.copy(V)),F.length>0&&to(F,U,k),te.length>0&&to(te,U,k),oe.length>0&&to(oe,U,k),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Pu(w,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new fs(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?$r:nn,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const te=d.state.transmissionRenderTarget[V.id],oe=V.viewport||C;te.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const fe=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(O),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),lt&&Ae.render(k);const ge=x.toneMapping;x.toneMapping=wn;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),se===!0&&ie.setGlobalState(x.clippingPlanes,V),to(w,k,V),P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Ge=U.length;Me<Ge;Me++){const qe=U[Me],_t=qe.object,ht=qe.geometry,We=qe.material,Te=qe.group;if(We.side===$i&&_t.layers.test(V.layers)){const At=We.side;We.side=Wt,We.needsUpdate=!0,Lu(_t,k,V,ht,We,Te),We.side=At,We.needsUpdate=!0,Re=!0}}Re===!0&&(P.updateMultisampleRenderTarget(te),P.updateRenderTargetMipmap(te))}x.setRenderTarget(fe),x.setClearColor(O,G),Pe!==void 0&&(V.viewport=Pe),x.toneMapping=ge}function to(w,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,te=w.length;F<te;F++){const oe=w[F],fe=oe.object,ge=oe.geometry,Pe=oe.group;let Re=oe.material;Re.allowOverride===!0&&V!==null&&(Re=V),fe.layers.test(k.layers)&&Lu(fe,U,k,ge,Re,Pe)}}function Lu(w,U,k,V,F,te){w.onBeforeRender(x,U,k,V,F,te),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,U,k,V,w,te),F.transparent===!0&&F.side===$i&&F.forceSinglePass===!1?(F.side=Wt,F.needsUpdate=!0,x.renderBufferDirect(k,U,V,F,w,te),F.side=Pn,F.needsUpdate=!0,x.renderBufferDirect(k,U,V,F,w,te),F.side=$i):x.renderBufferDirect(k,U,V,F,w,te),w.onAfterRender(x,U,k,V,F,te)}function io(w,U,k){U.isScene!==!0&&(U=dt);const V=ye.get(w),F=d.state.lights,te=d.state.shadowsArray,oe=F.state.version,fe=ve.getParameters(w,F.state,te,U,k),ge=ve.getProgramCacheKey(fe);let Pe=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Le),Pe=new Map,V.programs=Pe);let Re=Pe.get(ge);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===oe)return Iu(w,fe),Re}else fe.uniforms=ve.getUniforms(w),w.onBeforeCompile(fe,x),Re=ve.acquireProgram(fe,ge),Pe.set(ge,Re),V.uniforms=fe.uniforms;const Me=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Iu(w,fe),V.needsLights=np(w),V.lightsStateVersion=oe,V.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function Du(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=la.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Iu(w,U){const k=ye.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function tp(w,U,k,V,F){U.isScene!==!0&&(U=dt),P.resetTextureUnits();const te=U.fog,oe=V.isMeshStandardMaterial?U.environment:null,fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tr,ge=(V.isMeshStandardMaterial?B:M).get(V.envMap||oe),Pe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,qe=!!k.morphAttributes.color;let _t=wn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,We=ht!==void 0?ht.length:0,Te=ye.get(V),At=d.state.lights;if(se===!0&&(xe===!0||w!==S)){const Lt=w===S&&V.id===E;ie.setState(V,w,Lt)}let je=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==At.state.version||Te.outputColorSpace!==fe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==ge||V.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Re||Te.morphTargets!==Me||Te.morphNormals!==Ge||Te.morphColors!==qe||Te.toneMapping!==_t||Te.morphTargetsCount!==We)&&(je=!0):(je=!0,Te.__version=V.version);let _i=Te.currentProgram;je===!0&&(_i=io(V,U,F));let gs=!1,Yt=!1,cr=!1;const at=_i.getUniforms(),Qt=Te.uniforms;if(Ee.useProgram(_i.program)&&(gs=!0,Yt=!0,cr=!0),V.id!==E&&(E=V.id,Yt=!0),gs||S!==w){Ee.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),Jm(ae),Qm(ae),at.setValue(I,"projectionMatrix",ae)):at.setValue(I,"projectionMatrix",w.projectionMatrix),at.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ft=at.map.cameraPosition;Ft!==void 0&&Ft.setValue(I,Ye.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Yt=!0,cr=!0)}if(F.isSkinnedMesh){at.setOptional(I,F,"bindMatrix"),at.setOptional(I,F,"bindMatrixInverse");const Lt=F.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),at.setValue(I,"boneTexture",Lt.boneTexture,P))}F.isBatchedMesh&&(at.setOptional(I,F,"batchingTexture"),at.setValue(I,"batchingTexture",F._matricesTexture,P),at.setOptional(I,F,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",F._indirectTexture,P),at.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",F._colorsTexture,P));const ei=k.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Ce.update(F,k,_i),(Yt||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,at.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qt.envMap.value=ge,Qt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Yt&&(at.setValue(I,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&ip(Qt,cr),te&&V.fog===!0&&ce.refreshFogUniforms(Qt,te),ce.refreshMaterialUniforms(Qt,V,X,J,d.state.transmissionRenderTarget[w.id]),la.upload(I,Du(Te),Qt,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(la.upload(I,Du(Te),Qt,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(I,"center",F.center),at.setValue(I,"modelViewMatrix",F.modelViewMatrix),at.setValue(I,"normalMatrix",F.normalMatrix),at.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Lt=V.uniformsGroups;for(let Ft=0,Na=Lt.length;Ft<Na;Ft++){const Bn=Lt[Ft];N.update(Bn,_i),N.bind(Bn,_i)}}return _i}function ip(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function np(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,k){const V=ye.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(w.texture).__webglTexture=U,ye.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const k=ye.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const sp=I.createFramebuffer();this.setRenderTarget=function(w,U=0,k=0){R=w,A=U,b=k;let V=!0,F=null,te=!1,oe=!1;if(w){const ge=ye.get(w);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(ge.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(ge.__hasExternalTextures)P.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(ge.__boundDepthTexture!==Me){if(Me!==null&&ye.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const Re=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?F=Re[U][k]:F=Re[U],te=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?F=ye.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[k]:F=Re,C.copy(w.viewport),D.copy(w.scissor),L=w.scissorTest}else C.copy(Se).multiplyScalar(X).floor(),D.copy(Ue).multiplyScalar(X).floor(),L=Qe;if(k!==0&&(F=sp),Ee.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&Ee.drawBuffers(w,F),Ee.viewport(C),Ee.scissor(D),Ee.setScissorTest(L),te){const ge=ye.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,k)}else if(oe){const ge=ye.get(w.texture),Pe=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,k,Pe)}else if(w!==null&&k!==0){const ge=ye.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(w,U,k,V,F,te,oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){Ee.bindFramebuffer(I.FRAMEBUFFER,fe);try{const ge=w.texture,Pe=ge.format,Re=ge.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&k>=0&&k<=w.height-F&&I.readPixels(U,k,V,F,Ie.convert(Pe),Ie.convert(Re),te)}finally{const ge=R!==null?ye.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,V,F,te,oe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe)if(U>=0&&U<=w.width-V&&k>=0&&k<=w.height-F){Ee.bindFramebuffer(I.FRAMEBUFFER,fe);const ge=w.texture,Pe=ge.format,Re=ge.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),I.readPixels(U,k,V,F,Ie.convert(Pe),Ie.convert(Re),0);const Ge=R!==null?ye.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Ge);const qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zm(I,qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Me),I.deleteSync(qe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,k=0){const V=Math.pow(2,-k),F=Math.floor(w.image.width*V),te=Math.floor(w.image.height*V),oe=U!==null?U.x:0,fe=U!==null?U.y:0;P.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,oe,fe,F,te),Ee.unbindTexture()};const rp=I.createFramebuffer(),op=I.createFramebuffer();this.copyTextureToTexture=function(w,U,k=null,V=null,F=0,te=null){te===null&&(F!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let oe,fe,ge,Pe,Re,Me,Ge,qe,_t;const ht=w.isCompressedTexture?w.mipmaps[te]:w.image;if(k!==null)oe=k.max.x-k.min.x,fe=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Re=k.min.y,Me=k.isBox3?k.min.z:0;else{const ei=Math.pow(2,-F);oe=Math.floor(ht.width*ei),fe=Math.floor(ht.height*ei),w.isDataArrayTexture?ge=ht.depth:w.isData3DTexture?ge=Math.floor(ht.depth*ei):ge=1,Pe=0,Re=0,Me=0}V!==null?(Ge=V.x,qe=V.y,_t=V.z):(Ge=0,qe=0,_t=0);const We=Ie.convert(U.format),Te=Ie.convert(U.type);let At;U.isData3DTexture?(P.setTexture3D(U,0),At=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),At=I.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const je=I.getParameter(I.UNPACK_ROW_LENGTH),_i=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gs=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),cr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me);const at=w.isDataArrayTexture||w.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const ei=ye.get(w),Lt=ye.get(U),Ft=ye.get(ei.__renderTarget),Na=ye.get(Lt.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Bn=0;Bn<ge;Bn++)at&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(w).__webglTexture,F,Me+Bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,te,_t+Bn)),I.blitFramebuffer(Pe,Re,oe,fe,Ge,qe,oe,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||ye.has(w)){const ei=ye.get(w),Lt=ye.get(U);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,rp),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,op);for(let Ft=0;Ft<ge;Ft++)at?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ei.__webglTexture,F,Me+Ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ei.__webglTexture,F),Qt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,te,_t+Ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,te),F!==0?I.blitFramebuffer(Pe,Re,oe,fe,Ge,qe,oe,fe,I.COLOR_BUFFER_BIT,I.NEAREST):Qt?I.copyTexSubImage3D(At,te,Ge,qe,_t+Ft,Pe,Re,oe,fe):I.copyTexSubImage2D(At,te,Ge,qe,Pe,Re,oe,fe);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(At,te,Ge,qe,_t,oe,fe,ge,We,Te,ht.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(At,te,Ge,qe,_t,oe,fe,ge,We,ht.data):I.texSubImage3D(At,te,Ge,qe,_t,oe,fe,ge,We,Te,ht):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,Ge,qe,oe,fe,We,Te,ht.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,Ge,qe,ht.width,ht.height,We,ht.data):I.texSubImage2D(I.TEXTURE_2D,te,Ge,qe,oe,fe,We,Te,ht);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_i),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gs),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cr),te===0&&U.generateMipmaps&&I.generateMipmap(At),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,V=null,F=0){return ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,V,F)},this.initRenderTarget=function(w){ye.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,Ee.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function Uh(n,e){if(e===lp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===qc||e===Ff){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===qc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class iy extends Of{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ay(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Sy(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Lr.extractUrlBase(e);o=Lr.resolveURL(l,this.path)}else o=Lr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new nu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Md){try{o[Fe.KHR_BINARY_GLTF]=new Ey(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Uy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Fe.KHR_MATERIALS_UNLIT:o[h]=new ry;break;case Fe.KHR_DRACO_MESH_COMPRESSION:o[h]=new My(r,this.dracoLoader);break;case Fe.KHR_TEXTURE_TRANSFORM:o[h]=new Ty;break;case Fe.KHR_MESH_QUANTIZATION:o[h]=new by;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function ny(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sy{constructor(e){this.parser=e,this.name=Fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Cn(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new jc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hp(u),l.distance=h;break;case"spot":l=new up(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class ry{constructor(){this.name=Fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Gs}extendParams(e,t,i){const s=[];e.color=new Cn(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,zr))}return Promise.all(s)}}class oy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ay{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(a,a)}return Promise.all(r)}}class cy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ly{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Cn(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zr)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class hy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class fy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Cn().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class dy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class py{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Cn().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,zr)),Promise.all(r)}}class my{constructor(e){this.parser=e,this.name=Fe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class _y{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class gy{constructor(e){this.parser=e,this.name=Fe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xy{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vy{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yy{constructor(e){this.name=Fe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class Sy{constructor(e){this.name=Fe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(const _ of h){const g=new Pt,m=new ee,d=new ma,v=new ee(1,1,1),y=new Bf(_.geometry,_.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,g.compose(m,d,v));for(const x in c)if(x==="_COLOR_0"){const T=c[x];y.instanceColor=new fp(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);zf.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Md="glTF",pr=12,Fh={JSON:1313821514,BIN:5130562};class Ey{constructor(e){this.name=Fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-pr,r=new DataView(e,pr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Fh.JSON){const l=new Uint8Array(e,pr+o,a);this.content=i.decode(l)}else if(c===Fh.BIN){const l=pr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class My{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Fe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Bl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=$s[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(p)},a,l,tn,f)})})}}class Ty{constructor(){this.name=Fe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class by{constructor(){this.name=Fe.KHR_MESH_QUANTIZATION}}class Td extends Up{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,_=e*l,g=_-l,m=-2*p+3*f,d=p-f,v=1-m,y=d-f+h;for(let x=0;x!==a;x++){const T=o[g+x+a],A=o[g+x+c]*u,b=o[_+x+a],R=o[_+x]*u;r[x]=v*T+y*A+m*b+d*R}return r}}const Ay=new ma;class wy extends Td{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Ay.fromArray(r).normalize().toArray(r),r}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oh={9728:kf,9729:Kc,9984:gp,9985:_p,9986:mp,9987:Hf},Bh={33071:vp,33648:xp,10497:Zt},fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ry={CUBICSPLINE:void 0,LINEAR:Gf,STEP:Ip},dc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cy(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Vf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$c})),n.DefaultMaterial}function Xn(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ki(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Ly(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dy(n){let e;const t=n.extensions&&n.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pc(t.attributes):e=n.indices+":"+pc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+pc(n.targets[i]);return e}function pc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function zl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iy(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ny=new Pt;class Uy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ny,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new ds(this.options.manager):this.textureLoader=new dp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Xn(r,a,s),Ki(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Lr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=fc[s.type],a=$s[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Gt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=fc[s.type],l=$s[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(p&&p!==h){const d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let y=t.cache.get(v);y||(g=new l(a,d*p,s.count*p/u),y=new pp(g,p/u),t.cache.add(v,y)),m=new Np(y,c,f%p/u,_)}else a===null?g=new l(s.count*c):g=new l(a,f,s.count*c),m=new Gt(g,c,_);if(s.sparse!==void 0){const d=fc.SCALAR,v=$s[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new v(o[1],y,s.sparse.count*d),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,R=T.length;b<R;b++){const E=T[b];if(m.setX(E,A[b*c]),c>=2&&m.setY(E,A[b*c+1]),c>=3&&m.setZ(E,A[b*c+2]),c>=4&&m.setW(E,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Oh[f.magFilter]||Kc,u.minFilter=Oh[f.minFilter]||Hf,u.wrapS=Bh[f.wrapS]||Zt,u.wrapT=Bh[f.wrapT]||Zt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==kf&&u.minFilter!==Kc,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Nu(g);m.needsUpdate=!0,f(m)}),t.load(Lr.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ki(h,o),h.userData.mimeType=o.mimeType||Iy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Fe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Fe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new yp,ia.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Sp,ia.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Vf}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Fe.KHR_MATERIALS_UNLIT]){const h=s[Fe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Cn(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,zr)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nr);const u=r.alphaMode||dc.OPAQUE;if(u===dc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===dc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gs&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Gs&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gs){const h=r.emissiveFactor;a.emissive=new Cn().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==Gs&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zr)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ki(h,r),t.associations.set(h,{materials:e}),r.extensions&&Xn(s,h,r),h})}createUniqueName(e){const t=Ep.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return zh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Dy(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Fe.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=zh(new Zs,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Cy(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let d;const v=l[p];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Mp(g,v):new sr(g,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===si.TRIANGLE_STRIP?d.geometry=Uh(d.geometry,Ff):m.mode===si.TRIANGLE_FAN&&(d.geometry=Uh(d.geometry,qc));else if(m.mode===si.LINES)d=new Tp(g,v);else if(m.mode===si.LINE_STRIP)d=new bp(g,v);else if(m.mode===si.LINE_LOOP)d=new Ap(g,v);else if(m.mode===si.POINTS)d=new wp(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ly(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ki(d,r),m.extensions&&Xn(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Xn(s,h[0],r),h[0];const f=new Ua;r.extensions&&Xn(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Rp(Vt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Cp(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Pt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pp(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const p=s.channels[h],_=s.samplers[p.sampler],g=p.target,m=g.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,v=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],g=h[3],m=h[4],d=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],T=p[v],A=_[v],b=g[v],R=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=i._createAnimationTracks(x,T,A,b,R);if(E)for(let S=0;S<E.length;S++)d.push(E[S])}return new Lp(r,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ny)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Dp:l.length>1?u=new Ua:l.length===1?u=l[0]:u=new zf,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ki(u,r),r.extensions&&Xn(i,u,r),r.matrix!==void 0){const h=new Pt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Ua;i.name&&(r.name=s.createUniqueName(i.name)),Ki(r,i),i.extensions&&Xn(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,p]of s.associations)(f instanceof ia||f instanceof Nu)&&h.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];fn[r.path]===fn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(fn[r.path]){case fn.weights:l=Fu;break;case fn.rotation:l=Ou;break;case fn.translation:case fn.scale:l=Uu;break;default:switch(i.itemSize){case 1:l=Fu;break;case 2:case 3:default:l=Uu;break}break}const u=s.interpolation!==void 0?Ry[s.interpolation]:Gf,h=this._getArrayFromAccessor(i);for(let f=0,p=c.length;f<p;f++){const _=new l(c[f]+"."+fn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=zl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ou?wy:Td;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fy(n,e,t){const i=e.attributes,s=new Ai;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new ee(c[0],c[1],c[2]),new ee(l[0],l[1],l[2])),a.normalized){const u=zl($s[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new ee,c=new ee;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const g=zl($s[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Wf;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function zh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Bl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Bu.workingColorSpace!==tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bu.workingColorSpace}" not supported.`),Ki(n,e),Fy(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Py(n,e.targets,t):n})}class Oy extends Of{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new nu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},i,s)}parse(e){return new By(e)}}class By{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],s=zy(e,t,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function zy(n,e,t){const i=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=r;else{const h=Hy(u,s,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function Hy(n,e,t,i,s){const r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const o=new Fp;let a,c,l,u,h,f,p,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=g.length;m<d;)switch(g[m++]){case"m":a=g[m++]*e+t,c=g[m++]*e+i,o.moveTo(a,c);break;case"l":a=g[m++]*e+t,c=g[m++]*e+i,o.lineTo(a,c);break;case"q":l=g[m++]*e+t,u=g[m++]*e+i,h=g[m++]*e+t,f=g[m++]*e+i,o.quadraticCurveTo(h,f,l,u);break;case"b":l=g[m++]*e+t,u=g[m++]*e+i,h=g[m++]*e+t,f=g[m++]*e+i,p=g[m++]*e+t,_=g[m++]*e+i,o.bezierCurveTo(h,f,p,_,l,u);break}}return{offsetX:r.ha*e,path:o}}const Hl=new Pt;Hl.setPosition(99999,99999,99999);const mc={},_c={},En={};let gn;const ky=new iy;new ds;const Vy="/projects/assets/";function bd(n){n instanceof ia?n.metalness=0:Array.isArray(n)&&n.forEach(e=>{e.metalness=0})}function Gy(n){gn=n;const e=Object.values(En).flatMap(t=>t.meshes);e.length>0&&gn.add(...e)}function Wy(n,e=!1,t=!1){return mc[n]??(mc[n]=ky.loadAsync(Vy+n).then(i=>(i.scene.traverse(s=>{if(s.type==="Mesh"){const r=s;r.geometry.computeVertexNormals(),r.geometry.computeBoundingBox(),r.receiveShadow=e,r.castShadow=t,bd(r.material)}}),i)))}async function Hh(n){var i;const e=En[n],t=e!=null&&e.capacity?(e==null?void 0:e.capacity)*2:1;return(i=_c[n]??(_c[n]={}))[t]??(i[t]=async function(){const s=await Wy(n),r={capacity:t,count:(e==null?void 0:e.count)??0,meshes:[],offsets:[]};if(s.scene.traverse(o=>{if(o.type==="Mesh"){const a=o;bd(a.material);const c=new Bf(a.geometry,a.material,t),l=new ee;o.getWorldPosition(l),r.offsets.push(l),r.meshes.push(c),c.castShadow=!0,c.receiveShadow=!0,gn==null||gn.add(c)}}),e){let o=new Pt;if(r.meshes.length!==e.meshes.length)throw new Error("Mesh length mismatch during expansion!");for(let a=0;a<r.meshes.length;a++){for(let c=0;c<e.count;c++)e.meshes[a].getMatrixAt(c,o),r.meshes[a].setMatrixAt(c,o);for(let c=e.count;c<t;c++)r.meshes[a].setMatrixAt(c,Hl)}gn==null||gn.remove(...e.meshes),e.meshes.forEach(a=>a.dispose()),e.meshes=[]}else for(let o=0;o<r.meshes.length;o++)for(let a=0;a<t;a++)r.meshes[o].setMatrixAt(a,Hl);return En[n]=r}())}async function Xy(n){En[n]||(En[n]=await Hh(n));const e=En[n].count++;for(;e>=En[n].capacity;)await Hh(n);return e}async function tT(n){const e=await Xy(n);return t=>{var i;(i=En[n])==null||i.meshes.forEach(s=>{s.setMatrixAt(e,t)})}}let gc;async function iT(n,e,t="left",i="bottom"){var h,f,p,_,g,m,d,v;gc||(gc=await new Oy().loadAsync("https://raw.githubusercontent.com/mrdoob/three.js/e7fd8b9d7d941c4670521f7d843a7fa12435410a/examples/fonts/helvetiker_regular.typeface.json"));const s=26265,r=new Gs({color:s,side:nr}),o=gc.generateShapes(n,e),a=new Op(o);a.computeBoundingBox();const c=(((f=(h=a.boundingBox)==null?void 0:h.max)==null?void 0:f.x)??0)-(((_=(p=a.boundingBox)==null?void 0:p.min)==null?void 0:_.x)??0),l=(((m=(g=a.boundingBox)==null?void 0:g.max)==null?void 0:m.y)??0)-(((v=(d=a.boundingBox)==null?void 0:d.min)==null?void 0:v.y)??0);t=="center"?a.translate(-.5*c,0,0):t==="right"&&a.translate(-c,0,0),i=="center"?a.translate(0,-.5*l,0):i==="top"&&a.translate(0,-l,0);let u=new Ii(a,r);return u.castShadow=!0,u}var Dr=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";n=u}var s=(performance||Date).now(),r=s,o=0,a=t(new Dr.Panel("FPS","#0ff","#002")),c=t(new Dr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new Dr.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){s=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-s,200),u>=r+1e3&&(a.update(o*1e3/(u-r),100),r=u,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:e,setMode:i}};Dr.Panel=function(n,e,t){var i=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,h=3*o,f=15*o,p=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,c),m.fillStyle=e,m.fillText(n,l,u),m.fillRect(h,f,p,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h,f,p,_),{dom:g,update:function(d,v){i=Math.min(i,d),s=Math.max(s,d),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=e,m.fillText(r(d)+" "+n+" ("+r(i)+"-"+r(s)+")",l,u),m.drawImage(g,h+o,f,p-o,_,h,f,p-o,_),m.fillRect(h+p-o,f,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h+p-o,f,o,r((1-d/v)*_))}}};function Yy(n){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Xs(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),s=Math.round(n.g),r=Math.round(n.b),o=n.a,a=Math.round(n.h),c=n.s.toFixed(1),l=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+s+","+r+")";if(t==="CSS_RGBA")return"rgba("+i+","+s+","+r+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+s+","+r+"]";if(t==="RGBA_ARRAY")return"["+i+","+s+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+s+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+s+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+c+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+c+",v:"+l+",a:"+o+"}"}return"unknown format"}var kh=Array.prototype.forEach,mr=Array.prototype.slice,K={BREAK:{},extend:function(e){return this.each(mr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(s){this.isUndefined(t[s])||(e[s]=t[s])}).bind(this))},this),e},defaults:function(e){return this.each(mr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(s){this.isUndefined(e[s])&&(e[s]=t[s])}).bind(this))},this),e},compose:function(){var e=mr.call(arguments);return function(){for(var t=mr.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(kh&&e.forEach&&e.forEach===kh)e.forEach(t,i);else if(e.length===e.length+0){var s=void 0,r=void 0;for(s=0,r=e.length;s<r;s++)if(s in e&&t.call(i,e[s],s)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var s=void 0;return function(){var r=this,o=arguments;function a(){s=null,i||e.apply(r,o)}var c=i||!s;clearTimeout(s),s=setTimeout(a,t),c&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():mr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},qy=[{litmus:K.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Xs},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Xs},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Xs},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Xs}}},{litmus:K.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:K.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:K.isObject,conversions:{RGBA_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)&&K.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)&&K.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],_r=void 0,Ao=void 0,kl=function(){Ao=!1;var e=arguments.length>1?K.toArray(arguments):arguments[0];return K.each(qy,function(t){if(t.litmus(e))return K.each(t.conversions,function(i,s){if(_r=i.read(e),Ao===!1&&_r!==!1)return Ao=_r,_r.conversionName=s,_r.conversion=i,K.BREAK}),K.BREAK}),Ao},Vh=void 0,va={hsv_to_rgb:function(e,t,i){var s=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-r*t),c=i*(1-(1-r)*t),l=[[i,c,o],[a,i,o],[o,i,c],[o,a,i],[c,o,i],[i,o,a]][s];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,i){var s=Math.min(e,t,i),r=Math.max(e,t,i),o=r-s,a=void 0,c=void 0;if(r!==0)c=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-i)/o:t===r?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:c,v:r/255}},rgb_to_hex:function(e,t,i){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,i),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Vh=t*8)|e&~(255<<Vh)}},jy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wi=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Ri=function(){function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Dn=function n(e,t,i){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:n(r,t,i)}else{if("value"in s)return s.value;var o=s.get;return o===void 0?void 0:o.call(i)}},Un=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Fn=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},bt=function(){function n(){if(wi(this,n),this.__state=kl.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ri(n,[{key:"toString",value:function(){return Xs(this)}},{key:"toHexString",value:function(){return Xs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function pu(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(bt.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(bt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function mu(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(bt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(bt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}bt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=va.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")K.extend(n.__state,va.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};bt.recalculateHSV=function(n){var e=va.rgb_to_hsv(n.r,n.g,n.b);K.extend(n.__state,{s:e.s,v:e.v}),K.isNaN(e.h)?K.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};bt.COMPONENTS=["r","g","b","h","s","v","hex","a"];pu(bt.prototype,"r",2);pu(bt.prototype,"g",1);pu(bt.prototype,"b",0);mu(bt.prototype,"h");mu(bt.prototype,"s");mu(bt.prototype,"v");Object.defineProperty(bt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(bt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=va.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var _s=function(){function n(e,t){wi(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ri(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),Ky={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Ad={};K.each(Ky,function(n,e){K.each(n,function(t){Ad[t]=e})});var $y=/(\d+(\.\d+)?)px/;function Ci(n){if(n==="0"||K.isUndefined(n))return 0;var e=n.match($y);return K.isNull(e)?0:parseFloat(e[1])}var z={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var s=i,r=t;K.isUndefined(r)&&(r=!0),K.isUndefined(s)&&(s=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,s){var r=i||{},o=Ad[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var c=r.x||r.clientX||0,l=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;K.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}K.defaults(a,s),e.dispatchEvent(a)},bind:function(e,t,i,s){var r=s||!1;return e.addEventListener?e.addEventListener(t,i,r):e.attachEvent&&e.attachEvent("on"+t,i),z},unbind:function(e,t,i,s){var r=s||!1;return e.removeEventListener?e.removeEventListener(t,i,r):e.detachEvent&&e.detachEvent("on"+t,i),z},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return z},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),s=i.indexOf(t);s!==-1&&(i.splice(s,1),e.className=i.join(" "))}else e.className=void 0;return z},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ci(t["border-left-width"])+Ci(t["border-right-width"])+Ci(t["padding-left"])+Ci(t["padding-right"])+Ci(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ci(t["border-top-width"])+Ci(t["border-bottom-width"])+Ci(t["padding-top"])+Ci(t["padding-bottom"])+Ci(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},wd=function(n){Un(e,n);function e(t,i){wi(this,e);var s=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),r=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return z.bind(s.__checkbox,"change",o,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Ri(e,[{key:"setValue",value:function(i){var s=Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_s),Zy=function(n){Un(e,n);function e(t,i,s){wi(this,e);var r=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s,a=r;if(r.__select=document.createElement("select"),K.isArray(o)){var c={};K.each(o,function(l){c[l]=l}),o=c}return K.each(o,function(l,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",l),a.__select.appendChild(h)}),r.updateDisplay(),z.bind(r.__select,"change",function(){var l=this.options[this.selectedIndex].value;a.setValue(l)}),r.domElement.appendChild(r.__select),r}return Ri(e,[{key:"setValue",value:function(i){var s=Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return z.isActive(this.__select)?this:(this.__select.value=this.getValue(),Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(_s),Jy=function(n){Un(e,n);function e(t,i){wi(this,e);var s=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),r=s;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),z.bind(s.__input,"keyup",o),z.bind(s.__input,"change",o),z.bind(s.__input,"blur",a),z.bind(s.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ri(e,[{key:"updateDisplay",value:function(){return z.isActive(this.__input)||(this.__input.value=this.getValue()),Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_s);function Gh(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Rd=function(n){Un(e,n);function e(t,i,s){wi(this,e);var r=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,K.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Gh(r.__impliedStep),r}return Ri(e,[{key:"setValue",value:function(i){var s=i;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Gh(i),this}}]),e}(_s);function Qy(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var ya=function(n){Un(e,n);function e(t,i,s){wi(this,e);var r=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s));r.__truncationSuspended=!1;var o=r,a=void 0;function c(){var _=parseFloat(o.__input.value);K.isNaN(_)||o.setValue(_)}function l(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){l()}function h(_){var g=a-_.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=_.clientY}function f(){z.unbind(window,"mousemove",h),z.unbind(window,"mouseup",f),l()}function p(_){z.bind(window,"mousemove",h),z.bind(window,"mouseup",f),a=_.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),z.bind(r.__input,"change",c),z.bind(r.__input,"blur",u),z.bind(r.__input,"mousedown",p),z.bind(r.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,l())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Ri(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Qy(this.getValue(),this.__precision),Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Rd);function Wh(n,e,t,i,s){return i+(s-i)*((n-e)/(t-e))}var Vl=function(n){Un(e,n);function e(t,i,s,r,o){wi(this,e);var a=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:s,max:r,step:o})),c=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),z.bind(a.__background,"mousedown",l),z.bind(a.__background,"touchstart",f),z.addClass(a.__background,"slider"),z.addClass(a.__foreground,"slider-fg");function l(g){document.activeElement.blur(),z.bind(window,"mousemove",u),z.bind(window,"mouseup",h),u(g)}function u(g){g.preventDefault();var m=c.__background.getBoundingClientRect();return c.setValue(Wh(g.clientX,m.left,m.right,c.__min,c.__max)),!1}function h(){z.unbind(window,"mousemove",u),z.unbind(window,"mouseup",h),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function f(g){g.touches.length===1&&(z.bind(window,"touchmove",p),z.bind(window,"touchend",_),p(g))}function p(g){var m=g.touches[0].clientX,d=c.__background.getBoundingClientRect();c.setValue(Wh(m,d.left,d.right,c.__min,c.__max))}function _(){z.unbind(window,"touchmove",p),z.unbind(window,"touchend",_),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ri(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Rd),Cd=function(n){Un(e,n);function e(t,i,s){wi(this,e);var r=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=s===void 0?"Fire":s,z.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),z.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Ri(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(_s),Gl=function(n){Un(e,n);function e(t,i){wi(this,e);var s=Fn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.__color=new bt(s.getValue()),s.__temp=new bt(0);var r=s;s.domElement=document.createElement("div"),z.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",z.bind(s.__input,"keydown",function(g){g.keyCode===13&&h.call(this)}),z.bind(s.__input,"blur",h),z.bind(s.__selector,"mousedown",function(){z.addClass(this,"drag").bind(window,"mouseup",function(){z.removeClass(r.__selector,"drag")})}),z.bind(s.__selector,"touchstart",function(){z.addClass(this,"drag").bind(window,"touchend",function(){z.removeClass(r.__selector,"drag")})});var o=document.createElement("div");K.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),K.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),K.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),K.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),K.extend(o.style,{width:"100%",height:"100%",background:"none"}),Xh(o,"top","rgba(0,0,0,0)","#000"),K.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),tS(s.__hue_field),K.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),z.bind(s.__saturation_field,"mousedown",a),z.bind(s.__saturation_field,"touchstart",a),z.bind(s.__field_knob,"mousedown",a),z.bind(s.__field_knob,"touchstart",a),z.bind(s.__hue_field,"mousedown",c),z.bind(s.__hue_field,"touchstart",c);function a(g){p(g),z.bind(window,"mousemove",p),z.bind(window,"touchmove",p),z.bind(window,"mouseup",l),z.bind(window,"touchend",l)}function c(g){_(g),z.bind(window,"mousemove",_),z.bind(window,"touchmove",_),z.bind(window,"mouseup",u),z.bind(window,"touchend",u)}function l(){z.unbind(window,"mousemove",p),z.unbind(window,"touchmove",p),z.unbind(window,"mouseup",l),z.unbind(window,"touchend",l),f()}function u(){z.unbind(window,"mousemove",_),z.unbind(window,"touchmove",_),z.unbind(window,"mouseup",u),z.unbind(window,"touchend",u),f()}function h(){var g=kl(this.value);g!==!1?(r.__color.__state=g,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}s.__saturation_field.appendChild(o),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function p(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),d=g.touches&&g.touches[0]||g,v=d.clientX,y=d.clientY,x=(v-m.left)/(m.right-m.left),T=1-(y-m.top)/(m.bottom-m.top);return T>1?T=1:T<0&&(T=0),x>1?x=1:x<0&&(x=0),r.__color.v=T,r.__color.s=x,r.setValue(r.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__hue_field.getBoundingClientRect(),d=g.touches&&g.touches[0]||g,v=d.clientY,y=1-(v-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),r.__color.h=y*360,r.setValue(r.__color.toOriginal()),!1}return s}return Ri(e,[{key:"updateDisplay",value:function(){var i=kl(this.getValue());if(i!==!1){var s=!1;K.each(bt.COMPONENTS,function(a){if(!K.isUndefined(i[a])&&!K.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return s=!0,{}},this),s&&K.extend(this.__color.__state,i)}K.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;K.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Xh(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),K.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(_s),eS=["-moz-","-o-","-webkit-","-ms-",""];function Xh(n,e,t,i){n.style.background="",K.each(eS,function(s){n.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function tS(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var iS={load:function(e,t){var i=t||document,s=i.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,i.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var i=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var r=i.getElementsByTagName("head")[0];try{r.appendChild(s)}catch{}}},nS=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,sS=function(e,t){var i=e[t];return K.isArray(arguments[2])||K.isObject(arguments[2])?new Zy(e,t,arguments[2]):K.isNumber(i)?K.isNumber(arguments[2])&&K.isNumber(arguments[3])?K.isNumber(arguments[4])?new Vl(e,t,arguments[2],arguments[3],arguments[4]):new Vl(e,t,arguments[2],arguments[3]):K.isNumber(arguments[4])?new ya(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ya(e,t,{min:arguments[2],max:arguments[3]}):K.isString(i)?new Jy(e,t):K.isFunction(i)?new Cd(e,t,""):K.isBoolean(i)?new wd(e,t):null};function rS(n){setTimeout(n,1e3/60)}var oS=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||rS,aS=function(){function n(){wi(this,n),this.backgroundElement=document.createElement("div"),K.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),z.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),K.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;z.bind(this.backgroundElement,"click",function(){e.hide()})}return Ri(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),K.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",z.unbind(t.domElement,"webkitTransitionEnd",s),z.unbind(t.domElement,"transitionend",s),z.unbind(t.domElement,"oTransitionEnd",s)};z.bind(this.domElement,"webkitTransitionEnd",i),z.bind(this.domElement,"transitionend",i),z.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-z.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-z.getHeight(this.domElement)/2+"px"}}]),n}(),cS=Yy(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);iS.inject(cS);var Yh="dg",qh=72,jh=20,Wr="Default",wr=function(){try{return!!window.localStorage}catch{return!1}}(),Ir=void 0,Kh=!0,Hs=void 0,xc=!1,Pd=[],it=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),z.addClass(this.domElement,Yh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=K.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=K.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),K.isUndefined(i.load)?i.load={preset:Wr}:i.preset&&(i.load.preset=i.preset),K.isUndefined(i.parent)&&i.hideable&&Pd.push(this),i.resizable=K.isUndefined(i.parent)&&i.resizable,i.autoPlace&&K.isUndefined(i.scrollable)&&(i.scrollable=!0);var s=wr&&localStorage.getItem(ks(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,fS(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,Yl(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?z.addClass(t.__ul,n.CLASS_CLOSED):z.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return s},set:function(f){wr&&(s=f,f?z.bind(window,"unload",r):z.unbind(window,"unload",r),localStorage.setItem(ks(t,"isLocal"),f))}}}),K.isUndefined(i.parent)){if(this.closed=i.closed||!1,z.addClass(this.domElement,n.CLASS_MAIN),z.makeSelectable(this.domElement,!1),wr&&s){t.useLocalStorage=!0;var a=localStorage.getItem(ks(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,z.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(z.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(z.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),z.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var c=document.createTextNode(i.name);z.addClass(c,"controller-name"),o=_u(t,c);var l=function(f){return f.preventDefault(),t.closed=!t.closed,!1};z.addClass(this.__ul,n.CLASS_CLOSED),z.addClass(o,"title"),z.bind(o,"click",l),i.closed||(this.closed=!1)}i.autoPlace&&(K.isUndefined(i.parent)&&(Kh&&(Hs=document.createElement("div"),z.addClass(Hs,Yh),z.addClass(Hs,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Hs),Kh=!1),Hs.appendChild(this.domElement),z.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||Yl(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},z.bind(window,"resize",this.__resizeHandler),z.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),z.bind(this.__ul,"transitionend",this.__resizeHandler),z.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&hS(this),r=function(){wr&&localStorage.getItem(ks(t,"isLocal"))==="true"&&localStorage.setItem(ks(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,K.defer(function(){h.width-=1})}i.parent||u()};it.toggleHide=function(){xc=!xc,K.each(Pd,function(n){n.domElement.style.display=xc?"none":""})};it.CLASS_AUTO_PLACE="a";it.CLASS_AUTO_PLACE_CONTAINER="ac";it.CLASS_MAIN="main";it.CLASS_CONTROLLER_ROW="cr";it.CLASS_TOO_TALL="taller-than-window";it.CLASS_CLOSED="closed";it.CLASS_CLOSE_BUTTON="close-button";it.CLASS_CLOSE_TOP="close-top";it.CLASS_CLOSE_BOTTOM="close-bottom";it.CLASS_DRAG="drag";it.DEFAULT_WIDTH=245;it.TEXT_CLOSED="Close Controls";it.TEXT_OPEN="Open Controls";it._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===qh||n.keyCode===qh)&&it.toggleHide()};z.bind(window,"keydown",it._keydownHandler,!1);K.extend(it.prototype,{add:function(e,t){return Nr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Nr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;K.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Hs.removeChild(this.domElement);var e=this;K.each(this.__folders,function(t){e.removeFolder(t)}),z.unbind(window,"keydown",it._keydownHandler,!1),$h(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new it(t);this.__folders[e]=i;var s=_u(this,i.domElement);return z.addClass(s,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],$h(e);var t=this;K.each(e.__folders,function(i){e.removeFolder(i)}),K.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=z.getOffset(e.__ul).top,i=0;K.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(i+=z.getHeight(s))}),window.innerHeight-t-jh<i?(z.addClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-jh+"px"):(z.removeClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:K.debounce(function(){this.onResize()},50),remember:function(){if(K.isUndefined(Ir)&&(Ir=new aS,Ir.domElement.innerHTML=nS),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&uS(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Yl(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=wo(this)),e.folders={},K.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=wo(this),Wl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Wr]=wo(this,!0)),this.load.remembered[e]=wo(this),this.preset=e,Xl(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K.each(this.__controllers,function(t){this.getRoot().load.remembered?Ld(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),K.each(this.__folders,function(t){t.revert(t)}),e||Wl(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Dd(this.__listening)},updateDisplay:function(){K.each(this.__controllers,function(e){e.updateDisplay()}),K.each(this.__folders,function(e){e.updateDisplay()})}});function _u(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function $h(n){z.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&z.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Wl(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function lS(n,e,t){if(t.__li=e,t.__gui=n,K.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Nr(n,t.object,t.property,{before:a,factoryArgs:[K.toArray(arguments)]})}if(K.isArray(o)||K.isObject(o)){var c=t.__li.nextElementSibling;return t.remove(),Nr(n,t.object,t.property,{before:c,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Vl){var i=new ya(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});K.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=i[r];t[r]=i[r]=function(){var c=Array.prototype.slice.call(arguments);return a.apply(i,c),o.apply(t,c)}}),z.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof ya){var s=function(o){if(K.isNumber(t.__min)&&K.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Nr(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(a),c&&l.listen(),l}return o};t.min=K.compose(s,t.min),t.max=K.compose(s,t.max)}else t instanceof wd?(z.bind(e,"click",function(){z.fakeEvent(t.__checkbox,"click")}),z.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Cd?(z.bind(e,"click",function(){z.fakeEvent(t.__button,"click")}),z.bind(e,"mouseover",function(){z.addClass(t.__button,"hover")}),z.bind(e,"mouseout",function(){z.removeClass(t.__button,"hover")})):t instanceof Gl&&(z.addClass(e,"color"),t.updateDisplay=K.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=K.compose(function(r){return n.getRoot().__preset_select&&t.isModified()&&Wl(n.getRoot(),!0),r},t.setValue)}function Ld(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var s=t.__rememberedObjectIndecesToControllers[i];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[i]=s),s[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[n.preset])o=r[n.preset];else if(r[Wr])o=r[Wr];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Nr(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(i.color)s=new Gl(e,t);else{var r=[e,t].concat(i.factoryArgs);s=sS.apply(n,r)}i.before instanceof _s&&(i.before=i.before.__li),Ld(n,s),z.addClass(s.domElement,"c");var o=document.createElement("span");z.addClass(o,"property-name"),o.innerHTML=s.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(s.domElement);var c=_u(n,a,i.before);return z.addClass(c,it.CLASS_CONTROLLER_ROW),s instanceof Gl?z.addClass(c,"color"):z.addClass(c,jy(s.getValue())),lS(n,c,s),n.__controllers.push(s),s}function ks(n,e){return document.location.href+"."+e}function Xl(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function Zh(n,e){e.style.display=n.useLocalStorage?"block":"none"}function uS(n){var e=n.__save_row=document.createElement("li");z.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),z.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",z.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",z.addClass(i,"button"),z.addClass(i,"save");var s=document.createElement("span");s.innerHTML="New",z.addClass(s,"button"),z.addClass(s,"save-as");var r=document.createElement("span");r.innerHTML="Revert",z.addClass(r,"button"),z.addClass(r,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?K.each(n.load.remembered,function(h,f){Xl(n,f,f===n.preset)}):Xl(n,Wr,!1),z.bind(o,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(r),wr){var a=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(ks(n,"isLocal"))==="true"&&c.setAttribute("checked","checked"),Zh(n,a),z.bind(c,"change",function(){n.useLocalStorage=!n.useLocalStorage,Zh(n,a)})}var u=document.getElementById("dg-new-constructor");z.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Ir.hide()}),z.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Ir.show(),u.focus(),u.select()}),z.bind(i,"click",function(){n.save()}),z.bind(s,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),z.bind(r,"click",function(){n.revert()})}function hS(n){var e=void 0;n.__resize_handle=document.createElement("div"),K.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),n.width+=e-r.clientX,n.onResize(),e=r.clientX,!1}function i(){z.removeClass(n.__closeButton,it.CLASS_DRAG),z.unbind(window,"mousemove",t),z.unbind(window,"mouseup",i)}function s(r){return r.preventDefault(),e=r.clientX,z.addClass(n.__closeButton,it.CLASS_DRAG),z.bind(window,"mousemove",t),z.bind(window,"mouseup",i),!1}z.bind(n.__resize_handle,"mousedown",s),z.bind(n.__closeButton,"mousedown",s),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function Yl(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function wo(n,e){var t={};return K.each(n.__rememberedObjects,function(i,s){var r={},o=n.__rememberedObjectIndecesToControllers[s];K.each(o,function(a,c){r[c]=e?a.initialValue:a.getValue()}),t[s]=r}),t}function fS(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Dd(n){n.length!==0&&oS.call(window,function(){Dd(n)}),K.each(n,function(e){e.updateDisplay()})}var dS=it;const Jh={type:"change"},gu={type:"start"},Id={type:"end"},Ro=new su,Qh=new ba,pS=Math.cos(70*Vt.DEG2RAD),yt=new ee,Bt=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vc=1e-6;class mS extends Bp{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new ma,this._lastTargetPosition=new ee,this._quat=new ma().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zu,this._sphericalDelta=new zu,this._scale=1,this._panOffset=new ee,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new ee,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gS.bind(this),this._onPointerDown=_S.bind(this),this._onPointerUp=xS.bind(this),this._onContextMenu=bS.bind(this),this._onMouseWheel=SS.bind(this),this._onKeyDown=ES.bind(this),this._onTouchStart=MS.bind(this),this._onTouchMove=TS.bind(this),this._onMouseDown=vS.bind(this),this._onMouseMove=yS.bind(this),this._interceptControlDown=AS.bind(this),this._interceptControlUp=wS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Ze.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Bt:i>Math.PI&&(i-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=yt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new ee(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new ee(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<pS?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vc||this._lastTargetPosition.distanceToSquared(this.target)>vc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _S(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Id),this.state=Ze.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ze.DOLLY;break;case Qi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}break;case Qi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(gu)}function yS(n){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function SS(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(n.preventDefault(),this.dispatchEvent(gu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Id))}function ES(n){this.enabled!==!1&&this._handleKeyDown(n)}function MS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Sn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ze.TOUCH_ROTATE;break;case Sn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case Sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ze.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(gu)}function TS(n){switch(this._trackPointer(n),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ze.NONE}}function bS(n){this.enabled!==!1&&n.preventDefault()}function AS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class RS extends mS{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Qi.PAN,MIDDLE:Qi.DOLLY,RIGHT:Qi.ROTATE},this.touches={ONE:Sn.PAN,TWO:Sn.DOLLY_ROTATE}}}const CS=`
    const float FOG_DISTANCE = 1000.0;
`,Nd=`
    #include <common>

    const float DITHER_STRENGTH = 0.1;

    const vec3 DAY_SKY_COLOR = vec3(0.25, 0.4, 0.6);
    const vec3 DAY_HORIZON_COLOR = vec3(0.75, 0.9, 1);
    const vec3 EARLY_TWILIGHT_COLOR = vec3(1, 0.83, 0.5);
    const vec3 LATE_TWILIGHT_COLOR = vec3(1, 0.333, 0.167);
    const vec3 NIGHT_SKY_COLOR = vec3(0.06, 0.1, 0.15);
    const vec3 NIGHT_HORIZON_COLOR = vec3(0.07, 0.13, 0.18);

    const float SUN_SHARPNESS = 2000.0;
    const float SUN_SIZE = 5.0;
    const float MOON_SHARPNESS = 12000.0;
    const float MOON_SIZE = 5000.0;

    const float STARS_SHARPNESS = 50.0;
    const float STARS_SIZE = 10.0;
    const float WIDTH_SCALE = 1.0 / 6.0;
    const float WIDTH_SCALE_HALF = WIDTH_SCALE / 2.0;
    const vec3 STARS_COLORS[6] = vec3[6]
    (
        vec3(1.0, 0.95, 0.9),
        vec3(1.0, 0.9, 0.9),
        vec3(0.9, 1.0, 1.0),
        vec3(0.9, 0.95, 1.0),
        vec3(1.0, 0.9, 1.0),
        vec3(1.0, 1.0, 1.0)
    );
    const float STARS_FALLOFF = 15.0;
    const float STARS_VISIBILITY = 450.0;

    const vec3 UP = vec3(0.0, 1.0, 0.0);

    uniform mat3 _SkyRotationMatrix;

    uniform sampler2D _DitherTexture;
    uniform vec2 _DitherTextureSize;
    uniform float _SunVisibility;
    uniform float _TwilightTime;
    uniform float _TwilightVisibility;
    uniform float _MoonVisibility;
    uniform float _GridSize;
    uniform float _GridSizeScaled;
    uniform sampler2D _Stars;
    uniform float _SpecularVisibility;
    uniform vec3 _DirToLight;
    uniform vec3 _Light;

    float dither = 0.0;

    vec2 sampleCubeCoords(vec3 dir)
    {
        vec3 absDir = abs(dir);

        bool xPositive = dir.x > 0.0 ? true : false;
        bool yPositive = dir.y > 0.0 ? true : false;
        bool zPositive = dir.z > 0.0 ? true : false;

        float maxAxis = 1.0;
        float u = 0.0;
        float v = 0.0;
        float i = 0.0;

        if (xPositive && absDir.x >= absDir.y && absDir.x >= absDir.z)
        {
            maxAxis = absDir.x;
            u = -dir.z;
            v = dir.y;
            i = 0.0;
        }

        if (!xPositive && absDir.x >= absDir.y && absDir.x >= absDir.z)
        {
            maxAxis = absDir.x;
            u = dir.z;
            v = dir.y;
            i = 1.0;
        }

        if (yPositive && absDir.y >= absDir.x && absDir.y >= absDir.z)
        {
            maxAxis = absDir.y;
            u = dir.x;
            v = -dir.z;
            i = 2.0;
        }

        if (!yPositive && absDir.y >= absDir.x && absDir.y >= absDir.z)
        {
            maxAxis = absDir.y;
            u = dir.x;
            v = dir.z;
            i = 3.0;
        }

        if (zPositive && absDir.z >= absDir.x && absDir.z >= absDir.y)
        {
            maxAxis = absDir.z;
            u = dir.x;
            v = dir.y;
            i = 4.0;
        }

        if (!zPositive && absDir.z >= absDir.x && absDir.z >= absDir.y)
        {
            maxAxis = absDir.z;
            u = -dir.x;
            v = dir.y;
            i = 5.0;
        }

        u = i * WIDTH_SCALE + (u / maxAxis + 1.0) * WIDTH_SCALE_HALF;
        v = (v / maxAxis + 1.0) * 0.5;
        return vec2(u, v);
    }

    void sampleDither(vec2 fragCoord)
    {
        dither = (texture2D(_DitherTexture, (fragCoord - vec2(0.5)) / _DitherTextureSize).x - 0.5) * DITHER_STRENGTH;
    }

    vec3 sampleSkybox(vec3 dir)
    {
        vec3 viewDir = _SkyRotationMatrix * dir;

        float density = clamp(pow2(1.0 - max(0.0, dot(dir, UP) + dither)), 0.0, 1.0);

        float sunLight = dot(viewDir, UP);
        float sun = min(pow(max(0.0, sunLight), SUN_SHARPNESS) * SUN_SIZE, 1.0);

        float moonLight = -sunLight;
        float moon = min(pow(max(0.0, moonLight), MOON_SHARPNESS) * MOON_SIZE, 1.0);

        vec3 day = mix(DAY_SKY_COLOR, DAY_HORIZON_COLOR, density);
        vec3 twilight = mix(LATE_TWILIGHT_COLOR, EARLY_TWILIGHT_COLOR, _TwilightTime);
        vec3 night = mix(NIGHT_SKY_COLOR, NIGHT_HORIZON_COLOR, density);

        vec3 sky = mix(night, day, _SunVisibility);
        sky = mix(sky, twilight, density * clamp(sunLight * 0.5 + 0.5 + dither, 0.0, 1.0) * _TwilightVisibility);

        vec2 cubeCoords = sampleCubeCoords(viewDir);
        vec4 gridValue = texture2D(_Stars, cubeCoords);

        vec2 gridCoords = vec2(cubeCoords.x * _GridSizeScaled, cubeCoords.y * _GridSize);
        vec2 gridCenterCoords = floor(gridCoords) + gridValue.xy;
        float stars = max(min(pow(1.0 - min(distance(gridCoords, gridCenterCoords), 1.0), STARS_SHARPNESS) * gridValue.z * STARS_SIZE, 1.0), moon);
        stars *= min(exp(-dot(sky, vec3(1.0)) * STARS_FALLOFF) * STARS_VISIBILITY, 1.0);

        sky = mix(sky, max(STARS_COLORS[int(gridValue.w * 6.0)], vec3(moon)), stars);
        sky = mix(sky, vec3(1.0), sun);
        
        return sky;
    }

    vec3 sampleFog(vec3 dir)
    {
        vec3 viewDir = _SkyRotationMatrix * dir;

        float sunLight = dot(viewDir, UP);
        vec3 twilight = mix(LATE_TWILIGHT_COLOR, EARLY_TWILIGHT_COLOR, _TwilightTime);
        vec3 horizon = mix(NIGHT_HORIZON_COLOR, DAY_HORIZON_COLOR, _SunVisibility);
        horizon = mix(horizon, twilight, clamp(sunLight * 0.5 + 0.5 + dither, 0.0, 1.0) * _TwilightVisibility);

        return horizon;
    }
`,Qr=`
    ${CS}
    ${Nd}

    const float NORMAL_MAP_SCALE = 0.1;
    const float NORMAL_MAP_STRENGTH = 0.2;
    const vec2 VELOCITY_1 = vec2(0.1, 0.0);
    const vec2 VELOCITY_2 = vec2(0.0, 0.1);
    const float SPECULAR_SHARPNESS = 100.0;
    const float SPECULAR_SIZE = 1.1;
    const float MAX_VIEW_DEPTH = 100.0;
    const float DENSITY = 0.35;
    const float MAX_VIEW_DEPTH_DENSITY = MAX_VIEW_DEPTH * DENSITY;
    const vec3 ABSORPTION = vec3(1.0) / vec3(10.0, 40.0, 100.0);
    const float CRITICAL_ANGLE = asin(1.0 / 1.33) / PI_HALF;

    uniform float _Time;
    uniform sampler2D _NormalMap1;
    uniform sampler2D _NormalMap2;
`,PS=`
    uniform mat3 _SkyRotationMatrix;

    attribute vec3 coord;

    varying vec3 _worldPos;
    varying vec3 _coord;

    void main()
    {
        _worldPos = coord;
        _coord = _SkyRotationMatrix * _worldPos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,LS=`
${Nd}

    varying vec3 _worldPos;
    varying vec3 _coord;

    void main() 
    {
        vec3 worldDir = normalize(_worldPos);
        vec3 viewDir = normalize(_coord);

        float dither = (texture2D(_DitherTexture, (gl_FragCoord.xy - vec2(0.5)) / _DitherTextureSize).x - 0.5) * DITHER_STRENGTH;
        float density = clamp(pow2(1.0 - max(0.0, dot(worldDir, UP) + dither)), 0.0, 1.0);

        float sunLight = dot(viewDir, UP);
        float sun = min(pow(max(0.0, sunLight), SUN_SHARPNESS) * SUN_SIZE, 1.0);

        float moonLight = -sunLight;
        float moon = min(pow(max(0.0, moonLight), MOON_SHARPNESS) * MOON_SIZE, 1.0);

        vec3 day = mix(DAY_SKY_COLOR, DAY_HORIZON_COLOR, density);
        vec3 twilight = mix(LATE_TWILIGHT_COLOR, EARLY_TWILIGHT_COLOR, _TwilightTime);
        vec3 night = mix(NIGHT_SKY_COLOR, NIGHT_HORIZON_COLOR, density);

        vec3 sky = mix(night, day, _SunVisibility);
        sky = mix(sky, twilight, density * clamp(sunLight * 0.5 + 0.5 + dither, 0.0, 1.0) * _TwilightVisibility);

        vec2 cubeCoords = sampleCubeCoords(viewDir);
        vec4 gridValue = texture2D(_Stars, cubeCoords);

        vec2 gridCoords = vec2(cubeCoords.x * _GridSizeScaled, cubeCoords.y * _GridSize);
        vec2 gridCenterCoords = floor(gridCoords) + gridValue.xy;
        float stars = max(min(pow(1.0 - min(distance(gridCoords, gridCenterCoords), 1.0), STARS_SHARPNESS) * gridValue.z * STARS_SIZE, 1.0), moon);
        stars *= min(exp(-dot(sky, vec3(1.0)) * STARS_FALLOFF) * STARS_VISIBILITY, 1.0);

        sky = mix(sky, max(STARS_COLORS[int(gridValue.w * 6.0)], vec3(moon)), stars);
        sky = mix(sky, vec3(1.0), sun);

        gl_FragColor = vec4(sky, 1.0);
    }
`;class Ud{constructor(e){st(this,"seed",0);st(this,"state",0);e?(this.seed=e,this.state=this.Generate(e)):(this.seed=Math.random(),this.state=this.Generate(this.seed))}Next(){return this.state=this.Generate(this.state),this.state}Generate(e){let t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}Generate2D(e,t){e+=this.seed,t+=this.seed;let i=Math.sin(e*12.9898+t*78.233)*43758.5453;return i-Math.floor(i)}Perlin(e,t){function i(A,b,R){return R=R*R*R*(R*(R*6-15)+10),(1-R)*A+R*b}let s=Math.floor(e),r=Math.floor(t),o=s+1,a=r+1,c=e-s,l=t-r,u=e-o,h=t-a,f=this.Generate2D(s,r)*Math.PI*2,p=this.Generate2D(o,r)*Math.PI*2,_=this.Generate2D(s,a)*Math.PI*2,g=this.Generate2D(o,a)*Math.PI*2,m=c*Math.cos(f)+l*Math.sin(f),d=u*Math.cos(p)+l*Math.sin(p),v=c*Math.cos(_)+h*Math.sin(_),y=u*Math.cos(g)+h*Math.sin(g),x=i(m,d,c),T=i(v,y,c);return Vt.clamp(i(x,T,l),-.7,.7)/.7}Ridge(e,t,i){return Math.pow(Math.abs(this.Perlin(e,t)),i)}}const eo="/projects/assets/",Ur=new qr;let cs;const yc=new ct(new rt),ef=new ct(void 0),Rn=new ct(1),Xr=new ct(0),Yr=new ct(0),DS=87,Ni=64,IS=1e4,Co=.43,Rr=new Uint8Array(Ni*Ni*24),Sc=new ct(void 0),Fd=new ct(Math.sqrt(Rn.value)),Od=new ct(new ee(1,1,1)),Bd=new ee(0,1,0);let Mn=0,Po=0;function NS(n,e){const t=new ee(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z)),i=n.x>0,s=n.y>0,r=n.z>0;let o=0,a=0,c=0,l=0;i&&t.x>=t.y&&t.x>=t.z&&(o=t.x,a=-n.z,c=n.y,l=0),!i&&t.x>=t.y&&t.x>=t.z&&(o=t.x,a=n.z,c=n.y,l=1),s&&t.y>=t.x&&t.y>=t.z&&(o=t.y,a=n.x,c=-n.z,l=2),!s&&t.y>=t.x&&t.y>=t.z&&(o=t.y,a=n.x,c=n.z,l=3),r&&t.z>=t.x&&t.z>=t.y&&(o=t.z,a=n.x,c=n.y,l=4),!r&&t.z>=t.x&&t.z>=t.y&&(o=t.z,a=-n.x,c=n.y,l=5),a=Math.floor((a/o+1)*.5*Ni),c=Math.floor((c/o+1)*.5*Ni);const u=(c*Ni*6+l*Ni+a)*4;Rr[u]=e[0],Rr[u+1]=e[1],Rr[u+2]=e[2],Rr[u+3]=e[3]}function zd(){ef.value=new ds().load(eo+"base/bluenoise.png",function(e){yc.value.x=e.image.width,yc.value.y=e.image.height,e.wrapS=Zt,e.wrapT=Zt});const n=new Ud(DS);for(let e=0;e<IS;e++){const t=n.Next()*Math.PI*2,i=n.Next()*2-1,s=Math.sqrt(1-i*i),r=new ee(Math.cos(t)*s,Math.sin(t)*s,i);NS(r,[Vt.lerp(.5-Co,.5+Co,n.Next())*255,Vt.lerp(.5-Co,.5+Co,n.Next())*255,Math.pow(n.Next(),6)*255,n.Next()*255])}Sc.value=new zp(Rr,Ni*6,Ni),Sc.value.needsUpdate=!0,Ur.vertexShader=PS,Ur.fragmentShader=LS,Mn=In.dot(Bd),Rn.value=Vt.clamp((Mn+.1)*2,0,1),Xr.value=Vt.clamp((Mn+.1)*3,0,1),Yr.value=1-Math.min(Math.abs(Mn*3),1),cs=function(e){e.uniforms._SkyRotationMatrix=Pa,e.uniforms._DitherTexture=ef,e.uniforms._DitherTextureSize=yc,e.uniforms._SunVisibility=Rn,e.uniforms._TwilightTime=Xr,e.uniforms._TwilightVisibility=Yr,e.uniforms._GridSize=new ct(Ni),e.uniforms._GridSizeScaled=new ct(Ni*6),e.uniforms._Stars=Sc,e.uniforms._SpecularVisibility=Fd,e.uniforms._DirToLight=new ct(In),e.uniforms._Light=Od},cs(Ur)}function Hd(){Mn=In.dot(Bd),Rn.value=Vt.clamp((Mn+.1)*2,0,1),Xr.value=Vt.clamp((Mn+.1)*3,0,1),Yr.value=1-Math.min(Math.abs(Mn*3),1),Fd.value=Math.sqrt(Rn.value),Po=Math.min(Rn.value+.333,1),Od.value.set(Po,Po,Po)}const US=Object.freeze(Object.defineProperty({__proto__:null,get SetSkyboxUniforms(){return cs},Start:zd,Update:Hd,material:Ur,sunVisibility:Rn,twilightTime:Xr,twilightVisibility:Yr},Symbol.toStringTag,{value:"Module"})),Sa=new sr,In=new ee,Pa=new ct(new Xf),FS=US,ii=2e3,Si=new ee(0,1,0),Ec=new ee(0,0,1).applyAxisAngle(new ee(0,1,0),Vt.degToRad(-30));let ql=-1;function kd(n){const e=Math.cos(n),t=1-e,i=Math.sin(n),s=Ec,r=Ec.clone().multiply(Ec);Pa.value.set(e+r.x*t,s.x*s.y*t-s.z*i,s.x*s.z*t+s.y*i,s.y*s.x*t+s.z*i,e+r.y*t,s.y*s.z*t-s.x*i,s.z*s.x*t-s.y*i,s.z*s.y*t+s.x*i,e+r.z*t)}function OS(){In.copy(Si),zd();const n=new Float32Array([-2e3,-2e3,-2e3,ii,-2e3,-2e3,-2e3,-2e3,ii,ii,-2e3,ii,-2e3,ii,-2e3,ii,ii,-2e3,-2e3,ii,ii,ii,ii,ii]),e=[2,3,0,3,1,0,0,1,4,1,5,4,1,3,5,3,7,5,3,2,7,2,6,7,2,0,6,0,4,6,4,5,6,5,7,6],t=new Zs;t.setAttribute("position",new Gt(n,3)),t.setAttribute("coord",new Gt(n,3)),t.setIndex(e),Sa.geometry=t,Sa.material=Ur,kd(ql),Si.applyMatrix3(Pa.value),In.set(-Si.x,Si.y,-Si.z),Si.set(0,1,0)}function BS(n,e){ql=e*.05%Math.PI*2-Math.PI/2,kd(ql),Si.applyMatrix3(Pa.value),In.set(-Si.x,Si.y,-Si.z),Si.set(0,1,0),Hd(),Sa.position.copy(n.position)}function zS(){const n=new ee(.75,.9,1),e=new ee(1,.333,.167).lerp(new ee(1,.83,.5),Xr.value);return n.lerp(e,Yr.value).multiplyScalar(Rn.value)}const HS=`
${Qr}

    varying vec2 _worldPos;
    varying vec2 _uv;

    void main()
    {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        _worldPos = worldPos.xz;
        _uv = _worldPos * NORMAL_MAP_SCALE;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
`,kS=`
${Qr}

    varying vec2 _worldPos;
    varying vec2 _uv;

    void main()
    {
        vec3 viewVec = vec3(_worldPos.x, 0.0, _worldPos.y) - cameraPosition;
        float viewLen = length(viewVec);
        vec3 viewDir = viewVec / viewLen;

        vec3 normal = texture2D(_NormalMap1, _uv + VELOCITY_1 * _Time).xyz * 2.0 - 1.0;
        normal += texture2D(_NormalMap2, _uv + VELOCITY_2 * _Time).xyz * 2.0 - 1.0;
        normal *= NORMAL_MAP_STRENGTH;
        normal += vec3(0.0, 0.0, 1.0);
        normal = normalize(normal).xzy;

        sampleDither(gl_FragCoord.xy);

        if (cameraPosition.y > 0.0)
        {
            vec3 halfWayDir = normalize(_DirToLight - viewDir);
            float specular = max(0.0, dot(normal, halfWayDir));
            specular = pow(specular, SPECULAR_SHARPNESS) * _SpecularVisibility;

            float reflectivity = pow2(1.0 - max(0.0, dot(-viewDir, normal)));

            vec3 reflection = sampleSkybox(reflect(viewDir, normal));
            vec3 surface = reflectivity * reflection;
            surface = max(surface, specular);

            float fog = clamp(viewLen / FOG_DISTANCE + dither, 0.0, 1.0);
            surface = mix(surface, sampleFog(viewDir), fog);

            gl_FragColor = vec4(surface, max(max(reflectivity, specular), fog));
            return;
        }

        float originY = cameraPosition.y;
        viewLen = min(viewLen, MAX_VIEW_DEPTH);
        float sampleY = originY + viewDir.y * viewLen;
        vec3 light = exp((sampleY - MAX_VIEW_DEPTH_DENSITY) * ABSORPTION);
        light *= _Light;

        float reflectivity = pow2(1.0 - max(0.0, dot(viewDir, normal)));
        float t = clamp(max(reflectivity, viewLen / MAX_VIEW_DEPTH) + dither, 0.0, 1.0);

        if (dot(viewDir, normal) < CRITICAL_ANGLE)
        {
            vec3 r = reflect(viewDir, -normal);
            sampleY = r.y * (MAX_VIEW_DEPTH - viewLen);
            vec3 rColor = exp((sampleY - MAX_VIEW_DEPTH_DENSITY) * ABSORPTION);
            rColor *= _Light;

            gl_FragColor = vec4(mix(rColor, light, t), 1.0);
            return;
        }

        gl_FragColor = vec4(light, t);
    }
`,VS=`
    varying vec3 _worldPos;

    void main()
    {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        _worldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
`,GS=`
${Qr}

    varying vec3 _worldPos;

    void main()
    {
        vec3 viewVec = _worldPos - cameraPosition;
        float viewLen = length(viewVec);
        vec3 viewDir = viewVec / viewLen;
        float originY = cameraPosition.y;

        if (cameraPosition.y > 0.0)
        {
            float distAbove = cameraPosition.y / -viewDir.y;
            viewLen -= distAbove;
            originY = 0.0;
        }
        viewLen = min(viewLen, MAX_VIEW_DEPTH);

        float sampleY = originY + viewDir.y * viewLen;
        vec3 light = exp((sampleY - viewLen * DENSITY) * ABSORPTION);
        light *= _Light;
        
        gl_FragColor = vec4(light, 1.0);
    }
`,WS=`
    varying vec3 _worldPos;
    varying vec3 _normal;
    varying vec2 _uv;
    
    void main()
    {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        _worldPos = worldPos.xyz;
        _normal = normal;
        _uv = uv;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
`,XS=`
${Qr}

    uniform vec3 _CameraForward;
    uniform sampler2D _MainTexture;
    uniform float _SpotLightSharpness;
    uniform float _SpotLightDistance;

    varying vec3 _worldPos;
    varying vec3 _normal;
    varying vec2 _uv;

    void main()
    {
        float dirLighting = max(0.0, dot(_normal, _DirToLight));
        vec3 texture = texture2D(_MainTexture, _uv).xyz * dirLighting;
        
        vec3 viewVec = _worldPos - cameraPosition;
        float viewLen = length(viewVec);
        vec3 viewDir = viewVec / viewLen;

        if (_worldPos.y > 0.0)
        {
            if (cameraPosition.y < 0.0)
            {
                viewLen -= cameraPosition.y / -viewDir.y;
            }

            sampleDither(gl_FragCoord.xy);
            vec3 fogColor = sampleFog(viewDir);
            float fog = clamp(viewLen / FOG_DISTANCE + dither, 0.0, 1.0);
            gl_FragColor = vec4(mix(texture, fogColor, fog), 1.0);
            return;
        }

        float originY = cameraPosition.y;

        if (cameraPosition.y > 0.0)
        {
            viewLen -= cameraPosition.y / -viewDir.y;
            originY = 0.0;
        }
        viewLen = min(viewLen, MAX_VIEW_DEPTH);

        float sampleY = originY + viewDir.y * viewLen;
        vec3 light = exp((sampleY - viewLen * DENSITY) * ABSORPTION) * _Light;

        float spotLight = 0.0;
        float spotLightDistance = 1.0;
        if (_SpotLightDistance > 0.0)
        {
            spotLightDistance =  min(distance(_worldPos, cameraPosition) / _SpotLightDistance, 1.0);
            spotLight = pow(max(dot(viewDir, _CameraForward), 0.0), _SpotLightSharpness) * (1.0 - spotLightDistance);
        }
        
        light = min(light + spotLight, vec3(1.0));

        gl_FragColor = vec4(mix(texture * light, light, min(viewLen / MAX_VIEW_DEPTH, 1.0 - spotLight)), 1.0);
    }
`,YS=`
    varying vec3 _worldPos;
    varying vec3 _normal;
    
    void main()
    {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        _worldPos = worldPos.xyz;
        _normal = normal;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
`,qS=`
${Qr}

    uniform vec3 _CameraForward;
    uniform sampler2D _MainTexture;
    uniform float _BlendSharpness;
    uniform float _Scale;
    uniform float _SpotLightSharpness;
    uniform float _SpotLightDistance;

    varying vec3 _worldPos;
    varying vec3 _normal;

    void main()
    {
        float dirLighting = max(0.4, dot(_normal, _DirToLight));

        vec3 weights = abs(_normal);
        weights = vec3(pow(weights.x, _BlendSharpness), pow(weights.y, _BlendSharpness), pow(weights.z, _BlendSharpness));
        weights = weights / (weights.x + weights.y + weights.z);

        vec3 textureX = texture2D(_MainTexture, _worldPos.yz * _Scale).xyz * weights.x;
        vec3 textureY = texture2D(_MainTexture, _worldPos.xz * _Scale).xyz * weights.y;
        vec3 textureZ = texture2D(_MainTexture, _worldPos.xy * _Scale).xyz * weights.z;

        vec3 texture = (textureX + textureY + textureZ) * dirLighting;
        
        vec3 viewVec = _worldPos - cameraPosition;
        float viewLen = length(viewVec);
        vec3 viewDir = viewVec / viewLen;

        if (_worldPos.y > 0.0)
        {
            if (cameraPosition.y < 0.0)
            {
                viewLen -= cameraPosition.y / -viewDir.y;
            }

            sampleDither(gl_FragCoord.xy);
            vec3 fogColor = sampleFog(viewDir);
            float fog = clamp(viewLen / FOG_DISTANCE + dither, 0.0, 1.0);
            gl_FragColor = vec4(mix(texture, fogColor, fog), 1.0);
            return;
        }

        float originY = cameraPosition.y;

        if (cameraPosition.y > 0.0)
        {
            viewLen -= cameraPosition.y / -viewDir.y;
            originY = 0.0;
        }
        viewLen = min(viewLen, MAX_VIEW_DEPTH);

        float sampleY = originY + viewDir.y * viewLen;
        vec3 light = exp((sampleY - viewLen * DENSITY) * ABSORPTION) * _Light;

        float spotLight = 0.0;
        float spotLightDistance = 1.0;
        if (_SpotLightDistance > 0.0)
        {
            spotLightDistance =  min(distance(_worldPos, cameraPosition) / _SpotLightDistance, 1.0);
            spotLight = pow(max(dot(viewDir, _CameraForward), 0.0), _SpotLightSharpness) * (1.0 - spotLightDistance);
        }
        
        light = min(light + spotLight, vec3(1.0));

        gl_FragColor = vec4(mix(texture * light, light, min(viewLen / MAX_VIEW_DEPTH, 1.0 - spotLight)), 1.0);
    }
`,es=new qr,ua=new qr,Lo=new qr,Cr=new qr,xu=new ct(new ds().load(eo+"base/waterNormal1.png"));xu.value.wrapS=Zt;xu.value.wrapT=Zt;const vu=new ct(new ds().load(eo+"base/waterNormal2.png"));vu.value.wrapS=Zt;vu.value.wrapT=Zt;const tf=10,jS=200,nf=new ct(jS),yu=new ds().load(eo+"base/basicChecker.png");yu.wrapS=Zt;yu.wrapT=Zt;const Su=new ds().load(eo+"base/sand.png");Su.wrapS=Zt;Su.wrapT=Zt;const KS=3,$S=1;function ZS(n,e){es.vertexShader=HS,es.fragmentShader=kS,es.side=nr,es.transparent=!0,es.uniforms={_Time:e,_NormalMap1:xu,_NormalMap2:vu},cs(es),ua.vertexShader=VS,ua.fragmentShader=GS,cs(ua),Lo.vertexShader=WS,Lo.fragmentShader=XS,Lo.uniforms={_MainTexture:new ct(yu),_CameraForward:new ct(n),_SpotLightSharpness:new ct(tf),_SpotLightDistance:nf},cs(Lo),Cr.vertexShader=YS,Cr.fragmentShader=qS,Cr.uniforms={_MainTexture:new ct(Su),_CameraForward:new ct(n),_BlendSharpness:new ct(KS),_Scale:new ct($S),_SpotLightSharpness:new ct(tf),_SpotLightDistance:nf},cs(Cr)}const Ys=new sr,Do=new sr;function JS(n,e){ZS(n,e);const t=1500,i=new Float32Array([-1500,0,-1500,t,0,-1500,-1500,0,t,t,0,t]),s=[2,3,0,3,1,0],r=new Zs;r.setAttribute("position",new Gt(i,3)),r.setIndex(s),Ys.geometry=r,Ys.material=es;const o=new Float32Array([-1500,-1e3,-1500,t,-1e3,-1500,-1500,-1e3,t,t,-1e3,t,-1500,0,-1500,t,0,-1500,-1500,0,t,t,0,t]),a=[2,3,0,3,1,0,0,1,4,1,5,4,1,3,5,3,7,5,3,2,7,2,6,7,2,0,6,0,4,6],c=new Zs;c.setAttribute("position",new Gt(o,3)),c.setIndex(a),Do.geometry=c,Do.material=ua,Do.parent=Ys,Ys.add(Do)}function QS(n){Ys.position.set(n.position.x,0,n.position.z)}const Vd=0,eE=1,tE=2,sf=2,Mc=1.25,rf=1,Fr=6*4+4+4,La=65535,iE=Math.pow(2,-24),Tc=Symbol("SKIP_GENERATION");function nE(n){return n.index?n.index.count:n.attributes.position.count}function ar(n){return nE(n)/3}function sE(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function rE(n,e){if(!n.index){const t=n.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=sE(t,i);n.setIndex(new Gt(s,1));for(let r=0;r<t;r++)s[r]=r}}function Gd(n,e){const t=ar(n),i=e||n.drawRange,s=i.start/3,r=(i.start+i.count)/3,o=Math.max(0,s),a=Math.min(t,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Wd(n,e){if(!n.groups||!n.groups.length)return Gd(n,e);const t=[],i=new Set,s=e||n.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(const c of n.groups){const l=c.start/3,u=(c.start+c.count)/3;i.add(Math.max(r,l)),i.add(Math.min(o,u))}const a=Array.from(i.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){const l=a[c],u=a[c+1];t.push({offset:Math.floor(l),count:Math.floor(u-l)})}return t}function oE(n,e){const t=ar(n),i=Wd(n,e).sort((o,a)=>o.offset-a.offset),s=i[i.length-1];s.count=Math.min(t-s.offset,s.count);let r=0;return i.forEach(({count:o})=>r+=o),t!==r}function bc(n,e,t,i,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,p=1/0,_=-1/0,g=-1/0,m=-1/0;for(let d=e*6,v=(e+t)*6;d<v;d+=6){const y=n[d+0],x=n[d+1],T=y-x,A=y+x;T<r&&(r=T),A>c&&(c=A),y<h&&(h=y),y>_&&(_=y);const b=n[d+2],R=n[d+3],E=b-R,S=b+R;E<o&&(o=E),S>l&&(l=S),b<f&&(f=b),b>g&&(g=b);const C=n[d+4],D=n[d+5],L=C-D,O=C+D;L<a&&(a=L),O>u&&(u=O),C<p&&(p=C),C>m&&(m=C)}i[0]=r,i[1]=o,i[2]=a,i[3]=c,i[4]=l,i[5]=u,s[0]=h,s[1]=f,s[2]=p,s[3]=_,s[4]=g,s[5]=m}function aE(n,e=null,t=null,i=null){const s=n.attributes.position,r=n.index?n.index.array:null,o=ar(n),a=s.normalized;let c;e===null?(c=new Float32Array(o*6),t=0,i=o):(c=e,t=t||0,i=i||o);const l=s.array,u=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const f=["getX","getY","getZ"];for(let p=t;p<t+i;p++){const _=p*3,g=p*6;let m=_+0,d=_+1,v=_+2;r&&(m=r[m],d=r[d],v=r[v]),a||(m=m*h+u,d=d*h+u,v=v*h+u);for(let y=0;y<3;y++){let x,T,A;a?(x=s[f[y]](m),T=s[f[y]](d),A=s[f[y]](v)):(x=l[m+y],T=l[d+y],A=l[v+y]);let b=x;T<b&&(b=T),A<b&&(b=A);let R=x;T>R&&(R=T),A>R&&(R=A);const E=(R-b)/2,S=y*2;c[g+S+0]=b+E,c[g+S+1]=E+(Math.abs(b)+E)*iE}}return c}function ft(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function of(n){let e=-1,t=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>t&&(t=s,e=i)}return e}function af(n,e){e.set(n)}function cf(n,e,t){let i,s;for(let r=0;r<3;r++){const o=r+3;i=n[r],s=e[r],t[r]=i<s?i:s,i=n[o],s=e[o],t[o]=i>s?i:s}}function Io(n,e,t){for(let i=0;i<3;i++){const s=e[n+2*i],r=e[n+2*i+1],o=s-r,a=s+r;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function gr(n){const e=n[3]-n[0],t=n[4]-n[1],i=n[5]-n[2];return 2*(e*t+t*i+i*e)}const ji=32,cE=(n,e)=>n.candidate-e.candidate,dn=new Array(ji).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),No=new Float32Array(6);function lE(n,e,t,i,s,r){let o=-1,a=0;if(r===Vd)o=of(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===eE)o=of(n),o!==-1&&(a=uE(t,i,s,o));else if(r===tE){const c=gr(n);let l=Mc*s;const u=i*6,h=(i+s)*6;for(let f=0;f<3;f++){const p=e[f],m=(e[f+3]-p)/ji;if(s<ji/4){const d=[...dn];d.length=s;let v=0;for(let x=u;x<h;x+=6,v++){const T=d[v];T.candidate=t[x+2*f],T.count=0;const{bounds:A,leftCacheBounds:b,rightCacheBounds:R}=T;for(let E=0;E<3;E++)R[E]=1/0,R[E+3]=-1/0,b[E]=1/0,b[E+3]=-1/0,A[E]=1/0,A[E+3]=-1/0;Io(x,t,A)}d.sort(cE);let y=s;for(let x=0;x<y;x++){const T=d[x];for(;x+1<y&&d[x+1].candidate===T.candidate;)d.splice(x+1,1),y--}for(let x=u;x<h;x+=6){const T=t[x+2*f];for(let A=0;A<y;A++){const b=d[A];T>=b.candidate?Io(x,t,b.rightCacheBounds):(Io(x,t,b.leftCacheBounds),b.count++)}}for(let x=0;x<y;x++){const T=d[x],A=T.count,b=s-T.count,R=T.leftCacheBounds,E=T.rightCacheBounds;let S=0;A!==0&&(S=gr(R)/c);let C=0;b!==0&&(C=gr(E)/c);const D=rf+Mc*(S*A+C*b);D<l&&(o=f,l=D,a=T.candidate)}}else{for(let y=0;y<ji;y++){const x=dn[y];x.count=0,x.candidate=p+m+y*m;const T=x.bounds;for(let A=0;A<3;A++)T[A]=1/0,T[A+3]=-1/0}for(let y=u;y<h;y+=6){let A=~~((t[y+2*f]-p)/m);A>=ji&&(A=ji-1);const b=dn[A];b.count++,Io(y,t,b.bounds)}const d=dn[ji-1];af(d.bounds,d.rightCacheBounds);for(let y=ji-2;y>=0;y--){const x=dn[y],T=dn[y+1];cf(x.bounds,T.rightCacheBounds,x.rightCacheBounds)}let v=0;for(let y=0;y<ji-1;y++){const x=dn[y],T=x.count,A=x.bounds,R=dn[y+1].rightCacheBounds;T!==0&&(v===0?af(A,No):cf(A,No,No)),v+=T;let E=0,S=0;v!==0&&(E=gr(No)/c);const C=s-v;C!==0&&(S=gr(R)/c);const D=rf+Mc*(E*v+S*C);D<l&&(o=f,l=D,a=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function uE(n,e,t,i){let s=0;for(let r=e,o=e+t;r<o;r++)s+=n[r*6+i*2];return s/t}class Ac{constructor(){this.boundingData=new Float32Array(6)}}function hE(n,e,t,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=h}o++,a--}else return o}}function fE(n,e,t,i,s,r){let o=i,a=i+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){let u=n[o];n[o]=n[a],n[a]=u;for(let h=0;h<6;h++){let f=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=f}o++,a--}else return o}}function kt(n,e){return e[n+15]===65535}function Kt(n,e){return e[n+6]}function ci(n,e){return e[n+14]}function li(n){return n+8}function ui(n,e){return e[n+6]}function Xd(n,e){return e[n+7]}let Yd,Pr,ha,qd;const dE=Math.pow(2,32);function jl(n){return"count"in n?1:1+jl(n.left)+jl(n.right)}function pE(n,e,t){return Yd=new Float32Array(t),Pr=new Uint32Array(t),ha=new Uint16Array(t),qd=new Uint8Array(t),Kl(n,e)}function Kl(n,e){const t=n/4,i=n/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Yd[t+o]=r[o];if(s)if(e.buffer){const o=e.buffer;qd.set(new Uint8Array(o),n);for(let a=n,c=n+o.byteLength;a<c;a+=Fr){const l=a/2;kt(l,ha)||(Pr[a/4+6]+=t)}return n+o.byteLength}else{const o=e.offset,a=e.count;return Pr[t+6]=o,ha[i+14]=a,ha[i+15]=La,n+Fr}else{const o=e.left,a=e.right,c=e.splitAxis;let l;if(l=Kl(n+Fr,o),l/4>dE)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Pr[t+6]=l/4,l=Kl(l,a),Pr[t+7]=c,l}}function mE(n,e){const t=(n.index?n.index.count:n.attributes.position.count)/3,i=t>2**16,s=i?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function _E(n,e,t,i,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,h=n._indirectBuffer,f=n.geometry,p=f.index?f.index.array:null,_=u?fE:hE,g=ar(f),m=new Float32Array(6);let d=!1;const v=new Ac;return bc(e,t,i,v.boundingData,m),x(v,t,i,m),v;function y(T){l&&l(T/g)}function x(T,A,b,R=null,E=0){if(!d&&E>=r&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),b<=a||E>=r)return y(A+b),T.offset=A,T.count=b,T;const S=lE(T.boundingData,R,e,A,b,c);if(S.axis===-1)return y(A+b),T.offset=A,T.count=b,T;const C=_(h,p,e,A,b,S);if(C===A||C===A+b)y(A+b),T.offset=A,T.count=b;else{T.splitAxis=S.axis;const D=new Ac,L=A,O=C-A;T.left=D,bc(e,L,O,D.boundingData,m),x(D,L,O,m,E+1);const G=new Ac,H=C,J=b-O;T.right=G,bc(e,H,J,G.boundingData,m),x(G,H,J,m,E+1)}return T}}function gE(n,e){const t=n.geometry;e.indirect&&(n._indirectBuffer=mE(t,e.useSharedArrayBuffer),oE(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||rE(t,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=aE(t),r=e.indirect?Gd(t,e.range):Wd(t,e.range);n._roots=r.map(o=>{const a=_E(n,s,o.offset,o.count,e),c=jl(a),l=new i(Fr*c);return pE(0,a,l),l})}class rn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const c=e[r][t];i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}setFromPoints(e,t){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],c=e.dot(a);i=c<i?c:i,s=c>s?c:s}this.min=i,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}rn.prototype.setFromBox=function(){const n=new ee;return function(t,i){const s=i.min,r=i.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){n.x=s.x*c+r.x*(1-c),n.y=s.y*l+r.y*(1-l),n.z=s.z*u+r.z*(1-u);const h=t.dot(n);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const xE=function(){const n=new ee,e=new ee,t=new ee;return function(s,r,o){const a=s.start,c=n,l=r.start,u=e;t.subVectors(a,l),n.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const h=t.dot(u),f=u.dot(c),p=u.dot(u),_=t.dot(c),m=c.dot(c)*p-f*f;let d,v;m!==0?d=(h*f-_*p)/m:d=0,v=(h+d*f)/p,o.x=d,o.y=v}}(),Eu=function(){const n=new rt,e=new ee,t=new ee;return function(s,r,o,a){xE(s,r,n);let c=n.x,l=n.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;const f=e,p=t;if(s.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=p.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(p);return}}}}(),vE=function(){const n=new ee,e=new ee,t=new ba,i=new di;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(i.start=l,i.end=u,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a||(i.start=l,i.end=h,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a)||(i.start=u,i.end=h,i.closestPointToPoint(c,!0,n).distanceTo(c)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(c))<=a){const d=g.projectPoint(c,e);if(o.containsPoint(d))return!0}return!1}}(),yE=1e-15;function wc(n){return Math.abs(n)<yE}class pi extends Ht{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new ee),this.satBounds=new Array(4).fill().map(()=>new rn),this.points=[this.a,this.b,this.c],this.sphere=new Wf,this.plane=new ba,this.needsUpdate=!0}intersectsSphere(e){return vE(e,this)}update(){const e=this.a,t=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(e,t),u.setFromPoints(l,s);const h=r[2],f=o[2];h.subVectors(t,i),f.setFromPoints(h,s);const p=r[3],_=o[3];p.subVectors(i,e),_.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}pi.prototype.closestPointToSegment=function(){const n=new ee,e=new ee,t=new di;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const p=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[p]),Eu(t,s,n,e),u=n.distanceToSquared(e),u<h&&(h=u,r&&r.copy(n),o&&o.copy(e))}return this.closestPointToPoint(a,n),u=a.distanceToSquared(n),u<h&&(h=u,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(c,n),u=c.distanceToSquared(n),u<h&&(h=u,r&&r.copy(n),o&&o.copy(c)),Math.sqrt(h)}}();pi.prototype.intersectsTriangle=function(){const n=new pi,e=new Array(3),t=new Array(3),i=new rn,s=new rn,r=new ee,o=new ee,a=new ee,c=new ee,l=new ee,u=new di,h=new di,f=new di,p=new ee;function _(g,m,d){const v=g.points;let y=0,x=-1;for(let T=0;T<3;T++){const{start:A,end:b}=u;A.copy(v[T]),b.copy(v[(T+1)%3]),u.delta(o);const R=wc(m.distanceToPoint(A));if(wc(m.normal.dot(o))&&R){d.copy(u),y=2;break}const E=m.intersectLine(u,p);if(!E&&R&&p.copy(A),(E||R)&&!wc(p.distanceTo(b))){if(y<=1)(y===1?d.start:d.end).copy(p),R&&(x=y);else if(y>=2){(x===1?d.start:d.end).copy(p),y=2;break}if(y++,y===2&&x===-1)break}}return y}return function(m,d=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(n.copy(m),n.update(),m=n);const y=this.plane,x=m.plane;if(Math.abs(y.normal.dot(x.normal))>1-1e-10){const T=this.satBounds,A=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let E=0;E<4;E++){const S=T[E],C=A[E];if(i.setFromPoints(C,t),S.isSeparated(i))return!1}const b=m.satBounds,R=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let E=0;E<4;E++){const S=b[E],C=R[E];if(i.setFromPoints(C,e),S.isSeparated(i))return!1}for(let E=0;E<4;E++){const S=A[E];for(let C=0;C<4;C++){const D=R[C];if(r.crossVectors(S,D),i.setFromPoints(r,e),s.setFromPoints(r,t),i.isSeparated(s))return!1}}return d&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const T=_(this,x,h);if(T===1&&m.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(T!==2)return!1;const A=_(m,y,f);if(A===1&&this.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(A!==2)return!1;if(h.delta(a),f.delta(c),a.dot(c)<0){let L=f.start;f.start=f.end,f.end=L}const b=h.start.dot(a),R=h.end.dot(a),E=f.start.dot(a),S=f.end.dot(a),C=R<E,D=b<S;return b!==S&&E!==R&&C===D?!1:(d&&(l.subVectors(h.start,f.start),l.dot(a)>0?d.start.copy(h.start):d.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(a)<0?d.end.copy(h.end):d.end.copy(f.end)),!0)}}}();pi.prototype.distanceToPoint=function(){const n=new ee;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();pi.prototype.distanceToTriangle=function(){const n=new ee,e=new ee,t=["a","b","c"],i=new di,s=new di;return function(o,a=null,c=null){const l=a||c?i:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const p=t[h],_=o[p];this.closestPointToPoint(_,n),f=_.distanceToSquared(n),f<u&&(u=f,a&&a.copy(n),c&&c.copy(_));const g=this[p];o.closestPointToPoint(g,n),f=g.distanceToSquared(n),f<u&&(u=f,a&&a.copy(g),c&&c.copy(n))}for(let h=0;h<3;h++){const f=t[h],p=t[(h+1)%3];i.set(this[f],this[p]);for(let _=0;_<3;_++){const g=t[_],m=t[(_+1)%3];s.set(o[g],o[m]),Eu(i,s,n,e);const d=n.distanceToSquared(e);d<u&&(u=d,a&&a.copy(n),c&&c.copy(e))}}return Math.sqrt(u)}}();class Ut{constructor(e,t,i){this.isOrientedBox=!0,this.min=new ee,this.max=new ee,this.matrix=new Pt,this.invMatrix=new Pt,this.points=new Array(8).fill().map(()=>new ee),this.satAxes=new Array(3).fill().map(()=>new ee),this.satBounds=new Array(3).fill().map(()=>new rn),this.alignedSatBounds=new Array(3).fill().map(()=>new rn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Ut.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,p=s[f];p.x=l?i.x:t.x,p.y=u?i.y:t.y,p.z=h?i.z:t.z,p.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],f=1<<l,p=s[f];u.subVectors(a,p),h.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ut.prototype.intersectsBox=function(){const n=new rn;return function(t){this.needsUpdate&&this.update();const i=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(n.setFromBox(l,t),u.isSeparated(n))return!1}return!0}}();Ut.prototype.intersectsTriangle=function(){const n=new pi,e=new Array(3),t=new rn,i=new rn,s=new ee;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){const p=a[f],_=c[f];if(t.setFromPoints(_,e),p.isSeparated(t))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const p=l[f],_=u[f];if(t.setFromPoints(_,h),p.isSeparated(t))return!1}for(let f=0;f<3;f++){const p=c[f];for(let _=0;_<4;_++){const g=u[_];if(s.crossVectors(p,g),t.setFromPoints(s,e),i.setFromPoints(s,h),t.isSeparated(i))return!1}}return!0}}();Ut.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Ut.prototype.distanceToPoint=function(){const n=new ee;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Ut.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new di),t=new Array(12).fill().map(()=>new di),i=new ee,s=new ee;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),c&&c.copy(i),l&&l.copy(s)),0;const u=a*a,h=o.min,f=o.max,p=this.points;let _=1/0;for(let m=0;m<8;m++){const d=p[m];s.copy(d).clamp(h,f);const v=d.distanceToSquared(s);if(v<_&&(_=v,c&&c.copy(d),l&&l.copy(s),v<u))return Math.sqrt(v)}let g=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){const y=(m+1)%3,x=(m+2)%3,T=d<<y|v<<x,A=1<<m|d<<y|v<<x,b=p[T],R=p[A];e[g].set(b,R);const S=n[m],C=n[y],D=n[x],L=t[g],O=L.start,G=L.end;O[S]=h[S],O[C]=d?h[C]:f[C],O[D]=v?h[D]:f[C],G[S]=f[S],G[C]=d?h[C]:f[C],G[D]=v?h[D]:f[C],g++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){s.x=m?f.x:h.x,s.y=d?f.y:h.y,s.z=v?f.z:h.z,this.closestPointToPoint(s,i);const y=s.distanceToSquared(i);if(y<_&&(_=y,c&&c.copy(i),l&&l.copy(s),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const d=e[m];for(let v=0;v<12;v++){const y=t[v];Eu(d,y,i,s);const x=i.distanceToSquared(s);if(x<_&&(_=x,c&&c.copy(i),l&&l.copy(s),x<u))return Math.sqrt(x)}}return Math.sqrt(_)}}();class Mu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class SE extends Mu{constructor(){super(()=>new pi)}}const hi=new SE;class EE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ot=new EE;let Tn,qs;const Ds=[],Uo=new Mu(()=>new Ai);function ME(n,e,t,i,s,r){Tn=Uo.getPrimitive(),qs=Uo.getPrimitive(),Ds.push(Tn,qs),ot.setBuffer(n._roots[e]);const o=$l(0,n.geometry,t,i,s,r);ot.clearBuffer(),Uo.releasePrimitive(Tn),Uo.releasePrimitive(qs),Ds.pop(),Ds.pop();const a=Ds.length;return a>0&&(qs=Ds[a-1],Tn=Ds[a-2]),o}function $l(n,e,t,i,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ot;let u=n*2;if(kt(u,c)){const f=Kt(n,l),p=ci(u,c);return ft(n,a,Tn),i(f,p,!1,o,r+n,Tn)}else{let S=function(D){const{uint16Array:L,uint32Array:O}=ot;let G=D*2;for(;!kt(G,L);)D=li(D),G=D*2;return Kt(D,O)},C=function(D){const{uint16Array:L,uint32Array:O}=ot;let G=D*2;for(;!kt(G,L);)D=ui(D,O),G=D*2;return Kt(D,O)+ci(G,L)};const f=li(n),p=ui(n,l);let _=f,g=p,m,d,v,y;if(s&&(v=Tn,y=qs,ft(_,a,v),ft(g,a,y),m=s(v),d=s(y),d<m)){_=p,g=f;const D=m;m=d,d=D,v=y}v||(v=Tn,ft(_,a,v));const x=kt(_*2,c),T=t(v,x,m,o+1,r+_);let A;if(T===sf){const D=S(_),O=C(_)-D;A=i(D,O,!0,o+1,r+_,v)}else A=T&&$l(_,e,t,i,s,r,o+1);if(A)return!0;y=qs,ft(g,a,y);const b=kt(g*2,c),R=t(y,b,d,o+1,r+g);let E;if(R===sf){const D=S(g),O=C(g)-D;E=i(D,O,!0,o+1,r+g,y)}else E=R&&$l(g,e,t,i,s,r,o+1);return!!E}}const xr=new ee,Rc=new ee;function TE(n,e,t={},i=0,s=1/0){const r=i*i,o=s*s;let a=1/0,c=null;if(n.shapecast({boundsTraverseOrder:u=>(xr.copy(e).clamp(u.min,u.max),xr.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,xr);const f=e.distanceToSquared(xr);return f<a&&(Rc.copy(xr),a=f,c=h),f<r}}),a===1/0)return null;const l=Math.sqrt(a);return t.point?t.point.copy(Rc):t.point=Rc.clone(),t.distance=l,t.faceIndex=c,t}const bE=parseInt(kp)>=169,Yn=new ee,qn=new ee,jn=new ee,Fo=new rt,Oo=new rt,Bo=new rt,lf=new ee,uf=new ee,hf=new ee,vr=new ee;function AE(n,e,t,i,s,r,o,a){let c;if(r===Hp?c=n.intersectTriangle(i,t,e,!0,s):c=n.intersectTriangle(e,t,i,r!==nr,s),c===null)return null;const l=n.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function wE(n,e,t,i,s,r,o,a,c,l,u){Yn.fromBufferAttribute(e,r),qn.fromBufferAttribute(e,o),jn.fromBufferAttribute(e,a);const h=AE(n,Yn,qn,jn,vr,c,l,u);if(h){const f=new ee;Ht.getBarycoord(vr,Yn,qn,jn,f),i&&(Fo.fromBufferAttribute(i,r),Oo.fromBufferAttribute(i,o),Bo.fromBufferAttribute(i,a),h.uv=Ht.getInterpolation(vr,Yn,qn,jn,Fo,Oo,Bo,new rt)),s&&(Fo.fromBufferAttribute(s,r),Oo.fromBufferAttribute(s,o),Bo.fromBufferAttribute(s,a),h.uv1=Ht.getInterpolation(vr,Yn,qn,jn,Fo,Oo,Bo,new rt)),t&&(lf.fromBufferAttribute(t,r),uf.fromBufferAttribute(t,o),hf.fromBufferAttribute(t,a),h.normal=Ht.getInterpolation(vr,Yn,qn,jn,lf,uf,hf,new ee),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:o,c:a,normal:new ee,materialIndex:0};Ht.getNormal(Yn,qn,jn,p.normal),h.face=p,h.faceIndex=r,bE&&(h.barycoord=f)}return h}function Da(n,e,t,i,s,r,o){const a=i*3;let c=a+0,l=a+1,u=a+2;const h=n.index;n.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:p,uv:_,uv1:g}=n.attributes,m=wE(t,f,p,_,g,c,l,u,e,r,o);return m?(m.faceIndex=i,s&&s.push(m),m):null}function xt(n,e,t,i){const s=n.a,r=n.b,o=n.c;let a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),o.x=i.getX(l),o.y=i.getY(l),o.z=i.getZ(l)}function RE(n,e,t,i,s,r,o,a){const{geometry:c,_indirectBuffer:l}=n;for(let u=i,h=i+s;u<h;u++)Da(c,e,t,u,r,o,a)}function CE(n,e,t,i,s,r,o){const{geometry:a,_indirectBuffer:c}=n;let l=1/0,u=null;for(let h=i,f=i+s;h<f;h++){let p;p=Da(a,e,t,h,null,r,o),p&&p.distance<l&&(u=p,l=p.distance)}return u}function PE(n,e,t,i,s,r,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=n,h=e+n;u<h;u++){let f;if(f=u,xt(o,f*3,c,l),o.needsUpdate=!0,i(o,f,s,r))return!0}return!1}function LE(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let f=0,p=u.length;f<p;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,p,_=!1){const g=f*2;if(a[g+15]===La){const d=o[f+6],v=a[g+14];let y=1/0,x=1/0,T=1/0,A=-1/0,b=-1/0,R=-1/0;for(let E=3*d,S=3*(d+v);E<S;E++){let C=i[E];const D=s.getX(C),L=s.getY(C),O=s.getZ(C);D<y&&(y=D),D>A&&(A=D),L<x&&(x=L),L>b&&(b=L),O<T&&(T=O),O>R&&(R=O)}return c[f+0]!==y||c[f+1]!==x||c[f+2]!==T||c[f+3]!==A||c[f+4]!==b||c[f+5]!==R?(c[f+0]=y,c[f+1]=x,c[f+2]=T,c[f+3]=A,c[f+4]=b,c[f+5]=R,!0):!1}else{const d=f+8,v=o[f+6],y=d+p,x=v+p;let T=_,A=!1,b=!1;e?T||(A=e.has(y),b=e.has(x),T=!A&&!b):(A=!0,b=!0);const R=T||A,E=T||b;let S=!1;R&&(S=h(d,p,T));let C=!1;E&&(C=h(v,p,T));const D=S||C;if(D)for(let L=0;L<3;L++){const O=d+L,G=v+L,H=c[O],J=c[O+3],X=c[G],ne=c[G+3];c[f+L]=H<X?H:X,c[f+L+3]=J>ne?J:ne}return D}}}function Nn(n,e,t,i,s){let r,o,a,c,l,u;const h=1/t.direction.x,f=1/t.direction.y,p=1/t.direction.z,_=t.origin.x,g=t.origin.y,m=t.origin.z;let d=e[n],v=e[n+3],y=e[n+1],x=e[n+3+1],T=e[n+2],A=e[n+3+2];return h>=0?(r=(d-_)*h,o=(v-_)*h):(r=(v-_)*h,o=(d-_)*h),f>=0?(a=(y-g)*f,c=(x-g)*f):(a=(x-g)*f,c=(y-g)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),p>=0?(l=(T-m)*p,u=(A-m)*p):(l=(A-m)*p,u=(T-m)*p),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=s&&o>=i)}function DE(n,e,t,i,s,r,o,a){const{geometry:c,_indirectBuffer:l}=n;for(let u=i,h=i+s;u<h;u++){let f=l?l[u]:u;Da(c,e,t,f,r,o,a)}}function IE(n,e,t,i,s,r,o){const{geometry:a,_indirectBuffer:c}=n;let l=1/0,u=null;for(let h=i,f=i+s;h<f;h++){let p;p=Da(a,e,t,c?c[h]:h,null,r,o),p&&p.distance<l&&(u=p,l=p.distance)}return u}function NE(n,e,t,i,s,r,o){const{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=n,h=e+n;u<h;u++){let f;if(f=t.resolveTriangleIndex(u),xt(o,f*3,c,l),o.needsUpdate=!0,i(o,f,s,r))return!0}return!1}function UE(n,e,t,i,s,r,o){ot.setBuffer(n._roots[e]),Zl(0,n,t,i,s,r,o),ot.clearBuffer()}function Zl(n,e,t,i,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ot,u=n*2;if(kt(u,c)){const f=Kt(n,l),p=ci(u,c);RE(e,t,i,f,p,s,r,o)}else{const f=li(n);Nn(f,a,i,r,o)&&Zl(f,e,t,i,s,r,o);const p=ui(n,l);Nn(p,a,i,r,o)&&Zl(p,e,t,i,s,r,o)}}const FE=["x","y","z"];function OE(n,e,t,i,s,r){ot.setBuffer(n._roots[e]);const o=Jl(0,n,t,i,s,r);return ot.clearBuffer(),o}function Jl(n,e,t,i,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ot;let l=n*2;if(kt(l,a)){const h=Kt(n,c),f=ci(l,a);return CE(e,t,i,h,f,s,r)}else{const h=Xd(n,c),f=FE[h],_=i.direction[f]>=0;let g,m;_?(g=li(n),m=ui(n,c)):(g=ui(n,c),m=li(n));const v=Nn(g,o,i,s,r)?Jl(g,e,t,i,s,r):null;if(v){const T=v.point[f];if(_?T<=o[m+h]:T>=o[m+h+3])return v}const x=Nn(m,o,i,s,r)?Jl(m,e,t,i,s,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const zo=new Ai,Is=new pi,Ns=new pi,yr=new Pt,ff=new Ut,Ho=new Ut;function BE(n,e,t,i){ot.setBuffer(n._roots[e]);const s=Ql(0,n,t,i);return ot.clearBuffer(),s}function Ql(n,e,t,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ot;let c=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),ff.set(t.boundingBox.min,t.boundingBox.max,i),s=ff),kt(c,o)){const u=e.geometry,h=u.index,f=u.attributes.position,p=t.index,_=t.attributes.position,g=Kt(n,a),m=ci(c,o);if(yr.copy(i).invert(),t.boundsTree)return ft(n,r,Ho),Ho.matrix.copy(yr),Ho.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Ho.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let y=g*3,x=(m+g)*3;y<x;y+=3)if(xt(Ns,y,h,f),Ns.needsUpdate=!0,v.intersectsTriangle(Ns))return!0;return!1}});for(let d=g*3,v=(m+g)*3;d<v;d+=3){xt(Is,d,h,f),Is.a.applyMatrix4(yr),Is.b.applyMatrix4(yr),Is.c.applyMatrix4(yr),Is.needsUpdate=!0;for(let y=0,x=p.count;y<x;y+=3)if(xt(Ns,y,p,_),Ns.needsUpdate=!0,Is.intersectsTriangle(Ns))return!0}}else{const u=n+8,h=a[n+6];return ft(u,r,zo),!!(s.intersectsBox(zo)&&Ql(u,e,t,i,s)||(ft(h,r,zo),s.intersectsBox(zo)&&Ql(h,e,t,i,s)))}}const ko=new Pt,Cc=new Ut,Sr=new Ut,zE=new ee,HE=new ee,kE=new ee,VE=new ee;function GE(n,e,t,i={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Cc.set(e.boundingBox.min,e.boundingBox.max,t),Cc.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,f=hi.getPrimitive(),p=hi.getPrimitive();let _=zE,g=HE,m=null,d=null;s&&(m=kE,d=VE);let v=1/0,y=null,x=null;return ko.copy(t).invert(),Sr.matrix.copy(ko),n.shapecast({boundsTraverseOrder:T=>Cc.distanceToBox(T),intersectsBounds:(T,A,b)=>b<v&&b<o?(A&&(Sr.min.copy(T.min),Sr.max.copy(T.max),Sr.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:R=>Sr.distanceToBox(R),intersectsBounds:(R,E,S)=>S<v&&S<o,intersectsRange:(R,E)=>{for(let S=R,C=R+E;S<C;S++){xt(p,3*S,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let D=T,L=T+A;D<L;D++){xt(f,3*D,l,c),f.needsUpdate=!0;const O=f.distanceToTriangle(p,_,m);if(O<v&&(g.copy(_),d&&d.copy(m),v=O,y=D,x=S),O<r)return!0}}}});{const b=ar(e);for(let R=0,E=b;R<E;R++){xt(p,3*R,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let S=T,C=T+A;S<C;S++){xt(f,3*S,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(p,_,m);if(D<v&&(g.copy(_),d&&d.copy(m),v=D,y=S,x=R),D<r)return!0}}}}}),hi.releasePrimitive(f),hi.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=v,i.faceIndex=y,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(ko),g.applyMatrix4(ko),s.distance=g.sub(s.point).length(),s.faceIndex=x),i)}function WE(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position;let r,o,a,c,l=0;const u=n._roots;for(let f=0,p=u.length;f<p;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,p,_=!1){const g=f*2;if(a[g+15]===La){const d=o[f+6],v=a[g+14];let y=1/0,x=1/0,T=1/0,A=-1/0,b=-1/0,R=-1/0;for(let E=d,S=d+v;E<S;E++){const C=3*n.resolveTriangleIndex(E);for(let D=0;D<3;D++){let L=C+D;L=i?i[L]:L;const O=s.getX(L),G=s.getY(L),H=s.getZ(L);O<y&&(y=O),O>A&&(A=O),G<x&&(x=G),G>b&&(b=G),H<T&&(T=H),H>R&&(R=H)}}return c[f+0]!==y||c[f+1]!==x||c[f+2]!==T||c[f+3]!==A||c[f+4]!==b||c[f+5]!==R?(c[f+0]=y,c[f+1]=x,c[f+2]=T,c[f+3]=A,c[f+4]=b,c[f+5]=R,!0):!1}else{const d=f+8,v=o[f+6],y=d+p,x=v+p;let T=_,A=!1,b=!1;e?T||(A=e.has(y),b=e.has(x),T=!A&&!b):(A=!0,b=!0);const R=T||A,E=T||b;let S=!1;R&&(S=h(d,p,T));let C=!1;E&&(C=h(v,p,T));const D=S||C;if(D)for(let L=0;L<3;L++){const O=d+L,G=v+L,H=c[O],J=c[O+3],X=c[G],ne=c[G+3];c[f+L]=H<X?H:X,c[f+L+3]=J>ne?J:ne}return D}}}function XE(n,e,t,i,s,r,o){ot.setBuffer(n._roots[e]),eu(0,n,t,i,s,r,o),ot.clearBuffer()}function eu(n,e,t,i,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ot,u=n*2;if(kt(u,c)){const f=Kt(n,l),p=ci(u,c);DE(e,t,i,f,p,s,r,o)}else{const f=li(n);Nn(f,a,i,r,o)&&eu(f,e,t,i,s,r,o);const p=ui(n,l);Nn(p,a,i,r,o)&&eu(p,e,t,i,s,r,o)}}const YE=["x","y","z"];function qE(n,e,t,i,s,r){ot.setBuffer(n._roots[e]);const o=tu(0,n,t,i,s,r);return ot.clearBuffer(),o}function tu(n,e,t,i,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ot;let l=n*2;if(kt(l,a)){const h=Kt(n,c),f=ci(l,a);return IE(e,t,i,h,f,s,r)}else{const h=Xd(n,c),f=YE[h],_=i.direction[f]>=0;let g,m;_?(g=li(n),m=ui(n,c)):(g=ui(n,c),m=li(n));const v=Nn(g,o,i,s,r)?tu(g,e,t,i,s,r):null;if(v){const T=v.point[f];if(_?T<=o[m+h]:T>=o[m+h+3])return v}const x=Nn(m,o,i,s,r)?tu(m,e,t,i,s,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const Vo=new Ai,Us=new pi,Fs=new pi,Er=new Pt,df=new Ut,Go=new Ut;function jE(n,e,t,i){ot.setBuffer(n._roots[e]);const s=iu(0,n,t,i);return ot.clearBuffer(),s}function iu(n,e,t,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ot;let c=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),df.set(t.boundingBox.min,t.boundingBox.max,i),s=df),kt(c,o)){const u=e.geometry,h=u.index,f=u.attributes.position,p=t.index,_=t.attributes.position,g=Kt(n,a),m=ci(c,o);if(Er.copy(i).invert(),t.boundsTree)return ft(n,r,Go),Go.matrix.copy(Er),Go.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Go.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let y=g,x=m+g;y<x;y++)if(xt(Fs,3*e.resolveTriangleIndex(y),h,f),Fs.needsUpdate=!0,v.intersectsTriangle(Fs))return!0;return!1}});for(let d=g,v=m+g;d<v;d++){const y=e.resolveTriangleIndex(d);xt(Us,3*y,h,f),Us.a.applyMatrix4(Er),Us.b.applyMatrix4(Er),Us.c.applyMatrix4(Er),Us.needsUpdate=!0;for(let x=0,T=p.count;x<T;x+=3)if(xt(Fs,x,p,_),Fs.needsUpdate=!0,Us.intersectsTriangle(Fs))return!0}}else{const u=n+8,h=a[n+6];return ft(u,r,Vo),!!(s.intersectsBox(Vo)&&iu(u,e,t,i,s)||(ft(h,r,Vo),s.intersectsBox(Vo)&&iu(h,e,t,i,s)))}}const Wo=new Pt,Pc=new Ut,Mr=new Ut,KE=new ee,$E=new ee,ZE=new ee,JE=new ee;function QE(n,e,t,i={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Pc.set(e.boundingBox.min,e.boundingBox.max,t),Pc.needsUpdate=!0;const a=n.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,f=hi.getPrimitive(),p=hi.getPrimitive();let _=KE,g=$E,m=null,d=null;s&&(m=ZE,d=JE);let v=1/0,y=null,x=null;return Wo.copy(t).invert(),Mr.matrix.copy(Wo),n.shapecast({boundsTraverseOrder:T=>Pc.distanceToBox(T),intersectsBounds:(T,A,b)=>b<v&&b<o?(A&&(Mr.min.copy(T.min),Mr.max.copy(T.max),Mr.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(e.boundsTree){const b=e.boundsTree;return b.shapecast({boundsTraverseOrder:R=>Mr.distanceToBox(R),intersectsBounds:(R,E,S)=>S<v&&S<o,intersectsRange:(R,E)=>{for(let S=R,C=R+E;S<C;S++){const D=b.resolveTriangleIndex(S);xt(p,3*D,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let L=T,O=T+A;L<O;L++){const G=n.resolveTriangleIndex(L);xt(f,3*G,l,c),f.needsUpdate=!0;const H=f.distanceToTriangle(p,_,m);if(H<v&&(g.copy(_),d&&d.copy(m),v=H,y=L,x=S),H<r)return!0}}}})}else{const b=ar(e);for(let R=0,E=b;R<E;R++){xt(p,3*R,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let S=T,C=T+A;S<C;S++){const D=n.resolveTriangleIndex(S);xt(f,3*D,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(p,_,m);if(L<v&&(g.copy(_),d&&d.copy(m),v=L,y=S,x=R),L<r)return!0}}}}}),hi.releasePrimitive(f),hi.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=v,i.faceIndex=y,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(Wo),g.applyMatrix4(Wo),s.distance=g.sub(s.point).length(),s.faceIndex=x),i)}function eM(){return typeof SharedArrayBuffer<"u"}const Or=new ot.constructor,Ea=new ot.constructor,xn=new Mu(()=>new Ai),Os=new Ai,Bs=new Ai,Lc=new Ai,Dc=new Ai;let Ic=!1;function tM(n,e,t,i){if(Ic)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ic=!0;const s=n._roots,r=e._roots;let o,a=0,c=0;const l=new Pt().copy(t).invert();for(let u=0,h=s.length;u<h;u++){Or.setBuffer(s[u]),c=0;const f=xn.getPrimitive();ft(0,Or.float32Array,f),f.applyMatrix4(l);for(let p=0,_=r.length;p<_&&(Ea.setBuffer(r[p]),o=yi(0,0,t,l,i,a,c,0,0,f),Ea.clearBuffer(),c+=r[p].length,!o);p++);if(xn.releasePrimitive(f),Or.clearBuffer(),a+=s[u].length,o)break}return Ic=!1,o}function yi(n,e,t,i,s,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Ea,f=Or):(h=Or,f=Ea);const p=h.float32Array,_=h.uint32Array,g=h.uint16Array,m=f.float32Array,d=f.uint32Array,v=f.uint16Array,y=n*2,x=e*2,T=kt(y,g),A=kt(x,v);let b=!1;if(A&&T)u?b=s(Kt(e,d),ci(e*2,v),Kt(n,_),ci(n*2,g),c,o+e,a,r+n):b=s(Kt(n,_),ci(n*2,g),Kt(e,d),ci(e*2,v),a,r+n,c,o+e);else if(A){const R=xn.getPrimitive();ft(e,m,R),R.applyMatrix4(t);const E=li(n),S=ui(n,_);ft(E,p,Os),ft(S,p,Bs);const C=R.intersectsBox(Os),D=R.intersectsBox(Bs);b=C&&yi(e,E,i,t,s,o,r,c,a+1,R,!u)||D&&yi(e,S,i,t,s,o,r,c,a+1,R,!u),xn.releasePrimitive(R)}else{const R=li(e),E=ui(e,d);ft(R,m,Lc),ft(E,m,Dc);const S=l.intersectsBox(Lc),C=l.intersectsBox(Dc);if(S&&C)b=yi(n,R,t,i,s,r,o,a,c+1,l,u)||yi(n,E,t,i,s,r,o,a,c+1,l,u);else if(S)if(T)b=yi(n,R,t,i,s,r,o,a,c+1,l,u);else{const D=xn.getPrimitive();D.copy(Lc).applyMatrix4(t);const L=li(n),O=ui(n,_);ft(L,p,Os),ft(O,p,Bs);const G=D.intersectsBox(Os),H=D.intersectsBox(Bs);b=G&&yi(R,L,i,t,s,o,r,c,a+1,D,!u)||H&&yi(R,O,i,t,s,o,r,c,a+1,D,!u),xn.releasePrimitive(D)}else if(C)if(T)b=yi(n,E,t,i,s,r,o,a,c+1,l,u);else{const D=xn.getPrimitive();D.copy(Dc).applyMatrix4(t);const L=li(n),O=ui(n,_);ft(L,p,Os),ft(O,p,Bs);const G=D.intersectsBox(Os),H=D.intersectsBox(Bs);b=G&&yi(E,L,i,t,s,o,r,c,a+1,D,!u)||H&&yi(E,O,i,t,s,o,r,c,a+1,D,!u),xn.releasePrimitive(D)}}return b}const Xo=new Ut,pf=new Ai,iM={strategy:Vd,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Tu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,s=e._roots,r=e._indirectBuffer,o=i.getIndex();let a;return t.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:o}=e,a=new Tu(t,{...i,[Tc]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const c=t.getIndex();if(c===null){const l=new Gt(e.index,1,!1);t.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...iM,[Tc]:!1},t),t.useSharedArrayBuffer&&!eM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Tc]||(gE(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ai))),this.resolveTriangleIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?WE:LE)(this,e)}traverse(e,t=0){const i=this._roots[t],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===La;if(u){const h=s[a+6],f=r[l+14];e(c,u,new Float32Array(i,a*4,6),h,f)}else{const h=a+Fr/4,f=s[a+6],p=s[a+7];e(c,u,new Float32Array(i,a*4,6),p)||(o(h,c+1),o(f,c+1))}}}raycast(e,t=$c,i=0,s=1/0){const r=this._roots,o=this.geometry,a=[],c=t.isMaterial,l=Array.isArray(t),u=o.groups,h=c?t.side:t,f=this.indirect?XE:UE;for(let p=0,_=r.length;p<_;p++){const g=l?t[u[p].materialIndex].side:h,m=a.length;if(f(this,p,g,e,a,i,s),l){const d=u[p].materialIndex;for(let v=m,y=a.length;v<y;v++)a[v].face.materialIndex=d}}return a}raycastFirst(e,t=$c,i=0,s=1/0){const r=this._roots,o=this.geometry,a=t.isMaterial,c=Array.isArray(t);let l=null;const u=o.groups,h=a?t.side:t,f=this.indirect?qE:OE;for(let p=0,_=r.length;p<_;p++){const g=c?t[u[p].materialIndex].side:h,m=f(this,p,g,e,i,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[p].materialIndex))}return l}intersectsGeometry(e,t){let i=!1;const s=this._roots,r=this.indirect?jE:BE;for(let o=0,a=s.length;o<a&&(i=r(this,o,e,t),!i);o++);return i}shapecast(e){const t=hi.getPrimitive(),i=this.indirect?NE:PE;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(f,p,_,g,m)=>h(f,p,_,g,m)?!0:i(f,p,this,a,_,g,t)}else o||(a?o=(h,f,p,_)=>i(h,f,this,a,p,_,t):o=(h,f,p)=>p);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const p=u[h];if(c=ME(this,h,r,o,s,l),c)break;l+=p.byteLength}return hi.releasePrimitive(t),c}bvhcast(e,t,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const o=hi.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?_=>{const g=this.resolveTriangleIndex(_);xt(o,g*3,a,c)}:_=>{xt(o,_*3,a,c)},u=hi.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,p=e.indirect?_=>{const g=e.resolveTriangleIndex(_);xt(u,g*3,h,f)}:_=>{xt(u,_*3,h,f)};if(r){const _=(g,m,d,v,y,x,T,A)=>{for(let b=d,R=d+v;b<R;b++){p(b),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let E=g,S=g+m;E<S;E++)if(l(E),o.needsUpdate=!0,r(o,u,E,b,y,x,T,A))return!0}return!1};if(s){const g=s;s=function(m,d,v,y,x,T,A,b){return g(m,d,v,y,x,T,A,b)?!0:_(m,d,v,y,x,T,A,b)}}else s=_}return tM(this,e,t,s)}intersectsBox(e,t){return Xo.set(e.min,e.max,t),Xo.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Xo.intersectsBox(i),intersectsTriangle:i=>Xo.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},s={},r=0,o=1/0){return(this.indirect?QE:GE)(this,e,t,i,s,r,o)}closestPointToPoint(e,t={},i=0,s=1/0){return TE(this,e,t,i,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{ft(0,new Float32Array(i),pf),e.union(pf)}),e}}const jd=1e-6,nM=jd*.5,Kd=Math.pow(10,-Math.log10(jd)),sM=nM*Kd;function Ui(n){return~~(n*Kd+sM)}function rM(n){return`${Ui(n.x)},${Ui(n.y)}`}function mf(n){return`${Ui(n.x)},${Ui(n.y)},${Ui(n.z)}`}function oM(n){return`${Ui(n.x)},${Ui(n.y)},${Ui(n.z)},${Ui(n.w)}`}function aM(n,e,t){t.direction.subVectors(e,n).normalize();const i=n.dot(t.direction);return t.origin.copy(n).addScaledVector(t.direction,-i),t}function $d(){return typeof SharedArrayBuffer<"u"}function cM(n){if(n.buffer instanceof SharedArrayBuffer)return n;const e=n.constructor,t=n.buffer,i=new SharedArrayBuffer(t.byteLength),s=new Uint8Array(t);return new Uint8Array(i).set(s,0),new e(i)}function lM(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function uM(n,e){if(!n.index){const t=n.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=lM(t,i);n.setIndex(new Gt(s,1));for(let r=0;r<t;r++)s[r]=r}}function hM(n){return n.index?n.index.count:n.attributes.position.count}function bu(n){return hM(n)/3}const fM=1e-8,dM=new ee;function pM(n){return~~(n/3)}function mM(n){return n%3}function _f(n,e){return n.start-e.start}function gf(n,e){return dM.subVectors(e,n.origin).dot(n.direction)}function _M(n,e,t,i=fM){n.sort(_f),e.sort(_f);for(let a=0;a<n.length;a++){const c=n[a];for(let l=0;l<e.length;l++){const u=e[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||n.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||e.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const h=c.end;c.end=u.start,u.start=h}else if(c.start>=u.start&&c.end>=u.end){const h=u.end;u.end=c.start,c.start=h}else throw new Error}if(t.has(c.index)||t.set(c.index,[]),t.has(u.index)||t.set(u.index,[]),t.get(c.index).push(u.index),t.get(u.index).push(c.index),o(u)&&(e.splice(l,1),l--),o(c)){n.splice(a,1),a--;break}}}s(n),s(e);function s(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const xf=1e-5,vf=1e-4;class gM{constructor(){this._rays=[]}addRay(e){this._rays.push(e)}findClosestRay(e){const t=this._rays,i=e.clone();i.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=t.length;c<l;c++){const u=t[c];if(o(u,e)&&o(u,i))continue;const h=a(u,e),f=a(u,i),p=Math.min(h,f);p<s&&(s=p,r=u)}return r;function o(c,l){const u=c.origin.distanceTo(l.origin)>xf;return c.direction.angleTo(l.direction)>vf||u}function a(c,l){const u=c.origin.distanceTo(l.origin),h=c.direction.angleTo(l.direction);return u/xf+h/vf}}}const Nc=new ee,Uc=new ee,Yo=new su;function xM(n,e,t){const i=n.attributes,s=n.index,r=i.position,o=new Map,a=new Map,c=Array.from(e),l=new gM;for(let u=0,h=c.length;u<h;u++){const f=c[u],p=pM(f),_=mM(f);let g=3*p+_,m=3*p+(_+1)%3;s&&(g=s.getX(g),m=s.getX(m)),Nc.fromBufferAttribute(r,g),Uc.fromBufferAttribute(r,m),aM(Nc,Uc,Yo);let d,v=l.findClosestRay(Yo);v===null&&(v=Yo.clone(),l.addRay(v)),a.has(v)||a.set(v,{forward:[],reverse:[],ray:v}),d=a.get(v);let y=gf(v,Nc),x=gf(v,Uc);y>x&&([y,x]=[x,y]),Yo.direction.dot(v.direction)<0?d.reverse.push({start:y,end:x,index:f}):d.forward.push({start:y,end:x,index:f})}return a.forEach(({forward:u,reverse:h},f)=>{_M(u,h,o,t),u.length===0&&h.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}const vM=new rt,Fc=new ee,yM=new ps,Oc=["","",""];class SM{constructor(e=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,e&&this.updateFrom(e)}getSiblingTriangleIndex(e,t){const i=this.data[e*3+t];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(e,t){const i=this.data[e*3+t];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(e,t){const i=e*3+t,s=this.disjointConnections.get(i);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(e,t){const i=e*3+t,s=this.disjointConnections.get(i);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(e){const{useAllAttributes:t,useDrawRange:i,matchDisjointEdges:s,degenerateEpsilon:r}=this,o=t?y:v,a=new Map,{attributes:c}=e,l=t?Object.keys(c):null,u=e.index,h=c.position;let f=bu(e);const p=f;let _=0;i&&(_=e.drawRange.start,e.drawRange.count!==1/0&&(f=~~(e.drawRange.count/3)));let g=this.data;(!g||g.length<3*p)&&(g=new Int32Array(3*p)),g.fill(-1);let m=0,d=new Set;for(let x=_,T=f*3+_;x<T;x+=3){const A=x;for(let b=0;b<3;b++){let R=A+b;u&&(R=u.getX(R)),Oc[b]=o(R)}for(let b=0;b<3;b++){const R=(b+1)%3,E=Oc[b],S=Oc[R],C=`${S}_${E}`;if(a.has(C)){const D=A+b,L=a.get(C);g[D]=L,g[L]=D,a.delete(C),m+=2,d.delete(L)}else{const D=`${E}_${S}`,L=A+b;a.set(D,L),d.add(L)}}}if(s){const{fragmentMap:x,disjointConnectivityMap:T}=xM(e,d,r);d.clear(),x.forEach(({forward:A,reverse:b})=>{A.forEach(({index:R})=>d.add(R)),b.forEach(({index:R})=>d.add(R))}),this.unmatchedDisjointEdges=x,this.disjointConnections=T,m=f*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=g;function v(x){return Fc.fromBufferAttribute(h,x),mf(Fc)}function y(x){let T="";for(let A=0,b=l.length;A<b;A++){const R=c[l[A]];let E;switch(R.itemSize){case 1:E=Ui(R.getX(x));break;case 2:E=rM(vM.fromBufferAttribute(R,x));break;case 3:E=mf(Fc.fromBufferAttribute(R,x));break;case 4:E=oM(yM.fromBufferAttribute(R,x));break}T!==""&&(T+="|"),T+=E}return T}}}class yf extends sr{constructor(...e){super(...e),this.isBrush=!0,this._previousMatrix=new Pt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:e,_previousMatrix:t}=this,i=e.elements,s=t.elements;for(let r=0;r<16;r++)if(i[r]!==s[r])return!0;return!1}prepareGeometry(){const e=this.geometry,t=e.attributes,i=$d();if(i)for(const s in t){const r=t[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=cM(r.array)}if(e.boundsTree||(uM(e,{useSharedArrayBuffer:i}),e.boundsTree=new Tu(e,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),e.halfEdges||(e.halfEdges=new SM(e)),!e.groupIndices){const s=bu(e),r=new Uint16Array(s),o=e.groups;for(let a=0,c=o.length;a<c;a++){const{start:l,count:u}=o[a];for(let h=l/3,f=(l+u)/3;h<f;h++)r[h]=a}e.groupIndices=r}}disposeCacheData(){const{geometry:e}=this;e.halfEdges=null,e.boundsTree=null,e.groupIndices=null}}const EM=1e-14,Bc=new ee,Sf=new ee,Ef=new ee;function yn(n,e=EM){Bc.subVectors(n.b,n.a),Sf.subVectors(n.c,n.a),Ef.subVectors(n.b,n.c);const t=Bc.angleTo(Sf),i=Bc.angleTo(Ef),s=Math.PI-t-i;return Math.abs(t)<e||Math.abs(i)<e||Math.abs(s)<e||n.a.distanceToSquared(n.b)<e||n.a.distanceToSquared(n.c)<e||n.b.distanceToSquared(n.c)<e}const zc=1e-10,Tr=1e-10,MM=1e-10,Wi=new di,pt=new di,Xi=new ee,Hc=new ee,Mf=new ee,qo=new ba,kc=new pi;class TM{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new Ht),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class bM{constructor(){this.trianglePool=new TM,this.triangles=[],this.normal=new ee,this.coplanarTriangleUsed=!1}initialize(e){this.reset();const{triangles:t,trianglePool:i,normal:s}=this;if(Array.isArray(e))for(let r=0,o=e.length;r<o;r++){const a=e[r];if(r===0)a.getNormal(s);else if(Math.abs(1-a.getNormal(Xi).dot(s))>zc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=i.getTriangle();c.copy(a),t.push(c)}else{e.getNormal(s);const r=i.getTriangle();r.copy(e),t.push(r)}}splitByTriangle(e){const{normal:t,triangles:i}=this;if(e.getNormal(Hc).normalize(),Math.abs(1-Math.abs(Hc.dot(t)))<MM){this.coplanarTriangleUsed=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.coplanarCount=0}const s=[e.a,e.b,e.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=s[r],c=s[o];Xi.subVectors(c,a).normalize(),Mf.crossVectors(Hc,Xi),qo.setFromNormalAndCoplanarPoint(Mf,a),this.splitByPlane(qo,e)}}else e.getPlane(qo),this.splitByPlane(qo,e)}splitByPlane(e,t){const{triangles:i,trianglePool:s}=this;kc.copy(t),kc.needsUpdate=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];if(!kc.intersectsTriangle(a,Wi,!0))continue;const{a:c,b:l,c:u}=a;let h=0,f=-1,p=!1,_=[],g=[];const m=[c,l,u];for(let d=0;d<3;d++){const v=(d+1)%3;Wi.start.copy(m[d]),Wi.end.copy(m[v]);const y=e.distanceToPoint(Wi.start),x=e.distanceToPoint(Wi.end);if(Math.abs(y)<Tr&&Math.abs(x)<Tr){p=!0;break}if(y>0?_.push(d):g.push(d),Math.abs(y)<Tr)continue;let T=!!e.intersectLine(Wi,Xi);!T&&Math.abs(x)<Tr&&(Xi.copy(Wi.end),T=!0),T&&!(Xi.distanceTo(Wi.start)<zc)&&(Xi.distanceTo(Wi.end)<zc&&(f=d),h===0?pt.start.copy(Xi):pt.end.copy(Xi),h++)}if(!p&&h===2&&pt.distance()>Tr)if(f!==-1){f=(f+1)%3;let d=0;d===f&&(d=(d+1)%3);let v=d+1;v===f&&(v=(v+1)%3);const y=s.getTriangle();y.a.copy(m[v]),y.b.copy(pt.end),y.c.copy(pt.start),yn(y)||i.push(y),a.a.copy(m[d]),a.b.copy(pt.start),a.c.copy(pt.end),yn(a)&&(i.splice(r,1),r--,o--)}else{const d=_.length>=2?g[0]:_[0];if(d===0){let A=pt.start;pt.start=pt.end,pt.end=A}const v=(d+1)%3,y=(d+2)%3,x=s.getTriangle(),T=s.getTriangle();m[v].distanceToSquared(pt.start)<m[y].distanceToSquared(pt.end)?(x.a.copy(m[v]),x.b.copy(pt.start),x.c.copy(pt.end),T.a.copy(m[v]),T.b.copy(m[y]),T.c.copy(pt.start)):(x.a.copy(m[y]),x.b.copy(pt.start),x.c.copy(pt.end),T.a.copy(m[v]),T.b.copy(m[y]),T.c.copy(pt.end)),a.a.copy(m[d]),a.b.copy(pt.end),a.c.copy(pt.start),yn(x)||i.push(x),yn(T)||i.push(T),yn(a)&&(i.splice(r,1),r--,o--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function AM(n){return n=~~n,n+4-n%4}class Tf{constructor(e,t=500){this.expansionFactor=1.5,this.type=e,this.length=0,this.array=null,this.setSize(t)}setType(e){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const t=this.array.buffer;this.array=new e(t),this.type=e}setSize(e){if(this.array&&e===this.array.length)return;const t=this.type,i=$d()?SharedArrayBuffer:ArrayBuffer,s=new t(new i(AM(e*t.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:e,expansionFactor:t}=this;this.setSize(e.length*t)}push(...e){let{array:t,length:i}=this;i+e.length>t.length&&(this.expand(),t=this.array);for(let s=0,r=e.length;s<r;s++)t[i+s]=e[s];this.length+=e.length}clear(){this.length=0}}class wM{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(e){return this.groupAttributes[0][e].type}getItemSize(e){return this.groupAttributes[0][e].itemSize}getNormalized(e){return this.groupAttributes[0][e].normalized}getCount(e){if(this.groupCount<=e)return 0;const t=this.getGroupAttrArray("position",e);return t.length/t.itemSize}getTotalLength(e){const{groupCount:t,groupAttributes:i}=this;let s=0;for(let r=0;r<t;r++){const o=i[r];s+=o[e].length}return s}getGroupAttrSet(e=0){const{groupAttributes:t}=this;if(t[e])return this.groupCount=Math.max(this.groupCount,e+1),t[e];const i=t[0];for(this.groupCount=Math.max(this.groupCount,e+1);e>=t.length;){const s={};t.push(s);for(const r in i){const o=i[r],a=new Tf(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,s[r]=a}}return t[e]}getGroupAttrArray(e,t=0){const{groupAttributes:i}=this;if(!i[0][e])throw new Error(`TypedAttributeData: Attribute with "${e}" has not been initialized`);return this.getGroupAttrSet(t)[e]}initializeArray(e,t,i,s){const{groupAttributes:r}=this,a=r[0][e];if(a){if(a.type!==t)for(let c=0,l=r.length;c<l;c++){const u=r[c][e];u.setType(t),u.itemSize=i,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new Tf(t);u.itemSize=i,u.normalized=s,r[c][e]=u}}clear(){this.groupCount=0;const{groupAttributes:e}=this;e.forEach(t=>{for(const i in t)t[i].clear()})}delete(e){this.groupAttributes.forEach(t=>{delete t[e]})}reset(){this.groupAttributes=[],this.groupCount=0}}class bf{constructor(){this.intersectionSet={},this.ids=[]}add(e,t){const{intersectionSet:i,ids:s}=this;i[e]||(i[e]=[],s.push(e)),i[e].push(t)}}const RM=0,CM=1,PM=2,LM=3,DM=4,Zd=5,Jd=6,ri=new su,Af=new Pt,Dt=new Ht,Yi=new ee,wf=new ps,Rf=new ps,Cf=new ps,Vc=new ps,jo=new ps,Ko=new ps,Pf=new di,Gc=new ee,Wc=1e-8,IM=1e-15,ss=-1,rs=1,fa=-2,da=2,Br=0,Kn=1,Au=2,NM=1e-14;let pa=null;function Lf(n){pa=n}function Qd(n,e){n.getMidpoint(ri.origin),n.getNormal(ri.direction);const t=e.raycastFirst(ri,nr);return!!(t&&ri.direction.dot(t.face.normal)>0)?ss:rs}function UM(n,e){function t(){return Math.random()-.5}n.getNormal(Gc),ri.direction.copy(Gc),n.getMidpoint(ri.origin);const i=3;let s=0,r=1/0;for(let o=0;o<i;o++){ri.direction.x+=t()*Wc,ri.direction.y+=t()*Wc,ri.direction.z+=t()*Wc,ri.direction.multiplyScalar(-1);const a=e.raycastFirst(ri,nr);if(!!(a&&ri.direction.dot(a.face.normal)>0)&&s++,a!==null&&(r=Math.min(r,a.distance)),r<=IM)return a.face.normal.dot(Gc)>0?da:fa;if(s/i>.5||(o-s+1)/i>.5)break}return s/i>.5?ss:rs}function FM(n,e){const t=new bf,i=new bf;return Af.copy(n.matrixWorld).invert().multiply(e.matrixWorld),n.geometry.boundsTree.bvhcast(e.geometry.boundsTree,Af,{intersectsTriangles(s,r,o,a){if(!yn(s)&&!yn(r)){let c=s.intersectsTriangle(r,Pf,!0);if(!c){const l=s.plane,u=r.plane,h=l.normal,f=u.normal;h.dot(f)===1&&Math.abs(l.constant-u.constant)<NM&&(c=!0)}if(c){let l=n.geometry.boundsTree.resolveTriangleIndex(o),u=e.geometry.boundsTree.resolveTriangleIndex(a);t.add(l,u),i.add(u,l),pa&&(pa.addEdge(Pf),pa.addIntersectingTriangles(o,s,a,r))}}return!1}}),{aIntersections:t,bIntersections:i}}function OM(n,e,t,i,s,r,o=!1){const a=t.attributes,c=t.index,l=n*3,u=c.getX(l+0),h=c.getX(l+1),f=c.getX(l+2);for(const p in r){const _=a[p],g=r[p];if(!(p in a))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=_.itemSize;p==="position"?(Dt.a.fromBufferAttribute(_,u).applyMatrix4(i),Dt.b.fromBufferAttribute(_,h).applyMatrix4(i),Dt.c.fromBufferAttribute(_,f).applyMatrix4(i),Xc(Dt.a,Dt.b,Dt.c,e,3,g,o)):p==="normal"?(Dt.a.fromBufferAttribute(_,u).applyNormalMatrix(s),Dt.b.fromBufferAttribute(_,h).applyNormalMatrix(s),Dt.c.fromBufferAttribute(_,f).applyNormalMatrix(s),o&&(Dt.a.multiplyScalar(-1),Dt.b.multiplyScalar(-1),Dt.c.multiplyScalar(-1)),Xc(Dt.a,Dt.b,Dt.c,e,3,g,o,!0)):(wf.fromBufferAttribute(_,u),Rf.fromBufferAttribute(_,h),Cf.fromBufferAttribute(_,f),Xc(wf,Rf,Cf,e,m,g,o))}}function BM(n,e,t,i,s,r,o,a=!1){Yc(n,i,s,r,o,a),Yc(a?t:e,i,s,r,o,a),Yc(a?e:t,i,s,r,o,a)}function ep(n,e,t=!1){switch(n){case RM:if(e===rs||e===da&&!t)return Kn;break;case CM:if(t){if(e===ss)return Br}else if(e===rs||e===fa)return Kn;break;case PM:if(t){if(e===rs||e===fa)return Kn}else if(e===ss)return Br;break;case DM:if(e===ss)return Br;if(e===rs)return Kn;break;case LM:if(e===ss||e===da&&!t)return Kn;break;case Zd:if(!t&&(e===rs||e===fa))return Kn;break;case Jd:if(!t&&(e===ss||e===da))return Kn;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return Au}function Xc(n,e,t,i,s,r,o=!1,a=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};Vc.set(0,0,0,0).addScaledVector(n,i.a.x).addScaledVector(e,i.a.y).addScaledVector(t,i.a.z),jo.set(0,0,0,0).addScaledVector(n,i.b.x).addScaledVector(e,i.b.y).addScaledVector(t,i.b.z),Ko.set(0,0,0,0).addScaledVector(n,i.c.x).addScaledVector(e,i.c.y).addScaledVector(t,i.c.z),a&&(Vc.normalize(),jo.normalize(),Ko.normalize()),c(Vc),o?(c(Ko),c(jo)):(c(jo),c(Ko))}function Yc(n,e,t,i,s,r=!1){for(const o in s){const a=e[o],c=s[o];if(!(o in e))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const l=a.itemSize;o==="position"?(Yi.fromBufferAttribute(a,n).applyMatrix4(t),c.push(Yi.x,Yi.y,Yi.z)):o==="normal"?(Yi.fromBufferAttribute(a,n).applyNormalMatrix(i),r&&Yi.multiplyScalar(-1),c.push(Yi.x,Yi.y,Yi.z)):(c.push(a.getX(n)),l>1&&c.push(a.getY(n)),l>2&&c.push(a.getZ(n)),l>3&&c.push(a.getW(n)))}}class zM{constructor(e){this.triangle=new Ht().copy(e),this.intersects={}}addTriangle(e,t){this.intersects[e]=new Ht().copy(t)}getIntersectArray(){const e=[],{intersects:t}=this;for(const i in t)e.push(t[i]);return e}}class Df{constructor(){this.data={}}addTriangleIntersection(e,t,i,s){const{data:r}=this;r[e]||(r[e]=new zM(t)),r[e].addTriangle(i,s)}getTrianglesAsArray(e=null){const{data:t}=this,i=[];if(e!==null)e in t&&i.push(t[e].triangle);else for(const s in t)i.push(t[s].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(e=>parseInt(e))}getIntersectionIndices(e){const{data:t}=this;return t[e]?Object.keys(t[e].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(e=null,t=null){const{data:i}=this,s=new Set,r=[],o=a=>{if(i[a])if(t!==null)i[a].intersects[t]&&r.push(i[a].intersects[t]);else{const c=i[a].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(e!==null)o(e);else for(const a in i)o(a);return r}reset(){this.data={}}}class HM{constructor(){this.enabled=!1,this.triangleIntersectsA=new Df,this.triangleIntersectsB=new Df,this.intersectionEdges=[]}addIntersectingTriangles(e,t,i,s){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(e,t,i,s),o.addTriangleIntersection(i,s,e,t)}addEdge(e){this.intersectionEdges.push(e.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Lf(this))}complete(){this.enabled&&Lf(null)}}const bn=new Pt,Ma=new Xf,$n=new Ht,$o=new Ht,pn=new Ht,Zo=new Ht,Mi=[],us=[];function kM(n){for(const e of n)return e}function VM(n,e,t,i,s,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=FM(n,e),l=[];let u=null,h;return h=o?0:-1,If(n,e,a,t,!1,i,s,h),Nf(n,e,a,t,!1,s,h),t.findIndex(p=>p!==Jd&&p!==Zd)!==-1&&(h=o?n.geometry.groups.length||1:-1,If(e,n,c,t,!0,i,s,h),Nf(e,n,c,t,!0,s,h)),Mi.length=0,us.length=0,{groups:l,materials:u}}function If(n,e,t,i,s,r,o,a=0){const c=n.matrixWorld.determinant()<0;bn.copy(e.matrixWorld).invert().multiply(n.matrixWorld),Ma.getNormalMatrix(n.matrixWorld).multiplyScalar(c?-1:1);const l=n.geometry.groupIndices,u=n.geometry.index,h=n.geometry.attributes.position,f=e.geometry.boundsTree,p=e.geometry.index,_=e.geometry.attributes.position,g=t.ids,m=t.intersectionSet;for(let d=0,v=g.length;d<v;d++){const y=g[d],x=a===-1?0:l[y]+a,T=3*y,A=u.getX(T+0),b=u.getX(T+1),R=u.getX(T+2);$n.a.fromBufferAttribute(h,A).applyMatrix4(bn),$n.b.fromBufferAttribute(h,b).applyMatrix4(bn),$n.c.fromBufferAttribute(h,R).applyMatrix4(bn),r.reset(),r.initialize($n);const E=m[y];for(let C=0,D=E.length;C<D;C++){const L=3*E[C],O=p.getX(L+0),G=p.getX(L+1),H=p.getX(L+2);$o.a.fromBufferAttribute(_,O),$o.b.fromBufferAttribute(_,G),$o.c.fromBufferAttribute(_,H),r.splitByTriangle($o)}const S=r.triangles;for(let C=0,D=S.length;C<D;C++){const L=S[C],O=r.coplanarTriangleUsed?UM(L,f):Qd(L,f);Mi.length=0,us.length=0;for(let G=0,H=i.length;G<H;G++){const J=ep(i[G],O,s);J!==Au&&(us.push(J),Mi.push(o[G].getGroupAttrSet(x)))}if(Mi.length!==0){$n.getBarycoord(L.a,Zo.a),$n.getBarycoord(L.b,Zo.b),$n.getBarycoord(L.c,Zo.c);for(let G=0,H=Mi.length;G<H;G++){const J=Mi[G],ne=us[G]===Br;OM(y,Zo,n.geometry,n.matrixWorld,Ma,J,c!==ne)}}}}return g.length}function Nf(n,e,t,i,s,r,o=0){const a=n.matrixWorld.determinant()<0;bn.copy(e.matrixWorld).invert().multiply(n.matrixWorld),Ma.getNormalMatrix(n.matrixWorld).multiplyScalar(a?-1:1);const c=e.geometry.boundsTree,l=n.geometry.groupIndices,u=n.geometry.index,h=n.geometry.attributes,f=h.position,p=[],_=n.geometry.halfEdges,g=new Set,m=bu(n.geometry);for(let d=0,v=m;d<v;d++)d in t.intersectionSet||g.add(d);for(;g.size>0;){const d=kM(g);g.delete(d),p.push(d);const v=3*d,y=u.getX(v+0),x=u.getX(v+1),T=u.getX(v+2);pn.a.fromBufferAttribute(f,y).applyMatrix4(bn),pn.b.fromBufferAttribute(f,x).applyMatrix4(bn),pn.c.fromBufferAttribute(f,T).applyMatrix4(bn);const A=Qd(pn,c);us.length=0,Mi.length=0;for(let b=0,R=i.length;b<R;b++){const E=ep(i[b],A,s);E!==Au&&(us.push(E),Mi.push(r[b]))}for(;p.length>0;){const b=p.pop();for(let R=0;R<3;R++){const E=_.getSiblingTriangleIndex(b,R);E!==-1&&g.has(E)&&(p.push(E),g.delete(E))}if(Mi.length!==0){const R=3*b,E=u.getX(R+0),S=u.getX(R+1),C=u.getX(R+2),D=o===-1?0:l[b]+o;if(pn.a.fromBufferAttribute(f,E),pn.b.fromBufferAttribute(f,S),pn.c.fromBufferAttribute(f,C),!yn(pn))for(let L=0,O=Mi.length;L<O;L++){const G=us[L],H=Mi[L].getGroupAttrSet(D),J=G===Br;BM(E,S,C,h,n.matrixWorld,Ma,H,J!==a)}}}}}function GM(n){for(let e=0;e<n.length-1;e++){const t=n[e],i=n[e+1];if(t.materialIndex===i.materialIndex){const s=t.start,r=i.start+i.count;i.start=s,i.count=r-s,n.splice(e,1),e--}}}function WM(n,e,t,i){t.clear();const s=n.attributes;for(let r=0,o=i.length;r<o;r++){const a=i[r],c=s[a];t.initializeArray(a,c.array.constructor,c.itemSize,c.normalized)}for(const r in t.attributes)i.includes(r)||t.delete(r);for(const r in e.attributes)i.includes(r)||(e.deleteAttribute(r),e.dispose())}function XM(n,e,t){let i=!1,s=-1;const r=n.attributes,o=e.groupAttributes[0];for(const c in o){const l=e.getTotalLength(c),u=e.getType(c),h=e.getItemSize(c),f=e.getNormalized(c);let p=r[c];(!p||p.array.length<l)&&(p=new Gt(new u(l),h,f),n.setAttribute(c,p),i=!0);let _=0;for(let g=0,m=Math.min(t.length,e.groupCount);g<m;g++){const d=t[g].index,{array:v,type:y,length:x}=e.groupAttributes[d][c],T=new y(v.buffer,0,x);p.array.set(T,_),_+=T.length}p.needsUpdate=!0,s=l/p.itemSize}if(n.index){const c=n.index.array;if(c.length<s)n.index=null,i=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let a=0;n.clearGroups();for(let c=0,l=Math.min(t.length,e.groupCount);c<l;c++){const{index:u,materialIndex:h}=t[c],f=e.getCount(u);f!==0&&(n.addGroup(a,f,h),a+=f)}n.setDrawRange(0,s),n.boundsTree=null,i&&n.dispose()}function Uf(n,e){let t=e;return Array.isArray(e)||(t=[],n.forEach(i=>{t[i.materialIndex]=e})),t}class YM{constructor(){this.triangleSplitter=new bM,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new HM}getGroupRanges(e){return!this.useGroups||e.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:e.groups.map(t=>({...t}))}evaluate(e,t,i,s=new yf){let r=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s],r=!1),s.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");e.prepareGeometry(),t.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:c,useGroups:l,consolidateGroups:u,debug:h}=this;for(;a.length<s.length;)a.push(new wM);s.forEach((d,v)=>{WM(e.geometry,d.geometry,a[v],c)}),h.init(),VM(e,t,i,o,a,{useGroups:l}),h.complete();const f=this.getGroupRanges(e.geometry),p=Uf(f,e.material),_=this.getGroupRanges(t.geometry),g=Uf(_,t.material);_.forEach(d=>d.materialIndex+=p.length);let m=[...f,..._].map((d,v)=>({...d,index:v}));if(l){const d=[...p,...g];u&&(m=m.map(y=>{const x=d[y.materialIndex];return y.materialIndex=d.indexOf(x),y}).sort((y,x)=>y.materialIndex-x.materialIndex));const v=[];for(let y=0,x=d.length;y<x;y++){let T=!1;for(let A=0,b=m.length;A<b;A++){const R=m[A];R.materialIndex===y&&(T=!0,R.materialIndex=v.length)}T&&v.push(d[y])}s.forEach(y=>{y.material=v})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(d=>{d.material=p[0]});return s.forEach((d,v)=>{const y=d.geometry;XM(y,a[v],m),u&&GM(y.groups)}),r?s:s[0]}evaluateHierarchy(e,t=new yf){e.updateMatrixWorld(!0);const i=(r,o)=>{const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];u.isOperationGroup?i(u,o):o(u)}},s=r=>{const o=r.children;let a=!1;for(let l=0,u=o.length;l<u;l++){const h=o[l];a=s(h)||a}const c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return i(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return s(e),t.geometry=e._cachedGeometry,t.material=e._cachedMaterials,t}reset(){this.triangleSplitter.reset()}}const fi=32,Tt=32,mn=Vt.clamp(8,1,fi/2),ni=Tt+1,Vs=fi*Tt,It=Vs+1,_n=1,Li=fi*Tt*.5*_n,zs=new rt(.003,500),Jo=new rt(.008,.2),Qo=new rt(.02,.1),br=new ee(.008,.02,.1),ea=new rt(.03,100);new YM;const Zn=[0,0,.12,0,.25,.5,.35,.5,.45,.75,.5,.75,.7,1,1,1],ts=new Ud,zt=new Float64Array(12);for(let n=0;n<zt.length;n++)zt[n]=ts.Next();function qM(n,e,t){return t=t*t*t*(t*(t*6-15)+10),(1-t)*n+t*e}function jM(n,e){let t=Zn[0]*zs.y-zs.y;n+=zt[0],e+=zt[1];let i=ts.Perlin(n*zs.x,e*zs.x)*.5+.5;n+=zt[2],e+=zt[3],i+=(ts.Perlin(n*Jo.x,e*Jo.x)*.5+.5)*Jo.y,n+=zt[4],e+=zt[5],i+=(ts.Perlin(n*Qo.x,e*Qo.x)*.5+.5)*Qo.y,i/=1+Jo.y+Qo.y;for(let r=2;r<Zn.length;r+=2)if(i<=Zn[r]){t=qM(Zn[r-1],Zn[r+1],Vt.mapLinear(i,Zn[r-2],Zn[r],0,1))*zs.y-zs.y;break}n+=zt[6],e+=zt[7];let s=ts.Perlin(n*br.x,e*br.x)*.5;return n+=zt[6],e+=zt[7],s=Math.max(s-(ts.Perlin(n*br.y,e*br.y)*.5+.5)*br.z,0),n+=zt[10],e+=zt[11],t+=(ts.Perlin(n*ea.x,e*ea.x)*.5+.5)*s*ea.y-ea.y*.3,t}function KM(n,e){const t=jM(n,e),i=100,s=Math.max(Math.sqrt((n-Li)**2+(e-Li)**2)-3,0);if(s>=i)return t;const r=Math.pow(1-s/i,1/4);return r*1+(1-r)*t}const Ta=new Array(fi*fi);function $M(){let n=new Float32Array(It*It),e=new Float32Array(n.length*3),t=new Array(Vs*Vs*6);for(let o=0;o<It;o++)for(let a=0;a<It;a++){let c=(o*It+a)*3;e[c]=a,e[c+1]=KM(a,o),e[c+2]=o,n[o*It+a]=e[c+1]}for(let o=0;o<Vs;o++)for(let a=0;a<Vs;a++){let c=o*It+a,l=(o*Vs+a)*6;a%2==0&&o%2==0||a%2==1&&o%2==1?(t[l]=c+It+1,t[l+1]=c+1,t[l+2]=c,t[l+3]=c,t[l+4]=c+It,t[l+5]=c+It+1):(t[l]=c+It,t[l+1]=c+1,t[l+2]=c,t[l+3]=c+It,t[l+4]=c+It+1,t[l+5]=c+1)}let i=new Zs;i.setAttribute("position",new Gt(e,3)),i.setIndex(t),i.computeVertexNormals();let s=i.getAttribute("normal").array,r=new Array(Tt*Tt*6);for(let o=0;o<Tt;o++)for(let a=0;a<Tt;a++){let c=o*ni+a,l=(o*Tt+a)*6;a%2==0&&o%2==0||a%2==1&&o%2==1?(r[l]=c+ni+1,r[l+1]=c+1,r[l+2]=c,r[l+3]=c,r[l+4]=c+ni,r[l+5]=c+ni+1):(r[l]=c+ni,r[l+1]=c+1,r[l+2]=c,r[l+3]=c+ni,r[l+4]=c+ni+1,r[l+5]=c+1)}for(let o=0;o<fi;o++)for(let a=0;a<fi;a++){let c=new Float32Array(ni*ni*3),l=new Float32Array(c.length);for(let m=0;m<ni;m++)for(let d=0;d<ni;d++){let v=(m*ni+d)*3,y=d+a*Tt,x=m+o*Tt;c[v]=(y-Li)*_n,c[v+1]=n[x*It+y]*_n,c[v+2]=(x-Li)*_n;let T=((o*Tt+m)*It+a*Tt+d)*3;l[v]=s[T],l[v+1]=s[T+1],l[v+2]=s[T+2]}const u=(a*Tt-Li)*_n,h=((a+1)*Tt-Li)*_n,f=(o*Tt-Li)*_n,p=((o+1)*Tt-Li)*_n;new Vp(h-u,100,p-f).translate((u+h)/2,50,(f+p)/2);let _=new Zs;_.setAttribute("position",new Gt(c,3)),_.setIndex(r),_.setAttribute("normal",new Gt(l,3));let g=new sr;g.geometry=_,g.material=Cr,g.visible=!1,Ta[o*fi+a]=g}}let ta=new Array;function ZM(n){let e=Vt.clamp(Math.round((n.position.z+Li)/Tt),mn,fi-mn)*fi+Vt.clamp(Math.round((n.position.x+Li)/Tt),mn,fi-mn);for(let t=0;t<ta.length;t++)Ta[ta[t]].visible=!1;ta=new Array;for(let t=-mn;t<mn;t++)for(let i=-mn;i<mn;i++){let s=e+t*fi+i;ta.push(s),Ta[s].visible=!0}}class nT{constructor(e=!0){st(this,"parent");st(this,"scene");st(this,"resize_observer");st(this,"renderer");st(this,"clock");st(this,"camera");st(this,"controls");st(this,"renderJob",0);st(this,"sunLight");st(this,"moonLight");st(this,"hemiLight");st(this,"stats");st(this,"gui");st(this,"guiStatsEl");st(this,"cameraRight",new ee);st(this,"cameraUp",new ee);st(this,"cameraForward",new ee);st(this,"time",0);st(this,"timeUniform",new ct(this.time));st(this,"OCEAN",!0);st(this,"TIME_PASSES",!1);st(this,"_lightHelper");this.OCEAN=e,this.scene=new Gm,this.resize_observer=new ResizeObserver(this.onResize.bind(this)),this.renderer=new ty({antialias:!0}),this.clock=new Gp(!0),this.stats=new Dr,this.gui=new dS({autoPlace:!1}),Gy(this.scene),this.intiCamera(),this.initRenderer(),this.initScene(),this.initDomHelpers(),this.initSun(),this.hemiLight=new Wp(16777215,.4),this.scene.add(this.hemiLight)}intiCamera(){this.camera=new ai(60,1,.1,100),this.camera.near=.3,this.camera.far=4e3,this.camera.position.set(0,1.5,-2);const e=this.controls=new RS(this.camera,this.renderer.domElement);e.enableDamping=!0,e.dampingFactor=.05,e.screenSpacePanning=!1,e.minDistance=1,e.maxDistance=20,e.target.set(0,1,0)}initRenderer(){this.renderer.autoClearColor=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xp,this.scene.fog=new Yp(8900331,.02)}initScene(){if(this.scene.add(this.camera),OS(),this.scene.add(Sa),JS(this.cameraForward,this.timeUniform),this.OCEAN){this.scene.add(Ys),$M();for(let e of Ta)this.scene.add(e)}}initDomHelpers(){var s;this.stats.dom.style.top="unset",this.stats.dom.style.bottom="0",this.gui.domElement.id="game-dat-gui";const e=this.gui.addFolder("Performance");e.add({wireframe:!1},"wireframe").onChange(r=>{this.scene.traverse(o=>{o.type==="Mesh"&&(o.material.wireframe=r)})});let t=document.createElement("li");this.guiStatsEl=document.createElement("div"),this.guiStatsEl.classList.add("gui-stats"),t.appendChild(this.guiStatsEl),(s=e.domElement.querySelector("ul"))==null||s.appendChild(t),e.open();const i=this.gui.addFolder("World");i.add(this,"TIME_PASSES").name("Time Passes"),i.open()}onResize(){this.parent&&(this.renderer.setSize(this.parent.clientWidth,this.parent.clientHeight),this.camera.aspect=this.parent.clientWidth/this.parent.clientHeight,this.camera.updateProjectionMatrix())}render(){this.renderJob=requestAnimationFrame(()=>this.render());const e=this.clock.getDelta();this.TIME_PASSES&&(this.time+=e),this.timeUniform.value+=e,BS(this.camera,this.time),this.OCEAN&&(QS(this.camera),ZM(this.camera)),this.updateSunMoon(),this.cameraRight.copy(new ee(1,0,0).applyQuaternion(this.camera.quaternion)),this.cameraUp.copy(new ee(0,1,0).applyQuaternion(this.camera.quaternion)),this.cameraForward.copy(new ee(0,0,-1).applyQuaternion(this.camera.quaternion)),this.controls.update(e),this.updateStats(),this.update(e),this.renderer.render(this.scene,this.camera)}attach(e){var t;this.renderJob&&(cancelAnimationFrame(this.renderJob),this.renderJob=0),this.parent&&(this.parent.removeChild(this.gui.domElement),this.parent.removeChild(this.stats.dom),this.parent.removeChild(this.renderer.domElement),this.resize_observer.unobserve(this.parent)),this.parent=e,e&&(e.appendChild(this.gui.domElement),e.appendChild(this.stats.dom),e.appendChild(this.renderer.domElement),this.resize_observer.observe(e),this.renderer.setPixelRatio(((t=e.ownerDocument.defaultView)==null?void 0:t.devicePixelRatio)??1),this.renderJob=requestAnimationFrame(()=>this.render()))}updateStats(){this.stats.update();const e=this.renderer.info;this.guiStatsEl.textContent=[`${e.memory.geometries}▦`,`${e.memory.textures}▨`,`${e.render.calls}c`,`${e.render.triangles}△`,`${e.render.lines}l`,`${e.render.points}p`].join(" ")}initSun(){this.sunLight=new jc(16777215,1),this.moonLight=new jc(4814236,.8),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.radius=1,this.sunLight.shadow.normalBias=.015;let e=this.sunLight.shadow.camera;e.near=0,e.far=500,this.scene.add(this.sunLight),this.scene.add(this.moonLight)}updateSunMoon(){var s,r;const e=this.controls.target;this.sunLight.position.copy(e.clone().add(In.clone().multiplyScalar(200))),this.sunLight.target.position.copy(e);const t=this.sunLight.shadow.camera;t.left=t.bottom=-(t.top=t.right=Math.max(this.controls.getDistance()*2,5)),t.updateProjectionMatrix(),this.moonLight.position.copy(In.clone().multiplyScalar(-200)),(s=this._lightHelper)==null||s.update();const i=zS();this.moonLight.intensity=.3*(1-FS.sunVisibility.value),this.sunLight.color.setFromVector3(i),(r=this.scene.fog)==null||r.color.copy(this.sunLight.color),this.hemiLight.color.copy(this.sunLight.color),this.hemiLight.groundColor.copy(new Cn(0,i.length()/10,i.length()/5))}update(e){}}export{Ii as M,nT as T,Tu as a,tT as b,Wy as l,iT as t};
