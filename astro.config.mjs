import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import remarkEleventyImage from "astro-remark-eleventy-image";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), react(), svelte(), remarkEleventyImage()],
  image: {
    domains: ['https://images.pexels.com/', 'https://images.unsplash.com/']
  },
  output: "server",
  adapter: vercel()
});