import{V as f}from"./index.68f3856d.js";function y(a){const o=a-1;return o*o*o+1}function b(a,{delay:o=0,duration:r=400,easing:p=f}={}){const t=+getComputedStyle(a).opacity;return{delay:o,duration:r,easing:p,css:s=>`opacity: ${s*t}`}}function u(a,{delay:o=0,duration:r=400,easing:p=y,x:t=0,y:s=0,opacity:c=0}={}){const e=getComputedStyle(a),i=+e.opacity,m=e.transform==="none"?"":e.transform,g=i*(1-c);return{delay:o,duration:r,easing:p,css:(d,l)=>`
			transform: ${m} translate(${(1-d)*t}px, ${(1-d)*s}px);
			opacity: ${i-g*l}`}}function $(a,{delay:o=0,duration:r=400,easing:p=y}={}){const t=getComputedStyle(a),s=+t.opacity,c=parseFloat(t.height),e=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),m=parseFloat(t.marginTop),g=parseFloat(t.marginBottom),d=parseFloat(t.borderTopWidth),l=parseFloat(t.borderBottomWidth);return{delay:o,duration:r,easing:p,css:n=>`overflow: hidden;opacity: ${Math.min(n*20,1)*s};height: ${n*c}px;padding-top: ${n*e}px;padding-bottom: ${n*i}px;margin-top: ${n*m}px;margin-bottom: ${n*g}px;border-top-width: ${n*d}px;border-bottom-width: ${n*l}px;`}}export{u as a,b as f,$ as s};
