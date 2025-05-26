import { useState } from "react";

export function DropdownRoot({ children, title}) {
  const [open, setOpen] = useState(false);

  return (
    <div class="relative inline-block text-left">
      <div>
        <button type="button" class="text-white text-lg font-light font-[Bahnschrift] cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {title}
        </button>
      </div>
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          {children}
        </div>
      )
      }
    </div>
  );
}