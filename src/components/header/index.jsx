import { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { texts } from "../../constants/texts";
import { NavButton } from "./navButton";
import { LangButton } from "./langButton";
import Dropdown from "../ui/dropdown";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-14 bg-[#235D89] px-4 py-2 relative">
      <nav className="w-full h-full flex items-center justify-between md:justify-center">
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-100 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Animação do menu mobile */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`
                flex-col md:flex-row md:flex w-full md:w-auto
                ${menuOpen ? "flex absolute top-14 left-0 bg-[#235D89] w-full z-50 px-4 py-4 gap-4" : "hidden"}
                md:static md:bg-transparent md:items-center md:justify-center md:gap-10 md:flex
                upercase
              `}
            >
              <Dropdown.Root title={texts[language].event}>
                <Dropdown.Button>{texts[language].date}</Dropdown.Button>
                <Dropdown.Button>{texts[language].information}</Dropdown.Button>
                <Dropdown.Button>{texts[language].hosting}</Dropdown.Button>
                <Dropdown.Button href="/edicao2024">{texts[language].edition}</Dropdown.Button>
              </Dropdown.Root>
              <Dropdown.Root title={texts[language].programming}>
                <Dropdown.Button href="#paineis">{texts[language].painels}</Dropdown.Button>
                <Dropdown.Button href="/programming">{texts[language].miniCourse}</Dropdown.Button>
                <Dropdown.Button>{texts[language].visit}</Dropdown.Button>
              </Dropdown.Root>
              <NavButton>{texts[language].speakers}</NavButton>
              <NavButton href="/submission">{texts[language].submissions}</NavButton>
              <Dropdown.Root title={texts[language].exposanea}>
                <Dropdown.Button>{texts[language].exhibitors}</Dropdown.Button>
              </Dropdown.Root>
              <NavButton href="https://www.even3.com.br/2saneabrasil/" >{texts[language].register}</NavButton>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Botões de idioma */}
        <div className="h-full flex items-center gap-2 absolute right-4">
          <LangButton lang={"pt"} src="./svg/bandeira-bra.svg" />
          <LangButton lang={"en"} src="./svg/bandeira-usa.svg" />
          <LangButton lang={"es"} src="./bandeira-esp.png" />
        </div>
      </nav>
    </header>
  );
}