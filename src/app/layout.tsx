import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Optimized font loading - subset and swap for performance
const inter = Inter({
    subsets: ['latin'],
    display: 'swap', // Prevents FOIT (Flash of Invisible Text)
    preload: true,
    variable: '--font-inter',
});

// SEO-Optimized Metadata (Title: 50-60 chars, Description: 140-160 chars)
export const metadata: Metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'D2F Consulting | Consultoría Empresarial Colombia',  // 52 chars
        template: '%s | D2F Consulting'
    },
    description: 'Consultoría estratégica y transformación digital para empresas en Colombia. Expertos en gestión de proyectos, franquicias y crecimiento sostenible.', // 155 chars
    keywords: ['consultoría empresarial colombia', 'transformación digital', 'asesoría estratégica', 'gestión proyectos', 'desarrollo franquicias', 'marketing digital', 'consultoría bogotá'],
    authors: [{ name: 'D2F Consulting' }],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/logo-web.jpg' },
            { url: '/images/logo-web.jpg', sizes: 'any' },
        ],
        apple: [
            { url: '/logo-web.jpg' },
            { url: '/images/logo-web.jpg', sizes: '180x180', type: 'image/jpg' },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/logo-web.jpg',
            },
        ],
    },
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F Consulting | Consultoría Empresarial Colombia',
        description: 'Transformamos empresas con consultoría estratégica y soluciones innovadoras. ¡Contáctanos hoy!',
        images: [
            {
                url: '/images/logo-web.jpg',
                width: 1200,
                height: 630,
                alt: 'D2F Consulting - Consultoría Empresarial Colombia',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'D2F Consulting | Consultoría Empresarial Colombia',
        description: 'Consultoría estratégica y transformación digital para empresas en Colombia',
        images: ['/images/logo-web.jpg'],
    },
    alternates: {
        canonical: 'https://www.d2fgestion.com',
        languages: {
            'es-CO': 'https://www.d2fgestion.com',
            'en': 'https://www.d2fgestion.com/en',
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
    verification: {
        // google: 'tu-código-de-verificación', // Añadir después de Search Console
    },
};

// Google Analytics 4 Measurement ID (reemplazar con tu ID real)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // JSON-LD: Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'D2F Consulting',
        alternateName: 'D2F Gestión',
        url: 'https://www.d2fgestion.com',
        logo: 'https://www.d2fgestion.com/images/logo-web.jpg',
        description: 'Consultoría empresarial especializada en transformación digital y gestión estratégica en Colombia',
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
            availableLanguage: ['es', 'en']
        },
        sameAs: [
            'https://www.linkedin.com/company/10602504',
            'https://www.facebook.com/D2FConsultingAgency',
            'https://www.instagram.com/d2f_consulting_agency/'
        ],
    };

    // JSON-LD: LocalBusiness Schema (para SEO local)
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.d2fgestion.com/#localbusiness',
        name: 'D2F Consulting',
        image: 'https://www.d2fgestion.com/images/logo-web.jpg',
        url: 'https://www.d2fgestion.com',
        telephone: '+57-322-362-4554',
        email: 'contacto@d2fgestion.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bogotá',
            addressLocality: 'Bogotá',
            addressRegion: 'Cundinamarca',
            postalCode: '110111',
            addressCountry: 'CO'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 4.7110,
            longitude: -74.0721
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
        },
        priceRange: '$$'
    };

    return (
        <html lang="es">
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>
            <body className={inter.className}>
                {/* Google Analytics 4 */}
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
