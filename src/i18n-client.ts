import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

// Inicializar i18n inmediatamente con español como default
// para que el contenido sea visible en el HTML inicial
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en }
        },
        lng: 'es', // Español por defecto para SSR/crawlers
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true,
        detection: {
            order: ['navigator', 'htmlTag'],
            caches: [],
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        }
    });

// Detectar idioma del navegador después del render inicial
if (typeof window !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
        i18n.changeLanguage('en');
    }
}

export default i18n;
