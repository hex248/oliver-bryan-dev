// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});