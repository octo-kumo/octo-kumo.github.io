import{b3 as W,b2 as X,a_ as D,b6 as ee,a5 as F,x as f,aV as P,b9 as ge,b8 as K,g as ae,w as le,a1 as ne,r as T,p as I,cb as O,bo as Ce,an as Y,aU as Z,bS as te,cc as w,ad as R,E,bO as oe,ae as j,K as ue,a as x,O as se,T as J,c as S,L as A,M as C,k as n,aa as N,b0 as $,a7 as z,cd as G,b as Q,F as xe,Q as ie,X as re,aZ as ce,aY as Ve,aP as ye,aQ as Se,I as Le,ap as Be,ai as Ee,bu as de}from"./LXL7uvHp.js";import{u as be,p as _e}from"./DK0vgvAI.js";import{U,C as M,d as ve}from"./Cfue6nRF.js";import{i as Ie}from"./CEcP_S3v.js";const me={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:ee,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...be(["ariaControls"])},fe={[U]:e=>W(e)||X(e)||D(e),change:e=>W(e)||X(e)||D(e)},_=Symbol("checkboxGroupContextKey"),Fe=({model:e,isChecked:c})=>{const i=F(_,void 0),l=f(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:ge(f(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Ne=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=F(_,void 0),{formItem:t}=K(),{emit:v}=ae();function s(a){var h,k,u,p;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(h=e.trueValue)!=null?h:e.trueLabel)!=null?k:!0:(p=(u=e.falseValue)!=null?u:e.falseLabel)!=null?p:!1}function o(a,h){v(M,s(a),h)}function m(a){if(i.value)return;const h=a.target;v(M,s(h.checked),a)}async function V(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await ne(),o(c.value,a)))}const L=f(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return le(()=>e.modelValue,()=>{L.value&&(t==null||t.validate("change").catch(a=>ve()))}),{handleChange:m,onClickRoot:V}},$e=e=>{const c=T(!1),{emit:i}=ae(),l=F(_,void 0),b=f(()=>P(l)===!1),r=T(!1),d=f({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&I(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(U,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},ze=(e,c,{model:i})=>{const l=F(_,void 0),b=T(!1),r=f(()=>O(e.value)?e.label:e.value),d=f(()=>{const o=i.value;return D(o)?o:I(o)?Ce(r.value)?o.map(Y).some(m=>Ie(m,r.value)):o.map(Y).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=Z(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=Z(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=f(()=>!!c.default||!O(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},he=(e,c)=>{const{formItem:i}=K(),{model:l,isGroup:b,isLimitExceeded:r}=$e(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=ze(e,c,{model:l}),{isDisabled:V}=Fe({model:l,isChecked:t}),{inputId:L,isLabeledByFormItem:a}=te(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:h,onClickRoot:k}=Ne(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:V,isLabeledByFormItem:a});return(()=>{function p(){var y,g;I(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(g=(y=e.trueValue)!=null?y:e.trueLabel)!=null?g:!0}e.checked&&p()})(),w({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>b.value&&O(e.value))),w({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.trueLabel)),w({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.falseLabel)),{inputId:L,isLabeledByFormItem:a,isChecked:t,isDisabled:V,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:h,onClickRoot:k}},Ge=E({name:"ElCheckbox"}),Ue=E({...Ge,props:me,emits:fe,setup(e){const c=e,i=oe(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:V,onClickRoot:L}=he(c,i),a=j("checkbox"),h=f(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),k=f(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,p)=>(x(),ue(ce(!n(s)&&n(b)?"span":"label"),{class:C(n(h)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(L)},{default:se(()=>{var y,g,q,H;return[J("span",{class:C(n(k))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((x(),S("input",{key:0,id:n(l),"onUpdate:modelValue":B=>z(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(g=(y=u.trueValue)!=null?y:u.trueLabel)!=null?g:!0,"false-value":(H=(q=u.falseValue)!=null?q:u.falseLabel)!=null?H:!1,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:$(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[G,n(o)]]):N((x(),S("input",{key:1,id:n(l),"onUpdate:modelValue":B=>z(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:$(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[G,n(o)]]),J("span",{class:C(n(a).e("inner"))},null,2)],2),n(s)?(x(),S("span",{key:0,class:C(n(a).e("label"))},[Q(u.$slots,"default"),u.$slots.default?A("v-if",!0):(x(),S(xe,{key:0},[ie(re(u.label),1)],64))],2)):A("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var we=R(Ue,[["__file","checkbox.vue"]]);const De=E({name:"ElCheckboxButton"}),Pe=E({...De,props:me,emits:fe,setup(e){const c=e,i=oe(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=he(c,i),o=F(_,void 0),m=j("checkbox"),V=f(()=>{var a,h,k,u;const p=(h=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?h:"";return{backgroundColor:p,borderColor:p,color:(u=(k=o==null?void 0:o.textColor)==null?void 0:k.value)!=null?u:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),L=f(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,h)=>{var k,u,p,y;return x(),S("label",{class:C(n(L))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?N((x(),S("input",{key:0,"onUpdate:modelValue":g=>z(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(u=(k=a.trueValue)!=null?k:a.trueLabel)!=null?u:!0,"false-value":(y=(p=a.falseValue)!=null?p:a.falseLabel)!=null?y:!1,onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:$(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[G,n(t)]]):N((x(),S("input",{key:1,"onUpdate:modelValue":g=>z(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:$(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[G,n(t)]]),a.$slots.default||a.label?(x(),S("span",{key:2,class:C(n(m).be("button","inner")),style:Ve(n(b)?n(V):void 0)},[Q(a.$slots,"default",{},()=>[ie(re(a.label),1)])],6)):A("v-if",!0)],2)}}});var ke=R(Pe,[["__file","checkbox-button.vue"]]);const Te=ye({modelValue:{type:Se(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ee,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...be(["ariaLabel"])}),Oe={[U]:e=>I(e),change:e=>I(e)},Ae=E({name:"ElCheckboxGroup"}),Me=E({...Ae,props:Te,emits:Oe,setup(e,{emit:c}){const i=e,l=j("checkbox"),{formItem:b}=K(),{inputId:r,isLabeledByFormItem:d}=te(i,{formItemContext:b}),t=async s=>{c(U,s),await ne(),c(M,s)},v=f({get(){return i.modelValue},set(s){t(s)}});return Le(_,{..._e(Be(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),le(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>ve()))}),(s,o)=>{var m;return x(),ue(ce(s.tag),{id:n(r),class:C(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:se(()=>[Q(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var pe=R(Me,[["__file","checkbox-group.vue"]]);const qe=Ee(we,{CheckboxButton:ke,CheckboxGroup:pe});de(ke);de(pe);export{qe as E};
