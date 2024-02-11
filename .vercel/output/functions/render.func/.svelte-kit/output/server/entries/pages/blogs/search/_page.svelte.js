import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as client } from "../../../../chunks/sanityClient.js";
import { P as PostGrid } from "../../../../chunks/PostGrid.js";
import { e as estimateReadTime, d as daysAgo } from "../../../../chunks/utils.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-e9wj1n.svelte-e9wj1n{margin-bottom:2rem;color:hsl(240deg, 5%, 98%)}.loader.svelte-e9wj1n.svelte-e9wj1n{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto}section.error.svelte-e9wj1n.svelte-e9wj1n{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto;text-align:center;color:var(--text-color);opacity:0.5;transition:opacity 0.5s ease-in-out}section.error.svelte-e9wj1n svg{width:100px;height:100px;margin-bottom:1rem}section.error.svelte-e9wj1n svg path{stroke-width:0.8px !important}section.error.svelte-e9wj1n h1.svelte-e9wj1n{font-size:2rem;margin-bottom:0.5rem}section.error.svelte-e9wj1n p.svelte-e9wj1n{font-size:1.2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let searchQuery;
  let timeout = false;
  async function search(query) {
    timeout = false;
    results = [];
    let response = await client.fetch(
      `*[_type == "blog" && (title match $query || description match $query || tags[] match $query)] | order(date desc) {
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
			}`,
      { query }
    ).then((res) => {
      return res.map((post) => {
        return {
          ...post,
          ert: estimateReadTime(post.body) + " min read",
          daysAgo: daysAgo(post.date),
          coverImage: post.coverImage + "?w=400&fm=webp"
        };
      });
    });
    timeout = true;
    return response;
  }
  let results = [];
  $$result.css.add(css);
  searchQuery = $page.url.searchParams.toString().split("q=")[1];
  {
    search(searchQuery).then((res) => {
      results = res;
    });
  }
  $$unsubscribe_page();
  return `${!searchQuery ? `<section class="${"error svelte-e9wj1n"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:arrow-to-top-left-broken" }, {}, {})}
		<h1 class="${"svelte-e9wj1n"}">No search query</h1>
		<p class="${"svelte-e9wj1n"}">Try searching from the search bar above.</p></section>` : `${!timeout && !results.length ? `<svg width="${"48"}" class="${"loader svelte-e9wj1n"}" height="${"48"}" viewBox="${"0 0 24	 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><style>.spinner_7mtw {
				transform-origin: center;
				animation: spinner_jgYN 0.6s linear infinite;
				fill: #ff2600;
			}
			@keyframes spinner_jgYN {
				100% {
					transform: rotate(360deg);
				}
			}
		</style><path class="${"spinner_7mtw"}" d="${"M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"}"></path></svg>` : `${timeout && results.length == 0 ? `<section class="${"error svelte-e9wj1n"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:ghost-broken" }, {}, {})}
		<h1 class="${"svelte-e9wj1n"}">Sorry, No Results found</h1>
		<p class="${"svelte-e9wj1n"}">Try searching for something more specific.</p></section>` : `${results.length > 0 ? `${validate_component(PostGrid, "PostGrid").$$render($$result, { posts: results }, {}, {})}` : ``}`}`}`}`;
});
export {
  Page as default
};
