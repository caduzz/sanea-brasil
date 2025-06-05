import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";

const translations = {
  pt: {
    exhibitor: "Seja um expositor"
  },
  en: {
    exhibitor: "Be an exhibitor"
  },
  es: {
    exhibitor: "Sea un expositor"
  }
};

export function Divider() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <div className="relative w-full bg-[#235D89] overflow-hidden py-4 mt-15 mb-22">
      <div className="marquee whitespace-nowrap flex gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-row items-center justify-center gap-5">
            <h2 className="text-white font-bold text-4xl">
              {t.exhibitor}
            </h2>
            <h2 className="text-[#235D89] font-bold text-4xl [text-shadow:1px_1px_0_#FFFFFF,-1px_-1px_0_#FFFFFF,1px_-1px_0_#FFFFFF,-1px_1px_0_#FFFFFF]">
              {t.exhibitor}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}