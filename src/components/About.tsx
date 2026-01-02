"use client";
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Equipo = "/images/equipo-1.webp";

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { value: '20+', label: t('about.stats.experience') },
    { value: '25+', label: t('about.stats.clients') },
    { value: '100%', label: t('about.stats.satisfied') },
    { value: '35+', label: t('about.stats.associates') }
  ];

  return (
    <section
      id="conócenos"
      aria-label="Acerca de D2F Consulting"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={Equipo}
                loading="lazy"
                alt="Equipo de consultores de D2F Consulting en reunión"
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* Fondos decorativos */}
              <div className="absolute -bottom-6 -right-6 w-32 sm:w-40 md:w-64 h-32 sm:h-40 md:h-64 bg-[#DF1021] rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-[#1E76B8] rounded-lg -z-10"></div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E76B8] mb-6">
              {t('about.title')}
            </h2>

            <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1E76B8] mb-4">
                {t('about.whyChooseUs')}
              </h3>
              <ul className="space-y-3">
                {[
                  t('about.points.0'),
                  t('about.points.1'),
                  t('about.points.2'),
                  t('about.points.3')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2
                      size={20}
                      className="text-[#DF1021] mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm sm:text-base md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DF1021]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
