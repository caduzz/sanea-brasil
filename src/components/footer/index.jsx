export function Footer() {
  return (
    <footer className="w-full bg-[#235D89] text-white flex items-center justify-center">
      <div className="w-full max-w-[1400px] min-h-[400px] container mx-auto flex flex-col items-center relative overflow-hidden px-4">
        <img
          src="./svg/map.svg"
          alt="sanea brasil 2025 - map.svg"
          className="mb-4 w-[1200px] md:w-[1800px] absolute opacity-20 z-0 left-1/2 -translate-x-1/2"
        />
        <div className="z-10 w-full">
          <div className="w-full flex flex-col md:flex-row py-10 md:py-15 gap-10 md:gap-20 items-center md:items-start">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h1 className="text-xl md:text-2xl uppercase font-bold">Realização:</h1>
              <div className="flex items-center justify-center gap-6 md:gap-10 mt-4">
                <img src="./logo-univasf.png" alt="sanea brasil 2025 - logo-univasf.png" className="w-[140px] md:w-[200px]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h1 className="text-xl md:text-2xl uppercase font-bold">Apoiadores:</h1>
              <div className="flex items-center justify-center gap-6 md:gap-10 mt-4">
                <img src="./logos-contri.png" alt="sanea brasil 2025 - logos-contri.png" className="w-[300px] md:w-[700px]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h1 className="text-xl md:text-2xl uppercase font-bold">Apoio institucional:</h1>
              <div className="flex items-center justify-center gap-6 md:gap-10 mt-4">
                <img src="./logo-petrolina.png" alt="sanea brasil 2025 - logo-petrolina.png" className="w-[90px] md:w-[150px]" />
                <img src="./logo-fadex.png" alt="sanea brasil 2025 - logo-fadex.png" className="w-[90px] md:w-[150px]" />
              </div>
            </div>
          </div>
          <hr className="border-white/30" />
          <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8 md:mt-10 gap-6 md:gap-20">
            <div className="flex flex-col items-center">
              <h2 className="text-xs md:text-sm uppercase font-bold">sede</h2>
              <div>
                <p className="text-center text-xs md:text-base">
                  Rua Doutor José e Maria, 27 A Centro,<br /> Petrolina-PE, 56304-050
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xs md:text-sm uppercase font-bold">contato</h2>
              <div>
                <p className="text-xs md:text-base">87 99197-4078</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xs md:text-sm uppercase font-bold">redes sociais</h2>
              <div>
                <p className="text-xs md:text-base">Instagram</p>
                <p className="text-xs md:text-base">Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}