import { c as create_ssr_component, e as escape, v as validate_component, b as subscribe, k as add_attribute, j as each } from "./index2.js";
import { I as Icon } from "./Icon.js";
/* empty css                                     */import { w as writable } from "./index.js";
const css$2 = {
  code: '.toast.svelte-1wsdi9b.svelte-1wsdi9b{position:fixed;left:50%;bottom:45px;transform:translateX(-50%);background:hsla(248deg, 28%, 11%, 0.85);border-radius:14px;border-left:0.5rem solid hsl(247deg, 100%, 80%);padding:1.25rem 2.18rem 1.25rem 1.56rem;z-index:100;overflow:hidden;backdrop-filter:blur(10px);will-change:transform, bottom;transition:bottom 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.toast.svelte-1wsdi9b .toast-content.svelte-1wsdi9b{display:flex;align-items:center}.toast.svelte-1wsdi9b .message.svelte-1wsdi9b{display:flex;flex-direction:column;margin:0 1.125rem}.toast.svelte-1wsdi9b .message .text.svelte-1wsdi9b{color:hsl(240deg, 5%, 98%);font-weight:400;font-size:clamp(0.7rem, 3vmin, 1rem)}.toast.svelte-1wsdi9b .message .text-1.svelte-1wsdi9b{font-weight:600;color:hsl(248deg, 5%, 90%)}.toast.svelte-1wsdi9b .close.svelte-1wsdi9b svg{position:relative;font-size:larger;top:-20px;right:-12px;cursor:pointer;opacity:0.7;transition:opacity 0.3s}.toast.svelte-1wsdi9b .close.svelte-1wsdi9b svg:hover{opacity:1;transform:scale(1.1)}.toast.svelte-1wsdi9b .progress.svelte-1wsdi9b{position:absolute;bottom:0;left:0;height:3px;width:100%;background:#7866ff}.toast.svelte-1wsdi9b .progress.svelte-1wsdi9b::before{content:"";position:absolute;bottom:0;right:0;height:100%;width:100%;background:hsl(247deg, 100%, 80%)}.toast.svelte-1wsdi9b .progress.svelte-1wsdi9b::before{animation:svelte-1wsdi9b-progress 2s linear forwards}@media all and (max-width: 768px){.toast.svelte-1wsdi9b.svelte-1wsdi9b{width:88%;bottom:70px}}.checkmark__circle.svelte-1wsdi9b.svelte-1wsdi9b{stroke-dasharray:216;stroke-dashoffset:216;stroke-width:2;stroke-miterlimit:10;stroke:hsl(247deg, 100%, 80%);fill:none;animation:svelte-1wsdi9b-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards}.checkmark.svelte-1wsdi9b.svelte-1wsdi9b{width:48px;height:auto;border-radius:50%;display:block;stroke-width:2;stroke:#000000;stroke-miterlimit:10;box-shadow:inset 0px 0px 0px hsl(247deg, 100%, 80%);animation:svelte-1wsdi9b-fill 0.4s ease-in-out 0.4s forwards, svelte-1wsdi9b-scale 0.3s ease-in-out 0.9s both}.checkmark__check.svelte-1wsdi9b.svelte-1wsdi9b{transform-origin:50% 50%;stroke-dasharray:98;stroke-dashoffset:98;animation:svelte-1wsdi9b-stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards}@keyframes svelte-1wsdi9b-stroke{100%{stroke-dashoffset:0}}@keyframes svelte-1wsdi9b-scale{0%,100%{transform:none}50%{transform:scale3d(1.1, 1.1, 1)}}@keyframes svelte-1wsdi9b-fill{100%{box-shadow:inset 0px 0px 0px 80px hsl(247deg, 100%, 80%)}}@keyframes svelte-1wsdi9b-progress{0%{right:0%}100%{right:100%}}',
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message: message2 } = $$props;
  let { description: description2 } = $$props;
  let { show } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message2 !== void 0)
    $$bindings.message(message2);
  if ($$props.description === void 0 && $$bindings.description && description2 !== void 0)
    $$bindings.description(description2);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$2);
  return `${show ? `<div class="${"toast svelte-1wsdi9b"}"><div class="${"toast-content svelte-1wsdi9b"}"><svg class="${"checkmark svelte-1wsdi9b"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 52 52"}"><circle class="${"checkmark__circle svelte-1wsdi9b"}" cx="${"26"}" cy="${"26"}" r="${"25"}" fill="${"none"}"></circle><path class="${"checkmark__check svelte-1wsdi9b"}" fill="${"none"}" d="${"M14.1 27.2l7.1 7.2 16.7-16.8"}"></path></svg>
			<div class="${"message svelte-1wsdi9b"}"><span class="${"text text-1 svelte-1wsdi9b"}">${escape(message2)}</span>
				<span class="${"text text-2 svelte-1wsdi9b"}">${escape(description2)}</span></div>
			
			<div class="${"close svelte-1wsdi9b"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "material-symbols:close-rounded" }, {}, {})}</div>
			<div class="${"progress svelte-1wsdi9b"}"></div></div></div>` : ``}`;
});
const showToast = writable(false);
const message = writable("");
const description = writable("");
const savedItems = writable([]);
savedItems.subscribe((value) => value);
function checkSaved(slug) {
  const $savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
  savedItems.set($savedItems);
  return $savedItems.includes(slug);
}
const PostCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.card.svelte-2ick2m.svelte-2ick2m{position:relative;height:calc(100% + 2rem);max-width:630px;background:hsla(248deg, 16%, 15%, 0.35);border-radius:1.5rem;transition:all 200ms ease-in-out, transform 100ms;padding:0.7rem}.card.svelte-2ick2m .card-image.svelte-2ick2m{width:100%;height:13rem;overflow:hidden;border-radius:1em;transition:all 200ms ease-in-out}.card.svelte-2ick2m .card-image img.svelte-2ick2m{width:100%;height:100%;object-fit:cover;object-position:center center !important;transition:transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)}@media(hover: hover) and (pointer: fine){.card.svelte-2ick2m .card-image img.svelte-2ick2m:hover{transform:scale(1.05)}}.card.svelte-2ick2m .card-content.svelte-2ick2m{padding:0 0.5rem 0.5rem 0.5rem}.card.svelte-2ick2m .card-header.svelte-2ick2m{font-size:smaller;margin:1rem 0 1rem 0;font-family:"Poppins", sans-serif;display:flex;gap:1ch;align-items:center;flex-direction:row}.card.svelte-2ick2m .card-info a.svelte-2ick2m{text-decoration:none;transition:0.2s}@media(hover: hover) and (pointer: fine){.card.svelte-2ick2m .card-info a.svelte-2ick2m:hover{filter:brightness(0.9)}}.card.svelte-2ick2m .card-info .card-title.svelte-2ick2m{font-size:1.2rem;color:hsl(248deg, 5%, 90%);font-family:"Larsseit", sans-serif;font-weight:500}.card.svelte-2ick2m .card-info .card-text.svelte-2ick2m{margin-block:0.7rem;font-size:small;line-height:1.1rem;color:hsl(223deg, 25%, 76%);overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.card.svelte-2ick2m .card-info .tags.svelte-2ick2m{position:absolute;bottom:1rem;display:flex;flex-wrap:wrap;margin-top:0.5rem;gap:0.5rem;font-size:0.8rem;font-family:"Poppins", sans-serif;font-weight:500;color:hsl(223deg, 25%, 76%)}.card.svelte-2ick2m .card-info .tags .tag-link.svelte-2ick2m{display:flex;align-items:center;gap:0.2rem;color:hsl(223deg, 25%, 76%);border-radius:1rem;background:rgba(52, 49, 68, 0.35);padding:0.2rem 0.5rem;transition:0.2s}.card.svelte-2ick2m .card-info .tags .tag-name.svelte-2ick2m{font-size:0.8rem;font-family:"Poppins", sans-serif;font-weight:500;color:hsl(223deg, 25%, 76%)}.card.svelte-2ick2m .card-info .actions.svelte-2ick2m{position:absolute;right:1rem;bottom:1rem}.card.svelte-2ick2m .card-info .actions .save-btn.svelte-2ick2m,.card.svelte-2ick2m .card-info .actions .share-btn.svelte-2ick2m{all:unset;cursor:pointer;color:hsl(240deg, 5%, 98%)}.card.svelte-2ick2m .card-info .actions .save-btn.svelte-2ick2m svg,.card.svelte-2ick2m .card-info .actions .share-btn.svelte-2ick2m svg{font-size:1.3rem;background:rgba(var(--color), 0.1);border-radius:0.6em;padding:0.3em 0.3em;color:rgb(var(--color))}@media(hover: hover) and (pointer: fine){.card.svelte-2ick2m .card-info .actions .save-btn.svelte-2ick2m:hover svg,.card.svelte-2ick2m .card-info .actions .share-btn.svelte-2ick2m:hover svg{background:rgba(var(--color), 0.3)}}.card.svelte-2ick2m .card-info .actions.svelte-2ick2m svg{width:100%;height:100%;font-size:large;vertical-align:middle;transition:0.2s}@media(min-width: 768px){.card.svelte-2ick2m.svelte-2ick2m{max-width:420px}}@media(hover: hover) and (pointer: fine){.card.svelte-2ick2m.svelte-2ick2m:hover{filter:brightness(1.1);box-shadow:0px 4px 20px 5px rgba(16, 16, 25, 0.2)}.card.svelte-2ick2m:hover .card-image.svelte-2ick2m{filter:brightness(0.9)}}@media screen and (max-width: 768px){.card-content.svelte-2ick2m .category.svelte-2ick2m{padding:0;background:none}}@media screen and (max-width: 420px){.card.svelte-2ick2m.svelte-2ick2m{padding:0.5rem;background:none}.card-image.svelte-2ick2m.svelte-2ick2m{height:auto !important;margin-inline:calc(-50vw + 50%);width:100vw !important;border-radius:0 !important;height:auto !important;max-height:18rem}}',
  map: null
};
const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showToast, $$unsubscribe_showToast;
  let $message, $$unsubscribe_message;
  let $description, $$unsubscribe_description;
  let $savedItems, $$unsubscribe_savedItems;
  $$unsubscribe_showToast = subscribe(showToast, (value) => $showToast = value);
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  $$unsubscribe_savedItems = subscribe(savedItems, (value) => $savedItems = value);
  let { post } = $$props;
  let { i } = $$props;
  checkSaved(post.slug);
  if (post.tags) {
    post.tags = post.tags.slice(0, 2);
  }
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css$1);
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

