"use client";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight } from "lucide-react";
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
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-amber-400/60 tracking-widest mb-3">{t(ui.projects.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">{t(ui.projects.title)}</h2>
          <p className="text-slate-600 text-sm mb-12 max-w-xl">{t(ui.projects.subtitle)}</p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-7 sm:p-10 mb-8 border-t-2 border-t-amber-400/50"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className={typeColorMap[featured.type] ?? "tag"}>
                  {t(ui.projects.type[featured.type as keyof typeof ui.projects.type])}
                </span>
                <span className="text-[10px] font-mono text-amber-400/50 uppercase tracking-widest">
                  Featured
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{featured.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{t(featured.description)}</p>
              <div className="flex flex-wrap gap-1.5 mb-7">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag text-[11px]">{tag}</span>
                ))}
              </div>
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-amber-400 transition-colors border border-slate-800 hover:border-amber-400/30 px-4 py-2"
                >
                  <Code2 size={12} />
                  {t(ui.projects.viewCode)}
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>

            {/* Right: highlights */}
            <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-7 lg:pt-0 lg:pl-10">
              <p className="text-[10px] font-mono text-amber-400/50 uppercase tracking-widest mb-5">
                Highlights
              </p>
              <ul className="space-y-3">
                {t(featured.highlights).map((h: string) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-amber-400/70 mt-0.5 shrink-0 font-mono text-xs">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Rest of projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass glass-hover rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className={typeColorMap[p.type] ?? "tag"}>
                    {t(ui.projects.type[p.type as keyof typeof ui.projects.type])}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-100 mt-2">{p.name}</h3>
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-amber-400 transition-colors mt-0.5 shrink-0"
                  >
                    <Code2 size={16} />
                  </a>
                )}
              </div>

              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{t(p.description)}</p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
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
