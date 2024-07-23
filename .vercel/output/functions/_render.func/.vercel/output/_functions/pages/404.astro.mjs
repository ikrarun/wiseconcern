/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B86rmdor.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wise Concern" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full gap-2 flex flex-col grow h-full items-center justify-center"> <h1 class="text-9xl font-black">404</h1> <h1 class="text-base font-semibold px-4 py-2">Error: Page Not Found</h1> <a href="/" class="text-xl font-semibold px-4 border border-black rounded py-2">Go Home</a> </main> ` })}`;
}, "C:/Users/Arun/Documents/wiseconcern/src/pages/404.astro", void 0);

const $$file = "C:/Users/Arun/Documents/wiseconcern/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
