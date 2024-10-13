import{p as w}from"./B0HKo6JW.js";import{B,s as S,g as F,q as z,r as P,b as W,c as D,_ as l,l as v,D as x,E as T,v as E,H as _,k as A}from"./BfRb9L3b.js";import{p as N}from"./xt2YUnc-.js";import"./DxdssFWe.js";import"./--4eJNYt.js";import"./I0OoVgFz.js";import"./DM0PkeSN.js";import"./CDDg53Uh.js";import"./B-5ivAzT.js";import"./B0-eZVxq.js";import"./B-hF4-Y2.js";import"./BvIS2Fq4.js";import"./DtU_KTZ2.js";import"./fQrkYjFw.js";import"./B0mnpefN.js";import"./BUO6HWmY.js";import"./Ch9NWHGc.js";import"./CzxGOp7X.js";import"./CGOd4zVy.js";import"./DCTLXrZ8.js";import"./DiMuYZal.js";import"./C151KBPy.js";var C={packet:[]},h=structuredClone(C),L=B.packet,Y=l(()=>{const t=x({...L,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),H=l(()=>h.packet,"getPacket"),I=l(t=>{t.length>0&&h.packet.push(t)},"pushWord"),M=l(()=>{E(),h=structuredClone(C)},"clear"),u={pushWord:I,getPacket:H,getConfig:Y,clear:M,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:D},O=1e4,q=l(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,v.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<O;){const[m,c]=G({start:a,end:r,label:p},n,s);if(o.push(m),m.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),G=l((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:l(async t=>{const e=await N("packet",t);v.debug(e),q(e)},"parse")},R=l((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:c}=a,b=s.getPacket(),i=s.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(i?0:r),k=m*c+2,f=_(e);f.attr("viewbox",`0 0 ${k} ${d}`),A(f,d,k,a.useMaxWidth);for(const[$,y]of b.entries())U(f,y,$,a);f.append("text").text(i).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=l((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{const c=t.append("g"),b=o*(n+a)+a;for(const i of e){const g=i.start%p*r+1,d=(i.end-i.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!m)continue;const k=i.end===i.start,f=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=x(j,t);return`
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
