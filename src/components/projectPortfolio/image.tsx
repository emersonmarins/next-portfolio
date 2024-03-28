import { stylePortfolio } from "./styelObject";
import { infoWebSite } from "./db/db";
import Image from "next/image";
import Porcellann from "/public/assets/app/imageApps/porcelan.png"

export const ImageContent = () => (
  <div className={stylePortfolio.wrapImg} style={{ animation: "1s ease-in-out 0s 1 normal both running scaleMouseEnter" }}>
    <div className={stylePortfolio.portfolioImage+' max-sm:h-[calc(100vw_/_2)]'}>
      <Image
        src={Porcellann}
        height={5000}
        width={2000}
        alt="image Web Site"
        className={stylePortfolio.portfolioImageImg+' max-sm:object-cover overflow-hidden max-sm:object-top'}
      />
    </div>
  </div>
);