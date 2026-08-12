import en from "../locales/en.json";
import it from "../locales/it.json";

export const languages = {
  en,
  it,
};

export type Lang = keyof typeof languages;

export function getTranslation(lang: Lang) {
  return languages[lang];
}
