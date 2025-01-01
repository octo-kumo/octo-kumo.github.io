function t(h){if(!h)return 0;let e=0,n,r;if(h.length===0)return e;for(n=0;n<h.length;n++)r=h.charCodeAt(n),e=(e<<5)-e+r,e|=0;return e>>>0}export{t as h};
