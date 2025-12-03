<!-- <p>
  <img width="100%" src="https://raw.githubusercontent.com/public-ui/templates/master/banner.png" alt="Solid Vite Templates">
</p> -->

# KoliBri Templates

This repository contains official starter templates for the [KoliBri library](https://github.com/public-ui/kolibri).

> Learn more on the [KoliBri website](https://public-ui.github.io/en/).

## Introduction

These templates are maintained using [pnpm](https://pnpm.io) for dependency management. You can update dependencies using `pnpm up -Lri`. While pnpm is recommended, any package manager will work. The `pnpm-lock.yaml` file can be safely removed after cloning a template.

## Available Templates

### Client Side Rendering (CSR)

#### Angular Templates

- **Angular** (Modern)

  ```bash
  npx degit public-ui/templates/csr/angular my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

#### React Templates

- **React Vite** (Modern, Recommended)

  ```bash
  npx degit public-ui/templates/csr/react-vite my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

- **React Vite with React Hook Form**

  ```bash
  npx degit public-ui/templates/csr/react-vite-react-hook-form my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

- **React Vite with Formik**

  ```bash
  npx degit public-ui/templates/csr/react-vite-formik my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

- **React Standalone**

  ```bash
  npx degit public-ui/templates/csr/react-standalone my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

#### Vue Templates

- **Vue Vite** (Modern, Recommended)

  ```bash
  npx degit public-ui/templates/csr/vue-vite my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

#### Other CSR Templates

- **Static Page**

  ```bash
  npx degit public-ui/templates/csr/static-page my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

### Server Side Rendering (SSR)

> Note: Most SSR templates are still in development. Only Express is currently available.

- **Express**

  ```bash
  npx degit public-ui/templates/ssr/express my-kolibri-project
  cd my-kolibri-project
  npm i # or pnpm i or yarn
  ```

Coming soon:

- Astro
- Next.js
- Remix

### KoliBri Library Templates

#### Library Template

```bash
npx degit public-ui/templates/kolibri/library my-kolibri-project
cd my-kolibri-project
pnpm i # pnpm required
```

#### Theme Template

```bash
npx degit public-ui/templates/kolibri/theme my-kolibri-project
cd my-kolibri-project
npm i # or pnpm i or yarn
```

### Utility Templates

#### SVG to Font Converter

```bash
npx degit public-ui/templates/svg2font my-kolibri-project
cd my-kolibri-project
npm i # or pnpm i or yarn
```

## Quick Start Script

Here's a helpful shell script to quickly set up a new KoliBri theme project:

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
