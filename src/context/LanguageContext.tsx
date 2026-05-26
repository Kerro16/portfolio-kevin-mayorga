"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T>(obj: { es: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
  t: (obj) => obj.es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Detect browser language on client
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved === "es" || saved === "en") {
      setLang(saved);
    } else {
      const browser = navigator.language ?? "es";
      setLang(browser.toLowerCase().startsWith("es") ? "es" : "en");
    }
  }, []);

  function handleSetLang(l: Lang) {
    setLang(l);
    localStorage.setItem("portfolio-lang", l);
  }

  function t<T>(obj: { es: T; en: T }): T {
    return obj[lang];
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
