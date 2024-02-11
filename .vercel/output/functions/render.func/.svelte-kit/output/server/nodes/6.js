

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/search/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.ebb3b2a9.js","_app/immutable/chunks/index.68f3856d.js"];
export const stylesheets = ["_app/immutable/assets/6.eaeb361a.css"];
export const fonts = [];
