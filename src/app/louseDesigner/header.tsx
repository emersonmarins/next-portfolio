import { stylePresentation } from "./style";
import { LouseSoftDesigner } from "../../components/louseDesigner/db/db";

export const Header = () => (
  <div className="bg-tertiary-dark-linear w-full">

    <header className={stylePresentation.header + "max-w-screen-2xl"}>

      <div className={stylePresentation.headerContentInfo}>
        <h1 className={stylePresentation.headerTitle}>
          {LouseSoftDesigner[0].header.name}
        </h1>
        <span className={stylePresentation.headerText01}>
          {LouseSoftDesigner[0].header.subTitle}
        </span>
        <span className={stylePresentation.headerText02}>
          {LouseSoftDesigner[0].header.purpose}
        </span>
      </div>
      <div className={stylePresentation.lineVertical}>&nbsp;</div>
      <div className={stylePresentation.contentVideo} >
        <video width="320" height="auto" autoPlay muted loop preload="none" playsInline
          className={stylePresentation.video}>
          <source src="/assets/app/louseDesigner/videos/louse-design.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

    </header>
  </div>

);