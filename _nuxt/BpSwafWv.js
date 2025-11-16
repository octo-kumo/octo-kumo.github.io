import{p as j}from"./Cd-ChnAt.js";import{Q as S,T as z,aC as q,_ as u,g as H,s as K,a as Q,b as Z,t as J,q as X,l as F,c as Y,F as tt,K as et,a4 as rt,e as at,z as it,H as nt}from"./DvPxZ_1B.js";import{p as ot}from"./CNDjzAve.js";import{d as I}from"./BwRmVHYx.js";import{o as st}from"./CmKTTxBW.js";import"./BuICEgOE.js";import"./Cdy4ovlM.js";import"./CE1G-McA.js";import"./DGHzHT3a.js";import"./xtWw6Wzo.js";import"./Dzac1oxZ.js";import"./Bl8XcKwz.js";import"./CM4f_-Vl.js";import"./BgdxqH9p.js";import"./B30qYD90.js";import"./CBgCChIc.js";import"./DkiyPiMI.js";import"./lkZNKY1j.js";import"./BUOFL-6j.js";import"./Be6CvgVu.js";import"./DpNtA3f6.js";import"./BqV6_I8w.js";import"./DicKxzT2.js";import"./DT0gADSm.js";import"./F8doVSIJ.js";import"./BJ3oLy3m.js";import"./DSxtO90N.js";import"./CexQJz7n.js";import"./DCTLXrZ8.js";import"./CshZ0bwa.js";import"./DXTTfs9a.js";import"./BvTWaWQh.js";import"./Gi6I4Gst.js";function lt(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,r=lt,m=null,x=S(0),o=S(z),l=S(0);function s(e){var i,c=(e=q(e)).length,d,y,h=0,p=new Array(c),n=new Array(c),v=+x.apply(this,arguments),w=Math.min(z,Math.max(-z,o.apply(this,arguments)-v)),f,D=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=D*(w<0?-1:1),g;for(i=0;i<c;++i)(g=n[p[i]=i]=+t(e[i],i,e))>0&&(h+=g);for(r!=null?p.sort(function(A,C){return r(n[A],n[C])}):m!=null&&p.sort(function(A,C){return m(e[A],e[C])}),i=0,y=h?(w-c*$)/h:0;i<c;++i,v=f)d=p[i],g=n[d],f=v+(g>0?g*y:0)+$,n[d]={data:e[d],index:i,value:g,startAngle:v,endAngle:f,padAngle:D};return n}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(r=e,m=null,s):r},s.sort=function(e){return arguments.length?(m=e,r=null,s):m},s.startAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),s):x},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),s):l},s}var ut=nt.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,dt=structuredClone(ut),gt=u(()=>structuredClone(dt),"getConfig"),mt=u(()=>{T=new Map,N=G.showData,it()},"clear"),ft=u(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),ht=u(()=>T,"getSections"),vt=u(t=>{N=t},"setShowData"),St=u(()=>N,"getShowData"),L={getConfig:gt,clear:mt,setDiagramTitle:X,getDiagramTitle:J,setAccTitle:Z,getAccTitle:Q,setAccDescription:K,getAccDescription:H,addSection:ft,getSections:ht,setShowData:vt,getShowData:St},xt=u((t,r)=>{j(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),yt={parse:u(async t=>{const r=await ot("pie",t);F.debug(r),xt(r,L)},"parse")},wt=u(t=>`
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
`,"getStyles"),At=wt,Ct=u(t=>{const r=[...t.values()].reduce((o,l)=>o+l,0),m=[...t.entries()].map(([o,l])=>({label:o,value:l})).filter(o=>o.value/r*100>=1).sort((o,l)=>l.value-o.value);return pt().value(o=>o.value)(m)},"createPieArcs"),Dt=u((t,r,m,x)=>{F.debug(`rendering pie chart
`+t);const o=x.db,l=Y(),s=tt(o.getConfig(),l.pie),e=40,i=18,c=4,d=450,y=d,h=et(r),p=h.append("g");p.attr("transform","translate("+y/2+","+d/2+")");const{themeVariables:n}=l;let[v]=rt(n.pieOuterStrokeWidth);v??=2;const w=s.textPosition,f=Math.min(y,d)/2-e,D=I().innerRadius(0).outerRadius(f),$=I().innerRadius(f*w).outerRadius(f*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const g=o.getSections(),A=Ct(g),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let b=0;g.forEach(a=>{b+=a});const W=A.filter(a=>(a.data.value/b*100).toFixed(0)!=="0"),E=st(C);p.selectAll("mySlices").data(W).enter().append("path").attr("d",D).attr("fill",a=>E(a.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(W).enter().append("text").text(a=>(a.data.value/b*100).toFixed(0)+"%").attr("transform",a=>"translate("+$.centroid(a)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=[...g.entries()].map(([a,M])=>({label:a,value:M})),k=p.selectAll(".legend").data(O).enter().append("g").attr("class","legend").attr("transform",(a,M)=>{const R=i+c,B=R*O.length/2,V=12*i,U=M*R-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",i).attr("height",i).style("fill",a=>E(a.label)).style("stroke",a=>E(a.label)),k.append("text").attr("x",i+c).attr("y",i-c).text(a=>o.getShowData()?`${a.label} [${a.value}]`:a.label);const _=Math.max(...k.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0)),P=y+e+i+c+_;h.attr("viewBox",`0 0 ${P} ${d}`),at(h,d,P,s.useMaxWidth)},"draw"),$t={draw:Dt},ne={parser:yt,db:L,renderer:$t,styles:At};export{ne as diagram};
