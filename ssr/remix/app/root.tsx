import { Links, Meta, Outlet, Scripts } from 'react-router';

import './styles.css';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de" dir="ltr">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Remix-App | KoliBri</title>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="stylesheet" href="/assets/codicons/codicon.css" />
				<link rel="stylesheet" href="/assets/fontawesome-free/css/all.min.css" />
				<meta name="robots" content="noindex" />
				<meta name="kolibri" content="dev-mode=true" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
