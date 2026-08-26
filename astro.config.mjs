import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ropotvs.com',
  output: 'static',
  publicDir: 'public',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
});
