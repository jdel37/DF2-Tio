import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-poppins',
});

export const viewport: Viewport = {
    themeColor: '#1E76B8',
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'Consultoría Empresarial en Colombia | D2F Consulting',
        template: '%s | D2F Consulting Colombia',
    },
    description:
        'Consultoría empresarial, gestión estratégica y transformación digital en Colombia. +20 años en Bogotá y Medellín. Agenda tu consulta gratis hoy.',
    keywords: [
        // Primary — exact match target
        'consultoría empresarial Colombia',
        'consultoría empresarial Bogotá',
        'gestión empresarial Colombia',
        'consultoría estratégica Colombia',
        // Secondary — high volume
        'firma de consultoría Colombia',
        'consultores empresariales Bogotá',
        'gestión estratégica empresas',
        'transformación digital empresas Colombia',
        'planeación estratégica Colombia',
        // Long-tail
        'consultoría para empresas Bogotá',
        'gestión de proyectos empresariales Colombia',
        'desarrollo de franquicias Colombia',
        'marketing digital para empresas Colombia',
        'capacitación empresarial Colombia',
        'crecimiento empresarial Colombia',
        'mejora de procesos empresariales',
        'consultoría organizacional Bogotá',
        // Brand
        'D2F Consulting',
        'D2F gestión',
    ],
    authors: [{ name: 'D2F Consulting', url: 'https://www.d2fgestion.com' }],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    category: 'Business Consulting',

    alternates: {
        canonical: 'https://www.d2fgestion.com',
        languages: {
            'es-CO': 'https://www.d2fgestion.com',
            'en-US': 'https://www.d2fgestion.com',
            'x-default': 'https://www.d2fgestion.com',
        },
    },

    manifest: '/site.webmanifest',

    icons: {
        icon: [{ url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }],
        shortcut: '/favicon.ico',
        apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },

    openGraph: {
        type: 'website',
        locale: 'es_CO',
        alternateLocale: ['en_US'],
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'Consultoría Empresarial en Colombia | D2F Consulting',
        description: 'Firma líder en consultoría empresarial, gestión estratégica y transformación digital en Colombia. +20 años de experiencia. Bogotá · Medellín.',
        images: [{
            url: '/images/og-image.webp',
            width: 1200,
            height: 630,
            alt: 'D2F Consulting - Consultoría Empresarial y Gestión Estratégica en Colombia',
            type: 'image/webp',
        }],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@d2f_consulting',
        creator: '@d2f_consulting',
        title: 'Consultoría Empresarial en Colombia | D2F Consulting',
        description: 'Firma líder en consultoría empresarial y gestión estratégica. +20 años de experiencia en Colombia.',
        images: ['/images/og-image.webp'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },

    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
    },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        // ── Organization ──────────────────────────────────────────────
        {
            '@type': 'Organization',
            '@id': 'https://www.d2fgestion.com/#organization',
            name: 'D2F Consulting',
            alternateName: 'D2F Gestión',
            url: 'https://www.d2fgestion.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.d2fgestion.com/images/logo-web.webp',
                width: 636,
                height: 621,
            },
            foundingDate: '2015',
            numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 50 },
            sameAs: [
                'https://www.linkedin.com/company/10602504',
                'https://www.facebook.com/D2FConsultingAgency',
                'https://www.instagram.com/d2f_consulting_agency/',
            ],
            contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+57-310-235-3201',
                email: 'd2fgestion@gmail.com',
                contactType: 'customer service',
                areaServed: 'CO',
                availableLanguage: ['Spanish', 'English'],
            }],
        },
        // ── LocalBusiness (Bogotá) ─────────────────────────────────────
        {
            '@type': ['LocalBusiness', 'ProfessionalService'],
            '@id': 'https://www.d2fgestion.com/#localbusiness',
            name: 'D2F Consulting',
            image: 'https://www.d2fgestion.com/images/logo-web.webp',
            url: 'https://www.d2fgestion.com',
            telephone: '+57-310-235-3201',
            email: 'd2fgestion@gmail.com',
            priceRange: '$$',
            description: 'Firma de consultoría empresarial y gestión estratégica en Colombia con más de 20 años de experiencia.',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'WeWork Bogotá',
                addressLocality: 'Bogotá',
                addressRegion: 'Cundinamarca',
                postalCode: '110111',
                addressCountry: 'CO',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 4.711, longitude: -74.0721 },
            areaServed: [
                { '@type': 'City', name: 'Bogotá' },
                { '@type': 'City', name: 'Medellín' },
                { '@type': 'Country', name: 'Colombia' },
            ],
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '3',
                bestRating: '5',
                worstRating: '1',
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Consultoría Empresarial',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoría en Gestión Estratégica', description: 'Desarrollo e implementación de estrategias empresariales para crecimiento sostenible en Colombia.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transformación Digital', description: 'Digitalización de procesos y modelos de negocio para empresas en Colombia.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Proyectos Empresariales', description: 'Planificación y ejecución de proyectos con metodologías ágiles y tradicionales.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing y Comunicación Digital', description: 'Estrategias de marketing digital y gestión de marca para empresas colombianas.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo de Franquicias en Colombia', description: 'Diseño y expansión de modelos de franquicia a nivel nacional e internacional.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Academia Empresarial', description: 'Programas de formación y liderazgo para equipos y directivos de empresas colombianas.' } },
                ],
            },
        },
        // ── WebSite ────────────────────────────────────────────────────
        {
            '@type': 'WebSite',
            '@id': 'https://www.d2fgestion.com/#website',
            url: 'https://www.d2fgestion.com',
            name: 'D2F Consulting — Consultoría Empresarial Colombia',
            inLanguage: ['es-CO', 'en-US'],
            publisher: { '@id': 'https://www.d2fgestion.com/#organization' },
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.d2fgestion.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
            },
        },
        // ── Persons ────────────────────────────────────────────────────
        {
            '@type': 'Person',
            '@id': 'https://www.d2fgestion.com/#diego-forero',
            name: 'Diego Forero',
            jobTitle: 'Chief Executive Officer',
            worksFor: { '@id': 'https://www.d2fgestion.com/#organization' },
            url: 'https://www.linkedin.com/in/diego-fernando-forero/',
            image: 'https://www.d2fgestion.com/images/tio.webp',
            description: 'CEO de D2F Consulting con más de 20 años de experiencia en consultoría empresarial y gestión estratégica en Colombia.',
            sameAs: ['https://www.linkedin.com/in/diego-fernando-forero/'],
        },
        {
            '@type': 'Person',
            '@id': 'https://www.d2fgestion.com/#alejandra-rivera',
            name: 'Alejandra Rivera',
            jobTitle: 'Chief Strategy Officer',
            worksFor: { '@id': 'https://www.d2fgestion.com/#organization' },
            image: 'https://www.d2fgestion.com/images/amiga-tio.webp',
            description: 'CSO de D2F Consulting, especialista en análisis de datos, inteligencia de negocios y optimización estratégica.',
        },
        // ── Reviews ────────────────────────────────────────────────────
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Johanna Gutierrez' },
            itemReviewed: { '@id': 'https://www.d2fgestion.com/#localbusiness' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Tuve la maravillosa oportunidad de trabajar con Diego y vi cómo su pasión, conocimientos, liderazgo y gran compromiso hacen de él un excelente profesional.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Victor Garcia' },
            itemReviewed: { '@id': 'https://www.d2fgestion.com/#localbusiness' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Excelentes habilidades de organización, planeación, liderazgo y negociación. Siempre han tenido un compromiso profesional de entrega total a sus proyectos.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Yamel Ramos' },
            itemReviewed: { '@id': 'https://www.d2fgestion.com/#localbusiness' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Diego has built a strong reputation as someone with vision, diligence and honour — someone who gets things done. A pragmatic leader and realist; I have no hesitation in recommending him.',
        },
        // ── FAQ ────────────────────────────────────────────────────────
        {
            '@type': 'FAQPage',
            '@id': 'https://www.d2fgestion.com/#faq',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: '¿Qué es D2F Consulting y dónde opera?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'D2F Consulting es una firma de consultoría empresarial y gestión estratégica fundada en 2015, con sedes en Bogotá y Medellín, Colombia. Atendemos empresas a nivel nacional e internacional con servicios de consultoría estratégica, transformación digital, gestión de proyectos, marketing, franquicias y academia empresarial.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿Qué servicios de consultoría empresarial ofrece D2F Consulting?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'D2F Consulting ofrece seis líneas de servicio: (1) Gestión Estratégica — planeación y desarrollo corporativo; (2) Transformación Digital — automatización y data analytics; (3) Gestión de Proyectos — metodologías ágiles y tradicionales; (4) Marketing y Comunicación — estrategia digital y gestión de marca; (5) Desarrollo de Franquicias — expansión nacional e internacional; (6) Academia Empresarial — formación en liderazgo e innovación.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿Por qué elegir una consultoría empresarial en Colombia?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Contar con una consultora empresarial local como D2F Consulting garantiza conocimiento profundo del mercado colombiano, relaciones con el ecosistema empresarial local, comprensión de la regulación nacional y experiencia con los retos específicos de las empresas en Colombia. D2F tiene más de 20 años de trayectoria y más de 25 clientes satisfechos en todo el país.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿Cómo puedo contratar los servicios de consultoría empresarial de D2F?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Puede contactar a D2F Consulting directamente a través del formulario en nuestra página web, por email a d2fgestion@gmail.com o por teléfono al +57 310 235 3201. Respondemos en menos de 24 horas y ofrecemos una consulta inicial sin costo.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿D2F Consulting trabaja con empresas de todos los tamaños?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Sí. D2F Consulting atiende desde startups y pymes hasta grandes corporaciones en Colombia. Nuestras soluciones de consultoría empresarial se diseñan a la medida de cada organización, adaptando metodologías y alcance según el tamaño y sector de la empresa.',
                    },
                },
            ],
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
            <head>
                {/* LCP preload */}
                <link rel="preload" as="image" href="/images/academy-4.webp" type="image/webp" />
                {GA_MEASUREMENT_ID && (
                    <link rel="preconnect" href="https://www.googletagmanager.com" />
                )}
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
                <SpeedInsights />
            </body>
        </html>
    );
}
