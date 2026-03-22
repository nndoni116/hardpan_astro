# microCMS スキーマ設計

## エンドポイント: `news`（リスト形式）

| フィールドID | 表示名 | 種別 | 必須 | 備考 |
|------------|------|------|------|------|
| `title` | タイトル | テキストフィールド | ✅ | |
| `slug` | スラッグ | テキストフィールド | ✅ | URLに使用・ユニーク |
| `category` | カテゴリ | セレクトフィールド | ✅ | 下記参照 |
| `thumbnail` | サムネイル | 画像 | - | OGP画像に使用 |
| `content` | 本文 | リッチエディタ | ✅ | |

### カテゴリの選択肢
- `お知らせ`
- `新商品`
- `イベント`
- `臨時休業`

## 環境変数の設定

Cloudflare Pages の Dashboard > Settings > Environment variables に以下を設定：

```
MICROCMS_API_KEY=（microCMS管理画面のAPIキー）
MICROCMS_SERVICE_DOMAIN=（サービスドメイン名）
PUBLIC_SITE_URL=https://（本番ドメイン）
```

**⚠️ `MICROCMS_API_KEY` は読み取り専用キーを使用し、絶対に公開しないこと。**
