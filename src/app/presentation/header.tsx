import { stylePresentation } from "./style";
import { infoWebSite } from "../../components/projectPortfolio/db/db";

export const Header = () => (
  <header className={stylePresentation.header}>
    <div className={stylePresentation.headerContentInfo}>
      <h1 className={stylePresentation.headerTitle}>
        {infoWebSite[0].header.name}
      </h1>
      <span className={stylePresentation.headerText01}>
        {infoWebSite[0].header.subTitle}
      </span>
      <span className={stylePresentation.headerText02}>
        {infoWebSite[0].header.purpose}
      </span>
    </div>
    <div className={stylePresentation.lineVertical}>&nbsp;</div>
    <div className={stylePresentation.contentVideo} >
      <video width="320" height="auto" autoPlay muted loop preload="none" playsInline
        className={stylePresentation.video}>
        <source src="/assets/app/porcellan/videos/porcelann-horizontal-02.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </header>
);