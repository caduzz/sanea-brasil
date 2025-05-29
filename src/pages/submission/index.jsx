import { MdOutlineFileDownload } from "react-icons/md";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { EixoCard } from "./eixoCards";

export function Submission() {

  return (
    <div>
      <Header />
      <main className="flex justify-center">
        <div className="w-full max-w-[1250px]">
          <PageHeader title="Submissão de trabalho">
            <div className="text-white">
              <div className="flex gap-4 my-2">
                <a href="./download/Normas de apresentação de trabalhos científicos.zip" className="flex gap-1 items-center cursor-pointer">Normas de Submissão de Trabalhos <MdOutlineFileDownload /></a>
                <a href="./download/Normas de submissão de trabalhos científicos.zip" className="flex gap-1 items-center">Normas de Apresentação de Trabalhos <MdOutlineFileDownload /></a>
              </div>
              <div className="flex gap-4">
                <a href="./download/Regras de avaliação para trabalhos científicos.zip" className="flex gap-1 items-center">Regras de Avaliação de Trabalhos <MdOutlineFileDownload /></a>
                <a href="./download/TEMPLATE relato de experiência.zip" className="flex gap-1 items-center">Template de Relato de Experiência <MdOutlineFileDownload /></a>
                <a href="./download/TEMPLATE resumo expandido.zip" className="flex gap-1 items-center">Template Resumo Expandido <MdOutlineFileDownload /></a>
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