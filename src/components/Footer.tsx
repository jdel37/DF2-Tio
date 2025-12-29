"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const logo = "/images/logo-03-300 dpi.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1E76B8] text-white pt-10 pb-6">
      <div className="container mx-auto px-6">

        <div className="
          flex flex-col 
          md:flex-row md:items-center md:justify-between
          gap-6
        ">

          {/* LOGO + TEXTO */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-left">
            {/* LOGO */}
            <Image
              src={logo}
              alt="D2F Consulting - Consultoría Empresarial Colombia"
              width={120}
              height={45}
              className="w-32 h-auto mx-auto md:mx-0"
              style={{ width: 'auto' }}
            />

            {/* TEXTO BREVE */}
            <p className="text-white/80 text-sm max-w-md" suppressHydrationWarning>
              {t("footer.text")}
            </p>
          </div>

          {/* COPYRIGHT */}
          <p className="text-white/60 text-sm" suppressHydrationWarning>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