<div class="${"card svelte-2ick2m"}"${add_attribute("style", `--color: ${post.color}`, 0)}><a${add_attribute("href", post.url, 0)} class="${"article-link svelte-2ick2m"}"><div class="${"card-image svelte-2ick2m"}"><img${add_attribute("data-src", post.coverImage, 0)}${add_attribute("src", post.featuredImage.asset.metadata.lqip, 0)} alt="${"thumbnail"}"${add_attribute("title", post.imageSrc, 0)} class="${"svelte-2ick2m"}"></div></a>
	<div class="${"card-content svelte-2ick2m"}"><div class="${"card-header svelte-2ick2m"}"><a${add_attribute("category", post.category, 0)} class="${"category svelte-2ick2m"}" title="${"Category"}" href="${"/blogs/explore/" + escape(post.category, true)}" style="${"--color: " + escape(post.color, true)}">${validate_component(Icon, "Icon").$$render($$result, { icon: post.symbol }, {}, {})}<span>${escape(post.category)}</span></a>
			${post.ert ? `<span id="${"sep"}">•</span>
				<span class="${"ert"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bx:time" }, {}, {})}
					<span title="${"Estimated reading time"}">${escape(post.ert)}</span></span>` : ``}
			${post.daysAgo ? `<span id="${"sep"}">•</span>
				<span class="${"date"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bx:calendar" }, {}, {})}
					<span title="${"Date Published"}">${escape(post.daysAgo)}</span></span>` : ``}</div>
		<div class="${"card-info"}"><a${add_attribute("href", post.url, 0)} class="${"article-link svelte-2ick2m"}" data-sveltekit-preload-data="${"hover"}"><span class="${"card-title svelte-2ick2m"}">${escape(post.title)}</span></a>
			<p class="${"card-text svelte-2ick2m"}">${escape(post.description)}</p>
			
			${post.tags ? `<div class="${"tags svelte-2ick2m"}">${each(post.tags, (tag) => {
    return `<div href="${"/blogs/explore/" + escape(tag, true)}" class="${"tag-link svelte-2ick2m"}" title="${"Tag"}" style="${"--color: " + escape(post.color, true)}">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:pound" }, {}, {})}<span class="${"tag-name svelte-2ick2m"}">${escape(tag)}</span>
						</div>`;
  })}</div>` : ``}
			<div class="${"actions svelte-2ick2m"}"><button class="${"save-btn svelte-2ick2m"}" title="${"Save"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:bookmark" + ($savedItems.includes(post.slug) ? "-remove-" : "-add-outline-") + "rounded"
    },
    {},
    {}
  )}</button>
				<button title="${"Share"}" class="${"share-btn svelte-2ick2m"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "material-symbols:forward" }, {}, {})}</button></div></div></div>
</div>`;
});
const PostGrid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".articles-grid.svelte-bsgqjf{display:grid;grid-auto-columns:100px;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-gap:3rem 1rem;transition:all 200ms ease-in-out}@media screen and (max-width: 768px){.articles-grid.svelte-bsgqjf{margin-inline:-1rem}}",
  map: null
};
const PostGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let grid;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="${"articles-grid svelte-bsgqjf"}"${add_attribute("this", grid, 0)}>${each(posts, (post, i) => {
    return `${validate_component(PostCard, "PostCard").$$render($$result, { post, i }, {}, {})}`;
  })}
</div>`;
});
export {
  PostGrid as P,
  Toast as T,
  savedItems as a,
  checkSaved as c,
  description as d,
  message as m,
  showToast as s
};
