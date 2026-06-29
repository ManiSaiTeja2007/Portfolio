// src/components/sections/Contact/Contact.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/utils/constants";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Integrations Configuration:
  // If you wish to receive real emails, set up a free service like Web3Forms or Formspree,
  // and paste your Access Key / URL here.
  const REAL_EMAIL_SERVICE_ENABLED = false;
  const EMAIL_ENDPOINT_URL = ""; // e.g. "https://api.web3forms.com/submit" or "https://formspree.io/f/your_form_id"

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.subject.trim()) tempErrors.subject = "Subject is required";

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Email address is invalid";
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      if (REAL_EMAIL_SERVICE_ENABLED && EMAIL_ENDPOINT_URL) {
        const response = await fetch(EMAIL_ENDPOINT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            // Add Web3Forms key if required:
            // access_key: "YOUR_ACCESS_KEY_HERE"
          }),
        });

        if (response.ok) {
          setStatus("success");
          setForm({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("error");
        }
      } else {
        // Simulated Local Delay for Premium UX flow
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Contact Form Submit Error:", err);
      setStatus("error");
    }
  };

  const contactCards = [
    {
      icon: (
        <Mail className="text-primary-brand dark:text-blue-400" size={20} />
      ),
      label: "Direct Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      desc: "Send a message anytime",
    },
    {
      icon: <MapPin className="text-emerald-500" size={20} />,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: null,
      desc: "IIIT Sri City, Andhra Pradesh",
    },
    {
      icon: <Briefcase className="text-purple-500" size={20} />,
      label: "Work Availability",
      value: "Seeking Internships",
      href: null,
      desc: "Available for Summer 2026",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full mb-4"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Let's Collaborate</span>
          </motion.div>

          <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind, seeking an intern, or want to discuss
            systems engineering? Send a message and I'll respond within 24
            hours.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Column 1: Info Cards (2/5 span) */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-4 hover:shadow-lg hover:border-primary-brand/30 dark:hover:border-primary-brand/30 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {card.label}
                    </h3>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-base font-bold text-slate-800 dark:text-slate-100 hover:text-primary-brand dark:hover:text-primary-brand transition-colors"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <span className="text-base font-bold text-slate-800 dark:text-slate-100">
                        {card.value}
                      </span>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Pitch Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary-brand/10 to-secondary-brand/10 dark:from-slate-800/50 dark:to-slate-800/20 border border-primary-brand/20 rounded-2xl p-6 text-center lg:text-left mt-6"
            >
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                Why Collaborate?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                You get a developer who understands both{' '}
                <strong className="text-slate-800 dark:text-slate-200">embedded hardware constraints</strong>{' '}
                and{' '}
                <strong className="text-slate-800 dark:text-slate-200">scalable frontend architecture</strong>.
                Let's construct high-fidelity interfaces backed by clean, efficient TypeScript code.
              </p>
            </motion.div>
          </div>

          {/* Column 2: Interactive Contact Form (3/5 span) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-center relative min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                // Success feedback state
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-full text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 size={56} className="animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      Thank you for reaching out. Your message has been
                      successfully received, and I'll get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                // Input form state
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  {status === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/80 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
                      <AlertCircle className="flex-shrink-0" />
                      <p className="text-sm">
                        Submission failed. Please check your internet connection
                        or try sending directly via email.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border ${errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"} focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent transition-all`}
                        placeholder="Mani Sai Teja"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"} focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent transition-all`}
                        placeholder="manisaiteja2007@gmail.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border ${errors.subject ? "border-red-500" : "border-slate-200 dark:border-slate-800"} focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent transition-all`}
                      placeholder="Project collaboration request"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border ${errors.message ? "border-red-500" : "border-slate-200 dark:border-slate-800"} focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent transition-all resize-none`}
                      placeholder="Hi Mani, I noticed your ECE systems thinking and wanted to ask..."
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-primary-brand to-blue-600 hover:from-primary-brand/90 hover:to-blue-600/90 text-white rounded-xl font-bold shadow-lg hover:shadow-primary-brand/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
