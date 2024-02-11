

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.90bafacd.js","_app/immutable/chunks/index.68f3856d.js"];
export const stylesheets = ["_app/immutable/assets/9.95f0fcee.css"];
export const fonts = [];
