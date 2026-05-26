import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Mayorga — Computer Science Engineer",
  description:
    "Portfolio of Kevin Alexander Mayorga Martínez — Computer Science Engineer specialized in backend, fintech, and systems architecture.",
  keywords: ["Kevin Mayorga", "Ingeniero", "Backend", "Java", "C#", ".NET", "Portfolio", "El Salvador"],
  openGraph: {
    title: "Kevin Mayorga — Engineer",
    description: "Backend Engineer · Fintech · Systems Architecture",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-200`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
