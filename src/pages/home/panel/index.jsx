import { painelData } from "../../../constants/painel";

export function Panel() {
  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex md:flex-row flex-col align-center justify-center gap-10 md:gap-60 relative">
        <div className="md:bg-[#235D89] md:pt-10 pointer-events-none select-none md:absolute rounded-t-4xl md:-left-50 md:top-1/2 md:-translate-y-1/2 md:-rotate-90 z-0 w-full md:w-[800px] md:h-[400px] flex items-center justify-center md:items-start">
          <h1 className="text-3xl md:text-[70px] font-bold text-[#235D89] md:text-white text-center">Painéis temáticos</h1>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center md:justify-end gap-8 relative">
          {painelData.map((painel, index) => (
            <div key={index} className="w-85 relative bg-white flex flex-row border-[1px] border-[#0001] rounded-[15px] p-4 mb-6">
              <div className="w-15 h-15 bg-[#235D89] border-2 border-white text-white rounded-full flex items-center justify-center absolute -left-5">
                <p className="text-lg">{painel.id}</p>
              </div>
              <div className="ml-10 pt-4 pr-2">
                <div className="w-full h-30">
                  <h2 className="text-[#235D89] text-md font-bold mb-4">
                    {painel.title}
                  </h2>
                  <p className="text-[#0008] text-sm mb-4">
                    {painel.description}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#235D89]">{painel.data}</p>
                  <p className="text-sm text-[#235D89]">{painel.hora}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}