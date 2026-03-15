import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

const isServer = typeof window === 'undefined';

// Inicializar i18n
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en }
        },
        // Forzar español en el servidor para el SEO principal
        // En el cliente dejamos que actúe el detector o nuestra lógica
        lng: isServer ? 'es' : undefined,
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true,
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'], // Ahora recordaremos la preferencia del usuario
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        }
    });

// Lógica segura de fallback para cliente: 
// Si el navegador no está en español, y el usuario no tiene preferencia guardada, 
// lo más amigable es mostrarle inglés como idioma internacional.
if (!isServer) {
    const savedLang = localStorage.getItem('i18nextLng');
    if (!savedLang) {
        const browserLang = navigator.language.toLowerCase();
        // Si el idioma del navegador no empieza con "es", forzamos "en"
        if (!browserLang.startsWith('es')) {
            i18n.changeLanguage('en');
        }
    }
}

export default i18n;
