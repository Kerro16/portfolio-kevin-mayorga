"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";

const stats = [
  { value: "5+", key: "exp" as const },
  { value: "4+", key: "comp" as const },
  { value: "25+", key: "tech" as const },
  { value: "2",   key: "countries" as const },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-amber-400/60 tracking-widest mb-3">{t(ui.about.label)}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">{t(ui.about.title)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-slate-400 leading-relaxed text-sm"
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t(ui.about.bio1).replace(
                  "<strong>",
                  '<strong class="text-slate-200 font-medium">'
                ),
              }}
            />
            <p>
              {t(ui.about.bio2).split("<cyan>")[0]}
              <span className="text-amber-400">
                {t(ui.about.bio2).split("<cyan>")[1]?.split("</cyan>")[0]}
              </span>
              {t(ui.about.bio2).split("</cyan>")[1]}
            </p>
            <p>{t(ui.about.bio3)}</p>
            <p className="text-slate-600 text-xs">{t(ui.about.bio4)}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s) => (
              <div key={s.key} className="border-l-2 border-amber-400 pl-5">
                <p className="text-4xl font-bold font-mono text-amber-400 leading-none">
                  {s.value}
                </p>
                <p className="text-[11px] text-slate-600 mt-2 uppercase tracking-wider font-mono">
                  {t(ui.about.stats[s.key])}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
