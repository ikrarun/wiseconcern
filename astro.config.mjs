import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import serviceWorker from "astrojs-service-worker";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), react(), svelte(), partytown(), serviceWorker()],
  image: {
    domains: ['https://images.pexels.com/']
  }
});