import{U as i,aV as p,aW as a,aX as w}from"./DNNoOqiL.js";const h=e=>i?window.requestAnimationFrame(e):setTimeout(e,16),T=e=>i?window.cancelAnimationFrame(e):clearTimeout(e);function v(e,o,t,s){const l=t-o;return e/=s/2,e<1?l/2*e*e*e+o:l/2*((e-=2)*e*e+2)+o}const y=(e,o)=>{if(!i)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],s=p(e,t);return["scroll","auto","overlay"].some(l=>s.includes(l))},S=(e,o)=>{if(!i)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(y(t,o))return t;t=t.parentNode}return t};let u;const W=e=>{var o;if(!i)return 0;if(u!==void 0)return u;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const s=t.offsetWidth;t.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",t.appendChild(l);const n=l.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),u=s-n,u};function C(e,o){if(!i)return;if(!o){e.scrollTop=0;return}const t=[];let s=o.offsetParent;for(;s!==null&&e!==s&&e.contains(s);)t.push(s),s=s.offsetParent;const l=o.offsetTop+t.reduce((d,c)=>d+c.offsetTop,0),n=l+o.offsetHeight,r=e.scrollTop,f=r+e.clientHeight;l<r?e.scrollTop=l:n>f&&(e.scrollTop=n-e.clientHeight)}function x(e,o,t,s,l){const n=Date.now();let r;const f=()=>{const c=Date.now()-n,m=v(c>s?s:c,o,t,s);a(e)?e.scrollTo(window.pageXOffset,m):e.scrollTop=m,c<s?r=h(f):w(l)&&l()};return f(),()=>{r&&T(r)}}const E=(e,o)=>a(o)?e.ownerDocument.documentElement:o,F=e=>a(e)?window.scrollY:e.scrollTop;export{S as a,E as b,T as c,x as d,F as e,W as g,h as r,C as s};