"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Send, Instagram, Linkedin, Facebook, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CleanInput = ({ label, name, type = "text", value, onChange, required = false }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full mb-5">
      <label htmlFor={name} className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {label}{required && <span className="text-[#DF1021] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 placeholder-gray-300"
        style={{
          border: isFocused
            ? "1.5px solid #1E76B8"
            : "1.5px solid #e5e7eb",
          boxShadow: isFocused ? "0 0 0 3px rgba(30,118,184,0.10)" : "none",
        }}
      />
    </div>
  );
};

const TextareaField = ({ name, value, onChange, required }: {
  name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <textarea
      name={name}
      id={name}
      rows={4}
      value={value}
      onChange={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      required={required}
      className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 resize-none"
      style={{
        border: isFocused ? "1.5px solid #1E76B8" : "1.5px solid #e5e7eb",
        boxShadow: isFocused ? "0 0 0 3px rgba(30,118,184,0.10)" : "none",
      }}
    />
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<{
    name: string; email: string; phone: string; company: string; message: string; service: string[];
  }>({ name: '', email: '', phone: '', company: '', message: '', service: [] });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        service: checked ? [...prev.service, value] : prev.service.filter(s => s !== value),
      }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/d2fgestion@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo mensaje de ${formData.name} - Web D2F`,
          _template: "table",
          _captcha: "false",
          service: formData.service.join(", "),
        }),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '', service: [] });
        setTimeout(() => setFormState('idle'), 6000);
      } else {
        setFormState('error');
        setErrorMessage("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
      }
    } catch {
      setFormState('error');
      setErrorMessage("Hubo un error de conexión. Por favor intenta nuevamente.");
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: t("contact.info.visit"),
      detail: "We Work Bogotá · Medellín",
      link: undefined,
    },
    {
      icon: <Mail size={20} />,
      title: t("contact.info.email"),
      detail: "d2fgestion@gmail.com",
      link: "mailto:d2fgestion@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      title: "Teléfono",
      detail: "+57 310 2353201",
      link: "tel:+573102353201",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, link: "https://www.instagram.com/d2f_consulting_agency/", label: "Instagram" },
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/10602504/", label: "LinkedIn" },
    { icon: <Facebook size={18} />, link: "https://www.facebook.com/D2FConsultingAgency", label: "Facebook" },
  ];

  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 overflow-hidden z-0"
      aria-label="Sección de contacto"
      style={{ background: "linear-gradient(180deg, #f0f4fa 0%, #f8faff 100%)" }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1E76B8]/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#1E76B8]" />
            <span className="text-[#1E76B8] font-bold text-xs tracking-widest uppercase">Escríbenos</span>
            <div className="w-8 h-px bg-[#1E76B8]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
            suppressHydrationWarning
          >
            {t("contact.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed" suppressHydrationWarning>
            {t("contact.description")}
          </p>
        </motion.div>

        <div
          className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
          style={{ boxShadow: "0 20px 80px rgba(30,118,184,0.08), 0 4px 16px rgba(0,0,0,0.04)" }}
        >
          {/* LEFT: info panel */}
          <div
            className="lg:w-2/5 p-8 sm:p-10 lg:p-12 text-white relative flex flex-col justify-between overflow-hidden"
            style={{ background: "linear-gradient(145deg, #0a2e4e 0%, #10497a 50%, #1E76B8 100%)" }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-black mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
                suppressHydrationWarning
              >
                {t("contact.info.title")}
              </h3>
              <p className="text-white/60 text-sm mb-10">Respondemos en menos de 24 horas</p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#DF1021] flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-0.5">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white font-semibold text-sm hover:text-[#DF1021] transition-colors">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="pt-8 border-t border-white/15">
                <p className="text-xs text-white/40 mb-4 font-bold uppercase tracking-widest">Síguenos</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#DF1021] hover:text-white hover:border-[#DF1021] hover:-translate-y-1 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12 bg-white relative">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3
                    className="text-2xl font-black text-gray-900 mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-500 text-base max-w-sm mx-auto leading-relaxed">
                    {t("contact.form.successDesc")}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                    <CleanInput label={t("contact.form.name")} name="name" value={formData.name} onChange={handleChange} required />
                    <CleanInput label={t("contact.form.email")} name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <CleanInput label={t("contact.form.phone")} name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                    <CleanInput label={t("contact.form.company")} name="company" value={formData.company} onChange={handleChange} />
                  </div>

                  {/* Service chips */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      ¿Qué servicio te interesa?<span className="text-[#DF1021] ml-0.5">*</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 2, 3, 4, 5].map((idx) => {
                        const service = t(`contact.serviceOptions.${idx}`);
                        const isSelected = formData.service.includes(service);
                        return (
                          <label key={idx} className="cursor-pointer">
                            <input
                              type="checkbox"
                              name="service"
                              value={service}
                              checked={isSelected}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div
                              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                              style={{
                                border: isSelected ? "1.5px solid #1E76B8" : "1.5px solid #e5e7eb",
                                background: isSelected ? "#1E76B8" : "#f9fafb",
                                color: isSelected ? "#fff" : "#6b7280",
                              }}
                            >
                              {service}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 mb-7">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {t("contact.form.message")}<span className="text-[#DF1021] ml-0.5">*</span>
                    </label>
                    <TextareaField
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="mb-6 p-4 rounded-2xl bg-red-50 text-[#DF1021] text-sm flex items-start gap-3 border border-red-100">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`group relative overflow-hidden w-full sm:w-auto self-end inline-flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 ${
                      formState === 'submitting' ? 'opacity-70 cursor-wait' : 'hover:-translate-y-1'
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #DF1021, #b80d1a)",
                      boxShadow: "0 4px 24px rgba(223,16,33,0.35)",
                    }}
                    onMouseEnter={e => !formState && ((e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(223,16,33,0.5)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(223,16,33,0.35)")}
                  >
                    <span>{formState === 'submitting' ? 'Enviando...' : t("contact.form.submit")}</span>
                    {formState !== 'submitting' && (
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
