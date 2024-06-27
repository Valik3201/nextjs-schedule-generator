import { ru, enGB, uk, pl } from "date-fns/locale";
import { DayOfWeek, CustomLocale, LanguageKeys } from "../types/types";

export const daysOfWeek: DayOfWeek[] = [
  { name: "Monday", value: 1 },
  { name: "Tuesday", value: 2 },
  { name: "Wednesday", value: 3 },
  { name: "Thursday", value: 4 },
  { name: "Friday", value: 5 },
  { name: "Saturday", value: 6 },
  { name: "Sunday", value: 0 },
];

export const languageNames: Record<LanguageKeys, string> = {
  en: "English",
  pl: "Polski",
  ru: "Русский",
  uk: "Українська",
};

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
  uk: {
    locale: uk,
    dateFormat: {
      numeric: "dd.MM.yyyy",
      roman: "d MMM yyyy",
      long: "d MMMM yyyy",
      short: "dd MMM yy",
    },
  },
};

export const romanize = (num: number): string => {
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
    "XXII",
  ];
  return romanNumerals[num - 1] || num.toString();
};
