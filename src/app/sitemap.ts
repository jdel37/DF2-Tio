import { MetadataRoute } from 'next';
import { posts } from '@/content/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.d2fgestion.com';
    const now = new Date().toISOString();

    const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.dateModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        images: [`${baseUrl}${post.image}`],
    }));

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
            images: [
                `${baseUrl}/images/logo-web.webp`,
                `${baseUrl}/images/academy-4.webp`,
                `${baseUrl}/images/equipo-1.webp`,
                `${baseUrl}/images/tio.webp`,
            ],
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogPosts,
    ];
}
