"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Academy4 = "/images/academy-4.webp";
const Academy77 = "/images/academy-77.webp";
const Equipo10 = "/images/equipo-10.webp";

const Equipo2 = "/images/equipo-2.webp";

const images = [
  Academy4,
  Academy77,
  Equipo10,

  Equipo2
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`D2F Consulting - Slide ${currentIndex + 1}`}
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            quality={75}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay - Optional dark gradient for text visibility if needed, 
          but Hero.tsx already has one. Keeping it clean here. 
      */}

      {/* Navigation Arrows */}

    </div>
  );
}

export default Carousel;