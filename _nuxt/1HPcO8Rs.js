import{cK as g,aL as i,aS as E,c3 as k,c4 as v,cL as V,bu as D,a0 as F,cM as _,cN as f,cm as G,cO as c}from"./DNNoOqiL.js";import{a as z,i as K}from"./BgeR2ocj.js";var j=g(i,"WeakMap");function Wt(t){return t!=null&&z(t.length)&&!E(t)}var R=Object.prototype;function W(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||R;return t===e}function N(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}function q(){return!1}var I=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=I&&typeof module=="object"&&module&&!module.nodeType&&module,H=w&&w.exports===I,x=H?i.Buffer:void 0,Y=x?x.isBuffer:void 0,Z=Y||q,J="[object Arguments]",Q="[object Array]",X="[object Boolean]",tt="[object Date]",et="[object Error]",rt="[object Function]",at="[object Map]",ot="[object Number]",nt="[object Object]",st="[object RegExp]",it="[object Set]",ct="[object String]",ut="[object WeakMap]",pt="[object ArrayBuffer]",ft="[object DataView]",gt="[object Float32Array]",bt="[object Float64Array]",dt="[object Int8Array]",yt="[object Int16Array]",jt="[object Int32Array]",Tt="[object Uint8Array]",lt="[object Uint8ClampedArray]",ht="[object Uint16Array]",vt="[object Uint32Array]",a={};a[gt]=a[bt]=a[dt]=a[yt]=a[jt]=a[Tt]=a[lt]=a[ht]=a[vt]=!0;a[J]=a[Q]=a[pt]=a[X]=a[ft]=a[tt]=a[et]=a[rt]=a[at]=a[ot]=a[nt]=a[st]=a[it]=a[ct]=a[ut]=!1;function _t(t){return k(t)&&z(t.length)&&!!a[v(t)]}function mt(t){return function(r){return t(r)}}var L=typeof exports=="object"&&exports&&!exports.nodeType&&exports,u=L&&typeof module=="object"&&module&&!module.nodeType&&module,At=u&&u.exports===L,y=At&&V.process,S=function(){try{var t=u&&u.require&&u.require("util").types;return t||y&&y.binding&&y.binding("util")}catch{}}(),O=S&&S.isTypedArray,wt=O?mt(O):_t,xt=Object.prototype,St=xt.hasOwnProperty;function Nt(t,r){var e=F(t),o=!e&&K(t),b=!e&&!o&&Z(t),m=!e&&!o&&!b&&wt(t),A=e||o||b||m,d=A?N(t.length,String):[],U=d.length;for(var n in t)(r||St.call(t,n))&&!(A&&(n=="length"||b&&(n=="offset"||n=="parent")||m&&(n=="buffer"||n=="byteLength"||n=="byteOffset")||D(n,U)))&&d.push(n);return d}function Ot(t,r){return function(e){return t(r(e))}}var Mt=Ot(Object.keys,Object),Ct=Object.prototype,Pt=Ct.hasOwnProperty;function qt(t){if(!W(t))return Mt(t);var r=[];for(var e in Object(t))Pt.call(t,e)&&e!="constructor"&&r.push(e);return r}function $t(){this.__data__=new _,this.size=0}function Bt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function zt(t){return this.__data__.get(t)}function It(t){return this.__data__.has(t)}var Lt=200;function Ut(t,r){var e=this.__data__;if(e instanceof _){var o=e.__data__;if(!f||o.length<Lt-1)return o.push([t,r]),this.size=++e.size,this;e=this.__data__=new G(o)}return e.set(t,r),this.size=e.size,this}function p(t){var r=this.__data__=new _(t);this.size=r.size}p.prototype.clear=$t;p.prototype.delete=Bt;p.prototype.get=zt;p.prototype.has=It;p.prototype.set=Ut;var T=g(i,"DataView"),l=g(i,"Promise"),h=g(i,"Set"),M="[object Map]",Et="[object Object]",C="[object Promise]",P="[object Set]",$="[object WeakMap]",B="[object DataView]",kt=c(T),Vt=c(f),Dt=c(l),Ft=c(h),Gt=c(j),s=v;(T&&s(new T(new ArrayBuffer(1)))!=B||f&&s(new f)!=M||l&&s(l.resolve())!=C||h&&s(new h)!=P||j&&s(new j)!=$)&&(s=function(t){var r=v(t),e=r==Et?t.constructor:void 0,o=e?c(e):"";if(o)switch(o){case kt:return B;case Vt:return M;case Dt:return C;case Ft:return P;case Gt:return $}return r});var Ht=i.Uint8Array;export{p as S,Ht as U,Nt as a,qt as b,W as c,Z as d,wt as e,h as f,s as g,mt as h,Wt as i,S as n,Ot as o};