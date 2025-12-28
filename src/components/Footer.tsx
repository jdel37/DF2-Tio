const logo = "/images/logo-03-300 dpi.png";
import { useTranslation } from "react-i18next";

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
            <img
              src={logo}

              alt="D2F Consulting Logo"
              className="w-40 md:w-44 mx-auto md:mx-0"
            />

            {/* TEXTO BREVE */}
            <p className="text-white/80 max-w-md leading-relaxed mt-4 md:mt-0">
              {t("footer.text")}
            </p>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/70 text-center md:text-right">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
