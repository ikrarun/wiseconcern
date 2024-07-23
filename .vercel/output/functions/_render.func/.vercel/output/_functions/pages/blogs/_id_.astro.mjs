/* empty css                                   */
import { c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, d as renderHead, e as createTransitionScope, f as renderSlot, g as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions, a as $$Footer } from '../../chunks/ViewTransitions_yUuDhFdJ.mjs';
/* empty css                                   */
/* empty css                                    */
import { g as getEntry } from '../../chunks/_astro_content_ZSjb-Feo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#1d4ed8"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="flex debug-screens flex-col w-full"${addAttribute(createTransitionScope($$result, "fuw2g56r"), "data-astro-transition-persist")}> <div class="flex grow w-full flex-col"> <div class="flex flex-col h-full w-full grow"> ${renderComponent($$result, "NavBar", null, { "title": "Wise Concern", "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "@/NavBar.svelte", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body> </html>`;
}, "C:/Users/Arun/Documents/wiseconcern/src/layouts/PostLayout.astro", "self");

function slugify(str) {
  return str.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const params = Astro2.params;
  const url = params.id;
  if (url === void 0) {
    return Astro2.redirect("/404");
  }
  const blogPost = await getEntry("blogs", slugify(url));
  if (blogPost === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await blogPost.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$PostLayout, { "title": blogPost.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full mx-auto max-w-[900px] grow flex flex-col py-32 min-h-dvh px-8"> <div class="prose lg:prose-lg sm:prose-sm base:prose-base xl:prose-xl 2xl:prose-2xl w-full"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> ` })}`;
}, "C:/Users/Arun/Documents/wiseconcern/src/pages/blogs/[id].astro", void 0);

const $$file = "C:/Users/Arun/Documents/wiseconcern/src/pages/blogs/[id].astro";
const $$url = "/blogs/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
