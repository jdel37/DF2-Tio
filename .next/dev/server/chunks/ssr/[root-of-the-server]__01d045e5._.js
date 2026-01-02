module.exports = [
"[next]/internal/font/google/inter_2fe1ab3d.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_2fe1ab3d-module__-T-KAq__className",
  "variable": "inter_2fe1ab3d-module__-T-KAq__variable",
});
}),
"[next]/internal/font/google/inter_2fe1ab3d.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_2fe1ab3d.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/DF2-Tio/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_2fe1ab3d.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
;
;
const viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
};
const metadata = {
    metadataBase: new URL('https://www.d2fgestion.com'),
    title: {
        default: 'D2F | Consultoría Empresarial en Bogotá y Marketing Digital',
        template: '%s | D2F Consulting'
    },
    description: 'D2F Consulting: Expertos en consultoría estratégica, marketing digital, análisis de datos y crecimiento empresarial en Colombia. Potenciamos tu empresa y franquicia.',
    keywords: [
        'D2F Consulting',
        'consultoría Bogotá',
        'consultoría Colombia',
        'marketing digital',
        'planeación estratégica',
        'franquicias Colombia',
        'crecimiento empresarial',
        'transformación digital',
        'análisis de datos'
    ],
    authors: [
        {
            name: 'D2F Consulting'
        }
    ],
    creator: 'D2F Consulting',
    publisher: 'D2F Consulting',
    icons: {
        icon: [
            {
                url: '/favicon.ico'
            },
            {
                url: '/favicon.ico',
                sizes: '32x32',
                type: 'image/x-icon'
            }
        ],
        shortcut: '/favicon.ico',
        apple: [
            {
                url: '/favicon.ico',
                sizes: '180x180',
                type: 'image/x-icon'
            }
        ]
    },
    openGraph: {
        type: 'website',
        locale: 'es_CO',
        url: 'https://www.d2fgestion.com',
        siteName: 'D2F Consulting',
        title: 'D2F | Consultoría Estratégica y Digital en Colombia',
        description: 'Transformamos empresas con soluciones de consultoría y marketing digital.',
        images: [
            {
                url: '/images/logo-web.webp',
                width: 1200,
                height: 630,
                alt: 'D2F Consulting'
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large'
        }
    }
};
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
function RootLayout({ children }) {
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
    return(/* ELIMINACIÓN DE SCROLL LATERAL:
           Añadimos overflow-x-hidden tanto al html como al body.
        */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_2fe1ab3d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} overflow-x-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://www.googletagmanager.com"
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(jsonLd)
                        }
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "antialiased font-sans overflow-x-hidden w-full relative",
                children: [
                    GA_MEASUREMENT_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
                                strategy: "afterInteractive"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                id: "google-analytics",
                                strategy: "afterInteractive",
                                children: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/app/layout.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/app/layout.tsx",
        lineNumber: 110,
        columnNumber: 9
    }, this));
}
}),
"[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/DF2-Tio/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/DF2-Tio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/DF2-Tio/node_modules/next/dist/client/script.js"));
}),
"[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/DF2-Tio/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/DF2-Tio/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01d045e5._.js.map