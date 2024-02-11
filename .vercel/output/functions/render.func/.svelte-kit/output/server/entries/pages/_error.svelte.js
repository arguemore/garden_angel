import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-uw3lxe.svelte-uw3lxe{height:100vh;width:100%;background-color:hsla(0deg, 100%, 50%, 0);background-image:radial-gradient(at 93% 100%, hsla(337deg, 100%, 61%, 0.1) 0px, transparent 50%)}a.svelte-uw3lxe.svelte-uw3lxe{color:hsl(330deg, 100%, 65%)}.error-body.svelte-uw3lxe.svelte-uw3lxe{display:flex;align-items:center;justify-content:center;height:100vh}.message.svelte-uw3lxe.svelte-uw3lxe{display:flex;flex-direction:column;align-items:center;justify-content:center;color:white}img.svelte-uw3lxe.svelte-uw3lxe{border-radius:100%;margin-bottom:2rem}p.svelte-uw3lxe.svelte-uw3lxe{text-align:center;width:60%;margin-bottom:3rem}.message.svelte-uw3lxe h1.svelte-uw3lxe{font-size:2em;margin-bottom:1rem}button.svelte-uw3lxe.svelte-uw3lxe{background:none;border-radius:0;outline:solid 1px hsl(330deg, 100%, 65%);border-radius:0.4rem}span.svelte-uw3lxe.svelte-uw3lxe:not(.back){color:hsl(330deg, 100%, 65%)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1rlnzzk_START -->${$$result.title = `<title>${escape($page.status)} - ${escape($page.error.message)}</title>`, ""}<!-- HEAD_svelte-1rlnzzk_END -->`, ""}
<main class="${"svelte-uw3lxe"}"><section class="${"error-body svelte-uw3lxe"}"><div class="${"message svelte-uw3lxe"}"><img src="${"/img/favicon/logo.webp"}" alt="${""}" class="${"svelte-uw3lxe"}">

			<h1 class="${"svelte-uw3lxe"}">${escape($page.status)} - ${escape($page.error.message)} <span class="${"svelte-uw3lxe"}">x(</span></h1>
			<p class="${"svelte-uw3lxe"}">There was an error with the page. Please check the URL or <a href="${"https://github.com/NotYasho/Personal-Blog-Portfolio/issues/new"}" target="${"_"}" class="${"svelte-uw3lxe"}"><strong>report a bug</strong></a></p>
			<button class="${"btn btn-secondary svelte-uw3lxe"}" onclick="${"location.href='/blogs';"}">RETURN HOME</button></div></section>
</main>`;
});
export {
  Error as default
};
