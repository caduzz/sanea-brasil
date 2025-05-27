
export function Objectives() {
  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10 mb-40">
      <div className="w-full max-w-[1250px] flex flex-row align-center justify-center">
        <div className="w-full bg-[#235D89]/9 rounded-4xl p-10 pb-50 flex flex-col items-center justify-center relative">
          <h1 className="text-[#235D89] text-3xl text-center mb-4">
            O <strong>II Sanea Brasil</strong> está fortemente alinhado à <strong>Agenda 2030</strong>,
            promovendo ações e debates que contribuem diretamente para 
            a realização dos <strong>Objetivos de Desenvolvimento Sustentável (ODS).</strong>
          </h1>
          <div className="w-full flex flex-wrap items-center justify-center gap-15 mt-15">
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods3.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods4.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods5.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods6.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods10.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods11.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
            <div className="w-50 h-60 p-5 flex items-center justify-center shadow bg-white rounded-md overflow-hidden">
              <img src="./svg/ods13.svg" alt="Objetivo 1: Saude e bem-estar" className="w-full object-cover rounded-md" />
            </div>
          </div>
          <div className="absolute -bottom-35 w-200 h-70 bg-[#235D89] rounded-2xl flex items-center justify-betweend gap-10 p-10">
            <img src="./svg/map.svg" alt="Objetivos de Desenvolvimento Sustentável" className="w-90 object-cover rounded-4xl" />
            <h2 className="text-white text-1xl font-light">
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