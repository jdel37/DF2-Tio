"use client";

import { useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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
  const subtitle = t("hero.subtitle");

  const renderSubtitle = () => {
    if (subtitle.includes("Growth")) {
      return (
        <>
          <span className="text-white">Transforming</span>{" "}
          <span className="text-[#DF1021]">Growth</span>
        </>
      );
    }

    if (subtitle.includes("Crecimiento")) {
      return (
        <>
          <span className="text-white">Gestión Estratégica y </span>
          <span className="text-[#DF1021]">Crecimiento</span>
          <span className="text-white"> Real</span>
        </>
      );
    }

    return <span className="text-white">{subtitle}</span>;
  };

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,118,184,0.32),_transparent_38%),linear-gradient(90deg,_rgba(5,20,32,0.9)_0%,_rgba(7,29,48,0.78)_36%,_rgba(9,32,52,0.32)_100%)] z-10" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full z-10 opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #1E76B8, transparent)" }} />
      <div className="absolute bottom-1/4 left-1/4 w-52 h-52 rounded-full z-10 opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #DF1021, transparent)" }} />

      {/* Content */}
      <div className="relative z-30 w-full px-4 sm:px-6 max-w-7xl mx-auto pt-24 sm:pt-32 pb-16 sm:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[720px] min-h-[520px] flex flex-col justify-center"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.7rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] tracking-[-0.06em] font-black text-white leading-[0.9] mb-4"
            style={{ fontFamily: "Poppins, sans-serif", textShadow: "0 2px 20px rgba(0,0,0,0.28)" }}
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-[2.6rem] font-semibold mb-4 leading-[1.05]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {renderSubtitle()}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/75 max-w-xl mb-8 sm:mb-10 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("servicios")}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white transition-all duration-300 text-sm sm:text-base border border-[#DF1021]/60"
              style={{
                background: "linear-gradient(135deg, #DF1021, #bf0e1a)",
                boxShadow: "0 10px 24px rgba(223,16,33,0.25)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 28px rgba(223,16,33,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 24px rgba(223,16,33,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {t("hero.servicesBtn")}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 text-sm sm:text-base border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
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
        <span className="text-white/50 text-[10px] uppercase tracking-[0.2em]">{t("hero.discover")}</span>
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
