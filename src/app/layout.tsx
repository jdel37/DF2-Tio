import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: '--font-inter',
});

// SEO optimizado para keywords estratégicas
export const metadata: Metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'D2F | Consultoría Bogotá, Colombia, Crecimiento Empresarial y Marketing Digital',
        template: '%s | D2F Consulting',
    },
    description:
        'D2F Consulting ofrece consultoría empresarial en Bogotá y Colombia, planeación estratégica, marketing digital, análisis de datos, franquicias y crecimiento empresarial sostenible.',
    keywords: [
        'D2F',
        'D2F Consulting',
        'consultoría Bogotá',
        'consultoría Colombia',
        'consultoría empresarial',
        'consultoría estratégica',
        'asesoría empresarial',
        'planeación estratégica',
        'marketing digital',
        'marketing empresarial',
        'gestión de proyectos',
        'análisis de datos',
        'business intelligence',
        'franquicias Colombia',
        'franquicias Bogotá',
        'crecimiento empresarial',
        'transformación digital',
        'optimización de procesos',
        'estrategia corporativa',
        'desarrollo de negocios',
        'consultoría en innovación',
        'consultoría financiera',
        'consultoría de operaciones',
        'gestión de talento humano',
        'mejora continua',
        'sostenibilidad empresarial',
        'expansión de empresas',
        'emprendimiento corporativo',
        'automatización de negocios',
    ]
    ,
    authors: [{ name: 'D2F Consulting' }],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
        icon: [
            { url: '/images/logo-web.webp', sizes: '32x32', type: 'image/webp' },
            { url: '/images/logo-web.webp', sizes: '16x16', type: 'image/webp' },
            { url: '/images/logo-web.webp' } // fallback
        ],
        apple: [
            { url: '/images/logo-web.webp', sizes: '180x180', type: 'image/webp' }
        ],
    },
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F | Consultoría Bogotá, Colombia, Crecimiento Empresarial y Marketing Digital',
        description: 'D2F Consulting transforma empresas con consultoría estratégica, marketing digital, análisis de datos, franquicias y crecimiento empresarial.',
        images: [
            {
                url: '/images/logo-web.webp',
                width: 1200,
                height: 630,
                alt: 'D2F Consulting - Consultoría empresarial Colombia',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'D2F | Consultoría Bogotá, Colombia, Crecimiento Empresarial y Marketing Digital',
        description: 'D2F Consulting ofrece soluciones estratégicas y digitales en Bogotá y Colombia para empresas y franquicias.',
        images: ['/images/logo-web.webp'],
    },
    alternates: {
        canonical: 'https://www.d2fgestion.com',
        languages: {
            'es-CO': 'https://www.d2fgestion.com',
            en: 'https://www.d2fgestion.com/en',
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'D2F Consulting',
        alternateName: 'D2F Gestión',
        url: 'https://www.d2fgestion.com',
        logo: 'https://www.d2fgestion.com/images/logo-web.webp',
        description: 'D2F Consulting | Consultoría empresarial, marketing digital, análisis de datos y crecimiento empresarial en Bogotá y Colombia',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'CO',
            addressRegion: 'Cundinamarca',
            addressLocality: 'Bogotá',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+57-322-362-4554',
            contactType: 'customer service',
            areaServed: ['CO', 'LATAM'],
            availableLanguage: ['es', 'en'],
        },
        sameAs: [
            'https://www.linkedin.com/company/10602504',
            'https://www.facebook.com/D2FConsultingAgency',
            'https://www.instagram.com/d2f_consulting_agency/',
        ],
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.d2fgestion.com/#localbusiness',
        name: 'D2F Consulting',
        image: 'https://www.d2fgestion.com/images/logo-web.webp',
        url: 'https://www.d2fgestion.com',
        telephone: '+57-322-362-4554',
        email: 'contacto@d2fgestion.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bogotá',
            addressLocality: 'Bogotá',
            addressRegion: 'Cundinamarca',
            postalCode: '110111',
            addressCountry: 'CO',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 4.711, longitude: -74.0721 },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
        },
        priceRange: '$$',
    };

    return (
        <html lang="es">
            <head>
                {/* Favicons para navegadores y favoritos */}
                <link rel="icon" type="image/webp" sizes="32x32" href="/images/logo-web.webp" />
                <link rel="icon" type="image/webp" sizes="16x16" href="/images/logo-web.webp" />
                <link rel="shortcut icon" href="/images/logo-web.webp" />

                {/* Apple / iOS */}
                <link rel="apple-touch-icon" sizes="180x180" href="/images/logo-web.webp" />
                <meta name="apple-mobile-web-app-title" content="D2F Consulting" />
                <meta name="apple-mobile-web-app-capable" content="yes" />

                {/* JSON-LD para SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            </head>
            <body className={inter.className}>
                {GA_MEASUREMENT_ID && (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
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
