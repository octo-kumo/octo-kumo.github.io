import{E as K}from"./HL6c0bJB.js";import{E as j}from"./TDBsj9WM.js";import{E as G}from"./Bo_pWg1U.js";import{q as J,o as k,_ as M,a as Q,c as D,b as W,d as X,g as L}from"./DIQSH9EO.js";import{E as Z}from"./uAUUQxmd.js";import{_ as H}from"./BpoKBUu9.js";import{E as P}from"./BvoNEIGE.js";import{E as Y,a as tt}from"./BePzQn7A.js";import{E as et,ar as ot,J as nt,ak as at,x as st,a9 as N,c as u,K as _,k as o,a as s,N as r,T as C,aa as E,b as x,O as a,F as h,Z as $,Q as d,X as p,aq as rt}from"./LXL7uvHp.js";import{u as it}from"./CqyLijFj.js";import{_ as lt}from"./DlAUqK2U.js";import"./Cfue6nRF.js";import"./BA0RWXuC.js";import"./B9fKpLQ9.js";import"./BRspts7i.js";import"./C-v3KzvZ.js";import"./DOI9YQAg.js";import"./B4oEPjcN.js";import"./BDljfghC.js";import"./BMyurIWI.js";import"./C0uW2LaN.js";import"./DcekSFII.js";import"./DK0vgvAI.js";import"./BUADUvnR.js";import"./www-n4PX.js";import"./C1Xa3YZ5.js";import"./DI9FKtlJ.js";import"./CNNgQKsW.js";import"./FqdB1VgC.js";import"./CEcP_S3v.js";import"./BjzR-c9I.js";import"./3ePyfc7o.js";/* empty css        *//* empty css        */import"./Bp3YSIOJ.js";const pt=["textContent"],mt=["textContent"],ct={key:2},ut=et({__name:"CtfOverview",async setup(_t){let f,w;const i=(ot().path.substring(2)||"/").replace(/(?!^)\/$/,""),{data:l}=([f,w]=nt(()=>it("ctf_list_"+i,()=>J("content").where("path","LIKE",i+"%").select("path","title","description","created","updated","tags","solves","points","excerpt").order("solves","ASC").all(),"$irLA2Gp18p")),f=await f,w(),f);function A(t){return[...new Set(t.map(n=>L(n)).filter(Boolean)),...new Set(t.flatMap(n=>n.tags??[]).filter(Boolean))]}const m=at({}),g=st(()=>Object.keys(m).filter(t=>m[t]));function v(t){var n;return g.value.length===0?!0:((n=t.tags)==null?void 0:n.some(c=>g.value.includes(c)))||g.value.includes(L(t)??"")}function U(t){return t.map(n=>n.points??0).reduce((n,c)=>n+c,0)}return(t,n)=>{const c=K,T=j,B=G,S=M,F=W,y=Z,O=H,q=P,R=Y,V=tt,z=rt,b=N("shared"),I=N("auto-animate");return o(l)&&o(l).length>0?(s(),u(h,{key:0},[r(B,{wrap:"",class:"mb-1 font-mono text-xs! select-none"},{default:a(()=>[(s(!0),u(h,null,$(A(o(l)),e=>(s(),_(c,{checked:o(m)[e],onChange:dt=>o(m)[e]=!o(m)[e],type:"primary",class:"text-xs! px-2! py-1!"},{default:a(()=>[d(p(e),1)]),_:2},1032,["checked","onChange"]))),256)),r(T,null,{default:a(()=>[d(p(U(o(l).filter(e=>("oneLvlUp"in t?t.oneLvlUp:o(k))(e.path)!==o(i)&&e.path!==o(i)).filter(v)))+" points ",1)]),_:1}),r(T,null,{default:a(()=>[d(p(o(l).filter(e=>("oneLvlUp"in t?t.oneLvlUp:o(k))(e.path)!==o(i)&&e.path!==o(i)).filter(v).length)+" writeups ",1)]),_:1})]),_:1}),n[0]||(n[0]=C("br",null,null,-1)),E((s(),_(V,{gutter:10},{default:a(()=>[(s(!0),u(h,null,$(o(l).filter(e=>("oneLvlUp"in t?t.oneLvlUp:o(k))(e.path)!==o(i)&&e.path!==o(i)).filter(v),e=>(s(),_(R,{xs:24,sm:12,key:e.path},{default:a(()=>[r(q,{class:"challenge-card mb-2",shadow:"hover"},{header:a(()=>[r(S,{to:`/c${e.path}`,type:"primary"},{default:a(()=>[E(C("span",{textContent:p(("guessArticleTitle"in t?t.guessArticleTitle:o(Q))(e))},null,8,pt),[[b,("getTransitionName"in t?t.getTransitionName:o(D))(e,"title")]])]),_:2},1032,["to"]),r(F,{article:e},null,8,["article"]),r(y,{size:"small"},{default:a(()=>[E(C("span",{textContent:p(("displayDocDates"in t?t.displayDocDates:o(X))(e))},null,8,mt),[[b,("getTransitionName"in t?t.getTransitionName:o(D))(e,"dates")]])]),_:2},1024)]),default:a(()=>[r(y,{size:"small",class:"line-clamp-4"},{default:a(()=>[e.excerpt?(s(),_(O,{key:0,class:"max-w-full",value:e,excerpt:""},null,8,["value"])):e.description?(s(),u(h,{key:1},[d(p(e.description),1)],64)):(s(),u("em",ct,"Empty description."))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})),[[I]]),x(t.$slots,"default",{},void 0,!0)],64)):(s(),_(z,{key:1,description:"No Writeup"},{default:a(()=>[r(y,null,{default:a(()=>n[1]||(n[1]=[d("This is most likely an error.")])),_:1}),x(t.$slots,"default",{},void 0,!0)]),_:3}))}}}),Zt=lt(ut,[["__scopeId","data-v-f0b82ba3"]]);export{Zt as default};
