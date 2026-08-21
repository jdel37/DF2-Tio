// Blog content — server-only data source. SSR/SSG, no client deps.
// Each post = one indexable page targeting a keyword cluster.

export type Block =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'cta'; text: string };

export type SupportedLocale = 'es' | 'en';

export type PostTranslation = Partial<Pick<Post, 'title' | 'description' | 'keywords' | 'excerpt' | 'body'>>;

export interface Post {
    slug: string;
    title: string; // H1 + SEO title
    description: string; // meta description (~150 chars)
    keywords: string[];
    datePublished: string; // ISO
    dateModified: string; // ISO
    image: string; // hero, relative to /public
    imageAlt: string;
    readingTime: string;
    excerpt: string;
    body: Block[];
    translations?: {
        en?: PostTranslation;
    };
}

export const posts: Post[] = [
    {
        slug: 'consultoria-empresarial-global',
        title: 'Consultoría empresarial global: qué es, beneficios y cómo elegir la firma correcta',
        description:
            'Guía completa de consultoría empresarial internacional: qué hace una consultora, beneficios reales y cómo elegir la firma adecuada para tu empresa.',
        keywords: [
            'consultoría empresarial global',
            'consultora empresarial internacional',
            'cómo elegir consultoría empresarial',
            'gestión estratégica internacional',
        ],
        datePublished: '2026-06-17',
        dateModified: '2026-06-17',
        image: '/images/strategic-planing.webp',
        imageAlt: 'Consultores de D2F en sesión de planeación estratégica empresarial global',
        readingTime: '7 min',
        excerpt:
            'Qué es la consultoría empresarial, por qué las organizaciones la contratan y los criterios clave para elegir una firma que entregue resultados medibles.',
        body: [
            { type: 'p', text: 'La consultoría empresarial ya no es solo para grandes corporaciones. Hoy, pymes, startups y multinacionales recurren a consultores externos para resolver problemas que el equipo interno no puede ver con la misma distancia: definir una estrategia de crecimiento, profesionalizar procesos, entrar a nuevos mercados o ejecutar una transformación digital. En esta guía explicamos qué hace una consultora, qué beneficios entrega y cómo elegir la firma adecuada.' },

            { type: 'h2', text: '¿Qué es la consultoría empresarial?' },
            { type: 'p', text: 'La consultoría empresarial es un servicio profesional en el que expertos externos analizan la organización, identifican oportunidades y riesgos, y diseñan soluciones para mejorar su desempeño. No reemplaza al equipo interno; aporta una mirada distinta, experiencia en distintos negocios y metodologías que ayudan a actuar con más rapidez.' },
            { type: 'p', text: 'D2F Consulting acompaña a empresas en seis frentes habituales: gestión estratégica, transformación digital, gestión de proyectos, marketing y comunicación, desarrollo de franquicias y formación de equipos.' },

            { type: 'h2', text: 'Beneficios de contratar una consultoría empresarial' },
            { type: 'ul', items: [
                'Visión externa y objetiva: el consultor ve los puntos ciegos que el equipo interno normaliza.',
                'Conocimiento del mercado y la operación: la consultora entiende el entorno, la competencia y los retos clave del negocio.',
                'Velocidad: aplicar metodologías ya validadas evita meses de prueba y error.',
                'Resultados medibles: una buena firma define indicadores (KPIs) y responde por ellos.',
                'Transferencia de conocimiento: el equipo interno aprende y queda más capaz tras el proyecto.',
            ] },

            { type: 'h2', text: '¿Cuándo conviene contratar una consultora?' },
            { type: 'p', text: 'Hay señales claras: las ventas se estancan y no sabes por qué, los procesos dependen de personas y no de sistemas, quieres expandirte a un nuevo mercado sin plan claro, la tecnología ya no responde a la operación o el equipo trabaja mucho pero los resultados no aparecen. En esos casos, una consultoría empresarial ayuda a acortar el camino.' },

            { type: 'h2', text: 'Cómo elegir la firma de consultoría correcta' },
            { type: 'h3', text: '1. Experiencia comprobable' },
            { type: 'p', text: 'Pide casos reales y resultados concretos. Una firma seria muestra clientes, sectores y los cambios que logró. D2F tiene más de 20 años de experiencia y ha trabajado con más de 25 organizaciones en distintos mercados.' },
            { type: 'h3', text: '2. Conocimiento del mercado y del entorno' },
            { type: 'p', text: 'La teoría global no basta. Elige consultores que entiendan la realidad del negocio: regulación, competencia, talento y dinámica del mercado en el que operas.' },
            { type: 'h3', text: '3. Metodología y entregables claros' },
            { type: 'p', text: 'Antes de firmar, pide saber qué metodología usarán, qué entregables recibirás y con qué indicadores medirán el éxito. Si no pueden explicarlo con claridad, es una señal de alerta.' },
            { type: 'h3', text: '4. Acompañamiento en la implementación' },
            { type: 'p', text: 'Una estrategia en PDF no cambia nada. La mejor consultoría no se queda en recomendaciones: acompaña la ejecución hasta que los resultados aparecen.' },

            { type: 'h2', text: 'Conclusión' },
            { type: 'p', text: 'La consultoría empresarial puede ser una buena inversión cuando se elige bien. Busca experiencia real, conocimiento del entorno, metodología clara y acompañamiento en la implementación. Si tu empresa está lista para crecer con estrategia y resultados medibles, una firma especializada puede marcar la diferencia.' },
            { type: 'cta', text: '¿Quieres una consultoría empresarial con resultados medibles? Agenda una consulta inicial gratuita con D2F Consulting.' },
        ],
    },
    {
        slug: 'transformacion-digital-pymes-global',
        title: 'Transformación digital para pymes: guía práctica 2026',
        description:
            'Cómo abordar la transformación digital en una pyme: por dónde empezar, errores comunes y pasos para digitalizar procesos con resultados.',
        keywords: [
            'transformación digital pymes',
            'digitalización de procesos empresas',
            'transformación digital empresarial',
            'tecnología para pymes',
        ],
        datePublished: '2026-06-17',
        dateModified: '2026-06-17',
        image: '/images/marketing-digital-9.webp',
        imageAlt: 'Equipo aplicando transformación digital y automatización en una pyme',
        readingTime: '8 min',
        excerpt:
            'Transformación digital sin tecnicismos: por dónde empezar, qué automatizar primero y cómo evitar los errores que hacen fracasar la digitalización en pymes.',
        body: [
            { type: 'p', text: 'La transformación digital es la prioridad declarada de la mayoría de empresas, pero muchas pymes la abordan comprando software sin estrategia y terminan con herramientas que nadie usa. Transformarse digitalmente no es comprar tecnología: es rediseñar cómo opera el negocio usando datos y automatización para crecer más rápido y con menos fricción. Esta guía explica cómo hacerlo bien.' },

            { type: 'h2', text: '¿Qué es realmente la transformación digital?' },
            { type: 'p', text: 'Es el proceso de integrar tecnología en todas las áreas de la empresa para cambiar la forma de operar y entregar valor al cliente. Incluye automatizar tareas manuales, centralizar la información, tomar decisiones con datos y, en muchos casos, crear nuevos modelos de negocio digitales.' },

            { type: 'h2', text: 'Por dónde empezar (sin desperdiciar dinero)' },
            { type: 'h3', text: '1. Diagnóstico antes que software' },
            { type: 'p', text: 'Mapea tus procesos actuales e identifica los cuellos de botella: ¿dónde se pierde tiempo?, ¿qué tareas se repiten?, ¿dónde se cometen errores? La tecnología llega después, para resolver problemas concretos, no antes.' },
            { type: 'h3', text: '2. Prioriza por impacto y esfuerzo' },
            { type: 'p', text: 'Empieza por lo que da más retorno con menos esfuerzo: facturación electrónica, gestión de clientes (CRM), automatización de cotizaciones o reportes. Las victorias tempranas generan confianza en el equipo.' },
            { type: 'h3', text: '3. Datos centralizados' },
            { type: 'p', text: 'Si tu información vive en hojas de cálculo dispersas y en la cabeza de las personas, no puedes tomar decisiones rápidas. Centralizar los datos es la base de toda transformación.' },

            { type: 'h2', text: 'Qué automatizar primero en una pyme' },
            { type: 'ul', items: [
                'Atención al cliente: respuestas automáticas, WhatsApp Business y chatbots.',
                'Ventas: CRM para no perder oportunidades y dar seguimiento.',
                'Facturación y cobros: facturación electrónica y recordatorios automáticos.',
                'Marketing: campañas digitales medibles y segmentadas.',
                'Reportes: tableros (dashboards) que muestran el negocio en tiempo real.',
            ] },

            { type: 'h2', text: 'Errores comunes que hacen fracasar la digitalización' },
            { type: 'ul', items: [
                'Comprar tecnología sin estrategia ni objetivos claros.',
                'No capacitar al equipo: la mejor herramienta es inútil si nadie sabe usarla.',
                'Intentar cambiar todo a la vez en lugar de avanzar por etapas.',
                'No medir resultados, así que nadie sabe si funcionó.',
            ] },

            { type: 'h2', text: 'El factor humano' },
            { type: 'p', text: 'La transformación digital es 30% tecnología y 70% personas y procesos. El mayor obstáculo no suele ser el software, sino la resistencia al cambio. Por eso el acompañamiento, la capacitación y una comunicación clara son tan importantes como la herramienta elegida.' },

            { type: 'h2', text: 'Conclusión' },
            { type: 'p', text: 'Una pyme puede transformarse digitalmente sin grandes presupuestos si lo hace por etapas, partiendo de un diagnóstico, priorizando por impacto y cuidando a las personas. El resultado: menos trabajo manual, mejores decisiones y más capacidad de crecer.' },
            { type: 'cta', text: '¿Tu pyme está lista para digitalizarse con estrategia? D2F Consulting te acompaña desde el diagnóstico hasta la implementación. Agenda una consulta gratuita.' },
        ],
        translations: {
            en: {
                title: 'Digital transformation for SMEs: practical guide 2026',
                description: 'How to approach digital transformation in an SME: where to start, common mistakes and steps to digitize processes with results.',
                keywords: [
                    'digital transformation for SMEs',
                    'process digitization for companies',
                    'business digital transformation',
                    'technology for SMEs',
                ],
                excerpt: 'Digital transformation without jargon: where to start, what to automate first and how to avoid the mistakes that make digitization fail in SMEs.',
                body: [
                    { type: 'p', text: 'Digital transformation is a priority for most companies, but many SMEs approach it by buying software without a strategy and end up with tools that nobody uses. Transforming digitally is not just buying technology: it means redesigning how the business operates using data and automation to grow faster and with less friction. This guide explains how to do it well.' },
                    { type: 'h2', text: 'What digital transformation really is' },
                    { type: 'p', text: 'It is the process of integrating technology into all areas of the company to change how it operates and delivers value to the customer. It includes automating manual tasks, centralizing information, making decisions with data and, in many cases, creating new digital business models.' },
                    { type: 'h2', text: 'Where to start without wasting money' },
                    { type: 'h3', text: '1. Diagnose before buying software' },
                    { type: 'p', text: 'Map your current processes and identify bottlenecks: where is time lost, which tasks are repeated and where do errors happen? Technology comes later, to solve concrete problems, not before.' },
                    { type: 'h3', text: '2. Prioritize by impact and effort' },
                    { type: 'p', text: 'Start with what gives the biggest return with the least effort: electronic invoicing, customer management (CRM), quote automation or dashboards. Early wins build confidence in the team.' },
                    { type: 'h3', text: '3. Centralized data' },
                    { type: 'p', text: 'If your information lives in scattered spreadsheets and in the heads of people, you cannot make quick decisions. Centralizing data is the basis of any transformation.' },
                    { type: 'h2', text: 'What to automate first in an SME' },
                    { type: 'ul', items: [
                        'Customer service: automatic responses, WhatsApp Business and chatbots.',
                        'Sales: CRM to avoid losing opportunities and keep follow-up consistent.',
                        'Billing and collections: electronic invoicing and automatic reminders.',
                        'Marketing: measurable and segmented digital campaigns.',
                        'Reports: dashboards that show the business in real time.',
                    ] },
                    { type: 'h2', text: 'Common mistakes that make digitization fail' },
                    { type: 'ul', items: [
                        'Buying technology without strategy or clear objectives.',
                        'Not training the team: the best tool is useless if nobody knows how to use it.',
                        'Trying to change everything at once instead of moving in stages.',
                        'Not measuring results, so nobody knows whether it worked.',
                    ] },
                    { type: 'h2', text: 'The human factor' },
                    { type: 'p', text: 'Digital transformation is 30% technology and 70% people and processes. The biggest obstacle is usually not the software, but resistance to change. That is why support, training and clear communication are as important as the tool itself.' },
                    { type: 'h2', text: 'Conclusion' },
                    { type: 'p', text: 'An SME can transform digitally without large budgets if it does it in stages, starting with a diagnosis, prioritizing by impact and taking care of people. The result is less manual work, better decisions and more capacity to grow.' },
                    { type: 'cta', text: 'Is your SME ready to digitize with strategy? D2F Consulting supports you from diagnosis to implementation. Book a free consultation.' },
                ],
            },
        },
    },
    {
        slug: 'como-desarrollar-franquicia-global',
        title: 'Cómo desarrollar una franquicia: pasos clave para expandir tu negocio',
        description:
            'Guía para convertir tu negocio en franquicia: requisitos, pasos, costos y errores a evitar para una expansión rentable y escalable.',
        keywords: [
            'desarrollo de franquicias',
            'cómo franquiciar mi negocio',
            'modelo de franquicia',
            'expansión de negocios',
        ],
        datePublished: '2026-06-17',
        dateModified: '2026-06-17',
        image: '/images/franchise-8.webp',
        imageAlt: 'Modelo de franquicia empresarial en expansión internacional',
        readingTime: '8 min',
        excerpt:
            'Franquiciar tu negocio paso a paso: cuándo estás listo, qué documentos necesitas, cómo fijar la inversión y los errores que arruinan una red.',
        body: [
            { type: 'p', text: 'Franquiciar es una de las formas más eficientes de expandir un negocio: creces usando el capital y la gestión de terceros (los franquiciados) en lugar de abrir cada sede con recursos propios. Pero franquiciar mal destruye la marca. Esta guía explica cómo desarrollar una franquicia de forma ordenada y rentable.' },

            { type: 'h2', text: '¿Tu negocio está listo para franquiciar?' },
            { type: 'p', text: 'Antes de pensar en expandir, tu modelo debe cumplir tres condiciones: ser rentable y comprobado en al menos una sede propia, ser replicable mediante procesos documentados (no depender del dueño) y tener una marca con valor que alguien quiera comprar. Si tu negocio depende de tu presencia diaria, primero hay que sistematizarlo.' },

            { type: 'h2', text: 'Pasos para desarrollar una franquicia' },
            { type: 'h3', text: '1. Estandariza y documenta la operación' },
            { type: 'p', text: 'Todo lo que hace exitoso al negocio debe quedar por escrito: manuales de operación, procesos, proveedores, recetas o protocolos de servicio. El franquiciado compra precisamente ese know-how listo para ejecutar.' },
            { type: 'h3', text: '2. Diseña el modelo económico' },
            { type: 'p', text: 'Define la inversión inicial, el canon de entrada (fee), las regalías periódicas (royalties) y el retorno esperado para el franquiciado. Los números deben funcionar para ambas partes; si el franquiciado no gana, la red se cae.' },
            { type: 'h3', text: '3. Estructura legal y contratos' },
            { type: 'p', text: 'La franquicia se articula mediante contratos de franquicia y licencia de marca. Se debe registrar la marca y blindar la propiedad intelectual. Un contrato sólido protege la marca y define obligaciones, territorio y causales de terminación.' },
            { type: 'h3', text: '4. Crea el paquete de franquicia' },
            { type: 'p', text: 'Incluye el manual de marca, el manual operativo, el plan de capacitación, el soporte de apertura y el acompañamiento continuo. Esto es lo que realmente vendes.' },
            { type: 'h3', text: '5. Selecciona franquiciados (no vendas a cualquiera)' },
            { type: 'p', text: 'El error más caro es vender franquicias solo por el ingreso del fee. Un franquiciado que no opera bien daña la reputación de toda la red. Define un perfil y un proceso de selección riguroso.' },

            { type: 'h2', text: 'Errores que arruinan una franquicia' },
            { type: 'ul', items: [
                'Franquiciar un negocio que aún no es rentable ni replicable.',
                'No documentar la operación: el franquiciado no puede replicar lo que no está escrito.',
                'Fijar regalías que ahogan al franquiciado.',
                'Vender sin filtrar franquiciados.',
                'Abandonar al franquiciado tras la apertura, sin soporte continuo.',
            ] },

            { type: 'h2', text: 'Conclusión' },
            { type: 'p', text: 'Desarrollar una franquicia es un proyecto estratégico que exige sistematizar la operación, diseñar un modelo económico justo, blindar lo legal y seleccionar bien a los franquiciados. Hecho con método, es una de las rutas más escalables para crecer de forma sostenida.' },
            { type: 'cta', text: '¿Quieres convertir tu negocio en una franquicia rentable? D2F Consulting diseña y estructura modelos de franquicia para crecimiento sostenible. Agenda una consulta gratuita.' },
        ],
        translations: {
            en: {
                title: 'How to develop a franchise: key steps to expand your business',
                description: 'Guide to turning your business into a franchise: requirements, steps, costs and mistakes to avoid for a scalable and profitable expansion.',
                keywords: [
                    'franchise development',
                    'how to franchise my business',
                    'franchise model',
                    'business expansion',
                ],
                excerpt: 'Franchising your business step by step: when you are ready, what documents you need, how to set the investment and the mistakes that ruin a network.',
                body: [
                    { type: 'p', text: 'Franchising is one of the most efficient ways to expand a business: you grow by using capital and management from third parties (franchisees) instead of opening each location with your own resources. But franchising badly destroys the brand. This guide explains how to develop a franchise in an orderly and profitable way.' },
                    { type: 'h2', text: 'Is your business ready to franchise?' },
                    { type: 'p', text: 'Before thinking about expansion, your model must meet three conditions: it must be profitable and proven in at least one company-owned location, it must be replicable through documented processes (not dependent on the owner), and it must have a brand with value that someone wants to buy. If your business depends on your daily presence, you need to systematize it first.' },
                    { type: 'h2', text: 'Steps to develop a franchise' },
                    { type: 'h3', text: '1. Standardize and document the operation' },
                    { type: 'p', text: 'Everything that makes the business successful must be written down: operating manuals, processes, suppliers, recipes or service protocols. The franchisee buys exactly that ready-to-execute know-how.' },
                    { type: 'h3', text: '2. Design the economic model' },
                    { type: 'p', text: 'Define the initial investment, the entry fee, periodic royalties and the expected return for the franchisee. The numbers must work for both sides; if the franchisee does not make money, the network will fail.' },
                    { type: 'h3', text: '3. Legal structure and contracts' },
                    { type: 'p', text: 'The franchise is structured through franchise agreements and trademark licenses. The brand must be registered and intellectual property protected. A solid contract protects the brand and defines obligations, territory and termination clauses.' },
                    { type: 'h3', text: '4. Create the franchise package' },
                    { type: 'p', text: 'Include the brand manual, operating manual, training plan, opening support and ongoing support. This is what you really sell.' },
                    { type: 'h3', text: '5. Select franchisees (do not sell to anyone)' },
                    { type: 'p', text: 'The most expensive mistake is selling franchises only for the entry fee revenue. A franchisee who does not operate well damages the reputation of the whole network. Define a profile and a rigorous selection process.' },
                    { type: 'h2', text: 'Mistakes that ruin a franchise' },
                    { type: 'ul', items: [
                        'Franchising a business that is not yet profitable or replicable.',
                        'Not documenting the operation: the franchisee cannot replicate what is not written down.',
                        'Setting royalties that choke the franchisee.',
                        'Selling without filtering franchisees.',
                        'Leaving the franchisee after opening, without continuous support.',
                    ] },
                    { type: 'h2', text: 'Conclusion' },
                    { type: 'p', text: 'Developing a franchise is a strategic project that requires systematizing the operation, designing a fair economic model, protecting the legal structure and selecting franchisees well. Done with method, it is one of the most scalable paths to grow sustainably.' },
                    { type: 'cta', text: 'Want to turn your business into a profitable franchise? D2F Consulting designs and structures franchise models for sustainable growth. Book a free consultation.' },
                ],
            },
        },
    },
    {
        slug: 'd2f-consulting-quienes-somos',
        title: 'D2F Consulting: quiénes somos, qué hacemos y por qué confían en nosotros',
        description:
            'Conoce a D2F Consulting: firma de consultoría empresarial internacional desde 2015. Historia, equipo, servicios y filosofía de trabajo.',
        keywords: [
            'D2F',
            'D2F Consulting',
            'consultoría empresarial internacional',
            'quiénes somos D2F',
        ],
        datePublished: '2026-06-20',
        dateModified: '2026-06-20',
        image: '/images/equipo-1.webp',
        imageAlt: 'Equipo de D2F Consulting, firma de consultoría empresarial internacional',
        readingTime: '6 min',
        excerpt:
            'Quién es D2F Consulting, de dónde venimos y por qué organizaciones en distintos mercados confían en nosotros para crecer con estrategia y resultados.',
        body: [
            { type: 'p', text: 'D2F es una firma internacional de consultoría empresarial y gestión estratégica fundada en 2015. En este artículo te contamos quiénes somos, qué hacemos y por qué más de 25 organizaciones han confiado en nosotros para transformar sus empresas.' },

            { type: 'h2', text: 'Qué es D2F Consulting' },
            { type: 'p', text: 'D2F combina gestión, desarrollo y comunicación para acompañar a empresas de todos los tamaños, desde pymes y startups hasta multinacionales. Ayudamos a definir estrategia, profesionalizar la operación, digitalizar procesos y crecer de forma sostenible. No solo entregamos diagnósticos: acompañamos la implementación hasta que aparecen los resultados.' },

            { type: 'h2', text: 'Nuestra historia' },
            { type: 'p', text: 'Desde 2015, D2F ha trabajado con organizaciones de sectores tan diversos como cosmética, educación, entretenimiento, alimentos, salud y servicios. El liderazgo de la firma suma más de 20 años de experiencia en consultoría, innovación corporativa y gestión estratégica, lo que nos permite combinar profundidad de mercado con metodologías de clase mundial.' },

            { type: 'h2', text: 'Qué hacemos: seis líneas de servicio' },
            { type: 'ul', items: [
                'Gestión Estratégica: planeación corporativa, expansión de mercado y estrategia de crecimiento.',
                'Transformación Digital: automatización, data analytics e implementación tecnológica.',
                'Gestión de Proyectos: metodologías ágiles y tradicionales (Scrum, PMI).',
                'Marketing y Comunicación: estrategia digital, marca y campañas de performance.',
                'Desarrollo de Franquicias: diseño y expansión de modelos de franquicia.',
                'Academia Empresarial: formación en liderazgo, innovación y gestión.',
            ] },

            { type: 'h2', text: 'Quiénes lideran D2F' },
            { type: 'h3', text: 'Diego Forero, CEO' },
            { type: 'p', text: 'Consultor empresarial con más de 20 años de experiencia en gestión estratégica, innovación corporativa y liderazgo de alto nivel en múltiples industrias internacionales.' },
            { type: 'h3', text: 'Alejandra Rivera, CSO' },
            { type: 'p', text: 'Especialista en análisis de datos, inteligencia de negocios y optimización estratégica para el crecimiento de organizaciones en expansión, con foco en transformación digital y gestión organizacional.' },

            { type: 'h2', text: 'Por qué confían en D2F' },
            { type: 'p', text: 'Nuestros clientes destacan tres cosas: el compromiso real con sus proyectos, la capacidad de convertir la estrategia en ejecución y los resultados medibles. Más de 20 años de trayectoria, más de 25 clientes atendidos y una satisfacción del 100% respaldan la forma en que trabajamos.' },

            { type: 'h2', text: 'Cómo contactar a D2F Consulting' },
            { type: 'p', text: 'Puedes escribirnos a d2fgestion@gmail.com, llamarnos o escribirnos por WhatsApp al +57 310 235 3201, o usar el formulario de contacto en nuestra web. Respondemos en menos de 24 horas y la primera consulta es gratuita.' },
            { type: 'cta', text: '¿Quieres trabajar con D2F Consulting? Agenda una consulta inicial gratuita y descubre cómo podemos ayudar a crecer tu empresa.' },
        ],
        translations: {
            en: {
                title: 'D2F Consulting: who we are, what we do and why companies trust us',
                description: 'Learn about D2F Consulting: international business consulting firm since 2015. History, team, services and working philosophy.',
                keywords: [
                    'D2F',
                    'D2F Consulting',
                    'international business consulting',
                    'who we are at D2F',
                ],
                excerpt: 'Who D2F Consulting is, where we come from and why organizations in different markets trust us to grow with strategy and measurable results.',
                body: [
                    { type: 'p', text: 'D2F is an international business consulting and strategic management firm founded in 2015. In this article we tell you who we are, what we do and why more than 25 organizations have trusted us to transform their businesses.' },
                    { type: 'h2', text: 'What is D2F Consulting' },
                    { type: 'p', text: 'D2F combines management, development and communication to support companies of all sizes, from SMEs and startups to multinationals. We help define strategy, professionalize operations, digitize processes and grow sustainably. We do not just deliver diagnoses: we support implementation until results appear.' },
                    { type: 'h2', text: 'Our story' },
                    { type: 'p', text: 'Since 2015, D2F has worked with organizations in sectors as diverse as cosmetics, education, entertainment, food, health and services. The leadership team brings more than 20 years of experience in consulting, corporate innovation and strategic management, allowing us to combine deep market insight with world-class methodologies.' },
                    { type: 'h2', text: 'What we do: six service lines' },
                    { type: 'ul', items: [
                        'Strategic Management: corporate planning, market expansion and growth strategy.',
                        'Digital Transformation: automation, data analytics and technological implementation.',
                        'Project Management: agile and traditional methodologies (Scrum, PMI).',
                        'Marketing and Communication: digital strategy, branding and performance campaigns.',
                        'Franchise Development: design and expansion of franchise models.',
                        'Business Academy: training in leadership, innovation and management.',
                    ] },
                    { type: 'h2', text: 'Who leads D2F' },
                    { type: 'h3', text: 'Diego Forero, CEO' },
                    { type: 'p', text: 'Business consultant with more than 20 years of experience in strategic management, corporate innovation and senior leadership across multiple international industries.' },
                    { type: 'h3', text: 'Alejandra Rivera, CSO' },
                    { type: 'p', text: 'Specialist in data analysis, business intelligence and strategic optimization for growth in expanding organizations, with a focus on digital transformation and organizational management.' },
                    { type: 'h2', text: 'Why companies trust D2F' },
                    { type: 'p', text: 'Our clients highlight three things: real commitment to their projects, the ability to turn strategy into execution and measurable results. More than 20 years of track record, more than 25 clients served and 100% satisfaction support the way we work.' },
                    { type: 'h2', text: 'How to contact D2F Consulting' },
                    { type: 'p', text: 'You can write to us at d2fgestion@gmail.com, call us or message us on WhatsApp at +57 310 235 3201, or use the contact form on our website. We respond in less than 24 hours and the first consultation is free.' },
                    { type: 'cta', text: 'Want to work with D2F Consulting? Book a free initial consultation and discover how we can help your company grow.' },
                ],
            },
        },
    },
    {
        slug: 'planeacion-estrategica-empresas-global',
        title: 'Planeación estratégica para empresas: guía y método de D2F',
        description:
            'Qué es la planeación estratégica, por qué tu empresa la necesita y cómo D2F Consulting la implementa paso a paso para lograr resultados.',
        keywords: [
            'planeación estratégica empresarial',
            'plan estratégico empresa',
            'D2F planeación estratégica',
            'consultoría estratégica',
        ],
        datePublished: '2026-06-20',
        dateModified: '2026-06-20',
        image: '/images/strategic-planing.webp',
        imageAlt: 'Sesión de planeación estratégica empresarial de D2F Consulting',
        readingTime: '7 min',
        excerpt:
            'La planeación estratégica convierte la visión en acción. Te explicamos qué es, sus etapas y cómo D2F la aplica para que tu empresa crezca con rumbo.',
        body: [
            { type: 'p', text: 'Muchas empresas trabajan duro pero sin rumbo claro: reaccionan al día a día en vez de avanzar hacia objetivos definidos. La planeación estratégica resuelve eso. En esta guía explicamos qué es, cuáles son sus etapas y cómo el equipo de D2F Consulting la implementa para convertir la estrategia en resultados concretos.' },

            { type: 'h2', text: '¿Qué es la planeación estratégica?' },
            { type: 'p', text: 'Es el proceso mediante el cual una empresa define a dónde quiere llegar (visión y objetivos) y diseña el camino para lograrlo (estrategia y plan de acción). Una buena planeación estratégica alinea a todo el equipo, prioriza recursos y permite medir el avance con indicadores claros.' },

            { type: 'h2', text: 'Por qué tu empresa la necesita' },
            { type: 'ul', items: [
                'Da rumbo: todos saben hacia dónde va la empresa y por qué.',
                'Prioriza: enfoca recursos en lo que realmente mueve el negocio.',
                'Anticipa: identifica riesgos y oportunidades antes que la competencia.',
                'Mide: convierte objetivos en indicadores (KPIs) para tomar decisiones con datos.',
            ] },

            { type: 'h2', text: 'Las etapas de un plan estratégico' },
            { type: 'h3', text: '1. Diagnóstico' },
            { type: 'p', text: 'Analizamos la situación actual: mercado, competencia, capacidades internas y resultados. Aquí usamos herramientas como el análisis DOFA y el estudio del entorno competitivo.' },
            { type: 'h3', text: '2. Definición de rumbo' },
            { type: 'p', text: 'Definimos o ajustamos la misión, la visión y los objetivos estratégicos a 1, 3 y 5 años. Los objetivos deben ser específicos y medibles.' },
            { type: 'h3', text: '3. Formulación de la estrategia' },
            { type: 'p', text: 'Diseñamos las estrategias y proyectos que cerrarán la brecha entre dónde está la empresa y dónde quiere llegar: crecimiento, eficiencia, nuevos mercados, innovación.' },
            { type: 'h3', text: '4. Plan de acción e indicadores' },
            { type: 'p', text: 'Traducimos la estrategia en iniciativas concretas con responsables, plazos, presupuesto e indicadores. Sin esto, la estrategia se queda en el papel.' },
            { type: 'h3', text: '5. Ejecución y seguimiento' },
            { type: 'p', text: 'Acompañamos la implementación con tableros de control y revisiones periódicas para corregir el rumbo a tiempo. Esta es la etapa donde D2F marca la diferencia: no dejamos a la empresa sola con un documento.' },

            { type: 'h2', text: 'El método de D2F' },
            { type: 'p', text: 'En D2F Consulting combinamos metodologías probadas con un conocimiento profundo del mercado y la operación. Trabajamos de la mano del equipo directivo, transferimos capacidades y medimos resultados en cada etapa, para que la planeación estratégica se convierta en crecimiento real y sostenible.' },

            { type: 'h2', text: 'Conclusión' },
            { type: 'p', text: 'La planeación estratégica no es un lujo de grandes corporaciones: es la herramienta que permite a cualquier empresa crecer con rumbo, priorizar bien y tomar decisiones con datos. Con el acompañamiento adecuado, se convierte en una de las inversiones de mayor retorno.' },
            { type: 'cta', text: '¿Quieres un plan estratégico que sí se ejecute? D2F Consulting te acompaña desde el diagnóstico hasta los resultados. Agenda una consulta gratuita.' },
        ],
        translations: {
            en: {
                title: 'Strategic planning for companies: guide and method from D2F',
                description: 'What strategic planning is, why your company needs it and how D2F Consulting implements it step by step to achieve results.',
                keywords: [
                    'business strategic planning',
                    'strategic plan for companies',
                    'D2F strategic planning',
                    'strategic consulting',
                ],
                excerpt: 'Strategic planning turns vision into action. We explain what it is, its stages and how D2F applies it so your company grows with direction.',
                body: [
                    { type: 'p', text: 'Many companies work hard but without a clear direction: they react to the day-to-day instead of moving toward defined objectives. Strategic planning solves that. In this guide we explain what it is, which stages it involves and how the D2F Consulting team implements it to turn strategy into concrete results.' },
                    { type: 'h2', text: 'What is strategic planning?' },
                    { type: 'p', text: 'It is the process by which a company defines where it wants to go (vision and objectives) and designs the path to get there (strategy and action plan). Good strategic planning aligns the whole team, prioritizes resources and allows progress to be measured with clear indicators.' },
                    { type: 'h2', text: 'Why your company needs it' },
                    { type: 'ul', items: [
                        'Provides direction: everyone knows where the company is headed and why.',
                        'Prioritizes: focuses resources on what really moves the business.',
                        'Anticipates: identifies risks and opportunities before the competition does.',
                        'Measures: turns objectives into indicators (KPIs) so decisions are based on data.',
                    ] },
                    { type: 'h2', text: 'The stages of a strategic plan' },
                    { type: 'h3', text: '1. Diagnosis' },
                    { type: 'p', text: 'We analyze the current situation: market, competition, internal capabilities and results. Here we use tools such as SWOT analysis and competitive environment studies.' },
                    { type: 'h3', text: '2. Defining direction' },
                    { type: 'p', text: 'We define or adjust the mission, vision and strategic objectives for 1, 3 and 5 years. Objectives must be specific and measurable.' },
                    { type: 'h3', text: '3. Strategy formulation' },
                    { type: 'p', text: 'We design the strategies and projects that close the gap between where the company is and where it wants to go: growth, efficiency, new markets, innovation.' },
                    { type: 'h3', text: '4. Action plan and indicators' },
                    { type: 'p', text: 'We translate strategy into concrete initiatives with owners, deadlines, budget and indicators. Without this, strategy stays on paper.' },
                    { type: 'h3', text: '5. Execution and monitoring' },
                    { type: 'p', text: 'We support implementation with dashboards and periodic reviews to correct course in time. This is the stage where D2F makes the difference: we do not leave the company alone with a document.' },
                    { type: 'h2', text: 'The D2F method' },
                    { type: 'p', text: 'At D2F Consulting we combine proven methodologies with deep knowledge of the market and operations. We work side by side with the management team, transfer capabilities and measure results at every stage so strategic planning becomes real and sustainable growth.' },
                    { type: 'h2', text: 'Conclusion' },
                    { type: 'p', text: 'Strategic planning is not a luxury for large corporations: it is the tool that allows any company to grow with direction, prioritize better and make decisions based on data. With the right support, it becomes one of the highest-return investments.' },
                    { type: 'cta', text: 'Want a strategic plan that actually gets executed? D2F Consulting supports you from diagnosis to results. Book a free consultation.' },
                ],
            },
        },
    },
];

export function getLocalizedPost(slug: string, locale: SupportedLocale = 'es'): Post | undefined {
    const post = posts.find((p) => p.slug === slug);
    if (!post) return undefined;
    if (locale !== 'en' || !post.translations?.en) return post;

    return {
        ...post,
        title: post.translations.en.title ?? post.title,
        description: post.translations.en.description ?? post.description,
        keywords: post.translations.en.keywords ?? post.keywords,
        excerpt: post.translations.en.excerpt ?? post.excerpt,
        body: post.translations.en.body ?? post.body,
    };
}

export function getLocalizedPosts(locale: SupportedLocale = 'es'): Post[] {
    return posts.map((post) => getLocalizedPost(post.slug, locale) ?? post);
}

export function getPost(slug: string): Post | undefined {
    return posts.find((p) => p.slug === slug);
}
