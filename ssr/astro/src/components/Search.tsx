/** @jsxImportSource react */
import './Search.css';

import { KolAlert, KolIcon, KolKolibri, KolLink } from '@public-ui/react';

export default function Search() {
	return (
		<div className="itzbund container mx-auto my-10 max-w-800px">
			<header className="text-center">
				<div className="grid grid-cols-2 items-center">
					<div>
						<KolKolibri className="block m-auto w-40" _labeled={false}></KolKolibri>
					</div>
					<div>
						<img className="block m-auto h-25" src="assets/logo.astro.png" alt="Logo vom Astro Framework" />
					</div>
				</div>
				<strong className="text-2xl">Willkommen zu KoliBri</strong>
			</header>
			<main className="grid md:grid-cols-2 gap-6 p-12">
				<KolAlert _type="success" _label="Dokumentation" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/" _label="" _target="_blank">
						<KolIcon _label="" _icons={'fa-sharp fa-solid fa-book'} /> Dokumentation öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="info" _label="Theming" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/docs/concepts/styling/designer" _label="" _target="_blank">
						<KolIcon _label="" _icons={'fa-solid fa-palette'} /> KoliBri-Designer öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="warning" _label="Mitwirken" _variant="card" _level={2}>
					<KolLink _href="https://github.com/public-ui/kolibri/" _label="" _target="_blank">
						<KolIcon _label="" _icons={'fa-brands fa-github'} /> GitHub öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="error" _label="Kontakt" _variant="card" _level={2}>
					<KolLink _href="mailto:kolibri@itzbund.de" _label="" _target="_blank">
						<KolIcon _label="" _icons={'fa-solid fa-envelope'} /> E-Mail schreiben
					</KolLink>
				</KolAlert>
			</main>
		</div>
	);
}
