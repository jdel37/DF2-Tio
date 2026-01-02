import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// 1. OPTIMIZACIÓN DE FUENTES (Evita render-blocking)
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

// 2. CONFIGURACIÓN DE VIEWPORT (Mejora experiencia móvil y previene zoom accidental)
export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1, // Ayuda a evitar desajustes de layout en iOS
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'D2F | Consultoría Empresarial en Bogotá y Marketing Digital',
        template: '%s | D2F Consulting',
    },
    description:
        'D2F Consulting: Expertos en consultoría estratégica, marketing digital, análisis de datos y crecimiento empresarial en Colombia. Potenciamos tu empresa y franquicia.',
    keywords: [
        'D2F Consulting', 'consultoría Bogotá', 'consultoría Colombia', 'marketing digital',
        'planeación estratégica', 'franquicias Colombia', 'crecimiento empresarial',
        'transformación digital', 'análisis de datos'
    ],
    authors: [{ name: 'D2F Consulting' }],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',

    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' }
        ],
    },

    openGraph: {
        type: 'website',
        locale: 'es_CO',
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F | Consultoría Estratégica y Digital en Colombia',
        description: 'Transformamos empresas con soluciones de consultoría y marketing digital.',
        images: [{ url: '/images/logo-web.webp', width: 1200, height: 630, alt: 'D2F Consulting' }],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://www.d2fgestion.com/#organization',
                name: 'D2F Consulting',
                url: 'https://www.d2fgestion.com',
                logo: 'https://www.d2fgestion.com/favicon.ico',
                sameAs: [
                    'https://www.linkedin.com/company/10602504',
                    'https://www.facebook.com/D2FConsultingAgency',
                    'https://www.instagram.com/d2f_consulting_agency/'
                ]
            },
            {
                '@type': 'LocalBusiness',
                '@id': 'https://www.d2fgestion.com/#localbusiness',
                name: 'D2F Consulting',
                image: 'https://www.d2fgestion.com/images/logo-web.webp',
                telephone: '+57-322-362-4554',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Bogotá',
                    addressLocality: 'Bogotá',
                    addressRegion: 'Cundinamarca',
                    addressCountry: 'CO'
                }
            }
        ]
    };

    return (
        /* ELIMINACIÓN DE SCROLL LATERAL:
           Añadimos overflow-x-hidden tanto al html como al body.
        */
        <html lang="es" className={`${inter.variable} overflow-x-hidden`}>
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased font-sans overflow-x-hidden w-full relative">
                {GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}

                {children}
            </body>
        </html>
    );
}