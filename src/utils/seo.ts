const SITE_NAME = 'ハードパン';
const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'https://hardpan.example.com';
const DEFAULT_OGP_IMAGE = `${SITE_URL}/images/ogp-default.jpg`;

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  noindex?: boolean;
}

export function buildSeoMeta(params: {
  pageTitle?: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}): SeoMeta {
  const title = params.pageTitle
    ? `${params.pageTitle} | ${SITE_NAME}`
    : `${SITE_NAME} | 金沢のハード系パン専門店`;

  return {
    title,
    description: params.description,
    canonical: `${SITE_URL}${params.path}`,
    ogImage: params.ogImage ?? DEFAULT_OGP_IMAGE,
    noindex: params.noindex ?? false,
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_OGP_IMAGE };
