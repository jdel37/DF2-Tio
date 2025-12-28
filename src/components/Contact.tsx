import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  MapPin,
  Mail,
  Send,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    service: string[];
  }>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: [] // selección múltiple en burbujas
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Type assertion for checkbox
    const checked = (e.target as HTMLInputElement).checked;

    // Cambiar checkbox → array
    if (type === "checkbox") {
      setFormData(prev => {
        const updated = checked
          ? [...prev.service, value]
          : prev.service.filter(s => s !== value);

        return { ...prev, service: updated };
      });
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Envío del formulario con Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Using FormSubmit.co AJAX endpoint for cleaner JSON response without redirects
      const response = await fetch("https://formsubmit.co/ajax/d2fgestion@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          // FormSubmit customization fields
          _subject: `Nuevo mensaje de ${formData.name} - Web D2F`,
          _template: "table", // Format email as a clean table
          _captcha: "false",  // Optional: Disable captcha for smoother experience (enable if spam becomes an issue)

          // Join services for better readability in email
          service: formData.service.join(", ")
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: []
        });

        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        console.error("Formspree error", response);
        setErrorMessage("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
      }
    } catch (error) {
      console.error("Submission error", error);
      setErrorMessage("Hubo un error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redes sociales
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-[#DF1021]" />,
      title: t("contact.info.visit"),
      details: ["We Work Bogotá, Medellín"],
      link: null
    },
    {
      icon: <Mail size={24} className="text-[#DF1021]" />,
      title: t("contact.info.email"),
      details: ["d2fgestion@gmail.com"],
      link: "mailto:d2fgestion@gmail.com"
    },
    {
      icon: <Instagram size={24} className="text-[#DF1021]" />,
      title: t("contact.info.instagram"),
      details: ["@d2f_consulting_agency"],
      link: "https://www.instagram.com/d2f_consulting_agency/"
    },
    {
      icon: <Linkedin size={24} className="text-[#DF1021]" />,
      title: t("contact.info.linkedin"),
      details: ["D2F Consulting Agency"],
      link: "https://www.linkedin.com/company/10602504/admin/dashboard/"
    },
    {
      icon: <Facebook size={24} className="text-[#DF1021]" />,
      title: t("contact.info.facebook"),
      details: ["D2F Consulting Agency"],
      link: "https://www.facebook.com/D2FConsultingAgency?ref=aymt_homepage_panel#"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white" aria-label="Sección de contacto">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 bg-gray-50 p-8 rounded-lg shadow-lg"
          >

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{t("contact.form.successTitle")}</h3>
                <p className="text-green-700">
                  {t("contact.form.successDesc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* CAMPOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.name")} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.email")} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.phone")}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.company")}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* BURBUJAS CHECKBOX */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{t("contact.form.services")} *</label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {[
                      t("contact.serviceOptions.0"),
                      t("contact.serviceOptions.1"),
                      t("contact.serviceOptions.2"),
                      t("contact.serviceOptions.3"),
                      t("contact.serviceOptions.4"),
                      t("contact.serviceOptions.5")
                    ].map((service, idx) => (
                      <label key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-md border hover:bg-gray-100 cursor-pointer">
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          checked={formData.service.includes(service)}
                          onChange={handleChange}
                          className="w-5 h-5 text-[#DF1021]"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}

                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.message")} *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#DF1021] text-white font-medium py-3 px-6 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'}`}
                >
                  {isSubmitting ? 'Enviando...' : t("contact.form.submit")}
                </button>

                {errorMessage && (
                  <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                )}

              </form>
            )}
          </motion.div>

          {/* INFO DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-[#1E76B8] text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-[#1E76B8]/50 p-3 rounded-md">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>

                      {info.details.map((detail, i) =>
                        info.link ? (
                          <a
                            key={i}
                            href={info.link}
                            className="text-white/80 underline hover:text-white"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-white/80">{detail}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section >
  );
};

export default Contact;
