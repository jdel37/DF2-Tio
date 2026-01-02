"use client";
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    { name: "Kosha", logo: kosha, industry: t("clients.industries.cosmetica") },
    { name: "Dco", logo: Dco, industry: t("clients.industries.talento") },
    { name: "Ideas", logo: creative, industry: t("clients.industries.servicios") },
    { name: "Cami", logo: camiux, industry: t("clients.industries.diseno") },
    { name: "Shake2Go", logo: shake2go, industry: t("clients.industries.alimentos") },
    { name: "KaiLua", logo: kailua, industry: t("clients.industries.eventos") },
    { name: "Opticalia", logo: opticalia, industry: t("clients.industries.salud") },
    { name: "Universidad de La Sabana", logo: sabana, industry: t("clients.industries.educacion") },
    { name: "CityKidz", logo: city, industry: t("clients.industries.entretenimiento") },
    { name: "Deka", logo: deka, industry: t("clients.industries.diseno") },
    { name: "G&T", logo: gant, industry: t("clients.industries.consultoria") },
    { name: "SnowTotal", logo: snow, industry: t("clients.industries.entretenimiento") },
    { name: "MPC", logo: mpc, industry: t("clients.industries.talento") },
    { name: "DDG", logo: ddg, industry: t("clients.industries.entretenimiento") },
    { name: "Love Trendy", logo: love, industry: t("clients.industries.ropa") },
  ];

  // Triplicate for infinite scroll simulation
  const logos = [...clients, ...clients, ...clients];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Refs for synchronous loop control (prevents race conditions with smooth scroll)
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);

  // Initial scroll position to the middle set
  useEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const handleTouchStart = () => {
    isInteractingRef.current = true;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  useEffect(() => {
    let animationFrame: number;
    const scrollSpeed = 0.5;

    const step = () => {
      // Synchronous check: Stop immediately if executing this frame but user interacted
      // We check REFS, not state, so it's instant.
      if (isHoveredRef.current || isInteractingRef.current) {
        animationFrame = requestAnimationFrame(step);
        return;
      }

      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollSpeed;

        // Infinite Scroll Logic (Silent Jump)
        const scrollWidth = scrollRef.current.scrollWidth;
        const singleSetWidth = scrollWidth / 3;

        if (scrollRef.current.scrollLeft >= singleSetWidth * 2) {
          scrollRef.current.scrollLeft = singleSetWidth;
        }
        else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = singleSetWidth;
        }
      }

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []); // Empty dependency array as we use Refs for control

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      // Immediate synchronous pause via Ref
      isInteractingRef.current = true;

      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });

      // Release after animation mostly completes
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 1000);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E76B8] mb-3" suppressHydrationWarning>
            {t("clients.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto" suppressHydrationWarning>
            {t("clients.description")}
          </p>
        </div>

        <div className="relative flex items-center gap-2 group/carousel">

          {/* Left Arrow */}
          <button
            className="hidden md:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2"
            onClick={() => scrollBy(-300)}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-[#1E76B8]" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="
                flex 
                gap-6 
                overflow-x-auto 
                scroll-smooth 
                scrollbar-hide 
                py-4
                cursor-grab 
                active:cursor-grabbing
                w-full
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {logos.map((client, idx) => (
              <div
                key={idx}
                className="
                    flex-shrink-0 
                    relative 
                    group 
                    bg-white 
                    rounded-lg 
                    p-4
                    flex 
                    items-center 
                    justify-center
                    transition-all
                    duration-300
                    hover:shadow-lg
                    border border-transparent
                    hover:border-gray-100
                "
                style={{ width: '180px', height: '140px' }}
              >
                {/* Image: Removed grayscale and opacity filters */}
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-full h-full object-contain transition-all duration-300"
                />

                {/* Hover Details Overlay */}
                <div className="
                    absolute 
                    inset-0 
                    bg-[#1E76B8]/90 
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-300 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    text-white 
                    text-center 
                    p-2 
                    rounded-lg
                ">
                  <p className="font-bold text-sm mb-1 line-clamp-2" suppressHydrationWarning>{client.name}</p>
                  <p className="text-xs font-light line-clamp-2" suppressHydrationWarning>{client.industry}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="hidden md:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2"
            onClick={() => scrollBy(300)}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="text-[#1E76B8]" />
          </button>

        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-4 bg-[#DF1021] text-white rounded-md text-lg 
            font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105"
            suppressHydrationWarning
          >
            {t("clients.cta")}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Clients;
