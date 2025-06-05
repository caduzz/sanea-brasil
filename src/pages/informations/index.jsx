import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { Footer } from "../../components/footer";

import { Button } from "../../components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { CardTickets } from "./CardTickets";
import { translations } from "./translation";

export function Informations () {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center mb-20">
        <div className="w-full max-w-[1250px] md:px-0 px-10">
          <PageHeader title={t.pageTitle} />
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-bold text-[#235D89]">{t.tickets}</h1>
              <Button className="bg-[#1C2F8E] rounded-full text-sm" Icon={BsArrowRight} href="https://www.even3.com.br/2saneabrasil/">{t.subscribe}</Button>
            </div>
            <div className="flex flex-wrap justify-between gap-10 md:gap-0">
              <CardTickets title={t.student} value="40"/>
              <CardTickets title={t.postgrad} value="80"/>
              <CardTickets title={t.professional} value="120"/>
            </div>
            <div className="flex flex-col md:flex-row md:gap-30 text-gray-600 md:px-20 md:divide-y-0 divide-y-1 divide-gray-200">
              <div className="md:w-[50%] w-full divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">{t.info1}</p>
                <p className="py-5">{t.info2}</p>
                <p className="py-5">{t.info3}</p>
              </div>
              <div className="md:w-[50%] w-full divide-y-1 divide-gray-200 text-justify">
                <p className="py-5">{t.info4}</p>
                <p className="py-5">{t.info5}</p>
                <p className="py-5">{t.info6}</p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h1 className="text-[#273364] font-bold text-4xl">{t.refundTitle}</h1>
              </div>
              <div className="flex gap-8 text-gray-600">
                <div className="w-full divide-y-1 divide-gray-200 text-justify">
                  <p className="py-5">{t.refund1}</p>
                  <p className="py-5">{t.refund2}</p>
                  <p className="py-5">{t.refund3}</p>
                  <p className="py-5">{t.refund4}</p>
                  <p className="py-5">{t.refund5}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}