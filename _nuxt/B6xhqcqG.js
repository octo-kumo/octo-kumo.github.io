import{p as U}from"./BbvSaUr0.js";import{X as x,O as z,aB as j,D as q,q as X,r as Z,s as H,g as J,c as K,b as Q,_ as p,l as F,x as Y,d as tt,E as et,I as rt,a5 as at,k as nt}from"./BoCxxQ3L.js";import{p as it}from"./Dl1gaYQ2.js";import{d as N}from"./6mLYV28A.js";import{o as ot}from"./DGBBJ9Xx.js";import"./D_GclKcP.js";import"./C4iS2aBk.js";import"./B5RytbhN.js";import"./CJXeFow7.js";import"./D6GlCOm4.js";import"./B74hVbIL.js";import"./LuCfOQE0.js";import"./D7klEWs7.js";import"./Jc5C1Kg4.js";import"./DO10cuB9.js";import"./BOl3kuLo.js";import"./CubguMkk.js";import"./DHEbtHVK.js";import"./DCOCEZeX.js";import"./dL9BYKKD.js";import"./BUADUvnR.js";import"./COTOvdXe.js";import"./D1iqqcw8.js";import"./Bj-vMDYg.js";import"./CgCjAeaF.js";import"./DGIrYYdC.js";import"./Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,s=x(0),u=x(z),y=x(0);function i(e){var a,l=(e=j(e)).length,g,A,h=0,c=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,u.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),d;for(a=0;a<l;++a)(d=n[c[a]=a]=+t(e[a],a,e))>0&&(h+=d);for(r!=null?c.sort(function(S,D){return r(n[S],n[D])}):f!=null&&c.sort(function(S,D){return f(e[S],e[D])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)g=c[a],d=n[g],m=v+(d>0?d*A:0)+$,n[g]={data:e[g],index:a,value:d,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:x(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:x(+e),i):s},i.endAngle=function(e){return arguments.length?(u=typeof e=="function"?e:x(+e),i):u},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:x(+e),i):y},i}var P=q.pie,G={sections:new Map,showData:!1,config:P},b=G.sections,O=G.showData,pt=structuredClone(P),ut=p(()=>structuredClone(pt),"getConfig"),gt=p(()=>{b=new Map,O=G.showData,Y()},"clear"),dt=p(({label:t,value:r})=>{b.has(t)||(b.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=p(()=>b,"getSections"),ft=p(t=>{O=t},"setShowData"),ht=p(()=>O,"getShowData"),R={getConfig:ut,clear:gt,setDiagramTitle:X,getDiagramTitle:Z,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:Q,addSection:dt,getSections:mt,setShowData:ft,getShowData:ht},vt=p((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:p(async t=>{const r=await it("pie",t);F.debug(r),vt(r,R)},"parse")},xt=p(t=>`
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
`,"getStyles"),yt=xt,At=p(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,u)=>u.value-s.value);return ct().value(s=>s.value)(r)},"createPieArcs"),wt=p((t,r,f,s)=>{F.debug(`rendering pie chart
`+t);const u=s.db,y=tt(),i=et(u.getConfig(),y.pie),e=40,a=18,l=4,g=450,A=g,h=rt(r),c=h.append("g");c.attr("transform","translate("+A/2+","+g/2+")");const{themeVariables:n}=y;let[v]=at(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,m=Math.min(A,g)/2-e,T=N().innerRadius(0).outerRadius(m),$=N().innerRadius(m*w).outerRadius(m*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=u.getSections(),S=At(d),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],C=ot(D);c.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>C(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),c.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(u.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const M=c.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,_=E*C.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",C).style("stroke",C),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return u.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),I=A+e+a+l+L;h.attr("viewBox",`0 0 ${I} ${g}`),nt(h,g,I,i.useMaxWidth)},"draw"),Dt={draw:wt},Kt={parser:St,db:R,renderer:Dt,styles:yt};export{Kt as diagram};
