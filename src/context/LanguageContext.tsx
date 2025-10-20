import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  translate: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    import(`../locales/${language}.json`)
      .then((data) => setTranslations(data))
      .catch(() => console.error("Error loading translations"));
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const translate = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};