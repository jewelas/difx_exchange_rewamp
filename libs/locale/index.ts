import en from "./src/en.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: en },
};

let lang = "en";
if (typeof window !== "undefined") {
  const cachedLang = JSON.parse(window.localStorage.getItem('lang') || "null")
  if(cachedLang){
    lang = cachedLang.slug
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

const { t } = i18n;

export default t;
