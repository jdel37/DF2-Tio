"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const logo = "/images/logo-03-300-dpi.webp";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const NAV_ITEMS = [
    { label: t("navbar.inicio"), id: "inicio" },
    { label: t("navbar.servicios"), id: "servicios" },
    { label: t("navbar.conocenos"), id: "conócenos" },
    { label: t("navbar.testimonios"), id: "testimonios" },
    { label: t("navbar.equipo"), id: "equipo" },
    { label: "Blog", id: "blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = ["inicio", "conócenos", "servicios", "equipo", "testimonios", "contacto"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setIsOpen(false);
    
    // Allow React/Framer UI unmount to settle before processing native scroll
    setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      
      target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, []);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-900/10 border-b border-blue-100/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">

        {/* LOGO */}
        <button onClick={() => scrollToSection("inicio")} className="flex-shrink-0 group">
          <Image
            src={logo}
            alt="D2F Consulting"
            width={160}
            height={60}
            priority
            sizes="(max-width: 640px) 100px, (max-width: 768px) 130px, 160px"
            className={`h-auto transition-all duration-300 ${
              scrolled ? "w-[110px] sm:w-[130px] md:w-[150px]" : "w-[110px] sm:w-[130px] md:w-[160px]"
            }`}
          />
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-1 lg:gap-2 items-center">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-3 lg:px-4 py-2 font-semibold text-sm lg:text-base transition-colors duration-200 rounded-lg group ${
                    scrolled
                      ? isActive
                        ? "text-[#1E76B8]"
                        : "text-gray-700 hover:text-[#1E76B8]"
                      : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                  suppressHydrationWarning
                >
                  {label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#DF1021] rounded-full transition-all duration-300 ${
                      isActive ? "w-3/5" : "w-0 group-hover:w-3/5"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA BUTTON */}
        <button
          onClick={() => scrollToSection("contacto")}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 ml-2"
          style={{
            background: "linear-gradient(135deg, #DF1021, #b80d1a)",
            boxShadow: "0 4px 16px rgba(223, 16, 33, 0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(223,16,33,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(223,16,33,0.35)";
          }}
          suppressHydrationWarning
        >
          {t("navbar.contacto")}
        </button>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1E76B8] hover:bg-blue-50" : "text-white hover:bg-white/10"
          }`}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[-1]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-blue-100"
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {NAV_ITEMS.map(({ label, id }, idx) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left py-3 px-3 rounded-lg font-semibold transition-colors text-base ${
                        activeSection === id
                          ? "text-[#1E76B8] bg-blue-50"
                          : "text-gray-700 hover:text-[#1E76B8] hover:bg-gray-50"
                      }`}
                      suppressHydrationWarning
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.06 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="w-full py-3 px-4 rounded-full font-semibold text-white text-center"
                    style={{ background: "linear-gradient(135deg, #DF1021, #b80d1a)" }}
                    suppressHydrationWarning
                  >
                    {t("navbar.contacto")}
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
