import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Card } from "../../../components/card";

const translations = {
  pt: {
    subtitle: "O II Sanea Brasil reconhece seu papel na agenda de adaptação às mudanças climáticas, contemplando os 4 eixos do saneamento.",
    water: "água potável",
    waste: "resíduos sólidos",
    sewage: "Esgotamento sanitário",
    drainage: "Drenagem de águas pluviais"
  },
  en: {
    subtitle: "The II Sanea Brasil recognizes its role in the climate change adaptation agenda, covering the 4 axes of sanitation.",
    water: "Drinking water",
    waste: "Solid waste",
    sewage: "Sanitary sewage",
    drainage: "Stormwater drainage"
  },
  es: {
    subtitle: "El II Sanea Brasil reconoce su papel en la agenda de adaptación al cambio climático, contemplando los 4 ejes del saneamiento.",
    water: "Agua potable",
    waste: "Residuos sólidos",
    sewage: "Alcantarillado sanitario",
    drainage: "Drenaje de aguas pluviales"
  }
};

export function Exle() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col align-center justify-center gap-10">
        <div>
          <h2 className="text-[#235D89] text-3xl font-bold mb-4">
            {t.subtitle}
          </h2>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-10">
          <Card title={t.water} image={"./card1.png"}/>
          <Card title={t.waste} image={"./card2.png"}/>
          <Card title={t.sewage} image={"./card3.png"}/>
          <Card title={t.drainage} image={"./card4.png"}/>
        </div>
      </div>
    </section>
  );
}