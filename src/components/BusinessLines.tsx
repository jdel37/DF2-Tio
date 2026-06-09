"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Lightbulb, LineChart, Users, Globe, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const Gestion = '/images/strategic-planing.webp';
const Digital = '/images/equipo-2.webp';
const Proyectos = '/images/project-management-45.webp';
const Marketing = '/images/marketing-digital-9.webp';
const Franquicias = '/images/franchise-8.webp';
const Academia = '/images/shutterstock_225208390.webp';

const BusinessLines = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const businessLines = [
    {
      id: 0,
      title: t('businessLines.lines.0.title'),
      icon: BarChart3,
      image: Gestion,
      alt: "Equipo trabajando en gestión estratégica",
      description: t('businessLines.lines.0.description'),
      services: [
        t('businessLines.lines.0.services.0'),
        t('businessLines.lines.0.services.1'),
        t('businessLines.lines.0.services.2'),
        t('businessLines.lines.0.services.3'),
      ],
    },
    {
      id: 1,
      title: t('businessLines.lines.1.title'),
      icon: Lightbulb,
      image: Digital,
      alt: "Transformación digital en empresa",
      description: t('businessLines.lines.1.description'),
      services: [
        t('businessLines.lines.1.services.0'),
        t('businessLines.lines.1.services.1'),
        t('businessLines.lines.1.services.2'),
        t('businessLines.lines.1.services.3'),
      ],
    },
    {
      id: 2,
      title: t('businessLines.lines.2.title'),
      icon: LineChart,
      image: Proyectos,
      alt: "Gestión de proyectos empresariales",
      description: t('businessLines.lines.2.description'),
      services: [
        t('businessLines.lines.2.services.0'),
        t('businessLines.lines.2.services.1'),
        t('businessLines.lines.2.services.2'),
        t('businessLines.lines.2.services.3'),
      ],
    },
    {
      id: 3,
      title: t('businessLines.lines.3.title'),
      icon: Globe,
      image: Marketing,
      alt: "Estrategias de marketing digital",
      description: t('businessLines.lines.3.description'),
      services: [
        t('businessLines.lines.3.services.0'),
        t('businessLines.lines.3.services.1'),
        t('businessLines.lines.3.services.2'),
        t('businessLines.lines.3.services.3'),
      ],
    },
    {
      id: 4,
      title: t('businessLines.lines.4.title'),
      icon: Users,
      image: Franquicias,
      alt: "Modelo de franquicias empresariales",
      description: t('businessLines.lines.4.description'),
      services: [
        t('businessLines.lines.4.services.0'),
        t('businessLines.lines.4.services.1'),
        t('businessLines.lines.4.services.2'),
        t('businessLines.lines.4.services.3'),
      ],
    },
    {
      id: 5,
      title: t('businessLines.lines.5.title'),
      icon: GraduationCap,
      image: Academia,
      alt: "Capacitación y formación empresarial",
      description: t('businessLines.lines.5.description'),
      services: [
        t('businessLines.lines.5.services.0'),
        t('businessLines.lines.5.services.1'),
        t('businessLines.lines.5.services.2'),
        t('businessLines.lines.5.services.3'),
      ],
    },
  ];

  const active = businessLines[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section
      id="servicios"
      aria-label="Líneas de negocio de D2F Consulting"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #f0f4fa 100%)" }}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E76B8] via-[#DF1021] to-[#1E76B8]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DF1021]" />
            <span className="text-[#DF1021] font-bold text-xs tracking-widest uppercase">Nuestras Especialidades</span>
            <div className="w-8 h-px bg-[#DF1021]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {t('businessLines.title')}
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('businessLines.description')}
          </p>
        </motion.div>

        {/* Tab grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10 sm:mb-14 max-w-4xl mx-auto">
          {businessLines.map((line) => {
            const isActive = activeTab === line.id;
            const Icon = line.icon;
            return (
              <button
                key={line.id}
                onClick={() => setActiveTab(line.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 font-medium cursor-pointer lg:aspect-square min-h-[90px] lg:min-h-0 border ${
                  isActive
                    ? "bg-white shadow-lg border-[#1E76B8]/20 scale-105 z-10"
                    : "bg-white/60 border-transparent hover:bg-white hover:shadow-sm text-gray-500 hover:text-[#1E76B8]"
                }`}
                aria-pressed={isActive}
              >
                <div className={`mb-1.5 sm:mb-2 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                  <Icon
                    size={22}
                    className={`sm:w-[26px] sm:h-[26px] transition-colors ${isActive ? "text-[#DF1021]" : "text-gray-400"}`}
                  />
                </div>
                <span className={`text-[10px] sm:text-[11px] lg:text-[12px] text-center leading-tight font-semibold ${isActive ? "text-[#1E76B8]" : ""}`}>
                  {line.title}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-2xl border-2 border-[#1E76B8]/30 pointer-events-none"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden max-w-5xl mx-auto"
            style={{ boxShadow: "0 8px 40px rgba(30,118,184,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}
          >
            <div className="flex flex-col lg:flex-row">

              {/* Image */}
              <div className="w-full lg:w-5/12 relative min-h-[220px] sm:min-h-[300px] lg:min-h-full">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a2e4e]/95 via-[#1E76B8]/60 to-transparent" />

                {/* Icon & title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <ActiveIcon size={22} className="text-[#DF1021]" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-black text-white leading-tight"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {active.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-8 h-0.5 bg-[#DF1021] rounded-full" />
                    <span className="text-white/60 text-xs uppercase tracking-wider">D2F Consulting</span>
                  </div>
                </div>
              </div>

              {/* Text & services */}
              <div className="w-full lg:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {active.description}
                </p>

                <div>
                  <h4 className="font-bold text-xs text-gray-400 mb-5 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-4 h-px bg-[#DF1021]" />
                    {t('businessLines.servicesTitle')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {active.services.map((service, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.07 * idx }}
                        key={idx}
                        className="flex items-start gap-2.5 group"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#1E76B8]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#DF1021]/15 transition-colors">
                          <CheckCircle size={11} className="text-[#1E76B8] group-hover:text-[#DF1021] transition-colors" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium leading-snug">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #1E76B8, #155a94)",
                      boxShadow: "0 4px 16px rgba(30,118,184,0.3)",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(30,118,184,0.45)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(30,118,184,0.3)"}
                  >
                    Solicitar asesoría
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BusinessLines;
