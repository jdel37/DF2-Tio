import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            }
        },
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true, // Allows es-MX to be handled by es, en-US by en
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
