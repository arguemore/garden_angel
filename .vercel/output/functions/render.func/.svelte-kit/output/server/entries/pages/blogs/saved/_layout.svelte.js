import { c as create_ssr_component } from "../../../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-ijpk2f::before,main.svelte-ijpk2f::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:svelte-ijpk2f-growGradient 2s ease-in}main.svelte-ijpk2f::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, hsla(197deg, 100%, 75%, 0.2) 0px, transparent 50%)}main.svelte-ijpk2f::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, hsla(207deg, 100%, 75%, 0.1) 0px, transparent 50%)}@keyframes svelte-ijpk2f-growGradient{0%{opacity:0.2}100%{opacity:0.5}}@media screen and (max-width: 768px){main.svelte-ijpk2f::before{background-image:radial-gradient(at 0% 100%, hsla(197deg, 100%, 75%, 0.1) 0px, transparent 50%)}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-ijpk2f"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
