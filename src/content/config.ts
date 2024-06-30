import { z, defineCollection } from "astro:content";

const blogs = defineCollection({
  schema: z.object({
    title: z.string().max(60),
    featured: z.boolean().optional(),
    image: z.string(),
    description: z.string().max(120),
  }),
});

export const collections = { blogs };
