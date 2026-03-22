/**
 * ISO文字列を "YYYY.MM.DD" 形式にフォーマット
 */
export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

/**
 * ISO文字列を <time> タグ用の datetime 属性値に変換（YYYY-MM-DD）
 */
export function toDatetimeAttr(isoString: string): string {
  return new Date(isoString).toISOString().slice(0, 10);
}
