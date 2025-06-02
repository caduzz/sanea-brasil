export function Banner() {
  return (
    <section id="home" className="w-full h-[45vw] bg-gradient-to-b shadow overflow-hidden from-[#FFFFFF] via-[#B0C8D4] to-[#BED6DA]">
      <div className="h-full flex flex-col items-center justify-between gap-4 relative">
        <img src="./svg/svgbannernovo.svg" className="absolute z-1" />
        <img className="w-[50vw] mt-2 md:mt-15 z-2" src="./svg/logo-sanea-nova.svg" />
      </div>
    </section>
  );
}