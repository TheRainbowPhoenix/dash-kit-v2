import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { preprocessMeltUI } from '@melt-ui/pp';
import sequence from 'svelte-sequential-preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([preprocess(), preprocessMeltUI()]),

	kit: {
        alias: {
            $routes: './src/routes',
            $ui: './src/ui'
        },
        adapter: adapter({
            fallback: 'index.html'
        }),
        paths: {
            base: '/dashboard'
        }
	}
};

export default config;
