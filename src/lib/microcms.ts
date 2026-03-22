import type {
  NewsArticle,
  MicroCMSListResponse,
  MicroCMSListQuery,
} from '../types/microcms';

// ダミーデータ（microCMS連携前の仮データ）
const dummyNews: NewsArticle[] = [
  {
    id: 'dummy-01',
    title: '春の新商品が登場しました',
    category: 'お知らせ',
    content: '<p>春の新商品が登場しました。ぜひお試しください。</p>',
    slug: 'spring-new-arrival',
    createdAt: '2026-03-01T09:00:00.000Z',
    updatedAt: '2026-03-01T09:00:00.000Z',
    publishedAt: '2026-03-01T09:00:00.000Z',
    revisedAt: '2026-03-01T09:00:00.000Z',
  },
  {
    id: 'dummy-02',
    title: '4月の臨時休業のお知らせ',
    category: '臨時休業',
    content: '<p>4月10日（水）は臨時休業とさせていただきます。</p>',
    slug: 'temp-closed-april',
    createdAt: '2026-02-20T09:00:00.000Z',
    updatedAt: '2026-02-20T09:00:00.000Z',
    publishedAt: '2026-02-20T09:00:00.000Z',
    revisedAt: '2026-02-20T09:00:00.000Z',
  },
  {
    id: 'dummy-03',
    title: 'イートインスペースをリニューアルしました',
    category: 'イベント',
    content: '<p>イートインスペースをリニューアルしました。より快適にお過ごしいただけます。</p>',
    slug: 'eatin-renewal',
    createdAt: '2026-02-01T09:00:00.000Z',
    updatedAt: '2026-02-01T09:00:00.000Z',
    publishedAt: '2026-02-01T09:00:00.000Z',
    revisedAt: '2026-02-01T09:00:00.000Z',
  },
];

export async function getNewsList(
  query: MicroCMSListQuery = {}
): Promise<MicroCMSListResponse<NewsArticle>> {
  const limit = query.limit ?? 10;
  const offset = query.offset ?? 0;
  const contents = dummyNews.slice(offset, offset + limit);
  return {
    contents,
    totalCount: dummyNews.length,
    offset,
    limit,
  };
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle> {
  const article = dummyNews.find((a) => a.slug === slug);
  if (!article) {
    throw new Error(`NEWS記事が見つかりません: slug="${slug}"`);
  }
  return article;
}

export async function getAllNewsSlugs(): Promise<string[]> {
  return dummyNews.map((a) => a.slug);
}