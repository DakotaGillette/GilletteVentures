// Resize, convert to WebP, strip metadata, fix orientation, kebab-case the name.
// Usage: node scripts/optimize-images.mjs [dir ...] [--keep] [--max=2400] [--quality=82]
// Defaults: src/assets and public/images. Skips svg, gif, avif, and any og/ or favicons/ folder.
import sharp from "sharp";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";

const args = process.argv.slice(2);
const keep = args.includes("--keep");
const num = (flag, def) => Number((args.find((a) => a.startsWith(`--${flag}=`)) ?? `--${flag}=${def}`).split("=")[1]);
const max = num("max", 2400);
const quality = num("quality", 82);
const dirs = args.filter((a) => !a.startsWith("--"));
if (dirs.length === 0) dirs.push("src/assets", "public/images");

const RASTER = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp"]);
const SKIP_DIRS = new Set(["og", "favicons", "node_modules", ".astro", "dist"]);

const kebab = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

async function walk(dir, out = []) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) await walk(p, out); }
    else out.push(p);
  }
  return out;
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
let converted = 0, resized = 0, skipped = 0, saved = 0;
const renamed = [];

for (const dir of dirs) {
  for (const file of await walk(dir)) {
    const ext = extname(file).toLowerCase();
    const before = (await stat(file)).size;

    if (ext === ".webp") {
      const meta = await sharp(file).metadata();
      if ((meta.width ?? 0) <= max) { skipped++; continue; }
      const tmp = `${file}.tmp`;
      await sharp(file).rotate().resize({ width: max, withoutEnlargement: true }).webp({ quality }).toFile(tmp);
      await rename(tmp, file);
      const after = (await stat(file)).size;
      resized++; saved += before - after;
      console.log(`resized   ${file}  ${kb(before)} -> ${kb(after)}`);
      continue;
    }

    if (!RASTER.has(ext)) { skipped++; continue; }

    const name = kebab(basename(file, ext));
    const target = join(dirname(file), `${name}.webp`);
    const img = sharp(file).rotate(); // applies EXIF orientation; metadata is stripped by default
    const meta = await img.metadata();
    await img
      .resize({ width: max, withoutEnlargement: true })
      .webp(meta.hasAlpha ? { quality: 90, alphaQuality: 100 } : { quality })
      .toFile(target);
    const after = (await stat(target)).size;
    if (!keep) await unlink(file);
    converted++; saved += before - after;
    if (basename(file) !== `${name}${ext}`) renamed.push([basename(file), `${name}.webp`]);
    console.log(`converted ${file} -> ${target}  ${kb(before)} -> ${kb(after)}`);
  }
}

console.log(`\n${converted} converted, ${resized} resized, ${skipped} skipped, ${(saved / 1024 / 1024).toFixed(1)} MB saved`);
if (converted) console.log("Update any imports or src paths that referenced the old filenames.");
if (renamed.length) {
  console.log("Renamed:");
  for (const [from, to] of renamed) console.log(`  ${from} -> ${to}`);
}
