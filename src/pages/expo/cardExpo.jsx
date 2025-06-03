import { BiChevronRight } from "react-icons/bi";

export function CardExpo ({title}) {
  return (
    <div className="w-full rounded-full bg-white px-6 py-4 flex justify-between items-center">
      <p className="font-bold">{title}</p>
      <BiChevronRight size={20}/>
    </div>
  )
}