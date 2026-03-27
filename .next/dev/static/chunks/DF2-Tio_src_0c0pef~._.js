(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
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
const logo = "/images/logo-03-300-dpi.webp";
function Navbar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inicio");
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
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 40);
                    // Track active section
                    const sections = [
                        "inicio",
                        "conócenos",
                        "servicios",
                        "equipo",
                        "testimonios",
                        "contacto"
                    ];
                    for (const id of sections.reverse()){
                        const el = document.getElementById(id);
                        if (el && window.scrollY >= el.offsetTop - 120) {
                            setActiveSection(id);
                            break;
                        }
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const scrollToSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[scrollToSection]": (id)=>{
            setIsOpen(false);
            // Allow React/Framer UI unmount to settle before processing native scroll
            setTimeout({
                "Navbar.useCallback[scrollToSection]": ()=>{
                    const target = document.getElementById(id);
                    if (!target) return;
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }["Navbar.useCallback[scrollToSection]"], 50);
        }
    }["Navbar.useCallback[scrollToSection]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        id: "navbar",
        initial: {
            y: -80,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-900/10 border-b border-blue-100/50" : "py-4 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection("inicio"),
                        className: "flex-shrink-0 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: logo,
                            alt: "D2F Consulting",
                            width: 160,
                            height: 60,
                            priority: true,
                            sizes: "(max-width: 640px) 100px, (max-width: 768px) 130px, 160px",
                            className: `h-auto transition-all duration-300 ${scrolled ? "w-[110px] sm:w-[130px] md:w-[150px]" : "w-[110px] sm:w-[130px] md:w-[160px]"}`
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex gap-1 lg:gap-2 items-center",
                        children: NAV_ITEMS.map(({ label, id })=>{
                            const isActive = activeSection === id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection(id),
                                    className: `relative px-3 lg:px-4 py-2 font-semibold text-sm lg:text-base transition-colors duration-200 rounded-lg group ${scrolled ? isActive ? "text-[#1E76B8]" : "text-gray-700 hover:text-[#1E76B8]" : isActive ? "text-white" : "text-white/90 hover:text-white"}`,
                                    suppressHydrationWarning: true,
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#DF1021] rounded-full transition-all duration-300 ${isActive ? "w-3/5" : "w-0 group-hover:w-3/5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, id, false, {
                                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection("contacto"),
                        className: "hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 ml-2",
                        style: {
                            background: "linear-gradient(135deg, #DF1021, #b80d1a)",
                            boxShadow: "0 4px 16px rgba(223, 16, 33, 0.35)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(223,16,33,0.5)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(223,16,33,0.35)";
                        },
                        suppressHydrationWarning: true,
                        children: t("navbar.contacto")
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: `md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#1E76B8] hover:bg-blue-50" : "text-white hover:bg-white/10"}`,
                        "aria-label": "Abrir menú",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[-1]",
                            onClick: ()=>setIsOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: 0.98
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -8,
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-blue-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col px-6 py-4 gap-1",
                                children: [
                                    NAV_ITEMS.map(({ label, id }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                            initial: {
                                                opacity: 0,
                                                x: -16
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: idx * 0.06
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollToSection(id),
                                                className: `w-full text-left py-3 px-3 rounded-lg font-semibold transition-colors text-base ${activeSection === id ? "text-[#1E76B8] bg-blue-50" : "text-gray-700 hover:text-[#1E76B8] hover:bg-gray-50"}`,
                                                suppressHydrationWarning: true,
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            x: -16
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: NAV_ITEMS.length * 0.06
                                        },
                                        className: "pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection("contacto"),
                                            className: "w-full py-3 px-4 rounded-full font-semibold text-white text-center",
                                            style: {
                                                background: "linear-gradient(135deg, #DF1021, #b80d1a)"
                                            },
                                            suppressHydrationWarning: true,
                                            children: t("navbar.contacto")
                                        }, void 0, false, {
                                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/components/Navbar.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Navbar, "12SESau/+UZTJh0FgMsz1Ih/AhU=", false, function() {
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
"[project]/DF2-Tio/src/components/Carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const images = [
    "/images/academy-4.webp",
    "/images/academy-77.webp",
    "/images/equipo-10.webp",
    "/images/equipo-2.webp"
];
function Carousel() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            const timer = setInterval({
                "Carousel.useEffect.timer": ()=>{
                    setCurrentIndex({
                        "Carousel.useEffect.timer": (prev)=>(prev + 1) % images.length
                    }["Carousel.useEffect.timer"]);
                }
            }["Carousel.useEffect.timer"], 5000);
            return ({
                "Carousel.useEffect": ()=>clearInterval(timer)
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "sync",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                drag: "x",
                dragConstraints: {
                    left: 0,
                    right: 0
                },
                dragElastic: 0.2,
                onDragEnd: (e, { offset, velocity })=>{
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -1000 || offset.x < -40) {
                        setCurrentIndex((prev)=>(prev + 1) % images.length);
                    } else if (swipe > 1000 || offset.x > 40) {
                        setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
                    }
                },
                initial: {
                    opacity: 0,
                    scale: 1.15
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    opacity: {
                        duration: 1.5,
                        ease: "easeInOut"
                    },
                    scale: {
                        duration: 8,
                        ease: "easeOut"
                    }
                },
                className: "absolute inset-0 cursor-grab active:cursor-grabbing",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: images[currentIndex],
                    alt: `D2F Consulting - Slide ${currentIndex + 1}`,
                    fill: true,
                    sizes: "100vw",
                    priority: currentIndex === 0,
                    quality: 80,
                    className: "object-cover pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Carousel.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, currentIndex, false, {
                fileName: "[project]/DF2-Tio/src/components/Carousel.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/components/Carousel.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/Carousel.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Carousel, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
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
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/components/Carousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.3
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 36
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
};
function Hero() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[scrollTo]": (id)=>{
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["Hero.useCallback[scrollTo]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "relative min-h-screen flex items-center overflow-hidden",
        "aria-label": "Sección principal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#10497a]/90 via-[#1E76B8]/60 to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10"
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-10 w-64 h-64 rounded-full z-10 opacity-10",
                style: {
                    background: "radial-gradient(circle, #1E76B8, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full z-10 opacity-10",
                style: {
                    background: "radial-gradient(circle, #DF1021, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30 w-full px-4 sm:px-6 max-w-7xl mx-auto pt-20 sm:pt-28 pb-12 sm:pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            variants: itemVariants,
                            className: "text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: t("hero.title")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: itemVariants,
                            className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight",
                            style: {
                                color: "#DF1021",
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: t("hero.subtitle")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: itemVariants,
                            className: "text-sm sm:text-lg md:text-xl text-white/85 max-w-xl mb-8 sm:mb-10 leading-relaxed",
                            children: t("hero.description")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "flex flex-col sm:flex-row gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollTo("servicios"),
                                className: "group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300",
                                style: {
                                    background: "linear-gradient(135deg, #DF1021, #b80d1a)",
                                    boxShadow: "0 4px 24px rgba(223,16,33,0.4)"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(223,16,33,0.55)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(223,16,33,0.4)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                },
                                children: [
                                    t("hero.servicesBtn"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 18,
                                        className: "transition-transform duration-200 group-hover:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Hero, "YGoHKahUb6MDjBh2x2UKfT7Axjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Hero;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const kosha = '/images/kosha.webp';
const Dco = '/images/dco.webp';
const creative = '/images/creative.webp';
const camiux = '/images/cami-ux.webp';
const shake2go = '/images/shake2go.webp';
const kailua = '/images/kailua.webp';
const opticalia = '/images/opticalia.webp';
const sabana = '/images/logo-universidad-de-la-sabana.webp';
const deka = '/images/deka2.webp';
const gant = '/images/gandt.webp';
const ddg = '/images/ddg.webp';
const mpc = '/images/mpc.webp';
const snow = '/images/snow.webp';
const love = '/images/love.webp';
const city = '/images/city.webp';
const Clients = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const clients = [
        {
            name: "Kosha",
            logo: kosha,
            industry: t("clients.industries.cosmetica"),
            since: "2019"
        },
        {
            name: "Dco",
            logo: Dco,
            industry: t("clients.industries.talento"),
            since: "2020"
        },
        {
            name: "Ideas Creativas",
            logo: creative,
            industry: t("clients.industries.servicios"),
            since: "2021"
        },
        {
            name: "Cami UX",
            logo: camiux,
            industry: t("clients.industries.diseno"),
            since: "2022"
        },
        {
            name: "Shake2Go",
            logo: shake2go,
            industry: t("clients.industries.alimentos"),
            since: "2018"
        },
        {
            name: "KaiLua",
            logo: kailua,
            industry: t("clients.industries.eventos"),
            since: "2023"
        },
        {
            name: "Opticalia",
            logo: opticalia,
            industry: t("clients.industries.salud"),
            since: "2019"
        },
        {
            name: "Universidad de La Sabana",
            logo: sabana,
            industry: t("clients.industries.educacion"),
            since: "2017"
        },
        {
            name: "CityKidz",
            logo: city,
            industry: t("clients.industries.entretenimiento"),
            since: "2020"
        },
        {
            name: "Deka",
            logo: deka,
            industry: t("clients.industries.diseno"),
            since: "2021"
        },
        {
            name: "G&T",
            logo: gant,
            industry: t("clients.industries.consultoria"),
            since: "2022"
        },
        {
            name: "SnowTotal",
            logo: snow,
            industry: t("clients.industries.entretenimiento"),
            since: "2018"
        },
        {
            name: "MPC",
            logo: mpc,
            industry: t("clients.industries.talento"),
            since: "2023"
        },
        {
            name: "DDG",
            logo: ddg,
            industry: t("clients.industries.entretenimiento"),
            since: "2019"
        },
        {
            name: "Love Trendy",
            logo: love,
            industry: t("clients.industries.ropa"),
            since: "2021"
        }
    ];
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-scroll logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clients.useEffect": ()=>{
            if (isHovered) return;
            const interval = setInterval({
                "Clients.useEffect.interval": ()=>{
                    if (sliderRef.current) {
                        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                        // If reached the end, snap back to start (smoothly if possible, or instantly)
                        if (scrollLeft + clientWidth >= scrollWidth - 10) {
                            sliderRef.current.scrollTo({
                                left: 0,
                                behavior: 'auto'
                            });
                        } else {
                            sliderRef.current.scrollBy({
                                left: 200,
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            }["Clients.useEffect.interval"], 3000); // Scrolls every 3 seconds
            return ({
                "Clients.useEffect": ()=>clearInterval(interval)
            })["Clients.useEffect"];
        }
    }["Clients.useEffect"], [
        isHovered
    ]);
    const scroll = (direction)=>{
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            sliderRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-16 sm:py-24 bg-white overflow-hidden z-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 max-w-7xl relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 sm:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1E76B8] font-semibold text-sm tracking-widest uppercase",
                                children: "Nuestros Aliados"
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            suppressHydrationWarning: true,
                            children: t("clients.title")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto",
                            suppressHydrationWarning: true,
                            children: t("clients.description")
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scroll('left'),
                            className: "absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300 opacity-90 lg:opacity-0 lg:group-hover:opacity-100",
                            "aria-label": "Anterior",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scroll('right'),
                            className: "absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300 opacity-90 lg:opacity-0 lg:group-hover:opacity-100",
                            "aria-label": "Siguiente",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sliderRef,
                            onMouseEnter: ()=>setIsHovered(true),
                            onMouseLeave: ()=>setIsHovered(false),
                            onTouchStart: ()=>setIsHovered(true),
                            onTouchEnd: ()=>setIsHovered(false),
                            className: "flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-6 px-4 sm:px-8 snap-x snap-mandatory",
                            style: {
                                scrollBehavior: 'smooth'
                            },
                            children: clients.map((client, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 snap-center relative group/card w-[160px] h-[120px] sm:w-[200px] sm:h-[140px] flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: client.logo,
                                            alt: `Logo de ${client.name}`,
                                            fill: true,
                                            sizes: "(max-width: 640px) 140px, 180px",
                                            className: "object-contain p-6 transition-transform duration-500 group-hover/card:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[#10497a]/90 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold text-lg mb-1",
                                                    style: {
                                                        fontFamily: "Poppins, sans-serif"
                                                    },
                                                    children: client.name
                                                }, void 0, false, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/80 text-xs font-medium tracking-wide uppercase",
                                                    children: client.industry
                                                }, void 0, false, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-px bg-[#DF1021] my-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/60 text-[10px] uppercase tracking-widest",
                                                    children: [
                                                        "Desde ",
                                                        client.since
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    className: "mt-14 sm:mt-20 text-center relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById('contacto')?.scrollIntoView({
                                behavior: 'smooth'
                            }),
                        className: "inline-flex items-center gap-2 px-8 py-4 bg-[#DF1021] text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(223,16,33,0.3)] hover:shadow-[0_8px_30px_rgba(223,16,33,0.45)] hover:-translate-y-1",
                        suppressHydrationWarning: true,
                        children: t("clients.cta")
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/Clients.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Clients, "KS8ROP0d9k4zxJLGP4bubm9nivI=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Equipo = "/images/equipo-1.webp";
// Animated counter hook
function useCountUp(target, inView, duration = 1800) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!inView) return;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval({
                "useCountUp.useEffect.timer": ()=>{
                    start += step;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else setCount(Math.floor(start));
                }
            }["useCountUp.useEffect.timer"], 16);
            return ({
                "useCountUp.useEffect": ()=>clearInterval(timer)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        inView,
        target,
        duration
    ]);
    return count;
}
_s(useCountUp, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
const stats = [
    {
        value: 20,
        suffix: '+',
        label: 'Años de experiencia'
    },
    {
        value: 25,
        suffix: '+',
        label: 'Clientes atendidos'
    },
    {
        value: 100,
        suffix: '%',
        label: 'Clientes satisfechos'
    }
];
function StatCard({ stat, inView }) {
    _s1();
    const count = useCountUp(stat.value, inView);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative text-center p-5 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1",
        style: {
            background: "linear-gradient(135deg, #1E76B8, #155a94)",
            boxShadow: "0 4px 20px rgba(30,118,184,0.2)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    background: "linear-gradient(135deg, #155a94, #0f3f6e)"
                }
            }, void 0, false, {
                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl sm:text-4xl font-bold text-white",
                        style: {
                            fontFamily: "Poppins, sans-serif"
                        },
                        children: [
                            count,
                            stat.suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/75 text-xs sm:text-sm mt-1 leading-tight",
                        children: stat.label
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/components/About.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s1(StatCard, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatCard;
const About = ()=>{
    _s2();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(statsRef, {
        once: true,
        margin: "-80px"
    });
    const points = [
        t('about.points.0'),
        t('about.points.1'),
        t('about.points.2'),
        t('about.points.3')
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "conócenos",
        "aria-label": "Acerca de D2F Consulting",
        className: "py-10 sm:py-14 bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-10 lg:gap-14 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -60
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
                            duration: 0.9,
                            ease: "easeOut"
                        },
                        className: "lg:w-1/2 w-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-md sm:max-w-lg lg:max-w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -right-6 w-56 h-56 bg-[#DF1021]/15 rounded-3xl -z-10 rotate-3"
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 -left-6 w-36 h-36 bg-[#1E76B8]/15 rounded-3xl -z-10 -rotate-3"
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/3] sm:aspect-auto sm:h-[400px] lg:h-[500px]",
                                    style: {
                                        boxShadow: "0 24px 80px rgba(30,118,184,0.18)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: Equipo,
                                        alt: "Equipo de consultores de D2F Consulting",
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DF2-Tio/src/components/About.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 60
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
                            duration: 0.9,
                            ease: "easeOut",
                            delay: 0.15
                        },
                        className: "lg:w-1/2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-1 rounded-full bg-[#DF1021]"
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#DF1021] font-semibold text-sm uppercase tracking-widest",
                                        children: "Quiénes somos"
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4 leading-tight",
                                style: {
                                    fontFamily: "Poppins, sans-serif"
                                },
                                children: t('about.title')
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6 text-sm sm:text-base leading-relaxed",
                                children: t('about.description')
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg sm:text-xl font-semibold text-gray-900 mb-5",
                                        children: t('about.whyChooseUs')
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3.5",
                                        children: points.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: idx * 0.1 + 0.2
                                                },
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 20,
                                                        className: "text-[#DF1021] mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700 text-sm sm:text-base",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: statsRef,
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        stat: stat,
                                        inView: !!inView
                                    }, idx, false, {
                                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DF2-Tio/src/components/About.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/DF2-Tio/src/components/About.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/DF2-Tio/src/components/About.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/DF2-Tio/src/components/About.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(About, "jknmjhJJzw8dhviopg9PuMJfM0o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = About;
const __TURBOPACK__default__export__ = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/locales/es.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "navbar": {
        "inicio": "Inicio",
        "servicios": "Servicios",
        "conocenos": "Conócenos",
        "testimonios": "Testimonios",
        "equipo": "Equipo",
        "contacto": "Contacto"
    },
    "hero": {
        "title": "Consultoría Estratégica",
        "subtitle": "Crecimiento Transformacional",
        "description": "Impulsando la innovación y la excelencia en todas las industrias con nuestros cinco servicios especializados de consultoría empresarial.",
        "servicesBtn": "Nuestros Servicios",
        "contactBtn": "Contáctanos"
    },
    "about": {
        "title": "Impulsando la excelencia empresarial desde 2015",
        "description": "D2F Consulting es una firma de consultoría de gestión dedicada a ayudar a las organizaciones a lograr un crecimiento sostenible y la excelencia operativa. Combinamos un profundo conocimiento de los sectores, experiencia funcional y un enfoque centrado en el cliente para ofrecer resultados excepcionales.",
        "whyChooseUs": "¿Por qué elegirnos?",
        "points": {
            "0": "Experiencia en la industria en diversos sectores",
            "1": "Soluciones a la medida que abordan sus desafíos únicos",
            "2": "Metodologías probadas con resultados tangibles",
            "3": "Un integrador de servicios adaptado a sus necesidades"
        },
        "stats": {
            "experience": "Años de Experiencia",
            "clients": "Clientes en Colombia",
            "satisfied": "Clientes Satisfechos",
            "associates": "Asociados de las Industrias"
        }
    },
    "businessLines": {
        "title": "Nuestras Líneas de Negocio",
        "description": "Proveemos consultoría integral a través de nuestras líneas de negocio especializadas, cada una diseñada para superar desafíos específicos y crear valor sostenible.",
        "servicesTitle": "Nuestros Servicios",
        "lines": {
            "0": {
                "title": "Gestión Estratégica",
                "description": "Ayudamos a las organizaciones a desarrollar e implementar iniciativas estratégicas que impulsan el crecimiento sostenible y la ventaja competitiva. Nuestro enfoque combina un profundo conocimiento de los sectores con metodologías probadas para crear estrategias viables.",
                "services": {
                    "0": "Desarrollo Corporativo Estratégico",
                    "1": "Entrada al Mercado & Expansión",
                    "2": "Análisis Competitivo",
                    "3": "Crecimiento & Estrategia de Innovación"
                }
            },
            "1": {
                "title": "Transformación Digital",
                "description": "Nuestros servicios de transformación digital ayudan a las empresas a aprovechar las tecnologías emergentes para reimaginar sus operaciones, experiencias de cliente y modelos de negocio. Le guiamos en cada etapa de su transformación digital.",
                "services": {
                    "0": "Estrategia Digital & Hoja de Ruta",
                    "1": "Automatización de Procesos",
                    "2": "Soluciones de Data Analytics",
                    "3": "Implementación de Tecnología"
                }
            },
            "2": {
                "title": "Gestión de Proyectos",
                "description": "Ofrecemos servicios integrales de gestión de proyectos para optimizar resultados, controlar riesgos y garantizar la entrega eficiente. Nuestros expertos le apoyan en todas las fases para maximizar el éxito.",
                "services": {
                    "0": "Planificación & Ejecución",
                    "1": "Gestión de Recursos",
                    "2": "Control de Riesgos",
                    "3": "Metodologías Ágiles & Tradicionales"
                }
            },
            "3": {
                "title": "Marketing y Comunicación",
                "description": "Optimizamos operaciones de marketing y comunicación para fortalecer la marca, atraer clientes y generar experiencias memorables que potencian la lealtad.",
                "services": {
                    "0": "Estrategia de Marketing",
                    "1": "Gestión de Marca",
                    "2": "Comunicación Digital",
                    "3": "Campañas Publicitarias"
                }
            },
            "4": {
                "title": "Desarrollo de Franquicias",
                "description": "Guiamos a las empresas en la creación, expansión y consolidación de modelos de franquicia que garanticen escalabilidad y sostenibilidad.",
                "services": {
                    "0": "Diseño del Modelo de Franquicia",
                    "1": "Expansión Nacional & Internacional",
                    "2": "Gestión de Franquiciados",
                    "3": "Estrategia de Crecimiento"
                }
            },
            "5": {
                "title": "Academia",
                "description": "Capacitamos a líderes y equipos a través de programas de formación práctica y estratégica, orientados a fortalecer habilidades críticas para el éxito empresarial.",
                "services": {
                    "0": "Formación en Estrategia",
                    "1": "Liderazgo Empresarial",
                    "2": "Innovación y Creatividad",
                    "3": "Cursos Personalizados"
                }
            }
        }
    },
    "clients": {
        "title": "Confían en nosotros",
        "description": "Hemos ayudado a transformar empresas en diversos sectores, brindando resultados excepcionales y asociaciones duraderas.",
        "cta": "Conviértete en Nuestra Próxima Historia de Éxito",
        "industries": {
            "cosmetica": "Cosmética",
            "talento": "Consultoría en Talento Humano",
            "servicios": "Servicios",
            "diseno": "Diseño Gráfico",
            "alimentos": "Alimentos & Bebidas",
            "eventos": "Eventos",
            "salud": "Salud",
            "educacion": "Educación",
            "entretenimiento": "Entretenimiento",
            "consultoria": "Consultoría",
            "ropa": "Ropa"
        }
    },
    "team": {
        "title": "Equipo de Liderazgo",
        "description": "Conozca a los líderes que impulsan la visión estratégica y el crecimiento de nuestra organización, aportando experiencia, innovación y compromiso con la excelencia.",
        "members": {
            "0": {
                "name": "Diego Forero",
                "title": "Chief Executive Officer (CEO)",
                "bio": "Diego aporta más de 20 años de experiencia en liderazgo estratégico, innovación corporativa y gestión de alto nivel en múltiples industrias."
            },
            "1": {
                "name": "Alejandra Rivera",
                "title": "Chief Strategy Officer (CSO)",
                "bio": "Especialista en análisis de datos, inteligencia de negocios y optimización estratégica para el crecimiento organizacional."
            }
        }
    },
    "testimonials": {
        "title": "Lo que dicen nuestros clientes",
        "description": "Estamos orgullosos de las historias de éxito de nuestros clientes y del impacto positivo que nuestros servicios de consultoría han generado.",
        "list": {
            "0": {
                "quote": "Tuve la maravillosa oportunidad de trabajar con Diego, con quien pude compartir la creación de proyectos y vi cómo su pasión, conocimientos, liderazgo y gran compromiso hacen de él un excelente profesional y, más que eso, un gran ser humano.",
                "author": "Johanna Gutierrez",
                "title": "Client Management Assistant, Millward Brown."
            },
            "1": {
                "quote": "Diego has built a strong reputation as someone with vision, diligence and honour – someone who gets things done! He is a calculated risk taker, pragmatic leader and realist who seems to grasp ideas holistically whilst still taking note of the more acute details. I have no hesitation in recommending Diego and know that he will always give his best in any endeavour.",
                "author": "Yamel Ramos",
                "title": "VP Attractions Business Development LA, White Water"
            },
            "2": {
                "quote": "Excelentes habilidades de organización, planeación, liderazgo y negociación. Tengo la oportunidad de trabajar con ellos y siempre han tenido un compromiso profesional de entrega total a sus proyectos.",
                "author": "Victor Garcia",
                "title": "Chief Operation Officer, VidantaWorld Entertainment - Cirque Du Soleil and Luxury Theme Parks"
            }
        }
    },
    "contact": {
        "title": "Contáctanos",
        "description": "¿Listo para transformar tu negocio? Contáctenos hoy para programar una consulta con nuestro equipo de expertos.",
        "form": {
            "name": "Nombre Completo",
            "email": "Dirección de Email",
            "phone": "Número de Teléfono",
            "company": "Compañía",
            "message": "Su Mensaje",
            "services": "Servicios de Interés",
            "submit": "Enviar Mensaje",
            "successTitle": "¡Mensaje enviado!",
            "successDesc": "Gracias por contactarnos. Nuestro equipo responderá pronto."
        },
        "info": {
            "title": "Información de Contacto",
            "visit": "Visítanos",
            "email": "Envíanos un Email",
            "instagram": "Instagram",
            "linkedin": "LinkedIn",
            "facebook": "Facebook"
        },
        "serviceOptions": {
            "0": "Gestión Estratégica",
            "1": "Transformación Digital",
            "2": "Gestión de Proyectos",
            "3": "Marketing y Comunicación",
            "4": "Desarrollo de Franquicias",
            "5": "Academia"
        }
    },
    "footer": {
        "text": "Transformando negocios con consultoría estratégica, innovación y soluciones diseñadas para impulsar el crecimiento sostenible.",
        "copyright": "© {{year}} D2F Consulting — Todos los derechos reservados."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/DF2-Tio/src/locales/en.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "navbar": {
        "inicio": "Home",
        "servicios": "Services",
        "conocenos": "About Us",
        "testimonios": "Testimonials",
        "equipo": "Team",
        "contacto": "Contact"
    },
    "hero": {
        "title": "Strategic Consulting",
        "subtitle": "Transforming Growth",
        "description": "Driving innovation and excellence across industries with our five specialized business consulting services.",
        "servicesBtn": "Our Services",
        "contactBtn": "Contact Us"
    },
    "about": {
        "title": "Driving business excellence since 2015",
        "description": "D2F Consulting is a management consulting firm dedicated to helping organizations achieve sustainable growth and operational excellence. We combine deep industry knowledge, functional expertise, and a client-centric approach to deliver exceptional results.",
        "whyChooseUs": "Why Choose Us?",
        "points": {
            "0": "Industry expertise across diverse sectors",
            "1": "Tailored solutions addressing your unique challenges",
            "2": "Proven methodologies with tangible results",
            "3": "A service integrator adapted to your needs"
        },
        "stats": {
            "experience": "Years of Experience",
            "clients": "Clients in Colombia",
            "satisfied": "Satisfied Clients",
            "associates": "Industry Associates"
        }
    },
    "businessLines": {
        "title": "Our Business Lines",
        "description": "We provide comprehensive consulting through our specialized business lines, each designed to overcome specific challenges and create sustainable value.",
        "servicesTitle": "Our Services",
        "lines": {
            "0": {
                "title": "Strategic Management",
                "description": "We help organizations develop and implement strategic initiatives that drive sustainable growth and competitive advantage. Our approach combines deep sector knowledge with proven methodologies to create actionable strategies.",
                "services": {
                    "0": "Strategic Corporate Development",
                    "1": "Market Entry & Expansion",
                    "2": "Competitive Analysis",
                    "3": "Growth & Innovation Strategy"
                }
            },
            "1": {
                "title": "Digital Transformation",
                "description": "Our digital transformation services help companies leverage emerging technologies to reimagine their operations, customer experiences, and business models. We guide you through every stage of your digital transformation.",
                "services": {
                    "0": "Digital Strategy & Roadmap",
                    "1": "Process Automation",
                    "2": "Data Analytics Solutions",
                    "3": "Technology Implementation"
                }
            },
            "2": {
                "title": "Project Management",
                "description": "We offer comprehensive project management services to optimize results, control risks, and guarantee efficient delivery. Our experts support you in all phases to maximize success.",
                "services": {
                    "0": "Planning & Execution",
                    "1": "Resource Management",
                    "2": "Risk Control",
                    "3": "Agile & Traditional Methodologies"
                }
            },
            "3": {
                "title": "Marketing and Communication",
                "description": "We optimize marketing and communication operations to strengthen the brand, attract clients, and generate memorable experiences that enhance loyalty.",
                "services": {
                    "0": "Marketing Strategy",
                    "1": "Brand Management",
                    "2": "Digital Communication",
                    "3": "Advertising Campaigns"
                }
            },
            "4": {
                "title": "Franchise Development",
                "description": "We guide companies in the creation, expansion, and consolidation of franchise models that guarantee scalability and sustainability.",
                "services": {
                    "0": "Franchise Model Design",
                    "1": "National & International Expansion",
                    "2": "Franchisee Management",
                    "3": "Growth Strategy"
                }
            },
            "5": {
                "title": "Academy",
                "description": "We train leaders and teams through practical and strategic training programs, strictly oriented to strengthen critical skills for business success.",
                "services": {
                    "0": "Strategy Training",
                    "1": "Business Leadership",
                    "2": "Innovation and Creativity",
                    "3": "Customized Courses"
                }
            }
        }
    },
    "clients": {
        "title": "They trust us",
        "description": "We have helped transform companies across various sectors, delivering exceptional results and lasting partnerships.",
        "cta": "Become Our Next Success Story",
        "industries": {
            "cosmetica": "Cosmetics",
            "talento": "Talent Consulting",
            "servicios": "Services",
            "diseno": "Graphic Design",
            "alimentos": "Food & Beverages",
            "eventos": "Events",
            "salud": "Health",
            "educacion": "Education",
            "entretenimiento": "Entertainment",
            "consultoria": "Consulting",
            "ropa": "Clothing"
        }
    },
    "team": {
        "title": "Leadership Team",
        "description": "Meet the leaders driving the strategic vision and growth of our organization, bring expertise, innovation, and commitment to excellence.",
        "members": {
            "0": {
                "name": "Diego Forero",
                "title": "Chief Executive Officer (CEO)",
                "bio": "Diego brings over 20 years of experience in strategic leadership, corporate innovation, and high-level management across multiple industries."
            },
            "1": {
                "name": "Alejandra Rivera",
                "title": "Chief Strategy Officer (CSO)",
                "bio": "Specialist in data analysis, business intelligence, and strategic optimization for organizational growth."
            }
        }
    },
    "testimonials": {
        "title": "What our clients say",
        "description": "We are proud of our clients' success stories and the positive impact our consulting services have generated.",
        "list": {
            "0": {
                "quote": "I had the wonderful opportunity to work with Diego, with whom I was able to share the creation of projects, and I saw how his passion, knowledge, leadership, and great commitment make him an excellent professional and, more than that, a great human being.",
                "author": "Johanna Gutierrez",
                "title": "Client Management Assistant, Millward Brown."
            },
            "1": {
                "quote": "Diego has built a strong reputation as someone with vision, diligence and honour – someone who gets things done! He is a calculated risk taker, pragmatic leader and realist who seems to grasp ideas holistically whilst still taking note of the more acute details. I have no hesitation in recommending Diego and know that he will always give his best in any endeavour.",
                "author": "Yamel Ramos",
                "title": "VP Attractions Business Development LA, White Water"
            },
            "2": {
                "quote": "Excellent organizational, planning, leadership, and negotiation skills. I have the opportunity to work with them and they have always had a professional commitment of total delivery to their projects.",
                "author": "Victor Garcia",
                "title": "Chief Operation Officer, VidantaWorld Entertainment - Cirque Du Soleil and Luxury Theme Parks"
            }
        }
    },
    "contact": {
        "title": "Contact Us",
        "description": "Ready to transform your business? Contact us today to schedule a consultation with our team of experts.",
        "form": {
            "name": "Full Name",
            "email": "Email Address",
            "phone": "Phone Number",
            "company": "Company",
            "message": "Your Message",
            "services": "Services of Interest",
            "submit": "Send Message",
            "successTitle": "Message Sent!",
            "successDesc": "Thank you for contacting us. Our team will respond shortly."
        },
        "info": {
            "title": "Contact Information",
            "visit": "Visit Us",
            "email": "Send us an Email",
            "instagram": "Instagram",
            "linkedin": "LinkedIn",
            "facebook": "Facebook"
        },
        "serviceOptions": {
            "0": "Strategic Management",
            "1": "Digital Transformation",
            "2": "Project Management",
            "3": "Marketing and Communication",
            "4": "Franchise Development",
            "5": "Academy"
        }
    },
    "footer": {
        "text": "Transforming businesses with strategic consulting, innovation, and solutions designed to drive sustainable growth.",
        "copyright": "© {{year}} D2F Consulting — All rights reserved."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$es$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/locales/es.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DF2-Tio/src/locales/en.json.[json].cjs [app-client] (ecmascript)");
;
;
;
;
;
const isServer = ("TURBOPACK compile-time value", "object") === 'undefined';
// Inicializar i18n
__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    resources: {
        es: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$es$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        en: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$locales$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    },
    // Forzar español en el servidor para el SEO principal
    // En el cliente dejamos que actúe el detector o nuestra lógica
    lng: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined,
    fallbackLng: 'es',
    supportedLngs: [
        'es',
        'en'
    ],
    nonExplicitSupportedLngs: true,
    detection: {
        order: [
            'localStorage',
            'navigator',
            'htmlTag'
        ],
        caches: [
            'localStorage'
        ]
    },
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
// Lógica segura de fallback para cliente: 
// Si el navegador no está en español, y el usuario no tiene preferencia guardada, 
// lo más amigable es mostrarle inglés como idioma internacional.
if ("TURBOPACK compile-time truthy", 1) {
    const savedLang = localStorage.getItem('i18nextLng');
    if (!savedLang) {
        const browserLang = navigator.language.toLowerCase();
        // Si el idioma del navegador no empieza con "es", forzamos "en"
        if (!browserLang.startsWith('es')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage('en');
        }
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
                setTimeout({
                    "Home.useEffect": ()=>{
                        const target = document.getElementById(id);
                        const navbar = document.getElementById("navbar");
                        if (target) {
                            const navbarHeight = navbar?.offsetHeight || 80;
                            const y = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
                            window.scrollTo({
                                top: y,
                                behavior: 'smooth'
                            });
                        }
                    }
                }["Home.useEffect"], 100);
            }
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessLines, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Team, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$src$2f$components$2f$Clients$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DF2$2d$Tio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/DF2-Tio/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DF2-Tio/src/app/page.tsx",
        lineNumber: 49,
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

//# sourceMappingURL=DF2-Tio_src_0c0pef~._.js.map