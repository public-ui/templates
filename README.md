# KoliBri Templates

Official starter templates for the [KoliBri](https://github.com/public-ui/kolibri) web component library — a framework-independent, WCAG 2.2 & BITV 2.0 compliant component library.

> **Documentation:** https://public-ui.github.io/en/

These templates let you scaffold a ready-to-use project in seconds — whether you're building a static page, a full React/Vue application, an SSR-powered site with Express/Astro/Next.js, or your own component library and theme.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Templates](#available-templates)
  - [Client Side Rendering (CSR)](#client-side-rendering-csr)
  - [Server Side Rendering (SSR)](#server-side-rendering-ssr)
  - [KoliBri Library Templates](#kolibri-library-templates)
  - [Utility Templates](#utility-templates)
- [Register a Theme](#register-a-theme)
- [Project Structure](#project-structure)
- [Package Manager](#package-manager)
- [Development Scripts](#development-scripts)
- [Quick Start Script](#quick-start-script)
- [License](#license)

## Prerequisites

- **[Node.js](https://nodejs.org/en/) 20+**
- A package manager: `npm`, `pnpm`, or `yarn`
- *(Optional)* [Visual Studio Code](https://code.visualstudio.com/) with the recommended extensions

## Getting Started

Every template follows the same three-step flow:

```bash
# 1. Scaffold a new project from a template
npx degit public-ui/templates/<category>/<template> my-kolibri-project

# 2. Install dependencies
cd my-kolibri-project
npm install    # or: pnpm install | yarn install

# 3. Start the development server
npm start      # or: pnpm start | yarn start
```

All templates come with a sensible default configuration — the KoliBri components and a default theme are already registered and running out of the box. You only need to pick a template that fits your framework of choice.

### Register a Theme

KoliBri uses themes to style components. Every template includes the **default theme** already registered. To switch themes or use KoliBri without a build tool (via CDN), see the [official documentation](https://public-ui.github.io/en/docs/get-started/first-steps).

```typescript
// The theme is already imported and registered in every template.
// To switch to a different theme:
import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { BWSt } from '@public-ui/theme-bwst';

register(BWSt, defineCustomElements).then(() => {
  // Start your app after the theme is registered
});
```

> **Important:** Always call `register()` and wait for the Promise to resolve before rendering your application.

## Available Templates

### Client Side Rendering (CSR)

> CSR templates are ready to use. Each includes a dev server, hot module replacement, linting, and formatting — all configured for KoliBri.

#### React Templates

| Template | Description |
|---|---|
| **react-vite** *(recommended)* | Modern React + Vite. Fast HMR, TypeScript, UnoCSS. Full testing setup with Vitest & Testing Library. |
| **react-vite-formik** | Same as `react-vite` plus [Formik](https://formik.org/) for form handling. |
| **react-standalone** | No build tool required — runs entirely in the browser via Babel Standalone. Ideal for quick prototypes or CMS integrations. |

```bash
npx degit public-ui/templates/csr/react-vite my-kolibri-project
```

#### Vue Templates

| Template | Description |
|---|---|
| **vue-vite** *(recommended)* | Modern Vue + Vite. TypeScript, UnoCSS, and Testing Library pre-configured. |

```bash
npx degit public-ui/templates/csr/vue-vite my-kolibri-project
```

#### Other CSR Templates

| Template | Description |
|---|---|
| **static-page** | A minimal static HTML page with KoliBri components served via a local dev server. |

```bash
npx degit public-ui/templates/csr/static-page my-kolibri-project
```

### Server Side Rendering (SSR)

> SSR templates support universal rendering with KoliBri's hydration. Check each template's README for framework-specific details.

| Template | Status |
|---|---|
| **express** | ✅ Ready — Express.js with TypeScript and `nodemon`. |
| **astro** | 🚧 In development — not yet part of the workspace. |
| **next.js** | 🚧 In development — not yet part of the workspace. |

```bash
npx degit public-ui/templates/ssr/express my-kolibri-project
```

### KoliBri Library Templates

Templates for building your own component libraries and themes based on KoliBri.

| Template | Description |
|---|---|
| **kolibri/library** | A full Stencil component library project — components, schema, theme, and demo adapters (Angular, React, Vue). Requires `pnpm`. |
| **kolibri/theme** | A theme-only project for customizing or building your own KoliBri theme. |

```bash
# Library template (pnpm required)
npx degit public-ui/templates/kolibri/library my-kolibri-project
cd my-kolibri-project
pnpm install

# Theme template
npx degit public-ui/templates/kolibri/theme my-kolibri-project
```

#### Library Project Structure

```
kolibri/library/
├── app/          # Demo application
├── components/   # Your component library (Stencil)
│   └── adapters/ # Framework adapters (Angular, React, Vue)
├── schema/       # JSON schema for component properties
├── theme/        # Demo theme (based on @public-ui/theme-default)
└── README.md
```

### Utility Templates

| Template | Description |
|---|---|
| **svg2font** | Convert SVG files into a font icon set with CSS. Useful for creating custom icon fonts for KoliBri. |

```bash
npx degit public-ui/templates/svg2font my-kolibri-project
```

## Project Structure

```
templates/
├── .defaults/          # Shared default configs (editor, prettier, vscode)
├── csr/                # Client-Side-Rendering templates
│   ├── react-vite/
│   ├── react-vite-formik/
│   ├── react-standalone/
│   ├── vue-vite/
│   └── static-page/
├── ssr/                # Server-Side-Rendering templates
│   ├── express/
│   ├── astro/          # (in development)
│   └── next.js/        # (in development)
├── kolibri/            # KoliBri library & theme templates
│   ├── library/
│   └── theme/
└── svg2font/           # SVG-to-font converter utility
```

## Package Manager

These templates are maintained using [pnpm](https://pnpm.io) to ensure consistent dependency resolution across the monorepo. You can use `npm` or `yarn` for individual templates, but for library templates (`kolibri/library`) **pnpm is required**.

Update dependencies with:

```bash
pnpm up -Lri
```

The `pnpm-lock.yaml` file can be safely removed after cloning a template if you wish to use a different package manager.

## Development Scripts

Most templates share a common set of scripts:

| Script | Description |
|---|---|
| `npm start` | Start the development server with hot module replacement. |
| `npm run build` | Create a production build. |
| `npm run lint` | Type-check and lint the code (`tsc --noemit`). |
| `npm run format` | Check code formatting with Prettier. |
| `npm run unused` | Check for unused code and dependencies. |
| `npm test` | Run unit/snapshot tests. |

## Quick Start Script

Here's a shell script to quickly set up a new KoliBri theme project from scratch:

```bash
#!/bin/bash
set -euo pipefail

# Remove existing directory if it exists
rm -rf my-own-kolibri-theme

# Clone repository
npx degit public-ui/templates/kolibri/theme my-own-kolibri-theme

# Change to new directory
cd my-own-kolibri-theme || { echo "Directory change failed"; exit 1; }

# Open VS Code if available
if command -v code >/dev/null 2>&1; then
  code .
else
  echo "VS Code (code) is not installed or not in PATH."
fi

# Install dependencies with pnpm@^10
npx --yes pnpm@^10 install

# Initialize git repository and make initial commit
git init
git add .
git commit -m "chore: commit initial code"

# Update snapshot tests
npm run test-update || true

# Commit new snapshots
git add .
git commit -m "chore: commit initial snapshots"

# Start the project
npm start
```

## License

See the [LICENSE](LICENSE) file for details. Each template may have its own license — check the individual template directory.
