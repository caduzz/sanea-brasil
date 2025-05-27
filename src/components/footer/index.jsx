export function Footer() {
  return (
    <footer className="w-full bg-[#235D89] text-white flex items-center justify-center">
      <div className="w-[1400px] h-[400px] container mx-auto flex flex-col items-center relative overflow-hidden">
        <img src="./svg/map.svg" alt="Sanea Brasil Logo" className="mb-4 w-[1800px] absolute opacity-20 z-0" />
        <div className="z-1">
          <div className="w-full flex py-15 gap-20">
            <div>
              <h1 className="text-2xl uppercase font-bold">Realização:</h1>
              <div className="flex items-center justify-center gap-10 mt-4">
                <img src="./logo-univasf.png" alt="Sanea Brasil Logo" className="w-[200px]" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold">Apoiadores:</h1>
              <div className="flex items-center justify-center gap-10 mt-4">
                <img src="./logos-contri.png" alt="Sanea Brasil Logo" className="w-[700px]" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold">Apoio institucional:</h1>
              <div className="flex items-center justify-center gap-10 mt-4">
                <img src="./logo-petrolina.png" alt="Sanea Brasil Logo" className="w-[150px]" />
                <img src="./logo-fadex.png" alt="Sanea Brasil Logo" className="w-[150px]" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="w-full flex justify-center mt-10 gap-30">
            <div className="flex flex-col items-center">
              <h2 className="text-sm uppercase font-bold">sede</h2>
              <div className="">
                <p className="text-center">
                  Rua Doutor José e Maria, 27 A Centro,<br/> Petrolina-PE, 56304-050
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-sm uppercase font-bold">contato</h2>
              <div className="">
                <p>87 99197-4078</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-sm uppercase font-bold">redes sociais</h2>
              <div className="">
                <p>Instagram</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}