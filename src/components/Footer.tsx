"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

const logo = "/images/logo-03-300-dpi.webp";

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: t("navbar.inicio"), id: "inicio" },
    { label: t("navbar.servicios"), id: "servicios" },
    { label: t("navbar.conocenos"), id: "conócenos" },
    { label: t("navbar.testimonios"), id: "testimonios" },
    { label: t("navbar.equipo"), id: "equipo" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/d2f_consulting_agency/", label: "Instagram" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/10602504/", label: "LinkedIn" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/D2FConsultingAgency", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#10497a] text-white pt-20 pb-8 relative overflow-hidden z-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E76B8]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DF1021]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-white p-4 rounded-xl mb-6 inline-block shadow-lg">
              <Image
                src={logo}
                alt="D2F Consulting - Consultoría Empresarial Colombia"
                width={160}
                height={60}
                className="w-36 h-auto"
                style={{ width: 'auto' }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm" suppressHydrationWarning>
              {t("footer.text")}
            </p>
            
            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.link} aria-label={social.label} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#1E76B8] hover:text-white hover:border-[#1E76B8] hover:-translate-y-1 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Explorar</h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.id}`} onClick={(e) => scrollToSection(link.id, e)}
                     className="group flex items-center gap-2 text-white/70 hover:text-[#DF1021] transition-colors text-sm">
                    <ChevronRight size={14} className="text-[#DF1021] opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    <span suppressHydrationWarning>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-[#DF1021] shrink-0 mt-0.5" />
                <span>
                  <strong>Sedes:</strong><br/>
                  We Work Bogotá<br/>
                  We Work Medellín
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-[#DF1021] shrink-0" />
                <a href="mailto:d2fgestion@gmail.com" className="hover:text-white transition-colors">d2fgestion@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-[#DF1021] shrink-0" />
                <a href="tel:+573132646394" className="hover:text-white transition-colors">+57 313 264 6394</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} D2F Consulting Agency. Todos los derechos reservados.
          </p>
          <p>
            Diseñado con <span className="text-[#DF1021]">&hearts;</span> en Colombia
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
