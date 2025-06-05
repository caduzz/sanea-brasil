import { MdOutlineFileDownload } from "react-icons/md";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { EixoCard } from "./eixoCards";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export function Submission() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.pt;

  return (
    <div>
      <Header />
      <main className="flex justify-center">
        <div className="w-full max-w-[1250px]">
          <PageHeader title={t.pageTitle}>
            <div className="text-white">
              <div className="flex gap-4 my-2">
                <a href="./download/Normas de apresentação de trabalhos científicos.zip" className="flex gap-1 items-center cursor-pointer">{t.submissionRules} <MdOutlineFileDownload /></a>
                <a href="./download/Normas de submissão de trabalhos científicos.zip" className="flex gap-1 items-center">{t.presentationRules} <MdOutlineFileDownload /></a>
              </div>
              <div className="flex gap-4">
                <a href="./download/Regras de avaliação para trabalhos científicos.zip" className="flex gap-1 items-center">{t.evaluationRules} <MdOutlineFileDownload /></a>
                <a href="./download/TEMPLATE relato de experiência.zip" className="flex gap-1 items-center">{t.experienceTemplate} <MdOutlineFileDownload /></a>
                <a href="./download/TEMPLATE resumo expandido.zip" className="flex gap-1 items-center">{t.abstractTemplate} <MdOutlineFileDownload /></a>
              </div>
            </div>
          </PageHeader>
          <EixoCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}