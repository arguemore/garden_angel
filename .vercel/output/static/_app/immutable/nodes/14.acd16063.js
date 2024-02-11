import{e as z,d as H}from"../chunks/utils.d8215a89.js";import{c as q}from"../chunks/sanityClient.1973d15b.js";import{S as B,i as D,s as F,a as b,k as p,W as G,h as m,c as $,l as g,m as h,p as v,b as y,g as I,F as x,d as E,a6 as C,r as k,z as O,u as S,A as P,D as u,B as T,n as A,C as j}from"../chunks/index.68f3856d.js";import{f as J,a as L}from"../chunks/index.aae62c89.js";import{P as M}from"../chunks/PostGrid.994f2f3d.js";import{I as R}from"../chunks/Icon.108fb5f9.js";async function W({params:d}){const e=JSON.parse(localStorage.getItem("savedItems"))||[];if(e.length==0)return{posts:[]};const t=await q.fetch(`*[_type == "blog" && slug.current in $saved] {
			title,
			description,
			body,
			date,
			"category": category->name,
			"slug": slug.current,
			"color": category->color,
			"symbol": category->icon,
			tags,
			"coverImage": featuredImage.asset->url,
			"url": "/article/" + slug.current,
			"imageSrc": featuredImage.asset -> creditLine,
			featured,
			"avgColor": featuredImage.asset->metadata.palette.dominant.background,
			featuredImage{
				asset->{
					...,
					metadata
				}
			}
		}`,{saved:e});return t?(t.forEach(a=>{a.ert=z(a.body)+" min read",a.daysAgo=H(a.date),delete a.body}),{posts:t}):{posts:[]}}const se=Object.freeze(Object.defineProperty({__proto__:null,load:W},Symbol.toStringTag,{value:"Module"}));function Y(d){let e,t,a,s,n;return s=new M({props:{posts:d[0]}}),{c(){e=p("h1"),t=k("Saved posts"),a=b(),O(s.$$.fragment),this.h()},l(r){e=g(r,"H1",{class:!0});var i=h(e);t=S(i,"Saved posts"),i.forEach(m),a=$(r),P(s.$$.fragment,r),this.h()},h(){v(e,"class","highlight svelte-639inn")},m(r,i){y(r,e,i),u(e,t),y(r,a,i),T(s,r,i),n=!0},p:A,i(r){n||(I(s.$$.fragment,r),n=!0)},o(r){E(s.$$.fragment,r),n=!1},d(r){r&&m(e),r&&m(a),j(s,r)}}}function K(d){let e,t,a,s,n,r,i,f,_,o;return t=new R({props:{icon:"solar:book-bookmark-minimalistic-broken"}}),{c(){e=p("section"),O(t.$$.fragment),a=b(),s=p("h1"),n=k("Nothing saved yet"),r=b(),i=p("p"),f=k("Save your favorite blogs to read them later"),this.h()},l(l){e=g(l,"SECTION",{class:!0});var c=h(e);P(t.$$.fragment,c),a=$(c),s=g(c,"H1",{class:!0});var N=h(s);n=S(N,"Nothing saved yet"),N.forEach(m),r=$(c),i=g(c,"P",{class:!0});var w=h(i);f=S(w,"Save your favorite blogs to read them later"),w.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","svelte-639inn"),v(i,"class","svelte-639inn"),v(e,"class","error svelte-639inn")},m(l,c){y(l,e,c),T(t,e,null),u(e,a),u(e,s),u(s,n),u(e,r),u(e,i),u(i,f),o=!0},p:A,i(l){o||(I(t.$$.fragment,l),_||x(()=>{_=C(e,J,{}),_.start()}),o=!0)},o(l){E(t.$$.fragment,l),o=!1},d(l){l&&m(e),j(t)}}}function Q(d){let e,t,a,s,n,r;const i=[K,Y],f=[];function _(o,l){return o[0].length===0?0:1}return a=_(d),s=f[a]=i[a](d),{c(){e=b(),t=p("section"),s.c(),this.h()},l(o){G("svelte-4kpygp",document.head).forEach(m),e=$(o),t=g(o,"SECTION",{class:!0});var c=h(t);s.l(c),c.forEach(m),this.h()},h(){document.title="Saved - NotYasho",v(t,"class","main svelte-639inn")},m(o,l){y(o,e,l),y(o,t,l),f[a].m(t,null),r=!0},p(o,[l]){s.p(o,l)},i(o){r||(I(s),n||x(()=>{n=C(t,L,{y:10,duration:500}),n.start()}),r=!0)},o(o){E(s),r=!1},d(o){o&&m(e),o&&m(t),f[a].d()}}}function U(d,e,t){let{data:a}=e,s=a.posts;return s.forEach(n=>{n.coverImage=n.coverImage+"?w=400&fm=webp"}),d.$$set=n=>{"data"in n&&t(1,a=n.data)},[s,a]}class re extends B{constructor(e){super(),D(this,e,U,Q,F,{data:1})}}export{re as component,se as universal};
