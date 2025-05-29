import { odsData } from "../../../constants/ods";
import { ObjectiveCard } from "./objectiveCard";

export function Objectives() {
  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10 md:mb-40">
      <div className="w-full max-w-[1250px] flex flex-row align-center justify-center">
        <div className="w-full bg-[#235D89]/9 rounded-4xl pt-10 md:pb-50 flex flex-col items-center justify-center relative">
          <h1 className="text-[#235D89] mb-4 px-10 text-lg text-justify md:text-3xl md:text-center md:px-0">
            O <strong>II Sanea Brasil</strong> está fortemente alinhado à <strong>Agenda 2030</strong>,
            promovendo ações e debates que contribuem diretamente para 
            a realização dos <strong>Objetivos de Desenvolvimento Sustentável (ODS).</strong>
          </h1>
          <div className="w-full flex flex-wrap items-center justify-center gap-15 mt-15">
            {odsData.map((item) => <ObjectiveCard id={item.id} title={item.title} icon={item.icon} color={item.color}/>)}
          </div>
          <div className="md:absolute mt-10 md:-bottom-35 w-full md:w-200 md:h-70 bg-[#235D89] rounded-2xl flex md:flex-row flex-col items-center justify-betweend gap-10 p-10">
            <img src="./svg/map.svg" alt="Objetivos de Desenvolvimento Sustentável" className="w-90 object-cover rounded-4xl" />
            <h2 className="text-white text-1xl font-light text-justify">
              O evento fortalece o diálogo entre diferentes setores — público,
              privado, acadêmico e social — em torno de soluções inovadoras
              e integradas para o Saneamento Básico Rural.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}