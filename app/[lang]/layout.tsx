import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getDictionary } from "./dictionaries";
import { inter, lora } from "./fonts";
import { SupportedLanguages } from "./generateStaticParams";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schedule Generator",
  description:
    "Create personalized schedules with ease! Schedule Generator by Next.js and React.",
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
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          lora.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider locale={lang} dictionary={dictionary}>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
