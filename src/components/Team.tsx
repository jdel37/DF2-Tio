import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Ceo from '../../public/images/1716174004243.jpg'
const Team = () => {
  const team = [
    {
      name: "Diego Forero",
      title: "Chief Executive Officer",
      bio: "Diego aporta más de 20 años de experiencia en liderazgo estratégico en múltiples industrias.",
      image: Ceo,
      socials: {
        linkedin: "https://www.linkedin.com/in/diego-fernando-forero/",
        twitter: "#",
        email: "mailto:alexandra@example.com"
      }
    },
    {
      name: "David Wilson",
      title: "Chief Strategy Officer",
      bio: "David specializes in developing innovative growth strategies and digital transformation initiatives.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:david@example.com"
      }
    },
    {
      name: "Sophia Chen",
      title: "Financial Advisory Lead",
      bio: "Sophia has advised Fortune 500 companies on complex financial strategies and risk management.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:sophia@example.com"
      }
    },
    {
      name: "Marcus Johnson",
      title: "Head of Organizational Development",
      bio: "Marcus helps organizations build resilient cultures and develop effective leadership capabilities.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:marcus@example.com"
      }
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">Nuestro Equipo de Liderazgo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conozca a nuestro equipo de consultores experimentados que se dedican a brindar resultados excepcionales para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full  transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E76B8]">{member.name}</h3>
                <p className="text-[#DF1021] font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.socials.linkedin} target='_blank'
                    className="text-gray-500 hover:text-[#1E76B8] transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
               
                  <a 
                    href={member.socials.email} 
                    className="text-gray-500 hover:text-[#DF1021] transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;