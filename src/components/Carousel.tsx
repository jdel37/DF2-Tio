"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/academy-4.webp",
  "/images/academy-77.webp",
  "/images/equipo-10.webp",
  "/images/equipo-2.webp",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -1000 || offset.x < -40) {
              setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (swipe > 1000 || offset.x > 40) {
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
          }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 8, ease: "easeOut" }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <Image
            src={images[currentIndex]}
            alt={`D2F Consulting - Slide ${currentIndex + 1}`}
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            quality={80}
            className="object-cover pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots removed as requested */}
    </div>
  );
}

export default Carousel;