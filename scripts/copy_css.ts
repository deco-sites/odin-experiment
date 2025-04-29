import { ensureDir } from "https://deno.land/std@0.200.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.200.0/path/mod.ts";

const root = Deno.cwd();
const src = join(
  root,
  "node_modules",
  "@stone-payments",
  "odin-legacy-stone",
  "dist",
  "preact",
  "dist",
  "preact",
  "styles.css"
);
const destDir = join(root, "static");
const dest = join(destDir, "styles.css");

await ensureDir(destDir);
await Deno.copyFile(src, dest);
console.log(`✔ Copied ${src} → ${dest}`);
