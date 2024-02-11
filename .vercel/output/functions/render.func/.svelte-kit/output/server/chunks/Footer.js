import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, d as null_to_empty } from "./index2.js";
import { p as page } from "./stores.js";
import { I as Icon } from "./Icon.js";
/* empty css                                      */import { L as Logo } from "./logo.js";
const css$3 = {
  code: ".sidebar.svelte-1nq6a0e.svelte-1nq6a0e{position:fixed;width:4.5rem;height:100vh;list-style:none;top:0;padding:0.4rem 0.9rem;z-index:102;will-change:transform;background:hsl(248deg, 28%, 11%);transition:width 0.5s cubic-bezier(0.86, 0, 0.07, 1)}.sidebar.svelte-1nq6a0e #hamb.svelte-1nq6a0e{position:fixed;background:none;margin:0;padding:0;font-size:1.7rem;left:1.35rem;line-height:4.1rem;color:hsl(223deg, 10%, 70%);cursor:pointer}.sidebar.svelte-1nq6a0e ul.svelte-1nq6a0e{height:100%;display:flex;flex-direction:column;padding-block-start:5rem}ul.svelte-1nq6a0e li.svelte-1nq6a0e{height:2.5rem;width:2.5rem;margin-bottom:1.2rem;list-style:none;line-height:2.5rem;position:relative;border-radius:1rem;background:linear-gradient(136.91deg, hsl(248deg, 28%, 11%) 0%, hsl(256deg, 23%, 18%) 50%, hsl(248deg, 28%, 11%) 100%);transition:0.2s cubic-bezier(0.86, 0, 0.07, 1), filter 0.3s;transition-delay:0.1s;cursor:pointer}ul.svelte-1nq6a0e li.svelte-1nq6a0e svg{position:absolute;top:50%;transform:translateY(-50%);font-size:1.3125rem}ul.svelte-1nq6a0e li a.svelte-1nq6a0e{all:unset;display:block;padding:0rem 0.6rem 0 0.6rem;color:hsl(223deg, 10%, 70%);white-space:nowrap;text-decoration:none;transition:0.2s}ul.svelte-1nq6a0e li a.svelte-1nq6a0e:active{transform:scale(0.98)}ul.svelte-1nq6a0e li.svelte-1nq6a0e:nth-last-child(2){margin-top:auto}@media(hover: hover) and (pointer: fine){ul.svelte-1nq6a0e li.svelte-1nq6a0e:hover{filter:brightness(1.2);transition:all 0.1s ease-in-out}}ul.svelte-1nq6a0e li.svelte-1nq6a0e:active{filter:brightness(0.9)}ul.svelte-1nq6a0e li span.svelte-1nq6a0e{font-size:smaller;font-weight:500;margin-left:2.8rem;transform:scale(0) translateX(-100%);transform-origin:left;opacity:0;pointer-events:none;transition:all 0.1s ease-in-out;transition-delay:0.2s}ul.svelte-1nq6a0e li.active a.svelte-1nq6a0e{color:hsl(248deg, 5%, 90%)}ul.svelte-1nq6a0e li.active#home.svelte-1nq6a0e{background:linear-gradient(136deg, #6400ff 0%, #802bff 50%, #6400ff 100%)}ul.svelte-1nq6a0e li.active#search.svelte-1nq6a0e{background:linear-gradient(136deg, #ff3c00 0%, #ff6e2b 50%, #ff3c00 100%)}ul.svelte-1nq6a0e li.active#explore.svelte-1nq6a0e{background:linear-gradient(136deg, #F94A81 0%, #ff2ec7 50%, #F94A81 100%)}ul.svelte-1nq6a0e li.active#saved.svelte-1nq6a0e{background:linear-gradient(136deg, #008af9 0%, #1b98ff 50%, #008af9 100%)}ul.svelte-1nq6a0e li.active#contact.svelte-1nq6a0e{background:linear-gradient(136deg, #8a68e9 0%, #af71ff 50%, #995bd3 100%)}ul.svelte-1nq6a0e li.active#about.svelte-1nq6a0e{background:linear-gradient(136deg, #4c8077 0%, #63baab 50%, #4c8077 100%)}.sidebar.open.svelte-1nq6a0e.svelte-1nq6a0e{width:15rem}.sidebar.open.svelte-1nq6a0e #hamb.svelte-1nq6a0e svg{color:hsl(247deg, 100%, 80%)}.sidebar.open.svelte-1nq6a0e span.svelte-1nq6a0e{opacity:1;transform:scale(1) translateX(0)}.sidebar.open.svelte-1nq6a0e ul li.svelte-1nq6a0e{width:95%;background:linear-gradient(90deg, hsl(252deg, 18%, 15%) 0%, rgba(63, 51, 82, 0.45) 50%, hsl(252deg, 18%, 15%) 100%)}.sidebar.open.svelte-1nq6a0e ul li.active.svelte-1nq6a0e{background:hsl(266deg, 100%, 55%)}.sidebar.open.svelte-1nq6a0e ul li.svelte-1nq6a0e{border-radius:12px}@media only screen and (max-width: 768px){.sidebar.svelte-1nq6a0e #hamb.svelte-1nq6a0e,.sidebar.svelte-1nq6a0e #search.svelte-1nq6a0e,.sidebar.svelte-1nq6a0e #about.svelte-1nq6a0e{display:none}.sidebar.svelte-1nq6a0e #contact.svelte-1nq6a0e{margin-top:0}.sidebar.svelte-1nq6a0e li.svelte-1nq6a0e{margin-top:0}.sidebar.svelte-1nq6a0e.svelte-1nq6a0e{top:auto;bottom:0;width:100vw;height:4rem;position:fixed;background:hsl(249deg, 26%, 10%);border-top:1px solid hsl(223deg, 21%, 20%);filter:drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.37));padding:0 8vw;overflow:hidden}.sidebar.svelte-1nq6a0e .nav-list.svelte-1nq6a0e{flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:nowrap;position:relative;bottom:2.5rem}ul.svelte-1nq6a0e li.svelte-1nq6a0e{display:inline;padding:0 !important;border-radius:0 !important;background:none !important;position:relative}ul.svelte-1nq6a0e li.svelte-1nq6a0e svg{font-size:1.5rem}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${["sidebar svelte-1nq6a0e", ""].join(" ").trim()}"><button title="${"Menu"}" class="${"link svelte-1nq6a0e"}" id="${"hamb"}">${`${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-menu" }, {}, {})}`}</button>
	<ul class="${"nav-list svelte-1nq6a0e"}"><li id="${"home"}" class="${["svelte-1nq6a0e", $page.url.pathname === "/blogs" ? "active" : ""].join(" ").trim()}"><a href="${"/blogs"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname === "/blogs" ? "bxs:home-smile" : "bx:home-smile"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">Home</span></a></li>
		<li id="${"search"}" class="${[
    "svelte-1nq6a0e",
    $page.url.pathname.startsWith("/blogs/search") ? "active" : ""
  ].join(" ").trim()}"><a href="${"/blogs/search"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname.startsWith("/blogs/search") ? "bxs:search" : "bx:search"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">Search</span></a></li>
		<li id="${"explore"}" class="${[
    "svelte-1nq6a0e",
    $page.url.pathname.startsWith("/blogs/explore") ? "active" : ""
  ].join(" ").trim()}"><a href="${"/blogs/explore"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname.startsWith("/blogs/explore") ? "bxs:compass" : "bx:compass"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">Explore</span></a></li>
		<li id="${"saved"}" class="${["svelte-1nq6a0e", $page.url.pathname === "/blogs/saved" ? "active" : ""].join(" ").trim()}"><a href="${"/blogs/saved"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname === "/blogs/saved" ? "mdi:bookmark-multiple" : "mdi:bookmark-multiple-outline"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">Saved</span></a></li>
		<li id="${"contact"}" class="${["svelte-1nq6a0e", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a href="${"/contact"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname === "/contact" ? "bxs:navigation" : "bx:navigation"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">Contact</span></a></li>
		<li id="${"about"}" class="${["link svelte-1nq6a0e", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}" class="${"svelte-1nq6a0e"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: $page.url.pathname === "/about" ? "material-symbols:info-rounded" : "material-symbols:info-outline-rounded"
    },
    {},
    {}
  )}
				<span class="${"svelte-1nq6a0e"}">About</span></a></li></ul>
