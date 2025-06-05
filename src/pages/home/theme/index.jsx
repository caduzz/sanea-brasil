import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";

const translations = {
  pt: {
    title: "Falando sobre o tema",
    block1: `Para demonstrar seu compromisso com essa agenda e seus esforços,
      o SANEA BRASIL vai além da infraestrutura — é um movimento pela transformação do Saneamento Rural!
      A ausência de saneamento básico revela muito mais do que a carência de infraestrutura;
      ela evidencia um quadro de injustiça social,
      ambiental e climática. Comunidades rurais enfrentam cotidianamente os efeitos dos fenômenos climáticos extremos — ondas de calor,
      tempestades intensas, secas prolongadas e episódios recorrentes de contaminação das fontes de água.`,
    block2: `Os impactos da crise climática recaem de forma desproporcional sobre aqueles que menos contribuíram para ela e que,
      paradoxalmente, possuem menos recursos para se proteger ou se adaptar. Assim,
      garantir o saneamento rural adequado não é apenas uma questão de infraestrutura,
      mas uma ação estratégica de justiça socioambiental e de fortalecimento da resiliência comunitária diante das transformações globais.`,
    block3: `Nesse cenário, discutir saneamento é discutir direitos humanos,
      equidade e resiliência em um mundo cada vez mais marcado pela intensificação das mudanças climáticas.
      O SANEA BRASIL se posiciona, portanto, como um espaço de articulação, inovação e cooperação,
      comprometido com a construção de soluções sustentáveis e inclusivas para o Saneamento Rural,
      promovendo a dignidade, a saúde e a justiça para as populações mais vulneráveis.`
  },
  en: {
    title: "Talking about the theme",
    block1: `To demonstrate its commitment to this agenda and its efforts,
      SANEA BRASIL goes beyond infrastructure — it is a movement for the transformation of Rural Sanitation!
      The absence of basic sanitation reveals much more than a lack of infrastructure;
      it highlights a situation of social, environmental, and climate injustice. Rural communities face daily the effects of extreme climate phenomena — heat waves,
      intense storms, prolonged droughts, and recurring episodes of water source contamination.`,
    block2: `The impacts of the climate crisis fall disproportionately on those who contributed least to it and who,
      paradoxically, have fewer resources to protect or adapt themselves. Thus,
      ensuring adequate rural sanitation is not just a matter of infrastructure,
      but a strategic action for socio-environmental justice and strengthening community resilience in the face of global changes.`,
    block3: `In this context, discussing sanitation is discussing human rights,
      equity, and resilience in a world increasingly marked by the intensification of climate change.
      SANEA BRASIL therefore positions itself as a space for articulation, innovation, and cooperation,
      committed to building sustainable and inclusive solutions for Rural Sanitation,
      promoting dignity, health, and justice for the most vulnerable populations.`
  },
  es: {
    title: "Hablando sobre el tema",
    block1: `Para demostrar su compromiso con esta agenda y sus esfuerzos,
      SANEA BRASIL va más allá de la infraestructura — ¡es un movimiento por la transformación del Saneamiento Rural!
      La ausencia de saneamiento básico revela mucho más que la falta de infraestructura;
      evidencia una situación de injusticia social,
      ambiental y climática. Las comunidades rurales enfrentan diariamente los efectos de fenómenos climáticos extremos — olas de calor,
      tormentas intensas, sequías prolongadas y episodios recurrentes de contaminación de fuentes de agua.`,
    block2: `Los impactos de la crisis climática recaen de forma desproporcionada sobre quienes menos contribuyeron a ella y que,
      paradójicamente, tienen menos recursos para protegerse o adaptarse. Así,
      garantizar un saneamiento rural adecuado no es solo una cuestión de infraestructura,
      sino una acción estratégica de justicia socioambiental y de fortalecimiento de la resiliencia comunitaria ante las transformaciones globales.`,
    block3: `En este escenario, discutir saneamiento es discutir derechos humanos,
      equidad y resiliencia en un mundo cada vez más marcado por la intensificación del cambio climático.
      SANEA BRASIL se posiciona, por lo tanto, como un espacio de articulación, innovación y cooperación,
      comprometido con la construcción de soluciones sostenibles e inclusivas para el Saneamiento Rural,
      promoviendo la dignidad, la salud y la justicia para las poblaciones más vulnerables.`
  }
};

export function Theme() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <section id="tema" className="w-full flex justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-[50%] w-full flex flex-col">
          <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-4 gap-8">
            <div className="w-full row-span-2 relative">
              <div className="w-full h-full rounded-2xl absolute border-[1px] border-[#235D89] z-1"></div>
              <img className="w-full h-full object-cover absolute transform -translate-x-4 -translate-y-4 rounded-2xl" src="./theme.png"/>
            </div>
            <div className="w-full col-start-1 row-start-3 md:row-span-2 md:col-start-1 md:row-start-3 rounded-2xl overflow-hidden flex items-center justify-center">
              <img className="w-full md:w-50 md:h-50 object-cover" src="./svg/logo-theme.svg"/>
            </div>
            <div className="w-full col-start-2 row-start-1 overflow-hidden">
              <div className="w-full h-20 md:h-40 bg-[#235D89] rounded-2xl flex flex-col items-center justify-center">
                <p className="text-white md:text-3xl">
                  {language === "en" ? "Days" : language === "es" ? "Días" : "Dias"}
                </p>
                <h2 className="text-white md:text-3xl text-sm font-bold">29, 30 e 31</h2>
                <h2 className="text-white md:text-3xl text-sm font-bold">
                  {language === "en" ? "October" : language === "es" ? "Octubre" : "Outubro"}
                </h2>
              </div>
            </div>
            <div className="w-full row-span-3 md:col-start-2 row-start-2 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src="./theme2.png"/>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full h-full flex flex-col gap-4 md:ml-20">
          <h1 className="text-4xl font-bold uppercase text-[#235D89] my-10">
            {t.title}
          </h1>
          <div className="w-full text-md text-[#235D89] flex flex-col md:flex-row gap-8">
            <p className="text-justify">{t.block1}</p>
            <p className="text-justify">{t.block2}</p>
          </div>
          <div className="w-full text-md text-[#235D89]">
            <p className="text-justify">{t.block3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}