export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pl", "ru", "ua"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
