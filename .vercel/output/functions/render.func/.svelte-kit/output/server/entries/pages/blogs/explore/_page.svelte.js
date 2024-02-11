import { c as create_ssr_component, j as each, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.grid.svelte-1ar7lcx.svelte-1ar7lcx{height:100%;display:grid;grid-auto-columns:1fr;gap:1em;grid-template-areas:"item-1 item-2 item-3" "item-4 item-5 item-3" "item-4 item-5 item-3" "item-4 item-6 item-6" "item-7 item-7 item-8" "item-9 item-10 item-8" "item-11 item-11 item-8"}.card-item.svelte-1ar7lcx.svelte-1ar7lcx{display:flex;justify-content:center;flex-direction:column;align-items:center;border-radius:1rem;min-height:20rem;height:auto;padding:1rem}@media(hover: hover) and (pointer: fine){.card-item.svelte-1ar7lcx.svelte-1ar7lcx:hover{cursor:pointer;border-radius:0.5rem;transition:all 0.2s ease-in-out}}.header.svelte-1ar7lcx.svelte-1ar7lcx{pointer-events:none;outline:3px solid #333040;outline-offset:-3px;background-color:rgba(68, 64, 89, 0.35);text-align:center}.category.svelte-1ar7lcx.svelte-1ar7lcx{position:relative}.category.svelte-1ar7lcx svg{font-size:3rem}.category.svelte-1ar7lcx h2.svelte-1ar7lcx{font-size:2rem;font-weight:600;margin-block:1rem 0}.category.svelte-1ar7lcx h2.svelte-1ar7lcx,.category.svelte-1ar7lcx svg,.category.svelte-1ar7lcx span.svelte-1ar7lcx{color:hsl(249deg, 14%, 17%)}.category.svelte-1ar7lcx .overlay.svelte-1ar7lcx{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:1rem;transition:border-radius 0.2s ease-in-out, filter 0.3s}@media(hover: hover) and (pointer: fine){.category.svelte-1ar7lcx .overlay.svelte-1ar7lcx:hover{filter:brightness(1.1);cursor:pointer;border-radius:0.5rem}}@media screen and (max-width: 768px){.grid.svelte-1ar7lcx.svelte-1ar7lcx{grid-template-areas:"item-1 item-2 item-3" "item-4 item-5 item-6" "item-7 item-8 item-9" "item-10 item-11 item-11"}h2.svelte-1ar7lcx.svelte-1ar7lcx{font-size:1.5rem !important}.svelte-1ar7lcx.svelte-1ar7lcx{text-align:center}.overlay.svelte-1ar7lcx svg{font-size:2rem !important}span.svelte-1ar7lcx.svelte-1ar7lcx{font-size:0.8rem !important}}@media screen and (max-width: 650px){.grid.svelte-1ar7lcx.svelte-1ar7lcx{grid-template-areas:"item-1 item-2" "item-3 item-4" "item-5 item-6" "item-7 item-8" "item-9 item-10" "item-11 item-11"}}@media screen and (max-width: 420px){.grid.svelte-1ar7lcx.svelte-1ar7lcx{grid-template-areas:"item-1" "item-2" "item-3" "item-4" "item-5" "item-6" "item-7" "item-8" "item-9" "item-10" "item-11"}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-gangxl_START -->${$$result.title = `<title>Explore - NotYasho</title>`, ""}<!-- HEAD_svelte-gangxl_END -->`, ""}

<div class="${"grid svelte-1ar7lcx"}"><div class="${"header card-item svelte-1ar7lcx"}" style="${"grid-area: item-1;"}"><h1 class="${"svelte-1ar7lcx"}">Explore Categories</h1>
		<p class="${"svelte-1ar7lcx"}">Explore the categories of blogs</p></div>
	${each(data.categories, (category, i) => {
    return `<div class="${"category card-item svelte-1ar7lcx"}" style="${"grid-area: " + escape("item-" + (i + 2), true) + ";"}"><a href="${"/blogs/explore/" + escape(category.name, true)}" class="${"svelte-1ar7lcx"}"><div class="${"overlay svelte-1ar7lcx"}" style="${"background-color: rgba(" + escape(category.color, true) + ", 1);"}">${validate_component(Icon, "Icon").$$render($$result, { icon: category.icon }, {}, {})}
					<h2 class="${"svelte-1ar7lcx"}">${escape(category.name)}</h2>
					<span class="${"count svelte-1ar7lcx"}">${escape(category.count)} posts</span>
				</div></a>
		</div>`;
  })}
</div>`;
});
export {
  Page as default
};
