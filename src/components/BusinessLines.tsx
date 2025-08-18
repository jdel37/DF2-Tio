import React, { useState } from 'react';

import Gestion from '../../public/images/Strategic planing.jpg';
import Digital from '../../public/images/Equipo 2.jpg';
import Proyectos from '../../public/images/Project Management 45.jpg';
import Marketing from '../../public/images/Marketing Digital 9.jpg';
import Franquicias from '../../public/images/Franchise 8.jpg';
import Academia from '../../public/images/shutterstock_225208390.jpg';

import { 
  BarChart3, 
  Lightbulb, 
  LineChart, 
  Users, 
  Globe
} from 'lucide-react';

const BusinessLines = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const businessLines = [
    {
      id: 0,
      title: "Gestión Estratégica",
      icon: <BarChart3 size={24} className="text-[#DF1021]" />,
      image: Gestion,
      description: "Ayudamos a las organizaciones a desarrollar e implementar iniciativas estratégicas que impulsan el crecimiento sostenible y la ventaja competitiva. Nuestro enfoque combina un profundo conocimiento del los sectores con metodologías probadas para crear estrategias viables.",
      services: [
        "Desarrollo Corporativo Estratégico",
        "Entrada al Mercado & Expansión",
        "Análisis Competitivo",
        "Crecimiento & Estrategia de Innovación"
      ]
    },
    {
      id: 1,
      title: "Transformación Digital",
      icon: <Lightbulb size={24} className="text-[#DF1021]" />,
      image: Digital,
      description: "Nuestros servicios de transformación digital ayudan a las empresas a aprovechar las tecnologías emergentes para reimaginar sus operaciones, experiencias de cliente y modelos de negocio. Le guiamos en cada etapa de su transformación digital.",
      services: [
        "Estrategia Digital & Hoja de Ruta",
        "Automatización de Procesos",
        "Soluciones de Data Analytics",
        "Implementación de Tecnología"
      ]
    },
    {
      id: 2,
      title: "Gestión de Proyectos",
      icon: <LineChart size={24} className="text-[#DF1021]" />,
      image: Proyectos,
      description: "Ofrecemos servicios integrales de gestión de proyectos para optimizar resultados, controlar riesgos y garantizar la entrega eficiente. Nuestros expertos le apoyan en todas las fases para maximizar el éxito.",
      services: [
        "Planificación & Ejecución",
        "Gestión de Recursos",
        "Control de Riesgos",
        "Metodologías Ágiles & Tradicionales"
      ]
    },
    {
      id: 3,
      title: "Marketing y Comunicación",
      icon: <Globe size={24} className="text-[#DF1021]" />,
      image: Marketing,
      description: "Optimizamos operaciones de marketing y comunicación para fortalecer la marca, atraer clientes y generar experiencias memorables que potencian la lealtad.",
      services: [
        "Estrategia de Marketing",
        "Gestión de Marca",
        "Comunicación Digital",
        "Campañas Publicitarias"
      ]
    },
    {
      id: 4,
      title: "Desarrollo de Franquicias",
      icon: <Users size={24} className="text-[#DF1021]" />,
      image: Franquicias,
      description: "Guiamos a las empresas en la creación, expansión y consolidación de modelos de franquicia que garanticen escalabilidad y sostenibilidad.",
      services: [
        "Diseño del Modelo de Franquicia",
        "Expansión Nacional & Internacional",
        "Gestión de Franquiciados",
        "Estrategia de Crecimiento"
      ]
    },
    {
      id: 5,
      title: "Academia",
      icon: <BarChart3 size={24} className="text-[#DF1021]" />,
      image: Academia,
      description: "Capacitamos a líderes y equipos a través de programas de formación práctica y estratégica, orientados a fortalecer habilidades críticas para el éxito empresarial.",
      services: [
        "Formación en Estrategia",
        "Liderazgo Empresarial",
        "Innovación y Creatividad",
        "Cursos Personalizados"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
            Nuestras Líneas de Negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proveemos consultoría integral a través de nuestras líneas de negocio especializadas, cada una diseñada para superar desafíos específicos y crear valor sostenible.
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {businessLines.map((line) => (
            <button
              key={line.id}
              onClick={() => setActiveTab(line.id)}
              className={`px-4 py-3 rounded-md transition-all duration-300 flex items-center gap-2 
                ${activeTab === line.id 
                  ? 'bg-[#1E76B8] text-white shadow-md' 
                  : 'bg-white text-[#1E76B8] hover:bg-gray-100'
                }`}
            >
              {line.icon}
              <span className="hidden md:inline font-medium">{line.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500">
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center md:flex-row gap-5">
              
              {/* Imagen circular perfecta */}
             <div className="flex-shrink-0 w-40 h-40 rounded-full shadow-[7px_11px_28px_6px_rgba(0,_0,_0,_0.1)] overflow-hidden flex items-center justify-center">
  <img
    src={businessLines[activeTab].image}
    alt=""
    className="w-full h-full object-cover "
  />
</div>


              {/* Info */}
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#1E76B8] mb-4 flex items-center gap-2">
                  {businessLines[activeTab].icon}
                  {businessLines[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {businessLines[activeTab].description}
                </p>
                <button className="text-[#DF1021] hover:bg-[#DF1021] hover:text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 shadow-[7px_11px_28px_6px_rgba(0,_0,_0,_0.1)]">
                  Learn More
                </button>
              </div>

              {/* Services */}
              <div className="md:w-2/3 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg text-[#1E76B8] mb-4">
                  Nuestros Servicios
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {businessLines[activeTab].services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white py-4 px-2 rounded-md shadow-sm border-l-4 border-[#DF1021]"
                    >
                      <p className="font-medium text-gray-800">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;
