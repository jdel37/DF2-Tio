"use client";
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { i18nConfig } from '@/i18n';

export default function ClientI18nProvider({ children }: { children: React.ReactNode }) {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeI18n = async () => {
            // Inicializar i18n con la configuración
            if (!i18n.isInitialized) {
                await i18n.init(i18nConfig);
            }

            // Detectar idioma del navegador (prioridad sobre localStorage)
            const browserLang = navigator.language.toLowerCase();
            let targetLang = 'es'; // default español

            if (browserLang.startsWith('en')) {
                targetLang = 'en';
            } else if (browserLang.startsWith('es')) {
                targetLang = 'es';
            }

            await i18n.changeLanguage(targetLang);
            localStorage.setItem('i18nextLng', targetLang);

            setIsInitialized(true);
        };

        initializeI18n();
    }, []);

    // Mostrar loading mientras se inicializa
    if (!isInitialized) {
        return <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E76B8] mx-auto"></div>
            </div>
        </div>;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
