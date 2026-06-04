"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-amber-400/60 tracking-widest mb-3">{t(ui.skills.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">{t(ui.skills.title)}</h2>
        </motion.div>

        <div className="divide-y divide-white/[0.05]">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10 py-5"
            >
              <p className="font-mono text-[10px] text-amber-400/60 uppercase tracking-widest sm:w-44 sm:shrink-0 sm:pt-1.5">
                {t(group.category)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
