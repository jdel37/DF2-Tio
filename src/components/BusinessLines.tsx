"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gestion = '/images/strategic-planing.webp';
const Digital = '/images/equipo-2.webp';
const Proyectos = '/images/project-management-45.webp';
const Marketing = '/images/marketing-digital-9.webp';
const Franquicias = '/images/franchise-8.webp';
const Academia = '/images/shutterstock_225208390.webp';

import {
  BarChart3,
  Lightbulb,
  LineChart,
  Users,
  Globe
} from 'lucide-react';

import { motion } from 'framer-motion';

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


  // ... (keep constants and data same, just adding imports and motion wrappers)

  return (
    <section
      id="servicios"
      aria-label="Líneas de negocio de D2F Consulting"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
            {t('businessLines.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
              className={`px-4 py-3 rounded-md transition-all duration-300 flex items-center gap-2 
                ${activeTab === line.id
                  ? 'bg-[#1E76B8] text-white shadow-md'
                  : 'bg-white text-[#1E76B8] hover:bg-gray-100'
                }`}
              aria-expanded={activeTab === line.id}
            >
              {line.icon}
              <span className="hidden md:inline font-medium">{line.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab} // Key forces re-render animation when tab changes
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center md:flex-row gap-5">

              {/* Circular image */}
              <div className="flex-shrink-0 w-40 h-40 rounded-full shadow-[7px_11px_28px_6px_rgba(0,_0,_0,_0.1)] overflow-hidden flex items-center justify-center">
                <img
                  src={businessLines[activeTab].image}
                  alt={businessLines[activeTab].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#1E76B8] mb-4 flex items-center gap-2">
                  {businessLines[activeTab].icon}
                  {businessLines[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {businessLines[activeTab].description}
                </p>
              </div>

              {/* Services */}
              <div className="md:w-2/3 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-[#1E76B8] mb-4">
                  {t('businessLines.servicesTitle')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {businessLines[activeTab].services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white py-4 px-2 rounded-md shadow-sm border-l-4 border-[#DF1021]"
                    >
                      <p className="font-medium text-gray-800">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section >
  );
};

export default BusinessLines;
