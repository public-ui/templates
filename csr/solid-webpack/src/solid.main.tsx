import { render } from 'solid-js/web';

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import App from './App';

register(DEFAULT, defineCustomElements)
	.then(() => {
		const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
		if (htmlDivElement instanceof HTMLDivElement) {
			render(() => <App />, htmlDivElement);
		}
	})
	.catch(console.warn);
