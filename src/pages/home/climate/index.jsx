import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Title } from "../../../components/title";

const translations = {
  pt: {
    title: "Conecte sua marca ao maior evento de Saneamento Rural e faça parte dessa transformação!"
  },
  en: {
    title: "Connect your brand to the largest Rural Sanitation event and be part of this transformation!"
  },
  es: {
    title: "¡Conecte su marca al mayor evento de Saneamiento Rural y sea parte de esta transformación!"
  }
};

export function Climate() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="clima" className="relative w-full overflow-hidden flex align-center justify-center p-10 md:mt-15 md:mb-22 m-y-4">
      <div className="w-full max-w-[1250px] flex flex-col items-center justify-center gap-10 md:gap-0">
        <Title>{t.title}</Title>
        <div className="w-full flex flex-col items-center justify-center">
          <img className="w-full" src="./svg/climate.svg" alt="Climate Illustration"/>
        </div>
      </div>
    </section>
  );
}