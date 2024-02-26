import { stylePortfolio } from "./styelObject";
import { infoWebSite } from "./db/db";

export const ButtonContainer = () => (
  <>
    <div className={stylePortfolio.portfolioBtnContainer}>
      <a className={stylePortfolio.btn} href={infoWebSite[0].links.saibaMais}>Saiba mais</a>
      <a className={stylePortfolio.btn} href={infoWebSite[0].links.urlWebSite} target="_blank">Ir para o site</a>
    </div>
  </>
);