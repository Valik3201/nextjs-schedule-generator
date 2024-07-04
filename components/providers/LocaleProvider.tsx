"use client";

import { createContext, useContext, ReactNode } from "react";

interface LocaleContextProps {
  locale: string;
  dictionary: Record<string, any>;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  locale: string;
  dictionary: Record<string, any>;
}

export function LocaleProvider({
  children,
  locale,
  dictionary,
}: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
