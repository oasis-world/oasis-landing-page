/**
 * Static production build for Vercel / any static host.
 *
 * Why not `vite build`?
 * - index.html references classic scripts (`js/i18n.js` etc. without type="module"),
 *   which Vite refuses to bundle — they 404 in dist.
 * - Scene URLs live as plain strings inside js/i18n.js (`assets/scenes/...`),
 *   so hashing assets through Vite would break the carousel/gallery.
 * - The landing page is intentionally build-free (see DESIGN.md); we only need
 *   a clean copy of the runtime files in dist/.
 *
 * Output layout (mirrors repo root so relative paths keep working):
 *   dist/index.html
 *   dist/css/**  dist/js/**  dist/assets/**  + public/* (favicon, icons)
 */
import { cp, mkdir, rm, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const copyDirs = ["css", "js", "assets"];
for (const dir of copyDirs) {
  const from = path.join(root, dir);
  if (!(await exists(from))) {
    throw new Error(`Missing required directory: ${dir}`);
  }
  await cp(from, path.join(dist, dir), { recursive: true });
}

await cp(path.join(root, "index.html"), path.join(dist, "index.html"));

// public/ → dist root (favicon.svg, icons.svg, …)
const publicDir = path.join(root, "public");
if (await exists(publicDir)) {
  await cp(publicDir, dist, { recursive: true });
}

console.log("build-static: copied index.html, css/, js/, assets/, public/ → dist/");
