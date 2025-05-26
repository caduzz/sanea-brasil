import { Card } from "../../../components/card";

export function Exle() {
  return (
    <section id="exposanea" className="w-full flex items-center justify-center p-10">
      <div className="w-full max-w-[1250px] flex flex-col align-center justify-center gap-10">
        <div>
          <h2 className="text-[#235D89] text-3xl font-bold mb-4">
            O II Sanea Brasil reconhece seu papel na agenda de adaptação às mudanças climáticas, contemplando os 4 eixos do saneamento.
          </h2>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-10">
          <Card title="água potável" image={"./card1.png"}/>
          <Card title="resíduos sólidos" image={"./card2.png"}/>
          <Card title="Esgotamento sanitário" image={"./card3.png"}/>
          <Card title="Drenagem de águas pluviais" image={"./card4.png"}/>
        </div>
      </div>
    </section>
  );
}