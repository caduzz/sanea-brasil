import { painelData } from "../../../constants/painel";

export function Panel() {
  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-row align-center justify-center gap-60 relative">
        <div className="bg-[#235D89] pt-10 pointer-events-none select-none absolute rounded-t-4xl -left-50 top-1/2 -translate-y-1/2 -rotate-90 z-0 w-[800px] h-[400px] flex items-start justify-center">
          <h1 className="text-[70px] font-bold text-white">Painéis temáticos</h1>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-end gap-10 relative z-10">
          {painelData.map((painel, index) => (
            <div key={index} className="w-80 h-50 relative bg-white flex flex-row border-[1px] border-[#0001] rounded-[15px] p-4 mb-6">
              <div className="w-13 h-13 bg-[#235D89] border-2 border-white text-white rounded-full flex items-center justify-center absolute -left-5">
                <p className="text-lg">{painel.id}</p>
              </div>
              <div className="ml-10 pt-4 pr-2">
                <h2 className="text-[#235D89] text-lg font-bold mb-4">
                  {painel.title}
                </h2>
                <p className="text-[#0008] text-md mb-4">
                  {painel.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}