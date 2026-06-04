"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-amber-400/60 tracking-widest mb-3">{t(ui.experience.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">{t(ui.experience.title)}</h2>
        </motion.div>

        <div className="space-y-5">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass glass-hover rounded-xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Watermark number */}
              <span className="absolute -bottom-3 right-5 font-mono font-bold text-8xl text-white/[0.025] select-none leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-amber-400 font-semibold">
                    {typeof job.company === "string" ? job.company : t(job.company)}
                  </p>
                  <h3 className="text-slate-200 font-medium text-sm mt-0.5">{t(job.role)}</h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {job.current && (
                    <span className="tag tag-green">{t(ui.experience.current)}</span>
                  )}
                  <span className="text-xs text-slate-600 font-mono whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{t(job.description)}</p>

              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
