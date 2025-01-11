import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };
