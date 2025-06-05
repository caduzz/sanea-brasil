import { FaBriefcase, FaCity, FaHotel } from "react-icons/fa";
import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";
import { CardData } from "./cardData";
import { translations } from "./translation";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";

export function DataLocal () {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px] px-10 md:px-0">
          <PageHeader title={t.pageTitle} />
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-3xl font-bold text-[#235D89] mb-8">{t.mainTitle}</h1>
              <p className="text-[#235D89]">{t.mainText}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
              <div className="flex flex-col gap-5">
                <img className="w-400 rounded-lg" src="./data.png"/>
                <img className="w-400 rounded-lg" src="./data2.png"/>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex flex-col gap-5 mb-5">
                  <CardData Icon={FaCity} title={t.date} description={t.dateDesc} />
                  <CardData Icon={FaHotel} title={t.time} description={t.timeDesc} />
                  <CardData Icon={FaBriefcase} title={t.place} description={t.placeDesc} />
                </div>
                <a href="https://maps.app.goo.gl/vKLkyrXghzzoXvaG7" target="_blank">
                  <img className="md:w-100 w-full" src="./local.png"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 text-gray-600 items-start divide-y-1 divide-gray-200 md:divide-y-0">
              <div className="md:w-[35%] divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">{t.info1}</p>
                <p className="py-5">{t.info2}</p>
                <p className="py-5">{t.info3}</p>
              </div>
              <div className="md:w-[35%] divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">{t.info4}</p>
                <p className="py-5">{t.info5}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}