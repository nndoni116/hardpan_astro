# Core Web Vitals チェックリスト

## 計測方法
- **Lighthouse**：Chrome DevTools > Lighthouse タブ > Generate report
- **PageSpeed Insights**：https://pagespeed.web.dev/ にURLを入力

## LCP（Largest Contentful Paint）目標：2.5秒以内
- [ ] ファーストビュー画像に `fetchpriority="high"` を設定
- [ ] ファーストビュー画像に `<link rel="preload">` を設定
- [ ] ヒーロー画像を WebP 形式に変換
- [ ] 画像に `srcset` で複数解像度を提供

## CLS（Cumulative Layout Shift）目標：0.1以下
- [ ] 全画像に `width` / `height` 属性を設定
- [ ] Webフォントに `font-display: swap` を設定
- [ ] 動的コンテンツの領域を事前に確保

## INP（Interaction to Next Paint）目標：200ms以内
- [ ] 不要な JavaScript を削除
- [ ] Astro Islands を活用してJS送信を最小化
- [ ] イベントハンドラを最適化

## 画像最適化チェック
- [ ] 全画像を WebP 形式に変換
- [ ] ファーストビュー以外の画像に `loading="lazy"` を設定
- [ ] 全 `<img>` に `alt` 属性を設定
- [ ] 装飾画像は `alt=""`

## セキュリティヘッダー確認
```bash
curl -I https://hardpan.example.com | grep -E "X-Frame|X-Content|Strict-Transport"
```
