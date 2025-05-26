export function Card({ title, image }) {
  return (
    <div className="w-70 h-68 shadow-md rounded-[15px] bg-[#235D89] p-2 flex flex-col items-center">
      <img src={image} alt={`sanea brasil - ${title}`} className="w-full h-50 rounded-[12px] mb-4" />
      <h3 className="text-white uppercase text-md font-medium mb-2">{title}</h3>
    </div>
  );
}