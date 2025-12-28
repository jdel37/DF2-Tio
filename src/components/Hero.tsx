import React from "react";
import { ChevronDown } from "lucide-react";
import Carousel from "./Carrousel";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToServices = () => {
    const services = document.getElementById("servicios");
    if (services) {
      services.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center"
      aria-label="Sección principal de inicio"
    >
      {/* Fondo con carrusel */}
      <div className="absolute inset-0 h-full">
        <Carousel />

        {/* Overlay degradado */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1E76B8]/70 
          via-blue-900/40 to-transparent"
          aria-hidden="true"
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn"
          >
            {t("hero.title")}
          </h1>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DF1021] 
            mb-6 leading-tight animate-fadeIn md:whitespace-nowrap"
          >
            {t("hero.subtitle")}
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón 1 */}
            <button
              className="bg-[#DF1021] hover:bg-red-700 text-white font-medium py-3 px-8 
              rounded-md transition-transform duration-300 hover:scale-105 
              focus:outline-none focus:ring-0"
              onClick={scrollToServices}
              aria-label="Ver servicios"
            >
              {t("hero.servicesBtn")}
            </button>

            {/* Botón 2 */}
            <button
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 
              rounded-md hover:bg-white/10 transition-colors duration-300 focus:outline-none 
              focus:ring-0"
              onClick={() => {
                const contact = document.getElementById("contacto");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Ir a la sección de contacto"
            >
              {t("hero.contactBtn")}
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="false"
      >
        <button
          onClick={scrollToServices}
          className="text-white focus:outline-none focus:ring-0"
          aria-label="Desplazarse hacia abajo"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
