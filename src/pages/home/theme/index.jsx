
export function Theme() {
  return (
    <section id="tema" className="w-full flex justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-[50%] w-full flex flex-col">
          <div className="grid grid-cols-2 grid-rows-4 gap-8">
            <div className="w-full row-span-2 relative">
              <div className="w-full h-full rounded-2xl absolute border-[1px] border-[#235D89] z-1">
              </div>
              <img className="w-full h-full object-cover absolute transform -translate-x-4 -translate-y-4 rounded-2xl" src="./theme.png"/>
            </div>
            <div className="w-full row-span-2 col-start-1 row-start-3 rounded-2xl overflow-hidden flex items-center justify-center">
              <img className="w-50 h-50 object-cover" src="./svg/logo-theme.svg"/>
            </div>
            <div className="w-full col-start-2 row-start-1 overflow-hidden">
              <div className="w-full h-40 bg-[#235D89] rounded-2xl flex flex-col items-center justify-center">
                <p className="text-white text-3xl">Dias</p>
                <h2 className="text-white text-3xl font-bold">29, 30 e 31</h2>
              </div>
            </div>
            <div className="w-full row-span-3 col-start-2 row-start-2 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src="./theme2.png"/>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full h-full flex flex-col gap-4 md:ml-20">
          <h1 className="text-4xl font-bold uppercase text-[#235D89] my-10">
            Falando sobre o tema
          </h1>
          <div className="w-full text-md text-[#235D89] flex flex-col md:flex-row gap-8">
            <p className="text-justify">
              Para demonstrar seu compromisso com essa agenda e seus esforços,
              o SANEA BRASIL vai além da infraestrutura — é um movimento pela transformação do Saneamento Rural!
              A ausência de saneamento básico revela muito mais do que a carência de infraestrutura;
              ela evidencia um quadro de injustiça social,
              ambiental e climática. Comunidades rurais enfrentam cotidianamente os efeitos dos fenômenos climáticos extremos — ondas de calor,
              tempestades intensas, secas prolongadas e episódios recorrentes de contaminação das fontes de água.
            </p>
            <p className="text-justify">
              Os impactos da crise climática recaem de forma desproporcional sobre aqueles que menos contribuíram para ela e que,
              paradoxalmente, possuem menos recursos para se proteger ou se adaptar.Assim,
              garantir o saneamento rural adequado  não é apenas uma questão de infraestrutura,
              mas uma ação estratégica de justiça socioambiental e de fortalecimento da resiliência comunitária diante das transformações globais.
            </p>
          </div>
          <div className="w-full text-md text-[#235D89]">
            <p className="text-justify">
              Nesse cenário, discutir saneamento é discutir direitos humanos,
              equidade e resiliência em um mundo cada vez mais marcado pela intensificação das mudança s climáticas. 
              O SANEA BRASIL se posiciona, portanto, como um espaço de articulação, inovação e cooperação,
              comprometido com a construção de soluções sustentáveis e inclusivas para o Saneamento Rural,
              promovendo a dignidade, a saúde e a justiça para as populações mais vulneráveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}