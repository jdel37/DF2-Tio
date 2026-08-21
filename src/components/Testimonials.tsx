"use client";
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const AUTO_PLAY_INTERVAL = 6000;

export default function Testimonials() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: t("testimonials.list.0.quote"),
      author: t("testimonials.list.0.author"),
      title: t("testimonials.list.0.title"),
      stars: 5,
      initials: "JG",
    },
    {
      id: 2,
      quote: t("testimonials.list.1.quote"),
      author: t("testimonials.list.1.author"),
      title: t("testimonials.list.1.title"),
      stars: 5,
      initials: "YR",
    },
    {
      id: 3,
      quote: t("testimonials.list.2.quote"),
      author: t("testimonials.list.2.author"),
      title: t("testimonials.list.2.title"),
      stars: 5,
      initials: "VG",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(nextTestimonial, AUTO_PLAY_INTERVAL);
      const tickRate = 50;
      const step = (tickRate / AUTO_PLAY_INTERVAL) * 100;
      progressInterval = setInterval(() => {
        setProgress((p) => Math.min(p + step, 100));
      }, tickRate);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [activeIndex, isPaused, nextTestimonial]);

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonios"
      className="relative py-16 sm:py-24 overflow-hidden"
      aria-label="Testimonios de clientes"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a2e4e] via-[#10497a] to-[#1E76B8]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E76B8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DF1021]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0" />

      <div className="container relative mx-auto px-4 md:px-6 z-10 w-full max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/60 font-semibold text-xs tracking-[0.25em] uppercase">Experiencias</span>
            <div className="w-8 h-px bg-white/30" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
            suppressHydrationWarning
          >
            {t("testimonials.title")}
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto" suppressHydrationWarning>
            {t("testimonials.description")}
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 text-center"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)" }}
            >
              {/* Large decorative quote */}
              <div
                className="absolute top-6 left-8 text-8xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.06)", fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: current.stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed italic mb-8 relative z-10"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                "{current.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg border-2 border-white/20"
                  style={{ background: "linear-gradient(135deg, #DF1021, #b80d1a)", fontFamily: "Poppins, sans-serif" }}
                >
                  {current.initials}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {current.author}
                  </h3>
                  <p className="text-[#DF1021] font-medium text-xs sm:text-sm uppercase tracking-wider mt-1">
                    {current.title}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden rounded-b-3xl">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#DF1021] to-[#ff3b4b]"
                  style={{ width: `${progress}%` }}
                  initial={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveIndex(idx); setProgress(0); }}
                  className={`relative rounded-full transition-all duration-500 overflow-hidden ${idx === activeIndex ? "w-8 h-2.5 bg-[#DF1021]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"}`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
