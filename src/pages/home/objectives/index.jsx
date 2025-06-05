import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { odsData } from "../../../constants/ods";
import { ObjectiveCard } from "./objectiveCard";

const translations = {
  pt: {
    title: <>O <strong>II Sanea Brasil</strong> está fortemente alinhado à <strong>Agenda 2030</strong>, promovendo ações e debates que contribuem diretamente para a realização dos <strong>Objetivos de Desenvolvimento Sustentável (ODS).</strong></>,
    subtitle: <>O evento fortalece o diálogo entre diferentes setores — público, privado, acadêmico e social — em torno de soluções inovadoras e integradas para o Saneamento Básico Rural.</>
  },
  en: {
    title: <>The <strong>II Sanea Brasil</strong> is strongly aligned with the <strong>2030 Agenda</strong>, promoting actions and debates that directly contribute to achieving the <strong>Sustainable Development Goals (SDGs).</strong></>,
    subtitle: <>The event strengthens dialogue between different sectors — public, private, academic, and social — around innovative and integrated solutions for Rural Basic Sanitation.</>
  },
  es: {
    title: <>El <strong>II Sanea Brasil</strong> está fuertemente alineado con la <strong>Agenda 2030</strong>, promoviendo acciones y debates que contribuyen directamente al logro de los <strong>Objetivos de Desarrollo Sostenible (ODS).</strong></>,
    subtitle: <>El evento fortalece el diálogo entre diferentes sectores — público, privado, académico y social — en torno a soluciones innovadoras e integradas para el Saneamiento Básico Rural.</>
  }
};

export function Objectives() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10 md:mb-40">
      <div className="w-full max-w-[1250px] flex flex-row align-center justify-center">
        <div className="w-full bg-[#235D89]/9 rounded-4xl pt-4 md:pb-50 flex flex-col items-center justify-center relative">
          <h1 className="text-[#235D89] mb-4 px-4 text-lg text-justify md:text-3xl md:text-center md:px-0">
            {t.title}
          </h1>
          <div className="w-full flex flex-wrap items-center justify-center gap-15 mt-10">
            {odsData.map((item) => <ObjectiveCard id={item.id} title={item.title} icon={item.icon} color={item.color}/>)}
          </div>
          <div className="mt-10 md:absolute md:p-10 md:mt-15 md:-bottom-35 w-full md:w-200 md:h-70 bg-[#235D89] rounded-2xl flex md:flex-row flex-col items-center justify-betweend gap-10 p-8">
            <img src="./svg/map.svg" alt="Objetivos de Desenvolvimento Sustentável" className="w-90 object-cover rounded-4xl" />
            <h2 className="text-white text-1xl font-light text-justify">
              {t.subtitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}