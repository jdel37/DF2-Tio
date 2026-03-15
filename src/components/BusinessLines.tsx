"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Lightbulb, LineChart, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
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
        t('businessLines.lines.0.services.3')
      ]
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
        t('businessLines.lines.1.services.3')
      ]
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
        t('businessLines.lines.2.services.3')
      ]
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
        t('businessLines.lines.3.services.3')
      ]
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
        t('businessLines.lines.4.services.3')
      ]
    },
    {
      id: 5,
      title: t('businessLines.lines.5.title'),
      icon: BarChart3,
      image: Academia,
      alt: "Capacitación y formación empresarial",
      description: t('businessLines.lines.5.description'),
      services: [
        t('businessLines.lines.5.services.0'),
        t('businessLines.lines.5.services.1'),
        t('businessLines.lines.5.services.2'),
        t('businessLines.lines.5.services.3')
      ]
    }
  ];

  const active = businessLines[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section
      id="servicios"
      aria-label="Líneas de negocio de D2F Consulting"
      className="py-16 sm:py-24 relative overflow-hidden bg-gray-50/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[#DF1021] font-semibold text-xs tracking-widest uppercase">Nuestras Especialidades</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#1E76B8] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            {t('businessLines.title')}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {t('businessLines.description')}
          </p>
        </motion.div>

        {/* Ultra-Dense Minimalist Square Tabs (Cuadritos) */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto px-2">
          {businessLines.map((line) => {
            const isActive = activeTab === line.id;
            const Icon = line.icon;
            return (
              <button
                key={line.id}
                onClick={() => setActiveTab(line.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl transition-all duration-300 font-medium cursor-pointer border aspect-square ${
                  isActive 
                  ? "bg-white text-[#1E76B8] shadow-md border-gray-100 scale-105 z-10" 
                  : "bg-transparent text-gray-500 hover:text-[#1E76B8] hover:bg-white/60 border-transparent hover:border-gray-200"
                }`}
                aria-pressed={isActive}
              >
                <div className={`mb-1.5 sm:mb-2 transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`}>
                  <Icon size={20} className={`sm:w-[24px] sm:h-[24px] ${isActive ? "text-[#DF1021]" : "text-gray-400 group-hover:text-gray-500"}`} />
                </div>
                <span className="text-[10px] sm:text-[11px] lg:text-[13px] text-center leading-tight tracking-tight">
                  {line.title}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeTabSquareIndicator"
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-blue-100 pointer-events-none"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row">
              
              {/* Image Section */}
              <div className="w-full lg:w-5/12 relative min-h-[200px] sm:min-h-[280px] lg:min-h-full">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#10497a]/90 via-[#1E76B8]/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <ActiveIcon size={20} className="text-[#DF1021]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Text & Services List Section */}
              <div className="w-full lg:w-7/12 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="mb-2">
                  <h4 className="font-semibold text-xs sm:text-sm text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-6 h-px bg-[#DF1021]"></span>
                    {t('businessLines.servicesTitle')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {active.services.map((service, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * idx }}
                        key={idx} 
                        className="flex items-start gap-2 group"
                      >
                        <CheckCircle size={16} className="text-[#1E76B8] mt-0.5 flex-shrink-0 group-hover:text-[#DF1021] transition-colors" />
                        <span className="text-gray-700 text-sm font-medium leading-snug">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 text-[#1E76B8] text-sm font-semibold hover:text-[#10497a] hover:gap-3 transition-all duration-300"
                  >
                    Solicitar asesoría <ArrowRight size={16} />
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
