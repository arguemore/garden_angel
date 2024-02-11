import { c as create_ssr_component, k as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/functions.js";
/* empty css                                                   */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.contact.svelte-gpg624.svelte-gpg624{width:70%;margin-block:1rem;padding-inline:10vw}.input-wrapper.svelte-gpg624.svelte-gpg624{padding-top:2.5rem;box-sizing:border-box;width:100%}h2.svelte-gpg624.svelte-gpg624{color:#a599ff;font-weight:500;font-size:2rem;line-height:1.7}.contact.svelte-gpg624 p.svelte-gpg624{font-family:"TabletGothicW02", sans-serif;font-weight:400;line-height:1.5;color:rgba(186, 184, 212, 0.884);letter-spacing:0.0313em;margin-bottom:1rem}label.svelte-gpg624.svelte-gpg624{font-family:"TabletGothicW02", sans-serif;font-size:10px;line-height:2.4;color:#bfc0cc;text-transform:uppercase;letter-spacing:0.125em;user-select:none}input.svelte-gpg624.svelte-gpg624,textarea.svelte-gpg624.svelte-gpg624{color:rgb(171, 166, 202);font-family:"TabletGothicW02", sans-serif;background:rgba(41, 35, 56, 0.5);width:100%;height:56px;border:1px solid rgba(48, 45, 66, 0.2823529412);padding:16px 56px 16px 16px;font-size:16px;border-radius:8px;transition:box-shadow 0.2s ease-in-out}input.svelte-gpg624.svelte-gpg624::placeholder,textarea.svelte-gpg624.svelte-gpg624::placeholder{color:hsl(223deg, 10%, 55%)}input.svelte-gpg624.svelte-gpg624:-webkit-autofill{-webkit-text-fill-color:hsl(223deg, 25%, 76%) !important;-webkit-box-shadow:0 0 0px 300px #1E1A2C inset !important;border:1px solid hsl(247deg, 100%, 80%) !important}textarea.svelte-gpg624.svelte-gpg624{resize:vertical;height:auto}.btn.btn-primary.svelte-gpg624.svelte-gpg624{background:#8b4cff;margin-inline:auto;margin-top:3rem}@media(hover: hover) and (pointer: fine){.btn.btn-primary.svelte-gpg624.svelte-gpg624:hover{filter:brightness(1.1)}}input.svelte-gpg624.svelte-gpg624:focus,textarea.svelte-gpg624.svelte-gpg624:focus{box-shadow:0px 0px 0px 2px hsl(223deg, 21%, 20%)}@media only screen and (max-width: 768px){.input-wrapper.svelte-gpg624.svelte-gpg624{padding-top:1rem}.contact.svelte-gpg624.svelte-gpg624{margin-inline:0;padding-inline:3vmin;width:100%}button.svelte-gpg624.svelte-gpg624{width:100%}}@media only screen and (max-width: 420px){textarea.svelte-gpg624.svelte-gpg624{height:10rem}input.svelte-gpg624.svelte-gpg624{height:2.8rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let button;
  $$result.css.add(css);
  return `${``}

<div class="${"contact svelte-gpg624"}"><form action="${"https://formspree.io/f/xyyordbl"}" method="${"POST"}"><header><h2 class="${"svelte-gpg624"}">Say Hello!</h2>
			<p class="${"svelte-gpg624"}">Your email information, name or anything will not be published.</p></header>
		<div class="${"input-wrapper svelte-gpg624"}"><div class="${"input-wrapper__label"}"><label for="${"name"}" class="${"input__label svelte-gpg624"}">Your name</label></div>
			<div class="${"input-container"}"><input name="${"Name"}" type="${"text"}" placeholder="${"Anonymous"}" class="${"svelte-gpg624"}"></div></div>
		<div class="${"input-wrapper svelte-gpg624"}"><div class="${"input-wrapper__label"}"><label for="${"email"}" class="${"input__label svelte-gpg624"}">Email Address</label></div>
			<div class="${"input-container"}"><input name="${"Email"}" type="${"email"}" placeholder="${"mail@example.com"}" class="${"svelte-gpg624"}"></div></div>
		<div class="${"input-wrapper svelte-gpg624"}"><div class="${"input-wrapper__label"}"><label for="${"name"}" class="${"input__label svelte-gpg624"}">Message</label></div>
			<div class="${"input-container"}"><textarea name="${"Message"}" placeholder="${"We've known each other for so long, your heart's been aching, but you're too shy to say it..."}" rows="${"8"}" class="${"svelte-gpg624"}"></textarea></div></div>

		<button type="${"submit"}" disabled="${"true"}" class="${"btn btn-primary c2a svelte-gpg624"}"${add_attribute("this", button, 0)}>Send Message</button></form>
</div>`;
});
export {
  Page as default
};
