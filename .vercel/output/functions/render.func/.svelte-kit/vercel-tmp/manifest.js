export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/Barlow-Webfont/Barlow-Bold.woff2","fonts/Barlow-Webfont/Barlow-Light.woff2","fonts/Barlow-Webfont/Barlow-Medium.woff2","fonts/Barlow-Webfont/Barlow-MediumItalic.woff2","fonts/Barlow-Webfont/Barlow-Regular.woff2","fonts/Barlow-Webfont/Barlow-SemiBold.woff2","fonts/Barlow-Webfont/stylesheet.css","fonts/Circular/CircularStd-Black.woff2","fonts/Circular/CircularStd-BlackItalic.woff2","fonts/Circular/CircularStd-Bold.woff2","fonts/Circular/CircularStd-BoldItalic.woff2","fonts/Circular/CircularStd-Book.woff2","fonts/Circular/CircularStd-BookItalic.woff2","fonts/Circular/CircularStd-Medium.woff2","fonts/Circular/CircularStd-MediumItalic.woff2","fonts/Circular/stylesheet.css","fonts/Gothic/TabletGothicCompressedW02-Th.woff2","fonts/Gothic/TabletGothicNarrowW02-Light.woff2","fonts/Gothic/TabletGothicNarrowW02-Rg.woff2","fonts/Gothic/TabletGothicNarrowW02-SmBd.woff2","fonts/Gothic/TabletGothicW02-Regular.woff2","fonts/Gothic/TabletGothicW02-SemiBold.woff2","fonts/Gothic/stylesheet.css","fonts/JetbrainsMono/JetBrainsMonoNerdFontComplete-Italic.woff2","fonts/JetbrainsMono/JetBrainsMonoNerdFontComplete-Regular.woff2","fonts/JetbrainsMono/stylesheet.css","fonts/Larsseit/Larsseit-Bold.eot","fonts/Larsseit/Larsseit-Bold.ttf","fonts/Larsseit/Larsseit-Bold.woff","fonts/Larsseit/Larsseit-Bold.woff2","fonts/Larsseit/Larsseit-BoldItalic.eot","fonts/Larsseit/Larsseit-BoldItalic.ttf","fonts/Larsseit/Larsseit-BoldItalic.woff","fonts/Larsseit/Larsseit-BoldItalic.woff2","fonts/Larsseit/Larsseit-ExtraBold.eot","fonts/Larsseit/Larsseit-ExtraBold.ttf","fonts/Larsseit/Larsseit-ExtraBold.woff","fonts/Larsseit/Larsseit-ExtraBold.woff2","fonts/Larsseit/Larsseit-ExtraBoldItalic.eot","fonts/Larsseit/Larsseit-ExtraBoldItalic.ttf","fonts/Larsseit/Larsseit-ExtraBoldItalic.woff","fonts/Larsseit/Larsseit-ExtraBoldItalic.woff2","fonts/Larsseit/Larsseit-Italic.eot","fonts/Larsseit/Larsseit-Italic.ttf","fonts/Larsseit/Larsseit-Italic.woff","fonts/Larsseit/Larsseit-Italic.woff2","fonts/Larsseit/Larsseit-Light.eot","fonts/Larsseit/Larsseit-Light.ttf","fonts/Larsseit/Larsseit-Light.woff","fonts/Larsseit/Larsseit-Light.woff2","fonts/Larsseit/Larsseit-LightItalic.eot","fonts/Larsseit/Larsseit-LightItalic.ttf","fonts/Larsseit/Larsseit-LightItalic.woff","fonts/Larsseit/Larsseit-LightItalic.woff2","fonts/Larsseit/Larsseit-Medium.eot","fonts/Larsseit/Larsseit-Medium.ttf","fonts/Larsseit/Larsseit-Medium.woff","fonts/Larsseit/Larsseit-Medium.woff2","fonts/Larsseit/Larsseit-MediumItalic.eot","fonts/Larsseit/Larsseit-MediumItalic.ttf","fonts/Larsseit/Larsseit-MediumItalic.woff","fonts/Larsseit/Larsseit-MediumItalic.woff2","fonts/Larsseit/Larsseit-Thin.eot","fonts/Larsseit/Larsseit-Thin.ttf","fonts/Larsseit/Larsseit-Thin.woff","fonts/Larsseit/Larsseit-Thin.woff2","fonts/Larsseit/Larsseit-ThinItalic.eot","fonts/Larsseit/Larsseit-ThinItalic.ttf","fonts/Larsseit/Larsseit-ThinItalic.woff","fonts/Larsseit/Larsseit-ThinItalic.woff2","fonts/Larsseit/Larsseit.eot","fonts/Larsseit/Larsseit.ttf","fonts/Larsseit/Larsseit.woff","fonts/Larsseit/Larsseit.woff2","fonts/Larsseit/stylesheet.css","fonts/Lexend/Lexend-SemiBold.woff2","fonts/Lexend/stylesheet.css","fonts/MondaWebFont/monda-bold-webfont.woff","fonts/MondaWebFont/monda-bold-webfont.woff2","fonts/MondaWebFont/monda-regular-webfont.woff","fonts/MondaWebFont/monda-regular-webfont.woff2","fonts/MondaWebFont/stylesheet.css","fonts/Monument/MonumentExtended-Regular.woff","fonts/Monument/MonumentExtended-Regular.woff2","fonts/Monument/MonumentExtended-Ultrabold.woff","fonts/Monument/MonumentExtended-Ultrabold.woff2","fonts/Monument/stylesheet.css","fonts/Nofex/NofexRegular.woff","fonts/Nofex/NofexRegular.woff2","fonts/Nofex/stylesheet.css","fonts/PoppinsWebfont/Poppins-Bold.woff2","fonts/PoppinsWebfont/Poppins-BoldItalic.woff2","fonts/PoppinsWebfont/Poppins-ExtraBold.woff2","fonts/PoppinsWebfont/Poppins-Italic.woff2","fonts/PoppinsWebfont/Poppins-Light.woff2","fonts/PoppinsWebfont/Poppins-Medium.woff2","fonts/PoppinsWebfont/Poppins-MediumItalic.woff2","fonts/PoppinsWebfont/Poppins-Regular.woff2","fonts/PoppinsWebfont/Poppins-SemiBold.woff2","fonts/PoppinsWebfont/Poppins-SemiBoldItalic.woff2","fonts/PoppinsWebfont/stylesheet.css","fonts/RobotoWebfont/Roboto-Bold.woff","fonts/RobotoWebfont/Roboto-Bold.woff2","fonts/RobotoWebfont/Roboto-Italic.woff","fonts/RobotoWebfont/Roboto-Italic.woff2","fonts/RobotoWebfont/Roboto-Light.woff","fonts/RobotoWebfont/Roboto-Light.woff2","fonts/RobotoWebfont/Roboto-Medium.woff","fonts/RobotoWebfont/Roboto-Medium.woff2","fonts/RobotoWebfont/Roboto-MediumItalic.woff","fonts/RobotoWebfont/Roboto-MediumItalic.woff2","fonts/RobotoWebfont/Roboto-Regular.woff","fonts/RobotoWebfont/Roboto-Regular.woff2","fonts/RobotoWebfont/stylesheet.css","fonts/Segoe UI/Segoe UI Bold Italic.woff","fonts/Segoe UI/Segoe UI Bold.woff","fonts/Segoe UI/Segoe UI Italic.woff","fonts/Segoe UI/Segoe UI.woff","fonts/Segoe UI/style.css","fonts/Sequel100/stylesheet.css","fonts/Sequel100/subset-Sequel100Wide-95.woff2","img/bg/hero-bg.webp","img/bg/mesh-gradient.png","img/bg/mesh.png","img/bg/my-story-bg.webp","img/favicon/android-chrome-192x192.png","img/favicon/android-chrome-384x384.png","img/favicon/apple-touch-icon.png","img/favicon/browserconfig.xml","img/favicon/favicon-16x16.png","img/favicon/favicon-32x32.png","img/favicon/favicon.ico","img/favicon/logo-192x192.png","img/favicon/logo-mono.svg","img/favicon/logo-noglow.svg","img/favicon/logo-rounded.png","img/favicon/logo-rounded.svg","img/favicon/logo-with-noise.png","img/favicon/logo.png","img/favicon/logo.svg","img/favicon/logo.webp","img/favicon/site.webmanifest","img/placeholder.webp","img/sample/pfp1.png","img/sample/placeholder.png","img/svg/avatar.svg","img/svg/avatar_sad.svg","img/svg/hero-text.svg","img/svg/loading.svg","img/svg/preloader.svg","img/svg/quotes.svg","img/thumbnails/blogs.png","img/thumbnails/contact.png","img/thumbnails/portfolio.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".css":"text/css",".ttf":"font/ttf",".woff":"font/woff",".webp":"image/webp",".xml":"application/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.124708e3.js","app":"_app/immutable/entry/app.170a4aaa.js","imports":["_app/immutable/entry/start.124708e3.js","_app/immutable/chunks/index.68f3856d.js","_app/immutable/chunks/singletons.4baa8976.js","_app/immutable/chunks/index.efc76d27.js","_app/immutable/entry/app.170a4aaa.js","_app/immutable/chunks/index.68f3856d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/article/[slug]",
				pattern: /^\/article\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/blogs/explore",
				pattern: /^\/blogs\/explore\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/blogs/explore/[slug]",
				pattern: /^\/blogs\/explore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/blogs/saved",
				pattern: /^\/blogs\/saved\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/blogs/search",
				pattern: /^\/blogs\/search\/?$/,
				params: [],
				page: { layouts: [0,4,6,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
