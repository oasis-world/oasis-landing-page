# Oasis Village — Landing Page

Official marketing site for **Oasis Village (绿洲村)**.

Static site (source is build-free):

- `index.html` — entry
- `css/styles.css` — **desktop / base layer only** (no max-width media queries)
- `css/mobile.css` — **all responsive & touch adaptations** (loaded after styles.css)
- `js/i18n.js`, `js/main.js` — shared interactions (carousel, gallery, i18n, anchors)
- `js/mobile.js` — mobile-only enhancements (drawer scroll-lock, scrim, marquee pause)
- `assets/` — brand, scene maps, props, walk sprites

Open `index.html` in a browser, or serve the folder locally.

## Deploy (Vercel)

Production build copies the static runtime into `dist/` (does **not** run `vite build`):

```bash
npm run build   # → dist/
```

`vercel.json` sets `framework: null` so Vercel does not treat this as a Vite SPA.
If the Vercel dashboard still has Framework Preset = Vite, clear it or rely on `vercel.json`.

Why not `vite build`? Classic `<script src="js/...">` tags are not bundled, and scene
URLs inside `js/i18n.js` must keep stable `assets/...` paths — bundling broke deploys
(solid section colors, invisible `.reveal` content).

Bilingual zh/en (follows system language). Play Game points to `https://oasis-game-v1.vercel.app`.
