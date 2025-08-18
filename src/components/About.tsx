import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '20+', label: 'Años de Experiencia' },
    { value: '25+', label: 'Clientes en Colombia' },
    { value: '100%', label: 'Clientes Satisfechos' },
    { value: '35+', label: 'Asociados de las Industrias' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/public/images/Equipo 1.jpg" 
                alt="Team of consultants in a meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#DF1021] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E76B8] rounded-lg -z-10"></div>
          </div>
          
          {/* Content column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-6">
              Impulsando la excelencia empresarial desde 2015
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              D2F Consulting es una firma de consultoría de gestión dedicada a ayudar a las organizaciones a lograr un crecimiento sostenible y la excelencia operativa. Combinamos un profundo conocimiento del los sectores, experiencia funcional y un enfoque centrado en el cliente para ofrecer resultados excepcionales.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1E76B8] mb-4">¿Por que Escogernos?</h3>
              <ul className="space-y-3">
                {[
                  "Experiencia  en la industria en diversos sectores",
                  "Soluciones a la medida que abordan sus desafíos únicos",
                  "Metodologías probadas con resultados tangibles",
                  "Un integrador de servicios y adaptado a sus necesidades"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-[#DF1021] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-[#DF1021]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;