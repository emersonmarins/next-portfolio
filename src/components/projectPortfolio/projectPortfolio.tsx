'use client'
import { stylePortfolio } from "./styelObject";
import { Header } from "./header";
import { ButtonContainer } from "./button";
import { BodyContent } from "./body";
import { ImageContent } from "./image";
import { Element } from "react-scroll";

export const ProjectPortfolio = () => {
  return (
    <Element name="porcelann" >
      <div className={stylePortfolio.sectionPortfolio + ' overflow-hidden'} id="portfolio">
        <h1 className="flex justify-center items-center text-primary-light [font-size:var(--step-6)] text-center z-20  h-[calc(var(--step-6)_*_4)] relative">
          Meus&nbsp;
          <span className="text-primary [font-family:_philosopher,_'sans-serif']">
            Projetos
          </span>
        </h1>
        <h2 className="flex justify-center items-center text-primary-light mb-14 [font-size:var(--step-5)] text-center z-20">Porcelann</h2>
        <div className={stylePortfolio.portfolioContent + ' relative z-20 '}>
          <div className={stylePortfolio.portfolioContentInfo}>
            <span className={stylePortfolio.portfolioTextContent}>
              <Header />
              <BodyContent />
            </span>
            <ButtonContainer />
          </div>
          <ImageContent />
        </div>
      </div>
    </Element>
  )
}