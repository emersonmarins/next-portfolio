'use client'
import { stylePortfolio } from "./styelObject";
import { Header } from "./header";
import { ButtonContainer } from "./button";
import { BodyContent } from "./body";
import { ImageContent } from "./image";
import { Element } from "react-scroll";


export const LouseDesigner = () => {
  return (
    <Element name="louse-designer" >
      <div className={stylePortfolio.sectionPortfolio + ' overflow-hidden'} id="portfolio">
        <h1 className="flex justify-center items-center text-primary-light mb-14 [font-size:var(--step-4)] text-center z-20">
          Louse&nbsp;
          <span className="text-primary [font-family:_philosopher,_'sans-serif']">
            Designer
          </span>
        </h1>
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