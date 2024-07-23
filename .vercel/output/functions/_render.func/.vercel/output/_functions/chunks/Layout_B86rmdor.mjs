import { c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, d as renderHead, e as createTransitionScope, f as renderSlot, g as createAstro } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions, a as $$Footer } from './ViewTransitions_yUuDhFdJ.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#1d4ed8"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="flex debug-screens flex-col w-full"${addAttribute(createTransitionScope($$result, "7k4xbl3z"), "data-astro-transition-persist")}> <div class="flex grow w-full flex-col"> <div class="flex flex-col h-full w-full grow"> ${renderComponent($$result, "NavBar", null, { "title": "Wise Concern", "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "@/NavBar.svelte", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body> </html>`;
}, "C:/Users/Arun/Documents/wiseconcern/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
