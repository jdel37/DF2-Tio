"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t("navbar.inicio"), id: "inicio" },
    { label: t("navbar.servicios"), id: "servicios" },
    { label: t("navbar.conocenos"), id: "conócenos" },
    { label: t("navbar.testimonios"), id: "testimonios" },
    { label: t("navbar.equipo"), id: "equipo" },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, link: "https://www.instagram.com/d2f_consulting_agency/", label: "Instagram" },
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/10602504/", label: "LinkedIn" },
    { icon: <Facebook size={18} />, link: "https://www.facebook.com/D2FConsultingAgency", label: "Facebook" },
  ];

  return (
    <footer className="relative overflow-hidden z-0 text-white" style={{ background: "linear-gradient(160deg, #071d30 0%, #0a2e4e 40%, #10497a 100%)" }}>

      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#DF1021] to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E76B8]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DF1021]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-14 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-5 flex items-center gap-2">
              <Image
                src="/images/logo-03-300-dpi.webp"
                alt="D2F Consulting"
                width={160}
                height={56}
                className="w-[130px] sm:w-[150px] h-auto"
                style={{ minHeight: "40px" }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-xs" suppressHydrationWarning>
              {t("footer.text")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#DF1021] hover:text-white hover:border-[#DF1021] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4
              className="text-sm font-black mb-6 text-white uppercase tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explorar
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    <ChevronRight size={13} className="text-[#DF1021] opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    <span suppressHydrationWarning>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  <ChevronRight size={13} className="text-[#DF1021] opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-4 lg:col-start-10">
            <h4
              className="text-sm font-black mb-6 text-white uppercase tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#DF1021] shrink-0 mt-0.5" />
                <span>Atención global · modalidad remota</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-[#DF1021] shrink-0" />
                <a href="mailto:d2fgestion@gmail.com" className="hover:text-white transition-colors">
                  d2fgestion@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-[#DF1021] shrink-0" />
                <a href="tel:+573102353201" className="hover:text-white transition-colors">
                  +57 310 2353201
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} D2F Consulting Agency · Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con <span className="text-[#DF1021] text-base">&hearts;</span> para crecer sin fronteras
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
