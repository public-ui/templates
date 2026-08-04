import { KolAlert, KolIcon, KolKolibri, KolLink } from '@public-ui/react-v19';

export default function Home() {
	return (
		<div className="itzbund container mx-auto my-10 max-w-800px">
			<header className="text-center">
				<div className="grid grid-cols-2 items-center">
					<div>
						<KolKolibri className="block m-auto w-40" _labeled={false}></KolKolibri>
					</div>
					<div>
						<img className="block m-auto h-25" src="/assets/logo.remix.png" alt="Logo vom Remix Framework" />
					</div>
				</div>
				<strong className="text-2xl">Willkommen zu KoliBri</strong>
			</header>
			<main className="grid md:grid-cols-2 gap-6 p-12">
				<KolAlert _type="success" _label="Manifest" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/manifest" _label="Manifest öffnen" _target="_blank">
						<KolIcon _label="Scroll-Icon" _icons="fa-solid fa-scroll" /> Manifest öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="info" _label="Konzepte" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/concepts/architecture" _label="Konzepte öffnen" _target="_blank">
						<KolIcon _label="Architektur-Icon" _icons="fa-solid fa-sitemap" /> Konzepte öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="warning" _label="Komponenten" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/components" _label="Komponenten öffnen" _target="_blank">
						<KolIcon _label="Bausteine-Icon" _icons="fa-solid fa-cubes" /> Komponenten öffnen
					</KolLink>
				</KolAlert>
				<KolAlert _type="error" _label="MCP" _variant="card" _level={2}>
					<KolLink _href="https://www.npmjs.com/package/@public-ui/mcp" _label="MCP öffnen" _target="_blank">
						<KolIcon _label="Roboter-Icon" _icons="fa-solid fa-robot" /> MCP öffnen
					</KolLink>
				</KolAlert>
			</main>
		</div>
	);
}
