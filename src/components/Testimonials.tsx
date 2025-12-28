import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
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
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      quote: t("testimonials.list.2.quote"),
      author: t("testimonials.list.2.author"),
      title: t("testimonials.list.2.title"),
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-r from-[#1E76B8] to-blue-500 text-white"
      aria-label="Testimonios de clientes"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 relative">
            <Quote
              size={48}
              className="text-red-500/30 absolute top-4 left-4"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8 items-center">
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg md:text-xl italic mb-6 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div>
                  <p className="font-semibold text-xl">
                    {testimonials[activeIndex].author}
                  </p>

                  <p className="text-white/70">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4" role="tablist">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-[#DF1021] w-6" : "bg-white/50"
                    }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
