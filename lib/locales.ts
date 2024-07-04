import { ru, enGB, uk, pl } from "date-fns/locale";
import { CustomLocale } from "../types/types";

export const locales: Record<string, CustomLocale> = {
  en: {
    locale: enGB,
    dateFormat: {
      numeric: "MM/dd/yyyy",
      roman: "d MMM yyyy",
      long: "MMMM d, yyyy",
      short: "MMM dd yy",
    },
  },
  pl: {
    locale: pl,
    dateFormat: {
      numeric: "dd.MM.yyyy",
      roman: "d MMM yyyy",
      long: "d MMMM yyyy",
      short: "dd MM yy",
    },
  },
  ru: {
    locale: ru,
    dateFormat: {
      numeric: "dd.MM.yyyy",
      roman: "d MMM yyyy",
      long: "d MMMM yyyy",
      short: "dd MMM yy",
    },
  },
  ua: {
    locale: uk,
    dateFormat: {
      numeric: "dd.MM.yyyy",
      roman: "d MMM yyyy",
      long: "d MMMM yyyy",
      short: "dd MMM yy",
    },
  },
};
