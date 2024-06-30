import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["picsum.photos", "images.unsplash.com", "images.pexels.com"]
  },
  integrations: [tailwind(), mdx()]
});