</nav>`;
});
const css$2 = {
  code: "div.svelte-1kt2p2r{position:fixed;z-index:100;width:100%;top:0;transition:transform 300ms linear}.show.svelte-1kt2p2r{transform:translateY(0%)}.hide.svelte-1kt2p2r{transform:translateY(-100%)}",
  map: null
};
const VanishingHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = "300ms" } = $$props;
  let { offset = 0 } = $$props;
  let { tolerance = 0 } = $$props;
  let headerClass = "show";
  let y = 0;
  let lastY = 0;
  function deriveClass(y2, dy) {
    if (y2 < offset) {
      return "show";
    }
    if (Math.abs(dy) <= tolerance) {
      return headerClass;
    }
    if (dy > 0) {
      return "show";
    }
    return "hide";
  }
  function updateClass(y2) {
    const dy = lastY - y2;
    lastY = y2;
    return deriveClass(y2, dy);
  }
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.tolerance === void 0 && $$bindings.tolerance && tolerance !== void 0)
    $$bindings.tolerance(tolerance);
  $$result.css.add(css$2);
  headerClass = updateClass(y);
  return `

<div class="${escape(null_to_empty(headerClass + " vanishingHeader"), true) + " svelte-1kt2p2r"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css$1 = {
  code: '.search-btn.svelte-1u21nm3 svg,back-btn.svelte-1u21nm3 svg{pointer-events:none}header.svelte-1u21nm3.svelte-1u21nm3{height:4.2rem;display:flex;justify-content:space-between;align-items:center;margin-left:4.5rem;padding-inline:1.5rem 2rem;z-index:100;background-color:hsl(248deg, 28%, 11%)}.logo.svelte-1u21nm3 svg{margin-top:2rem;width:12.5rem}a.svelte-1u21nm3.svelte-1u21nm3{text-decoration:none}header.svelte-1u21nm3 .search.svelte-1u21nm3{width:calc(100% - 20rem);z-index:103;transition:width 0.2s ease-in-out}header.svelte-1u21nm3 .search:focus-within .search-btn.svelte-1u21nm3:hover{background:hsl(261deg, 100%, 50%);color:hsl(240deg, 5%, 98%)}header.svelte-1u21nm3 .search input.svelte-1u21nm3{width:70%;height:2.3rem;padding:1em;outline:none;border:1.8px solid transparent;border-radius:0.5vmax;font-family:"TabletGothicW02", sans-serif;color:hsl(223deg, 25%, 76%);background:hsl(252deg, 18%, 15%);transition:0.2s}@media(hover: hover) and (pointer: fine){header.svelte-1u21nm3 .search input.svelte-1u21nm3:hover{filter:brightness(1.1)}}header.svelte-1u21nm3 .search input.svelte-1u21nm3:focus{border-bottom:1px solid hsl(261deg, 100%, 50%);box-shadow:0 0 1px hsl(249deg, 26%, 10%)}header.svelte-1u21nm3 .search input.svelte-1u21nm3::placeholder{color:hsl(223deg, 25%, 76%);opacity:0.2}header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3{display:inline-flex}header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3,header.svelte-1u21nm3 .search back-btn.svelte-1u21nm3{width:2.3rem;height:2.3rem;position:relative;justify-content:center;align-items:center;border-radius:0.3rem;top:0.1rem;color:hsl(223deg, 10%, 55%);background:hsl(252deg, 18%, 15%);cursor:pointer;filter:brightness(1.1);transition:0.2s ease-in-out}@media(hover: hover) and (pointer: fine){header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3:hover,header.svelte-1u21nm3 .search back-btn.svelte-1u21nm3:hover{filter:brightness(1.2)}}header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3 svg,header.svelte-1u21nm3 .search back-btn.svelte-1u21nm3 svg{transition:0.2s ease}.search.svelte-1u21nm3 input:focus .search-btn.svelte-1u21nm3,.search.svelte-1u21nm3 input:focus back-btn.svelte-1u21nm3{color:hsl(248deg, 5%, 90%);background:hsl(261deg, 100%, 50%)}.search.svelte-1u21nm3 input.svelte-1u21nm3:focus::placeholder{opacity:0.4}.github.svelte-1u21nm3.svelte-1u21nm3{width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.6rem;background:hsl(249deg, 14%, 17%);transition:all 0.3s ease-in-out;color:hsl(223deg, 10%, 70%)}.github.svelte-1u21nm3 svg{height:1rem;width:1rem}@media(hover: hover) and (pointer: fine){.github.svelte-1u21nm3.svelte-1u21nm3:hover{background:hsl(261deg, 100%, 50%);color:hsl(240deg, 5%, 98%);box-shadow:-2px 12px 123px 4px hsl(261deg, 100%, 50%)}}back-btn.svelte-1u21nm3.svelte-1u21nm3{display:none}@media only screen and (max-width: 768px){.logo.svelte-1u21nm3.svelte-1u21nm3{margin-right:auto}header.svelte-1u21nm3.svelte-1u21nm3{background:hsla(248deg, 28%, 11%, 0.85);backdrop-filter:blur(10px);margin:0;border-bottom:1px solid hsl(249deg, 14%, 17%);display:flex;align-items:center;justify-content:flex-end;padding-inline:5vw;gap:0.5rem}.search.svelte-1u21nm3.svelte-1u21nm3{width:min-content !important;margin:0;padding:0}header.svelte-1u21nm3 .search input.svelte-1u21nm3{display:none}header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3{border-radius:100%;background:none;font-size:1.2rem;display:flex;transition:background 0.2s}}@media only screen and (max-width: 768px) and (hover: hover) and (pointer: fine){header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3:hover{background:hsla(248deg, 16%, 15%, 0.35)}}@media only screen and (max-width: 768px){header.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3{color:hsl(223deg, 25%, 76%)}}@media only screen and (max-width: 768px){header.open.svelte-1u21nm3.svelte-1u21nm3{background:hsl(248deg, 28%, 11%);justify-content:space-between}header.open.svelte-1u21nm3 .logo.svelte-1u21nm3,header.open.svelte-1u21nm3 .github.svelte-1u21nm3{display:none}header.open.svelte-1u21nm3 .search.svelte-1u21nm3{width:calc(100% - 10vw) !important}header.open.svelte-1u21nm3 .search input.svelte-1u21nm3{display:block}header.open.svelte-1u21nm3 .search back-btn.svelte-1u21nm3{display:inline-flex;position:absolute;left:3vw;top:1rem;border-radius:100%;background:none !important;font-size:1.2rem}header.open.svelte-1u21nm3 .search input.svelte-1u21nm3{position:absolute;top:1rem;left:calc(5vw + 10%);width:calc(80% - 10vw)}header.open.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3,header.open.svelte-1u21nm3 .search back-btn.svelte-1u21nm3{border-radius:0.3rem}header.open.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3{margin-left:102%;right:0}}@media only screen and (max-width: 768px) and (hover: hover) and (pointer: fine){header.open.svelte-1u21nm3 .search .search-btn.svelte-1u21nm3:hover{background:hsl(252deg, 18%, 15%);color:hsl(223deg, 25%, 76%)}}@media only screen and (max-width: 420px){header.svelte-1u21nm3 .github.svelte-1u21nm3{display:none}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `

