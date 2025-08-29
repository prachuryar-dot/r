import { MetadataRoute } from 'next';
import { CITIES_DATA } from '@/data/cities';
import { PROPERTIES_DATA } from '@/data/properties.data';

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.pattemestates.com';
  const routes: SitemapEntry[] = [];

  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: 'properties', priority: 0.9, changeFrequency: 'daily' as const },
    // { path: 'about', priority: 0.9, changeFrequency: 'weekly' as const },
    // { path: 'contact', priority: 0.9, changeFrequency: 'weekly' as const },
    // { path: 'careers', priority: 0.8, changeFrequency: 'weekly' as const },
    // { path: 'blog', priority: 0.8, changeFrequency: 'daily' as const },
    // { path: 'testimonials', priority: 0.8, changeFrequency: 'weekly' as const },
    // { path: 'faqs', priority: 0.7, changeFrequency: 'weekly' as const },
    // { path: 'privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    // { path: 'terms-and-conditions', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  staticPages.forEach((page) => {
    routes.push({
      url: `${baseUrl}${page.path ? `/${page.path}` : ''}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  Object.entries(CITIES_DATA).forEach(([citySlug, city]) => {
    routes.push({
      url: `${baseUrl}/properties/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });

    city.areas.forEach((area) => {
      routes.push({
        url: `${baseUrl}/properties/${citySlug}/${area}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    });
  });

  PROPERTIES_DATA.forEach((property) => {
    const propertyBaseUrl = `${baseUrl}/properties/${property.city}/${property.area}/${property.slug}`;

    // Main property page
    routes.push({
      url: propertyBaseUrl,
      lastModified: new Date(property.updatedAt),
      changeFrequency: 'daily',
      priority: 0.6,
    });

    const subPages = ['floor-and-unit-plan', 'master-plan', 'specifications', 'amenities'];

    subPages.forEach((subpage) => {
      routes.push({
        url: `${propertyBaseUrl}/${subpage}`,
        lastModified: new Date(property.updatedAt),
        changeFrequency: 'daily',
        priority: 0.5,
      });
    });
  });

  return routes;
}
