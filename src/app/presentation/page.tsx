"use client"
import { infoWebSite } from "../../components/projectPortfolio/db/db";
import { stylePresentation } from "./style";
import Imports from "./imports";


function Presentation() {
  
  return (

    <div className="relative z-10">
      <Imports.Header />
      <main className={stylePresentation.main}>
        <Imports.Aside text="Visão Geral" />
        <section className="w-3/4 max-md:w-full max-md:px-2 max-sm:px-0 flex flex-wrap gap-7 justify-start content-start">
          {infoWebSite[0].body.map((element, index) => (<Imports.Card title={element.title} text={element.text} index={index} url={element.url} key={index} />))}
        </section>
      </main>
    </div>
  )
};

export default Presentation