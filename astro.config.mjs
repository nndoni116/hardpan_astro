import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://localhost:4321',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    // sitemap は公開前に有効化する
  ],
  output: 'static',
});