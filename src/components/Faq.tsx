"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const faqsByLocale = {
    es: [
        {
            q: "¿Qué es D2F Consulting y dónde opera?",
            a: "D2F Consulting es una firma internacional de consultoría empresarial y gestión estratégica fundada en 2015. Acompañamos organizaciones en su crecimiento, transformación digital y ejecución estratégica con una mirada global y resultados medibles.",
        },
        {
            q: "¿Qué servicios de consultoría empresarial ofrece D2F Consulting?",
            a: "Ofrecemos seis líneas de servicio: gestión estratégica, transformación digital, gestión de proyectos, marketing y comunicación, desarrollo de franquicias y academia empresarial.",
        },
        {
            q: "¿Por qué elegir una consultoría empresarial global?",
            a: "Una consultora con visión global aporta estructura, rigor analítico y acompañamiento práctico para resolver retos complejos. D2F combina experiencia real, metodologías probadas y ejecución enfocada en resultados para empresas en crecimiento.",
        },
        {
            q: "¿Cómo puedo contratar los servicios de consultoría empresarial de D2F?",
            a: "Puede contactarnos a través del formulario en esta página web, por email a d2fgestion@gmail.com o por teléfono al +57 310 235 3201. Respondemos en menos de 24 horas y ofrecemos una consulta inicial sin costo.",
        },
        {
            q: "¿D2F Consulting trabaja con empresas de todos los tamaños?",
            a: "Sí. Atendemos desde startups y pymes hasta grandes corporaciones. Nuestras soluciones se diseñan a la medida de cada organización, adaptando metodologías y alcance según el tamaño, sector y etapa de crecimiento.",
        },
        {
            q: "¿Cuánto cuesta una consultoría empresarial con D2F?",
            a: "El costo depende del alcance, la duración y la línea de servicio. Por eso ofrecemos una consulta inicial gratuita en la que entendemos su necesidad y le presentamos una propuesta a la medida, con entregables e indicadores claros antes de iniciar cualquier proyecto.",
        },
    ],
    en: [
        {
            q: "What is D2F Consulting and where does it operate?",
            a: "D2F Consulting is an international business consulting and strategic management firm founded in 2015. We support organizations in their growth, digital transformation and strategic execution with a global perspective and measurable results.",
        },
        {
            q: "What business consulting services does D2F Consulting offer?",
            a: "We offer six service lines: strategic management, digital transformation, project management, marketing and communication, franchise development and business academy.",
        },
        {
            q: "Why choose a global business consulting firm?",
            a: "A consulting firm with a global perspective brings structure, analytical rigor and practical support to solve complex challenges. D2F combines real experience, proven methodologies and execution focused on measurable results for growing companies.",
        },
        {
            q: "How can I hire D2F's business consulting services?",
            a: "You can contact us through the form on this website, by email at d2fgestion@gmail.com or by phone at +57 310 235 3201. We respond within 24 hours and offer an initial consultation at no cost.",
        },
        {
            q: "Does D2F Consulting work with companies of all sizes?",
            a: "Yes. We work with startups, SMEs and large corporations. Our solutions are tailored to each organization, adapting methodologies and scope based on size, sector and growth stage.",
        },
        {
            q: "How much does a business consulting engagement with D2F cost?",
            a: "The cost depends on the scope, duration and service line. That is why we offer a free initial consultation to understand your needs and present a tailored proposal with clear deliverables and indicators before any project begins.",
        },
    ],
} as const;

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0);
    const { t, i18n } = useTranslation();
    const locale = i18n.language?.startsWith("en") ? "en" : "es";
    const faqs = faqsByLocale[locale];

    return (
        <section
            id="preguntas-frecuentes"
            aria-label="Preguntas frecuentes sobre consultoría empresarial"
            className="py-20 sm:py-28 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)" }}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-px bg-[#DF1021]" />
                        <span className="text-[#DF1021] font-bold text-xs tracking-widest uppercase">{t("faq.eyebrow")}</span>
                        <div className="w-8 h-px bg-[#DF1021]" />
                    </div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        {t("faq.title")}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t("faq.description")}
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((item, idx) => {
                        const isOpen = open === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
                                style={{ boxShadow: "0 2px 16px rgba(30,118,184,0.05)" }}
                            >
                                <h3>
                                    <button
                                        onClick={() => setOpen(isOpen ? null : idx)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 group"
                                    >
                                        <span className="flex items-start gap-3">
                                            <HelpCircle size={18} className="text-[#1E76B8] flex-shrink-0 mt-0.5" />
                                            <span className="font-bold text-gray-900 text-[15px] sm:text-base leading-snug">
                                                {item.q}
                                            </span>
                                        </span>
                                        <Plus
                                            size={20}
                                            className={`text-[#DF1021] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                        />
                                    </button>
                                </h3>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <p className="px-5 sm:px-6 pb-5 pl-[3.25rem] text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
