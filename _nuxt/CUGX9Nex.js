import{p as w}from"./B6Fv0yz9.js";import{_ as l,s as B,g as S,t as F,q as z,a as P,b as W,F as v,K as T,e as D,z as _,G as A,H as E,l as x}from"./C8uGoniy.js";import{p as N}from"./BagG-51S.js";import"./DuxNVKiY.js";import"./BeEOpU2C.js";import"./D6-XlEtG.js";import"./BP0M__qm.js";import"./BaVB4moD.js";import"./BAblb92v.js";import"./CF4AZrVg.js";import"./M5CLjTlf.js";import"./CdXGkol-.js";import"./DKRRhI6-.js";import"./Bnburym6.js";import"./DFXTEiXb.js";import"./CQwLbTXd.js";import"./DKKT2f7I.js";import"./CO0Tb179.js";import"./BFckfnQp.js";import"./H26RDiOy.js";import"./DeWkCW4b.js";import"./DCTLXrZ8.js";import"./CJf9C9-S.js";import"./Bplnhabi.js";var C={packet:[]},h=structuredClone(C),L=E.packet,Y=l(()=>{const t=v({...L,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=l(()=>h.packet,"getPacket"),H=l(t=>{t.length>0&&h.packet.push(t)},"pushWord"),I=l(()=>{_(),h=structuredClone(C)},"clear"),u={pushWord:H,getPacket:G,getConfig:Y,clear:I,setAccTitle:W,getAccTitle:P,setDiagramTitle:z,getDiagramTitle:F,getAccDescription:S,setAccDescription:B},K=1e4,M=l(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:d}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${d}`);o.length<=s+1&&u.getPacket().length<K;){const[f,c]=O({start:a,end:r,label:d},n,s);if(o.push(f),f.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:d}=c)}}u.pushWord(o)},"populate"),O=l((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),q={parse:l(async t=>{const e=await N("packet",t);x.debug(e),M(e)},"parse")},R=l((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:d,bitWidth:f,bitsPerRow:c}=a,b=s.getPacket(),i=s.getDiagramTitle(),g=r+d,p=g*(b.length+1)-(i?0:r),k=f*c+2,m=T(e);m.attr("viewbox",`0 0 ${k} ${p}`),D(m,p,k,a.useMaxWidth);for(const[$,y]of b.entries())U(m,y,$,a);m.append("text").text(i).attr("x",k/2).attr("y",p-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=l((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:f})=>{const c=t.append("g"),b=o*(n+a)+a;for(const i of e){const g=i.start%d*r+1,p=(i.end-i.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",p).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+p/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!f)continue;const k=i.end===i.start,m=b-2;c.append("text").attr("x",g+(k?p/2:0)).attr("y",m).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",g+p).attr("y",m).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=v(j,t);return`
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
	`},"styles"),Ct={parser:q,db:u,renderer:X,styles:J};export{Ct as diagram};
