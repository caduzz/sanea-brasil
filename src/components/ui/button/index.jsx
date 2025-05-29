import { redirect } from "react-router-dom";

export function Button({ children, Icon, className }) {
  return (
    <button
      className={`
        bg-[#235D89]
        text-white
        rounded-[5px]
        flex items-center justify-center
        gap-2 px-5 py-3
        cursor-pointer
        transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#234789]
        ${className}`
      }
    >
      {children} <Icon className="text-white size-5" />
    </button>
  );
}