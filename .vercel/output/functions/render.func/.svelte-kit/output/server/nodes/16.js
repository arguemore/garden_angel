

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.ea341d42.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/toast.3780fe97.js","_app/immutable/chunks/index.aae62c89.js","_app/immutable/chunks/Icon.108fb5f9.js"];
export const stylesheets = ["_app/immutable/assets/16.2fd6921f.css","_app/immutable/assets/toast.8835f9b8.css"];
export const fonts = [];
