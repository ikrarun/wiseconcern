/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BZVkSmWU.mjs';
import { $ as $$Layout } from '../chunks/Layout_B86rmdor.mjs';
import { a as getCollection } from '../chunks/_astro_content_ZSjb-Feo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogPosts = await getCollection("blogs");
  const post = allBlogPosts.map((post2) => post2.data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-dvh px-10 w-full flex flex-col"> <div class="flex flex-col gap-4 mt-36"> <h1 class="text-3xl font-black">Blogspage</h1> <ul class="flex flex-col gap-2 my-10"> ${post.map((blog) => {
    return renderTemplate`<a${addAttribute(`/blogs/${blog.title}`, "href")} class="flex flex-col gap-1 my-2 pb-4 first:pt-4 border-b first:border-t border-black border-dashed dash"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-32 w-fit", "src": blog.image, "alt": blog.title, "inferSize": true, "loading": "lazy" })} <h1 class="text-xl font-semibold">${blog.title}</h1> <h1 class="text-base">${blog.description}</h1> </a>`;
  })} </ul> </div> </main> ` })}`;
}, "C:/Users/Arun/Documents/wiseconcern/src/pages/blogs/index.astro", void 0);

const $$file = "C:/Users/Arun/Documents/wiseconcern/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
