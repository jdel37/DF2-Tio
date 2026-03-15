"use client";
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const kosha = '/images/kosha.webp';
const Dco = '/images/dco.webp';
const creative = '/images/creative.webp';
const camiux = '/images/cami-ux.webp';
const shake2go = '/images/shake2go.webp';
const kailua = '/images/kailua.webp';
const opticalia = '/images/opticalia.webp';
const sabana = '/images/logo-universidad-de-la-sabana.webp';
const deka = '/images/deka2.webp';
const gant = '/images/gandt.webp';
const ddg = '/images/ddg.webp';
const mpc = '/images/mpc.webp';
const snow = '/images/snow.webp';
const love = '/images/love.webp';
const city = '/images/city.webp';

const Clients = () => {
  const { t } = useTranslation();
  
  const clients = [
    { name: "Kosha", logo: kosha, industry: t("clients.industries.cosmetica"), since: "2019" },
    { name: "Dco", logo: Dco, industry: t("clients.industries.talento"), since: "2020" },
    { name: "Ideas Creativas", logo: creative, industry: t("clients.industries.servicios"), since: "2021" },
    { name: "Cami UX", logo: camiux, industry: t("clients.industries.diseno"), since: "2022" },
    { name: "Shake2Go", logo: shake2go, industry: t("clients.industries.alimentos"), since: "2018" },
    { name: "KaiLua", logo: kailua, industry: t("clients.industries.eventos"), since: "2023" },
    { name: "Opticalia", logo: opticalia, industry: t("clients.industries.salud"), since: "2019" },
    { name: "Universidad de La Sabana", logo: sabana, industry: t("clients.industries.educacion"), since: "2017" },
    { name: "CityKidz", logo: city, industry: t("clients.industries.entretenimiento"), since: "2020" },
    { name: "Deka", logo: deka, industry: t("clients.industries.diseno"), since: "2021" },
    { name: "G&T", logo: gant, industry: t("clients.industries.consultoria"), since: "2022" },
    { name: "SnowTotal", logo: snow, industry: t("clients.industries.entretenimiento"), since: "2018" },
    { name: "MPC", logo: mpc, industry: t("clients.industries.talento"), since: "2023" },
    { name: "DDG", logo: ddg, industry: t("clients.industries.entretenimiento"), since: "2019" },
    { name: "Love Trendy", logo: love, industry: t("clients.industries.ropa"), since: "2021" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // If reached the end, snap back to start (smoothly if possible, or instantly)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden z-0">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#1E76B8] font-semibold text-sm tracking-widest uppercase">Nuestros Aliados</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Poppins, sans-serif" }} suppressHydrationWarning>
            {t("clients.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto" suppressHydrationWarning>
            {t("clients.description")}
          </p>
        </motion.div>

        {/* Interactive Slider Area */}
        <div className="relative group">
          
          {/* Navigation Arrows (visible on hover or mobile) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300 opacity-90 lg:opacity-0 lg:group-hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300 opacity-90 lg:opacity-0 lg:group-hover:opacity-100"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gradients on edges for fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-6 px-4 sm:px-8 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 snap-center relative group/card w-[160px] h-[120px] sm:w-[200px] sm:h-[140px] flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
              >
                {/* Logo */}
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  fill
                  sizes="(max-width: 640px) 140px, 180px"
                  className="object-contain p-6 transition-transform duration-500 group-hover/card:scale-110"
                />
                
                {/* Hover Mask Overlay */}
                <div className="absolute inset-0 bg-[#10497a]/90 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{client.name}</span>
                  <span className="text-white/80 text-xs font-medium tracking-wide uppercase">{client.industry}</span>
                  <div className="w-6 h-px bg-[#DF1021] my-2" />
                  <span className="text-white/60 text-[10px] uppercase tracking-widest">Desde {client.since}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-20 text-center relative z-10"
        >
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DF1021] text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(223,16,33,0.3)] hover:shadow-[0_8px_30px_rgba(223,16,33,0.45)] hover:-translate-y-1"
            suppressHydrationWarning
          >
            {t("clients.cta")}
          </button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Clients;
