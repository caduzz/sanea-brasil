import { LiaArrowRightSolid } from "react-icons/lia"
import { Button } from "../../../components/ui/button";

export function Subscribe() {
  return (
    <section id="subscribe" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] h-100 mb-20 flex flex-row align-center">
        <div className="w-[45%] flex flex-col">
          <div className="grid grid-cols-2 grid-rows-2 relative">
            <div className="w-80 h-70 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src="./slide3.png"/>
            </div>
            <div className="w-55 h-45 rounded-2xl overflow-hidden absolute top-10 left-65">
              <img className="w-full h-full object-cover" src="./slide5.png"/>
            </div>
            <div className="row-start-2 w-60 h-50 overflow-hidden relative">
              <img className="w-full h-full object-cover absolute z-[-1]" src="./svg/grid-subscribe.svg"/>
              <div className="w-35 h-40 ml-10 mt-4 bg-[#235D89] rounded-2xl z-1 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">2025</h2>
              </div>
            </div>
            <div className="row-start-2 w-55 h-55 rounded-2xl overflow-hidden absolute top-[-50px] left-50">
              <img className="w-full h-full object-cover" src="./slide6.png"/>
            </div>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col items-start justify-start gap-4 pt-20">
          <h1 className="text-2xl font-bold text-[#235D89]">
            A Universidade Federal do Vale do São Francisco (UNIVASF) tem o prazer de apresentar o II Sanea Brasil, agora em sua edição internacional.
          </h1>
          <p className="text-lg text-[#235D89]">
            Em 2025, reforçamos o compromisso em oferecer um ambiente propício para a construção de políticas públicas eficazes,
            o desenvolvimento de tecnologias inovadoras e a ampliação de parcerias estratégicas,
            garantindo um futuro mais sustentável e acessível para todos. 
          </p>
          <Button Icon={LiaArrowRightSolid} className="mt-10">
            Inscreva-se
          </Button>
        </div>
      </div>
    </section>
  );
}