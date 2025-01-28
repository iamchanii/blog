import react from '@astrojs/react';
// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://imch.dev',
  experimental: {
    svg: true,
  },
  image: {
    domains: ['github.com'],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  integrations: [
    tailwind({
      nesting: true,
    }),
    sitemap(),
    react(),
  ],
});
