import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';

import { mount } from 'svelte';

import './style.scss';

import App from './App.svelte';

register(DEFAULT, defineCustomElements)
	.then(() => {
		const htmlElement = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			mount(App, { target: htmlElement });
		}
	})
	.catch(console.warn);
