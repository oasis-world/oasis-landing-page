# Oasis Village — Official Landing Page

## Subject
绿洲村 Oasis Village official marketing site. Cozy 2D life-sim: walk, talk, do ordinary chores, and slowly become a calmer person — not a hero. Job of the page: feel the game in under 30 seconds, explain the loop + editor, and open a Gallery door for player worlds.

## Style anchor
Stardew Valley title manual × illustrated village field guide: deep-night map backgrounds, gold-leaf wordmark, parchment cards pinned on wood, pixel props used as section anchors. Not a SaaS template.

## Palette
| Token | Hex | Role |
|-------|-----|------|
| --night | #0C1520 | page base / hero sky |
| --night-soft | #152433 | alternate section wash |
| --wood | #3D2412 | nav / frames |
| --wood-mid | #6B4423 | borders, board rails |
| --parchment | #F6E7C8 | content cards |
| --parchment-deep | #E8D2A4 | card inset / rules |
| --ink | #2A1C12 | body on parchment |
| --ink-soft | #5C4634 | secondary text |
| --gold | #E8B84B | brand / display accents |
| --accent | #C45C26 | primary CTA |
| --ok | #3D7A5A | success / editor badges |
| --sky | #6EB6D9 | links / soft highlights |

## Typography
- Display: `Georgia, 'Palatino Linotype', 'Times Roman', serif` — gold letterforms, wide tracking on Latin title
- Body/UI: `"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, sans-serif`
- Scale: hero 48–64px / section 28–36px / card title 18–20px / body 15–16px / eyebrow 12px uppercase tracking
- Chinese ribbon lockup under Latin wordmark (same as game TitleWordmark)

## Layout system
- Max content width 1120px; hero + carousel full-bleed
- Sticky wood HUD nav (logo · section anchors · Gallery · lang toggle · social)
- Vertical rhythm: 96–120px section padding on desktop, 64px mobile
- Cards: parchment fill, 2px wood border, soft paper shadow; occasional 8–10° pin/ribbon accents only where they earn it
- Grid: gameplay 3–5 equal cards; elements 3-col prop tiles; gallery 3-col masonry-ish cards
- Mobile: single column, carousel swipe + dots, 44px tap targets, no horizontal overflow

## Page structure
1. **Nav** — Home / Gameplay / Worlds / Editor / Gallery + X · Discord · GitHub placeholders + 中/EN
2. **Hero** — brand icon + gold wordmark 绿洲村 · Oasis Village, tagline from game, dual CTA (Explore scenes / Open editor), dusk map underlay
3. **Scene carousel (signature)** — horizontal 走马灯 of bundled worlds using `*-open-3200` / ground maps + parchment captions (name, tagline)
4. **Gameplay loop** — five cards (walk+portals, talk+AI chat, quests on any element, animals, snap photo) + marquee of gameplay scene images
5. **Element showcase** — pretty props (春日杂货铺, teahouse, sakura, clinic, lighthouse…) explaining what you place in the editor
6. **Editor** — five steps (style ground / place props / hang quests & AI models / collision & portals / generate & play) + editor board + marquee of feature images
7. **Gallery** — player/featured scene cards (seeded with bundled worlds as showcase placeholders; ready for real submissions)
8. **Community footer** — social placeholders + short about

## i18n
- Default `navigator.languages` (zh* → zh, else en); persist toggle in `localStorage`
- Every string in `js/i18n.js` as `{zh, en}`; `document.documentElement.lang` follows
- Nav Gallery always visible

## Assets
Curated copy from `../oasis-game/src/assets/` into `assets/`:
- Brand: `ui/oasis-logo.png`, `ui/brand-icon.png`, `ui/portal-arch.png`
- Carousel grounds/open maps (3200-wide jpg)
- Props: spring-shop, wang-store, teahouse, sakura, school, clinic, mayor-house, lighthouse, night temple/shop, etc.
- Cast: player, npcs, animals idle frames

## Signature moment
The **world carousel**: auto-advancing full-bleed map postcards with parchment title plates — the player album of Oasis before any feature list.

## Motion
- Carousel auto-play + pause on hover/focus; respects `prefers-reduced-motion`
- Soft fade-in on section reveal only; no parallax spam
- Pixel props `image-rendering: pixelated` when scaled small

## Links
X / Discord / GitHub are reserved hrefs (`#` or placeholder `https://…`) with accessible labels; easy to swap later.

## Delivery
Static site in oasis-landing-page:
`index.html` + `css/styles.css` + `js/i18n.js` + `js/main.js` + local `assets/`.
No build step required for browser preview.
