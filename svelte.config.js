import preprocessor from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@use './src/styles/variables.scss' as *;`
		}
	}),
	kit: {
		adapter: adapter({
			//edge: false,
			runtime: 'nodejs20.x',
			split: false,
			compress: true
		})
	}
};

export default config;
