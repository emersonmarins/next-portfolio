import { stylePortfolio } from "./styelObject";
import { Header } from "./header";
import { ButtonContainer } from "./button";
import { BodyContent } from "./body";
import { ImageContent } from "./image";


export const ProjectPortfolio = () => {
  return (
    <div className={stylePortfolio.sectionPortfolio +' overflow-hidden'} id="portfolio">
      <h1 className="flex justify-center items-center text-primary-light [font-size:var(--step-6)] text-center z-20  h-[calc(var(--step-6)_*_4)] relative
      before:content-[''] before:w-[2000px] before:h-[800px] before:absolute before:bg-tertiary-dark-linear before:-z-10 
      before:rotate-[45deg] before:rounded-3xl before:bottom-[-275%] before:left-[calc(55%)] before:translate-x-[0%]
      after:content-[''] after:w-[2000px] after:h-[800px] after:absolute after:bg-tertiary-dark-linear after:-z-10 
      after:rotate-[45deg] after:rounded-3xl after:bottom-[-225%] after:right-[calc(55%)] after:translate-x-[0%]
       ">
        Meus&nbsp;
        <span className="text-primary [font-family:_philosopher,_'sans-serif']">
          Projetos
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
  )
}