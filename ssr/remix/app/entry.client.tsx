import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { isbot } from 'isbot';

import { registerKolibri } from './kolibri';

/**
 * Browser-Entry-Point.
 *
 * KoliBri wird VOR der React-Hydration registriert, damit die Custom Elements
 * definiert sind, bevor React die vom Server gerenderten `<kol-*>`-Tags
 * übernimmt. Das `isbot`-Promise wird aufgelöst, bevor hydratisiert wird,
 * damit Bots das statische HTML ohne Hydration erhalten.
 */
async function bootstrap() {
	await registerKolibri().catch(console.warn);

	startTransition(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<HydratedRouter />
			</StrictMode>,
		);
	});
}

const botPromise = isbot(navigator.userAgent)
	? new Promise((resolve) => {
			// Bots erhalten das gerenderte HTML ohne Hydration.
			resolve(null);
		})
	: Promise.resolve();

botPromise.then(bootstrap);
