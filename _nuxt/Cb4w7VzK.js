import{d as z,o as n,c as _,ab as C,aJ as b,aK as B,B as y,L as o,a8 as s,a4 as r,F as h,ag as L,a3 as $,a7 as i,a9 as c,af as u,bC as E,ad as w,bD as U,r as M,ay as N,aU as D}from"./DNNoOqiL.js";import{E as H}from"./DdabXJlM.js";import{E as S}from"./DD2zi55I.js";import{_ as V}from"./Dx0oS3xJ.js";import{_ as A}from"./DlAUqK2U.js";const F={"aria-hidden":"true","data-prefix":"fal","data-icon":"users",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-users fa-w-20 fa-7x"},I=z({name:"Users",__name:"Users",setup(a){return(e,l)=>(n(),_("svg",F,l[0]||(l[0]=[C("path",{fill:"currentColor",d:"M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z",class:""},null,-1)])))}});function Z(a){return(a==null?void 0:a.replace(/\/[^/]+$/,""))||"/"}const J=["ai","web","crypto","forensic","forensics","algo","pwn","rev","misc","osint","box","hardware","blockchain","defence"];function v(a){var l;const e=((l=a==null?void 0:a._path)==null?void 0:l.split("/").at(-2))??"unknown";if(J.includes(e))return e}function K(a,e){return("content-"+(e??"")+"-"+((a==null?void 0:a._id)??(a==null?void 0:a._path)??"null")).replace(/[^a-zA-Z0-9\-_]/g,"-")}const P=["innerHTML"],X=z({__name:"ArticleTags",props:{article:{},idPrefix:{},hideCat:{type:Boolean},noSharedElement:{type:Boolean},ignore:{},customTagHtml:{type:Function,default:a=>a},short:{type:Boolean}},setup(a){return(e,l)=>{const f=E,p=w,t=H,d=U,k=I,T=b("shared");return e.article?B((n(),_("div",{key:0,class:$(["flex gap-1 my-1 article-tags font-mono",{"flex-wrap":!e.short}])},[e.article.rank?(n(),o(t,{key:0,size:"small",type:e.article.rank>20?"info":"primary",class:"font-bold"},{default:s(()=>[i(p,null,{default:s(()=>[i(f)]),_:1}),c(" "+u(e.article.rank),1)]),_:1},8,["type"])):r("",!0),e.article.challenges?(n(),o(t,{key:1,size:"small",type:"info",class:"font-bold"},{default:s(()=>[i(p,null,{default:s(()=>[i(d)]),_:1}),c(" "+u(e.article.challenges),1)]),_:1})):r("",!0),e.article.percent?(n(),o(t,{key:2,size:"small",type:"info"},{default:s(()=>[c(u(e.article.percent)+"% ",1)]),_:1})):r("",!0),e.short?(n(),_(h,{key:3},[e.article.team?(n(),o(t,{key:0,size:"small",type:"warning"},{default:s(()=>[i(p,null,{default:s(()=>[i(k)]),_:1})]),_:1})):r("",!0),e.article.points&&("oneLvlUp"in e?e.oneLvlUp:y(Z))(e.article._path)!=="/ctf"?(n(),o(t,{key:1,size:"small",type:(e.article.solves??999)>50?"info":"success"},{default:s(()=>[c(u(e.article.points),1)]),_:1},8,["type"])):r("",!0)],64)):(n(),_(h,{key:4},[e.article.team?(n(),o(t,{key:0,size:"small",type:"warning"},{default:s(()=>[i(p,null,{default:s(()=>[i(k)]),_:1}),c(" "+u(e.article.team),1)]),_:1})):r("",!0),e.article.points?(n(),o(t,{key:1,size:"small",type:"info"},{default:s(()=>[c(u(e.article.points)+" points",1)]),_:1})):r("",!0),e.article.solves?(n(),o(t,{key:2,size:"small",type:e.article.solves>50?"info":"success"},{default:s(()=>[c(u(e.article.solves)+" solves ",1)]),_:1},8,["type"])):r("",!0)],64)),("getCtfCategory"in e?e.getCtfCategory:y(v))(e.article)&&!e.hideCat?(n(),o(t,{key:5,size:"small"},{default:s(()=>[c(u(("getCtfCategory"in e?e.getCtfCategory:y(v))(e.article)),1)]),_:1})):r("",!0),(n(!0),_(h,null,L((e.article.tags??[]).filter(m=>{var g;return!((g=e.ignore)!=null&&g.includes(m))}),(m,g)=>(n(),o(t,{size:"small"},{default:s(()=>[C("span",{innerHTML:e.customTagHtml(m,g)},null,8,P)]),_:2},1024))),256))],2)),[[T,!e.noSharedElement&&("getTransitionName"in e?e.getTransitionName:y(K))(e.article,"tags-"+(e.idPrefix??""))]]):r("",!0)}}}),j={};function q(a,e){const l=D,f=w,p=S,t=V;return n(),o(t,{custom:""},{default:s(d=>[i(p,N({type:d.isActive?"primary":"default",href:d.href},a.$attrs,{onClick:d.navigate}),{default:s(()=>[M(a.$slots,"default"),a.$attrs.showIcon?(n(),o(f,{key:0},{default:s(()=>[i(l)]),_:1})):r("",!0)]),_:2},1040,["type","href","onClick"])]),_:3})}const Y=A(j,[["render",q]]);function x(a){var e,l,f;return a!=null&&a.title&&((e=a==null?void 0:a.tags)!=null&&e.includes("blog"))&&/^\d{4}-\d{2}-\d{2}$/.test((a==null?void 0:a.title)??"")?new Date(a==null?void 0:a.title).toLocaleDateString(void 0,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric",weekday:"short"}):(a==null?void 0:a.title)||((f=(l=a==null?void 0:a._path)==null?void 0:l.split("/"))==null?void 0:f.pop())||"Unknown"}export{x as _,Y as a,X as b,K as c,v as g,Z as o};