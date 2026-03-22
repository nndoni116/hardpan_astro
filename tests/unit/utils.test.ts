import { describe, it, expect } from 'vitest';
import { formatDate, toDatetimeAttr } from '../../src/utils/date';
import { sanitizeContent } from '../../src/lib/sanitize';
import { buildSeoMeta } from '../../src/utils/seo';

// --- date.ts テスト ---
describe('formatDate', () => {
  it('ISO文字列を YYYY.MM.DD 形式に変換する', () => {
    expect(formatDate('2024-04-01T00:00:00.000Z')).toMatch(/2024\.\d{2}\.\d{2}/);
  });
});

describe('toDatetimeAttr', () => {
  it('YYYY-MM-DD 形式を返す', () => {
    expect(toDatetimeAttr('2024-04-01T00:00:00.000Z')).toBe('2024-04-01');
  });
});

// --- sanitize.ts テスト ---
describe('sanitizeContent', () => {
  it('許可タグを通過させる', () => {
    const result = sanitizeContent('<p>テスト</p><strong>強調</strong>');
    expect(result).toContain('<p>テスト</p>');
    expect(result).toContain('<strong>強調</strong>');
  });

  it('script タグを除去する', () => {
    const result = sanitizeContent('<script>alert("xss")</script><p>安全</p>');
    expect(result).not.toContain('<script>');
    expect(result).toContain('<p>安全</p>');
  });

  it('iframe タグを除去する', () => {
    const result = sanitizeContent('<iframe src="evil.com"></iframe>');
    expect(result).not.toContain('<iframe>');
  });

  it('on* 属性を除去する', () => {
    const result = sanitizeContent('<p onclick="alert()">クリック</p>');
    expect(result).not.toContain('onclick');
  });

  it('外部リンクに rel="noopener noreferrer" を付与する', () => {
    const result = sanitizeContent('<a href="https://example.com">外部リンク</a>');
    expect(result).toContain('rel="noopener noreferrer"');
    expect(result).toContain('target="_blank"');
  });
});

// --- seo.ts テスト ---
describe('buildSeoMeta', () => {
  it('pageTitle ありの場合、サイト名を末尾に付ける', () => {
    const meta = buildSeoMeta({ pageTitle: '商品一覧', description: 'テスト', path: '/menu/' });
    expect(meta.title).toBe('商品一覧 | ハードパン');
  });

  it('pageTitle なしの場合、デフォルトタイトルを返す', () => {
    const meta = buildSeoMeta({ description: 'テスト', path: '/' });
    expect(meta.title).toContain('ハードパン');
  });

  it('canonical が正しく生成される', () => {
    const meta = buildSeoMeta({ description: 'テスト', path: '/about/' });
    expect(meta.canonical).toMatch(/\/about\/$/);
  });

  it('noindex デフォルトは false', () => {
    const meta = buildSeoMeta({ description: 'テスト', path: '/' });
    expect(meta.noindex).toBe(false);
  });

  it('noindex: true が反映される', () => {
    const meta = buildSeoMeta({ description: 'テスト', path: '/contact/thanks/', noindex: true });
    expect(meta.noindex).toBe(true);
  });
});
