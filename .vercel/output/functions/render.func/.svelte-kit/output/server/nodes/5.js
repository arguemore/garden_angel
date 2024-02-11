

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/saved/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.9ae776b2.js","_app/immutable/chunks/index.68f3856d.js"];
export const stylesheets = ["_app/immutable/assets/5.8782ab16.css"];
export const fonts = [];
