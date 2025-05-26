import { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

import { texts } from "../../constants/texts";
import { NavButton } from "./navButton";
import { LangButton } from "./langButton";
import Dropdown from "../ui/dropdown";


export function Header() {
  const { language } = useContext(LanguageContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full h-14 bg-[#235D89] px-4 py-2">
      <nav className="w-full h-full flex items-center">
        <div className="w-full flex justify-center items-center gap-10">
          <Dropdown.Root
            title={texts[language].event}
          >
            <Dropdown.Button>
              {texts[language].date}
            </Dropdown.Button>
            <Dropdown.Button>
              {texts[language].information}
            </Dropdown.Button>
            <Dropdown.Button>
             {texts[language].hosting}
            </Dropdown.Button>
            <Dropdown.Button>
              {texts[language].edition}
            </Dropdown.Button>
          </Dropdown.Root>
          <Dropdown.Root
            title={texts[language].programming}
          >
            <Dropdown.Button>
              {texts[language].painels}
            </Dropdown.Button>
            <Dropdown.Button>
             {texts[language].miniCourse}
            </Dropdown.Button>
            <Dropdown.Button>
              {texts[language].visit}
            </Dropdown.Button>
          </Dropdown.Root>
          <NavButton>
            {texts[language].speakers}
          </NavButton>
          <Dropdown.Root
            title={texts[language].submissions}
          >
            <Dropdown.Button>
              {texts[language].modelApresentation}
            </Dropdown.Button>
            <Dropdown.Button>
             {texts[language].modelEposter}
            </Dropdown.Button>
          </Dropdown.Root>
           <Dropdown.Root
            title={texts[language].exposanea}
          >
            <Dropdown.Button>
             {texts[language].exhibitors}
            </Dropdown.Button>
          </Dropdown.Root>
          <NavButton>
            {texts[language].register}
          </NavButton>
        </div>
        <div className="flex items-center gap-2 absolute right-4">
          <LangButton lang={"pt"} src="./svg/bandeira-bra.svg" />
          <LangButton lang={"en"} src="./svg/bandeira-usa.svg" />
          <LangButton lang={"es"} src="./bandeira-esp.png" />
        </div>
      </nav>
    </header>
  );
}