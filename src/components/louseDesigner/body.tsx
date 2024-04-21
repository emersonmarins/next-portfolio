import { LouseSoftDesigner } from "./db/db";
import { stylePortfolio } from "./styelObject";

export const BodyContent = () => (
  <ul className="flex flex-col gap-10 h-[270px] mt-10 px-2">
    {LouseSoftDesigner[0].body.map((element, index) => (
      <li key={index}>
        <h3 className={stylePortfolio.portfolioTextSubTitle}>{element.title}</h3>
        <p className={stylePortfolio.portfolioText}>{element.text}</p>
      </li>
    ))}
  </ul>
);