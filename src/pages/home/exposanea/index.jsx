import { LiaArrowRightSolid, LiaWhatsapp } from "react-icons/lia"
import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Button } from "../../../components/ui/button";

const translations = {
  pt: {
    highlight: "O evento deste ano contará com uma grande novidade: a",
    expoTitle: "Exposanea – Feira Internacional de Soluções para o Saneamento Rural.",
    description: "Este espaço será um verdadeiro centro de inovação, reunindo mais de 48 estandes com tecnologias avançadas, produtos e serviços voltados para o setor de saneamento rural.",
    beExhibitor: "Seja um Expositor",
    whatsapp: "Whatsapp"
  },
  en: {
    highlight: "This year's event will feature a major innovation:",
    expoTitle: "Exposanea – International Fair of Solutions for Rural Sanitation.",
    description: "This space will be a true center of innovation, bringing together more than 48 booths with advanced technologies, products, and services aimed at the rural sanitation sector.",
    beExhibitor: "Be an Exhibitor",
    whatsapp: "Whatsapp"
  },
  es: {
    highlight: "El evento de este año contará con una gran novedad:",
    expoTitle: "Exposanea – Feria Internacional de Soluciones para el Saneamiento Rural.",
    description: "Este espacio será un verdadero centro de innovación, reuniendo más de 48 stands con tecnologías avanzadas, productos y servicios enfocados en el sector de saneamiento rural.",
    beExhibitor: "Sea un Expositor",
    whatsapp: "Whatsapp"
  }
};

export function ExpoSanea() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col md:flex-row align-center justify-center gap-30">
        <div className="w-full md:w-85 h-95 relative">
          <div className="w-full h-full border-3 border-[#235D89] rounded-[10px] absolute z-1">
            <div className="w-40 h-16 bg-[#235D89] text-white rounded-[10px] absolute bottom-4 -right-4 md:right-[-60px] md:bottom-10 gap-1 flex items-center justify-center">
              <h1 className="text-3xl font-bold">48</h1>
              <p className="font-light">Estandes</p>
            </div>
          </div>
          <img className="w-full h-full object-cover rounded-[10px] absolute z-0 transform translate-x-2 -translate-y-2 md:translate-x-8 md:-translate-y-8" src="./expo-sanea.png" alt="sanea brasil - expo sanea logo"/>
        </div>
        <div className="w-full md:w-100 flex flex-col items-center justify-center gap-10">
          <img className="w-full" src="./svg/sanea2025.svg" alt="sanea brasil 2025 - expo sanea"/>
          <div>
            <p className="text-[#235D89]">
              {t.highlight} <strong>{t.expoTitle}</strong> {t.description}
            </p>
          </div>
          <div className="w-full flex md:items-center md:justify-between gap-2 mt-4 md:flex-row flex-col-reverse">
            <Button Icon={LiaArrowRightSolid} className="rounded-full" href={""}>
              {t.beExhibitor}
            </Button>
            <div className="flex items-center mb-10 md:mb-0">
              <div className="bg-[#235D89] rounded-full w-10 h-10 mr-2 flex items-center justify-center">
                <LiaWhatsapp className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-[#0008]">{t.whatsapp}</p>
                <p className="text-[#235D89]">(87) 99197-4078</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}