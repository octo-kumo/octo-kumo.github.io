import{E as $e}from"./FqdB1VgC.js";import{_ as ze}from"./4e16lzEp.js";import{E as qe,aA as Qe,x as R,r as b,ak as Ke,o as Ze,f as je,a9 as Je,c as z,a as F,T as p,aa as el,K as we,O as f,L as ll,N as s,F as ge,Z as Me,k as m,U as tl,Q as _,a7 as S,X as q}from"./LXL7uvHp.js";import{E as al}from"./c9aEfCA7.js";import{a as ol,E as nl}from"./CiYtYilA.js";import{E as rl,a as il,b as ul}from"./DNK3-Tdz.js";import{a as sl,E as dl}from"./rqzJfLeH.js";import"./GufaK0pE.js";import"./TDBsj9WM.js";import"./DcekSFII.js";/* empty css        */import{u as ml}from"./ddk9ePSG.js";import{c as vl}from"./DflBFArh.js";import{_ as fl}from"./DlAUqK2U.js";import"./DK0vgvAI.js";import"./Cfue6nRF.js";import"./CEcP_S3v.js";import"./BjzR-c9I.js";/* empty css        */import"./_d1bhYXs.js";import"./C08jCxmb.js";import"./CnYHDQzK.js";import"./BoRnL4ex.js";import"./JLMW0jlx.js";import"./oqGv0BAX.js";import"./DI9FKtlJ.js";import"./DIAaBPkJ.js";import"./BUADUvnR.js";import"./DOI9YQAg.js";import"./BYjeDXV0.js";import"./DHQVDzdN.js";import"./BgeFuXXA.js";import"./BA0RWXuC.js";import"./Bp3YSIOJ.js";import"./D86IrffZ.js";import"./www-n4PX.js";import"./C1Xa3YZ5.js";function B(E){if(isNaN(E))return"NaN";if(!isFinite(E))return E>0?"Infinity":"-Infinity";const H=Math.abs(E),ie=1e6,Y=1e-6,d=10;if(H>=ie||H>0&&H<Y)return E.toExponential(5);let L=E.toString();if(L.includes(".")&&L.length>d){const[O,ue]=L.split(".");if(O.length+ue.length>d){const se=d-O.length;L=E.toFixed(se)}}return E%1===0?E.toFixed(0):L}const pl={class:"flex h-600px"},cl={class:"px-2"},hl=qe({__name:"triangulator",setup(E){Qe(e=>({"77d1527c":m(Be)}));const H=ml(),ie=R(()=>H.value==="dark"),Y=b(),d={scale:100,_scale:100,ox:400,_ox:400,oy:300,_oy:400};function L(e,l,a){const{x:o,y:i,dx:u,dy:n}=a;if(e===o&&l===i)return 0;const r=Math.atan2(l-i,e-o),c=Math.atan2(n,u);let h=r-c;return h=Math.atan2(Math.sin(h),Math.cos(h)),h*h}function O(e,l,a){return a.reduce((o,i)=>o+L(e,l,i),0)}function ue(e){if(e.length===0)return{minX:0,minY:0,maxX:0,maxY:0};const l=Math.min(...e.map(u=>u.x)),a=Math.min(...e.map(u=>u.y)),o=Math.max(...e.map(u=>u.x)),i=Math.max(...e.map(u=>u.y));return{minX:l,minY:a,maxX:o,maxY:i}}function Ve(e,l,a,o,i){const u=ue(e);let n=(u.minX+u.maxX)/2,r=(u.minY+u.maxY)/2;const c=Math.hypot(u.maxX-u.minX,u.maxY-u.minY);let h=1/0,v=O(n,r,e),y=l,g=[],T=0;const t=J.value;for(i(()=>T=o);T<o;T++){h=v;let N=e.reduce((C,pe)=>{const{x:P,y:X,dx:ce,dy:he}=pe;if(n===P&&r===X)return C;const $=Math.atan2(r-X,n-P),ye=Math.atan2(he,ce);let I=$-ye;I=Math.atan2(Math.sin(I),Math.cos(I));let be=t===0?1:1/Math.pow(Math.hypot(n-P,r-X),t);return C+2*I*-Math.sin($)*c*be},0),M=e.reduce((C,pe)=>{const{x:P,y:X,dx:ce,dy:he}=pe;if(n===P&&r===X)return C;const $=Math.atan2(r-X,n-P),ye=Math.atan2(he,ce);let I=$-ye;I=Math.atan2(Math.sin(I),Math.cos(I));let be=t===0?1:1/Math.pow(Math.hypot(n-P,r-X),t);return C+2*I*Math.cos($)*c*be},0);const re={x:n,y:r,gx:N,gy:M,error:0};if(n-=y*N,r-=y*M,re.error=v=O(n,r,e),g.push(re),y=v<h?y*oe.value:y*ne.value,y>c&&(y=c),Se.value=v,Math.abs(h-v)<a)break;h=v}return x.value=g,Z.value&&(n=Math.round(n),r=Math.round(r)),{x:n,y:r}}function se(e,l,a,o,i,u){const n=o+(0-a)*(u-o)/(i-a);if(n>=0&&n<=l&&a<=0)return[0,n];const r=o+(e-a)*(u-o)/(i-a);if(r>=0&&r<=l&&a>e)return[e,r];const c=a+(0-o)*(i-a)/(u-o);if(c>=0&&c<=e&&o<=0)return[c,0];const h=a+(l-o)*(i-a)/(u-o);if(h>=0&&h<=e&&o>l)return[h,l]}function xe(e,l,a){const{x:o,y:i,dx:u,dy:n}=a,r=Math.hypot(u,n);if(r===0)return 0;const c=u/r,h=n/r;return Math.abs(h*(e-o)-c*(l-i))}function De(e,l,a){const o=a.map(i=>xe(e,l,i));return Math.max(...o)}let de=-1;const U=R(()=>ie.value?{target:"#f00",fore:"#fff",grid:"#fff2",gridHigh:"#fff7",anchor:"#eee",anchorSelect:"#99f",anchorHover:"#9f9",anchorDisable:"#444"}:{target:"#f00",fore:"#000",grid:"#0002",gridHigh:"#0007",anchor:"#222",anchorSelect:"#22f",anchorHover:"#2f2",anchorDisable:"#bbb"});function Ie(e){if(!x.value||x.value.length===0)return;const l=ee.value;if(l===0)return;e.setLineDash([]),e.strokeStyle=U.value.fore,e.lineWidth=1,e.save(),e.translate(0,e.canvas.height-50);const a=l===1?n=>n:l===2?n=>Math.log(n):l===3?n=>Math.exp(n):l===-1?n=>1/n:n=>n,o=Math.max(...x.value.map(n=>a(n.error))),i=Math.min(...x.value.map(n=>a(n.error))),u=n=>(n-i)/(o-i);e.beginPath(),e.moveTo(0,50-u(a(x.value[0].error))*50),x.value.forEach((n,r)=>{e.lineTo(r*100/x.value.length,50-50*u(a(n.error)))}),e.stroke(),e.restore()}function Ae(e){e.setLineDash([]),e.strokeStyle=U.value.grid,e.lineWidth=1;const{scale:l,ox:a,oy:o}=d,i=Math.pow(2,Math.ceil(Math.log(100/l)/Math.log(2))),u=Math.ceil(-a/l/i)*i,n=Math.ceil(-o/l/i)*i;for(let r=u;r*l+a<e.canvas.width;r+=i)e.strokeStyle=r===0?U.value.gridHigh:U.value.grid,e.beginPath(),e.moveTo(r*l+a,0),e.lineTo(r*l+a,e.canvas.height),e.stroke();for(let r=n;r*l+o<e.canvas.height;r+=i)e.strokeStyle=r===0?U.value.gridHigh:U.value.grid,e.beginPath(),e.moveTo(0,r*l+o),e.lineTo(e.canvas.width,r*l+o),e.stroke();e.font="12px sans-serif",e.textAlign="right",e.fillStyle=U.value.fore,e.strokeStyle=U.value.fore,e.fillText(`${i}`,e.canvas.width-30,e.canvas.height-30),e.beginPath(),e.moveTo(e.canvas.width-20,e.canvas.height-30),e.lineTo(e.canvas.width-20,e.canvas.height-20),e.lineTo(e.canvas.width-20-i*l,e.canvas.height-20),e.lineTo(e.canvas.width-20-i*l,e.canvas.height-30),e.stroke()}function _e(){var h;const e=(h=Y.value)==null?void 0:h.getContext("2d");if(!e)return;e.clearRect(0,0,Y.value.width,Y.value.height),Ae(e),Ie(e),e.lineWidth=2;const{fore:l,anchor:a,anchorSelect:o,anchorHover:i,anchorDisable:u,target:n}=U.value;if(G.forEach(v=>{e.setLineDash([10,10]);let[y,g]=W(v.x,v.y);e.fillStyle=v.disabled?u:v===w.value?o:v===ve.value?i:a,e.strokeStyle=(v.disabled?u:v===V.value?o:v===fe.value?i:a)+"9";let T=!1;if(y<0||y>e.canvas.width||g<0||g>e.canvas.height){T=!0;const t=se(e.canvas.width,e.canvas.height,y,g,y+v.dx*1e4,g-v.dy*1e4);if(t)[y,g]=t;else return}e.beginPath(),e.moveTo(y,g),e.lineTo(y+v.dx*1e4,g-v.dy*1e4),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(y,g,5,0,2*Math.PI),T?e.stroke():e.fill()}),j.value){e.fillStyle=l,e.strokeStyle=l+"9",e.beginPath();for(let v=0;v<x.value.length-1;v++){const{x:y,y:g}=x.value[v],{x:T,y:t}=x.value[v+1],[N,M]=W(y,g),[re,C]=W(T,t);e.moveTo(N,M),e.lineTo(re,C)}e.stroke()}e.fillStyle=n,e.strokeStyle=n,e.lineWidth=2,e.beginPath();const[r,c]=W(A.value.x,A.value.y);e.arc(r,c,Ue.value*d.scale,0,2*Math.PI),e.moveTo(r-5,c),e.lineTo(r+5,c),e.moveTo(r,c-5),e.lineTo(r,c+5),e.stroke(),e.textAlign="center",e.font='20px "STIX Two Math", "Cambria Math", "Times New Roman", serif',e.fillText(`(${B(A.value.x)}, ${B(A.value.y)})`,r,c-10),Fe(),de=requestAnimationFrame(_e)}function me(e){const l=e.target.getBoundingClientRect(),a=e.clientX-l.left,o=e.clientY-l.top;return[a,o]}function ke(e,l){return[(e-d.ox)/d.scale,(-l+d.oy)/d.scale]}function W(e,l){return[e*d.scale+d.ox,-l*d.scale+d.oy]}function Ne([e,l],[a,o]){return Math.hypot(e-a,l-o)}const ve=b(void 0),fe=b(void 0),w=b(void 0),V=b(void 0),k=b(void 0);function Ee(e,l){return Q.value.find(a=>Ne(W(a.x,a.y),[e,l])<5)}function Te(e,l){const[a,o]=ke(e,l);return Q.value.find(i=>xe(a,o,i)*d.scale<5&&(a-i.x)*i.dx+(o-i.y)*i.dy>0)}function Le(e){k.value=me(e),w.value=Ee(k.value[0],k.value[1]),w.value?V.value=void 0:V.value=Te(k.value[0],k.value[1]),e.preventDefault()}function Ce(e){k.value=void 0,e.preventDefault()}function Pe(e){const[l,a]=me(e);if(k.value){const o=l-k.value[0],i=a-k.value[1];if(k.value=[l,a],w.value)w.value.x+=o/d.scale,w.value.y-=i/d.scale;else if(V.value){const[u,n]=ke(l,a);V.value.dx=u-V.value.x,V.value.dy=n-V.value.y;const r=Math.hypot(V.value.dx,V.value.dy);V.value.dx/=r,V.value.dy/=r}else d._ox=d.ox+=o,d._oy=d.oy+=i}else ve.value=Ee(l,a),fe.value=Te(l,a);e.preventDefault()}function Xe(e){const[l,a]=me(e),o=Math.exp(-e.deltaY/500);d._scale*=o,d._ox=l+(d._ox-l)*o,d._oy=a+(d._oy-a)*o,e.preventDefault()}function Fe(){d.scale=(d.scale+d._scale)/2,d.ox=(d.ox+d._ox)/2,d.oy=(d.oy+d._oy)/2}function Ye(e){}function Re(e){}const D=b({x:0,y:0,dx:0,dy:0}),G=Ke([{x:0,y:0,dx:1,dy:1},{x:1,y:0,dx:0,dy:1},{x:0,y:1,dx:1,dy:0}]),Q=R(()=>G.filter(e=>!e.disabled)),Be=R(()=>k.value?(w.value||w.value,"grabbing"):ve.value||fe.value?"grab":"default"),K=b(!1),Z=b(!1),j=b(!1),J=b(1),He=[{label:"None",value:0},{label:"Linear",value:1},{label:"Quadratic",value:2},{label:"Cubic",value:3},{label:"Quartic",value:4},{label:"Quintic",value:5},{label:"Inverse",value:-1}],ee=b(0),Oe=[{label:"Hide",value:0},{label:"Linear",value:1},{label:"Logarithmic",value:2},{label:"Exponential",value:3},{label:"Inverse",value:-1}],le=b(1e-9),te=b(100),ae=b(.1),oe=b(1.2),ne=b(.2),We=R(()=>x.value.length),Se=b(0),Ge=b(!1),A=vl(async e=>Ve(Q.value,ae.value,le.value,te.value,e),{x:1,y:1},Ge),x=b([]),Ue=R(()=>De(A.value.x,A.value.y,Q.value));return Ze(()=>{de=requestAnimationFrame(_e)}),je(()=>{cancelAnimationFrame(de)}),(e,l)=>{const a=$e,o=ze,i=tl,u=al,n=nl,r=il,c=rl,h=ol,v=dl,y=sl,g=ul,T=Je("auto-animate");return F(),z("div",pl,[p("canvas",{ref_key:"canvas",ref:Y,width:"800",height:"600",id:"canvas",onMousedown:Le,onMousemove:Pe,onMouseup:Ce,onWheel:Xe,onMouseleave:Re,onMouseenter:Ye},null,544),el((F(),we(g,{id:"controls"},{default:f(()=>[p("table",cl,[l[18]||(l[18]=p("thead",null,[p("tr",null,[p("th",null,"Points"),p("th",null,"x"),p("th",null,"y"),p("th",null,"dx"),p("th",null,"dy"),p("th")])],-1)),p("tbody",null,[(F(!0),z(ge,null,Me(m(G),(t,N)=>(F(),z("tr",{key:N},[p("td",null,[s(a,{modelValue:t.disabled,"onUpdate:modelValue":M=>t.disabled=M,label:N+1+(m(w)===t||m(V)==t?" ←":"")},null,8,["modelValue","onUpdate:modelValue","label"])]),p("td",null,[s(o,{modelValue:t.x,"onUpdate:modelValue":M=>t.x=M,"hide-eval":"",disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])]),p("td",null,[s(o,{modelValue:t.y,"onUpdate:modelValue":M=>t.y=M,"hide-eval":"",disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])]),p("td",null,[s(o,{modelValue:t.dx,"onUpdate:modelValue":M=>t.dx=M,"hide-eval":"",disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])]),p("td",null,[s(o,{modelValue:t.dy,"onUpdate:modelValue":M=>t.dy=M,"hide-eval":"",disabled:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])]),p("td",null,[s(i,{onClick:M=>m(G).splice(N,1)},{default:f(()=>l[15]||(l[15]=[_("x")])),_:2},1032,["onClick"])])]))),128)),p("tr",null,[l[17]||(l[17]=p("td",null,null,-1)),p("td",null,[s(o,{modelValue:m(D).x,"onUpdate:modelValue":l[0]||(l[0]=t=>m(D).x=t),"hide-eval":""},null,8,["modelValue"])]),p("td",null,[s(o,{modelValue:m(D).y,"onUpdate:modelValue":l[1]||(l[1]=t=>m(D).y=t),"hide-eval":""},null,8,["modelValue"])]),p("td",null,[s(o,{modelValue:m(D).dx,"onUpdate:modelValue":l[2]||(l[2]=t=>m(D).dx=t),"hide-eval":""},null,8,["modelValue"])]),p("td",null,[s(o,{modelValue:m(D).dy,"onUpdate:modelValue":l[3]||(l[3]=t=>m(D).dy=t),"hide-eval":""},null,8,["modelValue"])]),p("td",null,[s(i,{onClick:l[4]||(l[4]=t=>m(G).push({...m(D)}))},{default:f(()=>l[16]||(l[16]=[_("+")])),_:1})])])])]),m(K)?(F(),we(h,{key:0,"label-position":"top",inline:"",class:"px-2"},{default:f(()=>[s(n,{label:"Tolerance"},{default:f(()=>[s(u,{modelValue:m(le),"onUpdate:modelValue":l[5]||(l[5]=t=>S(le)?le.value=t:null),"controls-position":"right"},null,8,["modelValue"])]),_:1}),s(n,{label:"Max Iterations"},{default:f(()=>[s(u,{modelValue:m(te),"onUpdate:modelValue":l[6]||(l[6]=t=>S(te)?te.value=t:null),"controls-position":"right",min:1},null,8,["modelValue"])]),_:1}),s(n,{label:"Initial Learning Rate"},{default:f(()=>[s(u,{modelValue:m(ae),"onUpdate:modelValue":l[7]||(l[7]=t=>S(ae)?ae.value=t:null),"controls-position":"right",min:.01,step:.01},null,8,["modelValue"])]),_:1}),s(n,{label:"Reward Multiplier"},{default:f(()=>[s(u,{modelValue:m(oe),"onUpdate:modelValue":l[8]||(l[8]=t=>S(oe)?oe.value=t:null),"controls-position":"right",min:.01,step:.01},null,8,["modelValue"])]),_:1}),s(n,{label:"Error Multiplier"},{default:f(()=>[s(u,{modelValue:m(ne),"onUpdate:modelValue":l[9]||(l[9]=t=>S(ne)?ne.value=t:null),"controls-position":"right",min:.01,step:.01},null,8,["modelValue"])]),_:1}),s(n,{label:"Show Optimization Path"},{default:f(()=>[s(a,{modelValue:m(j),"onUpdate:modelValue":l[10]||(l[10]=t=>S(j)?j.value=t:null)},null,8,["modelValue"])]),_:1}),s(n,{label:"Round Target Number"},{default:f(()=>[s(a,{modelValue:m(Z),"onUpdate:modelValue":l[11]||(l[11]=t=>S(Z)?Z.value=t:null)},null,8,["modelValue"])]),_:1}),s(n,{label:"Distance Falloff"},{default:f(()=>[s(c,{modelValue:m(J),"onUpdate:modelValue":l[12]||(l[12]=t=>S(J)?J.value=t:null)},{default:f(()=>[(F(),z(ge,null,Me(He,t=>s(r,{key:t.label,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),s(n,{label:"Error Graph"},{default:f(()=>[s(c,{modelValue:m(ee),"onUpdate:modelValue":l[13]||(l[13]=t=>S(ee)?ee.value=t:null)},{default:f(()=>[(F(),z(ge,null,Me(Oe,t=>s(r,{key:t.label,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})):ll("",!0),s(y,{class:"margin-top px-2",title:"Results",border:""},{extra:f(()=>[s(a,{modelValue:m(K),"onUpdate:modelValue":l[14]||(l[14]=t=>S(K)?K.value=t:null),label:"Show options",size:"large"},null,8,["modelValue"])]),default:f(()=>[s(v,null,{label:f(()=>l[19]||(l[19]=[_("Iterations")])),default:f(()=>[_(" "+q(m(We)),1)]),_:1}),s(v,null,{label:f(()=>l[20]||(l[20]=[_("X")])),default:f(()=>[_(" "+q(("displayNumber"in e?e.displayNumber:m(B))(m(A).x)),1)]),_:1}),s(v,null,{label:f(()=>l[21]||(l[21]=[_("Y")])),default:f(()=>[_(" "+q(("displayNumber"in e?e.displayNumber:m(B))(m(A).y)),1)]),_:1}),s(v,null,{label:f(()=>l[22]||(l[22]=[_("Radius")])),default:f(()=>[_(" "+q(("displayNumber"in e?e.displayNumber:m(B))(m(Ue))),1)]),_:1}),s(v,null,{label:f(()=>l[23]||(l[23]=[_("Error")])),default:f(()=>[_(" "+q(("displayNumber"in e?e.displayNumber:m(B))(m(Se))),1)]),_:1})]),_:1})]),_:1})),[[T]])])}}}),et=fl(hl,[["__scopeId","data-v-9c39d8c7"]]);export{et as default};
