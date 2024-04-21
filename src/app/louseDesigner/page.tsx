import { LouseSoftDesigner } from "../../components/louseDesigner/db/db";
import { stylePresentation } from "./style";
import Imports from "./imports";

function louseDesigner() {
  return (
    <div className="relative z-10">
      <div className="">
        <Imports.Header />
        <div className="bg-primary-linear-light">
          <main className={stylePresentation.main}>
            <Imports.Aside text="Visão Geral" />
            <section className="w-3/4 max-md:w-full m-auto max-md:px-2 max-sm:px-0 flex flex-wrap gap-7 justify-start content-start">
              {LouseSoftDesigner[0].body.map((element, index) => (<Imports.Card title={element.title} text={element.text} index={index} url={element.url} key={index} />))}
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default louseDesigner