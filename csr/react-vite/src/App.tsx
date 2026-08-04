import { KolKolibri, KolLink, KolAlert, KolIcon } from '@public-ui/react-v19';
import reactLogo from './assets/logo.react.png';

function App() {
	return (
		<div className="itzbund container mx-auto my-10 max-w-800px">
			<header className="text-center">
				<div className="grid grid-cols-2 items-center">
					<div className="block m-auto w-40">
						<KolKolibri _labeled={false} />
					</div>
					<div>
						<img className="block m-auto h-25" src={reactLogo} alt="Logo vom React Framework" />
					</div>
				</div>
				<strong className="text-2xl">Willkommen zu KoliBri</strong>
			</header>
			<main className="grid md:grid-cols-2 gap-6 p-12">
				<KolAlert _type="success" _label="Manifest" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/manifest" _label="Manifest öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Scroll-Icon" _icons="fa-solid fa-scroll" /> Manifest öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="info" _label="Konzepte" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/concepts/architecture" _label="Konzepte öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Architektur-Icon" _icons="fa-solid fa-sitemap" /> Konzepte öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="warning" _label="Komponenten" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/components" _label="Komponenten öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Bausteine-Icon" _icons="fa-solid fa-cubes" /> Komponenten öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="error" _label="MCP" _variant="card" _level={2}>
					<KolLink _href="https://www.npmjs.com/package/@public-ui/mcp" _label="MCP öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Roboter-Icon" _icons="fa-solid fa-robot" /> MCP öffnen
						</span>
					</KolLink>
				</KolAlert>
			</main>
		</div>
	);
}

export default App;
