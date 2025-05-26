export function Title({ children }) {
  return (
    <div className="w-full max-w-[950px] grid grid-cols-[auto_1fr_auto] gap-x-2 items-start text-[#235D89] mb-30">
      {/* Aspas esquerda no topo */}
      <img
        className="w-10 h-10 self-start"
        src="./svg/quote-left.svg"
        alt="Aspas esquerda"
      />

      <h1 className="text-2xl md:text-3xl font-bold leading-snug">
        {children}
      </h1>

      <img
        className="w-10 h-10 self-end"
        src="./svg/quote-right.svg"
        alt="Aspas direita"
      />
    </div>
  );
}
