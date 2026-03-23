import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
    excerpt: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = { blog };
