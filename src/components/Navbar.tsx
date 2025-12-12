import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, animate } from "framer-motion";
import logo from "/public/images/logo-03-300 dpi.png";

const NAV_ITEMS = [
  { label: "Inicio", id: "inicio" },
  { label: "Servicios", id: "servicios" },
  { label: "Conócenos", id: "conócenos" },
  { label: "Testimonios", id: "testimonios" },
  { label: "Equipo", id: "equipo" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Comportamiento del scroll
  useEffect(() => {
    if (isMobile) {
      setScrolled(true); // En móvil siempre blanco
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    const navbar = document.getElementById("navbar");

    if (target) {
      const navbarHeight = navbar?.offsetHeight || 0;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      animate(window.scrollY, targetY, {
        duration: 0.7,
        ease: "easeInOut",
        onUpdate: (y) => window.scrollTo(0, y),
      });

      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed w-full z-50 transition-all duration-500 
        ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}
        ${isMobile ? "bg-white shadow-md py-2" : ""}
      `}
    >
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center">

        {/* LOGO */}
        <button onClick={() => scrollToSection("inicio")}>
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-40 transition-all"
          />
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-10 items-center">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-sm font-semibold tracking-wide transition-colors 
                  ${
                    scrolled
                      ? "text-[#1E76B8] hover:text-[#DF1021]"
                      : "text-white hover:text-[#DF1021]"
                  }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors text-[#1E76B8]`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white pb-4 shadow-lg"
        >
          <ul className="flex flex-col container mx-auto px-6 space-y-3 py-3">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="block text-lg font-semibold text-[#1E76B8] hover:text-[#DF1021] py-2"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
