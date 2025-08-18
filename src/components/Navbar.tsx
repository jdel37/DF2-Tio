import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, animate } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 Scroll con animación personalizada y offset para el navbar
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById("navbar");

    if (section) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetY =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      const startY = window.scrollY;

      animate(startY, targetY, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });

      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-1 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <img
                className="w-32 md:w-44 sm:w-24 max-w-full h-auto"
                src="/public/images/logo-03-300 dpi.png"
                alt="logo"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              "Inicio",
              "Servicios",
              "About",
              "Testimonios",
              "Equipo",
              "Contactanos",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-[#DF1021] transition-colors ${
                  scrolled ? "text-[#1E76B8]" : "text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-[#1E76B8]" : "text-white"
              } focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              "Inicio",
              "Servicios",
              "About",
              "Testimonios",
              "Equipo",
              "Contactanos",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#1E76B8] hover:text-[#DF1021] transition-colors py-2 px-4 text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
