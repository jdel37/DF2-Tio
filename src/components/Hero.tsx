"use client";

import { useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* Multi-layer overlay for drama and readability matched to brand color */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10497a]/90 via-[#1E76B8]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full z-10 opacity-10"
        style={{ background: "radial-gradient(circle, #1E76B8, transparent)" }} />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full z-10 opacity-10"
        style={{ background: "radial-gradient(circle, #DF1021, transparent)" }} />

      {/* Content */}
      <div className="relative z-30 w-full px-4 sm:px-6 max-w-7xl mx-auto pt-20 sm:pt-28 pb-12 sm:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ color: "#DF1021", fontFamily: "Poppins, sans-serif" }}
          >
            {t("hero.subtitle")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-white/85 max-w-xl mb-8 sm:mb-10 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("servicios")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #DF1021, #b80d1a)",
                boxShadow: "0 4px 24px rgba(223,16,33,0.4)"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(223,16,33,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(223,16,33,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {t("hero.servicesBtn")}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          
        </motion.div>
      </div>

      {/* Scroll indicator removed as requested */}
    </section>
  );
}
