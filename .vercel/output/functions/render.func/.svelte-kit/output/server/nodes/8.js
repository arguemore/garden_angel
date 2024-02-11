

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.2b376ef1.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/Icon.108fb5f9.js","_app/immutable/chunks/logo.ca2d1cd4.js"];
export const stylesheets = ["_app/immutable/assets/8.ba341284.css"];
export const fonts = [];
