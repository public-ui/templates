import preact from '@preact/preset-vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
	},
	plugins: [preact(), UnoCSS()],
});
