import{Q as S,T as F,aF as j,g as q,s as H,a as Q,b as Z,t as J,q as K,_ as u,l as z,c as X,G as Y,L as tt,a4 as et,e as rt,A as at,H as it}from"./D0B2v4KU.js";import{p as nt}from"./CUrrYq-e.js";import{p as ot}from"./Cnwgl51L.js";import{d as R}from"./BBolTj42.js";import{o as st}from"./CmKTTxBW.js";import"#entry";import"./BG2W1alK.js";import"./CYucGxra.js";import"./DsqdWQfm.js";import"./D04epWVV.js";import"./DPLKEboB.js";import"./C6tRxFGw.js";import"./BdKzFvfe.js";import"./Cx6j0l_X.js";import"./xo7Mu9T6.js";import"./CaBAFN7Q.js";import"./09WRq2xb.js";import"./DNmnOMAO.js";import"./BSj5lt8-.js";import"./D0SfNRIB.js";import"./4A6e_f4x.js";import"./F8doVSIJ.js";import"./BmdLhGoi.js";import"./BTXB0l5x.js";import"./CQLLzJbY.js";import"./Bu7joISz.js";import"./DCTLXrZ8.js";import"./BzQci0uJ.js";import"./DXTTfs9a.js";import"./DeuGR4Nq.js";import"./Gi6I4Gst.js";function lt(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,r=lt,m=null,x=S(0),o=S(F),l=S(0);function s(e){var i,c=(e=j(e)).length,d,y,h=0,p=new Array(c),n=new Array(c),v=+x.apply(this,arguments),A=Math.min(F,Math.max(-F,o.apply(this,arguments)-v)),f,C=Math.min(Math.abs(A)/c,l.apply(this,arguments)),$=C*(A<0?-1:1),g;for(i=0;i<c;++i)(g=n[p[i]=i]=+t(e[i],i,e))>0&&(h+=g);for(r!=null?p.sort(function(w,D){return r(n[w],n[D])}):m!=null&&p.sort(function(w,D){return m(e[w],e[D])}),i=0,y=h?(A-c*$)/h:0;i<c;++i,v=f)d=p[i],g=n[d],f=v+(g>0?g*y:0)+$,n[d]={data:e[d],index:i,value:g,startAngle:v,endAngle:f,padAngle:C};return n}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(r=e,m=null,s):r},s.sort=function(e){return arguments.length?(m=e,r=null,s):m},s.startAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),s):x},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),s):l},s}var ut=it.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,dt=structuredClone(ut),gt=u(()=>structuredClone(dt),"getConfig"),mt=u(()=>{T=new Map,N=G.showData,at()},"clear"),ft=u(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,r),z.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),ht=u(()=>T,"getSections"),vt=u(t=>{N=t},"setShowData"),St=u(()=>N,"getShowData"),I={getConfig:gt,clear:mt,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:Z,getAccTitle:Q,setAccDescription:H,getAccDescription:q,addSection:ft,getSections:ht,setShowData:vt,getShowData:St},xt=u((t,r)=>{nt(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),yt={parse:u(async t=>{const r=await ot("pie",t);z.debug(r),xt(r,I)},"parse")},At=u(t=>`
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
`,"getStyles"),wt=At,Dt=u(t=>{const r=[...t.values()].reduce((o,l)=>o+l,0),m=[...t.entries()].map(([o,l])=>({label:o,value:l})).filter(o=>o.value/r*100>=1).sort((o,l)=>l.value-o.value);return pt().value(o=>o.value)(m)},"createPieArcs"),Ct=u((t,r,m,x)=>{z.debug(`rendering pie chart
`+t);const o=x.db,l=X(),s=Y(o.getConfig(),l.pie),e=40,i=18,c=4,d=450,y=d,h=tt(r),p=h.append("g");p.attr("transform","translate("+y/2+","+d/2+")");const{themeVariables:n}=l;let[v]=et(n.pieOuterStrokeWidth);v??=2;const A=s.textPosition,f=Math.min(y,d)/2-e,C=R().innerRadius(0).outerRadius(f),$=R().innerRadius(f*A).outerRadius(f*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const g=o.getSections(),w=Dt(g),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let b=0;g.forEach(a=>{b+=a});const W=w.filter(a=>(a.data.value/b*100).toFixed(0)!=="0"),E=st(D);p.selectAll("mySlices").data(W).enter().append("path").attr("d",C).attr("fill",a=>E(a.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(W).enter().append("text").text(a=>(a.data.value/b*100).toFixed(0)+"%").attr("transform",a=>"translate("+$.centroid(a)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const L=[...g.entries()].map(([a,M])=>({label:a,value:M})),k=p.selectAll(".legend").data(L).enter().append("g").attr("class","legend").attr("transform",(a,M)=>{const P=i+c,B=P*L.length/2,V=12*i,U=M*P-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",i).attr("height",i).style("fill",a=>E(a.label)).style("stroke",a=>E(a.label)),k.append("text").attr("x",i+c).attr("y",i-c).text(a=>o.getShowData()?`${a.label} [${a.value}]`:a.label);const _=Math.max(...k.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0)),O=y+e+i+c+_;h.attr("viewBox",`0 0 ${O} ${d}`),rt(h,d,O,s.useMaxWidth)},"draw"),$t={draw:Ct},ae={parser:yt,db:I,renderer:$t,styles:wt};export{ae as diagram};
