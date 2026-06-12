import { MetadataRoute } from 'next';
import { articles } from '@/data/blogArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.saarthiorganics.com';

  const staticPages = [
    '',
    '/about-us',
    '/logistics',
    '/quality-and-sourcing',
    '/blackstrap-molasses',
    '/contact',
    '/faq',
    '/blog',
    '/case-studies',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  const industryPages = [
    '/molasses-for-distilleries',
    '/molasses-for-cattle-feed',
    '/molasses-for-agriculture-and-farming',
    '/molasses-for-yeast-industry',
    '/molasses-for-food-processing',
    '/molasses-for-tobacco-industry',
    '/molasses-for-pharma',
    '/molasses-for-foundries',
  ];

  const locationPages = [
    '/molasses-supplier-haryana',
    '/molasses-supplier-punjab',
    '/molasses-supplier-rajasthan',
    '/molasses-supplier-delhi-ncr',
    '/molasses-supplier-uttarakhand',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages
  staticPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
    });
  });

  // Industry pages
  industryPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Location pages
  locationPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Blog pages
  articles.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
