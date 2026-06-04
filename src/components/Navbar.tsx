"use client";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, Lang } from "@/context/LanguageContext";
import { ui } from "@/data/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about",      label: t(ui.nav.about) },
    { href: "#experience", label: t(ui.nav.experience) },
    { href: "#skills",     label: t(ui.nav.skills) },
    { href: "#projects",   label: t(ui.nav.projects) },
    { href: "#contact",    label: t(ui.nav.contact) },
  ];

  const otherLang: Lang = lang === "es" ? "en" : "es";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/[0.05] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-sm font-mono font-bold gradient-text tracking-tight">
          KM<span className="text-white/40">.</span>dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-500 hover:text-amber-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(otherLang)}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-amber-400 transition-colors px-2 py-1 border border-slate-800 hover:border-amber-400/30"
            title={otherLang === "en" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe size={11} />
            <span className="uppercase">{otherLang}</span>
          </button>

          <a
            href="mailto:kmayorga1995@gmail.com"
            className="text-xs font-medium px-4 py-2 border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 transition-colors duration-200"
          >
            {t(ui.nav.hire)}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(otherLang)}
            className="text-xs font-mono text-slate-600 hover:text-amber-400 transition-colors uppercase"
          >
            {otherLang}
          </button>
          <button
            className="text-slate-500 hover:text-amber-400 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/[0.05] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-slate-400 hover:text-amber-400 transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
