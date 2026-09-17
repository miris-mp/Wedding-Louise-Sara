import { en } from "./en";
import { it } from "./it";

export const translations = {
  en,
  it,
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
