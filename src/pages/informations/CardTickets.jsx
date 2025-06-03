export function CardTickets ({ title, value }) {
  return (
    <div className="rounded-2xl overflow-hidden border-[1px] border-gray-100 shadow-sm text-[#235D89]">
      <div className="w-full bg-green-50 p-8 px-25 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center justify-center p-8">
        <p className="text-5xl font-bold">${value}</p>
      </div>
    </div>
  )
}