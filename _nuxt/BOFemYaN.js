import{p as V}from"./BqIeXQ0V.js";import{Q as y,T as z,aB as U,_ as p,g as j,s as q,a as H,b as K,t as Q,q as Z,l as F,c as J,F as X,K as Y,a4 as tt,e as et,z as rt,H as at}from"./BoIIJtn6.js";import{p as nt}from"./BqUccjPw.js";import{d as P}from"./CrPdfxId.js";import{o as it}from"./DGBBJ9Xx.js";import"./LXL7uvHp.js";import"./_d1bhYXs.js";import"./Nth_on4f.js";import"./BjzR-c9I.js";import"./DK0vgvAI.js";import"./oqGv0BAX.js";import"./BgeFuXXA.js";import"./CEcP_S3v.js";import"./JLMW0jlx.js";import"./Dw4h6M6L.js";import"./DRQ7HjoI.js";import"./D3zPp1kl.js";import"./z1oEpn_z.js";import"./DHQVDzdN.js";import"./DcekSFII.js";import"./BUADUvnR.js";import"./Cfue6nRF.js";import"./www-n4PX.js";import"./C1Xa3YZ5.js";import"./BoRnL4ex.js";import"./BO9CTDv2.js";import"./Gi6I4Gst.js";function ot(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function st(t){return t}function lt(){var t=st,r=ot,f=null,s=y(0),u=y(z),x=y(0);function i(e){var a,l=(e=U(e)).length,g,A,h=0,c=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,u.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),d;for(a=0;a<l;++a)(d=n[c[a]=a]=+t(e[a],a,e))>0&&(h+=d);for(r!=null?c.sort(function(S,C){return r(n[S],n[C])}):f!=null&&c.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)g=c[a],d=n[g],m=v+(d>0?d*A:0)+$,n[g]={data:e[g],index:a,value:d,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),i):s},i.endAngle=function(e){return arguments.length?(u=typeof e=="function"?e:y(+e),i):u},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var ct=at.pie,G={sections:new Map,showData:!1},b=G.sections,W=G.showData,pt=structuredClone(ct),ut=p(()=>structuredClone(pt),"getConfig"),gt=p(()=>{b=new Map,W=G.showData,rt()},"clear"),dt=p(({label:t,value:r})=>{b.has(t)||(b.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=p(()=>b,"getSections"),ft=p(t=>{W=t},"setShowData"),ht=p(()=>W,"getShowData"),R={getConfig:ut,clear:gt,setDiagramTitle:Z,getDiagramTitle:Q,setAccTitle:K,getAccTitle:H,setAccDescription:q,getAccDescription:j,addSection:dt,getSections:mt,setShowData:ft,getShowData:ht},vt=p((t,r)=>{V(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:p(async t=>{const r=await nt("pie",t);F.debug(r),vt(r,R)},"parse")},yt=p(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=yt,At=p(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,u)=>u.value-s.value);return lt().value(s=>s.value)(r)},"createPieArcs"),wt=p((t,r,f,s)=>{F.debug(`rendering pie chart
`+t);const u=s.db,x=J(),i=X(u.getConfig(),x.pie),e=40,a=18,l=4,g=450,A=g,h=Y(r),c=h.append("g");c.attr("transform","translate("+A/2+","+g/2+")");const{themeVariables:n}=x;let[v]=tt(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,m=Math.min(A,g)/2-e,T=P().innerRadius(0).outerRadius(m),$=P().innerRadius(m*w).outerRadius(m*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=u.getSections(),S=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=it(C);c.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let N=0;d.forEach(o=>{N+=o}),c.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/N*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(u.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const M=c.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,L=E*D.domain().length/2,_=12*a,B=k*E-L;return"translate("+_+","+B+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return u.getShowData()?`${k} [${E}]`:k});const I=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),O=A+e+a+l+I;h.attr("viewBox",`0 0 ${O} ${g}`),et(h,g,O,i.useMaxWidth)},"draw"),Ct={draw:wt},Jt={parser:St,db:R,renderer:Ct,styles:xt};export{Jt as diagram};
