import{E as B}from"./BeaH60Vb.js";import{a as M,E as O}from"./GYaMcSGZ.js";import{_ as P}from"./CZycpham.js";import{E as R}from"./DakAIYic.js";import{E as k}from"./DazQw2ck.js";import{_ as D}from"./wsUnp8AR.js";import{d as N,aR as T,b as v,w as C,K as y,o as I,c as z,ab as f,a7 as t,a8 as l,B as a,a9 as b,aQ as K,af as n}from"./DNNoOqiL.js";import{E as L}from"./BDC-J0ki.js";import{m as Q}from"./Ce69miKV.js";import{u as S}from"./Bw80bkUX.js";import"./BAs2caHe.js";import"./Bp3YSIOJ.js";import"./BCbuopxz.js";import"./Bu-vi8sk.js";import"./D2Px_E6t.js";import"./CgLfswiw.js";import"./BgeR2ocj.js";import"./BB_Ol6Sd.js";import"./CnVzaktL.js";import"./Cq9Fpw4b.js";import"./DIh3HQaU.js";import"./BUADUvnR.js";import"./BmU_cfaq.js";import"./B45zYjmO.js";import"./BNRBVlZw.js";import"./DCTLXrZ8.js";/* empty css        */import"./C4iS2aBk.js";import"./CjLcVx3w.js";import"./DXklC_UQ.js";import"./DRn7zDEr.js";import"./BRVy8Vm0.js";import"./1HPcO8Rs.js";import"./C7RrVHOm.js";import"./wd51vK9V.js";const j={class:"inputs flex gap-2 flex-col max-w-prose"},Fe=N({__name:"opportunity.client",setup(q){const e=T({pa:"Apple",pb:"Banana",p1:"Person 1",p2:"Person 2",p1a:40,p1b:20,p2a:30,p2b:50}),E=v(),$=S(),_=v({theme:{mode:$.value},xaxis:{type:"numeric",title:{text:e.pb}},yaxis:{type:"numeric",title:{text:e.pa}},dataLabels:{enabled:!1},stroke:{curve:"straight",width:[2,2,1,1]}}),w=v([]);C($,m=>{var o;((o=_.value.theme)==null?void 0:o.mode)!==m.value&&(_.value={..._.value,theme:{mode:m.value}})});function h(){return[{name:e.p1,data:[{x:0,y:e.p1a},{x:e.p1b,y:0}],type:"line"},{name:e.p2,data:[{x:0,y:e.p2a},{x:e.p2b,y:0}],type:"line"},{name:"PPB",data:[{x:0,y:e.p1a+e.p2a},{x:u.value<i.value?e.p1b:e.p2b,y:s.value<d.value?e.p1a:e.p2a},{x:e.p1b+e.p2b,y:0}],type:"line"}]}function F(){try{w.value=h()}catch(m){L.error(m.message)}}const s=y(()=>e.p1b/e.p1a),u=y(()=>e.p1a/e.p1b),d=y(()=>e.p2b/e.p2a),i=y(()=>e.p2a/e.p2b);return C(e,F,{immediate:!0}),(m,o)=>{const x=B,r=M,A=O,c=P,V=R,g=k,U=D;return I(),z("div",null,[f("div",j,[t(A,{gutter:10},{default:l(()=>[t(r,{span:8,offset:8},{default:l(()=>[t(x,{modelValue:a(e).p1,"onUpdate:modelValue":o[0]||(o[0]=p=>a(e).p1=p),placeholder:"Person 1"},null,8,["modelValue"])]),_:1}),t(r,{span:8},{default:l(()=>[t(x,{modelValue:a(e).p2,"onUpdate:modelValue":o[1]||(o[1]=p=>a(e).p2=p),placeholder:"Person 2"},null,8,["modelValue"])]),_:1})]),_:1}),t(A,{gutter:10},{default:l(()=>[t(r,{span:8},{default:l(()=>[t(x,{modelValue:a(e).pa,"onUpdate:modelValue":o[2]||(o[2]=p=>a(e).pa=p),placeholder:"Apple"},null,8,["modelValue"])]),_:1}),t(r,{span:8},{default:l(()=>[t(V,{"show-message":"",error:`OC=${a(s).toFixed(2)} ${a(e).pb} ${a(s)<a(d)?"CA":""} ${a(e).p1a>a(e).p2a?"AA":""}`},{default:l(()=>[t(c,{modelValue:a(e).p1a,"onUpdate:modelValue":o[3]||(o[3]=p=>a(e).p1a=p)},null,8,["modelValue"])]),_:1},8,["error"])]),_:1}),t(r,{span:8},{default:l(()=>[t(V,{"show-message":"",error:`OC=${a(d).toFixed(2)} ${a(e).pb} ${a(d)<a(s)?"CA":""} ${a(e).p2a>a(e).p1a?"AA":""}`},{default:l(()=>[t(c,{modelValue:a(e).p2a,"onUpdate:modelValue":o[4]||(o[4]=p=>a(e).p2a=p)},null,8,["modelValue"])]),_:1},8,["error"])]),_:1})]),_:1}),t(A,{gutter:10},{default:l(()=>[t(r,{span:8},{default:l(()=>[t(x,{modelValue:a(e).pb,"onUpdate:modelValue":o[5]||(o[5]=p=>a(e).pb=p),placeholder:"Banana"},null,8,["modelValue"])]),_:1}),t(r,{span:8},{default:l(()=>[t(V,{"show-message":"",error:`OC=${a(u).toFixed(2)} ${a(e).pa} ${a(u)<a(i)?"CA":""} ${a(e).p1b>a(e).p2b?"AA":""}`},{default:l(()=>[t(c,{modelValue:a(e).p1b,"onUpdate:modelValue":o[6]||(o[6]=p=>a(e).p1b=p)},null,8,["modelValue"])]),_:1},8,["error"])]),_:1}),t(r,{span:8},{default:l(()=>[t(V,{"show-message":"",error:`OC=${a(i).toFixed(2)} ${a(e).pa} ${a(i)<a(u)?"CA":""} ${a(e).p2b>a(e).p1b?"AA":""}`},{default:l(()=>[t(c,{modelValue:a(e).p2b,"onUpdate:modelValue":o[7]||(o[7]=p=>a(e).p2b=p)},null,8,["modelValue"])]),_:1},8,["error"])]),_:1})]),_:1})]),t(g,{size:"small",tag:"p"},{default:l(()=>o[8]||(o[8]=[f("b",null,"CA",-1),b(" comparative advantage, "),f("b",null,"AA",-1),b(" absolute advantage, "),f("b",null,"OC",-1),b(" opportunity cost ")])),_:1}),t(U,null,{default:l(()=>[t(a(Q),{ref_key:"chart",ref:E,class:"w-full",width:"700",type:"rangeArea",options:a(_),series:("toRaw"in m?m.toRaw:a(K))(a(w))},null,8,["options","series"])]),_:1}),t(g,{tag:"p"},{default:l(()=>o[9]||(o[9]=[f("b",null,"Trade Range:",-1)])),_:1}),f("ul",null,[t(g,{tag:"li"},{default:l(()=>[b(" 1 "+n(a(e).pa)+" for "+n(Math.min(a(s),a(d)).toFixed(2))+" ~ "+n(Math.max(a(s),a(d)).toFixed(2))+" "+n(a(e).pb),1)]),_:1}),t(g,{tag:"li"},{default:l(()=>[b(" 1 "+n(a(e).pb)+" for "+n(Math.min(a(u),a(i)).toFixed(2))+" ~ "+n(Math.max(a(u),a(i)).toFixed(2))+" "+n(a(e).pa),1)]),_:1})])])}}});export{Fe as default};