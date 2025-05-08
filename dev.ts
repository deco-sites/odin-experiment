import style from "@stone-payments/odin-legacy-stone/style";
import { build } from "@deco/dev/tailwind";

await build();
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";


await Deno.mkdir("static", { recursive: true });          
await Deno.writeTextFile("static/odin-style.css", style);

await dev(import.meta.url, "./main.ts", config);

if (Deno.args.includes("build")) {
  Deno.exit(0);
}
