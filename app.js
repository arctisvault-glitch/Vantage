@tailwind base;
@tailwind components;
@tailwind utilities;

/* ---- self-hosted fonts (offline-safe, no CDN at runtime) ---- */
@font-face { font-family: 'IBM Plex Sans'; font-style: normal; font-weight: 400; font-display: swap; src: url('./fonts/ibm-plex-sans-latin-400-normal.woff2') format('woff2'); }
@font-face { font-family: 'IBM Plex Sans'; font-style: normal; font-weight: 500; font-display: swap; src: url('./fonts/ibm-plex-sans-latin-500-normal.woff2') format('woff2'); }
@font-face { font-family: 'IBM Plex Sans'; font-style: normal; font-weight: 600; font-display: swap; src: url('./fonts/ibm-plex-sans-latin-600-normal.woff2') format('woff2'); }
@font-face { font-family: 'IBM Plex Mono'; font-style: normal; font-weight: 400; font-display: swap; src: url('./fonts/ibm-plex-mono-latin-400-normal.woff2') format('woff2'); }
@font-face { font-family: 'IBM Plex Mono'; font-style: normal; font-weight: 500; font-display: swap; src: url('./fonts/ibm-plex-mono-latin-500-normal.woff2') format('woff2'); }
@font-face { font-family: 'IBM Plex Mono'; font-style: normal; font-weight: 600; font-display: swap; src: url('./fonts/ibm-plex-mono-latin-600-normal.woff2') format('woff2'); }
@font-face { font-family: 'Sora'; font-style: normal; font-weight: 600; font-display: swap; src: url('./fonts/sora-latin-600-normal.woff2') format('woff2'); }
@font-face { font-family: 'Sora'; font-style: normal; font-weight: 700; font-display: swap; src: url('./fonts/sora-latin-700-normal.woff2') format('woff2'); }

/* ---- app shell ---- */
html, body, #root { min-height: 100%; }
body { margin: 0; background: #020617; }

.vantage-root {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
.fmono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
.fdisp { font-family: 'Sora', 'IBM Plex Sans', sans-serif; }
.clamp2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.vantage-root ::-webkit-scrollbar { width: 8px; height: 8px; }
.vantage-root ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
.vantage-root ::-webkit-scrollbar-track { background: transparent; }
@media (prefers-reduced-motion: reduce) { .vantage-root * { transition: none !important; animation: none !important; } }
