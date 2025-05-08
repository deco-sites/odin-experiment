import { DefaultRTBs as T } from "@stone-payments/odin-legacy-stone/preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

// deno-lint-ignore no-explicit-any
const DefaultRTBs = (props: any) => {
  return <>{IS_BROWSER && <T {...props} />}</>;
};

export default DefaultRTBs;
