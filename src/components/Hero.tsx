"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/translations";

function TerminalRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <span className="text-neutral-600 w-20 shrink-0">{label}</span>
      <span className={accent ? "text-amber-400" : "text-neutral-300"}>{value}</span>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-10">

          {/* Left: text content */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-neutral-600 mb-7 tracking-widest"
            >
              ~/kevin/mayorga
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-mono font-bold leading-none tracking-tight mb-7"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                KEVIN
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400">
                MAYORGA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="text-slate-400 text-base font-light mb-1.5"
            >
              {t(personal.title)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="font-mono text-xs text-amber-400/50 tracking-widest mb-8"
            >
              {t(ui.hero.tagline)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              <span className="flex items-center gap-2 text-xs text-slate-500">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                {t(ui.hero.available)}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <MapPin size={11} />
                {personal.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors duration-200"
              >
                {t(ui.hero.cta1)}
                <ArrowRight size={13} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-slate-800 text-slate-300 font-medium text-sm hover:border-amber-400/40 hover:text-amber-400 transition-colors duration-200"
              >
                {t(ui.hero.cta2)}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-800/60 text-slate-600 font-mono text-xs hover:border-slate-700 hover:text-slate-400 transition-colors duration-200"
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* Right: terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-80 xl:w-[22rem] w-full shrink-0"
          >
            <div className="glass font-mono text-xs overflow-hidden">
              {/* macOS-style title bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05] bg-white/[0.015]">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                <span className="ml-auto text-[10px] text-neutral-700 tracking-widest">
                  kevin@portfolio:~
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 space-y-1.5">
                <p className="text-neutral-700 mb-4">$ whoami --verbose</p>
                <TerminalRow label="name"     value="Kevin Mayorga" />
                <TerminalRow label="role"     value="Oracle Tech Lead" accent />
                <TerminalRow label="company"  value="Bancoagrícola" />
                <TerminalRow label="based"    value="El Salvador 🇸🇻" />
                <TerminalRow label="exp"      value="5+ years" />
                <TerminalRow label="stack"    value="Java · Go · C# · TS" />
                <TerminalRow label="os"       value="Windows / Linux" />
                <div className="flex gap-3">
                  <span className="text-neutral-600 w-20 shrink-0">status</span>
                  <span className="text-emerald-400">● available</span>
                </div>
                <p className="text-neutral-700 pt-3">
                  $ <span className="animate-pulse">█</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
