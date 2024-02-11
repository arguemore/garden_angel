import * as server from '../entries/pages/article/_slug_/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/article/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/article/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/10.ce0f92cd.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/index.aae62c89.js","_app/immutable/chunks/use-lazy-image.e38dea70.js","_app/immutable/chunks/utils.d8215a89.js"];
export const stylesheets = ["_app/immutable/assets/10.e2351b0b.css"];
export const fonts = [];
