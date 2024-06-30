import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { getDictionary } from "./dictionaries";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

type SupportedLanguages = "en" | "pl" | "ua" | "ru";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }, { lang: "ua" }, { lang: "ru" }];
}

export const metadata: Metadata = {
  title: "Schedule Generator",
  description: "Schedule Generator by Next.js and React",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: SupportedLanguages;
  };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          lora.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={lang} dictionary={dictionary}>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
