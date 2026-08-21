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
        default: 'D2F Consulting | Consultoría Empresarial Global',
        template: '%s | D2F Consulting',
    },
    description:
        'Consultoría empresarial, estrategia, transformación digital y crecimiento para organizaciones que quieren escalar con claridad y resultados medibles a nivel internacional.',
    keywords: [
        'consultoría empresarial global',
        'consultoría estratégica internacional',
        'transformación digital empresas',
        'gestión estratégica corporativa',
        'crecimiento empresarial sostenible',
        'franquicias y expansión internacional',
        'marketing digital para empresas',
        'implementación de proyectos empresariales',
        'liderazgo y desarrollo organizacional',
        'D2F Consulting',
        'D2F',
    ],
    authors: [{ name: 'D2F Consulting', url: 'https://www.d2fgestion.com' }],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    category: 'Business Consulting',

    alternates: {
        canonical: 'https://www.d2fgestion.com',
        languages: {
            'es-ES': 'https://www.d2fgestion.com',
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
        locale: 'es_ES',
        alternateLocale: ['en_US'],
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F Consulting | Consultoría Empresarial Global',
        description: 'Firma internacional de consultoría empresarial, estrategia y transformación digital para organizaciones que buscan crecimiento sostenible y ejecución real.',
        images: [{
            url: '/images/og-image.webp',
            width: 1200,
            height: 630,
            alt: 'D2F Consulting - Consultoría Empresarial y Gestión Estratégica Global',
            type: 'image/webp',
        }],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@d2f_consulting',
        creator: '@d2f_consulting',
        title: 'D2F Consulting | Consultoría Empresarial Global',
        description: 'Consultoría estratégica y transformación digital para empresas con visión internacional.',
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
            alternateName: ['D2F', 'D2F Consulting'],
            legalName: 'D2F Consulting',
            slogan: 'Consultoría empresarial con visión global',
            description: 'D2F Consulting es una firma internacional de consultoría empresarial y gestión estratégica con enfoque global en crecimiento, transformación digital y ejecución sostenible.',
            url: 'https://www.d2fgestion.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.d2fgestion.com/images/logo-web.webp',
                width: 636,
                height: 621,
            },
            foundingDate: '2015',
            foundingLocation: { '@type': 'Place', name: 'Global / Remote-first' },
            knowsAbout: [
                'Consultoría empresarial',
                'Gestión estratégica',
                'Transformación digital',
                'Gestión de proyectos',
                'Desarrollo de franquicias',
                'Marketing digital',
            ],
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
                areaServed: 'Worldwide',
                availableLanguage: ['Spanish', 'English'],
            }],
        },
        // ── LocalBusiness ───────────────────────────────────────────────
        {
            '@type': ['LocalBusiness', 'ProfessionalService'],
            '@id': 'https://www.d2fgestion.com/#localbusiness',
            name: 'D2F Consulting',
            image: 'https://www.d2fgestion.com/images/logo-web.webp',
            url: 'https://www.d2fgestion.com',
            telephone: '+57-310-235-3201',
            email: 'd2fgestion@gmail.com',
            priceRange: '$$',
            description: 'Firma internacional de consultoría empresarial y gestión estratégica con más de 20 años de experiencia.',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Atención remota / virtual',
                addressLocality: 'Global',
                addressCountry: 'Worldwide',
            },
            areaServed: 'Worldwide',
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
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoría en Gestión Estratégica', description: 'Desarrollo e implementación de estrategias empresariales para crecimiento sostenible y expansión internacional.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transformación Digital', description: 'Digitalización de procesos y modelos de negocio para empresas en crecimiento.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Proyectos Empresariales', description: 'Planificación y ejecución de proyectos con metodologías ágiles y tradicionales.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing y Comunicación Digital', description: 'Estrategias de marketing digital y gestión de marca para organizaciones globales.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo de Franquicias', description: 'Diseño y expansión de modelos de franquicia para crecimiento escalable.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Academia Empresarial', description: 'Programas de formación y liderazgo para equipos y directivos.' } },
                ],
            },
        },
        // ── WebSite ────────────────────────────────────────────────────
        {
            '@type': 'WebSite',
            '@id': 'https://www.d2fgestion.com/#website',
            url: 'https://www.d2fgestion.com',
            name: 'D2F Consulting Consultoría Empresarial Global',
            inLanguage: ['es-ES', 'en-US'],
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
            description: 'CEO de D2F Consulting con más de 20 años de experiencia en consultoría empresarial, estrategia y crecimiento organizacional.',
            sameAs: ['https://www.linkedin.com/in/diego-fernando-forero/'],
        },
        {
            '@type': 'Person',
            '@id': 'https://www.d2fgestion.com/#alejandra-rivera',
            name: 'Alejandra Rivera',
            jobTitle: 'Chief Strategy Officer',
            worksFor: { '@id': 'https://www.d2fgestion.com/#organization' },
            image: 'https://www.d2fgestion.com/images/amiga-tio.webp',
            description: 'CSO de D2F Consulting, especialista en análisis de datos, inteligencia de negocios y optimización estratégica para empresas en crecimiento.',
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
            reviewBody: 'Diego has built a strong reputation as someone with vision, diligence and honour. He gets things done, is pragmatic and realistic, and I have no hesitation in recommending him.',
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
                        text: 'D2F Consulting es una firma internacional de consultoría empresarial y gestión estratégica fundada en 2015. Acompañamos organizaciones en su crecimiento, transformación digital y ejecución estratégica con una mirada global y resultados medibles.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿Qué servicios de consultoría empresarial ofrece D2F Consulting?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'D2F Consulting ofrece seis líneas de servicio: gestión estratégica, transformación digital, gestión de proyectos, marketing y comunicación, desarrollo de franquicias y academia empresarial.',
                    },
                },
                {
                    '@type': 'Question',
                    name: '¿Por qué elegir una consultoría empresarial global?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Una consultora con visión global aporta estructura, rigor analítico y ejecución práctica para resolver retos complejos en mercados dinámicos. D2F combina experiencia práctica, metodologías probadas y acompañamiento real en la implementación.',
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
                        text: 'Sí. D2F Consulting atiende desde startups y pymes hasta grandes corporaciones. Nuestras soluciones se diseñan a la medida de cada organización, adaptando metodologías y alcance según el tamaño, sector y etapa de crecimiento.',
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
