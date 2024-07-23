import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as createAstro } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-black w-full h-fit flex flex-col text-white"> <ol class="w-full text-base flex flex-col gap-2 py-4 max-w-[900px] list-disc p-2 mx-auto"> <h1 class="text-xl">Thank you.</h1> <span class="w-full h-[0.01em] my-4 bg-white/60"></span> <li class="ml-6">Newsletter</li> <li class="ml-6">Youtube</li> </ol> </div>`;
}, "C:/Users/Arun/Documents/wiseconcern/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Arun/Documents/wiseconcern/node_modules/astro/components/ViewTransitions.astro", void 0);

export { $$ViewTransitions as $, $$Footer as a };
