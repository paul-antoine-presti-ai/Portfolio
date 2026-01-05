"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations, TranslationKey } from "@/data/translations";

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return { t, language, setLanguage };
}

