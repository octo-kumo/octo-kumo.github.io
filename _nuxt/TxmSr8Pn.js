import{g as U,f as G}from"./LYtAZsTj.js";import{d as k,bH as Y,bw as R,ax as q,aK as A,h as $,bd as J,Y as V,aY as M,B as o,o as i,c as h,ab as w,F as v,ag as P,L as W,a7 as F,aB as H,bg as Q,b7 as X,s as Z,p as x,K as ee,a3 as D,r as L,a9 as T,af as j,a4 as te,aC as se,bq as le}from"./DNNoOqiL.js";const K=Symbol("elDescriptions");var z=k({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:Y(K,{})}},render(){var S;const t=U(this.cell),s=(((S=this.cell)==null?void 0:S.dirs)||[]).map(p=>{const{dir:b,arg:d,modifiers:B,value:g}=p;return[b,g,d,B]}),{border:E,direction:u}=this.descriptions,a=u==="vertical",C=()=>{var p,b,d;return((d=(b=(p=this.cell)==null?void 0:p.children)==null?void 0:b.label)==null?void 0:d.call(b))||t.label},I=()=>{var p,b,d;return(d=(b=(p=this.cell)==null?void 0:p.children)==null?void 0:b.default)==null?void 0:d.call(b)},e=t.span,c=t.rowspan,l=t.align?`is-${t.align}`:"",r=t.labelAlign?`is-${t.labelAlign}`:l,N=t.className,m=t.labelClassName,f=this.type==="label"&&(t.labelWidth||this.descriptions.labelWidth)||t.width,y={width:R(f),minWidth:R(t.minWidth)},n=q("descriptions");switch(this.type){case"label":return A($(this.tag,{style:y,class:[n.e("cell"),n.e("label"),n.is("bordered-label",E),n.is("vertical-label",a),r,m],colSpan:a?e:1,rowspan:a?1:c},C()),s);case"content":return A($(this.tag,{style:y,class:[n.e("cell"),n.e("content"),n.is("bordered-content",E),n.is("vertical-content",a),l,N],colSpan:a?e:e*2-1,rowspan:a?c*2-1:c},I()),s);default:{const p=C();return A($("td",{style:y,class:[n.e("cell"),l],colSpan:e,rowspan:c},[J(p)?void 0:$("span",{class:[n.e("label"),m]},p),$("span",{class:[n.e("content"),N]},I())]),s)}}}});const ae=V({row:{type:M(Array),default:()=>[]}}),re=k({name:"ElDescriptionsRow"}),ne=k({...re,props:ae,setup(S){const t=Y(K,{});return(s,E)=>o(t).direction==="vertical"?(i(),h(v,{key:0},[w("tr",null,[(i(!0),h(v,null,P(s.row,(u,a)=>(i(),W(o(z),{key:`tr1-${a}`,cell:u,tag:"th",type:"label"},null,8,["cell"]))),128))]),w("tr",null,[(i(!0),h(v,null,P(s.row,(u,a)=>(i(),W(o(z),{key:`tr2-${a}`,cell:u,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(i(),h("tr",{key:1},[(i(!0),h(v,null,P(s.row,(u,a)=>(i(),h(v,{key:`tr3-${a}`},[o(t).border?(i(),h(v,{key:0},[F(o(z),{cell:u,tag:"td",type:"label"},null,8,["cell"]),F(o(z),{cell:u,tag:"td",type:"content"},null,8,["cell"])],64)):(i(),W(o(z),{key:1,cell:u,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var ie=H(ne,[["__file","descriptions-row.vue"]]);const oe=V({border:Boolean,column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:Q,title:{type:String,default:""},extra:{type:String,default:""},labelWidth:{type:[String,Number],default:""}}),ce=k({name:"ElDescriptions"}),pe=k({...ce,props:oe,setup(S){const t=S,s=q("descriptions"),E=X(),u=Z();x(K,t);const a=ee(()=>[s.b(),s.m(E.value)]),C=(e,c,l,r=!1)=>(e.props||(e.props={}),c>l&&(e.props.span=l),r&&(e.props.span=c),e),I=()=>{if(!u.default)return[];const e=G(u.default()).filter(f=>{var y;return((y=f==null?void 0:f.type)==null?void 0:y.name)==="ElDescriptionsItem"}),c=[];let l=[],r=t.column,N=0;const m=[];return e.forEach((f,y)=>{var n,p,b;const d=((n=f.props)==null?void 0:n.span)||1,B=((p=f.props)==null?void 0:p.rowspan)||1,g=c.length;if(m[g]||(m[g]=0),B>1)for(let _=1;_<B;_++)m[b=g+_]||(m[b]=0),m[g+_]++,N++;if(m[g]>0&&(r-=m[g],m[g]=0),y<e.length-1&&(N+=d>r?r:d),y===e.length-1){const _=t.column-N%t.column;l.push(C(f,_,r,!0)),c.push(l);return}d<r?(r-=d,l.push(f)):(l.push(C(f,d,r)),c.push(l),r=t.column,l=[])}),c};return(e,c)=>(i(),h("div",{class:D(o(a))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(i(),h("div",{key:0,class:D(o(s).e("header"))},[w("div",{class:D(o(s).e("title"))},[L(e.$slots,"title",{},()=>[T(j(e.title),1)])],2),w("div",{class:D(o(s).e("extra"))},[L(e.$slots,"extra",{},()=>[T(j(e.extra),1)])],2)],2)):te("v-if",!0),w("div",{class:D(o(s).e("body"))},[w("table",{class:D([o(s).e("table"),o(s).is("bordered",e.border)])},[w("tbody",null,[(i(!0),h(v,null,P(I(),(l,r)=>(i(),W(ie,{key:r,row:l},null,8,["row"]))),128))])],2)],2)],2))}});var de=H(pe,[["__file","description.vue"]]);const ue=V({label:{type:String,default:""},span:{type:Number,default:1},rowspan:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},labelWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),O=k({name:"ElDescriptionsItem",props:ue}),fe=se(de,{DescriptionsItem:O}),he=le(O);export{fe as E,he as a};