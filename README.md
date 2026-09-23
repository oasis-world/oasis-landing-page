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

```bash
npm run build   # static copy → dist/ (not vite build)
```

`vercel.json` sets `framework: null` so Vercel does not treat this as a Vite SPA.

## Deploy (Cloudflare Workers / Pages)

Same output: `dist/`. **Do not** deploy a raw `vite build` — classic `js/*.js`
scripts are not bundled; with SPA fallback they return HTML, JS fails, and
`.reveal` content stays hidden (you only see section background colors).

```bash
npm run build
npx wrangler deploy    # uses wrangler.toml → assets from ./dist
```

Cloudflare Pages dashboard:

| Setting | Value |
|--------|--------|
| Framework preset | **None** (not Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |

`wrangler.toml` sets `not_found_handling = "404"` so `/js/main.js` does not
fall back to `index.html`.

`.reveal` only hides after `html.js` is set by `main.js` — if scripts fail to
load, body copy still renders.

Bilingual zh/en (follows system language). Play Game points to `https://oasis-game-v1.vercel.app`.
