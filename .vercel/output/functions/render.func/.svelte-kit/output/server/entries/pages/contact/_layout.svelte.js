import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, N as Nav, F as Footer } from "../../../chunks/Footer.js";
/* empty css                                                    */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-9yruta{max-width:100%;padding:1.4rem 1rem;margin-left:4.8rem;margin-top:4.2rem;min-height:100%;display:flex;justify-content:center}main.svelte-9yruta::before,main.svelte-9yruta::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:svelte-9yruta-growGradient 2s ease-in}main.svelte-9yruta::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, hsla(266deg, 100%, 72%, 0.2) 0px, transparent 50%)}main.svelte-9yruta::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, hsla(247deg, 100%, 80%, 0.2) 0px, transparent 50%)}@media only screen and (max-width: 768px){main.svelte-9yruta{width:100%;margin:0;margin-top:4.2rem !important;margin-bottom:4rem;padding:5vh 5vw 12vh 5vw;margin-block:0 5rem;padding-block:1rem;height:90vh}main.svelte-9yruta::before{background-image:radial-gradient(at 0% 100%, hsla(266deg, 100%, 72%, 0.1) 0px, transparent 50%)}}@keyframes svelte-9yruta-growGradient{0%{opacity:0}100%{opacity:0.5}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-vaefhd_START -->${$$result.title = `<title>Contact | NotYasho</title>`, ""}<meta name="${"title"}" content="${"Contact | NotYasho"}"><meta name="${"description"}" content="${"Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/contact"}"><meta property="${"og:title"}" content="${"Contact | NotYasho"}"><meta property="${"og:description"}" content="${"Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"}"><meta property="${"og:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"}"><meta property="${"twitter:card"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/contact"}"><meta property="${"twitter:title"}" content="${"Contact | NotYasho"}"><meta property="${"twitter:description"}" content="${"Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"}"><meta property="${"twitter:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"}"><!-- HEAD_svelte-vaefhd_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-9yruta"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
