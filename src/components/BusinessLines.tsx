"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Lightbulb, LineChart, Users, Globe } from 'lucide-react';

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
      icon: <BarChart3 size={24} className="text-[#DF1021]" />,
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
      icon: <Lightbulb size={24} className="text-[#DF1021]" />,
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
      icon: <LineChart size={24} className="text-[#DF1021]" />,
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
      icon: <Globe size={24} className="text-[#DF1021]" />,
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
      icon: <Users size={24} className="text-[#DF1021]" />,
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
      icon: <BarChart3 size={24} className="text-[#DF1021]" />,
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

  return (
    <section
      id="servicios"
      aria-label="Líneas de negocio de D2F Consulting"
      className="py-16 sm:py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
            {t('businessLines.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('businessLines.description')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {businessLines.map((line, idx) => (
            <motion.button
              key={line.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setActiveTab(line.id)}
              className={`px-3 sm:px-4 py-2 sm:py-3 rounded-md transition-all duration-300 flex items-center gap-2 
                ${activeTab === line.id
                  ? 'bg-[#1E76B8] text-white shadow-md'
                  : 'bg-white text-[#1E76B8] hover:bg-gray-100'
                }`}
              aria-expanded={activeTab === line.id}
            >
              {line.icon}
              <span className="hidden sm:inline font-medium text-sm sm:text-base">{line.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

              {/* Image */}
              <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <img
                  src={businessLines[activeTab].image}
                  alt={businessLines[activeTab].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#1E76B8] mb-3 flex items-center justify-center md:justify-start gap-2">
                  {businessLines[activeTab].icon}
                  {businessLines[activeTab].title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-base">
                  {businessLines[activeTab].description}
                </p>
              </div>

              {/* Services */}
              <div className="w-full md:w-2/3 bg-gray-50 rounded-lg p-4 sm:p-6 mt-4 md:mt-0">
                <h4 className="font-semibold text-base sm:text-lg text-[#1E76B8] mb-3">
                  {t('businessLines.servicesTitle')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {businessLines[activeTab].services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white py-3 px-2 sm:py-4 sm:px-3 rounded-md shadow-sm border-l-4 border-[#DF1021]"
                    >
                      <p className="text-gray-800 text-sm sm:text-base">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessLines;
