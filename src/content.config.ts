import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.string().array().optional(),
  }),
});

export const collections = { posts };
