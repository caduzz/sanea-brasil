import { Header } from "../../components/header";
import { Banner } from "./banner";
import { Climate } from "./climate";
import { Divider } from "./divider";
import { ExpoSanea } from "./exposanea";
import { Subscribe } from "./subscribe";
import { Testimony } from "./testimony";

export function Home() {

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Subscribe />
        <Testimony />
        <Divider />
        <ExpoSanea />
        <Climate />
      </main>
    </div>
  );
}