"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3">{t(ui.experience.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-14">{t(ui.experience.title)}</h2>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-400/40 to-transparent" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-5 flex items-center justify-center">
                  <div
                    className={`h-3 w-3 rounded-full border-2 ${
                      job.current
                        ? "border-cyan-400 bg-cyan-400/30"
                        : "border-slate-600 bg-slate-900"
                    }`}
                  />
                </div>

                <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-100">{t(job.role)}</h3>
                      <p className="text-cyan-400 text-sm font-medium">
                        {typeof job.company === "string" ? job.company : t(job.company)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="tag tag-green">{t(ui.experience.current)}</span>
                      )}
                      <span className="text-xs text-slate-500 font-mono whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{t(job.description)}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
