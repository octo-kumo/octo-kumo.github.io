import{p as U}from"./zYugH3yH.js";import{Y as y,P as z,aA as j,F as q,q as K,r as Y,s as Z,g as H,c as J,b as Q,_ as u,l as F,t as X,d as tt,G as et,K as rt,a6 as at,k as nt}from"./Dpl7hbrL.js";import{p as it}from"./B-Yt_IL3.js";import{d as O}from"./Dv-kovTR.js";import{o as ot}from"./CmKTTxBW.js";import"./CsvATlju.js";import"./BZsX-yCj.js";import"./D70DCOjy.js";import"./BfkbtR8K.js";import"./DuQqlw6P.js";import"./B44WXdQh.js";import"./-ZFv5seF.js";import"./BgKRs-ya.js";import"./DDJjB8hk.js";import"./Dcvik29X.js";import"./DQQMB3ep.js";import"./Cnskxo6Y.js";import"./CY_mrLdu.js";import"./CZ0t33uz.js";import"./uSqNpy6H.js";import"./BokCjatX.js";import"./DCTLXrZ8.js";import"./CUCfN8kI.js";import"./DbgZPSTI.js";import"./Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,s=y(0),g=y(z),x=y(0);function i(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),d;for(a=0;a<l;++a)(d=n[p[a]=a]=+t(e[a],a,e))>0&&(h+=d);for(r!=null?p.sort(function(S,C){return r(n[S],n[C])}):f!=null&&p.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)c=p[a],d=n[c],m=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:a,value:d,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),i):s},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:y(+e),i):g},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var R=q.pie,G={sections:new Map,showData:!1,config:R},b=G.sections,P=G.showData,pt=structuredClone(R),ut=u(()=>structuredClone(pt),"getConfig"),gt=u(()=>{b=new Map,P=G.showData,X()},"clear"),dt=u(({label:t,value:r})=>{b.has(t)||(b.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=u(()=>b,"getSections"),ft=u(t=>{P=t},"setShowData"),ht=u(()=>P,"getShowData"),I={getConfig:ut,clear:gt,setDiagramTitle:K,getDiagramTitle:Y,setAccTitle:Z,getAccTitle:H,setAccDescription:J,getAccDescription:Q,addSection:dt,getSections:mt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await it("pie",t);F.debug(r),vt(r,I)},"parse")},yt=u(t=>`
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
`,"getStyles"),xt=yt,At=u(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,g)=>g.value-s.value);return ct().value(s=>s.value)(r)},"createPieArcs"),wt=u((t,r,f,s)=>{F.debug(`rendering pie chart
`+t);const g=s.db,x=tt(),i=et(g.getConfig(),x.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=at(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,m=Math.min(A,c)/2-e,T=O().innerRadius(0).outerRadius(m),$=O().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=g.getSections(),S=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=ot(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,_=E*D.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return g.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),N=A+e+a+l+L;h.attr("viewBox",`0 0 ${N} ${c}`),nt(h,c,N,i.useMaxWidth)},"draw"),Ct={draw:wt},Zt={parser:St,db:I,renderer:Ct,styles:xt};export{Zt as diagram};
