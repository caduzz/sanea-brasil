import { Title } from "../../../components/title";

export function Climate() {
  return (
    <div className="relative w-full overflow-hidden flex align-center justify-center py-4 mt-15 mb-22">
      <div className="w-full max-w-[1250px] flex flex-col items-center justify-center">
        <Title>Conecte sua marca ao maior evento de Saneamento Rural e faça parte dessa transformação!</Title>
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <img className="w-full" src="./svg/climate.svg" alt="Climate Illustration"/>
        </div>
      </div>
    </div>
  );
}
