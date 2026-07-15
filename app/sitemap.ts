import type { MetadataRoute } from 'next';
import { featuredProjects } from '../src/data/projects';

const BASE = 'https://usersatyam.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...featuredProjects.map((p) => ({
      url: `${BASE}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
