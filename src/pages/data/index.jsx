import { FaBriefcase, FaCity, FaHotel } from "react-icons/fa";
import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";

export function DataLocal () {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px]">
          <PageHeader title="DATA | LOCAL">
          </PageHeader>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-3xl font-bold text-[#235D89] mb-8">A Universidade Federal do Vale do São Francisco (UNIVASF) tem o prazer de apresentar o II Sanea Brasil, agora em sua edição internacional.</h1>
              <p className="text-[#235D89]">Em 2025, reforçamos o compromisso em oferecer um ambiente propício para a construção de políticas públicas eficazes, o desenvolvimento de tecnologias inovadoras e a ampliação de parcerias estratégicas, garantindo um futuro mais sustentável e acessível para todos. </p>
            </div>
            <div className="flex justify-center gap-20">
              <div className="flex flex-col gap-5">
                <img className="w-400 rounded-lg" src="./data.png"/>
                <img className="w-400 rounded-lg" src="./data2.png"/>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex flex-col gap-5 mb-5">
                  <div className="w-full rounded-md border-[1px] border-[#0002] p-4 flex">
                    <div className="w-15 h-15 flex items-center justify-center bg-[#235D89] rounded-full">
                      <FaCity size={25} color="#FFFFFF"/>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg font-bold text-[#235D89]">Data</h1>
                      <p className="text-[#0007]">29 a 31 de outubro 2025</p>
                    </div>
                  </div>
                  <div className="w-full rounded-md border-[1px] border-[#0002] p-4 flex">
                    <div className="w-15 h-15 flex items-center justify-center bg-[#235D89] rounded-full">
                      <FaHotel size={25} color="#FFFFFF" />
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg font-bold text-[#235D89]">Horário</h1>
                      <p className="text-[#0007]"> 8h às 17h</p>
                    </div>
                  </div>
                  <div className="w-full rounded-md border-[1px] border-[#0002] p-4 flex">
                    <div className="w-15 h-15 flex items-center justify-center bg-[#235D89] rounded-full">
                      <FaBriefcase size={25} color="#FFFFFF"/>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg font-bold text-[#235D89]">Local</h1>
                      <p className="text-[#0007]">Centro de Convenções Nilo Coelho</p>
                    </div>
                  </div>
                </div>
                <img className="w-100" src="./local.png"/>
              </div>
            </div>
            <div className="flex gap-4 text-gray-600">
              <div className="divide-y-1 divide-gray-600">
                <p className="p-5">
                  O evento acontecerá no Centro de convenções Nilo Coelho - Av.
                  do Centenário, Centro, Petrolina - PE, 56302.
                </p>
                <p className="p-5">
                  O valor da inscrição dá direito à participação nos três dias do evento,
                  incluindo todos os painéis e o coquetel de abertura.
                </p>
                <p className="p-5">
                  A venda será feita em lotes,
                  com o valor da inscrição aumentando progressivamente à medida que cada lote termina.
                </p>
              </div>
              <div className="divide-y-1 divide-gray-600">
                <p className="p-5">
                  Estudantes em situação de vulnerabilidade social possuem desconto de 50%.
                  Entre em contato enviando cópia da sua carteirinha para saneabrasil@univasf.edu.br
                  para receber seu código de desconto.
                </p>
                <p className="p-5">
                  A entrada é gratuita para representantes da mídia.
                  Favor entrar em contato com saneabrasil@univasf.edu.br para obter credenciamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}