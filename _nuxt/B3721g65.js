import{p as w}from"./p9ROhXE0.js";import{D as B,s as S,g as F,q as z,r as P,b as W,c as D,_ as l,l as x,E as v,F as T,x as E,I as _,k as A}from"./CU8WYn1y.js";import{p as N}from"./B2l9pAcJ.js";import"./BIQaU2yh.js";import"./C4iS2aBk.js";import"./CT6dtn43.js";import"./DneOjruf.js";import"./BNH4XEjX.js";import"./-Rr8sOVk.js";import"./BPKSlL6p.js";import"./Cq5tzaQJ.js";import"./tYlYYpM9.js";import"./Ctpmoe4T.js";import"./BjMlx0Wm.js";import"./C4Z_3PCG.js";import"./DxUACKwI.js";import"./CvELJYum.js";import"./D6i80x35.js";import"./O0TiPg7Y.js";import"./D15tg53f.js";import"./DCTLXrZ8.js";import"./DanltmXI.js";import"./5Ho4Xj6r.js";var C={packet:[]},h=structuredClone(C),I=B.packet,L=l(()=>{const t=v({...I,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=l(()=>h.packet,"getPacket"),M=l(t=>{t.length>0&&h.packet.push(t)},"pushWord"),O=l(()=>{E(),h=structuredClone(C)},"clear"),u={pushWord:M,getPacket:Y,getConfig:L,clear:O,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:D},q=1e4,G=l(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<q;){const[f,c]=H({start:a,end:r,label:p},n,s);if(o.push(f),f.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),H=l((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:l(async t=>{const e=await N("packet",t);x.debug(e),G(e)},"parse")},R=l((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:f,bitsPerRow:c}=a,b=s.getPacket(),i=s.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(i?0:r),k=f*c+2,m=_(e);m.attr("viewbox",`0 0 ${k} ${d}`),A(m,d,k,a.useMaxWidth);for(const[$,y]of b.entries())U(m,y,$,a);m.append("text").text(i).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=l((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:f})=>{const c=t.append("g"),b=o*(n+a)+a;for(const i of e){const g=i.start%p*r+1,d=(i.end-i.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!f)continue;const k=i.end===i.start,m=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",m).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",g+d).attr("y",m).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),vt={parser:K,db:u,renderer:X,styles:J};export{vt as diagram};
