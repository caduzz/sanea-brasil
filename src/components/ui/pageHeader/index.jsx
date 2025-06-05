import { BiChevronLeft } from "react-icons/bi";


export function PageHeader ({ title, children }) {
  return (
    <div className="w-full bg-[#477599] p-20 rounded-2xl my-20 flex flex-col gap-2">
      <div style={{fontFamily: "Red Hat Display"}} className="text-white text-6xl font-bold">
        {title}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}