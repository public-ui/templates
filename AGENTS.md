# AGENTS.md

Verbindliche Konventionen für alle App-Templates in diesem Repository.

## Ziel

Jedes App-Template (`csr/*` und `ssr/*`) liefert eine **einheitliche Startseite**. Nutzer sehen beim Ausprobieren verschiedener Templates sofort dasselbe Bild — unabhängig vom Framework.

## Geltungsbereich

**CSR:** `angular-cli`, `react-vite`, `react-vite-hook-form`, `react-standalone`, `solid-vite`, `svelte-vite`, `vue-vite`, `preact-vite`, `static-page`
**SSR:** `express`, `astro`, `next.js`, `remix`

## Tooling

- **pnpm** im Monorepo-Modus: `pnpm install`, Updates mit `pnpm up -Lri`
- Dependency-Konflikte werden an der Quelle behoben — niemals `--force` oder `--legacy-peer-deps`
- **Verdana** als primäre Schriftart (barrierefrei, keine Ladezeit). Keine externen Web-Fonts. Override: `font-family: Verdana, sans-serif;`

## Referenz-Layout

Header + 2×2-Card-Grid, eingebettet in `itzbund container mx-auto my-10 max-w-800px`:

```
┌──────────────────────────────────────────┐
│            [KolKolibri]  [Logo]           │
│          Willkommen zu KoliBri            │
├──────────────────────────────────────────┤
│  ✅ Manifest      │  ℹ️ Konzepte          │
│  ⚠️ Komponenten   │  ❌ MCP               │
└──────────────────────────────────────────┘
```

**Header:** `KolKolibri`-Logo (links) + Framework-Logo (rechts), Überschrift **Willkommen zu KoliBri**, alles zentriert.

### Cards

Jede Card ist ein `KolAlert` (`_variant="card"`) mit `KolLink` + `KolIcon`:

| Card | `_type` | `_icons` | Link |
|------|---------|----------|------|
| **Manifest** | `success` | `fa-solid fa-scroll` | `https://public-ui.github.io/en/docs/manifest` |
| **Konzepte** | `info` | `fa-solid fa-sitemap` | `https://public-ui.github.io/en/docs/concepts/architecture` |
| **Komponenten** | `warning` | `fa-solid fa-cubes` | `https://public-ui.github.io/en/docs/components` |
| **MCP** | `error` | `fa-solid fa-robot` | `https://www.npmjs.com/package/@public-ui/mcp` |

## Konventionen

| Thema | Regel |
|-------|-------|
| **Sprache** | Deutsch; `lang="de"`, `dir="ltr"` |
| **Schrift** | Verdana; keine externen Web-Fonts |
| **Properties** | `_`-Präfix (`_label`, `_type`, …); Icons immer mit beschreibendem `_label` (niemals leer) |
| **Stylesheets** | Nur was gebraucht wird: `codicon.css` + `fontawesome-free/css/all.min.css` |
| **Meta-Tags** | `<meta charset="UTF-8" />`, viewport, `<meta name="kolibri" content="dev-mode=true" />` |
| **Favicon** | `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` |

## Framework-Adapter

| Framework | Import-Pfad | Syntax |
|-----------|-------------|--------|
| Angular | `CUSTOM_ELEMENTS_SCHEMA` | `<kol-alert>` als Custom Element |
| Vue 3 | `@public-ui/vue` | `<KolAlert>` als SFC |
| React | `@public-ui/react-v19` | `<KolAlert>` als JSX |
| Solid | `@public-ui/solid` | `<KolAlert>` als JSX |
| Svelte | `@public-ui/svelte` | `<KolAlert>` als SFC |
| Preact | `@public-ui/preact` | `<KolAlert>` als JSX |
| Vanilla | Web-Components direkt | `<kol-alert>` als Custom Element |

**Gold Standard:** `csr/vue-vite` (`src/App.vue`).

## Wartung

Bei Änderungen zuerst **diese Datei** aktualisieren, dann alle Templates anpassen.
