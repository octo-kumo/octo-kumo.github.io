import{d as _,r as d,o as u,c as m,w as v,v as $,a as o,t as f}from"./index-2536c366.js";const S={class:"flex flex-wrap h-screen"},N=["textContent"],C=_({__name:"JsonSchemaConvert",setup(w){const n=e=>e.toLowerCase().replace(/([-_][a-z])/g,s=>s.toUpperCase().replace("-","").replace("_",""));function c(e){const s=new RegExp("(?<=\\n|^)\\s*([\\w_]+): (true|false)(,|$)","g"),t=new RegExp("(?<=\\n|^)\\s*([\\w_]+): \\d+(,|$)","g"),i=new RegExp(`(?<=\\n|^)\\s*([\\w_]+): ('.*'|".*")(,|$)`,"g"),p=new RegExp("(?<=\\n|^)\\s*([\\w_]+): (null)(,|$)","g");return e=e.replace(s,(l,a)=>`@SerializedName("${a}")
private boolean ${n(a)};
`),e=e.replace(t,(l,a)=>`@SerializedName("${a}")
private int ${n(a)};
`),e=e.replace(i,(l,a)=>`@SerializedName("${a}")
private String ${n(a)};
`),e=e.replace(p,(l,a)=>`@SerializedName("${a}")
private Object ${n(a)};
`),e}const r=d("");return(e,s)=>(u(),m("div",S,[v(o("textarea",{class:"flex-1","onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t)},null,512),[[$,r.value]]),o("textarea",{class:"flex-1",textContent:f(c(r.value))},null,8,N)]))}});export{C as default};
