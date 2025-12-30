"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, animate } from "framer-motion";
import { useTranslation } from "react-i18next";

const logo = "/images/logo-03-300-dpi.webp"; // 🔥 conviértelo a webp

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: t("navbar.inicio"), id: "inicio" },
    { label: t("navbar.servicios"), id: "servicios" },
    { label: t("navbar.conocenos"), id: "conócenos" },
    { label: t("navbar.testimonios"), id: "testimonios" },
    { label: t("navbar.equipo"), id: "equipo" },
    { label: t("navbar.contacto"), id: "contacto" },
  ];

  // Scroll solo para desktop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    const navbar = document.getElementById("navbar");

    if (!target) return;

    const offset = navbar?.offsetHeight || 0;
    const y =
      target.getBoundingClientRect().top + window.scrollY - offset;

    animate(window.scrollY, y, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate: (v) => window.scrollTo(0, v),
    });

    setIsOpen(false);
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 w-full z-50 transition-all
        ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}
       
      `}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">

        {/* LOGO */}
        <button onClick={() => scrollToSection("inicio")}>
          <Image
            src={logo}
            alt="D2F Consulting"
            width={160}
            height={60}
            priority
            sizes="(max-width: 768px) 120px, 160px"
            className="h-auto w-[120px] md:w-[160px]"
          />
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  text-sm font-semibold transition-colors
                  ${scrolled
                    ? "text-[#1E76B8] hover:text-[#DF1021]"
                    : "text-white hover:text-[#DF1021]"
                  }
                `}
                suppressHydrationWarning
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1E76B8]"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col gap-3 px-6 py-4">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-lg font-semibold text-[#1E76B8] hover:text-[#DF1021]"
                  suppressHydrationWarning
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
