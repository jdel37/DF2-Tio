"use client";
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Ceo = '/images/tio.png';
const Gerente = '/images/amiga-tio.webp';

const Team = () => {
  const { t } = useTranslation();
  const team = [
    {
      name: t("team.members.0.name"),
      title: t("team.members.0.title"),
      bio: t("team.members.0.bio"),
      image: Ceo,
      badge: "+20 años",
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
      badge: "Estrategia",
      socials: {
        linkedin: "https://www.linkedin.com/in/alejandra-rivera-garc%C3%ADa-177266208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "https://mail.google.com/mail/?view=cm&fs=1&to=Ale_rivera612@hotmail.com",
      },
    },
  ];

  return (
    <section
      id="equipo"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-labelledby="equipo-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1E76B8]/4 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#DF1021]/4 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1E76B8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DF1021]" />
            <span className="text-[#DF1021] font-bold text-xs uppercase tracking-widest">Nuestro Talento</span>
            <div className="w-8 h-px bg-[#DF1021]" />
          </div>
          <h2
            id="equipo-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
            suppressHydrationWarning
          >
            {t("team.title")}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed" suppressHydrationWarning>
            {t("team.description")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group w-full sm:w-[340px] md:w-[360px]"
              aria-label={`Perfil profesional de ${member.name}`}
            >
              <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-400 hover:-translate-y-2"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(30,118,184,0.14)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"}
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#1E76B8] via-[#DF1021] to-[#1E76B8]" />

                {/* Photo — full width editorial */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-100 group">
                  <Image
                    src={member.image}
                    alt={`Fotografía profesional de ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    quality={80}
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#DF1021] text-white text-[10px] font-bold px-3 py-1.5 rounded-full border-2 border-white flex items-center gap-1.5">
                    <Award size={10} />
                    {member.badge}
                  </div>
                </div>

                <div className="p-7">
                  {/* Info */}
                  <div className="text-center">
                    <h3
                      className="text-xl sm:text-2xl font-black text-gray-900 mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[#1E76B8] font-bold text-xs uppercase tracking-wider mb-4">
                      {member.title}
                    </p>

                    <div className="w-10 h-0.5 bg-gradient-to-r from-[#1E76B8] to-[#DF1021] mx-auto mb-4 rounded-full" />

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Socials */}
                    <div className="flex justify-center gap-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-[#1E76B8] hover:bg-[#1E76B8] hover:text-white transition-all duration-300 font-semibold text-sm"
                          aria-label={`Perfil de LinkedIn de ${member.name}`}
                        >
                          <Linkedin size={16} />
                          LinkedIn
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-[#DF1021] hover:bg-[#DF1021] hover:text-white transition-all duration-300"
                          aria-label={`Enviar correo a ${member.name}`}
                        >
                          <Mail size={16} />
                        </a>
                      )}
                    </div>
                  </div>
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
