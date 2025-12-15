"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

interface ContactFormData {
  name: string;
  email: string;
  contactType: string;
  workMode: string;
  interest: string;
  message: string;
}

interface ContactFormProps {
  readonly email: string;
  readonly whatsappNumber: string;
}

export function ContactForm({ email, whatsappNumber }: ContactFormProps) {
  const { t } = useI18n();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    contactType: "",
    workMode: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmitStatus({
        type: "error",
        message: t.contact.form.errors.nameRequired,
      });
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setSubmitStatus({
        type: "error",
        message: t.contact.form.errors.emailInvalid,
      });
      return false;
    }
    if (!formData.contactType) {
      setSubmitStatus({
        type: "error",
        message: t.contact.form.errors.contactTypeRequired,
      });
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setSubmitStatus({
        type: "error",
        message: t.contact.form.errors.messageMinLength,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t.contact.form.success,
        });
        setFormData({ name: "", email: "", contactType: "", workMode: "", interest: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || t.contact.form.errors.submitError,
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error 
          ? `${t.contact.form.errors.submitError}: ${error.message}` 
          : t.contact.form.errors.connectionError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const contactTypeLabel = formData.contactType 
      ? `Tipo: ${formData.contactType}`
      : "";
    const workModeLabel = formData.workMode 
      ? `Modalidade: ${formData.workMode}`
      : "";
    const interestLabel = formData.interest 
      ? `Interesse: ${formData.interest}`
      : "";
    
    const messageParts = [
      `Olá! Meu nome é ${formData.name || "visitante"}.`,
      contactTypeLabel,
      workModeLabel,
      interestLabel,
      formData.message || "",
    ].filter(Boolean);
    
    const message = encodeURIComponent(messageParts.join("\n\n"));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-3xl mx-auto"
    >
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-accent/5 rounded-2xl blur-xl" />
      
      <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-6 p-4 sm:p-6 rounded-xl border border-border-default bg-bg-secondary shadow-lg">
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
              >
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors touch-manipulation"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors touch-manipulation"
                placeholder="seu.email@exemplo.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contactType"
              className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
            >
              Tipo de contato *
            </label>
            <select
              id="contactType"
              name="contactType"
              value={formData.contactType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors touch-manipulation"
            >
              <option value="">{t.contact.form.selectOption}</option>
              <option value="consultoria">{t.contact.form.contactTypeOptions.consultoria}</option>
              <option value="processo-seletivo">{t.contact.form.contactTypeOptions.processoSeletivo}</option>
              <option value="entrevista">{t.contact.form.contactTypeOptions.entrevista}</option>
              <option value="projeto">{t.contact.form.contactTypeOptions.projeto}</option>
              <option value="parceria">{t.contact.form.contactTypeOptions.parceria}</option>
              <option value="outro">{t.contact.form.contactTypeOptions.outro}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label
                htmlFor="workMode"
                className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
              >
                Modalidade de trabalho
              </label>
              <select
                id="workMode"
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors touch-manipulation"
              >
                <option value="">{t.contact.form.selectOptional}</option>
                <option value="pj">{t.contact.form.workModeOptions.pj}</option>
                <option value="clt">{t.contact.form.workModeOptions.clt}</option>
                <option value="freelance">{t.contact.form.workModeOptions.freelance}</option>
                <option value="estagio">{t.contact.form.workModeOptions.estagio}</option>
                <option value="indiferente">{t.contact.form.workModeOptions.indiferente}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
              >
                Área de interesse
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors touch-manipulation"
              >
                <option value="">{t.contact.form.selectOptional}</option>
                <option value="frontend">{t.contact.form.interestOptions.frontend}</option>
                <option value="backend">{t.contact.form.interestOptions.backend}</option>
                <option value="fullstack">{t.contact.form.interestOptions.fullstack}</option>
                <option value="mobile">{t.contact.form.interestOptions.mobile}</option>
                <option value="devops">{t.contact.form.interestOptions.devops}</option>
                <option value="ia">{t.contact.form.interestOptions.ia}</option>
                <option value="arquitetura">{t.contact.form.interestOptions.arquitetura}</option>
                <option value="lideranca">{t.contact.form.interestOptions.lideranca}</option>
                <option value="outro">{t.contact.form.interestOptions.outro}</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
            >
              Mensagem / Contexto *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border-default bg-bg-secondary text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none touch-manipulation"
              placeholder="Descreva seu projeto, desafio técnico, oportunidade de colaboração ou contexto da proposta..."
            />
          </div>
        </div>

        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 sm:p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-success/10 text-success border border-success/30"
                : "bg-error/10 text-error border border-error/30"
            }`}
          >
            <p className="text-xs sm:text-sm font-medium">{submitStatus.message}</p>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2.5 sm:px-6 sm:py-3 bg-primary text-white rounded-lg text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
          >
            {isSubmitting ? "Enviando..." : "Enviar por E-mail"}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-1 px-4 py-2.5 sm:px-6 sm:py-3 bg-success text-white rounded-lg text-sm sm:text-base font-medium hover:bg-success/90 transition-colors focus:outline-none focus:ring-2 focus:ring-success touch-manipulation"
          >
            Abrir WhatsApp
          </button>
        </div>

        <p className="text-xs text-text-disabled text-center">
          Ou envie diretamente para{" "}
          <a
            href={`mailto:${email}`}
            className="text-primary underline hover:no-underline hover:text-primary-hover transition-colors"
          >
            {email}
          </a>
        </p>
      </form>
    </motion.div>
  );
}

