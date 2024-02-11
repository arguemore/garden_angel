import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, N as Nav, F as Footer } from "../../../chunks/Footer.js";
/* empty css                                                    */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-szb9qx{max-width:100%;min-height:100vh !important;height:100% !important;padding:1.4rem 1rem;margin-left:4.8rem;margin-top:4.2rem;min-height:100%;display:flex;justify-content:center}main.svelte-szb9qx::before,main.svelte-szb9qx::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:svelte-szb9qx-growGradient 2s ease-in}main.svelte-szb9qx::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, hsla(170deg, 29%, 49%, 0.2) 0px, transparent 50%)}main.svelte-szb9qx::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, hsla(147deg, 29%, 49%, 0.3) 0px, transparent 50%)}@media only screen and (max-width: 768px){main.svelte-szb9qx{width:100%;margin:0;margin-top:5rem !important;margin-bottom:4rem;padding:5vh 5vw 12vh 5vw;margin-block:0 5rem;padding-block:1rem}main.svelte-szb9qx::before{background-image:radial-gradient(at 0% 100%, hsla(170deg, 29%, 49%, 0.1) 0px, transparent 50%)}}@keyframes svelte-szb9qx-growGradient{0%{opacity:0}100%{opacity:0.5}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13sepy6_START -->${$$result.title = `<title>About | NotYasho</title>`, ""}<meta name="${"title"}" content="${"About | NotYasho"}"><meta name="${"description"}" content="${"About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/about"}"><meta property="${"og:title"}" content="${"About | NotYasho"}"><meta property="${"og:description"}" content="${"About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/about"}"><meta property="${"twitter:title"}" content="${"About | NotYasho"}"><meta property="${"twitter:description"}" content="${"About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."}"><!-- HEAD_svelte-13sepy6_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-szb9qx"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
