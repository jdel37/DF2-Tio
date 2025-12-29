import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.d2fgestion.com';
    const currentDate = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Añadir más URLs cuando tengas páginas adicionales
        // Ejemplo para futuras páginas de servicios:
        // {
        //   url: `${baseUrl}/servicios/transformacion-digital`,
        //   lastModified: currentDate,
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ];
}
