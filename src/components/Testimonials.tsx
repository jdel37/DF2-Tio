import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "StratEdge's strategic management consulting transformed our approach to growth. Their insights helped us enter new markets with confidence.",
      author: "Sarah Johnson",
      title: "CEO, TechDynamics Inc.",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      quote: "The digital transformation roadmap developed by StratEdge revolutionized our operations. We've seen a 40% increase in efficiency.",
      author: "Michael Chen",
      title: "CTO, Global Innovations",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      quote: "Their financial advisory team provided the clarity we needed during our acquisition. The insights were invaluable to our success.",
      author: "Emily Rodriguez",
      title: "CFO, Meridian Solutions",
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-r from-[#1E76B8] to-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We take pride in our clients' success stories and the positive impact our consulting services have made.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 relative">
            <Quote size={48} className="text-red-500/30 absolute top-4 left-4" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg md:text-xl italic mb-6 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-xl">{testimonials[activeIndex].author}</p>
                  <p className="text-white/70">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-[#DF1021] w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
              aria-label="Next testimonial"
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