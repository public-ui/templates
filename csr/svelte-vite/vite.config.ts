import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		UnoCSS(),
		svelte({
			compilerOptions: {
				// Svelte kennt die KoliBri-Wrapper nicht – als unbekannte Elemente tolerieren
				// Die eigentliche Komponenten-Registrierung läuft über register() im Bootstrap.
			},
		}),
	],
	resolve: {
		alias: {
			// Workaround: @public-ui/svelte importiert intern den veralteten Subpath
			// '@public-ui/components/dist/loader', der nicht in den exports-Conditions
			// ('module','browser','svelte',…) von @public-ui/components auflöst.
			// Hier auf den offiziellen './loader'-Export umbiegen.
			'@public-ui/components/dist/loader': '@public-ui/components/loader',
		},
	},
	server: {
		allowedHosts: true,
	},
});
