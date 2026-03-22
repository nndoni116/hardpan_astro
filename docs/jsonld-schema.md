# JSON-LD スキーマ設計

## トップページ：LocalBusiness（Bakery）

```json
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "ハードパン",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "〇〇町 1-2-3",
    "addressLocality": "金沢市",
    "addressRegion": "石川県",
    "postalCode": "000-0000",
    "addressCountry": "JP"
  },
  "telephone": "076-000-0000",
  "openingHours": ["Tu-Sa 08:00-18:00"],
  "url": "https://hardpan.example.com",
  "priceRange": "¥〜¥¥"
}
```

## 全ページ：BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://hardpan.example.com/" },
    { "@type": "ListItem", "position": 2, "name": "ページ名", "item": "https://hardpan.example.com/page/" }
  ]
}
```

## NEWS詳細：Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "記事タイトル",
  "image": "https://...",
  "author": { "@type": "Organization", "name": "ハードパン" },
  "publisher": { "@type": "Organization", "name": "ハードパン" },
  "datePublished": "2024-04-01T00:00:00.000Z",
  "dateModified": "2024-04-01T00:00:00.000Z"
}
```
