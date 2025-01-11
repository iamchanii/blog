// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://imch.dev',
  experimental: {
    svg: true,
  },
  image: {
    domains: ["github.com"],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    }
  },
  integrations: [
    tailwind({
      nesting: true,
    }),
    sitemap(),
  ]
});
