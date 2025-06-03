import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import clsx from "clsx";

export function DropdownRoot({ children, title }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (open) setIsMounted(true);
  }, [open]);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, children]);

  // Remove do DOM após a animação de fechamento
  useEffect(() => {
    if (!open && isMounted) {
      const timeout = setTimeout(() => setIsMounted(false), 300); // 300ms = duração da transição
      return () => clearTimeout(timeout);
    }
  }, [open, isMounted]);

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
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
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

      {(isMounted || open) && (
        <div
          className={clsx(
            "md:absolute md:left-1/2 md:-translate-x-1/2 z-10 mt-3 origin-top transform transition-all duration-200 ease-out min-w-[10rem]",
            "w-full md:w-auto static md:mt-3",
            open ? "opacity-100 " : "opacity-0 pointer-events-none",
            "overflow-hidden rounded-b-md bg-[#235D89] md:shadow-lg ring-1 ring-black/5 divide-y"
          )}
          style={{
            transition: "height 0.3s ease, opacity 0.3s ease",
            height: open ? height : 0,
          }}
          role="menu"
          aria-orientation="vertical"
        >
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}