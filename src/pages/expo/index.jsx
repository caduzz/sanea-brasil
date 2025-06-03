import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";
import { BiChevronRight } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { CardExpo } from "./cardExpo";

export function ExpoSanea () {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px] px-10 md:px-0">
          <PageHeader title="Expo Sanea">
          </PageHeader>
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-bold text-[#235D89] mb-8 text-center">Feira Internacional de Saneamento Rural </h1>
  
            <div className="flex flex-col md:flex-row justify-center gap-20">
              <div className="flex flex-col gap-5 md:w-180 w-full">
                <div className="p-10 bg-[#235D8920] rounded-2xl w-full">
                  <h1 className="text-[#235D89] text-2xl font-bold text-center">SEJA UM EXPOSITOR</h1>
                  <div className="flex flex-col gap-4 mt-4 text-[#235D89]">
                    <CardExpo title="Nome" />
                    <CardExpo title="Empresa/Instituição" />
                    <CardExpo title="E-mail" />
                    <CardExpo title="Whatsapp" />
                  </div>
                </div>
                <div className="p-10 bg-[#235D8920] rounded-2xl w-full flex flex-col items-center justify-center">
                  <div className="text-lg font-bold text-[#235D89] flex items-center flex-col mb-10">
                    <div className="flex items-center justify-center w-20 h-20 bg-[#235D89] rounded-full">
                      <MdLocalPhone color="#ffffff" size={30}/>
                    </div>
                    <p>Fale conosco</p>
                  </div>
                  <p className="text-[#235D8950]">+55 <strong className="text-[#235D89]">(87) 99197-4078</strong></p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div>
                  <p className="text-[#235D89]">
                    Promovido pela Universidade Federal do Vale do São Francisco (UNIVASF),
                    em parceria com o Ministério das Cidades,
                    o evento deste ano contará com uma grande novidade:
                    a Exposanea – Feira Internacional de Soluções para o Saneamento Rural.
                    Essa feira será um espaço dedicado à aplicação dos conhecimentos da engenharia e das inovações tecnológicas no setor,
                    reunindo as principais empresas da cadeia produtiva do saneamento,
                    incluindo fabricantes, distribuidoras e prestadoras de serviços.
                  </p>
                  <p className="text-[#235D89]">
                    A Expo Sanea ocorrerá simultaneamente ao Congresso Internacional de Saneamento Rural -
                    SANEA BRASIL no Centro de Convenções Nilo Coelho, em Petrolina/PE,
                    com um pavilhão de eventos climatizado e uma ampla área de estacionamento.
                    Com uma área total construída de 10.504,20 m²,
                    o local oferece uma infraestrutura completa para a realização do evento.
                  </p>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Saira Condensed"
                    }}
                    className="text-5xl font-bold text-[#273364] my-10"
                  >PROGRAME-SE!</h1>
                  <div className="bg-[#235D89] flex flex-col rounded-lg py-10 overflow-hidden relative">
                    <div className="flex border-b-[1px] font-bold text-white border-b-gray-300 divide-x-1 divide-gray-300 justify-center items-center">
                      <p className="p-4 text-2xl w-full text-center">POR QUE EXPOR</p>
                      <p className="p-4 text-2xl w-full text-center">POR QUE VISITAR?</p>
                    </div>
                    <div className="text-white flex items-center justify-between p-10 border-b-[1px] border-b-gray-300">
                      <p className="w-[50%] px-10 z-2">Alcance clientes, destaque-se no mercado e multiplique suas oportunidades.</p>
                      <p className="w-[50%] px-10 z-2">Conheça as melhores soluções e inovações em produtos e serviços direcionados ao merdado do Saneamento Rural.</p>
                      <img src="./svg/map.svg" className="absolute top-30 opacity-20 z-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#235D89] mb-10 mt-20 text-center">Planta do Evento</h1>
          <img src="./mapa_evento.png" className="w-full" />
        </div>
      </main>
      <Footer />
    </div>
  )
}