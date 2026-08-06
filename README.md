# Vantage v2.0.2 — standalone PWA

Installable, offline-capable, device-local planner. Flat layout, literal names.

## File map — exactly 17 files, nothing else belongs here

| File | What it is |
|---|---|
| index.html | The page browsers load first. **Name is fixed by the host — must stay index.html.** |
| application.js | All app code, compiled into one file. |
| stylesheet.css | All styling and font wiring, compiled into one file. |
| service-worker.js | The offline engine — pre-downloads every file so the app runs with no network. |
| manifest.webmanifest | Tells the phone the app's name, icons, and fullscreen mode for Add to Home Screen. |
| apple-touch-icon.png | iOS home-screen icon. **iOS auto-discovers this exact filename — don't rename.** |
| app-icon-192.png / app-icon-512.png | Home-screen icons (Android / general). |
| font-ibm-plex-sans-400/500/600.woff2 | Body typeface, three weights. |
| font-ibm-plex-mono-400/500/600.woff2 | Data/monospace typeface, three weights. |
| font-sora-600/700.woff2 | Display typeface, two weights. |
| README.md | This file. |

Files reference each other by name — renaming anything means updating index.html, service-worker.js, and stylesheet.css together, then bumping CACHE in service-worker.js.

**Repo audit rule:** the repository should contain exactly the files above. Anything else is stale — delete it.

## Deploy / redeploy (GitHub web UI)

1. Extract, open the folder, select ALL files, drag into repo → Upload files → commit.
2. Renamed files do NOT overwrite old names — after uploading, delete anything not in the file map (old app.js, app.css, sw.js, icon-192/512, *-latin-*-normal.woff2, main.jsx, tw-input.css, tailwind.config.js, any zip).
3. Actions tab → wait for green → load the site. Dark styled interface = good; white raw text = stylesheet missing.

## Install on iPhone

Safari (specifically) → open the site URL → Share → Add to Home Screen → open once from the icon while online. Verify offline: airplane mode, reopen, full load with correct fonts.

## Migrate data from the Claude-hosted version

Published artifact → gear → Export → this app → gear → Import → Load.

## Updating to a new build

Upload new files over old (each build bumps CACHE), close and reopen the app twice.

## Data & backups

Local-only (localStorage). Installed PWAs are exempt from Safari's 7-day cleanup but local data is never contractual: gear → Export periodically, and always before updates, reinstalls, or deleting the icon. Bridge devices via export/import — last import wins.

## Phase 2 (self-hosted sync)

Source lives in vantage-pwa.zip (src/). The storage adapter (`const store = {...}` at the top of app.jsx) is the only seam — point it at your sync endpoint; the savedAt / pull-on-focus / dirty-flag / empty-remote machinery already handles the rest.
