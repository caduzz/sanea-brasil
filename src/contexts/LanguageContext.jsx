import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Load language from local storage or default to browser language
    return localStorage.getItem("language") || navigator.language.split("-")[0] || "pt";
  });

  const toggleLanguage = (language) => {
    if (["pt", "en", "es"].includes(language)) {
      setLanguage(language);
      localStorage.setItem("language", language); // Save language to local storage
    }
  };

  useEffect(() => {
    // Ensure local storage is updated if language changes
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
