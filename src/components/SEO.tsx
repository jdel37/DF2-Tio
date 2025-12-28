import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image = "/images/logo-web.jpg",
    url = "https://www.d2fgestion.com"
}) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const siteTitle = "D2F Consulting";
    const defaultDescription = "Consultoría estratégica, transformación digital y asesoría para empresas que buscan crecimiento sostenible y excelencia operativa.";
    const defaultKeywords = "consultoría estratégica, transformación digital, asesoría empresarial, gestión estratégica, consultoría financiera, desarrollo organizacional";

    return (
        <Helmet>
            {/* Basic Attributes */}
            <html lang={currentLang} />
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url} />

            {/* Alternate Languages (Hreflang) */}
            <link rel="alternate" hrefLang="es" href="https://www.d2fgestion.com" />
            <link rel="alternate" hrefLang="en" href="https://www.d2fgestion.com?lng=en" />
            <link rel="alternate" hrefLang="x-default" href="https://www.d2fgestion.com" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
