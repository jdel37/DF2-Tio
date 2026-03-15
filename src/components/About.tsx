"use client";
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Equipo = "/images/equipo-1.webp";

// Animated counter hook
function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 25, suffix: '+', label: 'Clientes atendidos' },
  { value: 100, suffix: '%', label: 'Clientes satisfechos' },
];

function StatCard({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="relative text-center p-5 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
      style={{ background: "linear-gradient(135deg, #1E76B8, #155a94)", boxShadow: "0 4px 20px rgba(30,118,184,0.2)" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, #155a94, #0f3f6e)" }} />
      <div className="relative z-10">
        <p className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
          {count}{stat.suffix}
        </p>
        <p className="text-white/75 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</p>
      </div>
    </div>
  );
}

const About = () => {
  const { t } = useTranslation();
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  const points = [
    t('about.points.0'),
    t('about.points.1'),
    t('about.points.2'),
    t('about.points.3'),
  ];

  return (
    <section
      id="conócenos"
      aria-label="Acerca de D2F Consulting"
      className="py-10 sm:py-14 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
              {/* Decorative blobs */}
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[#DF1021]/15 rounded-3xl -z-10 rotate-3" />
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#1E76B8]/15 rounded-3xl -z-10 -rotate-3" />
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/3] sm:aspect-auto sm:h-[400px] lg:h-[500px]" style={{ boxShadow: "0 24px 80px rgba(30,118,184,0.18)" }}>
                <Image
                  src={Equipo}
                  alt="Equipo de consultores de D2F Consulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="lg:w-1/2 w-full"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 rounded-full bg-[#DF1021]" />
              <span className="text-[#DF1021] font-semibold text-sm uppercase tracking-widest">Quiénes somos</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              {t('about.title')}
            </h2>

            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              {t('about.description')}
            </p>

            {/* Points */}
            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
                {t('about.whyChooseUs')}
              </h3>
              <ul className="space-y-3.5">
                {points.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-[#DF1021] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} inView={!!inView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
