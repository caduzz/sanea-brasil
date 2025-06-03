export function CardData({ Icon, title, description }) {
  return (
    <div className="w-full rounded-md border-[1px] border-[#0002] p-4 py-8 flex">
      <div className="w-15 h-15 flex items-center justify-center bg-[#235D89] rounded-full">
        <Icon size={25} color="#FFFFFF"/>
      </div>
      <div className="ml-4">
        <h1 className="text-lg font-bold text-[#235D89]">{title}</h1>
        <p className="text-[#0007]">{description}</p>
      </div>
    </div>
  )
}