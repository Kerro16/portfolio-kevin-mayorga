"use client";
import { motion } from "framer-motion";
import { Code2, Mail, MapPin, ArrowDown } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-slate-400 font-mono">{t(ui.hero.available)}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">Kevin</span>{" "}
          <span className="text-slate-100">Mayorga</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 mb-2 font-light"
        >
          {t(personal.title)}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm font-mono text-cyan-400/70 tracking-widest mb-8"
        >
          {t(ui.hero.tagline)}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-10"
        >
          <MapPin size={12} />
          <span>{personal.location}</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors duration-200"
          >
            {t(ui.hero.cta1)}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-medium text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
          >
            {t(ui.hero.cta2)}
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
          >
            <Code2 size={16} />
            <span>{t(ui.hero.github)}</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
          >
            <Mail size={16} />
            <span>{personal.email}</span>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
