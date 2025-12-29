module.exports = [
"[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/DF2-Tio/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'D2F Consulting - Consultoría Empresarial y Transformación Digital en Colombia',
        template: '%s | D2F Consulting'
    },
    description: 'Consultoría estratégica, transformación digital, gestión de proyectos y desarrollo de franquicias en Colombia. Expertos en soluciones empresariales para crecimiento sostenible.',
    keywords: [
        'consultoría empresarial colombia',
        'transformación digital',
        'asesoría estratégica',
        'gestión proyectos',
        'desarrollo franquicias',
        'marketing digital',
        'consultoría bogotá',
        'consultoría medellín'
    ],
    authors: [
        {
            name: 'D2F Consulting'
        }
    ],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    icons: {
        icon: [
            {
                url: '/logo-web.jpg'
            },
            {
                url: '/images/logo-web.jpg',
                sizes: 'any'
            }
        ],
        apple: [
            {
                url: '/logo-web.jpg'
            },
            {
                url: '/images/logo-web.jpg',
                sizes: '180x180',
                type: 'image/jpg'
            }
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/logo-web.jpg'
            }
        ]
    },
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F Consulting - Consultoría Empresarial Colombia',
        description: 'Transformamos empresas con consultoría estratégica, transformación digital y soluciones innovadoras en Colombia.',
        images: [
            {
                url: '/logo-web.jpg',
                width: 1200,
                height: 630,
                alt: 'D2F Consulting - Consultoría Empresarial'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'D2F Consulting - Consultoría Empresarial Colombia',
        description: 'Consultoría estratégica y transformación digital para empresas en Colombia',
        images: [
            '/logo-web.jpg'
        ]
    },
    alternates: {
        canonical: 'https://www.d2fgestion.com',
        languages: {
            'es-CO': 'https://www.d2fgestion.com',
            'en': 'https://www.d2fgestion.com/en'
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    verification: {
    }
};
function RootLayout({ children }) {
    // JSON-LD for Organization (helps Google understand business info)
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'D2F Consulting',
        alternateName: 'D2F Gestión',
        url: 'https://www.d2fgestion.com',
        logo: 'https://www.d2fgestion.com/logo-web.jpg',
        description: 'Consultoría empresarial especializada en transformación digital, gestión estratégica y desarrollo de franquicias en Colombia',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'CO',
            addressRegion: 'Cundinamarca',
            addressLocality: 'Bogotá'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+57-322-362-4554',
            contactType: 'customer service',
            areaServed: [
                'CO',
                'LATAM'
            ],
            availableLanguage: [
                'es',
                'en'
            ]
        },
        sameAs: [
            'https://www.linkedin.com/company/10602504',
            'https://www.facebook.com/D2FConsultingAgency',
            'https://www.instagram.com/d2f_consulting_agency/'
        ],
        founder: {
            '@type': 'Person',
            name: 'Diego Forero'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(organizationSchema)
                    }
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
                children: children
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/app/layout.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, this);
}
}),
"[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__78bebd80._.js.map