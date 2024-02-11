import { c as create_ssr_component, e as escape, k as add_attribute, v as validate_component, j as each, b as subscribe } from "../../../chunks/index2.js";
import { s as showToast, m as message, d as description, a as savedItems, c as checkSaved, T as Toast, P as PostGrid } from "../../../chunks/PostGrid.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { l as lighten } from "../../../chunks/utils.js";
const Category_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.category-card.svelte-1tj5v3g.svelte-1tj5v3g{background:hsla(248deg, 16%, 15%, 0.35);padding:1rem;position:relative;border-radius:20px;text-align:center}.category-card.svelte-1tj5v3g a.svelte-1tj5v3g{all:unset;cursor:pointer;transition:all 200ms;color:hsl(248deg, 5%, 90%)}@media(hover: hover) and (pointer: fine){.category-card.svelte-1tj5v3g a.svelte-1tj5v3g:hover{filter:brightness(1.05)}}.category-card.svelte-1tj5v3g a.svelte-1tj5v3g:active{filter:brightness(0.9)}.category-card.svelte-1tj5v3g #count.svelte-1tj5v3g{font-size:small;color:hsl(223deg, 25%, 76%)}.category-card.svelte-1tj5v3g h2.svelte-1tj5v3g{font-size:large;margin-top:1rem;font-family:"TabletGothicW02", sans-serif}.category-card.svelte-1tj5v3g h2 #hashtag.svelte-1tj5v3g{color:var(--color)}.square-card.svelte-1tj5v3g.svelte-1tj5v3g{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:2rem;width:9rem;height:8rem;cursor:pointer;border-bottom:solid 0.5rem var(--color);transition:box-shadow 150ms ease-out;box-shadow:0px 0px 0px 0px rgba(var(--rgb), 0)}.square-card.svelte-1tj5v3g.svelte-1tj5v3g::before{content:"";position:absolute;width:100%;height:100%;opacity:0.7;mix-blend-mode:lighten;z-index:1;background-color:var(--color)}@media(hover: hover) and (pointer: fine){.square-card.svelte-1tj5v3g.svelte-1tj5v3g:hover{box-shadow:0px 0px 90px 5px rgba(var(--rgb), 0.1)}}.square-card.svelte-1tj5v3g.svelte-1tj5v3g:has(.dummy){background:hsl(249deg, 14%, 17%)}.bg-img.svelte-1tj5v3g.svelte-1tj5v3g{position:absolute;height:100%;width:100%;object-fit:cover;filter:grayscale(1) brightness(0.7)}.title-category.svelte-1tj5v3g.svelte-1tj5v3g{position:absolute;font-weight:bolder;color:white;text-align:center;z-index:1}.title-category.svelte-1tj5v3g svg{font-size:3rem}@media only screen and (max-width: 420px){.category-card.svelte-1tj5v3g.svelte-1tj5v3g{background:none;padding:0;margin:0}.category-card.svelte-1tj5v3g h2.svelte-1tj5v3g{position:absolute;bottom:2.2rem;color:white;font-size:1.3rem;left:1.4rem}.category-card.svelte-1tj5v3g h2 #hashtag.svelte-1tj5v3g{display:none}.category-card.svelte-1tj5v3g #count.svelte-1tj5v3g{position:absolute;bottom:1.1rem;left:1.4rem;color:white}.category-card.svelte-1tj5v3g a.svelte-1tj5v3g{filter:none !important}.category-card.svelte-1tj5v3g.svelte-1tj5v3g:nth-last-child(2){margin-right:-2rem}.square-card.svelte-1tj5v3g.svelte-1tj5v3g{height:13rem;width:11rem;border:0;box-shadow:none !important}.square-card.svelte-1tj5v3g.svelte-1tj5v3g::after{position:absolute;background:linear-gradient(to top, var(--color), transparent);filter:blur(20px) brightness(0);border-radius:5px;content:"";height:100%;width:100%}.category-card.svelte-1tj5v3g.svelte-1tj5v3g:has(.dummy){display:none}}',
  map: null
};
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category } = $$props;
  let { i } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css$4);
  return `<div class="${"category-card svelte-1tj5v3g"}" style="${"--color: rgb(" + escape(category.color, true) + "); --rgb: " + escape(category.color, true)}"><a${add_attribute(
    "href",
    !category.dummy ? `/blogs/explore/${category.name}` : "/blogs/explore",
    0
  )} class="${"svelte-1tj5v3g"}"><div class="${"square-card svelte-1tj5v3g"}">${!category.dummy ? `<img class="${"bg-img svelte-1tj5v3g"}"${add_attribute("alt", category.name, 0)}${add_attribute("data-src", category.coverImage, 0)}${add_attribute("src", category.placeholderImage, 0)}>
				<div class="${"title-category svelte-1tj5v3g"}">${validate_component(Icon, "Icon").$$render($$result, { icon: category.icon }, {}, {})}<br></div>` : `<div class="${"dummy"}"></div>
				<div class="${"title-category svelte-1tj5v3g"}">${validate_component(Icon, "Icon").$$render($$result, { icon: category.icon }, {}, {})}<br></div>`}</div>

		${!category.dummy ? `<a href="${"/blogs/explore/" + escape(category.name, true)}" class="${"svelte-1tj5v3g"}"><h2 class="${"svelte-1tj5v3g"}"><span id="${"hashtag"}" class="${"svelte-1tj5v3g"}">#</span>${escape(category.name)}</h2></a>
			<span id="${"count"}" class="${"svelte-1tj5v3g"}">${escape(category.count == 1 ? `One post` : `Over ${category.count - 1}+ posts`)}</span>` : `<a href="${"/blogs/explore/" + escape(category.name, true)}" class="${"svelte-1tj5v3g"}"><h2 class="${"svelte-1tj5v3g"}">${escape(category.name)}</h2></a>
			<span id="${"count"}" class="${"svelte-1tj5v3g"}">Other categories</span>`}</a>
</div>`;
});
const CategoriesGrid_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid.svelte-1k8xihq{display:grid;grid-template-columns:repeat(5, 1fr);grid-column-gap:1rem;grid-auto-flow:column;overflow-x:scroll;scrollbar-width:none;max-width:90vw}.grid.svelte-1k8xihq::-webkit-scrollbar{display:none}@media only screen and (max-width: 420px){.category.svelte-1k8xihq{background:none}}",
  map: null
};
const CategoriesGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  $$result.css.add(css$3);
  return `<div class="${"grid svelte-1k8xihq"}">${each(categories, (category, i) => {
    return `${validate_component(Category, "Category").$$render($$result, { category, i }, {}, {})}`;
  })}
	<div class="${"category svelte-1k8xihq"}"><a href="${"/blogs/explore/"}">${validate_component(Category, "Category").$$render(
    $$result,
    {
      category: {
        name: "Browse More",
        icon: "material-symbols:chevron-right",
        dummy: true
      },
      i: 2
    },
    {},
    {}
  )}</a></div>
</div>`;
});
const Featured_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'h2.svelte-1ydv3cr.svelte-1ydv3cr{font-family:"Lexend", sans-serif;line-height:2.5rem}p.svelte-1ydv3cr.svelte-1ydv3cr{line-height:2.5ch;font-weight:400;font-family:"TabletGothicW02", sans-serif}.featured.svelte-1ydv3cr.svelte-1ydv3cr{width:100%;position:relative;padding:1.5rem;border-radius:1rem;margin-bottom:2rem;background:rgba(36, 34, 47, 0.35)}.info.svelte-1ydv3cr.svelte-1ydv3cr{display:flex;gap:0.7ch;align-items:center}span.featured-badge.svelte-1ydv3cr.svelte-1ydv3cr{position:absolute;right:0.6rem;gap:0.5ch;display:inline-flex;align-items:center;border-radius:0.3rem;padding:0 0.64rem;background:rgba(var(--color));pointer-events:none;color:hsl(249deg, 26%, 10%)}span.featured-badge.svelte-1ydv3cr span.svelte-1ydv3cr{font-weight:600}@media only screen and (max-width: 1000px){span.featured-badge.svelte-1ydv3cr.svelte-1ydv3cr{padding:0.3rem;border-radius:100%}span.featured-badge.svelte-1ydv3cr span.svelte-1ydv3cr{display:none}span.featured-badge.svelte-1ydv3cr svg{width:1rem;height:auto}}@media only screen and (max-width: 768px){span.featured-badge.svelte-1ydv3cr.svelte-1ydv3cr{background:none;border-radius:0;margin-right:2rem;padding:0}span.featured-badge.svelte-1ydv3cr span.svelte-1ydv3cr{display:inline}}.featured-wrapper.svelte-1ydv3cr.svelte-1ydv3cr{width:100%;height:100%;display:flex;flex-direction:row}.featured.svelte-1ydv3cr #title.svelte-1ydv3cr{text-decoration:none;transition:filter 0.3s ease}.featured.svelte-1ydv3cr #title h2.svelte-1ydv3cr{font-weight:500;font-size:clamp(1.6rem, 2.5vw, 4rem);width:85%;margin-bottom:0.8rem;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}@media(hover: hover) and (pointer: fine){.featured.svelte-1ydv3cr #title.svelte-1ydv3cr:hover{filter:brightness(0.9)}}.featured.svelte-1ydv3cr .image.svelte-1ydv3cr{width:63%;height:25rem;position:relative;margin-right:3em;overflow:hidden;border-radius:2em}.image.svelte-1ydv3cr img.svelte-1ydv3cr{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease-in-out}@media(hover: hover) and (pointer: fine){.image.svelte-1ydv3cr img.svelte-1ydv3cr:hover{transform:scale(1.05)}}.text-block.svelte-1ydv3cr.svelte-1ydv3cr{margin-top:0.2rem;position:relative;width:50%}.text-block.svelte-1ydv3cr h2.svelte-1ydv3cr{margin-top:1.6rem;color:hsl(248deg, 5%, 90%)}p.description.svelte-1ydv3cr.svelte-1ydv3cr{margin-block:1.5rem;font-family:"Larsseit", sans-serif;font-size:clamp(0.8rem, 1.9vw, 1.1rem);color:hsl(247deg, 53%, 90%);overflow:hidden;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical}@media only screen and (max-width: 1000px){p.description.svelte-1ydv3cr.svelte-1ydv3cr{-webkit-line-clamp:4 !important}}.actions-bottom.svelte-1ydv3cr.svelte-1ydv3cr{width:100%;position:absolute;inset:0;top:auto;display:flex;justify-content:space-between;align-items:center}.actions-bottom.svelte-1ydv3cr .author.svelte-1ydv3cr{display:flex}.actions-bottom.svelte-1ydv3cr .left.svelte-1ydv3cr{border:3px solid rgba(var(--color), 0.1);border-radius:100%;margin-right:0.5rem}.actions-bottom.svelte-1ydv3cr .left img.svelte-1ydv3cr{border-radius:100%;width:3.3rem;height:3.3rem}.actions-bottom.svelte-1ydv3cr .right.svelte-1ydv3cr{margin:auto 0}.actions-bottom.svelte-1ydv3cr .half-container.svelte-1ydv3cr{width:5.5rem;line-height:1.1rem}.actions-bottom.svelte-1ydv3cr .half-container #author-name.svelte-1ydv3cr{color:hsl(240deg, 5%, 98%);font-weight:500}.actions-bottom.svelte-1ydv3cr .half-container #date-published.svelte-1ydv3cr{font-size:0.9rem;color:hsl(223deg, 25%, 76%)}.actions.svelte-1ydv3cr button.svelte-1ydv3cr{all:unset;cursor:pointer;color:hsl(240deg, 5%, 98%)}@media(hover: hover) and (pointer: fine){.actions.svelte-1ydv3cr button.svelte-1ydv3cr:hover svg{background:rgba(var(--color), 0.1);color:rgba(var(--color), 1)}}.actions.svelte-1ydv3cr button.svelte-1ydv3cr svg{border-radius:0.8rem;padding:0.3em 0.3em}.actions.svelte-1ydv3cr svg{width:100%;height:100%;font-size:1.6em;vertical-align:middle;transition:0.2s}.btn.svelte-1ydv3cr.svelte-1ydv3cr{background:rgba(var(--color), 0.1);outline:0.2px solid rgb(var(--color))}.btn.svelte-1ydv3cr.svelte-1ydv3cr:hover{background:rgb(var(--color));color:hsl(249deg, 26%, 10%)}@media only screen and (max-width: 768px){.featured.svelte-1ydv3cr.svelte-1ydv3cr{width:100%;border:0;padding:0}.featured.svelte-1ydv3cr.svelte-1ydv3cr::after{display:none}.featured.svelte-1ydv3cr.svelte-1ydv3cr:before{z-index:1;content:"";position:absolute;width:100%;height:100%;border-radius:1rem;background:rgba(var(--color), 0.5)}.category.svelte-1ydv3cr.svelte-1ydv3cr{background:none}.featured-badge.svelte-1ydv3cr.svelte-1ydv3cr{margin-top:0.3ch}.featured-badge.svelte-1ydv3cr span.svelte-1ydv3cr{display:none !important}.featured-wrapper.svelte-1ydv3cr.svelte-1ydv3cr{height:22rem;position:relative}.featured-wrapper.svelte-1ydv3cr .image.svelte-1ydv3cr{border-radius:1rem;position:absolute;width:100%;height:100%}.featured-wrapper.svelte-1ydv3cr .image img.svelte-1ydv3cr{filter:blur(10px) grayscale(0.3) brightness(0.3)}.featured-wrapper.svelte-1ydv3cr .text-block.svelte-1ydv3cr{z-index:2;top:2rem;width:100%;color:hsl(223deg, 25%, 76%);min-width:10rem;padding:0 3rem 0 2rem;padding-right:min(3vw, 3rem);font-size:clamp(0.7rem, 3vmin, 0.8rem)}.featured-wrapper.svelte-1ydv3cr .text-block .author.svelte-1ydv3cr{display:none}.featured-wrapper.svelte-1ydv3cr h2.svelte-1ydv3cr{width:90%;margin-block:1rem 0.5rem;line-height:2rem;font-family:"Lexend", sans-serif;font-weight:bolder !important;color:hsl(248deg, 5%, 90%);font-size:clamp(2em, 1.5em, 5%)}.featured-wrapper.svelte-1ydv3cr .description.svelte-1ydv3cr{margin-top:1rem;width:90%;line-height:20px;word-break:break-all;height:11ch !important;color:rgba(255, 255, 255, 0.7)}.featured-wrapper.svelte-1ydv3cr .info a.svelte-1ydv3cr,.featured-wrapper.svelte-1ydv3cr .info span.svelte-1ydv3cr,.featured-wrapper.svelte-1ydv3cr .info.svelte-1ydv3cr svg{color:rgba(255, 255, 255, 0.8);padding:0;font-size:0.9rem}.featured-wrapper.svelte-1ydv3cr .info #sep.svelte-1ydv3cr{color:rgba(255, 255, 255, 0.3)}.actions.svelte-1ydv3cr svg{font-size:x-large;background:rgba(var(--color), 0.2)}.actions-bottom.svelte-1ydv3cr.svelte-1ydv3cr{position:absolute;justify-content:right;margin-left:-2rem;bottom:3rem}.actions-bottom.svelte-1ydv3cr .actions button.svelte-1ydv3cr{border:1px solid rgba(255, 255, 255, 0.3);border-radius:100%;margin-inline:0.2rem}}@media only screen and (max-width: 420px){h2.svelte-1ydv3cr.svelte-1ydv3cr{font-size:smaller}.description.svelte-1ydv3cr.svelte-1ydv3cr{height:33% !important}}',
  map: null
};
const Featured = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showToast, $$unsubscribe_showToast;
  let $message, $$unsubscribe_message;
  let $description, $$unsubscribe_description;
  let $savedItems, $$unsubscribe_savedItems;
  $$unsubscribe_showToast = subscribe(showToast, (value) => $showToast = value);
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  $$unsubscribe_savedItems = subscribe(savedItems, (value) => $savedItems = value);
  let { post } = $$props;
  checkSaved(post.slug);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$2);
  $$unsubscribe_showToast();
  $$unsubscribe_message();
  $$unsubscribe_description();
  $$unsubscribe_savedItems();
  return `${$showToast ? `${validate_component(Toast, "Toast").$$render(
    $$result,
    {
      message: $message,
      description: $description,
      show: $showToast
    },
    {},
    {}
  )}` : ``}



<section class="${"featured svelte-1ydv3cr"}" style="${"--color: " + escape(post.color, true)}"><div class="${"featured-wrapper svelte-1ydv3cr"}"><div class="${"image svelte-1ydv3cr"}"><img class="${"img svelte-1ydv3cr"}"${add_attribute("src", post.featuredImage.asset.metadata.lqip, 0)}${add_attribute("data-src", post.coverImage, 0)} alt="${"thumbnail"}"${add_attribute("title", post.imageSrc, 0)}></div>
		<div class="${"text-block svelte-1ydv3cr"}"><div class="${"info svelte-1ydv3cr"}"><a title="${"Category"}" class="${"category svelte-1ydv3cr"}"${add_attribute("category", post.category, 0)} href="${"/blogs/explore/" + escape(post.category, true)}">${validate_component(Icon, "Icon").$$render($$result, { icon: post.symbol }, {}, {})}<span class="${"svelte-1ydv3cr"}">${escape(post.category)}</span></a>
				<span id="${"sep"}" class="${"svelte-1ydv3cr"}">•</span>
				<span class="${"ert svelte-1ydv3cr"}"><span title="${"Estimated Read Time"}" class="${"svelte-1ydv3cr"}">${escape(post.ert)}</span></span>
				<span class="${"featured-badge shine featured-text svelte-1ydv3cr"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxs:star" }, {}, {})}
					<span class="${"svelte-1ydv3cr"}">FEATURED</span></span></div>

			<a id="${"title"}"${add_attribute("href", post.url, 0)} data-sveltekit-preload-data="${"hover"}" class="${"svelte-1ydv3cr"}"><h2 class="${"svelte-1ydv3cr"}">${escape(post.title)}</h2></a>
			<p class="${"description svelte-1ydv3cr"}">${escape(post.description)}</p>
			<div class="${"actions-bottom svelte-1ydv3cr"}"><div class="${"author svelte-1ydv3cr"}"><div class="${"left svelte-1ydv3cr"}"><img src="${"/img/sample/pfp1.png"}" alt="${"author"}" id="${"author-pfp"}" class="${"svelte-1ydv3cr"}"></div>
					<div class="${"right svelte-1ydv3cr"}"><div class="${"half-container svelte-1ydv3cr"}"><span id="${"author-name"}" class="${"svelte-1ydv3cr"}">NotYasho</span></div>
						<div class="${"half-container svelte-1ydv3cr"}"><span id="${"date-published"}" class="${"svelte-1ydv3cr"}">${escape(post.daysAgo)}</span></div></div></div>

				
				${``}

				<div class="${"actions svelte-1ydv3cr"}"><button id="${"save"}" title="${"Save Article"}" class="${"svelte-1ydv3cr"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:bookmark" + ($savedItems.includes(post.slug) ? "-remove-" : "-add-outline-") + "rounded"
    },
    {},
    {}
  )}</button>
					<button title="${"Share"}" id="${"share"}" class="${"svelte-1ydv3cr"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "material-symbols:forward" }, {}, {})}</button></div></div></div></div>
</section>`;
});
const FeaturedCarrousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.carousel-item.svelte-87gxy4{width:100%;flex-shrink:0}.carousel-item.svelte-87gxy4:hover::after{opacity:0.1}.carousel-item.svelte-87gxy4::after{right:0;top:0;content:"";width:100%;position:absolute;pointer-events:none;height:50vh;opacity:0;z-index:101;transition:0.4s;background-image:linear-gradient(180deg, rgba(var(--avg-color), 1) 0%, rgba(2, 0, 36, 0) 100%)}@media only screen and (max-width: 420px){.carousel-item.svelte-87gxy4::after{opacity:0.1}}',
  map: null
};
const FeaturedCarrousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  return `<section class="${"carousel"}">${each(posts, (post) => {
    return `<div class="${"carousel-item svelte-87gxy4"}" style="${"--avg-color: " + escape(post.color, true)}">${validate_component(Featured, "Featured").$$render($$result, { post }, {}, {})}
		</div>`;
  })}
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".categories.svelte-gil3wg.svelte-gil3wg{position:relative;width:100%;height:100%}.categories.svelte-gil3wg a.svelte-gil3wg{display:none}.latest.svelte-gil3wg h2.svelte-gil3wg,.categories.svelte-gil3wg h2.svelte-gil3wg{font-size:1.5rem;margin-top:2rem;margin-bottom:2rem;color:hsl(248deg, 5%, 90%);font-weight:600}.categories.svelte-gil3wg h2.svelte-gil3wg{margin-top:0rem}@media screen and (max-width: 768px){h2.svelte-gil3wg.svelte-gil3wg{font-size:1.3rem;color:hsl(248deg, 5%, 90%);font-weight:400}}@media only screen and (max-width: 420px){.categories.svelte-gil3wg a.svelte-gil3wg{position:absolute;display:inline;right:0;color:hsl(247deg, 100%, 80%)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let featuredPosts = data.blogs.filter((blog) => blog.featured === true).slice(0, 1);
  let latestPosts = data.blogs.filter((blog) => !featuredPosts.find((fp) => fp.title === blog.title));
  featuredPosts.forEach((post) => {
    post.coverImage = post.coverImage + "?w=1000&fm=webp";
    post.color = lighten(post.avgColor, 0.75);
  });
  latestPosts.forEach((post) => {
    post.coverImage = post.coverImage + "?w=400&fm=webp";
  });
  data.categories.forEach((category) => {
    category.coverImage = category.image.asset.url + "?w=200&fm=webp";
    category.placeholderImage = category.image.asset.metadata.lqip;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="${"featured"}">${validate_component(FeaturedCarrousel, "FeaturedCarrousel").$$render($$result, { posts: featuredPosts }, {}, {})}</section>

<section class="${"categories svelte-gil3wg"}"><h2 class="${"highlight svelte-gil3wg"}" id="${"categories-browse"}">Browse categories</h2>
	<a href="${"/blogs/explore"}" class="${"svelte-gil3wg"}">View all</a>
	${validate_component(CategoriesGrid, "CategoriesGrid").$$render($$result, { categories: data.categories }, {}, {})}</section>

<section class="${"latest svelte-gil3wg"}"><h2 id="${"latest-articles"}" class="${"highlight svelte-gil3wg"}">Latest Posts</h2>
	${validate_component(PostGrid, "PostGrid").$$render($$result, { posts: latestPosts }, {}, {})}
</section>`;
});
export {
  Page as default
};
