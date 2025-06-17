import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import { Plugin } from 'vue';

export const ComponentLibrary: Plugin = {
	install() {
		register(DEFAULT, defineCustomElements)
			.then(() => console.log('Components registered'))
			.catch(console.warn);
	},
};
