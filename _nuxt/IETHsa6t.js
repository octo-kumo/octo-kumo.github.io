import{p as U}from"./BjiKSaz_.js";import{W as y,N as z,aC as j,B as q,q as H,r as Z,s as J,g as K,c as Q,b as X,_ as u,l as W,v as Y,d as tt,D as et,H as rt,a4 as at,k as nt}from"./DfkPrEOB.js";import{p as it}from"./ZeQyJd4W.js";import{d as P}from"./DDXLJwDy.js";import{o as ot}from"./CmKTTxBW.js";import"./DKRsGe4U.js";import"./DgF9Ho0F.js";import"./WhP4ilLr.js";import"./CWRPoYok.js";import"./BOk0PHzV.js";import"./BgtVKjOA.js";import"./DMUd3VBJ.js";import"./ZiZ7jz99.js";import"./CF4NDZhU.js";import"./CZxG4SNE.js";import"./TamtZ0p0.js";import"./0G4POCNr.js";import"./Csk1gOs1.js";import"./B983dWA5.js";import"./EJN80lB5.js";import"./_nJOPZk2.js";import"./DCTLXrZ8.js";import"./DISRZcxO.js";import"./DARtUfGe.js";import"./Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,s=y(0),g=y(z),x=y(0);function i(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),d;for(a=0;a<l;++a)(d=n[p[a]=a]=+t(e[a],a,e))>0&&(h+=d);for(r!=null?p.sort(function(S,C){return r(n[S],n[C])}):f!=null&&p.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)c=p[a],d=n[c],m=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:a,value:d,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),i):s},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:y(+e),i):g},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var R=q.pie,F={sections:new Map,showData:!1,config:R},b=F.sections,G=F.showData,pt=structuredClone(R),ut=u(()=>structuredClone(pt),"getConfig"),gt=u(()=>{b=new Map,G=F.showData,Y()},"clear"),dt=u(({label:t,value:r})=>{b.has(t)||(b.set(t,r),W.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=u(()=>b,"getSections"),ft=u(t=>{G=t},"setShowData"),ht=u(()=>G,"getShowData"),I={getConfig:ut,clear:gt,setDiagramTitle:H,getDiagramTitle:Z,setAccTitle:J,getAccTitle:K,setAccDescription:Q,getAccDescription:X,addSection:dt,getSections:mt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await it("pie",t);W.debug(r),vt(r,I)},"parse")},yt=u(t=>`
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
`,"getStyles"),xt=yt,At=u(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,g)=>g.value-s.value);return ct().value(s=>s.value)(r)},"createPieArcs"),wt=u((t,r,f,s)=>{W.debug(`rendering pie chart
`+t);const g=s.db,x=tt(),i=et(g.getConfig(),x.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=at(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,m=Math.min(A,c)/2-e,T=P().innerRadius(0).outerRadius(m),$=P().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=g.getSections(),S=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=ot(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let N=0;d.forEach(o=>{N+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/N*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,_=E*D.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return g.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),O=A+e+a+l+L;h.attr("viewBox",`0 0 ${O} ${c}`),nt(h,c,O,i.useMaxWidth)},"draw"),Ct={draw:wt},Jt={parser:St,db:I,renderer:Ct,styles:xt};export{Jt as diagram};
