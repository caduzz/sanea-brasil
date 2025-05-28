import { Title } from "../../../components/title";

export function Climate() {
  return (
    <section id="clima" className="relative w-full overflow-hidden flex align-center justify-center p-10 md:mt-15 md:mb-22 m-y-4">
      <div className="w-full max-w-[1250px] flex flex-col items-center justify-center">
        <Title>Conecte sua marca ao maior evento de Saneamento Rural e faça parte dessa transformação!</Title>
        <div className="w-full flex flex-col items-center justify-center">
          <img className="w-full" src="./svg/climate.svg" alt="Climate Illustration"/>
        </div>
      </div>
    </section>
  );
}
