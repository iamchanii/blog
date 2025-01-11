import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      muted: 'var(--muted-foreground)',
      border: 'var(--border)',
      'accent-foreground': 'var(--accent-foreground)'
    },
    fontFamily: {
      mono: ['Intel One Mono', ...defaultTheme.fontFamily.mono]
    }
  },
  plugins: [],
}