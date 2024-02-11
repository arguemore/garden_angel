import { c as create_ssr_component, k as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { Renderer, setOptions, parse } from "marked";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import css$2 from "highlight.js/lib/languages/css";
import markdown from "highlight.js/lib/languages/markdown";
import diff from "highlight.js/lib/languages/diff";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import { l as lighten } from "../../../../chunks/utils.js";
const ScrollProgress_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".progress-bar.svelte-1m3ikz2{position:fixed;top:0;left:0;width:0;height:4px;background-color:hsl(261deg, 100%, 50%);z-index:9999;transition:100ms cubic-bezier(0.075, 0.82, 0.165, 1)}",
  map: null
};
const ScrollProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { articleHeight } = $$props;
  let progressBar;
  if ($$props.articleHeight === void 0 && $$bindings.articleHeight && articleHeight !== void 0)
    $$bindings.articleHeight(articleHeight);
  $$result.css.add(css$1);
  return `<div class="${"progress-bar svelte-1m3ikz2"}"${add_attribute("this", progressBar, 0)}></div>

`;
});
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css$2);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("diff", diff);
hljs.registerLanguage("java", java);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("python", python);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("shell", shell);
const renderer = new Renderer();
renderer.heading = function(text, level, slugger) {
  if (level == 2) {
    return `<h2 display="block" id="${slugger}"><a href="#${slugger}">${text}</a></h2>`;
  } else {
    return `<h${level}>${text}</h${level}>`;
  }
};
renderer.link = function(href, title, text) {
  return `<a href="${href}" target="_blank" title="${title}" rel="noopener noreferrer">${text}</a>`;
};
renderer.image = function(href, title, text) {
  return `<figure>
                  <img src="${href}" loading="lazy" title="${title}" alt="Source: ${text}">
                  <figcaption>${text}</figcaption>
            </figure>`;
};
renderer.code = function(code, lang) {
  let highlightedHTML;
  if (lang && hljs.getLanguage(lang)) {
    highlightedHTML = hljs.highlight(code, { language: lang }).value;
  } else {
    highlightedHTML = hljs.highlightAuto(code).value;
  }
  let lines = highlightedHTML.split("\n");
  lines.forEach((line, index) => {
    lines[index] = `<span class="line-number">${index + 1}</span>${line}`;
  });
  highlightedHTML = lines.join("\n");
  return lang ? `
			<div class="code-block">
				<div class="header">
					<span class="title">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
							<path
								fill="currentColor"
								d="M180.24 147.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L167.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48Zm-72-24a6 6 0 0 0-8.48 0l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 1 0 8.48-8.48L88.49 152l19.75-19.76a6 6 0 0 0 0-8.48ZM214 88v128a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88Zm-56-6h35.52L158 46.48Zm44 134V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2Z"
							/>
						</svg>
						${lang}
					</span>
					<button class="copy-code"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg></button>
				</div>
		  
        <pre><code class="hljs">${highlightedHTML}</code></pre></div>
    ` : `<div class="code-block"><pre><button class="copy-code"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg></button><code class="hljs">${highlightedHTML}</code></pre></div>`;
};
renderer.text = function(text) {
  text = text.replace(/\^([^\^]*)\^/g, "<sup>$1</sup>");
  text = text.replace(/~([^~]*)~/g, "<sub>$1</sub>");
  text = text.replace(/==([^=]*)==/g, "<mark>$1</mark>");
  text = text.replace(/\+\+([^=]*)\+\+/g, "<ins>$1</ins>");
  return text;
};
setOptions({
  renderer,
  smartLists: true,
  breaks: true,
  smartypants: true
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.article-body.svelte-c0stl7.svelte-c0stl7{max-width:800px;margin:-3rem auto;padding:20px;color:hsl(223deg, 25%, 76%);margin-top:40px}@media screen and (max-width: 800px){.article-body.svelte-c0stl7.svelte-c0stl7{padding:10px}}.info.svelte-c0stl7.svelte-c0stl7{text-align:center;height:2rem;margin-bottom:1rem}@media(hover: hover) and (pointer: fine){.info.svelte-c0stl7 a.svelte-c0stl7:hover{filter:brightness(1.1)}}.title.svelte-c0stl7.svelte-c0stl7{margin-block:0.5rem;text-align:center;color:hsl(248deg, 5%, 100%);font-size:2.7rem;font-family:"Larsseit", sans-serif;font-weight:bold;border:none}@media screen and (max-width: 768px){.title.svelte-c0stl7.svelte-c0stl7{font-size:2.4rem}}p.description.svelte-c0stl7.svelte-c0stl7{color:hsl(223deg, 25%, 76%);text-align:center;font-family:"Larsseit", sans-serif !important}.cover.svelte-c0stl7.svelte-c0stl7{position:relative;border-radius:0;margin-inline:calc(-50vw + 50%);width:100vw !important;max-width:100vw;margin-top:5rem;margin-bottom:2rem;object-fit:cover;height:55rem;width:100vw}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let source = data.blogs.body;
  const html = parse(source);
  const readableDate = new Date(data.blogs.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let articleHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16atc2i_START -->${$$result.title = `<title>${escape(data.blogs.title)} | NotYasho</title>`, ""}<meta name="${"title"}" content="${escape(data.blogs.title, true) + " | NotYasho"}"><meta name="${"description"}"${add_attribute("content", data.blogs.description, 0)}><meta name="${"keywords"}"${add_attribute("content", data.blogs.tags.join(", "), 0)}><meta name="${"image"}"${add_attribute("content", data.blogs.featuredImage.asset.url + "?w=256&fm=webp", 0)}><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://notyasho.netlify.app/article/" + escape(data.blogs.slug.current, true)}"><meta property="${"og:title"}" content="${escape(data.blogs.title, true) + " | NotYasho"}"><meta property="${"og:site_name"}" content="${"NotYasho - Explore blogs"}"><meta property="${"og:description"}"${add_attribute("content", data.blogs.description, 0)}><meta property="${"og:image:type"}" content="${"image/webp"}"><meta property="${"og:image:width"}" content="${"256"}"><meta property="${"og:image:height"}" content="${"256"}"><meta property="${"og:image"}"${add_attribute("content", data.blogs.featuredImage.asset.url + "?w=256&fm=webp", 0)}><meta property="${"twitter:card"}" content="${"summary_large_image"}"><meta property="${"twitter:url"}" content="${"https://notyasho.netlify.app/article/" + escape(data.blogs.slug.current, true)}"><meta property="${"twitter:title"}" content="${escape(data.blogs.title, true) + " | NotYasho"}"><meta property="${"twitter:description"}"${add_attribute("content", data.blogs.description, 0)}><meta property="${"twitter:image"}"${add_attribute("content", data.blogs.featuredImage.asset.url + "?w=256&fm=webp", 0)}><!-- HEAD_svelte-16atc2i_END -->`, ""}


${validate_component(ScrollProgress, "ScrollProgress").$$render($$result, { articleHeight }, {}, {})}
<div class="${"article-body svelte-c0stl7"}"><div class="${"info svelte-c0stl7"}"><a style="${"color: rgb(" + escape(lighten(data.blogs.featuredImage.asset.metadata.palette.dominant.background, 0.75), true) + ")"}" title="${"Tag"}" class="${"category svelte-c0stl7"}" href="${"/blogs/explore/" + escape(data.blogs.category.name, true)}"><span>${escape(data.blogs.category.name)}</span></a>
		<span id="${"sep"}">•</span>

		<span class="${"date-published"}">${escape(readableDate)}</span></div>
	<h1 class="${"title svelte-c0stl7"}">${escape(data.blogs.title)}</h1>
	<p class="${"description svelte-c0stl7"}">${escape(data.blogs.description)}</p>

	<img class="${"cover svelte-c0stl7"}"${add_attribute("data-src", data.blogs.featuredImage.asset.url + "?fm=webp", 0)}${add_attribute("src", data.blogs.featuredImage.asset.metadata.lqip, 0)} alt="${"thumbnail"}"${add_attribute("title", data.blogs.featuredImage.source, 0)}>
	<article class="${"main-content"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></article>
</div>`;
});
export {
  Page as default
};
