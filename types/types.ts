import { Locale } from "date-fns";

export interface CustomLocale {
  locale: Locale;
  dateFormat: {
    numeric: string;
    roman: string;
    long: string;
    short: string;
  };
}

export type DateFormat = "numeric" | "roman" | "long" | "short";

export interface GeneratedDate {
  period: string;
  dates: string;
}

export type SupportedLanguages = "en" | "pl" | "ua" | "ru";
