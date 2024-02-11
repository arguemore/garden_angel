import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { l as loadIcons } from "../../chunks/functions.js";
import NProgress from "nprogress";
import { n as navigating } from "../../chunks/stores.js";
const app = "";
const firstTime_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.modal-overlay.svelte-7pzakn.svelte-7pzakn{z-index:10000;display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.modal.svelte-7pzakn.svelte-7pzakn{position:relative;margin:2rem;font-family:"Larsseit", sans-serif !important;background-color:rgba(29, 28, 41, 0.7725490196);backdrop-filter:blur(10px);color:#fff;padding:20px;border-radius:1rem;border:0.1px solid hsl(247deg, 100%, 80%);text-align:center;max-width:500px;overflow:hidden}.modal-header.svelte-7pzakn.svelte-7pzakn{font-size:larger;margin:1rem 0 1.5rem 0;text-align:center}.modal-header.svelte-7pzakn svg{font-size:3rem;margin-bottom:1rem;color:hsl(247deg, 100%, 80%)}.modal-body.svelte-7pzakn.svelte-7pzakn{color:hsl(248deg, 5%, 90%);padding-inline:2rem;margin-bottom:20px}.modal-body.svelte-7pzakn p.svelte-7pzakn{text-align:center;font-family:"Larsseit", sans-serif !important;margin-bottom:1rem}.modal-body.svelte-7pzakn p.svelte-7pzakn:last-child{margin-bottom:0}.modal-footer.svelte-7pzakn.svelte-7pzakn{display:flex;justify-content:flex-end}.cta-btn.svelte-7pzakn.svelte-7pzakn{border:1px solid hsl(247deg, 100%, 80%);font-style:bold;margin:1rem auto;background:transparent}.cta-btn.svelte-7pzakn.svelte-7pzakn:hover{background:hsl(247deg, 100%, 80%);color:black}',
  map: null
};
const FirstTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${``}`;
});
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#nprogress .bar{background:linear-gradient(90deg, rgb(255, 0, 187) 0%, rgb(182, 0, 255) 50%, rgb(255, 173, 0) 100%) !important}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  loadIcons([
    "bx:calendar",
    "bx:compass",
    "bx:home-smile",
    "bx:navigation",
    "bx:search",
    "bx:time",
    "bxs:compass",
    "bxs:home-smile",
    "bxs:navigation",
    "bxs:search",
    "bxs:star",
    "mdi:warning-octagon",
    "ph:book-bookmark-thin",
    "ic:round-close",
    "ic:round-menu",
    "mdi:bookmark-multiple",
    "mdi:bookmark-multiple-outline",
    "material-symbols:bookmark-add-outline-rounded",
    "material-symbols:bookmark-remove-rounded",
    "material-symbols:forward",
    "material-symbols:info-outline-rounded",
    "material-symbols:info-rounded",
    "solar:arrow-to-top-left-broken",
    "tabler:line-dotted",
    "solar:book-bookmark-minimalistic-broken",
    "solar:ghost-broken"
  ]);
  NProgress.configure({
    easing: "ease",
    trickleRate: 0.1,
    showSpinner: false
  });
  let timer;
  navigating.subscribe((value) => {
    if (value) {
      timer = setTimeout(
        () => {
          NProgress.start();
        },
        300
      );
    } else {
      clearTimeout(timer);
      NProgress.done();
    }
  });
  $$result.css.add(css);
  return `${validate_component(FirstTime, "FirstTime").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
