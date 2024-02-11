

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.86629a23.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/stores.f61c8fda.js","_app/immutable/chunks/singletons.4f180830.js","_app/immutable/chunks/index.efc76d27.js"];
export const stylesheets = ["_app/immutable/assets/1.fc81c403.css"];
export const fonts = [];
