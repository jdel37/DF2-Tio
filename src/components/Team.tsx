import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Ceo from '../../public/images/1716174004243.jpg';
import Gerente from '../../public/images/amiga-tio.jpg';

const Team = () => {
  const team = [
    {
      name: "Diego Forero",
      title: "Chief Executive Officer",
      bio: "Diego aporta más de 20 años de experiencia en liderazgo estratégico en múltiples industrias.",
      image: Ceo,
      socials: {
        linkedin: "https://www.linkedin.com/in/diego-fernando-forero/",
        email: "mailto:alexandra@example.com",
      },
    },
    {
      name: "Alejandra Rivera",
      title: "Chief Strategy Officer",
      bio: "Alejandra es experta en el analisi de datos e inteligencia de negocios.",
      image: Gerente,
      socials: {
        linkedin: "#",
        email: "mailto:david@example.com",
      },
    },
  ];

  return (
    <section
      id="equipo"
      className="bg-gray-50 flex flex-col items-center justify-center min-h-screen px-6 py-10"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
          Nuestro Equipo de Liderazgo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conozca a nuestro equipo de consultores experimentados que se dedican a brindar resultados excepcionales para nuestros clientes.
        </p>
      </div>

      {/* Contenedor principal centrado */}
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
          <div
            key={idx}
            className="
              bg-white 
              rounded-2xl 
              overflow-hidden 
              shadow-lg 
              transition-transform 
              duration-300 
              hover:-translate-y-2 
              flex 
              flex-col 
              items-center 
              text-center 
              w-80
            "
          >
            {/* Imagen circular */}
            <div className="flex justify-center mt-6">
              <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-[#1E76B8]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={member.socials.email}
                    className="text-gray-500 hover:text-[#DF1021] transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
