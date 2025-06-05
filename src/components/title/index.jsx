export function Title({ children }) {
  return (
    <div className="w-full max-w-[950px] text-[#235D89] mb-0 md:mb-30">
      <div className="grid grid-cols-[auto_1fr] gap-x-2 items-start">
        {/* Aspas esquerda */}
        <img
          className="w-4 h-4 md:w-7 md:h-7 self-start"
          src="./svg/quote-left.svg"
          alt="Aspas esquerda"
        />

        {/* Texto + aspas direita */}
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            {children}
            {/* Aspas direita no final da frase */}
            <img
              className="inline w-4 h-4 md:w-7 md:h-7 ml-1 align-baseline"
              src="./svg/quote-right.svg"
              alt="Aspas direita"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
