import { c as create_ssr_component, v as validate_component, k as add_attribute } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import { L as Logo } from "../../chunks/logo.js";
const Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'header.svelte-3xb3k2.svelte-3xb3k2{z-index:100;width:100%;padding:8vh 0 5vh 0;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between}ul.svelte-3xb3k2.svelte-3xb3k2{font-family:"Poppins", sans-serif;list-style:none;margin:0;padding:0}a.svelte-3xb3k2.svelte-3xb3k2{text-decoration:none}.logo.svelte-3xb3k2.svelte-3xb3k2{z-index:11;transition:0.3s ease-in-out}.logo.svelte-3xb3k2 svg{user-select:none;margin-top:0.3rem;width:13rem;height:auto;transition:400ms;z-index:1}.hamb.svelte-3xb3k2.svelte-3xb3k2{display:none;z-index:5;font-size:1.7rem;color:#adacd3;transition:300ms;cursor:pointer;position:relative;bottom:0.6rem}.nav-list.svelte-3xb3k2.svelte-3xb3k2{user-select:none;list-style:none}.nav-list.svelte-3xb3k2 li.svelte-3xb3k2{display:inline-block}.nav-list.svelte-3xb3k2 li a.svelte-3xb3k2{margin-left:1vw;padding:0.5rem 0.8rem;font-size:0.94rem;color:#d6d6d6;background:rgba(255, 255, 255, 0.041);border-radius:20px;transition:400ms}.nav-list.svelte-3xb3k2 li a.svelte-3xb3k2:hover{background:rgba(255, 255, 255, 0.1)}.nav-list.svelte-3xb3k2 li #active.svelte-3xb3k2{color:#eee;outline:2px solid #5d30ff}.nav-list.svelte-3xb3k2 li #active.svelte-3xb3k2:hover{background:#5d30ff}@media screen and (max-width: 768px){.hamb.svelte-3xb3k2.svelte-3xb3k2{position:relative;display:initial;z-index:11}.nav-list.svelte-3xb3k2.svelte-3xb3k2{position:fixed;top:0;right:-100%;width:100%;height:100%;padding:25vh 8%;background:rgba(25, 25, 37, 0.92);backdrop-filter:blur(10px);transition:500ms right cubic-bezier(0.86, 0, 0.07, 1);z-index:10}.nav-list.svelte-3xb3k2 li.svelte-3xb3k2{max-width:30rem;margin:auto;padding:0.5rem 0.5rem;display:block}.nav-list.svelte-3xb3k2 li a.svelte-3xb3k2{padding:0.8rem 0.5rem;display:block;font-size:1.5rem}.nav-list.svelte-3xb3k2 li a.svelte-3xb3k2{display:block;text-align:center;font-size:1.1rem;font-weight:400;margin-bottom:3vh}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav;
  let hamb;
  let hambIcon = "ic:round-menu";
  $$result.css.add(css$3);
  return `<header class="${"svelte-3xb3k2"}"><div class="${"logo svelte-3xb3k2"}"><a href="${"/"}" class="${"svelte-3xb3k2"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a></div>
	<nav>
		<div class="${"hamb svelte-3xb3k2"}"${add_attribute("this", hamb, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon: hambIcon }, {}, {})}</div>

		<ul class="${"nav-list svelte-3xb3k2"}"${add_attribute("this", nav, 0)}><li class="${"svelte-3xb3k2"}"><a href="${"#hero"}" id="${"active"}" class="${"svelte-3xb3k2"}">Home</a></li>
			<li class="${"svelte-3xb3k2"}"><a href="${"/blogs"}" class="${"svelte-3xb3k2"}">Blogs</a></li>
			<li class="${"svelte-3xb3k2"}"><a href="${"/about"}" class="${"svelte-3xb3k2"}">About</a></li>
			<li class="${"svelte-3xb3k2"}"><a href="${"/contact"}" class="${"svelte-3xb3k2"}">Contact</a></li></ul></nav>
</header>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '#hero.svelte-1ynr0vr.svelte-1ynr0vr{min-height:100vh;background-color:rgb(28, 25, 38);background-image:linear-gradient(rgba(28, 25, 38, 0.6), rgba(28, 25, 38, 0.3), rgba(28, 25, 38, 0.4)), url("https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/bg/hero-bg.webp?token=GHSAT0AAAAAAB4WNDHPMZIMCG6JWFF4P3GCY6ABK4Q");background-size:cover;background-position:center}.hero__content.svelte-1ynr0vr.svelte-1ynr0vr{width:100%;height:100%;overflow:hidden;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:2rem}.hero__content.svelte-1ynr0vr img.svelte-1ynr0vr{width:15rem;border-radius:50%;transition:all 0.2s ease-in-out}.hero__content.svelte-1ynr0vr img.svelte-1ynr0vr:hover{transform:scale(1.05)}p.svelte-1ynr0vr.svelte-1ynr0vr{display:block;width:40vw;font-size:17px;line-height:1.2;color:#d5d5ff;min-width:300px;text-align:center;padding:1rem}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="${"hero"}" data-scroll-section class="${"svelte-1ynr0vr"}">${slots.default ? slots.default({}) : ``}
	<div class="${"hero__content svelte-1ynr0vr"}" data-scroll><img src="${"/img/svg/avatar.svg"}" alt="${""}" class="${"svelte-1ynr0vr"}">
		<p class="${"svelte-1ynr0vr"}">This portfolio isn&#39;t completed yet, however it&#39;s <strong>not</strong> under construction either. It may get updated once I get time to work on it. More information <a href="${"/about"}">here</a> :(</p>
		
		<a class="${"btn"}" href="${"/blogs"}">READ THE BLOG</a></div>
</section>`;
});
const MyStory_svelte_svelte_type_style_lang = "";
const Cursor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#cursor.svelte-zdznnb{position:fixed;z-index:99;left:0;top:0;pointer-events:none;will-change:transform;mix-blend-mode:difference}@media(hover: hover) and (pointer: fine){.cursor__circle.svelte-zdznnb{width:3rem;height:3rem;margin-top:-50%;margin-left:-50%;border-radius:50%;border:solid 1px rgba(202, 187, 255, 0.6156862745);transition:height 0.3s cubic-bezier(0.25, 1, 0.5, 1)}}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor;
  let cursorCircle;
  $$result.css.add(css$1);
  return `


<div id="${"cursor"}" class="${"svelte-zdznnb"}"${add_attribute("this", cursor, 0)}><div class="${"cursor__circle svelte-zdznnb"}"${add_attribute("this", cursorCircle, 0)}></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-18az6m9{max-width:100%;margin:0 auto}main.svelte-18az6m9 section{padding:0px 10vw}main.svelte-18az6m9::before,main.svelte-18az6m9::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:growGradient 2s ease-in}main.svelte-18az6m9::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, rgba(103, 108, 201, 0.2) 0px, transparent 50%)}main.svelte-18az6m9::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, rgba(103, 108, 201, 0.3) 0px, transparent 50%)}p.svelte-18az6m9{display:none;font-family:"Nofex", sans-serif}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-utnh6e_START -->${$$result.title = `<title>Portfolio | NotYasho</title>`, ""}<meta name="${"title"}" content="${"Portfolio | NotYasho"}"><meta name="${"description"}" content="${"Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."}"><meta name="${"image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png"}" class="${"next-head"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/"}"><meta property="${"og:title"}" content="${"NotYasho - Portfolio"}"><meta property="${"og:description"}" content="${"Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."}"><meta property="${"og:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png"}"><meta property="${"twitter:card"}" content="${"summary_large_image"}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/"}"><meta property="${"twitter:title"}" content="${"NotYasho - Portfolio"}"><meta property="${"twitter:description"}" content="${"Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."}"><meta property="${"twitter:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png"}"><!-- HEAD_svelte-utnh6e_END -->`, ""}

<p class="${"svelte-18az6m9"}">placeholder</p>
<main class="${"svelte-18az6m9"}">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}
	${validate_component(Hero, "Hero").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}`;
    }
  })}
</main>`;
});
export {
  Page as default
};
