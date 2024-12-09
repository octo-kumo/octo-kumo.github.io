import{p as U}from"./-7XCsTxZ.js";import{X as x,O as z,aB as j,D as q,q as X,r as Z,s as H,g as J,c as K,b as Q,_ as u,l as F,x as Y,d as tt,E as et,I as rt,a5 as at,k as nt}from"./yJgoCiK7.js";import{p as it}from"./cYSkjJqs.js";import{d as N}from"./DR_-uomu.js";import{o as ot}from"./CmKTTxBW.js";import"./DAx6CmOR.js";import"./C4iS2aBk.js";import"./CVJrpFk5.js";import"./BXHGET7W.js";import"./Cx3R49rL.js";import"./DGFotipw.js";import"./D33LOrzc.js";import"./lduty4hm.js";import"./BM3JnPBI.js";import"./DJQDocfM.js";import"./CrRdpDUp.js";import"./B4pi8pBq.js";import"./BG6VdbNM.js";import"./pKoeM8sJ.js";import"./V_E7-OXs.js";import"./Cr89ow1U.js";import"./DVOBuKWs.js";import"./DCTLXrZ8.js";import"./DyL3GEIk.js";import"./DX8Hub_t.js";import"./Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,s=x(0),g=x(z),y=x(0);function i(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),m,T=Math.min(Math.abs(w)/l,y.apply(this,arguments)),$=T*(w<0?-1:1),d;for(a=0;a<l;++a)(d=n[p[a]=a]=+t(e[a],a,e))>0&&(h+=d);for(r!=null?p.sort(function(S,D){return r(n[S],n[D])}):f!=null&&p.sort(function(S,D){return f(e[S],e[D])}),a=0,A=h?(w-l*$)/h:0;a<l;++a,v=m)c=p[a],d=n[c],m=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:a,value:d,startAngle:v,endAngle:m,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:x(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,f=null,i):r},i.sort=function(e){return arguments.length?(f=e,r=null,i):f},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:x(+e),i):s},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:x(+e),i):g},i.padAngle=function(e){return arguments.length?(y=typeof e=="function"?e:x(+e),i):y},i}var P=q.pie,G={sections:new Map,showData:!1,config:P},b=G.sections,O=G.showData,pt=structuredClone(P),ut=u(()=>structuredClone(pt),"getConfig"),gt=u(()=>{b=new Map,O=G.showData,Y()},"clear"),dt=u(({label:t,value:r})=>{b.has(t)||(b.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=u(()=>b,"getSections"),ft=u(t=>{O=t},"setShowData"),ht=u(()=>O,"getShowData"),R={getConfig:ut,clear:gt,setDiagramTitle:X,getDiagramTitle:Z,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:Q,addSection:dt,getSections:mt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await it("pie",t);F.debug(r),vt(r,R)},"parse")},xt=u(t=>`
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
`,"getStyles"),yt=xt,At=u(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,g)=>g.value-s.value);return ct().value(s=>s.value)(r)},"createPieArcs"),wt=u((t,r,f,s)=>{F.debug(`rendering pie chart
`+t);const g=s.db,y=tt(),i=et(g.getConfig(),y.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=y;let[v]=at(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,m=Math.min(A,c)/2-e,T=N().innerRadius(0).outerRadius(m),$=N().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=g.getSections(),S=At(d),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],C=ot(D);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>C(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,_=E*C.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",C).style("stroke",C),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return g.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),I=A+e+a+l+L;h.attr("viewBox",`0 0 ${I} ${c}`),nt(h,c,I,i.useMaxWidth)},"draw"),Dt={draw:wt},Jt={parser:St,db:R,renderer:Dt,styles:yt};export{Jt as diagram};
