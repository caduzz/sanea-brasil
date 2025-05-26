export function Title({ children }) {
  return (
    <div className="w-full max-w-[950px] flex items-center justify-center mb-30 gap-10 relative">
      <img className="size-14 absolute transform -translate-x-120 -translate-y-8" src="./svg/quote-left.svg"/>
      <h1 className="text-[#235D89] text-4xl font-bold">
        {children}
      </h1>
      <img className="size-14 absolute transform translate-x-8 translate-y-8" src="./svg/quote-right.svg"/>
    </div>
  );
}