import { c as create_ssr_component, e as escape, j as each, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/functions.js";
/* empty css                                                    */const Jumper_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-c0n7a9{width:var(--size);height:var(--size)}.circle.svelte-c0n7a9{border-radius:100%;animation-fill-mode:both;position:absolute;opacity:0;width:var(--size);height:var(--size);background-color:var(--color);animation:svelte-c0n7a9-bounce var(--duration) linear infinite}.pause-animation.svelte-c0n7a9{animation-play-state:paused}@keyframes svelte-c0n7a9-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}",
  map: null
};
const Jumper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const durationUnitRegex = /[a-zA-Z]/;
  const calculateRgba = (color2, opacity) => {
    if (color2[0] === "#") {
      color2 = color2.slice(1);
    }
    if (color2.length === 3) {
      let res = "";
      color2.split("").forEach((c) => {
        res += c;
        res += c;
      });
      color2 = res;
    }
    const rgbValues = (color2.match(/.{2}/g) || []).map((hex) => parseInt(hex, 16)).join(", ");
    return `rgba(${rgbValues}, ${opacity})`;
  };
  const range = (size2, startAt = 0) => [...Array(size2).keys()].map((i) => i + startAt);
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "1s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
  let durationNum = duration.replace(durationUnitRegex, "");
  if ($$props.durationUnitRegex === void 0 && $$bindings.durationUnitRegex && durationUnitRegex !== void 0)
    $$bindings.durationUnitRegex(durationUnitRegex);
  if ($$props.calculateRgba === void 0 && $$bindings.calculateRgba && calculateRgba !== void 0)
    $$bindings.calculateRgba(calculateRgba);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-c0n7a9"}" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(3, 1), (version) => {
    return `<div class="${["circle svelte-c0n7a9", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"animation-delay: " + escape(+durationNum / 3 * (version - 1) + durationUnit, true) + ";"}"></div>`;
  })}
</div>`;
});
const fonts = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-hj87sx{height:100%;min-height:100vh;max-width:100%;padding:1.4rem 2rem 2rem 1rem;margin-left:4.8rem;margin-top:4.2rem}@media only screen and (max-width: 768px){main.svelte-hj87sx{width:100%;margin:0;margin-top:4rem;padding:4vh 5vw 12vh 5vw}}section.svelte-hj87sx::before,section.svelte-hj87sx::after{content:"";width:50vw;position:fixed;pointer-events:none;height:100vh;opacity:0.5;z-index:100;animation:svelte-hj87sx-growGradient 2s ease-in}section.svelte-hj87sx::before{left:0;bottom:0;background-image:radial-gradient(at 45% 100%, hsla(247deg, 51%, 67%, 0.3) 0px, transparent 50%)}section.svelte-hj87sx::after{right:0;top:0;background-image:radial-gradient(at 100% 15%, hsla(247deg, 51%, 67%, 0.3) 0px, transparent 50%)}img.svelte-hj87sx{position:absolute;border-radius:50%;width:4rem}.loader.svelte-hj87sx{position:absolute;display:flex;align-items:center;justify-content:center;inset:0}@keyframes svelte-hj87sx-growGradient{0%{opacity:0.2}100%{opacity:0.5}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1se4e6w_START -->${$$result.title = `<title>Blogs | NotYasho</title>`, ""}<meta name="${"title"}" content="${"Blogs | NotYasho"}"><meta name="${"description"}" content="${"Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."}"><meta name="${"image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/blogs"}"><meta property="${"og:title"}" content="${"Blogs | NotYasho"}"><meta property="${"og:description"}" content="${"Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."}"><meta property="${"og:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png"}"><meta property="${"twitter:card"}" content="${"summary_large_image"}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/blogs"}"><meta property="${"twitter:title"}" content="${"Blogs | NotYasho"}"><meta property="${"twitter:description"}" content="${"Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."}"><meta property="${"twitter:image"}" content="${"https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png"}"><!-- HEAD_svelte-1se4e6w_END -->`, ""}

${`<section class="${"svelte-hj87sx"}"><div class="${"loader svelte-hj87sx"}">${validate_component(Jumper, "Jumper").$$render(
    $$result,
    {
      color: "	#933b6d",
      size: "125",
      duration: "1.3s"
    },
    {},
    {}
  )}
			<img src="${"../../img/favicon/logo.webp"}" alt="${""}" class="${"svelte-hj87sx"}"></div></section>`}`;
});
export {
  Layout as default
};
