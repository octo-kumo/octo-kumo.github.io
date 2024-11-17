import{p as U}from"./C5h8eWMW.js";import{X as x,O as z,aB as j,D as q,q as X,r as Z,s as H,g as J,c as K,b as Q,_ as u,l as F,x as Y,d as tt,E as et,I as at,a5 as rt,k as nt}from"./CzqL-6Dm.js";import{p as it}from"./Vf0HcZSS.js";import{d as N}from"./DCRPYFOh.js";import{o as ot}from"./CmKTTxBW.js";import"./BlMXiA95.js";import"./C4iS2aBk.js";import"./DRZ6CRKx.js";import"./BrK4iiW6.js";import"./CKDq162n.js";import"./ClC25T94.js";import"./Bgv5iSwl.js";import"./qqpE3Jkn.js";import"./Cup1MIcW.js";import"./BfvkzjTO.js";import"./DfDcDbRt.js";import"./ZYYH-9fF.js";import"./Dd6ob3Dd.js";import"./DCTLXrZ8.js";import"./q6VJdRky.js";import"./Gi6I4Gst.js";function st(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,a=st,m=null,s=x(0),g=x(z),y=x(0);function i(e){var r,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),d;for(r=0;r<l;++r)(d=n[p[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?p.sort(function(S,D){return a(n[S],n[D])}):m!=null&&p.sort(function(S,D){return m(e[S],e[D])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)c=p[r],d=n[c],f=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:r,value:d,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:x(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:x(+e),i):s},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:x(+e),i):g},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:x(+e),i):y},i}var P=q.pie,G={sections:new Map,showData:!1,config:P},b=G.sections,O=G.showData,pt=structuredClone(P),ut=u(()=>structuredClone(pt),"getConfig"),gt=u(()=>{b=new Map,O=G.showData,Y()},"clear"),dt=u(({label:t,value:a})=>{b.has(t)||(b.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=u(()=>b,"getSections"),mt=u(t=>{O=t},"setShowData"),ht=u(()=>O,"getShowData"),R={getConfig:ut,clear:gt,setDiagramTitle:X,getDiagramTitle:Z,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:Q,addSection:dt,getSections:ft,setShowData:mt,getShowData:ht},vt=u((t,a)=>{U(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),St={parse:u(async t=>{const a=await it("pie",t);F.debug(a),vt(a,R)},"parse")},xt=u(t=>`
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
`,"getStyles"),yt=xt,At=u(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,g)=>g.value-s.value);return ct().value(s=>s.value)(a)},"createPieArcs"),wt=u((t,a,m,s)=>{F.debug(`rendering pie chart
`+t);const g=s.db,y=tt(),i=et(g.getConfig(),y.pie),e=40,r=18,l=4,c=450,A=c,h=at(a),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=y;let[v]=rt(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,f=Math.min(A,c)/2-e,T=N().innerRadius(0).outerRadius(f),$=N().innerRadius(f*w).outerRadius(f*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const d=g.getSections(),S=At(d),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],C=ot(D);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>C(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=r+l,_=E*C.domain().length/2,B=12*r,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",r).attr("height",r).style("fill",C).style("stroke",C),M.data(S).append("text").attr("x",r+l).attr("y",r-l).text(o=>{const{label:k,value:E}=o.data;return g.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),I=A+e+r+l+L;h.attr("viewBox",`0 0 ${I} ${c}`),nt(h,c,I,i.useMaxWidth)},"draw"),Dt={draw:wt},jt={parser:St,db:R,renderer:Dt,styles:yt};export{jt as diagram};
