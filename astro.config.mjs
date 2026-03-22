import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ⚠️ vite.define を使用する場合は、クライアントに漏れる変数がないか必ず確認すること。
// PUBLIC_ プレフィックスなしの変数がクライアントバンドルに含まれないよう注意。

export default defineConfig({
  site: 'https://hardpan.example.com', // 本番URLに変更すること
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        // noindex ページをサイトマップから除外
        !page.includes('/contact/thanks') &&
        !page.includes('/404'),
    }),
  ],
  output: 'static',
});
