"use client";
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
      title: t("testimonials.list.0.title")
    },
    {
      id: 2,
      quote: t("testimonials.list.1.quote"),
      author: t("testimonials.list.1.author"),
      title: t("testimonials.list.1.title"),
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 3,
      quote: t("testimonials.list.2.quote"),
      author: t("testimonials.list.2.author"),
      title: t("testimonials.list.2.title"),
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    }
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
      
      // Update progress bar
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

  return (
    <section
      id="testimonios"
      className="relative py-10 sm:py-14 overflow-hidden flex items-center justify-center min-h-[380px]"
      aria-label="Testimonios de clientes"
    >
      {/* Clean corporate minimalist background (Brand Colors) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#10497a] via-[#155a94] to-[#1E76B8]" />
      
      {/* Decorative clean shapes (optional but keeps it premium without photos) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E76B8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DF1021]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0" />

      <div className="container relative mx-auto px-4 md:px-6 z-10 w-full max-w-6xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-white/70 font-medium text-xs tracking-[0.2em] uppercase">Experiencias</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white" suppressHydrationWarning style={{ fontFamily: "Poppins, sans-serif" }}>
              {t("testimonials.title")}
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto" suppressHydrationWarning>
              {t("testimonials.description")}
            </p>
          </motion.div>
        </div>

        <div 
          className="max-w-4xl mx-auto px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card (Glassmorphism) */}
          <div className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <Quote
              size={60}
              className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 md:text-[80px] text-white/10 rotate-180 pointer-events-none"
              aria-hidden="true"
            />
            <Quote
              size={60}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:text-[80px] text-white/10 pointer-events-none"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-6 sm:mb-8 text-base sm:text-lg md:text-2xl text-white font-light leading-relaxed tracking-wide italic" style={{ fontFamily: "ui-serif, Georgia, serif" }}>
                  "{testimonials[activeIndex].quote}"
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {testimonials[activeIndex].author}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#DF1021] rounded-full my-1" />
                  <p className="text-[#DF1021] font-medium text-xs sm:text-sm uppercase tracking-wider text-center">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar (Visual Timer) */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 overflow-hidden rounded-b-3xl">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#DF1021] to-[#ff3b4b]"
                style={{ width: `${progress}%` }}
                initial={false}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-10 gap-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots array */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setProgress(0);
                  }}
                  className={`relative rounded-full transition-all duration-500 overflow-hidden ${
                    idx === activeIndex ? "w-10 h-2.5" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                >
                  {idx === activeIndex && (
                    <div className="absolute inset-0 bg-[#DF1021]" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
