import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import pagefind from "astro-pagefind";
// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [icon(), tailwind(), react(), svelte(),pagefind()],
  image: {
    domains: ['https://images.pexels.com/','https://images.unsplash.com/']
  },
  output: "server",
  adapter: vercel()
});