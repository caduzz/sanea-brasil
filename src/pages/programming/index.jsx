import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { PageHeader } from "../../components/ui/pageHeader";
import { ProgCard } from "./progCards";

export function Programming() {
  return (
    <div>
      <Header />
      <main className="flex justify-center">
        <div className="w-full max-w-[1250px]">
          <PageHeader title="Programação">
          </PageHeader>
          <ProgCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}