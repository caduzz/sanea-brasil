import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";

import { Button } from "../../components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { CardTickets } from "./CardTickets";

export function Informations () {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px]">
          <PageHeader title="Informações">
          </PageHeader>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-bold text-[#235D89]">INGRESSOS</h1>
              <Button className="bg-[#1C2F8E] rounded-full text-sm" Icon={BsArrowRight}>INSCREVA-SE</Button>
            </div>
            <div className="flex flex-wrap justify-between">
              <CardTickets title="ESTUDANTE" value="40"/>
              <CardTickets title="PÓS-GRADUAÇÃO" value="80"/>
              <CardTickets title="PROFISSIONAIS" value="120"/>
            </div>
            <div className="flex gap-30 text-gray-600 px-20">
              <div className="w-[50%] divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">
                  O evento acontecerá no Centro de convenções Nilo Coelho - Av.
                  do Centenário, Centro, Petrolina - PE, 56302.
                </p>
                <p className="py-5">
                  O valor da inscrição dá direito à participação nos três dias do evento,
                  incluindo todos os painéis e o coquetel de abertura.
                </p>
                <p className="py-5">
                  Não está incluso a alimentação no valor da inscrição,
                  no entanto haverá um Centro Gastronômico com diversas opções para os participantes.
                </p>
              </div>
              <div className="w-[50%] divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">
                  A venda será feita em lotes, com o valor da inscrição aumentando progressivamente à medida que cada lote termina.
                </p>
                <p className="py-5">
                  Estudantes em situação de vulnerabilidade social possuem desconto de 50%.
                  Entre em contato enviando cópia da sua carteirinha para saneabrasil@univasf.edu.br
                  para receber seu código de desconto.
                </p>
                <p className="py-5">
                  A entrada é gratuita para representantes da mídia.
                  Favor entrar em contato com saneabrasil@univasf.edu.br para obter credenciamento.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h1 className="text-[#273364] font-bold text-4xl">Política de reembolso e<br />cancelamentos de inscrições</h1>
              </div>
              <div className="flex gap-8 text-gray-600">
                <div className="w-full divide-y-1 divide-gray-200 text-justify">
                  <p className="py-5">
                    Cancelamentos até 07 (sete) dias úteis antes da data do evento, por escrito,
                    darão direito à devolução de 70% do valor do ingresso.
                    Após esse prazo, não será possível a devolução.
                    Serão aceitas apenas substituições de participantes,
                    notificadas por e-mail (sanea.brasilunivasf.edu.com);
                  </p>
                  <p className="py-5">
                  Aquisições feitas 72 horas antes da realização do evento serão cobradas mesmo que o
                  participante não participe do evento e não serão concedidos créditos posteriores.
                  </p>
                  <p className="py-5">
                    O não comparecimento do inscrito não implica em cancelamento automático,
                    portanto, fica autorizada a cobrança dos valores ainda não pagos, mesmo após o evento.
                  </p>
                  <p className="py-5">
                    Os inscritos que não participarem do evento não serão reembolsados.
                  </p>
                  <p className="py-5">
                    Em caso de dúvidas, entre em contato saneabrasil@univasf.edu.br ou +55 (87) 99197-4078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>z
      <Footer />
    </div>
  )
}