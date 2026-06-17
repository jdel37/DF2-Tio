import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.d2fgestion.com';
    const now = new Date().toISOString();

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
    ];
}
