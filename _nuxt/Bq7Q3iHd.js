import{u as b,t as d,b as D,v as B,x as O,y as z,z as E,w as M,A as H,B as R,k as S,D as p,E as V}from"./DNNoOqiL.js";const K=e=>e==="defer"||e===!1;function j(...e){var v;const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);let[t,l,a={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=b(),g=l,P=()=>d.value,w=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];a.server=a.server??!0,a.default=a.default??P,a.getCachedData=a.getCachedData??w,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,s),h=f!=null;if(!s._asyncData[t]||!a.immediate){(v=s.payload._errors)[t]??(v[t]=d.errorValue);const o=a.deep?D:B;s._asyncData[t]={data:o(h?f:a.default()),pending:D(!h),error:O(s.payload._errors,t),status:D("idle"),_default:a.default}}const r={...s._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(s._asyncDataPromises[t]){if(K(o.dedupe??a.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(o._initial||s.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,s);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const u=new Promise((c,i)=>{try{c(g(s))}catch(y){i(y)}}).then(async c=>{if(u.cancelled)return s._asyncDataPromises[t];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=T(i,a.pick)),s.payload.data[t]=i,r.data.value=i,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(u.cancelled)return s._asyncDataPromises[t];r.error.value=H(c),r.data.value=R(a.default()),r.status.value="error"}).finally(()=>{u.cancelled||(r.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=u,s._asyncDataPromises[t]},r.clear=()=>N(s,t);const _=()=>r.refresh({_initial:!0}),C=a.server!==!1&&s.payload.serverRendered;{const o=S();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;z(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}C&&s.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const u=V();if(a.watch){const i=M(a.watch,()=>r.refresh());u&&p(i)}const c=s.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});u&&p(c)}const m=Promise.resolve(s._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function I(...e){const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);const[t,l,a={}]=e;return j(t,l,{...a,lazy:!0},null)}function N(e,n){n in e.payload.data&&(e.payload.data[n]=void 0),n in e.payload._errors&&(e.payload._errors[n]=d.errorValue),e._asyncData[n]&&(e._asyncData[n].data.value=void 0,e._asyncData[n].error.value=d.errorValue,e._asyncData[n].pending.value=!1,e._asyncData[n].status.value="idle"),n in e._asyncDataPromises&&(e._asyncDataPromises[n]&&(e._asyncDataPromises[n].cancelled=!0),e._asyncDataPromises[n]=void 0)}function T(e,n){const t={};for(const l of n)t[l]=e[l];return t}export{I as a,j as u};