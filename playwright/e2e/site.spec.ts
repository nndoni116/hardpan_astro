import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4321';

// ===== SEO 自動検証（全主要ページ） =====
const pages = [
  { path: '/', label: 'トップページ' },
  { path: '/about/', label: 'ABOUTページ' },
  { path: '/menu/', label: 'MENUページ' },
  { path: '/contact/', label: 'CONTACTページ' },
  { path: '/shop-info/', label: 'SHOP INFOページ' },
  { path: '/privacy/', label: 'PRIVACYページ' },
];

for (const { path, label } of pages) {
  test.describe(`SEO検証: ${label}`, () => {
    test('title タグが空でないこと', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
    });

    test('meta description が存在すること', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc).toBeTruthy();
    });

    test('canonical が出力されること', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBeTruthy();
    });

    test('h1 がページに1つだけ存在すること', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });

    test('og:image が存在すること', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogImage).toBeTruthy();
    });

    test('html lang="ja" が設定されていること', async ({ page }) => {
      await page.goto(`${BASE_URL}${path}`);
      const lang = await page.locator('html').getAttribute('lang');
      expect(lang).toBe('ja');
    });
  });
}

// ===== 機能テスト =====
test.describe('機能テスト', () => {
  test('トップページが正常に表示される', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('お問い合わせフォームが表示される', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact/`);
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('パンくずリストが表示される', async ({ page }) => {
    await page.goto(`${BASE_URL}/about/`);
    const breadcrumb = page.locator('nav[aria-label="パンくずリスト"]');
    await expect(breadcrumb).toBeVisible();
  });

  test('フォームの必須バリデーションが動作する', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact/`);
    await page.locator('#submit-btn').click();
    // HTML5バリデーションにより送信されないことを確認
    await expect(page).toHaveURL(`${BASE_URL}/contact/`);
  });
});

// ===== セキュリティ検証 =====
test.describe('セキュリティ検証', () => {
  test('外部リンクに rel="noopener noreferrer" が付与されている', async ({ page }) => {
    await page.goto(BASE_URL);
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });
});
