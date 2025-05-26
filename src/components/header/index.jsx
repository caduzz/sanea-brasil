import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

import { texts } from "../../constants/texts";
import { NavButton } from "./navButton";
import { LangButton } from "./langButton";
import Dropdown from "../ui/dropdown";


export function Header() {
  const { language } = useContext(LanguageContext);

  return (
    <header className="w-full h-14 bg-[#235D89] px-4 py-2">
      <nav className="w-full h-full flex items-center">
        <div className="w-full flex justify-center items-center gap-10">
          <Dropdown.Root title={texts[language].event}>
            <Dropdown.Button>
              DATA | LOCAL
            </Dropdown.Button>
            <Dropdown.Button>
              HOSPEDAGEM
            </Dropdown.Button>
            <Dropdown.Button>
              {texts[language].edition}
            </Dropdown.Button>
          </Dropdown.Root>
          <NavButton
            link="#programming"
          >
            {texts[language].programming}
          </NavButton>
          <NavButton
            href="/exposanea"
          >
            {texts[language].exposanea}
          </NavButton>
          <NavButton
            link="#works"
          >
            {texts[language].works}
          </NavButton>
          <NavButton
            href="/edicao2024"
          >
            {texts[language].edition}
          </NavButton>
          <NavButton
            link="#contact"
          >
            {texts[language].contact}
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