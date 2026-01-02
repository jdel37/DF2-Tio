"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-20" />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t("hero.title")}
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-[#DF1021] mb-6">
            {t("hero.subtitle")}
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("servicios")}
              className="bg-[#DF1021] text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              {t("hero.servicesBtn")}
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition"
            >
              {t("hero.contactBtn")}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
