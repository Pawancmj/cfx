import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cyberforenx.in';

  // Base routes
  const routes = [
    '',
    '/company',
    '/certification',
    '/careers',
    '/contact',
    '/services',
    '/solutions',
    '/resources',
    '/case-studies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
