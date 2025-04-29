<!-- <p>
  <img width="100%" src="https://raw.githubusercontent.com/public-ui/templates/master/banner.png" alt="Solid Vite Templates">
</p> -->

# KoliBri Templates

This repository holds most of the official starter templates for [KoliBri library](https://github.com/public-ui/kolibri).

> Learn more on the [KoliBri website](https://public-ui.github.io/en/).

## Introduction

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

## Get started

These templates are meant to be used as is via the [degit](https://github.com/Rich-Harris/degit) utility.

### Application templates

#### Client side rendering

##### Angular webpack template

```bash
$ npx degit public-ui/templates/csr/angular-webpack my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Preact webpack template

```bash
$ npx degit public-ui/templates/csr/preact-webpack my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### React vite template

```bash
$ npx degit public-ui/templates/csr/react-vite my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### React webpack template

```bash
$ npx degit public-ui/templates/csr/react-webpack my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Solid webpack template

```bash
$ npx degit public-ui/templates/csr/solid-webpack my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Static page template

```bash
$ npx degit public-ui/templates/csr/static-page my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Vue vite template

```bash
$ npx degit public-ui/templates/csr/vue-vite my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Vue webpack template

```bash
$ npx degit public-ui/templates/csr/vue-webpack my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

#### Server side rendering

> Not ready yet! Coming soon.

##### Astro template

```bash
$ npx degit public-ui/templates/ssr/astro my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Express template

```bash
$ npx degit public-ui/templates/ssr/express my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Next.js template

```bash
$ npx degit public-ui/templates/ssr/next.js my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

##### Remix template

```bash
$ npx degit public-ui/templates/ssr/remix my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

### Library templates

#### KoliBri library template

```bash
$ npx degit public-ui/templates/kolibri/library my-kolibri-project
$ cd my-kolibri-project
$ pnpm i # no npm or yarn
```

#### KoliBri theme template

```bash
$ npx degit public-ui/templates/kolibri/theme my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```

Here a short shell script to make a full round trip:

```bash
#!/bin/bash
set -euo pipefail

# Vorhandenes Verzeichnis löschen
rm -rf my-own-kolibri-theme

# Repository klonen
npx degit public-ui/templates/kolibri/theme#fix/npmrc my-own-kolibri-theme

# Wechsel in das neue Verzeichnis
cd my-own-kolibri-theme || { echo "Verzeichniswechsel fehlgeschlagen"; exit 1; }

# VS Code im aktuellen Verzeichnis öffnen
if command -v code >/dev/null 2>&1; then
  code .
else
  echo "VS Code (code) ist nicht installiert oder nicht im PATH."
fi

# Abhängigkeiten installieren mit pnpm@^10
npx --yes pnpm@^10 install

# Git-Repository initialisieren und initialen Commit machen
git init
git add .
git commit -m "chore: commit initial code"

# Snapshot-Tests aktualisieren
npm run test-update || true

# Neue Snapshots committen
git add .
git commit -m "chore: commit initial snapshots"

# Projekt starten
npm start
```

### Other templates

#### Svg2Font template

```bash
$ npx degit public-ui/templates/svg2font my-kolibri-project
$ cd my-kolibri-project
$ npm i # or pnpm i or yarn
```
