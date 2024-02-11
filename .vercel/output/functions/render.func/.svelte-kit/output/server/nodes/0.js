

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ad362ab1.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/Icon.108fb5f9.js","_app/immutable/chunks/index.aae62c89.js","_app/immutable/chunks/stores.f61c8fda.js","_app/immutable/chunks/singletons.4f180830.js","_app/immutable/chunks/index.efc76d27.js"];
export const stylesheets = ["_app/immutable/assets/0.d499db66.css"];
export const fonts = [];
