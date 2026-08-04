import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';

/**
 * Registriert die KoliBri-Web-Components beim Browser.
 *
 * Muss ausschließlich clientseitig aufgerufen werden, da die Web-Components
 * das DOM benötigen. Der Aufruf erfolgt daher in entry.client.tsx vor der
 * React-Hydration.
 */
export async function registerKolibri(): Promise<void> {
	await register(DEFAULT, defineCustomElements);
	console.log('KoliBri-Components registriert');
}