${validate_component(VanishingHeader, "VanishingHeader").$$render(
    $$result,
    {
      duration: "350ms",
      offset: 50,
      tolerance: 5
    },
    {},
    {
      default: () => {
        return `<header class="${["svelte-1u21nm3", ""].join(" ").trim()}"><div class="${"logo svelte-1u21nm3"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>

		<div class="${"search svelte-1u21nm3"}"><form><back-btn class="${"svelte-1u21nm3"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bx:arrow-back" }, {}, {})}</back-btn>
				<input type="${"search"}" name="${"search"}" placeholder="${"Try searching 'Why doesn't the search bar work?'"}" class="${"svelte-1u21nm3"}">
				<button title="${"Search"}" class="${"search-btn svelte-1u21nm3"}" action="${"submit"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bx:search" }, {}, {})}</button></form></div>

		<a title="${"Source Code"}" class="${"github svelte-1u21nm3"}" href="${"https://www.github.com/NotYasho/NotYasho/"}" target="${"_"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "fa:github" }, {}, {})}</a></header>`;
      }
    }
  )}`;
});
const css = {
  code: 'footer.svelte-ko18ev.svelte-ko18ev{position:relative;margin-top:3rem;padding:20px 0;background:hsl(248deg, 28%, 11%)}footer.svelte-ko18ev a.svelte-ko18ev{color:hsl(247deg, 100%, 80%);transition:color 0.2s}@media(hover: hover) and (pointer: fine){footer.svelte-ko18ev a.svelte-ko18ev:hover{color:hsl(248deg, 5%, 90%)}}footer.svelte-ko18ev.svelte-ko18ev::after{content:"";position:absolute;top:0;left:0;width:100%;height:1px;background-image:linear-gradient(90deg, rgb(255, 0, 187) 0%, rgb(182, 0, 255) 50%, rgb(255, 173, 0) 100%)}footer.svelte-ko18ev .container.svelte-ko18ev{margin:0 auto;max-width:1225px;margin-left:6rem;display:flex;justify-content:space-between;align-items:center}footer.svelte-ko18ev .container p.svelte-ko18ev{margin:0;font-size:14px;color:hsl(223deg, 25%, 76%)}footer.svelte-ko18ev .container .social-links a.svelte-ko18ev{display:inline-block;margin-right:10px}footer.svelte-ko18ev .container .social-links a.svelte-ko18ev svg{font-size:18px;color:#7866ff;transition:color 0.2s}@media(hover: hover) and (pointer: fine){footer.svelte-ko18ev .container .social-links a.svelte-ko18ev svg:hover{color:hsl(247deg, 100%, 80%)}}@media screen and (max-width: 768px){footer.svelte-ko18ev.svelte-ko18ev{margin-top:1rem;margin-bottom:4rem}footer.svelte-ko18ev .container.svelte-ko18ev{margin-inline:auto;padding-inline:2rem;flex-direction:column;align-items:center}footer.svelte-ko18ev .container .social-links.svelte-ko18ev{display:none}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-ko18ev"}"><div class="${"container svelte-ko18ev"}"><p class="${"svelte-ko18ev"}">© <span id="${"year"}"></span>NotYasho ${escape(new Date().getFullYear())}. All rights reserved.</p>
		<p class="${"svelte-ko18ev"}">Made with <span style="${"color: #eb345e"}">♥</span> using <a href="${"https://kit.svelte.dev/"}" class="${"svelte-ko18ev"}">SvelteKit</a>, hosted on
			<a href="${"https://www.netlify.com/"}" class="${"svelte-ko18ev"}">Netlify</a>.
		</p>
		<div class="${"social-links svelte-ko18ev"}"><a href="${"https://www.github.com/notyasho"}" title="${"Github"}" rel="${"noreferrer"}" target="${"_blank"}" class="${"svelte-ko18ev"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:github" }, {}, {})}</a>
			<a href="${"https://t.me/unwantedseventytwo"}" title="${"Telegram"}" rel="${"noreferrer"}" target="${"_blank"}" class="${"svelte-ko18ev"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "basil:telegram-solid" }, {}, {})}</a>
			<a href="${"https://www.reddit.com/u/probablynotyasho"}" title="${"Reddit"}" rel="${"noreferrer"}" target="${"_blank"}" class="${"svelte-ko18ev"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-reddit" }, {}, {})}</a>
			<a href="${"https://www.twitter.com/not_yasho"}" title="${"Twitter"}" rel="${"noreferrer"}" target="${"_blank"}" class="${"svelte-ko18ev"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:twitter" }, {}, {})}</a></div></div>
</footer>`;
});
export {
  Footer as F,
  Header as H,
  Nav as N
};
