import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), react(), svelte()]
});