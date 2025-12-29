import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

// Configurar pero NO inicializar automáticamente
i18n
    .use(LanguageDetector)
    .use(initReactI18next);

// Configuración para inicialización manual
export const i18nConfig = {
    resources: {
        es: { translation: es },
        en: { translation: en }
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,
    detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
    },
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false,
    }
};

export default i18n;
