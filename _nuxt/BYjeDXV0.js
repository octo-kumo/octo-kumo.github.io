import{ab as S,ac as y}from"./LXL7uvHp.js";import{t as W}from"./DHQVDzdN.js";var h=function(){return S.Date.now()},R="Expected a function",A=Math.max,F=Math.min;function _(x,i,a){var u,d,m,f,n,r,o=0,E=!1,c=!1,g=!0;if(typeof x!="function")throw new TypeError(R);i=W(i)||0,y(a)&&(E=!!a.leading,c="maxWait"in a,m=c?A(W(a.maxWait)||0,i):m,g="trailing"in a?!!a.trailing:g);function v(e){var t=u,l=d;return u=d=void 0,o=e,f=x.apply(l,t),f}function p(e){return o=e,n=setTimeout(s,i),E?v(e):f}function C(e){var t=e-r,l=e-o,b=i-t;return c?F(b,m-l):b}function k(e){var t=e-r,l=e-o;return r===void 0||t>=i||t<0||c&&l>=m}function s(){var e=h();if(k(e))return I(e);n=setTimeout(s,C(e))}function I(e){return n=void 0,g&&u?v(e):(u=d=void 0,f)}function L(){n!==void 0&&clearTimeout(n),o=0,u=r=d=n=void 0}function M(){return n===void 0?f:I(h())}function T(){var e=h(),t=k(e);if(u=arguments,d=this,r=e,t){if(n===void 0)return p(r);if(c)return clearTimeout(n),n=setTimeout(s,i),v(r)}return n===void 0&&(n=setTimeout(s,i)),f}return T.cancel=L,T.flush=M,T}export{_ as d};
