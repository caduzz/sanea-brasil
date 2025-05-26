import { Title } from "../../../components/title";

export function Testimony() {
  return (
    <section id="testimony" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col items-center">
        <Title>Participe e conecte-se com especialistas nacionais <br/>e internacionais do setor.</Title>
        <div className="w-full flex items-center justify-center">
          <div className="w-120 h-130 rounded-2xl overflow-hidden transform translate-x-10">
            <img className="w-full h-full object-cover" src="./anderson.png"/>
          </div>
          <div className="w-150 rounded-2xl bg-white shadow-2xl transform -translate-x-10">
            <div className="flex flex-col p-10 gap-4">
              <div className="w-full">
                <img className="size-8" src="./svg/quote-left.svg"/>
                <p className="text-[#235D89] text-md">
                  Nessa edição assumimos o compromisso ainda mais relevante:
                  enfrentar os desafios impostos pelas mudanças climáticas no contexto do saneamento rural.
                  Agradecemos a presença de cada um de vocês e convidamos a aproveitar este espaço de troca de conhecimentos,
                  experiências e parcerias, fundamentais para construirmos, juntos, um futuro mais justo, sustentável e resiliente.
                  Sejam muito bem-vindos ao II Sanea Brasil!
                </p>
                <img className="size-8" src="./svg/quote-right.svg"/>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="text-[#235D89] font-bold">Anderson Miranda de Souza</h3>
                  <p className="text-[#0008] font-light">Presidente do Sanea Brasil</p>
                </div>
                <img src="./svg/dot.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}