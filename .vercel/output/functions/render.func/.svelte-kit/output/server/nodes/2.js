

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d6501c29.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/Footer.04e8dd93.js","_app/immutable/chunks/stores.f61c8fda.js","_app/immutable/chunks/singletons.4f180830.js","_app/immutable/chunks/index.efc76d27.js","_app/immutable/chunks/Icon.108fb5f9.js","_app/immutable/chunks/logo.ca2d1cd4.js","_app/immutable/chunks/index.aae62c89.js"];
export const stylesheets = ["_app/immutable/assets/2.26d3d923.css","_app/immutable/assets/Footer.d07f4014.css"];
export const fonts = [];