"use client";
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Ceo = '/images/tio.webp';
const Gerente = '/images/amiga-tio.webp';

const Team = () => {
  const { t } = useTranslation();
  const team = [
    {
      name: t("team.members.0.name"),
      title: t("team.members.0.title"),
      bio: t("team.members.0.bio"),
      image: Ceo,
      socials: {
        linkedin: "https://www.linkedin.com/in/diego-fernando-forero/",
        email: "https://mail.google.com/mail/?view=cm&fs=1&to=diegoforerotrivino@gmail.com",
      },
    },
    {
      name: t("team.members.1.name"),
      title: t("team.members.1.title"),
      bio: t("team.members.1.bio"),
      image: Gerente,
      socials: {
        linkedin: "https://www.linkedin.com/in/alejandra-rivera-garc%C3%ADa-177266208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "https://mail.google.com/mail/?view=cm&fs=1&to=Ale_rivera612@hotmail.com",
      },
    },
  ];

  return (
    <section
      id="equipo"
      className="relative flex flex-col items-center justify-center py-12 sm:py-16 bg-white"
      aria-labelledby="equipo-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#DF1021] font-medium text-sm tracking-[0.2em] uppercase">Nuestro Talento</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }} suppressHydrationWarning>
            {t("team.title")}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto" suppressHydrationWarning>
            {t("team.description")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 w-full max-w-5xl mx-auto mt-8 sm:mt-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group w-full sm:w-[340px] md:w-[380px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(30,118,184,0.12)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              aria-label={`Perfil profesional de ${member.name}`}
            >
              <div className="flex flex-col flex-1 p-6 sm:p-8 w-full">
                
                {/* Photo Section (In-flow Minimalist Avatar NO overlaps) */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden bg-gray-50 mb-6 relative border-4 border-gray-50 group-hover:border-[#1E76B8]/20 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={`Fotografía profesional de ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-[#DF1021] font-medium text-xs sm:text-sm uppercase tracking-widest mb-5">
                  {member.title}
                </p>

                <div className="w-10 h-0.5 bg-gray-200 mx-auto mb-5" />

                <p className="text-gray-600 text-sm leading-relaxed mb-auto pb-6">
                  {member.bio}
                </p>

                {/* Clean inline socials */}
                <div className="flex items-center justify-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-blue-50 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300"
                      aria-label={`Perfil de LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={member.socials.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-red-50 text-[#DF1021] hover:bg-[#DF1021] hover:text-white transition-all duration-300"
                      aria-label={`Enviar correo electrónico a ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
