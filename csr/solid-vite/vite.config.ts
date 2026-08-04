import solid from 'vite-plugin-solid';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
	},
	plugins: [UnoCSS(), solid()],
});
