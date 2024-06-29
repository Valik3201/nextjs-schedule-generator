import { Locale } from "date-fns";

export interface DayOfWeek {
  name: string;
  value: number;
}

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
