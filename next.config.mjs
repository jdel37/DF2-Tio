/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días cache
    },
    compress: true,
    productionBrowserSourceMaps: false,

    // Optimizaciones de rendimiento
    poweredByHeader: false, // Quitar header X-Powered-By
    devIndicators: false, // Quitar logo de Next.js en esquina

    // Experimental features para mejor rendimiento
    experimental: {
        optimizeCss: false, // Optimizar CSS disabled to avoid critters error
    },

    // Headers de seguridad y performance
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
            {
                // Cache estático para imágenes
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
