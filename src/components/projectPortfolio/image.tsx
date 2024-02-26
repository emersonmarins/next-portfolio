import { stylePortfolio } from "./styelObject";
import { infoWebSite } from "./db/db";
import Image from "next/image";
import Porcellann from "/public/assets/app/imageApps/porcelan.png"

export const ImageContent = () => (
  <div className={stylePortfolio.wrapImg} style={{ animation: "1s ease-in-out 0s 1 normal both running scaleMouseEnter" }}>
    <div className={stylePortfolio.portfolioImage}>
      <Image
        src={Porcellann}
        height={3000}
        width={900}
        alt="image Web Site"
        className={stylePortfolio.portfolioImageImg}
      />
    </div>
  </div>
);