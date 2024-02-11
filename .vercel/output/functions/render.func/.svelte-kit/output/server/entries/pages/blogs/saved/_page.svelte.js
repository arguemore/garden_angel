import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { P as PostGrid } from "../../../../chunks/PostGrid.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-639inn.svelte-639inn{margin-bottom:1rem}section.main.svelte-639inn.svelte-639inn{position:relative;min-height:80vh}section.error.svelte-639inn.svelte-639inn{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto;text-align:center;color:var(--text-color);opacity:0.5;transition:opacity 0.5s ease-in-out}section.error.svelte-639inn svg{width:100px;height:100px;margin-bottom:1rem}section.error.svelte-639inn svg path{stroke-width:0.8px !important}section.error.svelte-639inn h1.svelte-639inn{font-size:2rem;margin-bottom:0.5rem}section.error.svelte-639inn p.svelte-639inn{font-size:1.2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let posts = data.posts;
  posts.forEach((post) => {
    post.coverImage = post.coverImage + "?w=400&fm=webp";
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-4kpygp_START -->${$$result.title = `<title>Saved - NotYasho</title>`, ""}<!-- HEAD_svelte-4kpygp_END -->`, ""}

<section class="${"main svelte-639inn"}">${posts.length === 0 ? `<section class="${"error svelte-639inn"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "solar:book-bookmark-minimalistic-broken"
    },
    {},
    {}
  )}
			<h1 class="${"svelte-639inn"}">Nothing saved yet</h1>
			<p class="${"svelte-639inn"}">Save your favorite blogs to read them later</p></section>` : `<h1 class="${"highlight svelte-639inn"}">Saved posts</h1>
		${validate_component(PostGrid, "PostGrid").$$render($$result, { posts }, {}, {})}`}
</section>`;
});
export {
  Page as default
};
