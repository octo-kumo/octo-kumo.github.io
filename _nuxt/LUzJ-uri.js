import{E as k}from"./pI3Usdzb.js";import{E as S,a as v}from"./DakAIYic.js";import{E as B}from"./BeaH60Vb.js";import{d as w,b as d,aR as N,o as p,c as h,a7 as t,a8 as o,B as a,a9 as _,L as f,aH as C,ab as F,F as I,ae as T}from"./DNNoOqiL.js";import{E as M}from"./DUghJB0t.js";import{E as R}from"./DazQw2ck.js";/* empty css        */import{E as U}from"./BDC-J0ki.js";import{u as c}from"./SpT7ZWpZ.js";import{s as L}from"./B3IKOtoj.js";import"./BCbuopxz.js";import"./Bu-vi8sk.js";import"./D2Px_E6t.js";import"./CgLfswiw.js";import"./BgeR2ocj.js";import"./BB_Ol6Sd.js";import"./Cq9Fpw4b.js";import"./DXklC_UQ.js";import"./BAs2caHe.js";import"./DRn7zDEr.js";import"./BRVy8Vm0.js";import"./1HPcO8Rs.js";import"./C7RrVHOm.js";import"./wd51vK9V.js";import"./Bp3YSIOJ.js";import"./CnVzaktL.js";import"./BUADUvnR.js";const ie=w({__name:"summary",setup(O){const r=d(""),u=d(!1),m=N({input_text:c("summary-text",""),max_length:c("summary-max-len",50)}),x=()=>{u.value=!0,L(fetch("https://ai.yun.ng/summary",{method:"POST",body:JSON.stringify(m)})).then(n=>r.value=n.summary).catch(n=>U.error(n.message)).finally(()=>u.value=!1)};return(n,e)=>{const y=k,s=S,i=B,E=T,b=M,g=v,V=R;return p(),h(I,null,[t(g,{model:a(m),"label-width":"auto"},{default:o(()=>[t(s,{label:"Max Length"},{default:o(()=>[t(y,{modelValue:a(m).max_length,"onUpdate:modelValue":e[0]||(e[0]=l=>a(m).max_length=l),min:1},null,8,["modelValue"])]),_:1}),t(s,{label:"Input Text"},{default:o(()=>[t(i,{modelValue:a(m).input_text,"onUpdate:modelValue":e[1]||(e[1]=l=>a(m).input_text=l),type:"textarea",rows:3,minlength:"1"},null,8,["modelValue"])]),_:1}),t(s,{label:" "},{default:o(()=>[t(E,{type:"primary",onClick:x},{default:o(()=>e[3]||(e[3]=[_("Summarize")])),_:1})]),_:1}),t(s,{label:"Summary"},{default:o(()=>[a(u)?(p(),f(b,{key:0,rows:3,animated:""})):(p(),f(i,{key:1,modelValue:a(r),"onUpdate:modelValue":e[2]||(e[2]=l=>C(r)?r.value=l:null),type:"textarea",readonly:"",rows:3},null,8,["modelValue"]))]),_:1})]),_:1},8,["model"]),t(V,null,{default:o(()=>e[4]||(e[4]=[_("Model: "),F("code",null,"bart-large-cnn",-1)])),_:1})],64)}}});export{ie as default};