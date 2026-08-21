"use client";
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Equipo = "/images/equipo-1.webp";

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
  { value: 20, suffix: '+', label: 'experience', color: '#1E76B8' },
  { value: 25, suffix: '+', label: 'clients', color: '#DF1021' },
  { value: 100, suffix: '%', label: 'satisfied', color: '#1E76B8' },
];

function StatCard({ stat, inView, index }: { stat: typeof stats[0]; inView: boolean; index: number }) {
  const count = useCountUp(stat.value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative text-center p-5 sm:p-6 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{
        background: "linear-gradient(135deg, #1E76B8 0%, #155a94 100%)",
        boxShadow: "0 4px 24px rgba(30,118,184,0.25)",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, #155a94, #0f3f6e)" }} />
      {/* Decorative corner shape */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10 bg-white" />
      <div className="relative z-10">
        <p className="text-4xl sm:text-5xl font-black text-white leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>
          {count}
          <span className="text-2xl sm:text-3xl text-[#DF1021]">{stat.suffix}</span>
        </p>
        <p className="text-white/70 text-xs sm:text-sm mt-2 leading-tight font-medium">{stat.label}</p>
      </div>
    </motion.div>
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
      className="py-16 sm:py-24 bg-white overflow-hidden relative"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f0f7ff] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

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
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#DF1021]/10 rounded-3xl -z-10 rotate-3" />
              <div className="absolute -top-8 -left-8 w-44 h-44 bg-[#1E76B8]/10 rounded-3xl -z-10 -rotate-3" />
              {/* Accent line */}
              <div className="absolute -left-4 top-12 bottom-12 w-1.5 rounded-full bg-gradient-to-b from-[#DF1021] via-[#1E76B8] to-transparent z-10" />
              {/* Main image */}
              <div
                className="relative rounded-3xl overflow-hidden w-full aspect-[4/3] sm:aspect-auto sm:h-[420px] lg:h-[520px]"
                style={{ boxShadow: "0 30px 80px rgba(30,118,184,0.18), 0 8px 20px rgba(0,0,0,0.08)" }}
              >
                <Image
                  src={Equipo}
                  alt="Equipo de consultores de D2F Consulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e4e]/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="hidden sm:flex absolute sm:bottom-6 sm:right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-blue-50 items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E76B8]/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#1E76B8]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Fundada en</p>
                  <p className="text-lg font-black text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>2015</p>
                </div>
              </motion.div>
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-1 rounded-full bg-[#DF1021]" />
              <span className="text-[#DF1021] font-bold text-xs uppercase tracking-widest">{t('about.badge')}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-[1.1]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span style={{ color: "#1E76B8" }}>{t('about.title')}</span>
            </h2>

            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              {t('about.description')}
            </p>

            {/* Points */}
            <div className="mb-10">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#1E76B8] inline-block rounded-full" />
                {t('about.whyChooseUs')}
              </h3>
              <ul className="space-y-4">
                {points.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#DF1021]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#DF1021]/20 transition-colors">
                      <CheckCircle2 size={14} className="text-[#DF1021]" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, idx) => {
                const labelMap = {
                  experience: t('about.stats.experience'),
                  clients: t('about.stats.clients'),
                  satisfied: t('about.stats.satisfied'),
                };
                const translatedStat = { ...stat, label: labelMap[stat.label as keyof typeof labelMap] ?? stat.label };
                return <StatCard key={idx} stat={translatedStat} inView={!!inView} index={idx} />;
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
