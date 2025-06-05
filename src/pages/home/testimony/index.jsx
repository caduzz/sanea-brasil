import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Title } from "../../../components/title";

const translations = {
  pt: {
    title: <>Participe e conecte-se com especialistas nacionais <br/>e internacionais do setor.</>,
    testimony: (
      <>
        Nessa edição assumimos o compromisso ainda mais relevante:
        enfrentar os desafios impostos pelas mudanças climáticas no contexto do saneamento rural.
        Agradecemos a presença de cada um de vocês e convidamos a aproveitar este espaço de troca de conhecimentos,
        experiências e parcerias, fundamentais para construirmos, juntos, um futuro mais justo, sustentável e resiliente.
        Sejam muito bem-vindos ao II Sanea Brasil!
      </>
    ),
    name: "Anderson Miranda de Souza",
    role: "Presidente do Sanea Brasil"
  },
  en: {
    title: <>Join and connect with national and international experts in the sector.</>,
    testimony: (
      <>
        In this edition, we take on an even more relevant commitment:
        to face the challenges imposed by climate change in the context of rural sanitation.
        We thank each of you for being here and invite you to take advantage of this space for exchanging knowledge,
        experiences, and partnerships, which are fundamental for us to build together a fairer, more sustainable, and resilient future.
        Welcome to II Sanea Brasil!
      </>
    ),
    name: "Anderson Miranda de Souza",
    role: "President of Sanea Brasil"
  },
  es: {
    title: <>Participe y conéctese con especialistas nacionales <br/>e internacionales del sector.</>,
    testimony: (
      <>
        En esta edición asumimos un compromiso aún más relevante:
        enfrentar los desafíos impuestos por el cambio climático en el contexto del saneamiento rural.
        Agradecemos la presencia de cada uno de ustedes e invitamos a aprovechar este espacio de intercambio de conocimientos,
        experiencias y alianzas, fundamentales para construir juntos un futuro más justo, sostenible y resiliente.
        ¡Sean muy bienvenidos al II Sanea Brasil!
      </>
    ),
    name: "Anderson Miranda de Souza",
    role: "Presidente de Sanea Brasil"
  }
};

export function Testimony() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="testimony" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col items-center">
        <Title>{t.title}</Title>
        <div className="w-full flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-120 h-130 md:rounded-2xl rounded-t-2xl overflow-hidden transform translate-y-10 md:translate-x-10">
            <img className="w-full h-full object-cover" src="./anderson.png"/>
          </div>
          <div className="w-full md:w-150 md:rounded-2xl rounded-b-2xl bg-white shadow-2xl transform -translate-y-10 md:-translate-x-10">
            <div className="flex flex-col p-4 md:p-10 gap-4">
              <div className="w-full">
                <img className="size-5 md:size-8" src="./svg/quote-left.svg"/>
                <p className="text-[#235D89] text-sm md:text-md">
                  {t.testimony}
                </p>
                <img className="size-5 md:size-8" src="./svg/quote-right.svg"/>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <h3 className="text-[#235D89] md:text-md text-sm font-bold">{t.name}</h3>
                  <p className="text-[#0008] md:text-md text-sm font-light">{t.role}</p>
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