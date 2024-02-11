import { c as create_ssr_component, e as escape, k as add_attribute, v as validate_component } from "../../../../../chunks/index2.js";
import { P as PostGrid } from "../../../../../chunks/PostGrid.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-vr6u6k.svelte-vr6u6k{min-height:100vh;height:100%}.cover.svelte-vr6u6k.svelte-vr6u6k{position:relative;display:flex;align-items:center;margin-top:-3rem;margin-inline:calc(-50vw + 50%);width:100vw !important;height:16rem;justify-content:center;margin-bottom:2rem}.cover.svelte-vr6u6k.svelte-vr6u6k::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to top, hsl(248deg, 28%, 10%) 5%, transparent 100%)}.text.svelte-vr6u6k.svelte-vr6u6k{position:absolute;z-index:1;text-align:center}.text.svelte-vr6u6k h1.svelte-vr6u6k{color:rgba(var(--color), 1);filter:saturate(0.4);font-size:2.3rem}.text.svelte-vr6u6k span.svelte-vr6u6k{color:rgba(var(--color), 1);filter:saturate(0.4);font-size:1.3rem}h2.svelte-vr6u6k.svelte-vr6u6k{font-size:1.5rem;margin-bottom:1rem}img.svelte-vr6u6k.svelte-vr6u6k{height:14rem;z-index:-1;width:100vw;object-fit:cover;object-position:center;filter:grayscale(0.3) brightness(0.5)}section.error.svelte-vr6u6k.svelte-vr6u6k{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto;text-align:center;opacity:0.5;transition:opacity 0.5s ease-in-out}section.error.svelte-vr6u6k svg{width:100px;height:100px;margin-bottom:1rem}section.error.svelte-vr6u6k h1.svelte-vr6u6k{font-size:2rem;margin-bottom:0.5rem}section.error.svelte-vr6u6k p.svelte-vr6u6k{font-size:1.2rem}section.svelte-vr6u6k.svelte-vr6u6k{margin-bottom:2rem}section.svelte-vr6u6k.svelte-vr6u6k::before,section.svelte-vr6u6k.svelte-vr6u6k::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100%;z-index:100;opacity:0.5;animation:svelte-vr6u6k-growGradient 2s ease-in}section.svelte-vr6u6k.svelte-vr6u6k::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, rgba(var(--color), 0.2) 0px, transparent 50%)}section.svelte-vr6u6k.svelte-vr6u6k::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, rgba(var(--color), 0.2) 0px, transparent 50%)}@media only screen and (max-width: 768px){section.svelte-vr6u6k.svelte-vr6u6k::before{background-image:radial-gradient(at 0% 100%, rgba(var(--color), 0.1) 0px, transparent 50%)}}@keyframes svelte-vr6u6k-growGradient{0%{opacity:0.2}100%{opacity:0.5}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let posts = data.blogs;
  posts.forEach((post) => {
    post.coverImage = post.coverImage + "?w=400&fm=webp";
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1i6cu86_START -->${$$result.title = `<title></title>`, ""}${$$result.title = `<title>Explore ${escape(data.category.name)} articles</title>`, ""}<meta name="${"title"}" content="${"Explore " + escape(data.category.name, true) + " articles"}"><meta name="${"description"}" content="${"Articles related to " + escape(data.category.name, true) + "Explore categories of all sorts."}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/explore/" + escape(data.category, true)}"><meta property="${"og:title"}" content="${"Explore " + escape(data.category.name, true) + " articles"}"><meta property="${"og:description"}" content="${"Articles related to " + escape(data.category.name, true) + "Explore categories of all sorts."}"><meta property="${"og:image"}"${add_attribute("content", data.category.image.asset.url + "?fm=webp&w=256", 0)}><meta property="${"twitter:card"}" content="${"summary_large_image"}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/explore/" + escape(data.category, true)}"><meta property="${"twitter:title"}" content="${"Explore " + escape(data.category.name, true) + " articles"}"><meta property="${"twitter:description"}" content="${"Articles related to " + escape(data.category.name, true) + ". Explore categories of all sorts."}"><meta property="${"twitter:image"}"${add_attribute("content", data.category.image.asset.url + "?fm=webp&w=256", 0)}><!-- HEAD_svelte-1i6cu86_END -->`, ""}

<main class="${"svelte-vr6u6k"}">${data.blogs.length > 0 ? `<section style="${"--color: " + escape(data.category.color, true)}" class="${"svelte-vr6u6k"}"><div class="${"cover svelte-vr6u6k"}"><img${add_attribute("src", data.category.image.asset.url, 0)} alt="${"alt"}" class="${"svelte-vr6u6k"}">
				<div class="${"text svelte-vr6u6k"}"><h1 class="${"svelte-vr6u6k"}">${escape(data.category.name)}</h1>
					<span id="${"count"}" class="${"svelte-vr6u6k"}">Posts: ${escape(posts.length)}</span></div></div>
			<h2 class="${"highlight svelte-vr6u6k"}">${escape(data.category.name)} Posts</h2>
			${validate_component(PostGrid, "PostGrid").$$render($$result, { posts }, {}, {})}</section>` : `<section class="${"error svelte-vr6u6k"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "tabler:line-dotted" }, {}, {})}
			<h1 class="${"svelte-vr6u6k"}">Nothing but void :/</h1>
			<p class="${"svelte-vr6u6k"}">Looks like nothing has been posted related to <strong>${escape(data.category.name)}</strong></p></section>`}
</main>`;
});
export {
  Page as default
};
