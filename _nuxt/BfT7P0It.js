import{p as $}from"./DyQSu5zZ.js";import{_ as f,F as b,K as B,e as C,l as u,b as S,a as D,q as T,t as z,g as F,s as P,G as E,H as A,z as W}from"./tnid4nu6.js";import{p as _}from"./sjmdqzyH.js";import"./mpRoWkBO.js";import"./Cdy4ovlM.js";import"./CE1G-McA.js";import"./CXgh2bVR.js";import"./Yyn6T0bS.js";import"./DdjagA1o.js";import"./C4GAp2rc.js";import"./hWEbwS_-.js";import"./CJDp5IRJ.js";import"./CM9Vt25o.js";import"./CKYzR6Dw.js";import"./CZN8bR6y.js";import"./lEc_mr0M.js";import"./C8b4-tx9.js";import"./CNFK1gg8.js";import"./B2_D2k1b.js";import"./DkT7NeWS.js";import"./BB0Jf5Rn.js";import"./sgphqGV_.js";import"./F8doVSIJ.js";import"./DAWk-S9P.js";import"./Bsm-pjvr.js";import"./CSF8GnY5.js";import"./DCTLXrZ8.js";import"./CPeR6xjG.js";import"./DXTTfs9a.js";import"./B_H_Y9hy.js";var N=A.packet,w=class{constructor(){this.packet=[],this.setAccTitle=S,this.getAccTitle=D,this.setDiagramTitle=T,this.getDiagramTitle=z,this.getAccDescription=F,this.setAccDescription=P}static{f(this,"PacketDB")}getConfig(){const t=b({...N,...E().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){W(),this.packet=[]}},L=1e4,M=f((t,e)=>{$(t,e);let a=-1,o=[],n=1;const{bitsPerRow:l}=e.getConfig();for(let{start:r,end:s,bits:p,label:c}of t.blocks){if(r!==void 0&&s!==void 0&&s<r)throw new Error(`Packet block ${r} - ${s} is invalid. End must be greater than start.`);if(r??=a+1,r!==a+1)throw new Error(`Packet block ${r} - ${s??r} is not contiguous. It should start from ${a+1}.`);if(p===0)throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(s??=r+(p??1)-1,p??=s-r+1,a=s,u.debug(`Packet block ${r} - ${a} with label ${c}`);o.length<=l+1&&e.getPacket().length<L;){const[d,i]=Y({start:r,end:s,bits:p,label:c},n,l);if(o.push(d),d.end+1===n*l&&(e.pushWord(o),o=[],n++),!i)break;({start:r,end:s,bits:p,label:c}=i)}}e.pushWord(o)},"populate"),Y=f((t,e,a)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];const o=e*a-1,n=e*a;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),v={parser:{yy:void 0},parse:f(async t=>{const e=await _("packet",t),a=v.parser?.yy;if(!(a instanceof w))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");u.debug(e),M(e,a)},"parse")},G=f((t,e,a,o)=>{const n=o.db,l=n.getConfig(),{rowHeight:r,paddingY:s,bitWidth:p,bitsPerRow:c}=l,d=n.getPacket(),i=n.getDiagramTitle(),g=r+s,m=g*(d.length+1)-(i?0:r),h=p*c+2,k=B(e);k.attr("viewbox",`0 0 ${h} ${m}`),C(k,m,h,l.useMaxWidth);for(const[x,y]of d.entries())H(k,y,x,l);k.append("text").text(i).attr("x",h/2).attr("y",m-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),H=f((t,e,a,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:r,bitsPerRow:s,showBits:p})=>{const c=t.append("g"),d=a*(o+l)+l;for(const i of e){const g=i.start%s*r+1,m=(i.end-i.start+1)*r-n;if(c.append("rect").attr("x",g).attr("y",d).attr("width",m).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",g+m/2).attr("y",d+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!p)continue;const h=i.end===i.start,k=d-2;c.append("text").attr("x",g+(h?m/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(i.start),h||c.append("text").attr("x",g+m).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),I={draw:G},K={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},O=f(({packet:t}={})=>{const e=b(K,t);return`
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
	`},"styles"),xt={parser:v,get db(){return new w},renderer:I,styles:O};export{xt as diagram};
