"use client";

import { useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
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
    if (target) target.scrollIntoView({ behavior: "smooth" });
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e4e]/95 via-[#10497a]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10" />
      </div>

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full z-10 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #1E76B8, transparent)" }} />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full z-10 opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #DF1021, transparent)" }} />

      {/* Content */}
      <div className="relative z-30 w-full px-4 sm:px-6 max-w-7xl mx-auto pt-24 sm:pt-32 pb-16 sm:pb-20">
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
            className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-4"
            style={{ fontFamily: "Poppins, sans-serif", textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-7 leading-tight"
            style={{ color: "#FF3346", fontFamily: "Poppins, sans-serif", textShadow: "0 2px 20px rgba(223,16,33,0.4)" }}
          >
            {t("hero.subtitle")}
          </motion.h2>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 rounded-full bg-[#DF1021]" />
            <div className="w-3 h-0.5 rounded-full bg-white/40" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-white/80 max-w-xl mb-10 sm:mb-12 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("servicios")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 text-base"
              style={{
                background: "linear-gradient(135deg, #DF1021, #b80d1a)",
                boxShadow: "0 4px 30px rgba(223,16,33,0.5)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(223,16,33,0.65)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(223,16,33,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {t("hero.servicesBtn")}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 text-base border border-white/30 backdrop-blur-sm hover:bg-white/15 hover:border-white/50"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {t("hero.contactBtn")}
              <ArrowRight size={18} className="opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Stats strip */}
         
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("conócenos")}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.2em]">Descubrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
