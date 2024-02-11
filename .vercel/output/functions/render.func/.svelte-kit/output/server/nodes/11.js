import * as server from '../entries/pages/blogs/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blogs/+page.server.js";
export const imports = ["_app/immutable/nodes/11.f062c2b7.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/PostGrid.994f2f3d.js","_app/immutable/chunks/index.aae62c89.js","_app/immutable/chunks/use-lazy-image.e38dea70.js","_app/immutable/chunks/Icon.108fb5f9.js","_app/immutable/chunks/toast.3780fe97.js","_app/immutable/chunks/index.efc76d27.js","_app/immutable/chunks/utils.d8215a89.js"];
export const stylesheets = ["_app/immutable/assets/11.1be0cb95.css","_app/immutable/assets/PostGrid.f1266633.css","_app/immutable/assets/toast.8835f9b8.css"];
export const fonts = [];
