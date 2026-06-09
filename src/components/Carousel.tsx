"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/academy-4.webp", alt: "D2F Consulting - Sesión de academia y formación empresarial" },
  { src: "/images/academy-77.webp", alt: "D2F Consulting - Capacitación estratégica empresarial" },
  { src: "/images/equipo-10.webp", alt: "D2F Consulting - Equipo de consultores trabajando" },
  { src: "/images/equipo-2.webp", alt: "D2F Consulting - Reunión de equipo consultor" },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const isFirst = currentIndex === 0;

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -1000 || offset.x < -40) {
              setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (swipe > 1000 || offset.x > 40) {
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 7, ease: "easeOut" },
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            sizes="100vw"
            priority={isFirst}
            loading={isFirst ? "eager" : "lazy"}
            quality={75}
            className="object-cover pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
