import{_ as f,G as b,L as $,e as B,l as u,b as C,a as S,q as D,t as T,g as P,s as z,H as A,I as E,A as F}from"./D0B2v4KU.js";import{p as W}from"./CUrrYq-e.js";import{p as _}from"./Cnwgl51L.js";import"#entry";import"./BG2W1alK.js";import"./CYucGxra.js";import"./DsqdWQfm.js";import"./D04epWVV.js";import"./DPLKEboB.js";import"./C6tRxFGw.js";import"./BdKzFvfe.js";import"./Cx6j0l_X.js";import"./xo7Mu9T6.js";import"./CaBAFN7Q.js";import"./09WRq2xb.js";import"./DNmnOMAO.js";import"./BSj5lt8-.js";import"./D0SfNRIB.js";import"./4A6e_f4x.js";import"./F8doVSIJ.js";import"./BmdLhGoi.js";import"./BTXB0l5x.js";import"./CQLLzJbY.js";import"./Bu7joISz.js";import"./DCTLXrZ8.js";import"./BzQci0uJ.js";import"./DXTTfs9a.js";import"./DeuGR4Nq.js";var L=A.packet,w=class{constructor(){this.packet=[],this.setAccTitle=C,this.getAccTitle=S,this.setDiagramTitle=D,this.getDiagramTitle=T,this.getAccDescription=P,this.setAccDescription=z}static{f(this,"PacketDB")}getConfig(){const t=b({...L,...E().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){F(),this.packet=[]}},N=1e4,I=f((t,e)=>{W(t,e);let a=-1,o=[],n=1;const{bitsPerRow:l}=e.getConfig();for(let{start:r,end:s,bits:p,label:c}of t.blocks){if(r!==void 0&&s!==void 0&&s<r)throw new Error(`Packet block ${r} - ${s} is invalid. End must be greater than start.`);if(r??=a+1,r!==a+1)throw new Error(`Packet block ${r} - ${s??r} is not contiguous. It should start from ${a+1}.`);if(p===0)throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(s??=r+(p??1)-1,p??=s-r+1,a=s,u.debug(`Packet block ${r} - ${a} with label ${c}`);o.length<=l+1&&e.getPacket().length<N;){const[d,i]=M({start:r,end:s,bits:p,label:c},n,l);if(o.push(d),d.end+1===n*l&&(e.pushWord(o),o=[],n++),!i)break;({start:r,end:s,bits:p,label:c}=i)}}e.pushWord(o)},"populate"),M=f((t,e,a)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];const o=e*a-1,n=e*a;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),v={parser:{yy:void 0},parse:f(async t=>{const e=await _("packet",t),a=v.parser?.yy;if(!(a instanceof w))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");u.debug(e),I(e,a)},"parse")},Y=f((t,e,a,o)=>{const n=o.db,l=n.getConfig(),{rowHeight:r,paddingY:s,bitWidth:p,bitsPerRow:c}=l,d=n.getPacket(),i=n.getDiagramTitle(),m=r+s,g=m*(d.length+1)-(i?0:r),h=p*c+2,k=$(e);k.attr("viewBox",`0 0 ${h} ${g}`),B(k,g,h,l.useMaxWidth);for(const[x,y]of d.entries())G(k,y,x,l);k.append("text").text(i).attr("x",h/2).attr("y",g-m/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),G=f((t,e,a,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:r,bitsPerRow:s,showBits:p})=>{const c=t.append("g"),d=a*(o+l)+l;for(const i of e){const m=i.start%s*r+1,g=(i.end-i.start+1)*r-n;if(c.append("rect").attr("x",m).attr("y",d).attr("width",g).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",m+g/2).attr("y",d+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!p)continue;const h=i.end===i.start,k=d-2;c.append("text").attr("x",m+(h?g/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(i.start),h||c.append("text").attr("x",m+g).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),H={draw:Y},O={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},j=f(({packet:t}={})=>{const e=b(O,t);return`
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
	`},"styles"),wt={parser:v,get db(){return new w},renderer:H,styles:j};export{wt as diagram};
