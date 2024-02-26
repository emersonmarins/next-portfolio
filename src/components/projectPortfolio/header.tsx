import { stylePortfolio } from "./styelObject"
import { infoWebSite } from "./db/db";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Header = () => (
  <>
    <div className={stylePortfolio.portfolioTitleContainer}>
      <h2 className={stylePortfolio.portfolioTitle + stylePortfolio.portfolioTitleSpanBefore}>{infoWebSite[0].header.titleContent}</h2>
      <div className={stylePortfolio.btnRepository}>
        <GitHubLogoIcon className={stylePortfolio.faGithubicon} />
        <span>REPOSITÓRIO</span>
      </div>
    </div>
    <h2 className={stylePortfolio.portfolioTextTitle}>{infoWebSite[0].header.subTitle}</h2>
  </>

)