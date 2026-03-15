"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Send, Instagram, Linkedin, Facebook, MessageCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Shared component for floating label input
const FloatingInput = ({ label, name, type = "text", value, onChange, required = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`w-full bg-transparent border-b-2 outline-none py-3 text-gray-900 transition-colors duration-300 peer ${
          isFocused ? "border-[#1E76B8]" : "border-gray-200 hover:border-gray-300"
        }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isActive 
            ? "-top-3 text-xs font-semibold text-[#1E76B8]" 
            : "top-3 text-sm text-gray-400"
        }`}
      >
        {label} {required && <span className="text-[#DF1021]">*</span>}
      </label>
      
      {/* Animated bottom border focus effect */}
      <div 
        className={`absolute bottom-0 left-1/2 h-0.5 bg-[#DF1021] transition-all duration-500 -translate-x-1/2 ${
          isFocused ? "w-full" : "w-0"
        }`} 
      />
    </div>
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
        service: checked ? [...prev.service, value] : prev.service.filter(s => s !== value)
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
          service: formData.service.join(", ")
        })
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '', service: [] });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setErrorMessage("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage("Hubo un error de conexión.");
    }
  };

  const contactInfo = [
    { icon: <MapPin size={22} />, title: t("contact.info.visit"), details: ["We Work Bogotá, Medellín"] },
    { icon: <Mail size={22} />, title: t("contact.info.email"), details: ["d2fgestion@gmail.com"], link: "mailto:d2fgestion@gmail.com" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/d2f_consulting_agency/", label: "Instagram" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/10602504/", label: "LinkedIn" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/D2FConsultingAgency", label: "Facebook" },
  ];

  return (
    <section id="contacto" className="relative py-12 sm:py-16 bg-gray-50 overflow-hidden z-0" aria-label="Sección de contacto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#1E76B8] font-semibold text-sm tracking-widest uppercase">Escríbenos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }} suppressHydrationWarning>
            {t("contact.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" suppressHydrationWarning>
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-[0_20px_80px_rgba(30,118,184,0.08)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">

          {/* LEFT: INFO PANEL (Brand Blue) */}
          <div className="lg:w-2/5 p-8 sm:p-10 lg:p-12 text-white relative flex flex-col justify-between"
               style={{ background: "linear-gradient(135deg, #10497a 0%, #1E76B8 100%)" }}>
            {/* Decor blob */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }} suppressHydrationWarning>
                {t("contact.info.title")}
              </h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#DF1021]">
                        {info.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                    </div>
                    <div className="pl-16">
                      {info.details.map((detail, i) =>
                        info.link ? (
                          <a key={i} href={info.link} className="text-white/80 hover:text-white hover:underline transition-colors block text-sm sm:text-base">
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-white/80 text-sm sm:text-base">{detail}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="pt-8 border-t border-white/20">
                <p className="text-sm text-white/60 mb-4 font-medium uppercase tracking-wider">Síguenos</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a key={idx} href={social.link} aria-label={social.label} target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DF1021] hover:-translate-y-1 transition-all duration-300">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12 bg-white relative">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-green-50 border-[6px] border-green-100 flex items-center justify-center mb-6">
                    <Send size={40} className="text-green-500 ml-2" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600 text-base max-w-md mx-auto">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <FloatingInput label={t("contact.form.name")} name="name" value={formData.name} onChange={handleChange} required />
                    <FloatingInput label={t("contact.form.email")} name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <FloatingInput label={t("contact.form.phone")} name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                    <FloatingInput label={t("contact.form.company")} name="company" value={formData.company} onChange={handleChange} />
                  </div>

                  {/* Service Selection Chips */}
                  <div className="mt-6 mb-8">
                    <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      ¿Qué servicio te interesa? <span className="text-[#DF1021]">*</span>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[0,1,2,3,4,5].map((idx) => {
                        const service = t(`contact.serviceOptions.${idx}`);
                        const isSelected = formData.service.includes(service);
                        return (
                          <label key={idx} className="cursor-pointer relative">
                            <input type="checkbox" name="service" value={service} checked={isSelected} onChange={handleChange} className="sr-only peer" />
                            <div className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                              isSelected 
                                ? "bg-blue-50 border-[#1E76B8] text-[#1E76B8] shadow-sm" 
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                            }`}>
                              {service}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative w-full mb-10 flex-grow">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 text-gray-900 focus:bg-white focus:border-[#1E76B8] outline-none transition-all duration-300 resize-none peer shadow-inner"
                    />
                    <label htmlFor="message" className="absolute left-5 top-5 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#1E76B8] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#1E76B8] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                      {t("contact.form.message")} <span className="text-[#DF1021]">*</span>
                    </label>
                  </div>

                  {formState === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 text-[#DF1021] text-sm flex items-start gap-3 border border-red-100">
                      <AlertCircle size={20} className="shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`group relative overflow-hidden w-full sm:w-auto self-end inline-flex items-center justify-center gap-3 bg-[#DF1021] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(223,16,33,0.3)] hover:shadow-[0_8px_30px_rgba(223,16,33,0.45)] hover:-translate-y-1 ${
                      formState === 'submitting' ? 'opacity-80 cursor-wait' : ''
                    }`}
                  >
                    {/* Hover glare effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_forwards]" />
                    
                    <span className="relative z-10">{formState === 'submitting' ? 'Enviando...' : t("contact.form.submit")}</span>
                    {!formState && <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
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
