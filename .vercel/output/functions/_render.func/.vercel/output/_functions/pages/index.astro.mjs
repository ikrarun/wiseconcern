/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, g as createAstro } from '../chunks/astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BZVkSmWU.mjs';
import { $ as $$Layout } from '../chunks/Layout_B86rmdor.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { imgLink, title, description, url } = Astro2.props;
  return renderTemplate`<!-- full section -->${maybeRenderHead()}<div class="min-h-dvh grow flex flex-col justify-center w-full"> <div class="flex px-8 min-h-dvh flex-col grow justify-center my-auto z-20 text-white bg-black/40 w-full"> <div class="max-w-[900px] p-2 flex flex-col gap-4 w-full mx-auto"> <h1 class="text-xl opacity-95 font-medium">Featured</h1> <h1 class="text-5xl font-semibold"> ${title} </h1> <h1 class="text-xl opacity-80 font-normal"> ${description} </h1> <a class="text-sm w-fit bg-blue-700 px-4 py-2 rounded-md"${addAttribute(url, "href")}>Read</a> </div> </div> <!-- Image --> ${renderComponent($$result, "Image", $$Image, { "src": imgLink, "alt": "hero", "width": 1920, "height": 1080, "loading": "eager", "class": "h-screen absolute inset-0 w-full object-cover" })} </div>`;
}, "C:/Users/Arun/Documents/wiseconcern/src/components/HeroSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wise Concern" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-dvh object-cover w-full flex flex-col"> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "How to Reduce Screen time?", "description": "How to Reduce Screen time? Some Description.....", "imgLink": "https://images.unsplash.com/photo-1669413442231-568f15cfd196?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "url": "/blogs/blog1" })} </main> ` })}`;
}, "C:/Users/Arun/Documents/wiseconcern/src/pages/index.astro", void 0);

const $$file = "C:/Users/Arun/Documents/wiseconcern/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
