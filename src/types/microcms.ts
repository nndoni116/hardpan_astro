// microCMS APIレスポンスの型定義

export interface MicroCMSImage {
  url: string;
  height: number;
  width: number;
}

export interface MicroCMSBase {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface NewsArticle extends MicroCMSBase {
  title: string;
  category: NewsCategory;
  thumbnail?: MicroCMSImage;
  content: string;
  slug: string;
}

export type NewsCategory = 'お知らせ' | '新商品' | 'イベント' | '臨時休業';

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MicroCMSListQuery {
  limit?: number;
  offset?: number;
  orders?: string;
  fields?: string;
  filters?: string;
}
