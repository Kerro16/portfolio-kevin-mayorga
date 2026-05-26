"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";
import { skills } from "@/data/portfolio";

const colorByIndex = ["tag", "tag tag-violet", "tag", "tag tag-green", "tag tag-violet", "tag tag-green"];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3">{t(ui.skills.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-14">{t(ui.skills.title)}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">
                {t(group.category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={colorByIndex[i] ?? "tag"}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
