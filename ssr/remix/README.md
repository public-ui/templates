# Remix (React Router v8 Framework Mode) | KoliBri

SSR-Template mit [React Router v8 im Framework-Modus](https://reactrouter.com/) (dem offiziellen Nachfolger von Remix) und der Komponentenbibliothek [KoliBri](https://public-ui.github.io/).

## Schnellstart

```bash
pnpm install        # Abhängigkeiten installieren (Monorepo)
pnpm run prepare    # KoliBri-Assets nach public/assets/ kopieren
pnpm run dev        # Dev-Server starten (http://localhost:3000)
```

## Skripte

| Skript | Beschreibung |
|--------|-------------|
| `dev` | Startet den React-Router-Dev-Server |
| `build` | Erzeugt den Produktions-Build (`build/`) |
| `start` | Startet den Produktions-Server (`react-router-serve`) |
| `lint` | TypeScript-Typprüfung (`tsc --noEmit`) |
| `format` | Prüft Formatierung mit Prettier |
| `stylelint` | Prüft Stylesheets |
| `prepare` | Kopiert KoliBri-Komponenten- und Theme-Assets |

## Architektur

- **React Router v8** im Framework-Modus (SSR) — der Nachfolger des klassischen Remix.
- **KoliBri-Registrierung** erfolgt clientseitig in `entry.client.tsx` **vor** der React-Hydration, damit die Web-Components beim Übernehmen des serverseitig gerenderten HTMLs bereits definiert sind.
- Die vom Server ausgelieferten `<kol-*>`-Tags werden als Custom Elements gerendert und nach der Registrierung im Browser hydriert.
- Siehe `app/kolibri.ts` für die Registrierungs-Logik.

## Startseite

Einheitliches Layout gemäß Repo-Konvention (Header + 2×2-Card-Grid) mit Links zu Manifest, Konzepten, Komponenten und dem KoliBri MCP.
