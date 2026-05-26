"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";
import { projects } from "@/data/portfolio";

const typeColorMap: Record<string, string> = {
  Personal:  "tag tag-violet",
  Freelance: "tag tag-green",
  Client:    "tag",
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3">{t(ui.projects.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">{t(ui.projects.title)}</h2>
          <p className="text-slate-500 text-sm mb-14 max-w-xl">{t(ui.projects.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={typeColorMap[p.type] ?? "tag"}>
                    {t(ui.projects.type[p.type as keyof typeof ui.projects.type])}
                  </span>
                  <h3 className="text-base font-semibold text-slate-100 mt-2">{p.name}</h3>
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan-400 transition-colors mt-1 shrink-0"
                    title={t(ui.projects.viewCode)}
                  >
                    <Code2 size={17} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t(p.description)}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {t(p.highlights).map((h: string) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-cyan-400 mt-0.5 shrink-0">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag text-[11px]">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
