import React, { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Type assertion for checkbox since it's not on all input/textarea elements common interface in a simple way without casting
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

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, company, message, service } = formData;
    const to = "d2fgestion@gmail.com";
    const subject = encodeURIComponent(`${t("contact.form.submit")} - ${name}`);

    const serviceText = service.length > 0
      ? service.map(s => `- ${s}`).join("\n")
      : "No seleccionó servicios";

    const body = encodeURIComponent(
      `
${t("contact.form.name")}: ${name}
${t("contact.form.email")}: ${email}
${t("contact.form.phone")}: ${phone}
${t("contact.form.company")}: ${company}

${t("contact.form.services")}:
${serviceText}

${t("contact.form.message")}:
${message}
`
    );

    const userProvider = email.split("@")[1]?.toLowerCase();
    let url = "";

    if (userProvider?.includes("gmail")) {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    } else if (["outlook", "hotmail", "live"].some(p => userProvider?.includes(p))) {
      url = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
    } else if (userProvider?.includes("yahoo")) {
      url = `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`;
    } else {
      url = `mailto:${to}?subject=${subject}&body=${body}`;
    }

    window.open(url, "_blank");

    setFormSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: []
      });
      setFormSubmitted(false);
    }, 5000);
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E76B8] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* FORMULARIO */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-lg p-8">

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
                  className="w-full bg-[#DF1021] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md"
                >
                  {t("contact.form.submit")}
                </button>

              </form>
            )}
          </div>

          {/* INFO DE CONTACTO */}
          <div className="lg:w-1/3">
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
                            target="_blank"
                            rel="noopener noreferrer"
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
