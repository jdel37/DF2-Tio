(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/DF2-Tio/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const logo = "/images/logo-03-300-dpi.webp"; // 🔥 conviértelo a webp
function Navbar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const NAV_ITEMS = [
        {
            label: t("navbar.inicio"),
            id: "inicio"
        },
        {
            label: t("navbar.servicios"),
            id: "servicios"
        },
        {
            label: t("navbar.conocenos"),
            id: "conócenos"
        },
        {
            label: t("navbar.testimonios"),
            id: "testimonios"
        },
        {
            label: t("navbar.equipo"),
            id: "equipo"
        },
        {
            label: t("navbar.contacto"),
            id: "contacto"
        }
    ];
    // Scroll solo para desktop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 40);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const scrollToSection = (id)=>{
        const target = document.getElementById(id);
        const navbar = document.getElementById("navbar");
        if (!target) return;
        const offset = navbar?.offsetHeight || 0;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(window.scrollY, y, {
            duration: 0.6,
            ease: "easeInOut",
            onUpdate: (v)=>window.scrollTo(0, v)
        });
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        id: "navbar",
        initial: {
            y: -60,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        className: `
        fixed top-0 w-full z-50 transition-all
        ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}
       
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection("inicio"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: logo,
                            alt: "D2F Consulting",
                            width: 160,
                            height: 60,
                            priority: true,
                            sizes: "(max-width: 768px) 120px, 160px",
                            className: "h-auto w-[120px] md:w-[160px]"
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex gap-10 items-center",
                        children: NAV_ITEMS.map(({ label, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection(id),
                                    className: `
                  text-sm font-semibold transition-colors
                  ${scrolled ? "text-[#1E76B8] hover:text-[#DF1021]" : "text-white hover:text-[#DF1021]"}
                `,
                                    suppressHydrationWarning: true,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, id, false, {
                                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "md:hidden text-[#1E76B8]",
                        "aria-label": "Abrir menú",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 108,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "md:hidden bg-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-3 px-6 py-4",
                    children: NAV_ITEMS.map(({ label, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection(id),
                                className: "text-lg font-semibold text-[#1E76B8] hover:text-[#DF1021]",
                                suppressHydrationWarning: true,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this)
                        }, id, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Navbar, "zp2jzL3FmrWL1LZHowXyaueyPzc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/components/Carrousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Academy4 = "/images/Academy 4.jpg";
const Academy77 = "/images/Academy 77.jpg";
const Equipo10 = "/images/Equipo 10.jpg";
const Equipo2 = "/images/Equipo 2.jpg";
const images = [
    Academy4,
    Academy77,
    Equipo10,
    Equipo2
];
function Carousel() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const slideVariants = {
        hidden: (direction)=>({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                },
                opacity: {
                    duration: 0.2
                }
            }
        },
        exit: (direction)=>({
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                transition: {
                    x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    opacity: {
                        duration: 0.2
                    }
                }
            })
    };
    const nextSlide = ()=>{
        setDirection(1);
        setCurrentIndex((prev)=>(prev + 1) % images.length);
    };
    const prevSlide = ()=>{
        setDirection(-1);
        setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!isHovered) {
                const timer = setInterval({
                    "Carousel.useEffect.timer": ()=>{
                        nextSlide();
                    }
                }["Carousel.useEffect.timer"], 5000);
                return ({
                    "Carousel.useEffect": ()=>clearInterval(timer)
                })["Carousel.useEffect"];
            }
        }
    }["Carousel.useEffect"], [
        currentIndex,
        isHovered
    ]);
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity)=>{
        return Math.abs(offset) * velocity;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden bg-black",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            custom: direction,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: direction,
                variants: slideVariants,
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                drag: "x",
                dragConstraints: {
                    left: 0,
                    right: 0
                },
                dragElastic: 1,
                onDragEnd: (e, { offset, velocity })=>{
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        nextSlide();
                    } else if (swipe > swipeConfidenceThreshold) {
                        prevSlide();
                    }
                },
                className: "absolute w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: images[currentIndex],
                    alt: `D2F Consulting - Slide ${currentIndex + 1}`,
                    fill: true,
                    sizes: "100vw",
                    priority: currentIndex === 0,
                    quality: 75,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Carrousel.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, currentIndex, false, {
                fileName: "[project]/DF2-Tio/src/components/Carrousel.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/components/Carrousel.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/Carrousel.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Carousel, "1RpzOYLE0mSXLlNtMrfQUtCnLRM=");
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Carrousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/Carrousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Hero = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const scrollToServices = ()=>{
        const services = document.getElementById("servicios");
        if (services) {
            services.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "relative h-screen flex items-center",
        "aria-label": "Sección principal de inicio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Carrousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-[#1E76B8]/70  via-blue-900/40 to-transparent",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn",
                            suppressHydrationWarning: true,
                            children: t("hero.title")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-[#DF1021]  mb-6 leading-tight animate-fadeIn md:whitespace-nowrap",
                            suppressHydrationWarning: true,
                            children: t("hero.subtitle")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto",
                            suppressHydrationWarning: true,
                            children: t("hero.description")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#DF1021] hover:bg-red-700 text-white font-medium py-3 px-8  rounded-md transition-transform duration-300 hover:scale-105  focus:outline-none focus:ring-0",
                                    onClick: scrollToServices,
                                    "aria-label": "Ver servicios",
                                    suppressHydrationWarning: true,
                                    children: t("hero.servicesBtn")
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-transparent border-2 border-white text-white font-medium py-3 px-8  rounded-md hover:bg-white/10 transition-colors duration-300 focus:outline-none  focus:ring-0",
                                    onClick: ()=>{
                                        const contact = document.getElementById("contacto");
                                        if (contact) contact.scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    },
                                    "aria-label": "Ir a la sección de contacto",
                                    suppressHydrationWarning: true,
                                    children: t("hero.contactBtn")
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                "aria-hidden": "false",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: scrollToServices,
                    className: "text-white focus:outline-none focus:ring-0",
                    "aria-label": "Desplazarse hacia abajo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/components/Clients.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const kosha = '/images/kosha.jpg';
const Dco = '/images/Dco.jpg';
const creative = '/images/creative.jpg';
const camiux = '/images/cami-ux.jpg';
const shake2go = '/images/shake2go.jpg';
const kailua = '/images/kailua.png';
const opticalia = '/images/opticalia.png';
const sabana = '/images/Logo-Universidad-de-La-Sabana.jpg';
const deka = '/images/deka2.png';
const gant = '/images/gandt.jpg';
const ddg = '/images/ddg.jpg';
const mpc = '/images/mpc.jpg';
const snow = '/images/snow.jpg';
const love = '/images/love.jpg';
const city = '/images/city.jpg';
const Clients = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const clients = [
        {
            name: "Kosha",
            logo: kosha,
            industry: t("clients.industries.cosmetica")
        },
        {
            name: "Dco",
            logo: Dco,
            industry: t("clients.industries.talento")
        },
        {
            name: "Ideas",
            logo: creative,
            industry: t("clients.industries.servicios")
        },
        {
            name: "Cami",
            logo: camiux,
            industry: t("clients.industries.diseno")
        },
        {
            name: "Shake2Go",
            logo: shake2go,
            industry: t("clients.industries.alimentos")
        },
        {
            name: "KaiLua",
            logo: kailua,
            industry: t("clients.industries.eventos")
        },
        {
            name: "Opticalia",
            logo: opticalia,
            industry: t("clients.industries.salud")
        },
        {
            name: "Universidad de La Sabana",
            logo: sabana,
            industry: t("clients.industries.educacion")
        },
        {
            name: "CityKidz",
            logo: city,
            industry: t("clients.industries.entretenimiento")
        },
        {
            name: "Deka",
            logo: deka,
            industry: t("clients.industries.diseno")
        },
        {
            name: "G&T",
            logo: gant,
            industry: t("clients.industries.consultoria")
        },
        {
            name: "SnowTotal",
            logo: snow,
            industry: t("clients.industries.entretenimiento")
        },
        {
            name: "MPC",
            logo: mpc,
            industry: t("clients.industries.talento")
        },
        {
            name: "DDG",
            logo: ddg,
            industry: t("clients.industries.entretenimiento")
        },
        {
            name: "Love Trendy",
            logo: love,
            industry: t("clients.industries.ropa")
        }
    ];
    // Triplicate for infinite scroll simulation
    const logos = [
        ...clients,
        ...clients,
        ...clients
    ];
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs for synchronous loop control (prevents race conditions with smooth scroll)
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInteractingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initial scroll position to the middle set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clients.useEffect": ()=>{
            if (scrollRef.current) {
                const singleSetWidth = scrollRef.current.scrollWidth / 3;
                scrollRef.current.scrollLeft = singleSetWidth;
            }
        }
    }["Clients.useEffect"], []);
    const handleMouseEnter = ()=>{
        isHoveredRef.current = true;
    };
    const handleMouseLeave = ()=>{
        isHoveredRef.current = false;
    };
    const handleTouchStart = ()=>{
        isInteractingRef.current = true;
    };
    const handleTouchEnd = ()=>{
        setTimeout(()=>{
            isInteractingRef.current = false;
        }, 2000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clients.useEffect": ()=>{
            let animationFrame;
            const scrollSpeed = 0.5;
            const step = {
                "Clients.useEffect.step": ()=>{
                    // Synchronous check: Stop immediately if executing this frame but user interacted
                    // We check REFS, not state, so it's instant.
                    if (isHoveredRef.current || isInteractingRef.current) {
                        animationFrame = requestAnimationFrame(step);
                        return;
                    }
                    if (scrollRef.current) {
                        scrollRef.current.scrollLeft += scrollSpeed;
                        // Infinite Scroll Logic (Silent Jump)
                        const scrollWidth = scrollRef.current.scrollWidth;
                        const singleSetWidth = scrollWidth / 3;
                        if (scrollRef.current.scrollLeft >= singleSetWidth * 2) {
                            scrollRef.current.scrollLeft = singleSetWidth;
                        } else if (scrollRef.current.scrollLeft <= 0) {
                            scrollRef.current.scrollLeft = singleSetWidth;
                        }
                    }
                    animationFrame = requestAnimationFrame(step);
                }
            }["Clients.useEffect.step"];
            animationFrame = requestAnimationFrame(step);
            return ({
                "Clients.useEffect": ()=>cancelAnimationFrame(animationFrame)
            })["Clients.useEffect"];
        }
    }["Clients.useEffect"], []); // Empty dependency array as we use Refs for control
    const scrollBy = (distance)=>{
        if (scrollRef.current) {
            // Immediate synchronous pause via Ref
            isInteractingRef.current = true;
            scrollRef.current.scrollBy({
                left: distance,
                behavior: 'smooth'
            });
            // Release after animation mostly completes
            setTimeout(()=>{
                isInteractingRef.current = false;
            }, 1000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold text-[#1E76B8] mb-3",
                            suppressHydrationWarning: true,
                            children: t("clients.title")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-gray-600 max-w-3xl mx-auto",
                            suppressHydrationWarning: true,
                            children: t("clients.description")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center gap-2 group/carousel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hidden md:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2",
                            onClick: ()=>scrollBy(-300),
                            "aria-label": "Anterior",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 24,
                                className: "text-[#1E76B8]"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: " flex  gap-6  overflow-x-auto  scroll-smooth  scrollbar-hide  py-4 cursor-grab  active:cursor-grabbing w-full ",
                            style: {
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            },
                            onMouseEnter: handleMouseEnter,
                            onMouseLeave: handleMouseLeave,
                            onTouchStart: handleTouchStart,
                            onTouchEnd: handleTouchEnd,
                            children: logos.map((client, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex-shrink-0  relative  group  bg-white  rounded-lg  p-4 flex  items-center  justify-center transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 ",
                                    style: {
                                        width: '180px',
                                        height: '140px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: client.logo,
                                            alt: `Logo de ${client.name}`,
                                            className: "w-full h-full object-contain transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " absolute  inset-0  bg-[#1E76B8]/90  opacity-0  group-hover:opacity-100  transition-opacity  duration-300  flex  flex-col  items-center  justify-center  text-white  text-center  p-2  rounded-lg ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm mb-1 line-clamp-2",
                                                    suppressHydrationWarning: true,
                                                    children: client.name
                                                }, void 0, false, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-light line-clamp-2",
                                                    suppressHydrationWarning: true,
                                                    children: client.industry
                                                }, void 0, false, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hidden md:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2",
                            onClick: ()=>scrollBy(300),
                            "aria-label": "Siguiente",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 24,
                                className: "text-[#1E76B8]"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('contacto')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        className: "inline-block px-8 py-4 bg-[#DF1021] text-white rounded-md text-lg  font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105",
                        suppressHydrationWarning: true,
                        children: t("clients.cta")
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Clients, "QZzu3S9Fg5sdveJv6Gf229xf32g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Clients;
const __TURBOPACK__default__export__ = Clients;
var _c;
__turbopack_context__.k.register(_c, "Clients");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Equipo = "/images/Equipo 1.jpg";
const About = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const stats = [
        {
            value: '20+',
            label: t('about.stats.experience')
        },
        {
            value: '25+',
            label: t('about.stats.clients')
        },
        {
            value: '100%',
            label: t('about.stats.satisfied')
        },
        {
            value: '35+',
            label: t('about.stats.associates')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "conócenos",
        "aria-label": "Acerca de D2F Consulting",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        className: "lg:w-1/2 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 rounded-lg overflow-hidden shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: Equipo,
                                    loading: "lazy",
                                    alt: "Equipo de consultores de D2F Consulting en reunión",
                                    className: "w-full h-auto object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -right-6 w-64 h-64 bg-[#DF1021] rounded-lg -z-10"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 -left-6 w-32 h-32 bg-[#1E76B8] rounded-lg -z-10"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2
                        },
                        className: "lg:w-1/2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-[#1E76B8] mb-6",
                                children: t('about.title')
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6 text-lg",
                                children: t('about.description')
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-[#1E76B8] mb-4",
                                        children: t('about.whyChooseUs')
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            t('about.points.0'),
                                            t('about.points.1'),
                                            t('about.points.2'),
                                            t('about.points.3')
                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 20,
                                                        className: "text-[#DF1021] mt-1 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4 bg-gray-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl md:text-3xl font-bold text-[#DF1021]",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/components/About.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/About.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/locales/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navbar":{"inicio":"Inicio","servicios":"Servicios","conocenos":"Conócenos","testimonios":"Testimonios","equipo":"Equipo","contacto":"Contacto"},"hero":{"title":"Consultoría Estratégica","subtitle":"Crecimiento Transformacional","description":"Impulsando la innovación y la excelencia en todas las industrias con nuestros cinco servicios especializados de consultoría empresarial.","servicesBtn":"Nuestros Servicios","contactBtn":"Contáctanos"},"about":{"title":"Impulsando la excelencia empresarial desde 2015","description":"D2F Consulting es una firma de consultoría de gestión dedicada a ayudar a las organizaciones a lograr un crecimiento sostenible y la excelencia operativa. Combinamos un profundo conocimiento de los sectores, experiencia funcional y un enfoque centrado en el cliente para ofrecer resultados excepcionales.","whyChooseUs":"¿Por qué elegirnos?","points":{"0":"Experiencia en la industria en diversos sectores","1":"Soluciones a la medida que abordan sus desafíos únicos","2":"Metodologías probadas con resultados tangibles","3":"Un integrador de servicios adaptado a sus necesidades"},"stats":{"experience":"Años de Experiencia","clients":"Clientes en Colombia","satisfied":"Clientes Satisfechos","associates":"Asociados de las Industrias"}},"businessLines":{"title":"Nuestras Líneas de Negocio","description":"Proveemos consultoría integral a través de nuestras líneas de negocio especializadas, cada una diseñada para superar desafíos específicos y crear valor sostenible.","servicesTitle":"Nuestros Servicios","lines":{"0":{"title":"Gestión Estratégica","description":"Ayudamos a las organizaciones a desarrollar e implementar iniciativas estratégicas que impulsan el crecimiento sostenible y la ventaja competitiva. Nuestro enfoque combina un profundo conocimiento de los sectores con metodologías probadas para crear estrategias viables.","services":{"0":"Desarrollo Corporativo Estratégico","1":"Entrada al Mercado & Expansión","2":"Análisis Competitivo","3":"Crecimiento & Estrategia de Innovación"}},"1":{"title":"Transformación Digital","description":"Nuestros servicios de transformación digital ayudan a las empresas a aprovechar las tecnologías emergentes para reimaginar sus operaciones, experiencias de cliente y modelos de negocio. Le guiamos en cada etapa de su transformación digital.","services":{"0":"Estrategia Digital & Hoja de Ruta","1":"Automatización de Procesos","2":"Soluciones de Data Analytics","3":"Implementación de Tecnología"}},"2":{"title":"Gestión de Proyectos","description":"Ofrecemos servicios integrales de gestión de proyectos para optimizar resultados, controlar riesgos y garantizar la entrega eficiente. Nuestros expertos le apoyan en todas las fases para maximizar el éxito.","services":{"0":"Planificación & Ejecución","1":"Gestión de Recursos","2":"Control de Riesgos","3":"Metodologías Ágiles & Tradicionales"}},"3":{"title":"Marketing y Comunicación","description":"Optimizamos operaciones de marketing y comunicación para fortalecer la marca, atraer clientes y generar experiencias memorables que potencian la lealtad.","services":{"0":"Estrategia de Marketing","1":"Gestión de Marca","2":"Comunicación Digital","3":"Campañas Publicitarias"}},"4":{"title":"Desarrollo de Franquicias","description":"Guiamos a las empresas en la creación, expansión y consolidación de modelos de franquicia que garanticen escalabilidad y sostenibilidad.","services":{"0":"Diseño del Modelo de Franquicia","1":"Expansión Nacional & Internacional","2":"Gestión de Franquiciados","3":"Estrategia de Crecimiento"}},"5":{"title":"Academia","description":"Capacitamos a líderes y equipos a través de programas de formación práctica y estratégica, orientados a fortalecer habilidades críticas para el éxito empresarial.","services":{"0":"Formación en Estrategia","1":"Liderazgo Empresarial","2":"Innovación y Creatividad","3":"Cursos Personalizados"}}}},"clients":{"title":"Confían en nosotros","description":"Hemos ayudado a transformar empresas en diversos sectores, brindando resultados excepcionales y asociaciones duraderas.","cta":"Conviértete en Nuestra Próxima Historia de Éxito","industries":{"cosmetica":"Cosmética","talento":"Consultoría en Talento Humano","servicios":"Servicios","diseno":"Diseño Gráfico","alimentos":"Alimentos & Bebidas","eventos":"Eventos","salud":"Salud","educacion":"Educación","entretenimiento":"Entretenimiento","consultoria":"Consultoría","ropa":"Ropa"}},"team":{"title":"Equipo de Liderazgo","description":"Conozca a los líderes que impulsan la visión estratégica y el crecimiento de nuestra organización, aportando experiencia, innovación y compromiso con la excelencia.","members":{"0":{"name":"Diego Forero","title":"Chief Executive Officer (CEO)","bio":"Diego aporta más de 20 años de experiencia en liderazgo estratégico, innovación corporativa y gestión de alto nivel en múltiples industrias."},"1":{"name":"Alejandra Rivera","title":"Chief Strategy Officer (CSO)","bio":"Especialista en análisis de datos, inteligencia de negocios y optimización estratégica para el crecimiento organizacional."}}},"testimonials":{"title":"Lo que dicen nuestros clientes","description":"Estamos orgullosos de las historias de éxito de nuestros clientes y del impacto positivo que nuestros servicios de consultoría han generado.","list":{"0":{"quote":"Tuve la maravillosa oportunidad de trabajar con Diego, con quien pude compartir la creación de proyectos y vi cómo su pasión, conocimientos, liderazgo y gran compromiso hacen de él un excelente profesional y, más que eso, un gran ser humano.","author":"Johanna Gutierrez","title":"Client Management Assistant, Millward Brown."},"1":{"quote":"Diego has built a strong reputation as someone with vision, diligence and honour – someone who gets things done! He is a calculated risk taker, pragmatic leader and realist who seems to grasp ideas holistically whilst still taking note of the more acute details. I have no hesitation in recommending Diego and know that he will always give his best in any endeavour.","author":"Yamel Ramos","title":"VP Attractions Business Development LA, White Water"},"2":{"quote":"Excelentes habilidades de organización, planeación, liderazgo y negociación. Tengo la oportunidad de trabajar con ellos y siempre han tenido un compromiso profesional de entrega total a sus proyectos.","author":"Victor Garcia","title":"Chief Operation Officer, VidantaWorld Entertainment - Cirque Du Soleil and Luxury Theme Parks"}}},"contact":{"title":"Contáctanos","description":"¿Listo para transformar tu negocio? Contáctenos hoy para programar una consulta con nuestro equipo de expertos.","form":{"name":"Nombre Completo","email":"Dirección de Email","phone":"Número de Teléfono","company":"Compañía","message":"Su Mensaje","services":"Servicios de Interés","submit":"Enviar Mensaje","successTitle":"¡Mensaje enviado!","successDesc":"Gracias por contactarnos. Nuestro equipo responderá pronto."},"info":{"title":"Información de Contacto","visit":"Visítanos","email":"Envíanos un Email","instagram":"Instagram","linkedin":"LinkedIn","facebook":"Facebook"},"serviceOptions":{"0":"Gestión Estratégica","1":"Transformación Digital","2":"Gestión de Proyectos","3":"Marketing y Comunicación","4":"Desarrollo de Franquicias","5":"Academia"}},"footer":{"text":"Transformando negocios con consultoría estratégica, innovación y soluciones diseñadas para impulsar el crecimiento sostenible.","copyright":"© {{year}} D2F Consulting — Todos los derechos reservados."}});}),
"[project]/DF2-Tio/src/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navbar":{"inicio":"Home","servicios":"Services","conocenos":"About Us","testimonios":"Testimonials","equipo":"Team","contacto":"Contact"},"hero":{"title":"Strategic Consulting","subtitle":"Transforming Growth","description":"Driving innovation and excellence across industries with our five specialized business consulting services.","servicesBtn":"Our Services","contactBtn":"Contact Us"},"about":{"title":"Driving business excellence since 2015","description":"D2F Consulting is a management consulting firm dedicated to helping organizations achieve sustainable growth and operational excellence. We combine deep industry knowledge, functional expertise, and a client-centric approach to deliver exceptional results.","whyChooseUs":"Why Choose Us?","points":{"0":"Industry expertise across diverse sectors","1":"Tailored solutions addressing your unique challenges","2":"Proven methodologies with tangible results","3":"A service integrator adapted to your needs"},"stats":{"experience":"Years of Experience","clients":"Clients in Colombia","satisfied":"Satisfied Clients","associates":"Industry Associates"}},"businessLines":{"title":"Our Business Lines","description":"We provide comprehensive consulting through our specialized business lines, each designed to overcome specific challenges and create sustainable value.","servicesTitle":"Our Services","lines":{"0":{"title":"Strategic Management","description":"We help organizations develop and implement strategic initiatives that drive sustainable growth and competitive advantage. Our approach combines deep sector knowledge with proven methodologies to create actionable strategies.","services":{"0":"Strategic Corporate Development","1":"Market Entry & Expansion","2":"Competitive Analysis","3":"Growth & Innovation Strategy"}},"1":{"title":"Digital Transformation","description":"Our digital transformation services help companies leverage emerging technologies to reimagine their operations, customer experiences, and business models. We guide you through every stage of your digital transformation.","services":{"0":"Digital Strategy & Roadmap","1":"Process Automation","2":"Data Analytics Solutions","3":"Technology Implementation"}},"2":{"title":"Project Management","description":"We offer comprehensive project management services to optimize results, control risks, and guarantee efficient delivery. Our experts support you in all phases to maximize success.","services":{"0":"Planning & Execution","1":"Resource Management","2":"Risk Control","3":"Agile & Traditional Methodologies"}},"3":{"title":"Marketing and Communication","description":"We optimize marketing and communication operations to strengthen the brand, attract clients, and generate memorable experiences that enhance loyalty.","services":{"0":"Marketing Strategy","1":"Brand Management","2":"Digital Communication","3":"Advertising Campaigns"}},"4":{"title":"Franchise Development","description":"We guide companies in the creation, expansion, and consolidation of franchise models that guarantee scalability and sustainability.","services":{"0":"Franchise Model Design","1":"National & International Expansion","2":"Franchisee Management","3":"Growth Strategy"}},"5":{"title":"Academy","description":"We train leaders and teams through practical and strategic training programs, strictly oriented to strengthen critical skills for business success.","services":{"0":"Strategy Training","1":"Business Leadership","2":"Innovation and Creativity","3":"Customized Courses"}}}},"clients":{"title":"They trust us","description":"We have helped transform companies across various sectors, delivering exceptional results and lasting partnerships.","cta":"Become Our Next Success Story","industries":{"cosmetica":"Cosmetics","talento":"Talent Consulting","servicios":"Services","diseno":"Graphic Design","alimentos":"Food & Beverages","eventos":"Events","salud":"Health","educacion":"Education","entretenimiento":"Entertainment","consultoria":"Consulting","ropa":"Clothing"}},"team":{"title":"Leadership Team","description":"Meet the leaders driving the strategic vision and growth of our organization, bring expertise, innovation, and commitment to excellence.","members":{"0":{"name":"Diego Forero","title":"Chief Executive Officer (CEO)","bio":"Diego brings over 20 years of experience in strategic leadership, corporate innovation, and high-level management across multiple industries."},"1":{"name":"Alejandra Rivera","title":"Chief Strategy Officer (CSO)","bio":"Specialist in data analysis, business intelligence, and strategic optimization for organizational growth."}}},"testimonials":{"title":"What our clients say","description":"We are proud of our clients' success stories and the positive impact our consulting services have generated.","list":{"0":{"quote":"I had the wonderful opportunity to work with Diego, with whom I was able to share the creation of projects, and I saw how his passion, knowledge, leadership, and great commitment make him an excellent professional and, more than that, a great human being.","author":"Johanna Gutierrez","title":"Client Management Assistant, Millward Brown."},"1":{"quote":"Diego has built a strong reputation as someone with vision, diligence and honour – someone who gets things done! He is a calculated risk taker, pragmatic leader and realist who seems to grasp ideas holistically whilst still taking note of the more acute details. I have no hesitation in recommending Diego and know that he will always give his best in any endeavour.","author":"Yamel Ramos","title":"VP Attractions Business Development LA, White Water"},"2":{"quote":"Excellent organizational, planning, leadership, and negotiation skills. I have the opportunity to work with them and they have always had a professional commitment of total delivery to their projects.","author":"Victor Garcia","title":"Chief Operation Officer, VidantaWorld Entertainment - Cirque Du Soleil and Luxury Theme Parks"}}},"contact":{"title":"Contact Us","description":"Ready to transform your business? Contact us today to schedule a consultation with our team of experts.","form":{"name":"Full Name","email":"Email Address","phone":"Phone Number","company":"Company","message":"Your Message","services":"Services of Interest","submit":"Send Message","successTitle":"Message Sent!","successDesc":"Thank you for contacting us. Our team will respond shortly."},"info":{"title":"Contact Information","visit":"Visit Us","email":"Send us an Email","instagram":"Instagram","linkedin":"LinkedIn","facebook":"Facebook"},"serviceOptions":{"0":"Strategic Management","1":"Digital Transformation","2":"Project Management","3":"Marketing and Communication","4":"Franchise Development","5":"Academy"}},"footer":{"text":"Transforming businesses with strategic consulting, innovation, and solutions designed to drive sustainable growth.","copyright":"© {{year}} D2F Consulting — All rights reserved."}});}),
"[project]/DF2-Tio/src/i18n-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/locales/es.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/locales/en.json (json)");
;
;
;
;
;
// Inicializar i18n inmediatamente con español como default
// para que el contenido sea visible en el HTML inicial
__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    resources: {
        es: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$es$2e$json__$28$json$29$__["default"]
        },
        en: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$en$2e$json__$28$json$29$__["default"]
        }
    },
    lng: 'es',
    fallbackLng: 'es',
    supportedLngs: [
        'es',
        'en'
    ],
    nonExplicitSupportedLngs: true,
    detection: {
        order: [
            'navigator',
            'htmlTag'
        ],
        caches: []
    },
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
// Detectar idioma del navegador después del render inicial
if ("TURBOPACK compile-time truthy", 1) {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage('en');
    }
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Clients$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/Clients.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/About.tsx [app-client] (ecmascript)");
// Import i18n directly - initializes on load
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$i18n$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/i18n-client.ts [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Lazy load below-fold components
const BusinessLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/DF2-Tio/src/components/BusinessLines.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/DF2-Tio/src/components/BusinessLines.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/app/page.tsx",
            lineNumber: 12,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = BusinessLines;
const Team = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/DF2-Tio/src/components/Team.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/DF2-Tio/src/components/Team.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/app/page.tsx",
            lineNumber: 15,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = Team;
const Testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/DF2-Tio/src/components/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/DF2-Tio/src/components/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/app/page.tsx",
            lineNumber: 18,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = Testimonials;
const Contact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/DF2-Tio/src/components/Contact.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/DF2-Tio/src/components/Contact.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/app/page.tsx",
            lineNumber: 21,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = Contact;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/DF2-Tio/src/components/Footer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/DF2-Tio/src/components/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-8 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/app/page.tsx",
            lineNumber: 24,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = Footer;
;
function Home() {
    _s();
    // Smooth scroll fix for Next.js
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (window.location.hash) {
                const id = window.location.hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessLines, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Team, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Clients$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/app/page.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c5 = Home;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BusinessLines");
__turbopack_context__.k.register(_c1, "Team");
__turbopack_context__.k.register(_c2, "Testimonials");
__turbopack_context__.k.register(_c3, "Contact");
__turbopack_context__.k.register(_c4, "Footer");
__turbopack_context__.k.register(_c5, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=DF2-Tio_src_507b8406._.js.map