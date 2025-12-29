"use client";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook que detecta y aplica el idioma del navegador después de la hidratación
 */
export function useClientLanguage() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const detectAndSetLanguage = async () => {
            // Verificar si ya hay un idioma guardado
            const savedLang = localStorage.getItem('i18nextLng');

            if (savedLang && ['es', 'en'].includes(savedLang)) {
                // Usar idioma guardado
                await i18n.changeLanguage(savedLang);
            } else {
                // Detectar del navegador
                const browserLang = navigator.language.toLowerCase();
                const lang = browserLang.startsWith('en') ? 'en' : 'es';
                await i18n.changeLanguage(lang);
            }
        };

        detectAndSetLanguage();
    }, []); // Solo ejecutar una vez al montar
}
