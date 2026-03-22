# ハードパン 公式サイト

石川県金沢市のハード系パン専門店「ハードパン」の公式Webサイトです。

## 技術スタック

| 分類 | 技術 |
|------|------|
| フレームワーク | Astro（最新安定版） |
| 言語 | TypeScript（strict） |
| スタイリング | Tailwind CSS |
| CMS | microCMS（NEWSのみ） |
| デプロイ | Cloudflare Pages |

---

## セットアップ

### 1. リポジトリのクローン・依存インストール

```bash
git clone <repository-url>
cd hardpan
npm install
npm audit  # 脆弱性チェック
```

### 2. 環境変数の設定

```bash
cp .env.example .env
```

`.env` を開いて以下を設定：

```
MICROCMS_API_KEY=your_microcms_api_key
MICROCMS_SERVICE_DOMAIN=your_service_domain
PUBLIC_SITE_URL=https://hardpan.example.com
```

**⚠️ `.env` は絶対にGitにコミットしないこと（`.gitignore` に設定済み）**

### 3. 開発サーバー起動

```bash
npm run dev
```

### 4. ビルド

```bash
npm run build
```

**ビルド後に `dist/` 内にAPIキーが含まれていないことを確認：**

```bash
grep -r "MICROCMS_API_KEY" dist/ || echo "✅ APIキーが含まれていません"
```

---

## microCMS 設定手順

1. [microCMS](https://microcms.io/) でアカウント作成・サービス作成
2. `news` エンドポイントを作成（詳細は `docs/microcms-schema.md` 参照）
3. 読み取り専用APIキーを発行
4. Cloudflare Pages の環境変数に設定

---

## Cloudflare Pages デプロイ手順

1. [Cloudflare Pages](https://pages.cloudflare.com/) でプロジェクト作成
2. GitHubリポジトリと連携
3. ビルド設定：
   - **ビルドコマンド**：`npm run build`
   - **出力ディレクトリ**：`dist`
4. **環境変数** を Cloudflare Dashboard で設定（`.env` ファイルは使用しない）：
   - `MICROCMS_API_KEY`
   - `MICROCMS_SERVICE_DOMAIN`
   - `PUBLIC_SITE_URL`
5. プレビューデプロイには Cloudflare Access でアクセス制限を推奨

---

## テスト

### 単体テスト（Vitest）

```bash
npm run test
```

### E2Eテスト（Playwright）

```bash
# 初回のみ
npx playwright install

# ビルド後に実行
npm run build && npm run test:e2e
```

---

## セキュリティヘッダー確認

```bash
curl -I https://hardpan.example.com | grep -E "X-Frame|X-Content|Strict-Transport|Content-Security"
```

期待するレスポンス例：
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## ディレクトリ構成

```
src/
├── components/
│   ├── common/       # BaseHead, Header, Footer, Breadcrumb, ExternalLink
│   └── news/         # NewsCard, Pagination
├── data/
│   └── menu.ts       # メニュー静的データ
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── microcms.ts   # APIクライアント
│   └── sanitize.ts   # HTMLサニタイズ
├── pages/            # 各ページ
├── types/            # TypeScript型定義
└── utils/            # date, seo ヘルパー
```
