function x(u){const r=u.split(" ").length;return Math.ceil(r/183)}function T(u){let y=new Date(u.replaceAll("-","/")),r=new Date;const e=parseInt((r-y)/(1e3*60*60*24),10);if(e===0)return"Today";if(e<30)return e>7?Math.floor(e/7)+(Math.floor(e/7)==1?" week":" weeks"):e+" day"+(e>1?"s":"");if(e<365){let l=Math.floor(e/30);return l+" month"+(l>1?"s":"")}else{let l=Math.floor(e/365),f=e%365;return l+" year"+(l>1?"s":"")+(f>0?" "+f+" day"+(f>1?"s":""):"")}}function C(u,y){const r=parseInt(u.slice(1),16),e=r>>16&255,l=r>>8&255,f=r&255,M=e/255,i=l/255,c=f/255,d=Math.max(M,i,c),w=Math.min(M,i,c);let t,g,b=(d+w)/2;if(d===w)t=g=0;else{const m=d-w;switch(g=b>.5?m/(2-d-w):m/(d+w),d){case M:t=((i-c)/m+(i<c?6:0))/6;break;case i:t=((c-M)/m+2)/6;break;case c:t=((M-i)/m+4)/6;break}}b=y;let o=(1-Math.abs(2*b-1))*g,h=o*(1-Math.abs(t*6%2-1)),k=b-o/2,n,s,a;return t<1/6?(n=o,s=h,a=0):t<2/6?(n=h,s=o,a=0):t<3/6?(n=0,s=o,a=h):t<4/6?(n=0,s=h,a=o):t<5/6?(n=h,s=0,a=o):(n=o,s=0,a=h),n=Math.round((n+k)*255),s=Math.round((s+k)*255),a=Math.round((a+k)*255),`${n}, ${s}, ${a}`}export{T as d,x as e,C as l};