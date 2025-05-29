import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Exle } from "./axle";
import { Banner } from "./banner";
import { Climate } from "./climate";
import Counter from "./counter";

import { Divider } from "./divider";
import { ExpoSanea } from "./exposanea";
import { Objectives } from "./objectives";
import { Panel } from "./panel";
import { Subscribe } from "./subscribe";
import { Testimony } from "./testimony";
import { Theme } from "./theme";

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
        <Theme />
        <Exle />
        <Panel />
        <Objectives />
      </main>
      <Footer />
    </div>
  );
}