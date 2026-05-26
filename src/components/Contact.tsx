"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code2, Send } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const contactItems = [
    { icon: Mail,    label: "Email",                value: personal.email,      href: `mailto:${personal.email}` },
    { icon: Phone,   label: "Teléfono / Phone",     value: personal.phone,      href: `tel:${personal.phone}` },
    { icon: MapPin,  label: t(ui.contact.location), value: personal.location,   href: null },
    { icon: Code2,   label: "GitHub",               value: "github.com/Kerro16", href: personal.github },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 transition-colors";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3">{t(ui.contact.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{t(ui.contact.title)}</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">{t(ui.contact.subtitle)}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group block"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-600 uppercase tracking-wide font-mono">{item.label}</p>
                      <p className="text-sm text-slate-300 font-medium truncate">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-5 flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-700/50 text-slate-500">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-600 uppercase tracking-wide font-mono">{item.label}</p>
                      <p className="text-sm text-slate-400">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-slate-500 uppercase tracking-wide font-mono block mb-1.5">
                  {t(ui.contact.form.name)}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Kevin"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-500 uppercase tracking-wide font-mono block mb-1.5">
                  {t(ui.contact.form.email)}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="kevin@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-slate-500 uppercase tracking-wide font-mono block mb-1.5">
                {t(ui.contact.form.message)}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder={t(ui.contact.form.placeholder)}
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-cyan-400 font-medium">{t(ui.contact.form.success)}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 font-medium">{t(ui.contact.form.error)}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {status === "sending" ? t(ui.contact.form.sending) : t(ui.contact.form.send)}
            </button>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24 pt-8 border-t border-slate-800/50 text-center"
      >
        <p className="text-xs text-slate-600 font-mono">
          Kevin Mayorga © {new Date().getFullYear()} · {t(ui.contact.footer)}
        </p>
      </motion.div>
    </section>
  );
}
