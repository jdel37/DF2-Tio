import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: "Global Tech Solutions",
      logo: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Technology"
    },
    {
      name: "Meridian Finance",
      logo: "https://images.pexels.com/photos/2312372/pexels-photo-2312372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Financial Services"
    },
    {
      name: "EcoSmart Industries",
      logo: "https://images.pexels.com/photos/2312371/pexels-photo-2312371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Manufacturing"
    },
    {
      name: "HealthCare Plus",
      logo: "https://images.pexels.com/photos/2312370/pexels-photo-2312370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Healthcare"
    },
    {
      name: "Retail Dynamics",
      logo: "https://images.pexels.com/photos/2312368/pexels-photo-2312368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Retail"
    },
    {
      name: "Energy Innovations",
      logo: "https://images.pexels.com/photos/2312367/pexels-photo-2312367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      industry: "Energy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">Quienes han Confiado en Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Hemos ayudado a transformar empresas en diversos sectores, brindando resultados excepcionales y asociaciones duraderas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E76B8]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="text-center text-white">
                    <p className="font-medium text-sm">{client.name}</p>
                    <p className="text-xs text-white/80">{client.industry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#DF1021] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;