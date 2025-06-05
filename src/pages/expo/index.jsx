import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";

import { MdLocalPhone } from "react-icons/md";
import { CardExpo } from "./cardExpo";
import { translations } from "./translation";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export function ExpoSanea () {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px] px-10 md:px-0">
          <PageHeader title={t.pageTitle} />
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-bold text-[#235D89] mb-8 text-center">{t.fairTitle}</h1>
            <div className="flex flex-col md:flex-row justify-center gap-20">
              <div className="flex flex-col gap-5 md:w-180 w-full">
                <div className="p-10 bg-[#235D8920] rounded-2xl w-full">
                  <h1 className="text-[#235D89] text-2xl font-bold text-center">{t.exhibitor}</h1>
                  <div className="flex flex-col gap-4 mt-4 text-[#235D89]">
                    <CardExpo title={t.name} />
                    <CardExpo title={t.company} />
                    <CardExpo title={t.email} />
                    <CardExpo title={t.whatsapp} />
                  </div>
                </div>
                <div className="p-10 bg-[#235D8920] rounded-2xl w-full flex flex-col items-center justify-center">
                  <div className="text-lg font-bold text-[#235D89] flex items-center flex-col mb-10">
                    <div className="flex items-center justify-center w-20 h-20 bg-[#235D89] rounded-full">
                      <MdLocalPhone color="#ffffff" size={30}/>
                    </div>
                    <p>{t.contactUs}</p>
                  </div>
                  <p className="text-[#235D8950]">{t.phone.split(" ")[0]} <strong className="text-[#235D89]">{t.phone.split(" ").slice(1).join(" ")}</strong></p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div>
                  <p className="text-[#235D89]">{t.promotedBy}</p>
                  <p className="text-[#235D89]">{t.expoInfo}</p>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Saira Condensed"
                    }}
                    className="text-5xl font-bold text-[#273364] my-10"
                  >{t.schedule}</h1>
                  <div className="bg-[#235D89] flex flex-col rounded-lg py-10 overflow-hidden relative">
                    <div className="flex border-b-[1px] font-bold text-white border-b-gray-300 divide-x-1 divide-gray-300 justify-center items-center">
                      <p className="p-4 text-2xl w-full text-center">{t.whyExhibit}</p>
                      <p className="p-4 text-2xl w-full text-center">{t.whyVisit}</p>
                    </div>
                    <div className="text-white flex items-center justify-between p-10 border-b-[1px] border-b-gray-300">
                      <p className="w-[50%] px-10 z-2">{t.whyExhibitText}</p>
                      <p className="w-[50%] px-10 z-2">{t.whyVisitText}</p>
                      <img src="./svg/map.svg" className="absolute top-30 opacity-20 z-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#235D89] mb-10 mt-20 text-center">{t.eventMap}</h1>
          <img src="./mapa_evento.png" className="w-full" />
        </div>
      </main>
      <Footer />
    </div>
  )
}