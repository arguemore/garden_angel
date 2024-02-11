import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, N as Nav, F as Footer } from "../../../chunks/Footer.js";
/* empty css                                                    */const nightOwl = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-16dpgr7{max-width:100%;padding:1.4rem 1rem;margin-left:4.8rem;margin-block:2.2rem}main.svelte-16dpgr7::before,main.svelte-16dpgr7::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:svelte-16dpgr7-growGradient 2s ease-in}main.svelte-16dpgr7::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, hsla(257deg, 100%, 75%, 0.2) 0px, transparent 50%)}main.svelte-16dpgr7::after{right:0;top:0;background-image:radial-gradient(at 100% 45%, hsla(257deg, 100%, 75%, 0.2) 0px, transparent 50%)}@keyframes svelte-16dpgr7-growGradient{0%{opacity:0.2}100%{opacity:0.5}}@media only screen and (max-width: 768px){main.svelte-16dpgr7::after{background-image:radial-gradient(at 100% 45%, hsla(257deg, 100%, 75%, 0.1) 0px, transparent 50%)}main.svelte-16dpgr7::before{background-image:radial-gradient(at 30% 100%, hsla(257deg, 100%, 75%, 0.1) 0px, transparent 50%)}main.svelte-16dpgr7{width:100%;margin:0;margin-bottom:2.2rem;padding:5vh 3vw 12vh 3vw}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-16dpgr7"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
