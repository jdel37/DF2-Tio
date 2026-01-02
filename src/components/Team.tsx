"use client";
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
      className="bg-gray-50 flex flex-col items-center justify-center min-h-screen px-6 py-10"
      aria-labelledby="equipo-title"
    >
      {/* Título SEO */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4 text-center" suppressHydrationWarning>
          {t("team.title")}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12" suppressHydrationWarning>
          {t("team.description")}
        </p>
      </div>

      {/* Contenedor principal */}
      <div
        className="
          flex 
          flex-wrap 
          justify-center 
          items-center 
          gap-10 
          w-full 
          max-w-6xl
        "
      >
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-center w-full max-w-xs"
            aria-label={`Perfil profesional de ${member.name}`}
          >
            {/* Imagen */}
            <div className="flex justify-center mt-6">
              <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-[#1E76B8]">
                <img
                  src={member.image}
                  alt={`Fotografía profesional de ${member.name}, ${member.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Información */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1E76B8]">{member.name}</h3>
              <p className="text-[#DF1021] font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

              {/* Redes sociales */}
              <div className="flex justify-center space-x-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#1E76B8] transition-colors"
                    aria-label={`Perfil de LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={member.socials.email}
                    className="text-gray-500 hover:text-[#DF1021] transition-colors"
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
    </section>
  );
};

export default Team;
