import sanitizeHtml from 'sanitize-html';

/**
 * microCMSのリッチテキストをサニタイズする。
 * set:html に渡す前に必ずこの関数を通すこと。
 */
export function sanitizeContent(dirty: string): string {
  return sanitizeHtml(dirty, {
    allowedTags: [
      'p', 'a', 'ul', 'ol', 'li', 'strong', 'em',
      'h2', 'h3', 'br', 'img', 'blockquote', 'code', 'pre',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height', 'loading'],
    },
    // script, iframe, object, embed, form, input, style は allowedTags に含まれないため自動的に除去される
    // on* 属性は allowedAttributes に含まれないため自動的に除去される
    transformTags: {
      // 外部リンクに rel="noopener noreferrer" を自動付与
      a: (tagName, attribs) => {
        const href = attribs.href ?? '';
        const isExternal = href.startsWith('http') || href.startsWith('//');
        return {
          tagName,
          attribs: {
            ...attribs,
            ...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {}),
          },
        };
      },
    },
  });
}
