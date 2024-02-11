

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e4b8a0a6.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/stores.db066f3e.js","_app/immutable/chunks/singletons.4baa8976.js","_app/immutable/chunks/index.efc76d27.js"];
export const stylesheets = ["_app/immutable/assets/1.fc81c403.css"];
export const fonts = [];
