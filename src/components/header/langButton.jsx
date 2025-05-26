import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export function LangButton({ lang, src }) {
  const { toggleLanguage } = useContext(LanguageContext);
  

  const handleLanguageChange = () => {
    toggleLanguage(lang);
  };

  return (
    <button className="w-6 h-6 cursor-pointer" onClick={handleLanguageChange}>
      <img src={src} alt={`bandeira da ${lang}`} />
    </button>
  );
}