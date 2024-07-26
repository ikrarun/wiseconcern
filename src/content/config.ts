// 1. Import utilities from `astro:content`
import { date } from "astro/zod";
import { z, defineCollection } from "astro:content";

const dateSchema = z.string().transform((val) => {
  const [day, month, year] = val.split("-");
  return new Date(`${year}-${month}-${day}`);
});

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(),
    date: dateSchema,
    tags: z.array(z.string()).optional(),
    author: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blogs: blogCollection,
};

// Define the type for the blogCollection
export type BlogCollectionType = {
  title: string;
  description: string;
  image: string;
  date: Date;
  author: string;
  tags?: string[];
};
