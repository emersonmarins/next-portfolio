import { stylePortfolio } from "./styelObject";
import { Header } from "./header";
import { ButtonContainer } from "./button";
import { BodyContent } from "./body";
import { ImageContent } from "./image";


export const ProjectPortfolio = () => {
  return (
    <div className={stylePortfolio.sectionPortfolio +' '}>
      <div className={stylePortfolio.portfolioContent + '  '}>
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