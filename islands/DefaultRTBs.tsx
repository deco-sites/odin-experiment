import { DefaultRTBs as T } from "@stone-payments/odin-legacy-stone/preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

// deno-lint-ignore no-explicit-any
const DefaultRTBs = (props: any) => {
  return <div>{IS_BROWSER && <T {...props} />}</div>;
};

export default DefaultRTBs;
