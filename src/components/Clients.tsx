import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const kosha = '/images/kosha.jpg';
const Dco = '/images/Dco.jpg';
const creative = '/images/creative.jpg';
const camiux = '/images/cami-ux.jpg';
const shake2go = '/images/shake2go.jpg';
const kailua = '/images/kailua.png';
const opticalia = '/images/opticalia.png';
const sabana = '/images/Logo-Universidad-de-La-Sabana.jpg';
const deka = '/images/deka2.png';
const gant = '/images/gandt.jpg';
const ddg = '/images/ddg.jpg';
const mpc = '/images/mpc.jpg';
const snow = '/images/snow.jpg';
const love = '/images/love.jpg';
const city = '/images/city.jpg';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false); // New state to pause on manual interaction

  // Initial scroll position to the middle set
  useEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const scrollSpeed = 0.5;

    const step = () => {
      // Pause if hovered OR if user is manually interacting (clicking arrows/touching)
      if (isHovered || isInteracting) {
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
  }, [isHovered, isInteracting]);

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      // Pause auto-scroll temporarily
      setIsInteracting(true);

      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });

      // Resume after animation mostly completes
      setTimeout(() => {
        setIsInteracting(false);
      }, 1000);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E76B8] mb-3">
            {t("clients.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsInteracting(true)} // Don't just hover, set interacting
            onTouchEnd={() => {
              setTimeout(() => setIsInteracting(false), 2000);
            }}
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
                  <p className="font-bold text-sm mb-1 line-clamp-2">{client.name}</p>
                  <p className="text-xs font-light line-clamp-2">{client.industry}</p>
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
            className="inline-flex items-center gap-2 bg-[#DF1021] hover:bg-red-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md transition-colors duration-300 text-sm md:text-base"
          >
            {t("clients.cta")}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Clients;
