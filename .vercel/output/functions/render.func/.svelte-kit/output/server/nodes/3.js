

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/article/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.44d1bb1f.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/Footer.3eaf8274.js","_app/immutable/chunks/stores.db066f3e.js","_app/immutable/chunks/singletons.4baa8976.js","_app/immutable/chunks/index.efc76d27.js","_app/immutable/chunks/Icon.108fb5f9.js","_app/immutable/chunks/logo.ca2d1cd4.js"];
export const stylesheets = ["_app/immutable/assets/3.1d9af8a9.css","_app/immutable/assets/Footer.d07f4014.css"];
export const fonts = [];
