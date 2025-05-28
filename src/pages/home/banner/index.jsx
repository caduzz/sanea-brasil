export function Banner() {
  return (
    <section id="home" className="w-full md:h-[45vw] h-100 bg-gradient-to-b shadow from-[#FFFFFF] via-[#B0C8D4] to-[#BED6DA]">
      <div className="h-full flex flex-col items-center justify-between gap-4 relative">
        <img src="./svg/svgbanner.svg" className="absolute" />
        <img className="h-full md:w-[50vw] mt-15" src="./svg/logo-sanea-pc.svg" />
      </div>
    </section>
  );
}