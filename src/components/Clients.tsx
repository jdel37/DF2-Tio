import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import kosha from '../../public/images/kosha.jpg';
import Dco from '../../public/images/Dco.jpg';
import creative from '../../public/images/creative.jpg';
import camiux from '../../public/images/cami-ux.jpg';
import shake2go from '../../public/images/shake2go.jpg';
import kailua from '../../public/images/kailua.png';
import opticalia from '../../public/images/opticalia.png';
import sabana from '../../public/images/Logo-Universidad-de-La-Sabana.jpg';
import deka from '../../public/images/deka2.png';
import gant from '../../public/images/gandt.jpg';
import ddg from '../../public/images/ddg.jpg';
import mpc from '../../public/images/mpc.jpg';
import snow from '../../public/images/snow.jpg';
import love from '../../public/images/love.jpg';
import city from '../../public/images/city.jpg';

const Clients = () => {
  const clients = [
    { name: "Global Tech Solutions", logo: kosha, industry: "Technology" },
    { name: "Meridian Finance", logo: Dco, industry: "Financial Services" },
    { name: "EcoSmart Industries", logo: creative, industry: "Manufacturing" },
    { name: "HealthCare Plus", logo: camiux, industry: "Healthcare" },
    { name: "Retail Dynamics", logo: shake2go, industry: "Retail" },
    { name: "Energy Innovations", logo: kailua, industry: "Energy" },
    { name: "Opticalia", logo: opticalia, industry: "Retail" },
    { name: "Universidad de La Sabana", logo: sabana, industry: "Education" },
    { name: "City Group", logo: city, industry: "Services" },
    { name: "Deka Industries", logo: deka, industry: "Manufacturing" },
    { name: "Gant Group", logo: gant, industry: "Business Services" },
    { name: "SnowTech", logo: snow, industry: "Technology" },
    { name: "MPC Corp", logo: mpc, industry: "Industrial" },
    { name: "DDG Labs", logo: ddg, industry: "Technology" },
    { name: "Love & Co", logo: love, industry: "Retail" },
  ];

  const logos = [...clients, ...clients]; 
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    const scrollSpeed = 1;

    const step = () => {
      if (!scrollRef.current || isHovered) {
        animationFrame = requestAnimationFrame(step);
        return;
      }
      scrollRef.current.scrollLeft += scrollSpeed;

      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += distance;

      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      }
      if (scrollRef.current.scrollLeft < 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E76B8] mb-3">
            Confían en nosotros
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hemos ayudado a transformar empresas en diversos sectores, brindando resultados excepcionales y asociaciones duraderas.
          </p>
        </div>

        <div className="relative flex items-center gap-3">

          <button
            className="p-2 md:p-3 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
            onClick={() => scrollBy(-200)}
            aria-label="Desplazar logos hacia la izquierda"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-hidden flex gap-6 scroll-smooth"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {logos.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 relative flex items-center justify-center bg-white cursor-pointer rounded-lg p-2"
                style={{ width: '180px', height: '140px' }}
              >
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-[#1E76B8]/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white p-2 md:p-4">
                  <p className="font-semibold text-sm md:text-base">{client.name}</p>
                  <p className="text-xs md:text-sm">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="p-2 md:p-3 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
            onClick={() => scrollBy(200)}
            aria-label="Desplazar logos hacia la derecha"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#DF1021] hover:bg-red-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md transition-colors duration-300 text-sm md:text-base"
          >
            Conviértete en Nuestra Próxima Historia de Éxito
          </button>
        </div>

      </div>
    </section>
  );
};

export default Clients;
