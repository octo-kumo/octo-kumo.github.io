import{E as I}from"./D_GOs_z4.js";import{E as C}from"./BNiV0FgN.js";import{E as B}from"./CFIrAvbu.js";import{E as P}from"./BeaH60Vb.js";import{E as U,a as S}from"./DakAIYic.js";import{d as V,aO as T,aP as R,o as m,L as f,a8 as a,a7 as r,c as _,F as k,ag as y,a3 as F,aR as E,B as i,a9 as d,af as L,b as M,aH as N}from"./DNNoOqiL.js";/* empty css        */import{E as A}from"./B-WuvMN3.js";import{_ as x}from"./DlAUqK2U.js";import{E as $,a as D}from"./CzQeu3t1.js";import"./BCbuopxz.js";import"./Bu-vi8sk.js";import"./D2Px_E6t.js";import"./CgLfswiw.js";import"./BgeR2ocj.js";import"./BB_Ol6Sd.js";import"./Cq9Fpw4b.js";import"./B_16Otow.js";import"./BzlOSF19.js";import"./1HPcO8Rs.js";import"./wd51vK9V.js";import"./BAs2caHe.js";import"./Bp3YSIOJ.js";import"./CnVzaktL.js";import"./DXklC_UQ.js";import"./DRn7zDEr.js";import"./BRVy8Vm0.js";import"./C7RrVHOm.js";import"./LYtAZsTj.js";import"./fAiuhNik.js";import"./BUADUvnR.js";const G=V({__name:"PurchasableItem",props:T({show:{default:()=>({price:!0,name:!0})}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(g){const o=R(g,"modelValue"),l=[{key:"name",name:"Item Name"},{key:"source",name:"Item Source"},{key:"price",name:"Item Price",attrs:{prefix:"$"}},{key:"weight",name:"Item Weight",attrs:{suffix:"kg"}},{key:"amount",name:"Amount",attrs:{prefix:"×"}}];return(e,h)=>{const n=P,c=U,s=S,w=C;return m(),f(w,null,{default:a(()=>[r(s,{model:o.value,"label-width":"120px"},{default:a(()=>[(m(!0),_(k,null,y(l.filter(t=>!!e.show[t.key]),t=>(m(),f(c,{label:t.name,class:F(t.key)},{default:a(()=>[r(n,{modelValue:o.value[t.key],"onUpdate:modelValue":b=>o.value[t.key]=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","class"]))),256))]),_:1},8,["model"])]),_:1})}}}),O=V({__name:"ItemGallery",setup(g){const o=["name","source","price","weight","amount"],l=E({name:!0,price:!0}),e=E([{name:"Sausage Lafleur",source:"walmart",price:3.27,weight:.375},{name:"Apple",source:"grocery store",price:.99,weight:.2},{name:"Milk",source:"dairy farm",price:2.99,weight:1.5},{name:"Bread",source:"bakery",price:1.99,weight:.5},{name:"Eggs",source:"farm",price:2.49,weight:.3},{name:"Chicken",source:"butcher",price:5.99,weight:1.2},{name:"Cheese",source:"dairy farm",price:4.99,weight:.5},{name:"Butter",source:"dairy farm",price:2.99,weight:.25},{name:"Pasta",source:"grocery store",price:1.49,weight:.5},{name:"Rice",source:"grocery store",price:2.99,weight:1},{name:"Potato",source:"farm",price:.99,weight:.5},{name:"Tomato",source:"farm",price:1.49,weight:.2},{name:"Carrot",source:"farm",price:.99,weight:.2},{name:"Onion",source:"farm",price:.99,weight:.2},{name:"Garlic",source:"farm",price:.99,weight:.1},{name:"Lettuce",source:"farm",price:1.49,weight:.2},{name:"Cucumber",source:"farm",price:.99,weight:.2},{name:"Bell Pepper",source:"farm",price:1.49,weight:.2},{name:"Zucchini",source:"farm",price:.99,weight:.2},{name:"Broccoli",source:"farm",price:1.49,weight:.2},{name:"Cauliflower",source:"farm",price:1.49,weight:.2},{name:"Spinach",source:"farm",price:1.49,weight:.2},{name:"Kale",source:"farm",price:1.49,weight:.2},{name:"Celery",source:"farm",price:.99,weight:.2}]);return(h,n)=>{const c=I,s=C,w=B,t=G,b=A;return m(),_("div",null,[r(s,null,{default:a(()=>[(m(),_(k,null,y(o,p=>r(c,{modelValue:i(l)[p],"onUpdate:modelValue":u=>i(l)[p]=u},{default:a(()=>[d("Show "+L(p),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])),64))]),_:1}),r(w),r(b,{wrap:""},{default:a(()=>[(m(!0),_(k,null,y(i(e),(p,u)=>(m(),f(t,{modelValue:i(e)[u],"onUpdate:modelValue":v=>i(e)[u]=v,show:i(l)},null,8,["modelValue","onUpdate:modelValue","show"]))),256))]),_:1})])}}}),q=x(O,[["__scopeId","data-v-ae6c99bc"]]),z=V({__name:"price-comparator",setup(g){const o=M("first");return(l,e)=>{const h=q,n=D,c=$;return m(),f(c,{modelValue:i(o),"onUpdate:modelValue":e[0]||(e[0]=s=>N(o)?o.value=s:null)},{default:a(()=>[r(n,{label:"Amount",name:"first"},{default:a(()=>[r(h)]),_:1}),r(n,{label:"Config",name:"second"},{default:a(()=>e[1]||(e[1]=[d("Config")])),_:1}),r(n,{label:"Role",name:"third"},{default:a(()=>e[2]||(e[2]=[d("Role")])),_:1}),r(n,{label:"Task",name:"fourth"},{default:a(()=>e[3]||(e[3]=[d("Task")])),_:1})]),_:1},8,["modelValue"])}}}),Ve=x(z,[["__scopeId","data-v-ae409ca4"]]);export{Ve as default};