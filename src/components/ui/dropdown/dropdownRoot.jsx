import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import clsx from "clsx";

export function DropdownRoot({ children, title }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="text-white text-lg font-light font-[Bahnschrift] cursor-pointer flex justify-center items-center"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {title}
        <BiChevronDown className={clsx("transition-transform duration-300", open && "rotate-180")} />
      </button>

      <div
        className={clsx(
          "absolute left-1/2 -translate-x-1/2 z-10 mt-3 origin-top transform transition-all duration-300 ease-out min-w-[10rem]",
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none",
          "rounded-b-md bg-[#235D89] shadow-lg ring-1 ring-black/5 divide-y divide-[#238989]"
        )}
        role="menu"
        aria-orientation="vertical"
      >
        {children}
      </div>
    </div>
  );
}
